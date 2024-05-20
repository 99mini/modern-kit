"use strict";(self.webpackChunk_modern_kit_docs=self.webpackChunk_modern_kit_docs||[]).push([[4925],{7055:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var t=i(1986),o=i(9937);const n={},l="clipboardImageCopy",c={id:"utils/clipboard/clipboardImageCopy",title:"clipboardImageCopy",description:"\uc778\uc790\ub85c \ub118\uaca8\uc900 \uc774\ubbf8\uc9c0 \uc18c\uc2a4\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0\ub97c \uc77d\uc5b4 Clipboard\uc5d0 \uc800\uc7a5\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.",source:"@site/docs/utils/clipboard/clipboardImageCopy.md",sourceDirName:"utils/clipboard",slug:"/utils/clipboard/clipboardImageCopy",permalink:"/modern-kit/docs/utils/clipboard/clipboardImageCopy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"clipboardFallbackTextCopy",permalink:"/modern-kit/docs/utils/clipboard/clipboardFallbackTextCopy"},next:{title:"clipboardTextCopy",permalink:"/modern-kit/docs/utils/clipboard/clipboardTextCopy"}},s={},d=[{value:"Code",id:"code",level:2},{value:"Interface",id:"interface",level:2},{value:"Usage",id:"usage",level:2},{value:"Default",id:"default",level:3},{value:"toText",id:"totext",level:3},{value:"Note",id:"note",level:2}];function a(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"clipboardimagecopy",children:"clipboardImageCopy"}),"\n",(0,t.jsxs)(r.p,{children:["\uc778\uc790\ub85c \ub118\uaca8\uc900 \uc774\ubbf8\uc9c0 \uc18c\uc2a4\ub97c \ud1b5\ud574 \uc774\ubbf8\uc9c0\ub97c \uc77d\uc5b4 ",(0,t.jsx)(r.code,{children:"Clipboard"}),"\uc5d0 \uc800\uc7a5\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"navigator.clipboard.write"}),"\ub294 \uc77c\ubd80 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(r.code,{children:"write"}),"\uac00 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 ",(0,t.jsx)(r.a,{href:"https://modern-agile-team.github.io/modern-kit/docs/utils/clipboard/clipboardTextCopy",children:"clipboardTextCopy"}),"\uac00 \ud638\ucd9c \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.p,{children:["Chrome \ud658\uacbd\uc5d0\uc11c Clipboard API\uc758 ",(0,t.jsx)(r.code,{children:"write()"}),"\ud568\uc218\ub294 ",(0,t.jsx)(r.code,{children:"text/plain"}),", ",(0,t.jsx)(r.code,{children:"text/html"}),", ",(0,t.jsx)(r.code,{children:"image/png"})," \ud3ec\ub9f7\ub9cc\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ub530\ub77c\uc11c, ",(0,t.jsx)(r.code,{children:"jp(e)g"}),", ",(0,t.jsx)(r.code,{children:"webp"}),"\uc640 \uac19\uc740 \uc774\ubbf8\uc9c0 \ud3ec\ub9f7\uc740 \uc77c\ubc18\uc801\uc73c\ub85c \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/clipboard/clipboard_writer.cc;l=304;drc=e882b8e4a8272f65cb14c608d3d2bc4f0512aa20",children:"Chromium - ClipboardWriter::IsValidType"})})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\ud83d\udca1 \ud558\uc9c0\ub9cc, ",(0,t.jsx)(r.code,{children:"clipboardImageCopy"}),"\uc740 \uc55e\uc11c \ub9d0\ud55c ",(0,t.jsx)(r.code,{children:"write()"}),"\ud568\uc218\uc5d0 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \ud3ec\ub9f7\ub4e4\uc744 ",(0,t.jsx)(r.code,{children:"png"}),"\ub85c \uc790\ub3d9 \ubcc0\ud658 \ud6c4\uc5d0 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.p,{children:["\ud83d\udca1 \uc774\ubbf8\uc9c0 \ud0c0\uc785\uc774 ",(0,t.jsx)(r.code,{children:"image/svg+xml"}),"\ucc98\ub7fc ",(0,t.jsx)(r.code,{children:"\uc18c\uc2a4 \ucf54\ub4dc"}),"\ub97c \ubcf5\uc0ac\ud574\uc11c \ud65c\uc6a9 \ud560 \uc218 \uc788\ub294 \ucf00\uc774\uc2a4\uc758 \uacbd\uc6b0 ",(0,t.jsx)(r.code,{children:"toText"})," \uc635\uc158\uc744 \uc635\uc154\ub110\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4. toText\uac00 ",(0,t.jsx)(r.code,{children:"true"}),"\uc77c \uacbd\uc6b0 ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://modern-agile-team.github.io/modern-kit/docs/utils/clipboard/clipboardTextCopy",children:"clipboardTextCopy"})})," \uac00 \ud638\ucd9c\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\uc544\ub798 \uc608\uc81c\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/modern-agile-team/modern-kit/blob/main/packages/utils/src/clipboard/clipboardImageCopy/index.ts",children:"\ud83d\udd17 \uc2e4\uc81c \uad6c\ud604 \ucf54\ub4dc \ud655\uc778"})}),"\n",(0,t.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="typescript"',children:"interface ClipboardImageCopyProps {\n  src: string;\n  toText?: boolean; // default: false\n}\nconst clipboardImageCopy: ({\n  src,\n  toText,\n}: ClipboardImageCopyProps) => Promise<string | Blob>;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(r.h3,{id:"default",children:"Default"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="typescript"',children:"import { clipboardImageCopy } from '@modern-kit/utils';\n\nconst result = await clipboardImageCopy({ \n  src: \"\ubcf5\uc0ac \ud560 \uc774\ubbf8\uc9c0 src(png, jp(e)g, webp)\", \n}); // result: Blob\n"})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(r.h3,{id:"totext",children:"toText"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",metastring:'title="React(typescript)"',children:'import { clipboardImageCopy } from \'@modern-kit/utils\';\nimport svg from "./assets/react.svg";\n\nconst result = await clipboardImageCopy({\n  src: svg,\n  toText: true,\n}); // result type: string\n\n/* Clipboard \ubcf5\uc0ac \uacb0\uacfc: text()\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">\n    <title>React Logo</title>\n    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>\n    <g stroke="#61dafb" stroke-width="1" fill="none">\n      <ellipse rx="11" ry="4.2"/>\n      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>\n      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>\n    </g>\n  </svg>\n*/\n'})}),"\n",(0,t.jsx)(r.h2,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard",children:"Clipboard API - MDN"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard#browser_compatibility",children:"Clipboard API Browser Compatibility - MDN"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://web.dev/patterns/clipboard/copy-images",children:"How to copy images(en) - web.dev"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://web.dev/patterns/clipboard/copy-images?hl=ko",children:"How to copy images(ko) - web.dev"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://web.dev/articles/async-clipboard",children:"Unblocking clipboard access (en) - web.dev"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://web.dev/articles/async-clipboard?hl=ko",children:"Unblocking clipboard access (ko) - web.dev"})}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},9937:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>l});var t=i(7800);const o={},n=t.createContext(o);function l(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);