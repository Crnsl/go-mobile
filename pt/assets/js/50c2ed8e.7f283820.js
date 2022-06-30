"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[9620],{15194:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const i={id:"4d-for-ios-project-organization",title:"Organizar um projeto 4D for iOS"},n=void 0,s={unversionedId:"tutorials/customizing-with-xcode/4d-for-ios-project-organization",id:"version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization",title:"Organizar um projeto 4D for iOS",description:"A partir da guia de Navega\xe7\xe3o, v\xe1 para Fontes (sources).",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/4d-for-ios-project-organization",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/4d-for-ios-project-organization",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization.md",tags:[],version:"19-R5",frontMatter:{id:"4d-for-ios-project-organization",title:"Organizar um projeto 4D for iOS"},sidebar:"tutorials",previous:{title:"Apresenta\xe7\xe3o do Xcode",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/xcode-overview"},next:{title:"Personalizar seu app 4D for iOS",permalink:"/go-mobile/pt/docs/tutorials/customizing-with-xcode/customize-your-ios-app"}},u={},c=[{value:"Um arquivo Swift - o qual pode ser usado para adicionar um c\xf3digo personalizado.",id:"um-arquivo-swift---o-qual-pode-ser-usado-para-adicionar-um-c\xf3digo-personalizado",level:3},{value:"Arquivo de storyboard - permite personalizar o seu projeto de app.",id:"arquivo-de-storyboard---permite-personalizar-o-seu-projeto-de-app",level:3}],l={toc:c};function d(e){let{components:o,...i}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,i,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A partir da guia de Navega\xe7\xe3o, v\xe1 para Fontes (sources)."),(0,a.kt)("p",null,"Aqui voc\xea vai encontrar as pastas de estrutura e formul\xe1rios. Eles cont\xeam todos os arquivos para seu banco de dados estruturas e formul\xe1rios definidos, incluindo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tela de lan\xe7amento - aparece quando o aplicativo \xe9 iniciado."),(0,a.kt)("li",{parentName:"ul"},"Tela de login - aparece quando a autentica\xe7\xe3o \xe9 ativada."),(0,a.kt)("li",{parentName:"ul"},"Tela de configura\xe7\xf5es - inclui os bot\xf5es de recarregar e logout."),(0,a.kt)("li",{parentName:"ul"},"Todas as tabelas publicadas - arquivos correspondentes aos dados autorizados.")),(0,a.kt)("p",null,"Voc\xea vai encontrar um arquivo Swift e um arquivo Storyboard. Estes arquivos est\xe3o descritos abaixo."),(0,a.kt)("h3",{id:"um-arquivo-swift---o-qual-pode-ser-usado-para-adicionar-um-c\xf3digo-personalizado"},"Um arquivo Swift - o qual pode ser usado para adicionar um c\xf3digo personalizado."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Swift file",src:r(47177).Z,width:"1171",height:"933"})),(0,a.kt)("h3",{id:"arquivo-de-storyboard---permite-personalizar-o-seu-projeto-de-app"},"Arquivo de storyboard - permite personalizar o seu projeto de app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Archivo Storyboard",src:r(81881).Z,width:"1171",height:"933"})),(0,a.kt)("p",null,"Em seguida, vamos examinar como personalizar a visualiza\xe7\xe3o de detalhes do aplicativo contatos!"))}d.isMDXComponent=!0},3905:(e,o,r)=>{r.d(o,{Zo:()=>l,kt:()=>m});var t=r(67294);function a(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function n(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){a(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,t,a=function(e,o){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(a[r]=e[r]);return a}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),c=function(e){var o=t.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):n(n({},o),e)),r},l=function(e){var o=c(e.components);return t.createElement(u.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(f,n(n({ref:o},l),{},{components:r})):t.createElement(f,n({ref:o},l))}));function m(e,o){var r=arguments,a=o&&o.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=p;var s={};for(var u in o)hasOwnProperty.call(o,u)&&(s[u]=o[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,n[1]=s;for(var c=2;c<i;c++)n[c]=r[c];return t.createElement.apply(null,n)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81881:(e,o,r)=>{r.d(o,{Z:()=>t});const t=r.p+"assets/images/storyboard-file-Xcode-4D-for-iOS-6610533844b748b97b194d879eb81028.png"},47177:(e,o,r)=>{r.d(o,{Z:()=>t});const t=r.p+"assets/images/swift-file-Xcode-4D-for-iOS-9b0b30523c9e70346ddeadf971f64a15.png"}}]);