"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3887],{41412:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={id:"filter-query-introduction",title:"Filter queries"},a=void 0,l={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"version-19-R4/tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"In this tutorial, we'll show how to create filter queries to display filtered content in the generated mobile app.",source:"@site/versioned_docs/version-19-R4/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/docs/19-R4/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"19-R4",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"version-19-R4/tutorials",previous:{title:"Create Swift formatter",permalink:"/go-mobile/docs/19-R4/tutorials/data-formatter/create-swift-formatter"},next:{title:"Define a Filter Query",permalink:"/go-mobile/docs/19-R4/tutorials/filter-queries/define-filter-query"}},s={},u=[{value:"Download the Starter project",id:"download-the-starter-project",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this tutorial, we'll show how to create ",(0,o.kt)("strong",{parentName:"p"},"filter queries")," to display filtered content in the generated mobile app."),(0,o.kt)("p",null,"Imagine you're an account manager and you want to consult your ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts simply by connecting to your app with your email address."),(0,o.kt)("p",null,"First, from the Data section we're going define a ",(0,o.kt)("strong",{parentName:"p"},"basic filter query")," to only display ",(0,o.kt)("em",{parentName:"p"},"In Progress")," contracts. Then we're going to apply a ",(0,o.kt)("strong",{parentName:"p"},"user information-based filter")," which will depend on the account manager's email."),(0,o.kt)("h2",{id:"download-the-starter-project"},"Download the Starter project"),(0,o.kt)("p",null,"Before we begin, be sure to download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project")," which includes a ",(0,o.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," file (a demo database with a ready-to-use mobile app project)"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,o.kt)("p",null,"The database includes a:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CRM table")," with all the data we want to display in the generated iOS app"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AccountManager table")," with basic information about the account managers (email and name).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CRM database",src:r(63981).Z,width:"2226",height:"1834"})),(0,o.kt)("p",null,"You're now ready to define your first restricted query. "),(0,o.kt)("p",null,"Open the mobile project by clicking on Open > Mobile Project... and select CRM app > ",(0,o.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63981:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);