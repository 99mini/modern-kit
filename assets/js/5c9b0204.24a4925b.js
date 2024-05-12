"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6331],{5638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var c=n(1986),s=n(7355);const i={},r="pick",o={id:"utils/object/pick",title:"pick",description:"\uc778\uc790\ub85c \ub123\uc740 keys\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 \uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/pick.md",sourceDirName:"utils/object",slug:"/utils/object/pick",permalink:"/modern-kit/docs/utils/object/pick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"omit",permalink:"/modern-kit/docs/utils/object/omit"},next:{title:"countSubstringOccurrences",permalink:"/modern-kit/docs/utils/string/countSubstringOccurrences"}},d={},l=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"pick",children:"pick"}),"\n",(0,c.jsxs)(t.p,{children:["\uc778\uc790\ub85c \ub123\uc740 ",(0,c.jsx)(t.code,{children:"keys"}),"\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 ",(0,c.jsx)(t.code,{children:"\uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"symbol"}),"\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/object/pick/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,c.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst pick: <\n  T extends Record<PropertyKey, T[keyof T]>,\n  K extends ObjectKeys<T>\n>(\n  obj: T,\n  keys: K | K[]\n) => Pick<Record<ObjectKeys<T>, T[ObjectKeys<T>]>, K>;\n"})}),"\n",(0,c.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { pick } from '@modern-kit/utils';\n\nconst pickedObj1 = pick({ a: 1, b: 2, c: 3 }, 'b'); // { b: 2 }\nconst pickedObj2 = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},7355:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var c=n(7800);const s={},i=c.createContext(s);function r(e){const t=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(i.Provider,{value:t},e.children)}}}]);