"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[3776],{3738:(e,n,t)=>{t.r(n),t.d(n,{Example:()=>d,assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var o=t(1986),r=t(9937),i=t(7800),c=t(384);const s={},a="useDebounce",u={id:"react/hooks/useDebounce",title:"useDebounce",description:"debounce\ub97c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useDebounce.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useDebounce",permalink:"/modern-kit/docs/react/hooks/useDebounce",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useClipboard",permalink:"/modern-kit/docs/react/hooks/useClipboard"},next:{title:"useFileReader",permalink:"/modern-kit/docs/react/hooks/useFileReader"}},l={},d=()=>{const e={button:"button",div:"div",p:"p",...(0,r.a)()},[n,t]=(0,i.useState)(1),[s,a]=(0,i.useState)(1),u=(0,c.Nr)((()=>{a(s+1)}),1e3);return(0,o.jsxs)(e.div,{children:[(0,o.jsxs)(e.div,{style:{display:"flex"},children:[(0,o.jsx)(e.button,{onClick:()=>{t(n+1)},children:"\ubc84\ud2bc \ud074\ub9ad"}),(0,o.jsx)(e.div,{style:{width:"50px"}}),(0,o.jsx)(e.button,{onClick:u,children:"debounce \ubc84\ud2bc \ud074\ub9ad"})]}),(0,o.jsxs)(e.div,{children:[(0,o.jsxs)(e.p,{children:["count: ",n]}),(0,o.jsxs)(e.p,{children:["debouncedCount: ",s]})]})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usedebounce",children:"useDebounce"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"debounce"}),"\ub97c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useDebounce/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"// lodash-es DebounceSettings\n// https://www.geeksforgeeks.org/lodash-_-debounce-method/\ninterface DebounceSettings {\n  leading?: boolean | undefined;\n  maxWait?: number | undefined;\n  trailing?: boolean | undefined;\n}\n\ntype DebounceParameters = Parameters<typeof debounce>;\n\nconst useDebounce: (\n  callback: DebounceParameters[0], //  (...args: any) => any\n  wait: DebounceParameters[1], // number\n  options?: DebounceParameters[2] // DebounceSettings\n) => DebouncedFunc<(...args: any) => any>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useState } from 'react';\nimport { useDebounce } from '@modern-kit/react';\n\nconst Example = () => {\n  const [count, setCount] = useState(1);\n  const [debouncedCount, setDebouncedCount] = useState(1);\n\n  const countUp = () => {\n    setCount(count + 1);\n  };\n\n  const countUpWithDebounce = useDebounce(() => {\n    setDebouncedCount(debouncedCount + 1);\n  }, 1000);\n\n  return (\n    <div>\n      <div style={{ display: \"flex\" }}>\n        <button onClick={countUp}>\ubc84\ud2bc \ud074\ub9ad</button>\n        <div style={{ width: \"50px\" }} />\n        <button onClick={countUpWithDebounce}>debounce \ubc84\ud2bc \ud074\ub9ad</button>\n      </div>\n      <div>\n        <p>count: {count}</p>\n        <p>debouncedCount: {debouncedCount}</p>\n      </div>\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,o.jsx)(d,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var o=t(7800);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}},384:(e,n,t)=>{t.d(n,{D9:()=>X,Hk:()=>q,Mm:()=>G,Nr:()=>T,VP:()=>J,ac:()=>Q,df:()=>V,iP:()=>ne,nA:()=>Z,uM:()=>R,wY:()=>B,yU:()=>ee});var o=t(7800),r=t(1986),i=(t(4041),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),a=s.Symbol,u=Object.prototype,l=u.hasOwnProperty,d=u.toString,f=a?a.toStringTag:void 0,p=Object.prototype.toString,h="[object Null]",b="[object Undefined]",m=a?a.toStringTag:void 0;var v="[object Symbol]",g=/\s/,y=/^\s+/;function w(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var x=NaN,j=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt;function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?b:h:m&&m in Object(e)?function(e){var n=l.call(e,f),t=e[f];try{e[f]=void 0;var o=!0}catch(e){}var r=d.call(e);return o&&(n?e[f]=t:delete e[f]),r}(e):function(e){return p.call(e)}(e)}(e)==v}(e))return x;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&g.test(e.charAt(n)););return n}(e)+1).replace(y,""):e}(e);var t=C.test(e);return t||k.test(e)?E(e.slice(2),t?2:8):j.test(e)?x:+e}var D=function(){return s.Date.now()},S=Math.max,M=Math.min;const P=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(...e)),[])},T=(e,n,t={})=>{const r=P(e),i=(0,o.useMemo)((()=>function(e,n,t){var o,r,i,c,s,a,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=o,i=r;return o=r=void 0,u=n,c=e.apply(i,t)}function h(e){var t=e-a;return void 0===a||t>=n||t<0||d&&e-u>=i}function b(){var e=D();if(h(e))return m(e);s=setTimeout(b,function(e){var t=n-(e-a);return d?M(t,i-(e-u)):t}(e))}function m(e){return s=void 0,f&&o?p(e):(o=r=void 0,c)}function v(){var e=D(),t=h(e);if(o=arguments,r=this,a=e,t){if(void 0===s)return function(e){return u=e,s=setTimeout(b,n),l?p(e):c}(a);if(d)return clearTimeout(s),s=setTimeout(b,n),p(a)}return void 0===s&&(s=setTimeout(b,n)),c}return n=O(n)||0,w(t)&&(l=!!t.leading,i=(d="maxWait"in t)?S(O(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),u=0,o=a=r=s=void 0},v.flush=function(){return void 0===s?c:m(D())},v}(r,n,t)),[r,n,t]);return(e=>{const n=P(e);(0,o.useEffect)((()=>()=>n()),[n])})((()=>i.cancel())),i},R=({children:e,capture:n,wait:t,options:r})=>{const i=o.Children.only(e),c=T(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(i,{[n]:c})};function I(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}function F(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))}function N(e,n,t,o){return new(t||(t=Promise))((function(n,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(i,c)}s((o=o.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const U={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},$=()=>"undefined"==typeof window&&"undefined"!=typeof global,L=()=>!$(),_=e=>N(void 0,0,void 0,(function*(){if(!L())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const n=document.createElement("textarea");n.value=e,n.style.opacity="0",document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(n)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),W=e=>N(void 0,0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return yield _(t)})),z=()=>{},A=({action:e,calledOnce:n=!1,root:t=null,threshold:r=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=P(null!=e?e:z),a=P((([e],t)=>{if(e&&e.isIntersecting){const o=e.target;s(e),n&&t.unobserve(o)}}));return P((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(a,{root:t,threshold:r,rootMargin:i}),e&&c.current.observe(e)}))},H=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),V=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,a=I(e,["action","calledOnce","threshold","root","rootMargin"]),u=A({action:t,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:H(n,u)},a,{children:e.children}))}));V.displayName="InView";const B=(0,o.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:a}=e,u=I(e,["src","style","threshold","root","rootMargin"]);const l=A({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:a}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},u,{ref:H(n,l),style:d}))}));B.displayName="LazyImage";const Y=L()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const Z=({children:e,condition:n,fallback:t=null})=>{const i="function"==typeof(c=n)?c():c;var c;return(0,r.jsx)(o.Fragment,i?{children:e}:{children:t})},q=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var i;return(0,r.jsx)(o.Fragment,null==e?{children:t}:{children:null!==(i=n[e])&&void 0!==i?i:t})},G=()=>{const[e,n]=(0,o.useState)(!1),t=(0,o.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>F(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},J=()=>{const[e,n]=(0,o.useState)(null),t=(0,o.useCallback)((e=>F(void 0,void 0,void 0,(function*(){try{const t=yield _(e);return n(t),!0}catch(e){return console.error(e.message),n(null),!1}}))),[]),r=(0,o.useCallback)((({src:e,toText:t=!1})=>F(void 0,void 0,void 0,(function*(){try{const o=yield(({src:e,toText:n=!1})=>N(void 0,0,void 0,(function*(){if(!L())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield W(e);if(!("write"in window.navigator.clipboard))return yield W(e);if(n)return yield W(e);const t=yield((e,n="png")=>new Promise(((t,o)=>{const r=new Image;r.onload=()=>N(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=r.width,e.height=r.height;try{const o=e.getContext("2d");if(!o)throw new Error("Failed to get 2d context");o.drawImage(r,0,0);const i=yield((e,n)=>new Promise(((t,o)=>{e.toBlob((e=>{e?t(e):o(new Error(`Failed to create blob with format ${n}`))}),n)})))(e,U[n]);t(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),o(e)}})),r.onerror=()=>{o(new Error("Failed to load image"))},r.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[t.type]:t})]),t}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:t});return n(o),!0}catch(e){return console.error(e.message),n(null),!1}}))),[]);return{copiedData:e,copyText:t,copyImage:r}},K=e=>!!L()&&window.matchMedia(e).matches,Q=e=>{const[n,t]=(0,o.useState)(K(e)),r=(0,o.useCallback)((()=>{t(K(e))}),[e]);return(0,o.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}),[e,r]),{isMatch:n}},X=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},ee=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=P(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:r,contentRect:n}},ne=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=T(c,t),a=P(s),u=(0,o.useMemo)((()=>n?a:c),[c,n,a]);return Y((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[c,u]),r}}}]);