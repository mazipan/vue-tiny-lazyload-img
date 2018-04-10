# 🐌 vue-tiny-lazyload-img

> A small size Vue.js v.2+ directive for lazy loading images

:rocket: Skeleton generated with Vue-CLI using template [vuejs-template-plugin](https://github.com/mazipan/vuejs-template-plugin)

## Please Use polyfill

This plugin using `IntersectionObserver`, so please use polyfill if you need support old browser https://github.com/w3c/IntersectionObserver/tree/master/polyfill

## Usage

### Install Plugin

```js
import tinyLazyLoad from 'vue-tiny-lazyload-img'
Vue.use(tinyLazyLoad);
```

### HTML Snippet

```html
<img v-lazyload
     src="./assets/logo.png"
     data-src="./assets/logo-success.png"
     data-err="./assets/logo-error.png">
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production demo with minification
npm run build

# build for plugin distribution file
npm run pack

# run build and pack
npm run dist
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Credit

Based on this awesome article: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/


Copyright © 2018 Built with ❤️ by Irfan Maulana

