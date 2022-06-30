"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3244],{56550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(87462),i=(r(67294),r(3905));const a={id:"filter-query-introduction",title:"Filter queries"},n=void 0,s={unversionedId:"tutorials/filter-queries/filter-query-introduction",id:"version-19-R4/tutorials/filter-queries/filter-query-introduction",title:"Filter queries",description:"Nesse tutorial vamos mostrar como criar pesquisas com filtro para exibir conte\xfado filtrado no app m\xf3vel gerado.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R4/tutorials/filter-queries/filter-query-introduction.md",sourceDirName:"tutorials/filter-queries",slug:"/tutorials/filter-queries/filter-query-introduction",permalink:"/go-mobile/pt/docs/19-R4/tutorials/filter-queries/filter-query-introduction",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R4/tutorials/filter-queries/filter-query-introduction.md",tags:[],version:"19-R4",frontMatter:{id:"filter-query-introduction",title:"Filter queries"},sidebar:"version-19-R4/tutorials",previous:{title:"Create Swift formatter",permalink:"/go-mobile/pt/docs/19-R4/tutorials/data-formatter/create-swift-formatter"},next:{title:"Definir un Filter Query",permalink:"/go-mobile/pt/docs/19-R4/tutorials/filter-queries/define-filter-query"}},l={},u=[{value:"Baixe o Starter Project",id:"baixe-o-starter-project",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Nesse tutorial vamos mostrar como criar ",(0,i.kt)("strong",{parentName:"p"},"pesquisas com filtro")," para exibir conte\xfado filtrado no app m\xf3vel gerado."),(0,i.kt)("p",null,"Se voc\xea for um gestor de contas e quiser consultar seus contratos ",(0,i.kt)("em",{parentName:"p"},"Em curso")," simplesmente conectando-se a sua aplica\xe7\xe3o com seu endere\xe7o de correio eletr\xf4nico."),(0,i.kt)("p",null,"Primeiro, a partir da se\xe7\xe3o Dados, vamos definir um ",(0,i.kt)("strong",{parentName:"p"},"filtro de pesquisa b\xe1sico")," para exibir apenas contratos ",(0,i.kt)("em",{parentName:"p"},"Em Progresso"),". Depois vamos aplicar um ",(0,i.kt)("strong",{parentName:"p"},"filtro baseado na informa\xe7\xe3o de usu\xe1rio")," que depende do email do gerente de conta."),(0,i.kt)("h2",{id:"baixe-o-starter-project"},"Baixe o Starter Project"),(0,i.kt)("p",null,"Antes de come\xe7ar, tenha certeza de baixar o ",(0,i.kt)("strong",{parentName:"p"},"Starter Project")," que inclui um arquivo ",(0,i.kt)("strong",{parentName:"p"},"4DforiOSQueries.4dbase")," (um banco de dados demo com um projeto de app m\xf3vel pronto para usar)"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-RestrictedQueries/releases/latest/download/tutorial-RestrictedQueries.zip"},"Starter project")),(0,i.kt)("p",null,"Este banco de dados inclui:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabela CRM")," com todos os dados que quisermos exibir no app gerado  iOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"tabela AccountManager ")," com informa\xe7\xe3o b\xe1sica sobre os administradores de contas (email e nome).")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CRM database",src:r(26576).Z,width:"2226",height:"1834"})),(0,i.kt)("p",null,"Estamos prontos para definir nossa primeira pesquisa limitada."),(0,i.kt)("p",null,"Abra o projeto m\xf3vel clicando em Open > Mobile Project... e selecione o app CRM  > ",(0,i.kt)("strong",{parentName:"p"},"project.4dmobileapp"),"."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(f,n(n({ref:t},c),{},{components:r})):o.createElement(f,n({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26576:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/CRMDatabase-1b6c6c0179884652d0b0bc4fbe7e0041.png"}}]);