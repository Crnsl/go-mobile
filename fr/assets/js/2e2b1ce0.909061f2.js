"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1581],{21215:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={id:"from-xcode",title:"Depuis Xcode"},u=void 0,s={unversionedId:"debug/from-xcode",id:"version-19-R2/debug/from-xcode",title:"Depuis Xcode",description:"Si vous rencontrez des probl\xe8mes au cours de la phase de cr\xe9ation, vous pouvez ouvrir votre projet g\xe9n\xe9r\xe9 avec Xcode en s\xe9lectionnant l'option Ouvrir le produit avec Xcode dans le menu Projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/debug/from-xcode.md",sourceDirName:"debug",slug:"/debug/from-xcode",permalink:"/go-mobile/fr/docs/19-R2/debug/from-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/debug/from-xcode.md",tags:[],version:"19-R2",frontMatter:{id:"from-xcode",title:"Depuis Xcode"},sidebar:"version-19-R2/docs",previous:{title:"Depuis l'\xe9diteur de projet",permalink:"/go-mobile/fr/docs/19-R2/debug/from-project-editor"},next:{title:"Depuis votre iPhone",permalink:"/go-mobile/fr/docs/19-R2/debug/from-iphone"}},p={},c=[{value:"Enregistreur",id:"enregistreur",level:2},{value:"Niveaux",id:"niveaux",level:2},{value:"Format",id:"format",level:2},{value:"\xc9motic\xf4nes",id:"\xe9motic\xf4nes",level:3},{value:"Cercles",id:"cercles",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Si vous rencontrez des probl\xe8mes au cours de la phase de cr\xe9ation, vous pouvez ouvrir votre projet g\xe9n\xe9r\xe9 avec Xcode en s\xe9lectionnant l'option ",(0,i.kt)("strong",{parentName:"p"},"Ouvrir le produit avec Xcode")," dans le menu ",(0,i.kt)("strong",{parentName:"p"},"Projet"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Ouvrez votre projet avec Xcode",src:r(58002).Z,width:"2164",height:"1988"})),(0,i.kt)("p",null,"A partir de l\xe0, vous pouvez ",(0,i.kt)("strong",{parentName:"p"},"lancer votre application")," dans le simulateur en cliquant sur le ",(0,i.kt)("strong",{parentName:"p"},"bouton G\xe9n\xe9rer")," et obtenir tous les journaux en bas de l'espace de travail Xcode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Journaux Xcode",src:r(51328).Z,width:"2502",height:"2144"})),(0,i.kt)("h2",{id:"enregistreur"},"Enregistreur"),(0,i.kt)("p",null,"Un enregistreur est un objet qui vous permettra d'enregistrer et de tracer."),(0,i.kt)("p",null,"Pour ce faire, nous utilisons ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger"),"."),(0,i.kt)("p",null,"Vous trouverez la d\xe9finition des param\xe8tres de l'enregistreur dans votre projet Xcode/Settings/Settings.plist."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Journaux Xcode",src:r(16455).Z,width:"2414",height:"1410"})),(0,i.kt)("h2",{id:"niveaux"},"Niveaux"),(0,i.kt)("p",null,"Vous pouvez filtrer et afficher diff\xe9rents niveaux de journalisation dans votre console en ajoutant log.level dans votre fichier Settings.plist."),(0,i.kt)("p",null,"Pour cela, ajoutez une ligne en faisant un clic droit dans le fichier Settings.plist et entrez :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"log.level comme cl\xe9"),(0,i.kt)("li",{parentName:"ul"},"Nombre comme type"),(0,i.kt)("li",{parentName:"ul"},"3 comme valeur (par exemple)")),(0,i.kt)("p",null,"Les ",(0,i.kt)("strong",{parentName:"p"},"valeurs disponibles")," sont les suivantes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 pour verbose"),(0,i.kt)("li",{parentName:"ul"},"1 pour le d\xe9bogage"),(0,i.kt)("li",{parentName:"ul"},"2 pour info (valeur par d\xe9faut)"),(0,i.kt)("li",{parentName:"ul"},"3 avertissement"),(0,i.kt)("li",{parentName:"ul"},"4 erreur"),(0,i.kt)("li",{parentName:"ul"},"5 s\xe9v\xe8re")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Niveau du journal",src:r(34239).Z,width:"2414",height:"1410"})),(0,i.kt)("p",null,"Donc, pour cet exemple, si vous d\xe9finissez la valeur log.level sur 3, vous obtiendrez un ",(0,i.kt)("strong",{parentName:"p"},"avertissement, une erreur et un s\xe9v\xe8re")," dans votre console Xcode."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"Vous pouvez afficher diff\xe9rents indicateurs visuels dans la console Xcode pour ",(0,i.kt)("strong",{parentName:"p"},"mettre en \xe9vidence diff\xe9rents types de journaux"),"."),(0,i.kt)("p",null,"Pour ce faire, il vous suffit d'ouvrir votre projet Xcode/Settings/Settings.plist"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Format du journal",src:r(98240).Z,width:"2414",height:"1410"})),(0,i.kt)("h3",{id:"\xe9motic\xf4nes"},"\xc9motic\xf4nes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,i.kt)("h3",{id:"cercles"},"Cercles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51328:function(e,t,r){t.Z=r.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},98240:function(e,t,r){t.Z=r.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},34239:function(e,t,r){t.Z=r.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},58002:function(e,t,r){t.Z=r.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},16455:function(e,t,r){t.Z=r.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);