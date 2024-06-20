"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[8866],{7260:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>d,assets:()=>u,contentTitle:()=>a,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>f});var r=n(1986),o=n(9937),i=n(384),s=n(7800);const c={},a="useDocumentTitle",l={id:"react/hooks/useDocumentTitle",title:"useDocumentTitle",description:"SEO\uc640\ub294 \uad00\uacc4 \uc5c6\uc774 document.title\uc744 \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\uc2dc\ucf1c\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useDocumentTitle.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useDocumentTitle",permalink:"/modern-kit/docs/react/hooks/useDocumentTitle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useDebounce",permalink:"/modern-kit/docs/react/hooks/useDebounce"},next:{title:"useFileReader",permalink:"/modern-kit/docs/react/hooks/useFileReader"}},u={},d=()=>{const e={button:"button",div:"div",input:"input",...(0,o.a)()},[t,n]=(0,s.useState)("useDocumentTitle"),[c,a]=(0,s.useState)("");return(0,i.jr)(t,{preserveTitleOnUnmount:!1}),(0,r.jsxs)(e.div,{children:[(0,r.jsx)(e.input,{type:"text",value:c,onChange:e=>a(e.target.value)}),(0,r.jsx)(e.button,{onClick:()=>{n(c),alert("\ud0c0\uc774\ud2c0\uc774 \ubcc0\uacbd\ub410\uc2b5\ub2c8\ub2e4.")},children:"\ud0c0\uc774\ud2c0 \ubcc0\uacbd"})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usedocumenttitle",children:"useDocumentTitle"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SEO"}),"\uc640\ub294 \uad00\uacc4 \uc5c6\uc774 ",(0,r.jsx)(t.code,{children:"document.title"}),"\uc744 \ub3d9\uc801\uc73c\ub85c \ubcc0\uacbd\uc2dc\ucf1c\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"preserveTitleOnUnmount"})," \uc635\uc158\uc744 ",(0,r.jsx)(t.code,{children:"true"}),"\ub85c \uc900\ub2e4\uba74 ",(0,r.jsx)(t.code,{children:"unmount"})," \uc2dc\uc5d0 \ubcc0\uacbd \ub41c \ud0c0\uc774\ud2c0\ub85c \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useDocumentTitle/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"interface UseDocumentTitleOption {\n  preserveTitleOnUnmount?: boolean; // default: false\n}\n\nconst useDocumentTitle: (\n  title: string,\n  { preserveTitleOnUnmount }?: UseDocumentTitleOption\n) => void;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useState } from 'react';\nimport { useDocumentTitle } from '@modern-kit/react';\n\nconst Example = () => {\n  const [title, setTitle] = useState('useDocumentTitle');\n  const [inputValue, setInputValue] = useState('');\n\n  const handleChangeTitle = () => {\n    setTitle(inputValue);\n    alert('\ud0c0\uc774\ud2c0\uc774 \ubcc0\uacbd\ub410\uc2b5\ub2c8\ub2e4.');\n  };\n\n  useDocumentTitle(title, {\n    preserveTitleOnUnmount: false, // default: false\n  });\n\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={inputValue}\n        onChange={(e) => setInputValue(e.target.value)}\n      />\n      <button onClick={handleChangeTitle}>\ud0c0\uc774\ud2c0 \ubcc0\uacbd</button>\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d,{})]})}function v(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(7800);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}},384:(e,t,n)=>{n.d(t,{D9:()=>ye,Hk:()=>ee,LN:()=>be,Mm:()=>te,Nr:()=>M,Pr:()=>xe,S1:()=>B,VP:()=>ne,XI:()=>oe,Xs:()=>Oe,Yz:()=>ie,_:()=>me,a9:()=>Z,ac:()=>pe,cM:()=>Ce,df:()=>q,iP:()=>Te,ii:()=>he,jr:()=>re,my:()=>G,nA:()=>Q,uM:()=>R,wY:()=>W,yU:()=>Ee});var r=n(7800),o=n(1986),i=(n(4041),"object"==typeof global&&global&&global.Object===Object&&global),s="object"==typeof self&&self&&self.Object===Object&&self,c=i||s||Function("return this")(),a=c.Symbol,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=a?a.toStringTag:void 0,m=Object.prototype.toString,v="[object Null]",p="[object Undefined]",h=a?a.toStringTag:void 0;var g="[object Symbol]",w=/\s/,b=/^\s+/;function y(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var E=NaN,x=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,j=/^0o[0-7]+$/i,k=parseInt;function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?p:v:h&&h in Object(e)?function(e){var t=u.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return m.call(e)}(e)}(e)==g}(e))return E;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&w.test(e.charAt(t)););return t}(e)+1).replace(b,""):e}(e);var n=S.test(e);return n||j.test(e)?k(e.slice(2),n?2:8):x.test(e)?E:+e}var C=function(){return c.Date.now()},T=Math.max,I=Math.min;const L=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},M=(e,t,n={})=>{const o=L(e),i=(0,r.useMemo)((()=>function(e,t,n){var r,o,i,s,c,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=r,i=o;return r=o=void 0,l=t,s=e.apply(i,n)}function v(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=i}function p(){var e=C();if(v(e))return h(e);c=setTimeout(p,function(e){var n=t-(e-a);return d?I(n,i-(e-l)):n}(e))}function h(e){return c=void 0,f&&r?m(e):(r=o=void 0,s)}function g(){var e=C(),n=v(e);if(r=arguments,o=this,a=e,n){if(void 0===c)return function(e){return l=e,c=setTimeout(p,t),u?m(e):s}(a);if(d)return clearTimeout(c),c=setTimeout(p,t),m(a)}return void 0===c&&(c=setTimeout(p,t)),s}return t=O(t)||0,y(n)&&(u=!!n.leading,i=(d="maxWait"in n)?T(O(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=a=o=c=void 0},g.flush=function(){return void 0===c?s:h(C())},g}(o,t,n)),[o,t,n]);return(e=>{const t=L(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>i.cancel())),i},R=({children:e,capture:t,wait:n,options:o})=>{const i=r.Children.only(e),s=M(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(i,{[t]:s})};function N(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function P(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}a((r=r.apply(e,t||[])).next())}))}function D(e,t,n,r){return new(n||(n=Promise))((function(t,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,s)}c((r=r.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const $=e=>"function"==typeof e,z={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},F=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o)||!X(e[o],t[o]))return!1;return!0},X=(e,t)=>{if(e===t)return!0;if("number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t))return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(e.constructor!==t.constructor)return!1;if(e instanceof Set){if(e.size!==t.size)return!1;const n=[...e],r=[...t];return F(n,r)}if(e instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!t.has(n)||!X(r,t.get(n)))return!1;return!0}return F(e,t)},Y=()=>"undefined"==typeof window&&"undefined"!=typeof global,U=()=>{};function V(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(e){throw new Error(`Failed to parse data: ${e}`)}}const _=()=>!Y(),A=e=>D(void 0,0,void 0,(function*(){if(!_())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const t=document.createElement("textarea");t.value=e,t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(t)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),J=e=>D(void 0,0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return yield A(n)})),B=({onIntersectStart:e=U,onIntersectEnd:t=U,calledOnce:n=!1,root:o=null,threshold:i=0,rootMargin:s="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(0),a=(0,r.useRef)(!1),l=(0,r.useRef)(null),u=L((([r],o)=>{if(!r)return;const i=r.target;r.isIntersecting?(a.current=!0,c.current+=1,e(r)):a.current&&(a.current=!1,c.current+=1,t(r)),n&&c.current>1&&o.unobserve(i)}));return{ref:e=>{l.current&&l.current.disconnect(),l.current=new IntersectionObserver(u,{threshold:i,root:o,rootMargin:s}),e&&l.current.observe(e)}}},H=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),W=(0,r.forwardRef)(((e,t)=>{var{src:n,threshold:r,root:i,rootMargin:s,alt:c,className:a}=e,l=N(e,["src","threshold","root","rootMargin","alt","className"]);const{ref:u}=B({onIntersectStart:e=>{e.target.src=n},calledOnce:!0,threshold:r,root:i,rootMargin:s}),d=a?`lazy-image ${a}`:"lazy-image";return(0,o.jsx)("img",Object.assign({className:d,ref:H(t,u),alt:c},l))}));W.displayName="LazyImage";const Z=(0,r.forwardRef)(((e,t)=>{var{width:n,height:i,fallback:s,className:c,style:a,duration:l="0.2s",onLoad:u}=e,d=N(e,["width","height","fallback","className","style","duration","onLoad"]);const[f,m]=(0,r.useState)(!1),v=!f,p=(0,r.useMemo)((()=>({position:"relative",width:n,height:i})),[n,i]),h=(0,r.useMemo)((()=>Object.assign({position:"absolute",top:0,left:0,opacity:v?0:1,transition:`opacity ${l}`},a)),[v,l,a]),g=(0,r.useCallback)((e=>{u&&u(e),m(!0)}),[u]);return(0,o.jsxs)("div",{className:c?`lazy-image-wrapper ${c}`:"lazy-image-wrapper",style:p,children:[v&&s,(0,o.jsx)(W,Object.assign({ref:t,width:n,height:i,style:h,onLoad:g},d))]})}));Z.displayName="FallbackLazyImage";const q=(0,r.forwardRef)(((e,t)=>{const{onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:s,root:c,rootMargin:a}=e,l=N(e,["onIntersectStart","onIntersectEnd","calledOnce","threshold","root","rootMargin"]),{ref:u}=B({onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:s,root:c,rootMargin:a});return(0,o.jsx)("div",Object.assign({ref:H(t,u)},l,{children:e.children}))}));q.displayName="InView";const G=(0,r.forwardRef)(((e,t)=>{var{as:n,children:i,callback:s}=e,c=N(e,["as","children","callback"]);const{ref:a}=(e=>{const t=(0,r.useRef)(null),n=L(e);return(0,r.useEffect)((()=>{const e=(()=>{if(Y())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=({target:e})=>{const r=t.current;r&&!r.contains(e)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}})(s);return(0,o.jsx)(n||"div",Object.assign({ref:H(a,t)},c,{children:i}))})),K=_()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const Q=({children:e,condition:t,fallback:n=null})=>{const i="function"==typeof(s=t)?s():s;var s;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:n})},ee=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(i=t[e])&&void 0!==i?i:n})},te=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>P(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},ne=()=>{const[e,t]=(0,r.useState)(null);return{copiedData:e,copyText:(0,r.useCallback)((e=>P(void 0,void 0,void 0,(function*(){try{const n=yield A(e);return t(n),!0}catch(e){return console.error(e.message),t(null),!1}}))),[]),copyImage:(0,r.useCallback)((({src:e,toText:n=!1})=>P(void 0,void 0,void 0,(function*(){try{const r=yield(({src:e,toText:t=!1})=>D(void 0,0,void 0,(function*(){if(!_())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield J(e);if(!("write"in window.navigator.clipboard))return yield J(e);if(t)return yield J(e);const n=yield((e,t="png")=>new Promise(((n,r)=>{const o=new Image;o.onload=()=>D(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=o.width,e.height=o.height;try{const r=e.getContext("2d");if(!r)throw new Error("Failed to get 2d context");r.drawImage(o,0,0);const i=yield((e,t)=>new Promise(((n,r)=>{e.toBlob((e=>{e?n(e):r(new Error(`Failed to create blob with format ${t}`))}),t)})))(e,z[t]);n(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),r(e)}})),o.onerror=()=>{r(new Error("Failed to load image"))},o.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),n}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:n});return t(r),!0}catch(e){return console.error(e.message),t(null),!1}}))),[])}},re=(e,{preserveTitleOnUnmount:t=!1}={})=>{K((()=>{const n=document.title;return document.title=e,()=>{t||(document.title=n)}}),[e,t])},oe=({onEnter:e=U,onLeave:t=U}={})=>{const[n,o]=(0,r.useState)(!1),i=(0,r.useRef)(null),s=L((t=>{o(!0),e(t)})),c=L((e=>{o(!1),t(e)}));return(0,r.useEffect)((()=>{const e=i.current;if(e)return e.addEventListener("mouseenter",s),e.addEventListener("mouseleave",c),()=>{e.removeEventListener("mouseenter",s),e.removeEventListener("mouseleave",c)}}),[s,c]),{ref:i,isHovered:n}},ie=(e,t)=>{const n=((e,t)=>{const[n,o]=(0,r.useState)(e),i=L(null!=t?t:X);return(0,r.useEffect)((()=>{i(n,e)||o(e)}),[i,n,e]),n})(t),o=L(e),i="number"==typeof n,s=i?n:n.delay,[c,a]=(0,r.useState)((()=>{var e;return!!i||null===(e=null==n?void 0:n.enabled)||void 0===e||e})),l=(0,r.useCallback)((()=>{a(!0)}),[]),u=(0,r.useCallback)((()=>{a(!1)}),[]);return(0,r.useEffect)((()=>{var e;i||a(null===(e=null==n?void 0:n.enabled)||void 0===e||e)}),[i,n]),(0,r.useEffect)((()=>{if(null==s)return;const e=window.setInterval((()=>{c?o():clearInterval(e)}),s);return()=>clearInterval(e)}),[o,c,s]),{isActing:c,start:l,stop:u}},se="local-storage",ce="session-storage",ae={localStorage:{key:se,subscribe:e=>{window.addEventListener(se,e)},unsubscribe:e=>{window.removeEventListener(se,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(se))}},sessionStorage:{key:ce,subscribe:e=>{window.addEventListener(ce,e)},unsubscribe:e=>{window.removeEventListener(ce,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(ce))}}},le=e=>ae[e],ue=le("localStorage"),de=e=>(ue.subscribe(e),()=>{ue.unsubscribe(e)}),fe=e=>window.localStorage.getItem(e);function me(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>$(n)?n():n),[n]),i=(0,r.useSyncExternalStore)(de,(()=>fe(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>i?V(i):o),[i,o]),setState:(0,r.useCallback)((e=>{try{const n=fe(t),r=n?V(n):o,i=$(e)?e(r):e;window.localStorage.setItem(t,JSON.stringify(i)),ue.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in localStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.localStorage.removeItem(t),ue.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from localStorage: ${e}`)}}),[t])}}const ve=e=>!!_()&&window.matchMedia(e).matches,pe=e=>{const[t,n]=(0,r.useState)(ve(e)),o=(0,r.useCallback)((()=>{n(ve(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},he=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return K((()=>{const t=t=>{const{screenX:r,screenY:o,clientX:i,clientY:s,pageX:c,pageY:a}=t,l={},u={};if(e.current){const t=e.current.getBoundingClientRect(),n=i-t.left,r=s-t.top,o=t.left+window.scrollX,c=t.top+window.scrollY;l.elementRelativeX=n,l.elementRelativeY=r,u.elementPositionX=o,u.elementPositionY=c}n(Object.assign(Object.assign({screenX:r,screenY:o,clientX:i,clientY:s,pageX:c,pageY:a},l),u))};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}}),[]),{ref:e,position:t}},ge=()=>navigator.onLine,we=()=>!0,be=({onlineCallback:e=U,offlineCallback:t=U}={})=>{const n=L((n=>((e,t,n)=>{const r=n=>(t(n),e()),o=t=>(n(t),e());return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}})(n,e,t)));return{isOnline:(0,r.useSyncExternalStore)(n,ge,we)}},ye=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},Ee=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=L(e),s=(0,r.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(s);return t.observe(e),()=>{t.unobserve(e)}}),[s]),{ref:o,contentRect:t}},xe=({autoLock:e=!0}={})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const e=t.current;n.current=window.getComputedStyle(e).overflow,e.style.overflow="hidden"}),[]),i=(0,r.useCallback)((()=>{n.current&&(t.current.style.overflow=n.current)}),[]);return K((()=>(t.current||(t.current=document.body),e&&o(),()=>i())),[e,o,i]),{ref:t,lock:o,unlock:i}},Se=le("sessionStorage"),je=e=>(Se.subscribe(e),()=>{Se.unsubscribe(e)}),ke=e=>window.sessionStorage.getItem(e);function Oe(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>$(n)?n():n),[n]),i=(0,r.useSyncExternalStore)(je,(()=>ke(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>i?V(i):o),[i,o]),setState:(0,r.useCallback)((e=>{try{const n=ke(t),r=n?V(n):o,i=$(e)?e(r):e;window.sessionStorage.setItem(t,JSON.stringify(i)),Se.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in sessionStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.sessionStorage.removeItem(t),Se.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from sessionStorage: ${e}`)}}),[t])}}const Ce=(e="vh",t={enableResize:!1})=>{const{enableResize:n}=t;K((()=>{const t=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty(`--${e}`,`${t}px`)};return t(),n&&window.addEventListener("resize",t),()=>{n&&window.removeEventListener("resize",t)}}),[e,n])},Te=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),s=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),c=M(s,n),a=L(c),l=(0,r.useMemo)((()=>t?a:s),[s,t,a]);return K((()=>(s(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[s,l]),o}}}]);