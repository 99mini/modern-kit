"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{4475:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=t(1986),s=t(7355);const r={},i="delay",a={id:"utils/common/delay",title:"delay",description:"\uc8fc\uc5b4\uc9c4 \uc2dc\uac04\ub9cc\ud07c \uae30\ub2e4\ub9b0 \ub4a4 \ub2e4\uc74c \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/common/delay.md",sourceDirName:"utils/common",slug:"/utils/common/delay",permalink:"/modern-kit/docs/utils/common/delay",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"deepEqual",permalink:"/modern-kit/docs/utils/common/deepEqual"},next:{title:"getUniqId",permalink:"/modern-kit/docs/utils/common/getUniqId"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"delay",children:"delay"}),"\n",(0,o.jsx)(n.p,{children:"\uc8fc\uc5b4\uc9c4 \uc2dc\uac04\ub9cc\ud07c \uae30\ub2e4\ub9b0 \ub4a4 \ub2e4\uc74c \ub3d9\uc791\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,o.jsx)(n.p,{children:"setTimeout\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud2b9\uc815 \uc2dc\uac04 \ub4a4\uc758 \ub3d9\uc791\uc744 \uc815\uc758\ud560 \uacbd\uc6b0, \ud574\ub2f9 \uc2dc\uac04 \ub4a4 \ub3d9\uc791\ud574\uc57c\ud558\ub294 \ud568\uc218 \ub2e4\uc74c\uc5d0 Promise\uac00 \uc874\uc7ac\ud55c\ub2e4\uba74 setTimeout\uc740 macroTaskQueue\uc5d0 \uc18d\ud558\uace0 Promise\ub294 microTaskQueue\uc5d0 \uc18d\ud558\uac8c \ub418\uc5b4 \uc758\ub3c4\ud55c \ubc14\uc640 \uac19\uc774 \uc21c\uc11c\ub300\ub85c\uc758 \ub3d9\uc791\uc744 \ubcf4\uc7a5\ud558\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. delay \ud568\uc218\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 \uc774\ub7ec\ud55c \ubb38\uc81c\ub97c \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"const delay: (time: number) => Promise<void>\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { delay } from '@modern-kit/utils';\n\nconst something = () => Promise.resolve()\n\nconst doSomethingAfterDelay = async () => {\n  await delay(1000)\n  await something()\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7355:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7800);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);