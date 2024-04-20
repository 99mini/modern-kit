"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5917],{1527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=n(5735),o=n(289);const c={},r="objectEntries",i={id:"utils/object/objectEntries",title:"objectEntries",description:"Object.entries()\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\uc9c0\ub9cc key\ud0c0\uc785\uc744 \uc9c0\ucf1c\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/objectEntries.md",sourceDirName:"utils/object",slug:"/utils/object/objectEntries",permalink:"/modern-kit/docs/utils/object/objectEntries",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mergeProperties",permalink:"/modern-kit/docs/utils/object/mergeProperties"},next:{title:"objectKeys",permalink:"/modern-kit/docs/utils/object/objectKeys"}},l={},a=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"objectentries",children:"objectEntries"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Object.entries()"}),"\uc640 \ub3d9\uc77c\ud558\uac8c \ub3d9\uc791\ud558\uc9c0\ub9cc ",(0,s.jsx)(t.code,{children:"key"}),"\ud0c0\uc785\uc744 \uc9c0\ucf1c\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"type ObjectKeys<T extends Record<PropertyKey, T[keyof T]>> = Exclude<\n  keyof T,\n  symbol\n>;\n\nconst objectEntries: <T extends Record<PropertyKey, T[keyof T]>>(\n  obj: T\n) => [ObjectKeys<T>, T[ObjectKeys<T>]][];\n"})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { objectEntries } from '@modern-kit/utils';\n\nconst symbol = Symbol('d');\nconst obj = {\n  a: 1,\n  b: 2,\n  c: 3,\n  [symbol]: 4,\n} as const;\n\n /**\n  * type: [\"a\" | \"b\" | \"c\", 1 | 2 | 3][]\n  * value: \n    [\n      ['a', 1],\n      ['b', 2],\n      ['c', 3],\n    ]\n  */\nconst entries = objectEntries(obj);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",children:"Object.entries()"})})]})}function j(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},289:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var s=n(4614);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);