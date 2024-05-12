"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[410],{8299:(e,n,t)=>{t.r(n),t.d(n,{Input:()=>p,InputExample:()=>d,assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>f});var r=t(1986),o=t(7355),c=t(7800),a=t(5474);const i={},u="DebounceWrapper",s={id:"react/components/DebounceWrapper",title:"DebounceWrapper",description:"\uc790\uc2dd \uc694\uc18c\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8(ex: Click Event)\ub97c debounce\ud574\uc8fc\ub294 \uc720\ud2f8 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/docs/react/components/DebounceWrapper.mdx",sourceDirName:"react/components",slug:"/react/components/DebounceWrapper",permalink:"/modern-kit/docs/react/components/DebounceWrapper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduce",permalink:"/modern-kit/docs/introduce/"},next:{title:"InView",permalink:"/modern-kit/docs/react/components/InView"}},l={},p=({onChange:e})=>{const n={input:"input",...(0,o.a)()},[t,a]=(0,c.useState)("");return(0,r.jsx)(n.input,{type:"text",onChange:n=>{a(n.target.value),e(n.target.value)},value:t})},d=()=>{const e={p:"p",...(0,o.a)()},[n,t]=(0,c.useState)("");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.uM,{capture:"onChange",wait:500,children:(0,r.jsx)(p,{onChange:e=>{t(e)}})}),(0,r.jsxs)(e.p,{children:["Text: ",n]})]})},f=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Button Click Case",id:"button-click-case",level:3},{value:"Input Change Case",id:"input-change-case",level:3},{value:"Example",id:"example",level:2},{value:"Button Click Case",id:"button-click-case-1",level:3},{value:"Input Change Case",id:"input-change-case-1",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"debouncewrapper",children:"DebounceWrapper"}),"\n",(0,r.jsxs)(n.p,{children:["\uc790\uc2dd \uc694\uc18c\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \uc774\ubca4\ud2b8",(0,r.jsx)(n.code,{children:"(ex: Click Event)"}),"\ub97c debounce\ud574\uc8fc\ub294 \uc720\ud2f8 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/components/DebounceWrapper/index.tsx",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"type DebounceParameters = Parameters<typeof debounce>;\n\ninterface DebounceWrapperProps {\n  children: JSX.Element; // \ud558\ub098\uc758 \uc694\uc18c\ub9cc children prop\uc73c\ub85c \ub118\uaca8\uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n  capture: string;\n  wait: DebounceParameters[1]; // number\n  options?: DebounceParameters[2]; // DebounceSettings\n}\n\nconst DebounceWrapper: ({\n  children,\n  capture,\n  wait,\n  options,\n}: DebounceWrapperProps) => React.FunctionComponentElement<any>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.h3,{id:"button-click-case",children:"Button Click Case"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { DebounceWrapper } from '@modern-kit/react'\n\nconst Example = () => {\n  const onClick = () => {\n    console.log('debounce');\n  };\n  \n  return (\n    <DebounceWrapper capture=\"onClick\" wait={500}>\n      <button onClick={nClick}>Button</button>\n    </DebounceWrapper>\n  );\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"input-change-case",children:"Input Change Case"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"const Input = ({ onChange }: { onChange: (value: string) => void }) => {\n  const [value, setValue] = useState('');\n\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    setValue(e.target.value);\n    onChange(e.target.value);\n  };\n\n  return <input type=\"text\" onChange={handleChange} value={value} />;\n};\n\nconst Example = () => {\n  const [text, setText] = useState('');\n\n  const onChange = (value: string) => {\n    setText(value);\n  };\n\n  return (\n    <>\n      <DebounceWrapper capture={'onChange'} wait={500}>\n        <Input onChange={onChange} />\n      </DebounceWrapper>\n      <p>{text}</p>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"button-click-case-1",children:"Button Click Case"}),"\n",(0,r.jsx)("p",{style:{marginBottom:"4px"},children:"\ube0c\ub77c\uc6b0\uc800\uc758 \uac1c\ubc1c\uc790 \ub3c4\uad6c\uc758 \ucf58\uc194\uc5d0\uc11c \ub3d9\uc791\uc744 \ud655\uc778\ud558\uc138\uc694."}),"\n",(0,r.jsx)(a.uM,{capture:"onClick",wait:500,children:(0,r.jsx)("button",{onClick:()=>{console.log("debounce")},children:"Button"})}),"\n",(0,r.jsx)("br",{}),"\n","\n","\n",(0,r.jsx)(n.h3,{id:"input-change-case-1",children:"Input Change Case"}),"\n",(0,r.jsx)(d,{})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7355:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(7800);const o={},c=r.createContext(o);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(c.Provider,{value:n},e.children)}},5474:(e,n,t)=>{t.d(n,{D9:()=>Z,Hk:()=>A,Mm:()=>J,Nr:()=>W,ac:()=>Y,df:()=>V,iP:()=>G,nA:()=>$,uM:()=>P,wY:()=>U,yU:()=>q});var r=t(7800),o=t(1986),c=(t(286),"object"==typeof global&&global&&global.Object===Object&&global),a="object"==typeof self&&self&&self.Object===Object&&self,i=c||a||Function("return this")(),u=i.Symbol,s=Object.prototype,l=s.hasOwnProperty,p=s.toString,d=u?u.toStringTag:void 0,f=Object.prototype.toString,h="[object Null]",g="[object Undefined]",v=u?u.toStringTag:void 0;var b="[object Symbol]",m=/\s/,x=/^\s+/;function y(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}var j=NaN,C=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,k=/^0o[0-7]+$/i,E=parseInt;function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&function(e){return null==e?void 0===e?g:h:v&&v in Object(e)?function(e){var n=l.call(e,d),t=e[d];try{e[d]=void 0;var r=!0}catch(e){}var o=p.call(e);return r&&(n?e[d]=t:delete e[d]),o}(e):function(e){return f.call(e)}(e)}(e)==b}(e))return j;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=function(e){return e?e.slice(0,function(e){for(var n=e.length;n--&&m.test(e.charAt(n)););return n}(e)+1).replace(x,""):e}(e);var t=w.test(e);return t||k.test(e)?E(e.slice(2),t?2:8):C.test(e)?j:+e}var M=function(){return i.Date.now()},D=Math.max,S=Math.min;const I=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),(0,r.useCallback)(((...e)=>n.current(...e)),[])},W=(e,n,t={})=>{const o=I(e),c=(0,r.useMemo)((()=>function(e,n,t){var r,o,c,a,i,u,s=0,l=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(n){var t=r,c=o;return r=o=void 0,s=n,a=e.apply(c,t)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||p&&e-s>=c}function g(){var e=M();if(h(e))return v(e);i=setTimeout(g,function(e){var t=n-(e-u);return p?S(t,c-(e-s)):t}(e))}function v(e){return i=void 0,d&&r?f(e):(r=o=void 0,a)}function b(){var e=M(),t=h(e);if(r=arguments,o=this,u=e,t){if(void 0===i)return function(e){return s=e,i=setTimeout(g,n),l?f(e):a}(u);if(p)return clearTimeout(i),i=setTimeout(g,n),f(u)}return void 0===i&&(i=setTimeout(g,n)),a}return n=O(n)||0,y(t)&&(l=!!t.leading,c=(p="maxWait"in t)?D(O(t.maxWait)||0,n):c,d="trailing"in t?!!t.trailing:d),b.cancel=function(){void 0!==i&&clearTimeout(i),s=0,r=u=o=i=void 0},b.flush=function(){return void 0===i?a:v(M())},b}(o,n,t)),[o,n,t]);return(e=>{const n=I(e);(0,r.useEffect)((()=>()=>n()),[n])})((()=>c.cancel())),c},P=({children:e,capture:n,wait:t,options:o})=>{const c=r.Children.only(e),a=W(((...e)=>{const t=null==c?void 0:c.props;if(t)return"function"==typeof t[n]?t[n](...e):void 0}),t,o);return(0,r.cloneElement)(c,{[n]:a})};function T(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function R(e,n,t,r){return new(t||(t=Promise))((function(o,c){function a(e){try{u(r.next(e))}catch(e){c(e)}}function i(e){try{u(r.throw(e))}catch(e){c(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}u((r=r.apply(e,n||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError,"function"==typeof SuppressedError&&SuppressedError;const N=()=>"undefined"==typeof window&&"undefined"!=typeof global,L=()=>{},B=()=>!N(),F=({action:e,calledOnce:n=!1,root:t=null,threshold:o=[0],rootMargin:c="0px 0px 0px 0px"})=>{const a=(0,r.useRef)(null),i=I(null!=e?e:L),u=I((([e],t)=>{if(e&&e.isIntersecting){const r=e.target;i(e),n&&t.unobserve(r)}}));return I((e=>{a.current&&a.current.disconnect(),a.current=new IntersectionObserver(u,{root:t,threshold:o,rootMargin:c}),e&&a.current.observe(e)}))},z=(...e)=>(0,r.useCallback)((n=>{e.forEach((e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)}))}),[...e]),V=(0,r.forwardRef)(((e,n)=>{const{action:t,calledOnce:r,threshold:c,root:a,rootMargin:i}=e,u=T(e,["action","calledOnce","threshold","root","rootMargin"]),s=F({action:t,calledOnce:r,threshold:c,root:a,rootMargin:i});return(0,o.jsx)("div",Object.assign({ref:z(n,s)},u,{children:e.children}))}));V.displayName="InView";const U=(0,r.forwardRef)(((e,n)=>{var{src:t,style:c,threshold:a,root:i,rootMargin:u}=e,s=T(e,["src","style","threshold","root","rootMargin"]);const l=F({action:e=>{e.target.src=t},calledOnce:!0,threshold:a,root:i,rootMargin:u}),p=(0,r.useMemo)((()=>Object.assign({display:"inline-block"},c)),[c]);return(0,o.jsx)("img",Object.assign({},s,{ref:z(n,l),style:p}))}));U.displayName="LazyImage";const H=B()?r.useLayoutEffect:r.useEffect;(0,r.createContext)({parentPortalElement:null});const $=({children:e,condition:n,fallback:t=null})=>{const c="function"==typeof(a=n)?a():a;var a;return(0,o.jsx)(r.Fragment,c?{children:e}:{children:t})},A=({condition:e,cases:n,defaultCaseComponent:t=null})=>{var c;return(0,o.jsx)(r.Fragment,null==e?{children:t}:{children:null!==(c=n[e])&&void 0!==c?c:t})},J=()=>{const[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(!1);return{isLoading:e,blockMultipleClick:e=>R(void 0,void 0,void 0,(function*(){t.current||(t.current=!0,n(!0),yield e(),t.current=!1,n(!1))}))}},X=e=>!!B()&&window.matchMedia(e).matches,Y=e=>{const[n,t]=(0,r.useState)(X(e)),o=(0,r.useCallback)((()=>{t(X(e))}),[e]);return(0,r.useEffect)((()=>{const n=window.matchMedia(e);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)}),[e,o]),{isMatch:n}},Z=e=>{const n=(0,r.useRef)(e);return(0,r.useEffect)((()=>{n.current=e}),[e]),n.current},q=e=>{const[n,t]=(0,r.useState)({bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0}),o=(0,r.useRef)(null),c=I(e),a=(0,r.useCallback)((([e])=>{e&&(c(e),t(e.contentRect))}),[c]);return(0,r.useEffect)((()=>{const e=o.current;if("undefined"==typeof ResizeObserver)return;if(!e)return;const n=new ResizeObserver(a);return n.observe(e),()=>{n.unobserve(e)}}),[a]),{ref:o,contentRect:n}},G=(e={})=>{const{isDebounce:n=!1,wait:t=300}=e,[o,c]=(0,r.useState)({width:null,height:null}),a=(0,r.useCallback)((()=>{c({width:window.innerWidth,height:window.innerHeight})}),[]),i=W(a,t),u=(0,r.useMemo)((()=>n?i:a),[a,n,i]);return H((()=>(a(),window.addEventListener("resize",u),()=>{window.removeEventListener("resize",u)})),[]),o}}}]);