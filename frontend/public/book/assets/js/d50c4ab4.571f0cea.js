"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),h=a,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,p(p({ref:t},s),{},{components:r})):n.createElement(d,p({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},p=void 0,l={unversionedId:"General/Random/Graphs/graphql/graphql",id:"General/Random/Graphs/graphql/graphql",title:"graphql",description:"---",source:"@site/docs/General/Random/Graphs/graphql/graphql.md",sourceDirName:"General/Random/Graphs/graphql",slug:"/General/Random/Graphs/graphql/",permalink:"/book/index.html/docs/General/Random/Graphs/graphql/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/Random/Graphs/graphql/graphql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"graph",permalink:"/book/index.html/docs/General/Random/Graphs/graph"},next:{title:"Install APOC core",permalink:"/book/index.html/docs/General/Random/Graphs/neo4j/"}},i={},c=[],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mutation {\n    createApps(\n        input: [\n            {\n                name: "example app"\n                transactions: {\n                    create: [\n                        {\n                            node: { name: "google.com" }\n                        }\n                        {\n                            node: { name: "abc.com" }\n                        }\n                        {\n                            node: { name: "bing.com" }\n                        }\n                    ]\n                }\n            }\n        ]) {\n            apps {\n                name\n                transactions {\n                    name\n                }\n            }\n        }\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"https://graphql.org/learn/queries/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://community.mega.com/t5/REST-API/Query-Create-Update-Delete-data-in-the-repository-with-GraphQL/td-p/26434"},"https://community.mega.com/t5/REST-API/Query-Create-Update-Delete-data-in-the-repository-with-GraphQL/td-p/26434")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://neo4j.com/docs/graphql-manual/current/getting-started/"},"https://neo4j.com/docs/graphql-manual/current/getting-started/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/"},"https://graphql.org/learn/queries/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/mutations-and-input-types/"},"https://graphql.org/graphql-js/mutations-and-input-types/")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/global-object-identification/"},"https://graphql.org/learn/global-object-identification/")))}u.isMDXComponent=!0}}]);