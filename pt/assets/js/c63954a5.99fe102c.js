(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5253],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?r.createElement(g,n(n({ref:t},u),{},{components:a})):r.createElement(g,n({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var p=2;p<o;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},69410:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=a(22122),i=a(19756),o=(a(67294),a(3905)),n=["components"],l={id:"list-form-storyboard",title:"iOS Storyboard"},s=void 0,p={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"version-19-R2/tutorials/creating-list-forms/list-form-storyboard",isDocsHomePage:!1,title:"iOS Storyboard",description:"Agora \xe9 a hora de criar sua interface iOS de formul\xe1rio lista com Xcode.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R2/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-list-forms/list-form-storyboard",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R2/tutorials/creating-list-forms/list-form-storyboard.md",version:"19-R2",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"version-19-R2/tutorials",previous:{title:"Pesquisa multicrit\xe9rio",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Layout Android",permalink:"/go-mobile/pt/docs/19-R2/tutorials/creating-list-forms/list-form-layout"}},u=[{value:"Abrir o arquivo storyboard com Xcode",id:"abrir-o-arquivo-storyboard-com-xcode",children:[]},{value:"Adicione uma &quot;Image View&quot;",id:"adicione-uma-image-view",children:[]},{value:"Adicione etiquetas de t\xedtulo e subt\xedtulo",id:"adicione-etiquetas-de-t\xedtulo-e-subt\xedtulo",children:[]},{value:"Personalizar a etiqueta",id:"personalizar-a-etiqueta",children:[]},{value:"Como entrar os dados em suas c\xe9lulas",id:"como-entrar-os-dados-em-suas-c\xe9lulas",children:[{value:"Image View",id:"image-view",children:[]},{value:"Etiquetas",id:"etiquetas",children:[]}]},{value:"Personalize seu app",id:"personalize-seu-app",children:[]},{value:"O que fazer agora?",id:"o-que-fazer-agora",children:[]}],d={toc:u};function c(e){var t=e.components,l=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Agora \xe9 a hora de criar sua interface iOS de formul\xe1rio lista com Xcode."),(0,o.kt)("p",null,"Aqui est\xe1 o resultado que queremos atingir:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard custom listform",src:a(40787).Z})),(0,o.kt)("p",null,"Para cada c\xe9lula, vamos adicionar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Imagem de perfil"),(0,o.kt)("li",{parentName:"ul"},"Titulo"),(0,o.kt)("li",{parentName:"ul"},"Subt\xedtulo")),(0,o.kt)("h2",{id:"abrir-o-arquivo-storyboard-com-xcode"},"Abrir o arquivo storyboard com Xcode"),(0,o.kt)("p",null,"Primeiro, abra seu arquivo storyboard em Xcode."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty storyboard custom template",src:a(41401).Z})),(0,o.kt)("p",null,"Est\xe1 vazio, ent\xe3o vamos adicionar conte\xfado!"),(0,o.kt)("h2",{id:"adicione-uma-image-view"},'Adicione uma "Image View"'),(0,o.kt)("p",null,"A partir da ",(0,o.kt)("strong",{parentName:"p"},"Object library"),"(biblioteca de objetos), arraste e solte uma  ",(0,o.kt)("strong",{parentName:"p"},"Image View"),' (vista de imagem) em uma c\xe9lula. Pode pesquisar uma "Image View" na barra de pesquisas na parte inferior da biblioteca de Objetos'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Image View storyboard",src:a(10415).Z})),(0,o.kt)("p",null,"A partir do ",(0,o.kt)("strong",{parentName:"p"},"Size inspector panel")," (do lado direito da janela Interface Builder), defina a largura da Imagem View para 110 e a Altura para 110. Depois defina o valor X como 8 e o valor Y para 3."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View position height and width",src:a(80205).Z})),(0,o.kt)("p",null,"Agora, adicione uma restri\xe7\xe3o (Leading: 8) clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (na parte inferior da janela Interface Builder). Adicione as restri\xe7\xf5es de largura e altura, como mostrado:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View leading space width height",src:a(64237).Z})),(0,o.kt)("p",null,"Clique no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Align"),' (na parte inferior do Interface Builder) e marque a op\xe7\xe3o "Vertically in Container".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View align vertically",src:a(78583).Z})),(0,o.kt)("p",null,"Sua Image View agora est\xe1 bem posicionada."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image View final",src:a(2751).Z})),(0,o.kt)("p",null,"Agora vamos trabalhar nas etiquetas de c\xe9lulas."),(0,o.kt)("h2",{id:"adicione-etiquetas-de-t\xedtulo-e-subt\xedtulo"},"Adicione etiquetas de t\xedtulo e subt\xedtulo"),(0,o.kt)("p",null,"Comecemos por ",(0,o.kt)("strong",{parentName:"p"},"agregar uma vista"),'. Pesquise por "View" na ',(0,o.kt)("strong",{parentName:"p"},"Biblioteca de objetos")," e arraste a Vista ao cell container."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add View Storyboard",src:a(20657).Z})),(0,o.kt)("p",null,"A partir do painel",(0,o.kt)("strong",{parentName:"p"},"Size inspector")," (no lado direito do Interface Builder), estabele\xe7a o valor da Largura para 277 e altura para 94. Estabele\xe7a X para 126 e Y para 10."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View position height and width",src:a(12986).Z})),(0,o.kt)("p",null,"Na  Image View, adicione quatro restri\xe7\xf5es clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 11, Leading: 8, Top: 11 e Bottom: 10.67) para posicion\xe1-la corretamente como mostrado abaixo:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View contraints Storyboard",src:a(13973).Z})),(0,o.kt)("p",null,"Arraste e solte uma etiqueta na Vista que acaba de agregar desde a Biblioteca de Objetos."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add label Storyboard",src:a(33440).Z})),(0,o.kt)("p",null,"Desde o painel ",(0,o.kt)("strong",{parentName:"p"},"Size inspector"),", defina o valor de largura de etiqueta para 269 e a Largura em 32. Depois estabele\xe7a o valor de X para 8 e Y para 8"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Duplique a etiqueta")," e no painel ",(0,o.kt)("strong",{parentName:"p"},"Size inspector"),", defina o valor X para 8 e o valor Y para 48."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Duplicate the label",src:a(45872).Z})),(0,o.kt)("p",null,"Selecion ambas as etiquetas e adicione quatro restri\xe7\xf5es clicando no bot\xe3o ",(0,o.kt)("strong",{parentName:"p"},"Add New Constraints")," (Trailing: 0, Leading: 8, Top: 8, e Bottom: Multiple) como mostrado:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Duplicate the label",src:a(7756).Z})),(0,o.kt)("p",null,"Com a etiqueta selecionada, d\xea um duplo-clique em ",(0,o.kt)("strong",{parentName:"p"},"Height constraint")," para come\xe7ar a edi\xe7\xe3o."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label height constraint edition",src:a(91714).Z})),(0,o.kt)("p",null,"Mude a rela\xe7\xe3o de  Equal para ",(0,o.kt)("strong",{parentName:"p"},"Greater Than or Equal")," para que tenha uma altura vari\xe1vel (para manejar etiquetas multilinhas)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change relation label height constraint",src:a(28829).Z})),(0,o.kt)("p",null,"Repita o processo para a segunda etiqueta."),(0,o.kt)("h2",{id:"personalizar-a-etiqueta"},"Personalizar a etiqueta"),(0,o.kt)("p",null,"Desde o Inspetor de atributos (do lado direito da janela Interface Builder), \xe9 poss\xedvel personalizar as cores de fonte de sua etiqueta. Vamos fazer a segunda etiqueta com a cor ",(0,o.kt)("strong",{parentName:"p"},"Dark Grey Color")," :"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label color dark grey",src:a(30370).Z})),(0,o.kt)("p",null,"Tamb\xe9m pode selecionar a cor dominante para seu app:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label color background color",src:a(24906).Z})),(0,o.kt)("p",null,"Do inspetor de atributos, tamb\xe9m pode personalizar a fonte. Seleccione as duas etiquetas e selecione Font > Custom > ",(0,o.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label font custom",src:a(7170).Z})),(0,o.kt)("p",null,"Para completar a personaliza\xe7\xe3o, selecione ambas as etiquetas e ",(0,o.kt)("strong",{parentName:"p"},"ingresse o valor 0 em Lines")," na janela do Inspetor. Isso permite que o n\xfamero de linhas seja ilimitado."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Label lines number",src:a(47415).Z})),(0,o.kt)("p",null,":::nota"),(0,o.kt)("p",null,"O storyboard \xe9 otimizado para ter uma ",(0,o.kt)("strong",{parentName:"p"},"altura de c\xe9lula vari\xe1vel")," dependendo dos conte\xfados de cada c\xe9lula."),(0,o.kt)("p",null,":::"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Row height tableview cell",src:a(37694).Z})),(0,o.kt)("h2",{id:"como-entrar-os-dados-em-suas-c\xe9lulas"},"Como entrar os dados em suas c\xe9lulas"),(0,o.kt)("h3",{id:"image-view"},"Image View"),(0,o.kt)("p",null,"Selecione sua Image View e v\xe1 para ",(0,o.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Clique no ",(0,o.kt)("strong",{parentName:"p"}," bot\xe3o+")," para adicionar uma linha."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"User defined runtime attributes",src:a(90432).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": comece com bindTo para ativar a uni\xe3o do componente. Introduza ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": nome do atributo. Introduza ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Identity inspector storyboard",src:a(50701).Z})),(0,o.kt)("h3",{id:"etiquetas"},"Etiquetas"),(0,o.kt)("p",null,'Selecione a primeira etiqueta e adicione uma linha na \xe1rea "Defined Runtime Attributes":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Valor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field 2 Binding",src:a(48661).Z})),(0,o.kt)("p",null,'Selecione a segunda etiqueta e agregue uma linha na \xe1rea "Defined Runtime Attributes":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": siempre ",(0,o.kt)("inlineCode",{parentName:"p"},"String"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Valor"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Field 3 Binding",src:a(77303).Z})),(0,o.kt)("p",null,"Pode mudar as ",(0,o.kt)("strong",{parentName:"p"},"etiquetas de storyboard")," para ter uma melhor visibilidade:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"D\xea duplo clique na primeira etiqueta para entrar ",(0,o.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,o.kt)("li",{parentName:"ul"},"D\xea duplo clique na segunda etiqueta para editar e digitar ",(0,o.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Storyboard label display names",src:a(30510).Z})),(0,o.kt)("p",null,"V\xe1 ao editor de projeto, selecione seu modelo de formul\xe1rio lista na se\xe7\xe3o Formul\xe1rios, depois clique em Criar e Executar"),(0,o.kt)("p",null,"Este \xe9 o resultado do simulador:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simulator result",src:a(65521).Z})),(0,o.kt)("h2",{id:"personalize-seu-app"},"Personalize seu app"),(0,o.kt)("p",null,"O \xfaltimo passo \xe9 agregar uma borda arredondada para a Image View para ter um melhor design"),(0,o.kt)("p",null,"Selecione seu Image View e adicione as duas linhas abaixo noa \xe1rea User Defined Runtime Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"12")))),(0,o.kt)("p",null,"e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Type"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value"),": selecione a caixa de op\xe7\xe3o"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ImageView corner Radius",src:a(40748).Z})),(0,o.kt)("p",null,"Agora pode construir seu projeto no editor de projetos!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom template final result",src:a(43358).Z})),(0,o.kt)("h2",{id:"o-que-fazer-agora"},"O que fazer agora?"),(0,o.kt)("p",null,"Neste tutorial cobrimos o b\xe1sico da cria\xe7\xe3o de modelos de formul\xe1rio lista com iOS. Voc\xea j\xe1 pode criar seus pr\xf3prios modelos simples usando os recursos do Starter Project. Tamb\xe9m pode ver como construir  ",(0,o.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/19-R2/tutorials/creating-detail-forms/detail-form-template"},"modelos de formul\xe1rio detalhados"),"."),(0,o.kt)("p",null,"Baixe a pasta do modelo de lista completo:"),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Baixar")))}c.isMDXComponent=!0},10415:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},33440:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},20657:function(e,t,a){"use strict";t.Z=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},28829:function(e,t,a){"use strict";t.Z=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},43358:function(e,t,a){"use strict";t.Z=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},45872:function(e,t,a){"use strict";t.Z=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},41401:function(e,t,a){"use strict";t.Z=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},48661:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},77303:function(e,t,a){"use strict";t.Z=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},50701:function(e,t,a){"use strict";t.Z=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},78583:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},40748:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},2751:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},64237:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},80205:function(e,t,a){"use strict";t.Z=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},24906:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},30370:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},7170:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},91714:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},47415:function(e,t,a){"use strict";t.Z=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},7756:function(e,t,a){"use strict";t.Z=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},37694:function(e,t,a){"use strict";t.Z=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},65521:function(e,t,a){"use strict";t.Z=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},40787:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},30510:function(e,t,a){"use strict";t.Z=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},90432:function(e,t,a){"use strict";t.Z=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},13973:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},12986:function(e,t,a){"use strict";t.Z=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);