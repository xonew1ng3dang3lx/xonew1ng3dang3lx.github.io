(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8hGN":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("q1tI"),r=n.n(o),i=n("0b+E"),a=n("EV5P"),u=n("HMs9"),l=n.n(u);function c(e){var t=document.getElementById(e);return Boolean(t&&t.firstChild)}function d(e,t,n,o){var r=!1;try{window._mNHandle.queue.push((function(){var o=e.id,a=e.size,u=e.id2,l=e.isMobile;t||l||c(o)?!c(o)&&t&&l&&(window._mNDetails.loadTag(o,a,u),r=!0):(window._mNDetails.loadTag(o,a,u),r=!0);var d;d=5,function e(){d--,setTimeout((function(){var t=document.getElementById(o).querySelector("iframe");d>=0&&!t?e():d>=0&&t?(t.title="Advertisement",n()):i.a.event({category:"MediaAd",action:"FailedToLoad",label:"MediaAdLoaded",value:0})}),350)}()}))}catch(a){o(),i.a.event({category:"error",action:"error",value:""+a,label:""+a})}r||o()}function f(e){var t=e.adsData,n=e.onAdLoad,r=e.onError,i=Object(a.a)();return Object(o.useEffect)((function(){var e=Boolean(i<=728);if(t){var o="https://contextual.media.net/dmedianet.js?cid=8CUI6S7IJ";if(function(e){for(var t=document.getElementsByTagName("script"),n=t.length;n--;)if(t[n].src===e)return!0;return!1}(o))d(t,e,n,r);else{window._mNHandle=window._mNHandle||{},window._mNHandle.queue=window._mNHandle.queue||[];var a=document.createElement("script");a.src=o,a.async=!0,a.onload=function(){d(t,e,n,r)},document.body.appendChild(a)}}return function(){}})),null}var s=n("JcTa");n("P612");function p(e){var t=e.type,n=Object(o.useState)(!0),u=n[0],c=n[1],d=Object(o.useState)(!1),p=d[0],v=d[1];Object(o.useEffect)((function(){v(Object(s.detected)())}),[]);var h=Object(a.a)()<=728,m=null;h&&("blog-content"===t?m={id:"188970836",size:"300x250",id2:"188970836",isMobile:!0,height:250,width:300}:"blog-content-2"===t?m={id:"854341318",size:"300x250",id2:"854341318",isMobile:!0,height:250,width:300}:"billboard"===t?m={id:"617163306",size:"320x50",id2:"617163306",isMobile:!0,height:50,width:320}:"leaderboard"===t&&(m={id:"346799754",size:"300x250",id2:"346799754",isMobile:!1,height:250,width:300})),h||("leaderboard"===t?m={id:"138821154",size:"728x90",id2:"138821154",isMobile:!1,height:90,width:728}:"blog-content"===t?m={id:"188970836",size:"300x250",id2:"188970836",isMobile:!1,height:250,width:300}:"blog-content-2"===t?m={id:"854341318",size:"300x250",id2:"854341318",isMobile:!1,height:250,width:300}:"billboard"===t&&(m={id:"556006421",size:"728x90",id2:"556006421",isMobile:!1,height:90,width:728}));var b={height:m.height+5,width:m.width};if(p)return r.a.createElement(l.a,{height:m.height,offset:1200});if(m){return r.a.createElement(l.a,{height:b.height,offset:1200},r.a.createElement("div",{className:"MediaAdsContainer",style:u?b:null},r.a.createElement(f,{adsData:m,onAdLoad:function(){u&&(c(!1),i.a.event({category:"MediaAd",action:"Appeared",label:"MediaAdLoaded",value:1}))},onError:function(){c(!1)},key:m.id+"-ads-init"}),u&&r.a.createElement("div",{className:"LazyLoadAdsContainer"}),r.a.createElement("div",{className:"AdsContainer",id:m.id,key:m.id+"-ad"})))}return null}},EV5P:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(o=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{o||null==u.return||u.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return h}));var i=n("q1tI"),a=function(e){var t=i.useRef(e);return t.current=e,t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=a(e),r=i.useRef(),u=[t,n,o];function l(){r.current&&clearTimeout(r.current),r.current=void 0}function c(){r.current=void 0}return i.useEffect((function(){return l}),u),i.useCallback((function(){var e=arguments,i=r.current;if(void 0===i&&n)return r.current=setTimeout(c,t),o.current.apply(null,e);i&&clearTimeout(i),r.current=setTimeout((function(){r.current=void 0,o.current.apply(null,e)}),t)}),u)},l=function(e,t,n){var o=i.useState(e);return[o[0],u(o[1],t,n)]},c=i["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var d=function(e,t,n,o){var r=a(n),i=a(o);c((function(){var n=e&&"current"in e?e.current:e;if(n){var o=0;n.addEventListener(t,u);var a=i.current;return function(){o=1,n.removeEventListener(t,u),a&&a()}}function u(){if(!o){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];r.current.apply(this,t)}}}),[e,t])},f={},s="undefined"==typeof window?null:window,p=function(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=e.wait,n=e.leading,o=e.initialWidth,i=void 0===o?0:o,a=e.initialHeight,u=void 0===a?0:a,c=l("undefined"==typeof document?[i,u]:p,t,n),v=r(c,2),h=v[0],m=v[1],b=function(){return m(p)};return d(s,"resize",b),d(s,"orientationchange",b),h},h=function(e){return v(e)[0]}},HMs9:function(e,t,n){"use strict";n("pJf4"),n("n7j8"),n("sc67"),n("JHok"),n("MIFh"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("q1tI"),i=f(r),a=f(n("17x9")),u=n("Seim"),l=f(n("tvXG")),c=f(n("PTkm")),d=f(n("uUxy"));function f(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,m=0,b=0,y=0,w="data-lazyload-listened",g=[],E=[],x=!1;try{var _=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,_)}catch(z){}var A=!!x&&{capture:!1,passive:!0},M=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,a=void 0;try{var u=t.getBoundingClientRect();o=u.top,r=u.left,i=u.height,a=u.width}catch(z){o=h,r=m,i=y,a=b}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(o,0),f=Math.max(r,0),s=Math.min(l,o+i)-d,p=Math.min(c,r+a)-f,v=void 0,w=void 0,g=void 0,E=void 0;try{var x=n.getBoundingClientRect();v=x.top,w=x.left,g=x.height,E=x.width}catch(z){v=h,w=m,g=y,E=b}var _=v-d,A=w-f,M=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return _-M[0]<=s&&_+g+M[1]>=0&&A-M[0]<=p&&A+E+M[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(z){n=h,o=y}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&E.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},O=function(){E.forEach((function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)})),E=[]},j=function(){for(var e=0;e<g.length;++e){var t=g[e];M(t)}O()},T=void 0,N=null,C=function(e){function t(e){s(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(n&&((0,u.off)(e,"scroll",N,A),(0,u.off)(window,"resize",N,A),N=null),N||(void 0!==this.props.debounce?(N=(0,c.default)(j,"number"==typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(N=(0,d.default)(j,"number"==typeof this.props.throttle?this.props.throttle:300),T="throttle"):N=j),this.props.overflow){var o=(0,l.default)(this.ref);if(o&&"function"==typeof o.getAttribute){var r=+o.getAttribute(w)+1;1===r&&o.addEventListener("scroll",N,A),o.setAttribute(w,r)}}else if(0===g.length||n){var i=this.props,a=i.scroll,f=i.resize;a&&(0,u.on)(e,"scroll",N,A),f&&(0,u.on)(window,"resize",N,A)}g.push(this),M(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(w)-1;0===t?(e.removeEventListener("scroll",N,A),e.removeAttribute(w)):e.setAttribute(w,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&"undefined"!=typeof window&&((0,u.off)(window,"resize",N,A),(0,u.off)(window,"scroll",N,A))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.classNamePrefix;return i.default.createElement("div",{className:r+"-wrapper",ref:this.setRef},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:r+"-placeholder"}))}}]),t}(r.Component);C.propTypes={classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool},C.defaultProps={classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var L=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){s(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+L(t),e}return v(r,n),o(r,[{key:"render",value:function(){return i.default.createElement(C,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=C,t.forceCheck=j,t.forceVisible=function(){for(var e=0;e<g.length;++e){var t=g[e];t.visible=!0,t.forceUpdate()}O()}},JcTa:function(e,t){e.exports={detected:function(){var e=["pub_300x250","pub_300x250m","pub_728x90","text-ad","textAd","text_ad","text_ads","text-ads"],t=document.querySelector("."+e.join("."));return t||((t=document.createElement("div")).className=e.join(" "),t.setAttribute("style","position: absolute; top: -10px; left: -10px; width: 1px; height: 1px;"),document.body.appendChild(t)),null!=window.document.body.getAttribute("abp")||null==t.offsetParent||0==t.offsetHeight||0==t.offsetLeft||0==t.offsetTop||0==t.offsetWidth||0==t.clientHeight||0==t.clientWidth}}},P612:function(e,t,n){},PTkm:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,u=void 0,l=function l(){var c=+new Date-a;c<t&&c>=0?o=setTimeout(l,t-c):(o=null,n||(u=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var c=n&&!o;return o||(o=setTimeout(l,t)),c&&(u=e.apply(i,r),i=null,r=null),u}}},Seim:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},YoZY:function(e,t,n){},nhbF:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("HQhv");var o=function(e){return e.toLowerCase().split(" ").join("_").trim()}},tvXG:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,u=r["overflow-x"],l=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(u)&&n.test(l))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,u=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(i,u)}),t)):(o=a,e.apply(i,u))}}},"vPZ/":function(e,t,n){"use strict";n("HQhv"),n("pJf4");var o=n("q1tI"),r=n.n(o),i=n("510Z"),a=n("SoFZ");n("YoZY");t.a=function(e){var t=e.id,n=a.a[t]||null;if(!n)return null;var o=n.name||"",u=n.picture||"",l=u.substring(0,u.indexOf("?")).split("."),c=[50,75,100,120].reduce((function(e,t){var n=l[0]+"-"+t+"."+l[1]+" "+t+"w";return""===e?n:e+", "+n}),"");return r.a.createElement("div",{className:"AuthorInfo"},r.a.createElement("div",{className:"AuthorBubbleImageContainer"},r.a.createElement(i.a,{className:"AuthorBubble",src:u+"&srcSet="+c+"&sizes=25px",alt:o})),r.a.createElement("div",{className:"AuthorTitle"},"By ",o))}}}]);
//# sourceMappingURL=7a9c5fa27d1fb3a7835b1bd5fdbbeabf5e6fa31f-ec4f93b58ff619ef9689.js.map