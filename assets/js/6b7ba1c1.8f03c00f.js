"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4583],{2520:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=o(5735),t=o(7355);const s={},a="hexToRgba",i={id:"utils/common/hexToRgba",title:"hexToRgba",description:"16\uc9c4\uc218 \uc0c9\uc0c1 \ucf54\ub4dc(Hex)\ub97c RGB\ud615\uc2dd\uc73c\ub85c \ubcc0\uacbd\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. (HEX -> RGB)",source:"@site/docs/utils/common/hexToRgba.md",sourceDirName:"utils/common",slug:"/utils/common/hexToRgba",permalink:"/modern-kit/docs/utils/common/hexToRgba",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getViewportSize",permalink:"/modern-kit/docs/utils/common/getViewportSize"},next:{title:"noop",permalink:"/modern-kit/docs/utils/common/noop"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hextorgba",children:"hexToRgba"}),"\n",(0,r.jsxs)(n.p,{children:["16\uc9c4\uc218 \uc0c9\uc0c1 \ucf54\ub4dc(Hex)\ub97c RGB\ud615\uc2dd\uc73c\ub85c \ubcc0\uacbd\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. ",(0,r.jsx)(n.code,{children:"(HEX -> RGB)"})]}),"\n",(0,r.jsxs)(n.p,{children:["\uc720\ud6a8\ud55c Hex \ucf54\ub4dc\uac00 \uc544\ub2c8\ub77c\uba74 ",(0,r.jsx)(n.code,{children:"null"}),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const hexToRgba: (hex: string, alpha?: number) => {\n  readonly r: number;\n  readonly g: number;\n  readonly b: number;\n  readonly a: number;\n  readonly stringifiedValue: `rgba(${number},${number},${number},${number})`;\n} | null\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { hexToRgba } from '@modern-kit/utils';\n\nconst hex1 = '#1A2B3C';\nconst rgbColor1 = hexToRgba(hex1); \n// { r: 26, g: 43, b: 60, a: 1, stringifiedValue: 'rgba(26,43,60,1)' }\n\nconst hex2 = '#1A2';\nconst rgbColor2 = hexToRgba(hex2, 0.2); \n// { r: 17, g: 170, b: 34, a: 0.2, stringifiedValue: 'rgba(17,170,34,0.2)' }\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7355:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>a});var r=o(4614);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);