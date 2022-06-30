"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1087],{95687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"one-to-many-relations",title:"One to Many relations"},i=void 0,l={unversionedId:"tutorials/relations/one-to-many-relations",id:"version-19-R3/tutorials/relations/one-to-many-relations",title:"One to Many relations",description:"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R3/tutorials/relations/one-to-many-relations.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-relations",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/one-to-many-relations",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/relations/one-to-many-relations.md",tags:[],version:"19-R3",frontMatter:{id:"one-to-many-relations",title:"One to Many relations"},sidebar:"version-19-R3/tutorials",previous:{title:"Many to One relations",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/many-to-one-relations"},next:{title:"1 vers N - D\xe9finition du titre",permalink:"/go-mobile/fr/docs/19-R3/tutorials/relations/one-to-many-title-definition"}},s={},u=[{value:"Structure section",id:"structure-section",level:2},{value:"Labels &amp; Icons section",id:"labels--icons-section",level:2},{value:"Forms section",id:"forms-section",level:2},{value:"Build and Run",id:"build-and-run",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gr\xe2ce \xe0 ce tutoriel, vous pourrez facilement inclure des liens 1 vers N dans vos projets mobiles."),(0,o.kt)("p",null,"Commen\xe7ons par t\xe9l\xe9charger le Projet Starter :"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/archive/c006015afeb0e134d872152f53b8cd5e4dcb59bb.zip"},"Projet Starter")),(0,o.kt)("p",null,"Dans ce tutoriel, nous allons cr\xe9er une ",(0,o.kt)("strong",{parentName:"p"},"application Task")," \xe0 l'aide de 4D for iOS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Task App Final result",src:n(77749).Z,width:"650",height:"650"})),(0,o.kt)("p",null,"Mais d'abord, jetons un \u0153il \xe0 la structure de notre base :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"S\xe9lectionnez le lien \xe0 partir de la section Structure",src:n(95599).Z,width:"2152",height:"1666"})),(0,o.kt)("p",null,"Vous remarquerez qu'il existe un lien 1 vers N nomm\xe9 ",(0,o.kt)("strong",{parentName:"p"},"tasks")," qui utilisera une application iOS pour afficher les t\xe2ches (",(0,o.kt)("strong",{parentName:"p"},"vers N"),") des employ\xe9s (",(0,o.kt)("strong",{parentName:"p"},"1"),")."),(0,o.kt)("p",null,"Rendez-vous directement dans le menu Ouvrir> Projet mobile ... pour s\xe9lectionner ",(0,o.kt)("em",{parentName:"p"},"Time Keeper")," puis dans la ",(0,o.kt)("strong",{parentName:"p"},"section Structure"),"."),(0,o.kt)("h2",{id:"structure-section"},"Structure section"),(0,o.kt)("p",null,"Vous voyez ici le lien ",(0,o.kt)("strong",{parentName:"p"},"tasks")," que nous avons cr\xe9\xe9 pr\xe9c\xe9demment... Vous pouvez le publier !"),(0,o.kt)("p",null,"Il aura le m\xeame fonctionnement que n\u2019importe quel autre champ pour la suite de la cr\xe9ation de l\u2019application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Structure section Relations properties",src:n(57979).Z,width:"2164",height:"1988"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"En survolant un \xe9l\xe9ment, une astuce affiche le nom de la table source (qui est \xe0 l'origine) du lien."))),(0,o.kt)("h2",{id:"labels--icons-section"},"Labels & Icons section"),(0,o.kt)("p",null,"Le lien 1 vers N est maintenant disponible dans la section ",(0,o.kt)("strong",{parentName:"p"},"Libell\xe9s et ic\xf4nes"),"."),(0,o.kt)("p",null,"A noter qu'un lien 1 vers N cr\xe9era un bouton dans l'application iOS g\xe9n\xe9r\xe9e."),(0,o.kt)("p",null,"Dans la section Libell\xe9s & ic\xf4nes, vous d\xe9finirez :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"un libell\xe9 de bouton"),(0,o.kt)("li",{parentName:"ul"},"une ic\xf4ne de bouton"),(0,o.kt)("li",{parentName:"ul"},"un titre qui sera affich\xe9 dans la vue de destination (pour indiquer d'o\xf9 vous venez par exemple).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Labels &amp; Icons section Relations properties",src:n(37064).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"forms-section"},"Forms section"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cliquez sur la section Formulaires et d\xe9posez le lien ",(0,o.kt)("em",{parentName:"li"},"tasks")," dans le formulaire d\xe9taill\xe9 Employee Task.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(29996).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A partir du formulaire Lise Employee, cliquez sur un employ\xe9"),(0,o.kt)("li",{parentName:"ol"},"Cela permettra d'ouvrir le formulaire d\xe9taill\xe9 des employ\xe9s, o\xf9 vous devriez voir appara\xeetre un nouveau ",(0,o.kt)("strong",{parentName:"li"},"bouton Relation")," !"),(0,o.kt)("li",{parentName:"ol"},"Cliquez sur ce bouton Relation pour afficher les t\xe2ches de l'employ\xe9.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Related field in Forms section",src:n(20733).Z,width:"2268",height:"992"})),(0,o.kt)("p",null,"Bravo ! Vous avez inclus des liens 1 vers N avec succ\xe8s dans votre projet mobile."),(0,o.kt)("p",null,"T\xe9l\xe9chargez le projet final :"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyRelations/releases/latest/download/tutorial-OneToManyRelations.zip"},"Download")))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29996:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1-to-n-relations-forms-section-eaaf6fc4d1b5e4abc4bdc7b233c9e46b.png"},77749:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/4D-for-iOS-dark-mode-card-relation-ios-13-ae79febdfa2739db76aeec303329d6d2.gif"},95599:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Database-1-to-N-relations-4D-for-iOS-e367b692bf24073c368caea6ea463222.png"},20733:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/One-to-n-relations-task-ios-app-e63bb9be3b7cefc054e93c719581324d.png"},37064:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Relations-properties-Labels-icons-section-4D-for-iOS-af246bee86dd0780f38c6c51f7c1cc71.png"},57979:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Structure-section-relations-4D-for-iOS-5d5469663dad4dff95bedeb54f577eb5.png"}}]);