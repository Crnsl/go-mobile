"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5411],{4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={id:"deployment-in-house-distribute",title:"Distribuir una aplicaci\xf3n interna"},l=void 0,o={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute",title:"Distribuir una aplicaci\xf3n interna",description:"OBJETIVOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/es/docs/19-R4/tutorials/deploying-in-house/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R4",frontMatter:{id:"deployment-in-house-distribute",title:"Distribuir una aplicaci\xf3n interna"},sidebar:"version-19-R4/tutorials",previous:{title:"Archivar y exportar un proyecto",permalink:"/go-mobile/es/docs/19-R4/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"Crear una ficha en App Store",permalink:"/go-mobile/es/docs/19-R4/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},s={},c=[{value:"PASO 1. Suba su aplicaci\xf3n",id:"paso-1-suba-su-aplicaci\xf3n",level:2},{value:"PASO 2. Cree el enlace de instalaci\xf3n",id:"paso-2-cree-el-enlace-de-instalaci\xf3n",level:2},{value:"PASO 3. Instale su aplicaci\xf3n en iOS",id:"paso-3-instale-su-aplicaci\xf3n-en-ios",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,a.kt)("p",{parentName:"blockquote"},"Subir su aplicaci\xf3n a un servidor seguro.")),(0,a.kt)("h2",{id:"paso-1-suba-su-aplicaci\xf3n"},"PASO 1. Suba su aplicaci\xf3n"),(0,a.kt)("p",null,"Suba su aplicaci\xf3n a un servidor seguro:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"recursos (imagen de visualizaci\xf3n e imagen de tama\xf1o completo)"),(0,a.kt)("li",{parentName:"ul"},"archivo ",(0,a.kt)("inlineCode",{parentName:"li"},"manifest.plist")),(0,a.kt)("li",{parentName:"ul"},"archivo ",(0,a.kt)("inlineCode",{parentName:"li"},".ipa"))),(0,a.kt)("p",null,"Puede utilizar cualquier servicio de almacenamiento en la nube para distribuir su aplicaci\xf3n siempre que est\xe9 protegida (Dropbox, Google Drive, etc.)."),(0,a.kt)("p",null,":::nota"),(0,a.kt)("p",null,"Su recurso y sus URL ipa deben coincidir con las URL definidas en su archivo ",(0,a.kt)("inlineCode",{parentName:"p"},"manifest.plist"),"."),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"paso-2-cree-el-enlace-de-instalaci\xf3n"},"PASO 2. Cree el enlace de instalaci\xf3n"),(0,a.kt)("p",null,"Cree un ",(0,a.kt)("strong",{parentName:"p"},"enlace de servicios ITMS"),"(iTUnes Music Store) con la direcci\xf3n web completa de su archivo manifiesto como par\xe1metro:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,a.kt)("p",null,"Este enlace se puede utilizar al enviar correos electr\xf3nicos, anidados en una p\xe1gina html o incluso dentro de un c\xf3digo QR."),(0,a.kt)("p",null,"Aqu\xed un ejemplo simple:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Contact demo app install",src:n(58233).Z,width:"497",height:"625"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"El c\xf3digo QR utilizado para esta documentaci\xf3n no est\xe1 activo.")),(0,a.kt)("h2",{id:"paso-3-instale-su-aplicaci\xf3n-en-ios"},"PASO 3. Instale su aplicaci\xf3n en iOS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Instale la aplicaci\xf3n haciendo clic en el enlace o escaneando un c\xf3digo QR")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scan and install",src:n(13655).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cuando abre por primera vez una aplicaci\xf3n empresarial que instal\xf3 manualmente, se mostrar\xe1 una notificaci\xf3n que indica que el desarrollador de la aplicaci\xf3n no es de confianza en su dispositivo.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ignore este mensaje y haga clic en ",(0,a.kt)("strong",{parentName:"p"},"Cancel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'En Reglas > General > Gesti\xf3n de perfiles & Gesti\xf3n de dispositivo, en el encabezado "Enterprise App", se lista el perfil del desarrollador.'))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untrust developer",src:n(43557).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduzca el nombre del perfil del desarrollador para que sea reconocido como confiable.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Trust-confirmation",src:n(84135).Z,width:"2443",height:"2149"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Luego puede ir a su aplicaci\xf3n y abrirla.")),(0,a.kt)("p",null,"Felicitaciones... ahora puede distribuir su primera aplicaci\xf3n interna."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(b,l(l({ref:t},p),{},{components:n})):i.createElement(b,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58233:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},13655:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},84135:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},43557:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);