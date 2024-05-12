"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8828],{2645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=n(1986),s=n(7355);const c={},i="omit",r={id:"utils/object/omit",title:"omit",description:"\uc778\uc790\ub85c \ub123\uc740 keys\ub97c \uc0dd\ub7b5\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 \uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/omit.md",sourceDirName:"utils/object",slug:"/utils/object/omit",permalink:"/modern-kit/docs/utils/object/omit",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectValues",permalink:"/modern-kit/docs/utils/object/objectValues"},next:{title:"pick",permalink:"/modern-kit/docs/utils/object/pick"}},d={},l=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"omit",children:"omit"}),"\n",(0,o.jsxs)(t.p,{children:["\uc778\uc790\ub85c \ub123\uc740 ",(0,o.jsx)(t.code,{children:"keys"}),"\ub97c \uc0dd\ub7b5\ud55c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 ",(0,o.jsx)(t.code,{children:"\uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"symbol"}),"\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/object/omit/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst omit: <\n  T extends Record<PropertyKey, T[keyof T]>,\n  K extends ObjectKeys<T>\n>(\n  obj: T,\n  keys: K | K[]\n) => Omit<Record<ObjectKeys<T>, T[ObjectKeys<T>]>, K>;\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { omit } from '@modern-kit/utils';\n\nconst symbol = Symbol('d');\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3, [symbol]: 4 }, 'b'); // { a: 1, c: 3 }\nconst omittedObj1 = omit({ a: 1, b: 2, c: 3, d: 4, [symbol]: 4 }, ['a', 'd']); // { b: 2, c: 3 }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},7355:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7800);const s={},c=o.createContext(s);function i(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);