"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4949],{3696:(e,n,t)=>{t.r(n),t.d(n,{ResizeObserver:()=>l,assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var r=t(1986),o=t(7355),i=t(5474);const c={},s="useResizeObserver",u={id:"react/hooks/useResizeObserver",title:"useResizeObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useResizeObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useResizeObserver",permalink:"/modern-kit/docs/react/hooks/useResizeObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePrevious",permalink:"/modern-kit/docs/react/hooks/usePrevious"},next:{title:"useTimeout",permalink:"/modern-kit/docs/react/hooks/useTimeout"}},a={},l=()=>{const e={br:"br",div:"div",...(0,o.a)()},{ref:n,contentRect:t}=(0,i.yU)((e=>{console.log("resize",e)}));return(0,r.jsxs)(e.div,{ref:n,style:{width:"100%",height:"400px",background:"#439966",fontSize:"2rem",color:"#fff"},children:["\ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. ",(0,r.jsx)(e.br,{}),`width: ${t.width}, height: ${t.height}`]})},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"useresizeobserver",children:"useResizeObserver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"}),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uc758 DOM \ud06c\uae30 \ubcc0\ud654\ub97c \uac10\uc9c0\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"/**\n * type ContentRect = {\n    readonly bottom: number;\n    readonly height: number;\n    readonly left: number;\n    readonly right: number;\n    readonly top: number;\n    readonly width: number;\n    readonly x: number;\n    readonly y: number;\n  }\n */\ntype ContentRect = Omit<DOMRectReadOnly, 'toJSON'>;\n\nconst useResizeObserver: <T extends HTMLElement>(\n  action: (entry: ResizeObserverEntry) => void\n) => {\n  ref: React.RefObject<T>;\n  contentRect: ContentRect;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import React, { forwardRef, useRef } from 'react';\nimport { useResizeObserver } from '@modern-kit/react';\n\nconst Example = () => {\n  const { ref, contentRect } = useResizeObserver<HTMLDivElement>((entry) => {\n    console.log('resize', entry);\n  });\n\n  const boxStyle = useMemo(() => {\n    return {\n      width: '100%', \n      height: '400px', \n      background: '#439966', \n      fontSize: '2rem',\n      color: '#fff',\n    }\n  }, []);\n\n  return (\n    <div\n      ref={ref}\n      style={boxStyle}>\n      \ube0c\ub77c\uc6b0\uc800 \ub108\ube44\ub97c \uc904\uc5ec\ubcf4\uc138\uc694. <br />\n      {`width: ${contentRect.width}, height: ${contentRect.height}`}\n    </div>\n  );\n};\n"})}),"\n","\n",(0,r.jsx)(l,{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",children:"ResizeObserver API"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},7355:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var r=t(7800);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},5474:(e,n,t)=>{t.d(n,{D9:()=>B,Hk:()=>V,Mm:()=>Y,Nr:()=>T,ac:()=>q,df:()=>F,iP:()=>K,nA:()=>J,uM:()=>P,wY:()=>H,yU:()=>G});var r=t(7800),o=t(1986),i=(t(286),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),u=s.Symbol,a=Object.prototype,l=a.hasOwnProperty,d=a.toString,f=u?u.toStringTag:void 0,h=Object.prototype.toString,p="[object Null]",v="[object Undefined]",b=u?u.toStringTag:void 0;var m="[object Symbol]",y=/\s/,g=/^\s+/;function x(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var O=NaN,j=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,R=/^0o[0-7]+$/i,k=parseInt;function M(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:p:b&&b in Object(e)?function(e){var n=l.call(e,f),t=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(n?e[f]=t:delete e[f]),o}(e):function(e){return h.call(e)}(e)}(e)==m}(e))return O;if(x(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=x(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&y.test(e.charAt(n)););return n}(e)+1).replace(g,""):e}(e);var t=w.test(e);return t||R.test(e)?k(e.slice(2),t?2:8):j.test(e)?O:+e}var E=function(){return s.Date.now()},z=Math.max,S=Math.min;const C=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),(0,r.useCallback)(((...e)=>n.current(...e)),[])},T=(e,n,t={})=>{const o=C(e),i=(0,r.useMemo)((()=>function(e,n,t){var r,o,i,c,s,u,a=0,l=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function h(n){var t=r,i=o;return r=o=void 0,a=n,c=e.apply(i,t)}function p(e){var t=e-u;return void 0===u||t>=n||t<0||d&&e-a>=i}function v(){var e=E();if(p(e))return b(e);s=setTimeout(v,function(e){var t=n-(e-u);return d?S(t,i-(e-a)):t}(e))}function b(e){return s=void 0,f&&r?h(e):(r=o=void 0,c)}function m(){var e=E(),t=p(e);if(r=arguments,o=this,u=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(v,n),l?h(e):c}(u);if(d)return clearTimeout(s),s=setTimeout(v,n),h(u)}return void 0===s&&(s=setTimeout(v,n)),c}return n=M(n)||0,x(t)&&(l=!!t.leading,i=(d="maxWait"in t)?z(M(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},m.flush=function(){return void 0===s?c:b(E())},m}(o,n,t)),[o,n,t]);return(e=>{const n=C(e);(0,r.useEffect)((()=>()=>n()),[n])})((()=>i.cancel())),i},P=({children:e,capture:n,wait:t,options:o})=>{const i=r.Children.only(e),c=T(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,o);return(0,r.cloneElement)(i,{[n]:c})};function N(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function I(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}u((r=r.apply(e,n||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const L=()=>"undefined"==typeof window&&"undefined"!=typeof global,D=()=>{},$=()=>!L(),U=({action:e,calledOnce:n=!1,root:t=null,threshold:o=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(null),s=C(null!=e?e:D),u=C((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}));return C((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(u,{root:t,threshold:o,rootMargin:i}),e&&c.current.observe(e)}))},A=(...e)=>(0,r.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),F=(0,r.forwardRef)(((e,n)=>{const{action:t,calledOnce:r,threshold:i,root:c,rootMargin:s}=e,u=N(e,["action","calledOnce","threshold","root","rootMargin"]),a=U({action:t,calledOnce:r,threshold:i,root:c,rootMargin:s});return(0,o.jsx)("div",Object.assign({ref:A(n,a)},u,{children:e.children}))}));F.displayName="InView";const H=(0,r.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:u}=e,a=N(e,["src","style","threshold","root","rootMargin"]);const l=U({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:u}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,o.jsx)("img",Object.assign({},a,{ref:A(n,l),style:d}))}));H.displayName="LazyImage";const W=$()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const J=({children:e,condition:n,fallback:t=null})=>{const i="function"==typeof(c=n)?c():c;var c;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:t})},V=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:t}:{children:null!==(i=n[e])&&void 0!==i?i:t})},Y=()=>{const[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>I(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},Z=e=>!!$()&&window.matchMedia(e).matches,q=e=>{const[n,t]=(0,r.useState)(Z(e)),o=(0,r.useCallback)((()=>{t(Z(e))}),[e]);return(0,r.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)}),[e,o]),{isMatch:n}},B=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n.current},G=e=>{const[n,t]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=C(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:o,contentRect:n}},K=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=T(c,t),u=(0,r.useMemo)((()=>n?s:c),[c,n,s]);return W((()=>(c(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),o}}}]);