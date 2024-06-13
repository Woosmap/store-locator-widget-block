(()=>{"use strict";var e,t={840:(e,t,o)=>{var r={};o.r(r),o.d(r,{isAuthenticated:()=>f});var i={};o.r(i),o.d(i,{updateAuthenticationStatus:()=>k});const a=window.wp.blocks,l=window.React,n=function(){return(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 771.444"},(0,l.createElement)("rect",{x:"427.842",width:"166.721",height:"172.249",fill:"#4FC3F7"}),(0,l.createElement)("rect",{x:"338.962",y:"172.249",width:"255.601",height:"166.721",fill:"#5586FF"}),(0,l.createElement)("rect",{x:"172.241",y:"172.249",width:"166.721",height:"255.609",fill:"#3D5AFE"}),(0,l.createElement)("rect",{y:"427.858",width:"338.962",height:"166.721",fill:"#3949AB"}),(0,l.createElement)("rect",{x:"851.743",y:"176.865",width:"172.257",height:"166.721",fill:"#FFAB00"}),(0,l.createElement)("rect",{x:"685.022",y:"176.865",width:"166.721",height:"255.609",fill:"#FF5252"}),(0,l.createElement)("rect",{x:"596.142",y:"432.474",width:"255.601",height:"166.721",fill:"#F50057"}),(0,l.createElement)("rect",{x:"429.421",y:"432.483",width:"166.721",height:"338.961",fill:"#C51162"}))},s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/wp-store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"apiKey":{"type":"string"},"height":{"type":"string","default":"450"},"latitude":{"type":"number","default":51.48762585296625},"longitude":{"type":"number","default":-0.1326724377053381},"zoom":{"type":"number","default":6},"themeColor":{"type":"string","default":"#000"},"tileColor":{"type":"string","default":"#000"},"tileSize":{"type":"number","default":11},"breakPoint":{"type":"number","default":10},"defaultMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"selectedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-selected.svg"},"numberedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"}},"textdomain":"wp-store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","script":"woosmap-webapp-js"}'),c=window.wp.components,d=window.wp.i18n,u=window.wp.blockEditor,m=window.wp.element,p=window.wp.data,h=window.wp.compose;class g{constructor(e){this.element=e,this.storeLocatorConfig={},this.webAppLib=e.ownerDocument.defaultView.WebApp,this.webAppLib&&this.element.dataset.apiKey&&this.init()}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const{latitude:e,longitude:t,zoom:o,themeColor:r,apiKey:i,tileColor:a,tileSize:l,breakPoint:n,defaultMarkerUrl:s,selectedMarkerUrl:c,numberedMarkerUrl:d}=this.element.dataset;this.storeLocatorConfig={theme:{primary_color:r||"#000"},datasource:{max_responses:5,max_distance:5e4},maps:{provider:"woosmap"},woosmapview:{initialCenter:{lat:Number(e)||48.967529,lng:Number(t)||2.368438},initialZoom:Number(o)||5,tileStyle:{color:a||"#000",size:Number(l)||11,minSize:5},breakPoint:Number(n)||10,style:{rules:[],default:{icon:{url:s||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:c||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:d||"https://images.woosmap.com/marker-default.svg"}}}}},this.element.innerHTML="";const u=document.createElement("div");u.style="width:100%; height:100%",u.id="store-locator-widget-id",this.element.appendChild(u),this.storeLocatorWidget&&(this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)),this.storeLocatorWidget=new this.webAppLib(u.id,i),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)}}class b extends g{constructor(e,t,o){super(e),this.isEditor=!0,this.clientId=t,this.setAttributes=o,this.initEdit()}initEdit(){this.addListeners()}remove(){this.storeLocatorWidget&&(this.element.parentNode.removeChild(this.element),this.storeLocatorWidget=null)}addListeners(){this.element.addEventListener("click",(()=>{(0,p.dispatch)("core/block-editor").selectBlock(this.clientId)}))}update(e,t=!0){const{height:o,latitude:r,longitude:i,zoom:a,themeColor:l,apiKey:n,tileColor:s,tileSize:c,breakPoint:d,defaultMarkerUrl:u,selectedMarkerUrl:m,numberedMarkerUrl:p}=e;o&&(this.element.style.height=`${o}px`),r&&(this.element.dataset.latitude=r),i&&(this.element.dataset.longitude=i),a&&(this.element.dataset.zoom=a),l&&(this.element.dataset.themeColor=l),n&&(this.element.dataset.apiKey=n),s&&(this.element.dataset.tileColor=s),c&&(this.element.dataset.tileSize=c),d&&(this.element.dataset.breakPoint=d),u&&(this.element.dataset.defaultMarkerUrl=u),m&&(this.element.dataset.selectedMarkerUrl=m),p&&(this.element.dataset.numberedMarkerUrl=p),t&&this.init()}}const w=(0,p.combineReducers)({authenticationReducer:function(e,t){return"UPDATE_AUTHENTICATION"===t.type?{...e,authenticated:t.isAuthenticated}:e}});function f(e){return Boolean(e?.authenticationReducer?.authenticated)}function k(e){return{type:"UPDATE_AUTHENTICATION",isAuthenticated:e}}const y=(0,p.createReduxStore)("woosmap/wp-store-locator-widget-block",{reducer:w,selectors:r,actions:i});function E(e){const{attributes:{height:t,zoom:o,themeColor:r,latitude:i,longitude:a},setAttributes:n}=e;return(0,l.createElement)(c.PanelBody,{title:(0,d.__)("Display Settings","wp-store-locator-widget-block")},(0,l.createElement)(c.PanelRow,null,(0,l.createElement)("label",{htmlFor:"theme-color-control"},(0,d.__)("Primary Color","wp-store-locator-widget-block")),(0,l.createElement)(c.ColorIndicator,{id:"theme-color-control",colorValue:r})),(0,l.createElement)(c.ColorPalette,{value:r,onChange:e=>n({themeColor:e})}),(0,l.createElement)(c.RangeControl,{label:(0,d.__)("Zoom","wp-store-locator-widget-block"),value:o,onChange:e=>n({zoom:e}),min:0,max:20,step:.5}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Height ( pixels )","wp-store-locator-widget-block"),value:t,type:"number",onChange:e=>n({height:Number(e)}),min:250,step:5}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Default Latitude","wp-store-locator-widget-block"),type:"number",value:i,onChange:e=>n({latitude:Number(e)}),min:-90,max:90}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Default Longitude","wp-store-locator-widget-block"),type:"number",value:a,onChange:e=>n({longitude:Number(e)}),min:-90,max:90}))}function _(e){const{attributes:{tileColor:t,tileSize:o,breakPoint:r,defaultMarkerUrl:i,selectedMarkerUrl:a,numberedMarkerUrl:n},setAttributes:s}=e;return(0,l.createElement)(c.PanelBody,{title:(0,d.__)("Marker Settings","wp-store-locator-widget-block")},(0,l.createElement)(c.PanelRow,null,(0,l.createElement)("label",{htmlFor:"tile-color-control"},(0,d.__)("Tile Color","wp-store-locator-widget-block")),(0,l.createElement)(c.ColorIndicator,{id:"tile-color-control",colorValue:t})),(0,l.createElement)(c.ColorPalette,{value:t,onChange:e=>s({tileColor:e})}),(0,l.createElement)(c.RangeControl,{label:(0,d.__)("Tile Size","wp-store-locator-widget-block"),value:o,onChange:e=>s({tileSize:e}),min:1,max:50,step:1}),(0,l.createElement)(c.RangeControl,{label:(0,d.__)("Break Point","wp-store-locator-widget-block"),value:r,onChange:e=>s({breakPoint:e}),min:1,max:20,step:1}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Default Marker Url","wp-store-locator-widget-block"),value:i,onChange:e=>s({defaultMarkerUrl:e})}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Selected Marker Url","wp-store-locator-widget-block"),value:a,onChange:e=>s({selectedMarkerUrl:e})}),(0,l.createElement)(c.TextControl,{label:(0,d.__)("Numbered Marker Url","wp-store-locator-widget-block"),value:n,onChange:e=>s({numberedMarkerUrl:e})}))}function v(e){const{isAuthenticated:t}=e;return t?(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(E,{...e}),(0,l.createElement)(_,{...e})):(0,l.createElement)(u.InspectorControls,null,(0,l.createElement)(c.PanelBody,null,(0,l.createElement)("p",null,(0,d.__)("You need to confirm your access to Woosmap before you can continue.","wp-store-locator-widget-block"))))}function C({setApiKey:e}){const[t,o]=(0,m.useState)(""),[r,i]=(0,m.useState)(!1),a=(0,p.useSelect)((e=>e("core").getEntityRecord("root","site")),[]);return(0,m.useEffect)((()=>{if(a){const{woosmap_settings:{woosmap_public_api_key:e}}=a;o(e)}}),[a]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.TextControl,{label:(0,d.__)("Please enter your Public API Key","wp-store-locator-widget-block"),readOnly:r,name:"woosmap_public_api_key",value:t,onChange:e=>o(e)}),(0,l.createElement)(c.Button,{isPrimary:!0,disabled:r,isBusy:r,onClick:()=>{i(!0),(0,p.dispatch)("core").saveEntityRecord("root","site",{woosmap_settings:{woosmap_public_api_key:t}}).then((({woosmap_settings:{woosmap_public_api_key:t}})=>{o(t),i(!1),e(t),window.dispatchEvent(new CustomEvent("woosmapSettingsSaved"))})).catch((e=>{(0,p.dispatch)("core/notices").createErrorNotice(e.message,{isDismissible:!0,type:"snackbar"}),i(!1)}))}},(0,d.__)("Confirm Woosmap Credentials","wp-store-locator-widget-block")))}(0,p.register)(y);const S={top:!1,right:!1,bottom:!0,left:!1,topRight:!1,bottomRight:!1,bottomLeft:!1,topLeft:!1};function L({onResizeStart:e,onResize:t,onResizeStop:o,...r}){const[i,a]=(0,m.useState)(!1);return(0,l.createElement)(c.ResizableBox,{style:{position:"absolute",top:0,left:0,right:0,bottom:0},className:"wp-store-locator-widget-block__resize-container "+(i?"is-resizing":""),enable:S,onResizeStart:(o,r,i)=>{e(i.clientHeight),t(i.clientHeight)},onResize:(e,o,r)=>{t(r.clientHeight),i||a(!0)},onResizeStop:(e,t,r)=>{o(r.clientHeight),a(!1)},minHeight:250,...r})}const A=(0,m.memo)((e=>{const{storeLocatorWidget:t,isAuthenticated:o,clientId:r,setAttributes:i,setStoreLocatorWidget:a,webAppLib:n,apiKey:s}=e,c=!!t,d=(0,h.useRefEffect)((e=>{if(n)return o&&!c&&a(new b(e,r,i)),()=>{c&&(t.remove(),a(null))}}),[n,s,o,t,r,i]);return(0,l.createElement)("div",{id:"storeLocatorWidgetEdit",ref:d})}));(0,a.registerBlockType)(s,{attributes:{...s.attributes},icon:n,edit:function(e){const{attributes:t,setAttributes:o,clientId:r,isSelected:i}=e,{height:a,apiKey:s}=t,[g,b]=(0,m.useState)(null),[w,f]=(0,m.useState)(null),[k,E]=(0,m.useState)(s),_=!!g,[S,x]=(0,m.useState)(!0),z=(0,p.useSelect)((e=>e(y).isAuthenticated())),{updateAuthenticationStatus:P}=(0,p.useDispatch)(y),{toggleSelection:M}=(0,p.useDispatch)(u.store),W=(0,h.useDebounce)((e=>{g.update(e)}),500),U=(0,h.useRefEffect)((e=>{const t=!!e.ownerDocument.defaultView.WebApp;if(!t)return void f(null);f(t);const o=()=>{(({status:e})=>{"Initialized"===e&&(x(!1),P(!0))})({status:"Initialized"})};return t&&(x(!1),k&&o()),window.addEventListener("woosmapSettingsSaved",o),()=>{window.removeEventListener("woosmapSettingsSaved",o),f(null)}}));(0,m.useEffect)((()=>{z&&x(!1)}),[z]),(0,m.useEffect)((()=>{z&&_&&W(t)}),[t,z,g]);const R=(0,u.useBlockProps)({ref:U});return S?(0,l.createElement)("div",{...R},(0,l.createElement)(c.Placeholder,{style:{height:`${a}px`},label:(0,d.__)("Block for Woosmap Store Locator Widget","wp-store-locator-widget-block"),icon:n},(0,l.createElement)(c.Spinner,null))):z?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v,{...e,isAuthenticated:z,storeLocatorWidget:g,webAppLib:w}),(0,l.createElement)("div",{...R},(0,l.createElement)(L,{onResizeStart:()=>{M(!1)},onResize:e=>{g.update({height:e},!1)},onResizeStop:e=>{o({height:e}),M(!0)},showHandle:i,size:{height:a}}),(0,l.createElement)(A,{clientId:r,setAttributes:o,isAuthenticated:z,webAppLib:w,storeLocatorWidget:g,setStoreLocatorWidget:b,apiKey:k}))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(v,{...e,isAuthenticated:z,storeLocatorWidget:g,webAppLib:w}),(0,l.createElement)("div",{...R},(0,l.createElement)(c.Placeholder,{style:{minHeight:`${a}px`},label:(0,d.__)("Authorize Woosmap Access","wp-store-locator-widget-block"),icon:n,isColumnLayout:!0},(0,l.createElement)("div",{style:{marginBottom:"1em"}},(0,d.__)("To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ","wp-store-locator-widget-block"),(0,l.createElement)("a",{href:"https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",target:"_blank",rel:"noopener noreferrer"},(0,d.__)("Guide to register a Woosmap Public API Key.","wp-store-locator-widget-block"))),(0,l.createElement)(C,{setApiKey:e=>{E(e),o({apiKey:e})}}))))},save:function(e){const{attributes:{height:t,latitude:o,longitude:r,zoom:i,themeColor:a,apiKey:n,tileColor:s,tileSize:c,breakPoint:d,defaultMarkerUrl:m,selectedMarkerUrl:p,numberedMarkerUrl:h}}=e,g=u.useBlockProps.save({style:{height:`${t}px`},id:"storeLocatorWidget"});return(0,l.createElement)("div",{...g,"data-latitude":o,"data-longitude":r,"data-zoom":i,"data-theme-color":a,"data-api-key":n,"data-tile-color":s,"data-tile-size":c,"data-break-point":d,"data-default-marker-url":m,"data-selected-marker-url":p,"data-numbered-marker-url":h})}})}},o={};function r(e){var i=o[e];if(void 0!==i)return i.exports;var a=o[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,o,i,a)=>{if(!o){var l=1/0;for(d=0;d<e.length;d++){for(var[o,i,a]=e[d],n=!0,s=0;s<o.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(n=!1,a<l&&(l=a));if(n){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,i,a]},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var i,a,[l,n,s]=o,c=0;if(l.some((t=>0!==e[t]))){for(i in n)r.o(n,i)&&(r.m[i]=n[i]);if(s)var d=s(r)}for(t&&t(o);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},o=globalThis.webpackChunkwp_store_locator_widget_block=globalThis.webpackChunkwp_store_locator_widget_block||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var i=r.O(void 0,[350],(()=>r(840)));i=r.O(i)})();