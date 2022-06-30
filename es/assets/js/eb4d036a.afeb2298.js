"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5661],{20599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"publishing",title:"Publishing"},a=void 0,l={unversionedId:"project-definition/publishing",id:"version-19-R5/project-definition/publishing",title:"Publishing",description:"This page gives you access to your app's publishing settings and special mobile features:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/project-definition/publishing.md",sourceDirName:"project-definition",slug:"/project-definition/publishing",permalink:"/go-mobile/es/docs/project-definition/publishing",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/project-definition/publishing.md",tags:[],version:"19-R5",frontMatter:{id:"publishing",title:"Publishing"},sidebar:"docs",previous:{title:"Formularios",permalink:"/go-mobile/es/docs/project-definition/forms"},next:{title:"Panel Generaci\xf3n",permalink:"/go-mobile/es/docs/project-definition/build-panel"}},s={},p=[{value:"Production URL",id:"production-url",level:2},{value:"Web Server Settings",id:"web-server-settings",level:2},{value:"How it looks on a device",id:"how-it-looks-on-a-device",level:2},{value:"Settings screen",id:"settings-screen",level:3},{value:"Modify remote url",id:"modify-remote-url",level:3},{value:"Features",id:"features",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page gives you access to your app's publishing settings and special mobile features:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Publishing section",src:n(68262).Z,width:"985",height:"505"})),(0,r.kt)("h2",{id:"production-url"},"Production URL"),(0,r.kt)("p",null,"URL of the Web Server on which mobile apps will connect to read and write data, in production context. You can enter any valid address, i.e.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://my.wesbsite.com\nhttp://my.website.com:9200\nwww.website.com/mobile\n")),(0,r.kt)("p",null,"During the development phase, you can leave this area empty and set the ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/project-definition/data"},"Data source")," to ",(0,r.kt)("strong",{parentName:"p"},"Current data file"),"."),(0,r.kt)("p",null,":::consejo"),(0,r.kt)("p",null,"The user will be able to ",(0,r.kt)("a",{parentName:"p",href:"#modify-remote-url"},"change the server url")," from the mobile device."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"web-server-settings"},"Web Server Settings"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Edit...")," button opens the ",(0,r.kt)("strong",{parentName:"p"},"Web")," page of the 4D settings dialog box. Use this page to define the following settings to embed in the mobile app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable HTTP")," option and ",(0,r.kt)("strong",{parentName:"li"},"HTTP port"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable HTTPS")," option and ",(0,r.kt)("strong",{parentName:"li"},"HTTP port"),".")),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,"If both HTTP and HTTPS are enabled, HTTP is used."),(0,r.kt)("p",null,":::"),(0,r.kt)("p",null,"Activating the HTTPS port requires that you installed a valid ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Admin/tls.html"},"TLS certificate"),". You can create test certificates with 4D."),(0,r.kt)("p",null,"These settings are taken into account only if the ",(0,r.kt)("a",{parentName:"p",href:"#production-url"},"production URL")," is defined. Otherwise, the local IP address is used."),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,"The Simulator always works locally (127.0.0.1 or localhost)."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"how-it-looks-on-a-device"},"How it looks on a device"),(0,r.kt)("h3",{id:"settings-screen"},"Settings screen"),(0,r.kt)("p",null,"A Settings screen is available from the tab bar. You can also find it from the More tab if necessary (",(0,r.kt)("em",{parentName:"p"},"i.e."),", your app has more than four tables)."),(0,r.kt)("p",null,"The Settings screen allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consult your remote URL and its current state"),(0,r.kt)("li",{parentName:"ul"},"Log out (if connected as an Authorized User)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Login &amp; Settings screen",src:n(43455).Z,width:"3400",height:"2131"})),(0,r.kt)("h3",{id:"modify-remote-url"},"Modify remote url"),(0,r.kt)("p",null,"You can easily update your remote url from iPhone Settings :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open your iPhone Settings"),(0,r.kt)("li",{parentName:"ul"},"Select the app you want the remote url to be updated"),(0,r.kt)("li",{parentName:"ul"},'Switch on the "Reset server address" option')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reset remote url",src:n(26678).Z,width:"3400",height:"2131"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then restart your app to reset the server address"),(0,r.kt)("li",{parentName:"ul"},"And finally define the new remote url")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Update remote url",src:n(40288).Z,width:"3400",height:"2131"})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"This area allows you to select and configure several mobile app's special features. These features are documented in dedicated sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/special-features/authentication"},"Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/special-features/push-notification"},"Push notifications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../special-features/deep-linking"},"Deep linking"))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43455:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Login-Settings-screen-Publishing-section-4D-for-iOS-be241cfa7f67de597f8249586991a3ac.png"},26678:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Reset-remote-url-883bc554af33a07cad5c1d9b085528f6.png"},40288:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Update-remote-url-75a80128450b5e1cced832b75d2240fd.png"},68262:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/publishing-5ac50899ae51899e2c4bb7f7b24829e0.png"}}]);