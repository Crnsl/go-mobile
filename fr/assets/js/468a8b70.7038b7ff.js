"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4357],{8222:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(83117),i=a(80102),o=(a(67294),a(3905)),l=["components"],s={id:"adding-actions-template",title:"Adding actions in templates"},r=void 0,c={unversionedId:"tutorials/actions/adding-actions-template",id:"version-19-R5/tutorials/actions/adding-actions-template",title:"Adding actions in templates",description:"OBJECTIVES",source:"@site/versioned_docs/version-19-R5/tutorials/actions/adding-actions-template.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/adding-actions-template",permalink:"/go-mobile/fr/docs/tutorials/actions/adding-actions-template",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R5/tutorials/actions/adding-actions-template.md",tags:[],version:"19-R5",frontMatter:{id:"adding-actions-template",title:"Adding actions in templates"},sidebar:"tutorials",previous:{title:"Defining your first action",permalink:"/go-mobile/fr/docs/tutorials/actions/define-first-action"},next:{title:"Using action parameters",permalink:"/go-mobile/fr/docs/tutorials/actions/using-action-parameters"}},d={},p=[{value:"STEP 1. Download the Starter project",id:"step-1-download-the-starter-project",level:2},{value:"STEP 2. Add custom templates to 4D for iOS Project",id:"step-2-add-custom-templates-to-4d-for-ios-project",level:2},{value:"STEP 3. Add actions in List forms",id:"step-3-add-actions-in-list-forms",level:2},{value:"Add actions to TasksList custom template",id:"add-actions-to-taskslist-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag",level:4},{value:"Add actions to TasksCollection custom template",id:"add-actions-to-taskscollection-custom-template",level:3},{value:"A. Add Table action Tag",id:"a-add-table-action-tag-1",level:4},{value:"B. Add Entity action Tag",id:"b-add-entity-action-tag-1",level:4},{value:"STEP 4. Add actions in Detail forms",id:"step-4-add-actions-in-detail-forms",level:2}],u={toc:p};function m(t){var e=t.components,s=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJECTIVES")),(0,o.kt)("p",{parentName:"blockquote"},"Add actions to custom List and Detail forms templates.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"PREREQUISITES")),(0,o.kt)("p",{parentName:"blockquote"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"[here](requirements.html)")," to see what you'll need to get started!")),(0,o.kt)("p",null,"In this tutorial, we are going to see how easy it can be to ",(0,o.kt)("strong",{parentName:"p"},"add actions to custom templates"),"."),(0,o.kt)("h2",{id:"step-1-download-the-starter-project"},"STEP 1. Download the Starter project"),(0,o.kt)("p",null,"To begin, download the ",(0,o.kt)("strong",{parentName:"p"},"Starter project"),", which includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"two custom List form templates (TasksList and TasksCollection)"),(0,o.kt)("li",{parentName:"ul"},"a custom Detail form template (TasksDetail)"),(0,o.kt)("li",{parentName:"ul"},"a Tasks.4dbase file")),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{class:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/archive/1dc5aecfbea62a9999d571cb1a956f1ef6983111.zip"},"Download")),(0,o.kt)("h2",{id:"step-2-add-custom-templates-to-4d-for-ios-project"},"STEP 2. Add custom templates to 4D for iOS Project"),(0,o.kt)("p",null,"First, drop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TasksList")," and ",(0,o.kt)("strong",{parentName:"li"},"TasksCollection")," template folders in ",(0,o.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/list")," folder ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Listform templates",src:a(29787).Z,width:"2274",height:"734"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TasksDetail")," template folders in ",(0,o.kt)("em",{parentName:"li"},"Tasks.4dbase/Resources/Mobile/form/detail folder"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Detailform template",src:a(17338).Z,width:"2274",height:"734"})),(0,o.kt)("h2",{id:"step-3-add-actions-in-list-forms"},"STEP 3. Add actions in List forms"),(0,o.kt)("p",null,"Two types of actions are available: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"table actions"),(0,o.kt)("li",{parentName:"ul"},"entity actions ")),(0,o.kt)("p",null,"Let's first open the ",(0,o.kt)("inlineCode",{parentName:"p"},"list/TasksList/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,o.kt)("h3",{id:"add-actions-to-taskslist-custom-template"},"Add actions to TasksList custom template"),(0,o.kt)("h4",{id:"a-add-table-action-tag"},"A. Add Table action Tag"),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add table action tag",src:a(59660).Z,width:"2530",height:"1932"})),(0,o.kt)("h4",{id:"b-add-entity-action-tag"},"B. Add Entity action Tag"),(0,o.kt)("p",null,"Select the Animatable Table View and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add entity action tag",src:a(12707).Z,width:"2530",height:"1932"})),(0,o.kt)("p",null,"Your custom template is ready to display actions! "),(0,o.kt)("p",null,"You can select the TaskList custom template from the ",(0,o.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Taskslist Forms section",src:a(48768).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Now let's add action tags to the TasksCollection custom template"),(0,o.kt)("h3",{id:"add-actions-to-taskscollection-custom-template"},"Add actions to TasksCollection custom template"),(0,o.kt)("p",null,"To do so, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"list/TasksCollection/Sources/Forms/Tables/___TABLE___/___TABLE___ListForm.Storyboard")," file."),(0,o.kt)("h4",{id:"a-add-table-action-tag-1"},"A. Add Table action Tag"),(0,o.kt)("p",null,"The process is quite as similar as TasksList custom template's process."),(0,o.kt)("p",null,"Select the ",(0,o.kt)("strong",{parentName:"p"},"List form Controller")," and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___TABLE_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add collection table action tag",src:a(51395).Z,width:"2530",height:"1932"})),(0,o.kt)("h4",{id:"b-add-entity-action-tag-1"},"B. Add Entity action Tag"),(0,o.kt)("p",null,"For entity, the way you display actions is quite different than TableView: swipe action are not really adapted to CollectionViews."),(0,o.kt)("p",null,"So with collection views, the best way to display actions is to use a ",(0,o.kt)("strong",{parentName:"p"},"long pressure")," gesture on the cells you want to interact with."),(0,o.kt)("p",null,"For that, select the collectionView cell and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add collection entity action tag",src:a(56596).Z,width:"2530",height:"1932"})),(0,o.kt)("p",null,"To optimize the interaction rendering, you can add a scale effect with a haptic feedback adding the following line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"touch.zoomScale")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Number")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"0,96")," (adapt the scale ratio depending on the result you want to get)")),(0,o.kt)("p",null,"You can select the TasksCollection custom template from the ",(0,o.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TasksCollection Forms section",src:a(41633).Z,width:"2164",height:"1988"})),(0,o.kt)("h2",{id:"step-4-add-actions-in-detail-forms"},"STEP 4. Add actions in Detail forms"),(0,o.kt)("p",null,"In Detail forms, you can use the ",(0,o.kt)("strong",{parentName:"p"},"generic button")," in the navigation bar or ",(0,o.kt)("strong",{parentName:"p"},"create easily your own custom action button"),". In both cases, you have to add tags."),(0,o.kt)("p",null,"For generic button embedded in the navigation bar, select the Controller and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add detailform entity action tag",src:a(46707).Z,width:"2530",height:"1932"})),(0,o.kt)("p",null,"In our tutorial, we want to build our own generic button. For that, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"detail/TasksDetail/Sources/Forms/Tables/___TABLE___/___TABLE___DetailsForm.storyboard")," file."),(0,o.kt)("p",null,"Open it, select the button at bottom right and add this line in the ",(0,o.kt)("strong",{parentName:"p"},"User Defined Runtime Attributes")," (Identity inspector):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Key Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"actions")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"String")),(0,o.kt)("li",{parentName:"ul"},"Value: ",(0,o.kt)("inlineCode",{parentName:"li"},"___ENTITY_ACTIONS___"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add detailform entity action tag custom action button",src:a(83823).Z,width:"2530",height:"1932"})),(0,o.kt)("p",null,"As you can see, a few visual buttons are missing in the Storyboard file. You can actually find those visuals in the  ",(0,o.kt)("strong",{parentName:"p"},"Resources folder")," template. They will be included in the project during the build process."),(0,o.kt)("p",null,"For example for the ",(0,o.kt)("strong",{parentName:"p"},"moreButton.imageset"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template ressources",src:a(11572).Z,width:"1522",height:"766"})),(0,o.kt)("p",null,"You can select the TasksDetail custom template from the ",(0,o.kt)("strong",{parentName:"p"},"Forms section")," and add the following fields:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TasksDetail Forms section",src:a(16558).Z,width:"2164",height:"1988"})),(0,o.kt)("p",null,"Congratulations, your Tasks iOS app is now complete and includes actions in List form and Detail form !"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Template ressources",src:a(71634).Z,width:"1559",height:"907"})),(0,o.kt)("p",null,"Download the completed project: "),(0,o.kt)("div",{className:"center-button"},(0,o.kt)("a",{className:"button button--primary",href:"https://github.com/4d-go-mobile/tutorial-AddingActionToTemplates/releases/latest/download/tutorial-AddingActionToTemplates.zip"},"Download")))}m.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var r=n.createContext({}),c=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=c(t.components);return n.createElement(r.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,r=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=c(a),m=i,k=u["".concat(r,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(k,l(l({ref:e},d),{},{components:a})):n.createElement(k,l({ref:e},d))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s.mdxType="string"==typeof t?t:i,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},56596:function(t,e,a){e.Z=a.p+"assets/images/Add-collection-entity-tag-taskslist-3f04e0602db0b304b72fb6ccfcb19b4e.png"},51395:function(t,e,a){e.Z=a.p+"assets/images/Add-collection-table-tag-taskslist-36f6728e233cbadd86070781b08e978b.png"},12707:function(t,e,a){e.Z=a.p+"assets/images/Add-entity-tag-taskslist-f451a9760f86a118e99afc27fc80edf3.png"},59660:function(t,e,a){e.Z=a.p+"assets/images/Add-table-tag-taskslist-8d2cbcb005e17c5e11ebc6fad5c21655.png"},83823:function(t,e,a){e.Z=a.p+"assets/images/Detail-form-action-custom-action-Button-dce7734160980e4471815a31dde1720e.png"},46707:function(t,e,a){e.Z=a.p+"assets/images/Detail-form-action-navigationBar-7ff5b86ac2040d091e2bc18a51d41c62.png"},17338:function(t,e,a){e.Z=a.p+"assets/images/Detailform-template-12ade6ee5a4eb693cbf014faf59c56a5.png"},71634:function(t,e,a){e.Z=a.p+"assets/images/ListForm-entity-action-tableview-c4ca8838892967fd5df82c8271e4090b.png"},29787:function(t,e,a){e.Z=a.p+"assets/images/Listform-templates-09ed1c5a3ff901a807ff3ead04d0ada7.png"},11572:function(t,e,a){e.Z=a.p+"assets/images/Template-Ressources-db10d9e26011ee4ab1652752eedb6b32.png"},16558:function(t,e,a){e.Z=a.p+"assets/images/detailform-forms-section-8159e555c94e2e4d36da5d27329ec148.png"},41633:function(t,e,a){e.Z=a.p+"assets/images/listform-taskscollection-forms-section-09fa057f109a221cd927c4c4496e308c.png"},48768:function(t,e,a){e.Z=a.p+"assets/images/listform-taskslist-forms-section-c3786fcf5144780d2bc741888fd62dc1.png"}}]);