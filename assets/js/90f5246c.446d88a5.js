"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[2386],{3863:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(1986),o=n(9937);const s={},i="deleteEmptyProperties",d={id:"utils/object/deleteEmptyProperties",title:"deleteEmptyProperties",description:"\uac1d\uccb4\uc758 \uc911\ucca9 \uac1d\uccb4/\ubc30\uc5f4\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ud504\ub85c\ud37c\ud2f0\ub97c \uc21c\ud68c\ud558\uba74\uc11c \uac12\uc774 \uc544\ub798 \ub098\uc5f4\ud55c \ube48 \uac12\ub4e4 \uc911 \ud558\ub098\ub77c\uba74, \ud574\ub2f9 \ud504\ub85c\ud37c\ud2f0\ub4e4\uc744 \uc81c\uac70\ud55c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ubc18\ud658\ud574\uc8fc\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/object/deleteEmptyProperties.md",sourceDirName:"utils/object",slug:"/utils/object/deleteEmptyProperties",permalink:"/modern-kit/docs/utils/object/deleteEmptyProperties",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sum",permalink:"/modern-kit/docs/utils/math/sum"},next:{title:"groupBy",permalink:"/modern-kit/docs/utils/object/groupBy"}},p={},c=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"deleteemptyproperties",children:"deleteEmptyProperties"})}),"\n",(0,r.jsx)(t.p,{children:"\uac1d\uccb4\uc758 \uc911\ucca9 \uac1d\uccb4/\ubc30\uc5f4\uc744 \ud3ec\ud568\ud55c \ubaa8\ub4e0 \ud504\ub85c\ud37c\ud2f0\ub97c \uc21c\ud68c\ud558\uba74\uc11c \uac12\uc774 \uc544\ub798 \ub098\uc5f4\ud55c \ube48 \uac12\ub4e4 \uc911 \ud558\ub098\ub77c\uba74, \ud574\ub2f9 \ud504\ub85c\ud37c\ud2f0\ub4e4\uc744 \uc81c\uac70\ud55c \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub97c \ubc18\ud658\ud574\uc8fc\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,r.jsxs)(t.p,{children:["\uc81c\uac70 \ud56d\ubaa9: ",(0,r.jsx)(t.code,{children:'\ube48 \ubb38\uc790\uc5f4("")'}),", ",(0,r.jsx)(t.code,{children:"\ube48 \ubc30\uc5f4([])"}),", ",(0,r.jsx)(t.code,{children:"\ube48 \uac1d\uccb4({})"}),", ",(0,r.jsx)(t.code,{children:"null"}),", ",(0,r.jsx)(t.code,{children:"undefined"})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/object/deleteFalsyProperties/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"const deleteFalsyProperties: <T extends Record<PropertyKey, any>>(source: T) => T\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { deleteEmptyProperties } from '@modern-kit/utils';\n\nconst obj = deleteEmptyProperties({\n  prop1: 1,\n  prop2: 0,\n  prop3: '',\n  prop4: '1',\n  prop5: true,\n  prop6: false,\n  prop7: null,\n  prop8: undefined,\n  prop9: [],\n  prop10: {},\n});\n\n/**\n * obj = {\n    prop1: 1,\n    prop2: 0,\n    prop4: '1',\n    prop5: true,\n    prop6: false,\n  };\n */\n"})})]})}function a(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var r=n(7800);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);