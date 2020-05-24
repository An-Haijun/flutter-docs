const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  base: '/flutter-docs/',
  dest: 'dist',
  port: 3100,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Flutter 应用开发文档',
      description: 'Flutter Dart 应用开发文档'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  theme: '@vuepress/vue',
  themeConfig: {
    repo: 'An-Haijun/flutter-docs',
    editLinks: true,
    docsDir: 'packages/docs/docs',
    smoothScroll: true,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/flutter/': getFlutter('Flutter'),
          '/dart/': getFlutter('Dart'),
        }
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/flutter/': getFlutter('Flutter'),
          '/dart/': getDart('Dart'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>'
    }],
    ['flowchart']
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
})

function getFlutter (groupA = '', groupB = '') {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'directory-structure',
        'basic-config'
      ]
    }
  ]
}

function getDart (groupA = '', groupB = '') {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        ''
      ]
    }
  ]
}
