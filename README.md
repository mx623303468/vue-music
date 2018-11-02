# vue-music

> 音乐播放器

## 增加依赖项
  除了 vue-cli 生成的所有依赖外，新增了以下几项依赖

    - dependencies
      - fastclick 解决移动端点击事件300毫秒延迟
      - babel-runtine 对 ES6 的语法转译

    - devDependencies
      - babel-polyfill 对 ES6 的一些 API 的转译
      - stylus CSS预编译的支持
      - stylus-loader CSS预编译的支持
  
  安装完成后，在 main.js 文件中引入这些依赖。
    - import 'babel-polyfill'
    - import fastclick from 'fastclick'
      - fastclick.attach(document.body)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
