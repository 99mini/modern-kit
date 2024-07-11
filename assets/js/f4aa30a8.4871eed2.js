"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[5964],{8040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(1986),i=t(9937);const s={},c="isReference",a={id:"utils/validator/isReference",title:"isReference",description:"\ucc38\uc870 \ud0c0\uc785\uc740 \uac1d\uccb4, \ubc30\uc5f4, \ud568\uc218 \ub4f1 \ube44\uc6d0\uc2dc \ud0c0\uc785\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 \ucc38\uc870 \ud0c0\uc785\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/validator/isReference.md",sourceDirName:"utils/validator",slug:"/utils/validator/isReference",permalink:"/modern-kit/docs/utils/validator/isReference",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isPromise",permalink:"/modern-kit/docs/utils/validator/isPromise"},next:{title:"isString",permalink:"/modern-kit/docs/utils/validator/isString"}},o={},l=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"isreference",children:"isReference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"\ucc38\uc870 \ud0c0\uc785"}),"\uc740 \uac1d\uccb4, \ubc30\uc5f4, \ud568\uc218 \ub4f1 ",(0,r.jsx)(n.code,{children:"\ube44\uc6d0\uc2dc \ud0c0\uc785"}),"\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 ",(0,r.jsx)(n.code,{children:"\ucc38\uc870 \ud0c0\uc785"}),"\uc778\uc9c0 \uc5ec\ubd80\ub97c \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/validator/isReference/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"export type Reference =\n  | object\n  | any[]\n  | Function\n  | Set<any>\n  | Map<any, any>\n  | WeakMap<object, any>\n  | WeakSet<object>\n  | Date\n  | RegExp\n  | Error;\n\nconst isReference: (value: unknown) => value is Reference\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { isReference } from '@modern-kit/utils';\n\nisReference({}); // true\nisReference([]); // true\nisReference(new Set()); // true\nisReference(new Map()); // true\nisReference(new WeakSet()); // true\nisReference(new WeakMap()); // true\nisReference(new Date()); // true\nisReference(new Error()); // true\n\nisReference(null); // false\nisReference(undefined); // false\nisReference('string'); // false\nisReference(1); // false\nisReference(false); // false\nisReference(Symbol()); // false\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var r=t(7800);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);