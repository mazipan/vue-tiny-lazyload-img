let lazyImageObserver = null

import constant from './constant'

const clearDataSrc = (lazyImage, stateClass) => {
  lazyImage.classList.add(stateClass)

  lazyImage.removeAttribute('data-src')
  lazyImage.removeAttribute('data-err')
}

if ("IntersectionObserver" in window) {
  lazyImageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        lazyImage.classList.add(constant._V_LOADING)

        const dataSrc = lazyImage.dataset.src;
        const dataErr = lazyImage.dataset.err;

        var newImage = new Image()
        newImage.src = dataSrc
        // when success
        newImage.onload = function(){
          lazyImage.classList.remove(constant._V_LOADING)

          if (dataSrc) {
            lazyImage.src = dataSrc
            clearDataSrc(lazyImage, constant._V_LOADED)
          }
        }
        // when error
        newImage.onerror = function(){
          lazyImage.classList.remove(constant._V_LOADING)

          if (dataErr) {
            lazyImage.src = dataErr
            clearDataSrc(lazyImage, constant._V_ERROR)
          }
        }

        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });
}

export default lazyImageObserver
