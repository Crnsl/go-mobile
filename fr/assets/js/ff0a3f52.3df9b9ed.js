"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2787],{79076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const o={id:"create-data-formatter",title:"Cr\xe9er le format de donn\xe9es"},i=void 0,l={unversionedId:"tutorials/data-formatter/create-data-formatter",id:"version-19-R4/tutorials/data-formatter/create-data-formatter",title:"Cr\xe9er le format de donn\xe9es",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R4/tutorials/data-formatter/create-data-formatter.md",sourceDirName:"tutorials/data-formatter",slug:"/tutorials/data-formatter/create-data-formatter",permalink:"/go-mobile/fr/docs/19-R4/tutorials/data-formatter/create-data-formatter",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/data-formatter/create-data-formatter.md",tags:[],version:"19-R4",frontMatter:{id:"create-data-formatter",title:"Cr\xe9er le format de donn\xe9es"},sidebar:"version-19-R4/tutorials",previous:{title:"Mettre \xe0 jour un template",permalink:"/go-mobile/fr/docs/19-R4/tutorials/gallery/update-gallery-template"},next:{title:"Create Swift formatter",permalink:"/go-mobile/fr/docs/19-R4/tutorials/data-formatter/create-swift-formatter"}},s={},m=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"Cr\xe9ez le dossier formatters",id:"cr\xe9ez-le-dossier-formatters",level:2},{value:"Formats des entiers",id:"formats-des-entiers",level:2},{value:"Nombre entier vers cha\xeene",id:"nombre-entier-vers-cha\xeene",level:3},{value:"Nombre entier vers image",id:"nombre-entier-vers-image",level:3},{value:"Formats texte",id:"formats-texte",level:2},{value:"Texte vers cha\xeene",id:"texte-vers-cha\xeene",level:3},{value:"Texte vers image",id:"texte-vers-image",level:3},{value:"Dark mode support",id:"dark-mode-support",level:2},{value:"Tintable color",id:"tintable-color",level:3},{value:"Optimized color pictures",id:"optimized-color-pictures",level:3},{value:"Ouvrir un projet mobile",id:"ouvrir-un-projet-mobile",level:2},{value:"Build your 4D for iOS app",id:"build-your-4d-for-ios-app",level:2}],p={toc:m};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,n.kt)("p",{parentName:"blockquote"},"Create your first data formatters.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"CONDITIONS PR\xc9ALABLES")),(0,n.kt)("p",{parentName:"blockquote"},"Click ",(0,n.kt)("a",{parentName:"p",href:"requirements.html"},"here")," to see what you'll need to get started!")),(0,n.kt)("p",null,"Dans ce tutoriel, nous vous guiderons dans la cr\xe9ation de divers exemples de formats."),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Labels & Icons")," section, you can choose pre-packaged formats."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Available formats:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Text"),": Text"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date"),": Date, Short date, Long date, Full date"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Time"),": Time, Short time, Duration, Integer number"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Boolean"),': "No" or "Yes", "False" or "True"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Integer"),": Integer number, Decimal number, Real number, Percentage, Ordinal number, Currency $, Currency \u20ac, Currency \xa5, Spell Out"))),(0,n.kt)("p",null,"Commen\xe7ons par t\xe9l\xe9charger le Projet Starter :"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-DataFormatter/releases/latest/download/tutorial-DataFormatter.zip"},"Download")),(0,n.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,n.kt)("p",null,"Pour commencer, t\xe9l\xe9chargez le ",(0,n.kt)("strong",{parentName:"p"},"Projet Starter"),", qui comprend :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Les dossiers ",(0,n.kt)("strong",{parentName:"li"},"integerToImage_Images")," et ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images"),", qui contiennent des images (\xe0 utiliser ult\xe9rieurement pour les formats contenant des images)"),(0,n.kt)("li",{parentName:"ul"},"Un fichier ",(0,n.kt)("strong",{parentName:"li"},"Task Management.4dbase")," (accompagn\xe9 d'une application de projet mobile pr\xeat \xe0 l'emploi)")),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/archive/66d7eea49bc3353f73dbf784ee06283b3a332d0b.zip"},"Projet Starter")),(0,n.kt)("p",null,"Vous \xeates maintenant pr\xeats \xe0 cr\xe9er vos premiers formats\xa0!"),(0,n.kt)("h2",{id:"cr\xe9ez-le-dossier-formatters"},"Cr\xe9ez le dossier formatters"),(0,n.kt)("p",null,"Cr\xe9ez d'abord un dossuer ",(0,n.kt)("em",{parentName:"p"},"Task Management.4dbase/Resources/Mobile/formatters"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:r(32914).Z,width:"929",height:"367"})),(0,n.kt)("h2",{id:"formats-des-entiers"},"Formats des entiers"),(0,n.kt)("h3",{id:"nombre-entier-vers-cha\xeene"},"Nombre entier vers cha\xeene"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cr\xe9ez un dossier ",(0,n.kt)("strong",{parentName:"li"},"integerToString")," dans le dossier Formats que vous venez de cr\xe9er."),(0,n.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un fichier ",(0,n.kt)("strong",{parentName:"li"},"manifest.json")," dans le dossier ",(0,n.kt)("strong",{parentName:"li"},"integerToString"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:r(71401).Z,width:"1130",height:"367"})),(0,n.kt)("p",null,"Voici le contenu du fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToString",\n\n   "type": ["integer"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"0":"UX designer","1":"Developer","2":"QA","3":"Product Owner"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,n.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es")),(0,n.kt)("h3",{id:"nombre-entier-vers-image"},"Nombre entier vers image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,n.kt)("strong",{parentName:"p"},"integerToImage")," dans le dossier ",(0,n.kt)("strong",{parentName:"p"},"Formats")," que vous venez de cr\xe9er.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,n.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:r(84039).Z,width:"966",height:"367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un dossier ",(0,n.kt)("strong",{parentName:"li"},"Images")," dans le dossier ",(0,n.kt)("strong",{parentName:"li"},"integerToImage"),". Vous pouvez ajouter les images de ",(0,n.kt)("strong",{parentName:"li"},"integerToImage_Images")," (dans StarterProject.zip) dans ce nouveau dossier.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter images",src:r(7725).Z,width:"1119",height:"367"})),(0,n.kt)("p",null,"Voici le contenu du fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "integerToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": {"0":"todo.png","1":"inprogress.png","2":"pending.png","3":"done.png"},\n\n   "assets": {\n      "size": {\n         "width": 40, "height": 40\n      }\n   }\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,n.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"assets")," : ajuster la taille d'affichage (largeur et hauteur)")),(0,n.kt)("h2",{id:"formats-texte"},"Formats texte"),(0,n.kt)("h3",{id:"texte-vers-cha\xeene"},"Texte vers cha\xeene"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,n.kt)("strong",{parentName:"p"},"textToString")," dans le dossier Formats que vous venez de cr\xe9er.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,n.kt)("strong",{parentName:"p"},"textToString"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:r(92153).Z,width:"967",height:"367"})),(0,n.kt)("p",null,"Voici le contenu du fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToString",\n\n   "type": ["text"],\n\n   "binding": "localizedText",\n\n   "choiceList": {"FRA":"France","MAR":"Morocco","USA":"United States","AUS":"Australia"}\n}\n')),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"name")," : le nom du format"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"type")," : le type de format 4D que vous souhaitez utiliser"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"binding")," : soit ",(0,n.kt)("strong",{parentName:"li"},"localized text")," pour les cha\xeenes soit ",(0,n.kt)("strong",{parentName:"li"},"imageNamed")," pour les images"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"choiceList")," : valeurs mapp\xe9es")),(0,n.kt)("h3",{id:"texte-vers-image"},"Texte vers image"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un dossier ",(0,n.kt)("strong",{parentName:"p"},"textToImage")," dans le dossier Formats que vous venez de cr\xe9er.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Cr\xe9ez un fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," dans le dossier ",(0,n.kt)("strong",{parentName:"p"},"textToImage"),"."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter folder",src:r(99851).Z,width:"971",height:"367"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Cr\xe9ez ensuite un dossier ",(0,n.kt)("strong",{parentName:"li"},"Images")," dans le dossier ",(0,n.kt)("strong",{parentName:"li"},"textToImage"),". Vous pouvez ajouter les images de ",(0,n.kt)("strong",{parentName:"li"},"textToImage_Images")," (dans StarterProject.zip) dans ce nouveau dossier.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Formatter images",src:r(43321).Z,width:"1133",height:"367"})),(0,n.kt)("p",null,"Voici le contenu du fichier ",(0,n.kt)("strong",{parentName:"p"},"manifest.json")," :"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n\n   "type": ["integer"],\n\n   "binding": "imageNamed",\n\n   "choiceList": ["image1.png","image2.png","image3.png"],\n\n   "assets": {\n  "size": {\n   "width": 40, "height": 40\n      }\n   }\n}\n\n')),(0,n.kt)("h2",{id:"dark-mode-support"},"Dark mode support"),(0,n.kt)("p",null,"Whether your device is in dark or light mode, whether you're working on iOS or Android, you can easily use the custom data formatters containing images. The pictures will be adapted depending on the phone's color mode."),(0,n.kt)("h3",{id:"tintable-color"},"Tintable color"),(0,n.kt)("p",null,"To optimize the color contrast of your black and white images on your app depending on the color mode (light or dark), you can set the images as follows, with the ",(0,n.kt)("inlineCode",{parentName:"p"},'"tintable": true')," code line:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54, \n     "tintable": true\n     }\n}\n')),(0,n.kt)("p",null,"Here is the result in light and dark modes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Format des donn\xe9es",src:r(26555).Z,width:"231",height:"500"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Format des donn\xe9es",src:r(68525).Z,width:"231",height:"500"}))))),(0,n.kt)("h3",{id:"optimized-color-pictures"},"Optimized color pictures"),(0,n.kt)("p",null,"To optimize the color pictures displayed on your app and adapt them to your color mode, you need to have two pictures: one for the light mode, and one for the dark mode suffixed with ",(0,n.kt)("inlineCode",{parentName:"p"},"_dark"),", as follows:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Format des donn\xe9es",src:r(86464).Z,width:"1280",height:"720"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "name": "textToImage",\n   "type": ["text"],\n   "binding": "imageNamed",\n   "choiceList": {"car":"car.png","plane":"plane.png","bus":"bus.png"},\n   "assets": {\n     "size": 54\n   }\n}\n')),(0,n.kt)("p",null,"Here is the result in light mode and in dark mode:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Light mode"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Dark mode"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"Format des donn\xe9es",src:r(36489).Z,width:"1170",height:"2532"})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{alt:"Format des donn\xe9es",src:r(92488).Z,width:"1170",height:"2532"}))))),(0,n.kt)("h2",{id:"ouvrir-un-projet-mobile"},"Ouvrir un projet mobile"),(0,n.kt)("p",null,"Open the Task Management.4dbase with 4D and go to File > open > Mobile Project... to open the ",(0,n.kt)("strong",{parentName:"p"},"Tasks")),(0,n.kt)("p",null,"Next, go to the ",(0,n.kt)("strong",{parentName:"p"},"Labels & Icons section")," in the project editor. All of your formatters are available for the different field types you  previously defined in the different formatter manifest.json files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,n.kt)("strong",{parentName:"li"},"integerToString")," pour ",(0,n.kt)("strong",{parentName:"li"},"Job field")),(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,n.kt)("strong",{parentName:"li"},"textToString")," pour ",(0,n.kt)("strong",{parentName:"li"},"Country field")),(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,n.kt)("strong",{parentName:"li"},"integerToImage")," pour ",(0,n.kt)("strong",{parentName:"li"},"Task Status")),(0,n.kt)("li",{parentName:"ul"},"S\xe9lectionnez le format ",(0,n.kt)("strong",{parentName:"li"},"textToImage")," pour ",(0,n.kt)("strong",{parentName:"li"},"Manager"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:r(77148).Z,width:"1082",height:"994"})),(0,n.kt)("h2",{id:"build-your-4d-for-ios-app"},"Build your 4D for iOS app"),(0,n.kt)("p",null,"Build your 4D of iOS app and you'll see that your data formatter is well applied depending on the credit limit."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Text formatter",src:r(89532).Z,width:"1417",height:"992"})),(0,n.kt)("p",null,"Download the completed formatter template folder:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomDataFormatter/releases/latest/download/tutorial-CustomDataFormatter.zip"},"Download")),(0,n.kt)("p",null,"And you're done!"))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),c=n,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86464:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Architecture-9e5ab4ecd6e08492f157b05f20f727c5.jpg"},68525:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dark-bw-68e482439e9dd8b1f54d5329043a8320.png"},92488:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/dark-color-f03b8c9fe0da0586276cfbb4119d738f.png"},84039:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-folder-integertoimage-39a0ceecb09f269914d1bcf37777c2df.png"},71401:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-folder-integertostring-83d572fe95b8bf945181fbe8fae383e0.png"},99851:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-folder-textToImage-90f9d914f42c5aa4ee25b5c480b31202.png"},92153:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-folder-texttostring-a86ce7fb9cec79c633d7142ca0c02c68.png"},32914:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-folder-4de63acd23f172964362bd2e13501739.png"},7725:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-images-integertoimage-9048c8448868dc1029cf8c7b990a942a.png"},43321:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatter-images-textToImage-2ecef0061028f82c44fd23cdabdab308.png"},89532:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatters-final-result-69d799b3a619fb518ea7ef3cbf96c8ee.png"},77148:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/formatters-icons-&-labels-3967beccfbcde91e00b7e6ec1a69abfb.png"},26555:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/light-bw-382eb672557f93f18eb64d0dfa5499d5.png"},36489:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/light-color-5b5a9550d2501be2b5ceb9351a104240.png"}}]);