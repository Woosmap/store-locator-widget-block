/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Settings/CustomMarkerSettings.js":
/*!**********************************************!*\
  !*** ./src/Settings/CustomMarkerSettings.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomMarkerSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditCustomMarkerSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCustomMarkerSettings */ "./src/Settings/EditCustomMarkerSettings.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);






function CustomMarkerSettings(props) {
  const {
    attributes: {
      customMarkers
    },
    setAttributes
  } = props;
  const [storeType, setStoreType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const addCustomMarker = () => {
    if (!storeType.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Store Type Title cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return;
    }
    const newMarker = {
      storeType,
      customTyleColor: '#000',
      customDefaultMarkerUrl: 'https://images.woosmap.com/marker-default.svg',
      customSelectedMarkerUrl: 'https://images.woosmap.com/marker-selected.svg',
      customNumberedMarkerUrl: 'https://images.woosmap.com/marker-default.svg'
    };
    const newCustomMarkers = [...customMarkers, newMarker];
    setAttributes({
      customMarkers: newCustomMarkers
    });
    setStoreType('');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Marker Settings', 'store-locator-widget-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Store Type', 'store-locator-widget-block'),
    value: storeType,
    onChange: value => setStoreType(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: addCustomMarker
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Custom Marker', 'store-locator-widget-block'))), customMarkers.map((marker, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditCustomMarkerSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    index: index,
    marker: marker,
    storeType: marker.storeType,
    customTyleColor: marker.customTyleColor,
    customDefaultMarkerUrl: marker.customDefaultMarkerUrl,
    customSelectedMarkerUrl: marker.customSelectedMarkerUrl,
    customNumberedMarkerUrl: marker.customNumberedMarkerUrl,
    customMarkers: customMarkers,
    setAttributes: setAttributes
  })));
}

/***/ }),

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
      theme,
      woosmapView
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Display Settings', 'store-locator-widget-block')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "theme-color-control"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Primary Color', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    id: "theme-color-control",
    colorValue: theme.primary_color
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: theme.primary_color,
    onChange: value => setAttributes({
      theme: {
        primary_color: value
      }
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Zoom', 'store-locator-widget-block'),
    value: woosmapView.initialZoom,
    onChange: value => setAttributes({
      woosmapView: {
        ...woosmapView,
        initialZoom: value
      }
    }),
    min: 0,
    max: 20,
    step: 0.5
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Height ( pixels )', 'store-locator-widget-block'),
    value: Number(height),
    onChange: value => setAttributes({
      height: value
    }),
    min: 250,
    max: 3000,
    step: 5
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default Latitude', 'store-locator-widget-block'),
    value: woosmapView.initialCenter.lat,
    onChange: value => setAttributes({
      woosmapView: {
        ...woosmapView,
        initialCenter: {
          ...woosmapView.initialCenter,
          lat: value
        }
      }
    }),
    min: -90,
    max: 90,
    step: 0.1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default Longitude', 'store-locator-widget-block'),
    value: woosmapView.initialCenter.lng,
    onChange: value => setAttributes({
      woosmapView: {
        ...woosmapView,
        initialCenter: {
          ...woosmapView.initialCenter,
          lng: value
        }
      }
    }),
    min: -180,
    max: 180,
    step: 0.1
  }));
}

/***/ }),

/***/ "./src/Settings/EditChoicesSettings.js":
/*!*********************************************!*\
  !*** ./src/Settings/EditChoicesSettings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditchoicesSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




function EditchoicesSettings(props) {
  const {
    choiceIndex,
    choice,
    choiceKey,
    choiceTitle,
    choiceSelected,
    choiceHidden,
    choices,
    index,
    filter,
    filters,
    setAttributes
  } = props;
  const updateFilter = updatedFilter => {
    const newFilters = filters.map((m, i) => i === index ? updatedFilter : m);
    setAttributes({
      filters: newFilters
    });
  };
  const updateChoice = updatedChoice => {
    const newChoices = choices.map((m, i) => i === choiceIndex ? updatedChoice : m);
    updateFilter({
      ...filter,
      choices: newChoices
    });
  };
  const deleteChoice = () => {
    const newChoices = choices.filter((_, i) => i !== choiceIndex);
    updateFilter({
      ...filter,
      choices: newChoices
    });
  };
  const validateChoiceKey = value => {
    if (!value.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Key cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return false;
    }
    return true;
  };
  const validateChoiceTitle = value => {
    if (!value.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Title cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return false;
    }
    return true;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice: ', 'store-locator-widget-block') + choiceTitle + ' {' + choiceKey + '}',
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Key', 'store-locator-widget-block'),
    value: choiceKey,
    onChange: value => {
      if (validateChoiceKey(value)) {
        updateChoice({
          ...choice,
          choiceKey: value
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Tile', 'store-locator-widget-block'),
    value: choiceTitle,
    onChange: value => {
      if (validateChoiceTitle(value)) {
        updateChoice({
          ...choice,
          choiceTitle: value
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected', 'store-locator-widget-block'),
    checked: choiceSelected,
    onChange: checked => updateChoice({
      ...choice,
      choiceSelected: checked
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hidden', 'store-locator-widget-block'),
    checked: choiceHidden,
    onChange: checked => updateChoice({
      ...choice,
      choiceHidden: checked
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: deleteChoice
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete choice', 'store-locator-widget-block')));
}

/***/ }),

