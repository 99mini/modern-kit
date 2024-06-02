"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6152],{3915:(e,n,t)=>{t.r(n),t.d(n,{Example:()=>d,assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var o=t(1986),r=t(9937),i=t(7800),c=t(384);const s={},a="SwitchCase",l={id:"react/components/SwithCase",title:"SwitchCase",description:"Switch \ubb38\uc744 \ucef4\ud3ec\ub10c\ud2b8 \ud615\ud0dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/react/components/SwithCase.mdx",sourceDirName:"react/components",slug:"/react/components/SwithCase",permalink:"/modern-kit/docs/react/components/SwithCase",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Portal",permalink:"/modern-kit/docs/react/components/Portal"},next:{title:"When",permalink:"/modern-kit/docs/react/components/When"}},u={},d=()=>{const e={button:"button",div:"div",h3:"h3",...(0,r.a)()},[n,t]=(0,i.useState)(1);return(0,o.jsxs)(e.div,{children:[(0,o.jsxs)(e.div,{children:[(0,o.jsx)(e.button,{onClick:()=>t(1),children:"Change to case 1"}),(0,o.jsx)(e.button,{onClick:()=>t(2),children:"Change to case 2"}),(0,o.jsx)(e.button,{onClick:()=>t(3),children:"Change to case 3"})]}),(0,o.jsx)(c.Hk,{condition:n,cases:{1:(0,o.jsx)(e.h3,{children:"Case No.1"}),2:(0,o.jsx)(e.h3,{children:"Case No.2"}),3:(0,o.jsx)(e.h3,{children:"Case No.3"})}})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"switchcase",children:"SwitchCase"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Switch"})," \ubb38\uc744 \ucef4\ud3ec\ub10c\ud2b8 \ud615\ud0dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cases"}),"\uc5d0\ub294 ",(0,o.jsx)(n.code,{children:"key(condition):value(component)"})," \ud615\ud0dc\uc758 \ud504\ub85c\ud37c\ud2f0\ub97c \uac16\ub294 \uac1d\uccb4\ub97c \ub118\uaca8\uc8fc\uace0, ",(0,o.jsx)(n.code,{children:"condition"})," props\uc5d0 \ub9e4\uce6d\ub418\ub294 ",(0,o.jsx)(n.code,{children:"value(\ucef4\ud3ec\ub10c\ud2b8)"}),"\ub97c \ub80c\ub354\ub9c1\ud569\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"cases"}),"\uc5d0 \ub9e4\uce6d\ub418\ub294 ",(0,o.jsx)(n.code,{children:"condition"}),"\uc774 \uc5c6\uc744 \ub54c \uc784\uc2dc\ub85c \ubcf4\uc5ec\uc904 \uc218 \uc788\ub294 ",(0,o.jsx)(n.code,{children:"defaultCaseComponent"}),"\ub97c ",(0,o.jsx)(n.code,{children:"props"}),"\ub85c \ub118\uaca8\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/components/SwitchCase/index.tsx",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"type Component = Nullable<React.ReactNode>;\n\ninterface SwitchCaseProps<Condition extends string | number> {\n  condition: Condition | null | undefined;\n  cases: Partial<Record<Condition, Component>>;\n  defaultCaseComponent?: Component;\n}\n\nconst SwitchCase: <Condition extends string | number>({\n  condition,\n  cases,\n  defaultCaseComponent,\n}: SwitchCaseProps<Condition>) => JSX.Element;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { SwitchCase } from '@modern-kit/react';\n\n\nconst Example = () => {\n  const [condition, setCondition] = useState(1);\n\n  return (\n    <div>\n      <div>\n        <button onClick={() => setCondition(1)}>Change to case 1</button>\n        <button onClick={() => setCondition(2)}>Change to case 2</button>\n        <button onClick={() => setCondition(3)}>Change to case 3</button>\n      </div>\n\n      <SwitchCase\n        condition={condition}\n        cases={{\n          1: <h3>Case No.1</h3>,\n          2: <h3>Case No.2</h3>,\n          3: <h3>Case No.3</h3>,\n        }}\n      />\n    </div>\n  );\n};\n"})}),"\n","\n",(0,o.jsx)(d,{})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var o=t(7800);const r={},i=o.createContext(r);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(i.Provider,{value:n},e.children)}},384:(e,n,t)=>{t.d(n,{D9:()=>le,Hk:()=>q,LN:()=>ae,Mm:()=>K,Nr:()=>L,VP:()=>Q,XI:()=>ne,Yz:()=>te,ac:()=>re,df:()=>H,iP:()=>de,ii:()=>ie,jr:()=>ee,my:()=>G,nA:()=>Z,uM:()=>N,wY:()=>V,yU:()=>ue});var o=t(7800),r=t(1986),i=(t(4041),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),a=s.Symbol,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=a?a.toStringTag:void 0,h=Object.prototype.toString,p="[object Null]",v="[object Undefined]",m=a?a.toStringTag:void 0;var g="[object Symbol]",b=/\s/,w=/^\s+/;function y(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var x=NaN,C=/^[-+]0x[0-9a-f]+$/i,j=/^0b[01]+$/i,E=/^0o[0-7]+$/i,k=parseInt;function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:p:m&&m in Object(e)?function(e){var n=u.call(e,f),t=e[f];try{e[f]=void 0;var o=!0}catch(e){}var r=d.call(e);return o&&(n?e[f]=t:delete e[f]),r}(e):function(e){return h.call(e)}(e)}(e)==g}(e))return x;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&b.test(e.charAt(n)););return n}(e)+1).replace(w,""):e}(e);var t=j.test(e);return t||E.test(e)?k(e.slice(2),t?2:8):C.test(e)?x:+e}var O=function(){return s.Date.now()},P=Math.max,M=Math.min;const R=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),(0,o.useCallback)(((...e)=>n.current(...e)),[])},L=(e,n,t={})=>{const r=R(e),i=(0,o.useMemo)((()=>function(e,n,t){var o,r,i,c,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(n){var t=o,i=r;return o=r=void 0,l=n,c=e.apply(i,t)}function p(e){var t=e-a;return void 0===a||t>=n||t<0||d&&e-l>=i}function v(){var e=O();if(p(e))return m(e);s=setTimeout(v,function(e){var t=n-(e-a);return d?M(t,i-(e-l)):t}(e))}function m(e){return s=void 0,f&&o?h(e):(o=r=void 0,c)}function g(){var e=O(),t=p(e);if(o=arguments,r=this,a=e,t){if(void 0===s)return function(e){return l=e,s=setTimeout(v,n),u?h(e):c}(a);if(d)return clearTimeout(s),s=setTimeout(v,n),h(a)}return void 0===s&&(s=setTimeout(v,n)),c}return n=S(n)||0,y(t)&&(u=!!t.leading,i=(d="maxWait"in t)?P(S(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),g.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=a=r=s=void 0},g.flush=function(){return void 0===s?c:m(O())},g}(r,n,t)),[r,n,t]);return(e=>{const n=R(e);(0,o.useEffect)((()=>()=>n()),[n])})((()=>i.cancel())),i},N=({children:e,capture:n,wait:t,options:r})=>{const i=o.Children.only(e),c=L(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,r);return(0,o.cloneElement)(i,{[n]:c})};function I(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t}function T(e,n,t,o){return new(t||(t=Promise))((function(r,i){function c(e){try{a(o.next(e))}catch(e){i(e)}}function s(e){try{a(o.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}a((o=o.apply(e,n||[])).next())}))}function X(e,n,t,o){return new(t||(t=Promise))((function(n,r){function i(e){try{s(o.next(e))}catch(e){r(e)}}function c(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(i,c)}s((o=o.apply(e,[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const Y={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",webp:"image/webp"},z=()=>"undefined"==typeof window&&"undefined"!=typeof global,F=()=>!z(),$=e=>X(void 0,0,void 0,(function*(){if(!F())throw new Error("Cannot be executed unless it is a client environment.");try{return"clipboard"in window.navigator?(yield navigator.clipboard.writeText(e),e):(e=>{const n=document.createElement("textarea");n.value=e,n.style.opacity="0",document.body.appendChild(n),n.focus(),n.select();try{return document.execCommand("copy"),e}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}finally{document.body.removeChild(n)}})(e)}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})),W=e=>X(void 0,0,void 0,(function*(){const n=yield fetch(e),t=yield n.text();return yield $(t)})),_=(e,n)=>{const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(const r of t)if(!o.includes(r)||!A(e[r],n[r]))return!1;return!0},A=(e,n)=>{if(e===n)return!0;if("number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n))return!0;if("object"!=typeof e||"object"!=typeof n||null===e||null===n)return!1;if(e.constructor!==n.constructor)return!1;if(e instanceof Set){if(e.size!==n.size)return!1;const t=[...e],o=[...n];return _(t,o)}if(e instanceof Map){if(e.size!==n.size)return!1;for(const[t,o]of e)if(!n.has(t)||!A(o,n.get(t)))return!1;return!0}return _(e,n)},D=()=>{},U=({action:e,calledOnce:n=!1,root:t=null,threshold:r=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,o.useRef)(null),s=R(null!=e?e:D),a=R((([e],t)=>{if(e&&e.isIntersecting){const o=e.target;s(e),n&&t.unobserve(o)}}));return R((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(a,{root:t,threshold:r,rootMargin:i}),e&&c.current.observe(e)}))},B=(...e)=>(0,o.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),H=(0,o.forwardRef)(((e,n)=>{const{action:t,calledOnce:o,threshold:i,root:c,rootMargin:s}=e,a=I(e,["action","calledOnce","threshold","root","rootMargin"]),l=U({action:t,calledOnce:o,threshold:i,root:c,rootMargin:s});return(0,r.jsx)("div",Object.assign({ref:B(n,l)},a,{children:e.children}))}));H.displayName="InView";const V=(0,o.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:a}=e,l=I(e,["src","style","threshold","root","rootMargin"]);const u=U({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:a}),d=(0,o.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,r.jsx)("img",Object.assign({},l,{ref:B(n,u),style:d}))}));V.displayName="LazyImage";const J=F()?o.useLayoutEffect:o.useEffect;(0,o.createContext)({parentPortalElement:null});const Z=({children:e,condition:n,fallback:t=null})=>{const i="function"==typeof(c=n)?c():c;var c;return(0,r.jsx)(o.Fragment,i?{children:e}:{children:t})},q=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var i;return(0,r.jsx)(o.Fragment,null==e?{children:t}:{children:null!==(i=n[e])&&void 0!==i?i:t})},G=(0,o.forwardRef)(((e,n)=>{var{as:t,children:i,callback:c}=e,s=I(e,["as","children","callback"]);const{ref:a}=(e=>{const n=(0,o.useRef)(null),t=R(e);return(0,o.useEffect)((()=>{const e=(()=>{if(z())return!1;const e=window.navigator.userAgent;return/Android|webOS|iPhone|iPad|iPod|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(e)})()?"touchstart":"mousedown",o=({target:e})=>{const o=n.current;o&&!o.contains(e)&&t(o)};return document.addEventListener(e,o),()=>{document.removeEventListener(e,o)}}),[t]),{ref:n}})(c);return(0,r.jsx)(t||"div",Object.assign({ref:B(a,n)},s,{children:i}))})),K=()=>{const[e,n]=(0,o.useState)(!1),t=(0,o.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>T(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},Q=()=>{const[e,n]=(0,o.useState)(null);return{copiedData:e,copyText:(0,o.useCallback)((e=>T(void 0,void 0,void 0,(function*(){try{const t=yield $(e);return n(t),!0}catch(e){return console.error(e.message),n(null),!1}}))),[]),copyImage:(0,o.useCallback)((({src:e,toText:t=!1})=>T(void 0,void 0,void 0,(function*(){try{const o=yield(({src:e,toText:n=!1})=>X(void 0,0,void 0,(function*(){if(!F())throw new Error("Cannot be executed unless it is a client environment.");try{if(!("clipboard"in window.navigator))return yield W(e);if(!("write"in window.navigator.clipboard))return yield W(e);if(n)return yield W(e);const t=yield((e,n="png")=>new Promise(((t,o)=>{const r=new Image;r.onload=()=>X(void 0,0,void 0,(function*(){const e=document.createElement("canvas");e.width=r.width,e.height=r.height;try{const o=e.getContext("2d");if(!o)throw new Error("Failed to get 2d context");o.drawImage(r,0,0);const i=yield((e,n)=>new Promise(((t,o)=>{e.toBlob((e=>{e?t(e):o(new Error(`Failed to create blob with format ${n}`))}),n)})))(e,Y[n]);t(i)}catch(e){console.error(`Failed to load image. message: ${e.mesaage}`),o(e)}})),r.onerror=()=>{o(new Error("Failed to load image"))},r.src=e})))(e,"png");return yield navigator.clipboard.write([new ClipboardItem({[t.type]:t})]),t}catch(e){throw console.error(`Copying to the clipboard failed. message: ${e.message}`),e}})))({src:e,toText:t});return n(o),!0}catch(e){return console.error(e.message),n(null),!1}}))),[])}},ee=(e,{preserveTitleOnUnmount:n=!1}={})=>{J((()=>{const t=document.title;return document.title=e,()=>{n||(document.title=t)}}),[e,n])},ne=({onEnter:e=D,onLeave:n=D}={})=>{const[t,r]=(0,o.useState)(!1),i=(0,o.useRef)(null),c=R((n=>{r(!0),e(n)})),s=R((e=>{r(!1),n(e)}));return(0,o.useEffect)((()=>{const e=i.current;if(e)return e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",s),()=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",s)}}),[c,s]),{ref:i,isHovered:t}},te=(e,n)=>{const t=((e,n)=>{const[t,r]=(0,o.useState)(e),i=R(null!=n?n:A);return(0,o.useEffect)((()=>{i(t,e)||r(e)}),[i,t,e]),t})(n),r=R(e),i="number"==typeof t,c=i?t:t.delay,[s,a]=(0,o.useState)((()=>{var e;return!!i||null===(e=null==t?void 0:t.enabled)||void 0===e||e})),l=(0,o.useCallback)((()=>{a(!0)}),[]),u=(0,o.useCallback)((()=>{a(!1)}),[]);return(0,o.useEffect)((()=>{var e;i||a(null===(e=null==t?void 0:t.enabled)||void 0===e||e)}),[i,t]),(0,o.useEffect)((()=>{if(null==c)return;const e=window.setInterval((()=>{s?r():clearInterval(e)}),c);return()=>clearInterval(e)}),[r,s,c]),{isActing:s,start:l,stop:u}},oe=e=>!!F()&&window.matchMedia(e).matches,re=e=>{const[n,t]=(0,o.useState)(oe(e)),r=(0,o.useCallback)((()=>{t(oe(e))}),[e]);return(0,o.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)}),[e,r]),{isMatch:n}},ie=()=>{const e=(0,o.useRef)(null),[n,t]=(0,o.useState)({screenX:void 0,screenY:void 0,clientX:void 0,clientY:void 0,pageX:void 0,pageY:void 0,elementRelativeX:void 0,elementRelativeY:void 0,elementPositionX:void 0,elementPositionY:void 0});return J((()=>{const n=n=>{const{screenX:o,screenY:r,clientX:i,clientY:c,pageX:s,pageY:a}=n,l={},u={};if(e.current){const n=e.current.getBoundingClientRect(),t=i-n.left,o=c-n.top,r=n.left+window.scrollX,s=n.top+window.scrollY;l.elementRelativeX=t,l.elementRelativeY=o,u.elementPositionX=r,u.elementPositionY=s}t(Object.assign(Object.assign({screenX:o,screenY:r,clientX:i,clientY:c,pageX:s,pageY:a},l),u))};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}}),[]),{ref:e,position:n}},ce=()=>navigator.onLine,se=()=>!0,ae=({onlineCallback:e=D,offlineCallback:n=D}={})=>{const t=R((t=>((e,n,t)=>{const o=t=>(n(t),e()),r=n=>(t(n),e());return window.addEventListener("online",o),window.addEventListener("offline",r),()=>{window.removeEventListener("online",o),window.removeEventListener("offline",r)}})(t,e,n)));return{isOnline:(0,o.useSyncExternalStore)(t,ce,se)}},le=e=>{const n=(0,o.useRef)(e);return(0,o.useEffect)((()=>{n.current=e}),[e]),n.current},ue=e=>{const[n,t]=(0,o.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),r=(0,o.useRef)(null),i=R(e),c=(0,o.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,o.useEffect)((()=>{const e=r.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:r,contentRect:n}},de=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[r,i]=(0,o.useState)({width:null,height:null}),c=(0,o.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=L(c,t),a=R(s),l=(0,o.useMemo)((()=>n?a:c),[c,n,a]);return J((()=>(c(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[c,l]),r}}}]);