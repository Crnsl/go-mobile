(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3261],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return f}});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(o),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||n;return o?r.createElement(m,a(a({ref:t},u),{},{components:o})):r.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<n;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},37853:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=o(22122),i=o(19756),n=(o(67294),o(3905)),a=["components"],c={id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},s=void 0,l={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization",isDocsHomePage:!1,title:"4D for iOS project organization",description:"From the Navigation tab, go to Sources.",source:"@site/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",version:"19-R2",frontMatter:{id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},sidebar:"version-19-R2/tutorials",previous:{title:"Xcode Overview",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Customize your 4D for iOS App",permalink:"/go-mobile/docs/tutorials/customizing-with-xcode/customize-your-ios-app"}},u=[{value:"A Swift file - which can be used to add custom code.",id:"a-swift-file---which-can-be-used-to-add-custom-code",children:[]},{value:"Storyboard file - Allows customizing your app design.",id:"storyboard-file---allows-customizing-your-app-design",children:[]}],d={toc:u};function p(e){var t=e.components,c=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"From the Navigation tab, go to Sources."),(0,n.kt)("p",null,"Here you'll find the Structure and Forms folders. They contain all of the files for your defined database structures and forms, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Launch screen - Appears when the app is launched."),(0,n.kt)("li",{parentName:"ul"},"Login screen - Appears when authentication is activated."),(0,n.kt)("li",{parentName:"ul"},"Settings screen - Includes the reload and logout buttons."),(0,n.kt)("li",{parentName:"ul"},"All published tables - Files for the authorized data.")),(0,n.kt)("p",null,"Instead, you'll find a Swift file and a Storyboard file. These files are described below. "),(0,n.kt)("h3",{id:"a-swift-file---which-can-be-used-to-add-custom-code"},"A Swift file - which can be used to add custom code."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Swift file",src:o(12133).Z})),(0,n.kt)("h3",{id:"storyboard-file---allows-customizing-your-app-design"},"Storyboard file - Allows customizing your app design."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Storyboard file",src:o(67949).Z})),(0,n.kt)("p",null,"Next, let's look at how to customize the Contacts application detail view!"))}p.isMDXComponent=!0},67949:function(e,t,o){"use strict";t.Z=o.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},12133:function(e,t,o){"use strict";t.Z=o.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);