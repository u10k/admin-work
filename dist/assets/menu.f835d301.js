var I=Object.defineProperty,M=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var B=(u,a,n)=>a in u?I(u,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[a]=n,U=(u,a)=>{for(var n in a||(a={}))R.call(a,n)&&B(u,n,a[n]);if(E)for(var n of E(a))$.call(a,n)&&B(u,n,a[n]);return u},N=(u,a)=>M(u,L(a));import{u as j,h as O,t as J,i as K,j as S,p as q,k as H,m as V}from"./index.3630a3e9.js";import{a as z,b as G,c as Q,d as W}from"./table.05028df1.js";import{h as X,r as h,i as C}from"./form.76809a74.js";import{d as Y,D as Z,y as ee,l as o,m as s,N as ue,e as ae,r as d,o as ne,i as le,a as i,w as _}from"./vendor.66b1fd00.js";var T=Y({name:"Menu",setup(){let u="add",a=null;const n=z(),g=Z(),v=ee(),k=j(),c=o(null),r=o(null),p=G("menuUrl"),b=Q([{title:"\u83DC\u5355\u540D\u79F0",key:"menuName"},{title:"\u83DC\u5355\u5730\u5740",key:"menuUrl"},{title:"\u83DC\u5355\u56FE\u6807",key:"icon",render:e=>e.iconPrefix==="iconfont"?s(O,{prefix:e.iconPrefix?e.iconPrefix:"iconfont",name:e.icon?e.icon:"menu"}):s(ue,null,{default:()=>s("svg",{"aria-hidden":!1},{default:()=>[s("use",{href:"#icon-menu"})]})})},{title:"\u662F\u5426\u7F13\u5B58",key:"cacheable",render:e=>s("div",null,{default:()=>e.cacheable?"\u662F":"\u5426"})},{title:"\u662F\u5426\u9690\u85CF",key:"hidden",render:e=>s("div",null,{default:()=>e.hidden?"\u662F":"\u5426"})},{title:"\u662F\u5426\u56FA\u5B9A\u6807\u9898\u680F",key:"affix",render:e=>s("div",null,{default:()=>e.affix?"\u662F":"\u5426"})},{title:"\u64CD\u4F5C",key:"actions",render:e=>W([{label:"\u7F16\u8F91",onClick:x.bind(null,e)},{label:"\u5220\u9664",type:"error",onClick:D.bind(null,e)}])}],{align:"center"}),m=[{label:"\u4E0A\u7EA7\u83DC\u5355",key:"parentPath",value:o(null),validator:(e,l)=>e.value.value?!0:(l.error("\u8BF7\u9009\u62E9\u4E0A\u7EA7\u83DC\u5355"),!1),render:e=>X(e.value,J(n.dataList,"menuName","menuUrl"),{showPath:!0})},{label:"\u83DC\u5355\u540D\u79F0",key:"menuName",required:!0,value:o(null),render:e=>h(e.value,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"})},{label:"\u83DC\u5355\u5730\u5740",key:"menuUrl",required:!0,value:o(null),disabled:o(!1),render:e=>h(e.value,{placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u5730\u5740",disabled:e.disabled.value}),reset:e=>{e.value.value=null,e.disabled.value=!1}},{label:"\u5916\u94FE\u5730\u5740",key:"outLink",value:o(null),render:e=>h(e.value,{placeholder:"\u8BF7\u8F93\u5165\u5916\u94FE\u5730\u5740"})},{label:"\u83DC\u5355\u56FE\u6807",key:"icon",value:o(null),render:e=>s(K,{defaultIcon:e.value.value,onUpdateIcon:l=>{e.value.value=l.name}})},{label:"\u662F\u5426\u7F13\u5B58",key:"cacheable",value:o(!1),render:e=>C(e.value)},{label:"\u662F\u5426\u9690\u85CF",key:"hidden",value:o(!1),render:e=>C(e.value)},{label:"\u662F\u5426\u56FA\u5B9A",key:"affix",value:o(!0),render:e=>C(e.value)}];function y(){q({url:H,data:{}}).then(n.handleSuccess).catch(console.log)}function w(){var e;u="add",(e=c.value)==null||e.show().then(()=>{var l;(l=r.value)==null||l.reset()})}function x(e){var f;u="edit",a=e,m.forEach(t=>{t.value.value=e[t.key]||null,t.key==="menuUrl"&&t.disabled&&(S(e.menuUrl)&&(t.value.value=""),t.disabled.value=!0)});const l=m.find(t=>t.key==="redirect");S(e.menuUrl)&&(l.value.value=e.menuUrl),(f=c.value)==null||f.show()}function P(){var e,l,f,t;if(u==="add")((e=r.value)==null?void 0:e.validator())&&v.success("\u6A21\u62DF\u521B\u5EFA\u83DC\u5355\u6210\u529F, \u53C2\u6570\u4E3A:"+JSON.stringify((l=r.value)==null?void 0:l.generatorParams()));else if((f=r.value)==null?void 0:f.validator()){const A=(t=r.value)==null?void 0:t.generatorParams();if(a){const F=V(k.state.permissionRoutes,a.menuUrl);F&&F.meta&&F.meta.badge&&(F.meta.badge=A.badge||"")}v.success("\u6A21\u62DF\u4FEE\u6539\u83DC\u5355\u6210\u529F, \u53C2\u6570\u4E3A:"+JSON.stringify(A))}}function D(e){g.warning({title:"\u63D0\u793A",content:"\u662F\u5426\u8981\u5220\u9664\u6B64\u6570\u636E\uFF1F",positiveText:"\u5220\u9664",onPositiveClick:()=>{v.success("\u6A21\u62DF\u5220\u9664\u6210\u529F\uFF0C\u53C2\u6570\u4E3A\uFF1A"+JSON.stringify(e))}})}return ae(y),N(U({rowKey:p,modalDialog:c,dataForm:r},n),{itemFormOptions:m,tableColumns:b,onAddItem:w,onDeleteItem:D,onConfirm:P})}});const te={class:"main-container"};function oe(u,a,n,g,v,k){const c=d("AddButton"),r=d("TableHeader"),p=d("n-data-table"),b=d("TableBody"),m=d("DataForm"),y=d("ModalDialog");return ne(),le("div",te,[i(r,{"show-filter":!1},{"top-right":_(()=>[i(c,{onAdd:u.onAddItem},null,8,["onAdd"])]),_:1}),i(b,null,{default:_(()=>[i(p,{loading:u.tableLoading,data:u.dataList,"row-key":u.rowKey,columns:u.tableColumns},null,8,["loading","data","row-key","columns"])]),_:1}),i(y,{ref:"modalDialog",onConfirm:u.onConfirm,"content-height":"50vh"},{content:_(()=>[i(m,{ref:"dataForm",options:u.itemFormOptions},null,8,["options"])]),_:1},8,["onConfirm"])])}T.render=oe;T.__scopeId="data-v-0466f69a";export{T as default};