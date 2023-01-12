"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6339],{54536:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const o={id:"deployment-in-house-distribute",title:"Distribute your app in-House"},a=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute",title:"Distribute your app in-House",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/docs/tutorials/deploying-in-house/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R8",frontMatter:{id:"deployment-in-house-distribute",title:"Distribute your app in-House"},sidebar:"tutorials",previous:{title:"Archive and export your Project",permalink:"/go-mobile/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"Create App Store record",permalink:"/go-mobile/docs/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},s={},p=[{value:"STEP 1. Upload your app",id:"step-1-upload-your-app",level:2},{value:"STEP 2. Create the installation link",id:"step-2-create-the-installation-link",level:2},{value:"STEP 3. Install your enterprise app on iOS",id:"step-3-install-your-enterprise-app-on-ios",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,r.kt)("p",{parentName:"blockquote"},"Upload your app to a secured server.")),(0,r.kt)("h2",{id:"step-1-upload-your-app"},"STEP 1. Upload your app"),(0,r.kt)("p",null,"Upload your app files to a secured server:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assets (display-image and full-size-image)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"manifest.plist")," file"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},".ipa")," file")),(0,r.kt)("p",null,"You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your asset and ipa URLs must match the URLs defined in your ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.plist")," file.")),(0,r.kt)("h2",{id:"step-2-create-the-installation-link"},"STEP 2. Create the installation link"),(0,r.kt)("p",null,"Create an ",(0,r.kt)("strong",{parentName:"p"},"ITMS Serices link")," (iTUnes Music Store) with the full web address of your manifest file as a parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,r.kt)("p",null,"This link can be used when sending emails, embedded in an html page, or even within a QR code."),(0,r.kt)("p",null,"Here is a simple example:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contact demo app install",src:n(3797).Z,width:"497",height:"625"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The QR Code used for this documentation is not active.")),(0,r.kt)("h2",{id:"step-3-install-your-enterprise-app-on-ios"},"STEP 3. Install your enterprise app on iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install the app by clicking on the link or scanning a QR Code")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scan and install",src:n(30069).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When you first open an enterprise app that you've manually installed, a notification will be displayed stating that the developer of the app isn't trusted on your device. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ignore this message and click ",(0,r.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.'))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untrust developer",src:n(61462).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tap the name of the developer profile to establish trust for this developer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trust-confirmation",src:n(35925).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can then go to your app and open it.")),(0,r.kt)("p",null,"Congratulations... you can now distribute your app in-house."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(y,a(a({ref:t},u),{},{components:n})):i.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3797:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},30069:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},35925:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},61462:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);