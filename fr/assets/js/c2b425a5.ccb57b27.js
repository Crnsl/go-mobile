"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3675],{55453:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var o=r(87462),a=(r(67294),r(3905));const l={id:"list-form-template",title:"Mod\xe8les de formulaire Liste"},n=void 0,i={unversionedId:"tutorials/creating-list-forms/list-form-template",id:"version-19-R5/tutorials/creating-list-forms/list-form-template",title:"Mod\xe8les de formulaire Liste",description:"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a searchBar, a table displaying an image, a title, and a subtitle for each cell.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-template",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-template",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/creating-list-forms/list-form-template.md",tags:[],version:"19-R5",frontMatter:{id:"list-form-template",title:"Mod\xe8les de formulaire Liste"},sidebar:"tutorials",previous:{title:"Custom Login Form",permalink:"/go-mobile/fr/docs/tutorials/custom-login-form"},next:{title:"Ic\xf4ne du formulaire Liste",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-icon"}},s={},m=[{value:"T\xe9l\xe9chargez le projet Starter",id:"t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"Ajoutez un mod\xe8le de formulaire Liste \xe0 votre projet mobile",id:"ajoutez-un-mod\xe8le-de-formulaire-liste-\xe0-votre-projet-mobile",level:2},{value:"Contenu du mod\xe8le de formulaire Liste",id:"contenu-du-mod\xe8le-de-formulaire-liste",level:2}],p={toc:m};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this tutorial, we'll cover nearly all aspects of creating a list form template, including the use of a ",(0,a.kt)("strong",{parentName:"p"},"searchBar"),", a table displaying an ",(0,a.kt)("strong",{parentName:"p"},"image"),", a ",(0,a.kt)("strong",{parentName:"p"},"title"),", and a ",(0,a.kt)("strong",{parentName:"p"},"subtitle")," for each cell."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"List form template final result",src:r(77605).Z,width:"1417",height:"992"})),(0,a.kt)("h2",{id:"t\xe9l\xe9chargez-le-projet-starter"},"T\xe9l\xe9chargez le projet Starter"),(0,a.kt)("p",null,"Before we begin, be sure to download and unzip the ",(0,a.kt)("strong",{parentName:"p"},"Starter project")," which includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Un dossier ",(0,a.kt)("strong",{parentName:"li"},"List form")),(0,a.kt)("li",{parentName:"ul"},'A demo 4D project ("Contact") with a ready-to-use mobile app project.')),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListFormStarter/archive/4702619ed628a98f7cba5aacc08b6302d4bb8f86.zip"},"Projet Starter")),(0,a.kt)("h2",{id:"ajoutez-un-mod\xe8le-de-formulaire-liste-\xe0-votre-projet-mobile"},"Ajoutez un mod\xe8le de formulaire Liste \xe0 votre projet mobile"),(0,a.kt)("p",null,"The first thing you'll need to do is to create a ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," folder in ",(0,a.kt)("em",{parentName:"p"},"Contact.4dbase/Resources/Mobile/form/")," location and drag and drop your ",(0,a.kt)("strong",{parentName:"p"},"list form")," folder into it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mobile folder list form template",src:r(67654).Z,width:"1301",height:"367"})),(0,a.kt)("p",null,'Now, launch your 4D application and open the "Contact" 4D project.'),(0,a.kt)("p",null,'Then, select the "Contact Demo App" mobile project: ',(0,a.kt)("strong",{parentName:"p"},"File > Open > Mobile Project > Contact Demo App"),"."),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Forms section")," of the mobile project editor, you can see that your list form template has been successfully added to the list of available list form templates:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Forms section",src:r(45889).Z,width:"1072",height:"994"})),(0,a.kt)("p",null,"Nous allons maintenant nous concentrer sur le contenu du dossier ",(0,a.kt)("strong",{parentName:"p"},"Custom List form"),"."),(0,a.kt)("h2",{id:"contenu-du-mod\xe8le-de-formulaire-liste"},"Contenu du mod\xe8le de formulaire Liste"),(0,a.kt)("p",null,"Dans ce dossier, vous trouverez :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a layoutIconx2.png")," icon in 160x160px: displayed in the project editor when you select your template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a manifest.json file"),": includes a basic description of the template"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"a template.svg file"),": the visual representation of your template displayed when you define your list form content."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"ios folder")," that includes the storyboard (graphical interface) and ",(0,a.kt)("strong",{parentName:"li"},"Swift")," file (code for the form) in ",(0,a.kt)("inlineCode",{parentName:"li"},"Source/Forms/Tables/___TABLE___")," folder"),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"android folder")," that includes the layout.xml file (graphical interface) in ",(0,a.kt)("inlineCode",{parentName:"li"},"app/src/main/res/layout")," folder.")),(0,a.kt)("p",null,"These files and folders are detailed in the next sections."))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return r?o.createElement(f,n(n({ref:t},p),{},{components:r})):o.createElement(f,n({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,n=new Array(l);n[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var m=2;m<l;m++)n[m]=r[m];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45889:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom-listform-template-e64552beb84fbed90e81bb41b433b1b1.png"},77605:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},67654:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/mobile-folder-custom-template-e21fc234b1e3af646e51d08a432cb267.png"}}]);