(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5240],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},59328:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"create-your-first-app",title:"Create your first mobile app with 4D"},s=void 0,p={unversionedId:"tutorials/create-your-first-app",id:"version-19-R2/tutorials/create-your-first-app",isDocsHomePage:!1,title:"Create your first mobile app with 4D",description:"Welcome to the 4D mobile application builder. This tutorial will let you dive right into mobile development for iOS and Android with 4D.",source:"@site/versioned_docs/version-19-R2/tutorials/create-your-first-app.md",sourceDirName:"tutorials",slug:"/tutorials/create-your-first-app",permalink:"/go-mobile/docs/tutorials/create-your-first-app",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/create-your-first-app.md",version:"19-R2",frontMatter:{id:"create-your-first-app",title:"Create your first mobile app with 4D"},sidebar:"version-19-R2/tutorials",next:{title:"Custom Login Form",permalink:"/go-mobile/docs/tutorials/custom-login-form"}},c=[{value:"STEP 1. Download the Starter project",id:"step-1-download-the-starter-project",children:[]},{value:"STEP 2. Create the mobile project",id:"step-2-create-the-mobile-project",children:[]},{value:"STEP 3. General page",id:"step-3-general-page",children:[]},{value:"STEP 4. Structure page",id:"step-4-structure-page",children:[]},{value:"STEP 5. Labels &amp; Icons page",id:"step-5-labels--icons-page",children:[]},{value:"STEP 6. Forms",id:"step-6-forms",children:[]},{value:"STEP 7. Build the app",id:"step-7-build-the-app",children:[]},{value:"Where to go from here?",id:"where-to-go-from-here",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the 4D mobile application builder. This tutorial will let you dive right into mobile development for iOS and Android with 4D. "),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Reminder")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Before starting, please check that your configuration meets hardware and software ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/getting-started/requirements"},"requirements")," for 4D mobile project development.  "))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scenario:"),' You are a commercial business manager and you want to consult your contact information on the go. We are going to create a mobile directory app for iOS and/or Android to search for contact names from a list and then view the details of each contact. We\'ll call it "Contact". '),(0,r.kt)("h2",{id:"step-1-download-the-starter-project"},"STEP 1. Download the Starter project"),(0,r.kt)("p",null,"Download and unzip our 4D Starter project, which contains a database file and a project icon (but no mobile project yet).  "),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip"},"Starter project")),(0,r.kt)("h2",{id:"step-2-create-the-mobile-project"},"STEP 2. Create the mobile project"),(0,r.kt)("p",null,'Launch your 4D application and select "Contact.4DProject". It contains a very simple database structure using a single table.'),(0,r.kt)("p",null,"Go to ",(0,r.kt)("strong",{parentName:"p"},"New > Mobile project"),". In the Welcome screen, give your mobile project a name. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Name",src:a(64784).Z})),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"."),(0,r.kt)("p",null,"Additional components are required to develop an Android project. Click ",(0,r.kt)("strong",{parentName:"p"},"OK")," to download them:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(29713).Z})),(0,r.kt)("h2",{id:"step-3-general-page"},"STEP 3. General page"),(0,r.kt)("p",null,"Here, you configure your app's primary information:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(64431).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Target:")," Mobile platform(s) to build")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are on Windows, only ",(0,r.kt)("strong",{parentName:"p"},"Android")," is available. If you are on macOS, you can select both ",(0,r.kt)("strong",{parentName:"p"},"Android")," and ",(0,r.kt)("strong",{parentName:"p"},"iOS")," targets. "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organization:")," Name of your company and identifier of the application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Product:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:"),' Name of the application. Let\u2019s call this one "Contact".'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID:")," (Bundle ID) this area is automatically generated as a composition of your organization identifier and product name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version")," and ",(0,r.kt)("strong",{parentName:"li"},"Copyright:")," Leave the version as 1.0 and define your app's copyright. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icons:")," Select a target OS and drag and drop icons for your app into the area."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:")," Automatically filled from the user name on your computer. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team"),": Developer team reference from your developer account. You can leave it empty to build your application on the Simulator only.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"General",src:a(91293).Z})),(0,r.kt)("h2",{id:"step-4-structure-page"},"STEP 4. Structure page"),(0,r.kt)("p",null,"This is where you define the subset of data to expose to mobile devices. Select the table(s) in the left area and the field(s) in the right area. "),(0,r.kt)("p",null,"For our example, select ",(0,r.kt)("strong",{parentName:"p"},"ID"),", ",(0,r.kt)("strong",{parentName:"p"},"First Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Last Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Job"),", ",(0,r.kt)("strong",{parentName:"p"},"Company"),", ",(0,r.kt)("strong",{parentName:"p"},"Phone"),", ",(0,r.kt)("strong",{parentName:"p"},"Notes"),", and ",(0,r.kt)("strong",{parentName:"p"},"Photo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure",src:a(9470).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We highly recommend publishing your primary key in order to identify each record of the database.")),(0,r.kt)("h2",{id:"step-5-labels--icons-page"},"STEP 5. Labels & Icons page"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/project-definition/data"},(0,r.kt)("strong",{parentName:"a"},"Data"))," and ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/docs/project-definition/actions"},(0,r.kt)("strong",{parentName:"a"},"Actions"))," pages allow to configure your app's data and to trigger code on the server. To keep this example simple, we will use default behaviors. "))),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons")," page. Here you can define some labels and icons that will be used throughout the app for the tables, fields, and relations. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Short labels and long labels are automatically used by the app depending on the available space. "),(0,r.kt)("li",{parentName:"ul"},"To define a table icon, click on the ",(0,r.kt)("strong",{parentName:"li"},"Icons")," column for the table. The icon library appears and you can select an icon to illustrate the table or field. You can also opt to leave the icon column empty, a default icon will be generated. "),(0,r.kt)("li",{parentName:"ul"},"Select at least one icon for your fields: the editor will generate default icons for all remaining fields. You can also simply leave all fields empty to not display any field icons. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Icons &amp; Labels",src:a(48414).Z})),(0,r.kt)("h2",{id:"step-6-forms"},"STEP 6. Forms"),(0,r.kt)("p",null,"We're almost done, but we still need to decide on the app's layout. There are both List and Details forms to choose from."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a List form template to display your table as a list. For our Contact app, let\u2019s use the ",(0,r.kt)("strong",{parentName:"li"},"Profile")," template.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form template",src:a(74395).Z})),(0,r.kt)("p",null,"At this point, the bottom of the configuration window has changed from template selection to content definition."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop the fields you want displayed onto the template, ",(0,r.kt)("i",null,"i.e."),", Last Name into the search and Title fields. The Search and Section fields are optional, leave the Section field empty for the moment.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form content",src:a(69903).Z})),(0,r.kt)("p",null,"And finally, we'll define the Detail form. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select a template that is best suited for your app. For our Contact app, let\u2019s use the ",(0,r.kt)("strong",{parentName:"li"},"Visual Contact")," template.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form template",src:a(93059).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Drag and drop the content onto the appropriate places on the detail form template, ",(0,r.kt)("i",null,"i.e."),", First Name, Last Name, and Photo.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form content",src:a(41263).Z})),(0,r.kt)("h2",{id:"step-7-build-the-app"},"STEP 7. Build the app"),(0,r.kt)("p",null,"Now the fun part! It's time to build your app and test it on the Simulator to see the final result!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Build")," tab."),(0,r.kt)("li",{parentName:"ul"},"Select a device to use as a Simulator by clicking on the device button."),(0,r.kt)("li",{parentName:"ul"},"Click  ",(0,r.kt)("strong",{parentName:"li"},"Build and Run"),"."),(0,r.kt)("li",{parentName:"ul"},"Wait a few seconds and... voila! Your mobile app is alive!")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:a(41530).Z})),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here?"),(0,r.kt)("p",null,"We've covered basic app creation in this tutorial, and you should now be able to create simple apps on your own. Of course, many other options and features are available. Right now, you can click on ",(0,r.kt)("strong",{parentName:"p"},"Final Project")," below to download the final Contact app."),(0,r.kt)("div",null,(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip"},"FINAL PROJECT")))}d.isMDXComponent=!0},41530:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Build-the-app-simulator-3e333cd7270b3db48d9d13ddc08eca16.png"},91293:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Contact-app-general-section-4D-for-iOS-415929c9b37bd87cad05677393c72379.png"},48414:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Contact-app-icons-labels-section-4D-for-iOS-6304c32db85ce66c2531ef967fadc4e2.png"},9470:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Contact-app-structure-section-4D-for-iOS-db8f77b9d72adb1da7ca60ac395d5e14.png"},41263:function(e,t,a){"use strict";t.Z=a.p+"assets/images/DetailformContent-form-section-4D-for-iOS-cf5589e87a43cd76af8b2da9e95b7196.png"},93059:function(e,t,a){"use strict";t.Z=a.p+"assets/images/DetailformTemplate-form-section-4D-for-iOS-bea0d9cad18badd0d39904aeef5c7f12.png"},69903:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ListformContent-form-section-4D-for-iOS-53751545293f31d01732505adf0da501.png"},74395:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ListformTemplate-form-section-4D-for-iOS-b4e534d35ca6502c7284f53a90db723e.png"},29713:function(e,t,a){"use strict";t.Z=a.p+"assets/images/install-android-d1cf84f8b66e0e3a9542a3a690ccd020.png"},64431:function(e,t,a){"use strict";t.Z=a.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"},64784:function(e,t,a){"use strict";t.Z=a.p+"assets/images/new-project-0086ec2255f336ef09eac7d109da09c4.png"}}]);