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
/* harmony import */ var _utils_configUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/configUtils */ "./src/utils/configUtils.js");


class StoreLocator {
  constructor(element) {
    this.element = element;
    this.storeLocatorConfig = {};

    // get the webapp object on the current window object to account for iframe editors
    this.webAppLib = element.ownerDocument.defaultView.WebApp;
    if (!this.webAppLib || !this.element.dataset.apiKey) {
      return;
    }
    this.init();
  }
  init() {
    this.createStoreLocatorWidget();
  }
  createStoreLocatorWidget() {
    const config = (0,_utils_configUtils__WEBPACK_IMPORTED_MODULE_1__.parseDataset)(this.element.dataset);
    this.storeLocatorConfig = (0,_utils_configUtils__WEBPACK_IMPORTED_MODULE_1__.validateConfig)(config);
    this.element.innerHTML = '';
    const newElementId = 'store-locator-widget-id';
    const newElement = document.createElement('div');
    newElement.style = 'width:100%; height:100%';
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
    this.storeLocatorWidget = new this.webAppLib(newElement.id, this.storeLocatorConfig.maps.apiKey);
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
    if (!this.storeLocatorWidget) {
      return;
    }
    this.element.parentNode.removeChild(this.element);
    this.storeLocatorWidget = null;
  }
  addListeners() {
    // select the block when the user interacts with the map
    this.element.addEventListener('click', () => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor').selectBlock(this.clientId);
    });
  }
  updateDatasetProperty(key, value) {
    if (typeof value === 'object') {
      this.element.dataset[key] = JSON.stringify(value);
    } else {
      this.element.dataset[key] = value;
    }
  }
  update(options, rerenderLocator = true) {
    Object.entries(options).forEach(([key, value]) => {
      if (key === 'height') {
        this.element.style.height = `${value}px`;
      } else {
        this.updateDatasetProperty(key, value);
      }
    });
    if (rerenderLocator) {
      this.init();
    }
  }
}


/***/ }),

/***/ "./src/utils/configUtils.js":
/*!**********************************!*\
  !*** ./src/utils/configUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseDataset: () => (/* binding */ parseDataset),
/* harmony export */   processInputConfig: () => (/* binding */ processInputConfig),
/* harmony export */   validateConfig: () => (/* binding */ validateConfig)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
// Safe JSON parsing with default value

function safeParse(json, defaultValue = {}) {
  try {
    return JSON.parse(json) || defaultValue;
  } catch (e) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(`Error parsing conf: ${e}`, {
      isDismissible: true,
      type: 'snackbar'
    });
    return defaultValue;
  }
}

// Process custom markers
function processCustomMarkers(customMarkers = []) {
  return customMarkers.map(marker => ({
    type: marker.storeType || 'store_type',
    color: marker.customTyleColor || '#000',
    icon: {
      url: marker.customDefaultMarkerUrl || 'https://images.woosmap.com/marker-default.svg'
    },
    selectedIcon: {
      url: marker.customSelectedMarkerUrl || 'https://images.woosmap.com/marker-selected.svg'
    },
    numberedIcon: {
      url: marker.customNumberedMarkerUrl || 'https://images.woosmap.com/marker-default.svg'
    }
  }));
}

// Process filters
function processFilters(filters = []) {
  return filters.map(filter => ({
    propertyType: filter.propertyType || 'propertyType',
    title: {
      en: filter.title || 'title'
    },
    choices: filter.choices.map(choice => ({
      key: choice.choiceKey || 'choiceKey',
      en: choice.choiceTitle || 'choiceTitle',
      selected: choice.choiceSelected || false,
      hidden: choice.choiceHidden || false
    })) || [],
    innerOperator: filter.innerOperator || 'and'
  }));
}
function parseDataset(dataset) {
  const {
    customMarkers = '[]',
    filters = '[]',
    theme = '{}',
    internationalization = '{}',
    woosmapView = '{}',
    defaultStyle = '{}',
    apiKey,
    tileColor = '#000',
    tileSize = '11',
    breakPoint = '10',
    filtersOpened = 'false',
    filtersCustomOrder = 'false',
    filtersOuterOperator = 'or'
  } = dataset;
  const parsedWoosmapView = safeParse(woosmapView, {
    initialCenter: {
      lat: 50,
      lng: 0
    },
    initialZoom: 13
  });
  return {
    theme: safeParse(theme, {
      primary_color: '#000'
    }),
    datasource: {
      max_responses: 5,
      max_distance: 50000
    },
    internationalization: safeParse(internationalization, {
      lang: 'en',
      period: 'fr',
      unitSystem: 0
    }),
    maps: {
      apiKey,
      provider: 'woosmap'
    },
    woosmapview: {
      initialCenter: parsedWoosmapView.initialCenter,
      initialZoom: parsedWoosmapView.initialZoom,
      tileStyle: {
        color: tileColor,
        size: Number(tileSize),
        minSize: 5,
        typeRules: processCustomMarkers(safeParse(customMarkers))
      },
      breakPoint: Number(breakPoint),
      style: {
        rules: processCustomMarkers(safeParse(customMarkers)),
        default: safeParse(defaultStyle, {
          icon: {
            url: 'https://images.woosmap.com/marker-default.svg'
          },
          selectedIcon: {
            url: 'https://images.woosmap.com/marker-selected.svg'
          },
          numberedIcon: {
            url: 'https://images.woosmap.com/marker-default.svg'
          }
        })
      }
    },
    filters: {
      opened: filtersOpened === 'true',
      customOrder: filtersCustomOrder === 'true',
      filters: processFilters(safeParse(filters)),
      outerOperator: filtersOuterOperator
    }
  };
}
function validateConfig(config) {
  if (!config.maps.apiKey) {
    throw new Error('StoreLocator configuration error: apiKey is required.');
  }
  // Add more validations as necessary
  return config;
}
function processInputConfig(config) {
  const trimmedConfig = config.trim();
  return trimmedConfig.replace(/\\\"/g, '\\\\"') // Escape existing double quotes
  .replace(/([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":') // Ensure property names are quoted
  .replace(/,\s*}/g, '}') // Remove trailing commas in objects
  .replace(/,\s*]/g, ']'); // Remove trailing commas in arrays
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
  const storeLocatorBlock = document.querySelector('.wp-block-woosmap-store-locator-widget-block');
  if (!storeLocatorBlock) {
    return;
  }
  new _components_StoreLocator__WEBPACK_IMPORTED_MODULE_1__.StoreLocator(storeLocatorBlock);
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map