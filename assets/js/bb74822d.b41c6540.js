"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9347],{97168:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=i(87462),o=(i(67294),i(3905));const a={id:"push-notification",title:"Push notifications"},r=void 0,s={unversionedId:"special-features/push-notification",id:"version-19-R8/special-features/push-notification",title:"Push notifications",description:"This section is currently not available in 4D for Android.",source:"@site/versioned_docs/version-19-R8/special-features/push-notification.md",sourceDirName:"special-features",slug:"/special-features/push-notification",permalink:"/go-mobile/docs/special-features/push-notification",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/special-features/push-notification.md",tags:[],version:"19-R8",frontMatter:{id:"push-notification",title:"Push notifications"},sidebar:"docs",previous:{title:"Session management",permalink:"/go-mobile/docs/special-features/session-management"},next:{title:"Deep Linking",permalink:"/go-mobile/docs/special-features/deep-linking"}},c={},l=[{value:"What is a push notification?",id:"what-is-a-push-notification",level:2},{value:"Technical architecture",id:"technical-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Basic example to manage push notifications",id:"basic-example-to-manage-push-notifications",level:2},{value:"Push notification with data synchronization",id:"push-notification-with-data-synchronization",level:2},{value:"Data synchronization with a notification opening a record",id:"data-synchronization-with-a-notification-opening-a-record",level:3},{value:"Data synchronization with a simple notification",id:"data-synchronization-with-a-simple-notification",level:3},{value:"Windows Configuration",id:"windows-configuration",level:2},{value:"MobileApps folder",id:"mobileapps-folder",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"4D for Android",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section is currently not available in 4D for Android.")),(0,o.kt)("h2",{id:"what-is-a-push-notification"},"What is a push notification?"),(0,o.kt)("p",null,"On a mobile phone, a push notification is an alert message, received via an application, that you can open, delete, allow or block. It can be very useful for example to notify your app users that a new version is available."),(0,o.kt)("p",null,"But what about the architecture to implement, in order to integrate this functionality into a mobile application? And what is the process of a push notification, from creation to display on the user's mobile?"),(0,o.kt)("h2",{id:"technical-architecture"},"Technical architecture"),(0,o.kt)("p",null,"Here are the different elements needed to create, send and receive a mobile push notification:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Push notification process",src:i(44167).Z,width:"2317",height:"1600"})),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"In order to send push notifications, an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthKey_XXXYYY.p8")," authentication file from Apple is required. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate and download a .p8 key file as described in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Generate_p8.md"},"this documentation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("a",{parentName:"p",href:"../project-definition/publishing"},"Publishing")," page, check the ",(0,o.kt)("strong",{parentName:"p"},"Push notifications")," option and select your certificate in the mobile project."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publishing section",src:i(76697).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"basic-example-to-manage-push-notifications"},"Basic example to manage push notifications"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/tree/master"},"4D Mobile App Server")," component provides methods to push notifications to one or multiple recipients. For detailed information, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},"PushNotification component documentation"),"."),(0,o.kt)("p",null,"Here is a simple example of push notification sent to ",(0,o.kt)("inlineCode",{parentName:"p"},"test@4d.com"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new() \n$notification:=New object \n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$response:=$pushNotification.send($notification;"test@4d.com")\n\n')),(0,o.kt)("p",null,"It's as simple as that!"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,o.kt)("strong",{parentName:"a"},"4D Mobile App Server")," component")," to easily adapt the push notifications to your own needs. Feel free to use it and to pick the most relevant aspects for your app. And of course, all contributors are welcome to this project, through feedback, bug reports and even better: pull requests.")),(0,o.kt)("h2",{id:"push-notification-with-data-synchronization"},"Push notification with data synchronization"),(0,o.kt)("p",null,"With a push notification, you can also launch a synchronization to update your data."),(0,o.kt)("p",null,"For example, if your application has a delivery tracking option, the delivery information will be updated in the database thanks to a notification sent to the customer. This notification, containing a request to synchronize the data, will enable the customer to get the modified data on their smartphone."),(0,o.kt)("p",null,"To do so using the ",(0,o.kt)("inlineCode",{parentName:"p"},"4D Mobile App Server")," component, you need to specify whether or not you want to force data synchronization in your push notification. Therefore, simply provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object."),(0,o.kt)("h3",{id:"data-synchronization-with-a-notification-opening-a-record"},"Data synchronization with a notification opening a record"),(0,o.kt)("p",null,"By default, a notification opening a record automatically triggers a data synchronization."),(0,o.kt)("p",null,"For example, in a Contact app, if a contact\u2019s specific information (",(0,o.kt)("em",{parentName:"p"},"i.e.")," a contact\u2019s record, such as the address or the phone number) has been modified, the user receives a notification that automatically opens the relevant record and synchronizes the data contained in the record. When the user opens the notification, the contact\u2019s information is fully updated."),(0,o.kt)("p",null,"Here's an example of the default behaviour, a ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," request with the ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For ",(0,o.kt)("inlineCode",{parentName:"p"},"open()")," method exclusively, this is the default behaviour. As a result, if you don't specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," boolean value, it is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," by default.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("p",null,"However, you can also choose not to force a data synchronization, by preventing ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; False)\n\n$entity:=ds.Employees.get("456456")\n$response:=$pushNotification.open($entity; $notification; $recipients)\n\n')),(0,o.kt)("h3",{id:"data-synchronization-with-a-simple-notification"},"Data synchronization with a simple notification"),(0,o.kt)("p",null,"You can also request a synchronization for a simple notification without opening a specific record. For example, some new entries have been added. You can then inform your user and update the data with no manipulation on their part."),(0,o.kt)("p",null,"Here is a code example that you can also use with other methods, as long as you fill the ",(0,o.kt)("inlineCode",{parentName:"p"},"userInfo")," object with ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSynchro")," value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-4d"},'\n$pushNotification:=MobileAppServer.PushNotification.new()\n\n$notification:=New object\n$notification.title:="This is title" \n$notification.body:="Here is the content of this notification" \n$notification.userInfo:=New object("dataSynchro"; True)\n\n$response:=$pushNotification.send($notification; $recipients)\n\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data synchronization animation",src:i(57998).Z,width:"360",height:"720"})),(0,o.kt)("h2",{id:"windows-configuration"},"Windows Configuration"),(0,o.kt)("p",null,"Windows users need to download the ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se/download.html"},"last CURL version")," to work on the variables of the environment of their machine. Or they can insert curl.exe in the Resources folder of their production database."),(0,o.kt)("h2",{id:"mobileapps-folder"},"MobileApps folder"),(0,o.kt)("p",null,"Whether you're working on Windows or on macOS, you need to copy the following files from your development project to your production project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/AuthKey_XXXX.P8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"4DBASE/MobileApps/ID.BundleID/manifest.json"))))}u.isMDXComponent=!0},3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>d});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(i),d=o,f=h["".concat(c,".").concat(d)]||h[d]||u[d]||a;return i?n.createElement(f,r(r({ref:t},p),{},{components:i})):n.createElement(f,r({ref:t},p))}));function d(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},44167:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/4D-for-ios-push-notification-1ba2c9f12090cef619cebe2a419431e3.png"},76697:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/push-notification-publishing-section-f2975b2a01f145baf627056df0614b45.png"},57998:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/pushandSynchro-f7cc0281002b632433be23a623298cd9.gif"}}]);