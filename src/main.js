import Vue from 'vue'
import App from '@/App.vue'
import plugin from '@/plugin'

// add polyfill for IntersectionObserver
require('intersection-observer')
// use plugin
Vue.use(plugin);

new Vue({
  el: '#app',
  render: h => h(App)
})
