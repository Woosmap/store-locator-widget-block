(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var i in o)e.o(o,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var o=e.n(t);const i=window.wp.data,r={primary_color:"#000"},a={max_responses:5,max_distance:5e4},s={lang:"en",unitSystem:0},n={provider:"woosmap",localities:{types:["locality","postal_code","address","admin_level","country"]}},c={initialCenter:{lat:50,lng:0},initialZoom:13,tileStyle:{color:"#000",size:11,minSize:5,typeRules:[]},breakPoint:10,style:{rules:[],default:{icon:{url:"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:"https://images.woosmap.com/marker-default.svg"}}}};function l(e,t){return Object.keys(t).forEach((o=>{Array.isArray(t[o])?e[o]=t[o]:t[o]&&"object"==typeof t[o]?(e[o]||(e[o]={}),l(e[o],t[o])):e[o]=t[o]})),e}function p(e,t={}){try{return l(t,JSON.parse(e))}catch(e){return(0,i.dispatch)("core/notices").createErrorNotice(`Error parsing conf: ${e.message}`,{isDismissible:!0,type:"snackbar"}),t}}class m{constructor(e){this.element=e,this.storeLocatorConfig={},this.element.dataset.apiKey&&function(e,t=null){const o="https://webapp.woosmap.com/webapp.js";if(e.ownerDocument.querySelector(`script[src^="${o}"][data-loading]`))return;const r=e.ownerDocument.querySelectorAll(`script[src^="${o}"], script[src^="https://sdk.woosmap.com/map/map.js"]`);r.length&&(["WebApp","woosmap","__webapp_maps_callback"].forEach((t=>{void 0!==e.ownerDocument.defaultView[t]&&(e.ownerDocument.defaultView[t]=null)})),r.forEach((e=>e.parentNode.removeChild(e))));const a=e.ownerDocument.createElement("script");a.src=o,a.setAttribute("data-loading","true"),a.onload=()=>{a.removeAttribute("data-loading"),t&&"function"==typeof t&&t()},a.onerror=e=>{(0,i.dispatch)("core/notices").createErrorNotice(`Failed to load Woosmap WebApp script: ${e}`,{isDismissible:!0,type:"snackbar"}),a.removeAttribute("data-loading")},e.ownerDocument.head.appendChild(a)}(this.element,(()=>{this.webAppLib=this.element.ownerDocument.defaultView.WebApp,this.init()}))}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const e=function(e){const{filters:t="{}",theme:o="{}",datasource:i="{}",internationalization:l="{}",woosmapView:m="{}",maps:d="{}",initialSearch:u="{}",apiKey:y}=e,h=p(m,c),w=p(o,r),f=p(i,a),b=p(l,s),g=p(t),S=p(u),k={theme:w,datasource:f,internationalization:b,maps:{...p(d,n),apiKey:y},woosmapView:{...h,initialCenter:h.initialCenter,initialZoom:h.initialZoom,tileStyle:{color:h.tileStyle.color,size:Number(h.tileStyle.size),minSize:Number(h.tileStyle.minSize),typeRules:h.tileStyle.typeRules},breakPoint:Number(h.breakPoint),style:{rules:h.style.rules,default:h.style.default}},filters:g,initialSearch:S};return function(e){Object.keys(e).forEach((t=>{var o;(null==(o=e[t])||"object"==typeof o&&0===Object.keys(o).length||"string"==typeof o&&""===o.trim())&&delete e[t]}))}(k),k}(this.element.dataset);this.storeLocatorConfig=function(e){if(!e.maps.apiKey||"string"!=typeof e.maps.apiKey||!e.maps.apiKey.trim())throw new Error("StoreLocator configuration error: apiKey is required and must be a non-empty string.");return e}(e),this.element.innerHTML="";const t=document.createElement("div");t.style="width:100%; height:100%",t.id="store-locator-widget-id",this.element.appendChild(t),this.storeLocatorWidget=new this.webAppLib(t.id,this.storeLocatorConfig.maps.apiKey),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.setConf(this.storeLocatorConfig),this.storeLocatorWidget.render()}}o()((async()=>{const e=document.querySelector(".wp-block-woosmap-store-locator-widget-block");e&&new m(e)}))})();