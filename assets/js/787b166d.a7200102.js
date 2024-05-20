"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[6661],{5128:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(1986),o=t(9937);const r={},a="convertImageToBase64",i={id:"utils/file/convertImageToBase64",title:"convertImageToBase64",description:"\uc774\ubbf8\uc9c0\ub97c canvas\ub97c \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 \uc774\ubbf8\uc9c0 \ud3ec\ub9f7(png, jpeg, webp)\uc758 Base64 \ud615\ud0dc\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/file/convertImageToBase64.md",sourceDirName:"utils/file",slug:"/utils/file/convertImageToBase64",permalink:"/modern-kit/docs/utils/file/convertImageToBase64",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"isServer",permalink:"/modern-kit/docs/utils/device/isSever"},next:{title:"convertImageToBlob",permalink:"/modern-kit/docs/utils/file/convertImageToBlob"}},c={},l=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usages",id:"usages",level:2},{value:"Note",id:"note",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"convertimagetobase64",children:"convertImageToBase64"}),"\n",(0,s.jsxs)(n.p,{children:["\uc774\ubbf8\uc9c0\ub97c ",(0,s.jsx)(n.code,{children:"canvas"}),"\ub97c \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 \uc774\ubbf8\uc9c0 \ud3ec\ub9f7(",(0,s.jsx)(n.code,{children:"png"}),", ",(0,s.jsx)(n.code,{children:"jpeg"}),", ",(0,s.jsx)(n.code,{children:"webp"}),")\uc758 ",(0,s.jsx)(n.code,{children:"Base64"})," \ud615\ud0dc\ub85c \ubcc0\ud658\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,s.jsx)(n.code,{children:"canvas.toDataURL()"}),"\ud568\uc218\uac00 \ud5c8\uc6a9\ud558\ub294 \uc774\ubbf8\uc9c0 \ud0c0\uc785\uc740 ",(0,s.jsx)(n.code,{children:"image/png"}),", ",(0,s.jsx)(n.code,{children:"image/jpeg"}),", ",(0,s.jsx)(n.code,{children:"image/webp"})," \uc785\ub2c8\ub2e4. ",(0,s.jsx)(n.code,{children:"jpg"}),"\uc758 \uacbd\uc6b0 \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,s.jsx)(n.code,{children:"jpeg"}),"\ub85c \ubcc0\uacbd\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL",children:"HTMLCanvasElement: toDataURL() - MDN"})})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Browsers are required to support ",(0,s.jsx)(n.code,{children:"image/png"}),"; many will support additional formats including ",(0,s.jsx)(n.code,{children:"image/jpeg"})," and ",(0,s.jsx)(n.code,{children:"image/webp"}),"."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/file/convertImageToBase64/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"type CanvasImageType = 'png' | 'jpeg' | 'jpg' | 'webp';\n\nconst convertImageToBase64: (\n  url: string,\n  imageType?: CanvasImageType // default: 'png'\n) => Promise<string>;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usages",children:"Usages"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="typescript"',children:"import { convertImageToBase64 } from '@modern-kit/utils';\n\nconst imageBase64 = await convertImageToBase64(\"\uc774\ubbf8\uc9c0 src\", 'png');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"note",children:"Note"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL",children:"HTMLCanvasElement: toDataURL() - MDN"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9937:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7800);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);