/***/ "./src/Settings/EditCustomMarkerSettings.js":
/*!**************************************************!*\
  !*** ./src/Settings/EditCustomMarkerSettings.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditCustomMarkerSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




function EditCustomMarkerSettings(props) {
  const {
    index,
    marker,
    storeType,
    customTyleColor,
    customDefaultMarkerUrl,
    customSelectedMarkerUrl,
    customNumberedMarkerUrl,
    customMarkers,
    setAttributes
  } = props;
  const updateMarker = updatedMarker => {
    const newCustomMarkers = customMarkers.map((m, i) => i === index ? updatedMarker : m);
    setAttributes({
      customMarkers: newCustomMarkers
    });
  };
  const deleteMarker = () => {
    const newCustomMarkers = customMarkers.filter((_, i) => i !== index);
    setAttributes({
      customMarkers: newCustomMarkers
    });
  };
  const validateStoreType = value => {
    if (!value.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Store Type cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return false;
    }
    return true;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Edit: ', 'store-locator-widget-block') + storeType,
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Store Type', 'store-locator-widget-block'),
    value: storeType,
    onChange: value => {
      if (validateStoreType(value)) {
        updateMarker({
          ...marker,
          storeType: value
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "custom-tile-color-control"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Tile Color', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    id: "custom-tile-color-control",
    colorValue: customTyleColor
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: customTyleColor,
    onChange: value => updateMarker({
      ...marker,
      customTyleColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Default Marker Url', 'store-locator-widget-block'),
    value: customDefaultMarkerUrl,
    onChange: value => updateMarker({
      ...marker,
      customDefaultMarkerUrl: value
    })
  }), customDefaultMarkerUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customDefaultMarkerUrl,
    alt: "Custom Default Marker",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Selected Marker Url', 'store-locator-widget-block'),
    value: customSelectedMarkerUrl,
    onChange: value => updateMarker({
      ...marker,
      customSelectedMarkerUrl: value
    })
  }), customSelectedMarkerUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customSelectedMarkerUrl,
    alt: "Custom Selected Marker",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom Numbered Marker Url', 'store-locator-widget-block'),
    value: customNumberedMarkerUrl,
    onChange: value => updateMarker({
      ...marker,
      customNumberedMarkerUrl: value
    })
  }), customNumberedMarkerUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: customNumberedMarkerUrl,
    alt: "Custom Numbered Marker",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: deleteMarker
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete Custom Marker', 'store-locator-widget-block')));
}

/***/ }),

/***/ "./src/Settings/EditFiltersSettings.js":
/*!*********************************************!*\
  !*** ./src/Settings/EditFiltersSettings.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditFiltersSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _EditChoicesSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditChoicesSettings */ "./src/Settings/EditChoicesSettings.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);






