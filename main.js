webpackJsonp([0],{"0bKo":function(a,t,e){"use strict";var s=e("vmzl"),n=null,i=function(a,t){a.classList.add(t),a.removeAttribute("data-src"),a.removeAttribute("data-err")};"IntersectionObserver"in window&&(n=new IntersectionObserver(function(a,t){a.forEach(function(a){if(a.isIntersecting){var t=a.target;t.classList.add(s.a._V_LOADING);var e=t.dataset.src,o=t.dataset.err,r=new Image;r.src=e,r.onload=function(){t.classList.remove(s.a._V_LOADING),e&&(t.src=e,i(t,s.a._V_LOADED))},r.onerror=function(){t.classList.remove(s.a._V_LOADING),o&&(t.src=o,i(t,s.a._V_ERROR))},n.unobserve(t)}})})),t.a=n},"30p7":function(a,t,e){"use strict";function s(a){e("S8GX")}var n=e("Rf4r"),i=e("9lUy"),o=e("xRi5"),r=s,l=Object(o.a)(n.a,i.a,i.b,!1,r,null,null);t.a=l.exports},"4dXX":function(a,t,e){"use strict";var s=e("0bKo"),n=e("vmzl"),i={install:function(a){a.directive("lazyload",{bind:function(a){"IntersectionObserver"in window&&s.a.observe(a)},componentUpdated:function(a){"IntersectionObserver"in window&&a.classList.contains(n.a._V_LOADED)&&s.a.observe(a)}})}};t.a=i},"9lUy":function(a,t,e){"use strict";e.d(t,"a",function(){return s}),e.d(t,"b",function(){return n});var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",{staticClass:"header header-dummy"},[a._m(0),a._v(" "),e("div",[e("a",{attrs:{href:"https://github.com/mazipan/vue-tiny-lazyload-img",target:"_blank",rel:"noopener",alt:"Github Link"}},[e("svg",{staticClass:"ic",attrs:{viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])])])]),a._v(" "),e("main",{staticClass:"content"},[e("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}}),a._v(" "),e("button",{staticClass:"btn",on:{click:a.openModal}},[a._v("Open Modal Box!")]),a._v(" "),a.modalShow?e("div",{staticClass:"modal",on:{click:a.hideModal}},[e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+a.indexShow,"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})]):a._e(),a._v(" "),a._l(a.images,function(a){return e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:"lazy1-"+a,staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+a,"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})}),a._v(" "),e("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}}),a._v(" "),e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"/vue-tiny-lazyload-img/assets/logo-404.png","data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}}),a._v(" "),e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"/vue-tiny-lazyload-img/assets/logo-404.png","data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}}),a._v(" "),a._l(a.images,function(a){return e("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:"lazy2-"+a,staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+(a+21),"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})}),a._v(" "),e("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}})],2),a._v(" "),e("footer",{staticClass:"footer"},[a._v("\n    Copyright © 2018 by Irfan Maulana\n  ")])])},n=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{attrs:{href:"/vue-tiny-lazyload-img/",alt:"Home"}},[e("h1",[a._v("Vue Tiny Lazyload Img")])])}]},Rf4r:function(a,t,e){"use strict";t.a={name:"app",data:function(){return{modalShow:!1,indexShow:40,images:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}},methods:{openModal:function(){this.modalShow=!this.modalShow,this.modalShow&&(1===this.indexShow?this.indexShow=40:this.indexShow--)},hideModal:function(){this.modalShow=!1}}}},S8GX:function(a,t){},eitI:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("fAfE"),n=e("30p7"),i=e("4dXX"),o=e("Wg2Z"),r=e.n(o);e("GkNt"),s.a.use(i.a),s.a.use(e("MWJZ")),s.a.use(r.a.Adsense),s.a.use(r.a.InArticleAdsense),s.a.use(r.a.InFeedAdsense),new s.a({el:"#app",render:function(a){return a(n.a)}})},vmzl:function(a,t,e){"use strict";t.a={_V_LOADING:"v-lazy-loading",_V_LOADED:"v-lazy-loaded",_V_ERROR:"v-lazy-error"}}},["eitI"]);
//# sourceMappingURL=main.js.map