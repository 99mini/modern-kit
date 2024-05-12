"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4949],{3696:(e,t,n)=>{n.r(t),n.d(t,{ResizeObserver:()=>l,assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=n(1986),o=n(7355),i=n(5474);const c={},s="useResizeObserver",u={id:"react/hooks/useResizeObserver",title:"useResizeObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useResizeObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useResizeObserver",permalink:"/modern-kit/docs/react/hooks/useResizeObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePrevious",permalink:"/modern-kit/docs/react/hooks/usePrevious"},next:{title:"useTimeout",permalink:"/modern-kit/docs/react/hooks/useTimeout"}},a={},l=()=>{const e={br:"br",div:"div",...(0,o.a)()},{ref:t,contentRect:n}=(0,i.yU)((e=>{console.log("resize",e)}));return(0,r.jsxs)(e.div,{ref:t,style:{width:"100%",height:"400px",background:"#439966",fontSize:"2rem",color:"#fff"},children:["\ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,r.jsx)(e.br,{}),`width: ${n.width}, height: ${n.height}`]})},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"useresizeobserver",children:"useResizeObserver"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"ref"}),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useResizeObserver/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"/**\n * type ContentRect = {\n    readonly bottom: number;\n    readonly height: number;\n    readonly left: number;\n    readonly right: number;\n    readonly top: number;\n    readonly width: number;\n    readonly x: number;\n    readonly y: number;\n  }\n */\ntype ContentRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nconst useResizeObserver: <T extends HTMLElement>(\n  action: (entry: ResizeObserverEntry) => void\n) => {\n  ref: React.RefObject<T>;\n  contentRect: ContentRect;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { forwardRef, useRef } from 'react';\nimport { useResizeObserver } from '@modern-kit/react';\n\nconst Example = () => {\n  const { ref, contentRect } = useResizeObserver<HTMLDivElement>((entry) => {\n    console.log('resize', entry);\n  });\n\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      height: '400px', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div\n      ref={ref}\n      style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      {`width: ${contentRect.width}, height: ${contentRect.height}`}\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"ResizeObserver API"})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},7355:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7800);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}},5474:(e,t,n)=>{n.d(t,{D9:()=>B,Hk:()=>V,Mm:()=>Y,Nr:()=>T,ac:()=>q,df:()=>F,iP:()=>K,nA:()=>J,uM:()=>P,wY:()=>H,yU:()=>G});var r=n(7800),o=n(1986),i=(n(286),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),u=s.Symbol,a=Object.prototype,l=a.hasOwnProperty,d=a.toString,f=u?u.toStringTag:void 0,h=Object.prototype.toString,p="[object Null]",v="[object Undefined]",b=u?u.toStringTag:void 0;var m="[object Symbol]",y=/\s/,g=/^\s+/;function x(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var O=NaN,j=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,R=/^0o[0-7]+$/i,k=parseInt;function M(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:p:b&&b in Object(e)?function(e){var t=l.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return h.call(e)}(e)}(e)==m}(e))return O;if(x(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=x(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&y.test(e.charAt(t)););return t}(e)+1).replace(g,""):e}(e);var n=w.test(e);return n||R.test(e)?k(e.slice(2),n?2:8):j.test(e)?O:+e}var z=function(){return s.Date.now()},E=Math.max,S=Math.min;const C=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},T=(e,t,n={})=>{const o=C(e),i=(0,r.useMemo)((()=>function(e,t,n){var r,o,i,c,s,u,a=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){var n=r,i=o;return r=o=void 0,a=t,c=e.apply(i,n)}function p(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-a>=i}function v(){var e=z();if(p(e))return b(e);s=setTimeout(v,function(e){var n=t-(e-u);return d?S(n,i-(e-a)):n}(e))}function b(e){return s=void 0,f&&r?h(e):(r=o=void 0,c)}function m(){var e=z(),n=p(e);if(r=arguments,o=this,u=e,n){if(void 0===s)return function(e){return a=e,s=setTimeout(v,t),l?h(e):c}(u);if(d)return clearTimeout(s),s=setTimeout(v,t),h(u)}return void 0===s&&(s=setTimeout(v,t)),c}return t=M(t)||0,x(n)&&(l=!!n.leading,i=(d="maxWait"in n)?E(M(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},m.flush=function(){return void 0===s?c:b(z())},m}(o,t,n)),[o,t,n]);return(e=>{const t=C(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>i.cancel())),i},P=({children:e,capture:t,wait:n,options:o})=>{const i=r.Children.only(e),c=T(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(i,{[t]:c})};function N(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function I(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}u((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const L=()=>"undefined"==typeof window&&"undefined"!=typeof global,D=()=>{},$=()=>!L(),U=({action:e,calledOnce:t=!1,root:n=null,threshold:o=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(null),s=C(null!=e?e:D),u=C((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;s(e),t&&n.unobserve(r)}}));return C((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(u,{root:n,threshold:o,rootMargin:i}),e&&c.current.observe(e)}))},A=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),F=(0,r.forwardRef)(((e,t)=>{const{action:n,calledOnce:r,threshold:i,root:c,rootMargin:s}=e,u=N(e,["action","calledOnce","threshold","root","rootMargin"]),a=U({action:n,calledOnce:r,threshold:i,root:c,rootMargin:s});return(0,o.jsx)("div",Object.assign({ref:A(t,a)},u,{children:e.children}))}));F.displayName="InView";const H=(0,r.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:s,rootMargin:u}=e,a=N(e,["src","style","threshold","root","rootMargin"]);const l=U({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:u}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,o.jsx)("img",Object.assign({},a,{ref:A(t,l),style:d}))}));H.displayName="LazyImage";const W=$()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const J=({children:e,condition:t,fallback:n=null})=>{const i="function"==typeof(c=t)?c():c;var c;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:n})},V=({condition:e,cases:t,defaultCaseComponent:n=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:n}:{children:null!==(i=t[e])&&void 0!==i?i:n})},Y=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>I(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},Z=e=>!!$()&&window.matchMedia(e).matches,q=e=>{const[t,n]=(0,r.useState)(Z(e)),o=(0,r.useCallback)((()=>{n(Z(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},B=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},G=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=C(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:o,contentRect:t}},K=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=T(c,n),u=(0,r.useMemo)((()=>t?s:c),[c,t,s]);return W((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),o}}}]);