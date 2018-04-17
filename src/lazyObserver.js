let lazyImageObserver = null

const _V_LOADING = 'v-lazy-loading'
const _V_LOADED = 'v-lazy-loaded'
const _V_ERROR = 'v-lazy-error'

const clearDataSrc = (lazyImage, stateClass) => {
  lazyImage.classList.remove(_V_LOADING)
  lazyImage.classList.add(stateClass)

  lazyImage.removeAttribute('data-src')
  lazyImage.removeAttribute('data-err')
}

if ("IntersectionObserver" in window) {
  lazyImageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        lazyImage.classList.add(_V_LOADING)

        const dataSrc = lazyImage.dataset.src;
        const dataErr = lazyImage.dataset.err;

        var newImage = new Image()
        newImage.src = dataSrc

        newImage.onerror = function(){
          lazyImage.src = dataErr
          clearDataSrc(lazyImage, _V_ERROR)
        }

        newImage.onload = function(){
          lazyImage.src = dataSrc
          clearDataSrc(lazyImage, _V_LOADED)
        }

        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });
}

export default lazyImageObserver
