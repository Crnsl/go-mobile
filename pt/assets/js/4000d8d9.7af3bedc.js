(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[809],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return m}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,a(a({ref:r},c),{},{components:t})):o.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56857:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var o=t(22122),n=t(19756),i=(t(67294),t(3905)),a=["components"],l={id:"from-xcode",title:"A partir de Xcode"},s=void 0,p={unversionedId:"debug/from-xcode",id:"version-19-R2/debug/from-xcode",isDocsHomePage:!1,title:"A partir de Xcode",description:"Se tiver problemas durante o processo de compila\xe7\xe3o pode abrir seu projeto gerado com Xcode selecionando a op\xe7\xe3o Open the product with Xcode a partir do menu Project.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/debug/from-xcode.md",sourceDirName:"debug",slug:"/debug/from-xcode",permalink:"/go-mobile/pt/docs/debug/from-xcode",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/debug/from-xcode.md",version:"19-R2",frontMatter:{id:"from-xcode",title:"A partir de Xcode"},sidebar:"version-19-R2/docs",previous:{title:"A partir do editor de projeto",permalink:"/go-mobile/pt/docs/debug/from-project-editor"},next:{title:"Desde seu iPhone",permalink:"/go-mobile/pt/docs/debug/from-iphone"}},c=[{value:"Logger (registrador)",id:"logger-registrador",children:[]},{value:"N\xedveis",id:"n\xedveis",children:[]},{value:"Formato",id:"formato",children:[{value:"Emoticons",id:"emoticons",children:[]},{value:"C\xedrculos",id:"c\xedrculos",children:[]}]}],u={toc:c};function d(e){var r=e.components,l=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,l,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Se tiver problemas durante o processo de compila\xe7\xe3o pode abrir seu projeto gerado com Xcode selecionando a op\xe7\xe3o ",(0,i.kt)("strong",{parentName:"p"},"Open the product with Xcode")," a partir do menu ",(0,i.kt)("strong",{parentName:"p"},"Project"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Abrir o projeto com Xcode",src:t(93203).Z})),(0,i.kt)("p",null,"A partir da\xed \xe9 poss\xedvel ",(0,i.kt)("strong",{parentName:"p"},"lan\xe7ar sua aplica\xe7\xe3o")," no Simulator clicando no bot\xe3o ",(0,i.kt)("strong",{parentName:"p"},"Build")," e obter todo o hist\xf3rico no fundo do espa\xe7o de trabalho de Xcode."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:t(93776).Z})),(0,i.kt)("h2",{id:"logger-registrador"},"Logger (registrador)"),(0,i.kt)("p",null,"Um logger \xe9 um objeto que permite registrar o log e rastrear."),(0,i.kt)("p",null,"Para isso usamos ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/DaveWoodCom/XCGLogger"},"XCGLogger")," ."),(0,i.kt)("p",null,"Vai encontrar a defini\xe7\xe3o dos par\xe2metros do logger em  Xcode project/Settings/Settings.plist."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hist\xf3ricos de Xcode",src:t(61246).Z})),(0,i.kt)("h2",{id:"n\xedveis"},"N\xedveis"),(0,i.kt)("p",null,"Pode filtrar e exibir diferentes n\xedveis do log em seu console, adicionando o log.level em seu arquivo Settings.plist."),(0,i.kt)("p",null,"Para fazer isso, adicione uma folha dando um clique direito dentro do arquivo Settings.plist e entre:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"log.level como Key"),(0,i.kt)("li",{parentName:"ul"},"Number como Type"),(0,i.kt)("li",{parentName:"ul"},"3 como Value (por exemplo)")),(0,i.kt)("p",null,"Os ",(0,i.kt)("strong",{parentName:"p"},"valores dispon\xedveis")," s\xe3o os abaixo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 para verbose"),(0,i.kt)("li",{parentName:"ul"},"1 para debug"),(0,i.kt)("li",{parentName:"ul"},"2 para info (valor normal)"),(0,i.kt)("li",{parentName:"ul"},"3 aviso"),(0,i.kt)("li",{parentName:"ul"},"4 erro"),(0,i.kt)("li",{parentName:"ul"},"5 severo")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"N\xedvel do hist\xf3rico",src:t(42140).Z})),(0,i.kt)("p",null,"Para este exemplo, se estabelecer o valor de log.level para 3, vai obter ",(0,i.kt)("strong",{parentName:"p"},"um aviso, um erro e severidade")," no console  Xcode."),(0,i.kt)("h2",{id:"formato"},"Formato"),(0,i.kt)("p",null,"Pode exibir indicadores visuais diferentes no console Xcode para ",(0,i.kt)("strong",{parentName:"p"},"ressaltar diferentes tipos de log"),"."),(0,i.kt)("p",null,"Para fazer isso, precisa abrir  Xcode project/Settings/Settings.plist"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Formato do hist\xf3rico",src:t(15456).Z})),(0,i.kt)("h3",{id:"emoticons"},"Emoticons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\uddef"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd39"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u2139\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u26a0\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\u203c\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\ud83d\udca3"')),(0,i.kt)("h3",{id:"c\xedrculos"},"C\xedrculos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"prefixes","[.verbose]",' = "\ud83d\udd18"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.debug]",' = "\ud83d\udd35"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.info]",' = "\u26aa"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.warning]",' = "\u2622\ufe0f"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.error]",' = "\ud83d\udd34"'),(0,i.kt)("li",{parentName:"ul"},"prefixes","[.severe]",' = "\u26ab"')))}d.isMDXComponent=!0},93776:function(e,r,t){"use strict";r.Z=t.p+"assets/images/Xcode-logs-4da61f66a49075bae70d8c27efe6ef2a.png"},15456:function(e,r,t){"use strict";r.Z=t.p+"assets/images/log-format-7a7bc7d581178f8d8d371706475c114d.png"},42140:function(e,r,t){"use strict";r.Z=t.p+"assets/images/log-level-0ec5cad4a8177259b8dfd0f2653d6ce7.png"},93203:function(e,r,t){"use strict";r.Z=t.p+"assets/images/open-project-Xcode-ed49be9ed186268dd01df3b4562d2092.png"},61246:function(e,r,t){"use strict";r.Z=t.p+"assets/images/settings-plist-xcode-e29ce6df5f7917d95a1728d11874fd22.png"}}]);