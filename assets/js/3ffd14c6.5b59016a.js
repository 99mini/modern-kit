"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[2014],{111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(1986),s=t(9937);const o={},i="useOnClickOutside",c={id:"react/hooks/useOnClickOutside",title:"useOnClickOutside",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8 \uc678\ubd80 \uc694\uc18c\ub97c \ud074\ub9ad \ud560 \uacbd\uc6b0 \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useOnClickOutside.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useOnClickOutside",permalink:"/modern-kit/docs/react/hooks/useOnClickOutside",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useNetwork",permalink:"/modern-kit/docs/react/hooks/useNetwork"},next:{title:"usePreferredColorScheme",permalink:"/modern-kit/docs/react/hooks/usePreferredColorScheme"}},d={},a=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"useonclickoutside",children:"useOnClickOutside"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"}),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8 \uc678\ubd80 \uc694\uc18c\ub97c \ud074\ub9ad \ud560 \uacbd\uc6b0 \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\ud558\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useOnClickOutside/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"const useOnClickOutside: <T extends HTMLElement>(\n  action: (targetElement: T) => void\n) => {\n  ref: React.RefObject<T>;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useMemo } from 'react';\nimport { useOnClickOutside } from '@modern-kit/react';\n\nconst Example = () => {\n  const { ref } = useOnClickOutside<HTMLDivElement>(() => {\n    window.alert('outside click')\n  });\n  \n  const boxStyle = useMemo(() => {\n    return {\n      width: '400px',\n      height: '400px',\n      background: '#439966',\n      fontSize: '1.5rem',\n      color: '#fff',\n    };\n  }, []);\n\n  return (\n    <div ref={ref} style={boxStyle}>\n      Target Box\n    </div>\n  );\n};\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(7800);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);