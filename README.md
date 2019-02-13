# 🐌 vue-tiny-lazyload-img

> A small size Vue.js directive for lazy loading images using IntersectionObserver API

[![License](https://img.shields.io/github/license/mazipan/vue-tiny-lazyload-img.svg?longCache=true)](https://github.com/mazipan/vue-tiny-lazyload-img) [![version](https://img.shields.io/npm/v/vue-tiny-lazyload-img.svg?maxAge=3600)](https://www.npmjs.com/package/vue-tiny-lazyload-img)
[![downloads](https://img.shields.io/npm/dt/vue-tiny-lazyload-img.svg?maxAge=86400)](https://www.npmjs.com/package/vue-tiny-lazyload-img) ![minified](https://badgen.net/bundlephobia/minzip/vue-tiny-lazyload-img)

## Demo Page

https://mazipan.github.io/vue-tiny-lazyload-img/

## Usage

### Download

```js
npm install vue-tiny-lazyload-img
// OR
yarn add intersection-observer
```

### Install Plugin

```js
import VueTinyLazyloadImg from 'vue-tiny-lazyload-img'
Vue.use(VueTinyLazyloadImg);
```

### HTML Snippet

```html
<img v-lazyload
  src="./assets/logo.png"
  data-src="./assets/logo-success.png"
  data-err="./assets/logo-error.png">
```

## Please Use polyfill

This plugin using `IntersectionObserver`, so please use polyfill if you need support old browser https://github.com/w3c/IntersectionObserver/tree/master/polyfill

```js
$ yarn add intersection-observer

// then add polyfill for IntersectionObserver in your main app
require('intersection-observer')
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production demo with minification
npm run build:demo

# build for plugin distribution file
npm run build:lib
```

## Credit

Based on this awesome article: https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/

---

Copyright © 2018 Built with ❤️ by Irfan Maulana

