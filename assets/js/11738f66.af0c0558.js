"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4949],{1724:(e,t,n)=>{n.r(t),n.d(t,{ResizeObserver:()=>u,assets:()=>l,contentTitle:()=>s,default:()=>w,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(1986),r=n(9937),o=n(384);const a={},s="useResizeObserver",c={id:"react/hooks/useResizeObserver",title:"useResizeObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useResizeObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useResizeObserver",permalink:"/modern-kit/docs/react/hooks/useResizeObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePrevious",permalink:"/modern-kit/docs/react/hooks/usePrevious"},next:{title:"useScrollLock",permalink:"/modern-kit/docs/react/hooks/useScrollLock"}},l={},u=()=>{const e={br:"br",div:"div",...(0,r.a)()},{ref:t,contentRect:n}=(0,o.yU)((e=>{console.log("resize",e)}));return(0,i.jsxs)(e.div,{ref:t,style:{width:"100%",height:"400px",background:"#439966",fontSize:"2rem",color:"#fff"},children:["\ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,i.jsx)(e.br,{}),`width: ${n.width}, height: ${n.height}`]})},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function b(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"useresizeobserver",children:"useResizeObserver"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"ref"}),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useResizeObserver/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"/**\n * type ContentRect = {\n    readonly bottom: number;\n    readonly height: number;\n    readonly left: number;\n    readonly right: number;\n    readonly top: number;\n    readonly width: number;\n    readonly x: number;\n    readonly y: number;\n  }\n */\ntype ContentRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nconst useResizeObserver: <T extends HTMLElement>(\n  action: (entry: ResizeObserverEntry) => void\n) => {\n  ref: React.RefObject<T>;\n  contentRect: ContentRect;\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { forwardRef, useRef } from 'react';\nimport { useResizeObserver } from '@modern-kit/react';\n\nconst Example = () => {\n  const { ref, contentRect } = useResizeObserver<HTMLDivElement>((entry) => {\n    console.log('resize', entry);\n  });\n\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      height: '400px', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div\n      ref={ref}\n      style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      {`width: ${contentRect.width}, height: ${contentRect.height}`}\n    </div>\n  );\n};\n"})}),"\n","\n",(0,i.jsx)(u,{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"ResizeObserver API"})}),"\n"]})]})}function w(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7800);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}},384:(e,t,n)=>{n.d(t,{Bg:()=>te,D9:()=>Oe,FS:()=>qe,Hk:()=>ae,LN:()=>je,Mm:()=>se,Nr:()=>I,Pr:()=>Ce,S1:()=>J,VP:()=>ce,XI:()=>ue,Xs:()=>Me,Yz:()=>de,_:()=>ge,a9:()=>Q,ac:()=>xe,cM:()=>Fe,df:()=>ee,g4:()=>Ie,iP:()=>Ue,ii:()=>ke,jr:()=>le,my:()=>ne,nA:()=>oe,qx:()=>a,uM:()=>L,wY:()=>K,xu:()=>re,yU:()=>Re});var i=n(1986),r=n(7800);n(4041);const o=()=>{const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{t(!0)}),[]),e},a=({fallback:e=(0,i.jsx)(i.Fragment,{}),children:t})=>o()?(0,i.jsx)(i.Fragment,{children:t}):e;var s="object"==typeof global&&global&&global.Object===Object&&global,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),u=l.Symbol,d=Object.prototype,b=d.hasOwnProperty,w=d.toString,f=u?u.toStringTag:void 0,p=Object.prototype.toString,m="[object Null]",v="[object Undefined]",h=u?u.toStringTag:void 0;var g="[object Symbol]",y=/\s/,x=/^\s+/;function k(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var S=NaN,E=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,O=/^0o[0-7]+$/i,R=parseInt;function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:m:h&&h in Object(e)?function(e){var t=b.call(e,f),n=e[f];try{e[f]=void 0;var i=!0}catch(e){}var r=w.call(e);return i&&(t?e[f]=n:delete e[f]),r}(e):function(e){return p.call(e)}(e)}(e)==g}(e))return S;if(k(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=k(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(x,""):e}(e);var n=j.test(e);return n||O.test(e)?R(e.slice(2),n?2:8):E.test(e)?S:+e}var z=function(){return l.Date.now()},T=Math.max,N=Math.min;const M=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},I=(e,t,n={})=>{const i=M(e),o=(0,r.useMemo)((()=>function(e,t,n){var i,r,o,a,s,c,l=0,u=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function w(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function f(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function p(){var e=z();if(f(e))return m(e);s=setTimeout(p,function(e){var n=t-(e-c);return d?N(n,o-(e-l)):n}(e))}function m(e){return s=void 0,b&&i?w(e):(i=r=void 0,a)}function v(){var e=z(),n=f(e);if(i=arguments,r=this,c=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(p,t),u?w(e):a}(c);if(d)return clearTimeout(s),s=setTimeout(p,t),w(c)}return void 0===s&&(s=setTimeout(p,t)),a}return t=C(t)||0,k(n)&&(u=!!n.leading,o=(d="maxWait"in n)?T(C(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=r=s=void 0},v.flush=function(){return void 0===s?a:m(z())},v}(i,t,n)),[i,t,n]);return(e=>{const t=M(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>o.cancel())),o},L=({children:e,capture:t,wait:n,options:i})=>{const o=r.Children.only(e),a=I(((...e)=>{const n=null==o?void 0:o.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,i);return(0,r.cloneElement)(o,{[t]:a})};function P(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}function _(e,t,n,i){return new(n||(n=Promise))((function(r,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((i=i.apply(e,t||[])).next())}))}function A(e,t,n,i){return new(n||(n=Promise))((function(t,r){function o(e){try{s(i.next(e))}catch(e){r(e)}}function a(e){try{s(i.throw(e))}catch(e){r(e)}}function s(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(o,a)}s((i=i.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const $=e=>"function"==typeof e,q={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},F=(e,t)=>{const n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(const r of n)if(!i.includes(r)||!U(e[r],t[r]))return!1;return!0},U=(e,t)=>{if(e===t)return!0;if("number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t))return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(e.constructor!==t.constructor)return!1;if(e instanceof Set){if(e.size!==t.size)return!1;const n=[...e],i=[...t];return F(n,i)}if(e instanceof Map){if(e.size!==t.size)return!1;for(const[n,i]of e)if(!t.has(n)||!U(i,t.get(n)))return!1;return!0}return F(e,t)};let D=0,X=0;const B=()=>"undefined"==typeof window&&"undefined"!=typeof global,Y=()=>{};function V(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(e){throw new Error(`Failed to parse data: ${e}`)}}const H=()=>!B(),W=e=>A(void 0,0,void 0,(function*(){if(!H())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const t=document.createElement("textarea");t.value=e,t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(t)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),G=e=>A(void 0,0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return yield W(n)})),J=({onIntersectStart:e=Y,onIntersectEnd:t=Y,enabled:n=!0,calledOnce:i=!1,root:o=null,threshold:a=0,rootMargin:s="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(0),l=(0,r.useRef)(!1),u=(0,r.useRef)(null),d=M((([r],o)=>{if(!n||!r)return;const a=r.target;r.isIntersecting?(l.current=!0,c.current+=1,e(r)):l.current&&(l.current=!1,c.current+=1,t(r)),i&&c.current>1&&o.unobserve(a)}));return{ref:e=>{u.current&&u.current.disconnect(),u.current=new IntersectionObserver(d,{threshold:a,root:o,rootMargin:s}),e&&u.current.observe(e)}}},Z=(...e)=>(0,r.useCallback)(((...e)=>t=>e.forEach((e=>{$(e)?e(t):null!=e&&(e.current=t)})))(...e),e),K=(0,r.forwardRef)(((e,t)=>{var{src:n,threshold:r,root:o,rootMargin:a,alt:s,className:c}=e,l=P(e,["src","threshold","root","rootMargin","alt","className"]);const{ref:u}=J({onIntersectStart:e=>{e.target.src=n},calledOnce:!0,threshold:r,root:o,rootMargin:a}),d=c?`lazy-image ${c}`:"lazy-image";return(0,i.jsx)("img",Object.assign({className:d,ref:Z(t,u),alt:s},l))}));K.displayName="LazyImage";const Q=(0,r.forwardRef)(((e,t)=>{var{width:n,height:o,fallback:a,className:s,style:c,duration:l="0.2s",onLoad:u}=e,d=P(e,["width","height","fallback","className","style","duration","onLoad"]);const[b,w]=(0,r.useState)(!1),f=!b,p=(0,r.useMemo)((()=>({position:"relative",width:n,height:o})),[n,o]),m=(0,r.useMemo)((()=>Object.assign({position:"absolute",top:0,left:0,opacity:f?0:1,transition:`opacity ${l}`},c)),[f,l,c]),v=(0,r.useCallback)((e=>{u&&u(e),w(!0)}),[u]);return(0,i.jsxs)("div",{className:s?`lazy-image-wrapper ${s}`:"lazy-image-wrapper",style:p,children:[f&&a,(0,i.jsx)(K,Object.assign({ref:t,width:n,height:o,style:m,onLoad:v},d))]})}));Q.displayName="FallbackLazyImage";const ee=(0,r.forwardRef)(((e,t)=>{const{onIntersectStart:n,onIntersectEnd:r,calledOnce:o,threshold:a,root:s,rootMargin:c,enabled:l}=e,u=P(e,["onIntersectStart","onIntersectEnd","calledOnce","threshold","root","rootMargin","enabled"]),{ref:d}=J({onIntersectStart:n,onIntersectEnd:r,calledOnce:o,threshold:a,root:s,rootMargin:c,enabled:l});return(0,i.jsx)("div",Object.assign({ref:Z(t,d)},u,{children:e.children}))}));ee.displayName="InView";const te=({items:e,renderItem:t})=>(0,i.jsx)(i.Fragment,{children:e.map(((e,n)=>(0,i.jsx)(r.Fragment,{children:t(e,n)},(1e3*(()=>{const e=(new Date).getTime();return X===e?D+=1:(X=e,D=0),(1e3*e+D)/1e3})()).toString(16))))}),ne=(0,r.forwardRef)(((e,t)=>{var{as:n,children:o,callback:a}=e,s=P(e,["as","children","callback"]);const{ref:c}=(e=>{const t=(0,r.useRef)(null),n=M(e);return(0,r.useEffect)((()=>{const e=(()=>{if(B())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",i=({target:e})=>{const i=t.current;i&&!i.contains(e)&&n(i)};return document.addEventListener(e,i),()=>{document.removeEventListener(e,i)}}),[n]),{ref:t}})(a);return(0,i.jsx)(n||"div",Object.assign({ref:Z(c,t)},s,{children:o}))})),ie=H()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const re=({items:e,renderItem:t,separator:n,includeLastSeparator:r=!1})=>(0,i.jsx)(te,{items:e,renderItem:(o,a)=>(0,i.jsxs)(i.Fragment,{children:[t(o,a),(r||a<e.length-1)&&n]})}),oe=({children:e,condition:t,fallback:n=null})=>{const o=(e=>"function"==typeof e?e():e)(t);return(0,i.jsx)(r.Fragment,o?{children:e}:{children:n})},ae=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var o;return(0,i.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(o=t[e])&&void 0!==o?o:n})},se=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>_(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},ce=()=>{const[e,t]=(0,r.useState)(null);return{copiedData:e,copyText:(0,r.useCallback)((e=>_(void 0,void 0,void 0,(function*(){try{const n=yield W(e);return t(n),!0}catch(e){return console.error(e.message),t(null),!1}}))),[]),copyImage:(0,r.useCallback)((({src:e,toText:n=!1})=>_(void 0,void 0,void 0,(function*(){try{const i=yield(({src:e,toText:t=!1})=>A(void 0,0,void 0,(function*(){if(!H())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield G(e);if(!("write"in window.navigator.clipboard))return yield G(e);if(t)return yield G(e);const n=yield((e,t="png")=>new Promise(((n,i)=>{const r=new Image;r.onload=()=>A(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=r.width,e.height=r.height;try{const i=e.getContext("2d");if(!i)throw new Error("Failed to get 2d context");i.drawImage(r,0,0);const o=yield((e,t)=>new Promise(((n,i)=>{e.toBlob((e=>{e?n(e):i(new Error(`Failed to create blob with format ${t}`))}),t)})))(e,q[t]);n(o)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),i(e)}})),r.onerror=()=>{i(new Error("Failed to load image"))},r.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),n}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:n});return t(i),!0}catch(e){return console.error(e.message),t(null),!1}}))),[])}},le=(e,{preserveTitleOnUnmount:t=!1}={})=>{ie((()=>{const n=document.title;return document.title=e,()=>{t||(document.title=n)}}),[e,t])},ue=({onEnter:e=Y,onLeave:t=Y}={})=>{const[n,i]=(0,r.useState)(!1),o=(0,r.useRef)(null),a=M((t=>{i(!0),e(t)})),s=M((e=>{i(!1),t(e)}));return(0,r.useEffect)((()=>{const e=o.current;if(e)return e.addEventListener("mouseenter",a),e.addEventListener("mouseleave",s),()=>{e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",s)}}),[a,s]),{ref:o,isHovered:n}},de=(e,t)=>{const n=((e,t)=>{const[n,i]=(0,r.useState)(e),o=M(null!=t?t:U);return(0,r.useEffect)((()=>{o(n,e)||i(e)}),[o,n,e]),n})(t),i=M(e),o="number"==typeof n,a=o?n:n.delay,[s,c]=(0,r.useState)((()=>{var e;return!!o||null===(e=null==n?void 0:n.enabled)||void 0===e||e})),l=(0,r.useCallback)((()=>{c(!0)}),[]),u=(0,r.useCallback)((()=>{c(!1)}),[]);return(0,r.useEffect)((()=>{var e;o||c(null===(e=null==n?void 0:n.enabled)||void 0===e||e)}),[o,n]),(0,r.useEffect)((()=>{if(null==a)return;const e=window.setInterval((()=>{s?i():clearInterval(e)}),a);return()=>clearInterval(e)}),[i,s,a]),{isActing:s,start:l,stop:u}},be="local-storage",we="session-storage",fe={localStorage:{key:be,subscribe:e=>{window.addEventListener(be,e)},unsubscribe:e=>{window.removeEventListener(be,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(be))}},sessionStorage:{key:we,subscribe:e=>{window.addEventListener(we,e)},unsubscribe:e=>{window.removeEventListener(we,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(we))}}},pe=e=>fe[e],me=pe("localStorage"),ve=e=>(me.subscribe(e),()=>{me.unsubscribe(e)}),he=e=>window.localStorage.getItem(e);function ge(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,i=(0,r.useMemo)((()=>$(n)?n():n),[n]),o=(0,r.useSyncExternalStore)(ve,(()=>he(t)),(()=>(e=>JSON.stringify(e))(i)));return{state:(0,r.useMemo)((()=>o?V(o):i),[o,i]),setState:(0,r.useCallback)((e=>{try{const n=he(t),r=n?V(n):i,o=$(e)?e(r):e;window.localStorage.setItem(t,JSON.stringify(o)),me.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in localStorage: ${e}`)}}),[t,i]),removeState:(0,r.useCallback)((()=>{try{window.localStorage.removeItem(t),me.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from localStorage: ${e}`)}}),[t])}}const ye=e=>!!H()&&window.matchMedia(e).matches,xe=e=>{const[t,n]=(0,r.useState)(ye(e)),i=(0,r.useCallback)((()=>{n(ye(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",i),()=>t.removeEventListener("change",i)}),[e,i]),{isMatch:t}},ke=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return ie((()=>{const t=t=>{const{screenX:i,screenY:r,clientX:o,clientY:a,pageX:s,pageY:c}=t,l={},u={};if(e.current){const t=e.current.getBoundingClientRect(),n=o-t.left,i=a-t.top,r=t.left+window.scrollX,s=t.top+window.scrollY;l.elementRelativeX=n,l.elementRelativeY=i,u.elementPositionX=r,u.elementPositionY=s}n(Object.assign(Object.assign({screenX:i,screenY:r,clientX:o,clientY:a,pageX:s,pageY:c},l),u))};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}}),[]),{ref:e,position:t}},Se=()=>navigator.onLine,Ee=()=>!0,je=({onlineCallback:e=Y,offlineCallback:t=Y}={})=>{const n=M((n=>((e,t,n)=>{const i=n=>(t(n),e()),r=t=>(n(t),e());return window.addEventListener("online",i),window.addEventListener("offline",r),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",r)}})(n,e,t)));return{isOnline:(0,r.useSyncExternalStore)(n,Se,Ee)}},Oe=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},Re=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),i=(0,r.useRef)(null),o=M(e),a=(0,r.useCallback)((([e])=>{e&&(o(e),n(e.contentRect))}),[o]);return(0,r.useEffect)((()=>{const e=i.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(a);return t.observe(e),()=>{t.unobserve(e)}}),[a]),{ref:i,contentRect:t}},Ce=({autoLock:e=!0}={})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),i=(0,r.useCallback)((()=>{const e=t.current;n.current=window.getComputedStyle(e).overflow,e.style.overflow="hidden"}),[]),o=(0,r.useCallback)((()=>{n.current&&(t.current.style.overflow=n.current)}),[]);return ie((()=>(t.current||(t.current=document.body),e&&i(),()=>o())),[e,i,o]),{ref:t,lock:i,unlock:o}},ze=pe("sessionStorage"),Te=e=>(ze.subscribe(e),()=>{ze.unsubscribe(e)}),Ne=e=>window.sessionStorage.getItem(e);function Me(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,i=(0,r.useMemo)((()=>$(n)?n():n),[n]),o=(0,r.useSyncExternalStore)(Te,(()=>Ne(t)),(()=>(e=>JSON.stringify(e))(i)));return{state:(0,r.useMemo)((()=>o?V(o):i),[o,i]),setState:(0,r.useCallback)((e=>{try{const n=Ne(t),r=n?V(n):i,o=$(e)?e(r):e;window.sessionStorage.setItem(t,JSON.stringify(o)),ze.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in sessionStorage: ${e}`)}}),[t,i]),removeState:(0,r.useCallback)((()=>{try{window.sessionStorage.removeItem(t),ze.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from sessionStorage: ${e}`)}}),[t])}}const Ie=({maxStep:e,initialStep:t=1,infinite:n=!1})=>{const[i,o]=(0,r.useState)(t),a=i<e,s=i>1,c=(0,r.useCallback)(((t,n)=>{const r=$(t)?t(i):t;if(r>=1&&r<=e)return n&&n({prevStep:i,nextStep:r}),void o(t);throw new Error("Step not valid")}),[i,e]),l=(0,r.useCallback)(((t,n)=>{const r="nextStep"===t;return n?r?1:e:r?i+1:i-1}),[e,i]),u=(0,r.useCallback)(((e,t)=>{if(!n)return;const r=l(e,!0);t&&t({prevStep:i,nextStep:r}),o(r)}),[n,i,l]),d=(0,r.useCallback)(((e,t)=>{const n=l(e,!1);t&&t({prevStep:i,nextStep:n}),o(n)}),[i,l]),b=(0,r.useCallback)((e=>{a?d("nextStep",e):u("nextStep",e)}),[a,d,u]),w=(0,r.useCallback)((e=>{s?d("prevStep",e):u("prevStep",e)}),[s,d,u]),f=(0,r.useCallback)((e=>{e&&e({prevStep:i,nextStep:t}),o(t)}),[i,t]);return{currentStep:i,hasNextStep:a,hasPrevStep:s,setStep:c,goToNextStep:b,goToPrevStep:w,resetStep:f}};var Le,Pe,_e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ae={exports:{}};Le=Ae,Pe=Ae.exports,function(e,t){var n="function",i="undefined",r="object",o="string",a="major",s="model",c="name",l="type",u="vendor",d="version",b="architecture",w="console",f="mobile",p="tablet",m="smarttv",v="wearable",h="embedded",g="Amazon",y="Apple",x="ASUS",k="BlackBerry",S="Browser",E="Chrome",j="Firefox",O="Google",R="Huawei",C="LG",z="Microsoft",T="Motorola",N="Opera",M="Samsung",I="Sharp",L="Sony",P="Xiaomi",_="Zebra",A="Facebook",$="Chromium OS",q="Mac OS",F=function(e){for(var t={},n=0;n<e.length;n++)t[e[n].toUpperCase()]=e[n];return t},U=function(e,t){return typeof e===o&&-1!==D(t).indexOf(D(e))},D=function(e){return e.toLowerCase()},X=function(e,t){if(typeof e===o)return e=e.replace(/^\s\s*/,""),typeof t===i?e:e.substring(0,500)},B=function(e,i){for(var o,a,s,c,l,u,d=0;d<i.length&&!l;){var b=i[d],w=i[d+1];for(o=a=0;o<b.length&&!l&&b[o];)if(l=b[o++].exec(e))for(s=0;s<w.length;s++)u=l[++a],typeof(c=w[s])===r&&c.length>0?2===c.length?typeof c[1]==n?this[c[0]]=c[1].call(this,u):this[c[0]]=c[1]:3===c.length?typeof c[1]!==n||c[1].exec&&c[1].test?this[c[0]]=u?u.replace(c[1],c[2]):t:this[c[0]]=u?c[1].call(this,u,c[2]):t:4===c.length&&(this[c[0]]=u?c[3].call(this,u.replace(c[1],c[2])):t):this[c]=u||t;d+=2}},Y=function(e,n){for(var i in n)if(typeof n[i]===r&&n[i].length>0){for(var o=0;o<n[i].length;o++)if(U(n[i][o],e))return"?"===i?t:i}else if(U(n[i],e))return"?"===i?t:i;return e},V={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},H={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[d,[c,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[d,[c,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[c,d],[/opios[\/ ]+([\w\.]+)/i],[d,[c,N+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[d,[c,N+" GX"]],[/\bopr\/([\w\.]+)/i],[d,[c,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[d,[c,"Baidu"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[c,d],[/\bddg\/([\w\.]+)/i],[d,[c,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[d,[c,"UC"+S]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[d,[c,"WeChat"]],[/konqueror\/([\w\.]+)/i],[d,[c,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[d,[c,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[d,[c,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[d,[c,"Smart Lenovo "+S]],[/(avast|avg)\/([\w\.]+)/i],[[c,/(.+)/,"$1 Secure "+S],d],[/\bfocus\/([\w\.]+)/i],[d,[c,j+" Focus"]],[/\bopt\/([\w\.]+)/i],[d,[c,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[d,[c,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[d,[c,"Dolphin"]],[/coast\/([\w\.]+)/i],[d,[c,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[d,[c,"MIUI "+S]],[/fxios\/([-\w\.]+)/i],[d,[c,j]],[/\bqihu|(qi?ho?o?|360)browser/i],[[c,"360 "+S]],[/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],[[c,/(.+)/,"$1 "+S],d],[/samsungbrowser\/([\w\.]+)/i],[d,[c,M+" Internet"]],[/(comodo_dragon)\/([\w\.]+)/i],[[c,/_/g," "],d],[/metasr[\/ ]?([\d\.]+)/i],[d,[c,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[c,"Sogou Mobile"],d],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],[c,d],[/(lbbrowser)/i,/\[(linkedin)app\]/i],[c],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[c,A],d],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[c,d],[/\bgsa\/([\w\.]+) .*safari\//i],[d,[c,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[d,[c,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[d,[c,E+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[c,E+" WebView"],d],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[d,[c,"Android "+S]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[c,d],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[d,[c,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[d,c],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[c,[d,Y,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[c,d],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[c,"Netscape"],d],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[d,[c,j+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[c,d],[/(cobalt)\/([\w\.]+)/i],[c,[d,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,D]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[b,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[b,"armhf"]],[/windows (ce|mobile); ppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[b,/ower/,"",D]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[b,D]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[s,[u,M],[l,p]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[s,[u,M],[l,f]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[s,[u,y],[l,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[s,[u,y],[l,p]],[/(macintosh);/i],[s,[u,y]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[s,[u,I],[l,f]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[s,[u,R],[l,p]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[s,[u,R],[l,f]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[s,/_/g," "],[u,P],[l,f]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[s,/_/g," "],[u,P],[l,p]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[s,[u,"OPPO"],[l,f]],[/\b(opd2\d{3}a?) bui/i],[s,[u,"OPPO"],[l,p]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[s,[u,"Vivo"],[l,f]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[s,[u,"Realme"],[l,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[s,[u,T],[l,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[s,[u,T],[l,p]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[s,[u,C],[l,p]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[s,[u,C],[l,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[s,[u,"Lenovo"],[l,p]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[s,/_/g," "],[u,"Nokia"],[l,f]],[/(pixel c)\b/i],[s,[u,O],[l,p]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[s,[u,O],[l,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[u,L],[l,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[s,"Xperia Tablet"],[u,L],[l,p]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[s,[u,"OnePlus"],[l,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[s,[u,g],[l,p]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[s,/(.+)/g,"Fire Phone $1"],[u,g],[l,f]],[/(playbook);[-\w\),; ]+(rim)/i],[s,u,[l,p]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[s,[u,k],[l,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[s,[u,x],[l,p]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[s,[u,x],[l,f]],[/(nexus 9)/i],[s,[u,"HTC"],[l,p]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[u,[s,/_/g," "],[l,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[s,[u,"Acer"],[l,p]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[s,[u,"Meizu"],[l,f]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[s,[u,"Ulefone"],[l,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[u,s,[l,f]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[u,s,[l,p]],[/(surface duo)/i],[s,[u,z],[l,p]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[s,[u,"Fairphone"],[l,f]],[/(u304aa)/i],[s,[u,"AT&T"],[l,f]],[/\bsie-(\w*)/i],[s,[u,"Siemens"],[l,f]],[/\b(rct\w+) b/i],[s,[u,"RCA"],[l,p]],[/\b(venue[\d ]{2,7}) b/i],[s,[u,"Dell"],[l,p]],[/\b(q(?:mv|ta)\w+) b/i],[s,[u,"Verizon"],[l,p]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[s,[u,"Barnes & Noble"],[l,p]],[/\b(tm\d{3}\w+) b/i],[s,[u,"NuVision"],[l,p]],[/\b(k88) b/i],[s,[u,"ZTE"],[l,p]],[/\b(nx\d{3}j) b/i],[s,[u,"ZTE"],[l,f]],[/\b(gen\d{3}) b.+49h/i],[s,[u,"Swiss"],[l,f]],[/\b(zur\d{3}) b/i],[s,[u,"Swiss"],[l,p]],[/\b((zeki)?tb.*\b) b/i],[s,[u,"Zeki"],[l,p]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[u,"Dragon Touch"],s,[l,p]],[/\b(ns-?\w{0,9}) b/i],[s,[u,"Insignia"],[l,p]],[/\b((nxa|next)-?\w{0,9}) b/i],[s,[u,"NextBook"],[l,p]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[u,"Voice"],s,[l,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[u,"LvTel"],s,[l,f]],[/\b(ph-1) /i],[s,[u,"Essential"],[l,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[s,[u,"Envizen"],[l,p]],[/\b(trio[-\w\. ]+) b/i],[s,[u,"MachSpeed"],[l,p]],[/\btu_(1491) b/i],[s,[u,"Rotor"],[l,p]],[/(shield[\w ]+) b/i],[s,[u,"Nvidia"],[l,p]],[/(sprint) (\w+)/i],[u,s,[l,f]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[u,z],[l,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[s,[u,_],[l,p]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[s,[u,_],[l,f]],[/smart-tv.+(samsung)/i],[u,[l,m]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[u,M],[l,m]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[u,C],[l,m]],[/(apple) ?tv/i],[u,[s,y+" TV"],[l,m]],[/crkey/i],[[s,E+"cast"],[u,O],[l,m]],[/droid.+aft(\w+)( bui|\))/i],[s,[u,g],[l,m]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[s,[u,I],[l,m]],[/(bravia[\w ]+)( bui|\))/i],[s,[u,L],[l,m]],[/(mitv-\w{5}) bui/i],[s,[u,P],[l,m]],[/Hbbtv.*(technisat) (.*);/i],[u,s,[l,m]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[u,X],[s,X],[l,m]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[l,m]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[u,s,[l,w]],[/droid.+; (shield) bui/i],[s,[u,"Nvidia"],[l,w]],[/(playstation [345portablevi]+)/i],[s,[u,L],[l,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[s,[u,z],[l,w]],[/((pebble))app/i],[u,s,[l,v]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[s,[u,y],[l,v]],[/droid.+; (glass) \d/i],[s,[u,O],[l,v]],[/droid.+; (wt63?0{2,3})\)/i],[s,[u,_],[l,v]],[/(quest( \d| pro)?)/i],[s,[u,A],[l,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[u,[l,h]],[/(aeobc)\b/i],[s,[u,g],[l,h]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[s,[l,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[s,[l,p]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[l,p]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[l,f]],[/(android[-\w\. ]{0,9});.+buil/i],[s,[u,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[d,[c,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[d,[c,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[c,d],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[d,c]],os:[[/microsoft (windows) (vista|xp)/i],[c,d],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[c,[d,Y,V]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[d,Y,V],[c,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[d,/_/g,"."],[c,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[c,q],[d,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[d,c],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[c,d],[/\(bb(10);/i],[d,[c,k]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[d,[c,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[d,[c,j+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[d,[c,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[d,[c,"watchOS"]],[/crkey\/([\d\.]+)/i],[d,[c,E+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[c,$],d],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[c,d],[/(sunos) ?([\w\.\d]*)/i],[[c,"Solaris"],d],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[c,d]]},W=function(w,m){if(typeof w===r&&(m=w,w=t),!(this instanceof W))return new W(w,m).getResult();var v=typeof e!==i&&e.navigator?e.navigator:t,h=w||(v&&v.userAgent?v.userAgent:""),g=v&&v.userAgentData?v.userAgentData:t,y=m?function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2==0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n}(H,m):H,x=v&&v.userAgent==h;return this.getBrowser=function(){var e,i={};return i[c]=t,i[d]=t,B.call(i,h,y.browser),i[a]=typeof(e=i[d])===o?e.replace(/[^\d\.]/g,"").split(".")[0]:t,x&&v&&v.brave&&typeof v.brave.isBrave==n&&(i[c]="Brave"),i},this.getCPU=function(){var e={};return e[b]=t,B.call(e,h,y.cpu),e},this.getDevice=function(){var e={};return e[u]=t,e[s]=t,e[l]=t,B.call(e,h,y.device),x&&!e[l]&&g&&g.mobile&&(e[l]=f),x&&"Macintosh"==e[s]&&v&&typeof v.standalone!==i&&v.maxTouchPoints&&v.maxTouchPoints>2&&(e[s]="iPad",e[l]=p),e},this.getEngine=function(){var e={};return e[c]=t,e[d]=t,B.call(e,h,y.engine),e},this.getOS=function(){var e={};return e[c]=t,e[d]=t,B.call(e,h,y.os),x&&!e[c]&&g&&g.platform&&"Unknown"!=g.platform&&(e[c]=g.platform.replace(/chrome os/i,$).replace(/macos/i,q)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return h},this.setUA=function(e){return h=typeof e===o&&e.length>500?X(e,500):e,this},this.setUA(h),this};W.VERSION="1.0.38",W.BROWSER=F([c,d,a]),W.CPU=F([b]),W.DEVICE=F([s,u,l,w,f,m,p,v,h]),W.ENGINE=W.OS=F([c,d]),Le.exports&&(Pe=Le.exports=W),Pe.UAParser=W;var G=typeof e!==i&&(e.jQuery||e.Zepto);if(G&&!G.ua){var J=new W;G.ua=J.getResult(),G.ua.get=function(){return J.getUA()},G.ua.set=function(e){J.setUA(e);var t=J.getResult();for(var n in t)G.ua[n]=t[n]}}}("object"==typeof window?window:_e);var $e=Ae.exports;const qe=()=>{const[e,t]=(0,r.useState)(null);return ie((()=>{const e=new $e.UAParser(window.navigator.userAgent);t(e.getResult())}),[]),e},Fe=({name:e="vh",enabledResize:t=!1}={})=>{ie((()=>{const n=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty(`--${e}`,`${t}px`)};return n(),t&&window.addEventListener("resize",n),()=>{t&&window.removeEventListener("resize",n)}}),[e,t])},Ue=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[i,o]=(0,r.useState)({width:null,height:null}),a=(0,r.useCallback)((()=>{o({width:window.innerWidth,height:window.innerHeight})}),[]),s=I(a,n),c=M(s),l=(0,r.useMemo)((()=>t?c:a),[a,t,c]);return ie((()=>(a(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[a,l]),i}}}]);