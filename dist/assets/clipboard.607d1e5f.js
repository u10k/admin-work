import{bB as G,bF as X,d as J,k as K,y as Q,r as C,o as W,c as Z,w as F,a as L,B as q}from"./vendor.68c261ce.js";var N={exports:{}};/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(_,E){(function(k,g){_.exports=g()})(G,function(){return function(){var S={134:function(l,a,t){t.d(a,{default:function(){return V}});var i=t(279),u=t.n(i),s=t(370),y=t.n(s),h=t(817),m=t.n(h);function f(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?f=function(e){return typeof e}:f=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(r)}function p(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function d(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function b(r,n,e){return n&&d(r.prototype,n),e&&d(r,e),r}var P=function(){function r(n){p(this,r),this.resolveOptions(n),this.initSelection()}return b(r,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var e=document.documentElement.getAttribute("dir")==="rtl";this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(o,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var e=this,o=this.createFakeElement();this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(o),this.selectedText=m()(o),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=m()(this.target),this.copyText()}},{key:"copyText",value:function(){var e;try{e=document.execCommand(this.action)}catch{e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"copy";if(this._action=e,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(e!==void 0)if(e&&f(e)==="object"&&e.nodeType===1){if(this.action==="copy"&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=e}else throw new Error('Invalid "target" value, use a valid Element')},get:function(){return this._target}}]),r}(),j=P;function x(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(r)}function M(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function R(r,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function H(r,n,e){return n&&R(r.prototype,n),e&&R(r,e),r}function D(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&A(r,n)}function A(r,n){return A=Object.setPrototypeOf||function(o,c){return o.__proto__=c,o},A(r,n)}function B(r){var n=$();return function(){var o=w(r),c;if(n){var v=w(this).constructor;c=Reflect.construct(o,arguments,v)}else c=o.apply(this,arguments);return I(this,c)}}function I(r,n){return n&&(x(n)==="object"||typeof n=="function")?n:U(r)}function U(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function w(r){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(r)}function O(r,n){var e="data-clipboard-".concat(r);if(!!n.hasAttribute(e))return n.getAttribute(e)}var z=function(r){D(e,r);var n=B(e);function e(o,c){var v;return M(this,e),v=n.call(this),v.resolveOptions(c),v.listenClick(o),v}return H(e,[{key:"resolveOptions",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof c.action=="function"?c.action:this.defaultAction,this.target=typeof c.target=="function"?c.target:this.defaultTarget,this.text=typeof c.text=="function"?c.text:this.defaultText,this.container=x(c.container)==="object"?c.container:document.body}},{key:"listenClick",value:function(c){var v=this;this.listener=y()(c,"click",function(T){return v.onClick(T)})}},{key:"onClick",value:function(c){var v=c.delegateTarget||c.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new j({action:this.action(v),target:this.target(v),text:this.text(v),container:this.container,trigger:v,emitter:this})}},{key:"defaultAction",value:function(c){return O("action",c)}},{key:"defaultTarget",value:function(c){var v=O("target",c);if(v)return document.querySelector(v)}},{key:"defaultText",value:function(c){return O("text",c)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof c=="string"?[c]:c,T=!!document.queryCommandSupported;return v.forEach(function(Y){T=T&&!!document.queryCommandSupported(Y)}),T}}]),e}(u()),V=z},828:function(l){var a=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function i(u,s){for(;u&&u.nodeType!==a;){if(typeof u.matches=="function"&&u.matches(s))return u;u=u.parentNode}}l.exports=i},438:function(l,a,t){var i=t(828);function u(h,m,f,p,d){var b=y.apply(this,arguments);return h.addEventListener(f,b,d),{destroy:function(){h.removeEventListener(f,b,d)}}}function s(h,m,f,p,d){return typeof h.addEventListener=="function"?u.apply(null,arguments):typeof f=="function"?u.bind(null,document).apply(null,arguments):(typeof h=="string"&&(h=document.querySelectorAll(h)),Array.prototype.map.call(h,function(b){return u(b,m,f,p,d)}))}function y(h,m,f,p){return function(d){d.delegateTarget=i(d.target,m),d.delegateTarget&&p.call(h,d)}}l.exports=s},879:function(l,a){a.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},a.nodeList=function(t){var i=Object.prototype.toString.call(t);return t!==void 0&&(i==="[object NodeList]"||i==="[object HTMLCollection]")&&"length"in t&&(t.length===0||a.node(t[0]))},a.string=function(t){return typeof t=="string"||t instanceof String},a.fn=function(t){var i=Object.prototype.toString.call(t);return i==="[object Function]"}},370:function(l,a,t){var i=t(879),u=t(438);function s(f,p,d){if(!f&&!p&&!d)throw new Error("Missing required arguments");if(!i.string(p))throw new TypeError("Second argument must be a String");if(!i.fn(d))throw new TypeError("Third argument must be a Function");if(i.node(f))return y(f,p,d);if(i.nodeList(f))return h(f,p,d);if(i.string(f))return m(f,p,d);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function y(f,p,d){return f.addEventListener(p,d),{destroy:function(){f.removeEventListener(p,d)}}}function h(f,p,d){return Array.prototype.forEach.call(f,function(b){b.addEventListener(p,d)}),{destroy:function(){Array.prototype.forEach.call(f,function(b){b.removeEventListener(p,d)})}}}function m(f,p,d){return u(document.body,f,p,d)}l.exports=s},817:function(l){function a(t){var i;if(t.nodeName==="SELECT")t.focus(),i=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),i=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var s=window.getSelection(),y=document.createRange();y.selectNodeContents(t),s.removeAllRanges(),s.addRange(y),i=s.toString()}return i}l.exports=a},279:function(l){function a(){}a.prototype={on:function(t,i,u){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:i,ctx:u}),this},once:function(t,i,u){var s=this;function y(){s.off(t,y),i.apply(u,arguments)}return y._=i,this.on(t,y,u)},emit:function(t){var i=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),s=0,y=u.length;for(s;s<y;s++)u[s].fn.apply(u[s].ctx,i);return this},off:function(t,i){var u=this.e||(this.e={}),s=u[t],y=[];if(s&&i)for(var h=0,m=s.length;h<m;h++)s[h].fn!==i&&s[h].fn._!==i&&y.push(s[h]);return y.length?u[t]=y:delete u[t],this}},l.exports=a,l.exports.TinyEmitter=a}},k={};function g(l){if(k[l])return k[l].exports;var a=k[l]={exports:{}};return S[l](a,a.exports,g),a.exports}return function(){g.n=function(l){var a=l&&l.__esModule?function(){return l.default}:function(){return l};return g.d(a,{a}),a}}(),function(){g.d=function(l,a){for(var t in a)g.o(a,t)&&!g.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:a[t]})}}(),function(){g.o=function(l,a){return Object.prototype.hasOwnProperty.call(l,a)}}(),g(134)}().default})})(N);var tt=X(N.exports),et=J({name:"Clipboard",setup(){const _=K(""),E=Q();return{content:_,onCopy:()=>{new tt(".copy").on("success",g=>{E.success("\u590D\u5236\u6210\u529F\uFF0C\u5185\u5BB9\u4E3A\uFF1A"+g.text)})}}}});const nt=q(" \u590D\u5236 ");function rt(_,E,S,k,g,l){const a=C("n-input"),t=C("n-button"),i=C("n-input-group"),u=C("n-card");return W(),Z(u,{title:"\u8BF7\u8F93\u5165\u5185\u5BB9","content-style":{padding:"10px"}},{default:F(()=>[L(i,null,{default:F(()=>[L(a,{style:{width:"50%"},value:_.content,"onUpdate:value":E[1]||(E[1]=s=>_.content=s),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"},null,8,["value"]),L(t,{ghost:"",type:"primary",class:"copy","data-clipboard-text":_.content,onClick:_.onCopy},{default:F(()=>[nt]),_:1},8,["data-clipboard-text","onClick"])]),_:1})]),_:1})}et.render=rt;export{et as default};