"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6940],{88301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={id:"testing-on-your-device",title:"Installing on your iOS device"},i=void 0,l={unversionedId:"tutorials/deploying-in-house/testing-on-your-device",id:"version-19-R7/tutorials/deploying-in-house/testing-on-your-device",title:"Installing on your iOS device",description:"You can install and test your mobile application on a connected device.",source:"@site/versioned_docs/version-19-R7/tutorials/deploying-in-house/testing-on-your-device.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/testing-on-your-device",permalink:"/go-mobile/docs/tutorials/deploying-in-house/testing-on-your-device",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/deploying-in-house/testing-on-your-device.md",tags:[],version:"19-R7",frontMatter:{id:"testing-on-your-device",title:"Installing on your iOS device"},sidebar:"tutorials",previous:{title:"Selecting your Apple Developer Program",permalink:"/go-mobile/docs/tutorials/developer-program/selecting-your-developer-program"},next:{title:"Archive and export your Project",permalink:"/go-mobile/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export"}},p={},c=[{value:"Requirements",id:"requirements",level:2},{value:"STEP 1. Account creation",id:"step-1-account-creation",level:2},{value:"STEP 2. Xcode configuration",id:"step-2-xcode-configuration",level:2},{value:"STEP 3. Get your Team ID",id:"step-3-get-your-team-id",level:2},{value:"STEP 4. Team ID for Free account",id:"step-4-team-id-for-free-account",level:2},{value:"Let Xcode generate your provisioning profile and certificate",id:"let-xcode-generate-your-provisioning-profile-and-certificate",level:3},{value:"Build your project from Xcode using your Free Account",id:"build-your-project-from-xcode-using-your-free-account",level:3},{value:"STEP 5. Team ID for paid subscription account",id:"step-5-team-id-for-paid-subscription-account",level:2},{value:"STEP 6. Installation",id:"step-6-installation",level:2},{value:"Install automatically with Apple Configurator 2",id:"install-automatically-with-apple-configurator-2",level:3},{value:"Install manually using Xcode",id:"install-manually-using-xcode",level:3}],u={toc:c};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can install and test your mobile application on a connected device. "),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You need to subscribe to an Apple Developer Program. Depending on your objectives and preferences, you can choose to enroll in one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Free Apple Developer Program: For testing only"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enroll/"},"Apple Developer Program for organization or individual"),": For an App Store Deployment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.apple.com/programs/enterprise/"},"Apple Enterprise Developer Program"),": To deploy your app in-house")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You need ",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/apple-configurator-2/id1037126344"},"Apple configurator 2")," installed on your Mac to automate app installation (optional).")),(0,r.kt)("h2",{id:"step-1-account-creation"},"STEP 1. Account creation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Apple ID"),": Create your Apple ID. If you don\u2019t already have one, click ",(0,r.kt)("a",{parentName:"p",href:"https://appleid.apple.com/account#!&page=create"},"here"),".  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Developer Account"),": Choose an Apple Developer Program (for organizations or individuals) for App Store deployment or the Apple Developer Enterprise Program (for in-house deployment)."))),(0,r.kt)("h2",{id:"step-2-xcode-configuration"},"STEP 2. Xcode configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer Account"),": In Xcode > Preferences > Accounts, add your Apple ID.\n",(0,r.kt)("img",{alt:"Developer Account",src:n(46308).Z,width:"768",height:"557"})," ")),(0,r.kt)("h2",{id:"step-3-get-your-team-id"},"STEP 3. Get your Team ID"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If your are using a Free Apple Developer Program, go to ",(0,r.kt)("a",{parentName:"li",href:"#step-4-team-id-for-free-account"},"step 4"),"."),(0,r.kt)("li",{parentName:"ul"},"If your are using an ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-organization"},"Apple Developer Program for organization"),", ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-program-individual"},"individual")," or an ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Apple Enterprise Developer Program")," go to ",(0,r.kt)("a",{parentName:"li",href:"#step-5-team-id-for-paid-subscription-account"},"step 5"),".")),(0,r.kt)("h2",{id:"step-4-team-id-for-free-account"},"STEP 4. Team ID for Free account"),(0,r.kt)("h3",{id:"let-xcode-generate-your-provisioning-profile-and-certificate"},"Let Xcode generate your provisioning profile and certificate"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open your current project from the BUILD tab.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build tab",src:n(67831).Z,width:"1033",height:"994"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verify that the ",(0,r.kt)("strong",{parentName:"li"},"Automatically manage signing")," option is checked and select the account you added, from the Team dropdown list.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Account-Selection",src:n(88274).Z,width:"1106",height:"877"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect your device to your computer and select it from the top menu in Xcode.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Select your device",src:n(94991).Z,width:"1106",height:"877"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Xcode automatically generates the necessary provisioning profiles and certificates you'll need to build your app.")),(0,r.kt)("h3",{id:"build-your-project-from-xcode-using-your-free-account"},"Build your project from Xcode using your Free Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Press the Build and run Button from Xcode !")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:n(48439).Z,width:"1106",height:"877"})," "),(0,r.kt)("h2",{id:"step-5-team-id-for-paid-subscription-account"},"STEP 5. Team ID for paid subscription account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Team ID"),": Go to Developer Account > Membership and get your Team ID.\n",(0,r.kt)("img",{alt:"Developer Account membership",src:n(19771).Z,width:"768",height:"739"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"4D for iOS"),": Launch 4D for iOS in Sections > General and enter your Team ID.\n",(0,r.kt)("img",{alt:"General section",src:n(67891).Z,width:"768",height:"739"})," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to STEP 6 to run your project on your device."))),(0,r.kt)("h2",{id:"step-6-installation"},"STEP 6. Installation"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This step requires that you have enabled the ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/getting-started/requirements#apple-device-developer-mode"},"Apple Device Developer Mode"),".")),(0,r.kt)("h3",{id:"install-automatically-with-apple-configurator-2"},"Install automatically with Apple Configurator 2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,r.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,r.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Install button",src:n(15089).Z,width:"768",height:"739"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The app is being installed on your device!")),(0,r.kt)("h3",{id:"install-manually-using-xcode"},"Install manually using Xcode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When your app is ready, open the BUILD tab."),(0,r.kt)("li",{parentName:"ul"},"Connect your device to your computer with a USB cable."),(0,r.kt)("li",{parentName:"ul"},"From the BUILD tab, click on ",(0,r.kt)("strong",{parentName:"li"},"Install"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Manual installation",src:n(83762).Z,width:"2164",height:"1988"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An archive of your project is created")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Archive creation",src:n(22202).Z,width:"2164",height:"1988"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reveal the generated archive in Finder")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Reveal archive in Finder",src:n(49541).Z,width:"1168",height:"734"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Xcode and go to Menu > Window > Devices and Simulator and drag and drop the generated ipa file in the Installed Apps section.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Devices and Simulators",src:n(60233).Z,width:"2346",height:"1636"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The app is now being installed on your device.")))}s.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?o.createElement(g,i(i({ref:t},u),{},{components:n})):o.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22202:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Archive-creation-9ab385bb6618d380e6fc13d1ada6826e.png"},48439:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Build-Run-Free-Account-4f72d3ebb3da13613714397dd364d052.png"},46308:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Developer-Account-4D-for-iOS-f06e7c698bebae35b2bd3f9b15ef0133.png"},60233:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Devices-and-Simulators-4D-for-iOS-46caf0993b3ec613d8f50b45f0012a7e.png"},15089:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Install-button-build-tab-4D-for-iOS-732c21e87c69c937de9d3aa5092cd8cc.png"},83762:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Manual-installation-4D-for-iOS-006bdd55a7e8b00af0031a276978929e.png"},67831:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},49541:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Reveal-archive-in-Finder-b56d3aef33e96abfa44e8a31910abc6f.png"},19771:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},67891:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Team-ID-General-Section-4D-for-iOS-98b22260cf98f8460a432cce293eec36.png"},88274:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/account-Selection-Free-Account-70391ce3982e842639ee60d9c60ee5ae.png"},94991:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/select-device-Free-Account-7ef38cd1f2bd6ccee926b372f8704cdb.png"}}]);