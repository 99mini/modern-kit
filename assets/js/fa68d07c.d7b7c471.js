"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8254],{1722:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=e(1986),s=e(7355);const i={},o="formatNumberByUnits",a={id:"utils/formatter/formatNumberByUnits",title:"formatNumberByUnits",description:"\uc778\uc790\ub85c \ubc1b\uc740 \uc22b\uc790\ub97c \ub2e8\uc704 \ubcc4\ub85c \uad6c\ubd84\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/formatter/formatNumberByUnits.md",sourceDirName:"utils/formatter",slug:"/utils/formatter/formatNumberByUnits",permalink:"/modern-kit/docs/utils/formatter/formatNumberByUnits",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/modern-kit/docs/utils/device/isSever"},next:{title:"formatNumberCurrency",permalink:"/modern-kit/docs/utils/formatter/formatNumberCurrency"}},u={},m=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function c(n){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"formatnumberbyunits",children:"formatNumberByUnits"}),"\n",(0,r.jsxs)(t.p,{children:["\uc778\uc790\ub85c \ubc1b\uc740 \uc22b\uc790\ub97c ",(0,r.jsx)(t.code,{children:"\ub2e8\uc704 \ubcc4\ub85c \uad6c\ubd84"}),"\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/formatter/formatNumberByUnits/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"interface Unit {\n  unit: string;\n  value: number;\n}\n\ntype FloorUnit =\n  | 1\n  | 10\n  | 100\n  | 1000\n  | 10000\n  | 100000\n  | 1000000\n  | 10000000\n  | 100000000;\n\ninterface FormatNumberByUnitsOption {\n  units?: Unit[]; // default: []\n  withCommas?: boolean; // default: false,\n  floorUnit?: FloorUnit; // default: 1,\n  insertSpace?: boolean; // default: false,\n}\n\nconst formatNumberByUnits: (\n  value: number,\n  options?: FormatNumberByUnitsOption\n) => string;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"import { formatNumberByUnits } from '@modern-kit/utils';\n\nconst ONE_HUNDRED_MILLION = 100000000;\nconst TEN_THOUSAND = 10000;\n\nconst units = [\n  { unit: '\uc5b5', value: ONE_HUNDRED_MILLION },\n  { unit: '\ub9cc', value: TEN_THOUSAND },\n];\n\nconst value1 = formatNumberByUnits(450000000, {\n  units: units,\n}); // '4\uc5b55000\ub9cc'\n\n// withCommas\uc635\uc158\uc73c\ub85c \ucc9c \ub2e8\uc704\ub9c8\ub2e4 \ucf64\ub9c8\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value2 = formatNumberByUnits(450000000, {\n  withCommas: true,\n  units: units,\n}); // '4\uc5b55,000\ub9cc'\n\n// insertSpace\uc635\uc158\uc73c\ub85c \ub2e8\uc704 \ub9c8\ub2e4 \ub744\uc5b4\uc4f0\uae30\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value3 = formatNumberByUnits(450000000, {\n  units: units,\n  withCommas: true,\n  insertSpace: true,\n}); // '4\uc5b5 5,000\ub9cc'\n\n// floorUnit \uc635\uc158\uc73c\ub85c \ud574\ub2f9 \ub2e8\uc704 \ubbf8\ub9cc\uc758 \uac12\ub4e4\uc744 \ubc84\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nconst value4 = formatNumberByUnits(459325300, {\n  units: units,\n  withCommas: false,\n  floorUnit: 10000000,\n}); // '4\uc5b55000\ub9cc'\n"})})]})}function l(n={}){const{wrapper:t}={...(0,s.a)(),...n.components};return t?(0,r.jsx)(t,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},7355:(n,t,e)=>{e.d(t,{Z:()=>a,a:()=>o});var r=e(7800);const s={},i=r.createContext(s);function o(n){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),r.createElement(i.Provider,{value:t},n.children)}}}]);