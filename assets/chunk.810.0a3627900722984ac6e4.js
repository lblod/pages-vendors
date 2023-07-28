/*! For license information please see chunk.810.0a3627900722984ac6e4.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[810],{3810:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>C})
const r="-shadowcsshost",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",n=new RegExp("(-shadowcsshost"+o,"gim"),c=new RegExp("(-shadowcsscontext"+o,"gim"),l=new RegExp("(-shadowcssslotted"+o,"gim"),i="-shadowcsshost-no-combinator",a=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,g=/:host/gim,u=/::slotted/gim,d=/:host-context/gim,m=/\/\*\s*[\s\S]*?\*\//g,f=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,x=/([{}])/g,$=/(^.*?[^\\])??((:+)(.*)|$)/,w="%BLOCK%",b=(e,t)=>{const s=v(e)
let r=0
return s.escapedString.replace(_,(function(){const e=arguments.length<=2?void 0:arguments[2]
let o="",n=arguments.length<=4?void 0:arguments[4],c=""
n&&n.startsWith("{%BLOCK%")&&(o=s.blocks[r++],n=n.substring(w.length+1),c="{")
const l={selector:e,content:o},i=t(l)
return`${arguments.length<=1?void 0:arguments[1]}${i.selector}${arguments.length<=3?void 0:arguments[3]}${c}${i.content}${n}`}))},v=e=>{const t=e.split(x),s=[],r=[]
let o=0,n=[]
for(let c=0;c<t.length;c++){const e=t[c]
"}"===e&&o--,o>0?n.push(e):(n.length>0&&(r.push(n.join("")),s.push(w),n=[]),s.push(e)),"{"===e&&o++}return n.length>0&&(r.push(n.join("")),s.push(w)),{escapedString:s.join(""),blocks:r}},S=(e,t,s)=>e.replace(t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
if(t[2]){const e=t[2].split(","),r=[]
for(let o=0;o<e.length;o++){const n=e[o].trim()
if(!n)break
r.push(s(i,n,t[3]))}return r.join(",")}return i+t[3]})),O=(e,t,s)=>e+t.replace(r,"")+s,W=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,k=(e,t)=>e.replace($,(function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:""
return s+t+r+o})),j=(e,t,s,r,o)=>b(e,(e=>{let o=e.selector,n=e.content
return"@"!==e.selector[0]?o=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():((e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t)
return!s.test(e)})(e,t)?((e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(function(e){return arguments.length<=1?void 0:arguments[1]}))),o=e=>{let o=e.trim()
if(!o)return""
if(e.indexOf(i)>-1)o=((e,t,s)=>{if(p.lastIndex=0,p.test(e)){const t=`.${s}`
return e.replace(a,((e,s)=>k(s,t))).replace(p,t+" ")}return t+" "+e})(e,t,s)
else{const t=e.replace(p,"")
t.length>0&&(o=k(t,r))}return o},n=(e=>{const t=[]
let s=0
return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const o=`__ph-${s}__`
return t.push(r),s++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,o)=>{const n=`__ph-${s}__`
return t.push(o),s++,r+n})),placeholders:t}})(e)
let c,l="",h=0
const g=/( |>|\+|~(?!=))\s*/g
let u=!((e=n.content).indexOf(i)>-1)
for(;null!==(c=g.exec(e));){const t=c[1],s=e.slice(h,c.index).trim()
u=u||s.indexOf(i)>-1,l+=`${u?o(s):s} ${t} `,h=g.lastIndex}const d=e.substring(h)
return u=u||d.indexOf(i)>-1,l+=u?o(d):d,m=n.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]))
var m})(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(n=j(e.content,t,s,r)),{selector:o.replace(/\s{2,}/g," ").trim(),content:n}})),C=(e,t,s)=>{const o=t+"-h",a=t+"-s",p=e.match(f)||[]
e=e.replace(m,"")
const _=[]
if(s){const t=e=>{const t=`/*!@___${_.length}___*/`,s=`/*!@${e.selector}*/`
return _.push({placeholder:t,comment:s}),e.selector=t+e.selector,e}
e=b(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=b(e.content,t),e):e))}const x=((e,t,s,o,a)=>{const p=((e,t)=>{const s="."+t+" > ",r=[]
return e=e.replace(l,(function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o]
if(t[2]){const e=t[2].trim(),o=t[3],n=s+e+o
let c=""
for(let s=t[4]-1;s>=0;s--){const e=t[5][s]
if("}"===e||","===e)break
c=e+c}const l=c+n,i=`${c.trimRight()}${n.trim()}`
if(l.trim()!==i.trim()){const e=`${i}, ${l}`
r.push({orgSelector:l,updatedSelector:e})}return n}return i+t[3]})),{selectors:r,cssText:e}})(e=(e=>S(e,c,W))(e=(e=>S(e,n,O))(e=e.replace(d,"-shadowcsscontext").replace(g,r).replace(u,"-shadowcssslotted"))),o)
return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=p.cssText),t&&(e=j(e,t,s,o)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}})(e,t,o,a)
return e=[x.cssText,...p].join("\n"),s&&_.forEach((t=>{let{placeholder:s,comment:r}=t
e=e.replace(s,r)})),x.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}])
