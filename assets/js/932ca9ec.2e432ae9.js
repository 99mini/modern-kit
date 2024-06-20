"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6300],{4962:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>u,assets:()=>a,contentTitle:()=>s,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(1986),o=n(9937),i=n(384);const c={},s="useScrollLock",l={id:"react/hooks/useScrollLock",title:"useScrollLock",description:"\ud2b9\uc815 \uc694\uc18c\uc758 \uc2a4\ud06c\ub864\uc744 lock, unlock \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useScrollLock.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useScrollLock",permalink:"/modern-kit/docs/react/hooks/useScrollLock",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useResizeObserver",permalink:"/modern-kit/docs/react/hooks/useResizeObserver"},next:{title:"useSessionStorage",permalink:"/modern-kit/docs/react/hooks/useSessionStorage"}},a={},u=()=>{const e={button:"button",div:"div",...(0,o.a)()},{ref:t,lock:n,unlock:c}=(0,i.Pr)({autoLock:!0}),s={width:"100%",height:"500px"};return(0,r.jsxs)(e.div,{children:[(0,r.jsx)(e.button,{onClick:n,children:"\uc2a4\ud06c\ub864 \uc7a0\uae08"}),(0,r.jsx)(e.button,{onClick:c,children:"\uc2a4\ud06c\ub864 \uc7a0\uae08 \ud574\uc81c"}),(0,r.jsxs)(e.div,{ref:t,style:{width:"400px",maxHeight:"600px",overflowY:"scroll"},children:[(0,r.jsx)(e.div,{style:{...s,backgroundColor:"red"}}),(0,r.jsx)(e.div,{style:{...s,backgroundColor:"green"}}),(0,r.jsx)(e.div,{style:{...s,backgroundColor:"blue"}})]})]})},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"document.body",id:"documentbody",level:3},{value:"Specific element",id:"specific-element",level:3},{value:"Example",id:"example",level:3}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usescrolllock",children:"useScrollLock"}),"\n",(0,r.jsxs)(t.p,{children:["\ud2b9\uc815 \uc694\uc18c\uc758 \uc2a4\ud06c\ub864\uc744 ",(0,r.jsx)(t.code,{children:"lock"}),", ",(0,r.jsx)(t.code,{children:"unlock"})," \ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Modal"}),"\uacfc \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub410\uc744 \ub54c, \ubc30\uacbd \uc694\uc18c(",(0,r.jsx)(t.code,{children:"ex. document.body"}),")\uc758 \uc2a4\ud06c\ub864\uc744 \uc7a0\uae00 \ub54c \ud65c\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,r.jsx)(t.code,{children:"document.body"}),"\uc744 \ub300\uc0c1\uc73c\ub85c mount \uc2dc\uc5d0 \uc790\ub3d9\uc73c\ub85c \uc2a4\ud06c\ub864\uc744 \uc7a0\uae09\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"unmount"})," \uc2dc\uc5d0\ub294 \ud0c0\uac9f \uc694\uc18c\uc758 \uc6d0\ub798 ",(0,r.jsx)(t.code,{children:"overflow"})," \uac12\uc73c\ub85c \ub2e4\uc2dc \ub3cc\ub824\ub193\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useScrollLock/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"interface UseScrollLockProps {\n  autoLock?: boolean;\n}\n\nconst useScrollLock: <T extends HTMLElement>({\n  autoLock,\n}?: UseScrollLockProps) => {\n  ref: React.MutableRefObject<Nullable<T>>;\n  lock: () => void;\n  unlock: () => void;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"documentbody",children:"document.body"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useScrollLock } from '@modern-kit/react';\n\nconst Example = () => {\n  useScrollLock(); // \uc790\ub3d9\uc73c\ub85c \uc7a0\uadf8\uc9c0 \uc54a\uc73c\ub824\uba74 { authLock: false }\ub85c \uc14b\ud305\ud558\uc138\uc694.\n\n  return <div>{/* ... */}</div>;\n};\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h3,{id:"specific-element",children:"Specific element"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useScrollLock } from '@modern-kit/react';\n\nconst Example = () => {\n  const { ref, lock, unlock } = useScrollLock<HTMLDivElement>({ autoLock: false });\n\n  const wrapperStyle = {\n    width: '400px',\n    maxHeight: '600px',\n    overflowY: 'scroll',\n  };\n  const boxStyle = {\n    width: '100%',\n    maxHeight: '500px',\n  };\n  return (\n    <div>\n      <button onClick={lock}>\uc2a4\ud06c\ub864 \uc7a0\uae08</button>\n      <button onClick={unlock}>\uc2a4\ud06c\ub864 \uc7a0\uae08 \ud574\uc81c</button>\n      <div ref={ref} style={wrapperStyle}>\n        <div style={{ ...boxStyle, backgroundColor: 'red' }} />\n        <div style={{ ...boxStyle, backgroundColor: 'green' }} />\n        <div style={{ ...boxStyle, backgroundColor: 'blue' }} />\n      </div>\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u,{})]})}function v(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7800);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}},384:(e,t,n)=>{n.d(t,{D9:()=>ye,Hk:()=>ee,LN:()=>we,Mm:()=>te,Nr:()=>R,Pr:()=>ke,S1:()=>J,VP:()=>ne,XI:()=>oe,Xs:()=>Le,Yz:()=>ie,_:()=>ve,a9:()=>Z,ac:()=>he,cM:()=>Ce,df:()=>q,iP:()=>Oe,ii:()=>pe,jr:()=>re,my:()=>G,nA:()=>Q,uM:()=>N,wY:()=>W,yU:()=>xe});var r=n(7800),o=n(1986),i=(n(4041),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),l=s.Symbol,a=Object.prototype,u=a.hasOwnProperty,d=a.toString,f=l?l.toStringTag:void 0,v=Object.prototype.toString,m="[object Null]",h="[object Undefined]",p=l?l.toStringTag:void 0;var g="[object Symbol]",b=/\s/,w=/^\s+/;function y(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var x=NaN,k=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,E=/^0o[0-7]+$/i,j=parseInt;function L(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?h:m:p&&p in Object(e)?function(e){var t=u.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return v.call(e)}(e)}(e)==g}(e))return x;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&b.test(e.charAt(t)););return t}(e)+1).replace(w,""):e}(e);var n=S.test(e);return n||E.test(e)?j(e.slice(2),n?2:8):k.test(e)?x:+e}var C=function(){return s.Date.now()},O=Math.max,M=Math.min;const I=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},R=(e,t,n={})=>{const o=I(e),i=(0,r.useMemo)((()=>function(e,t,n){var r,o,i,c,s,l,a=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,a=t,c=e.apply(i,n)}function m(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-a>=i}function h(){var e=C();if(m(e))return p(e);s=setTimeout(h,function(e){var n=t-(e-l);return d?M(n,i-(e-a)):n}(e))}function p(e){return s=void 0,f&&r?v(e):(r=o=void 0,c)}function g(){var e=C(),n=m(e);if(r=arguments,o=this,l=e,n){if(void 0===s)return function(e){return a=e,s=setTimeout(h,t),u?v(e):c}(l);if(d)return clearTimeout(s),s=setTimeout(h,t),v(l)}return void 0===s&&(s=setTimeout(h,t)),c}return t=L(t)||0,y(n)&&(u=!!n.leading,i=(d="maxWait"in n)?O(L(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=l=o=s=void 0},g.flush=function(){return void 0===s?c:p(C())},g}(o,t,n)),[o,t,n]);return(e=>{const t=I(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>i.cancel())),i},N=({children:e,capture:t,wait:n,options:o})=>{const i=r.Children.only(e),c=R(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(i,{[t]:c})};function P(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function $(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}l((r=r.apply(e,t||[])).next())}))}function z(e,t,n,r){return new(n||(n=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}s((r=r.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const T=e=>"function"==typeof e,Y={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},X=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o)||!F(e[o],t[o]))return!1;return!0},F=(e,t)=>{if(e===t)return!0;if("number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t))return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(e.constructor!==t.constructor)return!1;if(e instanceof Set){if(e.size!==t.size)return!1;const n=[...e],r=[...t];return X(n,r)}if(e instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!t.has(n)||!F(r,t.get(n)))return!1;return!0}return X(e,t)},H=()=>"undefined"==typeof window&&"undefined"!=typeof global,U=()=>{};function _(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(e){throw new Error(`Failed to parse data: ${e}`)}}const D=()=>!H(),V=e=>z(void 0,0,void 0,(function*(){if(!D())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const t=document.createElement("textarea");t.value=e,t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(t)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),A=e=>z(void 0,0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return yield V(n)})),J=({onIntersectStart:e=U,onIntersectEnd:t=U,calledOnce:n=!1,root:o=null,threshold:i=0,rootMargin:c="0px 0px 0px 0px"})=>{const s=(0,r.useRef)(0),l=(0,r.useRef)(!1),a=(0,r.useRef)(null),u=I((([r],o)=>{if(!r)return;const i=r.target;r.isIntersecting?(l.current=!0,s.current+=1,e(r)):l.current&&(l.current=!1,s.current+=1,t(r)),n&&s.current>1&&o.unobserve(i)}));return{ref:e=>{a.current&&a.current.disconnect(),a.current=new IntersectionObserver(u,{threshold:i,root:o,rootMargin:c}),e&&a.current.observe(e)}}},B=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),W=(0,r.forwardRef)(((e,t)=>{var{src:n,threshold:r,root:i,rootMargin:c,alt:s,className:l}=e,a=P(e,["src","threshold","root","rootMargin","alt","className"]);const{ref:u}=J({onIntersectStart:e=>{e.target.src=n},calledOnce:!0,threshold:r,root:i,rootMargin:c}),d=l?`lazy-image ${l}`:"lazy-image";return(0,o.jsx)("img",Object.assign({className:d,ref:B(t,u),alt:s},a))}));W.displayName="LazyImage";const Z=(0,r.forwardRef)(((e,t)=>{var{width:n,height:i,fallback:c,className:s,style:l,duration:a="0.2s",onLoad:u}=e,d=P(e,["width","height","fallback","className","style","duration","onLoad"]);const[f,v]=(0,r.useState)(!1),m=!f,h=(0,r.useMemo)((()=>({position:"relative",width:n,height:i})),[n,i]),p=(0,r.useMemo)((()=>Object.assign({position:"absolute",top:0,left:0,opacity:m?0:1,transition:`opacity ${a}`},l)),[m,a,l]),g=(0,r.useCallback)((e=>{u&&u(e),v(!0)}),[u]);return(0,o.jsxs)("div",{className:s?`lazy-image-wrapper ${s}`:"lazy-image-wrapper",style:h,children:[m&&c,(0,o.jsx)(W,Object.assign({ref:t,width:n,height:i,style:p,onLoad:g},d))]})}));Z.displayName="FallbackLazyImage";const q=(0,r.forwardRef)(((e,t)=>{const{onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:c,root:s,rootMargin:l}=e,a=P(e,["onIntersectStart","onIntersectEnd","calledOnce","threshold","root","rootMargin"]),{ref:u}=J({onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:c,root:s,rootMargin:l});return(0,o.jsx)("div",Object.assign({ref:B(t,u)},a,{children:e.children}))}));q.displayName="InView";const G=(0,r.forwardRef)(((e,t)=>{var{as:n,children:i,callback:c}=e,s=P(e,["as","children","callback"]);const{ref:l}=(e=>{const t=(0,r.useRef)(null),n=I(e);return(0,r.useEffect)((()=>{const e=(()=>{if(H())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=({target:e})=>{const r=t.current;r&&!r.contains(e)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}})(c);return(0,o.jsx)(n||"div",Object.assign({ref:B(l,t)},s,{children:i}))})),K=D()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const Q=({children:e,condition:t,fallback:n=null})=>{const i="function"==typeof(c=t)?c():c;var c;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:n})},ee=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(i=t[e])&&void 0!==i?i:n})},te=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>$(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},ne=()=>{const[e,t]=(0,r.useState)(null);return{copiedData:e,copyText:(0,r.useCallback)((e=>$(void 0,void 0,void 0,(function*(){try{const n=yield V(e);return t(n),!0}catch(e){return console.error(e.message),t(null),!1}}))),[]),copyImage:(0,r.useCallback)((({src:e,toText:n=!1})=>$(void 0,void 0,void 0,(function*(){try{const r=yield(({src:e,toText:t=!1})=>z(void 0,0,void 0,(function*(){if(!D())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield A(e);if(!("write"in window.navigator.clipboard))return yield A(e);if(t)return yield A(e);const n=yield((e,t="png")=>new Promise(((n,r)=>{const o=new Image;o.onload=()=>z(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=o.width,e.height=o.height;try{const r=e.getContext("2d");if(!r)throw new Error("Failed to get 2d context");r.drawImage(o,0,0);const i=yield((e,t)=>new Promise(((n,r)=>{e.toBlob((e=>{e?n(e):r(new Error(`Failed to create blob with format ${t}`))}),t)})))(e,Y[t]);n(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),r(e)}})),o.onerror=()=>{r(new Error("Failed to load image"))},o.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),n}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:n});return t(r),!0}catch(e){return console.error(e.message),t(null),!1}}))),[])}},re=(e,{preserveTitleOnUnmount:t=!1}={})=>{K((()=>{const n=document.title;return document.title=e,()=>{t||(document.title=n)}}),[e,t])},oe=({onEnter:e=U,onLeave:t=U}={})=>{const[n,o]=(0,r.useState)(!1),i=(0,r.useRef)(null),c=I((t=>{o(!0),e(t)})),s=I((e=>{o(!1),t(e)}));return(0,r.useEffect)((()=>{const e=i.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",s),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",s)}}),[c,s]),{ref:i,isHovered:n}},ie=(e,t)=>{const n=((e,t)=>{const[n,o]=(0,r.useState)(e),i=I(null!=t?t:F);return(0,r.useEffect)((()=>{i(n,e)||o(e)}),[i,n,e]),n})(t),o=I(e),i="number"==typeof n,c=i?n:n.delay,[s,l]=(0,r.useState)((()=>{var e;return!!i||null===(e=null==n?void 0:n.enabled)||void 0===e||e})),a=(0,r.useCallback)((()=>{l(!0)}),[]),u=(0,r.useCallback)((()=>{l(!1)}),[]);return(0,r.useEffect)((()=>{var e;i||l(null===(e=null==n?void 0:n.enabled)||void 0===e||e)}),[i,n]),(0,r.useEffect)((()=>{if(null==c)return;const e=window.setInterval((()=>{s?o():clearInterval(e)}),c);return()=>clearInterval(e)}),[o,s,c]),{isActing:s,start:a,stop:u}},ce="local-storage",se="session-storage",le={localStorage:{key:ce,subscribe:e=>{window.addEventListener(ce,e)},unsubscribe:e=>{window.removeEventListener(ce,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(ce))}},sessionStorage:{key:se,subscribe:e=>{window.addEventListener(se,e)},unsubscribe:e=>{window.removeEventListener(se,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(se))}}},ae=e=>le[e],ue=ae("localStorage"),de=e=>(ue.subscribe(e),()=>{ue.unsubscribe(e)}),fe=e=>window.localStorage.getItem(e);function ve(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>T(n)?n():n),[n]),i=(0,r.useSyncExternalStore)(de,(()=>fe(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>i?_(i):o),[i,o]),setState:(0,r.useCallback)((e=>{try{const n=fe(t),r=n?_(n):o,i=T(e)?e(r):e;window.localStorage.setItem(t,JSON.stringify(i)),ue.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in localStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.localStorage.removeItem(t),ue.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from localStorage: ${e}`)}}),[t])}}const me=e=>!!D()&&window.matchMedia(e).matches,he=e=>{const[t,n]=(0,r.useState)(me(e)),o=(0,r.useCallback)((()=>{n(me(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},pe=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return K((()=>{const t=t=>{const{screenX:r,screenY:o,clientX:i,clientY:c,pageX:s,pageY:l}=t,a={},u={};if(e.current){const t=e.current.getBoundingClientRect(),n=i-t.left,r=c-t.top,o=t.left+window.scrollX,s=t.top+window.scrollY;a.elementRelativeX=n,a.elementRelativeY=r,u.elementPositionX=o,u.elementPositionY=s}n(Object.assign(Object.assign({screenX:r,screenY:o,clientX:i,clientY:c,pageX:s,pageY:l},a),u))};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}}),[]),{ref:e,position:t}},ge=()=>navigator.onLine,be=()=>!0,we=({onlineCallback:e=U,offlineCallback:t=U}={})=>{const n=I((n=>((e,t,n)=>{const r=n=>(t(n),e()),o=t=>(n(t),e());return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}})(n,e,t)));return{isOnline:(0,r.useSyncExternalStore)(n,ge,be)}},ye=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},xe=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=I(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:o,contentRect:t}},ke=({autoLock:e=!0}={})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const e=t.current;n.current=window.getComputedStyle(e).overflow,e.style.overflow="hidden"}),[]),i=(0,r.useCallback)((()=>{n.current&&(t.current.style.overflow=n.current)}),[]);return K((()=>(t.current||(t.current=document.body),e&&o(),()=>i())),[e,o,i]),{ref:t,lock:o,unlock:i}},Se=ae("sessionStorage"),Ee=e=>(Se.subscribe(e),()=>{Se.unsubscribe(e)}),je=e=>window.sessionStorage.getItem(e);function Le(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>T(n)?n():n),[n]),i=(0,r.useSyncExternalStore)(Ee,(()=>je(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>i?_(i):o),[i,o]),setState:(0,r.useCallback)((e=>{try{const n=je(t),r=n?_(n):o,i=T(e)?e(r):e;window.sessionStorage.setItem(t,JSON.stringify(i)),Se.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in sessionStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.sessionStorage.removeItem(t),Se.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from sessionStorage: ${e}`)}}),[t])}}const Ce=(e="vh",t={enableResize:!1})=>{const{enableResize:n}=t;K((()=>{const t=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty(`--${e}`,`${t}px`)};return t(),n&&window.addEventListener("resize",t),()=>{n&&window.removeEventListener("resize",t)}}),[e,n])},Oe=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=R(c,n),l=I(s),a=(0,r.useMemo)((()=>t?l:c),[c,t,l]);return K((()=>(c(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[c,a]),o}}}]);