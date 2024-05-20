"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[5497],{2781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(1986),s=t(9937);const o={},c="useMergeRefs",i={id:"react/hooks/useMergeRefs",title:"useMergeRefs",description:"\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uc5ec\ub7ec \uac1c\uc758 ref\ub97c \ud558\ub098\ub85c \ubcd1\ud569\ud560 \ub54c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useMergeRefs.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useMergeRefs",permalink:"/modern-kit/docs/react/hooks/useMergeRefs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMediaQuery",permalink:"/modern-kit/docs/react/hooks/useMediaQuery"},next:{title:"useOnClickOutside",permalink:"/modern-kit/docs/react/hooks/useOnClickOutside"}},a={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"usemergerefs",children:"useMergeRefs"}),"\n",(0,r.jsxs)(n.p,{children:["\uc778\uc790\ub85c \uc8fc\uc5b4\uc9c4 \uc5ec\ub7ec \uac1c\uc758 ",(0,r.jsx)(n.code,{children:"ref"}),"\ub97c \ud558\ub098\ub85c \ubcd1\ud569\ud560 \ub54c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useMergeRefs/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"const useMergeRefs: <T = any>(\n  ...refs: (React.MutableRefObject<T> | React.LegacyRef<T>)[]\n) => (instance: T | null) => void;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { forwardRef, useRef } from 'react';\nimport { useMergeRefs } from '@modern-kit/react';\n\ninterface Props {\n  /* ... */\n}\n\nconst Example = forwardRef<HTMLDivElement, Props>((props, ref) => {\n  const childRef = useRef<HTMLDivElement | null>(null);\n\n  return <div ref={useMergeRefs(childRef, ref)}>{/* ... */}</div>;\n});\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>c});var r=t(7800);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);