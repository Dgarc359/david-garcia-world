"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7656],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9346:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"General/OS/Windows/windows",id:"General/OS/Windows/windows",title:"windows",description:"https://superuser.com/questions/1559170/how-can-i-reduce-the-consumption-of-the-vmmem-process",source:"@site/docs/General/OS/Windows/windows.md",sourceDirName:"General/OS/Windows",slug:"/General/OS/Windows/",permalink:"/book/index.html/docs/General/OS/Windows/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/OS/Windows/windows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mac",permalink:"/book/index.html/docs/General/OS/Mac/"},next:{title:"licensing",permalink:"/book/index.html/docs/General/Open-Source/Licensing/"}},l={},c=[{value:"Computer is restarting unexpectedly",id:"computer-is-restarting-unexpectedly",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://superuser.com/questions/1559170/how-can-i-reduce-the-consumption-of-the-vmmem-process"},"https://superuser.com/questions/1559170/how-can-i-reduce-the-consumption-of-the-vmmem-process")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wsl --shutdown")),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"computer-is-restarting-unexpectedly"},"Computer is restarting unexpectedly"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.alphr.com/computer-randomly-restarting/"},"https://www.alphr.com/computer-randomly-restarting/")),(0,o.kt)("li",{parentName:"ul"},"Cross-referencing restart time with Event Viewer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"net stats workstation")," in Powershell, this will give last time that computer was booted up"),(0,o.kt)("li",{parentName:"ul"},"Use windows 'Event Viewer' to find events that happened just before the last time computer was booted up")))))}u.isMDXComponent=!0}}]);