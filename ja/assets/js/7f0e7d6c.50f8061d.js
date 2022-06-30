"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9001],{28584:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={id:"working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050"},a=void 0,l={unversionedId:"tutorials/customizing-with-xcode/working-with-xcode",id:"version-19-R5/tutorials/customizing-with-xcode/working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R5/tutorials/customizing-with-xcode/working-with-xcode.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/working-with-xcode",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/working-with-xcode",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/customizing-with-xcode/working-with-xcode.md",tags:[],version:"19-R5",frontMatter:{id:"working-with-xcode",title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050"},sidebar:"tutorials",previous:{title:"Relation interactions",permalink:"/go-mobile/ja/docs/tutorials/relations/relation-interactions"},next:{title:"Xcode \u30ac\u30a4\u30c9",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/xcode-overview"}},c={},u=[{value:"Xcode\u3068\u306f\uff1f",id:"xcode\u3068\u306f",level:2},{value:"Download",id:"download",level:2},{value:"\u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u2489 \u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"--\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"\u248a \u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f",id:"----\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092xcode\u3067\u958b\u304f",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Open a 4D for iOS project from the Project Editor."),(0,n.kt)("li",{parentName:"ul"},"Customize the generated 4D for iOS app."))),(0,n.kt)("p",null,"4D for iOS\u306f\uff0c\u30cd\u30a4\u30c6\u30a3\u30d6iOS\u30a2\u30d7\u30ea\u3092\u958b\u767a\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u3092\u51fa\u529b\u3059\u308b\u306e\u3067\uff0cXcode\u3067\u958b\u3044\u3066\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u5177\u4f53\u7684\u306a\u30d7\u30ed\u30bb\u30b9\u306f\u4ee5\u4e0b\u306b\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE")),(0,n.kt)("p",{parentName:"blockquote"},"If you customize your project on Xcode and rebuild it from the Project Editor All of your modifications will be lost!")),(0,n.kt)("h2",{id:"xcode\u3068\u306f"},"Xcode\u3068\u306f\uff1f"),(0,n.kt)("p",null,"Xcode\u306f\uff0cmacOS\u4e0a\u3067\u52d5\u304f\u7d71\u5408\u958b\u767a\u74b0\u5883\u304a\u3088\u3073\u4ed8\u968f\u3059\u308b\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3067\u69cb\u6210\u3055\u308c\u3066\u304a\u308a\uff0ciPad\uff0ciPod\uff0ciPhone\uff0cMac\u7528\u306e\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("p",null,"\u6700\u65b0\u7248\u306eXcode\u306f\uff0cApp Store\u304b\u3089\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"macappstore://itunes.apple.com/app/id497799835?mt=12"},"View in Mac App Store ")),(0,n.kt)("p",null,"\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u767b\u9332\u3092\u3059\u308c\u3070\uff0cApple Developer\u306e\u30b5\u30a4\u30c8\u304b\u3089Xcode\u306e\u30d7\u30ec\u30d3\u30e5\u30fc\u7248\u3084\u4ee5\u524d\u306e\u30ea\u30ea\u30fc\u30b9\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,"We'll use the ",(0,n.kt)("a",{parentName:"p",href:"../create-your-first-app"},"contact application")," we created."),(0,n.kt)("p",null,"Download the Starter project:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"#"},"Download")),(0,n.kt)("h2",{id:"-\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u307e\u3060\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u3066\u3044\u306a\u3044\u306e\u3067\u3042\u308c\u3070\uff0c\u2489\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u3059\u3067\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u3057\u305f\u306e\u3067\u3042\u308c\u3070\uff0c\u248a\u306b\u9032\u3093\u3067\u304f\u3060\u3055\u3044\u3002")),(0,n.kt)("h2",{id:"--\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"},"\u2489 \u2488 \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"),(0,n.kt)("p",null,"From the Project Editor BUILD tab:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u30fc\u3067\u8d77\u52d5\u3059\u308biOS\u30c7\u30d0\u30a4\u30b9\u306e\u30e2\u30c7\u30eb\u3092\u9078\u3073\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Build and Run")," button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Build and Run",src:o(79374).Z,width:"768",height:"739"})),(0,n.kt)("h2",{id:"----\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092xcode\u3067\u958b\u304f"},"\u248a \u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f"),(0,n.kt)("p",null,"From the Project Editor BUILD tab:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on Project > Open the project with Xcode")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u248a \u248a \u248a \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092Xcode\u3067\u958b\u304f",src:o(1901).Z,width:"1033",height:"994"})),(0,n.kt)("p",null,"Now you're ready to start working on your 4D for iOS project in Xcode."))}p.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(o),m=n,k=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return o?r.createElement(k,a(a({ref:t},d),{},{components:o})):r.createElement(k,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}s.displayName="MDXCreateElement"},1901:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-6fbba90ad139fdb4bc2e436c061c0106.png"},79374:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/build-and-run-dfc802f164eab0d00808ff57bd0e3c3c.png"}}]);