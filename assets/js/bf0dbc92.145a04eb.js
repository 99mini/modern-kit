"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8067],{4824:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=t(1986),o=t(7355),i=t(5474);const c={},s="InView",l={id:"react/components/InView",title:"InView",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/modern-kit/docs/react/components/InView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DebounceWrapper",permalink:"/modern-kit/docs/react/components/DebounceWrapper"},next:{title:"LazyImage",permalink:"/modern-kit/docs/react/components/LazyImage"}},a={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"inview",children:"InView"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Viewport"}),"\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 ",(0,r.jsx)(n.code,{children:"action"})," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { InView } from '@modern-kit/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"},children:"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."}),(0,r.jsx)(i.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box1"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \ucd5c\ucd08 1\ud68c\ub9cc \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: true"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"100px"}}),(0,r.jsx)(i.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box2"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \uc5ec\ub7ec \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: false"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})]})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7355:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>c});var r=t(7800);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},5474:(e,n,t)=>{t.d(n,{D9:()=>G,Hk:()=>$,Mm:()=>Y,Nr:()=>V,ac:()=>q,df:()=>F,iP:()=>K,nA:()=>H,uM:()=>P,wY:()=>U,yU:()=>J});var r=t(7800),o=t(1986),i=(t(286),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),l=s.Symbol,a=Object.prototype,u=a.hasOwnProperty,d=a.toString,f=l?l.toStringTag:void 0,p=Object.prototype.toString,h="[object Null]",v="[object Undefined]",m=l?l.toStringTag:void 0;var x="[object Symbol]",g=/\s/,b=/^\s+/;function w(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var y=NaN,j=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,E=/^0o[0-7]+$/i,k=parseInt;function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:h:m&&m in Object(e)?function(e){var n=u.call(e,f),t=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(n?e[f]=t:delete e[f]),o}(e):function(e){return p.call(e)}(e)}(e)==x}(e))return y;if(w(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=w(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&g.test(e.charAt(n)););return n}(e)+1).replace(b,""):e}(e);var t=O.test(e);return t||E.test(e)?k(e.slice(2),t?2:8):j.test(e)?y:+e}var M=function(){return s.Date.now()},S=Math.max,C=Math.min;const R=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),(0,r.useCallback)(((...e)=>n.current(...e)),[])},V=(e,n,t={})=>{const o=R(e),i=(0,r.useMemo)((()=>function(e,n,t){var r,o,i,c,s,l,a=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(n){var t=r,i=o;return r=o=void 0,a=n,c=e.apply(i,t)}function h(e){var t=e-l;return void 0===l||t>=n||t<0||d&&e-a>=i}function v(){var e=M();if(h(e))return m(e);s=setTimeout(v,function(e){var t=n-(e-l);return d?C(t,i-(e-a)):t}(e))}function m(e){return s=void 0,f&&r?p(e):(r=o=void 0,c)}function x(){var e=M(),t=h(e);if(r=arguments,o=this,l=e,t){if(void 0===s)return function(e){return a=e,s=setTimeout(v,n),u?p(e):c}(l);if(d)return clearTimeout(s),s=setTimeout(v,n),p(l)}return void 0===s&&(s=setTimeout(v,n)),c}return n=I(n)||0,w(t)&&(u=!!t.leading,i=(d="maxWait"in t)?S(I(t.maxWait)||0,n):i,f="trailing"in t?!!t.trailing:f),x.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=l=o=s=void 0},x.flush=function(){return void 0===s?c:m(M())},x}(o,n,t)),[o,n,t]);return(e=>{const n=R(e);(0,r.useEffect)((()=>()=>n()),[n])})((()=>i.cancel())),i},P=({children:e,capture:n,wait:t,options:o})=>{const i=r.Children.only(e),c=V(((...e)=>{const t=null==i?void 0:i.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,o);return(0,r.cloneElement)(i,{[n]:c})};function T(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function z(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,s)}l((r=r.apply(e,n||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const L=()=>"undefined"==typeof window&&"undefined"!=typeof global,A=()=>{},N=()=>!L(),D=({action:e,calledOnce:n=!1,root:t=null,threshold:o=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(null),s=R(null!=e?e:A),l=R((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),n&&t.unobserve(r)}}));return R((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(l,{root:t,threshold:o,rootMargin:i}),e&&c.current.observe(e)}))},W=(...e)=>(0,r.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),F=(0,r.forwardRef)(((e,n)=>{const{action:t,calledOnce:r,threshold:i,root:c,rootMargin:s}=e,l=T(e,["action","calledOnce","threshold","root","rootMargin"]),a=D({action:t,calledOnce:r,threshold:i,root:c,rootMargin:s});return(0,o.jsx)("div",Object.assign({ref:W(n,a)},l,{children:e.children}))}));F.displayName="InView";const U=(0,r.forwardRef)(((e,n)=>{var{src:t,style:i,threshold:c,root:s,rootMargin:l}=e,a=T(e,["src","style","threshold","root","rootMargin"]);const u=D({action:e=>{e.target.src=t},calledOnce:!0,threshold:c,root:s,rootMargin:l}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,o.jsx)("img",Object.assign({},a,{ref:W(n,u),style:d}))}));U.displayName="LazyImage";const B=N()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const H=({children:e,condition:n,fallback:t=null})=>{const i="function"==typeof(c=n)?c():c;var c;return(0,o.jsx)(r.Fragment,i?{children:e}:{children:t})},$=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var i;return(0,o.jsx)(r.Fragment,null==e?{children:t}:{children:null!==(i=n[e])&&void 0!==i?i:t})},Y=()=>{const[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>z(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},Z=e=>!!N()&&window.matchMedia(e).matches,q=e=>{const[n,t]=(0,r.useState)(Z(e)),o=(0,r.useCallback)((()=>{t(Z(e))}),[e]);return(0,r.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)}),[e,o]),{isMatch:n}},G=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n.current},J=e=>{const[n,t]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=R(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),t(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(c);return n.observe(e),()=>{n.unobserve(e)}}),[c]),{ref:o,contentRect:n}},K=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=V(c,t),l=(0,r.useMemo)((()=>n?s:c),[c,n,s]);return B((()=>(c(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)})),[]),o}}}]);