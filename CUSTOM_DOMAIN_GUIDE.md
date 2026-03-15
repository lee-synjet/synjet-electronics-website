# 🌐 自定义域名配置指南

## 📋 配置步骤

### 步骤 1: 配置 DNS 记录

在你的域名服务商（购买 synjet-electronics.com 的地方）添加以下 DNS 记录：

#### 选项 A：使用 CNAME（推荐）

```
类型: CNAME
名称: www
值: lee-synjet.github.io
TTL: 600（或默认）
```

#### 选项 B：使用 A 记录（用于根域名）

```
类型: A
名称: @
值: 185.199.108.153
TTL: 600

类型: A
名称: @
值: 185.199.109.153
TTL: 600

类型: A
名称: @
值: 185.199.110.153
TTL: 600

类型: A
名称: @
值: 185.199.111.153
TTL: 600
```

### 步骤 2: 在 GitHub 配置自定义域名

1. 访问：https://github.com/lee-synjet/synjet-electronics-website/settings/pages
2. 在 **Custom domain** 输入框中填写：`synjet-electronics.com`
3. 点击 **Save**
4. 等待 DNS 验证（显示绿色 ✓）
5. 勾选 **Enforce HTTPS**

### 步骤 3: 等待 DNS 传播

- DNS 配置通常需要几分钟到几小时生效
- 可以使用以下工具检查 DNS 是否生效：
  - https://dnschecker.org/
  - 在终端运行：`nslookup synjet-electronics.com`

## 📝 常见域名服务商配置

### 阿里云（万网）
1. 登录阿里云控制台
2. 进入域名 > 域名列表 > 解析设置
3. 添加记录：
   - 记录类型：CNAME
   - 主机记录：www
   - 记录值：lee-synjet.github.io

### 腾讯云 DNSPod
1. 登录 DNSPod 控制台
2. 选择域名 > 添加记录
3. 填写：
   - 主机记录：www
   - 记录类型：CNAME
   - 记录值：lee-synjet.github.io

### Cloudflare
1. 登录 Cloudflare
2. 选择域名 > DNS > Records
3. Add Record：
   - Type: CNAME
   - Name: www
   - Target: lee-synjet.github.io

### GoDaddy
1. 登录 GoDaddy
2. My Products > DNS
3. Add Record：
   - Type: CNAME
   - Name: www
   - Value: lee-synjet.github.io

## ⚠️ 注意事项

1. **CNAME vs A 记录**
   - CNAME 只能用于子域名（如 www.synjet-electronics.com）
   - A 记录用于根域名（synjet-electronics.com）
   - GitHub Pages 建议使用 CNAME 指向 `lee-synjet.github.io`

2. **DNS 传播时间**
   - 通常 5-30 分钟
   - 最长可能需要 48 小时
   - 可以用 `nslookup` 或在线工具检查

3. **HTTPS 证书**
   - DNS 验证通过后，GitHub 会自动配置 HTTPS
   - 建议勾选 "Enforce HTTPS" 强制使用 HTTPS

## 🔍 验证 DNS 配置

### 方法 1：使用 nslookup
```bash
nslookup synjet-electronics.com
# 或
nslookup www.synjet-electronics.com
```

### 方法 2：使用 dig
```bash
dig synjet-electronics.com
# 或
dig www.synjet-electronics.com
```

### 方法 3：在线工具
访问：https://dnschecker.org/
输入：synjet-electronics.com

## ✅ 配置完成后的访问地址

配置成功后，你的网站可以通过以下地址访问：

1. **自定义域名**：https://synjet-electronics.com
2. **www 子域名**：https://www.synjet-electronics.com
3. **GitHub Pages 默认地址**：https://lee-synjet.github.io/synjet-electronics-website/ （仍可访问）

## 🆘 故障排除

### 问题 1：DNS 未生效
- 等待更长时间（DNS 传播需要时间）
- 清除 DNS 缓存：`sudo flushdns`（macOS）或 `ipconfig /flushdns`（Windows）

### 问题 2：GitHub 显示 DNS 错误
- 检查 DNS 记录是否正确
- 确保 CNAME 指向 `lee-synjet.github.io`（不是 lee-synjet.github.io/synjet-electronics-website）

### 问题 3：HTTPS 证书错误
- 等待 GitHub 自动配置证书
- 确保 DNS 已验证通过
- 尝试取消勾选 "Enforce HTTPS"，等待几分钟后再勾选

---

**下一步**：在域名服务商配置 DNS 后，我会帮你创建 CNAME 文件并推送到 GitHub。
