"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[8558],{12367:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),o=["components"],l={id:"deployment-in-house-distribute",title:"Distribute your app in-House"},s=void 0,p={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute",title:"Distribute your app in-House",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/fr/docs/19-R4/tutorials/deploying-in-house/deployment-in-house-distribute",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R4",frontMatter:{id:"deployment-in-house-distribute",title:"Distribute your app in-House"},sidebar:"version-19-R4/tutorials",previous:{title:"Archive and export your Project",permalink:"/go-mobile/fr/docs/19-R4/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"Create App Store record",permalink:"/go-mobile/fr/docs/19-R4/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},u={},c=[{value:"STEP 1. Upload your app",id:"step-1-upload-your-app",level:2},{value:"STEP 2. Create the installation link",id:"step-2-create-the-installation-link",level:2},{value:"STEP 3. Install your enterprise app on iOS",id:"step-3-install-your-enterprise-app-on-ios",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Upload your app to a secured server.")),(0,a.kt)("h2",{id:"step-1-upload-your-app"},"STEP 1. Upload your app"),(0,a.kt)("p",null,"Upload your app files to a secured server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"assets (display-image and full-size-image)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"manifest.plist")," file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".ipa")," file")),(0,a.kt)("p",null,"You can use any cloud storage service to distribute your app as soon as it is secured (Dropbox, Google Drive, etc.)."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Your asset and ipa URLs must match the URLs defined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.plist")," file."))),(0,a.kt)("h2",{id:"step-2-create-the-installation-link"},"STEP 2. Create the installation link"),(0,a.kt)("p",null,"Create an ",(0,a.kt)("strong",{parentName:"p"},"ITMS Serices link")," (iTUnes Music Store) with the full web address of your manifest file as a parameter:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,a.kt)("p",null,"This link can be used when sending emails, embedded in an html page, or even within a QR code."),(0,a.kt)("p",null,"Here is a simple example:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Contact demo app install",src:n(58330).Z,width:"497",height:"625"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The QR Code used for this documentation is not active.")),(0,a.kt)("h2",{id:"step-3-install-your-enterprise-app-on-ios"},"STEP 3. Install your enterprise app on iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the app by clicking on the link or scanning a QR Code")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scan and install",src:n(58886).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you first open an enterprise app that you've manually installed, a notification will be displayed stating that the developer of the app isn't trusted on your device. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ignore this message and click ",(0,a.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'In Settings > General > Profiles or Profiles & Device Management, in the "Enterprise App" heading, the profile for the developer is listed.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untrust developer",src:n(439).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tap the name of the developer profile to establish trust for this developer.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Trust-confirmation",src:n(75307).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can then go to your app and open it.")),(0,a.kt)("p",null,"Congratulations... you can now distribute your app in-house."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58330:function(e,t,n){t.Z=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},58886:function(e,t,n){t.Z=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},75307:function(e,t,n){t.Z=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},439:function(e,t,n){t.Z=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);