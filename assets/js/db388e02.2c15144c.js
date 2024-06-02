"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[9576],{3065:(e,n,t)=>{t.r(n),t.d(n,{Example:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>f});var o=t(1986),r=t(9937),i=t(7800),c=t(384);const s={},l="useBlockPromiseMultipleClick",a={id:"react/hooks/useBlockPromiseMultipleClick",title:"useBlockPromiseMultipleClick",description:"\uc778\uc790\ub85c \ub118\uaca8\uc900 Callback \ud568\uc218\uc758 Promise \ub3d9\uc791\uc744 \uc218\ud589\ud558\ub294 \ub3d9\uc548 \uc911\ubcf5 \ud638\ucd9c\uc774 \ubd88\uac00\ub2a5\ud558\ub3c4\ub85d \ucc28\ub2e8\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useBlockPromiseMultipleClick.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useBlockPromiseMultipleClick",permalink:"/modern-kit/docs/react/hooks/useBlockPromiseMultipleClick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useAsyncPreservedCallback",permalink:"/modern-kit/docs/react/hooks/useAsyncPreservedCallback"},next:{title:"useClipboard",permalink:"/modern-kit/docs/react/hooks/useClipboard"}},u={},d=()=>{const e={button:"button",div:"div",p:"p",...(0,r.a)()},[n,t]=(0,i.useState)(1),[s,l]=(0,i.useState)(1),[a,u]=(0,i.useState)(null),{isLoading:d,blockMultipleClick:f}=(0,c.Mm)(),p=async()=>{const e=await fetch(`https://jsonplaceholder.typicode.com/todos/${n}`).then((e=>e.json()));u(e),t(n+1)};return(0,o.jsxs)(e.div,{children:[(0,o.jsx)(e.button,{onClick:()=>{l(s+1),f(p)},children:"\ubc84\ud2bc \ud074\ub9ad"}),(0,o.jsxs)(e.div,{children:[(0,o.jsxs)(e.p,{children:["BlockingCount: ",n]}),(0,o.jsxs)(e.p,{children:["NonBlockingCount: ",s]})]}),d?(0,o.jsx)(e.p,{children:"\ub85c\ub529\uc911"}):(0,o.jsx)(e.p,{children:a?.title})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"useblockpromisemultipleclick",children:"useBlockPromiseMultipleClick"}),"\n",(0,o.jsxs)(n.p,{children:["\uc778\uc790\ub85c \ub118\uaca8\uc900 Callback \ud568\uc218\uc758 ",(0,o.jsx)(n.code,{children:"Promise"})," \ub3d9\uc791\uc744 \uc218\ud589\ud558\ub294 \ub3d9\uc548 ",(0,o.jsx)(n.code,{children:"\uc911\ubcf5 \ud638\ucd9c\uc774 \ubd88\uac00\ub2a5\ud558\ub3c4\ub85d \ucc28\ub2e8"}),"\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://modern-agile-team.github.io/modern-kit/docs/react/hooks/useDebounce",children:"useDebounce"}),"\ub97c \uc0ac\uc6a9\ud574 \uc911\ubcf5 \ud638\ucd9c\uc744 \ubc29\uc9c0\ud560 \uc218\ub294 \uc788\uc9c0\ub9cc, \uc2dc\uac04 \uac12\uc5d0 \uc758\uc874\ud558\uae30 \ub54c\ubb38\uc5d0 \ub9cc\uc57d ",(0,o.jsx)(n.code,{children:"Promise"}),"\uac00 \uc774\ud589\ub420 \ub54c\uae4c\uc9c0 \ud638\ucd9c\uc744 \uc644\ubcbd\ud558\uac8c \ucc28\ub2e8\ud574\uc57c \ud55c\ub2e4\uba74 \ubd80\uc871\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(n.p,{children:["\ud574\ub2f9 \ud6c5\uc740 Promise \ub3d9\uc791\uc744 \uc218\ud589\ud558\ub294 \ub3d9\uc548 \uc911\ubcf5 \ud638\ucd9c\uc744 \ubc29\uc9c0\ud558\uae30 \ub54c\ubb38\uc5d0, ",(0,o.jsx)(n.code,{children:"Promise"})," \uc774\ud589\uc744 \ubcf4\uc7a5\ud558\uba74\uc11c \uc911\ubcf5 \ud638\ucd9c\uc744 \ubc29\uc9c0\ud558\uace0 \uc2f6\uc744 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useBlockPromiseMultipleClick/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"const useBlockPromiseMultipleClick: () => {\n  isLoading: boolean;\n  blockMultipleClick: (callback: () => Promise<unknown>) => Promise<void>;\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { useState } from 'react';\nimport { useBlockPromiseMultipleClick } from '@modern-kit/react';\n\ninterface Value {\n  userId: number;\n  id: number;\n  title: string;\n  completed: boolean;\n}\n\nconst Example = () => {\n  const [blockingCount, setBlockingCount] = useState(1);\n  const [nonBlockingCount, setNonBlockingCount] = useState(1);\n  const [value, setValue] = useState<Value | null>(null);\n\n  const { isLoading, blockMultipleClick } = useBlockPromiseMultipleClick();\n\n  const fetchApi = async () => {\n    const res = await fetch(\n      `https://jsonplaceholder.typicode.com/todos/${blockingCount}`\n    ).then((response) => response.json());\n\n    setValue(res);\n    setBlockingCount(blockingCount + 1);\n  };\n\n  const handleClick = () => {\n    setNonBlockingCount(nonBlockingCount + 1);\n    blockMultipleClick(fetchApi); // (*) Promise \ubc18\ud658\ud558\ub294 \ud568\uc218\ub97c \uc778\uc790\ub85c \ub123\uc5b4\uc8fc\uc138\uc694.\n  };\n\n  return (\n    <div>\n      <button onClick={handleClick}>\ubc84\ud2bc \ud074\ub9ad</button>\n      <div>\n        <p>BlockingCount: {blockingCount}</p>\n        <p>NonBlockingCount: {nonBlockingCount}</p>\n      </div>\n      {isLoading ? <p>\ub85c\ub529\uc911</p> : <p>{value?.title}</p>}\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,o.jsx)(d,{})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var o=t(7800);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}},384:(e,n,t)=>{t.d(n,{D9:()=>ae,Hk:()=>G,LN:()=>le,Mm:()=>K,Nr:()=>L,VP:()=>Q,XI:()=>ne,Yz:()=>te,ac:()=>re,df:()=>W,iP:()=>de,ii:()=>ie,jr:()=>ee,my:()=>J,nA:()=>q,uM:()=>R,wY:()=>H,yU:()=>ue});var o=t(7800),r=t(1986),i=(t(4041),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),l=s.Symbol,a=Object.prototype,u=a.hasOwnProperty,d=a.toString,f=l?l.toStringTag:void 0,p=Object.prototype.toString,m="[object Null]",v="[object Undefined]",h=l?l.toStringTag:void 0;var g="[object Symbol]",b=/\s/,y=/^\s+/;function k(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var w=NaN,x=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,j=/^0o[0-7]+$/i,E=parseInt;function P(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:m:h&&h in Object(e)?function(e){var n=u.call(e,f),t=e[f];try{e[f]=void 0;var o=!0}catch(e){}var r=d.call(e);return o&&(n?e[f]=t:delete e[f]),r}(e):function(e){return p.call(e)}(e)}(e)==g}(e))return w;if(k(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=k(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&b.test(e.charAt(n)););return n}(e)+1).replace(y,""):e}(e);var t=C.test(e);return t||j.test(e)?E(e.slice(2),t?2:8):x.test(e)?w:+e}var M=function(){return s.Date.now()},O=Math.max,S=Math.min;const B=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(...e)),[])},L=(e,n,t={})=>{const r=B(e),i=(0,o.useMemo)((()=>function(e,n,t){var o,r,i,c,s,l,a=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=o,i=r;return o=r=void 0,a=n,c=e.apply(i,t)}function m(e){var t=e-l;return void 0===l||t>=n||t<0||d&&e-a>=i}function v(){var e=M();if(m(e))return h(e);s=setTimeout(v,function(e){var t=n-(e-l);return d?S(t,i-(e-a)):t}(e))}function h(e){return s=void 0,f&&o?p(e):(o=r=void 0,c)}function g(){var e=M(),t=m(e);if(o=arguments,r=this,l=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(v,n),u?p(e):c}(l);if(d)return clearTimeout(s),s=setTimeout(v,n),p(l)}return void 0===s&&(s=setTimeout(v,n)),c}return n=P(n)||0,k(t)&&(u=!!t.leading,i=(d="maxWait"in t)?O(P(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),a=0,o=l=r=s=void 0},g.flush=function(){return void 0===s?c:h(M())},g}(r,n,t)),[r,n,t]);return(e=>{const n=B(e);(0,o.useEffect)((()=>()=>n()),[n])})((()=>i.cancel())),i},R=({children:e,capture:n,wait:t,options:r})=>{const i=o.Children.only(e),c=L(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(i,{[n]:c})};function I(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}function N(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{l(o.next(e))}catch(e){i(e)}}function s(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}l((o=o.apply(e,n||[])).next())}))}function T(e,n,t,o){return new(t||(t=Promise))((function(n,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(i,c)}s((o=o.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const Y={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},X=()=>"undefined"==typeof window&&"undefined"!=typeof global,z=()=>!X(),$=e=>T(void 0,0,void 0,(function*(){if(!z())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const n=document.createElement("textarea");n.value=e,n.style.opacity="0",document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(n)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),A=e=>T(void 0,0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return yield $(t)})),F=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(const r of t)if(!o.includes(r)||!D(e[r],n[r]))return!1;return!0},D=(e,n)=>{if(e===n)return!0;if("number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n))return!0;if("object"!=typeof e||"object"!=typeof n||null===e||null===n)return!1;if(e.constructor!==n.constructor)return!1;if(e instanceof Set){if(e.size!==n.size)return!1;const t=[...e],o=[...n];return F(t,o)}if(e instanceof Map){if(e.size!==n.size)return!1;for(const[t,o]of e)if(!n.has(t)||!D(o,n.get(t)))return!1;return!0}return F(e,n)},V=()=>{},_=({action:e,calledOnce:n=!1,root:t=null,threshold:r=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=B(null!=e?e:V),l=B((([e],t)=>{if(e&&e.isIntersecting){const o=e.target;s(e),n&&t.unobserve(o)}}));return B((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(l,{root:t,threshold:r,rootMargin:i}),e&&c.current.observe(e)}))},U=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),W=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,l=I(e,["action","calledOnce","threshold","root","rootMargin"]),a=_({action:t,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:U(n,a)},l,{children:e.children}))}));W.displayName="InView";const H=(0,o.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:l}=e,a=I(e,["src","style","threshold","root","rootMargin"]);const u=_({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:l}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},a,{ref:U(n,u),style:d}))}));H.displayName="LazyImage";const Z=z()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const q=({children:e,condition:n,fallback:t=null})=>{const i="function"==typeof(c=n)?c():c;var c;return(0,r.jsx)(o.Fragment,i?{children:e}:{children:t})},G=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var i;return(0,r.jsx)(o.Fragment,null==e?{children:t}:{children:null!==(i=n[e])&&void 0!==i?i:t})},J=(0,o.forwardRef)(((e,n)=>{var{as:t,children:i,callback:c}=e,s=I(e,["as","children","callback"]);const{ref:l}=(e=>{const n=(0,o.useRef)(null),t=B(e);return(0,o.useEffect)((()=>{const e=(()=>{if(X())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",o=({target:e})=>{const o=n.current;o&&!o.contains(e)&&t(o)};return document.addEventListener(e,o),()=>{document.removeEventListener(e,o)}}),[t]),{ref:n}})(c);return(0,r.jsx)(t||"div",Object.assign({ref:U(l,n)},s,{children:i}))})),K=()=>{const[e,n]=(0,o.useState)(!1),t=(0,o.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>N(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},Q=()=>{const[e,n]=(0,o.useState)(null);return{copiedData:e,copyText:(0,o.useCallback)((e=>N(void 0,void 0,void 0,(function*(){try{const t=yield $(e);return n(t),!0}catch(e){return console.error(e.message),n(null),!1}}))),[]),copyImage:(0,o.useCallback)((({src:e,toText:t=!1})=>N(void 0,void 0,void 0,(function*(){try{const o=yield(({src:e,toText:n=!1})=>T(void 0,0,void 0,(function*(){if(!z())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield A(e);if(!("write"in window.navigator.clipboard))return yield A(e);if(n)return yield A(e);const t=yield((e,n="png")=>new Promise(((t,o)=>{const r=new Image;r.onload=()=>T(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=r.width,e.height=r.height;try{const o=e.getContext("2d");if(!o)throw new Error("Failed to get 2d context");o.drawImage(r,0,0);const i=yield((e,n)=>new Promise(((t,o)=>{e.toBlob((e=>{e?t(e):o(new Error(`Failed to create blob with format ${n}`))}),n)})))(e,Y[n]);t(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),o(e)}})),r.onerror=()=>{o(new Error("Failed to load image"))},r.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[t.type]:t})]),t}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:t});return n(o),!0}catch(e){return console.error(e.message),n(null),!1}}))),[])}},ee=(e,{preserveTitleOnUnmount:n=!1}={})=>{Z((()=>{const t=document.title;return document.title=e,()=>{n||(document.title=t)}}),[e,n])},ne=({onEnter:e=V,onLeave:n=V}={})=>{const[t,r]=(0,o.useState)(!1),i=(0,o.useRef)(null),c=B((n=>{r(!0),e(n)})),s=B((e=>{r(!1),n(e)}));return(0,o.useEffect)((()=>{const e=i.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",s),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",s)}}),[c,s]),{ref:i,isHovered:t}},te=(e,n)=>{const t=((e,n)=>{const[t,r]=(0,o.useState)(e),i=B(null!=n?n:D);return(0,o.useEffect)((()=>{i(t,e)||r(e)}),[i,t,e]),t})(n),r=B(e),i="number"==typeof t,c=i?t:t.delay,[s,l]=(0,o.useState)((()=>{var e;return!!i||null===(e=null==t?void 0:t.enabled)||void 0===e||e})),a=(0,o.useCallback)((()=>{l(!0)}),[]),u=(0,o.useCallback)((()=>{l(!1)}),[]);return(0,o.useEffect)((()=>{var e;i||l(null===(e=null==t?void 0:t.enabled)||void 0===e||e)}),[i,t]),(0,o.useEffect)((()=>{if(null==c)return;const e=window.setInterval((()=>{s?r():clearInterval(e)}),c);return()=>clearInterval(e)}),[r,s,c]),{isActing:s,start:a,stop:u}},oe=e=>!!z()&&window.matchMedia(e).matches,re=e=>{const[n,t]=(0,o.useState)(oe(e)),r=(0,o.useCallback)((()=>{t(oe(e))}),[e]);return(0,o.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}),[e,r]),{isMatch:n}},ie=()=>{const e=(0,o.useRef)(null),[n,t]=(0,o.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return Z((()=>{const n=n=>{const{screenX:o,screenY:r,clientX:i,clientY:c,pageX:s,pageY:l}=n,a={},u={};if(e.current){const n=e.current.getBoundingClientRect(),t=i-n.left,o=c-n.top,r=n.left+window.scrollX,s=n.top+window.scrollY;a.elementRelativeX=t,a.elementRelativeY=o,u.elementPositionX=r,u.elementPositionY=s}t(Object.assign(Object.assign({screenX:o,screenY:r,clientX:i,clientY:c,pageX:s,pageY:l},a),u))};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}}),[]),{ref:e,position:n}},ce=()=>navigator.onLine,se=()=>!0,le=({onlineCallback:e=V,offlineCallback:n=V}={})=>{const t=B((t=>((e,n,t)=>{const o=t=>(n(t),e()),r=n=>(t(n),e());return window.addEventListener("online",o),window.addEventListener("offline",r),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",r)}})(t,e,n)));return{isOnline:(0,o.useSyncExternalStore)(t,ce,se)}},ae=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},ue=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=B(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:r,contentRect:n}},de=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=L(c,t),l=B(s),a=(0,o.useMemo)((()=>n?l:c),[c,n,l]);return Z((()=>(c(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[c,a]),r}}}]);