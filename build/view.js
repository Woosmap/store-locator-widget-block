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
/* harmony import */ var _utils_scriptUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/scriptUtils */ "./src/utils/scriptUtils.js");



class StoreLocator {
  constructor(element) {
    this.element = element;
    this.storeLocatorConfig = {};
    if (!this.element.dataset.apiKey) {
      return;
    }
    (0,_utils_scriptUtils__WEBPACK_IMPORTED_MODULE_2__.loadOrReplaceScript)(this.element, () => {
      this.webAppLib = this.element.ownerDocument.defaultView.WebApp;
      this.init();
    });
  }
  init() {
    this.createStoreLocatorWidget();
  }
  createStoreLocatorWidget() {
    const config = (0,_utils_configUtils__WEBPACK_IMPORTED_MODULE_1__.parseDataset)(this.element.dataset);
    this.storeLocatorConfig = (0,_utils_configUtils__WEBPACK_IMPORTED_MODULE_1__.validateConfig)(config);
    console.log(this.storeLocatorConfig);
    this.element.innerHTML = '';
    const newElementId = 'store-locator-widget-id';
    const newElement = document.createElement('div');
    newElement.style = 'width:100%; height:100%';
    newElement.id = newElementId;
    this.element.appendChild(newElement);
    this.storeLocatorWidget = new this.webAppLib(newElement.id, this.storeLocatorConfig.maps.apiKey);
    this.storeLocatorWidget.isMobile = false;
    this.storeLocatorWidget.setConf(this.storeLocatorConfig);
    this.storeLocatorWidget.render();
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
      (0,_utils_scriptUtils__WEBPACK_IMPORTED_MODULE_2__.loadOrReplaceScript)(this.element, () => {
        this.webAppLib = this.element.ownerDocument.defaultView.WebApp;
        this.init();
      });
    }
  }
}


/***/ }),

/***/ "./src/utils/configDefaults.js":
/*!*************************************!*\
  !*** ./src/utils/configDefaults.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultConfig: () => (/* binding */ defaultConfig)
/* harmony export */ });
const defaultConfig = {
  theme: {
    primary_color: '#000'
  },
  datasource: {
    max_responses: 5,
    max_distance: 50000
  },
  internationalization: {
    lang: 'en',
    unitSystem: 0
  },
  maps: {
    provider: 'woosmap',
    localities: {
      types: ['locality', 'postal_code', 'address', 'admin_level', 'country']
    }
  },
  woosmapView: {
    initialCenter: {
      lat: 50,
      lng: 0
    },
    initialZoom: 13,
    tileStyle: {
      color: '#000',
      size: 11,
      minSize: 5,
      typeRules: []
    },
    breakPoint: 10,
    style: {
      rules: [],
      default: {
        icon: {
          url: 'https://images.woosmap.com/marker-default.svg'
        },
        selectedIcon: {
          url: 'https://images.woosmap.com/marker-selected.svg'
        },
        numberedIcon: {
          url: 'https://images.woosmap.com/marker-default.svg'
        }
      }
    }
  }
};

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
/* harmony import */ var _configDefaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configDefaults */ "./src/utils/configDefaults.js");
// Safe JSON parsing with default value


