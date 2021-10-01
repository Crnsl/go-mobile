(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5358],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33483:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},p=void 0,u={unversionedId:"deployment/deploy-on-app-store-archive-and-upload",id:"version-19-R3/deployment/deploy-on-app-store-archive-and-upload",isDocsHomePage:!1,title:"Archive and upload your Project",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R3/deployment/deploy-on-app-store-archive-and-upload.md",sourceDirName:"deployment",slug:"/deployment/deploy-on-app-store-archive-and-upload",permalink:"/go-mobile/pt/docs/deployment/deploy-on-app-store-archive-and-upload",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/deployment/deploy-on-app-store-archive-and-upload.md",version:"19-R3",frontMatter:{id:"deploy-on-app-store-archive-and-upload",title:"Archive and upload your Project"},sidebar:"version-19-R3/docs",previous:{title:"Create App Store record",permalink:"/go-mobile/pt/docs/deployment/deploy-on-app-store-create-appstore-record"}},c=[{value:"STEP 1. Xcode configuration",id:"step-1-xcode-configuration",children:[]},{value:"STEP 2. Get your Team ID",id:"step-2-get-your-team-id",children:[]},{value:"STEP 3. 4D for iOS configuration",id:"step-3-4d-for-ios-configuration",children:[]},{value:"STEP 4. Open your project with Xcode",id:"step-4-open-your-project-with-xcode",children:[]},{value:"STEP 5. Archive your project from Xcode",id:"step-5-archive-your-project-from-xcode",children:[]},{value:"STEP 6. Validate your project",id:"step-6-validate-your-project",children:[]},{value:"STEP 7. Upload to App Store",id:"step-7-upload-to-app-store",children:[]},{value:"STEP 8. Select the build for the App Store",id:"step-8-select-the-build-for-the-app-store",children:[]},{value:"STEP 9. Submit for Review",id:"step-9-submit-for-review",children:[]}],s={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,a.kt)("p",{parentName:"blockquote"},"Archive and upload your project to App Store Connect.")),(0,a.kt)("h2",{id:"step-1-xcode-configuration"},"STEP 1. Xcode configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you have chosen an Apple Developer Account as an individual, your account is immediately available. "),(0,a.kt)("li",{parentName:"ul"},"If your have chosen an Apple Developer Account as an organization, you must wait for Apple validation."),(0,a.kt)("li",{parentName:"ul"},"When your account is accessible, add it to Xcode in Preferences > Accounts."),(0,a.kt)("li",{parentName:"ul"},"Xcode will automatically install the necessary provisioning and certificates. ")),(0,a.kt)("h2",{id:"step-2-get-your-team-id"},"STEP 2. Get your Team ID"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into your Apple Developer Account. You can find your Team ID in Membership.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get your Team ID",src:n(26270).Z})),(0,a.kt)("h2",{id:"step-3-4d-for-ios-configuration"},"STEP 3. 4D for iOS configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Launch 4D for iOS"),(0,a.kt)("li",{parentName:"ul"},"On the SECTIONS tab:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"General: Enter your Team ID")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Team ID",src:n(56282).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Publishing: Enter your production URL")," "),(0,a.kt)("p",null,"(HTTPS is mandatory for deployment)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Publishing",src:n(86455).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the BUILD tab:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Build and Run: Build your Project")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"BuildTab",src:n(62613).Z})),(0,a.kt)("h2",{id:"step-4-open-your-project-with-xcode"},"STEP 4. Open your project with Xcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the 4D for iOS Project Editor's BUILD tab, click on Project > Open the project with Xcode")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Open your project with Xcode",src:n(14001).Z})),(0,a.kt)("h2",{id:"step-5-archive-your-project-from-xcode"},"STEP 5. Archive your project from Xcode"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From Xcode go to the simulator Menu and select ",(0,a.kt)("strong",{parentName:"li"},"Generic iOS Device"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generic iOS Device",src:n(84036).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then from the menu, click on Product and select ",(0,a.kt)("strong",{parentName:"li"},"Archive"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archive your project from Xcode",src:n(23650).Z})),(0,a.kt)("h2",{id:"step-6-validate-your-project"},"STEP 6. Validate your project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"At the end of the archive process, the Organizer window appears with the archive you have just created.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Validate")," button to start the validation process."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Validate your project",src:n(19061).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first step is selecting the App Store distribution options.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App Store distribution options",src:n(15299).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then you need to re-sign your app. Let Xcode manage this by  checking the ",(0,a.kt)("strong",{parentName:"li"},"Automatically manage signing")," option.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Re-sign your app",src:n(90013).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Review your app's content.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"App review",src:n(23630).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If your project passes the validation process, you should see this message:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Validation",src:n(95335).Z})),(0,a.kt)("p",null,"If an error occurs a message will be displayed. These errors must be resolved before attempting the validation process again."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Done"),". This will return you to the Organizer window.")),(0,a.kt)("h2",{id:"step-7-upload-to-app-store"},"STEP 7. Upload to App Store"),(0,a.kt)("p",null,"Once the validation process has been completed, you're ready to add your app to the App Store.   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Upload to App Store")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload to App Store",src:n(80457).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When your project has been successfully uploaded, you'll see this window:")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload successful",src:n(55693).Z})),(0,a.kt)("h2",{id:"step-8-select-the-build-for-the-app-store"},"STEP 8. Select the build for the App Store"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From App Store Connect > App Store > iOS App, select your app and click the ",(0,a.kt)("strong",{parentName:"li"},"+")," button that appears in the Build section")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add build",src:n(99252).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the build you want to submit and click ",(0,a.kt)("strong",{parentName:"li"},"Done"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Build selection",src:n(53544).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Finally, click on the ",(0,a.kt)("strong",{parentName:"li"},"Submit for Review")," button.")),(0,a.kt)("h2",{id:"step-9-submit-for-review"},"STEP 9. Submit for Review"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The final step to submitting your app for review is answering a few quick questions about your app. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Submit for Review",src:n(27259).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When you've finished with the questions, click ",(0,a.kt)("strong",{parentName:"p"},"Submit"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The average App Store review time is around two days!"))))}d.isMDXComponent=!0},99252:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Add-build-app-store-connect-125a6da6dab376c3a5f66a40203ce15e.png"},15299:function(e,t,n){"use strict";t.Z=n.p+"assets/images/App-Store-Distribution-options-0befe561af0cec5bcd8facf7681a7ae7.png"},95335:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Archive-validation-complete-e48a347ebb3ded597e714c4ab9978703.png"},23650:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},62613:function(e,t,n){"use strict";t.Z=n.p+"assets/images/BuildTab-f3ba903eca74e3a84690a816006f2ab4.png"},84036:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},27259:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Export-Compliance-Content-Rights-Advertising-Identifer-832c4c2a41f4dc0e1c51359d67d8dc28.png"},14001:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},19061:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Organizer-Project-Validation-a9c512fbb5ea5c6d545eef18c703a79b.png"},86455:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Publishing-c0eb8dd37534ce4b32a3e5f02cdfd227.png"},90013:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Re-sign-your-App-7b2992f63c7988ffc2ca830228c867e8.png"},23630:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Review-App-52773662f4a864a3a2f74ad29b59385d.png"},53544:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Select-build-app-store-connect-345cdd0f6ab34d09e3ae6e9fd0ae4a4f.png"},26270:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"},56282:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Team-ID-12c375482f73b79029a2a4e683a8fa4f.png"},80457:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Upload-to-AppStore-a119aac5a70e4144ea441d8a36095171.png"},55693:function(e,t,n){"use strict";t.Z=n.p+"assets/images/upload-Successful-d2b342725164592071b6dcaaa791c7f8.png"}}]);