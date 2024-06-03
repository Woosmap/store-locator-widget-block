/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Settings/DisplaySettings.js":
/*!*****************************************!*\
  !*** ./src/Settings/DisplaySettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DisplaySettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function DisplaySettings(props) {
  const {
    attributes: {
      height,
      zoom,
      themeColor
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Settings', 'wp-store-locator-widget-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "theme-color-control"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary Color', 'wp-store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    id: "theme-color-control",
    colorValue: themeColor
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: themeColor,
    onChange: value => setAttributes({
      themeColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zoom', 'wp-store-locator-widget-block'),
    value: zoom,
    onChange: value => setAttributes({
      zoom: value
    }),
    min: 0,
    max: 20,
    step: 0.5
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height ( pixels )', 'wp-store-locator-widget-block'),
    value: height,
    onChange: value => setAttributes({
      height: value
    })
  }));
}

/***/ }),

/***/ "./src/Settings/MarkerSettings.js":
/*!****************************************!*\
  !*** ./src/Settings/MarkerSettings.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MarkerSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function MarkerSettings(props) {
  const {
    attributes: {
      tileColor,
      tileSize,
      breakPoint,
      defaultMarkerUrl,
      selectedMarkerUrl,
      numberedMarkerUrl
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marker Settings', 'wp-store-locator-widget-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "tile-color-control"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tile Color', 'wp-store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    id: "tile-color-control",
    colorValue: tileColor
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: tileColor,
    onChange: value => setAttributes({
      tileColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tile Size', 'wp-store-locator-widget-block'),
    value: tileSize,
    onChange: value => setAttributes({
      tileSize: value
    }),
    min: 1,
    max: 50,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Break Point', 'wp-store-locator-widget-block'),
    value: breakPoint,
    onChange: value => setAttributes({
      breakPoint: value
    }),
    min: 1,
    max: 20,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default Marker Url', 'wp-store-locator-widget-block'),
    value: defaultMarkerUrl,
    onChange: value => setAttributes({
      defaultMarkerUrl: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Marker Url', 'wp-store-locator-widget-block'),
    value: selectedMarkerUrl,
    onChange: value => setAttributes({
      selectedMarkerUrl: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Numbered Marker Url', 'wp-store-locator-widget-block'),
    value: numberedMarkerUrl,
    onChange: value => setAttributes({
      numberedMarkerUrl: value
    })
  }));
}

/***/ }),

/***/ "./src/block-icon.js":
/*!***************************!*\
  !*** ./src/block-icon.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BlockIcon() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 771.444"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "427.842",
    width: "166.721",
    height: "172.249",
    fill: "#4FC3F7"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "338.962",
    y: "172.249",
    width: "255.601",
    height: "166.721",
    fill: "#5586FF"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "172.241",
    y: "172.249",
    width: "166.721",
    height: "255.609",
    fill: "#3D5AFE"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    y: "427.858",
    width: "338.962",
    height: "166.721",
    fill: "#3949AB"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "851.743",
    y: "176.865",
    width: "172.257",
    height: "166.721",
    fill: "#FFAB00"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "685.022",
    y: "176.865",
    width: "166.721",
    height: "255.609",
    fill: "#FF5252"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "596.142",
    y: "432.474",
    width: "255.601",
    height: "166.721",
    fill: "#F50057"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "429.421",
    y: "432.483",
    width: "166.721",
    height: "338.961",
    fill: "#C51162"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockIcon);

/***/ }),

