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
    logo: '/public/logo.svg',
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
    {
      path: '/',
      title: 'site.index',
      component: '@/page/index',
      access: 'canReadIndex',
      menu: {
        icon: 'home',
        name: 'index',
      },
    },
    {
      path: '/info',
      title: 'site.info',
      access: 'canReadInfo',
      component: '@/page/info',
      menu: {
        icon: 'home',
        name: 'info',
      },
      layout: {
        hideNav: false,
      },
    },
  ],
});
