(self.webpackChunkgo_mobile=self.webpackChunkgo_mobile||[]).push([[2820],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28682:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),o=["components"],l={id:"data",title:"Data"},s=void 0,p={unversionedId:"project-definition/data",id:"version-19-R3/project-definition/data",isDocsHomePage:!1,title:"Data",description:"This page is used to configure the data that will be handled by your mobile app. It allows you to:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19-R3/project-definition/data.md",sourceDirName:"project-definition",slug:"/project-definition/data",permalink:"/go-mobile/pt/docs/19-R3/project-definition/data",editUrl:"https://github.com/4d/go-mobile/edit/main/versioned_docs/version-19-R3/project-definition/data.md",version:"19-R3",frontMatter:{id:"data",title:"Data"},sidebar:"version-19-R3/docs",previous:{title:"Estrutura",permalink:"/go-mobile/pt/docs/19-R3/project-definition/structure"},next:{title:"Actions",permalink:"/go-mobile/pt/docs/19-R3/project-definition/actions"}},d=[{value:"Data source",id:"data-source",children:[{value:"Data file",id:"data-file",children:[]},{value:"Selecting the <code>key.mobileapp</code> file",id:"selecting-the-keymobileapp-file",children:[]},{value:"Do not include images",id:"do-not-include-images",children:[]},{value:"Do not regenerate data at each build",id:"do-not-regenerate-data-at-each-build",children:[]},{value:"Regenerate Now",id:"regenerate-now",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Tables",id:"tables",children:[]},{value:"Embed the data from this table",id:"embed-the-data-from-this-table",children:[]},{value:"Filter queries",id:"filter-queries",children:[]},{value:"Filter queries with user information",id:"filter-queries-with-user-information",children:[]}]}],c={toc:d};function u(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page is used to configure the data that will be handled by your mobile app. It allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"select the source of data to include in your app (",(0,r.kt)("strong",{parentName:"li"},"Current data file")," or ",(0,r.kt)("strong",{parentName:"li"},"Production server data file"),")"),(0,r.kt)("li",{parentName:"ul"},"define which set of data should be preloaded and when to regenerate it,"),(0,r.kt)("li",{parentName:"ul"},"filter data to include in your app depending on ",(0,r.kt)("strong",{parentName:"li"},"filter queries")," and ",(0,r.kt)("strong",{parentName:"li"},"user information"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data section",src:a(62411).Z})),(0,r.kt)("h2",{id:"data-source"},"Data source"),(0,r.kt)("p",null,"This panel allows you to configure the source of data handled by your app."),(0,r.kt)("h3",{id:"data-file"},"Data file"),(0,r.kt)("p",null,"Select the data file from which to get the data that will be handled by your app:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Current data file"),": the data is taken from the current data file of the 4D project. This option is useful in the development phase. Since it requires that the Web server is launched, a ",(0,r.kt)("strong",{parentName:"p"},"Start Web Server")," button is displayed if it is not running.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Production server data file"),": the data is taken from a production server running the 4D project over the network. The ",(0,r.kt)("strong",{parentName:"p"},"Production URL")," must be entered from the ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/19-R3/project-definition/publishing"},(0,r.kt)("strong",{parentName:"a"},"Publishing")," page")," if you choose this option. If not defined, you can click on the ",(0,r.kt)("strong",{parentName:"p"},"Set the Server URL")," button to open the Publishing page. This option requires that you select explicitely the ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," security file (see below)."))),(0,r.kt)("h3",{id:"selecting-the-keymobileapp-file"},"Selecting the ",(0,r.kt)("inlineCode",{parentName:"h3"},"key.mobileapp")," file"),(0,r.kt)("p",null,"To secure access to the data to embed, a ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," file is automatically generated by the 4D mobile editor in the ",(0,r.kt)("strong",{parentName:"p"},"MobileApps")," folder when the data file is selected. This key must be correctly installed to allow data dumping. It is required when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the app is ",(0,r.kt)("a",{parentName:"li",href:"build-panel"},"built")),(0,r.kt)("li",{parentName:"ul"},"you click on the ",(0,r.kt)("a",{parentName:"li",href:"#regenerate-now"},(0,r.kt)("strong",{parentName:"a"},"Regenerate now"))," button.")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("strong",{parentName:"p"},"MobileApps")," folder is automatically created in the 4D project's ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/Project/architecture.html#data-folder"},"data folder"),"."))),(0,r.kt)("p",null,"When you work with the ",(0,r.kt)("strong",{parentName:"p"},"Current data file"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," file is automatically selected in the data folder of the local project."),(0,r.kt)("p",null,"When you work with the ",(0,r.kt)("strong",{parentName:"p"},"Production server data file"),", you need to copy from the server and select the remote ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the production server machine, copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," file from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/Data/MobileApps")," folder of the server application project.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the mobile project editor, click on the ",(0,r.kt)("strong",{parentName:"p"},"Locate the key...")," button:"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data section",src:a(56487).Z})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("inlineCode",{parentName:"li"},"key.mobileapp")," file copied from the server.")),(0,r.kt)("p",null,"It is recommended to copy the file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/Data/MobileApps")," folder of the local project."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This key is only necessary to access data to be embedded in the app. Subsequent accesses to server data from the apps are ",(0,r.kt)("a",{parentName:"p",href:"/go-mobile/pt/docs/19-R3/project-definition/publishing"},"authenticated at the request level"),"."))),(0,r.kt)("h3",{id:"do-not-include-images"},"Do not include images"),(0,r.kt)("p",null,"Embedding images from the data in your app can be time consuming, especially in the development phase. Checking this option can save a considerable amount of time when building your app."),(0,r.kt)("h3",{id:"do-not-regenerate-data-at-each-build"},"Do not regenerate data at each build"),(0,r.kt)("p",null,"By defaut, each time you build your app, preloaded data (if any) are regenerated from the data file. In the development phase, you can save time by selecting this option."),(0,r.kt)("h3",{id:"regenerate-now"},"Regenerate Now"),(0,r.kt)("p",null,"This button regenerates the data to preload from the data file. It allows you to control the data generation during the development phase, specially when the ",(0,r.kt)("strong",{parentName:"p"},"Do not regenerate data at each build")," is checked."),(0,r.kt)("p",null,":::nota"),(0,r.kt)("p",null,"This button requires a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"key.mobileapp")," file if you use the ",(0,r.kt)("a",{parentName:"p",href:"#data-file"},"production server data file"),"."),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Data section",src:a(37774).Z})),(0,r.kt)("p",null,"In this area, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"select tables from which to get embedded (preloaded) data"),(0,r.kt)("li",{parentName:"ul"},"define ",(0,r.kt)("strong",{parentName:"li"},"filter queries")," for each table. Filter queries are automatically applied when the app access data, in order to only get a selection of records.")),(0,r.kt)("p",null,"By default, if you do not define a filter query for a table, all of its records are embedded."),(0,r.kt)("h3",{id:"tables"},"Tables"),(0,r.kt)("p",null,"You can define one filter query per table. This list allows you to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"select the table for which you want to add or edit a filter query"),(0,r.kt)("li",{parentName:"ul"},"see the size of embedded data if the ",(0,r.kt)("a",{parentName:"li",href:"#embed-the-data-from-this-table"},"embed option is selected"),". This information is not available if table data access uses a filter query based upon user information since it depends on the user."),(0,r.kt)("li",{parentName:"ul"},"see if the table is associated to a filter query ",(0,r.kt)("img",{alt:"filter",src:a(93380).Z})," or a filter query with user information ",(0,r.kt)("img",{alt:"filter-user",src:a(93734).Z}),".")),(0,r.kt)("h3",{id:"embed-the-data-from-this-table"},"Embed the data from this table"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"embed",src:a(16948).Z})),(0,r.kt)("p",null,"When this option is checked (default), the editor will preload data of the selected in the mobile app when it is built or when ",(0,r.kt)("a",{parentName:"p",href:"#do-not-regenerate-data-at-each-build"},"data are regenerated"),". This option accelerates data access from the mobile app since it only requires updates and not full downloads. It is particularly suited for stable data like cities or countries."),(0,r.kt)("p",null,"You can uncheck the option if preloading the table data is not accurate."),(0,r.kt)("p",null,"This option is not available if table data access uses a filter query based upon user information since it depends on the user. In this context, the button is replaced by the ",(0,r.kt)("strong",{parentName:"p"},"Edit authentication method...")," button that opens the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},"On Mobile App Authentication")," method in which you can process user information."),(0,r.kt)("h3",{id:"filter-queries"},"Filter queries"),(0,r.kt)("p",null,"You can define one filter query per table. When a table is selected, click in the ",(0,r.kt)("strong",{parentName:"p"},"Filter query")," area, a set of menus is then displayed above the area:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"filter-buttons",src:a(38833).Z})),(0,r.kt)("p",null,"To define a query:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Enter your query in the dedicated field by typing it directly in the query area or using the ",(0,r.kt)("strong",{parentName:"li"},"Fields"),", ",(0,r.kt)("strong",{parentName:"li"},"Comparators")," and ",(0,r.kt)("strong",{parentName:"li"},"Operators")," menus.")),(0,r.kt)("p",null,"A query uses the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"field comparator value {logicalOperator field comparator value}   \n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Validate your query by clicking on the ",(0,r.kt)("strong",{parentName:"li"},"Validate")," button. This must be done each time you modify it (a query that has been edited and not validated appears in red in the query editor).")),(0,r.kt)("p",null,"When a query filter is valid, an icon appears near the table name (",(0,r.kt)("img",{alt:"filter",src:a(93380).Z})," for static filters and ",(0,r.kt)("img",{alt:"filter-user",src:a(93734).Z})," for filters with user information)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.4d.com/docs/en/REST/filter.html"},"?filter REST documentation")," for a detailed description of query syntaxes. The string entered in the ",(0,r.kt)("strong",{parentName:"p"},"Filter query")," area is directly passed as parameter to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$filter=")," REST command."))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"If you select a table that contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"FirstName")," field and a ",(0,r.kt)("inlineCode",{parentName:"p"},"LastName")," field, you can write in the ",(0,r.kt)("strong",{parentName:"p"},"Filter query"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"FirstName = 'Lisa' & LastName = 'Hart'\n")),(0,r.kt)("p",null,'This query gets only the records that include "Lisa" as FirstName and "Hart" as LastName.'),(0,r.kt)("h3",{id:"filter-queries-with-user-information"},"Filter queries with user information"),(0,r.kt)("p",null,"You can define ",(0,r.kt)("a",{parentName:"p",href:"#filter-queries"},"filter queries")," where the ",(0,r.kt)("em",{parentName:"p"},"value")," parameter depends on user information that is returned by the ",(0,r.kt)("a",{parentName:"p",href:"https://doc.4d.com/4Dv19/4D/19/On-Mobile-App-Authentication-database-method.301-5392844.en.html"},(0,r.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication")," database method")," of the 4D project."),(0,r.kt)("p",null,"To specify that the query depends on user information, just add ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},":"))," and a custom key value in the query."),(0,r.kt)("p",null,"For example, you can define filter queries such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Name = :name\nemployee.level > :level\ncityName = :city\n")),(0,r.kt)("p",null,"... where ",(0,r.kt)("inlineCode",{parentName:"p"},":")," preceeds variables that will be automatically filled by the mobile app depending on values returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"On Mobile App Authentication")," database method in the ",(0,r.kt)("inlineCode",{parentName:"p"},"userInfo")," object. The variables must exist as custom property names in the ",(0,r.kt)("inlineCode",{parentName:"p"},"userInfo")," object."),(0,r.kt)("p",null,"Here is how it works:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When the mobile app sends a request for data, the ",(0,r.kt)("inlineCode",{parentName:"li"},"On Mobile App Authentication")," database method is automatically called and gets information from the app in its ",(0,r.kt)("em",{parentName:"li"},"$1")," object parameter, in particular the ",(0,r.kt)("inlineCode",{parentName:"li"},"email"),", but also the ",(0,r.kt)("inlineCode",{parentName:"li"},"device")," or the ",(0,r.kt)("inlineCode",{parentName:"li"},"language"),"."),(0,r.kt)("li",{parentName:"ol"},"The database method queries the 4D datastore to get appropriate information with regard to the business rules and can return any value as a custom property of the ",(0,r.kt)("inlineCode",{parentName:"li"},"userInfo")," object. For example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},'$id:=ds. Salesperson.query("email == :1";$1.email).first().id \n    //gets the id value of the salesperson from its email If($id#null)\n    $Obj_response.userInfo:=New object("id";$id) //stores id in the userInfo to return End if  \n...\n$0:=$Obj_response\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"The mobile app automatically manages a ",(0,r.kt)("inlineCode",{parentName:"li"},"userInfo"),' object per user. In our example, the "id" custom property is available in the returned objet. Thus, you can write as the "Customers" table filter query:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-4d"},"salespersonid = :id\n")),(0,r.kt)("p",null,'When the mobile app will access data from the "Customers" table, only customers belonging to the logged salesperson will be displayed.'),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tutorial")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See the ",(0,r.kt)("a",{parentName:"p",href:"../tutorials/filter-queries/define-filter-query"},(0,r.kt)("strong",{parentName:"a"},"Define a filter query"))," tutorial for a complete example of filter query with user info in a mobile app."))))}u.isMDXComponent=!0},62411:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Data-tab-4D-for-iOS-52dc0a47bab5ab5a89a1eadda00eaaa1.png"},37774:function(e,t,a){"use strict";t.Z=a.p+"assets/images/Properties-Panel-4D-for-iOS-8e4513fb8d109249a42aad115a108576.png"},16948:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAAaCAIAAAAMkb9aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAOxSURBVHhe7ZjLUSQxDIY3p02CXEhigyCICYGaGCYGDkTAieuuZFsvS+12d5uiatF3QS1LvyQPmhn49ZEkyQpyl5JkDblLSbKG3KUkWUPuUpKsIXcpSdYw2qXfc7ToJPnZ7OzS3z1yl5KksnaXHrc/wu3RvEMg5eX+1h7mGKecEGSu5BL1Di7LbBM1+XZ/uVQyHHziNq7WXQL1ebqZRVOc3KX39/enp6fX11e3S0d7WpKiPScEmUHupCyETb6JHOL6gOOs8PRcIc11hRm+4kLOcGaX6iI9Pz9/fn7mLlmuVB9wfcBxVnh6fZbrCjN8xYWc4fAu6UWCx71dKp4HfIa2b334cVqgOBMgyRzH7/LkebnfbRVQIDB2WpCJlEW0aRIl254y4i4q2MntBtolSBrgJAwYXk6lq26yKLI40Qzn7BTUcwsaaw5uj2OKAfdXKC4p0pKCGxAkerelzT7ZAPqOrb480SMlBk2WUzNazM4uwbc42BzYn3CRALdLjBqBJ+VW0HYBOAaHUs+PW7EkoQxLpw0VrwUlyQsyk8pKQfBO7UFlekC7VrFj6lYpWMUS4DKyKssOCD+71IZWYNiJQs0MXgWVG9wex6heuq6aTa1JCY8VrGZ4Y6M+BwV8cOf0TaLTjRaws0uwM7A5dZ38IgFTn0t9x9o2KfCAneIYCnCBx0TJQyFUVrYXZLaUwWxUj5b1p4wOUzY2IFXhoDxsBBu7shtJRpm0Sy5YTXhq2PQCPJj2BrcniVohcsY3oABXwwty/NhJhq3VgMOG148TweuKartn/zser5NfJGDpLtEo/i7AI8LHq4SXWwmVJZ6PlWxwymx0IikIHJSHjWBjV3YjTQpW698/VUDQv07nY3La5i1hA5HTisCBUTzaUuwkw9ZCdvTjRPC6otrumfp7qa6TXyRgxS6RVyZRzgZ6+DL6w1hZ216QiZQ5D12sQALBKaPCepteJTPmVvC8bLX7FChiJVQAm2Y6Og7aU6c9OoZDtpz+BggO3G8pdHJKr9KI9TlEK/gmw8iAw/976HC7JJSaW32wjUb5Ax2RC8ZJCLlGxP3vAWmHGBlWiQSZQJmisbWmoEoEp8RGdUAaCAO2EwvgQjYHJKPFAd2QWsH3j+nuVWDxwe1xjApWNliSEtwAc6Cl7T6lLlcGSpjXpwg8VolBk50s2z1rdylJVhH+1o5+lb+dnV2aoUUnyUr+r11Kku8jdylJfiq5S0myhtylJFlD7lKSrCF3KUnWkLuUJCv4+PgHrnKaa3cYuREAAAAASUVORK5CYII="},56487:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAA7CAIAAACv9WLNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAUiSURBVHhe7ZkxTiNNEIW5EwEcAMEFICHEV4AQLYIMpz4AoZM/xcKQrETIGVbaEGQkx0iwf1V3dXX1TNuDvWVjse8LrOrqV9XTPQ/PAFtTAFyBpYAzsBRwBpYCzsBSwBlYCjgzz1KPj4+np6cHBwe7u7v0STFlZA6AGdQt9fr6enl52ev1RqPR8/Pz29sbfVJMGcpPJhPRAdCibqnz8/Pr6+uPj48/JZTp9/s0KzrhaXihDMa/JLsI1GG5wun013iwdO0X8Bc7VeJ5U5u8d4+2TlQsRU+3k5OT6KHxeHx0dEQPPvqkOCZptnwC5v0se38XPZENOsEFmXPln9wUyS6GTzJIbNCBVCx1dnZ2e3tL1nl4eNguia6iWXqvEjVj97Pc3hat2qATXJA5V/7JTVVlG3QgFUvt7e3RuxRZh76ZxEoJylD+5eVlf39f1Izdj8YcDIcD+Yniry8h/4Sl5GA8tlWtVkSuHz5RPsG9jKyySpil9gFtl7BtqwkuD7sYDAba06w5U5+1TJKZnbJUYG0exdJyVsnp0IWXC900qOxpzVQsRdYh3xD0vItOUihDeXpbp0DUTN4Pb8ecWNolx7K/rMjJcAiaTEU5Nl2Fqiw3bKwiWTMvUKZIaCsOQ8Q1kjLiFM7VZzgZS81OFW1iumXaSZtp15pZuaR14/UtpegtMnvjg8y3jiZ4QMm849qJaFyWB7pllA2DmlJp3OEwzHB9ozz2T/eqQ58gWc4ZAYVCzJS1zVnFyjROQeWS1k3FUvSeNBqNyDr39/dipcTd3R3laXb2u5RikrzPvDma4EH9oG2rFJflgW4ZZcOgpiyJd0Euad5CcsnxU8Zz9UIuIJIg1+q0qa3MKnYJjdttv4yKpei3uV6v9/7+Tu4hDx0eHu7s7NBn9BPlaXbWb3yGxs7TRvOec5JzIjZHwvM5WS7QaB7jWau0lU1IHia4Q6koS1hHb0qySLdeYFlzpyrMmzO1lVnFLqGxDZoFa6ZiKeLq6qrf78/6uxTNik6wm1TKZDjLgEny9mMqv7Rq8mI4NB00m52SBmahyipmtogDza62Q6s5E6aTlunQJ9JCZqepkj0qJaLiPpXZhF1CY5NsXtK6qVtqMpnoX8/pzYnex+kTfz0Hn6FuqQg93eidid7E6fc7+sT/+MBnmGcpAJYAlgLOwFLAGVgKOANLAWdgKeAMLAWcgaWAM7AUcAaWAs7AUsAZWAo4s0JL/Qe8kZPdbFZrqd/AD1gKlnIGloKlnIGlYClnYKmGpW6Ot7Z//JTB2ll09a+92jqw1Oos9clWVgZLrQ9YqgostTxfaqmfP7a3hOMbydlsTFKlwOM8kummPNKQhdVvRJmvo15L6NWGPpWFeJBrVL5KYKlOS/HdkrvCNyjO5qiFvc0qMfHNcVnYkCUrcRiX7ay1vmmJKWHmsr1WBizVZanWzzkPyqRAc0LsYFqx3lCU2hVrcVfttjV3RUyaWNP044qApZwslTMUxQ6mVVufsSvW4o7a4Cmdr4njBellrRpYatEHXww5KnRal2dsq3Dvy76Jhqwdd9easpqY3XR8rI7SXbQDD2CptqUychP4xItEICv1tjDm5okimzBR3j4jo1CXMPHMWtUEhQmFJOYltJAFYdAOPIClGpb6npCl3CzTBSz1D1iKvoT0u2/1wFLf21LxKbhGQ8FSxPf/llovsBQs5QwsxZYCvsjJbjYrtBT4N4GlgDOwFHAGlgLOwFLAGVgKOANLAWdgKeDKdPo/s7L7luFG9aoAAAAASUVORK5CYII="},38833:function(e,t){"use strict";t.Z="data:image/png;base64,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"},93380:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAEYSURBVEhL7ZW/jkVAFMbP6iSi8AxKUXgbT0BBp9KKTqemVWg8g1b0IvEGChGJRszdmT17s/ZaM8VuNje5v2bO+c6ZL2P+xBt5B/4ACcdf52V85/mMD9dtWRaI4xiGYUDlGl3XIQxDUBQFlS9Q40+apiFRFGHGh/bSOWcctsI0TZimCfI8h33fUX2E1mgP7aVzznh4eeu6QpqmbFuCIABVVbHywTzPkCQJ+3zf90GWZax8g637hLIsieM4pO97VAiLXddlNR4/GlPatiW2bWNGWEw1ES6vm2VZsG0bZsBiqonwfw9EkqTDqkXhGhuGAVVVYSYO19jzPKjrGrIsA03TUBUAD/GScRxJURSk6zpU+Lx+TXeezRjgBshNmBCc4vHJAAAAAElFTkSuQmCC"},93734:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAIAAAAi3QukAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAE3SURBVEhL7ZShjoNAEIa5ewTQBEUQBRSWILAoRBWCkNDwOiR9BAxVFEdSBBYsNag6MHCnmya9CZ00sF1acacu/Qzz7S4/2ZmEj+v1yvwFn/j8Ne+g1yxObRiGKIqOxyPUq9XKcRyWZW9bdCDokb7vfd9PkuRrBIrNZgOLuE2DHhSGIbyMMgIKiyg06D2CGxmGgTICervmEvSgy+WC1QTq4h16kCzLRVGgjIAqioJCgx7EcVwcx/v9/nsECtDnU6OM/3A4ZFkWBEGapnVdn89nVVVt295ut5ZlmaaJ5whuPb8D3/c873Q6oU9omsZ1XTiAPoe8Wp7nmqYJgoA+QRRFSZLgAPocMqgsS2LwU3Rdr6oKZQ4Z1HUddBrlAZ7n27ZFmUM2e71eY7XMbrfDasL7V/uafxvEMD8CNCdiowiB6QAAAABJRU5ErkJggg=="}}]);