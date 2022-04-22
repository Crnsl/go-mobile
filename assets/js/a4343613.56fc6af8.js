"use strict";(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[4875],{58733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={id:"detail-form-template-manifest",title:"Manifest.json"},s=void 0,m={unversionedId:"tutorials/creating-detail-forms/detail-form-template-manifest",id:"version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest",title:"Manifest.json",description:'The manifest file includes information about your detail form template,  such as the storyboard type ("listform" or "detailform"), name, and number of static fields.',source:"@site/versioned_docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest.md",sourceDirName:"tutorials/creating-detail-forms",slug:"/tutorials/creating-detail-forms/detail-form-template-manifest",permalink:"/go-mobile/docs/19-R3/tutorials/creating-detail-forms/detail-form-template-manifest",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/tutorials/creating-detail-forms/detail-form-template-manifest.md",tags:[],version:"19-R3",frontMatter:{id:"detail-form-template-manifest",title:"Manifest.json"},sidebar:"version-19-R3/tutorials",previous:{title:"Detail form icons",permalink:"/go-mobile/docs/19-R3/tutorials/creating-detail-forms/detail-form-icon"},next:{title:"Template.svg",permalink:"/go-mobile/docs/19-R3/tutorials/creating-detail-forms/detail-form-template-svg"}},f={},p=[],c={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The manifest file includes information about your detail form template,  such as the storyboard ",(0,i.kt)("strong",{parentName:"p"},"type"),' ("listform" or "detailform"), ',(0,i.kt)("strong",{parentName:"p"},"name"),", and ",(0,i.kt)("strong",{parentName:"p"},"number of static fields"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "detailform",\n\n  "name": "Custom Detail form",\n  "renderer": 2,  \n  "hOffset": 91, \n  "fields": {\n    "count": 1, \n    "max": 0\n },\n\n  "assets": {\n    "size": {\n      "width": 16,\n      "height": 16\n    }\n  }\n}\n\n')),(0,i.kt)("p",null,"For example, the above manifest file includes the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:"),'storyboard type. In this example, "detailform"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"name:"),'template name. In the this example, "Custom Detail form" below'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"renderer:")," version number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"hOffset:")," vertical offset of the first field that is going to be duplicated. In this example, 91 pixels from the top. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"fields"),": number of static fields. In this example, 1 static field and 0 for infinite duplicated fields (a header image, and duplicated fields)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Icon properties:")," Icon width and height (16 px)")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,d=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(d,o(o({ref:t},f),{},{components:n})):r.createElement(d,o({ref:t},f))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);