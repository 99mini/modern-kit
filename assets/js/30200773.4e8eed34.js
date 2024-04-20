"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6863],{5462:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>u,toc:()=>d});var i=n(5735),l=n(289);const t={},r="isNullish",u={id:"utils/validator/isNullish",title:"isNullish",description:"\uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 null \ub610\ub294 undefined\uc778\uc9c0 \uac80\uc0ac\ud558\uace0, \ub9de\ub2e4\uba74 \uc778\uc790 \ud0c0\uc785\uc774 undefined | null\ub85c \uc881\ud600\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/validator/isNullish.md",sourceDirName:"utils/validator",slug:"/utils/validator/isNullish",permalink:"/modern-kit/docs/utils/validator/isNullish",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isNotNullish",permalink:"/modern-kit/docs/utils/validator/isNotNullish"},next:{title:"isNumber",permalink:"/modern-kit/docs/utils/validator/isNumber"}},a={},d=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"isnullish",children:"isNullish"}),"\n",(0,i.jsxs)(s.p,{children:["\uc8fc\uc5b4\uc9c4 \uc778\uc790\uac00 ",(0,i.jsx)(s.code,{children:"null"})," \ub610\ub294 ",(0,i.jsx)(s.code,{children:"undefined"}),"\uc778\uc9c0 \uac80\uc0ac\ud558\uace0, \ub9de\ub2e4\uba74 \uc778\uc790 \ud0c0\uc785\uc774 ",(0,i.jsx)(s.code,{children:"undefined | null"}),"\ub85c \uc881\ud600\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-tsx",metastring:'title="typescript"',children:"const isNullish: <T>(val: T | null | undefined) => val is null | undefined\n"})}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"import { isNullish } from '@modern-kit/utils';\n\nisNullish(undefined); // true\nisNullish(null); // true\n\nisNullish(1); // false\nisNullish(false); // false\nisNullish(\"str\"); // false\nisNullish({}); // false\n"})})]})}function c(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},289:(e,s,n)=>{n.d(s,{Z:()=>u,a:()=>r});var i=n(4614);const l={},t=i.createContext(l);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);