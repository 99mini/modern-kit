"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[8852],{8021:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=s(1986),r=s(9937);const a={},c="usePreservedCallback",l={id:"react/hooks/usePreservedCallback",title:"usePreservedCallback",description:"\uc8fc\uc5b4\uc9c4 \ucf5c\ubc31 \ud568\uc218\ub97c \ubcf4\uc874\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/usePreservedCallback.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePreservedCallback",permalink:"/modern-kit/docs/react/hooks/usePreservedCallback",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreferredColorScheme",permalink:"/modern-kit/docs/react/hooks/usePreferredColorScheme"},next:{title:"usePreservedState",permalink:"/modern-kit/docs/react/hooks/usePreservedState"}},o={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"as-is",id:"as-is",level:3},{value:"to-be (usePreservedCallback)",id:"to-be-usepreservedcallback",level:3}];function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"usepreservedcallback",children:"usePreservedCallback"})}),"\n",(0,n.jsx)(t.p,{children:"\uc8fc\uc5b4\uc9c4 \ucf5c\ubc31 \ud568\uc218\ub97c \ubcf4\uc874\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\ub9c1 \uc0ac\uc774\uc5d0 \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsx)(t.p,{children:"\uc774 \ud6c5\uc740 \ud2b9\ud788 \ucf5c\ubc31 \ud568\uc218\uac00 \ub80c\ub354\ub9c1 \uc911\uc5d0 \ubcc0\uacbd\ub420 \ub54c \uc720\uc6a9\ud569\ub2c8\ub2e4. \ubd88\ud544\uc694\ud55c \ud568\uc218 \uc0dd\uc131\uc744 \ubc29\uc9c0\ud558\uace0 \ucd5c\uc801\ud654\ud558\uba70, \ucd5c\uc2e0 \ubc84\uc804\uc758 \ucf5c\ubc31 \ud568\uc218\ub97c \uc0ac\uc6a9 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/usePreservedCallback/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"const usePreservedCallback: <T extends (...args: any[]) => any>(\n  callback: T\n) => (...args: any[]) => any;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"as-is",children:"as-is"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:'import React, { useEffect, useState } from "react";\n\nconst Example = () => {\n  const [state, setState] = useState(0);\n\n  const callback = () => {\n    setState(state + 1);\n  };\n\n  useEffect(() => {\n    callback(); // \ubb34\ud55c \ud638\ucd9c\n  }, [callback]);\n\n  return (\n    <>{/* ... */}</>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h3,{id:"to-be-usepreservedcallback",children:"to-be (usePreservedCallback)"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { useEffect, useState } from \"react\";\nimport { usePreservedCallback } from '@modern-kit/react';\n\nconst Example = () => {\n  const [state, setState] = useState(0);\n\n  const callback = usePreservedCallback(() => {\n    setState(state + 1);\n  });\n\n  useEffect(() => {\n    callback(); // 1\ud68c\ub9cc \ud638\ucd9c\n  }, [callback]);\n\n  return (\n    <>{/* ... */}</>\n  );\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}},9937:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>c});var n=s(7800);const r={},a=n.createContext(r);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);