function EditFiltersSettings(props) {
  const {
    index,
    filter,
    propertyType,
    title,
    innerOperator,
    choices,
    filters,
    setAttributes
  } = props;
  const updateFilter = updatedFilter => {
    const newFilters = filters.map((m, i) => i === index ? updatedFilter : m);
    setAttributes({
      filters: newFilters
    });
  };
  const deleteFilter = () => {
    const newFilters = filters.filter((_, i) => i !== index);
    setAttributes({
      filters: newFilters
    });
  };
  const validatePropertyType = value => {
    if (!value.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Property Type cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return false;
    }
    return true;
  };
  const validateTitle = value => {
    if (!value.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return false;
    }
    return true;
  };
  const [choiceKey, setChoiceKey] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [choiceTitle, setChoiceTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const addChoice = () => {
    if (!choiceKey.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Key cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return;
    }
    if (!choiceTitle.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Title cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return;
    }
    const newChoice = {
      choiceKey,
      choiceTitle,
      choiceSelected: false
    };
    const newChoices = [...choices, newChoice];
    updateFilter({
      ...filter,
      choices: newChoices
    });
    setChoiceKey('');
    setChoiceTitle('');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filter: ', 'store-locator-widget-block') + title + ' {' + propertyType + '}',
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Property Type', 'store-locator-widget-block'),
    value: propertyType,
    onChange: value => {
      if (validatePropertyType(value)) {
        updateFilter({
          ...filter,
          propertyType: value
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('title', 'store-locator-widget-block'),
    value: title,
    onChange: value => {
      if (validateTitle(value)) {
        updateFilter({
          ...filter,
          title: value
        });
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Inner Operator', 'store-locator-widget-block'),
    value: innerOperator,
    onChange: value => updateFilter({
      ...filter,
      innerOperator: value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "and"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('And', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "or"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Or', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Key', 'store-locator-widget-block'),
    value: choiceKey,
    onChange: value => setChoiceKey(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Choice Title', 'store-locator-widget-block'),
    value: choiceTitle,
    onChange: value => setChoiceTitle(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: addChoice
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Choice', 'store-locator-widget-block'))), choices.map((choice, choiceIndex) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditChoicesSettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: choiceIndex,
    choiceIndex: choiceIndex,
    choice: choice,
    choiceKey: choice.choiceKey,
    choiceTitle: choice.choiceTitle,
    choiceSelected: choice.choiceSelected,
    choiceHidden: choice.choiceHidden,
    choices: choices,
    index: index,
    filter: filter,
    filters: filters,
    setAttributes: setAttributes
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: deleteFilter,
    style: {
      marginTop: 20
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Delete filter', 'store-locator-widget-block')));
}

/***/ }),

/***/ "./src/Settings/FiltersSettings.js":
/*!*****************************************!*\
  !*** ./src/Settings/FiltersSettings.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditFiltersSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditFiltersSettings */ "./src/Settings/EditFiltersSettings.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);






function FiltersSettings(props) {
  const {
    attributes: {
      filtersOpened,
      filtersCustomOrder,
      filters,
      filtersOuterOperator
    },
    setAttributes
  } = props;
  const [propertyType, setPropertyType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const addFilter = () => {
    if (!propertyType.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Property Type cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return;
    }
    if (!title.trim()) {
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title cannot be empty', 'store-locator-widget-block'), {
        isDismissible: true,
        type: 'snackbar'
      });
      return;
    }
    const newFilter = {
      propertyType,
      title,
      innerOperator: 'and',
      choices: []
    };
    const newFilters = [...filters, newFilter];
    setAttributes({
      filters: newFilters
    });
    setPropertyType('');
    setTitle('');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters Settings', 'store-locator-widget-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters Opened', 'store-locator-widget-block'),
    checked: filtersOpened,
    onChange: checked => setAttributes({
      filtersOpened: checked
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters Custom Order', 'store-locator-widget-block'),
    checked: filtersCustomOrder,
    onChange: checked => setAttributes({
      filtersCustomOrder: checked
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Filters Outer Operator', 'store-locator-widget-block'),
    value: filtersOuterOperator,
    onChange: value => setAttributes({
      filtersOuterOperator: value
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "and"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('And', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "or"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Or', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Property Type', 'store-locator-widget-block'),
    onChange: value => setPropertyType(value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "type"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Type', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "tag"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "custom"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Custom', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Title', 'store-locator-widget-block'),
    value: title,
    onChange: value => setTitle(value)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "primary",
    onClick: addFilter
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Filter', 'store-locator-widget-block'))), filters.map((filter, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditFiltersSettings__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: index,
    index: index,
    filter: filter,
    propertyType: filter.propertyType,
    title: filter.title,
    innerOperator: filter.innerOperator,
    choices: filter.choices,
    filters: filters,
    setAttributes: setAttributes
  })));
}

/***/ }),

/***/ "./src/Settings/InternationalizationSettings.js":
/*!******************************************************!*\
  !*** ./src/Settings/InternationalizationSettings.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InternationalizationSettings)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);



function InternationalizationSettings(props) {
  const {
    attributes: {
      internationalization
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Internationalization Settings', 'store-locator-widget-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Language', 'store-locator-widget-block'),
    value: internationalization.lang,
    onChange: value => setAttributes({
      internationalization: {
        lang: value,
        period: internationalization.period,
        unitSystem: internationalization.unitSystem
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "pt-br"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Brazilian Portuguese', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ca"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Catalan', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "zh"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chinese', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "zh-HK"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Chinese (Hong Kong)', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "hr"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Croatian', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "de"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deutsch', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "nl"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dutch', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "en"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('English', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "fr"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('French', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "el"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Greek', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "he"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Hebrew', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "it"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Italian', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ja"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Japanese', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "pl"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Polish', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "pt"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Portuguese', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ro"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Romanian', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "ru"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Russian', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "es"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Spanish', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "sv"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Swedish', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "uk"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ukrainian', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Period', 'store-locator-widget-block'),
    value: internationalization.period,
    onChange: value => setAttributes({
      internationalization: {
        lang: internationalization.lang,
        period: value,
        unitSystem: internationalization.unitSystem
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "fr"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('24h', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "en-US"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('12h', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Unit System', 'store-locator-widget-block'),
    value: internationalization.unitSystem,
    onChange: value => setAttributes({
      internationalization: {
        lang: internationalization.lang,
        period: internationalization.period,
        unitSystem: Number(value)
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "0"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Metric', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "1"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Imperial', 'store-locator-widget-block'))));
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
      breakPoint,
      tileSize,
      defaultStyle
    },
    setAttributes
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marker Settings', 'store-locator-widget-block'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "tile-color-control"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tile Color', 'store-locator-widget-block')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    id: "tile-color-control",
    colorValue: tileColor
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    value: tileColor,
    onChange: value => setAttributes({
      tileColor: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tile Size', 'store-locator-widget-block'),
    value: tileSize,
    onChange: value => setAttributes({
      tileSize: value
    }),
    min: 1,
    max: 50,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Break Point', 'store-locator-widget-block'),
    value: breakPoint,
    onChange: value => setAttributes({
      breakPoint: value
    }),
    min: 1,
    max: 20,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Default Marker Url', 'store-locator-widget-block'),
    value: defaultStyle.icon.url,
    onChange: value => setAttributes({
      defaultStyle: {
        icon: {
          url: value
        },
        selectedIcon: {
          url: defaultStyle.selectedIcon.url
        },
        numberedIcon: {
          url: defaultStyle.numberedIcon.url
        }
      }
    })
  }), defaultStyle.icon.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: defaultStyle.icon.url,
    alt: "Default Marker Url",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: 20,
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Selected Marker Url', 'store-locator-widget-block'),
    value: defaultStyle.selectedIcon.url,
    onChange: value => setAttributes({
      defaultStyle: {
        icon: {
          url: defaultStyle.icon.url
        },
        selectedIcon: {
          url: value
        },
        numberedIcon: {
          url: defaultStyle.numberedIcon.url
        }
      }
    })
  }), defaultStyle.selectedIcon.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: defaultStyle.selectedIcon.url,
    alt: "Selected Marker Url",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: 10,
      border: '1px solid lightgray',
      borderRadius: 5
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Numbered Marker Url', 'store-locator-widget-block'),
    value: defaultStyle.numberedIcon.url,
    onChange: value => setAttributes({
      defaultStyle: {
        icon: {
          url: defaultStyle.icon.url
        },
        selectedIcon: {
          url: defaultStyle.selectedIcon.url
        },
        numberedIcon: {
          url: value
        }
      }
    })
  }), defaultStyle.numberedIcon.url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: defaultStyle.numberedIcon.url,
    alt: "Numbered Marker Url",
    style: {
      maxWidth: '100%',
      height: 'auto'
    }
  })));
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
          woosmap_public_api_key: apiKey
        }
      } = siteSettings;
      setPublicApiKey(apiKey);
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
        woosmap_public_api_key: apiKey
      }
    }) => {
      setPublicApiKey(apiKey);
      setIsBusy(false);
      setApiKey(apiKey);
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
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Please enter your Public API Key', 'store-locator-widget-block'),
    readOnly: isBusy,
    name: "woosmap_public_api_key",
    value: publicApiKey,
    onChange: newPublicApiKeyKey => setPublicApiKey(newPublicApiKeyKey)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    disabled: isBusy,
    isBusy: isBusy,
    onClick: handleSave
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Confirm Woosmap Credentials', 'store-locator-widget-block')));
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
    className: `store-locator-widget-block__resize-container ${isResizing ? 'is-resizing' : ''}`,
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

/***/ "./src/components/WidgetJsonForm.js":
/*!******************************************!*\
  !*** ./src/components/WidgetJsonForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WidgetJsonForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_configUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/configUtils */ "./src/utils/configUtils.js");







function WidgetJsonForm({
  blockProps,
  BlockIcon,
  initialConfig,
  onValidateConfig
}) {
  const {
    height,
    apiKey,
    ...filteredInitialConfig
  } = initialConfig;
  const [config, setConfig] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(JSON.stringify(filteredInitialConfig, null, 2));
  const handleValidateConfig = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    try {
      const modifiedConfig = (0,_utils_configUtils__WEBPACK_IMPORTED_MODULE_6__.processInputConfig)(config);
      setConfig(modifiedConfig);
      const parsedConfig = JSON.parse(modifiedConfig);
      onValidateConfig(parsedConfig);
    } catch (error) {
      const errorMessage = `Invalid Widget Conf format: ${error.message}`;
      (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch)('core/notices').createErrorNotice(errorMessage, {
        isDismissible: true,
        type: 'snackbar'
      });
    }
  }, [config, onValidateConfig]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Store Locator Widget Configuration', 'store-locator-widget-block'),
    icon: BlockIcon
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    value: config,
    onChange: text => setConfig(text),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Write json conf…'),
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Conf'),
    preserveWhiteSpace: true,
    allowedFormats: [],
    withoutInteractiveFormatting: true,
    __unstablePastePlainText: true /* GB 9.5 */
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    onClick: handleValidateConfig,
    style: {
      marginTop: '10px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Validate Configuration', 'store-locator-widget-block'))));
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
/* harmony import */ var _components_WidgetJsonForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/WidgetJsonForm */ "./src/components/WidgetJsonForm.js");















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
    if (!webAppLib) {
      return;
    }
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
  const [showConfigPlaceholder, setShowConfigPlaceholder] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const isAuthenticated = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    return select(_store__WEBPACK_IMPORTED_MODULE_9__.store).isAuthenticated();
  });
  const {
    updateAuthenticationStatus
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_9__.store);
  const {
    toggleSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.store);
  const debouncedUpdate = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.useDebounce)(newAttributes => {
    storeLocatorWidget.update(newAttributes);
  }, 500);
  const handleSetApiKey = newApiKey => {
    setApiKey(newApiKey);
    setAttributes({
      apiKey: newApiKey
    });
  };
  const onValidateConfig = conf => {
    setAttributes(conf);
    setShowConfigPlaceholder(false);
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
    if (isAuthenticated) {
      setIsLoading(false);
    }
  }, [isAuthenticated]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (isAuthenticated && hasSLW) {
      debouncedUpdate(attributes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes, isAuthenticated, storeLocatorWidget, hasSLW]);
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Block for Woosmap Store Locator Widget', 'store-locator-widget-block'),
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Authorize Woosmap Access', 'store-locator-widget-block'),
      icon: _block_icon__WEBPACK_IMPORTED_MODULE_11__["default"],
      isColumnLayout: true
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginBottom: '1em'
      }
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('To embed a Woosmap Store Locator Widget in your website, you need to provide your Public API Key. Follow the instructions in the documentation to obtain this key: ', 'store-locator-widget-block'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://developers.woosmap.com/support/api-keys/#registering-a-woosmap-public-api-key",
      target: "_blank",
      rel: "noopener noreferrer"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Guide to register a Woosmap Public API Key.', 'store-locator-widget-block'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_EditAuthForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
      setApiKey: handleSetApiKey
    }))));
  }
  if (showConfigPlaceholder) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_WidgetJsonForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
      blockProps: blockProps,
      BlockIcon: _block_icon__WEBPACK_IMPORTED_MODULE_11__["default"],
      initialConfig: attributes,
      onValidateConfig: onValidateConfig
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
    icon: "admin-generic",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Show Configuration', 'store-locator-widget-block'),
    onClick: () => setShowConfigPlaceholder(!showConfigPlaceholder)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector_settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
