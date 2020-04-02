import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  hash: true,
  runtimePublicPath: true,
  outputPath: '../public/',
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '../public/',
  },
});
