(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var o=e.n(t);window.wp.data;class r{constructor(e){this.element=e,this.storeLocatorConfig={},this.webAppLib=e.ownerDocument.defaultView.WebApp,this.webAppLib&&this.element.dataset.apiKey&&this.init()}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const{latitude:e,longitude:t,zoom:o,themeColor:r,apiKey:i,tileColor:s,tileSize:a,breakPoint:l,defaultMarkerUrl:c,selectedMarkerUrl:n,numberedMarkerUrl:m,language:p,period:d,unitSystem:u,customMarkers:h,filtersOpened:g,filtersCustomOrder:y,filters:w,filtersOuterOperator:f}=this.element.dataset;let b={typeRules:[]},k={rules:[]};const L=JSON.parse(h);L&&(b=L.map((e=>({type:e.storeType||"store_type",color:e.customTyleColor||"#000"}))),k=L.map((e=>({type:e.storeType||"store_type",icon:{url:e.customDefaultMarkerUrl||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:e.customSelectedMarkerUrl||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:e.customNumberedMarkerUrl||"https://images.woosmap.com/marker-default.svg"}}))));let v={filters:[]};const O=JSON.parse(w);O&&(v=O.map((e=>({propertyType:e.propertyType||"propertyType",title:{en:e.title||"title"},choices:e.choices.map((e=>({key:e.choiceKey||"choiceKey",en:e.choiceTitle||"choiceTitle",selected:e.choiceSelected||!1,hidden:e.choiceHidden||!1})))||[],innerOperator:e.innerOperator||"and"})))),this.storeLocatorConfig={theme:{primary_color:r||"#000"},datasource:{max_responses:5,max_distance:5e4},internationalization:{lang:p||"en",period:d||"fr",unitSystem:Number(u)||0},maps:{provider:"woosmap"},woosmapview:{initialCenter:{lat:Number(e)||50,lng:Number(t)||0},initialZoom:Number(o)||5,tileStyle:{color:s||"#000",size:Number(a)||11,minSize:5,typeRules:b},breakPoint:Number(l)||10,style:{rules:k,default:{icon:{url:c||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:n||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:m||"https://images.woosmap.com/marker-default.svg"}}}},filters:{opened:g||!1,customOrder:y||!1,filters:v,outerOperator:f||"or"}},this.element.innerHTML="";const C=document.createElement("div");C.style="width:100%; height:100%",C.id="store-locator-widget-id",this.element.appendChild(C),this.storeLocatorWidget&&(this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)),this.storeLocatorWidget=new this.webAppLib(C.id,i),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)}}o()((async()=>{const e=document.querySelector(".wp-block-woosmap-wp-store-locator-widget-block");e&&new r(e)}))})();