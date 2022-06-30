"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9353],{71316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"create-your-first-app",title:"Cr\xe9ez votre premi\xe8re application mobile avec 4D"},i=void 0,l={unversionedId:"tutorials/create-your-first-app",id:"version-19-R2/tutorials/create-your-first-app",title:"Cr\xe9ez votre premi\xe8re application mobile avec 4D",description:"Bienvenue dans le cr\xe9ateur d'applications mobiles de 4D. Ce tutoriel vous permettra de vous lancer directement dans le d\xe9veloppement mobile pour iOS et Android avec 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/create-your-first-app.md",sourceDirName:"tutorials",slug:"/tutorials/create-your-first-app",permalink:"/go-mobile/fr/docs/19-R2/tutorials/create-your-first-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/create-your-first-app.md",tags:[],version:"19-R2",frontMatter:{id:"create-your-first-app",title:"Cr\xe9ez votre premi\xe8re application mobile avec 4D"},sidebar:"version-19-R2/tutorials",next:{title:"Custom Login Form",permalink:"/go-mobile/fr/docs/19-R2/tutorials/custom-login-form"}},s={},p=[{value:"\xc9TAPE 1. T\xe9l\xe9chargez le projet Starter",id:"\xe9tape-1-t\xe9l\xe9chargez-le-projet-starter",level:2},{value:"\xc9TAPE 2. Cr\xe9ez le projet mobile",id:"\xe9tape-2-cr\xe9ez-le-projet-mobile",level:2},{value:"\xc9TAPE 3. Page G\xe9n\xe9ral",id:"\xe9tape-3-page-g\xe9n\xe9ral",level:2},{value:"\xc9TAPE 4. Page Structure",id:"\xe9tape-4-page-structure",level:2},{value:"STEP 5. Page libell\xe9s et ic\xf4nes",id:"step-5-page-libell\xe9s-et-ic\xf4nes",level:2},{value:"\xc9TAPE 6. Forms",id:"\xe9tape-6-forms",level:2},{value:"\xc9TAPE 7. G\xe9n\xe9rez l\u2019application",id:"\xe9tape-7-g\xe9n\xe9rez-lapplication",level:2},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bienvenue dans le cr\xe9ateur d'applications mobiles de 4D. Ce tutoriel vous permettra de vous lancer directement dans le d\xe9veloppement mobile pour iOS et Android avec 4D."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Rappel")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Avant de commencer, veuillez v\xe9rifier que votre configuration r\xe9pond aux ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/pr%C3%A9requis.md"},"exigences")," mat\xe9riels et logiciels pour le d\xe9veloppement de projets mobiles 4D."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sc\xe9nario :")," Vous \xeates un commercial et souhaitez consulter vos coordonn\xe9es lorsque vous \xeates en d\xe9placement. Nous allons cr\xe9er une application R\xe9pertoire mobile pour iOS et/ou Android pour rechercher des noms de contacts \xe0 partir d'une liste, puis afficher les d\xe9tails de chaque contact. Nous l'appellerons \"Contact\"."),(0,r.kt)("h2",{id:"\xe9tape-1-t\xe9l\xe9chargez-le-projet-starter"},"\xc9TAPE 1. T\xe9l\xe9chargez le projet Starter"),(0,r.kt)("p",null,"T\xe9l\xe9chargez et d\xe9zippez notre projet Starter 4D. Il contient un fichier de base de donn\xe9es et l'ic\xf4ne du projet, (mais qui n'inclut pas encore de projet mobile)."),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/archive/acbb699c3c9d9edd3a8bbb715e87c17140b7e15f.zip"},"Projet Starter")),(0,r.kt)("h2",{id:"\xe9tape-2-cr\xe9ez-le-projet-mobile"},"\xc9TAPE 2. Cr\xe9ez le projet mobile"),(0,r.kt)("p",null,'Lancez votre application 4D et s\xe9lectionnez "Contact.4DProject". Elle contient une structure de base de donn\xe9es tr\xe8s simple avec une seule table.'),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Nouveau > Projet mobile"),". Dans l'\xe9cran de bienvenue, nommez votre projet mobile."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Project Name",src:a(32237).Z,width:"494",height:"449"})),(0,r.kt)("p",null,"Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"."),(0,r.kt)("p",null,"Des composants suppl\xe9mentaires sont n\xe9cessaires pour d\xe9velopper un projet Android. Cliquez sur ",(0,r.kt)("strong",{parentName:"p"},"OK")," pour les t\xe9l\xe9charger :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(23108).Z,width:"434",height:"177"})),(0,r.kt)("h2",{id:"\xe9tape-3-page-g\xe9n\xe9ral"},"\xc9TAPE 3. Page G\xe9n\xe9ral"),(0,r.kt)("p",null,"Vous pourrez configurer ici les principales informations de votre application :"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Android",src:a(68035).Z,width:"690",height:"638"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cible\xa0:")," plateforme(s) mobile(s) \xe0 cr\xe9er")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Si vous \xeates sous Windows, seul ",(0,r.kt)("strong",{parentName:"p"},"Android")," est disponible. Si vous \xeates sur macOS, vous pouvez s\xe9lectionner \xe0 la fois ",(0,r.kt)("strong",{parentName:"p"},"Android")," et ",(0,r.kt)("strong",{parentName:"p"},"iOS"),"."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Organisation :")," Nom de votre entreprise et identifiant de l'application."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Produit :"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nom :")," Nom de l'application. Appelons-la \xab\xa0Contacts\xa0\xbb."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ID :")," (Bundle ID) g\xe9n\xe9r\xe9 automatiquement et compos\xe9 de l\u2019identifiant de votre entreprise et du nom de votre produit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version")," and ",(0,r.kt)("strong",{parentName:"li"},"Copyright:")," Leave the version as 1.0 and define your app's copyright."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icons:")," Select a target OS and drag and drop icons for your app into the area."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developer:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Name:")," Automatically filled from the user name on your computer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team"),": Developer team reference from your developer account. You can leave it empty to build your application on the Simulator only.")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"G\xe9n\xe9ral",src:a(95188).Z,width:"1072",height:"994"})),(0,r.kt)("h2",{id:"\xe9tape-4-page-structure"},"\xc9TAPE 4. Page Structure"),(0,r.kt)("p",null,"This is where you define the subset of data to expose to mobile devices. Select the table(s) in the left area and the field(s) in the right area."),(0,r.kt)("p",null,"For our example, select ",(0,r.kt)("strong",{parentName:"p"},"ID"),", ",(0,r.kt)("strong",{parentName:"p"},"First Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Last Name"),", ",(0,r.kt)("strong",{parentName:"p"},"Job"),", ",(0,r.kt)("strong",{parentName:"p"},"Company"),", ",(0,r.kt)("strong",{parentName:"p"},"Phone"),", ",(0,r.kt)("strong",{parentName:"p"},"Notes"),", and ",(0,r.kt)("strong",{parentName:"p"},"Photo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Structure",src:a(17324).Z,width:"1072",height:"994"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We highly recommend publishing your primary key in order to identify each record of the database.")),(0,r.kt)("h2",{id:"step-5-page-libell\xe9s-et-ic\xf4nes"},"STEP 5. Page libell\xe9s et ic\xf4nes"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R2/project-definition/data"},(0,r.kt)("strong",{parentName:"a"},"Data"))," and ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/19-R2/project-definition/actions"},(0,r.kt)("strong",{parentName:"a"},"Actions"))," pages allow to configure your app's data and to trigger code on the server. To keep this example simple, we will use default behaviors."))),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Labels & Icons")," page. Here you can define some labels and icons that will be used throughout the app for the tables, fields, and relations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Short labels and long labels are automatically used by the app depending on the available space."),(0,r.kt)("li",{parentName:"ul"},"To define a table icon, click on the ",(0,r.kt)("strong",{parentName:"li"},"Icons")," column for the table. The icon library appears and you can select an icon to illustrate the table or field. You can also opt to leave the icon column empty, a default icon will be generated."),(0,r.kt)("li",{parentName:"ul"},"Select at least one icon for your fields: the editor will generate default icons for all remaining fields. You can also simply leave all fields empty to not display any field icons.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Icons &amp; Labels",src:a(65488).Z,width:"1082",height:"1002"})),(0,r.kt)("h2",{id:"\xe9tape-6-forms"},"\xc9TAPE 6. Forms"),(0,r.kt)("p",null,"Nous avons presque termin\xe9, mais il faut d\u2019abord configurer la mise en page de l\u2019application. En choisissant des Formulaires Liste et des Formulaires d\xe9taill\xe9s."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez un mod\xe8le de formulaire Liste pour afficher votre table sous forme de liste. Pour notre application Contacts, nous allons utiliser le mod\xe8le ",(0,r.kt)("strong",{parentName:"li"},"Profile"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form template",src:a(22782).Z,width:"1072",height:"994"})),(0,r.kt)("p",null,"\xc0 ce stade, la partie inf\xe9rieure de la fen\xeatre de configuration a chang\xe9, en passant de la s\xe9lection du mod\xe8le \xe0 la d\xe9finition du contenu."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Glissez et d\xe9posez les champs que vous souhaitez afficher sur le mod\xe8le, \xe0 savoir, "Last Name" dans le champ de recherche et le champ "Titre". Le champ de recherche et le champ Section sont facultatifs. Pour le moment, laissez le champ Section vide.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"List form content",src:a(21069).Z,width:"1082",height:"1009"})),(0,r.kt)("p",null,"Enfin, nous allons d\xe9finir le formulaire d\xe9taill\xe9."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S\xe9lectionnez un template qui r\xe9pond au mieux \xe0 vos besoins. Pour notre application Contacts, nous allons utiliser le mod\xe8le ",(0,r.kt)("strong",{parentName:"li"},"Visual Contact"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form template",src:a(52698).Z,width:"1072",height:"994"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Glissez et d\xe9posez le contenu dans les sections appropri\xe9es du mod\xe8le de formulaire d\xe9taill\xe9, \xe0 savoir, First Name, Last Name et Photo.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Detail form content",src:a(38501).Z,width:"1082",height:"1009"})),(0,r.kt)("h2",{id:"\xe9tape-7-g\xe9n\xe9rez-lapplication"},"\xc9TAPE 7. G\xe9n\xe9rez l\u2019application"),(0,r.kt)("p",null,"Passons maintenant \xe0 la phase la plus amusante ! Il est temps de cr\xe9er votre application et de la tester sur le Simulateur pour voir le r\xe9sultat final\xa0!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cliquez sur l\u2019onglet ",(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9ration"),"."),(0,r.kt)("li",{parentName:"ul"},'S\xe9lectionnez un appareil \xe0 utiliser en tant que Simulateur en cliquant sur le bouton "appareil".'),(0,r.kt)("li",{parentName:"ul"},"Cliquez sur  ",(0,r.kt)("strong",{parentName:"li"},"G\xe9n\xe9rer et ex\xe9cuter"),"."),(0,r.kt)("li",{parentName:"ul"},"Patientez quelques secondes et voil\xe0 ! Votre application mobile est cr\xe9\xe9e !")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Build and Run",src:a(94824).Z,width:"1134",height:"1020"})),(0,r.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,r.kt)("p",null,"Dans ce tutoriel, nous avons fait le tour des \xe9tapes de cr\xe9ation d\u2019une application basique. Vous devriez maintenant \xeatre en mesure de cr\xe9er, par vous-m\xeames, de simples applications. Of course, many other options and features are available. Vous pouvez \xe0 pr\xe9sent cliquer sur le bouton ",(0,r.kt)("strong",{parentName:"p"},"Projet final")," ci-dessous pour t\xe9l\xe9charger l'application Contact finale."),(0,r.kt)("div",null,(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-ContactApp/releases/latest/download/tutorial-ContactApp.zip"},"PROJET FINAL")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94824:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Build-the-app-simulator-3e333cd7270b3db48d9d13ddc08eca16.png"},95188:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Contact-app-general-section-4D-for-iOS-415929c9b37bd87cad05677393c72379.png"},65488:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Contact-app-icons-labels-section-4D-for-iOS-6304c32db85ce66c2531ef967fadc4e2.png"},17324:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Contact-app-structure-section-4D-for-iOS-db8f77b9d72adb1da7ca60ac395d5e14.png"},38501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DetailformContent-form-section-4D-for-iOS-cf5589e87a43cd76af8b2da9e95b7196.png"},52698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DetailformTemplate-form-section-4D-for-iOS-bea0d9cad18badd0d39904aeef5c7f12.png"},21069:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ListformContent-form-section-4D-for-iOS-53751545293f31d01732505adf0da501.png"},22782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ListformTemplate-form-section-4D-for-iOS-b4e534d35ca6502c7284f53a90db723e.png"},23108:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/install-android-d1cf84f8b66e0e3a9542a3a690ccd020.png"},68035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/main-page-2a9d6b072df7c0677fec62be03e01fab.png"},32237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new-project-0086ec2255f336ef09eac7d109da09c4.png"}}]);