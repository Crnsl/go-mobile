"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7464],{472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={id:"one-to-many-title-definition",title:"1 vers N - D\xe9finition du titre"},a=void 0,l={unversionedId:"tutorials/relations/one-to-many-title-definition",id:"version-19-R6/tutorials/relations/one-to-many-title-definition",title:"1 vers N - D\xe9finition du titre",description:"D\xe9finir un titre pour vos vues de destination",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/relations/one-to-many-title-definition.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-title-definition",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-title-definition",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/relations/one-to-many-title-definition.md",tags:[],version:"19-R6",frontMatter:{id:"one-to-many-title-definition",title:"1 vers N - D\xe9finition du titre"},sidebar:"tutorials",previous:{title:"One to Many relations",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-relations"},next:{title:"1 vers N - Bouton personnalis\xe9",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-custom-button"}},s={},u=[{value:"D\xe9finir un titre pour vos vues de destination",id:"d\xe9finir-un-titre-pour-vos-vues-de-destination",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"d\xe9finir-un-titre-pour-vos-vues-de-destination"},"D\xe9finir un titre pour vos vues de destination"),(0,i.kt)("p",null,"Pour garder une trace de la vue que vous \xe9tiez en train de visualiser dans votre application, 4D for iOS vous permet de d\xe9finir un Titre personnalis\xe9."),(0,i.kt)("p",null,"Dans ce tutoriel nous utiliserons le projet suivant :"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyTitleDefinition/archive/4b831959e7efe4777071af0b2904d458918cfbc2.zip"},"Projet Starter")),(0,i.kt)("p",null,"Rendez-vous directement dans le ",(0,i.kt)("strong",{parentName:"p"},"menu Ouvrir> Projet mobile..."),", s\xe9lectionnez ",(0,i.kt)("em",{parentName:"p"},"Time Keeper")," puis la ",(0,i.kt)("strong",{parentName:"p"},"section \xc9tiquettes et ic\xf4nes"),"."),(0,i.kt)("p",null,"Ouvrez ensuite l'onglet Liens pour d\xe9finir le titre du lien ",(0,i.kt)("em",{parentName:"p"},"tasks")," et saisissez la ligne suivante dans ",(0,i.kt)("strong",{parentName:"p"},"la colonnes Titles")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"%Name% tasks")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(68455).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"Vous l'aurez devin\xe9, il vous permet d'afficher ",(0,i.kt)("strong",{parentName:"p"},"la valeur du nom de l'Employ\xe9")," dans la vue de destination en fonction du formulaire d\xe9taill\xe9 Employee sur lequel vous \xe9tiez en train de travailler pr\xe9c\xe9demment."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels &amp; Icons relation title",src:n(37512).Z,width:"1701",height:"992"})),(0,i.kt)("p",null,"Ceci est un excellent moyen de garder une trace de la vue pr\xe9c\xe9dente sur laquelle vous \xe9tiez !"),(0,i.kt)("p",null,"Voyons maintenant comment cr\xe9er et ajouter votre propre bouton Relation dans le prochain tutoriel !"))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68455:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/labels-icons-title-definition-01f641a8df96a63d357603ee2168c179.png"},37512:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/relations-title-definition-985f72bcde6d7ae39dad21fdee77eee5.png"}}]);