"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9394],{79999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"one-to-many-relations",title:"One to Many relations"},a=void 0,l={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-19-R7/tutorials/relations/one-to-many-relations",title:"One to Many relations",description:"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/relations/one-to-many-relations.md",tags:[],version:"19-R7",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/fr/docs/tutorials/relations/many-to-one-relations"},next:{title:"1 vers N - D\xe9finition du titre",permalink:"/go-mobile/fr/docs/tutorials/relations/one-to-many-title-definition"}},s={},u=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles."),(0,o.kt)("p",null,"Commen\xe7ons par t\xe9l\xe9charger le Projet Starter :"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Projet Starter")),(0,o.kt)("p",null,"Dans ce tutoriel, nous allons cr\xe9er une ",(0,o.kt)("strong",{parentName:"p"},"application Task")," \xe0 l'aide de 4D for iOS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task App Final result",src:n(92027).Z,width:"650",height:"650"})),(0,o.kt)("p",null,"Mais d'abord, jetons un \u0153il \xe0 la structure de notre base :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"S\xe9lectionnez le lien \xe0 partir de la section Structure",src:n(54468).Z,width:"2152",height:"1666"})),(0,o.kt)("p",null,"Vous remarquerez qu'il existe un lien 1 vers N nomm\xe9 ",(0,o.kt)("strong",{parentName:"p"},"tasks")," qui utilisera une application iOS pour afficher les t\xe2ches (",(0,o.kt)("strong",{parentName:"p"},"vers N"),") des employ\xe9s (",(0,o.kt)("strong",{parentName:"p"},"1"),")."),(0,o.kt)("p",null,"Rendez-vous directement dans le menu Ouvrir> Projet mobile ... pour s\xe9lectionner ",(0,o.kt)("em",{parentName:"p"},"Time Keeper")," puis dans la ",(0,o.kt)("strong",{parentName:"p"},"section Structure"),"."),(0,o.kt)("h2",{id:"structure-section"},"Structure section"),(0,o.kt)("p",null,"Vous voyez ici le lien ",(0,o.kt)("strong",{parentName:"p"},"tasks")," que nous avons cr\xe9\xe9 pr\xe9c\xe9demment... Vous pouvez le publier !"),(0,o.kt)("p",null,"Il aura le m\xeame fonctionnement que n\u2019importe quel autre champ pour la suite de la cr\xe9ation de l\u2019application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Structure section Relations properties",src:n(2187).Z,width:"2164",height:"1988"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"En survolant un \xe9l\xe9ment, une astuce affiche le nom de la table source (qui est \xe0 l'origine) du lien.")),(0,o.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,o.kt)("p",null,"Le lien 1 vers N est maintenant disponible dans la section ",(0,o.kt)("strong",{parentName:"p"},"Libell\xe9s et ic\xf4nes"),"."),(0,o.kt)("p",null,"A noter qu'un lien 1 vers N cr\xe9era un bouton dans l'application iOS g\xe9n\xe9r\xe9e."),(0,o.kt)("p",null,"Dans la section Libell\xe9s & ic\xf4nes, vous d\xe9finirez :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"un libell\xe9 de bouton"),(0,o.kt)("li",{parentName:"ul"},"une ic\xf4ne de bouton"),(0,o.kt)("li",{parentName:"ul"},"un titre qui sera affich\xe9 dans la vue de destination (pour indiquer d'o\xf9 vous venez par exemple).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(90092).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"forms-section"},"Forms section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur la section Formulaires et d\xe9posez le lien ",(0,o.kt)("em",{parentName:"li"},"tasks")," dans le formulaire d\xe9taill\xe9 Employee Task.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(38038).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A partir du formulaire Lise Employee, cliquez sur un employ\xe9"),(0,o.kt)("li",{parentName:"ol"},"Cela permettra d'ouvrir le formulaire d\xe9taill\xe9 des employ\xe9s, o\xf9 vous devriez voir appara\xeetre un nouveau ",(0,o.kt)("strong",{parentName:"li"},"bouton Relation")," !"),(0,o.kt)("li",{parentName:"ol"},"Cliquez sur ce bouton Relation pour afficher les t\xe2ches de l'employ\xe9.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(73420).Z,width:"2268",height:"992"})),(0,o.kt)("p",null,"Bravo ! Vous avez inclus des liens 1 vers N avec succ\xe8s dans votre projet mobile."),(0,o.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38038:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},92027:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},54468:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},73420:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},90092:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},2187:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);