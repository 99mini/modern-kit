"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8067],{843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(1986),o=n(7355),i=n(5474);const c={},s="InView",a={id:"react/components/InView",title:"InView",description:"Viewport\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/react/components/InView.mdx",sourceDirName:"react/components",slug:"/react/components/InView",permalink:"/modern-kit/docs/react/components/InView",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DebounceWrapper",permalink:"/modern-kit/docs/react/components/DebounceWrapper"},next:{title:"LazyImage",permalink:"/modern-kit/docs/react/components/LazyImage"}},l={},u=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"inview",children:"InView"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Viewport"}),"\uc5d0 \ub178\ucd9c\ub420 \ub54c props\ub85c \ub118\uaca8\uc8fc\ub294 ",(0,r.jsx)(t.code,{children:"action"})," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"type InViewProps = React.ComponentProps<'div'> & UseIntersectionObserverProps;\n\nconst InView: React.ForwardRefExoticComponent<\n  Omit<React.PropsWithChildren<InViewProps>, 'ref'> &\n    React.RefAttributes<HTMLDivElement>\n>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { InView } from '@modern-kit/react';\n\nconst Example = () => {\n  const onAction = () => {\n    /* action */\n  }\n\n  return (\n    <div>\n      {/* ... */}\n      <InView action={onAction} calledOnce>Box1</InView>\n    </div>\n  );\n}; \n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)("div",{style:{maxWidth:"500px",height:"500px",overflow:"scroll",background:"#f1f3f5"},children:[(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center",fontSize:"2rem"},children:"\uc2a4\ud06c\ub864 \ud574\uc8fc\uc138\uc694."}),(0,r.jsx)(i.df,{style:{width:"100%",height:"300px",background:"#c0392B",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(1)"),calledOnce:!0,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box1"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \ucd5c\ucd08 1\ud68c\ub9cc \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: true"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"100px"}}),(0,r.jsx)(i.df,{style:{width:"100%",height:"300px",background:"#89a5ea",color:"white",textAlign:"center",fontSize:"21px"},action:()=>console.log("action callback(2)"),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"Box2"}),(0,r.jsx)("p",{children:"\ube0c\ub77c\uc6b0\uc800 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694."}),(0,r.jsx)("p",{children:"action \ucf5c\ubc31 \ud568\uc218\uac00 \uc5ec\ub7ec \ubc88 \ud638\ucd9c\ub429\ub2c8\ub2e4."}),(0,r.jsx)("p",{children:"calledOnce: false"})]})}),(0,r.jsx)("div",{style:{width:"100%",height:"600px",textAlign:"center"}})]})]})}function f(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7355:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var r=n(7800);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}},5474:(e,t,n)=>{n.d(t,{D9:()=>q,Mm:()=>H,ac:()=>Z,df:()=>U,iP:()=>J,nA:()=>$,uM:()=>P,wY:()=>B,yU:()=>G});var r=n(7800),o=n(1986),i=(n(286),"object"==typeof global&&global&&global.Object===Object&&global),c="object"==typeof self&&self&&self.Object===Object&&self,s=i||c||Function("return this")(),a=s.Symbol,l=Object.prototype,u=l.hasOwnProperty,d=l.toString,f=a?a.toStringTag:void 0,p=Object.prototype.toString,h="[object Null]",v="[object Undefined]",x=a?a.toStringTag:void 0;var m="[object Symbol]",g=/\s/,b=/^\s+/;function w(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var y=NaN,j=/^[-+]0x[0-9a-f]+$/i,O=/^0b[01]+$/i,E=/^0o[0-7]+$/i,k=parseInt;function I(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?v:h:x&&x in Object(e)?function(e){var t=u.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=d.call(e);return r&&(t?e[f]=n:delete e[f]),o}(e):function(e){return p.call(e)}(e)}(e)==m}(e))return y;if(w(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=w(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&g.test(e.charAt(t)););return t}(e)+1).replace(b,""):e}(e);var n=O.test(e);return n||E.test(e)?k(e.slice(2),n?2:8):j.test(e)?y:+e}var M=function(){return s.Date.now()},S=Math.max,R=Math.min;const C=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),(0,r.useCallback)(((...e)=>t.current(...e)),[])},V=(e,t,n={})=>{const o=C(e),i=(0,r.useMemo)((()=>function(e,t,n){var r,o,i,c,s,a,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function h(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-l>=i}function v(){var e=M();if(h(e))return x(e);s=setTimeout(v,function(e){var n=t-(e-a);return d?R(n,i-(e-l)):n}(e))}function x(e){return s=void 0,f&&r?p(e):(r=o=void 0,c)}function m(){var e=M(),n=h(e);if(r=arguments,o=this,a=e,n){if(void 0===s)return function(e){return l=e,s=setTimeout(v,t),u?p(e):c}(a);if(d)return clearTimeout(s),s=setTimeout(v,t),p(a)}return void 0===s&&(s=setTimeout(v,t)),c}return t=I(t)||0,w(n)&&(u=!!n.leading,i=(d="maxWait"in n)?S(I(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),m.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=a=o=s=void 0},m.flush=function(){return void 0===s?c:x(M())},m}(o,t,n)),[o,t,n]);return(e=>{const t=C(e);(0,r.useEffect)((()=>()=>t()),[t])})((()=>i.cancel())),i},P=({children:e,capture:t,wait:n,options:o})=>{const i=r.Children.only(e),c=V(((...e)=>{const n=null==i?void 0:i.props;if(n)return"function"==typeof n[t]?n[t](...e):void 0}),n,o);return(0,r.cloneElement)(i,{[t]:c})};function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function z(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{a(r.next(e))}catch(e){i(e)}}function s(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,s)}a((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const L=()=>"undefined"==typeof window&&"undefined"!=typeof global,A=()=>{},N=()=>!L(),D=({action:e,calledOnce:t=!1,root:n=null,threshold:o=[0],rootMargin:i="0px 0px 0px 0px"})=>{const c=(0,r.useRef)(null),s=C(null!=e?e:A),a=C((([e],n)=>{if(e&&e.isIntersecting){const r=e.target;s&&s(e),t&&n.unobserve(r)}}));return C((e=>{c.current&&c.current.disconnect(),c.current=new IntersectionObserver(a,{root:n,threshold:o,rootMargin:i}),e&&c.current.observe(e)}))},W=(...e)=>(0,r.useCallback)((t=>{e.forEach((e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)}))}),[...e]),U=(0,r.forwardRef)(((e,t)=>{const{action:n,calledOnce:r,threshold:i,root:c,rootMargin:s}=e,a=T(e,["action","calledOnce","threshold","root","rootMargin"]),l=D({action:n,calledOnce:r,threshold:i,root:c,rootMargin:s});return(0,o.jsx)("div",Object.assign({ref:W(t,l)},a,{children:e.children}))}));U.displayName="InView";const B=(0,r.forwardRef)(((e,t)=>{var{src:n,style:i,threshold:c,root:s,rootMargin:a}=e,l=T(e,["src","style","threshold","root","rootMargin"]);const u=D({action:e=>{e.target.src=n},calledOnce:!0,threshold:c,root:s,rootMargin:a}),d=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},i)),[i]);return(0,o.jsx)("img",Object.assign({},l,{ref:W(t,u),style:d}))}));B.displayName="LazyImage";const F=N()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const $=({children:e,condition:t})=>{var n;return("function"==typeof(n=t)?n():n)?(0,o.jsx)(r.Fragment,{children:e}):null},H=()=>{const[e,t]=(0,r.useState)(!1),n=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>z(void 0,void 0,void 0,(function*(){n.current||(n.current=!0,t(!0),yield e(),n.current=!1,t(!1))}))}},Y=e=>!!N()&&window.matchMedia(e).matches,Z=e=>{const[t,n]=(0,r.useState)(Y(e)),o=(0,r.useCallback)((()=>{n(Y(e))}),[e]);return(0,r.useEffect)((()=>{const t=window.matchMedia(e);return t.addEventListener("change",o),()=>t.removeEventListener("change",o)}),[e,o]),{isMatch:t}},q=e=>{const t=(0,r.useRef)(e);return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},G=e=>{const[t,n]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),i=C(e),c=(0,r.useCallback)((([e])=>{e&&(i(e),n(e.contentRect))}),[i]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const t=new ResizeObserver(c);return t.observe(e),()=>{t.unobserve(e)}}),[c]),{ref:o,contentRect:t}},J=(e={})=>{const{isDebounce:t=!1,wait:n=300}=e,[o,i]=(0,r.useState)({width:null,height:null}),c=(0,r.useCallback)((()=>{i({width:window.innerWidth,height:window.innerHeight})}),[]),s=V(c,n),a=(0,r.useMemo)((()=>t?s:c),[c,t,s]);return F((()=>(c(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[]),o}}}]);