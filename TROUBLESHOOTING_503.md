# 🌐 GitHub Pages 503 错误解决方案

## ⚠️ 问题原因

503 错误通常由以下原因导致：

1. **GitHub Pages 未正确启用**
2. **自定义域名 DNS 未正确配置**
3. **GitHub Actions 构建失败**

## ✅ 解决步骤

### 步骤 1: 检查 GitHub Actions 构建状态

1. 访问：https://github.com/lee-synjet/synjet-electronics-website/actions
2. 查看最新的工作流是否成功完成（绿色 ✓）
3. 如果失败，查看错误日志

### 步骤 2: 正确启用 GitHub Pages

1. 访问：https://github.com/lee-synjet/synjet-electronics-website/settings/pages
2. **Build and deployment** > **Source** 选择：
   - ✅ **GitHub Actions**（推荐）
   - 或 **Deploy from a branch** > **gh-pages** 分支
3. 保存设置

### 步骤 3: 选择访问方式

#### 方案 A：使用 GitHub Pages 默认地址（推荐先测试）

1. **确保不使用自定义域名**：
   - Settings > Pages > Custom domain 留空
   - 不要创建 CNAME 文件

2. **访问地址**：
   ```
   https://lee-synjet.github.io/synjet-electronics-website/
   ```

#### 方案 B：使用自定义域名（需要 DNS 配置）

1. **配置 DNS**（在你的域名服务商）：
   ```
   类型: CNAME
   名称: @ (或 www)
   值: lee-synjet.github.io
   ```

2. **在 GitHub 配置**：
   - Settings > Pages > Custom domain
   - 输入：`synjet-electronics.com`
   - 等待 DNS 验证通过
   - 勾选 "Enforce HTTPS"

3. **创建 CNAME 文件**：
   ```bash
   echo "synjet-electronics.com" > CNAME
   git add CNAME
   git commit -m "feat: configure custom domain"
   git push
   ```

## 🔍 快速诊断

### 检查 1: 构建是否成功
```bash
# 访问 Actions 页面查看最新构建状态
https://github.com/lee-synjet/synjet-electronics-website/actions
```

### 检查 2: GitHub Pages 是否启用
```bash
# 访问 Pages 设置
https://github.com/lee-synjet/synjet-electronics-website/settings/pages
```

### 检查 3: 测试默认地址
```bash
curl -I https://lee-synjet.github.io/synjet-electronics-website/
```

## 🚀 推荐流程

### 阶段 1: 先用默认地址测试

1. **移除 CNAME 文件**（如果存在）
2. **确保 GitHub Pages 启用**
3. **访问默认地址测试**
4. **确认网站正常显示**

### 阶段 2: 配置自定义域名

1. **配置 DNS 记录**
2. **在 GitHub 添加自定义域名**
3. **等待 DNS 传播**（可能需要几分钟到几小时）
4. **启用 HTTPS**

## ⚡ 快速修复命令

如果你想先使用 GitHub Pages 默认地址：

```bash
cd /workspace/projects

# 确保 CNAME 文件不存在
rm -f CNAME

# 提交更改
git add -A
git commit -m "fix: remove CNAME to use default GitHub Pages URL"
git push
```

## 📋 检查清单

- [ ] GitHub Actions 构建成功（绿色 ✓）
- [ ] GitHub Pages 已启用
- [ ] Source 设置为 GitHub Actions
- [ ] （可选）自定义域名 DNS 已配置
- [ ] （可选）GitHub Pages 中已验证域名

## 🆘 如果仍然 503

1. **等待几分钟**：GitHub Pages 有时需要时间更新
2. **清除浏览器缓存**：Ctrl+Shift+R 强制刷新
3. **检查 GitHub Status**：https://www.githubstatus.com/
4. **查看 GitHub Pages 文档**：https://docs.github.com/en/pages

---

**当前建议**：先用 GitHub Pages 默认地址测试，确认网站正常后再配置自定义域名。
