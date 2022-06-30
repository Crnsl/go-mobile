"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3794],{84800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={id:"one-to-many-relations",title:"One to Many relations"},l=void 0,i={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-19-R4/tutorials/relations/one-to-many-relations",title:"One to Many relations",description:"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Uno a Muchos en sus proyectos m\xf3viles.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R4/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/relations/one-to-many-relations.md",tags:[],version:"19-R4",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"version-19-R4/tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/many-to-one-relations"},next:{title:"Uno a Muchos - T\xedtulo",permalink:"/go-mobile/es/docs/19-R4/tutorials/relations/one-to-many-title-definition"}},s={},c=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Este tutorial le mostrar\xe1 lo f\xe1cil que puede ser incluir relaciones Uno a Muchos en sus proyectos m\xf3viles."),(0,o.kt)("p",null,"Comencemos descargando el proyecto Starter:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Starter project")),(0,o.kt)("p",null,"En este tutorial, vamos a construir una ",(0,o.kt)("strong",{parentName:"p"},"aplicaci\xf3n Task")," utilizando 4D for iOS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task App Final result",src:n(58609).Z,width:"650",height:"650"})),(0,o.kt)("p",null,"Pero primero, demos un vistazo a la estructura de nuestra base:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select link from structure section",src:n(10039).Z,width:"2152",height:"1666"})),(0,o.kt)("p",null,"Como puede ver, hay un enlace de Uno a Muchos llamado ",(0,o.kt)("strong",{parentName:"p"},"tasks")," que usaremos en nuestra aplicaci\xf3n iOS para mostrar las tareas'(",(0,o.kt)("strong",{parentName:"p"},"1"),") (",(0,o.kt)("strong",{parentName:"p"},"a Muchos"),") de los empleados."),(0,o.kt)("p",null,"Ahora, vaya directamente al men\xfa Abrir > Proyecto m\xf3vil... a seleccionar ",(0,o.kt)("em",{parentName:"p"},"Time Keeper")," y vaya a la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Structure"),"."),(0,o.kt)("h2",{id:"structure-section"},"Structure section"),(0,o.kt)("p",null,"Puede ver la ",(0,o.kt)("strong",{parentName:"p"},"relaci\xf3n de tareas")," que hemos visto antes... \xa1Puede publicarla!"),(0,o.kt)("p",null,"Este campo ahora funcionar\xe1 como cualquier otro campo durante el resto del proceso de creaci\xf3n de la aplicaci\xf3n."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Structure section Relations properties",src:n(11035).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,":::consejo"),(0,o.kt)("p",null,"Al pasar el rat\xf3n, una sugerencia muestra el nombre de la tabla fuente que origina la relaci\xf3n."),(0,o.kt)("p",null,":::"),(0,o.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,o.kt)("p",null,"La relaci\xf3n Uno a Muchos est\xe1 ahora disponible en la secci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Etiquetas e Iconos"),"."),(0,o.kt)("p",null,"Es importante saber que incluir una relaci\xf3n de Uno a Muchos crear\xe1 un bot\xf3n en la aplicaci\xf3n iOS generada."),(0,o.kt)("p",null,"En la secci\xf3n Etiquetas e iconos definir\xe1:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"una etiqueta de bot\xf3n"),(0,o.kt)("li",{parentName:"ul"},"un icono de bot\xf3n"),(0,o.kt)("li",{parentName:"ul"},"un t\xedtulo que se mostrar\xe1 en la vista de destino (para indicar de d\xf3nde viene, por ejemplo).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(48590).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"forms-section"},"Forms section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vaya a la secci\xf3n Formularios y suelte la relaci\xf3n ",(0,o.kt)("em",{parentName:"li"},"tasks")," en el formulario detallado Employee Task.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(26802).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A partir del formulario Employee List, haga clic en un empleado"),(0,o.kt)("li",{parentName:"ol"},"Esto abrir\xe1 el formulario detallado del empleado, donde deber\xeda ver un nuevo \xa1",(0,o.kt)("strong",{parentName:"li"},"bot\xf3n Relaci\xf3n"),"!"),(0,o.kt)("li",{parentName:"ol"},"Haga clic en este bot\xf3n Relaci\xf3n para mostrar las tareas del empleado.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(64094).Z,width:"2268",height:"992"})),(0,o.kt)("p",null,"\xa1Bien hecho! Ha incluido con \xe9xito las relaciones Uno a Muchos en su proyecto m\xf3vil."),(0,o.kt)("p",null,"Descargar el proyecto terminado:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Descargar")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26802:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},58609:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},10039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},64094:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},48590:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},11035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);