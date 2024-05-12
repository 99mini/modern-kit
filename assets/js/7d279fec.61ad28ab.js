"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7647],{685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(1986),r=n(7355);const s={},c="useForceUpdate",a={id:"react/hooks/useForceUpdate",title:"useForceUpdate",description:"\ubc18\ud658\ub41c \ud568\uc218\ub97c \uc2e4\ud589\ud558\uba74 \uac15\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub9ac\ub80c\ub354\ub9c1 \uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useForceUpdate.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useForceUpdate",permalink:"/modern-kit/docs/react/hooks/useForceUpdate",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useFileReader",permalink:"/modern-kit/docs/react/hooks/useFileReader"},next:{title:"useImageStatus",permalink:"/modern-kit/docs/react/hooks/useImageStatus"}},i={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"useforceupdate",children:"useForceUpdate"}),"\n",(0,o.jsxs)(t.p,{children:["\ubc18\ud658\ub41c \ud568\uc218\ub97c \uc2e4\ud589\ud558\uba74 \uac15\uc81c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 ",(0,o.jsx)(t.code,{children:"\ub9ac\ub80c\ub354\ub9c1"})," \uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useForceUpdate/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="typescript"',children:"// type DispatchWithoutAction = () => void;\nconst useForceUpdate: () => React.DispatchWithoutAction\n"})}),"\n",(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="typescript"',children:"import { useForceUpdate } from '@modern-kit/react';\n\nconst Example = () => {\n  const forceUpdate = useForceUpdate();\n\n  const handleForceUpdate = useCallback(() => {\n    forceUpdate();\n  }, [forceUpdate]);\n\n  return (\n    <div>\n      <button onClick={handleForceUpdate}>Button</button>;\n    </div>\n  );\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/streamich/react-use/pull/837",children:"https://github.com/streamich/react-use/pull/837"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},7355:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(7800);const r={},s=o.createContext(r);function c(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);