(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1318],{3905:function(t,e,i){"use strict";i.d(e,{Zo:function(){return p},kt:function(){return d}});var n=i(67294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):r(r({},e),t)),i},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(i),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return i?n.createElement(f,r(r({ref:e},p),{},{components:i})):n.createElement(f,r({ref:e},p))}));function d(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=i.length,r=new Array(a);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},56236:function(t,e,i){"use strict";i.r(e),i.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=i(22122),o=i(19756),a=(i(67294),i(3905)),r=["components"],l={id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},s=void 0,c={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R4/tutorials/customizing-with-xcode/customize-your-ios-app",isDocsHomePage:!1,title:"Customize your 4D for iOS App",description:"Now, let's do some storyboard modification ... from simple to complex.",source:"@site/versioned_docs/version-19-R4/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/customize-your-ios-app",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/customizing-with-xcode/customize-your-ios-app.md",version:"19-R4",frontMatter:{id:"customize-your-ios-app",title:"Customize your 4D for iOS App"},sidebar:"version-19-R4/tutorials",previous:{title:"4D for iOS project organization",permalink:"/go-mobile/ja/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecting your Apple Developer Program",permalink:"/go-mobile/ja/docs/tutorials/developer-program/selecting-your-developer-program"}},p=[{value:"STEP 1. Simple label modification",id:"step-1-simple-label-modification",children:[]},{value:"STEP 2. Change profile picture position",id:"step-2-change-profile-picture-position",children:[]},{value:"STEP 3. Update profile picture constraints",id:"step-3-update-profile-picture-constraints",children:[]},{value:"STEP 4. Update label positions and constraints",id:"step-4-update-label-positions-and-constraints",children:[]}],u={toc:p};function m(t){var e=t.components,l=(0,o.Z)(t,r);return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Now, let's do some storyboard modification ... from simple to complex."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:i(65999).Z})),(0,a.kt)("h2",{id:"step-1-simple-label-modification"},"STEP 1. Simple label modification"),(0,a.kt)("p",null,"We'll start by modifying a label's font and color:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," file from the Navigation tab. "),(0,a.kt)("li",{parentName:"ul"},"Click on the First Name label (you can also select it from the interface builder or the left pane)."),(0,a.kt)("li",{parentName:"ul"},"Select the Attributes inspector pane from the Utility area.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector",src:i(90307).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the font from Helvetica Neue Bold to Futura Bold. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector font",src:i(15683).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can also change the color of the font from the same pane.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Attributes inspector color",src:i(79811).Z})),(0,a.kt)("h2",{id:"step-2-change-profile-picture-position"},"STEP 2. Change profile picture position"),(0,a.kt)("p",null,"All 4D for iOS templates use constraints for the app's elements to be well displayed on all devices."),(0,a.kt)("p",null,"In the ",(0,a.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard")," file, the picture, First Name, and Last Name labels are all currently center aligned. "),(0,a.kt)("p",null,"Let's change it to appear like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(49868).Z})),(0,a.kt)("p",null,"First, vertically align the picture and drag the First Name and Last Name labels to the right of the picture."),(0,a.kt)("p",null,"Next, select the image and go to the Size attributes pane from the Utility area. Change the X value from 161.67 to 40.67 and the Y value from 28 to 79."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture position",src:i(62914).Z})),(0,a.kt)("p",null,"As you can see, the position has changed but Xcode is displaying yellow lines...why?\nThese yellow lines represent constraints which are no longer valid."),(0,a.kt)("h2",{id:"step-3-update-profile-picture-constraints"},"STEP 3. Update profile picture constraints"),(0,a.kt)("p",null,"To vertically align the picture in the center in the Superview (the view which contains it), we need to delete the existing constraints and add new ones."),(0,a.kt)("p",null,"The image currently has the following constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Width Equals: A width of 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Height Equals: A height of 78 pixels."),(0,a.kt)("li",{parentName:"ul"},"Align Center X: Centers the image on a previously defined horizontal axis."),(0,a.kt)("li",{parentName:"ul"},"Top Space: An amount of space from the top of the image to the top of the view."),(0,a.kt)("li",{parentName:"ul"},"Bottom space to ",(0,a.kt)("inlineCode",{parentName:"li"},"<First Name>"),": The previously defined space between the First Name label and the image.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture constraints",src:i(22874).Z})),(0,a.kt)("p",null,"Delete all of the constraints except Width and Height (you'll modify these later from the Size inspector in the Constraints section). The picture outline should be now in red because the constraints are missing."),(0,a.kt)("p",null,"Click on the Align button (at the bottom of the Interface Builder window) and check the ",(0,a.kt)("strong",{parentName:"p"},"Vertically in Container")," checkbox."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture Align",src:i(83941).Z})),(0,a.kt)("p",null,"Next, click on the ",(0,a.kt)("strong",{parentName:"p"},"Add New Constraints")," button and add a leading space constraint (the left constraint)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Profil picture new constraints",src:i(8042).Z})),(0,a.kt)("p",null,"At this point, all the profile picture constraints should be blue."),(0,a.kt)("p",null,"Congratulations! Your profile picture is now well positioned with the correct constraints."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TIPS")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"To create a constraint between two views, press Ctrl and drag one of the views to the other. When you release the mouse button, the Interface Builder displays a menu with a list of possible constraints.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can delete constraints by either selecting them from the Size inspector or from the Interface Builder.")))),(0,a.kt)("h2",{id:"step-4-update-label-positions-and-constraints"},"STEP 4. Update label positions and constraints"),(0,a.kt)("h4",{id:"now-lets-work-on-the-first-name-label"},"Now, let's work on the First Name label."),(0,a.kt)("p",null,"We'll begin by changing the position and width:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the First Name label from the Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Next, change the Width from 386 to 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 28 to 79 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label position",src:i(13863).Z})),(0,a.kt)("p",null,"Modify the remaining constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete the leading and the bottom space constraints from the Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Add a leading space constraint by clicking on the ",(0,a.kt)("strong",{parentName:"li"},"Add New Constraints")," button to position the First Name label to the right of the Profile picture."),(0,a.kt)("li",{parentName:"ul"},"Press Ctrl and drag the First Name label to the Profile picture. Select the top constraint in the menu to top align both elements.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"First Name Label top constraint",src:i(28458).Z})),(0,a.kt)("h4",{id:"finally-well-work-on-the-last-name-label"},"Finally, we'll work on the Last Name label."),(0,a.kt)("p",null,"Change the position and width:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the Last Name label from the Interface Builder."),(0,a.kt)("li",{parentName:"ul"},"Change the width from 386 to 267 pixels."),(0,a.kt)("li",{parentName:"ul"},"Change the X value from 8 to 127 pixels and the Y value from 144.33 to 118.33 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label position",src:i(25008).Z})),(0,a.kt)("p",null,"Modify the remaining constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete the leading space constraints from the Size inspector."),(0,a.kt)("li",{parentName:"ul"},"Add a leading space and top space constraints by clicking on the Add New Constraints button. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Last Name Label constraint",src:i(99190).Z})),(0,a.kt)("p",null,"Both of your name labels are now repostioned. "),(0,a.kt)("p",null,"Let's see the results in the Simulator !"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simulator result",src:i(15843).Z})),(0,a.kt)("p",null,"Hmmmm. That's not exactly the result we wanted ..."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the First Name and Last Name labels and change the alignment from center to left in the Attributes inspector. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Labels Alignment",src:i(24111).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Next, select the Profile picture and double click on the leading space constraint."),(0,a.kt)("li",{parentName:"ul"},"Change the Constant value from 40.67 to 80 pixels.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Constraints adjustments",src:i(13487).Z})),(0,a.kt)("p",null,"Much better! Now all constraints are working and the labels aren't breaking other constraints."),(0,a.kt)("p",null,"As you can see, customizing your app is very simple!"))}m.isMDXComponent=!0},90307:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},79811:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},15683:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},13487:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},13863:function(t,e,i){"use strict";e.Z=i.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},28458:function(t,e,i){"use strict";e.Z=i.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},24111:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},99190:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},25008:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},83941:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},22874:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},8042:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},62914:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},65999:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},49868:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},15843:function(t,e,i){"use strict";e.Z=i.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);