function deepMerge(target, source) {
  Object.keys(source).forEach(key => {
    if (Array.isArray(source[key])) {
      target[key] = source[key];
    } else if (source[key] && typeof source[key] === 'object') {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}
function safeParse(json, defaultValue = {}) {
  try {
    const parsed = JSON.parse(json);
    return deepMerge(defaultValue, parsed); // Use deepMerge to combine defaults and parsed values
  } catch (e) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(`Error parsing conf: ${e.message}`, {
      isDismissible: true,
      type: 'snackbar'
    });
    return defaultValue;
  }
}

// Utility function to check for empty values
function isEmptyValue(value) {
  return value === null || value === undefined || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim() === '';
}
function parseDataset(dataset) {
  const {
    filters = '{}',
    theme = '{}',
    datasource = '{}',
    internationalization = '{}',
    woosmapView = '{}',
    maps = '{}',
    initialSearch = '{}',
    apiKey
  } = dataset;
  const parsedWoosmapView = safeParse(woosmapView, _configDefaults__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.woosmapView);
  const parsedTheme = safeParse(theme, _configDefaults__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.theme);
  const parsedDataSource = safeParse(datasource, _configDefaults__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.datasource);
  const parsedInternationalization = safeParse(internationalization, _configDefaults__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.internationalization);
  const parsedFilters = safeParse(filters);
  const parsedInitialSearch = safeParse(initialSearch);
  const config = {
    theme: parsedTheme,
    datasource: parsedDataSource,
    internationalization: parsedInternationalization,
    maps: {
      ...safeParse(maps, _configDefaults__WEBPACK_IMPORTED_MODULE_1__.defaultConfig.maps),
      apiKey
    },
    woosmapView: {
      ...parsedWoosmapView,
      initialCenter: parsedWoosmapView.initialCenter,
      initialZoom: parsedWoosmapView.initialZoom,
      tileStyle: {
        color: parsedWoosmapView.tileStyle.color,
        size: Number(parsedWoosmapView.tileStyle.size),
        minSize: Number(parsedWoosmapView.tileStyle.minSize),
        typeRules: parsedWoosmapView.tileStyle.typeRules
      },
      breakPoint: Number(parsedWoosmapView.breakPoint),
      style: {
        rules: parsedWoosmapView.style.rules,
        default: parsedWoosmapView.style.default
      }
    },
    filters: parsedFilters,
    initialSearch: parsedInitialSearch
  };
  removeEmptyValues(config);
  return config;
}

// Remove top-level keys with empty values

function removeEmptyValues(config) {
  Object.keys(config).forEach(key => {
    if (isEmptyValue(config[key])) {
      delete config[key];
    }
  });
}
function validateConfig(config) {
  if (!config.maps.apiKey || typeof config.maps.apiKey !== 'string' || !config.maps.apiKey.trim()) {
    throw new Error('StoreLocator configuration error: apiKey is required and must be a non-empty string.');
  }
  // Additional validations can be added here
  return config;
}
function processInputConfig(config) {
  const fixedConfig = config.replace(/([,{]\s*)([a-zA-Z0-9_]+):/g, '$1"$2":') // Ensure keys are quoted
  .replace(/\b(true|false|null)\b/g, match => match.toLowerCase()) // Correct boolean and null literals
  .replace(/,\s*([}\]])/g, '$1') // Remove trailing commas
  .trim();
  try {
    // Attempt to parse and then stringify to ensure valid JSON format
    return JSON.stringify(JSON.parse(fixedConfig), null, 2);
  } catch (error) {
    throw new Error('Failed to process input config into valid JSON: ' + error.message);
  }
}

/***/ }),

/***/ "./src/utils/scriptUtils.js":
/*!**********************************!*\
  !*** ./src/utils/scriptUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadOrReplaceScript: () => (/* binding */ loadOrReplaceScript)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Load or replace webapp.js script and reset global vars.
 * This ensures to remove persistent states from the store locator widget for editing mode.
 * @param {HTMLElement} element
 * @param {Function}    callback - The function to call once the script is successfully loaded.
 */
function loadOrReplaceScript(element, callback = null) {
  const webappScriptSource = 'https://webapp.woosmap.com/webapp.js';
  const mapScriptSource = 'https://sdk.woosmap.com/map/map.js';
  const loadingScript = element.ownerDocument.querySelector(`script[src^="${webappScriptSource}"][data-loading]`);
  if (loadingScript) {
    return;
  }
  const existingScripts = element.ownerDocument.querySelectorAll(`script[src^="${webappScriptSource}"], script[src^="${mapScriptSource}"]`);
  if (existingScripts.length) {
    const globalVars = ['WebApp', 'woosmap', '__webapp_maps_callback'];
    globalVars.forEach(varName => {
      if (element.ownerDocument.defaultView[varName] !== undefined) {
        element.ownerDocument.defaultView[varName] = null;
      }
    });
    existingScripts.forEach(script => script.parentNode.removeChild(script));
  }
  const script = element.ownerDocument.createElement('script');
  script.src = webappScriptSource;
  script.setAttribute('data-loading', 'true');
  script.onload = () => {
    script.removeAttribute('data-loading');
    if (callback && typeof callback === 'function') {
      callback();
    }
  };
  script.onerror = error => {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(`Failed to load Woosmap WebApp script: ${error}`, {
      isDismissible: true,
      type: 'snackbar'
    });
    script.removeAttribute('data-loading');
  };
  element.ownerDocument.head.appendChild(script);
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