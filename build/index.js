(()=>{"use strict";var e,t={378:(e,t,o)=>{var r={};o.r(r),o.d(r,{isAuthenticated:()=>x});var a={};o.r(a),o.d(a,{updateAuthenticationStatus:()=>A});const i=window.wp.blocks,l=window.React,n=function(){return(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 771.444"},(0,l.createElement)("rect",{x:"427.842",width:"166.721",height:"172.249",fill:"#4FC3F7"}),(0,l.createElement)("rect",{x:"338.962",y:"172.249",width:"255.601",height:"166.721",fill:"#5586FF"}),(0,l.createElement)("rect",{x:"172.241",y:"172.249",width:"166.721",height:"255.609",fill:"#3D5AFE"}),(0,l.createElement)("rect",{y:"427.858",width:"338.962",height:"166.721",fill:"#3949AB"}),(0,l.createElement)("rect",{x:"851.743",y:"176.865",width:"172.257",height:"166.721",fill:"#FFAB00"}),(0,l.createElement)("rect",{x:"685.022",y:"176.865",width:"166.721",height:"255.609",fill:"#FF5252"}),(0,l.createElement)("rect",{x:"596.142",y:"432.474",width:"255.601",height:"166.721",fill:"#F50057"}),(0,l.createElement)("rect",{x:"429.421",y:"432.483",width:"166.721",height:"338.961",fill:"#C51162"}))},s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"height":{"type":"string","default":"500"},"apiKey":{"type":"string"},"theme":{"type":"object","properties":{"primary_color":{"type":"string","default":"#000"}},"default":{"primary_color":"#000"}},"internationalization":{"type":"object","properties":{"lang":{"type":"string","default":"en"},"period":{"type":"string","default":"fr"},"unitSystem":{"type":"number","default":0}},"default":{"lang":"en","period":"fr","unitSystem":0}},"woosmapView":{"type":"object","default":{"breakPoint":10,"tileStyle":{"color":"#000","size":11,"minSize":5},"initialCenter":{"lat":50,"lng":0},"initialZoom":6,"style":{"default":{"icon":{"url":"https://images.woosmap.com/marker-default.svg"},"selectedIcon":{"url":"https://images.woosmap.com/marker-selected.svg"},"numberedIcon":{"url":"https://images.woosmap.com/marker-default.svg"}}}}},"filters":{"type":"object","default":{}},"initialSearch":{"type":"object","default":{}},"maps":{"type":"object","default":{"provider":"woosmap","localities":{"types":["locality","postal_code","address","admin_level","country"]}}},"customMarkers":{"type":"array","default":[],"items":{"type":"object","properties":{"storeType":{"type":"string"},"customTyleColor":{"type":"string"},"customDefaultMarkerUrl":{"type":"string"},"customSelectedMarkerUrl":{"type":"string"},"customNumberedMarkerUrl":{"type":"string"}}}}},"textdomain":"store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":["file:./view.js","woosmap-webapp-js"]}'),c=window.wp.components,m=window.wp.i18n,u=window.wp.blockEditor,d=window.wp.element,p=window.wp.data,g=window.wp.compose,h={primary_color:"#000"},b={max_responses:5,max_distance:5e4},y={lang:"en",period:"fr",unitSystem:0},w={provider:"woosmap",localities:{types:["locality","postal_code","address","admin_level","country"]}},f={initialCenter:{lat:50,lng:0},initialZoom:13,tileStyle:{color:"#000",size:11,minSize:5,typeRules:[]},breakPoint:10,style:{rules:[],default:{icon:{url:"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:"https://images.woosmap.com/marker-default.svg"}}}};function k(e,t){return Object.keys(t).forEach((o=>{Array.isArray(t[o])?e[o]=t[o]:t[o]&&"object"==typeof t[o]?(e[o]||(e[o]={}),k(e[o],t[o])):e[o]=t[o]})),e}function _(e,t={}){try{return k(t,JSON.parse(e))}catch(e){return(0,p.dispatch)("core/notices").createErrorNotice(`Error parsing conf: ${e.message}`,{isDismissible:!0,type:"snackbar"}),t}}function E(e,t=null){const o="https://webapp.woosmap.com/webapp.js";if(e.ownerDocument.querySelector(`script[src^="${o}"][data-loading]`))return;const r=e.ownerDocument.querySelectorAll(`script[src^="${o}"], script[src^="https://sdk.woosmap.com/map/map.js"]`);r.length&&(["WebApp","woosmap"].forEach((t=>{void 0!==e.ownerDocument.defaultView[t]&&(e.ownerDocument.defaultView[t]=null)})),r.forEach((e=>e.parentNode.removeChild(e))));const a=e.ownerDocument.createElement("script");a.src=o,a.setAttribute("data-loading","true"),a.onload=()=>{a.removeAttribute("data-loading"),t&&"function"==typeof t&&t()},a.onerror=e=>{(0,p.dispatch)("core/notices").createErrorNotice(`Failed to load Woosmap WebApp script: ${e}`,{isDismissible:!0,type:"snackbar"}),a.removeAttribute("data-loading")},e.ownerDocument.head.appendChild(a)}class v{constructor(e){this.element=e,this.storeLocatorConfig={},this.element.dataset.apiKey&&E(this.element,(()=>{this.webAppLib=this.element.ownerDocument.defaultView.WebApp,this.init()}))}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const e=function(e){const{filters:t="{}",theme:o="{}",datasource:r="{}",internationalization:a="{}",woosmapView:i="{}",maps:l="{}",initialSearch:n="{}",apiKey:s}=e,c=_(i,f),m=_(o,h),u=_(r,b),d=_(a,y),p=_(t,{}),g=_(n,{});return{theme:m,datasource:u,internationalization:d,maps:{..._(l,w),apiKey:s},woosmapView:{...c,initialCenter:c.initialCenter,initialZoom:c.initialZoom,tileStyle:{color:c.tileStyle.color,size:Number(c.tileStyle.size),minSize:Number(c.tileStyle.minSize),typeRules:c.tileStyle.typeRules},breakPoint:Number(c.breakPoint),style:{rules:c.style.rules,default:c.style.default}},filters:p,initialSearch:g}}(this.element.dataset);this.storeLocatorConfig=function(e){if(!e.maps.apiKey||"string"!=typeof e.maps.apiKey||!e.maps.apiKey.trim())throw new Error("StoreLocator configuration error: apiKey is required and must be a non-empty string.");return e}(e),this.element.innerHTML="";const t=document.createElement("div");t.style="width:100%; height:100%",t.id="store-locator-widget-id",this.element.appendChild(t),this.storeLocatorWidget=new this.webAppLib(t.id,this.storeLocatorConfig.maps.apiKey),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.setConf(this.storeLocatorConfig),this.storeLocatorWidget.render()}}class S extends v{constructor(e,t,o){super(e),this.clientId=t,this.setAttributes=o,this.initEdit()}initEdit(){this.addListeners()}remove(){this.storeLocatorWidget&&(this.element.parentNode.removeChild(this.element),this.storeLocatorWidget=null)}addListeners(){this.element.addEventListener("click",(()=>{(0,p.dispatch)("core/block-editor").selectBlock(this.clientId)}))}updateDatasetProperty(e,t){this.element.dataset[e]="object"==typeof t?JSON.stringify(t):t}update(e,t=!0){Object.entries(e).forEach((([e,t])=>{"height"===e?this.element.style.height=`${t}px`:this.updateDatasetProperty(e,t)})),t&&E(this.element,(()=>{this.webAppLib=this.element.ownerDocument.defaultView.WebApp,this.init()}))}}const C=(0,p.combineReducers)({authenticationReducer:function(e,t){return"UPDATE_AUTHENTICATION"===t.type?{...e,authenticated:t.isAuthenticated}:e}});function x(e){return Boolean(e?.authenticationReducer?.authenticated)}function A(e){return{type:"UPDATE_AUTHENTICATION",isAuthenticated:e}}const P=(0,p.createReduxStore)("woosmap/store-locator-widget-block",{reducer:C,selectors:r,actions:a});function M(e){const{attributes:{height:t,theme:o,woosmapView:r},setAttributes:a}=e;return(0,l.createElement)(c.PanelBody,{title:(0,m.__)("Display Settings","store-locator-widget-block")},(0,l.createElement)(c.PanelRow,null,(0,l.createElement)("label",{htmlFor:"theme-color-control"},(0,m.__)("Primary Color","store-locator-widget-block")),(0,l.createElement)(c.ColorIndicator,{id:"theme-color-control",colorValue:o.primary_color})),(0,l.createElement)(c.ColorPalette,{value:o.primary_color,onChange:e=>a({theme:{primary_color:e}})}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Zoom","store-locator-widget-block"),value:r.initialZoom,onChange:e=>a({woosmapView:{...r,initialZoom:e}}),min:0,max:20,step:.5}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Height ( pixels )","store-locator-widget-block"),value:Number(t),onChange:e=>a({height:e}),min:250,max:3e3,step:5}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Default Latitude","store-locator-widget-block"),value:r.initialCenter.lat,onChange:e=>a({woosmapView:{...r,initialCenter:{...r.initialCenter,lat:e}}}),min:-90,max:90,step:.1}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Default Longitude","store-locator-widget-block"),value:r.initialCenter.lng,onChange:e=>a({woosmapView:{...r,initialCenter:{...r.initialCenter,lng:e}}}),min:-180,max:180,step:.1}))}function T(e){const{attributes:{woosmapView:t},setAttributes:o}=e,{breakPoint:r,tileStyle:a,style:i}=t||{};return(0,l.createElement)(c.PanelBody,{title:(0,m.__)("Marker Settings","store-locator-widget-block"),initialOpen:!1},(0,l.createElement)(c.PanelRow,null,(0,l.createElement)("label",{htmlFor:"tile-color-control"},(0,m.__)("Tile Color","store-locator-widget-block")),(0,l.createElement)(c.ColorIndicator,{id:"tile-color-control",colorValue:a.color})),(0,l.createElement)(c.ColorPalette,{value:a.color,onChange:e=>o({woosmapView:{...t,tileStyle:{...a,color:e}}})}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Tile Size","store-locator-widget-block"),value:a.size,onChange:e=>o({woosmapView:{...t,tileStyle:{...a,size:e}}}),min:1,max:50,step:1}),(0,l.createElement)(c.RangeControl,{label:(0,m.__)("Break Point","store-locator-widget-block"),value:r,onChange:e=>o({woosmapView:{...t,breakPoint:e}}),min:1,max:20,step:1}),(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Default Marker Url","store-locator-widget-block"),value:i.default.icon.url,onChange:e=>o({woosmapView:{...t,style:{...i,default:{...i.default,icon:{url:e}}}}})}),i.default.icon.url&&(0,l.createElement)("img",{src:i.default.icon.url,alt:"Default Marker Url",style:{maxWidth:"100%",height:"auto"}})),(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Selected Marker Url","store-locator-widget-block"),value:i.default.selectedIcon.url,onChange:e=>o({woosmapView:{...t,style:{...i,default:{...i.default,selectedIcon:{url:e}}}}})}),i.default.selectedIcon.url&&(0,l.createElement)("img",{src:i.default.selectedIcon.url,alt:"Selected Marker Url",style:{maxWidth:"100%",height:"auto"}})),(0,l.createElement)("div",{style:{padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Numbered Marker Url","store-locator-widget-block"),value:i.default.numberedIcon.url,onChange:e=>o({woosmapView:{...t,style:{...i,default:{...i.default,numberedIcon:{url:e}}}}})}),i.default.numberedIcon.url&&(0,l.createElement)("img",{src:i.default.numberedIcon.url,alt:"Numbered Marker Url",style:{maxWidth:"100%",height:"auto"}})))}function N(e){const{index:t,marker:o,storeType:r,customTyleColor:a,customDefaultMarkerUrl:i,customSelectedMarkerUrl:n,customNumberedMarkerUrl:s,customMarkers:u,setAttributes:d}=e,g=e=>{const o=u.map(((o,r)=>r===t?e:o));d({customMarkers:o})};return(0,l.createElement)(c.PanelBody,{title:(0,m.__)("Edit: ","store-locator-widget-block")+r,initialOpen:!1},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Store Type","store-locator-widget-block"),value:r,onChange:e=>{(e=>!!e.trim()||((0,p.dispatch)("core/notices").createErrorNotice((0,m.__)("Store Type cannot be empty","store-locator-widget-block"),{isDismissible:!0,type:"snackbar"}),!1))(e)&&g({...o,storeType:e})}}),(0,l.createElement)(c.PanelRow,null,(0,l.createElement)("label",{htmlFor:"custom-tile-color-control"},(0,m.__)("Custom Tile Color","store-locator-widget-block")),(0,l.createElement)(c.ColorIndicator,{id:"custom-tile-color-control",colorValue:a})),(0,l.createElement)(c.ColorPalette,{value:a,onChange:e=>g({...o,customTyleColor:e})}),(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Custom Default Marker Url","store-locator-widget-block"),value:i,onChange:e=>g({...o,customDefaultMarkerUrl:e})}),i&&(0,l.createElement)("img",{src:i,alt:"Custom Default Marker",style:{maxWidth:"100%",height:"auto"}})),(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Custom Selected Marker Url","store-locator-widget-block"),value:n,onChange:e=>g({...o,customSelectedMarkerUrl:e})}),n&&(0,l.createElement)("img",{src:n,alt:"Custom Selected Marker",style:{maxWidth:"100%",height:"auto"}})),(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Custom Numbered Marker Url","store-locator-widget-block"),value:s,onChange:e=>g({...o,customNumberedMarkerUrl:e})}),s&&(0,l.createElement)("img",{src:s,alt:"Custom Numbered Marker",style:{maxWidth:"100%",height:"auto"}})),(0,l.createElement)(c.Button,{variant:"primary",onClick:()=>{const e=u.filter(((e,o)=>o!==t));d({customMarkers:e})}},(0,m.__)("Delete Custom Marker","store-locator-widget-block")))}function R(e){const{attributes:{customMarkers:t},setAttributes:o}=e,[r,a]=(0,d.useState)("");return(0,l.createElement)(c.PanelBody,{title:(0,m.__)("Custom Marker Settings","store-locator-widget-block"),initialOpen:!1},(0,l.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,l.createElement)(c.TextControl,{label:(0,m.__)("Store Type","store-locator-widget-block"),value:r,onChange:e=>a(e)}),(0,l.createElement)(c.Button,{variant:"primary",onClick:()=>{if(!r.trim())return void(0,p.dispatch)("core/notices").createErrorNotice((0,m.__)("Store Type Title cannot be empty","store-locator-widget-block"),{isDismissible:!0,type:"snackbar"});const e={storeType:r,customTyleColor:"#000",customDefaultMarkerUrl:"https://images.woosmap.com/marker-default.svg",customSelectedMarkerUrl:"https://images.woosmap.com/marker-selected.svg",customNumberedMarkerUrl:"https://images.woosmap.com/marker-default.svg"},i=[...t,e];o({customMarkers:i}),a("")}},(0,m.__)("Add Custom Marker","store-locator-widget-block"))),t.map(((e,r)=>(0,l.createElement)(N,{key:r,index:r,marker:e,storeType:e.storeType,customTyleColor:e.customTyleColor,customDefaultMarkerUrl:e.customDefaultMarkerUrl,customSelectedMarkerUrl:e.customSelectedMarkerUrl,customNumberedMarkerUrl:e.customNumberedMarkerUrl,customMarkers:t,setAttributes:o}))))}function W(e){const{attributes:{internationalization:t},setAttributes:o}=e;return(0,l.createElement)(c.PanelBody,{title:(0,m.__)("Internationalization Settings","store-locator-widget-block"),initialOpen:!1},(0,l.createElement)(c.SelectControl,{label:(0,m.__)("Language","store-locator-widget-block"),value:t.lang,onChange:e=>o({internationalization:{...t,lang:e,period:t.period,unitSystem:t.unitSystem}})},(0,l.createElement)("option",{value:"pt-br"},(0,m.__)("Brazilian Portuguese","store-locator-widget-block")),(0,l.createElement)("option",{value:"ca"},(0,m.__)("Catalan","store-locator-widget-block")),(0,l.createElement)("option",{value:"zh"},(0,m.__)("Chinese","store-locator-widget-block")),(0,l.createElement)("option",{value:"zh-HK"},(0,m.__)("Chinese (Hong Kong)","store-locator-widget-block")),(0,l.createElement)("option",{value:"hr"},(0,m.__)("Croatian","store-locator-widget-block")),(0,l.createElement)("option",{value:"de"},(0,m.__)("Deutsch","store-locator-widget-block")),(0,l.createElement)("option",{value:"nl"},(0,m.__)("Dutch","store-locator-widget-block")),(0,l.createElement)("option",{value:"en"},(0,m.__)("English","store-locator-widget-block")),(0,l.createElement)("option",{value:"fr"},(0,m.__)("French","store-locator-widget-block")),(0,l.createElement)("option",{value:"el"},(0,m.__)("Greek","store-locator-widget-block")),(0,l.createElement)("option",{value:"he"},(0,m.__)("Hebrew","store-locator-widget-block")),(0,l.createElement)("option",{value:"it"},(0,m.__)("Italian","store-locator-widget-block")),(0,l.createElement)("option",{value:"ja"},(0,m.__)("Japanese","store-locator-widget-block")),(0,l.createElement)("option",{value:"pl"},(0,m.__)("Polish","store-locator-widget-block")),(0,l.createElement)("option",{value:"pt"},(0,m.__)("Portuguese","store-locator-widget-block")),(0,l.createElement)("option",{value:"ro"},(0,m.__)("Romanian","store-locator-widget-block")),(0,l.createElement)("option",{value:"ru"},(0,m.__)("Russian","store-locator-widget-block")),(0,l.createElement)("option",{value:"es"},(0,m.__)("Spanish","store-locator-widget-block")),(0,l.createElement)("option",{value:"sv"},(0,m.__)("Swedish","store-locator-widget-block")),(0,l.createElement)("option",{value:"uk"},(0,m.__)("Ukrainian","store-locator-widget-block"))),(0,l.createElement)(c.SelectControl,{label:(0,m.__)("Period","store-locator-widget-block"),value:t.period,onChange:e=>o({internationalization:{...t,lang:t.lang,period:e,unitSystem:t.unitSystem}})},(0,l.createElement)("option",{value:"fr"},(0,m.__)("24h","store-locator-widget-block")),(0,l.createElement)("option",{value:"en-US"},(0,m.__)("12h","store-locator-widget-block"))),(0,l.createElement)(c.SelectControl,{label:(0,m.__)("Unit System","store-locator-widget-block"),value:t.unitSystem,onChange:e=>o({internationalization:{...t,lang:t.lang,period:t.period,unitSystem:Number(e)}})},(0,l.createElement)("option",{value:"0"},(0,m.__)("Metric","store-locator-widget-block")),(0,l.createElement)("option",{value:"1"},(0,m.__)("Imperial","store-locator-widget-block"))))}function L(e){const{isAuthenticated:t}=e;return t?(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(M,{...e}),(0,l.createElement)(W,{...e}),(0,l.createElement)(T,{...e}),(0,l.createElement)(R,{...e})):(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(c.PanelBody,null,(0,l.createElement)("p",null,(0,m.__)("You need to confirm your access to Woosmap before you can continue.","store-locator-widget-block"))))}function z({setApiKey:e}){const[t,o]=(0,d.useState)(""),[r,a]=(0,d.useState)(!1),i=(0,p.useSelect)((e=>e("core").getEntityRecord("root","site")),[]);return(0,d.useEffect)((()=>{if(i){const{woosmap_settings:{woosmap_public_api_key:e}}=i;o(e)}}),[i]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.TextControl,{label:(0,m.__)("Please enter your Public API Key","store-locator-widget-block"),readOnly:r,name:"woosmap_public_api_key",value:t,onChange:e=>o(e)}),(0,l.createElement)(c.Button,{isPrimary:!0,disabled:r,isBusy:r,onClick:()=>{a(!0),(0,p.dispatch)("core").saveEntityRecord("root","site",{woosmap_settings:{woosmap_public_api_key:t}}).then((({woosmap_settings:{woosmap_public_api_key:t}})=>{o(t),a(!1),e(t),window.dispatchEvent(new CustomEvent("woosmapSettingsSaved"))})).catch((e=>{(0,p.dispatch)("core/notices").createErrorNotice(e.message,{isDismissible:!0,type:"snackbar"}),a(!1)}))}},(0,m.__)("Confirm Woosmap Credentials","store-locator-widget-block")))}(0,p.register)(P);const D={top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function I({onResizeStart:e,onResize:t,onResizeStop:o,...r}){const[a,i]=(0,d.useState)(!1);return(0,l.createElement)(c.ResizableBox,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},className:"store-locator-widget-block__resize-container "+(a?"is-resizing":""),enable:D,onResizeStart:(o,r,a)=>{e(a.clientHeight),t(a.clientHeight)},onResize:(e,o,r)=>{t(r.clientHeight),a||i(!0)},onResizeStop:(e,t,r)=>{o(r.clientHeight),i(!1)},minHeight:250,...r})}function O({blockProps:e,BlockIcon:t,initialConfig:o,onValidateConfig:r}){const{height:a,apiKey:i,...n}=o,[s,g]=(0,d.useState)(JSON.stringify(n,null,2)),h=(0,d.useCallback)((()=>{try{const e=function(e){const t=e.replace(/'/g,'"').replace(/([,{]\s*)([a-zA-Z0-9_]+):/g,'$1"$2":').replace(/\b(true|false|null)\b/g,(e=>e.toLowerCase())).replace(/,\s*([}\]])/g,"$1").trim();try{return JSON.stringify(JSON.parse(t),null,2)}catch(e){throw new Error("Failed to process input config into valid JSON: "+e.message)}}(s);g(e);const t=JSON.parse(e);r(t)}catch(e){const t=`Invalid Widget Conf format: ${e.message}`;(0,p.dispatch)("core/notices").createErrorNotice(t,{isDismissible:!0,type:"snackbar"})}}),[s,r]);return(0,l.createElement)("div",{...e},(0,l.createElement)(c.Placeholder,{label:(0,m.__)("Store Locator Widget Configuration","store-locator-widget-block"),icon:t},(0,l.createElement)("pre",null,(0,l.createElement)(u.RichText,{value:s,onChange:e=>g(e),placeholder:(0,m.__)("Write json conf…"),"aria-label":(0,m.__)("Conf"),preserveWhiteSpace:!0,allowedFormats:[],withoutInteractiveFormatting:!0,__unstablePastePlainText:!0})),(0,l.createElement)(c.Button,{isPrimary:!0,onClick:h,style:{marginTop:"10px"}},(0,m.__)("Validate Configuration","store-locator-widget-block"))))}const B=(0,d.memo)((e=>{const{storeLocatorWidget:t,isAuthenticated:o,clientId:r,setAttributes:a,setStoreLocatorWidget:i,apiKey:n}=e,s=!!t,c=(0,g.useRefEffect)((e=>(o&&!s&&i(new S(e,r,a)),()=>{s&&(t.remove(),i(null))})),[n,o,t,r,a]);return(0,l.createElement)("div",{id:"storeLocatorWidgetEdit",ref:c})}));(0,i.registerBlockType)(s,{attributes:{...s.attributes},icon:n,edit:function(e){const{attributes:t,setAttributes:o,clientId:r,isSelected:a}=e,{height:i,apiKey:s}=t,[h,b]=(0,d.useState)(null),[y,w]=(0,d.useState)(s),f=!!h,[k,_]=(0,d.useState)(!0),[E,v]=(0,d.useState)(!1),S=(0,p.useSelect)((e=>e(P).isAuthenticated())),{updateAuthenticationStatus:C}=(0,p.useDispatch)(P),{toggleSelection:x}=(0,p.useDispatch)(u.store),A=(0,g.useDebounce)((e=>{h.update(e)}),500),M=(0,g.useRefEffect)((()=>{const e=()=>{(({status:e})=>{"Initialized"===e&&C(!0)})({status:"Initialized"})};return _(!1),y&&!S&&e(),window.addEventListener("woosmapSettingsSaved",e),()=>{window.removeEventListener("woosmapSettingsSaved",e)}}));(0,d.useEffect)((()=>{S&&_(!1)}),[S]),(0,d.useEffect)((()=>{S&&f&&A(t)}),[t,S,h,f]);const T=(0,u.useBlockProps)({ref:M});return k?(0,l.createElement)("div",{...T},(0,l.createElement)(c.Placeholder,{style:{height:`${i}px`},label:(0,m.__)("Block for Woosmap Store Locator Widget","store-locator-widget-block"),icon:n},(0,l.createElement)(c.Spinner,null))):S?E?(0,l.createElement)(O,{blockProps:T,BlockIcon:n,initialConfig:t,onValidateConfig:e=>{o(e),v(!1)}}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(u.BlockControls,null,(0,l.createElement)(c.ToolbarGroup,null,(0,l.createElement)(c.ToolbarButton,{icon:"admin-generic",label:(0,m.__)("Show Configuration","store-locator-widget-block"),onClick:()=>v(!E)}))),(0,l.createElement)(L,{...e,isAuthenticated:S,storeLocatorWidget:h}),(0,l.createElement)("div",{...T},(0,l.createElement)(I,{onResizeStart:()=>{x(!1)},onResize:e=>{h.update({height:e},!1)},onResizeStop:e=>{o({height:e}),x(!0)},showHandle:a,size:{height:i}}),(0,l.createElement)(B,{clientId:r,setAttributes:o,isAuthenticated:S,storeLocatorWidget:h,setStoreLocatorWidget:b,apiKey:y}))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(L,{...e,isAuthenticated:S,storeLocatorWidget:h}),(0,l.createElement)("div",{...T},(0,l.createElement)(c.Placeholder,{style:{minHeight:`${i}px`},label:(0,m.__)("Authorize Woosmap Access","store-locator-widget-block"),icon:n,isColumnLayout:!0},(0,l.createElement)("div",{style:{marginBottom:"1em"}},(0,m.__)("To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ","store-locator-widget-block"),(0,l.createElement)("a",{href:"https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",target:"_blank",rel:"noopener noreferrer"},(0,m.__)("Guide to register a Woosmap Public API Key.","store-locator-widget-block"))),(0,l.createElement)(z,{setApiKey:e=>{w(e),o({apiKey:e})}}))))},save:function(e){const{attributes:{height:t,apiKey:o,theme:r,internationalization:a,woosmapView:i,customMarkers:n,filters:s,maps:c,initialSearch:m}}=e,d=u.useBlockProps.save({style:{height:`${t}px`},id:"storeLocatorWidget"});return(0,l.createElement)("div",{...d,"data-api-key":o,"data-theme":JSON.stringify(r),"data-internationalization":JSON.stringify(a),"data-woosmap-view":JSON.stringify(i),"data-custom-markers":JSON.stringify(n),"data-filters":JSON.stringify(s),"data-maps":JSON.stringify(c),"data-initial-search":JSON.stringify(m)})}})}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,a,i)=>{if(!o){var l=1/0;for(m=0;m<e.length;m++){for(var[o,a,i]=e[m],n=!0,s=0;s<o.length;s++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(n=!1,i<l&&(l=i));if(n){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[o,a,i]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[l,n,s]=o,c=0;if(l.some((t=>0!==e[t]))){for(a in n)r.o(n,a)&&(r.m[a]=n[a]);if(s)var m=s(r)}for(t&&t(o);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(m)},o=globalThis.webpackChunkstore_locator_widget_block=globalThis.webpackChunkstore_locator_widget_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,[350],(()=>r(378)));a=r.O(a)})();