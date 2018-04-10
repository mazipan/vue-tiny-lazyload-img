let lazyImageObserver = null
if ("IntersectionObserver" in window) {
  lazyImageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target

        let dataSrc = lazyImage.dataset.src;
        let dataErr = lazyImage.dataset.err;

        var newImage = new Image()
        newImage.src = dataSrc;
        newImage.onerror = function(){
          lazyImage.src = dataErr
        }

        newImage.onload = function(){
          lazyImage.src = dataSrc
        }

        lazyImageObserver.unobserve(lazyImage);
      }
    });
  });
}

export default lazyImageObserver
