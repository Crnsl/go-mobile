"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7638],{48785:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>p});var o=t(87462),i=(t(67294),t(3905));const r={id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},s=void 0,n={unversionedId:"tutorials/customizing-with-xcode/customize-your-ios-app",id:"version-19-R5/tutorials/customizing-with-xcode/customize-your-ios-app",title:"Personalizar seu app 4D for iOS",description:"Now, let's do some storyboard modification ... from simple to complex.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/customizing-with-xcode/customize-your-ios-app.md",sourceDirName:"tutorials/customizing-with-xcode",slug:"/tutorials/customizing-with-xcode/customize-your-ios-app",permalink:"/pt/docs/19-R5/tutorials/customizing-with-xcode/customize-your-ios-app",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/customizing-with-xcode/customize-your-ios-app.md",tags:[],version:"19-R5",frontMatter:{id:"customize-your-ios-app",title:"Personalizar seu app 4D for iOS"},sidebar:"tutorials",previous:{title:"Organizar um projeto 4D for iOS",permalink:"/pt/docs/19-R5/tutorials/customizing-with-xcode/4d-for-ios-project-organization"},next:{title:"Selecionar um Apple Developer Program",permalink:"/pt/docs/19-R5/tutorials/developer-program/selecting-your-developer-program"}},l={},p=[{value:"PASSO 1. Modifica\xe7\xe3o de etiqueta simples",id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples",level:2},{value:"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil",id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil",level:2},{value:"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil",id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil",level:2},{value:"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es",id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es",level:2},{value:"Agora, vamos trabalhar na etiqueta Nome.",id:"agora-vamos-trabalhar-na-etiqueta-nome",level:4},{value:"Finalmente, vamos trabalhar na etiqueta do sobrenome.",id:"finalmente-vamos-trabalhar-na-etiqueta-do-sobrenome",level:4}],d={toc:p};function u(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now, let's do some storyboard modification ... from simple to complex."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Final result",src:t(56801).Z,width:"1276",height:"1134"})),(0,i.kt)("h2",{id:"passo-1-modifica\xe7\xe3o-de-etiqueta-simples"},"PASSO 1. Modifica\xe7\xe3o de etiqueta simples"),(0,i.kt)("p",null,"Vamos come\xe7ar modificando a fonte e cor de uma etiqueta:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abra o arquivo ",(0,i.kt)("em",{parentName:"li"},"ContactDetailsForm.storyboard")," desde a aba Navigation."),(0,i.kt)("li",{parentName:"ul"},"Clique na etiqueta do primeiro nome (voc\xea pode tamb\xe9m selecionar o construtor de interfaces no painel esquerdo)."),(0,i.kt)("li",{parentName:"ul"},"Selecione o painel Inspetor de atributos da \xe1rea de utilit\xe1rio.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Attributes inspector",src:t(58094).Z,width:"1117",height:"790"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Altere a fonte da Helvetica Neue bold para Futura bold.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Attributes inspector font",src:t(42597).Z,width:"1291",height:"1006"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Voc\xea tamb\xe9m pode alterar a cor da fonte no mesmo painel.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Attributes inspector color",src:t(9361).Z,width:"1291",height:"1006"})),(0,i.kt)("h2",{id:"passo-2-mudar-a-posi\xe7\xe3o-de-imagem-de-perfil"},"PASSO 2. Mudar a posi\xe7\xe3o de imagem de perfil"),(0,i.kt)("p",null,"Todos os modelos 4D for iOS usam restri\xe7\xf5es para alementos do aplicativo para serem bem exibidos em todos os aparelhos."),(0,i.kt)("p",null,"No arquivo ",(0,i.kt)("em",{parentName:"p"},"ContactDetailsForm.storyboard"),", as etiquetas First Name, e Last Name est\xe3o todas alinhadas ao centro no momento."),(0,i.kt)("p",null,"Vamos mud\xe1-lo para aparecer assim:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:t(1509).Z,width:"545",height:"964"})),(0,i.kt)("p",null,"Primeiro, alinhe verticalmente as imagens e arraste as etiquetas nome e sobrenome para a direita da imagem."),(0,i.kt)("p",null,"Em seguida, selecione a imagem e v\xe1 para o painel de atributos de tamanho da \xe1rea de Utility. Altere o valor de X de 161.67 a 40.67 e o valor de Y de 28 a 79."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Profil picture position",src:t(3887).Z,width:"1072",height:"1034"})),(0,i.kt)("p",null,"Como voc\xea pode ver, a posi\xe7\xe3o foi alterada, mas o Xcode est\xe1 exibindo linhas amarelas... por qu\xea? Estas linhas amarelas representam restri\xe7\xf5es que n\xe3o s\xe3o mais v\xe1lidas."),(0,i.kt)("h2",{id:"passo-3-atualizar-as-restri\xe7\xf5es-de-imagens-de-perfil"},"PASSO 3. Atualizar as restri\xe7\xf5es de imagens de perfil"),(0,i.kt)("p",null,"Para alinhar verticalmente a imagem no centro no Superview (a vis\xe3o que a cont\xe9m), precisamos eliminar as restri\xe7\xf5es existentes e adicionar novas."),(0,i.kt)("p",null,"A imagem possui atualmente as seguintes restri\xe7\xf5es:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Width Equals: uma largura de 78 pixels."),(0,i.kt)("li",{parentName:"ul"},"Heigh Equals: Uma altura fixa de 78 pixels."),(0,i.kt)("li",{parentName:"ul"},"Align Center x: centra a imagem em um eixo horizontal definido anteriormente."),(0,i.kt)("li",{parentName:"ul"},"Top Space: Uma quantia fixa de espa\xe7o da parte superior da imagem at\xe9 o topo da vista."),(0,i.kt)("li",{parentName:"ul"},"Est\xe1cio inferior a ",(0,i.kt)("inlineCode",{parentName:"li"},"<First Name>"),": o espa\xe7o previamente definido entre a etiqueta do Nome e a imagem.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Profil picture constraints",src:t(5874).Z,width:"312",height:"397"})),(0,i.kt)("p",null,"Apague todas as restri\xe7\xf5es exceto Width e Height (voc\xea vai modific\xe1-las depois na se\xe7\xe3o Restri\xe7\xf5es no Size Inspector). O outline de imagem deve estar agora em vermelho, porque as restri\xe7\xf5es est\xe3o faltando."),(0,i.kt)("p",null,"Clique no bot\xe3o Align (na parte inferior da janela Interface Builder) e marque a caixa de sele\xe7\xe3o ",(0,i.kt)("strong",{parentName:"p"},"Vertically in Container"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Profil picture Align",src:t(56257).Z,width:"1072",height:"1034"})),(0,i.kt)("p",null,"Depois clique no bot\xe3o ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints")," e adiciona uma nova restri\xe7\xe3o de distanciamento entre linhas (a restri\xe7\xe3o da esquerda)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Profil picture new constraints",src:t(43293).Z,width:"1072",height:"1034"})),(0,i.kt)("p",null,"Nesse ponto, todas as restri\xe7\xf5es de imagem de perfil devem estar em azul."),(0,i.kt)("p",null,"Parab\xe9ns! Sua foto do perfil est\xe1 agora bem posicionada com as restri\xe7\xf5es corretas."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"DICAS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Para criar uma restri\xe7\xe3o entre duas vistas, pressione Ctrl e arraste uma das vistas para a outra. Quando soltar o bot\xe3o do mouse, a Interface Builder mostra um menu com uma lista de poss\xedveis restri\xe7\xf5es.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pode apagar restri\xe7\xf5es selecionando-as do inspector Size ou desde o Interface Builder.")))),(0,i.kt)("h2",{id:"passo-4-atualizar-posi\xe7\xf5es-de-etiqueta-e-restri\xe7\xf5es"},"PASSO 4. Atualizar posi\xe7\xf5es de etiqueta e restri\xe7\xf5es"),(0,i.kt)("h4",{id:"agora-vamos-trabalhar-na-etiqueta-nome"},"Agora, vamos trabalhar na etiqueta Nome."),(0,i.kt)("p",null,"Vamos come\xe7ar mudando a posi\xe7\xe3o e largura:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecione a etiqueta First Name no Interface Builder."),(0,i.kt)("li",{parentName:"ul"},"Depois mude a largura 386 a 267 p\xedxels,"),(0,i.kt)("li",{parentName:"ul"},"Muda o valor de X de 8 a 127 p\xedxels e o valor de Y de 28 a 79 p\xedxels.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"First Name Label position",src:t(23137).Z,width:"1139",height:"1040"})),(0,i.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space e de bottom space desde o inspetor de tamanho."),(0,i.kt)("li",{parentName:"ul"},"Adicione uma restri\xe7\xe3o de leading space clicando no bot\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Add New Constraints")," para colocar a etiqueta de nome \xe0 direita da foto de perfil."),(0,i.kt)("li",{parentName:"ul"},"Aperte a tecla Ctrl e arraste a etiqueta de nome \xe0 foto de perfil. Selecione a restri\xe7\xe3o superior no menu para alinhar ambos os elementos na parte superior.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"First Name Label top constraint",src:t(5317).Z,width:"1139",height:"1040"})),(0,i.kt)("h4",{id:"finalmente-vamos-trabalhar-na-etiqueta-do-sobrenome"},"Finalmente, vamos trabalhar na etiqueta do sobrenome."),(0,i.kt)("p",null,"Mude a posi\xe7\xe3o e a largura:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecione a etiqueta Last Name do Interface Builder."),(0,i.kt)("li",{parentName:"ul"},"Mude a largura de 386  para 267 p\xedxels."),(0,i.kt)("li",{parentName:"ul"},"Mude o valor X de 8 para 127 p\xedxels e o valor de Y de 144,33 para 118,33 p\xedxels.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Last Name Label position",src:t(36750).Z,width:"1139",height:"1040"})),(0,i.kt)("p",null,"Modifique as restri\xe7\xf5es restantes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apague as restri\xe7\xf5es de leading space do inspetor de Size."),(0,i.kt)("li",{parentName:"ul"},"Adicione limita\xe7\xf5es de leading space e de espa\xe7o superior clicando no bot\xe3o Adicionar novas restri\xe7\xf5es.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Last Name Label constraint",src:t(93687).Z,width:"1139",height:"1040"})),(0,i.kt)("p",null,"Suas duas etiquetas est\xe3o resosicionadas."),(0,i.kt)("p",null,"Vamos ver o resultado no Simulador!"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:t(39495).Z,width:"545",height:"964"})),(0,i.kt)("p",null,"Hmmmm. N\xe3o \xe9 exatamente o que quer\xedamos..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecione as etiquetas de First Name e Last Name e mude o alinhamento do centro para a esquerda no inspetor de atributos.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Labels Alignment",src:t(32522).Z,width:"1139",height:"1040"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Depois, selecione a imagem de perfil e d\xea duplo clique na restri\xe7\xe3o de leading space."),(0,i.kt)("li",{parentName:"ul"},"Mude o valor 40,67 p\xedxels da constante para 80 p\xedxels.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Constraints adjustments",src:t(70824).Z,width:"1140",height:"1065"})),(0,i.kt)("p",null,"Muito melhor! Agora todas as restri\xe7\xf5es est\xe3o funcionando e as etiquetas n\xe3o est\xe3o rompendo outras restri\xe7\xf5es."),(0,i.kt)("p",null,"Como pode ver, personalizar seu app \xe9 bem simples!"))}u.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var o=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),p=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return o.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),m=p(t),c=i,f=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return t?o.createElement(f,s(s({ref:a},d),{},{components:t})):o.createElement(f,s({ref:a},d))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var n={};for(var l in a)hasOwnProperty.call(a,l)&&(n[l]=a[l]);n.originalType=e,n.mdxType="string"==typeof e?e:i,s[1]=n;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58094:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Attributes-inspector-Xcode-4D-for-iOS-f340fd4a83c3c2250a0f81455f5a7203.png"},9361:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Attributes-inspector-color-Xcode-4D-for-iOS-e21d893ce190134448df5e393ba60b8a.png"},42597:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Attributes-inspector-font-Xcode-4D-for-iOS-59d57a58ae8a261e224e3eaad74446c9.png"},70824:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Constraints-adjustments-Xcode-4D-for-iOS-8dc49472a1891d4dd26b574c62365f41.png"},23137:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/First-Name-Label-position-Xcode-4D-for-iOS-5cbe6158a70c33967849a75bc651ac3d.png"},5317:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/First-Name-Label-top-constraint-Xcode-4D-for-iOS-e2f98a8f14aa639e46d296c06971f200.png"},32522:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Labels-Alignment-Xcode-4D-for-iOS-a9e38f0b9f7232c654635a11ed095ea7.png"},93687:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Last-Name-Label-constraint-Xcode-4D-for-iOS-010bb5c3150ffe7b2d8abeea0d1740c1.png"},36750:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Last-Name-Label-position-Xcode-4D-for-iOS-0afadb6357c1f471fe6e88495982e3fe.png"},56257:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Profil-picture-Align-Xcode-4D-for-iOS-53ee2e570cd637a4519f49dae9934ed0.png"},5874:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Profil-picture-constraints-Xcode-4D-for-iOS-90c8223a67ddd9dec4bc697f4b0f8697.png"},43293:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Profil-picture-new-constraints-4D-for-iOS-1dcc347bf579a41c8330c3987d302f0e.png"},3887:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Profil-picture-position-Xcode-4D-for-iOS-67d0fbd9b08ccd484d88e08274bd9f6f.png"},56801:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Simlator-Before-After-Xcode-4D-for-iOS-0c6f6aea6a2df3bcd86abd46f718cac2.png"},1509:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Simlator-Final-Xcode-4D-for-iOS-989d65cf9725f55ae7a596dbf23821be.png"},39495:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/Simulator-Xcode-4D-for-iOS-e17f8598fa1241a9c7bf382ef1108795.png"}}]);