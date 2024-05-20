"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4580],{8520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(1986),s=t(9937);const o={},i="useIntersectionObserver",c={id:"react/hooks/useIntersectionObserver",title:"useIntersectionObserver",description:"ref\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uac00 Viewport\uc5d0 \ub178\ucd9c\ub418\ub294 \uc2dc\uc810\uc5d0 action \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4.",source:"@site/docs/react/hooks/useIntersectionObserver.mdx",sourceDirName:"react/hooks",slug:"/react/hooks/useIntersectionObserver",permalink:"/modern-kit/docs/react/hooks/useIntersectionObserver",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useImageStatus",permalink:"/modern-kit/docs/react/hooks/useImageStatus"},next:{title:"useInterval",permalink:"/modern-kit/docs/react/hooks/useInterval"}},a={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Note",id:"note",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"useintersectionobserver",children:"useIntersectionObserver"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ref"}),"\ub97c \ud560\ub2f9\ud55c \ud0c0\uac9f \uc5d8\ub9ac\uba3c\ud2b8\uac00 ",(0,r.jsx)(n.code,{children:"Viewport"}),"\uc5d0 \ub178\ucd9c\ub418\ub294 \uc2dc\uc810\uc5d0 ",(0,r.jsx)(n.code,{children:"action"})," \ucf5c\ubc31 \ud568\uc218\ub97c \ud638\ucd9c\uc2dc\ud0a4\ub294 \ucee4\uc2a4\ud140 \ud6c5\uc785\ub2c8\ub2e4."]}),"\n",(0,r.jsxs)(n.p,{children:["Intersection Observer Option\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.(\ud558\ub2e8 ",(0,r.jsx)(n.code,{children:"Note"})," \ucc38\uace0)"]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/react/src/hooks/useIntersectionObserver/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"interface UseIntersectionObserverProps extends IntersectionObserverInit {\n  action: (entry: IntersectionObserverEntry) => void;\n  calledOnce?: boolean;\n}\n\nconst useIntersectionObserver: <T extends HTMLElement>({\n  action,\n  calledOnce,\n  root,\n  threshold,\n  rootMargin,\n}: UseIntersectionObserverProps) => (node: T) => void;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="typescript"',children:'import { useIntersectionObserver } from \'@modern-kit/react\';\n\nconst Example = () => {\n  const divRef = useIntersectionObserver<HTMLDivElement>({\n    action: () => { /* action */},\n  });\n  const imgRef = useIntersectionObserver<HTMLImageElement>({\n    action: (entry) => { /* \ud544\uc694\ud558\ub2e4\uba74 IntersectionObserverEntry \ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. */},\n  });\n\n  return (\n    <div>\n      {/* ... */}\n      <div ref={divRef}>Box</div>\n      <img ref={imgRef} src="url" alt="img" />\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/API/IntersectionObserver",children:"Intersection Observer API"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(7800);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);