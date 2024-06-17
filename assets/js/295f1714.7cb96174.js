"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4549],{9790:(e,t,n)=>{n.r(t),n.d(t,{Example:()=>d,assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var r=n(1986),o=n(9937),i=n(384),c=n(7800);const s={},a="useHover",u={id:"react/hooks/useHover",title:"useHover",description:"\ub300\uc0c1 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ub9c8\uc6b0\uc2a4\uac00 \uc62c\ub77c\uac00\uac70\ub098 \ub0b4\ub824\uac14\uc744 \ub54c\uc758 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\uace0, \ub9c8\uc6b0\uc2a4\uac00 \uc62c\ub77c\uac00\uac70\ub098 \ub0b4\ub824\uac14\uc744 \ub54c\uc758 \uc561\uc158\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useHover.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useHover",permalink:"/modern-kit/docs/react/hooks/useHover",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useForceUpdate",permalink:"/modern-kit/docs/react/hooks/useForceUpdate"},next:{title:"useImageStatus",permalink:"/modern-kit/docs/react/hooks/useImageStatus"}},l={},d=()=>{const e={div:"div",...(0,o.a)()},[t,n]=(0,c.useState)(0),{ref:s,isHovered:a}=(0,i.XI)({onEnter:()=>n((e=>e+1)),onLeave:()=>n((e=>e-1))});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.div,{ref:s,style:{width:"200px",height:"200px",backgroundColor:"skyBlue"},children:a?"hover":"leave"}),(0,r.jsx)(e.div,{children:t})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function v(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usehover",children:"useHover"}),"\n",(0,r.jsx)(t.p,{children:"\ub300\uc0c1 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uae30\uc900\uc73c\ub85c \ub9c8\uc6b0\uc2a4\uac00 \uc62c\ub77c\uac00\uac70\ub098 \ub0b4\ub824\uac14\uc744 \ub54c\uc758 \uc0c1\ud0dc\ub97c \ubc18\ud658\ud558\uace0, \ub9c8\uc6b0\uc2a4\uac00 \uc62c\ub77c\uac00\uac70\ub098 \ub0b4\ub824\uac14\uc744 \ub54c\uc758 \uc561\uc158\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useHover/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"const useHover: <T extends HTMLElement>({\n  onEnter?: (event: MouseEvent) => void,\n  onLeave?: (event: MouseEvent) => void,\n}) => {\n  ref: T,\n  isHovered: boolean\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useHover } from '@modern-kit/react';\n\nconst Example = () => {\n  const [counter, setCounter] = useState(0);\n\n  const { ref, isHovered } = useHover<HTMLDivElement>({\n    onEnter: () => setCounter((count) => count + 1),\n    onLeave: () => setCounter((count) => count - 1)\n  });\n\n  const style = {\n    width: '200px',\n    height: '200px',\n    backgroundColor: 'skyBlue'\n  };\n\n  return (\n    <>\n      <div ref={ref} style={style}>{isHovered ? 'hover' : 'leave'}</div>\n      <div>{counter}</div>\n    </>\n  );\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n","\n",(0,r.jsx)(d,{})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7800);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}},384:(e,t,n)=>{n.d(t,{D9:()=>ue,Hk:()=>J,LN:()=>ae,Mm:()=>K,Nr:()=>R,Pr:()=>de,S1:()=>_,VP:()=>Q,XI:()=>te,Yz:()=>ne,ac:()=>oe,cM:()=>fe,df:()=>W,iP:()=>ve,ii:()=>ie,jr:()=>ee,my:()=>Z,nA:()=>G,uM:()=>P,wY:()=>V,yU:()=>le});var r=n(7800),o=n(1986),i=(n(4041),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),a=s.Symbol,u=Object.prototype,l=u.hasOwnProperty,d=u.toString,f=a?a.toStringTag:void 0,v=Object.prototype.toString,p="[object Null]",m="[object Undefined]",h=a?a.toStringTag:void 0;var g="[object Symbol]",y=/\s/,b=/^\s+/;function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var x=NaN,E=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,k=/^0o[0-7]+$/i,C=parseInt;function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?m:p:h&&h in Object(e)?function(e){var t=l.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return v.call(e)}(e)}(e)==g}(e))return x;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(b,""):e}(e);var n=j.test(e);return n||k.test(e)?C(e.slice(2),n?2:8):E.test(e)?x:+e}var S=function(){return s.Date.now()},L=Math.max,M=Math.min;const I=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},R=(e,t,n={})=>{const o=I(e),i=(0,r.useMemo)((()=>function(e,t,n){var r,o,i,c,s,a,u=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=r,i=o;return r=o=void 0,u=t,c=e.apply(i,n)}function p(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-u>=i}function m(){var e=S();if(p(e))return h(e);s=setTimeout(m,function(e){var n=t-(e-a);return d?M(n,i-(e-u)):n}(e))}function h(e){return s=void 0,f&&r?v(e):(r=o=void 0,c)}function g(){var e=S(),n=p(e);if(r=arguments,o=this,a=e,n){if(void 0===s)return function(e){return u=e,s=setTimeout(m,t),l?v(e):c}(a);if(d)return clearTimeout(s),s=setTimeout(m,t),v(a)}return void 0===s&&(s=setTimeout(m,t)),c}return t=O(t)||0,w(n)&&(l=!!n.leading,i=(d="maxWait"in n)?L(O(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),u=0,r=a=o=s=void 0},g.flush=function(){return void 0===s?c:h(S())},g}(o,t,n)),[o,t,n]);return(e=>{const t=I(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>i.cancel())),i},P=({children:e,capture:t,wait:n,options:o})=>{const i=r.Children.only(e),c=R(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(i,{[t]:c})};function H(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function T(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))}function X(e,t,n,r){return new(n||(n=Promise))((function(t,o){function i(e){try{s(r.next(e))}catch(e){o(e)}}function c(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var r;e.done?t(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}s((r=r.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const Y={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},z=()=>"undefined"==typeof window&&"undefined"!=typeof global,N=()=>!z(),F=e=>X(void 0,0,void 0,(function*(){if(!N())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const t=document.createElement("textarea");t.value=e,t.style.opacity="0",document.body.appendChild(t),t.focus(),t.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(t)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),$=e=>X(void 0,0,void 0,(function*(){const t=yield fetch(e),n=yield t.text();return yield F(n)})),U=(e,t)=>{const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const o of n)if(!r.includes(o)||!B(e[o],t[o]))return!1;return!0},B=(e,t)=>{if(e===t)return!0;if("number"==typeof e&&"number"==typeof t&&isNaN(e)&&isNaN(t))return!0;if("object"!=typeof e||"object"!=typeof t||null===e||null===t)return!1;if(e.constructor!==t.constructor)return!1;if(e instanceof Set){if(e.size!==t.size)return!1;const n=[...e],r=[...t];return U(n,r)}if(e instanceof Map){if(e.size!==t.size)return!1;for(const[n,r]of e)if(!t.has(n)||!B(r,t.get(n)))return!1;return!0}return U(e,t)},D=()=>{},_=({onIntersectStart:e=D,onIntersectEnd:t=D,calledOnce:n=!1,root:o=null,threshold:i=0,rootMargin:c="0px 0px 0px 0px"})=>{const s=(0,r.useRef)(0),a=(0,r.useRef)(!1),u=(0,r.useRef)(null),l=I((([r],o)=>{if(!r)return;const i=r.target;r.isIntersecting?(a.current=!0,s.current+=1,e(r)):a.current&&(a.current=!1,s.current+=1,t(r)),n&&s.current>1&&o.unobserve(i)}));return{ref:e=>{u.current&&u.current.disconnect(),u.current=new IntersectionObserver(l,{threshold:i,root:o,rootMargin:c}),e&&u.current.observe(e)}}},A=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),W=(0,r.forwardRef)(((e,t)=>{const{onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:c,root:s,rootMargin:a}=e,u=H(e,["onIntersectStart","onIntersectEnd","calledOnce","threshold","root","rootMargin"]),{ref:l}=_({onIntersectStart:n,onIntersectEnd:r,calledOnce:i,threshold:c,root:s,rootMargin:a});return(0,o.jsx)("div",Object.assign({ref:A(t,l)},u,{children:e.children}))}));W.displayName="InView";const V=(0,r.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:s,rootMargin:a}=e,u=H(e,["src","style","threshold","root","rootMargin"]);const{ref:l}=_({onIntersectStart:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:a}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,o.jsx)("img",Object.assign({},u,{ref:A(t,l),style:d}))}));V.displayName="LazyImage";const Z=(0,r.forwardRef)(((e,t)=>{var{as:n,children:i,callback:c}=e,s=H(e,["as","children","callback"]);const{ref:a}=(e=>{const t=(0,r.useRef)(null),n=I(e);return(0,r.useEffect)((()=>{const e=(()=>{if(z())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",r=({target:e})=>{const r=t.current;r&&!r.contains(e)&&n(r)};return document.addEventListener(e,r),()=>{document.removeEventListener(e,r)}}),[n]),{ref:t}})(c);return(0,o.jsx)(n||"div",Object.assign({ref:A(a,t)},s,{children:i}))})),q=N()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const G=({children:e,condition:t,fallback:n=null})=>{const i="function"==typeof(c=t)?c():c;var c;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:n})},J=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(i=t[e])&&void 0!==i?i:n})},K=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>T(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},Q=()=>{const[e,t]=(0,r.useState)(null);return{copiedData:e,copyText:(0,r.useCallback)((e=>T(void 0,void 0,void 0,(function*(){try{const n=yield F(e);return t(n),!0}catch(e){return console.error(e.message),t(null),!1}}))),[]),copyImage:(0,r.useCallback)((({src:e,toText:n=!1})=>T(void 0,void 0,void 0,(function*(){try{const r=yield(({src:e,toText:t=!1})=>X(void 0,0,void 0,(function*(){if(!N())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield $(e);if(!("write"in window.navigator.clipboard))return yield $(e);if(t)return yield $(e);const n=yield((e,t="png")=>new Promise(((n,r)=>{const o=new Image;o.onload=()=>X(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=o.width,e.height=o.height;try{const r=e.getContext("2d");if(!r)throw new Error("Failed to get 2d context");r.drawImage(o,0,0);const i=yield((e,t)=>new Promise(((n,r)=>{e.toBlob((e=>{e?n(e):r(new Error(`Failed to create blob with format ${t}`))}),t)})))(e,Y[t]);n(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),r(e)}})),o.onerror=()=>{r(new Error("Failed to load image"))},o.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[n.type]:n})]),n}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:n});return t(r),!0}catch(e){return console.error(e.message),t(null),!1}}))),[])}},ee=(e,{preserveTitleOnUnmount:t=!1}={})=>{q((()=>{const n=document.title;return document.title=e,()=>{t||(document.title=n)}}),[e,t])},te=({onEnter:e=D,onLeave:t=D}={})=>{const[n,o]=(0,r.useState)(!1),i=(0,r.useRef)(null),c=I((t=>{o(!0),e(t)})),s=I((e=>{o(!1),t(e)}));return(0,r.useEffect)((()=>{const e=i.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",s),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",s)}}),[c,s]),{ref:i,isHovered:n}},ne=(e,t)=>{const n=((e,t)=>{const[n,o]=(0,r.useState)(e),i=I(null!=t?t:B);return(0,r.useEffect)((()=>{i(n,e)||o(e)}),[i,n,e]),n})(t),o=I(e),i="number"==typeof n,c=i?n:n.delay,[s,a]=(0,r.useState)((()=>{var e;return!!i||null===(e=null==n?void 0:n.enabled)||void 0===e||e})),u=(0,r.useCallback)((()=>{a(!0)}),[]),l=(0,r.useCallback)((()=>{a(!1)}),[]);return(0,r.useEffect)((()=>{var e;i||a(null===(e=null==n?void 0:n.enabled)||void 0===e||e)}),[i,n]),(0,r.useEffect)((()=>{if(null==c)return;const e=window.setInterval((()=>{s?o():clearInterval(e)}),c);return()=>clearInterval(e)}),[o,s,c]),{isActing:s,start:u,stop:l}},re=e=>!!N()&&window.matchMedia(e).matches,oe=e=>{const[t,n]=(0,r.useState)(re(e)),o=(0,r.useCallback)((()=>{n(re(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},ie=()=>{const e=(0,r.useRef)(null),[t,n]=(0,r.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return q((()=>{const t=t=>{const{screenX:r,screenY:o,clientX:i,clientY:c,pageX:s,pageY:a}=t,u={},l={};if(e.current){const t=e.current.getBoundingClientRect(),n=i-t.left,r=c-t.top,o=t.left+window.scrollX,s=t.top+window.scrollY;u.elementRelativeX=n,u.elementRelativeY=r,l.elementPositionX=o,l.elementPositionY=s}n(Object.assign(Object.assign({screenX:r,screenY:o,clientX:i,clientY:c,pageX:s,pageY:a},u),l))};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}}),[]),{ref:e,position:t}},ce=()=>navigator.onLine,se=()=>!0,ae=({onlineCallback:e=D,offlineCallback:t=D}={})=>{const n=I((n=>((e,t,n)=>{const r=n=>(t(n),e()),o=t=>(n(t),e());return window.addEventListener("online",r),window.addEventListener("offline",o),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",o)}})(n,e,t)));return{isOnline:(0,r.useSyncExternalStore)(n,ce,se)}},ue=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},le=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=I(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:o,contentRect:t}},de=({autoLock:e=!0}={})=>{const t=(0,r.useRef)(null),n=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const e=t.current;n.current=window.getComputedStyle(e).overflow,e.style.overflow="hidden"}),[]),i=(0,r.useCallback)((()=>{n.current&&(t.current.style.overflow=n.current)}),[]);return q((()=>(t.current||(t.current=document.body),e&&o(),()=>i())),[e,o,i]),{ref:t,lock:o,unlock:i}},fe=(e="vh",t={enableResize:!1})=>{const{enableResize:n}=t;q((()=>{const t=()=>{const t=.01*window.innerHeight;document.documentElement.style.setProperty(`--${e}`,`${t}px`)};return t(),n&&window.addEventListener("resize",t),()=>{n&&window.removeEventListener("resize",t)}}),[e,n])},ve=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=R(c,n),a=I(s),u=(0,r.useMemo)((()=>t?a:c),[c,t,a]);return q((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[c,u]),o}}}]);