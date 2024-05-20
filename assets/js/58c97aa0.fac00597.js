"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[3993],{7278:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(1986),i=r(9937);const s={},o="formatNumberCurrency",c={id:"utils/formatter/formatNumberCurrency",title:"formatNumberCurrency",description:"\uc778\uc790\ub85c \ubc1b\uc740 \uc22b\uc790\ub97c \ub2e8\uc704 \ubcc4\ub85c \uad6c\ubd84\ud558\uace0 \ud1b5\ud654 \ub2e8\uc704\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/utils/formatter/formatNumberCurrency.md",sourceDirName:"utils/formatter",slug:"/utils/formatter/formatNumberCurrency",permalink:"/modern-kit/docs/utils/formatter/formatNumberCurrency",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"formatNumberByUnits",permalink:"/modern-kit/docs/utils/formatter/formatNumberByUnits"},next:{title:"formatNumberWithCommas",permalink:"/modern-kit/docs/utils/formatter/formatNumberWithCommas"}},u={},a=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Basic",id:"basic",level:3},{value:"\u2b50\ufe0fAbstraction",id:"\ufe0fabstraction",level:3}];function m(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"formatnumbercurrency",children:"formatNumberCurrency"}),"\n",(0,t.jsxs)(e.p,{children:["\uc778\uc790\ub85c \ubc1b\uc740 \uc22b\uc790\ub97c ",(0,t.jsx)(e.code,{children:"\ub2e8\uc704 \ubcc4\ub85c \uad6c\ubd84"}),"\ud558\uace0 ",(0,t.jsx)(e.code,{children:"\ud1b5\ud654 \ub2e8\uc704"}),"\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/formatter/formatNumberCurrency/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,t.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="typescript"',children:"interface CurrencyOption {\n  currency: string;\n  currencyPosition: 'prefix' | 'suffix';\n}\n\n/*\n  units?: Unit[]; // default: []\n  floorUnit?: FloorUnit; // default: 1,\n  withCommas?: boolean; // default: false,\n  insertSpace?: boolean; // default: false,\n  currency?: string; // default: ''\n  currencyPosition?: 'prefix' | 'suffix'; // default: 'suffix'\n*/\ntype FormatNumberCurrencyOptions = FormatNumberByUnitsOption &\n  Partial<CurrencyOption>;\n\nconst formatNumberCurrency: (\n  value: number,\n  options?: FormatNumberCurrencyOptions\n) => string;\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(e.h3,{id:"basic",children:"Basic"}),"\n",(0,t.jsx)(e.p,{children:"\uae30\ubcf8\uc801\uc778 \uc0ac\uc6a9\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="typescript"',children:"import { formatNumberCurrency } from '@modern-kit/utils';\n\nconst ONE_HUNDRED_MILLION = 100000000;\nconst TEN_THOUSAND = 10000;\n\nconst units = [\n  { unit: '\uc5b5', value: ONE_HUNDRED_MILLION },\n  { unit: '\ub9cc', value: TEN_THOUSAND },\n];\n\nconst value1 = formatNumberCurrency(450000000, {\n  units: units,\n  currency: '\uc6d0',\n  currencyPosition: 'suffix',\n}); // '4\uc5b55000\ub9cc\uc6d0'\n\nconst value2 = formatNumberCurrency(4500, {\n  currency: '$',\n  currencyPosition: 'prefix',\n}); // '$4500'\n\n// withCommas \uc635\uc158\uc73c\ub85c \ucc9c \ub2e8\uc704\ub9c8\ub2e4 \ucf64\ub9c8\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value2 = formatNumberCurrency(450000000, {\n  units: units,\n  withCommas: true,\n  currency: '\uc6d0',\n  currencyPosition: 'suffix',\n}); // '4\uc5b55,000\ub9cc\uc6d0'\n\n// insertSpace \uc635\uc158\uc73c\ub85c \ub2e8\uc704 \ub9c8\ub2e4 \ub744\uc5b4\uc4f0\uae30\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value3 = formatNumberCurrency(450000000, {\n  units: units,\n  withCommas: true,\n  currency: '\uc6d0',\n  currencyPosition: 'suffix',\n  insertSpace: true,\n}); // '4\uc5b5 5,000\ub9cc\uc6d0'\n\n// floorUnit \uc635\uc158\uc73c\ub85c \ud574\ub2f9 \ub2e8\uc704 \ubbf8\ub9cc\uc758 \uac12\ub4e4\uc744 \ubc84\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value4 = formatNumberCurrency(459325300, {\n  units: units,\n  currency: '\uc6d0',\n  currencyPosition: 'suffix',\n  floorUnit: 10000000,\n}); // '4\uc5b55000\ub9cc\uc6d0'\n"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(e.h3,{id:"\ufe0fabstraction",children:"\u2b50\ufe0fAbstraction"}),"\n",(0,t.jsxs)(e.p,{children:["\uc544\ub798\uc640 \uac19\uc774 \ud544\uc694\uc5d0 \ub9de\uac8c ",(0,t.jsx)(e.code,{children:"\ucd94\uc0c1\ud654"}),"\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",metastring:'title="typescript"',children:"const ONE_HUNDRED_MILLION = 100000000;\nconst TEN_THOUSAND = 10000;\n\nconst units = [\n  { unit: '\uc5b5', value: ONE_HUNDRED_MILLION },\n  { unit: '\ub9cc', value: TEN_THOUSAND },\n];\n\nconst formatToKRW = (value: number) => {\n  return formatNumberCurrency(value, {\n    units: units,\n    currency: '\uc6d0',\n    currencyPosition: 'suffix',\n  });\n}\n\nconst value1 = formatToKRW(42000000); // 4200\ub9cc\uc6d0\nconst value2 = formatToKRW(425000000); // 4\uc5b52500\ub9cc\uc6d0\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(m,{...n})}):m(n)}},9937:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>o});var t=r(7800);const i={},s=t.createContext(i);function o(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);