"use strict";(self.webpackChunksmartcrm=self.webpackChunksmartcrm||[]).push([[12],{7163:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(4942),r=t(1002),l=t(7294),c=t(4184),u=t.n(c);function o(e){return!(!e.addonBefore&&!e.addonAfter)}function s(e){return!!(e.prefix||e.suffix||e.allowClear)}function i(e,n,t,a){if(t){var r=n;if("click"===n.type){var l=e.cloneNode(!0);return r=Object.create(n,{target:{value:l},currentTarget:{value:l}}),l.value="",void t(r)}if(void 0!==a)return r=Object.create(n,{target:{value:e},currentTarget:{value:e}}),e.value=a,void t(r);t(r)}}function f(e){return null==e?"":String(e)}const d=function(e){var n=e.inputElement,t=e.prefixCls,c=e.prefix,i=e.suffix,f=e.addonBefore,d=e.addonAfter,m=e.className,p=e.style,v=e.affixWrapperClassName,h=e.groupClassName,g=e.wrapperClassName,C=e.disabled,x=e.readOnly,N=e.focused,w=e.triggerFocus,E=e.allowClear,Z=e.value,b=e.handleReset,y=e.hidden,R=(0,l.useRef)(null),S=(0,l.cloneElement)(n,{value:Z,hidden:y});if(s(e)){var k,B="".concat(t,"-affix-wrapper"),D=u()(B,(k={},(0,a.Z)(k,"".concat(B,"-disabled"),C),(0,a.Z)(k,"".concat(B,"-focused"),N),(0,a.Z)(k,"".concat(B,"-readonly"),x),(0,a.Z)(k,"".concat(B,"-input-with-clear-btn"),i&&E&&Z),k),!o(e)&&m,v),F=(i||E)&&l.createElement("span",{className:"".concat(t,"-suffix")},function(){var e;if(!E)return null;var n=!C&&!x&&Z,c="".concat(t,"-clear-icon"),o="object"===(0,r.Z)(E)&&(null==E?void 0:E.clearIcon)?E.clearIcon:"\u2716";return l.createElement("span",{onClick:b,onMouseDown:function(e){return e.preventDefault()},className:u()(c,(e={},(0,a.Z)(e,"".concat(c,"-hidden"),!n),(0,a.Z)(e,"".concat(c,"-has-suffix"),!!i),e)),role:"button",tabIndex:-1},o)}(),i);S=l.createElement("span",{className:D,style:p,hidden:!o(e)&&y,onMouseDown:function(e){var n;(null===(n=R.current)||void 0===n?void 0:n.contains(e.target))&&(null==w||w())},ref:R},c&&l.createElement("span",{className:"".concat(t,"-prefix")},c),(0,l.cloneElement)(n,{style:null,value:Z,hidden:null}),F)}if(o(e)){var j="".concat(t,"-group"),z="".concat(j,"-addon"),I=u()("".concat(t,"-wrapper"),j,g),A=u()("".concat(t,"-group-wrapper"),m,h);return l.createElement("span",{className:A,style:p,hidden:y},l.createElement("span",{className:I},f&&l.createElement("span",{className:z},f),(0,l.cloneElement)(S,{style:null,hidden:null}),d&&l.createElement("span",{className:z},d)))}return S};var m=t(3433),p=t(1413),v=t(9439),h=t(4925),g=t(9257),C=t(1770),x=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"];const N=(0,l.forwardRef)((function(e,n){var t=e.autoComplete,c=e.onChange,N=e.onFocus,w=e.onBlur,E=e.onPressEnter,Z=e.onKeyDown,b=e.prefixCls,y=void 0===b?"rc-input":b,R=e.disabled,S=e.htmlSize,k=e.className,B=e.maxLength,D=e.suffix,F=e.showCount,j=e.type,z=void 0===j?"text":j,I=e.inputClassName,A=(0,h.Z)(e,x),K=(0,C.Z)(e.defaultValue,{value:e.value}),L=(0,v.Z)(K,2),O=L[0],P=L[1],M=(0,l.useState)(!1),T=(0,v.Z)(M,2),V=T[0],W=T[1],H=(0,l.useRef)(null),q=function(e){H.current&&function(e,n){if(e){e.focus(n);var t=(n||{}).cursor;if(t){var a=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}(H.current,e)};(0,l.useImperativeHandle)(n,(function(){return{focus:q,blur:function(){var e;null===(e=H.current)||void 0===e||e.blur()},setSelectionRange:function(e,n,t){var a;null===(a=H.current)||void 0===a||a.setSelectionRange(e,n,t)},select:function(){var e;null===(e=H.current)||void 0===e||e.select()},input:H.current}})),(0,l.useEffect)((function(){W((function(e){return(!e||!R)&&e}))}),[R]);var G=function(n){void 0===e.value&&P(n.target.value),H.current&&i(H.current,n,c)},J=function(e){E&&"Enter"===e.key&&E(e),null==Z||Z(e)},Q=function(e){W(!0),null==N||N(e)},U=function(e){W(!1),null==w||w(e)};return l.createElement(d,(0,p.Z)((0,p.Z)({},A),{},{prefixCls:y,className:k,inputElement:function(){var n=(0,g.Z)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return l.createElement("input",(0,p.Z)((0,p.Z)({autoComplete:t},n),{},{onChange:G,onFocus:Q,onBlur:U,onKeyDown:J,className:u()(y,(0,a.Z)({},"".concat(y,"-disabled"),R),I,!o(e)&&!s(e)&&k),ref:H,size:S,type:z}))}(),handleReset:function(e){P(""),q(),H.current&&i(H.current,e,c)},value:f(O),focused:V,triggerFocus:q,suffix:function(){var e=Number(B)>0;if(D||F){var n=(0,m.Z)(f(O)).length,t="object"===(0,r.Z)(F)?F.formatter({count:n,maxLength:B}):"".concat(n).concat(e?" / ".concat(B):"");return l.createElement(l.Fragment,null,!!F&&l.createElement("span",{className:u()("".concat(y,"-show-count-suffix"),(0,a.Z)({},"".concat(y,"-show-count-has-suffix"),!!D))},t),D)}return null}(),disabled:R}))}))}}]);