/***/ "./src/components/EditAuthForm.js":
/*!****************************************!*\
  !*** ./src/components/EditAuthForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditAuthForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);





function EditAuthForm({
  setApiKey
}) {
  const [publicApiKey, setPublicApiKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [isBusy, setIsBusy] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const siteSettings = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core').getEntityRecord('root', 'site');
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (siteSettings) {
      const {
        woosmap_settings: {
          woosmap_public_api_key
        }
      } = siteSettings;
      setPublicApiKey(woosmap_public_api_key);
    }
  }, [siteSettings]);
  const handleSave = () => {
    setIsBusy(true);
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core').saveEntityRecord('root', 'site', {
      woosmap_settings: {
        woosmap_public_api_key: publicApiKey
      }
    }).then(({
      woosmap_settings: {
        woosmap_public_api_key
      }
    }) => {
      setPublicApiKey(woosmap_public_api_key);
      setIsBusy(false);
      setApiKey(woosmap_public_api_key);
      window.dispatchEvent(new CustomEvent('woosmapSettingsSaved'));
    }).catch(error => {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.dispatch)('core/notices').createErrorNotice(error.message, {
        isDismissible: true,
        type: 'snackbar'
      });
      setIsBusy(false);
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please enter your Public API Key', 'wp-store-locator-widget-block'),
    readOnly: isBusy,
    name: "woosmap_public_api_key",
    value: publicApiKey,
    onChange: newPublicApiKeyKey => setPublicApiKey(newPublicApiKeyKey)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    disabled: isBusy,
    isBusy: isBusy,
    onClick: handleSave
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Confirm Woosmap Credentials', 'wp-store-locator-widget-block')));
}

/***/ }),

/***/ "./src/components/ResizableMap.js":
/*!****************************************!*\
  !*** ./src/components/ResizableMap.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResizableMap: () => (/* binding */ ResizableMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



const RESIZABLE_BOX_ENABLE_OPTION = {
  top: false,
  right: false,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false
};
const MAP_MIN_HEIGHT = 250;
function ResizableMap({
  onResizeStart,
  onResize,
  onResizeStop,
  ...props
}) {
  const [isResizing, setIsResizing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ResizableBox, {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    className: `wp-store-locator-widget-block__resize-container ${isResizing ? 'is-resizing' : ''}`,
    enable: RESIZABLE_BOX_ENABLE_OPTION,
    onResizeStart: (_event, _direction, elt) => {
      onResizeStart(elt.clientHeight);
      onResize(elt.clientHeight);
    },
    onResize: (_event, _direction, elt) => {
      onResize(elt.clientHeight);
      if (!isResizing) {
        setIsResizing(true);
      }
    },
    onResizeStop: (_event, _direction, elt) => {
      onResizeStop(elt.clientHeight);
      setIsResizing(false);
    },
    minHeight: MAP_MIN_HEIGHT,
    ...props
  });
}

/***/ }),

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

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreLocatorBlockEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_StoreLocator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/StoreLocator */ "./src/components/StoreLocator.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _inspector_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inspector-settings */ "./src/inspector-settings.js");
/* harmony import */ var _block_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-icon */ "./src/block-icon.js");
/* harmony import */ var _components_EditAuthForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/EditAuthForm */ "./src/components/EditAuthForm.js");
/* harmony import */ var _components_ResizableMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ResizableMap */ "./src/components/ResizableMap.js");














