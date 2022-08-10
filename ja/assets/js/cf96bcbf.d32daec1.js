"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[408],{40830:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const o={id:"xcode-overview",title:"Xcode \u30ac\u30a4\u30c9"},r=void 0,l={unversionedId:"tutorials/customizing-with-xcode/xcode-overview",id:"version-19-R6/tutorials/customizing-with-xcode/xcode-overview",title:"Xcode \u30ac\u30a4\u30c9",description:"OBJECTIVES",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/customizing-with-xcode/xcode-overview.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/xcode-overview",permalink:"/ja/docs/tutorials/customizing-with-xcode/xcode-overview",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/customizing-with-xcode/xcode-overview.md",tags:[],version:"19-R6",frontMatter:{id:"xcode-overview",title:"Xcode \u30ac\u30a4\u30c9"},sidebar:"tutorials",previous:{title:"\u4f5c\u696d\u3092Xcode\u306b\u5f15\u304d\u7d99\u3050",permalink:"/ja/docs/tutorials/customizing-with-xcode/working-with-xcode"},next:{title:"4D for iOS \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u69cb\u6210",permalink:"/ja/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"}},s={},c=[{value:"\u30c4\u30fc\u30eb\u30d0\u30fc",id:"\u30c4\u30fc\u30eb\u30d0\u30fc",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30a8\u30ea\u30a2",id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30a8\u30ea\u30a2",level:2},{value:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc",id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc",level:2},{value:"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2",id:"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2",level:2},{value:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30da\u30a4\u30f3",id:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30da\u30a4\u30f3",level:3},{value:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30da\u30a4\u30f3",id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30da\u30a4\u30f3",level:3},{value:"\u30c7\u30d0\u30c3\u30b0\u30a8\u30ea\u30a2",id:"\u30c7\u30d0\u30c3\u30b0\u30a8\u30ea\u30a2",level:2},{value:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a8\u30ea\u30a2",id:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a8\u30ea\u30a2",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,n.kt)("p",{parentName:"blockquote"},"Ensure a basic understanding of working with Xcode.")),(0,n.kt)("p",null,"Xcode displays various areas that we're going to review:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Xcode",src:i(28349).Z,width:"1448",height:"933"})),(0,n.kt)("h2",{id:"\u30c4\u30fc\u30eb\u30d0\u30fc"},"\u30c4\u30fc\u30eb\u30d0\u30fc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Run")," and ",(0,n.kt)("strong",{parentName:"li"},"Stop")," buttons are located on the left side of the toolbar. Pressing the ",(0,n.kt)("strong",{parentName:"li"},"Run")," button will build, run, and launch your application in the selected iOS Simulator.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30d3\u30eb\u30c9\u3057\u3066\u5b9f\u884c",src:i(2351).Z,width:"283",height:"85"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The dropdown menu next to the ",(0,n.kt)("strong",{parentName:"li"},"Stop")," button indicates which build target you want to run and which Simulator is being used.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toolbar Target",src:i(72338).Z,width:"283",height:"85"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30c4\u30fc\u30eb\u30d0\u30fc\u306e\u53f3\u5074\u306b\u306f\uff0c\u8868\u793a\u5f62\u5f0f\u3092\u5207\u308a\u66ff\u3048\u308b\u305f\u3081\u306e\u30dc\u30bf\u30f3\u304c\u3042\u308a\u307e\u3059\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Toolbar View buttons",src:i(44226).Z,width:"283",height:"85"})),(0,n.kt)("h2",{id:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30a8\u30ea\u30a2"},"\u30a8\u30c7\u30a3\u30bf\u30fc\u30a8\u30ea\u30a2"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a8\u30c7\u30a3\u30bf\u30fc\u30a8\u30ea\u30a2",src:i(24166).Z,width:"680",height:"567"})),(0,n.kt)("p",null,"This is where the coding happens when a Swift file is selected. When a Storyboard file is selected, the view changes and the Interface Builder appears."),(0,n.kt)("h2",{id:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc"},"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc",src:i(91869).Z,width:"680",height:"624"})),(0,n.kt)("p",null,"This is a graphical interface which allows you to build a Storyboard or XIB file. All of your scenes are accessible on the left side."),(0,n.kt)("h2",{id:"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2"},"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2"),(0,n.kt)("p",null,"The Utility area of Xcode has two panes: the Inspector pane and the Library pane."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e6\u30fc\u30c6\u30a3\u30ea\u30c6\u30a3\u30fc\u30a8\u30ea\u30a2",src:i(7278).Z,width:"567",height:"737"})),(0,n.kt)("h3",{id:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30da\u30a4\u30f3"},"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30da\u30a4\u30f3"),(0,n.kt)("p",null,"Within the Properties section, there are six different Inspector Tabs, as shown in the following illustration:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u30da\u30a4\u30f3",src:i(28593).Z,width:"1701",height:"680"})),(0,n.kt)("p",null,"From left-to-right, these tabs are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"File inspector"),": For viewing and managing file metadata, such as a filename, type, and path.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Quick Help"),": For viewing details about what has been selected in an editor.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Identity inspector"),": For viewing object metadata such as an object\u2019s class, runtime attributes, label.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Attributes inspector"),": For configuring the attributes specific to the selected interface object. \u305f\u3068\u3048\u3070\uff0c\u30c6\u30ad\u30b9\u30c8\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u306f\uff0c\u6587\u5b57\u306e\u6574\u5217\u30fb\u30d5\u30a9\u30f3\u30c8\u30ab\u30e9\u30fc\u30fb\u30dc\u30fc\u30c0\u30fc\u30bf\u30a4\u30d7\u30fb\u5165\u529b\u306e\u53ef\u5426\u3068\u3044\u3063\u305f\u5c5e\u6027\u304c\u3042\u308a\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Size inspector"),": For specifying characteristics such as the size and position of an interface object.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Connections inspector"),": View the outlets and actions for an interface object, make new connections, and delete existing connections."))),(0,n.kt)("h3",{id:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30da\u30a4\u30f3"},"\u30e9\u30a4\u30d6\u30e9\u30ea\u30da\u30a4\u30f3"),(0,n.kt)("p",null,"Within the Properties section, there are four different Library Tabs, as shown in the following illustration:"),(0,n.kt)("p",null,"From left-to-right, these tabs are:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30a4\u30d6\u30e9\u30ea\u30da\u30a4\u30f3",src:i(20760).Z,width:"1233",height:"645"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"File templates"),": These templates are for the common types of files listed as choices in the New File menu.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Code snippets"),": These are short pieces of source code for use in your application. \u76f4\u63a5\uff0c\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Objects"),": This library contains the kinds of interface objects you\u2019d use to make up your user interface. \u76f4\u63a5\uff0c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Media files"),": This library contains all your graphics, icons, and sound files. \u76f4\u63a5\uff0c\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u30d3\u30eb\u30c0\u30fc\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"))),(0,n.kt)("h2",{id:"\u30c7\u30d0\u30c3\u30b0\u30a8\u30ea\u30a2"},"\u30c7\u30d0\u30c3\u30b0\u30a8\u30ea\u30a2"),(0,n.kt)("p",null,"This area displays the output and the state of various variables when running your app."),(0,n.kt)("h2",{id:"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a8\u30ea\u30a2"},"\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3\u30a8\u30ea\u30a2"),(0,n.kt)("p",null,"Several tabs are included here, the most important of which are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Navigation tab"),": Lists and provides access to all files necessary for your application to work properly.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Navigation tab",src:i(93280).Z,width:"340",height:"369"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Search navigator tab"),": Allows searching all files in the project.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Search navigator tab",src:i(93866).Z,width:"369",height:"454"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Issue navigator tab"),": Displays all errors in an iOS project."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8d64\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\uff0c\u7121\u8996\u3067\u304d\u306a\u3044\u554f\u984c\u3067\u3042\u308a\uff0c\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u305f\u3081\u306b\u306f\uff0c\u89e3\u6d88\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9ec4\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306f\uff0c\u8b66\u544a\u3067\u3042\u308a\uff0c\u4e0d\u5177\u5408\u3092\u5f15\u304d\u8d77\u3053\u3059\u53ef\u80fd\u6027\u304c\u3042\u308b\u3082\u306e\u306e\uff0c\u30a2\u30d7\u30ea\u306e\u30d3\u30eb\u30c9\u3092\u963b\u6b62\u3059\u308b\u3082\u306e\u3067\u306f\u306a\u3044\u554f\u984c\u3092\u793a\u3057\u3066\u3044\u307e\u3059\u3002")))),(0,n.kt)("p",null,"You can click on errors and warnings to visualize them in the project."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Issue Navigator",src:i(24784).Z,width:"365",height:"269"})),(0,n.kt)("p",null,"Next, we're going to focus on the files included in your 4D for iOS app from the Project navigation tab."))}d.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=n,b=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return i?a.createElement(b,r(r({ref:t},u),{},{components:i})):a.createElement(b,r({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},28349:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Discover-Xcode-4D-for-iOS-91a066901a5ce60d1dca19351129bf26.png"},24166:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Editor-Xcode-4D-for-iOS-224f4632dc7c0d18c776636672ab126a.png"},91869:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Interface-Builder-Xcode-4D-for-iOS-ce843f471839a28f033e8396c4a1b333.png"},24784:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Issue-Navigator-Xcode-4D-for-iOS-b6966ce94cd9b802213240b9ca13f284.png"},93280:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Project-Navigation-Editor-Xcode-4D-for-iOS-151c70e03249746e6e1411be90eaf846.png"},93866:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Search-Navigator-Xcode-4D-for-iOS-0d14fbcdfe7e669e09c67eb9ed5140da.png"},2351:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAABVCAYAAAB5CECJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM3ODA2Mjg1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM3ODA2Mjk1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RUIwQzk4OTVDMzIxMUU4ODM5M0VBMTM5QUQwMzE0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RUIwQzk4QTVDMzIxMUU4ODM5M0VBMTM5QUQwMzE0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plsw3YUAAArISURBVHja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"},72338:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAABVCAYAAAB5CECJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM3ODA2MkM1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM3ODA2MkQ1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzc4MDYyQTVDMzMxMUU4ODM5M0VBMTM5QUQwMzE0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzc4MDYyQjVDMzMxMUU4ODM5M0VBMTM5QUQwMzE0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/tJXEAABSFSURBVHja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"},44226:(e,t,i)=>{i.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAABVCAYAAAB5CECJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM3ODA2MzA1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM3ODA2MzE1QzMzMTFFODgzOTNFQTEzOUFEMDMxNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzc4MDYyRTVDMzMxMUU4ODM5M0VBMTM5QUQwMzE0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzc4MDYyRjVDMzMxMUU4ODM5M0VBMTM5QUQwMzE0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsjSZZEAAAYdSURBVHja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"},7278:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Utility-Xcode-4D-for-iOS-4bfac070d7c0552db8ed464b0c15f637.png"},28593:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Xcode-Inspector-pane-5442c9d7a821c2723a718477968d2413.png"},20760:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Xcode-Library-pane-0b365e4a57ed56f155c4c282a3407892.png"}}]);