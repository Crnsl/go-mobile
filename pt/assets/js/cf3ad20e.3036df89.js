"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[5615],{3184:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(87462),i=(a(67294),a(3905));const r={id:"deployment-in-house-archive-and-export",title:"Arquive e exporte seu Projeto"},n=void 0,s={unversionedId:"tutorials/deploying-in-house/deployment-in-house-archive-and-export",id:"version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export",title:"Arquive e exporte seu Projeto",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",sourceDirName:"tutorials/deploying-in-house",slug:"/tutorials/deploying-in-house/deployment-in-house-archive-and-export",permalink:"/go-mobile/pt/docs/19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/deploying-in-house/deployment-in-house-archive-and-export.md",tags:[],version:"19-R5",frontMatter:{id:"deployment-in-house-archive-and-export",title:"Arquive e exporte seu Projeto"},sidebar:"tutorials",previous:{title:"Instalar em seu dispositivo iOS",permalink:"/go-mobile/pt/docs/19-R5/tutorials/deploying-in-house/testing-on-your-device"},next:{title:"Distribua seu app in-House",permalink:"/go-mobile/pt/docs/19-R5/tutorials/deploying-in-house/deployment-in-house-distribute"}},l={},p=[{value:"PASSO 1. Configura\xe7\xe3o Xcode",id:"passo-1-configura\xe7\xe3o-xcode",level:2},{value:"PASSO 2. Obtenha uma ID de Equipe",id:"passo-2-obtenha-uma-id-de-equipe",level:2},{value:"PASSO 3. Configure 4D for iOS",id:"passo-3-configure-4d-for-ios",level:2},{value:"PASSO 4. Abra seu projeto com Xcode",id:"passo-4-abra-seu-projeto-com-xcode",level:2},{value:"PASSO 5. Arquive seu projeto com Xcode",id:"passo-5-arquive-seu-projeto-com-xcode",level:2},{value:"PASSO 6. Exporte seu projeto",id:"passo-6-exporte-seu-projeto",level:2},{value:"PASSO 7. Selecione seu m\xe9todo de distribui\xe7\xe3o",id:"passo-7-selecione-seu-m\xe9todo-de-distribui\xe7\xe3o",level:2},{value:"PASSO 8. Selecione as op\xe7\xf5es de distribui\xe7\xe3o de sua empresa",id:"passo-8-selecione-as-op\xe7\xf5es-de-distribui\xe7\xe3o-de-sua-empresa",level:2},{value:"O que \xe9 um manifesto?",id:"o-que-\xe9-um-manifesto",level:4},{value:"PASSO 9. Informa\xe7\xe3o sobre a distribui\xe7\xe3o do manifesto",id:"passo-9-informa\xe7\xe3o-sobre-a-distribui\xe7\xe3o-do-manifesto",level:2},{value:"PASSO 10. Volte a assinar sua aplica\xe7\xe3o",id:"passo-10-volte-a-assinar-sua-aplica\xe7\xe3o",level:2},{value:"PASSO 11. Verifique o conte\xfado do .ipa de sua aplica\xe7\xe3o",id:"passo-11-verifique-o-conte\xfado-do-ipa-de-sua-aplica\xe7\xe3o",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Arquivar e exportar seu projeto 4D for iOS"),(0,i.kt)("li",{parentName:"ul"},"Gerar .ipa e manifestar arquivos"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"PR\xc9-REQUISITOS")),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../tutorials/developer-program/register-apple-developer-enterprise-program"},"Programa Apple Enterprise Developer")),(0,i.kt)("li",{parentName:"ul"},"Um servidor web seguro"),(0,i.kt)("li",{parentName:"ul"},"Um \xedcone de resolu\xe7\xe3o de 57 x 57 px"),(0,i.kt)("li",{parentName:"ul"},"Um \xedcone de resolu\xe7\xe3o 512 x 512 px"))),(0,i.kt)("h2",{id:"passo-1-configura\xe7\xe3o-xcode"},"PASSO 1. Configura\xe7\xe3o Xcode"),(0,i.kt)("p",null,"Depois da valida\xe7\xe3o de sua conta por Apple, abra Xcode e agregue sua conta de Apple Enterprise Developer em Preferences  > Accounts."),(0,i.kt)("p",null,"Xcode instalar\xe1 automaticamente os elementos de provis\xe3o e certificados necess\xe1rios."),(0,i.kt)("h2",{id:"passo-2-obtenha-uma-id-de-equipe"},"PASSO 2. Obtenha uma ID de Equipe"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Registre-se na sua Conta de Desenvolvedor Apple. L\xe1 pode achar sua ID de membro de um Time ou Equipe.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Obtenha uma ID de Equipe",src:a(82451).Z,width:"768",height:"739"})),(0,i.kt)("h2",{id:"passo-3-configure-4d-for-ios"},"PASSO 3. Configure 4D for iOS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abra 4D for iOS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Na aba SE\xc7\xd5ES:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Geral: introduza seu Team ID."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Enterprise-Team-ID",src:a(11977).Z,width:"1082",height:"1009"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Publica\xe7\xe3o: ingresse sua URL de produ\xe7\xe3o (HTTPS \xe9 obrigat\xf3rio para o lan\xe7amento).")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Na aba BUILD:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Criar e Executar: Crie seu projeto.")))),(0,i.kt)("h2",{id:"passo-4-abra-seu-projeto-com-xcode"},"PASSO 4. Abra seu projeto com Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desde a aba BUILD do editor de projetos de 4D for iOS, clique em ",(0,i.kt)("strong",{parentName:"li"},"Project > Abrir o projeto com Xcode"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pen your project with Xcode ",src:a(48513).Z,width:"1033",height:"994"})),(0,i.kt)("h2",{id:"passo-5-arquive-seu-projeto-com-xcode"},"PASSO 5. Arquive seu projeto com Xcode"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desde Xcode, v\xe1 ao menu de simulador e selecione ",(0,i.kt)("strong",{parentName:"li"},"Generic iOS Device"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Generic iOS Device",src:a(96220).Z,width:"318",height:"558"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Desde o menu, clique em  Product e selecione ",(0,i.kt)("strong",{parentName:"li"},"Archive"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Archive your Project",src:a(93429).Z,width:"225",height:"337"})),(0,i.kt)("h2",{id:"passo-6-exporte-seu-projeto"},"PASSO 6. Exporte seu projeto"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No final do processo de arquivo, aparece a janela do Organizador com o arquivo que acaba de criar")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clique em ",(0,i.kt)("strong",{parentName:"p"},"Exportar"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Exporte seu projeto",src:a(99304).Z,width:"1228",height:"667"})),(0,i.kt)("h2",{id:"passo-7-selecione-seu-m\xe9todo-de-distribui\xe7\xe3o"},"PASSO 7. Selecione seu m\xe9todo de distribui\xe7\xe3o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selecione ",(0,i.kt)("strong",{parentName:"li"},"Enterprise")," e clique em ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Distribution Method",src:a(19680).Z,width:"737",height:"454"})),(0,i.kt)("h2",{id:"passo-8-selecione-as-op\xe7\xf5es-de-distribui\xe7\xe3o-de-sua-empresa"},"PASSO 8. Selecione as op\xe7\xf5es de distribui\xe7\xe3o de sua empresa"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pode deixar todas as caixas de op\xe7\xe3o marcadas.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Enterprise distribution options",src:a(30706).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pode deixar que o Xcode gere um arquivo manifest.plist para voc\xea ou ger\xe1-lo manualmente.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"clique em ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."))),(0,i.kt)("h4",{id:"o-que-\xe9-um-manifesto"},"O que \xe9 um manifesto?"),(0,i.kt)("p",null,"O manifesto \xe9 uma lista de propriedades baseada em XML e deve conter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL"),": URL que aponta ao arquivo .ipa."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"display-image"),": URL que aponta a um \xedcone PNG de 57 x 57 px (72 x 72 px para iPad) utilizado durante a descarga e a instala\xe7\xe3o."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"full-size-image"),": URL que aponta a uma imagem PNG de 512 x 512 px que representa a aplica\xe7\xe3o iTunes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bundle-identifier"),": a string de identifica\xe7\xe3o de sua aplica\xe7\xe3o. Pode obt\xea-lo desde o arquivo  .plist de seu app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"bundle-version"),": a string da vers\xe3o atual do pacote de sua aplica\xe7\xe3o. Pode obt\xea-lo desde o arquivo  .plist de seu app."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title"),": o nome de sua aplica\xe7\xe3o")),(0,i.kt)("p",null,"Aqui h\xe1 um exemplo de arquivo manifest.plist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n    <key>items</key>\n    <array>\n        <dict>\n            <key>assets</key>\n            <array>\n                <dict>\n                    <key>kind</key>\n                    <string>software-package</string>\n                    <key>url</key>\n                    <string>https://... Contact.ipa</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>display-image</string>\n                    <key>url</key>\n                    <string>https://... Contact_icon_57.png</string>\n                </dict>\n                <dict>\n                    <key>kind</key>\n                    <string>full-size-image</string>\n                    <key>url</key>\n                    <string>https://... Contact_icon_512.png</string>\n                </dict>\n            </array>\n            <key>metadata</key>\n            <dict>\n                <key>bundle-identifier</key>\n                <string>com.contactApp. ContactDemoapp</string>\n                <key>bundle-version</key>\n                <string>1.0</string>\n                <key>kind</key>\n                <string>software</string>\n                <key>title</key>\n                <string>Contact Demo app</string>\n            </dict>\n        </dict>\n    </array>\n</dict>\n</plist>\n')),(0,i.kt)("h2",{id:"passo-9-informa\xe7\xe3o-sobre-a-distribui\xe7\xe3o-do-manifesto"},"PASSO 9. Informa\xe7\xe3o sobre a distribui\xe7\xe3o do manifesto"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Recomendamos deixar que Xcode fa\xe7a o trabalho de entrar sua URL de app assim como as URLs de \xedcones. Voc\xea pode mudar as URLs depois.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Informa\xe7\xe3o sobre a distribui\xe7\xe3o do manifesto",src:a(91353).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clique em ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("h2",{id:"passo-10-volte-a-assinar-sua-aplica\xe7\xe3o"},"PASSO 10. Volte a assinar sua aplica\xe7\xe3o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Deixe que Xcode administre a op\xe7\xe3o ",(0,i.kt)("strong",{parentName:"li"},"Automatically manage signing"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Volte a assinar sua aplica\xe7\xe3o",src:a(26673).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clique em ",(0,i.kt)("strong",{parentName:"li"},"Next"),".")),(0,i.kt)("h2",{id:"passo-11-verifique-o-conte\xfado-do-ipa-de-sua-aplica\xe7\xe3o"},"PASSO 11. Verifique o conte\xfado do .ipa de sua aplica\xe7\xe3o"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aqui pode verificar se o identificador de sua aplica\xe7\xe3o est\xe1 correto, assim como a ID de Time.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Verifique o conte\xfado do .ipa de sua aplica\xe7\xe3o",src:a(89558).Z,width:"737",height:"454"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clique em ",(0,i.kt)("strong",{parentName:"li"},"Export")," e selecione aonde salvar a pasta de sua aplica\xe7\xe3o em seu computador.")))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,i=function(e,t){if(null==e)return{};var a,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?o.createElement(k,n(n({ref:t},u),{},{components:a})):o.createElement(k,n({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,n=new Array(r);n[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var p=2;p<r;p++)n[p]=a[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},93429:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Archive-your-Project-4ded23cdc25f5f9e463d1fd103dd088a.png"},96220:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Deployment-Generic-iOS-Device-6802ac746895e64a241936d873b1569b.png"},19680:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Distribution-Method-selection-4203f92fd6f07bc095d5da471bdbfe31.png"},91353:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Distribution-manifest-information-7ab8a3fa2a7ddbacdb627ad9a6d290ab.png"},11977:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Enterprise-Team-ID-8de2641becb475e122149a607a22ab2b.png"},30706:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Enterprise-distribution-options-a0d5aa35c0dd9adc40c6e128c6a67b90.png"},48513:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Open-your-project-Xcode-4D-for-iOS-e8a07d310a24d536340469f96cf8e105.png"},99304:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Organizer-window-archive-aacf8eecb7c3910074549a45dcf45e32.png"},26673:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Re-sign-your-application-9e11a4678ac11a7bd04df4623a8719d0.png"},89558:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Review-ipa-content-de240a012f798dac5aae762ec059d6bc.png"},82451:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Team-ID-4D-for-iOS-6ed3e72f216ed40062445ab455061acd.png"}}]);