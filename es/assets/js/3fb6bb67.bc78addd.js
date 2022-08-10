"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1281],{92351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=r(87462),i=(r(67294),r(3905));const a={id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},n=void 0,c={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization",title:"4D for iOS project organization",description:"Desde la pesta\xf1a Navegation, ir a Sources.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/es/docs/19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",tags:[],version:"19-R5",frontMatter:{id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},sidebar:"tutorials",previous:{title:"Presentaci\xf3n de Xcode",permalink:"/go-mobile/es/docs/19-R5/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Personalizar su aplicaci\xf3n 4D for iOS",permalink:"/go-mobile/es/docs/19-R5/tutorials/customizing-with-xcode/customize-your-ios-app"}},s={},l=[{value:"El archivo Swift - que se puede utilizar para agregar c\xf3digo personalizado.",id:"el-archivo-swift---que-se-puede-utilizar-para-agregar-c\xf3digo-personalizado",level:3},{value:"El archivo Storyboard - permite personalizar el dise\xf1o de su aplicaci\xf3n.",id:"el-archivo-storyboard---permite-personalizar-el-dise\xf1o-de-su-aplicaci\xf3n",level:3}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Desde la pesta\xf1a Navegation, ir a Sources."),(0,i.kt)("p",null,"Aqu\xed encontrar\xe1 las carpetas Estructura y Formularios. Contienen todos los archivos necesarios para la estructura y los formularios de su base de datos, incluyendo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Launch screen - aparece cuando se inicia la aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Login screen - aparece cuando se activa la autenticaci\xf3n."),(0,i.kt)("li",{parentName:"ul"},"Settings screen - incluye los botones reload y logout."),(0,i.kt)("li",{parentName:"ul"},"Todas las tablas publicadas - archivos correspondientes a los datos autorizados.")),(0,i.kt)("p",null,"En su lugar, encontrar\xe1 un archivo Swift y un archivo Storyboard. Estos archivos se describen a continuaci\xf3n."),(0,i.kt)("h3",{id:"el-archivo-swift---que-se-puede-utilizar-para-agregar-c\xf3digo-personalizado"},"El archivo Swift - que se puede utilizar para agregar c\xf3digo personalizado."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archivo Swift",src:r(80337).Z,width:"1171",height:"933"})),(0,i.kt)("h3",{id:"el-archivo-storyboard---permite-personalizar-el-dise\xf1o-de-su-aplicaci\xf3n"},"El archivo Storyboard - permite personalizar el dise\xf1o de su aplicaci\xf3n."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archivo Storyboard",src:r(39799).Z,width:"1171",height:"933"})),(0,i.kt)("p",null,"A continuaci\xf3n, demos un vistazo a c\xf3mo personalizar la vista de detalle de aplicaci\xf3n Contacts."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?o.createElement(f,n(n({ref:t},u),{},{components:r})):o.createElement(f,n({ref:t},u))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,n[1]=c;for(var l=2;l<a;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39799:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},80337:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);