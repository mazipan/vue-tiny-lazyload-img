import lazyImageObserver from '@/lazyObserver'
import constant from './constant'

const plugin = {
  install: Vue => {
    Vue.directive('lazyload', {
      bind(el) {
        if ("IntersectionObserver" in window) {
          lazyImageObserver.observe(el);
        }
      },
      componentUpdated(el) {
        // when image changed
        // expecting has been loaded image before
        if ("IntersectionObserver" in window) {
          if (el.classList.contains(constant._V_LOADED)) {
            lazyImageObserver.observe(el)
          }
        }
      }
    })
  }
}

export default plugin
