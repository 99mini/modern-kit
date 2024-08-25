"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6599],{7415:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var t=r(1986),i=r(9937);const d={},s="difference",c={id:"utils/array/difference",title:"difference",description:"\uccab\ubc88\uc9f8 \ubc30\uc5f4\uc744 \uae30\uc900\uc73c\ub85c \ub450\ubc88\uc9f8 \ubc30\uc5f4\uacfc \uc911\ubcf5\ub41c \uc694\uc18c\ub97c \uc81c\uc678\ud574 \uace0\uc720\ud55c \uac12\ub9cc\uc744 \uac16\ub294 \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/array/difference.md",sourceDirName:"utils/array",slug:"/utils/array/difference",permalink:"/modern-kit/docs/utils/array/difference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"countOccurrencesInArray",permalink:"/modern-kit/docs/utils/array/countOccurrencesInArray"},next:{title:"excludeElements",permalink:"/modern-kit/docs/utils/array/excludeElements"}},l={},a=[{value:"Code",id:"code",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"Iteratee",id:"iteratee",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"difference",children:"difference"})}),"\n",(0,t.jsxs)(n.p,{children:["\uccab\ubc88\uc9f8 \ubc30\uc5f4\uc744 \uae30\uc900\uc73c\ub85c \ub450\ubc88\uc9f8 \ubc30\uc5f4\uacfc ",(0,t.jsx)(n.code,{children:"\uc911\ubcf5\ub41c \uc694\uc18c\ub97c \uc81c\uc678\ud574 \uace0\uc720\ud55c \uac12\ub9cc\uc744 \uac16\ub294"})," \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,t.jsx)(n.code,{children:"\uc6d0\uc2dc \uac12"}),"\uc5d0 \ub300\ud574\uc11c\ub9cc \uc911\ubcf5 \uc694\uc18c\ub97c \ud310\ub2e8\ud558\uba70, \ud544\uc694 \uc2dc 3\ubc88\uc9f8 \uc778\uc790\uc778 ",(0,t.jsx)(n.code,{children:"iteratee"})," \ud568\uc218 \uacb0\uacfc\ub85c \uc911\ubcf5 \uc694\uc18c\uc784\uc744 \ud310\ub2e8 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/array/difference/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,t.jsx)(n.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hz"}),": \ucd08\ub2f9 \uc791\uc5c5 \uc218"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mean"}),": \ud3c9\uade0 \uc751\ub2f5 \uc2dc\uac04(ms)"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uc774\ub984"}),(0,t.jsx)(n.th,{children:"hz"}),(0,t.jsx)(n.th,{children:"mean"}),(0,t.jsx)(n.th,{children:"\uc131\ub2a5"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"modern-kit/difference"}),(0,t.jsx)(n.td,{children:"2,768,995.87"}),(0,t.jsx)(n.td,{children:"0.0004"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fastest"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lodash/differenceBy"}),(0,t.jsx)(n.td,{children:"1,538,329.26"}),(0,t.jsx)(n.td,{children:"0.0007"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"slowest"})})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"modern-kit/difference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1.80x"})," faster than lodash/differenceBy"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"const difference: <T, U = T>(\n  firstArr: T[] | readonly T[],\n  secondArr: T[] | readonly T[],\n  iteratee?: ((item: T) => U) | undefined\n) => T[];\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { difference } from '@modern-kit/utils';\n\ndifference([1, 2, 3, 4], [1, 2, 3, 5]); // [4] \n"})}),"\n",(0,t.jsx)(n.h3,{id:"iteratee",children:"Iteratee"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { difference } from '@modern-kit/utils';\n\nconst firstArr = [\n  { id: 1, name: 'john' },\n  { id: 2, name: 'dylan' },\n];\nconst secondArr = [\n  { id: 1, name: 'john' },\n  { id: 3, name: 'gromit' },\n];\n\ndifference(firstArr, secondArr, (item) => item.id);\n/*\n  [\n    { id: 2, name: 'dylan' },\n  ]\n*/\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},9937:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var t=r(7800);const i={},d=t.createContext(i);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);