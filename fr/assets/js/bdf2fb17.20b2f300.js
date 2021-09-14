(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9731],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64308:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=["components"],s={id:"list-form-storyboard",title:"iOS Storyboard"},o=void 0,u={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"version-19-R2/tutorials/creating-list-forms/list-form-storyboard",isDocsHomePage:!1,title:"iOS Storyboard",description:"Now it's time to create your iOS list form interface with Xcode.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19-R2/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-list-forms/list-form-storyboard.md",version:"19-R2",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R2/tutorials",previous:{title:"Multi-criteria Search",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Android Layout",permalink:"/go-mobile/fr/docs/tutorials/creating-list-forms/list-form-layout"}},p=[{value:"Ouvrir le fichier storyboard avec Xcode",id:"ouvrir-le-fichier-storyboard-avec-xcode",children:[]},{value:"Add an Image View",id:"add-an-image-view",children:[]},{value:"Ajouter des libell\xe9s de titre et de sous-titre",id:"ajouter-des-libell\xe9s-de-titre-et-de-sous-titre",children:[]},{value:"Label customization",id:"label-customization",children:[]},{value:"Comment entrer des donn\xe9es dans vos cellules",id:"comment-entrer-des-donn\xe9es-dans-vos-cellules",children:[{value:"Image View",id:"image-view",children:[]},{value:"Libell\xe9s",id:"libell\xe9s",children:[]}]},{value:"Personnaliser votre application",id:"personnaliser-votre-application",children:[]},{value:"Que faire ensuite ?",id:"que-faire-ensuite-",children:[]}],c={toc:p};function d(e){var t=e.components,s=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now it's time to create your iOS list form interface with Xcode."),(0,i.kt)("p",null,"Voici le r\xe9sultat que nous souhaitons obtenir :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard custom listform",src:a(30294).Z})),(0,i.kt)("p",null,"Pour chaque cellule, nous allons ajouter :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Une photo de profil"),(0,i.kt)("li",{parentName:"ul"},"Title"),(0,i.kt)("li",{parentName:"ul"},"Un sous-titre")),(0,i.kt)("h2",{id:"ouvrir-le-fichier-storyboard-avec-xcode"},"Ouvrir le fichier storyboard avec Xcode"),(0,i.kt)("p",null,"Dans un premier temps, ouvrez votre fichier storyboard dans Xcode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Empty storyboard custom template",src:a(97552).Z})),(0,i.kt)("p",null,"It's quite empty, so let's add some content!"),(0,i.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,i.kt)("p",null,"\xc0 partir de l'",(0,i.kt)("strong",{parentName:"p"},"Object library")," (la biblioth\xe8que d'objets), glissez-d\xe9posez une ",(0,i.kt)("strong",{parentName:"p"},"Image View")," (une vue d'image) dans une cellule. Vous pouvez rechercher une \xab\xa0Image View\xa0\xbb dans la barre de recherche en bas de la biblioth\xe8que d\u2019objets."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Image View storyboard",src:a(59846).Z})),(0,i.kt)("p",null,"\xc0 partir du ",(0,i.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez la largeur de la vue de l\u2019image \xe0 110 et la valeur de sa hauteur \xe0 110. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 3."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View position height and width",src:a(53255).Z})),(0,i.kt)("p",null,"Puis, ajoutez une contrainte (Leading : 8) en cliquant sur ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," (en bas de l\u2019Interface Builder). Ajoutez \xe9galement des contraintes de largeur et hauteur, comme suit\xa0:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View leading space width height",src:a(13617).Z})),(0,i.kt)("p",null,"Enfin, cliquez sur le bouton ",(0,i.kt)("strong",{parentName:"p"},"Align"),' (dans la partie inf\xe9rieure de l\'nterface Builder) et cochez la case "Vertically in Container".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View align vertically",src:a(73484).Z})),(0,i.kt)("p",null,"Your Image View is now well positioned."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View final",src:a(26462).Z})),(0,i.kt)("p",null,"Nous allons nous pencher maintenant sur les libell\xe9s de cellules."),(0,i.kt)("h2",{id:"ajouter-des-libell\xe9s-de-titre-et-de-sous-titre"},"Ajouter des libell\xe9s de titre et de sous-titre"),(0,i.kt)("p",null,"Nous allons commencer par ",(0,i.kt)("strong",{parentName:"p"},"ajouter une vue"),". Vous pouvez rechercher le terme \xab\xa0View \xbb dans la ",(0,i.kt)("strong",{parentName:"p"},"biblioth\xe8que d'objets")," et faire glisser la vue vers la cellule."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add View Storyboard",src:a(79109).Z})),(0,i.kt)("p",null,"\xc0 partir du ",(0,i.kt)("strong",{parentName:"p"},"Size inspector")," (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), d\xe9finissez la largeur de la vue de l\u2019image sur 277 et la valeur de sa hauteur sur 94. D\xe9finissez ensuite la valeur de X sur 126 et la valeur de Y sur 10."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View position height and width",src:a(338).Z})),(0,i.kt)("p",null,"Concernant la vue d'image, ajoutez quatre contraintes en cliquant sur le bouton ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 11, Leading: 8, Top: 11 et Bottom: 10.67) pour la positionner correctement, comme suit :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View contraints Storyboard",src:a(20866).Z})),(0,i.kt)("p",null,'Glissez et d\xe9posez un libell\xe9 dans la "View" que vous venez d\u2019ajouter \xe0 partir de la biblioth\xe8que d\u2019objets.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add label Storyboard",src:a(59814).Z})),(0,i.kt)("p",null,"\xc0 partir du ",(0,i.kt)("strong",{parentName:"p"},"Size inspector"),", d\xe9finissez la largeur du libell\xe9 View sur 269 et sa hauteur sur 32. D\xe9finissez ensuite la valeur de X sur 8 et la valeur de Y sur 8."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dupliquez le libell\xe9")," et, dans le ",(0,i.kt)("strong",{parentName:"p"},"Size inspector"),", d\xe9finissez la valeur de X sur 8 et la valeur de Y sur 48."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Duplicate the label",src:a(34404).Z})),(0,i.kt)("p",null,"S\xe9lectionnez les deux libell\xe9s et ajoutez quatre contraintes en cliquant sur le bouton ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 8, Top: 8 et Bottom: Multiple) comme suit :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels contraints storyboard",src:a(39921).Z})),(0,i.kt)("p",null,"S\xe9lectionnez un libell\xe9 et double-cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Height constraint")," pour le modifier."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label height constraint edition",src:a(5427).Z})),(0,i.kt)("p",null,'Remplacez la relation "Equal" par ',(0,i.kt)("strong",{parentName:"p"},"Greater Than or Equal")," afin que sa hauteur soit variable (pour g\xe9rer des libell\xe9s multilignes)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Change relation label height constraint",src:a(21418).Z})),(0,i.kt)("p",null,"R\xe9p\xe9tez l\u2019op\xe9ration pour le deuxi\xe8me libell\xe9."),(0,i.kt)("h2",{id:"label-customization"},"Label customization"),(0,i.kt)("p",null,"\xc0 partir de l\u2019Attribute inspector (sur le c\xf4t\xe9 droit de l\u2019Interface Builder), vous pouvez personnaliser les couleurs de la police du libell\xe9. Appliquons la couleur ",(0,i.kt)("strong",{parentName:"p"},"Dark Grey Color")," au deuxi\xe8me libell\xe9 :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color dark grey",src:a(54748).Z})),(0,i.kt)("p",null,"Vous pouvez \xe9galement s\xe9lectionner la couleur principale de votre application :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label color background color",src:a(3660).Z})),(0,i.kt)("p",null,"\xc0 partir de l\u2019Attribute inspector, vous pouvez \xe9galement personnaliser la police. S\xe9lectionnez les deux libell\xe9s et s\xe9lectionnez Font > Custom > ",(0,i.kt)("strong",{parentName:"p"},"Helvetica Neue"),"\xa0:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label font custom",src:a(69343).Z})),(0,i.kt)("p",null,"Pour finaliser les personnalisations, s\xe9lectionnez les deux libell\xe9s et, dans la fen\xeatre Inspector, ",(0,i.kt)("strong",{parentName:"p"},"entrez la valeur 0 dans Lines"),". Ainsi, le nombre de lignes peut \xeatre illimit\xe9."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Label lines number",src:a(70982).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The provided storyboard is optimized to have a ",(0,i.kt)("strong",{parentName:"p"},"variable cell height")," depending on the contents of each cell."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Row height tableview cell",src:a(94721).Z})),(0,i.kt)("h2",{id:"comment-entrer-des-donn\xe9es-dans-vos-cellules"},"Comment entrer des donn\xe9es dans vos cellules"),(0,i.kt)("h3",{id:"image-view"},"Image View"),(0,i.kt)("p",null,"S\xe9lectionnez votre Vue Image, cliquez sur ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector")," et allez dans User Defined Runtime Attributes. Cliquez sur le ",(0,i.kt)("strong",{parentName:"p"},"bouton +")," pour ajouter une ligne."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User defined runtime attributes",src:a(19536).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path "),": commencez par bindTo pour activer la liaison sur le composant. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Identity inspector storyboard",src:a(27602).Z})),(0,i.kt)("h3",{id:"libell\xe9s"},"Libell\xe9s"),(0,i.kt)("p",null,"Select the first label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 2 Binding",src:a(58044).Z})),(0,i.kt)("p",null,"Select the second label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 3 Binding",src:a(91997).Z})),(0,i.kt)("p",null,"You can change the ",(0,i.kt)("strong",{parentName:"p"},"storyboard display labels")," to have better visibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double-cliquez sur le premier libell\xe9 pour le modifier et saisissez ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,i.kt)("li",{parentName:"ul"},"Double-cliquez sur le deuxi\xe8me libell\xe9 pour le modifier et saisissez ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard label display names",src:a(22171).Z})),(0,i.kt)("p",null,"Go to your project editor, select your list form template from the Forms section, then select Build and Run."),(0,i.kt)("p",null,"Here is the simulator result :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:a(79972).Z})),(0,i.kt)("h2",{id:"personnaliser-votre-application"},"Personnaliser votre application"),(0,i.kt)("p",null,"The last step is adding a corner radius to the Image View to have a better design."),(0,i.kt)("p",null,"S\xe9lectionnez votre Vue Image et ajoutez les deux lignes suivantes dans la zone User Defined Runtime Attributes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Number"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"12")))),(0,i.kt)("p",null,"et"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ImageView corner Radius",src:a(16035).Z})),(0,i.kt)("p",null,"Vous pouvez d\xe9sormais cr\xe9er votre projet depuis l'\xe9diteur de projet !"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Custom template final result",src:a(95143).Z})),(0,i.kt)("h2",{id:"que-faire-ensuite-"},"Que faire ensuite ?"),(0,i.kt)("p",null,"In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/fr/docs/tutorials/creating-detail-forms/detail-form-template"},"detail form templates"),"."),(0,i.kt)("p",null,"Download the completed template list folder:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Download")))}d.isMDXComponent=!0},59846:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},59814:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},79109:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},21418:function(e,t,a){"use strict";t.Z=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},95143:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},34404:function(e,t,a){"use strict";t.Z=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},97552:function(e,t,a){"use strict";t.Z=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},58044:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},91997:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},27602:function(e,t,a){"use strict";t.Z=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},73484:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},16035:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},26462:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},13617:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},53255:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},3660:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},54748:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},69343:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},5427:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},70982:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},39921:function(e,t,a){"use strict";t.Z=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},94721:function(e,t,a){"use strict";t.Z=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},79972:function(e,t,a){"use strict";t.Z=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},30294:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},22171:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},19536:function(e,t,a){"use strict";t.Z=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},20866:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},338:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);