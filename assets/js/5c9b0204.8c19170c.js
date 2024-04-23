"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6331],{9815:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var c=t(5735),s=t(7355);const r={},o="pick",i={id:"utils/object/pick",title:"pick",description:"\uc778\uc790\ub85c \ub123\uc740 keys\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 \uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/pick.md",sourceDirName:"utils/object",slug:"/utils/object/pick",permalink:"/modern-kit/docs/utils/object/pick",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"omit",permalink:"/modern-kit/docs/utils/object/omit"},next:{title:"countSubstringOccurrences",permalink:"/modern-kit/docs/utils/string/countSubstringOccurrences"}},d={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"pick",children:"pick"}),"\n",(0,c.jsxs)(n.p,{children:["\uc778\uc790\ub85c \ub123\uc740 ",(0,c.jsx)(n.code,{children:"keys"}),"\ub85c \uad6c\uc131\ub41c \uac1d\uccb4\ub97c \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \ubc18\ud658\ub41c \uac1d\uccb4\ub294 ",(0,c.jsx)(n.code,{children:"\uae4a\uc740 \ubcf5\uc0ac\ub41c \uc0c8\ub85c\uc6b4 \uac1d\uccb4"}),"\uc785\ub2c8\ub2e4."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"symbol"}),"\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4."]}),"\n",(0,c.jsx)("br",{}),"\n",(0,c.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-tsx",children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst pick: <\n  T extends Record<PropertyKey, T[keyof T]>,\n  K extends ObjectKeys<T>\n>(\n  obj: T,\n  keys: K | K[]\n) => Pick<Record<ObjectKeys<T>, T[ObjectKeys<T>]>, K>;\n"})}),"\n",(0,c.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"import { pick } from '@modern-kit/utils';\n\nconst pickedObj1 = pick({ a: 1, b: 2, c: 3 }, 'b'); // { b: 2 }\nconst pickedObj2 = pick({ a: 1, b: 2, c: 3 }, ['a', 'c']); // { a: 1, c: 3 }\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},7355:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var c=t(4614);const s={},r=c.createContext(s);function o(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);