/* harmony import */ var _Settings_CustomMarkerSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings/CustomMarkerSettings */ "./src/Settings/CustomMarkerSettings.js");
/* harmony import */ var _Settings_InternationalizationSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Settings/InternationalizationSettings */ "./src/Settings/InternationalizationSettings.js");
/* harmony import */ var _Settings_FiltersSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Settings/FiltersSettings */ "./src/Settings/FiltersSettings.js");









function InspectorSettings(props) {
  const {
    isAuthenticated
  } = props;
  if (!isAuthenticated) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('You need to confirm your access to Woosmap before you can continue.', 'store-locator-widget-block'))));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_DisplaySettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_InternationalizationSettings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_MarkerSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_CustomMarkerSettings__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Settings_FiltersSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      apiKey,
      theme,
      internationalization,
      woosmapView,
      tileColor,
      tileSize,
      breakPoint,
      defaultStyle,
      customMarkers,
      filtersOpened,
      filtersCustomOrder,
      filters,
      filtersOuterOperator
    }
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: {
      height: `${height}px`
    },
    id: 'storeLocatorWidget'
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    "data-api-key": apiKey,
    "data-theme": JSON.stringify(theme),
    "data-internationalization": JSON.stringify(internationalization),
    "data-woosmap-view": JSON.stringify(woosmapView),
    "data-tile-color": tileColor,
    "data-tile-size": tileSize,
    "data-break-point": breakPoint,
    "data-default-style": JSON.stringify(defaultStyle),
    "data-custom-markers": JSON.stringify(customMarkers),
    "data-filters-opened": filtersOpened,
    "data-filters-custom-order": filtersCustomOrder,
    "data-filters": JSON.stringify(filters),
    "data-filters-outer-operator": filtersOuterOperator
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



