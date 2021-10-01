(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5617],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return n?o.createElement(v,a(a({ref:t},s),{},{components:n})):o.createElement(v,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50510:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=n(22122),r=n(19756),i=(n(67294),n(3905)),a=["components"],d={id:"from-your-android-device-and-android-studio",title:"From your Android device"},l=void 0,u={unversionedId:"debug/from-your-android-device-and-android-studio",id:"version-19-R3/debug/from-your-android-device-and-android-studio",isDocsHomePage:!1,title:"From your Android device",description:"To make sure your development machine and your phone are linked, only one action is needed on the smartphone and another one in the project editor.",source:"@site/versioned_docs/version-19-R3/debug/from-your-android-device-and-android-studio.md",sourceDirName:"debug",slug:"/debug/from-your-android-device-and-android-studio",permalink:"/go-mobile/fr/docs/debug/from-your-android-device-and-android-studio",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/debug/from-your-android-device-and-android-studio.md",version:"19-R3",frontMatter:{id:"from-your-android-device-and-android-studio",title:"From your Android device"},sidebar:"version-19-R3/docs",previous:{title:"From your iPhone and Xcode",permalink:"/go-mobile/fr/docs/debug/from-your-iphone-and-xcode"},next:{title:"Installing on your iOS device",permalink:"/go-mobile/fr/docs/deployment/testing-on-your-device"}},s=[{value:"Android Studio configuration",id:"android-studio-configuration",children:[]}],c={toc:s};function p(e){var t=e.components,d=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To make sure your development machine and your phone are linked, only one action is needed on the smartphone and another one in the ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/debug/from-project-editor"},"project editor"),"."),(0,i.kt)("p",null,"On your device, you need to ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options#enable"},"enable ",(0,i.kt)("strong",{parentName:"a"},"USB Debugging"))," in the Developer Options settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dev-options",src:n(47428).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you can\u2019t find the Developer Options item in your settings, simply click 7 times on the build number."))),(0,i.kt)("p",null,"If you can\u2019t find it or if you don\u2019t understand it, simply read ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/debug/dev-options"},"this Android user guide"),", which explains how to do it depending on the Android versions."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"notes")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To connect and debug with a Google device using Windows, you need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/win-usb"},"Google USB driver"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you're developing on macOS , then you shouldn't need a USB driver. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For the other devices, download and manually install a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/oem-usb"},"OEM USB driver")," corresponding to your device."))))),(0,i.kt)("h3",{id:"android-studio-configuration"},"Android Studio configuration"),(0,i.kt)("p",null,"For Android developers, you also need to configure your Android Studio from the SDK Tools tab. So make sure you have checked and installed the following elements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Build Tools 31")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Command-line Tools (latest)"),". By selecting this checkbox, you will be able to visualize all your virtual devices directly from the 4D mobile Project Editor."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android Emulator")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Android SDK Platform Tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Google USB driver")," (only on Windows)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Intel x86 Emulator Accelerator (HAXM installer)"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Android-Studio-Settings",src:n(61014).Z})))}p.isMDXComponent=!0},61014:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AndroidCaptureSetting-a46ad214424a5e76fdcd08d0a66759a3.png"},47428:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dev-options-debug_2x-1bd8dc12803e9e18b7b0baf538ef1f99.png"}}]);