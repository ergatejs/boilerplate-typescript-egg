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

    // @ant-design/pro-layout
    navTheme: 'light',
    primaryColor: '#1890ff',
    layout: 'topmenu',
    contentWidth: 'Fixed',
    fixedHeader: false,
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
      exact: true,
      title: 'site.index',
      icon: 'home',
      access: 'canReadIndex',
      component: '@/page/index',
      menu: {
        name: 'index',
      },
      layout: {
        hideMenu: false,
        hideNav: false,
      },
    },
    {
      path: '/info',
      exact: true,
      title: 'site.info',
      icon: 'setting',
      access: 'canReadInfo',
      component: '@/page/info',
      menu: {
        name: 'info',
      },
      layout: {
        hideNav: false,
        hideMenu: false,
      },
    },
    {
      path: '/login',
      exact: true,
      title: 'site.login',
      component: '@/page/login',
      layout: {
        hideMenu: false,
        hideNav: false,
      },
    },
  ],
});
