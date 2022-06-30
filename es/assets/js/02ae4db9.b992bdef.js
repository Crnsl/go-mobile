"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1787],{27864:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const l={id:"deep-linking",title:"Deep Linking"},r=void 0,o={unversionedId:"special-features/deep-linking",id:"version-19-R4/special-features/deep-linking",title:"Deep Linking",description:"This feature is currently not available in 4D for Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/special-features/deep-linking.md",sourceDirName:"special-features",slug:"/special-features/deep-linking",permalink:"/go-mobile/es/docs/19-R4/special-features/deep-linking",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/special-features/deep-linking.md",tags:[],version:"19-R4",frontMatter:{id:"deep-linking",title:"Deep Linking"},sidebar:"version-19-R4/docs",previous:{title:"Push notifications",permalink:"/go-mobile/es/docs/19-R4/special-features/push-notification"},next:{title:"Desde el editor del proyecto",permalink:"/go-mobile/es/docs/19-R4/debug/from-project-editor"}},s={},c=[{value:"Comparaci\xf3n de los modos deep linking",id:"comparaci\xf3n-de-los-modos-deep-linking",level:2},{value:"Esquema URL",id:"esquema-url",level:3},{value:"Enlaces universales",id:"enlaces-universales",level:3},{value:"Esquema URL personalizado",id:"esquema-url-personalizado",level:2},{value:"Esquema de URL personalizado en el editor de proyetos",id:"esquema-de-url-personalizado-en-el-editor-de-proyetos",level:3},{value:"Utilizar esquemas URL en su aplicaci\xf3n m\xf3vil",id:"utilizar-esquemas-url-en-su-aplicaci\xf3n-m\xf3vil",level:3},{value:"Enlaces universales",id:"enlaces-universales-1",level:2},{value:"Enlaces universales en el editor de proyectos",id:"enlaces-universales-en-el-editor-de-proyectos",level:3},{value:"Deep Linking y notificaciones Push",id:"deep-linking-y-notificaciones-push",level:2}],p={toc:c};function d(e){let{components:a,...l}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"rmaci\xf3n 4D for Android")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This feature is currently not available in 4D for Android."))),(0,i.kt)("p",null,"Gracias a la funcionalidad ",(0,i.kt)("strong",{parentName:"p"},"deep linking"),", puede compartir el contenido que est\xe1 viendo en ese momento con todos sus colegas. Aqu\xed hay una ilustraci\xf3n que demuestra deep linking:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking animation",src:n(51526).Z,width:"722",height:"450"})),(0,i.kt)("p",null,'Hay dos maneras de implementar "deep linking" en IOS: ',(0,i.kt)("strong",{parentName:"p"},'"URL scheme"')," y ",(0,i.kt)("strong",{parentName:"p"},'"Universal Links"'),'. Mientras que los "URL schemes" son un m\xe9todo bien conocido del "deep linking", los "Universal links" son el nuevo m\xe9todo que Apple ha implementado para conectar f\xe1cilmente su p\xe1gina web y su aplicaci\xf3n bajo el mismo enlace.'),(0,i.kt)("h2",{id:"comparaci\xf3n-de-los-modos-deep-linking"},"Comparaci\xf3n de los modos deep linking"),(0,i.kt)("h3",{id:"esquema-url"},"Esquema URL"),(0,i.kt)("p",null,"Esta es una comparaci\xf3n entre las dos opciones disponibles en el editor de proyectos:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"VENTAJAS"),(0,i.kt)("th",{parentName:"tr",align:null},"DESVENTAJAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F\xe1cil de implementar"),(0,i.kt)("td",{parentName:"tr",align:null},"Siempre requiere permiso")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No se requiere un backend adicional"),(0,i.kt)("td",{parentName:"tr",align:null},"No funciona si la aplicaci\xf3n no est\xe1 instalada")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"No funciona en Android")))),(0,i.kt)("h3",{id:"enlaces-universales"},"Enlaces universales"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"VENTAJAS"),(0,i.kt)("th",{parentName:"tr",align:null},"DESVENTAJAS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No requiere permiso"),(0,i.kt)("td",{parentName:"tr",align:null},"Se necesita un backend est\xe1tico con SSL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"No abre el navegador"),(0,i.kt)("td",{parentName:"tr",align:null},"M\xe1s complejo de implementar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Compatible con Android"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URL de retroceso si la aplicaci\xf3n no est\xe1 instalada"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"esquema-url-personalizado"},"Esquema URL personalizado"),(0,i.kt)("p",null,"Al nivel m\xe1s simple, los esquemas de URL permiten a los usuarios abrir una aplicaci\xf3n desde otras aplicaciones. Pero el verdadero poder de los esquemas URL est\xe1 en la capacidad de realizar acciones espec\xedficas a medida que se abre la aplicaci\xf3n."),(0,i.kt)("h3",{id:"esquema-de-url-personalizado-en-el-editor-de-proyetos"},"Esquema de URL personalizado en el editor de proyetos"),(0,i.kt)("p",null,"Es muy simple incluir un esquema URL para su aplicaci\xf3n m\xf3vil. Veamos un ejemplo:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," de la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R4/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," ")," y seleccione el alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidad - para compartir el contenido de un formulario detallado"),(0,i.kt)("li",{parentName:"ul"},"tabla - para compartir un formulario listado"))),(0,i.kt)("li",{parentName:"ol"},"Marcar la funcionalidad ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," del editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"La informaci\xf3n del esquema URL se llena autom\xe1ticamente con el nombre de la aplicaci\xf3n que ha definido previamente en la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R4/project-definition/general"},(0,i.kt)("strong",{parentName:"a"},"General")),". Sin embargo, a\xfan puede editarlo:")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deep linking Project editor",src:n(87391).Z,width:"2164",height:"1988"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Llene su m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// M\xe9todo base On Mobile App Action\n\n// var $1 : Object  // Informaci\xf3n suministrada por la aplicaci\xf3n m\xf3vil\nvar $0 : Object  // Informaci\xf3n devuelta a la aplicaci\xf3n m\xf3vil\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Enviar acci\xf3n desconocida al servidor")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Creaci\xf3n de la aplicaci\xf3n.")),(0,i.kt)("h3",{id:"utilizar-esquemas-url-en-su-aplicaci\xf3n-m\xf3vil"},"Utilizar esquemas URL en su aplicaci\xf3n m\xf3vil"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Haga clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Action")," para mostrar todas sus acciones disponibles actualmente"),(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Share")," que previamente defini\xf3 en el editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"Aparece una nueva vista que le permite comenzar a compartir el contenido"),(0,i.kt)("li",{parentName:"ol"},"Seleccione el m\xe9todo de intercambio a utilizar"),(0,i.kt)("li",{parentName:"ol"},"Env\xedelo.")),(0,i.kt)("h2",{id:"enlaces-universales-1"},"Enlaces universales"),(0,i.kt)("p",null,"Los Universal links ofrecen varios beneficios clave que no est\xe1n disponibles con los esquemas de URL personalizados. Espec\xedficamente, los enlaces universales son:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Unique"),": a diferencia de los esquemas de URL personalizados, otras aplicaciones no pueden reclamar los enlaces universales porque utilizan enlaces HTTP o HTTPS est\xe1ndar a su sitio web.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Secure"),": cuando los usuarios instalan su aplicaci\xf3n, iOS verifica que su sitio web permita que su aplicaci\xf3n abra URLs en su nombre. S\xf3lo usted puede crear y subir el archivo que otorga este permiso a su servidor web, por lo que la asociaci\xf3n de su sitio web con su aplicaci\xf3n es segura.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Flexible"),": los enlaces universales funcionan incluso cuando su aplicaci\xf3n no est\xe1 instalada. En este caso, al presionar un enlace a su sitio web se abre el contenido en Safari.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Simple"),": una sola URL funciona tanto para su sitio web como para su aplicaci\xf3n.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Private"),": otras aplicaciones pueden comunicarse con su aplicaci\xf3n sin necesidad de saber si su aplicaci\xf3n est\xe1 instalada."))),(0,i.kt)("h3",{id:"enlaces-universales-en-el-editor-de-proyectos"},"Enlaces universales en el editor de proyectos"),(0,i.kt)("p",null,"Para incluir los enlaces universales en su aplicaci\xf3n, el proceso es bastante similar al proceso de los esquemas URL:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Seleccione la acci\xf3n predefinida ",(0,i.kt)("strong",{parentName:"li"},"Share")," de la p\xe1gina ",(0,i.kt)("a",{parentName:"li",href:"/go-mobile/es/docs/19-R4/project-definition/actions"},(0,i.kt)("strong",{parentName:"a"},"Action")," ")," y seleccione el alcance:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"entidad - para compartir un contenido de un formulario detallado"),(0,i.kt)("li",{parentName:"ul"},"tabla - para compartir un formulario listado"))),(0,i.kt)("li",{parentName:"ol"},"Activar la funcionalidad ",(0,i.kt)("strong",{parentName:"li"},"Deep Linking")," en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Publishing")," en el editor de proyectos"),(0,i.kt)("li",{parentName:"ol"},"Introduzca la URL de su sitio web en el campo ",(0,i.kt)("strong",{parentName:"li"},"Universal links")),(0,i.kt)("li",{parentName:"ol"},"Llene su m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Mobile App Action"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},'\n// M\xe9todo base On Mobile App Action\n\n// var $1 : Object  // Informaci\xf3n suministrada por la aplicaci\xf3n m\xf3vil\nvar $0 : Object  // Informaci\xf3n devuelta a la aplicaci\xf3n m\xf3vil\n\nvar $action : Object\n$action:=MobileAppServer.Action.new($1)\n\nCase of \n\n    : ($1.action="shareContact")\n\n        $0:=$action.shareContext()\n\n    Else \n\n        $0:=New object("success"; False;"statusText"; "Enviar acci\xf3n desconocida al servidor")\n\nEnd case \n\n')),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Creaci\xf3n de la aplicaci\xf3n."),(0,i.kt)("li",{parentName:"ol"},"Activar los enlaces universales del m\xe9todo ",(0,i.kt)("strong",{parentName:"li"},"On Web Connection"),", por ejemplo:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-4d"},"// M\xe9todo base On Web Connection\n\n// Var $1; $2; $3; $4; $5; $6 : Text\nVar $handler : Object\n\n$handler:=MobileAppServer.WebHandler.new()\nCase of\n    : ($handler.handle($1; $2; $3; $4; $5; $6))\n        // Gestionado por el c\xf3digo m\xf3vil por defecto\n    Else\n        // Su c\xf3digo web\nEnd case\n\n")),(0,i.kt)("p",null,":::nota"),(0,i.kt)("p",null,"To create a universal link, make sure you use standard ports (80 or 443)."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"deep-linking-y-notificaciones-push"},"Deep Linking y notificaciones Push"),(0,i.kt)("p",null,"Algo genial sobre Deep Linking es que es completamente compatible con ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/es/docs/19-R4/special-features/push-notification"},"notificaciones push"),". Esto significa que puede enviar enlaces deep a sus usuarios y llevarlos directamente a la p\xe1gina correcta."),(0,i.kt)("p",null,"Como puede ver, esta funci\xf3n abre un gran abanico de posibilidades. Deep linking es una funcionalidad crucial en las aplicaciones de hoy en d\xeda, especialmente ya que los usuarios consumen el contenido m\xe1s y m\xe1s r\xe1pidamente. Esta funcionalidad los lleva directamente al lugar deseado. As\xed que recomendamos que lo utilicen en sus aplicaciones m\xf3viles."),(0,i.kt)("p",null,":::consejo"),(0,i.kt)("p",null,"Consulte la documentaci\xf3n del componente ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/4d-for-ios/4D-Mobile-App-Server/blob/master/Documentation/Classes/PushNotification.md"},(0,i.kt)("strong",{parentName:"a"},"4D Mobile App Server"))," para obtener m\xe1s informaci\xf3n sobre c\xf3mo combinar las notificaciones push y deep linking."),(0,i.kt)("p",null,":::"))}d.isMDXComponent=!0},3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?t.createElement(k,r(r({ref:a},p),{},{components:n})):t.createElement(k,r({ref:a},p))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51526:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/4d-for-ios-deeplinking-c8b6031fa5991c5bfef157b6d39d3ccd.gif"},87391:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/deep-linking-project-editor-publishing-section-f55d18b6701cd4898dc2f8a39c4a61fc.png"}}]);