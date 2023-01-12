"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3067],{96802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={id:"list-form-svg-file",title:"Template.svg"},r=void 0,o={unversionedId:"tutorials/creating-list-forms/list-form-svg-file",id:"version-19-R7/tutorials/creating-list-forms/list-form-svg-file",title:"Template.svg",description:"The template.svg file is a basic visual representation of a template. Dans ce fichier, vous d\xe9finirez des sections afin d'ajouter des champs \xe0 votre mod\xe8le de formulaire Liste depuis l\u2019\xe9diteur de projet.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R7/tutorials/creating-list-forms/list-form-svg-file.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-svg-file",permalink:"/go-mobile/fr/docs/19-R7/tutorials/creating-list-forms/list-form-svg-file",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/creating-list-forms/list-form-svg-file.md",tags:[],version:"19-R7",frontMatter:{id:"list-form-svg-file",title:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/fr/docs/19-R7/tutorials/creating-list-forms/list-form-manifest"},next:{title:"Multi-criteria Search",permalink:"/go-mobile/fr/docs/19-R7/tutorials/creating-list-forms/multi-criteria-search"}},s={},d=[{value:"Title",id:"title",level:2},{value:"ios:values",id:"iosvalues",level:2},{value:"Area position, height, and width",id:"area-position-height-and-width",level:2},{value:"Zone SearchableField :",id:"zone-searchablefield-",level:3},{value:"Zone SectionField :",id:"zone-sectionfield-",level:3},{value:"Zone ImageField\xa0:",id:"zone-imagefield",level:3},{value:"Zone Title Field\xa0:",id:"zone-title-field",level:3},{value:"Zone Subtitle Field\xa0:",id:"zone-subtitle-field",level:3},{value:"ios:types",id:"iostypes",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"template.svg")," file is a basic visual representation of a template. Dans ce fichier, vous d\xe9finirez des sections afin d'ajouter des champs \xe0 votre mod\xe8le de formulaire Liste depuis l\u2019\xe9diteur de projet."),(0,l.kt)("p",null,"Voici une version finale\xa0:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Template svg file",src:a(1109).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Let\u2019s focus on the different parts of this svg file and what you'll need to edit."),(0,l.kt)("h2",{id:"title"},"Title"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom List form</title>\n")),(0,l.kt)("p",null,"Title of the template."),(0,l.kt)("h2",{id:"iosvalues"},"ios:values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<text id="cookery" ios:values="search,section,f1,f2,f3"/>\n')),(0,l.kt)("p",null,"Includes IDs which define your form areas:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"search"),": Refers to the search field area. Cela vous permettra de glisser-d\xe9poser un champ comme \xe9tant le crit\xe8re de recherche dans votre formulaire Liste (facultatif)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"section"),": Refers to the section field area. Cela vous permettra de glisser-d\xe9poser un champ comme \xe9tant le crit\xe8re de tri dans votre formulaire Liste (facultatif)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"f1, f2 and f3"),": Refers to the fields to display in each cell of your list form. Cela vous permettra de glisser-d\xe9poser les champs \xe0 faire appara\xeetre dans les cellules de votre formulaire Liste.")),(0,l.kt)("h2",{id:"area-position-height-and-width"},"Area position, height, and width"),(0,l.kt)("p",null,"You can define the position, height and width for:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Searchfield"),(0,l.kt)("li",{parentName:"ul"},"Sectionfield"),(0,l.kt)("li",{parentName:"ul"},"D'autres champs qui seront affich\xe9s dans chaque cellule")),(0,l.kt)("h3",{id:"zone-searchablefield-"},"Zone SearchableField :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,60)\u201d>\n\n//2\n<rect class="bg field" x="14" y="12" width="238" height="30\u201d/>\n\n//3\n<path class="magnifyingGlass" transform="translate(20,8) scale(1)\u201d/>\n\n//4\n<textArea id="search.label" class="label" x="14" y="8" width="238"/>\n\n//5\n<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>\n\n//6\n<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,l.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,l.kt)("li",{parentName:"ol"},'Image affichant l\'ic\xf4ne loupe dans le "searchable field" (champ de recherche)'),(0,l.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width, as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,l.kt)("p",null,"The searchable field is optional."),(0,l.kt)("h3",{id:"zone-sectionfield-"},"Zone SectionField :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<rect class="bg field" x="10" y="110" width="246" height="30\u201d/>\n\n//2\n<textArea id="section.label" class="label" x="0" y="118" width="250"/>\n\n//3\n<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField\u201d/>\n\n//4\n<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,l.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,l.kt)("p",null,"The section field is optional."),(0,l.kt)("h3",{id:"zone-imagefield"},"Zone ImageField\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)">\n\n//2\n<rect class="bg field" x="14" y="0" width="60" height="65"/>\n\n//3\n<path class="picture" transform="translate(-60 0) scale(5)"/>\n\n//4\n<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,l.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,l.kt)("li",{parentName:"ol"},"Ic\xf4ne affichant une image dans imageField"),(0,l.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,l.kt)("h3",{id:"zone-title-field"},"Zone Title Field\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>\n\n//4\n<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]\u201d/>\n\n//5\n<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,l.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,l.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,l.kt)("h3",{id:"zone-subtitle-field"},"Zone Subtitle Field\xa0:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,198)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>\n\n//4\n<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]\u201d/>\n\n//5\n<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Position de toute la zone Y"),(0,l.kt)("li",{parentName:"ol"},"Position, hauteur et largeur de la zone d'arri\xe8re-plan"),(0,l.kt)("li",{parentName:"ol"},"D\xe9finir la position de la zone de texte et la largeur"),(0,l.kt)("li",{parentName:"ol"},"Define the droppable field position, height and width as well as accepted ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"field types"))),(0,l.kt)("li",{parentName:"ol"},'D\xe9finir un bouton "Annuler" qui s\u2019affichera pour effacer le contenu courant')),(0,l.kt)("h2",{id:"iostypes"},"ios:types"),(0,l.kt)("p",null,"The following field types are supported:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"real")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"text")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"picture")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"date")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"integer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"longint")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"time")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"integer 64 bit")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For more information on these field types, refer to ",(0,l.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/Concepts/data-types.html"},(0,l.kt)("strong",{parentName:"a"},"this page")),".")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To make field type definition easier, 4D for iOS allows you to include field types with ",(0,l.kt)("strong",{parentName:"p"},"positive values")," and also exclude field types with ",(0,l.kt)("strong",{parentName:"p"},"negative values"),". For example, ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," will allow you to drag and drop every field except images and dates. To include all types, just type ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),".")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),f=l,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1109:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template-svg-file-e14ce32222c51abd644acf29b8a0649e.png"}}]);