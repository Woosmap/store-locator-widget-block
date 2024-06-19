(()=>{"use strict";var e,t={730:(e,t,o)=>{var r={};o.r(r),o.d(r,{isAuthenticated:()=>k});var a={};o.r(a),o.d(a,{updateAuthenticationStatus:()=>y});const l=window.wp.blocks,i=window.React,s=function(){return(0,i.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 771.444"},(0,i.createElement)("rect",{x:"427.842",width:"166.721",height:"172.249",fill:"#4FC3F7"}),(0,i.createElement)("rect",{x:"338.962",y:"172.249",width:"255.601",height:"166.721",fill:"#5586FF"}),(0,i.createElement)("rect",{x:"172.241",y:"172.249",width:"166.721",height:"255.609",fill:"#3D5AFE"}),(0,i.createElement)("rect",{y:"427.858",width:"338.962",height:"166.721",fill:"#3949AB"}),(0,i.createElement)("rect",{x:"851.743",y:"176.865",width:"172.257",height:"166.721",fill:"#FFAB00"}),(0,i.createElement)("rect",{x:"685.022",y:"176.865",width:"166.721",height:"255.609",fill:"#FF5252"}),(0,i.createElement)("rect",{x:"596.142",y:"432.474",width:"255.601",height:"166.721",fill:"#F50057"}),(0,i.createElement)("rect",{x:"429.421",y:"432.483",width:"166.721",height:"338.961",fill:"#C51162"}))},n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/wp-store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"apiKey":{"type":"string"},"height":{"type":"string","default":"450"},"latitude":{"type":"number","default":51.48762585296625},"longitude":{"type":"number","default":-0.1326724377053381},"zoom":{"type":"number","default":6},"themeColor":{"type":"string","default":"#000"},"tileColor":{"type":"string","default":"#000"},"tileSize":{"type":"number","default":11},"breakPoint":{"type":"number","default":10},"defaultMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"selectedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-selected.svg"},"numberedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"language":{"type":"string","default":"en"},"period":{"type":"string","default":"fr"},"unitSystem":{"type":"number","default":"0"},"customMarkers":{"type":"array","default":[],"items":{"type":"object","properties":{"storeType":{"type":"string"},"customTyleColor":{"type":"string"},"customDefaultMarkerUrl":{"type":"string"},"customSelectedMarkerUrl":{"type":"string"},"customNumberedMarkerUrl":{"type":"string"}}}}},"textdomain":"wp-store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","script":"woosmap-webapp-js"}'),c=window.wp.components,d=window.wp.i18n,m=window.wp.blockEditor,u=window.wp.element,p=window.wp.data,g=window.wp.compose;class h{constructor(e){this.element=e,this.storeLocatorConfig={},this.webAppLib=e.ownerDocument.defaultView.WebApp,this.webAppLib&&this.element.dataset.apiKey&&this.init()}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const{latitude:e,longitude:t,zoom:o,themeColor:r,apiKey:a,tileColor:l,tileSize:i,breakPoint:s,defaultMarkerUrl:n,selectedMarkerUrl:c,numberedMarkerUrl:d,language:m,period:u,unitSystem:p,customMarkers:g}=this.element.dataset;let h={typeRules:[]},w={rules:[]};const b=JSON.parse(g);b&&(h=b.map((e=>({type:e.storeType||"store_type",color:e.customTyleColor||"#000"}))),w=b.map((e=>({type:e.storeType||"store_type",icon:{url:e.customDefaultMarkerUrl||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:e.customSelectedMarkerUrl||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:e.customNumberedMarkerUrl||"https://images.woosmap.com/marker-default.svg"}})))),this.storeLocatorConfig={theme:{primary_color:r||"#000"},datasource:{max_responses:5,max_distance:5e4},internationalization:{lang:m||"en",period:u||"fr",unitSystem:Number(p)||0},maps:{provider:"woosmap"},woosmapview:{initialCenter:{lat:Number(e)||48.967529,lng:Number(t)||2.368438},initialZoom:Number(o)||5,tileStyle:{color:l||"#000",size:Number(i)||11,minSize:5,typeRules:h},breakPoint:Number(s)||10,style:{rules:w,default:{icon:{url:n||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:c||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:d||"https://images.woosmap.com/marker-default.svg"}}}}},this.element.innerHTML="";const k=document.createElement("div");k.style="width:100%; height:100%",k.id="store-locator-widget-id",this.element.appendChild(k),this.storeLocatorWidget&&(this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)),this.storeLocatorWidget=new this.webAppLib(k.id,a),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)}}class w extends h{constructor(e,t,o){super(e),this.isEditor=!0,this.clientId=t,this.setAttributes=o,this.initEdit()}initEdit(){this.addListeners()}remove(){this.storeLocatorWidget&&(this.element.parentNode.removeChild(this.element),this.storeLocatorWidget=null)}addListeners(){this.element.addEventListener("click",(()=>{(0,p.dispatch)("core/block-editor").selectBlock(this.clientId)}))}update(e,t=!0){const{height:o,latitude:r,longitude:a,zoom:l,themeColor:i,apiKey:s,tileColor:n,tileSize:c,breakPoint:d,defaultMarkerUrl:m,selectedMarkerUrl:u,numberedMarkerUrl:p,language:g,period:h,unitSystem:w,customMarkers:b}=e;o&&(this.element.style.height=`${o}px`),r&&(this.element.dataset.latitude=r),a&&(this.element.dataset.longitude=a),l&&(this.element.dataset.zoom=l),i&&(this.element.dataset.themeColor=i),s&&(this.element.dataset.apiKey=s),n&&(this.element.dataset.tileColor=n),c&&(this.element.dataset.tileSize=c),d&&(this.element.dataset.breakPoint=d),m&&(this.element.dataset.defaultMarkerUrl=m),u&&(this.element.dataset.selectedMarkerUrl=u),p&&(this.element.dataset.numberedMarkerUrl=p),g&&(this.element.dataset.language=g),h&&(this.element.dataset.period=h),w&&(this.element.dataset.unitSystem=w),b&&(this.element.dataset.customMarkers=JSON.stringify(b)),t&&this.init()}}const b=(0,p.combineReducers)({authenticationReducer:function(e,t){return"UPDATE_AUTHENTICATION"===t.type?{...e,authenticated:t.isAuthenticated}:e}});function k(e){return Boolean(e?.authenticationReducer?.authenticated)}function y(e){return{type:"UPDATE_AUTHENTICATION",isAuthenticated:e}}const _=(0,p.createReduxStore)("woosmap/wp-store-locator-widget-block",{reducer:b,selectors:r,actions:a});function f(e){const{attributes:{height:t,zoom:o,themeColor:r},setAttributes:a}=e;return(0,i.createElement)(c.PanelBody,{title:(0,d.__)("Display Settings","wp-store-locator-widget-block")},(0,i.createElement)(c.PanelRow,null,(0,i.createElement)("label",{htmlFor:"theme-color-control"},(0,d.__)("Primary Color","wp-store-locator-widget-block")),(0,i.createElement)(c.ColorIndicator,{id:"theme-color-control",colorValue:r})),(0,i.createElement)(c.ColorPalette,{value:r,onChange:e=>a({themeColor:e})}),(0,i.createElement)(c.RangeControl,{label:(0,d.__)("Zoom","wp-store-locator-widget-block"),value:o,onChange:e=>a({zoom:e}),min:0,max:20,step:.5}),(0,i.createElement)(c.TextControl,{label:(0,d.__)("Height ( pixels )","wp-store-locator-widget-block"),value:t,onChange:e=>a({height:e})}))}function E(e){const{attributes:{tileColor:t,tileSize:o,breakPoint:r,defaultMarkerUrl:a,selectedMarkerUrl:l,numberedMarkerUrl:s},setAttributes:n}=e;return(0,i.createElement)(c.PanelBody,{title:(0,d.__)("Marker Settings","wp-store-locator-widget-block"),initialOpen:!1},(0,i.createElement)(c.PanelRow,null,(0,i.createElement)("label",{htmlFor:"tile-color-control"},(0,d.__)("Tile Color","wp-store-locator-widget-block")),(0,i.createElement)(c.ColorIndicator,{id:"tile-color-control",colorValue:t})),(0,i.createElement)(c.ColorPalette,{value:t,onChange:e=>n({tileColor:e})}),(0,i.createElement)(c.RangeControl,{label:(0,d.__)("Tile Size","wp-store-locator-widget-block"),value:o,onChange:e=>n({tileSize:e}),min:1,max:50,step:1}),(0,i.createElement)(c.RangeControl,{label:(0,d.__)("Break Point","wp-store-locator-widget-block"),value:r,onChange:e=>n({breakPoint:e}),min:1,max:20,step:1}),(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Default Marker Url","wp-store-locator-widget-block"),value:a,onChange:e=>n({defaultMarkerUrl:e})}),a&&(0,i.createElement)("img",{src:a,alt:"Default Marker Url",style:{maxWidth:"100%",height:"auto"}})),(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Selected Marker Url","wp-store-locator-widget-block"),value:l,onChange:e=>n({selectedMarkerUrl:e})}),l&&(0,i.createElement)("img",{src:l,alt:"Selected Marker Url",style:{maxWidth:"100%",height:"auto"}})),(0,i.createElement)("div",{style:{padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Numbered Marker Url","wp-store-locator-widget-block"),value:s,onChange:e=>n({numberedMarkerUrl:e})}),s&&(0,i.createElement)("img",{src:s,alt:"Numbered Marker Url",style:{maxWidth:"100%",height:"auto"}})))}function v(e){const{index:t,marker:o,storeType:r,customTyleColor:a,customDefaultMarkerUrl:l,customSelectedMarkerUrl:s,customNumberedMarkerUrl:n,customMarkers:m,setAttributes:u}=e,p=e=>{const o=m.map(((o,r)=>r===t?e:o));u({customMarkers:o})};return(0,i.createElement)(c.PanelBody,{title:(0,d.__)("Edit: ","wp-store-locator-widget-block")+r,initialOpen:!1},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Store Type","wp-store-locator-widget-block"),value:r,onChange:e=>{(e=>e.trim()?/\s/.test(e)?(alert((0,d.__)("Store Type should not contain spaces. Please replace them with underscores.","wp-store-locator-widget-block")),!1):!/[^a-zA-Z0-9_]/g.test(e)||(alert((0,d.__)("Store Type should not contain special characters.","wp-store-locator-widget-block")),!1):(alert((0,d.__)("Store Type cannot be empty.","wp-store-locator-widget-block")),!1))(e)&&p({...o,storeType:e})}}),(0,i.createElement)(c.PanelRow,null,(0,i.createElement)("label",{htmlFor:"custom-tile-color-control"},(0,d.__)("Custom Tile Color","wp-store-locator-widget-block")),(0,i.createElement)(c.ColorIndicator,{id:"custom-tile-color-control",colorValue:a})),(0,i.createElement)(c.ColorPalette,{value:a,onChange:e=>p({...o,customTyleColor:e})}),(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Custom Default Marker Url","wp-store-locator-widget-block"),value:l,onChange:e=>p({...o,customDefaultMarkerUrl:e})}),l&&(0,i.createElement)("img",{src:l,alt:"Custom Default Marker",style:{maxWidth:"100%",height:"auto"}})),(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Custom Selected Marker Url","wp-store-locator-widget-block"),value:s,onChange:e=>p({...o,customSelectedMarkerUrl:e})}),s&&(0,i.createElement)("img",{src:s,alt:"Custom Selected Marker",style:{maxWidth:"100%",height:"auto"}})),(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Custom Numbered Marker Url","wp-store-locator-widget-block"),value:n,onChange:e=>p({...o,customNumberedMarkerUrl:e})}),n&&(0,i.createElement)("img",{src:n,alt:"Custom Numbered Marker",style:{maxWidth:"100%",height:"auto"}})),(0,i.createElement)(c.Button,{variant:"primary",onClick:()=>{const e=m.filter(((e,o)=>o!==t));u({customMarkers:e})}},(0,d.__)("Delete Custom Marker","wp-store-locator-widget-block")))}function C(e){const{attributes:{customMarkers:t},setAttributes:o}=e,[r,a]=(0,u.useState)("");return(0,i.createElement)(c.PanelBody,{title:(0,d.__)("Custom Marker Settings","wp-store-locator-widget-block"),initialOpen:!1},(0,i.createElement)("div",{style:{marginBottom:20,padding:10,border:"1px solid lightgray",borderRadius:5}},(0,i.createElement)(c.TextControl,{label:(0,d.__)("Store Type","wp-store-locator-widget-block"),value:r,onChange:e=>a(e)}),(0,i.createElement)(c.Button,{variant:"primary",onClick:()=>{if(!r.trim())return void alert("Please enter a valid store type.");if(/\s/.test(r)||/[^\w-]/.test(r))return void alert("Invalid store type. Please use only letters, numbers, dashes (-), or underscores (_). Spaces and special characters are not allowed.");if(t.find((e=>e.storeType===r)))return void alert("This store type already exists. Please choose a different one.");const e={storeType:r,customTyleColor:"#000",customDefaultMarkerUrl:"https://images.woosmap.com/marker-default.svg",customSelectedMarkerUrl:"https://images.woosmap.com/marker-selected.svg",customNumberedMarkerUrl:"https://images.woosmap.com/marker-default.svg"},l=[...t,e];o({customMarkers:l}),a("")}},(0,d.__)("Add Custom Marker","wp-store-locator-widget-block"))),t.map(((e,r)=>(0,i.createElement)(v,{key:r,index:r,marker:e,storeType:e.storeType,customTyleColor:e.customTyleColor,customDefaultMarkerUrl:e.customDefaultMarkerUrl,customSelectedMarkerUrl:e.customSelectedMarkerUrl,customNumberedMarkerUrl:e.customNumberedMarkerUrl,customMarkers:t,setAttributes:o}))))}function S(e){const{attributes:{language:t,period:o,unitSystem:r},setAttributes:a}=e;return(0,i.createElement)(c.PanelBody,{title:(0,d.__)("Internationalization Settings","wp-store-locator-widget-block"),initialOpen:!1},(0,i.createElement)(c.SelectControl,{label:(0,d.__)("Language","wp-store-locator-widget-block"),value:t,onChange:e=>a({language:e})},(0,i.createElement)("option",{value:"pt-br"},(0,d.__)("Brazilian Portuguese","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"ca"},(0,d.__)("Catalan","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"zh"},(0,d.__)("Chinese","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"zh-HK"},(0,d.__)("Chinese (Hong Kong)","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"hr"},(0,d.__)("Croatian","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"de"},(0,d.__)("Deutsch","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"nl"},(0,d.__)("Dutch","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"en"},(0,d.__)("English","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"fr"},(0,d.__)("French","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"el"},(0,d.__)("Greek","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"he"},(0,d.__)("Hebrew","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"it"},(0,d.__)("Italian","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"ja"},(0,d.__)("Japanese","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"pl"},(0,d.__)("Polish","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"pt"},(0,d.__)("Portuguese","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"ro"},(0,d.__)("Romanian","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"ru"},(0,d.__)("Russian","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"es"},(0,d.__)("Spanish","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"sv"},(0,d.__)("Swedish","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"uk"},(0,d.__)("Ukrainian","wp-store-locator-widget-block"))),(0,i.createElement)(c.SelectControl,{label:(0,d.__)("Period","wp-store-locator-widget-block"),value:o,onChange:e=>a({period:e})},(0,i.createElement)("option",{value:"fr"},(0,d.__)("24h","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"en-US"},(0,d.__)("12h","wp-store-locator-widget-block"))),(0,i.createElement)(c.SelectControl,{label:(0,d.__)("Unit System","wp-store-locator-widget-block"),value:r,onChange:e=>a({unitSystem:e})},(0,i.createElement)("option",{value:"0"},(0,d.__)("Metric","wp-store-locator-widget-block")),(0,i.createElement)("option",{value:"1"},(0,d.__)("Imperial","wp-store-locator-widget-block"))))}function M(e){const{isAuthenticated:t}=e;return t?(0,i.createElement)(m.InspectorControls,null,(0,i.createElement)(f,{...e}),(0,i.createElement)(S,{...e}),(0,i.createElement)(E,{...e}),(0,i.createElement)(C,{...e})):(0,i.createElement)(m.InspectorControls,null,(0,i.createElement)(c.PanelBody,null,(0,i.createElement)("p",null,(0,d.__)("You need to confirm your access to Woosmap before you can continue.","wp-store-locator-widget-block"))))}function U({setApiKey:e}){const[t,o]=(0,u.useState)(""),[r,a]=(0,u.useState)(!1),l=(0,p.useSelect)((e=>e("core").getEntityRecord("root","site")),[]);return(0,u.useEffect)((()=>{if(l){const{woosmap_settings:{woosmap_public_api_key:e}}=l;o(e)}}),[l]),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(c.TextControl,{label:(0,d.__)("Please enter your Public API Key","wp-store-locator-widget-block"),readOnly:r,name:"woosmap_public_api_key",value:t,onChange:e=>o(e)}),(0,i.createElement)(c.Button,{isPrimary:!0,disabled:r,isBusy:r,onClick:()=>{a(!0),(0,p.dispatch)("core").saveEntityRecord("root","site",{woosmap_settings:{woosmap_public_api_key:t}}).then((({woosmap_settings:{woosmap_public_api_key:t}})=>{o(t),a(!1),e(t),window.dispatchEvent(new CustomEvent("woosmapSettingsSaved"))})).catch((e=>{(0,p.dispatch)("core/notices").createErrorNotice(e.message,{isDismissible:!0,type:"snackbar"}),a(!1)}))}},(0,d.__)("Confirm Woosmap Credentials","wp-store-locator-widget-block")))}(0,p.register)(_);const x={top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function T({onResizeStart:e,onResize:t,onResizeStop:o,...r}){const[a,l]=(0,u.useState)(!1);return(0,i.createElement)(c.ResizableBox,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},className:"wp-store-locator-widget-block__resize-container "+(a?"is-resizing":""),enable:x,onResizeStart:(o,r,a)=>{e(a.clientHeight),t(a.clientHeight)},onResize:(e,o,r)=>{t(r.clientHeight),a||l(!0)},onResizeStop:(e,t,r)=>{o(r.clientHeight),l(!1)},minHeight:250,...r})}const A=(0,u.memo)((e=>{const{storeLocatorWidget:t,isAuthenticated:o,clientId:r,setAttributes:a,setStoreLocatorWidget:l,webAppLib:s,apiKey:n}=e,c=!!t,d=(0,g.useRefEffect)((e=>{if(s)return o&&!c&&l(new w(e,r,a)),()=>{c&&(t.remove(),l(null))}}),[s,n,o,t,r,a]);return(0,i.createElement)("div",{id:"storeLocatorWidgetEdit",ref:d})}));(0,l.registerBlockType)(n,{attributes:{...n.attributes},icon:s,edit:function(e){const{attributes:t,setAttributes:o,clientId:r,isSelected:a}=e,{height:l,apiKey:n}=t,[h,w]=(0,u.useState)(null),[b,k]=(0,u.useState)(null),[y,f]=(0,u.useState)(n),E=!!h,[v,C]=(0,u.useState)(!0),S=(0,p.useSelect)((e=>e(_).isAuthenticated())),{updateAuthenticationStatus:x}=(0,p.useDispatch)(_),{toggleSelection:P}=(0,p.useDispatch)(m.store),L=(0,g.useDebounce)((e=>{h.update(e)}),500),z=(0,g.useRefEffect)((e=>{const t=!!e.ownerDocument.defaultView.WebApp;if(!t)return void k(null);k(t);const o=()=>{(({status:e})=>{"Initialized"===e&&(C(!1),x(!0))})({status:"Initialized"})};return t&&(C(!1),y&&o()),window.addEventListener("woosmapSettingsSaved",o),()=>{window.removeEventListener("woosmapSettingsSaved",o),k(null)}}));(0,u.useEffect)((()=>{S&&C(!1)}),[S]),(0,u.useEffect)((()=>{S&&E&&L(t)}),[t,S,h]);const R=(0,m.useBlockProps)({ref:z});return v?(0,i.createElement)("div",{...R},(0,i.createElement)(c.Placeholder,{style:{height:`${l}px`},label:(0,d.__)("Block for Woosmap Store Locator Widget","wp-store-locator-widget-block"),icon:s},(0,i.createElement)(c.Spinner,null))):S?(0,i.createElement)(i.Fragment,null,(0,i.createElement)(M,{...e,isAuthenticated:S,storeLocatorWidget:h,webAppLib:b}),(0,i.createElement)("div",{...R},(0,i.createElement)(T,{onResizeStart:()=>{P(!1)},onResize:e=>{h.update({height:e},!1)},onResizeStop:e=>{o({height:e}),P(!0)},showHandle:a,size:{height:l}}),(0,i.createElement)(A,{clientId:r,setAttributes:o,isAuthenticated:S,webAppLib:b,storeLocatorWidget:h,setStoreLocatorWidget:w,apiKey:y}))):(0,i.createElement)(i.Fragment,null,(0,i.createElement)(M,{...e,isAuthenticated:S,storeLocatorWidget:h,webAppLib:b}),(0,i.createElement)("div",{...R},(0,i.createElement)(c.Placeholder,{style:{minHeight:`${l}px`},label:(0,d.__)("Authorize Woosmap Access","wp-store-locator-widget-block"),icon:s,isColumnLayout:!0},(0,i.createElement)("div",{style:{marginBottom:"1em"}},(0,d.__)("To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ","wp-store-locator-widget-block"),(0,i.createElement)("a",{href:"https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",target:"_blank",rel:"noopener noreferrer"},(0,d.__)("Guide to register a Woosmap Public API Key.","wp-store-locator-widget-block"))),(0,i.createElement)(U,{setApiKey:e=>{f(e),o({apiKey:e})}}))))},save:function(e){const{attributes:{height:t,latitude:o,longitude:r,zoom:a,themeColor:l,apiKey:s,tileColor:n,tileSize:c,breakPoint:d,defaultMarkerUrl:u,selectedMarkerUrl:p,numberedMarkerUrl:g,language:h,period:w,unitSystem:b,customMarkers:k}}=e,y=m.useBlockProps.save({style:{height:`${t}px`},id:"storeLocatorWidget"});return(0,i.createElement)("div",{...y,"data-latitude":o,"data-longitude":r,"data-zoom":a,"data-theme-color":l,"data-api-key":s,"data-tile-color":n,"data-tile-size":c,"data-break-point":d,"data-default-marker-url":u,"data-selected-marker-url":p,"data-numbered-marker-url":g,"data-language":h,"data-period":w,"data-unit-system":b,"data-custom-markers":JSON.stringify(k)})}})}},o={};function r(e){var a=o[e];if(void 0!==a)return a.exports;var l=o[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,o,a,l)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,a,l]=e[d],s=!0,n=0;n<o.length;n++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](o[n])))?o.splice(n--,1):(s=!1,l<i&&(i=l));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[o,a,l]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,l,[i,s,n]=o,c=0;if(i.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(n)var d=n(r)}for(t&&t(o);c<i.length;c++)l=i[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},o=globalThis.webpackChunkwp_store_locator_widget_block=globalThis.webpackChunkwp_store_locator_widget_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var a=r.O(void 0,[350],(()=>r(730)));a=r.O(a)})();