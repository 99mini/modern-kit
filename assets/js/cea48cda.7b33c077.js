"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6908],{2497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(1986),s=n(9937);const l={},a="flatten",d={id:"utils/array/flatten",title:"flatten",description:"\uc911\ucca9 \ubc30\uc5f4\uc744 \uc9c0\uc815\ub41c \uae4a\uc774\uae4c\uc9c0 \ud3c9\ud0c4\ud654 \ud569\ub2c8\ub2e4.",source:"@site/docs/utils/array/flatten.md",sourceDirName:"utils/array",slug:"/utils/array/flatten",permalink:"/modern-kit/docs/utils/array/flatten",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flatMap",permalink:"/modern-kit/docs/utils/array/flatMap"},next:{title:"flattenDeep",permalink:"/modern-kit/docs/utils/array/flattenDeep"}},i={},c=[{value:"Code",id:"code",level:2},{value:"Benchmark",id:"benchmark",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"flatten",children:"flatten"})}),"\n",(0,r.jsxs)(t.p,{children:["\uc911\ucca9 \ubc30\uc5f4\uc744 \uc9c0\uc815\ub41c \uae4a\uc774\uae4c\uc9c0 ",(0,r.jsx)(t.code,{children:"\ud3c9\ud0c4\ud654"})," \ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["JavaScript\uc5d0\uc11c \uae30\ubcf8\uc801\uc73c\ub85c \uc81c\uacf5\ud558\ub294 ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat",children:"Array.prototype.flat"})})," \uc740 \uc131\ub2a5\uc774 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:["\uc81c\uacf5\ud558\ub294 flatten \ud568\uc218\ub294 ",(0,r.jsx)(t.code,{children:"JavaScrip\uc758 Array.prototype.flat"}),"\uacfc ",(0,r.jsx)(t.code,{children:"lodash\uc758 flattenDepth"}),"\ubcf4\ub2e4 \uc131\ub2a5\uc801\uc73c\ub85c \ub354 \uc6b0\uc218\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/array/flatten/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"benchmark",children:"Benchmark"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hz"}),": \ucd08\ub2f9 \uc791\uc5c5 \uc218"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mean"}),": \ud3c9\uade0 \uc751\ub2f5 \uc2dc\uac04(ms)"]}),"\n"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"\uc774\ub984"}),(0,r.jsx)(t.th,{children:"hz"}),(0,r.jsx)(t.th,{children:"mean"}),(0,r.jsx)(t.th,{children:"\uc131\ub2a5"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"modern-kit/flatten"}),(0,r.jsx)(t.td,{children:"2,303,725.15"}),(0,r.jsx)(t.td,{children:"0.0004"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fastest"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"lodash/flattenDepth"}),(0,r.jsx)(t.td,{children:"1,546,277.36"}),(0,r.jsx)(t.td,{children:"0.0006"}),(0,r.jsx)(t.td,{children:"-"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"js built-in/flat"}),(0,r.jsx)(t.td,{children:"346,378.13"}),(0,r.jsx)(t.td,{children:"0.0029"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"slowest"})})]})]})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"modern-kit/flatten"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"1.49x"})," faster than lodash/flattenDepth"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"6.65x"})," faster than js built-in/flat"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:'type FlatArray<Arr, Depth extends number> = {\n    "done": Arr,\n    "recur": Arr extends ReadonlyArray<infer InnerArr>\n        ? FlatArray<InnerArr, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20][Depth]>\n        : Arr\n}[Depth extends -1 ? "done" : "recur"];\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"function flatten<T, D extends number = 1>(\n  arr: T[] | readonly T[],\n  depth?: D // default: 1\n): FlatArray<T[], D>[];\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { flatten } from '@modern-kit/utils';\n\nconst arr = [1, [2, [3, [4, [5]]]]];\n\nflatten(arr); // [1, 2, [3, [4, [5]]]]\nflatten(arr, 1); // [1, 2, [3, [4, [5]]]]\nflatten(arr, 2); // [1, 2, 3, [4, [5]]]\nflatten(arr, 3); // [1, 2, 3, 4, [5]]\nflatten(arr, 4); // [1, 2, 3, 4, 5]\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var r=n(7800);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);