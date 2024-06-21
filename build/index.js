(()=>{"use strict";var e,t={544:(e,t,o)=>{var r={};o.r(r),o.d(r,{isAuthenticated:()=>f});var l={};o.r(l),o.d(l,{updateAuthenticationStatus:()=>y});const i=window.wp.blocks,a=window.React,n=function(){return(0,a.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 771.444"},(0,a.createElement)("rect",{x:"427.842",width:"166.721",height:"172.249",fill:"#4FC3F7"}),(0,a.createElement)("rect",{x:"338.962",y:"172.249",width:"255.601",height:"166.721",fill:"#5586FF"}),(0,a.createElement)("rect",{x:"172.241",y:"172.249",width:"166.721",height:"255.609",fill:"#3D5AFE"}),(0,a.createElement)("rect",{y:"427.858",width:"338.962",height:"166.721",fill:"#3949AB"}),(0,a.createElement)("rect",{x:"851.743",y:"176.865",width:"172.257",height:"166.721",fill:"#FFAB00"}),(0,a.createElement)("rect",{x:"685.022",y:"176.865",width:"166.721",height:"255.609",fill:"#FF5252"}),(0,a.createElement)("rect",{x:"596.142",y:"432.474",width:"255.601",height:"166.721",fill:"#F50057"}),(0,a.createElement)("rect",{x:"429.421",y:"432.483",width:"166.721",height:"338.961",fill:"#C51162"}))},c=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/wp-store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"apiKey":{"type":"string"},"height":{"type":"string","default":"450"},"latitude":{"type":"number","default":51.48762585296625},"longitude":{"type":"number","default":-0.1326724377053381},"zoom":{"type":"number","default":6},"themeColor":{"type":"string","default":"#000"},"tileColor":{"type":"string","default":"#000"},"tileSize":{"type":"number","default":11},"breakPoint":{"type":"number","default":10},"defaultMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"selectedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-selected.svg"},"numberedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"language":{"type":"string","default":"en"},"period":{"type":"string","default":"fr"},"unitSystem":{"type":"number","default":"0"},"filtersOpened":{"type":"boolean","default":false},"filtersCustomOrder":{"type":"boolean","default":false},"filters":{"type":"array","default":[],"items":{"type":"object","properties":{"propertyType":{"type":"string"},"title":{"type":"string"},"innerOperator":{"type":"string"},"choices":{"type":"array","default":[],"items":{"type":"object","properties":{"choiceKey":{"type":"string"},"choiceTitle":{"type":"string"},"choiceSelected":{"type":"boolean"},"choiceHidden":{"type":"boolean"}}}}}}},"filtersOuterOperator":{"type":"string","default":"or"}},"textdomain":"wp-store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","script":"woosmap-webapp-js"}'),s=window.wp.components,d=window.wp.i18n,p=window.wp.blockEditor,u=window.wp.element,m=window.wp.data,h=window.wp.compose;class g{constructor(e){this.element=e,this.storeLocatorConfig={},this.webAppLib=e.ownerDocument.defaultView.WebApp,this.webAppLib&&this.element.dataset.apiKey&&this.init()}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const{latitude:e,longitude:t,zoom:o,themeColor:r,apiKey:l,tileColor:i,tileSize:a,breakPoint:n,defaultMarkerUrl:c,selectedMarkerUrl:s,numberedMarkerUrl:d,language:p,period:u,unitSystem:m,filtersOpened:h,filtersCustomOrder:g,filters:w,filtersOuterOperator:b}=this.element.dataset;let f={filters:[]};const y=JSON.parse(w);y&&(f=y.map((e=>({propertyType:e.propertyType||"propertyType",title:{en:e.title||"title"},choices:e.choices.map((e=>({key:e.choiceKey||"choiceKey",en:e.choiceTitle||"choiceTitle",selected:e.choiceSelected||!1,hidden:e.choiceHidden||!1})))||[],innerOperator:e.innerOperator||"and"})))),this.storeLocatorConfig={theme:{primary_color:r||"#000"},datasource:{max_responses:5,max_distance:5e4},internationalization:{lang:p||"en",period:u||"fr",unitSystem:Number(m)||0},maps:{provider:"woosmap"},woosmapview:{initialCenter:{lat:Number(e)||48.967529,lng:Number(t)||2.368438},initialZoom:Number(o)||5,tileStyle:{color:i||"#000",size:Number(a)||11,minSize:5},breakPoint:Number(n)||10,style:{rules:[],default:{icon:{url:c||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:s||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:d||"https://images.woosmap.com/marker-default.svg"}}}},filters:{opened:h||!1,customOrder:g||!1,filters:f,outerOperator:b||"or"}},this.element.innerHTML="";const _=document.createElement("div");_.style="width:100%; height:100%",_.id="store-locator-widget-id",this.element.appendChild(_),this.storeLocatorWidget&&(this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)),this.storeLocatorWidget=new this.webAppLib(_.id,l),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)}}class w extends g{constructor(e,t,o){super(e),this.isEditor=!0,this.clientId=t,this.setAttributes=o,this.initEdit()}initEdit(){this.addListeners()}remove(){this.storeLocatorWidget&&(this.element.parentNode.removeChild(this.element),this.storeLocatorWidget=null)}addListeners(){this.element.addEventListener("click",(()=>{(0,m.dispatch)("core/block-editor").selectBlock(this.clientId)}))}update(e,t=!0){const{height:o,latitude:r,longitude:l,zoom:i,themeColor:a,apiKey:n,tileColor:c,tileSize:s,breakPoint:d,defaultMarkerUrl:p,selectedMarkerUrl:u,numberedMarkerUrl:m,language:h,period:g,unitSystem:w,filtersOpened:b,filtersCustomOrder:f,filters:y,filtersOuterOperator:_}=e;o&&(this.element.style.height=`${o}px`),r&&(this.element.dataset.latitude=r),l&&(this.element.dataset.longitude=l),i&&(this.element.dataset.zoom=i),a&&(this.element.dataset.themeColor=a),n&&(this.element.dataset.apiKey=n),c&&(this.element.dataset.tileColor=c),s&&(this.element.dataset.tileSize=s),d&&(this.element.dataset.breakPoint=d),p&&(this.element.dataset.defaultMarkerUrl=p),u&&(this.element.dataset.selectedMarkerUrl=u),m&&(this.element.dataset.numberedMarkerUrl=m),h&&(this.element.dataset.language=h),g&&(this.element.dataset.period=g),w&&(this.element.dataset.unitSystem=w),b&&(this.element.dataset.filtersOpened=b),f&&(this.element.dataset.filtersCustomOrder=f),y&&(this.element.dataset.filters=JSON.stringify(y)),_&&(this.element.dataset.filtersOuterOperator=_),t&&this.init()}}const b=(0,m.combineReducers)({authenticationReducer:function(e,t){return"UPDATE_AUTHENTICATION"===t.type?{...e,authenticated:t.isAuthenticated}:e}});function f(e){return Boolean(e?.authenticationReducer?.authenticated)}function y(e){return{type:"UPDATE_AUTHENTICATION",isAuthenticated:e}}const _=(0,m.createReduxStore)("woosmap/wp-store-locator-widget-block",{reducer:b,selectors:r,actions:l});function k(e){const{attributes:{height:t,zoom:o,themeColor:r},setAttributes:l}=e;return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Display Settings","wp-store-locator-widget-block")},(0,a.createElement)(s.PanelRow,null,(0,a.createElement)("label",{htmlFor:"theme-color-control"},(0,d.__)("Primary Color","wp-store-locator-widget-block")),(0,a.createElement)(s.ColorIndicator,{id:"theme-color-control",colorValue:r})),(0,a.createElement)(s.ColorPalette,{value:r,onChange:e=>l({themeColor:e})}),(0,a.createElement)(s.RangeControl,{label:(0,d.__)("Zoom","wp-store-locator-widget-block"),value:o,onChange:e=>l({zoom:e}),min:0,max:20,step:.5}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Height ( pixels )","wp-store-locator-widget-block"),value:t,onChange:e=>l({height:e})}))}function E(e){const{attributes:{tileColor:t,tileSize:o,breakPoint:r,defaultMarkerUrl:l,selectedMarkerUrl:i,numberedMarkerUrl:n},setAttributes:c}=e;return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Marker Settings","wp-store-locator-widget-block")},(0,a.createElement)(s.PanelRow,null,(0,a.createElement)("label",{htmlFor:"tile-color-control"},(0,d.__)("Tile Color","wp-store-locator-widget-block")),(0,a.createElement)(s.ColorIndicator,{id:"tile-color-control",colorValue:t})),(0,a.createElement)(s.ColorPalette,{value:t,onChange:e=>c({tileColor:e})}),(0,a.createElement)(s.RangeControl,{label:(0,d.__)("Tile Size","wp-store-locator-widget-block"),value:o,onChange:e=>c({tileSize:e}),min:1,max:50,step:1}),(0,a.createElement)(s.RangeControl,{label:(0,d.__)("Break Point","wp-store-locator-widget-block"),value:r,onChange:e=>c({breakPoint:e}),min:1,max:20,step:1}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Default Marker Url","wp-store-locator-widget-block"),value:l,onChange:e=>c({defaultMarkerUrl:e})}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Selected Marker Url","wp-store-locator-widget-block"),value:i,onChange:e=>c({selectedMarkerUrl:e})}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Numbered Marker Url","wp-store-locator-widget-block"),value:n,onChange:e=>c({numberedMarkerUrl:e})}))}function v(e){const{attributes:{language:t,period:o,unitSystem:r},setAttributes:l}=e;return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Internationalization Settings","wp-store-locator-widget-block")},(0,a.createElement)(s.SelectControl,{label:(0,d.__)("Language","wp-store-locator-widget-block"),value:t,onChange:e=>l({language:e})},(0,a.createElement)("option",{value:"pt-br"},(0,d.__)("Brazilian Portuguese","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"ca"},(0,d.__)("Catalan","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"zh"},(0,d.__)("Chinese","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"zh-HK"},(0,d.__)("Chinese (Hong Kong)","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"hr"},(0,d.__)("Croatian","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"de"},(0,d.__)("Deutsch","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"nl"},(0,d.__)("Dutch","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"en"},(0,d.__)("English","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"fr"},(0,d.__)("French","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"el"},(0,d.__)("Greek","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"he"},(0,d.__)("Hebrew","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"it"},(0,d.__)("Italian","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"ja"},(0,d.__)("Japanese","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"pl"},(0,d.__)("Polish","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"pt"},(0,d.__)("Portuguese","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"ro"},(0,d.__)("Romanian","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"ru"},(0,d.__)("Russian","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"es"},(0,d.__)("Spanish","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"sv"},(0,d.__)("Swedish","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"uk"},(0,d.__)("Ukrainian","wp-store-locator-widget-block"))),(0,a.createElement)(s.SelectControl,{label:(0,d.__)("Period","wp-store-locator-widget-block"),value:o,onChange:e=>l({period:e})},(0,a.createElement)("option",{value:"fr"},(0,d.__)("24h","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"en-US"},(0,d.__)("12h","wp-store-locator-widget-block"))),(0,a.createElement)(s.SelectControl,{label:(0,d.__)("Unit System","wp-store-locator-widget-block"),value:r,onChange:e=>l({unitSystem:e})},(0,a.createElement)("option",{value:"0"},(0,d.__)("Metric","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"1"},(0,d.__)("Imperial","wp-store-locator-widget-block"))))}function C(e){const{choiceIndex:t,choice:o,choiceKey:r,choiceTitle:l,choiceSelected:i,choiceHidden:n,choices:c,index:p,filter:u,filters:m,setAttributes:h}=e,g=e=>{const t=m.map(((t,o)=>o===p?e:t));h({filters:t})},w=e=>{const o=c.map(((o,r)=>r===t?e:o));g({...u,choices:o})};return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Choice: ","wp-store-locator-widget-block")+l+" {"+r+"}",initialOpen:!1},(0,a.createElement)(s.TextControl,{label:(0,d.__)("Choice Key","wp-store-locator-widget-block"),value:r,onChange:e=>{(e=>e.trim()?!c.some((t=>t.choiceKey===e))||(alert((0,d.__)("This choice already exists. Please choose a different one.","wp-store-locator-widget-block")),!1):(alert((0,d.__)("Choice Key cannot be empty.","wp-store-locator-widget-block")),!1))(e)&&w({...o,choiceKey:e})}}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Choice Tile","wp-store-locator-widget-block"),value:l,onChange:e=>{(e=>!!e.trim()||(alert((0,d.__)("Choice Title cannot be empty.","wp-store-locator-widget-block")),!1))(e)&&w({...o,choiceTitle:e})}}),(0,a.createElement)(s.CheckboxControl,{label:(0,d.__)("Selected","wp-store-locator-widget-block"),checked:i,onChange:e=>w({...o,choiceSelected:e})}),(0,a.createElement)(s.CheckboxControl,{label:(0,d.__)("Hidden","wp-store-locator-widget-block"),checked:n,onChange:e=>w({...o,choiceHidden:e})}),(0,a.createElement)(s.Button,{variant:"primary",onClick:()=>{const e=c.filter(((e,o)=>o!==t));g({...u,choices:e})}},(0,d.__)("Delete choice","wp-store-locator-widget-block")))}function S(e){const{index:t,filter:o,propertyType:r,title:l,innerOperator:i,choices:n,filters:c,setAttributes:p}=e,m=e=>{const o=c.map(((o,r)=>r===t?e:o));p({filters:o})},[h,g]=(0,u.useState)(""),[w,b]=(0,u.useState)("");return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Filter: ","wp-store-locator-widget-block")+l+" {"+r+"}",initialOpen:!1},(0,a.createElement)(s.TextControl,{label:(0,d.__)("Property Type","wp-store-locator-widget-block"),value:r,onChange:e=>{(e=>e.trim()?!c.some((t=>t.propertyType===e))||(alert((0,d.__)("This filter already exists. Please choose a different one.","wp-store-locator-widget-block")),!1):(alert((0,d.__)("Property Type cannot be empty.","wp-store-locator-widget-block")),!1))(e)&&m({...o,propertyType:e})}}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("title","wp-store-locator-widget-block"),value:l,onChange:e=>{(e=>!!e.trim()||(alert((0,d.__)("Title cannot be empty.","wp-store-locator-widget-block")),!1))(e)&&m({...o,title:e})}}),(0,a.createElement)(s.SelectControl,{label:(0,d.__)("Inner Operator","wp-store-locator-widget-block"),value:i,onChange:e=>m({...o,innerOperator:e})},(0,a.createElement)("option",{value:"and"},(0,d.__)("And","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"or"},(0,d.__)("Or","wp-store-locator-widget-block"))),(0,a.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,a.createElement)(s.TextControl,{label:(0,d.__)("Choice Key","wp-store-locator-widget-block"),value:h,onChange:e=>g(e)}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Choice Title","wp-store-locator-widget-block"),value:w,onChange:e=>b(e)}),(0,a.createElement)(s.Button,{variant:"primary",onClick:()=>{if(!h.trim())return void alert("Choice Key cannot be empty.");if(!w.trim())return void alert("Choice Title cannot be empty.");if(n.find((e=>e.choiceKey===h)))return void alert("This choice already exists. Please choose a different one.");const e={choiceKey:h,choiceTitle:w,choiceSelected:!1},t=[...n,e];m({...o,choices:t}),g(""),b("")}},(0,d.__)("Add Choice","wp-store-locator-widget-block"))),n.map(((e,r)=>(0,a.createElement)(C,{choiceIndex:r,choice:e,choiceKey:e.choiceKey,choiceTitle:e.choiceTitle,choiceSelected:e.choiceSelected,choiceHidden:e.choiceHidden,choices:n,index:t,filter:o,filters:c,setAttributes:p}))),(0,a.createElement)(s.Button,{variant:"primary",onClick:()=>{const e=c.filter(((e,o)=>o!==t));p({filters:e})},style:{marginTop:20}},(0,d.__)("Delete filter","wp-store-locator-widget-block")))}function O(e){const{attributes:{filtersOpened:t,filtersCustomOrder:o,filters:r,filtersOuterOperator:l},setAttributes:i}=e,[n,c]=(0,u.useState)(""),[p,m]=(0,u.useState)("");return(0,a.createElement)(s.PanelBody,{title:(0,d.__)("Filters Settings","wp-store-locator-widget-block"),initialOpen:!1},(0,a.createElement)(s.CheckboxControl,{label:(0,d.__)("Filters Opened","wp-store-locator-widget-block"),checked:t,onChange:e=>i({filtersOpened:e})}),(0,a.createElement)(s.CheckboxControl,{label:(0,d.__)("Filters Custom Order","wp-store-locator-widget-block"),checked:o,onChange:e=>i({filtersCustomOrder:e})}),(0,a.createElement)(s.SelectControl,{label:(0,d.__)("Filters Outer Operator","wp-store-locator-widget-block"),value:l,onChange:e=>i({filtersOuterOperator:e})},(0,a.createElement)("option",{value:"and"},(0,d.__)("And","wp-store-locator-widget-block")),(0,a.createElement)("option",{value:"or"},(0,d.__)("Or","wp-store-locator-widget-block"))),(0,a.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,a.createElement)(s.TextControl,{label:(0,d.__)("Property Type","wp-store-locator-widget-block"),value:n,onChange:e=>c(e)}),(0,a.createElement)(s.TextControl,{label:(0,d.__)("Title","wp-store-locator-widget-block"),value:p,onChange:e=>m(e)}),(0,a.createElement)(s.Button,{variant:"primary",onClick:()=>{if(!n.trim())return void alert("Property Type cannot be empty.");if(!p.trim())return void alert("Title cannot be empty.");if(r.find((e=>e.propertyType===n)))return void alert("This filter already exists. Please choose a different one.");const e={propertyType:n,title:p,innerOperator:"and",choices:[]},t=[...r,e];i({filters:t}),c(""),m("")}},(0,d.__)("Add Filter","wp-store-locator-widget-block"))),r.map(((e,t)=>(0,a.createElement)(S,{index:t,filter:e,propertyType:e.propertyType,title:e.title,innerOperator:e.innerOperator,choices:e.choices,filters:r,setAttributes:i}))))}function T(e){const{isAuthenticated:t}=e;return t?(0,a.createElement)(p.InspectorControls,null,(0,a.createElement)(k,{...e}),(0,a.createElement)(v,{...e}),(0,a.createElement)(E,{...e}),(0,a.createElement)(O,{...e})):(0,a.createElement)(p.InspectorControls,null,(0,a.createElement)(s.PanelBody,null,(0,a.createElement)("p",null,(0,d.__)("You need to confirm your access to Woosmap before you can continue.","wp-store-locator-widget-block"))))}function x({setApiKey:e}){const[t,o]=(0,u.useState)(""),[r,l]=(0,u.useState)(!1),i=(0,m.useSelect)((e=>e("core").getEntityRecord("root","site")),[]);return(0,u.useEffect)((()=>{if(i){const{woosmap_settings:{woosmap_public_api_key:e}}=i;o(e)}}),[i]),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(s.TextControl,{label:(0,d.__)("Please enter your Public API Key","wp-store-locator-widget-block"),readOnly:r,name:"woosmap_public_api_key",value:t,onChange:e=>o(e)}),(0,a.createElement)(s.Button,{isPrimary:!0,disabled:r,isBusy:r,onClick:()=>{l(!0),(0,m.dispatch)("core").saveEntityRecord("root","site",{woosmap_settings:{woosmap_public_api_key:t}}).then((({woosmap_settings:{woosmap_public_api_key:t}})=>{o(t),l(!1),e(t),window.dispatchEvent(new CustomEvent("woosmapSettingsSaved"))})).catch((e=>{(0,m.dispatch)("core/notices").createErrorNotice(e.message,{isDismissible:!0,type:"snackbar"}),l(!1)}))}},(0,d.__)("Confirm Woosmap Credentials","wp-store-locator-widget-block")))}(0,m.register)(_);const A={top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function P({onResizeStart:e,onResize:t,onResizeStop:o,...r}){const[l,i]=(0,u.useState)(!1);return(0,a.createElement)(s.ResizableBox,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},className:"wp-store-locator-widget-block__resize-container "+(l?"is-resizing":""),enable:A,onResizeStart:(o,r,l)=>{e(l.clientHeight),t(l.clientHeight)},onResize:(e,o,r)=>{t(r.clientHeight),l||i(!0)},onResizeStop:(e,t,r)=>{o(r.clientHeight),i(!1)},minHeight:250,...r})}const L=(0,u.memo)((e=>{const{storeLocatorWidget:t,isAuthenticated:o,clientId:r,setAttributes:l,setStoreLocatorWidget:i,webAppLib:n,apiKey:c}=e,s=!!t,d=(0,h.useRefEffect)((e=>{if(n)return o&&!s&&i(new w(e,r,l)),()=>{s&&(t.remove(),i(null))}}),[n,c,o,t,r,l]);return(0,a.createElement)("div",{id:"storeLocatorWidgetEdit",ref:d})}));(0,i.registerBlockType)(c,{attributes:{...c.attributes},icon:n,edit:function(e){const{attributes:t,setAttributes:o,clientId:r,isSelected:l}=e,{height:i,apiKey:c}=t,[g,w]=(0,u.useState)(null),[b,f]=(0,u.useState)(null),[y,k]=(0,u.useState)(c),E=!!g,[v,C]=(0,u.useState)(!0),S=(0,m.useSelect)((e=>e(_).isAuthenticated())),{updateAuthenticationStatus:O}=(0,m.useDispatch)(_),{toggleSelection:A}=(0,m.useDispatch)(p.store),z=(0,h.useDebounce)((e=>{g.update(e)}),500),M=(0,h.useRefEffect)((e=>{const t=!!e.ownerDocument.defaultView.WebApp;if(!t)return void f(null);f(t);const o=()=>{(({status:e})=>{"Initialized"===e&&(C(!1),O(!0))})({status:"Initialized"})};return t&&(C(!1),y&&o()),window.addEventListener("woosmapSettingsSaved",o),()=>{window.removeEventListener("woosmapSettingsSaved",o),f(null)}}));(0,u.useEffect)((()=>{S&&C(!1)}),[S]),(0,u.useEffect)((()=>{S&&E&&z(t)}),[t,S,g]);const W=(0,p.useBlockProps)({ref:M});return v?(0,a.createElement)("div",{...W},(0,a.createElement)(s.Placeholder,{style:{height:`${i}px`},label:(0,d.__)("Block for Woosmap Store Locator Widget","wp-store-locator-widget-block"),icon:n},(0,a.createElement)(s.Spinner,null))):S?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(T,{...e,isAuthenticated:S,storeLocatorWidget:g,webAppLib:b}),(0,a.createElement)("div",{...W},(0,a.createElement)(P,{onResizeStart:()=>{A(!1)},onResize:e=>{g.update({height:e},!1)},onResizeStop:e=>{o({height:e}),A(!0)},showHandle:l,size:{height:i}}),(0,a.createElement)(L,{clientId:r,setAttributes:o,isAuthenticated:S,webAppLib:b,storeLocatorWidget:g,setStoreLocatorWidget:w,apiKey:y}))):(0,a.createElement)(a.Fragment,null,(0,a.createElement)(T,{...e,isAuthenticated:S,storeLocatorWidget:g,webAppLib:b}),(0,a.createElement)("div",{...W},(0,a.createElement)(s.Placeholder,{style:{minHeight:`${i}px`},label:(0,d.__)("Authorize Woosmap Access","wp-store-locator-widget-block"),icon:n,isColumnLayout:!0},(0,a.createElement)("div",{style:{marginBottom:"1em"}},(0,d.__)("To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ","wp-store-locator-widget-block"),(0,a.createElement)("a",{href:"https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",target:"_blank",rel:"noopener noreferrer"},(0,d.__)("Guide to register a Woosmap Public API Key.","wp-store-locator-widget-block"))),(0,a.createElement)(x,{setApiKey:e=>{k(e),o({apiKey:e})}}))))},save:function(e){const{attributes:{height:t,latitude:o,longitude:r,zoom:l,themeColor:i,apiKey:n,tileColor:c,tileSize:s,breakPoint:d,defaultMarkerUrl:u,selectedMarkerUrl:m,numberedMarkerUrl:h,language:g,period:w,unitSystem:b,filtersOpened:f,filtersCustomOrder:y,filters:_,filtersOuterOperator:k}}=e,E=p.useBlockProps.save({style:{height:`${t}px`},id:"storeLocatorWidget"});return(0,a.createElement)("div",{...E,"data-latitude":o,"data-longitude":r,"data-zoom":l,"data-theme-color":i,"data-api-key":n,"data-tile-color":c,"data-tile-size":s,"data-break-point":d,"data-default-marker-url":u,"data-selected-marker-url":m,"data-numbered-marker-url":h,"data-language":g,"data-period":w,"data-unit-system":b,"data-filters-opened":f,"data-filters-custom-order":y,"data-filters":JSON.stringify(_),"data-filters-outer-operator":k})}})}},o={};function r(e){var l=o[e];if(void 0!==l)return l.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,l,i)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){for(var[o,l,i]=e[d],n=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[c])))?o.splice(c--,1):(n=!1,i<a&&(a=i));if(n){e.splice(d--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,l,i]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var l,i,[a,n,c]=o,s=0;if(a.some((t=>0!==e[t]))){for(l in n)r.o(n,l)&&(r.m[l]=n[l]);if(c)var d=c(r)}for(t&&t(o);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=globalThis.webpackChunkwp_store_locator_widget_block=globalThis.webpackChunkwp_store_locator_widget_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=r.O(void 0,[350],(()=>r(544)));l=r.O(l)})();