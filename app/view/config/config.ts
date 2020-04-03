import { defineConfig } from 'umi';

export default defineConfig({
  // base
  hash: true,
  singular: true,
  runtimePublicPath: true,
  outputPath: '../public/',
  manifest: {
    fileName: '../../config/manifest.json',
    publicPath: '../public/',
  },

  // preset
  dva: {
    immer: true,
  },

  layout: {
    name: 'Ergate.js',
    logo: null,
    locale: true,
    theme: 'pro',
  },

  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },

  antd: {
    dark: false,
  },

  // project
  title: 'site.title',

  routes: [
    { path: '/', component: '@/page/index', title: 'site.title' },
  ],
});
