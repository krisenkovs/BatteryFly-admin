"use strict";(self.webpackChunksmartcrm=self.webpackChunksmartcrm||[]).push([[22],{4084:(e,t,a)=>{a.d(t,{Z:()=>E});var n,r=a(7462),i=a(5671),o=a(3144),s=a(9340),l=a(8557),u=a(7294),d=a(1413),c=a(4942),p=a(8717),m=a(9257),v=a(4184),h=a.n(v),x="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",f=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],g={};function b(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&g[a])return g[a];var n=window.getComputedStyle(e),r=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),i=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),o=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=f.map((function(e){return"".concat(e,":").concat(n.getPropertyValue(e))})).join(";"),l={sizingStyle:s,paddingSize:i,borderSize:o,boxSizing:r};return t&&a&&(g[a]=l),l}var z,A=a(6774),S=a.n(A);!function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"}(z||(z={}));const y=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(e){var o;return(0,i.Z)(this,a),(o=t.call(this,e)).nextFrameActionId=void 0,o.resizeFrameId=void 0,o.textArea=void 0,o.saveTextArea=function(e){o.textArea=e},o.handleResize=function(e){var t=o.state.resizeStatus,a=o.props,n=a.autoSize,r=a.onResize;t===z.NONE&&("function"==typeof r&&r(e),n&&o.resizeOnNextFrame())},o.resizeOnNextFrame=function(){cancelAnimationFrame(o.nextFrameActionId),o.nextFrameActionId=requestAnimationFrame(o.resizeTextarea)},o.resizeTextarea=function(){var e=o.props.autoSize;if(e&&o.textArea){var t=e.minRows,a=e.maxRows,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;n||((n=document.createElement("textarea")).setAttribute("tab-index","-1"),n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),e.getAttribute("wrap")?n.setAttribute("wrap",e.getAttribute("wrap")):n.removeAttribute("wrap");var i=b(e,t),o=i.paddingSize,s=i.borderSize,l=i.boxSizing,u=i.sizingStyle;n.setAttribute("style","".concat(u,";").concat(x)),n.value=e.value||e.placeholder||"";var d,c=Number.MIN_SAFE_INTEGER,p=Number.MAX_SAFE_INTEGER,m=n.scrollHeight;if("border-box"===l?m+=s:"content-box"===l&&(m-=o),null!==a||null!==r){n.value=" ";var v=n.scrollHeight-o;null!==a&&(c=v*a,"border-box"===l&&(c=c+o+s),m=Math.max(c,m)),null!==r&&(p=v*r,"border-box"===l&&(p=p+o+s),d=m>p?"":"hidden",m=Math.min(p,m))}return{height:m,minHeight:c,maxHeight:p,overflowY:d,resize:"none"}}(o.textArea,!1,t,a);o.setState({textareaStyles:r,resizeStatus:z.RESIZING},(function(){cancelAnimationFrame(o.resizeFrameId),o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:z.RESIZED},(function(){o.resizeFrameId=requestAnimationFrame((function(){o.setState({resizeStatus:z.NONE}),o.fixFirefoxAutoScroll()}))}))}))}))}},o.renderTextArea=function(){var e=o.props,t=e.prefixCls,a=void 0===t?"rc-textarea":t,n=e.autoSize,i=e.onResize,s=e.className,l=e.disabled,v=o.state,x=v.textareaStyles,f=v.resizeStatus,g=(0,m.Z)(o.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),b=h()(a,s,(0,c.Z)({},"".concat(a,"-disabled"),l));"value"in g&&(g.value=g.value||"");var A=(0,d.Z)((0,d.Z)((0,d.Z)({},o.props.style),x),f===z.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return u.createElement(p.Z,{onResize:o.handleResize,disabled:!(n||i)},u.createElement("textarea",(0,r.Z)({},g,{className:b,style:A,ref:o.saveTextArea})))},o.state={textareaStyles:{},resizeStatus:z.NONE},o}return(0,o.Z)(a,[{key:"componentDidUpdate",value:function(e){e.value===this.props.value&&S()(e.autoSize,this.props.autoSize)||this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(a){}}},{key:"render",value:function(){return this.renderTextArea()}}]),a}(u.Component);const E=function(e){(0,s.Z)(a,e);var t=(0,l.Z)(a);function a(e){var n;(0,i.Z)(this,a),(n=t.call(this,e)).resizableTextArea=void 0,n.focus=function(){n.resizableTextArea.textArea.focus()},n.saveTextArea=function(e){n.resizableTextArea=e},n.handleChange=function(e){var t=n.props.onChange;n.setValue(e.target.value,(function(){n.resizableTextArea.resizeTextarea()})),t&&t(e)},n.handleKeyDown=function(e){var t=n.props,a=t.onPressEnter,r=t.onKeyDown;13===e.keyCode&&a&&a(e),r&&r(e)};var r=void 0===e.value||null===e.value?e.defaultValue:e.value;return n.state={value:r},n}return(0,o.Z)(a,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return u.createElement(y,(0,r.Z)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),a}(u.Component)}}]);