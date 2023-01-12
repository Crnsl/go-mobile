"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3472],{86207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=r(87462),a=(r(67294),r(3905));const n={id:"user-information-query",title:"Filtro de pesquisa usu\xe1rio"},i=void 0,s={unversionedId:"tutorials/filter-queries/user-information-query",id:"version-19-R7/tutorials/filter-queries/user-information-query",title:"Filtro de pesquisa usu\xe1rio",description:"Agora vamos filtrar o conte\xfado de nosso app dependendo da dire\xe7\xe3o de correio eletr\xf4nico de in\xedcio de sess\xe3o de administrador de conta (informa\xe7\xe3o de usu\xe1rio):",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R7/tutorials/filter-queries/user-information-query.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/user-information-query",permalink:"/go-mobile/pt/docs/19-R7/tutorials/filter-queries/user-information-query",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R7/tutorials/filter-queries/user-information-query.md",tags:[],version:"19-R7",frontMatter:{id:"user-information-query",title:"Filtro de pesquisa usu\xe1rio"}},l={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Agora vamos filtrar o conte\xfado de nosso app dependendo da dire\xe7\xe3o de correio eletr\xf4nico de in\xedcio de sess\xe3o de administrador de conta (informa\xe7\xe3o de usu\xe1rio):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"V\xe1 para a se\xe7\xe3o ",(0,a.kt)("strong",{parentName:"li"},"Dados"),"."),(0,a.kt)("li",{parentName:"ul"},"D\xea um clique direito no campo  ",(0,a.kt)("strong",{parentName:"li"},"Filtro de pesquisa")," para que apare\xe7am os ",(0,a.kt)("strong",{parentName:"li"},"bot\xf5es Campo, Comparadores e Operadores")," ."),(0,a.kt)("li",{parentName:"ul"},"Clique no bot\xe3o ",(0,a.kt)("strong",{parentName:"li"},"Operadores")," e selecione ",(0,a.kt)("strong",{parentName:"li"},"AND"),"."),(0,a.kt)("li",{parentName:"ul"},"Agora defina a informa\xe7\xe3o de usu\xe1rio que deseja obter do m\xe9todo de banco de dados, ",(0,a.kt)("strong",{parentName:"li"},":email"),"."),(0,a.kt)("li",{parentName:"ul"},"Lembre de validar a pesquisa clicando no bot\xe3o ",(0,a.kt)("strong",{parentName:"li"},"Validate"),". Do contr\xe1rio n\xe3o poder\xe1 criar sua aplica\xe7\xe3o.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Filtro de pesquisa usu\xe1rio",src:r(6942).Z,width:"2164",height:"1988"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},"Status = 'In Progress' & manager. Email = :email \n")),(0,a.kt)("p",null,"A pesquisa vai filtrar os dados dependendo do status de ",(0,a.kt)("strong",{parentName:"p"},"In Progress")," E do ",(0,a.kt)("strong",{parentName:"p"},"endere\xe7o de email do gerente de conta")," (acess\xedvel da tabela AccountManager gra\xe7as a rela\xe7\xe3o  ",(0,a.kt)("em",{parentName:"p"},"Many-to-One")," no nome do gerente)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTA")),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Um  ",(0,a.kt)("strong",{parentName:"li"},"\xedcone usu\xe1rio")," \xe9 mostrado \xe0 direita de cada tabela quando um filtro de informa\xe7\xe3o de usu\xe1rio \xe9 aplicado a ela."),(0,a.kt)("li",{parentName:"ul"},"Logo que uma pesquisa baseada em informa\xe7\xe3o de usu\xe1rio for validada, precisa editar o m\xe9todo ",(0,a.kt)("strong",{parentName:"li"},"Mobile app authentication"),". Para fazer isso, d\xea um clique direito no bot\xe3o ",(0,a.kt)("strong",{parentName:"li"},"Edit authentication method")," para abrir a janela de edi\xe7\xe3o do m\xe9todo de banco de dados."))),(0,a.kt)("p",null,"Adicione a linha abaixo no m\xe9todo de banco de dados:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'$response.userInfo:=New object("email";$request.email)\n')),(0,a.kt)("p",null,"Isso permite recuperar o endere\xe7o de email do login do gerente e exibir dados dependendo desse crit\xe9rio."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Filtro de pesquisa usu\xe1rio",src:r(2881).Z,width:"1836",height:"1534"})),(0,a.kt)("p",null,'Agora, se construir seu app e entrar "',(0,a.kt)("a",{parentName:"p",href:"mailto:michelle.simpson@mail.com"},"michelle.simpson@mail.com"),'" como email de login, vai achar todos os contratos de Michelle Simpson ',(0,a.kt)("em",{parentName:"p"},'"Em progresso"'),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Final result",src:r(2812).Z,width:"1559",height:"907"})))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||n;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2881:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/database-method-user-information-query-e3ed77a2f2afd667702088c08f76a1ce.png"},2812:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/restricted-queries-final-result-443b634d42c5ef40c3d6c42d5358884c.png"},6942:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/user-information-query-2c1db26ac716f0a8504a2b25d2c870ac.png"}}]);