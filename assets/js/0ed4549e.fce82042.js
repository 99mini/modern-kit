"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[7567],{992:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>u,assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(1986),o=n(9937),s=n(384);const i={},a="useSessionStorage",c={id:"react/hooks/useSessionStorage",title:"useSessionStorage",description:"React v18\ubd80\ud130 \uc9c0\uc6d0\ud558\ub294 useSyncExternalStore \uc744 \ud65c\uc6a9\ud574 \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \ub0b4\uc758 \ud2b9\uc815 key \ub370\uc774\ud130\ub97c \uad6c\ub3c5\ud558\uace0, \uad6c\ub3c5 \uc911\uc778 \ub370\uc774\ud130\uc5d0 \ubcc0\ud654\uac00 \uc788\uc744 \uc2dc \uc774\ub97c \ub3d9\uae30\ud654\ud574\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useSessionStorage.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useSessionStorage",permalink:"/modern-kit/docs/react/hooks/useSessionStorage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useScrollLock",permalink:"/modern-kit/docs/react/hooks/useScrollLock"},next:{title:"useTimeout",permalink:"/modern-kit/docs/react/hooks/useTimeout"}},l={},u=()=>{const e={button:"button",div:"div",p:"p",...(0,o.a)()},{state:t,setState:n,removeState:i}=(0,s.Xs)({key:"test",initialValue:"default"});return(0,r.jsxs)(e.div,{children:[(0,r.jsx)(e.p,{children:"\uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694!"}),(0,r.jsxs)(e.p,{children:["state: ",t]}),(0,r.jsx)(e.button,{onClick:()=>n("foo"),children:'\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 "test"key\uc5d0 "foo"\ub370\uc774\ud130 \uc800\uc7a5'}),(0,r.jsx)(e.button,{onClick:()=>n("bar"),children:'\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 "test"key\uc5d0 "bar"\ub370\uc774\ud130 \uc800\uc7a5'}),(0,r.jsx)(e.button,{onClick:()=>i(),children:'\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 "test"key \uc81c\uac70'})]})},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usesessionstorage",children:"useSessionStorage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"React v18"}),"\ubd80\ud130 \uc9c0\uc6d0\ud558\ub294 ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://react.dev/reference/react/useSyncExternalStore",children:"useSyncExternalStore"})})," \uc744 \ud65c\uc6a9\ud574 \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \ub0b4\uc758 \ud2b9\uc815 ",(0,r.jsx)(t.code,{children:"key"})," \ub370\uc774\ud130\ub97c \uad6c\ub3c5\ud558\uace0, \uad6c\ub3c5 \uc911\uc778 \ub370\uc774\ud130\uc5d0 \ubcc0\ud654\uac00 \uc788\uc744 \uc2dc \uc774\ub97c \ub3d9\uae30\ud654\ud574\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uad6c\ub3c5\ud558\uace0\uc790 \ud558\ub294 ",(0,r.jsx)(t.code,{children:"key"}),"\uac00 \uc5c6\uc744 \uacbd\uc6b0 \ubc18\ud658\ud560 ",(0,r.jsx)(t.code,{children:"initialValue"}),"\ub85c \ucd08\uae30\uac12\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c, ",(0,r.jsx)(t.code,{children:"\uc11c\ubc84 \uc0ac\uc774\ub4dc \ub80c\ub354\ub9c1(SSR)"}),"\uc758 \uacbd\uc6b0 \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 ",(0,r.jsx)(t.code,{children:"initialValue"}),"\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"setState"}),"\ub294 \uac12 \uc790\uccb4\ub97c \ub118\uae38 \uc218 \uc788\uc73c\uba70, \ud568\uc218\ub3c4 \ub118\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218\ub85c \ud65c\uc6a9 \uc2dc\uc5d0 \uc778\uc790\ub85c state\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { state, setState, removeState } = useSessionStorage<number[]>({\n  key: 'test',\n  initialValue: [1, 2],\n});\n\nsetState([1, 2, 3]);\nsetState(state => [...state, 3]);\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(t.p,{children:["initialValue\ub97c \ub118\uaca8\uc8fc\uba74 \ub354\uc6b1 ",(0,r.jsx)(t.code,{children:"\uba85\ud655\ud55c \ud0c0\uc785 \ucd94\ub860"}),"\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { state, setState } = useSessionStorage<number[]>({\n  key: 'test',\n});\n\nstate; // number[] | null\nsetState(state => {\n  state; // number[] | null\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const { state, setState } = useSessionStorage<number[]>({\n  key: 'test',\n  initialValue: [],\n});\n\nstate; // number[]\nsetState(state => {\n  state; // number[]\n});\n"})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useSessionStorage/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"interface UseSessionStorageWithoutInitialValueProps {\n  key: string;\n}\n\ninterface UseSessionStorageWithInitialValueProps<T> {\n  key: string;\n  initialValue: T | (() => T);\n}\n\ntype UseSessionStorageProps<T> =\n  | UseSessionStorageWithoutInitialValueProps\n  | UseSessionStorageWithInitialValueProps<T>;\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// \ud568\uc218 \uc624\ubc84\ub85c\ub529\nexport function useSessionStorage<T>({\n  key,\n  initialValue,\n}: UseSessionStorageWithInitialValueProps<T>): {\n  readonly state: T;\n  readonly setState: (value: T | ((state: T) => T)) => void;\n  readonly removeState: () => void;\n};\n\nexport function useSessionStorage<T = unknown>({\n  key,\n}: UseSessionStorageWithoutInitialValueProps): {\n  readonly state: T | null;\n  readonly setState: (value: T | ((state: T | null) => T)) => void;\n  readonly removeState: () => void;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useSessionStorage } from '@modern-kit/react';\n\nconst Example = () => {\n  const { state, setState, removeState } = useSessionStorage<string>({\n    key: 'test',\n    initialValue: 'default',\n  });\n\n  return (\n    <div>\n      <p>\uac1c\ubc1c\uc790 \ub3c4\uad6c\uc5d0\uc11c \uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694!</p>\n      <p>state: {state}</p>\n      <button onClick={() => setState('foo')}>\n        {`\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \"test\"key\uc5d0 \"foo\"\ub370\uc774\ud130 \uc800\uc7a5`}\n      </button>\n      <button onClick={() => setState('bar')}>\n        {`\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \"test\"key\uc5d0 \"bar\"\ub370\uc774\ud130 \uc800\uc7a5`}\n      </button>\n      <button onClick={() => removeState()}>\n        {`\uc138\uc158 \uc2a4\ud1a0\ub9ac\uc9c0 \"test\"key \uc81c\uac70`}\n      </button>\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(u,{})]})}function v(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(7800);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},384:(e,t,n)=>{n.d(t,{D9:()=>we,Hk:()=>ee,LN:()=>be,Mm:()=>te,Nr:()=>M,Pr:()=>xe,S1:()=>J,VP:()=>ne,XI:()=>oe,Xs:()=>Ce,Yz:()=>se,_:()=>ve,a9:()=>Z,ac:()=>me,cM:()=>Oe,df:()=>q,iP:()=>Ie,ii:()=>pe,jr:()=>re,my:()=>G,nA:()=>Q,uM:()=>N,wY:()=>H,yU:()=>Se});var r=n(7800),o=n(1986),s=(n(4041),"object"==typeof global&&global&&global.Object===Object&&global),i="object"==typeof self&&self&&self.Object===Object&&self,a=s||i||Function("return this")(),c=a.Symbol,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=c?c.toStringTag:void 0,v=Object.prototype.toString,h="[object Null]",m="[object Undefined]",p=c?c.toStringTag:void 0;var g="[object Symbol]",y=/\s/,b=/^\s+/;function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var S=NaN,x=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,j=/^0o[0-7]+$/i,E=parseInt;function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?m:h:p&&p in Object(e)?function(e){var t=u.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return v.call(e)}(e)}(e)==g}(e))return S;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(b,""):e}(e);var n=k.test(e);return n||j.test(e)?E(e.slice(2),n?2:8):x.test(e)?S:+e}var O=function(){return a.Date.now()},I=Math.max,L=Math.min;const T=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},M=(e,t,n={})=>{const o=T(e),s=(0,r.useMemo)((()=>function(e,t,n){var r,o,s,i,a,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,s=o;return r=o=void 0,l=t,i=e.apply(s,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=s}function m(){var e=O();if(h(e))return p(e);a=setTimeout(m,function(e){var n=t-(e-c);return d?L(n,s-(e-l)):n}(e))}function p(e){return a=void 0,f&&r?v(e):(r=o=void 0,i)}function g(){var e=O(),n=h(e);if(r=arguments,o=this,c=e,n){if(void 0===a)return function(e){return l=e,a=setTimeout(m,t),u?v(e):i}(c);if(d)return clearTimeout(a),a=setTimeout(m,t),v(c)}return void 0===a&&(a=setTimeout(m,t)),i}return t=C(t)||0,w(n)&&(u=!!n.leading,s=(d="maxWait"in n)?I(C(n.maxWait)||0,t):s,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=o=a=void 0},g.flush=function(){return void 0===a?i:p(O())},g}(o,t,n)),[o,t,n]);return(e=>{const t=T(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>s.cancel())),s},N=({children:e,capture:t,wait:n,options:o})=>{const s=r.Children.only(e),i=M(((...e)=>{const n=null==s?void 0:s.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(s,{[t]:i})};function P(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function R(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function $(e,t,n,r){return new(n||(n=Promise))((function(t,o){function s(e){try{a(r.next(e))}catch(e){o(e)}}function i(e){try{a(r.throw(e))}catch(e){o(e)}}function a(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(s,i)}a((r=r.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const V=e=>"function"==typeof e,z={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},X=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o)||!Y(e[o],t[o]))return!1;return!0},Y=(e,t)=>{if(e===t)return!0;if("number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t))return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(e.constructor!==t.constructor)return!1;if(e instanceof Set){if(e.size!==t.size)return!1;const n=[...e],r=[...t];return X(n,r)}if(e instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!t.has(n)||!Y(r,t.get(n)))return!1;return!0}return X(e,t)},F=()=>"undefined"==typeof window&&"undefined"!=typeof global,U=()=>{};function W(e){if("string"!=typeof e)return e;try{return JSON.parse(e)}catch(e){throw new Error(`Failed to parse data: ${e}`)}}const _=()=>!F(),A=e=>$(void 0,0,void 0,(function*(){if(!_())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const t=document.createElement("textarea");t.value=e,t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(t)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),D=e=>$(void 0,0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return yield A(n)})),J=({onIntersectStart:e=U,onIntersectEnd:t=U,calledOnce:n=!1,root:o=null,threshold:s=0,rootMargin:i="0px 0px 0px 0px"})=>{const a=(0,r.useRef)(0),c=(0,r.useRef)(!1),l=(0,r.useRef)(null),u=T((([r],o)=>{if(!r)return;const s=r.target;r.isIntersecting?(c.current=!0,a.current+=1,e(r)):c.current&&(c.current=!1,a.current+=1,t(r)),n&&a.current>1&&o.unobserve(s)}));return{ref:e=>{l.current&&l.current.disconnect(),l.current=new IntersectionObserver(u,{threshold:s,root:o,rootMargin:i}),e&&l.current.observe(e)}}},B=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),H=(0,r.forwardRef)(((e,t)=>{var{src:n,threshold:r,root:s,rootMargin:i,alt:a,className:c}=e,l=P(e,["src","threshold","root","rootMargin","alt","className"]);const{ref:u}=J({onIntersectStart:e=>{e.target.src=n},calledOnce:!0,threshold:r,root:s,rootMargin:i}),d=c?`lazy-image ${c}`:"lazy-image";return(0,o.jsx)("img",Object.assign({className:d,ref:B(t,u),alt:a},l))}));H.displayName="LazyImage";const Z=(0,r.forwardRef)(((e,t)=>{var{width:n,height:s,fallback:i,className:a,style:c,duration:l="0.2s",onLoad:u}=e,d=P(e,["width","height","fallback","className","style","duration","onLoad"]);const[f,v]=(0,r.useState)(!1),h=!f,m=(0,r.useMemo)((()=>({position:"relative",width:n,height:s})),[n,s]),p=(0,r.useMemo)((()=>Object.assign({position:"absolute",top:0,left:0,opacity:h?0:1,transition:`opacity ${l}`},c)),[h,l,c]),g=(0,r.useCallback)((e=>{u&&u(e),v(!0)}),[u]);return(0,o.jsxs)("div",{className:a?`lazy-image-wrapper ${a}`:"lazy-image-wrapper",style:m,children:[h&&i,(0,o.jsx)(H,Object.assign({ref:t,width:n,height:s,style:p,onLoad:g},d))]})}));Z.displayName="FallbackLazyImage";const q=(0,r.forwardRef)(((e,t)=>{const{onIntersectStart:n,onIntersectEnd:r,calledOnce:s,threshold:i,root:a,rootMargin:c}=e,l=P(e,["onIntersectStart","onIntersectEnd","calledOnce","threshold","root","rootMargin"]),{ref:u}=J({onIntersectStart:n,onIntersectEnd:r,calledOnce:s,threshold:i,root:a,rootMargin:c});return(0,o.jsx)("div",Object.assign({ref:B(t,u)},l,{children:e.children}))}));q.displayName="InView";const G=(0,r.forwardRef)(((e,t)=>{var{as:n,children:s,callback:i}=e,a=P(e,["as","children","callback"]);const{ref:c}=(e=>{const t=(0,r.useRef)(null),n=T(e);return(0,r.useEffect)((()=>{const e=(()=>{if(F())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=({target:e})=>{const r=t.current;r&&!r.contains(e)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}})(i);return(0,o.jsx)(n||"div",Object.assign({ref:B(c,t)},a,{children:s}))})),K=_()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const Q=({children:e,condition:t,fallback:n=null})=>{const s="function"==typeof(i=t)?i():i;var i;return(0,o.jsx)(r.Fragment,s?{children:e}:{children:n})},ee=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var s;return(0,o.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(s=t[e])&&void 0!==s?s:n})},te=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>R(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},ne=()=>{const[e,t]=(0,r.useState)(null);return{copiedData:e,copyText:(0,r.useCallback)((e=>R(void 0,void 0,void 0,(function*(){try{const n=yield A(e);return t(n),!0}catch(e){return console.error(e.message),t(null),!1}}))),[]),copyImage:(0,r.useCallback)((({src:e,toText:n=!1})=>R(void 0,void 0,void 0,(function*(){try{const r=yield(({src:e,toText:t=!1})=>$(void 0,0,void 0,(function*(){if(!_())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield D(e);if(!("write"in window.navigator.clipboard))return yield D(e);if(t)return yield D(e);const n=yield((e,t="png")=>new Promise(((n,r)=>{const o=new Image;o.onload=()=>$(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=o.width,e.height=o.height;try{const r=e.getContext("2d");if(!r)throw new Error("Failed to get 2d context");r.drawImage(o,0,0);const s=yield((e,t)=>new Promise(((n,r)=>{e.toBlob((e=>{e?n(e):r(new Error(`Failed to create blob with format ${t}`))}),t)})))(e,z[t]);n(s)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),r(e)}})),o.onerror=()=>{r(new Error("Failed to load image"))},o.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),n}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:n});return t(r),!0}catch(e){return console.error(e.message),t(null),!1}}))),[])}},re=(e,{preserveTitleOnUnmount:t=!1}={})=>{K((()=>{const n=document.title;return document.title=e,()=>{t||(document.title=n)}}),[e,t])},oe=({onEnter:e=U,onLeave:t=U}={})=>{const[n,o]=(0,r.useState)(!1),s=(0,r.useRef)(null),i=T((t=>{o(!0),e(t)})),a=T((e=>{o(!1),t(e)}));return(0,r.useEffect)((()=>{const e=s.current;if(e)return e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",a),()=>{e.removeEventListener("mouseenter",i),e.removeEventListener("mouseleave",a)}}),[i,a]),{ref:s,isHovered:n}},se=(e,t)=>{const n=((e,t)=>{const[n,o]=(0,r.useState)(e),s=T(null!=t?t:Y);return(0,r.useEffect)((()=>{s(n,e)||o(e)}),[s,n,e]),n})(t),o=T(e),s="number"==typeof n,i=s?n:n.delay,[a,c]=(0,r.useState)((()=>{var e;return!!s||null===(e=null==n?void 0:n.enabled)||void 0===e||e})),l=(0,r.useCallback)((()=>{c(!0)}),[]),u=(0,r.useCallback)((()=>{c(!1)}),[]);return(0,r.useEffect)((()=>{var e;s||c(null===(e=null==n?void 0:n.enabled)||void 0===e||e)}),[s,n]),(0,r.useEffect)((()=>{if(null==i)return;const e=window.setInterval((()=>{a?o():clearInterval(e)}),i);return()=>clearInterval(e)}),[o,a,i]),{isActing:a,start:l,stop:u}},ie="local-storage",ae="session-storage",ce={localStorage:{key:ie,subscribe:e=>{window.addEventListener(ie,e)},unsubscribe:e=>{window.removeEventListener(ie,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(ie))}},sessionStorage:{key:ae,subscribe:e=>{window.addEventListener(ae,e)},unsubscribe:e=>{window.removeEventListener(ae,e)},dispatchEvent:()=>{window.dispatchEvent(new StorageEvent(ae))}}},le=e=>ce[e],ue=le("localStorage"),de=e=>(ue.subscribe(e),()=>{ue.unsubscribe(e)}),fe=e=>window.localStorage.getItem(e);function ve(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>V(n)?n():n),[n]),s=(0,r.useSyncExternalStore)(de,(()=>fe(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>s?W(s):o),[s,o]),setState:(0,r.useCallback)((e=>{try{const n=fe(t),r=n?W(n):o,s=V(e)?e(r):e;window.localStorage.setItem(t,JSON.stringify(s)),ue.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in localStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.localStorage.removeItem(t),ue.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from localStorage: ${e}`)}}),[t])}}const he=e=>!!_()&&window.matchMedia(e).matches,me=e=>{const[t,n]=(0,r.useState)(he(e)),o=(0,r.useCallback)((()=>{n(he(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},pe=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return K((()=>{const t=t=>{const{screenX:r,screenY:o,clientX:s,clientY:i,pageX:a,pageY:c}=t,l={},u={};if(e.current){const t=e.current.getBoundingClientRect(),n=s-t.left,r=i-t.top,o=t.left+window.scrollX,a=t.top+window.scrollY;l.elementRelativeX=n,l.elementRelativeY=r,u.elementPositionX=o,u.elementPositionY=a}n(Object.assign(Object.assign({screenX:r,screenY:o,clientX:s,clientY:i,pageX:a,pageY:c},l),u))};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}}),[]),{ref:e,position:t}},ge=()=>navigator.onLine,ye=()=>!0,be=({onlineCallback:e=U,offlineCallback:t=U}={})=>{const n=T((n=>((e,t,n)=>{const r=n=>(t(n),e()),o=t=>(n(t),e());return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}})(n,e,t)));return{isOnline:(0,r.useSyncExternalStore)(n,ge,ye)}},we=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},Se=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),s=T(e),i=(0,r.useCallback)((([e])=>{e&&(s(e),n(e.contentRect))}),[s]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(i);return t.observe(e),()=>{t.unobserve(e)}}),[i]),{ref:o,contentRect:t}},xe=({autoLock:e=!0}={})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const e=t.current;n.current=window.getComputedStyle(e).overflow,e.style.overflow="hidden"}),[]),s=(0,r.useCallback)((()=>{n.current&&(t.current.style.overflow=n.current)}),[]);return K((()=>(t.current||(t.current=document.body),e&&o(),()=>s())),[e,o,s]),{ref:t,lock:o,unlock:s}},ke=le("sessionStorage"),je=e=>(ke.subscribe(e),()=>{ke.unsubscribe(e)}),Ee=e=>window.sessionStorage.getItem(e);function Ce(e){const{key:t}=e,n="initialValue"in e?e.initialValue:null,o=(0,r.useMemo)((()=>V(n)?n():n),[n]),s=(0,r.useSyncExternalStore)(je,(()=>Ee(t)),(()=>(e=>JSON.stringify(e))(o)));return{state:(0,r.useMemo)((()=>s?W(s):o),[s,o]),setState:(0,r.useCallback)((e=>{try{const n=Ee(t),r=n?W(n):o,s=V(e)?e(r):e;window.sessionStorage.setItem(t,JSON.stringify(s)),ke.dispatchEvent()}catch(e){throw new Error(`Failed to store data for key "${t}" in sessionStorage: ${e}`)}}),[t,o]),removeState:(0,r.useCallback)((()=>{try{window.sessionStorage.removeItem(t),ke.dispatchEvent()}catch(e){throw new Error(`Failed to remove key "${t}" from sessionStorage: ${e}`)}}),[t])}}const Oe=(e="vh",t={enableResize:!1})=>{const{enableResize:n}=t;K((()=>{const t=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty(`--${e}`,`${t}px`)};return t(),n&&window.addEventListener("resize",t),()=>{n&&window.removeEventListener("resize",t)}}),[e,n])},Ie=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,s]=(0,r.useState)({width:null,height:null}),i=(0,r.useCallback)((()=>{s({width:window.innerWidth,height:window.innerHeight})}),[]),a=M(i,n),c=T(a),l=(0,r.useMemo)((()=>t?c:i),[i,t,c]);return K((()=>(i(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[i,l]),o}}}]);