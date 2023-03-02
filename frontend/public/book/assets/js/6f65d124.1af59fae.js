"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return n?l.createElement(m,i(i({ref:t},c),{},{components:n})):l.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var l=n(7462),o=(n(7294),n(3905));const r={},i=void 0,a={unversionedId:"General/CI-CD/Git/git",id:"General/CI-CD/Git/git",title:"git",description:"Install Git",source:"@site/docs/General/CI-CD/Git/git.md",sourceDirName:"General/CI-CD/Git",slug:"/General/CI-CD/Git/",permalink:"/book/index.html/docs/General/CI-CD/Git/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/General/CI-CD/Git/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/book/index.html/docs/General/CI-CD/Docker/AWS/docker"},next:{title:"husky",permalink:"/book/index.html/docs/General/CI-CD/Husky/"}},s={},u=[{value:"Install Git",id:"install-git",level:3},{value:"Windows",id:"windows",level:5},{value:"Mac",id:"mac",level:5},{value:"Linux",id:"linux",level:5},{value:"Standard Git Workflow",id:"standard-git-workflow",level:3},{value:"Clone a Git Repository",id:"clone-a-git-repository",level:3},{value:"Setting up Git with your local Computer",id:"setting-up-git-with-your-local-computer",level:3},{value:"Cheat Sheet",id:"cheat-sheet",level:5},{value:"Git Squash / Fixup",id:"git-squash--fixup",level:3},{value:"General Git Tips",id:"general-git-tips",level:5}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"install-git"},"Install Git"),(0,o.kt)("h5",{id:"windows"},"Windows"),(0,o.kt)("p",null,"install chocolatey"),(0,o.kt)("p",null,"choco install git"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git configs")),(0,o.kt)("h5",{id:"mac"},"Mac"),(0,o.kt)("p",null,"install homebrew\nbrew.sh"),(0,o.kt)("p",null,"brew install git"),(0,o.kt)("h5",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"standard-git-workflow"},"Standard Git Workflow"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"git add ."),(0,o.kt)("li",null,'git commit -m "your message"'),(0,o.kt)("li",null," [OPTIONAL - IF YOU MAKE A NEW GITHUB REPO] git remote add "),(0,o.kt)("li",null,"git push")),(0,o.kt)("h3",{id:"clone-a-git-repository"},"Clone a Git Repository"),(0,o.kt)("h3",{id:"setting-up-git-with-your-local-computer"},"Setting up Git with your local Computer"),(0,o.kt)("p",null,"Set up ssh key"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' ssh-keygen -t ed25519 -C "<yourEmailHere>"\n\n eval "$(ssh-agent -s)"\n\n ssh-add ~/.ssh/id_ed25519\n \n ssh-add -l\n')),(0,o.kt)("p",null,"Add ssh key to github"),(0,o.kt)("ol",null,(0,o.kt)("li",null," Go to you github account settings "),(0,o.kt)("li",null," Find 'ssh and GPG keys' "),(0,o.kt)("li",null," Add new key "),(0,o.kt)("li",null," run the following command ",(0,o.kt)("code",null," cat ~/.ssh/id_ed25519.pub ")," "),(0,o.kt)("li",null," copy paste that into github ")),(0,o.kt)("p",null,"Any new repositories you make, you can now easily access without needing further authentication"),(0,o.kt)("hr",null),(0,o.kt)("h5",{id:"cheat-sheet"},"Cheat Sheet"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"Track remote branch and choose local name",(0,o.kt)("div",null),(0,o.kt)("code",null," git branch --track local-branch-name remote-name/branch-name")),(0,o.kt)("li",null,"Pull remote branch into local branch",(0,o.kt)("div",null),(0,o.kt)("ol",null,(0,o.kt)("li",null,(0,o.kt)("code",null," git remote add remote-name remote-url ")),(0,o.kt)("li",null,(0,o.kt)("code",null," git fetch remote-name ")),(0,o.kt)("li",null,(0,o.kt)("code",null," git checkout -b local-branch-name remote-name/remote-branch-name ")))),(0,o.kt)("li",null,"Change default branch on git init to main",(0,o.kt)("div",null),(0,o.kt)("code",null," git config --global init.defaultBranch main ")),(0,o.kt)("li",null,"Delete remote branch",(0,o.kt)("div",null),(0,o.kt)("code",null," git push remote --delete branch ")),(0,o.kt)("li",null,"Change default git editor",(0,o.kt)("div",null),(0,o.kt)("code",null," git config --global core.editor vim ")),(0,o.kt)("li",null,"Prettier git log",(0,o.kt)("div",null),(0,o.kt)("code",null," git log --oneline --decorate "))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"git-squash--fixup"},"Git Squash / Fixup"),(0,o.kt)("p",null,"When to use Squash vs. Fixup\nSquash: you want your commit message to stay\nFixup: you don't want your commit message to stay"),(0,o.kt)("p",null," The process:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git add .\n\n$ git commit -m \"message\" --fixup :/commit-message \n    // or --squash, the :/ finds the latest commit containing your 'commit-message' and attaches the fixup or squashed commit to it\n    \n$ git rebase -i HEAD~2 --autosquash\n    // change the integer after HEAD to include whatever commits you're squashing\n    \n$ git push --force\n    // force push in order to rebase remote repo\n")),(0,o.kt)("h5",{id:"general-git-tips"},"General Git Tips"),(0,o.kt)("p",null,"Try to fork when necessary"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"ideas"},"Ideas"),(0,o.kt)("p",null,"Have a reusable binary that creates dev branches for multiple git remotes automatically"),(0,o.kt)("hr",null),(0,o.kt)("a",{href:"https://stackoverflow.com/questions/7983204/having-a-private-branch-of-a-public-repo-on-github"},"Private / Public repository git work flow"),(0,o.kt)("a",{href:"https://github.com/actions/starter-workflows/tree/1d8891efc2151b2290b1d93e8489f9b1f41bd047"},"Starter workflows"),(0,o.kt)("a",{href:"https://stackoverflow.com/questions/51288873/how-to-replace-the-history-of-a-branch-with-another-branch"},"How to replace the history of a branch with another branch"),(0,o.kt)("a",{href:"https://stackoverflow.com/questions/29559053/force-update-the-current-branch-how/29559362"},"Force update current branch"),(0,o.kt)("a",{href:"https://www.internalpointers.com/post/squash-commits-into-one-git"},"Squash commits into one"),(0,o.kt)("a",{href:"https://stackoverflow.com/questions/215718/how-can-i-reset-or-revert-a-file-to-a-specific-revision"},"reset specific file"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gist.github.com/jagrosh/5b1761213e33fc5b54ec7f6379034a22"},"https://gist.github.com/jagrosh/5b1761213e33fc5b54ec7f6379034a22")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16230838/is-it-possible-to-pull-just-one-file-in-git"},"https://stackoverflow.com/questions/16230838/is-it-possible-to-pull-just-one-file-in-git")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/15844542/git-symlink-reference-to-a-file-in-an-external-repository/27770463#27770463"},"https://stackoverflow.com/questions/15844542/git-symlink-reference-to-a-file-in-an-external-repository/27770463#27770463")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/7597748/linking-a-single-file-from-another-git-repository"},"https://stackoverflow.com/questions/7597748/linking-a-single-file-from-another-git-repository")))}h.isMDXComponent=!0}}]);