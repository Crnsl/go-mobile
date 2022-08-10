"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4953],{94496:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={id:"list-form-storyboard",title:"iOS Storyboard"},r=void 0,o={unversionedId:"tutorials/creating-list-forms/list-form-storyboard",id:"version-19-R6/tutorials/creating-list-forms/list-form-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS list form interface with Xcode.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-list-forms/list-form-storyboard.md",sourceDirName:"tutorials/creating-list-forms",slug:"/tutorials/creating-list-forms/list-form-storyboard",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-list-forms/list-form-storyboard.md",tags:[],version:"19-R6",frontMatter:{id:"list-form-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Multi-criteria Search",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/multi-criteria-search"},next:{title:"Android Layout",permalink:"/go-mobile/ja/docs/tutorials/creating-list-forms/list-form-layout"}},s={},p=[{value:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092Xcode\u3067\u958b\u304f",id:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092xcode\u3067\u958b\u304f",level:2},{value:"Add an Image View",id:"add-an-image-view",level:2},{value:"\u30bf\u30a4\u30c8\u30eb\u304a\u3088\u3073\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u306e\u30e9\u30d9\u30eb",id:"\u30bf\u30a4\u30c8\u30eb\u304a\u3088\u3073\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u306e\u30e9\u30d9\u30eb",level:2},{value:"Label customization",id:"label-customization",level:2},{value:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"Image View",id:"image-view",level:3},{value:"\u30e9\u30d9\u30eb",id:"\u30e9\u30d9\u30eb",level:3},{value:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",id:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",level:2},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],d={toc:p};function c(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now it's time to create your iOS list form interface with Xcode."),(0,i.kt)("p",null,"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30ea\u30b9\u30c8\u753b\u9762\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:a(80013).Z,width:"1359",height:"754"})),(0,i.kt)("p",null,"\u30bb\u30eb\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ec\u30a4\u30a2\u30a6\u30c8\u3092\u30c7\u30b6\u30a4\u30f3\u3057\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u30a2\u30a4\u30b3\u30f3"),(0,i.kt)("li",{parentName:"ul"},"\u30bf\u30a4\u30c8\u30eb"),(0,i.kt)("li",{parentName:"ul"},"\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb")),(0,i.kt)("h2",{id:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092xcode\u3067\u958b\u304f"},"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092Xcode\u3067\u958b\u304f"),(0,i.kt)("p",null,"storyboard\u30d5\u30a1\u30a4\u30eb\uff08\u62e1\u5f35\u5b50\u306f\u975e\u8868\u793a\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff09\u3092Xcode\u3067\u958b\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\uff08\u7a7a\u306e\u72b6\u614b\uff09",src:a(87973).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"It's quite empty, so let's add some content!"),(0,i.kt)("h2",{id:"add-an-image-view"},"Add an Image View"),(0,i.kt)("p",null,"Let's begin by ",(0,i.kt)("strong",{parentName:"p"},"adding a View"),'. Search for "View" in the ',(0,i.kt)("strong",{parentName:"p"},"Object library")," and drag it into the cell container."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Image View storyboard",src:a(3030).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 110 and the Height value to 110. \u307e\u305f\uff0cX\u5ea7\u6a19\u30928\u306b\uff0cY\u5ea7\u6a19\u30923\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View position height and width",src:a(94024).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Next, add a constraint (Leading: 8) by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (at the bottom of the Interface Builder window). Width\u304a\u3088\u3073Height\u306e\u30c1\u30a7\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u3092\u30af\u30ea\u30c3\u30af\u3057\uff0c\u5e45\u3068\u9ad8\u3055\u306b\u56fa\u5b9a\u5024\u306e\u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View\u524d\u306e\u4f59\u767d",src:a(52955).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Finally, click on the ",(0,i.kt)("strong",{parentName:"p"},"Align button"),' (at the bottom of the Interface Builder window) and check the "Vertically in Container" checkbox.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View\u5782\u76f4\u63c3\u3048",src:a(73498).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Your Image View is now well positioned."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image View\uff08\u5b8c\u6210\uff09",src:a(19622).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"\u30bb\u30eb\u5185\u306b\u8868\u793a\u3055\u308c\u308b\u30e9\u30d9\u30eb\u306e\u307b\u3046\u306b\u76ee\u3092\u5411\u3051\u307e\u3057\u3087\u3046\u3002"),(0,i.kt)("h2",{id:"\u30bf\u30a4\u30c8\u30eb\u304a\u3088\u3073\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u306e\u30e9\u30d9\u30eb"},"\u30bf\u30a4\u30c8\u30eb\u304a\u3088\u3073\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u306e\u30e9\u30d9\u30eb"),(0,i.kt)("p",null,"Select your Image View and go to ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,i.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View\u3092\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u8ffd\u52a0",src:a(4302).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the View Width value to 277 and the Height value to 94. \u307e\u305f\uff0cX\u5ea7\u6a19\u3092126\u306b\uff0cY\u5ea7\u6a19\u309210\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View\u306e\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba",src:a(66613).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"For the Image View, add four constraints by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 11, Leading: 8, Top: 11, and Bottom: 10.67) for the view to be well positioned, as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View\u306e\u5236\u7d04",src:a(855).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"View\u306e\u4e0a\u306bObject Library\u304b\u3089Label\u3092\u30c9\u30e9\u30c3\u30b0\uff06\u30c9\u30ed\u30c3\u30d7\u3057\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u3092\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u8ffd\u52a0",src:a(76827).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"From the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the Label View Width value to 269 and the Height value to 32. Then set the X value to 8 and the Y value to 8."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Duplicate the label")," and in the ",(0,i.kt)("strong",{parentName:"p"},"Size inspector panel"),", set the X value to 8 and the Y value to 48."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u306e\u30b3\u30d4\u30fc",src:a(42592).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Select both labels add four constraints by clicking on the ",(0,i.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 8, Top: 8, and Bottom: Multiple) as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u4f4d\u7f6e\u306e\u5236\u7d04",src:a(34453).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"With a label selected, double-click on the ",(0,i.kt)("strong",{parentName:"p"},"Height constraint")," to edit it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u9ad8\u3055\u306e\u5236\u7d04",src:a(36373).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"Change the relation from Equal to ",(0,i.kt)("strong",{parentName:"p"},"Greater Than or Equal")," so it can have a variable height (to handle multiline labels)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u9ad8\u3055\u306e\u5236\u7d04\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",src:a(4366).Z,width:"1189",height:"1006"})),(0,i.kt)("p",null,"\u4ed6\u65b9\u306e\u30e9\u30d9\u30eb\u306b\u5bfe\u3057\u3066\u3082\u540c\u3058\u3053\u3068\u3092\u3057\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"label-customization"},"Label customization"),(0,i.kt)("p",null,"\u30e9\u30d9\u30eb\u306e\u30d5\u30a9\u30f3\u30c8\u30ab\u30e9\u30fc\u306f\uff0c Attribute inspector\uff08\u30a6\u30a3\u30f3\u30c9\u30a6\u53f3\u5074\u30d1\u30cd\u30eb\u306e\u30eb\u30fc\u30e9\u30fc\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\uff09\u3067\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 Let's make the second label ",(0,i.kt)("strong",{parentName:"p"},"Dark Grey Color")," :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u30ab\u30e9\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",src:a(95134).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"\u8868\u793a\u3055\u308c\u308b\u8272\u898b\u672c\u306e\u4e2d\u304b\u3089Background Color\u3092\u9078\u629e\u3059\u308c\u3070\uff0c\u30a2\u30d7\u30ea\u306e\u652f\u914d\u7684\u306a\u30ab\u30e9\u30fc\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u80cc\u666f\u30ab\u30e9\u30fc\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",src:a(89897).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"\u540c\u3058\u8981\u9818\u3067\uff0c\u30d5\u30a9\u30f3\u30c8\u3082\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 Select both labels and select Font > Custom > ",(0,i.kt)("strong",{parentName:"p"},"Helvetica Neue"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u30d5\u30a9\u30f3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",src:a(2929).Z,width:"1296",height:"1006"})),(0,i.kt)("p",null,"To complete the customizations, select both labels and ",(0,i.kt)("strong",{parentName:"p"},"enter 0 for Lines")," in the inspector window. \u3053\u308c\u3067\u30e9\u30d9\u30eb\u306b\u8868\u793a\u3067\u304d\u308b\u884c\u6570\u304c\u7121\u5236\u9650\u3068\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30e9\u30d9\u30eb\u884c\u6570",src:a(2793).Z,width:"1169",height:"990"})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The provided storyboard is optimized to have a ",(0,i.kt)("strong",{parentName:"p"},"variable cell height")," depending on the contents of each cell."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Row height tableview cell",src:a(2187).Z,width:"1169",height:"990"})),(0,i.kt)("h2",{id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"},"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"),(0,i.kt)("h3",{id:"image-view"},"Image View"),(0,i.kt)("p",null,"Select your Image View and go to ",(0,i.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,i.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"User defined runtime attributes",src:a(74582).Z,width:"1256",height:"1006"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": Begin with bindTo to activate binding on the component. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Identity inspector",src:a(99844).Z,width:"1169",height:"990"})),(0,i.kt)("h3",{id:"\u30e9\u30d9\u30eb"},"\u30e9\u30d9\u30eb"),(0,i.kt)("p",null,"Select the first label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_2___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_2_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 2 Binding",src:a(86935).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"Select the second label and add a row in the Defined Runtime Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_3___"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"String"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"___FIELD_3_BINDING_TYPE___")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Field 3 Binding",src:a(26533).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"You can change the ",(0,i.kt)("strong",{parentName:"p"},"storyboard display labels")," to have better visibility:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double-click the first label to edit it and enter ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_2_LABEL___")),(0,i.kt)("li",{parentName:"ul"},"Double-click the second label to edit it and enter ",(0,i.kt)("inlineCode",{parentName:"li"},"___FIELD_3_LABEL___"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Storyboard label display names",src:a(59863).Z,width:"1171",height:"984"})),(0,i.kt)("p",null,"Go to your project editor, select your list form template from the Forms section, then select Build and Run."),(0,i.kt)("p",null,"Here is the simulator result :"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator result",src:a(11537).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"},"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"),(0,i.kt)("p",null,"The last step is adding a corner radius to the Image View to have a better design."),(0,i.kt)("p",null,"Image View\u3092\u9078\u629e\u3057\uff0cUser Defined Runtime Attributes\u306b\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u5c5e\u6027\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Number"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"12")))),(0,i.kt)("p",null,"\u305d\u306e\u4ed6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ImageView corner Radius",src:a(53597).Z,width:"1164",height:"920"})),(0,i.kt)("p",null,"\u3053\u308c\u3067\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u5b8c\u6210\uff09",src:a(42995).Z,width:"1417",height:"992"})),(0,i.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,i.kt)("p",null,"In this tutorial, we've covered the basics for creating list form templates with iOS. You are now able to create simple templates on your own using the Starter project ressources. You can also see how to build ",(0,i.kt)("a",{parentName:"p",href:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-template"},"detail form templates"),"."),(0,i.kt)("p",null,"Download the completed template list folder:"),(0,i.kt)("div",{className:"center-button"},(0,i.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-CustomListForm/archive/53ac1d5f506aa4ca2a8d78760ef799044c5c8bdc.zip"},"Download")))}c.isMDXComponent=!0},3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),u=i,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(g,r(r({ref:e},d),{},{components:a})):n.createElement(g,r({ref:e},d))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3030:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-imageview-storyboard-6f43ae6464ab1ba4de6edcb75fe78e60.png"},76827:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-label-storyboard-66aae622f08c22c41cb9fe966c96eca1.png"},4302:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/add-view-storyboard-e38daf098a9dbb1b53b5b9c6ad610c74.png"},4366:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/change-relation-label-height-constraint-bfbe7fe2a7f870ff8f82427d5af52685.png"},42995:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/custom-template-final-result-6b78c23523c6821930c84477c357001b.png"},42592:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/duplicated-label-storyboard-4eb9e34e5f97d750fc26876550e52503.png"},87973:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/empty-storyboard-custom-template-b6da7e9413d17d7f4d35b22740ee9aec.png"},86935:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/field-2-binding-d19d51e02b2d2f6e5977d628c2431eb5.png"},26533:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/field-3-binding-360556030897e3c5441ea693ad21c4f7.png"},99844:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/identity-inspector-storyboard-1fdb7f8f32a72e8fab4f08a2aa73fb66.png"},73498:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/imageview-align-vertically-3d96def110f83c5ef5b3d05eb30c6397.png"},53597:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/imageview-corner-radius-165e3c22c4291235cfe84c3cd3043650.png"},19622:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/imageview-final-9725625c12fb662b39550f7dab0f736b.png"},52955:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/imageview-leading-space-width-height-43716fcee5c0b867a7873ff662d24383.png"},94024:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/imageview-position-height-width-653899c0a319d450cb970d5974e2c070.png"},89897:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-color-background-color-35e493b07e26ebd0f2832e7552d92537.png"},95134:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-color-dark-grey-8aefee9cb6d28208f0f100f2f08cfbcd.png"},2929:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-font-custom-d12892ff084ba6570768abe27f4e89d3.png"},36373:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-height-constraint-edition-926a3c50187918b1aa782429b1432676.png"},2793:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-lines-number-6e7ead6283c26ed8e7dbd6953e52298e.png"},34453:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/labels-contraints-storyboard-b6d2088d667fe48dace468f59a617201.png"},2187:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/row-height-tableview-cell-89afa0d3b042d869bcf64e58d2ef3505.png"},11537:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/simulator-result-17536424cd18ddce1bc776af9eadf310.png"},80013:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/storyboard-custom-listform-5655a4832218f2bb05bbfaedb2eb27e9.png"},59863:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/storyboard-label-display-name-d0d6e94fff21281e82d9ffa2bf1b7949.png"},74582:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/user-defined-runtime-attributes-2112790bd75c05049e407121e6ec58fe.png"},855:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/view-constraints-storyboard-63891e58b17a99461c7d70cb33e7d1aa.png"},66613:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/view-position-height-width-6571958e108c0b33997db9dbbeae6120.png"}}]);