(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5815],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return f}});var o=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,i=function(e,r){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),l=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||n;return t?o.createElement(g,a(a({ref:r},u),{},{components:t})):o.createElement(g,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,a=new Array(n);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<n;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9821:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=t(22122),i=t(19756),n=(t(67294),t(3905)),a=["components"],c={id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},s=void 0,l={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization",isDocsHomePage:!1,title:"4D for iOS project organization",description:"Desde la pesta\xf1a Navegation, ir a Sources.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/es/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",version:"19-R2",frontMatter:{id:"4d-for-ios-project-organization",title:"4D for iOS project organization"},sidebar:"version-19-R2/tutorials",previous:{title:"Presentaci\xf3n de Xcode",permalink:"/go-mobile/es/docs/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Personalizar su aplicaci\xf3n 4D for iOS",permalink:"/go-mobile/es/docs/tutorials/customizing-with-xcode/customize-your-ios-app"}},u=[{value:"El archivo Swift - que se puede utilizar para agregar c\xf3digo personalizado.",id:"el-archivo-swift---que-se-puede-utilizar-para-agregar-c\xf3digo-personalizado",children:[]},{value:"El archivo Storyboard - permite personalizar el dise\xf1o de su aplicaci\xf3n.",id:"el-archivo-storyboard---permite-personalizar-el-dise\xf1o-de-su-aplicaci\xf3n",children:[]}],p={toc:u};function d(e){var r=e.components,c=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},p,c,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Desde la pesta\xf1a Navegation, ir a Sources."),(0,n.kt)("p",null,"Aqu\xed encontrar\xe1 las carpetas Estructura y Formularios. Contienen todos los archivos necesarios para la estructura y los formularios de su base de datos, incluyendo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Launch screen - aparece cuando se inicia la aplicaci\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Login screen - aparece cuando se activa la autenticaci\xf3n."),(0,n.kt)("li",{parentName:"ul"},"Settings screen - incluye los botones reload y logout."),(0,n.kt)("li",{parentName:"ul"},"Todas las tablas publicadas - archivos correspondientes a los datos autorizados.")),(0,n.kt)("p",null,"En su lugar, encontrar\xe1 un archivo Swift y un archivo Storyboard. Estos archivos se describen a continuaci\xf3n."),(0,n.kt)("h3",{id:"el-archivo-swift---que-se-puede-utilizar-para-agregar-c\xf3digo-personalizado"},"El archivo Swift - que se puede utilizar para agregar c\xf3digo personalizado."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Archivo Swift",src:t(89098).Z})),(0,n.kt)("h3",{id:"el-archivo-storyboard---permite-personalizar-el-dise\xf1o-de-su-aplicaci\xf3n"},"El archivo Storyboard - permite personalizar el dise\xf1o de su aplicaci\xf3n."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Archivo Storyboard",src:t(45150).Z})),(0,n.kt)("p",null,"A continuaci\xf3n, demos un vistazo a c\xf3mo personalizar la vista de detalle de aplicaci\xf3n Contacts."))}d.isMDXComponent=!0},45150:function(e,r,t){"use strict";r.Z=t.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},89098:function(e,r,t){"use strict";r.Z=t.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);