"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[3899],{1183:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=r(1986),i=r(9937);const o={},s="isValidPhoneNumberFormat",a={id:"utils/validator/isValidPhoneNumberFormat",title:"isValidPhoneNumberFormat",description:"\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 -(hyphen)\uc744 \ud3ec\ud568\ud55c \uc804\ud654\ubc88\ud638 \ud615\uc2dd\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/validator/isValidPhoneNumberFormat.md",sourceDirName:"utils/validator",slug:"/utils/validator/isValidPhoneNumberFormat",permalink:"/modern-kit/docs/utils/validator/isValidPhoneNumberFormat",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isValidPassword",permalink:"/modern-kit/docs/utils/validator/isValidPassword"},next:{title:"isWindow",permalink:"/modern-kit/docs/utils/validator/isWindow"}},l={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"isvalidphonenumberformat",children:"isValidPhoneNumberFormat"}),"\n",(0,t.jsxs)(n.p,{children:["\uc8fc\uc5b4\uc9c4 \ubb38\uc790\uc5f4\uc774 ",(0,t.jsx)(n.code,{children:"-(hyphen)"}),"\uc744 \ud3ec\ud568\ud55c \uc804\ud654\ubc88\ud638 \ud615\uc2dd\uc778\uc9c0 \ud655\uc778\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XX-YYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XX-YYYY-ZZZZ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"XXXX-YYYY"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\uc2e4\uc81c \uc804\ud654\ubc88\ud638 \uccb4\uacc4\uc5d0 \ub9de\ub294\uc9c0 \uc5c4\uaca9\ud558\uac8c \ud655\uc778\ud558\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/validator/isValidPhoneNumberFormat/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"const isValidPhoneNumberFormat: (value: string) => boolean\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { isValidPhoneNumberFormat, formatPhoneNumber } from '@modern-kit/utils';\n\nconst isPhoneNumberFormat1 = isValidPhoneNumberFormat('010-1234-1234'); // true\nconst isPhoneNumberFormat2 = isValidPhoneNumberFormat('031-123-1234'); // true\nconst isPhoneNumberFormat3 = isValidPhoneNumberFormat('02-123-1234'); // true\nconst isPhoneNumberFormat4 = isValidPhoneNumberFormat('02-1234-1234'); // true\n\nconst isPhoneNumberFormat5 = isValidPhoneNumberFormat('0-1234-1234'); // false\nconst isPhoneNumberFormat6 = isValidPhoneNumberFormat('010-12455-1234'); // false\n\nconst isPhoneNumberFormat7 = isValidPhoneNumberFormat(formatPhoneNumber('01012341234')); // true\nconst isPhoneNumberFormat8 = isValidPhoneNumberFormat(formatPhoneNumber('021231234')); // true\nconst isPhoneNumberFormat9 = isValidPhoneNumberFormat(formatPhoneNumber('010-1234-1234')); // true\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9937:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>s});var t=r(7800);const i={},o=t.createContext(i);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);