const StoreLocatorWidget = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.memo)(props => {
  const {
    storeLocatorWidget,
    isAuthenticated,
    clientId,
    setAttributes,
    setStoreLocatorWidget,
    webAppLib,
    apiKey
  } = props;
  const hasSLW = !!storeLocatorWidget;

  /**
   * render a new store locator widget on the provided element
   */
  const slwContainerRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useRefEffect)(element => {
    if (!webAppLib) return;
    if (isAuthenticated && !hasSLW) {
      setStoreLocatorWidget(new _components_StoreLocator__WEBPACK_IMPORTED_MODULE_7__.StoreLocatorEdit(element, clientId, setAttributes));
    }
    return () => {
      if (hasSLW) {
        storeLocatorWidget.remove();
        setStoreLocatorWidget(null);
      }
    };
  }, [webAppLib, apiKey, isAuthenticated, storeLocatorWidget, clientId, setAttributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "storeLocatorWidgetEdit",
    ref: slwContainerRef
  });
});
function StoreLocatorBlockEdit(props) {
  const {
    attributes,
    setAttributes,
    clientId,
    isSelected
  } = props;
  const {
    height,
    apiKey: initialApiKey
  } = attributes;
  const [storeLocatorWidget, setStoreLocatorWidget] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [webAppLib, setWebAppLib] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [apiKey, setApiKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(initialApiKey);
  const hasSLW = !!storeLocatorWidget;
  const [isLoading, setIsLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  const isAuthenticated = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select(_store__WEBPACK_IMPORTED_MODULE_9__.store).isAuthenticated();
  });
  const {
    updateAuthenticationStatus
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    toggleSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const debouncedUpdate = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(attributes => {
    storeLocatorWidget.update(attributes);
  }, 500);
  const handleSetApiKey = newApiKey => {
    setApiKey(newApiKey);
    setAttributes({
      apiKey: newApiKey
    });
  };

  /**
   * setup the initial authentication of Woosmap
   *
   * ensures that the WebApp object gets initialized on the correct window which is
   * needed for the iframe editors.
   */
  const setupRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useRefEffect)(element => {
    // use the WebApp object on the window of the current document
    const localWebAppLib = !!element.ownerDocument.defaultView.WebApp;

    // return early if the WebApp script has not yet been loaded. The editor iframe
    // will re render the element after the scripts have been loaded
    if (!localWebAppLib) {
      setWebAppLib(null);
      return;
    }
    setWebAppLib(localWebAppLib);
    const handleConfigurationChange = ({
      status
    }) => {
      function handleSuccessfulAuthentication() {
        setIsLoading(false);
        updateAuthenticationStatus(true);
      }
      switch (status) {
        case 'Initialized':
          handleSuccessfulAuthentication();
          break;
      }
    };
    const InitializeWebApp = () => {
      handleConfigurationChange({
        status: 'Initialized'
      });
    };
    if (localWebAppLib) {
      setIsLoading(false);
      if (apiKey) {
        InitializeWebApp();
      }
    }
    window.addEventListener('woosmapSettingsSaved', InitializeWebApp);
    return () => {
      window.removeEventListener('woosmapSettingsSaved', InitializeWebApp);
      setWebAppLib(null);
    };
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isAuthenticated) setIsLoading(false);
  }, [isAuthenticated]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isAuthenticated && hasSLW) {
      debouncedUpdate(attributes);
    }
  }, [attributes, isAuthenticated, storeLocatorWidget]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    ref: setupRef
  });
  if (isLoading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
      style: {
        height: `${height}px`
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block for Woosmap Store Locator Widget', 'wp-store-locator-widget-block'),
      icon: _block_icon__WEBPACK_IMPORTED_MODULE_11__["default"]
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null)));
  }
  if (!isAuthenticated) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
      ...props,
      isAuthenticated: isAuthenticated,
      storeLocatorWidget: storeLocatorWidget,
      webAppLib: webAppLib
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Placeholder, {
      style: {
        minHeight: `${height}px`
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Authorize Woosmap Access', 'wp-store-locator-widget-block'),
      icon: _block_icon__WEBPACK_IMPORTED_MODULE_11__["default"],
      isColumnLayout: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '1em'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ', 'wp-store-locator-widget-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Guide to register a Woosmap Public API Key.', 'wp-store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EditAuthForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setApiKey: handleSetApiKey
    }))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ...props,
    isAuthenticated: isAuthenticated,
    storeLocatorWidget: storeLocatorWidget,
    webAppLib: webAppLib
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ResizableMap__WEBPACK_IMPORTED_MODULE_13__.ResizableMap, {
    onResizeStart: () => {
      toggleSelection(false);
    },
    onResize: newHeight => {
      storeLocatorWidget.update({
        height: newHeight
      }, false);
    },
    onResizeStop: newHeight => {
      setAttributes({
        height: newHeight
      });
      toggleSelection(true);
    },
    showHandle: isSelected,
    size: {
      height
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(StoreLocatorWidget, {
    clientId: clientId,
    setAttributes: setAttributes,
    isAuthenticated: isAuthenticated,
    webAppLib: webAppLib,
    storeLocatorWidget: storeLocatorWidget,
    setStoreLocatorWidget: setStoreLocatorWidget,
    apiKey: apiKey
  })));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _block_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-icon */ "./src/block-icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */






