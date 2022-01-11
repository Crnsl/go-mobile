(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4155],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11038:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={id:"getting-started",title:"Getting started"},c=void 0,l={unversionedId:"tutorials/actions/getting-started",id:"version-19-R3/tutorials/actions/getting-started",isDocsHomePage:!1,title:"Getting started",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R3/tutorials/actions/getting-started.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/getting-started",permalink:"/go-mobile/es/docs/19-R3/tutorials/actions/getting-started",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/actions/getting-started.md",version:"19-R3",frontMatter:{id:"getting-started",title:"Getting started"},sidebar:"version-19-R3/tutorials",previous:{title:"User information query",permalink:"/go-mobile/es/docs/19-R3/tutorials/filter-queries/user-information-query"},next:{title:"Defining your first action",permalink:"/go-mobile/es/docs/19-R3/tutorials/actions/define-first-action"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,i.kt)("p",{parentName:"blockquote"},"Use actions in the generated iOS app.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,i.kt)("p",{parentName:"blockquote"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"[here](prerequisites.html)")," to see what you'll need to get started!")),(0,i.kt)("p",null,"In 4D v17 R5, you can ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R3/tutorials/actions/define-first-action"},"define actions")," directly from the Project Editor and execute 4D code from your generated iOS app!"),(0,i.kt)("p",null,"From here, when you build your app from the Project Editor using actions, you can decide to use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"4D for iOS templates")," from the Form section. In this case, actions are already included. You just need to ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R3/tutorials/actions/define-first-action"},"define actions")," in the Actions section and create appropriate methods in 4D.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Your own custom templates")," you developed. An important additional step is required for your actions to work in the generated iOS app. Indeed, it is necessary to manually ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R3/tutorials/actions/adding-actions-template"},"include action Tags")," in your Listform and Detailforms templates. "))),(0,i.kt)("p",null,"Now it's time to enjoy building a ",(0,i.kt)("strong",{parentName:"p"},"Tasks app"),", using 4D for iOS actions."))}d.isMDXComponent=!0}}]);