(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3654],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49019:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],l={id:"build-panel",title:"Build Panel"},u=void 0,p={unversionedId:"project-definition/build-panel",id:"version-19-R3/project-definition/build-panel",isDocsHomePage:!1,title:"Build Panel",description:"You can test your app at any moment during the development, thanks to the Simulator located on the BUILD tab of the Project Editor.",source:"@site/versioned_docs/version-19-R3/project-definition/build-panel.md",sourceDirName:"project-definition",slug:"/project-definition/build-panel",permalink:"/go-mobile/es/docs/project-definition/build-panel",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/project-definition/build-panel.md",version:"19-R3",frontMatter:{id:"build-panel",title:"Build Panel"},sidebar:"version-19-R3/docs",previous:{title:"Publishing",permalink:"/go-mobile/es/docs/project-definition/publishing"},next:{title:"Authentication",permalink:"/go-mobile/es/docs/special-features/authentication"}},c=[{value:"Using the Simulator",id:"using-the-simulator",children:[]}],s={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can test your app at any moment during the development, thanks to the Simulator located on the BUILD tab of the Project Editor."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BuildTab",src:n(76627).Z})),(0,i.kt)("p",null,"Let\u2019s take a closer look at the Build tab options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Build and Run:")," Launches the app in the Simulator.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"iPhone X:")," The default Simulator. Clicking here will reveal a dropdown list with all available simulators.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Project:")," Reveals a dropdown list where you can ",(0,i.kt)("strong",{parentName:"p"},"open the project folder")," or ",(0,i.kt)("strong",{parentName:"p"},"product folder"),", or ",(0,i.kt)("strong",{parentName:"p"},"open the product with Xcode"),". This dropdown list is useful for ",(0,i.kt)("a",{parentName:"p",href:"../debug/from-project-editor"},"debug operations"),". ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install:")," Installs the application on a connected device (see ",(0,i.kt)("a",{parentName:"p",href:"../deployment/testing-on-your-device"},"Installing on your iOS device"),")."))),(0,i.kt)("h2",{id:"using-the-simulator"},"Using the Simulator"),(0,i.kt)("p",null,"You can use the Simulator by following these steps."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select your device.")),(0,i.kt)("p",null,"In the BUILD tab of  the Project Editor, select an iOS or Android device to use for running your app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Device selection",src:n(57669).Z})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Click on the ",(0,i.kt)("strong",{parentName:"li"},"Build and Run")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Run",src:n(39191).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Test your app.")),(0,i.kt)("p",null,"Test navigating between the list and detail forms in your app."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Test in Simulator",src:n(53751).Z})))}d.isMDXComponent=!0},76627:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Build-Tab-4D-for-iOS-75784fd6ecd2cda640e5629ade3a2b62.png"},39191:function(e,t,n){"use strict";t.Z=n.p+"assets/images/build-and-run-4D-for-iOS-ed4ad9b8bfcf45c9bdea9d1e7fd5583f.png"},57669:function(e,t,n){"use strict";t.Z=n.p+"assets/images/device-selection-4D-for-ios-4a18a747115b7bbf07096323fb4ec7d0.png"},53751:function(e,t,n){"use strict";t.Z=n.p+"assets/images/simulator-forms-4D-for-iOS-8f4d554c217379e06138adf23e5cc938.png"}}]);