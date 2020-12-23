# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```
## egg 目录结构

```
egg-project
├── package.json
├── app
|   ├── controller
│   ├── extend
│   ├── public
│   ├── view
│   ├── web
│   └── router.js
├── config
|   ├── config.default.js
|   ├── config.local.js
│   ├── config.prod.js
|   ├── config.test.js
|   ├── plugin.js
├── log
├── app.js
├── ...
```

## umi 目录结构

```
umi-project
├── web
|   ├── components
│   ├── config
│   ├── dist
│   ├── layouts
│   ├── locales
│   └── models
│   └── pages
│   └── utils
│   └── app.js umi 运行时配置
│   └── global.less
```

## Q&A

1. umi 配置文件开启 locale 配置，需要添加 locales 目录，不然浏览器会有警告：

```
The current popular language does not exist, please check the locales folder
```

在线 mock 数据平台：https://bird.ioliu.cn/#interface
在线 mock 数据平台：http://jsonplaceholder.typicode.com/

2. webpack-bundle-analyzer

defaultSizes 三个参数的含义：

- stat：是指打包之前的文件大小
- parsed：是指打包之后的文件大小
- gzip：是指通过gzip压缩之后的文件大小

3. 预渲染

针对纯静态内容的页面，开启预渲染模式，这样不需要服务端即时编译HTML，直接输出静态页面给客户端，预渲染不执行js，只适用于纯静态页面


    // "dev": "cross-env COMPRESS=none rm -rf ./app/web/.umi && egg-bin dev --port=7001 --sticky",

    https 和 ssl

