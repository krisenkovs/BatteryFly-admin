"use strict";(self.webpackChunksmartcrm=self.webpackChunksmartcrm||[]).push([[25],{7606:(e,t,r)=>{r.d(t,{Z:()=>q});var n=r(7294),o=r(4184),u=r.n(o),i=r(8717);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=n.forwardRef((function(e,t){var r=e.height,o=e.offset,c=e.children,f=e.prefixCls,s=e.onInnerResize,v={},p={display:"flex",flexDirection:"column"};return void 0!==o&&(v={height:r,position:"relative",overflow:"hidden"},p=l(l({},p),{},{transform:"translateY(".concat(o,"px)"),position:"absolute",left:0,right:0,top:0})),n.createElement("div",{style:v},n.createElement(i.Z,{onResize:function(e){e.offsetHeight&&s&&s()}},n.createElement("div",{style:p,className:u()(a({},"".concat(f,"-holder-inner"),f)),ref:t},c)))}));f.displayName="Filler";const s=f;var v=r(5164);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return g(this,r)}}function g(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}function S(e){return"touches"in e?e.touches[0].pageY:e.pageY}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,r,o,i=d(c);function c(){var e;y(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=i.call.apply(i,[this].concat(r))).moveRaf=null,e.scrollbarRef=n.createRef(),e.thumbRef=n.createRef(),e.visibleTimeout=null,e.state={dragging:!1,pageY:null,startTop:null,visible:!1},e.delayHidden=function(){clearTimeout(e.visibleTimeout),e.setState({visible:!0}),e.visibleTimeout=setTimeout((function(){e.setState({visible:!1})}),2e3)},e.onScrollbarTouchStart=function(e){e.preventDefault()},e.onContainerMouseDown=function(e){e.stopPropagation(),e.preventDefault()},e.patchEvents=function(){window.addEventListener("mousemove",e.onMouseMove),window.addEventListener("mouseup",e.onMouseUp),e.thumbRef.current.addEventListener("touchmove",e.onMouseMove),e.thumbRef.current.addEventListener("touchend",e.onMouseUp)},e.removeEvents=function(){var t;window.removeEventListener("mousemove",e.onMouseMove),window.removeEventListener("mouseup",e.onMouseUp),null===(t=e.scrollbarRef.current)||void 0===t||t.removeEventListener("touchstart",e.onScrollbarTouchStart),e.thumbRef.current&&(e.thumbRef.current.removeEventListener("touchstart",e.onMouseDown),e.thumbRef.current.removeEventListener("touchmove",e.onMouseMove),e.thumbRef.current.removeEventListener("touchend",e.onMouseUp)),v.Z.cancel(e.moveRaf)},e.onMouseDown=function(t){var r=e.props.onStartMove;e.setState({dragging:!0,pageY:S(t),startTop:e.getTop()}),r(),e.patchEvents(),t.stopPropagation(),t.preventDefault()},e.onMouseMove=function(t){var r=e.state,n=r.dragging,o=r.pageY,u=r.startTop,i=e.props.onScroll;if(v.Z.cancel(e.moveRaf),n){var c=u+(S(t)-o),l=e.getEnableScrollRange(),a=e.getEnableHeightRange(),f=a?c/a:0,s=Math.ceil(f*l);e.moveRaf=(0,v.Z)((function(){i(s)}))}},e.onMouseUp=function(){var t=e.props.onStopMove;e.setState({dragging:!1}),t(),e.removeEvents()},e.getSpinHeight=function(){var t=e.props,r=t.height,n=r/t.count*10;return n=Math.max(n,20),n=Math.min(n,r/2),Math.floor(n)},e.getEnableScrollRange=function(){var t=e.props;return t.scrollHeight-t.height||0},e.getEnableHeightRange=function(){return e.props.height-e.getSpinHeight()||0},e.getTop=function(){var t=e.props.scrollTop,r=e.getEnableScrollRange(),n=e.getEnableHeightRange();return 0===t||0===r?0:t/r*n},e.showScroll=function(){var t=e.props,r=t.height;return t.scrollHeight>r},e}return t=c,(r=[{key:"componentDidMount",value:function(){this.scrollbarRef.current.addEventListener("touchstart",this.onScrollbarTouchStart),this.thumbRef.current.addEventListener("touchstart",this.onMouseDown)}},{key:"componentDidUpdate",value:function(e){e.scrollTop!==this.props.scrollTop&&this.delayHidden()}},{key:"componentWillUnmount",value:function(){this.removeEvents(),clearTimeout(this.visibleTimeout)}},{key:"render",value:function(){var e=this.state,t=e.dragging,r=e.visible,o=this.props.prefixCls,i=this.getSpinHeight(),c=this.getTop(),l=this.showScroll(),a=l&&r;return n.createElement("div",{ref:this.scrollbarRef,className:u()("".concat(o,"-scrollbar"),h({},"".concat(o,"-scrollbar-show"),l)),style:{width:8,top:0,bottom:0,right:0,position:"absolute",display:a?null:"none"},onMouseDown:this.onContainerMouseDown,onMouseMove:this.delayHidden},n.createElement("div",{ref:this.thumbRef,className:u()("".concat(o,"-scrollbar-thumb"),h({},"".concat(o,"-scrollbar-thumb-moving"),t)),style:{width:"100%",height:i,top:c,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"},onMouseDown:this.onMouseDown}))}}])&&b(t.prototype,r),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.Component);function E(e){var t=e.children,r=e.setRef,o=n.useCallback((function(e){r(e)}),[]);return n.cloneElement(t,{ref:o})}var R=r(4203);function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.maps=void 0,this.maps=Object.create(null)}var t,r,n;return t=e,(r=[{key:"set",value:function(e,t){this.maps[e]=t}},{key:"get",value:function(e){return this.maps[e]}}])&&M(t.prototype,r),n&&M(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return H(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(e,t,r){var o=D(n.useState(e),2),u=o[0],i=o[1],c=D(n.useState(null),2),l=c[0],a=c[1];return n.useEffect((function(){var n=function(e,t,r){var n,o,u=e.length,i=t.length;if(0===u&&0===i)return null;u<i?(n=e,o=t):(n=t,o=e);var c={__EMPTY_ITEM__:!0};function l(e){return void 0!==e?r(e):c}for(var a=null,f=1!==Math.abs(u-i),s=0;s<o.length;s+=1){var v=l(n[s]);if(v!==l(o[s])){a=s,f=f||v!==l(o[s+1]);break}}return null===a?null:{index:a,multiple:f}}(u||[],e||[],t);void 0!==(null==n?void 0:n.index)&&(null==r||r(n.index),a(e[n.index])),i(e)}),[e]),[l]}function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}const A="object"===("undefined"==typeof navigator?"undefined":k(navigator))&&/Firefox/i.test(navigator.userAgent),C=function(e,t){var r=(0,n.useRef)(!1),o=(0,n.useRef)(null);function u(){clearTimeout(o.current),r.current=!0,o.current=setTimeout((function(){r.current=!1}),50)}var i=(0,n.useRef)({top:e,bottom:t});return i.current.top=e,i.current.bottom=t,function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e<0&&i.current.top||e>0&&i.current.bottom;return t&&n?(clearTimeout(o.current),r.current=!1):n&&!r.current||u(),!r.current&&n}};var I=r(8410);var Z=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","component","onScroll","onVisibleChange"];function Y(){return Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,u=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(u.push(n.value),!t||u.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return u}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var B=[],F={overflowY:"auto",overflowAnchor:"none"};function V(e,t){var r=e.prefixCls,o=void 0===r?"rc-virtual-list":r,i=e.className,c=e.height,l=e.itemHeight,a=e.fullHeight,f=void 0===a||a,p=e.style,h=e.data,y=e.children,b=e.itemKey,m=e.virtual,d=e.component,g=void 0===d?"div":d,w=e.onScroll,S=e.onVisibleChange,M=$(e,Z),T=!(!1===m||!c||!l),D=T&&h&&l*h.length>c,H=z((0,n.useState)(0),2),k=H[0],_=H[1],K=z((0,n.useState)(!1),2),V=K[0],W=K[1],q=u()(o,i),G=h||B,J=(0,n.useRef)(),Q=(0,n.useRef)(),X=(0,n.useRef)(),ee=n.useCallback((function(e){return"function"==typeof b?b(e):null==e?void 0:e[b]}),[b]),te={getKey:ee};function re(e){_((function(t){var r=function(e){var t=e;Number.isNaN(de.current)||(t=Math.min(t,de.current));return t=Math.max(t,0)}("function"==typeof e?e(t):e);return J.current.scrollTop=r,r}))}var ne=(0,n.useRef)({start:0,end:G.length}),oe=(0,n.useRef)(),ue=z(L(G,ee),1)[0];oe.current=ue;var ie=function(e,t,r){var o=P(n.useState(0),2),u=o[0],i=o[1],c=(0,n.useRef)(new Map),l=(0,n.useRef)(new j),a=(0,n.useRef)();function f(){v.Z.cancel(a.current)}function s(){f(),a.current=(0,v.Z)((function(){c.current.forEach((function(e,t){if(e&&e.offsetParent){var r=(0,R.Z)(e),n=r.offsetHeight;l.current.get(t)!==n&&l.current.set(t,r.offsetHeight)}})),i((function(e){return e+1}))}))}return(0,n.useEffect)((function(){return f}),[]),[function(n,o){var u=e(n),i=c.current.get(u);o?(c.current.set(u,o),s()):c.current.delete(u),!i!=!o&&(o?null==t||t(n):null==r||r(n))},s,l.current,u]}(ee,null,null),ce=z(ie,4),le=ce[0],ae=ce[1],fe=ce[2],se=ce[3],ve=n.useMemo((function(){if(!T)return{scrollHeight:void 0,start:0,end:G.length-1,offset:void 0};var e;if(!D)return{scrollHeight:(null===(e=Q.current)||void 0===e?void 0:e.offsetHeight)||0,start:0,end:G.length-1,offset:void 0};for(var t,r,n,o=0,u=G.length,i=0;i<u;i+=1){var a=G[i],f=ee(a),s=fe.get(f),v=o+(void 0===s?l:s);v>=k&&void 0===t&&(t=i,r=o),v>k+c&&void 0===n&&(n=i),o=v}return void 0===t&&(t=0,r=0),void 0===n&&(n=G.length-1),{scrollHeight:o,start:t,end:n=Math.min(n+1,G.length),offset:r}}),[D,T,k,G,se,c]),pe=ve.scrollHeight,he=ve.start,ye=ve.end,be=ve.offset;ne.current.start=he,ne.current.end=ye;var me=pe-c,de=(0,n.useRef)(me);de.current=me;var ge=k<=0,we=k>=me,Se=C(ge,we);var Oe=function(e,t,r,o){var u=(0,n.useRef)(0),i=(0,n.useRef)(null),c=(0,n.useRef)(null),l=(0,n.useRef)(!1),a=C(t,r);return[function(t){if(e){v.Z.cancel(i.current);var r=t.deltaY;u.current+=r,c.current=r,a(r)||(A||t.preventDefault(),i.current=(0,v.Z)((function(){var e=l.current?10:1;o(u.current*e),u.current=0})))}},function(t){e&&(l.current=t.detail===c.current)}]}(T,ge,we,(function(e){re((function(t){return t+e}))})),Ee=z(Oe,2),Re=Ee[0],Me=Ee[1];!function(e,t,r){var o,u=(0,n.useRef)(!1),i=(0,n.useRef)(0),c=(0,n.useRef)(null),l=(0,n.useRef)(null),a=function(e){if(u.current){var t=Math.ceil(e.touches[0].pageY),n=i.current-t;i.current=t,r(n)&&e.preventDefault(),clearInterval(l.current),l.current=setInterval((function(){(!r(n*=.9333333333333333,!0)||Math.abs(n)<=.1)&&clearInterval(l.current)}),16)}},f=function(){u.current=!1,o()},s=function(e){o(),1!==e.touches.length||u.current||(u.current=!0,i.current=Math.ceil(e.touches[0].pageY),c.current=e.target,c.current.addEventListener("touchmove",a),c.current.addEventListener("touchend",f))};o=function(){c.current&&(c.current.removeEventListener("touchmove",a),c.current.removeEventListener("touchend",f))},(0,I.Z)((function(){return e&&t.current.addEventListener("touchstart",s),function(){var e;null===(e=t.current)||void 0===e||e.removeEventListener("touchstart",s),o(),clearInterval(l.current)}}),[e])}(T,J,(function(e,t){return!Se(e,t)&&(Re({preventDefault:function(){},deltaY:e}),!0)})),(0,I.Z)((function(){function e(e){T&&e.preventDefault()}return J.current.addEventListener("wheel",Re),J.current.addEventListener("DOMMouseScroll",Me),J.current.addEventListener("MozMousePixelScroll",e),function(){J.current&&(J.current.removeEventListener("wheel",Re),J.current.removeEventListener("DOMMouseScroll",Me),J.current.removeEventListener("MozMousePixelScroll",e))}}),[T]);var je=function(e,t,r,o,u,i,c,l){var a=n.useRef();return function(n){if(null!=n){if(v.Z.cancel(a.current),"number"==typeof n)c(n);else if(n&&"object"===x(n)){var f,s=n.align;f="index"in n?n.index:t.findIndex((function(e){return u(e)===n.key}));var p=n.offset,h=void 0===p?0:p;!function n(l,p){if(!(l<0)&&e.current){var y=e.current.clientHeight,b=!1,m=p;if(y){for(var d=p||s,g=0,w=0,S=0,O=Math.min(t.length,f),E=0;E<=O;E+=1){var R=u(t[E]);w=g;var M=r.get(R);g=S=w+(void 0===M?o:M),E===f&&void 0===M&&(b=!0)}var j=null;switch(d){case"top":j=w-h;break;case"bottom":j=S-y+h;break;default:var P=e.current.scrollTop;w<P?m="top":S>P+y&&(m="bottom")}null!==j&&j!==e.current.scrollTop&&c(j)}a.current=(0,v.Z)((function(){b&&i(),n(l-1,m)}))}}(3)}}else l()}}(J,G,fe,l,ee,ae,re,(function(){var e;null===(e=X.current)||void 0===e||e.delayHidden()}));n.useImperativeHandle(t,(function(){return{scrollTo:je}})),(0,I.Z)((function(){if(S){var e=G.slice(he,ye+1);S(e,G)}}),[he,ye,G]);var Pe=function(e,t,r,o,u,i){var c=i.getKey;return e.slice(t,r+1).map((function(e,r){var i=u(e,t+r,{}),l=c(e);return n.createElement(E,{key:l,setRef:function(t){return o(e,t)}},i)}))}(G,he,ye,le,y,te),Te=null;return c&&(Te=N(U({},f?"height":"maxHeight",c),F),T&&(Te.overflowY="hidden",V&&(Te.pointerEvents="none"))),n.createElement("div",Y({style:N(N({},p),{},{position:"relative"}),className:q},M),n.createElement(g,{className:"".concat(o,"-holder"),style:Te,ref:J,onScroll:function(e){var t=e.currentTarget.scrollTop;t!==k&&re(t),null==w||w(e)}},n.createElement(s,{prefixCls:o,height:pe,offset:be,onInnerResize:ae,ref:Q},Pe)),T&&n.createElement(O,{ref:X,prefixCls:o,scrollTop:k,height:c,scrollHeight:pe,count:G.length,onScroll:function(e){re(e)},onStartMove:function(){W(!0)},onStopMove:function(){W(!1)}}))}var W=n.forwardRef(V);W.displayName="List";const q=W}}]);