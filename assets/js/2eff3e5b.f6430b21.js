"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4753],{8061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var o=n(1986),s=n(9937);const r={},a="useToggle",c={id:"react/hooks/useToggle",title:"useToggle",description:"boolean \ud0c0\uc785\uc758 state\ub97c Toggle\ub85c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useToggle.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useToggle",permalink:"/modern-kit/docs/react/hooks/useToggle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useTimeout",permalink:"/modern-kit/docs/react/hooks/useTimeout"},next:{title:"useUnMount",permalink:"/modern-kit/docs/react/hooks/useUnmount"}},l={},i=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"usetoggle",children:"useToggle"}),"\n",(0,o.jsx)(t.p,{children:"boolean \ud0c0\uc785\uc758 state\ub97c Toggle\ub85c \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5 \uc785\ub2c8\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useToggle/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"const useToggle: (defaultValue?: boolean) => readonly [boolean, () => void]\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useToggle } from '@modern-kit/react';\n\nconst Example = () => {\n  const [bool, toggle] = useToggle(false);\n\n  return (\n    <div>\n      {bool && <p>render</p>}\n      <button onClick={toggle}>Toggle Button</button>\n    </div>\n  );\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(7800);const s={},r=o.createContext(s);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);