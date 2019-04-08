// add polyfill for IntersectionObserver
require('intersection-observer')

import Vue from 'vue'
import App from './App.vue'
import plugin from './vue-tiny-lazyload-img'
import Ads from 'vue-google-adsense'

// use plugin
Vue.use(plugin)

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})
