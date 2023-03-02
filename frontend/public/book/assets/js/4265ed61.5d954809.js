"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5735],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=u(a),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||s;return a?n.createElement(d,o(o({ref:t},i),{},{components:a})):n.createElement(d,o({ref:t},i))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2381:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const s={},o=void 0,l={unversionedId:"General/AWS/Neptune/neptune",id:"General/AWS/Neptune/neptune",title:"neptune",description:"Key Service Components",source:"@site/docs/General/AWS/Neptune/neptune.md",sourceDirName:"General/AWS/Neptune",slug:"/General/AWS/Neptune/",permalink:"/book/index.html/docs/General/AWS/Neptune/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/AWS/Neptune/neptune.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"extensions",permalink:"/book/index.html/docs/General/AWS/Lambdas/Extensions/"},next:{title:"open-search",permalink:"/book/index.html/docs/General/AWS/Open-Search/"}},p={},u=[{value:"Key Service Components",id:"key-service-components",level:5},{value:"Security features",id:"security-features",level:5},{value:"Extraneous notes",id:"extraneous-notes",level:5},{value:"Pricing",id:"pricing",level:5},{value:"Neptune Full Text Search",id:"neptune-full-text-search",level:4},{value:"Neptune Open Search Data Model",id:"neptune-open-search-data-model",level:4},{value:"Neptune Streams",id:"neptune-streams",level:4},{value:"Graph Data Model",id:"graph-data-model",level:5}],i={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h5",{id:"key-service-components"},"Key Service Components"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Primary DB Instance:")," Supports read / write. Each Neptune DB cluster has one primary DB instance that is responsible for writing (loading / modifying) graph db contents\n",(0,r.kt)("em",{parentName:"p"},"Neptune Replica:")," Replicates primary DB in different Availability Zones and for load distribution. Only supports Read\n",(0,r.kt)("em",{parentName:"p"},"Cluster Volume:")," Data is stored in the cluster volume."),(0,r.kt)("h5",{id:"security-features"},"Security features"),(0,r.kt)("p",null,"Amazon VPC and AWS KMS support, and data encryption"),(0,r.kt)("h5",{id:"extraneous-notes"},"Extraneous notes"),(0,r.kt)("p",null,"Neptune is designed to offer greater than 99.99 percent availability. It increases database performance and availability by tightly integrating the database engine with an SSD-backed virtualized storage layer that is built for database workloads. Neptune storage is fault-tolerant and self-healing. Disk failures are repaired in the background without loss of database availability. Neptune automatically detects database crashes and restarts without the need for crash recovery or rebuilding the database cache. If the entire instance fails, Neptune automatically fails over to one of up to 15 read replicas."),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"pricing"},"Pricing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/neptune/pricing/"},"https://aws.amazon.com/neptune/pricing/")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"neptune-full-text-search"},"Neptune Full Text Search"),(0,r.kt)("h4",{id:"neptune-open-search-data-model"},"Neptune Open Search Data Model"),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"neptune-streams"},"Neptune Streams"),(0,r.kt)("p",null,"The log stream ",(0,r.kt)("inlineCode",{parentName:"p"},"GetRecords")," API uses the same resources as all other Neptune graph operations. This means that clients need to load balance between stream requests and other DB requests."),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"graph-data-model"},"Graph Data Model"),(0,r.kt)("p",null,"Basic unit: 4 position quad"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yOYodfN84N4"},"https://www.youtube.com/watch?v=yOYodfN84N4"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://tinkerpop.apache.org/docs/current/reference/#traversal"},"https://tinkerpop.apache.org/docs/current/reference/#traversal"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws-samples/aws-dbs-refarch-graph"},"https://github.com/aws-samples/aws-dbs-refarch-graph")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws/graph-notebook/blob/main/README.md"},"https://github.com/aws/graph-notebook/blob/main/README.md"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws/graph-notebook/tree/main/additional-databases/gremlin-server"},"https://github.com/aws/graph-notebook/tree/main/additional-databases/gremlin-server")),(0,r.kt)("a",{href:"https://docs.aws.amazon.com/neptune/latest/userguide/feature-overview-data-model.html"},"Neptune Graph Data Model"),(0,r.kt)("a",{href:"https://docs.aws.amazon.com/neptune/latest/userguide/get-started-graph-gremlin.html"},"Using Gremlin with Neptune"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-model.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-model.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-cfn-create.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-cfn-create.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-parameters.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-parameters.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-non-string-examples.html#full-text-search-non-string-example-3"},"https://docs.aws.amazon.com/neptune/latest/userguide/full-text-search-non-string-examples.html#full-text-search-non-string-example-3")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/database/capture-graph-changes-using-neptune-streams/"},"https://aws.amazon.com/blogs/database/capture-graph-changes-using-neptune-streams/"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/streams-using.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/streams-using.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/iam-auth-policy.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/iam-auth-policy.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/neptune/latest/userguide/iam-auth-temporary-credentials.html"},"https://docs.aws.amazon.com/neptune/latest/userguide/iam-auth-temporary-credentials.html"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/directoryservice/latest/admin-guide/edit_trust.html"},"https://docs.aws.amazon.com/directoryservice/latest/admin-guide/edit_trust.html")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://ctskennerton.github.io/2020/08/23/using-amazon-neptune-full-text-search/"},"https://ctskennerton.github.io/2020/08/23/using-amazon-neptune-full-text-search/")))}c.isMDXComponent=!0}}]);