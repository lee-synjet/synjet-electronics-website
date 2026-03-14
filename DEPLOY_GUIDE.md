# SynJet Electronics 官网 - GitHub 部署指南

## 📋 当前状态

✅ Git 仓库已初始化
✅ 代码已提交（4个提交记录）
✅ .gitignore 已配置

## 🚀 部署到 GitHub 步骤

### 步骤 1: 在 GitHub 创建新仓库

1. 访问 [GitHub](https://github.com/new)
2. 填写仓库信息：
   - **Repository name**: `synjet-electronics-website`
   - **Description**: SynJet Electronics Official Website - Advanced Electromagnetic Sensors
   - **可见性**: 选择 Public（公开）或 Private（私有）
   - ⚠️ **不要**勾选 "Add a README file"、"Add .gitignore" 或 "Choose a license"（因为本地已有这些文件）
3. 点击 "Create repository"

### 步骤 2: 添加远程仓库并推送

创建仓库后，GitHub 会显示推送命令。复制你的仓库 URL，然后执行：

```bash
# 添加远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/synjet-electronics-website.git

# 推送代码到 GitHub
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages（静态站点部署）

由于这是 Next.js 项目，需要构建为静态站点才能使用 GitHub Pages：

#### 3.1 修改 next.config.ts

```typescript
const nextConfig: NextConfig = {
  output: 'export', // 添加这一行以启用静态导出
  // ... 其他配置
};
```

#### 3.2 构建静态站点

```bash
# 安装依赖
pnpm install

# 构建静态站点
pnpm run build
```

#### 3.3 推送到 gh-pages 分支

```bash
# 将 out 目录的内容推送到 gh-pages 分支
git add out/
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

#### 3.4 配置 GitHub Pages

1. 进入仓库的 "Settings" 页面
2. 在左侧菜单找到 "Pages"
3. Source 选择 "Deploy from a branch"
4. Branch 选择 "gh-pages" 分支，文件夹选择 "/ (root)"
5. 点击 "Save"

几分钟后，你的网站将在以下地址可用：
```
https://YOUR_USERNAME.github.io/synjet-electronics-website/
```

## 🔧 自动化部署（推荐）

创建 `.github/workflows/deploy.yml` 文件以实现自动部署：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## 📝 当前 Git 提交记录

```
509de0e fix: update SynJet logos to use blue color scheme
63f4080 feat: add SynJet brand identity and logo designs
cf23260 feat: create SynJet electromagnetic sensors official website
2dcc650 Initial commit
```

## ⚠️ 注意事项

1. **图片域名配置**: 确保在 next.config.ts 中配置了图片域名白名单
2. **环境变量**: 如有敏感信息，请在 GitHub 仓库的 Settings > Secrets 中配置
3. **自定义域名**: 如需使用 synjet-electronics.com，请在 GitHub Pages 设置中配置自定义域名

## 🎯 快速命令总结

```bash
# 查看当前状态
git status

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/synjet-electronics-website.git

# 推送代码
git push -u origin main

# 后续更新推送
git add .
git commit -m "你的提交信息"
git push
```

---

**官方网站**: synjet-electronics.com  
**技术栈**: Next.js 16 + React 19 + TypeScript + Tailwind CSS
