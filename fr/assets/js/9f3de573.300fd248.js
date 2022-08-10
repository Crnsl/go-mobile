"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[6795],{72103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={id:"deployment-in-house-distribute",title:"Distribuer une application interne"},o=void 0,l={unversionedId:"tutorials/deploying-in-house/deployment-in-house-distribute",id:"version-19-R6/tutorials/deploying-in-house/deployment-in-house-distribute",title:"Distribuer une application interne",description:"OBJECTIFS",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-distribute.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-distribute",permalink:"/go-mobile/fr/docs/tutorials/deploying-in-house/deployment-in-house-distribute",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/deploying-in-house/deployment-in-house-distribute.md",tags:[],version:"19-R6",frontMatter:{id:"deployment-in-house-distribute",title:"Distribuer une application interne"},sidebar:"tutorials",previous:{title:"Archiver et exporter un projet",permalink:"/go-mobile/fr/docs/tutorials/deploying-in-house/deployment-in-house-archive-and-export"},next:{title:"Cr\xe9er une fiche sur App Store",permalink:"/go-mobile/fr/docs/tutorials/deploying-on-app-store/deploy-on-app-store-create-appstore-record"}},p={},s=[{value:"\xc9TAPE 1. T\xe9l\xe9chargez votre application",id:"\xe9tape-1-t\xe9l\xe9chargez-votre-application",level:2},{value:"\xc9TAPE 2. Cr\xe9ez le lien d\u2019installation",id:"\xe9tape-2-cr\xe9ez-le-lien-dinstallation",level:2},{value:"\xc9TAPE 3. Installez votre application sur iOS",id:"\xe9tape-3-installez-votre-application-sur-ios",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"OBJECTIFS")),(0,r.kt)("p",{parentName:"blockquote"},"T\xe9l\xe9charger une application sur un serveur s\xe9curis\xe9.")),(0,r.kt)("h2",{id:"\xe9tape-1-t\xe9l\xe9chargez-votre-application"},"\xc9TAPE 1. T\xe9l\xe9chargez votre application"),(0,r.kt)("p",null,"T\xe9l\xe9chargez votre application sur un serveur s\xe9curis\xe9 :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ressources (image d'affichage et image en taille r\xe9elle)"),(0,r.kt)("li",{parentName:"ul"},"Fichier ",(0,r.kt)("inlineCode",{parentName:"li"},"manifest.plist")),(0,r.kt)("li",{parentName:"ul"},"Fichier ",(0,r.kt)("inlineCode",{parentName:"li"},".ipa"))),(0,r.kt)("p",null,"Vous pouvez utiliser n\u2019importe quel service de stockage en nuage pour distribuer votre application \xe0 partir du moment o\xf9 il est s\xe9curis\xe9 (Dropbox, Google Drive, etc.)."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Votre ressource et vos URL ipa doivent correspondre aux URL d\xe9finis dans votre fichier ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.plist"),"."))),(0,r.kt)("h2",{id:"\xe9tape-2-cr\xe9ez-le-lien-dinstallation"},"\xc9TAPE 2. Cr\xe9ez le lien d\u2019installation"),(0,r.kt)("p",null,"Cr\xe9ez un ",(0,r.kt)("strong",{parentName:"p"},"lien de Services ITMS")," (iTunes Music Store) avec, comme param\xe8tre, l\u2019adresse web compl\xe8te de votre fichier manifest\xa0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"itms-services://?action=download-manifest&url=https://mywebserver.com/manifest.plist\n\n")),(0,r.kt)("p",null,"Ce lien peut \xeatre utilis\xe9 pour l\u2019envoi d\u2019e-mails, int\xe9gr\xe9 dans une page html, ou m\xeame dans un code QR."),(0,r.kt)("p",null,"Voici un exemple simple\xa0:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Contact demo app install",src:n(99474).Z,width:"497",height:"625"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Le Code QR utilis\xe9 pour cette documentation n\u2019est pas actif.")),(0,r.kt)("h2",{id:"\xe9tape-3-installez-votre-application-sur-ios"},"\xc9TAPE 3. Installez votre application sur iOS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Installez l\u2019application en cliquant sur le lien ou en scannant un Code QR.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Scan and install",src:n(99898).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Lorsque vous ouvrez une application install\xe9e manuellement, une notification s\u2019affichera, indiquant que le d\xe9veloppeur de l\u2019application n\u2019est pas fiable sur votre appareil.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ignorez ce message et cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Annuler"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dans R\xe9glages > G\xe9n\xe9ral > Gestion de l'appareil, dans la rubrique \xab\xa0Application d'Entreprise\xa0\xbb, le profil du d\xe9veloppeur est r\xe9pertori\xe9."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Untrust developer",src:n(87013).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Saisissez le nom du profil d\xe9veloppeur pour que ce dernier soit reconnu comme fiable.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trust-confirmation",src:n(3755).Z,width:"2443",height:"2149"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Vous pouvez ensuite acc\xe9der \xe0 votre application et l'ouvrir.")),(0,r.kt)("p",null,"F\xe9licitations ! Vous pouvez d\xe9sormais d\xe9ployer votre premi\xe8re application interne\xa0."))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,v=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?i.createElement(v,o(o({ref:t},u),{},{components:n})):i.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99474:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Contact-demo-app-install-025473814bd8993dc037b8dbaced3e26.png"},99898:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Scan-and-install-b86848f3491e64b031483e4baf8a0a0c.png"},3755:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Trust-confirmation-680259bdd564087ee5a3d3894fc20cf0.png"},87013:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Untrust-developer-e6643a88c92fb4e23fb78d2968ea231a.png"}}]);