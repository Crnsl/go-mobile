"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5652],{85803:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=o(87462),r=(o(67294),o(3905));const n={id:"one-to-many-custom-button",title:"Um para Muitos - bot\xe3o personalizado"},i=void 0,s={unversionedId:"tutorials/relations/one-to-many-custom-button",id:"version-19-R5/tutorials/relations/one-to-many-custom-button",title:"Um para Muitos - bot\xe3o personalizado",description:"Como vimos em tutoriais anteriores, 4D editor m\xf3vel lhe d\xe1 a liberdade de criar v\xe1rias coisas personalizadas.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/relations/one-to-many-custom-button.md",sourceDirName:"tutorials/relations",slug:"/tutorials/relations/one-to-many-custom-button",permalink:"/go-mobile/pt/docs/tutorials/relations/one-to-many-custom-button",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/relations/one-to-many-custom-button.md",tags:[],version:"19-R5",frontMatter:{id:"one-to-many-custom-button",title:"Um para Muitos - bot\xe3o personalizado"},sidebar:"tutorials",previous:{title:"Um para Muitos - Defini\xe7\xe3o de T\xedtulo",permalink:"/go-mobile/pt/docs/tutorials/relations/one-to-many-title-definition"},next:{title:"Rela\xe7\xf5es Um para Muitos - A\xe7\xf5es",permalink:"/go-mobile/pt/docs/tutorials/relations/one-to-many-actions"}},l={},u=[{value:"Integrar um bot\xe3o",id:"integrar-um-bot\xe3o",level:2},{value:"Modificar o bot\xe3o",id:"modificar-o-bot\xe3o",level:2},{value:"Cores e fontes personalizadas.",id:"cores-e-fontes-personalizadas",level:3},{value:"Cantos arredondados de bot\xf5es",id:"cantos-arredondados-de-bot\xf5es",level:3},{value:"Tamanho e restri\xe7\xf5es",id:"tamanho-e-restri\xe7\xf5es",level:3},{value:"Adicionar restri\xe7\xf5es",id:"adicionar-restri\xe7\xf5es",level:4},{value:"adicionar TAGS",id:"adicionar-tags",level:3},{value:"Adicione uma tag para a restri\xe7\xe3o de altura",id:"adicione-uma-tag-para-a-restri\xe7\xe3o-de-altura",level:4},{value:"O que fazer agora?",id:"o-que-fazer-agora",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Como vimos em tutoriais anteriores, 4D editor m\xf3vel lhe d\xe1 a liberdade de criar v\xe1rias coisas personalizadas."),(0,r.kt)("p",null,"Em rela\xe7\xe3o a modelos e formatadores personalizados, pode criar Bot\xf5es de Rela\xe7\xe3o personalizados."),(0,r.kt)("p",null,"Para fazer isso, nada \xe9 mais simples! S\xf3 precisa soltar seu bot\xe3o personalizado em seu modelo personalizado."),(0,r.kt)("p",null,"Vamos come\xe7ar baixando o Starter Project que inclui:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"um banco de dados com seu projeto m\xf3vel"),(0,r.kt)("li",{parentName:"ul"},"um bot\xe3o Rela\xe7\xe3o padr\xe3o")),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/archive/c507e764e97e006c6c785dfc468f71f5bd708845.zip"},"Starter project")),(0,r.kt)("h2",{id:"integrar-um-bot\xe3o"},"Integrar um bot\xe3o"),(0,r.kt)("p",null,"O primeiro passo \xe9 incluir o bot\xe3o.xib em seu modelo personalizado para que 4D for IOS possa us\xe1-lo."),(0,r.kt)("p",null,"Para usar o bot\xe3o s\xf3 precisa soltar na pasta ",(0,r.kt)("inlineCode",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/detail/BlackVisual Contact"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom button path",src:o(64912).Z,width:"2690",height:"734"})),(0,r.kt)("p",null,"O primeiro passo est\xe1 pronto!"),(0,r.kt)("h2",{id:"modificar-o-bot\xe3o"},"Modificar o bot\xe3o"),(0,r.kt)("p",null,"Abra o arquivo .xib com Xcode."),(0,r.kt)("p",null,"Deve ter um aspecto como este:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation button",src:o(63682).Z,width:"2028",height:"1898"})),(0,r.kt)("p",null,"E a partir do inspetor de atributos, pode mudar por exemplo:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cores e fontes"),(0,r.kt)("li",{parentName:"ul"},"o estilo do bot\xe3o"),(0,r.kt)("li",{parentName:"ul"},"o tamanho do bot\xe3o, etc")),(0,r.kt)("p",null,"Vamos mudar a cor do bot\xe3o e a fonte da sua etiqueta!"),(0,r.kt)("h3",{id:"cores-e-fontes-personalizadas"},"Cores e fontes personalizadas."),(0,r.kt)("p",null,"Selecione o bot\xe3o e mude a cor e fonte a partir do inspetor de atributos."),(0,r.kt)("p",null,"Para o fundo, selecione Label Color para ter o melhor contraste em modos Light e Dark."),(0,r.kt)("p",null,"Para a cor de fonte, selecione System background color com uma fonte helv\xe9tica Neue Medium."),(0,r.kt)("p",null,'Finalmente, n\xe3o se esque\xe7a de selecionar "tint" em System background color para aplicar essa cor no \xedcone de bot\xe3o.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation button",src:o(96770).Z,width:"2026",height:"1886"})),(0,r.kt)("p",null,"Deve obter esse resultado em seu Simulador em modo Dark e Light:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:o(35428).Z,width:"1701",height:"992"})),(0,r.kt)("h3",{id:"cantos-arredondados-de-bot\xf5es"},"Cantos arredondados de bot\xf5es"),(0,r.kt)("p",null,"Vamos adicionar alguns cantos arredondados para relationButton!"),(0,r.kt)("p",null,"Para fazer isso abra o Identity Inspector."),(0,r.kt)("p",null,"Selecione seu Bot\xe3o e adicione as duas linhas abaixo na \xe1rea User Defined Runtime Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Number"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"12")))),(0,r.kt)("p",null,"e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Type"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Value"),": selecione a caixa de op\xe7\xe3o"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:o(95331).Z,width:"2026",height:"1886"})),(0,r.kt)("p",null,"Agora pode construir seu projeto no editor de projetos!"),(0,r.kt)("p",null,"O resultado deve parecer com isto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom relation color and font",src:o(74746).Z,width:"1701",height:"992"})),(0,r.kt)("h3",{id:"tamanho-e-restri\xe7\xf5es"},"Tamanho e restri\xe7\xf5es"),(0,r.kt)("p",null,"lembre que se voc\xea ",(0,r.kt)("strong",{parentName:"p"},"adicionar restri\xe7\xf5es")," no seu bot\xe3o, tamb\xe9m ter\xe1 que modificar o arquivo xib xml para ",(0,r.kt)("strong",{parentName:"p"},"agregar algumas TAGS")," como para os formul\xe1rios detalhados personalizados. Isso permite que o bot\xe3o seja duplicado quando v\xe1rias rela\xe7\xf5es estiverem dispon\xedveis na mesma vista detalhada."),(0,r.kt)("p",null,"O que \xe9 conveniente porque vamos adicionar algumas restri\xe7\xf5es!"),(0,r.kt)("h4",{id:"adicionar-restri\xe7\xf5es"},"Adicionar restri\xe7\xf5es"),(0,r.kt)("p",null,"Para este tutorial vamos adicionar uma altura de bot\xe3o porque queremos que fique maior na tela."),(0,r.kt)("p",null,"P\xe1sso 1. Primeiro selecione a vista e mude a altura de 123 a 40"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Button view height",src:o(49233).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Passo 2. D\xea um duplo clique em ",(0,r.kt)("strong",{parentName:"p"},"Top Space Constraint")," e mude o valor de 8 para 0"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Top Space constraint",src:o(48560).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Passo 3. Fa\xe7a a mesma coisa com  ",(0,r.kt)("strong",{parentName:"p"},"Bottom Space Constraint")," e mude seu valor de 8 para 0"),(0,r.kt)("p",null,"Voc\xea deveria obter isto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Custom  button constraints",src:o(69421).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Passo 4. Adicione uma restri\xe7\xe3o de altura de 40"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Button height constraint",src:o(78889).Z,width:"2030",height:"1858"})),(0,r.kt)("p",null,"Voc\xea deveria obter isto:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal in container",src:o(9366).Z,width:"1701",height:"992"})),(0,r.kt)("p",null,"Para indicar no editor de projeto que todos os elementos inclu\xeddos nesta vista ser\xe3o duplicados, precisamos adicionar uma TAG para cada elemento e restri\xe7\xe3o."),(0,r.kt)("h3",{id:"adicionar-tags"},"adicionar TAGS"),(0,r.kt)("p",null,"Cada elemento de storyboard tem um identificador de Objeto. Por exemplo, se selecionar Field View 2 e for a",(0,r.kt)("strong",{parentName:"p"}," identity Inspector"),", ver\xe1 seus identificadores de objetos:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Object ID Storyboard",src:o(48439).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"O processo \xe9 um pouco complicado.... Come\xe7amos abrindo o arquivo storyboard com seu editor de c\xf3digo favorito!"),(0,r.kt)("h4",{id:"adicione-uma-tag-para-a-restri\xe7\xe3o-de-altura"},"Adicione uma tag para a restri\xe7\xe3o de altura"),(0,r.kt)("p",null,"P\xe1sso 1. Selecione-o a partir do Storyboard para obter o identiicador de Objeto."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal constraint object ID",src:o(920).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"Passo 2. Pesquise por essa ID no arquivo xml e coloque no seu lugar ",(0,r.kt)("strong",{parentName:"p"},"TAG-RL-007"),"  (uma Tag que ainda n\xe3o esteja em uso)."),(0,r.kt)("p",null,"Passo 3. Salve o arquivo xml"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal constraint xml file",src:o(59808).Z,width:"1782",height:"1434"})),(0,r.kt)("p",null,"Passo 4. Foco em Storyboard para verificar se a restri\xe7\xe3o foi atualizada corretamente"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Horizontal object ID updated",src:o(9985).Z,width:"2050",height:"1280"})),(0,r.kt)("p",null,"E isso \xe9 tudo! Seu bot\xe3o agora \xe9 completamente duplic\xe1vel se tiver mais de um bot\xe3o de rela\xe7\xe3o a exibir..."),(0,r.kt)("h2",{id:"o-que-fazer-agora"},"O que fazer agora?"),(0,r.kt)("p",null,"Nesse tutorial, vimos o b\xe1sico para criar bot\xf5es de rela\xe7\xe3o personalizados. Clique no bot\xe3o abaixo Final Project para baixar o bot\xe3o de rela\xe7\xe3o personalizado."),(0,r.kt)("p",null,"Baixe o projeto terminado:"),(0,r.kt)("div",{className:"center-button"},(0,r.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-OneToManyCustomButton/releases/latest/download/tutorial-OneToManyCustomButton.zip"},"Baixar")))}p.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,b=c["".concat(l,".").concat(m)]||c[m]||p[m]||n;return o?a.createElement(b,i(i({ref:t},d),{},{components:o})):a.createElement(b,i({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<n;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},78889:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Button-height-constraint-cc181760ed0e0e3271203ecbe5a573b6.png"},49233:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Button-view-height-4fb63323063ca0f6323d4e500a6c3bac.png"},69421:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-button-constraints-f6ed75507bad0479ad3cc739dbd9e605.png"},48439:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-button-object-id-storyboard-40a3a5997a462a031ea8725eef807527.png"},35428:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-relation-button-Light-and-Dark-mode-font-and-color-8b7e6af3f02e9276ec211796dde15673.png"},95331:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-relation-button-Xcode-round-corners-53525e920a1ba2f90b2d7cf855738985.png"},9366:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-relation-button-constraints-84480a10d62ffba83d171a9e881c9a3e.png"},74746:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Custom-relation-button-round-corners-f0571acd6b1aad58fc6264826069ac84.png"},920:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Horizontal-constraint-object-ID-5faf25ec4a5a4bbda03471754d590079.png"},59808:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Horizontal-constraint-xml-file-bcda2f30b0de3932a74c3920023ff7a8.png"},9985:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Horizontal-object-id-updated-da61e281af6c4a61c678d8b6bde0e94f.png"},64912:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Relation-custom-button-path-4b5a46bf970d1b8b9584098dfb487207.png"},96770:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-font-and-Color-e9e95f0e6f490a802c3eab8ef624ea1c.png"},63682:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Relations-custom-button-relationButton-4D-for-iOS-bf3b14ba27d987ac7235c102f49fe4ed.png"},48560:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/Top-Space-constraint-a5c9ae57cc62b79b3acb2ebd5610a8b8.png"}}]);