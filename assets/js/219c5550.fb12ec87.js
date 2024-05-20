"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4291],{953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var s=n(1986),o=n(9937);const c={},l="objectValues",r={id:"utils/object/objectValues",title:"objectValues",description:"Object.values()\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/objectValues.md",sourceDirName:"utils/object",slug:"/utils/object/objectValues",permalink:"/modern-kit/docs/utils/object/objectValues",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"objectKeys",permalink:"/modern-kit/docs/utils/object/objectKeys"},next:{title:"omit",permalink:"/modern-kit/docs/utils/object/omit"}},i={},a=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"objectvalues",children:"objectValues"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Object.values()"}),"\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/object/objectValues/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst objectValues: <T extends Record<PropertyKey, T[keyof T]>>(\n  obj: T\n) => T[ObjectKeys<T>][];\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { objectValues } from '@modern-kit/utils';\n\nconst symbol = Symbol('d');\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [symbol]: 4,\n} as const;\n\n /**\n  * type: (1 | 2 | 3)[]\n  * value: [1, 2, 3]\n  */\nconst values = objectValues(obj);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values",children:"Object.values() - MDN"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var s=n(7800);const o={},c=s.createContext(o);function l(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);