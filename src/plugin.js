import lazyImageObserver from '@/lazyObserver'

const plugin = {
  install: Vue => {
    Vue.directive('lazyload', {
      bind(el) {
        if ("IntersectionObserver" in window) {
          lazyImageObserver.observe(el);
        } else {
          // Possibly fall back to a more compatible method here
        }
      }
    })
  }
}

export default plugin
