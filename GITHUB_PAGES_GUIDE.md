# 🌐 GitHub Pages 配置指南

## ✅ 已完成的配置

我已经为你完成了以下配置：

### 1. Next.js 静态导出配置
- ✅ `output: 'export'` - 启用静态导出
- ✅ `basePath: '/synjet-electronics-website'` - GitHub Pages 路径
- ✅ `images.unoptimized: true` - 禁用图片优化

### 2. GitHub Actions 自动部署
- ✅ 创建 `.github/workflows/deploy.yml`
- ✅ 自动构建和部署到 GitHub Pages

## 📤 推送配置到 GitHub

在你的本地终端执行：

```bash
cd /workspace/projects
git push
```

## 🚀 启用 GitHub Pages（推送后操作）

### 步骤 1: 启用 GitHub Pages

1. 访问你的仓库：https://github.com/lee-synjet/synjet-electronics-website
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 "GitHub Actions"（不是 Deploy from a branch）
5. 保存

### 步骤 2: 触发部署

推送代码后，GitHub Actions 会自动开始构建和部署：

1. 访问 https://github.com/lee-synjet/synjet-electronics-website/actions
2. 查看工作流运行状态
3. 等待构建完成（约 2-3 分钟）

### 步骤 3: 访问你的网站

部署成功后，你的网站将在以下地址可访问：

```
https://lee-synjet.github.io/synjet-electronics-website/
```

## 🔄 更新网站

每次推送到 `main` 分支，GitHub Actions 会自动重新构建和部署：

```bash
# 修改代码后
git add .
git commit -m "update: 你的更新内容"
git push
```

## 🌍 配置自定义域名（可选）

如果你想使用 `synjet-electronics.com`：

### 步骤 1: 配置 DNS

在你的域名服务商添加 CNAME 记录：

```
类型: CNAME
名称: www (或 @)
值: lee-synjet.github.io
```

### 步骤 2: 在 GitHub 配置

1. 仓库 Settings > Pages > Custom domain
2. 输入：`synjet-electronics.com`
3. 勾选 "Enforce HTTPS"

### 步骤 3: 修改配置

如果使用自定义域名，需要修改 `next.config.ts`：

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  // basePath: '/synjet-electronics-website', // 使用自定义域名时注释掉
  // ...
};
```

然后推送更新。

## ⚠️ 注意事项

1. **首次部署**：可能需要等待几分钟
2. **缓存问题**：如果看不到更新，尝试清除浏览器缓存
3. **404 错误**：确保 GitHub Pages 已启用且工作流成功运行

## 📊 查看部署状态

- **Actions**: https://github.com/lee-synjet/synjet-electronics-website/actions
- **Pages 设置**: https://github.com/lee-synjet/synjet-electronics-website/settings/pages

## ✨ 完成！

推送配置后，你的 SynJet 官网将自动部署到 GitHub Pages！

---

**推送命令**：
```bash
cd /workspace/projects && git push
```

**访问地址**：https://lee-synjet.github.io/synjet-electronics-website/
