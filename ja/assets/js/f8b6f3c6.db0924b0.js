"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2916],{97498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const l={id:"detail-form-template-storyboard",title:"iOS Storyboard"},r=void 0,o={unversionedId:"tutorials/creating-detail-forms/detail-form-template-storyboard",id:"version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard",title:"iOS Storyboard",description:"Now it's time to create your iOS detail form interface with Xcode.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-storyboard",permalink:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-template-storyboard",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R6/tutorials/creating-detail-forms/detail-form-template-storyboard.md",tags:[],version:"19-R6",frontMatter:{id:"detail-form-template-storyboard",title:"iOS Storyboard"},sidebar:"tutorials",previous:{title:"Template.svg",permalink:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-template-svg"},next:{title:"Android Layout",permalink:"/go-mobile/ja/docs/tutorials/creating-detail-forms/detail-form-template-layout"}},s={},d=[{value:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092Xcode\u3067\u958b\u304f",id:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092xcode\u3067\u958b\u304f",level:2},{value:"Scroll View\u3092\u8ffd\u52a0\u3059\u308b",id:"scroll-view\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Vertical Stack View\u3092\u8ffd\u52a0\u3059\u308b",id:"vertical-stack-view\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Stack View\u306b\u4ed6\u306eView\u3092\u8ffd\u52a0\u3059\u308b",id:"stack-view\u306b\u4ed6\u306eview\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Field View 1\u306bImage View\u3092\u8ffd\u52a0\u3059\u308b",id:"field-view-1\u306bimage-view\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Field View 2\u306b\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b",id:"field-view-2\u306b\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b",level:2},{value:"Title \u30e9\u30d9\u30eb",id:"title-\u30e9\u30d9\u30eb",level:3},{value:"Content \u30e9\u30d9\u30eb",id:"content-\u30e9\u30d9\u30eb",level:3},{value:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b",level:2},{value:"Image View",id:"image-view",level:3},{value:"\u30e9\u30d9\u30eb",id:"\u30e9\u30d9\u30eb",level:3},{value:"\u7e70\u308a\u8fd4\u3057\u4f7f\u7528\u3055\u308c\u308b\u30bb\u30eb\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u7e70\u308a\u8fd4\u3057\u4f7f\u7528\u3055\u308c\u308b\u30bb\u30eb\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b",level:2},{value:"Field View 2",id:"field-view-2",level:3},{value:"First label",id:"first-label",level:3},{value:"Second label",id:"second-label",level:3},{value:"\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",id:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b",level:3},{value:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f",id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Now it's time to create your iOS detail form interface with Xcode."),(0,n.kt)("p",null,"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u8a73\u7d30\u753b\u9762\u306e\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:a(44578).Z,width:"1377",height:"761"})),(0,n.kt)("p",null,"For this template, we're going to add a:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u306e\u30d8\u30c3\u30c0\u30fc\u753b\u50cf"),(0,n.kt)("li",{parentName:"ul"},"\u7e70\u308a\u8fd4\u3055\u308c\u308b\u30d5\u30a3\u30fc\u30eb\u30c9")),(0,n.kt)("h2",{id:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092xcode\u3067\u958b\u304f"},"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u3092Xcode\u3067\u958b\u304f"),(0,n.kt)("p",null,"storyboard\u30d5\u30a1\u30a4\u30eb\uff08\u62e1\u5f35\u5b50\u306f\u975e\u8868\u793a\u304b\u3082\u3057\u308c\u307e\u305b\u3093\uff09\u3092Xcode\u3067\u958b\u304d\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\uff08\u7a7a\u306e\u72b6\u614b\uff09",src:a(7905).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"It's quite empty, so let's add some content!"),(0,n.kt)("h2",{id:"scroll-view\u3092\u8ffd\u52a0\u3059\u308b"},"Scroll View\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,'For our detail form to be scrollable, the first step is to drag and drop a "Scroll View" from the ',(0,n.kt)("strong",{parentName:"p"},"Object library"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scroll View\u3092\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u8ffd\u52a0",src:a(38098).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Scroll View Width value to 359 and the Height value to 667. X \u5ea7\u6a19\u3092 8 \u306b\uff0cY \u5ea7\u6a19\u3092 0 \u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scroll View\u306e\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba",src:a(80475).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Next, add four constraints by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: 8, Top: 0, and Bottom: 0) as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Scroll View\u306e\u5236\u7d04",src:a(90738).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"vertical-stack-view\u3092\u8ffd\u52a0\u3059\u308b"},"Vertical Stack View\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"Drag and drop a Vertical Stack View from the ",(0,n.kt)("strong",{parentName:"p"},"Object library")," in Scroll View. Then, from the ",(0,n.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window) set the Width value to 359 and the Height value to 202. X \u5ea7\u6a19\u3092 0 \u306b\uff0cY \u5ea7\u6a19\u3092 8 \u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stack View\u3092\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u306b\u8ffd\u52a0",src:a(65567).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Stack View\u306e\u5e45\u3068\u9ad8\u3055\u306f\uff0c\u5185\u5305\u3057\u3066\u3044\u308b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u3088\u3063\u3066\u6c7a\u307e\u308b\u305f\u3081\uff0c\u30b5\u30a4\u30ba\u306e\u5236\u7d04\u306f\u3082\u3046\u5c11\u3057\u5f8c\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",{id:"stack-view\u306b\u4ed6\u306eview\u3092\u8ffd\u52a0\u3059\u308b"},"Stack View\u306b\u4ed6\u306eView\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"Drag and drop a view from the ",(0,n.kt)("strong",{parentName:"p"},"Object library")," to the Stack View you've just added to your storyboard. Let's name it ",(0,n.kt)("strong",{parentName:"p"},"Field View 1"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Field View 1\u3092\u8ffd\u52a0",src:a(98757).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Then drag and drop another view from the ",(0,n.kt)("strong",{parentName:"p"},"Object library")," directly into the Document Outline at the same level as Field View 1 (to include it in the Stack View) and name it ",(0,n.kt)("strong",{parentName:"p"},"Field View 2"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Field View 2\u306e\u8ffd\u52a0",src:a(33427).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\u30d3\u30e5\u30fc\u540c\u58eb\u306e\u9593\u9694\u3092\u7a7a\u3051\u308b\u305f\u3081\u306b\uff0c\u5c5e\u6027\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u30fc\u3067\u300cspacing\u300d\u306e\u5024\u3092 8 \u306b\u5909\u66f4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stack View\u306e\u4f59\u767d",src:a(27184).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Select both ",(0,n.kt)("strong",{parentName:"p"},"Field View 1")," and ",(0,n.kt)("strong",{parentName:"p"},"Field View 2")," and in the ",(0,n.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set Width value to 359 and the Height value to 97."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"View\u306e\u4f4d\u7f6e\u3068\u30b5\u30a4\u30ba",src:a(58036).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Select ",(0,n.kt)("strong",{parentName:"p"},"Field View 1")," add three constraints by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, and Top: 0):"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"View\u306e\u5236\u7d04",src:a(27615).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Stack View\u304cScroll View\u3068\u540c\u3058\u5e45\u306b\u306a\u308b\u3088\u3046\uff0c\u3082\u3046\uff11\u500b\u306e\u5236\u7d04\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"Press ",(0,n.kt)("strong",{parentName:"p"},"Ctrl")," and drag the Stack View to the Scroll View. \u30de\u30a6\u30b9\u30dc\u30bf\u30f3\u3092\u96e2\u3059\u3068\u540c\u6642\u306b\uff0c\u3053\u3053\u3067\u8a2d\u5b9a\u3067\u304d\u308b\u5236\u7d04\u306e\u9078\u629e\u80a2\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u300cEqual Width\u300d\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u7b49\u5e45\u306eStack View",src:a(26712).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Next, with the Stack View selected add four constraints by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 0, Leading: 0, Top: 8, and Bottom: 0) as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stack View\u306e\u5236\u7d04",src:a(54308).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\u5236\u7d04\u304c\u8a2d\u5b9a\u3055\u308c\u308b\u3068\uff0c\u4e0b\u56f3\u306e\u3088\u3046\u306b\u8868\u793a\u304c\u5909\u5316\u3059\u308b\u306f\u305a\u3067\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stack View\u306e\u6700\u7d42\u7684\u306a\u5236\u7d04",src:a(9452).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Stack View\u306b\uff12\u500b\u30d3\u30e5\u30fc\u3092\u8ffd\u52a0\u3057\uff0c\u5236\u7d04\u3082\u304d\u3061\u3093\u3068\u8a2d\u5b9a\u3067\u304d\u307e\u3057\u305f\u3002 Field View 1\u306e\u4f5c\u696d\u306b\u79fb\u308a\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("h2",{id:"field-view-1\u306bimage-view\u3092\u8ffd\u52a0\u3059\u308b"},"Field View 1\u306bImage View\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("p",null,"From the ",(0,n.kt)("strong",{parentName:"p"},"Object library"),", drag and drop an  ",(0,n.kt)("strong",{parentName:"p"},"Image View")," into Field View 1."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Add Image View storyboard",src:a(67193).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Size inspector panel")," (on the right side of the Interface Builder window), set the Image View Width value to 359 and the Height value to 97. X \u5ea7\u6a19\u3092 0 \u306b\uff0cY \u5ea7\u6a19\u3092 0 \u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image View position height and width",src:a(65685).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Next, add four constraints by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing:0, Leading:0, Top:0, and Bottom:0) as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image View\u306e\u5236\u7d04",src:a(65258).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Size inspector panel")," change the Intrinsic Size from ",(0,n.kt)("strong",{parentName:"p"},"Default")," to ",(0,n.kt)("strong",{parentName:"p"},"Placeholder"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u81ea\u52d5\u30b5\u30a4\u30ba\u306eImage View",src:a(3536).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"field-view-2\u306b\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b"},"Field View 2\u306b\u30e9\u30d9\u30eb\u3092\u8ffd\u52a0\u3059\u308b"),(0,n.kt)("h3",{id:"title-\u30e9\u30d9\u30eb"},"Title \u30e9\u30d9\u30eb"),(0,n.kt)("p",null,"In the ",(0,n.kt)("strong",{parentName:"p"},"Object library"),", drag and drop a  ",(0,n.kt)("strong",{parentName:"p"},"Label")," into Field View 2 and set the Width value to 343 and the Height value to 22. Then set the X value to 8 and the Y value to 8."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30d9\u30eb\u8ffd\u52a0",src:a(68544).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Double click on the label and name it "',(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_LABEL___"),'". Then in the ',(0,n.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,n.kt)("strong",{parentName:"p"},"Helvetica Neue Light 18.0")," and the color to ",(0,n.kt)("strong",{parentName:"p"},"BackgroundColor"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30bf\u30a4\u30c8\u30eb\u306e\u30e9\u30d9\u30eb\u30d5\u30a9\u30f3\u30c8\u3068\u6587\u5b57\u30ab\u30e9\u30fc",src:a(9217).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"content-\u30e9\u30d9\u30eb"},"Content \u30e9\u30d9\u30eb"),(0,n.kt)("p",null,"Title \u30e9\u30d9\u30eb\u3092\u8907\u88fd\u3057\uff0c\u5e45\u3092 339 \u306b\uff0c\u9ad8\u3055\u3092 44 \u306b\u5909\u66f4\u3057\u307e\u3059\u3002 X\u5ea7\u6a19\u3092 12 \u306b\uff0cY\u5ea7\u6a19\u306f 37 \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30e9\u30d9\u30eb\u8ffd\u52a0",src:a(66709).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,'Double click on the label and name it "',(0,n.kt)("inlineCode",{parentName:"p"},"<___FIELD_LABEL___>"),'". Then from the ',(0,n.kt)("strong",{parentName:"p"},"attribute inspector")," set the font to ",(0,n.kt)("strong",{parentName:"p"},"Helvetica Neue Light 20.0")," and the color to ",(0,n.kt)("strong",{parentName:"p"},"Black Color"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5185\u5bb9\u306e\u30e9\u30d9\u30eb\u30d5\u30a9\u30f3\u30c8\u3068\u6587\u5b57\u30ab\u30e9\u30fc",src:a(26616).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Select the Content and Title labels and add four constraints by clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Add New Constraints button")," (Trailing: 8, Leading: Multiple, Top: Multiple, and Bottom: Multiple) as shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30bf\u30a4\u30c8\u30eb\u30e9\u30d9\u30eb\u3068\u5185\u5bb9\u30e9\u30d9\u30eb\u306e\u5236\u7d04 ",src:a(2114).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\u5916\u89b3\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u304c\u3072\u3068\u6bb5\u843d\u3057\u307e\u3057\u305f\uff01 All of your constraints are well defined."),(0,n.kt)("h2",{id:"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"},"\u30bb\u30eb\u306b\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3059\u308b"),(0,n.kt)("h3",{id:"image-view"},"Image View"),(0,n.kt)("p",null,"Select your Image View and go to ",(0,n.kt)("strong",{parentName:"p"},"Identity inspector")," > User Defined Runtime Attributes. Click the ",(0,n.kt)("strong",{parentName:"p"},"+ button")," to add a row."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"User defined runtime attributes",src:a(11361).Z,width:"1164",height:"1092"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": Start with bindTo to activate binding on the component. Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD_1___"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": Always ",(0,n.kt)("inlineCode",{parentName:"p"},"String"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": The attribute name. Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_1_BINDING_TYPE___")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Identity inspector",src:a(41538).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"\u30e9\u30d9\u30eb"},"\u30e9\u30d9\u30eb"),(0,n.kt)("p",null,"For the ",(0,n.kt)("strong",{parentName:"p"},"first label")," we are going to add several lines mainly to display icons:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 1 \u306e\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u30e9\u30f3\u30bf\u30a4\u30e0\u5c5e\u6027 ",src:a(5121).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"You also need to set the Class to ",(0,n.kt)("inlineCode",{parentName:"p"},"IconLabel")," and check the ",(0,n.kt)("strong",{parentName:"p"},"Inherit Module From Target")," checkbox as we can see below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 1 \u30ab\u30b9\u30bf\u30e0\u30af\u30e9\u30b9",src:a(9750).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Select the ",(0,n.kt)("strong",{parentName:"p"},"second label")," and add a row in the Defined Runtime Attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"bindTo.record.___FIELD___"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"String"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"___FIELD_BINDING_TYPE___")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 2 \u306e\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u30e9\u30f3\u30bf\u30a4\u30e0\u5c5e\u6027 ",src:a(89855).Z,width:"1164",height:"1092"})),(0,n.kt)("h2",{id:"\u7e70\u308a\u8fd4\u3057\u4f7f\u7528\u3055\u308c\u308b\u30bb\u30eb\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b"},"\u7e70\u308a\u8fd4\u3057\u4f7f\u7528\u3055\u308c\u308b\u30bb\u30eb\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b"),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u8907\u6570\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30d5\u30a9\u30fc\u30e0\u306b\u8ffd\u52a0\u3057\u305f\u5834\u5408\uff0cField View 2\u306f\u4f55\u5ea6\u3082\u8907\u88fd\u3055\u308c\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,"Each storyboard element has an Object ID. For example, if you select Field View 2 and go to the ",(0,n.kt)("strong",{parentName:"p"},"Identity inspector"),", you'll see its Object ID:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID \u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9",src:a(4526).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u5bfe\u3057\uff0c\u3053\u306e\u30d3\u30e5\u30fc\u306b\u542b\u307e\u308c\u308b\u8981\u7d20\u306f\u307e\u3068m\u3066\u8907\u88fd\u3055\u308c\u308b\u3079\u304d\u30b0\u30eb\u30fc\u30d7\u306b\u5c5e\u3057\u3066\u3044\u308b\u3053\u3068\u3092\u77e5\u3089\u305b\u308b\u305f\u3081\uff0c\u8981\u7d20\u3068\u30bf\u30b0\u306e\u305d\u308c\u305e\u308c\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("p",null,"\u3072\u3068\u3064\u305a\u3064\u5909\u66f4\u3059\u308b\u306e\u306f\uff0c\u306a\u304b\u306a\u304b\u9762\u5012\u3067\u3059\u3057\uff0c\u9014\u4e2d\u3067\u30df\u30b9\u3092\u3057\u3066\u3057\u307e\u3046\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002 \u3053\u3053\u306f\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u3044\u6163\u308c\u305f\u30b3\u30fc\u30c9\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u958b\u3044\u3066\u4f5c\u696d\u3092\u9032\u3081\u308b\u3053\u3068\u306b\u3057\u307e\u3057\u3087\u3046\uff01"),(0,n.kt)("h3",{id:"field-view-2"},"Field View 2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Field View 2")," and get its Object ID from the Identity Inspector (on the right side of the Interface Builder window). In our project, Field View 2 ID is: ",(0,n.kt)("strong",{parentName:"p"},"SiX-3H-lNB"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Search for this ID in the storyboard xml code and replace it with ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-001")," each time it appears. \u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID\u306f\uff0c\u4f55\u5ea6\u304b\u51fa\u73fe\u3059\u308b\u306e\u3067\uff0c\u898b\u843d\u3068\u3055\u306a\u3044\u3088\u3046\u306b\u6c17\u3092\u3064\u3051\u307e\u3057\u3087\u3046\uff01"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9 xml",src:a(87592).Z,width:"922",height:"227"})),(0,n.kt)("p",null,"\u30b9\u30c8\u30fc\u30ea\u30fc\u30dc\u30fc\u30c9XML\u30d5\u30a1\u30a4\u30eb\u3092\u4fdd\u5b58\u3057\u307e\u3059\u3002 Xcode\u306b\u8868\u793a\u3055\u308c\u308bField View 2\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID\u304c\u5909\u5316\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Field View 2 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID",src:a(59712).Z,width:"1164",height:"1092"})),(0,n.kt)("h3",{id:"first-label"},"First label"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now, get the ",(0,n.kt)("strong",{parentName:"li"},"first label")," Object ID from the Identity Inspector and replace it with ",(0,n.kt)("strong",{parentName:"li"},"TAG-FD-002")," each time it appears in the storyboard xml code.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 1 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID",src:a(6051).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Done with the first label."),(0,n.kt)("h3",{id:"second-label"},"Second label"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Next, get the ",(0,n.kt)("strong",{parentName:"li"},"second label")," Oject ID from the Identity Inspector and replace it with ",(0,n.kt)("strong",{parentName:"li"},"TAG-FD-003")," each time it appears in the storyboard xml code.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Label 2 \u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8ID",src:a(42856).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"\u3046\u307e\u304f\u7f6e\u63db\u3067\u304d\u307e\u3057\u305f\uff01"),(0,n.kt)("h3",{id:"\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b"},"\u5236\u7d04\u306b\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b"),(0,n.kt)("p",null,"\u3069\u3061\u3089\u306e\u30e9\u30d9\u30eb\u3082\u5236\u7d04\u304c\u3042\u308b\u306e\u3067\uff0c\u30bf\u30b0\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30bf\u30b0\u306e\u5236\u7d04",src:a(41439).Z,width:"1164",height:"1092"})),(0,n.kt)("p",null,"Just like View Field 2 and label, get all ",(0,n.kt)("strong",{parentName:"p"},"7 Constraints")," Object IDs from the Identity Inspector and replace them with: ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-004"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-005"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-006"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-007"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-008"),", ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-009")," and ",(0,n.kt)("strong",{parentName:"p"},"TAG-FD-010"),"."),(0,n.kt)("p",null,"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u300c\u30d5\u30a9\u30fc\u30e0\u300d\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u81ea\u4f5c\u306e\u8a73\u7d30\u30d5\u30a9\u30fc\u30e0\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u9078\u629e\u3057\uff0c\u300c\u30d3\u30eb\u30c9\u300d\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u8a73\u7d30\u753b\u9762\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8",src:a(14146).Z,width:"1072",height:"994"})),(0,n.kt)("p",null,"Not bad for a first attempt!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone\u753b\u9762",src:a(77048).Z,width:"1417",height:"907"})),(0,n.kt)("p",null,"Field View 2\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3057\u305f\u3002 \u3057\u304b\u3057\uff0c\u30a2\u30d7\u30ea\u306b\u3082\u3046\u5c11\u3057\u5f69\u308a\u3092\u6dfb\u3048\u308b\u3053\u3068\u306f\u3067\u304d\u306a\u3044\u3067\u3057\u3087\u3046\u304b\u3002"),(0,n.kt)("h3",{id:"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"},"\u30a2\u30d7\u30ea\u3092\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u3059\u308b"),(0,n.kt)("p",null,"Image View\u304a\u3088\u3073Field View 2\u306b\u89d2\u306e\u4e38\u307f\u3092\u8ffd\u52a0\u3057\u307e\u3057\u3087\u3046\u3002"),(0,n.kt)("p",null,"Image View\u3092\u9078\u629e\u3057\uff0cUser Defined Runtime Attributes\u306b\u30e6\u30fc\u30b6\u30fc\u5b9a\u7fa9\u5c5e\u6027\u3092\u5165\u529b\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Number"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"12")))),(0,n.kt)("p",null,"\u305d\u306e\u4ed6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"layer.masksToBounds"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Boolean"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": Check the box"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone\u753b\u9762",src:a(36378).Z,width:"1163",height:"1092"})),(0,n.kt)("p",null,"Field View 2\u3092\u9078\u629e\u3057\uff0c\u4e0b\u8a18\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Key Path"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"cornerRadius"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Number"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"12")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"iPhone\u753b\u9762",src:a(75987).Z,width:"1163",height:"1092"})),(0,n.kt)("p",null,"\u3053\u308c\u3067\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u304c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f\uff01"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u30ab\u30b9\u30bf\u30e0\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\uff08\u5b8c\u6210\uff09",src:a(75194).Z,width:"1417",height:"907"})),(0,n.kt)("h2",{id:"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b"},"\u3053\u308c\u304b\u3089\u3069\u3046\u3059\u308b\uff1f"),(0,n.kt)("p",null,"In this tutorial, we've covered the basics for creating detail form templates. You can now create simple templates on your own using the Starter project resources."),(0,n.kt)("p",null,"Download the completed template folder:"),(0,n.kt)("div",{className:"center-button"},(0,n.kt)("a",{className:"button button--primary",href:"https://github.com/4d-for-mobile/tutorial-CustomDetailForm/releases/latest/download/tutorial-CustomDetailForm.zip"},"Download")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),g=n,k=m["".concat(s,".").concat(g)]||m[g]||c[g]||l;return a?i.createElement(k,r(r({ref:t},p),{},{components:a})):i.createElement(k,r({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var d=2;d<l;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67193:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-imageview-storyboard-36f330915569e2a93221ba660b12fc84.png"},68544:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label1-storyboard-2f01d0c254f4d97ec20d2d367ce9ec7c.png"},66709:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-label2-storyboard-1d6fb91ee892c6a65f5729d5e69f1922.png"},38098:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-scrollview-storyboard-d7dd2eaccc7c0e1d6b6c3f285820a0e2.png"},65567:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-vertical-stackview-storyboard-a77bb45fa7e07b3619466f619b841b77.png"},98757:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view1-storyboard-68249fe33e687b426e62861ca27ff8aa.png"},33427:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/add-view2-storyboard-942c491dd7876b288072a8c9434d74a4.png"},26616:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/content-label-font-and-color-9f0854306427144fa1cdb46b3c69516b.png"},14146:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-detail-template-forms-684c7bdb81de3eaeca8c536798cd6eaf.png"},75194:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/custom-template-final-result-d109ed2a561d41dce81b348dccb0f103.png"},41439:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/duplicated-constraints-e5ad96e2db402d7d9ce95a4285aa2034.png"},7905:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/empty-storyboard-custom-detailform-template-6663206b95888c7e8076b79411d1dad0.png"},59712:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/field-view-2-object-id-759b7dbf8ae041559a2f14eddbb125ff.png"},27615:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldView-1-Field-View-2-constraints-b66c9774eeed9b15c785284409b4ccd9.png"},75987:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/fieldview2-corner-radius-c046e0a0aa9c45aeba49938d136f845d.png"},41538:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/identity-inspector-storyboard-da973e42db19cb35ee04896412de0835.png"},65258:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-constraints-d4d21829a4dcbbc8c329e9f1ceb55c51.png"},36378:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-corner-radius-6f9074bb95a961c9de553615ef39c9bb.png"},65685:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/imageview-position-height-width-72bfd675675801086b3b20155f2fd2ef.png"},3536:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/intrinsic-size-imageview-06259dc83255bf6351d83b809f7c8195.png"},77048:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/iphone-demo-509341fbe6b31946a3e285a1866fc8d0.png"},9750:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-custom-class-cfb751c3fe37927606ba3dbaf73ec1b9.png"},6051:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-object-id-eeee639d97b719fd4170fe964594f2ae.png"},5121:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label1-user-defined-runtime-attributes-9262fc5ad84234a215d9f428136af325.png"},42856:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-object-id-d52688b0242fd4f68acb10c26a9ed30b.png"},89855:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/label2-user-defined-runtime-attributes-e720b43c31f49e75bc6a439759eae1ca.png"},4526:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/object-id-storyboard-a9e935f6d3b13ff7d8b0c025088706a8.png"},90738:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-constraints-908908fa94ba80c536f2a29b1132be48.png"},80475:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scrollview-position-height-width-83ed32ba7d8dcd47f59156425e6dd2be.png"},9452:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-final-de9eeaf65adf27f5518a3ee54de1c2d1.png"},54308:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-constraints-61be8a6fc102ebd539cef110925f845c.png"},26712:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-equal-width-scrollview-d51d69a40f4b666ff1ce4c157c655bf6.png"},27184:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/stackview-spacing-1f1af4566bed1dce74e795fb62b70a75.png"},44578:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-custom-detailform-69ea8fc4d8450ae06e61e29c8d2accdb.png"},87592:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/storyboard-xml-351649fe451c881ec0ee4cecc6b04b6e.png"},9217:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/title-label-font-and-color-2eb7fa3157128aba53a61bd450808e31.png"},2114:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/titlelabel-contentlabel-contraints-3f2e5158dd059a5d55a87a169a376e9c.png"},11361:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/user-defined-runtime-attributes-272f5431507eb1c173d5fed464335378.png"},58036:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/views-position-height-width-storyboard-678bc297732275201501516634843860.png"}}]);