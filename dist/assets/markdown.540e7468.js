import{_}from"./index.87bc6386.js";import{d as u,Y as v,t as f,v as h,r as d,o as i,c as r,a as t,h as k,i as w,D as a}from"./vendor.2777dd0c.js";var c=u({name:"Markdown",components:{MarkdownEditor:_},data(){return{editorText:"",priviewContent:""}},methods:{addText(){this.$refs.markdownEditor.addText(`
### \u65B0\u589E\u5185\u5BB9`)},addImage(){this.$refs.markdownEditor.addImage(`
![](https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png)`)},getHTML(){this.priviewContent=v.prototype.markdown(this.editorText)}}});const o=w();f("data-v-1dfbab80");const C={class:"main-container"},T={class:"editor-container"},b={class:"mt-5"},I=a("\u589E\u52A0\u6587\u672C"),M=a("\u589E\u52A0\u56FE\u7247"),g=a("\u9884\u89C8HTML");h();const E=o((e,s,$,y,V,x)=>{const l=d("MarkdownEditor"),n=d("n-button"),p=d("n-space");return i(),r("div",C,[t("div",T,[t(l,{ref:"markdownEditor",modelValue:e.editorText,"onUpdate:modelValue":s[1]||(s[1]=m=>e.editorText=m),height:400,placeholder:"Insert here\u2026"},null,8,["modelValue"])]),t("div",b,[t(p,null,{default:o(()=>[t(n,{size:"small",onClick:e.addText},{default:o(()=>[I]),_:1},8,["onClick"]),t(n,{size:"small",onClick:e.addImage},{default:o(()=>[M]),_:1},8,["onClick"]),t(n,{size:"small",type:"primary",onClick:e.getHTML},{default:o(()=>[g]),_:1},8,["onClick"])]),_:1})]),e.priviewContent?(i(),r("div",{key:0,class:"p-4 mt-4 priview-content",innerHTML:e.priviewContent},null,8,["innerHTML"])):k("v-if",!0)])});c.render=E;c.__scopeId="data-v-1dfbab80";export{c as default};