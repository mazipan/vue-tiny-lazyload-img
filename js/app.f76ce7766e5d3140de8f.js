!function(e){function n(n){for(var t,i,s=n[0],l=n[1],d=n[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);for(c&&c(n);p.length;)p.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],t=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(t=!1)}t&&(r.splice(n--,1),e=i(i.s=a[0]))}return e}var t={},o={0:0},r=[];function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,n,a){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)i.d(a,t,function(n){return e[n]}.bind(null,t));return a},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vue-tiny-lazyload-img/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var c=l;r.push([13,1]),a()}({1:function(e,n,a){var t=a(7);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a(14).default)("03ada772",t,!0,{})},13:function(e,n,a){"use strict";a.r(n);var t=a(0),o={name:"App",data:function(){return{modalShow:!1,indexShow:40,images:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]}},methods:{openModal:function(){this.modalShow=!this.modalShow,this.modalShow&&(1===this.indexShow?this.indexShow=40:this.indexShow--)},hideModal:function(){this.modalShow=!1}}},r=(a(6),a(4)),i=Object(r.a)(o,(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header header-dummy"},[e._m(0),e._v(" "),a("div",[a("a",{attrs:{href:"https://github.com/mazipan/vue-tiny-lazyload-img",target:"_blank",rel:"noopener",alt:"Github Link"}},[a("svg",{staticClass:"ic",attrs:{viewBox:"0 0 512 512"}},[a("path",{attrs:{d:"M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"}})])])])]),e._v(" "),a("main",{staticClass:"content"},[a("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}}),e._v(" "),a("button",{staticClass:"btn",on:{click:e.openModal}},[e._v("\n      Open Modal Box!\n    ")]),e._v(" "),e.modalShow?a("div",{staticClass:"modal",on:{click:e.hideModal}},[a("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+e.indexShow,"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})]):e._e(),e._v(" "),e._l(e.images,(function(e){return a("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:"lazy1-"+e,staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+e,"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})})),e._v(" "),a("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}}),e._v(" "),a("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"/vue-tiny-lazyload-img/assets/logo-404.png","data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}}),e._v(" "),a("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"/vue-tiny-lazyload-img/assets/logo-404.png","data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}}),e._v(" "),e._l(e.images,(function(e){return a("img",{directives:[{name:"lazyload",rawName:"v-lazyload"}],key:"lazy2-"+e,staticClass:"lazy",attrs:{src:"/vue-tiny-lazyload-img/assets/placeholder.png","data-src":"https://picsum.photos/350/350/?image="+(e+21),"data-err":"/vue-tiny-lazyload-img/assets/broken-image.jpg"}})})),e._v(" "),a("InFeedAdsense",{attrs:{"data-ad-layout-key":"-fg+5n+6t-e7+r","data-ad-client":"ca-pub-5442972248172818","data-ad-slot":"2105028631"}})],2),e._v(" "),a("footer",{staticClass:"footer"},[e._v("\n    Copyright © 2018 by Irfan Maulana\n  ")])])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("a",{attrs:{href:"/vue-tiny-lazyload-img/",alt:"Home"}},[n("h1",[this._v("Vue Tiny Lazyload Img")])])}],!1,null,null,null).exports,s="v-lazy-loading",l="v-lazy-loaded",d="v-lazy-error",c=null,u=function(e,n){e.classList.add(n),e.removeAttribute("data-src"),e.removeAttribute("data-err")};"IntersectionObserver"in window&&(c=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.classList.add(s);var a=n.dataset.src,t=n.dataset.err,o=new Image;o.src=a,o.onload=function(){n.classList.remove(s),a&&(n.src=a,u(n,l))},o.onerror=function(){n.classList.remove(s),t&&(n.src=t,u(n,d))},c.unobserve(n)}}))})));var p=c,f={install:function(e){e.directive("lazyload",{bind:function(e){"IntersectionObserver"in window&&p.observe(e)},componentUpdated:function(e){"IntersectionObserver"in window&&e.classList.contains(l)&&p.observe(e)}})}},m=a(2),g=a.n(m);a(5),t.a.use(f),t.a.use(a(12)),t.a.use(g.a.Adsense),t.a.use(g.a.InArticleAdsense),t.a.use(g.a.InFeedAdsense),new t.a({el:"#app",render:function(e){return e(i)}})},6:function(e,n,a){"use strict";var t=a(1);a.n(t).a},7:function(e,n,a){(e.exports=a(8)(!1)).push([e.i,'\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, Arial, sans-serif,\n    "Apple Color Emoji", "Segoe UI Emoji";\n  color: #282828;\n  font-size: 100%;\n}\na {\n  color: #4dba87;\n  text-decoration: none;\n}\na:hover {\n  color: #4dba87;\n}\nh1 {\n  margin: 0;\n  margin-left: 0.3em;\n  font-size: 1.5rem;\n  color: #fff;\n}\n.header,\n.footer {\n  width: 100%;\n  background-color: #4dba87;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  left: 0;\n}\n.header {\n  justify-content: space-between;\n  height: 60px;\n  top: 0;\n}\n.footer {\n  justify-content: center;\n  height: 50px;\n  font-size: 1rem;\n  bottom: 0;\n}\n.ic {\n  fill: #fff;\n  margin-right: 0.3em;\n  width: 30px;\n  height: 30px;\n}\n.content {\n  margin: 70px 0;\n}\n.lazy {\n  display: block;\n  margin: 1em auto;\n  text-align: center;\n  width: 350px;\n  height: 350px;\n}\n.modal{\n    position: fixed;\n    z-index: 999;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: flex;\n    align-items: center;\n}\n.modal img {\n  width: 500px;\n  height: 500px;\n}\n.btn{\n  background: #4dba87;\n  color: #fff;\n  display: inline-block;\n  padding: 13px 20px;\n  outline: none;\n  border: none;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.25em;\n}\n',""])}});