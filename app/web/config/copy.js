import path from 'path';
import { defineConfig } from 'umi';
import theme from './theme'

export default defineConfig({
  alias: {
    '@': path.resolve(__dirname, '../../web'),
    components: path.resolve(__dirname, '../../web/components'),
    utils:  path.resolve(__dirname, '../../web/utils'),
  },
  // devtool: 'eval',
  dynamicImport: {
    loading: 'components/Loading',
  },
  // devServer: {
  //   port: 5000,
  //   host: '127.0.0.1'
  // },
  // 预渲染 html 静态文件
  // exportStatic: { },
  favicon: '../../public/favicon.svg',
  // 静态文件名添加hash
  hash: true,
  ignoreMomentLocale: false,
  manifest: {
    fileName: path.resolve(__dirname, '..', '/public/manifest.json'),
    // 为 ''，不然会有两个 /
    publicPath: '',
  },
  metas:[
    {
      name: 'keywords',
      content: '图片集市，简苏科技'
    },
    {
      name: 'description',
      content: '免费图片集市'
    },
  ],
  publicPath: 'http://localhost:8000/',
  outputPath: '../public',
  routes: [
    {
      path: `/`,
      component: '@/layouts',
      routes: [
        { exact: true, path: '/', component: '@/pages/Home', title: '图片集市-首页' },
        { exact: true, path: '/about', component: '@/pages/About', title: '图片集市-关于' },
        { path: '*', component: '@/pages/404' },
      ]
    },
  ],
  ssr: {
    devServerRender: true,
  },
  targets: {
    ie: 11,
  },
  theme,
  title: false,
});
