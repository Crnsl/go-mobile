"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[1488],{16181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={id:"custom-login-form",title:"Custom Login Form"},r=void 0,s={unversionedId:"tutorials/custom-login-form",id:"version-19-R3/tutorials/custom-login-form",title:"Custom Login Form",description:"This tutorial will show you how to:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19-R3/tutorials/custom-login-form.md",sourceDirName:"tutorials",slug:"/tutorials/custom-login-form",permalink:"/go-mobile/es/docs/19-R3/tutorials/custom-login-form",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/custom-login-form.md",tags:[],version:"19-R3",frontMatter:{id:"custom-login-form",title:"Custom Login Form"},sidebar:"version-19-R3/tutorials",previous:{title:"Create your first mobile app with 4D",permalink:"/go-mobile/es/docs/19-R3/tutorials/create-your-first-app"},next:{title:"Plantillas de formulario lista",permalink:"/go-mobile/es/docs/19-R3/tutorials/creating-list-forms/list-form-template"}},l={},d=[{value:"PASO 1. Comencemos",id:"paso-1-comencemos",level:2},{value:"PASO 2. Include and use a custom login form",id:"paso-2-include-and-use-a-custom-login-form",level:2},{value:"PASO 3. On Mobile app Authentication database method",id:"paso-3-on-mobile-app-authentication-database-method",level:2},{value:"PASO 4. Project Methods",id:"paso-4-project-methods",level:2},{value:"Authentication method",id:"authentication-method",level:3},{value:"GenerateQRCODE method",id:"generateqrcode-method",level:3},{value:"PASO 5. Website",id:"paso-5-website",level:2},{value:"index.html",id:"indexhtml",level:3},{value:"createQRCode.html",id:"createqrcodehtml",level:3},{value:"generatedQRCode.shtml",id:"generatedqrcodeshtml",level:3},{value:"PASO 6. Get the entire senario",id:"paso-6-get-the-entire-senario",level:2},{value:"Login into your website home page",id:"login-into-your-website-home-page",level:3},{value:"Generate the QR Code",id:"generate-the-qr-code",level:3},{value:"Build your app on a real device",id:"build-your-app-on-a-real-device",level:3},{value:"PASO 7. \xbfQu\xe9 hacer ahora?",id:"paso-7-qu\xe9-hacer-ahora",level:2}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will show you how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create and use a custom ",(0,a.kt)("a",{parentName:"li",href:"https://4d-for-ios.github.io/gallery/#/type/form-login"},"login form"),"."),(0,a.kt)("li",{parentName:"ul"},"Allow authenticated users to login by scanning a QRCode.",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"REQUISITOS PREVIOS")),(0,a.kt)("p",{parentName:"blockquote"},"A website with authenticated users"),(0,a.kt)("p",{parentName:"blockquote"},"4D 18R6 minimum"),(0,a.kt)("p",{parentName:"blockquote"},"Real iOS mobile device (simulator do not simulate camera)")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Scenario: You already have a website with authenticated users and you want then to login into their app just by scanning a QRCode")),(0,a.kt)("p",null,":::nota"),(0,a.kt)("p",null,"Selecting a custom login form from the Project editor is not implemented yet but let's see how to do that manually"),(0,a.kt)("p",null,":::"),(0,a.kt)("h2",{id:"paso-1-comencemos"},"PASO 1. Comencemos"),(0,a.kt)("p",null,"In this tutorial, we're going to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Include a custom login form"),(0,a.kt)("li",{parentName:"ul"},"Add the ability for your app users to login just by scanning a QRCode")),(0,a.kt)("p",null,"First download our Starter project, which contains a database file and ready to use webpages in the Webfolder folder:"),(0,a.kt)("div",{className:"center-button"},(0,a.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomLoginForm/archive/main.zip"},"Starter project")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This project already includes a Users table with a Login and a Password for each authenticated user."))),(0,a.kt)("h2",{id:"paso-2-include-and-use-a-custom-login-form"},"PASO 2. Include and use a custom login form"),(0,a.kt)("p",null,"To use a custom login form, the first thing you'll need to do is creating a ",(0,a.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Resources/Mobile/form/login")," folder."),(0,a.kt)("p",null,"Download the Sign in With ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mesopelagique/form-login-SignInWithQRCode/archive/master.zip"},"QRCode login form")," and simply drop it in the login folder you've just created."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"login folder",src:n(80873).Z,width:"2020",height:"814"})),(0,a.kt)("p",null,"Then open the ",(0,a.kt)("em",{parentName:"p"},"YourDatabase.4dbase/Mobile Projects/ContactQRCodeLogin/project.4dmobileapp")," file"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"project.4dmobileapp",src:n(85173).Z,width:"2020",height:"814"})),(0,a.kt)("p",null,"With your project closed, and add the following line : ",(0,a.kt)("em",{parentName:"p"},'"login": "/SignInWithQRCode",')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n    "info": {\n        "version": 5,\n        "target": "iOS",\n        "ideVersion": "1870",\n        "ideBuildVersion": "261295",\n        "componentBuild": ""\n    },\n    "login": "/SignInWithQRCode",\n    ...\n\n')),(0,a.kt)("p",null,"This will allow to initialize the custom template and use it during the build process."),(0,a.kt)("p",null,"You are done for the custom template int\xe9gration! So quite an easy process :)"),(0,a.kt)("h2",{id:"paso-3-on-mobile-app-authentication-database-method"},"PASO 3. On Mobile app Authentication database method"),(0,a.kt)("p",null,"Open the QRCode mobile project and go right to the Publishing section."),(0,a.kt)("p",null,"From here check the Authentication feature and Create the database method clicking on the Create button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Publishing section",src:n(30130).Z,width:"2164",height:"2000"})),(0,a.kt)("p",null,"This is how it should look to authenticate users :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'var $0 : Object\nvar $1 : Object\n\nvar $request; $response : Object\n\n$request:=$1  // Informations provided by mobile application\n$response:=New object  // Informations returned to mobile application\n\n$entity:=ds.User.query("login = :1"; $request.email)\nIf ($entity.length>0)\n    $password:=$entity.first().password  // Get the password from the table\n\n    If (Verify password hash($password; $request.parameters.token))\n        // Comparison with what you receive in the request\n\n        $response.success:=True\n    Else \n        $response.success:=False\n    End if \nElse \n    $response.success:=False\nEnd if \n\n// Optional message to display on mobile App.\nIf ($response.success)\n    $response.statusText:="You are successfully authenticated"\nElse \n    $response.statusText:="Sorry, you are not authorized to use this application."\nEnd if \n\n$0:=$response\n')),(0,a.kt)("h2",{id:"paso-4-project-methods"},"PASO 4. Project Methods"),(0,a.kt)("h3",{id:"authentication-method"},"Authentication method"),(0,a.kt)("p",null,"Here we get the variable from the form and check if those values exist in the User table :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'//Retrieve all the variables of the form\nC_TEXT($1)\nARRAY TEXT($arrNames; 0)\nARRAY TEXT($arrVals; 0)\n\n// Get the login and pswd variable from the authentication web page\nWEB GET VARIABLES($arrNames; $arrVals)\n$VLOGIN:=Find in array($arrNames; "VLOGIN")\n$VPASS:=Find in array($arrNames; "VPASS")\n\n// Shared variable creation to access to it in the code\nUse (Storage)\n    Storage.session:=New shared object("login"; ""; "password"; "")\nEnd use \n\n// Search if the login / pswd exist and if the user can be authentified\n$entity:=ds.User.query("login = :1 and password = :2"; $arrVals{$VLOGIN}; $arrVals{$VPASS})\n\n// If the login / pswd exist the login / pswd are initialised in the share variable\nIf ($entity.length>0)\n    Use (Storage.session)\n        Storage.session.login:=$arrVals{$VLOGIN}\n        Storage.session.password:=$arrVals{$VPASS}\n        Storage.session.success:=True\n    End use \n\n    // Redirection to the web page\n    WEB SEND HTTP REDIRECT("/createQRCode.html")\n\nElse \n    // Back to the home page\n    Use (Storage.session)\n        Storage.session.success:=False\n    End use \n    WEB SEND HTTP REDIRECT("/")\nEnd if \n')),(0,a.kt)("h3",{id:"generateqrcode-method"},"GenerateQRCODE method"),(0,a.kt)("p",null,"Here we generated a vqrCodeData that is a json that include the user email and the encrtypted password that are the data that are going to be emebeded in the QRCode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-4d"},'// Use storage variable\n$currentUserEmail:=Storage.session.login\n$token:=Storage.session.password\n$options:=New object("algorithm"; "bcrypt"; "cost"; 4)\n$hash:=Generate password hash($token; $options)\n\n// Process variable creation (json value with mail and encrypted pswd)\nvqrCodeData:=JSON Stringify(New object("email"; $currentUserEmail; "token"; $hash))\n\n// Redirection to the QRcode webpage\nWEB SEND HTTP REDIRECT("/generatedQRCode.shtml")\n')),(0,a.kt)("h2",{id:"paso-5-website"},"PASO 5. Website"),(0,a.kt)("p",null,"For this tutorial, three html pages are already available into the WebFolder folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The authentication page (index.html)"),(0,a.kt)("li",{parentName:"ul"},"The QRcode generation page (createQRCode.html)"),(0,a.kt)("li",{parentName:"ul"},"The final page the user will scan from his mobile device (generatedQRCode.shtml)")),(0,a.kt)("p",null,"Let's have a focus on those three pages :"),(0,a.kt)("h3",{id:"indexhtml"},"index.html"),(0,a.kt)("p",null,"Here, we just use a 4DACTION to post login and password to be used in the ",(0,a.kt)("em",{parentName:"p"},"Authentication Project Method")," that we are going to see in step 4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  <form class="box" ACTION="/4DACTION/Authentication" METHOD=post>\n  <h1>1. Login</h1>\n  <input type="text" id="login" placeholder="Username" name=VLOGIN >\n  <input type="password" id="login" placeholder="Password" name=VPASS>\n  <input type="submit" name="" value="Login">\n  </form>\n')),(0,a.kt)("h3",{id:"createqrcodehtml"},"createQRCode.html"),(0,a.kt)("p",null,"Here, we use call the ",(0,a.kt)("em",{parentName:"p"},"GenerateQRCODE Project Method")," using a 4DACTION:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>2. GENERATE YOUR QRCODE</h1>\n    <div>\n        <p>Create your QRCode to authenticate clicking <a href="/4DACTION/GenerateQRCODE">Here</a></p>\n    </div>\n')),(0,a.kt)("h3",{id:"generatedqrcodeshtml"},"generatedQRCode.shtml"),(0,a.kt)("p",null,"In this last page, we use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Tags/tags.html"},"4D tags")," to get the ",(0,a.kt)("em",{parentName:"p"},"data")," value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1>3. SCAN THE QRCODE FROM YOUR PHONE</h1>\n  <div id="canvas"></div>\n\n  <script type="text/javascript">\n\n    const qrCode = new QRCodeStyling({\n      width: 300,\n      height: 300,\n      data: \'\x3c!--#4DEVAL vqrCodeData--\x3e\',\n      dotsOptions: {\n        color: "#000",\n        type: "square"\n      },\n      backgroundOptions: {\n        color: "#FFFFFF",\n      }\n    });\n    qrCode.append(document.getElementById("canvas"));\n  <\/script>\n\n')),(0,a.kt)("h2",{id:"paso-6-get-the-entire-senario"},"PASO 6. Get the entire senario"),(0,a.kt)("h3",{id:"login-into-your-website-home-page"},"Login into your website home page"),(0,a.kt)("p",null,"Enter ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:david@4D.com"},"david@4D.com"))," in the Login field and ",(0,a.kt)("strong",{parentName:"p"},"TEST")," in the Password field in your website home page and click Login (Which is an existing record in the User table)."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login form",src:n(38238).Z,width:"2330",height:"1418"})),(0,a.kt)("h3",{id:"generate-the-qr-code"},"Generate the QR Code"),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"HERE")," button to generate the QR Code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create QR Code",src:n(31801).Z,width:"2330",height:"1418"})),(0,a.kt)("p",null,"You will be redirected to the final QR Code page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generated QR Code",src:n(49003).Z,width:"2554",height:"1594"})),(0,a.kt)("h3",{id:"build-your-app-on-a-real-device"},"Build your app on a real device"),(0,a.kt)("p",null,"Install your mobile app from the project editor on a real device."),(0,a.kt)("p",null,"Then the custom login form will appear to allow you scanning the generated QRCode and login into your mobile app."),(0,a.kt)("p",null,"Here is the final result :"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sign in with QR Code",src:n(53266).Z,width:"900",height:"563"})),(0,a.kt)("h2",{id:"paso-7-qu\xe9-hacer-ahora"},"PASO 7. \xbfQu\xe9 hacer ahora?"),(0,a.kt)("p",null,"The step 2 covers how to include easily any custom login form in your mobile app. So you should now be able just followin this step, to create your own custom login form and use it on your own."),(0,a.kt)("p",null,"Reading next steps you are now able to include the Sign In With QRCode login and allow your authenticated users to scan a QRCode to login into their app."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85173:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/4dmobileapp-file-7cfeb3ed913af5e2efd4e5648fa04fb8.png"},31801:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-qr-code-92fb34962678fd5aec2c78c3975485e2.png"},49003:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/generated-qr-code-b8adf3b5a3147675e82e1c11828bfe16.png"},80873:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-folder-5b1131cc505b021c9991c73d79d626b2.png"},38238:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-form-503af282635c8c852d6ec6ff0697d820.png"},30130:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/publishing-section-88709c4b88a53b4c808e536eaa85a51f.png"},53266:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sign-in-with-qr-code-f835be625ce5eece635c10088e55430c.gif"}}]);