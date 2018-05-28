import Vue from 'vue'
import App from '@/App.vue'
import plugin from '@/plugin'
import Ads from 'vue-google-adsense'

// add polyfill for IntersectionObserver
require('intersection-observer')
// use plugin
Vue.use(plugin);

Vue.use(require('vue-script2'))

Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

new Vue({
  el: '#app',
  render: h => h(App)
})
