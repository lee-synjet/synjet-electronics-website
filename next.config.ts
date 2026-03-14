import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export', // 启用静态导出
  basePath: '/synjet-electronics-website', // GitHub Pages 项目路径
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  /* config options here */
  allowedDevOrigins: ['*.dev.coze.site'],
  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lf-coze-web-cdn.coze.cn',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coze-coding-project.tos.coze.site',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
