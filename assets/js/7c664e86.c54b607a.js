"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[1986],{7320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(1986),i=n(9937);const s={},o="rem",c={id:"utils/style/rem",title:"rem",description:"Root \uc694\uc18c(html)\uc758 fontSize\ub97c \uae30\ubc18\uc73c\ub85c pixel \uac12\uc744 rem \ud615\ud0dc\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/style/rem.md",sourceDirName:"utils/style",slug:"/utils/style/rem",permalink:"/modern-kit/docs/utils/style/rem",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"repeatCharacters",permalink:"/modern-kit/docs/utils/string/repeatCharacters"},next:{title:"hasProperty",permalink:"/modern-kit/docs/utils/validator/hasProperty"}},d={},l=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"rem",children:"rem"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Root \uc694\uc18c(html)"}),"\uc758 ",(0,r.jsx)(t.code,{children:"fontSize"}),"\ub97c \uae30\ubc18\uc73c\ub85c ",(0,r.jsx)(t.code,{children:"pixel"})," \uac12\uc744 ",(0,r.jsx)(t.code,{children:"rem"})," \ud615\ud0dc\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \uc720\ud2f8 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"suffix"}),"\uc635\uc158\uc744 \ud1b5\ud574\uc11c \uacc4\uc0b0\ud55c rem \uac12\uc5d0 \uc811\ubbf8\uc0ac\ub85c ",(0,r.jsx)(t.code,{children:'"rem"'}),"\uc744 \ubd99\uc5ec\uc11c \ubc18\ud658\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"toFixedDigits"})," \uc635\uc158\uc744 \ud1b5\ud574\uc11c ",(0,r.jsx)(t.code,{children:"\uace0\uc815 \uc18c\uc218\uc810 \ud45c\uae30\ubc95(fixed-point notation)"}),"\uc73c\ub85c \ud45c\uc2dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8, \ubd88 \ud544\uc694\ud55c \uc18c\uc218\uc810\uc744 \ubc84\ub9ac\uae30 \uc704\ud574 ",(0,r.jsx)(t.code,{children:"\ud55c\ubc88 \ub354 \uc22b\uc790\ub85c \ubcc0\ud658 \ud6c4 \ubc18\ud658"}),"\ud569\ub2c8\ub2e4."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"// as-is\n(1.0625).toFixed(10); // '1.0625000000'\n\n// to-be\nrem(17, { toFixedDigits: 10 }); // 1.0625\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c \ud574\ub2f9 \ud568\uc218\ub85c \ud55c\ubc88 \ud638\ucd9c \ub41c \uac12\uc740 \ubc18\ubcf5 \uacc4\uc0b0\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 ",(0,r.jsx)(t.code,{children:"\uce90\uc2f1 \ucc98\ub9ac"})," \ub429\ub2c8\ub2e4. \ud83d\udca1 \ub2e8, \uc8fc\uc758 \ud560 \uc810\uc73c\ub85c \ub7f0\ud0c0\uc784 \uc911\uc5d0 js\ub85c Root \uc694\uc18c(html)\uc758 fontSize\ub97c \ubcc0\uacbd\ud55c\ub2e4\uba74 \uc758\ub3c4\ub300\ub85c \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/style/rem/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"interface RemOptions {\n  suffix?: boolean; // default: false\n  toFixedDigits?: number;\n}\n\nconst rem: (pixel: number, options?: RemOptions) => string | number;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:'import { rem } from \'@modern-kit/utils\';\n\n// Root FontSize: 16px;\nrem(16); // 1;\nrem(24); // 1.5;\nrem(32); // 2;\n\n// Suffix\nrem(16, { suffix: true }); // "1rem";\nrem(24, { suffix: true }); // "1.5rem";\nrem(32, { suffix: true }); // "2rem";\n\n// ToFixedDigits\nrem(17); // 1.0625\nrem(17, { toFixedDigits: 2 }); // 1.06\nrem(17, { toFixedDigits: 3 }); // 1.063\nrem(17, { toFixedDigits: 4 }); // 1.0625\nrem(17, { toFixedDigits: 10 }); // 1.0625\n'})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},9937:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(7800);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);