const STORE_NAME = 'woosmap/store-locator-widget-block';

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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"woosmap/store-locator-widget-block","version":"0.1.0","title":"Woosmap Store Locator Widget Block","category":"widgets","keywords":["Woosmap","Store Locator","Store Finder","Map"],"description":"Easily display your stores on a Map using Woosmap platform","example":{},"supports":{"align":["wide","full"],"spacing":{"margin":true},"html":false,"multiple":false},"attributes":{"height":{"type":"string","default":"500"},"apiKey":{"type":"string"},"theme":{"type":"object","properties":{"primary_color":{"type":"string","default":"#000"}},"default":{"primary_color":"#000"}},"internationalization":{"type":"object","properties":{"lang":{"type":"string","default":"en"},"period":{"type":"string","default":"fr"},"unitSystem":{"type":"number","default":0}},"default":{"lang":"en","period":"fr","unitSystem":0}},"woosmapView":{"type":"object","default":{"initialCenter":{"lat":50,"lng":0},"initialZoom":6}},"tileColor":{"type":"string","default":"#000"},"tileSize":{"type":"number","default":11},"breakPoint":{"type":"number","default":10},"defaultStyle":{"type":"object","properties":{"icon":{"type":"object","properties":{"url":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"}},"default":{"url":"https://images.woosmap.com/marker-default.svg"}},"selectedIcon":{"type":"object","properties":{"url":{"type":"string","default":"https://images.woosmap.com/marker-selected.svg"}},"default":{"url":"https://images.woosmap.com/marker-selected.svg"}},"numberedIcon":{"type":"object","properties":{"url":{"type":"string","default":"https://images.woosmap.com/marker-default.svg"}},"default":{"url":"https://images.woosmap.com/marker-default.svg"}}},"default":{"icon":{"url":"https://images.woosmap.com/marker-default.svg"},"selectedIcon":{"url":"https://images.woosmap.com/marker-selected.svg"},"numberedIcon":{"url":"https://images.woosmap.com/marker-default.svg"}}},"customMarkers":{"type":"array","default":[],"items":{"type":"object","properties":{"storeType":{"type":"string"},"customTyleColor":{"type":"string"},"customDefaultMarkerUrl":{"type":"string"},"customSelectedMarkerUrl":{"type":"string"},"customNumberedMarkerUrl":{"type":"string"}}}},"filtersOpened":{"type":"boolean","default":false},"filtersCustomOrder":{"type":"boolean","default":false},"filters":{"type":"array","default":[],"items":{"type":"object","properties":{"propertyType":{"type":"string"},"title":{"type":"string"},"innerOperator":{"type":"string"},"choices":{"type":"array","default":[],"items":{"type":"object","properties":{"choiceKey":{"type":"string"},"choiceTitle":{"type":"string"},"choiceSelected":{"type":"boolean"},"choiceHidden":{"type":"boolean"}}}}}}},"filtersOuterOperator":{"type":"string","default":"or"}},"textdomain":"store-locator-widget-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","script":"woosmap-webapp-js"}');

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
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkstore_locator_widget_block"] = globalThis["webpackChunkstore_locator_widget_block"] || [];
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