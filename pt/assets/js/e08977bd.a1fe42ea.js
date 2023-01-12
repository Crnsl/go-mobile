"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[7702],{35910:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),o=(n(67294),n(3905));const r={id:"create-kotlin-input",title:"Create Kotlin input control"},a=void 0,l={unversionedId:"tutorials/actions/create-kotlin-input",id:"version-19-R8/tutorials/actions/create-kotlin-input",title:"Create Kotlin input control",description:"OBJETIVOS",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R8/tutorials/actions/create-kotlin-input.md",sourceDirName:"tutorials/actions",slug:"/tutorials/actions/create-kotlin-input",permalink:"/go-mobile/pt/docs/tutorials/actions/create-kotlin-input",draft:!1,editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R8/tutorials/actions/create-kotlin-input.md",tags:[],version:"19-R8",frontMatter:{id:"create-kotlin-input",title:"Create Kotlin input control"},sidebar:"tutorials",previous:{title:"Usar par\xe2metros de a\xe7\xe3o",permalink:"/go-mobile/pt/docs/tutorials/actions/using-action-parameters"},next:{title:"Many to One relations",permalink:"/go-mobile/pt/docs/tutorials/relations/many-to-one-relations"}},c={},s=[{value:"Manifest file",id:"manifest-file",level:2},{value:"PhoneContact.kt",id:"phonecontactkt",level:2},{value:"Auto fill",id:"auto-fill",level:3},{value:"Icon",id:"icon",level:3},{value:"Resource files",id:"resource-files",level:3},{value:"Permissions",id:"permissions",level:3},{value:"ActivityResultController",id:"activityresultcontroller",level:3}],p={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"OBJETIVOS")),(0,o.kt)("p",{parentName:"blockquote"},"Create a Kotlin input control.")),(0,o.kt)("p",null,"In this tutorial, we want to create a Kotlin ",(0,o.kt)("a",{parentName:"p",href:"../../project-definition/actions/md#input-controls"},"input control")," that can get a phone number from a contact."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can download a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/4d-go-mobile/input-control-phoneContact"},"ready-to-use version of this input control")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://4d-go-mobile.github.io/gallery//#/type/input-control"},"Input Control gallery on github"),".")),(0,o.kt)("h2",{id:"manifest-file"},"Manifest file"),(0,o.kt)("p",null,"First, we have to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file to register the input control in the app. The file contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Resources/Mobile/inputControls/input-control-phoneContact/manifest.json"',title:'"Resources/Mobile/inputControls/input-control-phoneContact/manifest.json"'},'{\n    "name": "phoneContact",\n    "type" : "text",\n    "target" : ["ios", "android"],\n    "capabilities": {\n        "android": [ "android.permission.READ_CONTACTS" ]\n    },\n}\n')),(0,o.kt)("h2",{id:"phonecontactkt"},"PhoneContact.kt"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PhoneContact.kt")," file contains the logic to fetch the number of a contact on click. The file contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Resources/Mobile/inputControls/input-control-phoneContact/android/inputControlPhoneContact.kt"',title:'"Resources/Mobile/inputControls/input-control-phoneContact/android/inputControlPhoneContact.kt"'},'package ___PACKAGE___\n\nimport android.net.Uri\nimport android.provider.ContactsContract\nimport android.view.View\nimport androidx.activity.result.contract.ActivityResultContracts\nimport com.qmobile.qmobiledatasync.utils.BaseKotlinInputControl\nimport com.qmobile.qmobiledatasync.utils.KotlinInputControl\nimport com.qmobile.qmobileui.activity.mainactivity.ActivityResultController\nimport com.qmobile.qmobileui.activity.mainactivity.MainActivity\nimport com.qmobile.qmobileui.ui.SnackbarHelper\nimport com.qmobile.qmobileui.utils.PermissionChecker\n\n@KotlinInputControl\nclass PhoneContact(private val view: View) : BaseKotlinInputControl {\n\n    override val autocomplete: Boolean = false\n\n    override fun getIconName(): String {\n        return "call.xml" \n    }\n\n    private lateinit var outputCallback: (outputText: String) -> Unit\n\n    private val contactPhoneNumberCallback: (contactUri: Uri?) -> Unit = { contactUri ->\n        contactUri?.let {\n            (view.context as MainActivity?)?.apply {\n                contentResolver.query(contactUri, null, null, null, null)?.let { cursor ->\n                    if (cursor.moveToFirst()) {\n                        val contactIdIndex = cursor.getColumnIndex(ContactsContract.Contacts._ID)\n                        val hasPhoneIndex = cursor.getColumnIndex(ContactsContract.Contacts.HAS_PHONE_NUMBER)\n                        val contactId = cursor.getString(contactIdIndex)\n                        val hasNumber = cursor.getString(hasPhoneIndex)\n                        if (Integer.valueOf(hasNumber) == 1) {\n                            contentResolver.query(\n                                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,\n                                null,\n                                ContactsContract.CommonDataKinds.Phone.CONTACT_ID + " = " + contactId,\n                                null,\n                                null\n                            )?.let { numbersCursor ->\n                                while (numbersCursor.moveToNext()) {\n                                    val phoneNumberIndex =\n                                        numbersCursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)\n                                    val phoneNumber = numbersCursor.getString(phoneNumberIndex)\n                                    outputCallback(phoneNumber)\n                                    break\n                                }\n                            }\n                        } else {\n                            SnackbarHelper.show(this, "No phone number found in contact")\n                            outputCallback("")\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    override fun process(inputValue: Any?, outputCallback: (output: Any) -> Unit) {\n        (view.context as PermissionChecker?)?.askPermission(\n            permission = android.Manifest.permission.READ_CONTACTS,\n            rationale = "Permission required to read contacts" \n        ) { isGranted ->\n            if (isGranted) {\n                this.outputCallback = outputCallback\n                (view.context as ActivityResultController?)?.launch(\n                    type = ActivityResultContracts.PickContact(),\n                    input = null,\n                    callback = contactPhoneNumberCallback\n                )\n            }\n        }\n    }\n}\n')),(0,o.kt)("p",null,"Note the following points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"PhoneContact.kt")," file must be located in the ",(0,o.kt)("inlineCode",{parentName:"li"},"inputControl")," folder at the following path: ",(0,o.kt)("em",{parentName:"li"},"input-control-phoneContact/android/inputControlPhoneContact.kt")),(0,o.kt)("li",{parentName:"ul"},"Our Kotlin input control must inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"BaseKotlinInputControl")," interface."),(0,o.kt)("li",{parentName:"ul"},"On the first line, keep this ",(0,o.kt)("inlineCode",{parentName:"li"},"___PACKAGE___")," line. It will be used and replaced at project generation."),(0,o.kt)("li",{parentName:"ul"},"The Kotlin input control main class is identified by the annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"@KotlinInputControl")," Once your app is generated, you will find your Kotlin input control in ",(0,o.kt)("em",{parentName:"li"},"Your App / app / src / main / java / com / your_company / your_app / inputcontrol / YourCustomInputControl.kt"))),(0,o.kt)("h3",{id:"auto-fill"},"Auto fill"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"autocomplete")," variable sets if the Kotlin input control requires a click to call its ",(0,o.kt)("inlineCode",{parentName:"p"},"process()")," method or if it should process as soon as created."),(0,o.kt)("h3",{id:"icon"},"Icon"),(0,o.kt)("p",null,"If your Kotlin input control has an icon, override the method ",(0,o.kt)("inlineCode",{parentName:"p"},"getIconName()")," as follows :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'\noverride fun getIconName(): String {\n    return "call.xml" \n}\n\n')),(0,o.kt)("h3",{id:"resource-files"},"Resource files"),(0,o.kt)("p",null,"You are free to add any resource file to your Kotlin input control. Everything you put in a ",(0,o.kt)("em",{parentName:"p"},"res")," folder under android folder will be copied to the generated app."),(0,o.kt)("p",null,"For example, your Kotlin ",(0,o.kt)("inlineCode",{parentName:"p"},".kt")," input control can make use of a resource in ",(0,o.kt)("em",{parentName:"p"},"res/drawable/your_resource.xml")," , therefore your will need to have a your ",(0,o.kt)("em",{parentName:"p"},"resource.xml")," file in ",(0,o.kt)("em",{parentName:"p"},"YourInputControl/android/res/drawable/your_resource.xml"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/resources/providing-resources"},"More about Android resources"),".")),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"You may need to add specific permissions to your app."),(0,o.kt)("p",null,"Add the following ",(0,o.kt)("inlineCode",{parentName:"p"},"capabilities")," block in your ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "capabilities" : {\n        "android" : [ "android.permission.READ_CONTACTS" ]\n    }\n}\n')),(0,o.kt)("p",null,"There are registered permissions which you can simply define with the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "capabilities" : {\n        "contacts": true,\n        "location": true\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," setups ",(0,o.kt)("inlineCode",{parentName:"p"},"android.permission.READ_CONTACTS")," permission. ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," setups ",(0,o.kt)("inlineCode",{parentName:"p"},"android.permission.ACCESS_COARSE_LOCATION")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"android.permission.ACCESS_FINE_LOCATION")," permissions."),(0,o.kt)("p",null,"In order to ask user permission in your custom Kotlin input control, check out this code sample where we want the ",(0,o.kt)("inlineCode",{parentName:"p"},"READ_CONTACTS")," permission:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'(context as PermissionChecker?)?.askPermission(\n    permission = android.Manifest.permission.READ_CONTACTS,\n    rationale = "Permission required to read contacts" \n) { isGranted ->\n    if (isGranted) {\n        ...\n    }\n}\n')),(0,o.kt)("p",null,"We offer access to ",(0,o.kt)("inlineCode",{parentName:"p"},"PermissionChecker")," that will delegate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity")," the permission request. The ",(0,o.kt)("inlineCode",{parentName:"p"},"rationale")," string will be displayed in case of the user denies the permission request."),(0,o.kt)("h3",{id:"activityresultcontroller"},"ActivityResultController"),(0,o.kt)("p",null,"We offer access to ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultController")," that will delegate any ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContracts")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"MainActivity"),". For example, to get a contact from your phone contacts, use ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContracts.PickContact()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"(view.context as ActivityResultController?)?.launch(\n    type = ActivityResultContracts.PickContact(),\n    input = null,\n    callback = contactPhoneNumberCallback\n)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContacts.PickContact()")," is of ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContract<Void?, Uri?>")," type. It means it takes no input, and returns the chosen contact ",(0,o.kt)("inlineCode",{parentName:"p"},"Uri"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContracts.TakePicture()")," is of ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityResultContract<Uri, Boolean>")," type. It means it takes an ",(0,o.kt)("inlineCode",{parentName:"p"},"Uri")," to store the image and returns if success or not."),(0,o.kt)("p",null,"The available contracts can be found here: ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts"},(0,o.kt)("inlineCode",{parentName:"a"},"https://developer.android.com/reference/androidx/activity/result/contract/ActivityResultContracts")),"."),(0,o.kt)("p",null,"We support the following types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.StartActivityForResult")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Intent, ActivityResult>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.StartIntentSenderForResult")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<IntentSenderRequest, ActivityResult>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.RequestMultiplePermissions")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Array<String>, Map<String, Boolean>>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.RequestPermission")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<String, Boolean>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.TakePicturePreview")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Void?, Bitmap?>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.TakePicture")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Uri, Boolean>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.CaptureVideo")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Uri, Boolean>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.PickContact")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Void?, Uri?>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.GetContent")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<String, Uri?>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.GetMultipleContents")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<String, List<Uri>>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.OpenDocument")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Array<String>, Uri?>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.OpenMultipleDocuments")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Array<String>, List<Uri>>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContracts.OpenDocumentTree")," of type ",(0,o.kt)("inlineCode",{parentName:"li"},"ActivityResultContract<Uri?, Uri?>"))))}u.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var i=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=i.createContext({}),s=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return i.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(n),d=o,C=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(C,a(a({ref:e},p),{},{components:n})):i.createElement(C,a({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var s=2;s<r;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);