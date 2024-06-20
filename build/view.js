(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var o=e.n(t);window.wp.data;class r{constructor(e){this.element=e,this.storeLocatorConfig={},this.webAppLib=e.ownerDocument.defaultView.WebApp,this.webAppLib&&this.element.dataset.apiKey&&this.init()}init(){this.createStoreLocatorWidget()}createStoreLocatorWidget(){const{latitude:e,longitude:t,zoom:o,themeColor:r,apiKey:i,tileColor:s,tileSize:a,breakPoint:n,defaultMarkerUrl:l,selectedMarkerUrl:c,numberedMarkerUrl:d,language:p,period:m,unitSystem:h,filtersOpenend:u,filtersCustomOrder:g,filters:w,filtersOuterOperator:b}=this.element.dataset;let f={filters:[]};const y=JSON.parse(w);y&&(f=y.map((e=>({propertyType:e.propertyType||"propertyType",title:{en:e.title||"title"},choices:e.choices.map((e=>({key:e.choiceKey||"choiceKey",en:e.choiceTitle||"choiceTitle",selected:e.choiceSelected||!1,hidden:e.choiceHidden||!1})))||[],innerOperator:e.innerOperator||"and"})))),this.storeLocatorConfig={theme:{primary_color:r||"#000"},datasource:{max_responses:5,max_distance:5e4},internationalization:{lang:p||"en",period:m||"fr",unitSystem:Number(h)||0},maps:{provider:"woosmap"},woosmapview:{initialCenter:{lat:Number(e)||48.967529,lng:Number(t)||2.368438},initialZoom:Number(o)||5,tileStyle:{color:s||"#000",size:Number(a)||11,minSize:5},breakPoint:Number(n)||10,style:{rules:[],default:{icon:{url:l||"https://images.woosmap.com/marker-default.svg"},selectedIcon:{url:c||"https://images.woosmap.com/marker-selected.svg"},numberedIcon:{url:d||"https://images.woosmap.com/marker-default.svg"}}}},filters:{opened:u||!1,customOrder:g||!1,filters:f,outerOperator:b||"or"}},this.element.innerHTML="";const L=document.createElement("div");L.style="width:100%; height:100%",L.id="store-locator-widget-id",this.element.appendChild(L),this.storeLocatorWidget&&(this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)),this.storeLocatorWidget=new this.webAppLib(L.id,i),this.storeLocatorWidget.isMobile=!1,this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig)}}o()((async()=>{const e=document.querySelector(".wp-block-woosmap-wp-store-locator-widget-block");e&&new r(e)}))})();