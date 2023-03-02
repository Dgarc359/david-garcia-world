"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Docker",c={unversionedId:"General/CI-CD/Docker/docker",id:"General/CI-CD/Docker/docker",title:"Docker",description:"service docker start",source:"@site/docs/General/CI-CD/Docker/docker.md",sourceDirName:"General/CI-CD/Docker",slug:"/General/CI-CD/Docker/",permalink:"/book/index.html/docs/General/CI-CD/Docker/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/CI-CD/Docker/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Config files",permalink:"/book/index.html/docs/General/CI-CD/Configuration/config-file"},next:{title:"docker",permalink:"/book/index.html/docs/General/CI-CD/Docker/AWS/docker"}},l={},s=[{value:"Building an image",id:"building-an-image",level:2},{value:"Deleting images",id:"deleting-images",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("h1",{id:"starting-docker-on-amazon-ec2"},"starting docker on amazon ec2"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"service docker start")),(0,o.kt)("h2",{id:"building-an-image"},"Building an image"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/build/"},"https://docs.docker.com/engine/reference/commandline/build/"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker build -t <image-name> <dir-path>")),(0,o.kt)("h2",{id:"deleting-images"},"Deleting images"),(0,o.kt)("p",null,"prune:\n",(0,o.kt)("inlineCode",{parentName:"p"},"docker system prune [-a]"),"\n-a removes stopped containers and images"),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable docker\nsystemctl start docker\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo chmod 666 /var/run/docker.sock"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"https://docs.docker.com/engine/install/linux-postinstall/")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/38986057/how-to-set-image-name-in-dockerfile"},"https://stackoverflow.com/questions/38986057/how-to-set-image-name-in-dockerfile")))}p.isMDXComponent=!0}}]);