# SynJet 网站图片资源说明

## 📍 存储位置
所有图片都存储在 **对象存储服务（TOS）** 中，通过 CDN URL 直接在网页中使用。

## 🖼️ 图片清单

### 1. Logo 图标

#### 主要 Logo（蓝色 S 图标）
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_6a61ae2f-1062-4e16-a957-4f61f1abcbd8.jpeg
- **用途**: 
  - ✅ 网站 Header Logo
  - ✅ 网站 Footer Logo
  - ✅ Favicon（浏览器标签图标）
  - ✅ Brand Identity 展示

#### App 图标（渐变背景）
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_f079123b-ae9e-4e9e-8c29-d1aeb092480f.jpeg
- **用途**: 
  - ✅ Apple Touch Icon（iOS 设备书签图标）
  - ✅ Brand Identity 展示

#### 其他 Logo 设计方案
- **科技风格**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_74113d01-5272-48a3-9d33-712a62776867.jpeg
- **高端品牌**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_e877ada7-0a93-4ad7-bba7-c58f60a7e748.jpeg

---

### 2. 产品图片

#### SJ-ES100 Proximity Sensor
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_a3afe82d-324d-493b-8b7a-1cbc37f2a6de.jpeg
- **位置**: 产品展示区 - 第一个产品

#### SJ-ES200 Flow Sensor
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_0c97d4b7-2c81-4151-a133-25efe24d5e18.jpeg
- **位置**: 产品展示区 - 第二个产品

#### SJ-ES300 Inductive Sensor
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_7d3227ac-5b66-4283-b561-f79f150887f5.jpeg
- **位置**: 产品展示区 - 第三个产品

#### SJ-ES400 Smart Sensor Module
- **URL**: https://coze-coding-project.tos.coze.site/coze_storage_7616740022158622770/image/generate_image_b768dd55-79b4-4e34-b1e3-539d1ca5ca31.jpeg
- **位置**: 产品展示区 - 第四个产品

---

## 📋 如何使用这些图片

### 在网页中直接使用
所有图片已经集成在网站代码中，通过 Next.js 的 `<Image>` 组件自动优化加载。

### 下载图片
您可以直接访问上述 URL 下载任何图片：
1. 复制图片 URL
2. 在浏览器中打开
3. 右键保存图片

### 更换图片
如需更换图片，可以：
1. 在 `src/app/page.tsx` 文件中找到对应的图片 URL
2. 替换为新的图片 URL
3. 页面会自动更新

---

## 🎨 图片规格

| 类型 | 尺寸 | 格式 | 背景 |
|------|------|------|------|
| Logo | 1024x1024 | JPEG | 白色 |
| 产品图 | 1024x1024 | JPEG | 产品摄影背景 |
| App图标 | 1024x1024 | JPEG | 渐变背景 |

---

## 💡 提示

- 所有图片 URL 都带有签名参数（`?sign=...`），确保安全访问
- 图片已通过 CDN 加速，全球访问速度快
- 如需原始设计文件或矢量格式，可以重新生成 PNG/SVG 格式
