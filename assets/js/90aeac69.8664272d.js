"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4017],{9588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var s=r(1986),n=r(9937);const a={},o="usePreservedState",c={id:"react/hooks/usePreservedState",title:"usePreservedState",description:"comparator\ub85c \ube44\uad50\ud588\uc744 \ub54c \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/usePreservedState.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/usePreservedState",permalink:"/modern-kit/docs/react/hooks/usePreservedState",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"usePreservedCallback",permalink:"/modern-kit/docs/react/hooks/usePreservedCallback"},next:{title:"usePrevious",permalink:"/modern-kit/docs/react/hooks/usePrevious"}},d={},i=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default Comparator",id:"default-comparator",level:3},{value:"Custom Comparator",id:"custom-comparator",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usepreservedstate",children:"usePreservedState"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"comparator"}),"\ub85c \ube44\uad50\ud588\uc744 \ub54c \uac12\uc774 \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:["comparator\ub97c \ub118\uae30\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,s.jsx)(t.code,{children:"@modern-kit/utils"}),"\uc758 ",(0,s.jsx)(t.code,{children:"deepEqual"})," \ud568\uc218\uac00 \ud65c\uc6a9\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://modern-agile-team.github.io/modern-kit/docs/utils/common/deepEqual",children:"deepEqual"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\ub9cc\uc57d, comparator\uc758 \ubc18\ud658 \uac12\uc774 ",(0,s.jsx)(t.code,{children:"true"}),"\uc5ec\uc11c \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\ub294\ub2e4\uba74 ",(0,s.jsx)(t.code,{children:"\ucc38\uc870\ub3c4 \uc720\uc9c0"}),"\ub429\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/usePreservedState/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"const usePreservedState: <T>(\n  value: T,\n  comparator?: ((source: T, target: T) => boolean) | undefined\n) => T;\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h3,{id:"default-comparator",children:"Default Comparator"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:'import React, { useEffect, useState } from "react";\nimport { usePreservedState } from "@modern-kit/react";\n\nconst Example = () => {\n  const preservedState = usePreservedState({ exampleId: 1 }); // \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \ub418\ub3c4 preservedState \ucc38\uc870\ub294 \uc720\uc9c0\ub429\ub2c8\ub2e4.\n\n  return  <>{/* ... */}</>;\n}\n'})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h3,{id:"custom-comparator",children:"Custom Comparator"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import React, { useEffect, useState } from 'react';\nimport { usePreservedState } from '@modern-kit/react';\n\nconst Example = () => {\n  const comparator = (\n    source: { exampleId: number },\n    target: { exampleId: number }\n  ) => source.exampleId === target.exampleId;\n\n  const preservedState = usePreservedState({ exampleId: 1 }, comparator);\n\n  return <>{/* ... */}</>;\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9937:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var s=r(7800);const n={},a=s.createContext(n);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);