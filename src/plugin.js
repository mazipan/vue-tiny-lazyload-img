import lazyImageObserver from '@/lazyObserver'

const plugin = {
  install: Vue => {
    Vue.directive('lazyload', {
      bind(el) {
        let src = el.getAttribute('src')
        let dataSrc = el.getAttribute('data-src')
        let dataErr = el.getAttribute('data-err')

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
