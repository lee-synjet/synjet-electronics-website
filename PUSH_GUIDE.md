# 🚀 GitHub 推送指南

## ✅ 已完成的准备工作

1. ✅ Git 仓库已初始化
2. ✅ 所有代码已提交（5个提交记录）
3. ✅ 远程仓库已配置：`https://github.com/lee-synjet/synjet-electronics-website`

## 🔐 推送代码到 GitHub

由于需要 GitHub 认证，请在你的本地终端执行以下命令：

### 方法一：使用 SSH（推荐）

如果你已配置 SSH Key：

```bash
cd /workspace/projects
git remote set-url origin git@github.com:lee-synjet/synjet-electronics-website.git
git push -u origin main
```

### 方法二：使用 HTTPS + Personal Access Token

1. **创建 GitHub Token**：
   - 访问 https://github.com/settings/tokens
   - 点击 "Generate new token (classic)"
   - 勾选 `repo` 权限
   - 生成并复制 token

2. **推送代码**：
```bash
cd /workspace/projects
git remote set-url origin https://<TOKEN>@github.com/lee-synjet/synjet-electronics-website.git
git push -u origin main
```

### 方法三：使用 GitHub CLI

如果你已安装 `gh` 命令行工具：

```bash
cd /workspace/projects
gh auth login
git push -u origin main
```

## 📦 当前代码包

如果无法直接推送，你也可以：

1. 下载项目压缩包：
   ```bash
   cd /workspace/projects
   tar -czf synjet-website.tar.gz --exclude=node_modules --exclude=.next .
   ```

2. 在 GitHub 网页端上传文件

## 🎯 推送后验证

推送成功后，访问以下地址查看你的网站代码：

**仓库地址**: https://github.com/lee-synjet/synjet-electronics-website

## 📝 提交记录

```
88e3091 docs: add GitHub deployment guide and script
509de0e fix: update SynJet logos to use blue color scheme
63f4080 feat: add SynJet brand identity and logo designs
cf23260 feat: create SynJet electromagnetic sensors official website
2dcc650 Initial commit
```

## 🌐 启用 GitHub Pages

推送成功后，按以下步骤启用静态网站：

1. 进入仓库 Settings > Pages
2. Source 选择 "GitHub Actions"
3. 创建 `.github/workflows/deploy.yml` 文件（见下方）

### 自动部署配置文件

创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build static site
        run: pnpm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
          
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

**注意**: 还需要在 `next.config.ts` 中添加 `output: 'export'` 以启用静态导出。

## ✨ 完成！

推送成功后，你的网站将可通过以下地址访问：

```
https://lee-synjet.github.io/synjet-electronics-website/
```

如需使用自定义域名 `synjet-electronics.com`，请在 GitHub Pages 设置中配置。
