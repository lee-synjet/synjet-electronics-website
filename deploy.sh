#!/bin/bash

# SynJet Electronics Website - GitHub 部署脚本
# 使用方法: ./deploy.sh YOUR_GITHUB_USERNAME

set -e

# 检查参数
if [ -z "$1" ]; then
    echo "❌ 错误: 请提供 GitHub 用户名"
    echo "使用方法: ./deploy.sh YOUR_GITHUB_USERNAME"
    exit 1
fi

USERNAME=$1
REPO_NAME="synjet-electronics-website"
REPO_URL="https://github.com/${USERNAME}/${REPO_NAME}.git"

echo "🚀 准备部署到 GitHub..."
echo "📦 仓库地址: ${REPO_URL}"

# 检查是否已配置远程仓库
if git remote | grep -q "origin"; then
    echo "🔄 更新远程仓库地址..."
    git remote set-url origin ${REPO_URL}
else
    echo "➕ 添加远程仓库..."
    git remote add origin ${REPO_URL}
fi

# 显示当前状态
echo ""
echo "📊 Git 状态:"
git status
echo ""
echo "📝 提交记录:"
git log --oneline -5
echo ""

# 推送代码
echo "⬆️  推送代码到 GitHub..."
git push -u origin main

echo ""
echo "✅ 部署完成！"
echo ""
echo "🔗 后续步骤:"
echo "1. 访问 https://github.com/${USERNAME}/${REPO_NAME}"
echo "2. 在仓库 Settings > Pages 中启用 GitHub Pages"
echo "3. 选择分支和目录进行部署"
echo ""
echo "📖 详细说明请查看 DEPLOY_GUIDE.md 文件"