/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  attributes: {
    ..._block_json__WEBPACK_IMPORTED_MODULE_3__.attributes
  },
  icon: _block_icon__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/inspector-settings.js":
/*!***********************************!*\
  !*** ./src/inspector-settings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InspectorSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Settings_DisplaySettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Settings/DisplaySettings */ "./src/Settings/DisplaySettings.js");
/* harmony import */ var _Settings_MarkerSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Settings/MarkerSettings */ "./src/Settings/MarkerSettings.js");






function InspectorSettings(props) {
  const {
    isAuthenticated
  } = props;
  if (!isAuthenticated) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You need to confirm your access to Woosmap before you can continue.', 'wp-store-locator-widget-block'))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_DisplaySettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_MarkerSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...props
  }));
}

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreLocatorBlockSave)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function StoreLocatorBlockSave(props) {
  const {
    attributes: {
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
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: {
      height: `${height}px`
    },
    id: "storeLocatorWidget"
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    "data-latitude": latitude,
    "data-longitude": longitude,
    "data-zoom": zoom,
    "data-theme-color": themeColor,
    "data-api-key": apiKey,
    "data-tile-color": tileColor,
    "data-tile-size": tileSize,
    "data-break-point": breakPoint,
    "data-default-marker-url": defaultMarkerUrl,
    "data-selected-marker-url": selectedMarkerUrl,
    "data-numbered-marker-url": numberedMarkerUrl
  });
}

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAuthenticationStatus: () => (/* binding */ updateAuthenticationStatus)
/* harmony export */ });
/**
 * Returns an action object used in signalling that the authentication state has changed
 *
 * @param {boolean} isAuthenticated status
 *
 * @return {Object} Action object.
 */
function updateAuthenticationStatus(isAuthenticated) {
  return {
    type: 'UPDATE_AUTHENTICATION',
    isAuthenticated
  };
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/store/actions.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



const STORE_NAME = 'woosmap/wp-store-locator-widget-block';

/**
 * Store definition for the icons namespace.
 *
 * @type {Object}
 */
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(STORE_NAME, {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authenticationReducer: () => (/* binding */ authenticationReducer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */


/**
 * Reducer managing the woosmap authentication
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
function authenticationReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_AUTHENTICATION':
      return {
        ...state,
        authenticated: action.isAuthenticated
      };
    default:
      return state;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  authenticationReducer
}));

/***/ }),

/***/ "./src/store/selectors.js":
/*!********************************!*\
  !*** ./src/store/selectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAuthenticated: () => (/* binding */ isAuthenticated)
/* harmony export */ });
/**
 * Returns authentication state
 *
 * @param {Object} state Data state.
 *
 * @return {Array?} Icon Sets.
 */
function isAuthenticated(state) {
  return Boolean(state?.authenticationReducer?.authenticated);
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/wp-store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"apiKey":{"type":"string"},"height":{"type":"string","default":"450"},"latitude":{"type":"number","default":51.48762585296625},"longitude":{"type":"number","default":-0.1326724377053381},"zoom":{"type":"number","default":6},"themeColor":{"type":"string","default":"#000"},"tileColor":{"type":"string","default":"#000"},"tileSize":{"type":"number","default":11},"breakPoint":{"type":"number","default":10},"defaultMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"},"selectedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-selected.svg"},"numberedMarkerUrl":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"}},"textdomain":"wp-store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","script":"woosmap-webapp-js"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwp_store_locator_widget_block"] = globalThis["webpackChunkwp_store_locator_widget_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map