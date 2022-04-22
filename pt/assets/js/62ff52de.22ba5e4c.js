"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6241],{24340:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var n=o(83117),r=o(80102),l=(o(67294),o(3905)),i=["components"],a={id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},u=void 0,p={unversionedId:"debug/from-your-iphone-and-xcode",id:"version-19-R5/debug/from-your-iphone-and-xcode",title:"From your iPhone and Xcode",description:"Debug from Xcode",source:"@site/versioned_docs/version-19-R5/debug/from-your-iphone-and-xcode.md",sourceDirName:"debug",slug:"/debug/from-your-iphone-and-xcode",permalink:"/go-mobile/pt/docs/debug/from-your-iphone-and-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/debug/from-your-iphone-and-xcode.md",tags:[],version:"19-R5",frontMatter:{id:"from-your-iphone-and-xcode",title:"From your iPhone and Xcode"},sidebar:"docs",previous:{title:"From the Project editor",permalink:"/go-mobile/pt/docs/debug/from-project-editor"},next:{title:"From your Android device",permalink:"/go-mobile/pt/docs/debug/from-your-android-device-and-android-studio"}},s={},c=[{value:"Debug from Xcode",id:"debug-from-xcode",level:2},{value:"Logger",id:"logger",level:3},{value:"Levels",id:"levels",level:3},{value:"Format",id:"format",level:3},{value:"Emoticones",id:"emoticones",level:4},{value:"Circles",id:"circles",level:4}],d={toc:c};function g(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"debug-from-xcode"},"Debug from Xcode"),(0,l.kt)("p",null,"If you have issues during the build process, you can open your generated project with Xcode selecting the ",(0,l.kt)("strong",{parentName:"p"},"Open the product with Xcode")," option from the ",(0,l.kt)("strong",{parentName:"p"},"Project")," Menu. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Open the project with Xcode",src:o(54449).Z,width:"2164",height:"1988"})),(0,l.kt)("p",null,"From here you can ",(0,l.kt)("strong",{parentName:"p"},"launch your application")," in the Simulator clicking on the ",(0,l.kt)("strong",{parentName:"p"},"Build button")," and get all the logs at the bottom of the Xcode work space."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Xcode logs",src:o(80405).Z,width:"2502",height:"2144"})),(0,l.kt)("h3",{id:"logger"},"Logger"),(0,l.kt)("p",null,"A logger is an object that will allow you to log and trace."),(0,l.kt)("p",null,"For that we use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," framework."),(0,l.kt)("p",null,"You will find the logger settings definition in your Xcode project/Settings/Settings.plist."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Xcode logs",src:o(88965).Z,width:"2414",height:"1410"})),(0,l.kt)("h3",{id:"levels"},"Levels"),(0,l.kt)("p",null,"You can filter and display different log level into your console adding log.level in you Settings.plist file."),(0,l.kt)("p",null,"To do so, add a row Right clicking inside the Settings.plist file and enter:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"log.level as Key"),(0,l.kt)("li",{parentName:"ul"},"Number as Type"),(0,l.kt)("li",{parentName:"ul"},"3 as Value (for example)")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"available values")," are the following :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"0 for verbose"),(0,l.kt)("li",{parentName:"ul"},"1 for debug"),(0,l.kt)("li",{parentName:"ul"},"2 for info (default value)"),(0,l.kt)("li",{parentName:"ul"},"3 warning"),(0,l.kt)("li",{parentName:"ul"},"4 error"),(0,l.kt)("li",{parentName:"ul"},"5 severe")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Log level",src:o(63073).Z,width:"2414",height:"1410"})),(0,l.kt)("p",null,"So for this example, if you set log.level Value to 3, you will get ",(0,l.kt)("strong",{parentName:"p"},"warning, error and sever")," in your Xcode console."),(0,l.kt)("h3",{id:"format"},"Format"),(0,l.kt)("p",null,"You can display different visual indicators in the Xcode console to ",(0,l.kt)("strong",{parentName:"p"},"highlight different log types"),"."),(0,l.kt)("p",null,"To do so, you just have to open your Xcode project/Settings/Settings.plist"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Log Format",src:o(57929).Z,width:"2414",height:"1410"})),(0,l.kt)("h4",{id:"emoticones"},"Emoticones"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,l.kt)("h4",{id:"circles"},"Circles"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,l.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')),(0,l.kt)("p",null,"##Debug from your iPhone"),(0,l.kt)("p",null,"From your app, if you have a crash, you can display, edit and send feedback. "),(0,l.kt)("p",null,"For that:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Go to your iPhone Settings"),(0,l.kt)("li",{parentName:"ul"},"find your app scrolling down"),(0,l.kt)("li",{parentName:"ul"},"Switch on the feedback")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Activate feedback and logs",src:o(47927).Z,width:"1521",height:"936"})),(0,l.kt)("p",null,"From here, the only thing you have to do is opening again your app. An action sheet will appear to allow you :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sends messages"),(0,l.kt)("li",{parentName:"ul"},"Suggest an improvement"),(0,l.kt)("li",{parentName:"ul"},"Show current log"),(0,l.kt)("li",{parentName:"ul"},"Report a problem")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Display and send logs",src:o(78374).Z,width:"1521",height:"936"})))}g.isMDXComponent=!0},3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return g}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(o),g=r,m=d["".concat(u,".").concat(g)]||d[g]||c[g]||l;return o?n.createElement(m,i(i({ref:t},s),{},{components:o})):n.createElement(m,i({ref:t},s))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var p=2;p<l;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},80405:function(e,t,o){t.Z=o.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},47927:function(e,t,o){t.Z=o.p+"assets/images/activate-feedback-logs-4b68929c4bfb0252dcd30a8b4068b3c9.png"},78374:function(e,t,o){t.Z=o.p+"assets/images/display-send-logs-cb5739ce1531f6aa55fb37b106cdb509.png"},57929:function(e,t,o){t.Z=o.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},63073:function(e,t,o){t.Z=o.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},54449:function(e,t,o){t.Z=o.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},88965:function(e,t,o){t.Z=o.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);