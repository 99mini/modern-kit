"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6606],{5427:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(1986),r=t(9937);const s={},a="min",l={id:"utils/math/min",title:"min",description:"\ubc30\uc5f4\uc5d0\uc11c \ucd5c\uc19f\uac12\uc744 \ucc3e\uc2b5\ub2c8\ub2e4.",source:"@site/docs/utils/math/min.md",sourceDirName:"utils/math",slug:"/utils/math/min",permalink:"/modern-kit/docs/utils/math/min",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"max",permalink:"/modern-kit/docs/utils/math/max"},next:{title:"range",permalink:"/modern-kit/docs/utils/math/range"}},c={},o=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Iteratee",id:"iteratee",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"min",children:"min"}),"\n",(0,i.jsxs)(n.p,{children:["\ubc30\uc5f4\uc5d0\uc11c ",(0,i.jsx)(n.code,{children:"\ucd5c\uc19f\uac12"}),"\uc744 \ucc3e\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,i.jsx)(n.code,{children:"\uc22b\uc790 \ubc30\uc5f4"}),"\uc5d0\uc11c \ucd5c\uc19f\uac12\uc744 \ucc3e\uc73c\uba70, \uadf8 \uc678 \ud0c0\uc785\uc758 \ubc30\uc5f4\uc740 \ub450 \ubc88\uc9f8 \uc778\uc790\uc778 ",(0,i.jsx)(n.code,{children:"iteratee"})," \ud568\uc218 \uacb0\uacfc\ub85c ",(0,i.jsx)(n.code,{children:"\ucd5c\uc19f\uac12"}),"\uc744 \ud310\ub2e8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/math/min/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"// \ud568\uc218 \uc624\ubc84\ub85c\ub529\nfunction min<T extends number>(arr: T[] | readonly T[]): T;\nfunction min<T>(\n  arr: T[] | readonly T[],\n  iteratee: (item: T) => number\n): T;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { min } from '@modern-kit/utils';\n\nconst arr = [5, 2, 9, 1, 5, 6];\nconst result1 = min(arr); // 1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"iteratee",children:"Iteratee"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { min } from '@modern-kit/utils';\n\nconst arr = [\n  { value: 5 },\n  { value: 2 },\n  { value: 9 },\n  { value: 1 },\n  { value: 5 },\n  { value: 6 },\n];\nconst result = min(arr, (item) => item.value); // { value: 1 }\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(7800);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);