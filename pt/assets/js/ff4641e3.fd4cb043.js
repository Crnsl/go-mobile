"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[3415],{89638:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const i={id:"list-form-svg-file",title:"Template.svg"},o=void 0,n={unversionedId:"tutorials/creating-list-forms/list-form-svg-file",id:"version-19-R6/tutorials/creating-list-forms/list-form-svg-file",title:"Template.svg",description:"O arquivo  template.svg \xe9 uma representa\xe7\xe3o visual b\xe1sica de um modelo. Neste arquivo, precisa definir \xe1reas para poder adicionar campos para seu modelo de formul\xe1rio lista do editor de projeto.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-list-forms/list-form-svg-file.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-svg-file",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-svg-file",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-list-forms/list-form-svg-file.md",tags:[],version:"19-R6",frontMatter:{id:"list-form-svg-file",title:"Template.svg"},sidebar:"tutorials",previous:{title:"Manifest.json",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/list-form-manifest"},next:{title:"Pesquisa multicrit\xe9rio",permalink:"/go-mobile/pt/docs/tutorials/creating-list-forms/multi-criteria-search"}},s={},p=[{value:"Titulo",id:"titulo",level:2},{value:"ios:values",id:"iosvalues",level:2},{value:"Posi\xe7\xe3o, altura e largura da \xe1rea",id:"posi\xe7\xe3o-altura-e-largura-da-\xe1rea",level:2},{value:"\xc1rea searchableField:",id:"\xe1rea-searchablefield",level:3},{value:"\xc1rea SectionField:",id:"\xe1rea-sectionfield",level:3},{value:"\xc1rea ImageField:",id:"\xe1rea-imagefield",level:3},{value:"\xc1rea Title Field:",id:"\xe1rea-title-field",level:3},{value:"\xc1rea Subtitle Field:",id:"\xe1rea-subtitle-field",level:3},{value:"tipos:ios",id:"tiposios",level:2}],d={toc:p};function m(e){let{components:a,...i}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"O arquivo  ",(0,l.kt)("inlineCode",{parentName:"p"},"template.svg")," \xe9 uma representa\xe7\xe3o visual b\xe1sica de um modelo. Neste arquivo, precisa definir \xe1reas para poder adicionar campos para seu modelo de formul\xe1rio lista do editor de projeto."),(0,l.kt)("p",null,"Aqui est\xe1 a vers\xe3o terminada:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Template svg file",src:t(73196).Z,width:"1072",height:"994"})),(0,l.kt)("p",null,"Vamos focar nas diferentes partes de seu arquivo SVG e o que vai precisar para editar."),(0,l.kt)("h2",{id:"titulo"},"Titulo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<title>Custom List form</title>\n")),(0,l.kt)("p",null,"T\xedtulo do modelo."),(0,l.kt)("h2",{id:"iosvalues"},"ios:values"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<text id="cookery" ios:values="search,section,f1,f2,f3"/>\n')),(0,l.kt)("p",null,"Inclui IDs que definem suas \xe1reas formul\xe1rio:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"search "),": Refere a \xe1rea campo pesquisa. Isso permite que arraste e solte um campo como um crit\xe9rio de pesquisa em seu formul\xe1rio lista (opcional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"section "),": Refere a \xe0rea campo da se\xe7\xe3o. Isso permite que arraste e solte um campo como o crit\xe9rio de ordena\xe7\xe3o em seu formul\xe1rio lista (opcional)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"f1, f2 and f3 "),": Refere aos campos a exibir em cada c\xe9lula do formul\xe1rio lista. Isso permite que arraste e solte campos para aparecer em suas c\xe9lulas de formul\xe1rio lista.")),(0,l.kt)("h2",{id:"posi\xe7\xe3o-altura-e-largura-da-\xe1rea"},"Posi\xe7\xe3o, altura e largura da \xe1rea"),(0,l.kt)("p",null,"Pode definir a posi\xe7\xe3o, altura e largura para:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Campo de pesquisa"),(0,l.kt)("li",{parentName:"ul"},"Sectionfield"),(0,l.kt)("li",{parentName:"ul"},"Outros campos gerais que ser\xe3o exibidas em cada c\xe9lula tabela")),(0,l.kt)("h3",{id:"\xe1rea-searchablefield"},"\xc1rea searchableField:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,60)\u201d>\n\n//2\n<rect class="bg field" x="14" y="12" width="238" height="30\u201d/>\n\n//3\n<path class="magnifyingGlass" transform="translate(20,8) scale(1)\u201d/>\n\n//4\n<textArea id="search.label" class="label" x="14" y="8" width="238"/>\n\n//5\n<rect id="search" class="droppable field optional" x="14" y="0" width="238" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35"  ios:bind="searchableField"/>\n\n//6\n<use id="search.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o fundo, altura e largura da \xc1rea"),(0,l.kt)("li",{parentName:"ol"},"\xcdcone para exibir um \xedcone lupa no campo de pesquisa"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,l.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,l.kt)("p",null,"O campo pesquis\xe1vel \xe9 opcional."),(0,l.kt)("h3",{id:"\xe1rea-sectionfield"},"\xc1rea SectionField:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<rect class="bg field" x="10" y="110" width="246" height="30\u201d/>\n\n//2\n<textArea id="section.label" class="label" x="0" y="118" width="250"/>\n\n//3\n<rect id="section" class="droppable optional" x="10" y="110" width="246" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="sectionField\u201d/>\n\n//4\n<use id="section.cancel" x="224" y="111" xlink:href="#cancel" visibility="hidden"/>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o, altura e largura da \xc1rea de fundo"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,l.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,l.kt)("p",null,"O campo de se\xe7\xe3o \xe9 opcional."),(0,l.kt)("h3",{id:"\xe1rea-imagefield"},"\xc1rea ImageField:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)">\n\n//2\n<rect class="bg field" x="14" y="0" width="60" height="65"/>\n\n//3\n<path class="picture" transform="translate(-60 0) scale(5)"/>\n\n//4\n<textArea id="f1.label" class="label" x="14" y="30" width="60">$4DEVAL(:C991("picture"))</textArea>\n\n//5\n<rect id="f1" class="droppable field" x="14" y="0" width="60" height="65" stroke-dasharray="5,2" ios:type="3" ios:bind="fields[0]"/>\n\n//6\n<use id="f1.cancel" x="47" y="-2" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o, altura e largura da \xc1rea de fundo"),(0,l.kt)("li",{parentName:"ol"},"Icone para mostrar uma imagem no imageField"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,l.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,l.kt)("h3",{id:"\xe1rea-title-field"},"\xc1rea Title Field:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,162)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f2.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("titleField"))</textArea>\n\n//4\n<rect id="f2" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[1]\u201d/>\n\n//5\n<use id="f2.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o, altura e largura da \xc1rea de fundo"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,l.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,l.kt)("h3",{id:"\xe1rea-subtitle-field"},"\xc1rea Subtitle Field:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-svg"},'//1\n<g transform="translate(0,198)\u201d>\n\n//2\n<rect class="bg field" x="84" y="0" width="168" height="30\u201d/>\n\n//3\n<textArea id="f3.label" class="label" x="84" y="8" width="168">$4DEVAL(:C991("subtitleField"))</textArea>\n\n//4\n<rect id="f3" class="droppable field" x="84" y="0" width="168" height="30" stroke-dasharray="5,2" ios:type="0,1,2,4,8,9,11,25,35" ios:bind="fields[2]\u201d/>\n\n//5\n<use id="f3.cancel" x="224" y="1" xlink:href="#cancel" visibility="hidden"/>\n</g>\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o Y toda a \xe1rea"),(0,l.kt)("li",{parentName:"ol"},"Posi\xe7\xe3o, altura e largura da \xc1rea de fundo"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o da \xe1rea de texto e a largura"),(0,l.kt)("li",{parentName:"ol"},"Define a posi\xe7\xe3o, altura e largura dos campos solt\xe1veis, assim como ",(0,l.kt)("a",{parentName:"li",href:"#iostypes"},(0,l.kt)("strong",{parentName:"a"},"tipos de campos aceitos"))),(0,l.kt)("li",{parentName:"ol"},"Define um bot\xe3o de cancelar que ser\xe1 mostrado para eliminar o conte\xfado atual")),(0,l.kt)("h2",{id:"tiposios"},"tipos:ios"),(0,l.kt)("p",null,"Os tipos de campo abaixo s\xe3o compat\xedveis:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Code"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"alpha")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"real")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"texto")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"imagem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"data")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"inteiro")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"inteiro longo")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"hora")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"inteiro 64 bits")))),(0,l.kt)("p",null,":::nota"),(0,l.kt)("p",null,"Para saber mais sobre estes tipos de campo, consulte ",(0,l.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Concepts/data-types.html"},(0,l.kt)("strong",{parentName:"a"},"esta p\xe1gina")),"."),(0,l.kt)("p",null,":::"),(0,l.kt)("p",null,":::dica"),(0,l.kt)("p",null,"Para fazer com que a defini\xe7\xe3o de tipo de campo seja mais f\xe1cil, 4D for iOS permite que inclua tipos de campo com  ",(0,l.kt)("strong",{parentName:"p"},"valores positivos")," e tamb\xe9m excluir tipos de campos com ",(0,l.kt)("strong",{parentName:"p"},"valores negativos"),". Por exemplo, ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="-3,-4"')," permite que arraste e solte todos os campos exceto imagens e datas. Para incluir todos os tipos, apenas entre ",(0,l.kt)("inlineCode",{parentName:"p"},'ios:type="all"'),"."),(0,l.kt)("p",null,":::"))}m.isMDXComponent=!0},3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>c});var r=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=p(t),c=l,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return t?r.createElement(f,o(o({ref:a},d),{},{components:t})):r.createElement(f,o({ref:a},d))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=u;var n={};for(var s in a)hasOwnProperty.call(a,s)&&(n[s]=a[s]);n.originalType=e,n.mdxType="string"==typeof e?e:l,o[1]=n;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73196:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/template-svg-file-e14ce32222c51abd644acf29b8a0649e.png"}}]);