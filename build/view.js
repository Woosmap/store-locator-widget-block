/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/StoreLocator.js":
/*!****************************************!*\
  !*** ./src/components/StoreLocator.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreLocator: () => (/* binding */ StoreLocator),
/* harmony export */   StoreLocatorEdit: () => (/* binding */ StoreLocatorEdit)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

class StoreLocator {
  constructor(element) {
    this.element = element;
    this.storeLocatorConfig = {};

    // get the webapp object on the current window object to account for iframe editors
    this.webAppLib = element.ownerDocument.defaultView.WebApp;
    if (!this.webAppLib || !this.element.dataset.apiKey) return;
    this.init();
  }
  init() {
    this.createStoreLocatorWidget();
  }
  createStoreLocatorWidget() {
    const {
      latitude,
      longitude,
      zoom,
      themeColor,
      apiKey,
      tileColor,
      tileSize,
      breakPoint,
      defaultMarkerUrl,
      selectedMarkerUrl,
      numberedMarkerUrl
    } = this.element.dataset;
    this.storeLocatorConfig = {
      theme: {
        primary_color: themeColor || "#000"
      },
      datasource: {
        max_responses: 5,
        max_distance: 50000
      },
      maps: {
        provider: "woosmap"
      },
      woosmapview: {
        initialCenter: {
          lat: Number(latitude) || 48.967529,
          lng: Number(longitude) || 2.368438
        },
        initialZoom: Number(zoom) || 5,
        tileStyle: {
          color: tileColor || "#000",
          size: Number(tileSize) || 11,
          minSize: 5
        },
        breakPoint: Number(breakPoint) || 10,
        style: {
          rules: [],
          default: {
            icon: {
              url: defaultMarkerUrl || "https://images.woosmap.com/marker-default.svg"
            },
            selectedIcon: {
              url: selectedMarkerUrl || "https://images.woosmap.com/marker-selected.svg"
            },
            numberedIcon: {
              url: numberedMarkerUrl || "https://images.woosmap.com/marker-default.svg"
            }
          }
        }
      }
    };
    this.element.innerHTML = '';
    const newElementId = 'store-locator-widget-id';
    const newElement = document.createElement('div');
    newElement.style = "width:100%; height:100%";
    newElement.id = newElementId;
    this.element.appendChild(newElement);

    // Create a new WebApp instance
    // TODO fix internally or find why it's not working here.
    // normally we should render the widget using this.storeLocatorWidget.render(isMobile);
    // but it causes the following error on host localhost
    // DOMException: Failed to execute 'open' on 'XMLHttpRequest': Invalid URL
    // the render() method try to load a protocol-relative url
    //     var req = new XMLHttpRequest();
    //     req.open('GET', '//webapp-woosmap.woosmap.com/webapp-conf.json', true);
    // fallback to this
    if (this.storeLocatorWidget) {
      this.storeLocatorWidget.isMobile = false;
      this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig);
    }
    this.storeLocatorWidget = new this.webAppLib(newElement.id, apiKey);
    this.storeLocatorWidget.isMobile = false;
    this.storeLocatorWidget.confHandler.setInitConf(this.storeLocatorConfig);
  }
}
class StoreLocatorEdit extends StoreLocator {
  /**
   * Constructor of the StoreLocatorEdit Class
   *
   * @param {HTMLElement} element       Element to initialize the map on
   * @param {string}      clientId      ClientId of the Block
   * @param {Function}    setAttributes to update attributes of the block
   */
  constructor(element, clientId, setAttributes) {
    super(element);
    this.isEditor = true;
    this.clientId = clientId;
    this.setAttributes = setAttributes;
    this.initEdit();
  }

  /**
   * Initialize Edit version of StoreLocator
   */
  initEdit() {
    this.addListeners();
  }

  /**
   * Remove the widget's element from the DOM and release internal ref
   */
  remove() {
    if (!this.storeLocatorWidget) return;
    this.element.parentNode.removeChild(this.element);
    this.storeLocatorWidget = null;
  }

  /**
   * Attach different listeners to handle interactions
   * with the map and modify block settings accordingly
   * @see https://developers.woosmap.com/products/widgets/store-locator-widget/advanced-usages/#events
   */
  addListeners() {
    // select the block when the user interacts with the map
    this.element.addEventListener('click', () => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor').selectBlock(this.clientId);
    });
  }

  /**
   * Update options of the map
   *
   * @param {Object} options Settings to update
   * @param rerenderLocator
   */
  update(options, rerenderLocator = true) {
    const {
      height,
      latitude,
      longitude,
      zoom,
      themeColor,
      apiKey,
      tileColor,
      tileSize,
      breakPoint,
      defaultMarkerUrl,
      selectedMarkerUrl,
      numberedMarkerUrl
    } = options;
    if (height) {
      this.element.style.height = `${height}px`;
    }
    if (latitude) {
      this.element.dataset.latitude = latitude;
    }
    if (longitude) {
      this.element.dataset.longitude = longitude;
    }
    if (zoom) {
      this.element.dataset.zoom = zoom;
    }
    if (themeColor) {
      this.element.dataset.themeColor = themeColor;
    }
    if (apiKey) {
      this.element.dataset.apiKey = apiKey;
    }
    if (tileColor) {
      this.element.dataset.tileColor = tileColor;
    }
    if (tileSize) {
      this.element.dataset.tileSize = tileSize;
    }
    if (breakPoint) {
      this.element.dataset.breakPoint = breakPoint;
    }
    if (defaultMarkerUrl) {
      this.element.dataset.defaultMarkerUrl = defaultMarkerUrl;
    }
    if (selectedMarkerUrl) {
      this.element.dataset.selectedMarkerUrl = selectedMarkerUrl;
    }
    if (numberedMarkerUrl) {
      this.element.dataset.numberedMarkerUrl = numberedMarkerUrl;
    }

    // Only call init if options other than height are passed
    if (rerenderLocator) {
      this.init();
    }
  }
}


/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["domReady"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StoreLocator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StoreLocator */ "./src/components/StoreLocator.js");


_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(async () => {
  const storeLocatorBlock = document.querySelector('.wp-block-woosmap-wp-store-locator-widget-block');
  if (!storeLocatorBlock) {
    return;
  }
  new _components_StoreLocator__WEBPACK_IMPORTED_MODULE_1__.StoreLocator(storeLocatorBlock);
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map