/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const front = document.querySelector(".front");
const dropdown = document.querySelector('.dropdown');

const choose = document.querySelectorAll('.choose');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');

const wrapper = document.querySelector('.wrapper');
const calendarDiv = document.querySelector('.calendarDiv');
const work = document.querySelector('.work');
const excersise = document.querySelector('.excersie');
const health = document.querySelector('.health');
const teams = document.querySelector('.teams');
const chores = document.querySelector('.chores');
const school = document.querySelector('.school');
const creativity = document.querySelector('.creativity');
let inside = document.querySelectorAll('.inside');
const choose2 = document.querySelectorAll('.choose2');
const mode2 = document.querySelector('.mode2');
const set2 = document.querySelector('.set2');
const front2 = document.querySelector('.front2');
let visible = 0;
const tagInput = document.querySelector('.tagInput');
const dropdown2 = document.querySelector('.dropdown2');
const container = document.querySelector('.container')
const add = document.querySelector('.add');
const send = document.querySelector('.send');
const send2 = document.querySelector('.send2');
const cancel = document.querySelector('.cancel');
const all = document.querySelector('.all');
const create = document.querySelector('.create');
const closeSvg = document.querySelectorAll('.inside svg');

const titleText = document.querySelector('.titletext');
const descriptionText = document.querySelector('.descriptiontext');
const set = document.querySelector('.set');
const shown = document.querySelector('.shown');
const inside2 = document.querySelectorAll('.inside2');
let stop = 0;
const projects = document.querySelector('.projects');
const left = document.querySelector('.left');

add.addEventListener('click', () => {


    create.classList.add("scaled");
    all.classList.add('colored');
})

cancel.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

send2.addEventListener('click', () => {

    create.classList.remove("scaled");
    all.classList.remove('colored');
})

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!(add.contains(target) || create.contains(target))) {
        create.classList.remove('scaled');
        all.classList.remove('colored');
    }

})


front.addEventListener('click', toggleDropdown);

choose.forEach(item => {
    item.addEventListener('click', replacer);
})


function toggleDropdown() {
    dropdown.classList.toggle('show');
    front.classList.toggle('outliner');
}

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!front.contains(target)) {
        dropdown.classList.remove('show');
        front.classList.remove('outliner');
    }

})



function replacer() {
    let chosen = this.firstElementChild;
    set.innerHTML = chosen.innerHTML;

    if (chosen.innerHTML == "Trivial") {
        l1.classList.remove('hide');
        l2.classList.add('hide');
        l3.classList.add('hide');
        l4.classList.add('hide');
    } else if (chosen.innerHTML == "Easy") {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.add('hide');
        l4.classList.add('hide');
    } else if (chosen.innerHTML == "Medium") {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.remove('hide');
        l4.classList.add('hide');
    } else {
        l1.classList.remove('hide');
        l2.classList.remove('hide');
        l3.classList.remove('hide');
        l4.classList.remove('hide');
    }

}

let day = 0;
let month = 0;
let year = 0;


const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


const renderCalendar = () => {
    wrapper.classList.toggle('hide');
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;






    let list = document.querySelectorAll('li');
    list.forEach(li => {
        li.addEventListener('click', () => {

            day = li.textContent;

            let picked = currentDate.textContent.split(' ')

            month = picked[0];
            year = picked[1];

            renderCalendar();

            shown.innerHTML = `${day} ${month} ${year}`;
            wrapper.classList.toggle('hide');


        })
    })

}

calendarDiv.addEventListener('click', renderCalendar);

document.addEventListener('click', function (event) {
    let target = event.target;

    if (!calendarDiv.contains(target)) {
        wrapper.classList.add('hide');
    }

})

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


// actual storage and usage of inserted values

const getTitle = () => {
    let thisTitle = titleText.value;
    return {
        title: thisTitle
    }
}

const getDescription = () => {
    let thisDescription = descriptionText.value;
    return {
        description: thisDescription
    }
}

const getDifficulty = () => {
    let difficult = set.textContent;
    if (difficult == "Trivial") {
        left.style.backgroundColor = 'yellow'

    }
    return {
        difficult
    }
}

const getDate = () => {
    let [day, month, year] = shown.textContent.split(' ');
    return {
        day,
        month,
        year
    }
}

const getTags = () => {
    let main = [];
    let tags = [];
    inside.forEach(item => {
        if (item.classList.contains('picker')){
            main.push(item.childNodes[1].textContent)
        }
        if (!item.classList.contains('hide')) {
            tags.push(item.childNodes[1].textContent);
        }
    });
    if (main.length == 0) {
        main = ['General'];
    }
    return {
        tags,
        main
    }

}







choose2.forEach(item => {

    item.addEventListener('click', () => {



        inside.forEach(tag => {


            let word = item.childNodes[1].textContent;
            let insert = tag.childNodes[1].textContent;





            if (word == insert) {
                tag.classList.toggle('hide');
                if (tag.classList.contains('picker')){
                    tag.classList.remove('picker');
                    stop = 0;
                }
                //set2.classList.add('hide');

            }

        })

        let count = 0;
        inside.forEach(tag => {

            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }
        

        inside.forEach(tag => {
            if (stop){}
            else if (!tag.classList.contains('hide') && !tag.classList.contains('set2')) {
                tag.classList.add('picker');
                stop++;
            }

        })
    });


})




closeSvg.forEach(svg => {
    svg.addEventListener('click', () => {
        svg.parentElement.classList.toggle('hide');

        if (svg.parentElement.classList.contains('picker')){
            svg.parentElement.classList.remove('picker');
            stop = 0;
        }

        inside.forEach(tag => {
            if (stop){}
            else if (!tag.classList.contains('hide') && !tag.classList.contains('set2')) {
                tag.classList.add('picker');
                stop++;
            }

        })

        let count = 0;
        inside.forEach(tag => {
            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }
    })



})

inside.forEach(tag => {
    tag.childNodes[2].addEventListener('click', () => {
        tag.parentNode.classList.toggle('hide');

        if (tag.classList.contains("hide")) {
            visible--
        } else {
            visible++
        }


    })

})




tagInput.addEventListener('keydown', function (event) {

    if (event.keyCode === 13) {

        let newDiv = document.createElement('div');

        newDiv.classList.add('inside2');
        newDiv.classList.add('made');

        let insideText = document.createElement('div');
        insideText.classList.add('inside2');
        insideText.textContent = tagInput.value;
        tagInput.value = "";


        let parentDiv = document.createElement('div');
        parentDiv.classList.add('inside');

        let svgElement = document.createElement('img');
        svgElement.src = './Assets/x.svg';

        svgElement.classList.add('special')
        svgElement.style.width = "13px";
        svgElement.style.height = "auto";
        svgElement.style.fill = "red";


        newDiv.appendChild(insideText);
        newDiv.appendChild(svgElement);

        parentDiv.appendChild(newDiv);

        mode2.appendChild(parentDiv);

    }

    let inside = document.querySelectorAll('.inside');
    console.log(inside)
    let count = 0;
        inside.forEach(tag => {
            if (!tag.classList.contains('hide')) {
                count++;
            }
        })

        if (count == 0) {
            set2.classList.remove('hide');
        } else {
            set2.classList.add('hide');
        }
})



setInterval(() => {
    let computedHeight = getComputedStyle(mode2).height;

    let parts = computedHeight.split(/(\d+)/)
    let final = parseInt(parts[1]) + 6;
    final += parts[2];
    document.documentElement.style.setProperty('--div-a-height', final)





})





const allProjects = [];


send.addEventListener('click', addTask);
send2.addEventListener('click', addTask);

let requiredEmpty = true;

function addTask() {
    let newTask = task();

    console.log(newTask)
    if (checkIfMade(allProjects, newTask.main)) {
        allProjects[parseInt(checkIfMade(allProjects, newTask.main))].appendChild(makeDetails(newTask));
    } else {
        allProjects.push(makeProject(newTask));
    }

    projectRender();

    
}

container.addEventListener('click', () => {
    dropdown2.classList.toggle('hide');
    container.classList.toggle('outlinerS');
})

document.addEventListener('click', function (event) {
    let target = event.target;

    requiredEmpty = getTitle().title == "";
    

    if (!front2.contains(target) && !requiredEmpty) {
    console.log(requiredEmpty)
        dropdown2.classList.add('hide');
        container.classList.remove('outlinerS');
    }

})


function projectRender() {
    for (let index = 0; index < allProjects.length; index++) {
        projects.appendChild(allProjects[index]);
    }
}

const task = () => {
    return Object.assign(
        {},
        getTitle(),
        getDescription(),
        getDifficulty(),
        getDate(),
        getTags(),
    )
}

let counter = 0;

const makeProject = (task) => {
    let project = document.createElement('div');
    project.classList.add('project')
    let className = `p${counter}`;
    counter++;
    project.classList.add(className);

    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = task.main[0];
    project.appendChild(title);

    let item = document.createElement('div');
    item.classList.add('item');
    project.appendChild(item);

    let left = document.createElement('div');
    left.classList.add('left');
    item.appendChild(left);

    let right = document.createElement('div');
    right.classList.add('right');
    item.appendChild(right);
    
    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');
    left.appendChild(centerButton);

    // add SVG shit here

    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.textContent = task.title;
    right.appendChild(todo);

    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent = task.description;
    right.appendChild(description);

    let due = document.createElement('div');
    due.classList.add('due');
    due.textContent = `${task.month} `;

    let num = document.createElement('span');
    num.classList.add('num');
    num.textContent = task.day;
    due.appendChild(num);
    right.appendChild(due);

    return project;
}



const makeDetails = (task) => {

    let item = document.createElement('div');
    item.classList.add('item');

    let left = document.createElement('div');
    left.classList.add('left');
    item.appendChild(left);

    let right = document.createElement('div');
    right.classList.add('right');
    item.appendChild(right);
    
    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');
    left.appendChild(centerButton);

    // add SVG shit here

    let todo = document.createElement('div');
    todo.classList.add('todo');
    todo.textContent = task.title;
    right.appendChild(todo);

    let description = document.createElement('div');
    description.classList.add('description');
    description.textContent = task.description;
    right.appendChild(description);

    let due = document.createElement('div');
    due.classList.add('due');
    due.textContent = `${task.month} `;

    let num = document.createElement('span');
    num.classList.add('num');
    num.textContent = task.day;
    due.appendChild(num);
    right.appendChild(due);

    return item;

}

function checkIfMade(projects, projectName) {
    for (let index = 0; index < projects.length; index++) {
        if (projects[index].childNodes[0].textContent == projectName) {
            return index + "";
        }
    }
    return false;
}

/*
let left = document.createElement('div');
    left.classList.add('left');

    let right = document.createElement('div');
    right.classList.add('right');

    let centerButton = document.createElement('div');
    centerButton.classList.add('centerButton');

    let svgElement = document.createElement('img');
    svgElement.src = './Assets/check-bold.svg';

    let todo = document.createElement('div');
    todo.classList.add('todo');
*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLOzs7O0FBSUwsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOzs7QUFHQSxLQUFLOztBQUVMLENBQUM7Ozs7O0FBS0Q7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUEsQ0FBQzs7Ozs7O0FBTUQ7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBmcm9udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJvbnRcIik7XG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bicpO1xuXG5jb25zdCBjaG9vc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvb3NlJyk7XG5jb25zdCBsMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sMScpO1xuY29uc3QgbDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubDInKTtcbmNvbnN0IGwzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwzJyk7XG5jb25zdCBsNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sNCcpO1xuXG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKTtcbmNvbnN0IGNhbGVuZGFyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGVuZGFyRGl2Jyk7XG5jb25zdCB3b3JrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmsnKTtcbmNvbnN0IGV4Y2Vyc2lzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leGNlcnNpZScpO1xuY29uc3QgaGVhbHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWx0aCcpO1xuY29uc3QgdGVhbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbXMnKTtcbmNvbnN0IGNob3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9yZXMnKTtcbmNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY2hvb2wnKTtcbmNvbnN0IGNyZWF0aXZpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRpdml0eScpO1xubGV0IGluc2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZGUnKTtcbmNvbnN0IGNob29zZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvb3NlMicpO1xuY29uc3QgbW9kZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kZTInKTtcbmNvbnN0IHNldDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0MicpO1xuY29uc3QgZnJvbnQyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZyb250MicpO1xubGV0IHZpc2libGUgPSAwO1xuY29uc3QgdGFnSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnSW5wdXQnKTtcbmNvbnN0IGRyb3Bkb3duMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bjInKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKVxuY29uc3QgYWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZCcpO1xuY29uc3Qgc2VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kJyk7XG5jb25zdCBzZW5kMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZW5kMicpO1xuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbCcpO1xuY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbCcpO1xuY29uc3QgY3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZScpO1xuY29uc3QgY2xvc2VTdmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWRlIHN2ZycpO1xuXG5jb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGV0ZXh0Jyk7XG5jb25zdCBkZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb250ZXh0Jyk7XG5jb25zdCBzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0Jyk7XG5jb25zdCBzaG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG93bicpO1xuY29uc3QgaW5zaWRlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnNpZGUyJyk7XG5sZXQgc3RvcCA9IDA7XG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuY29uc3QgbGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0Jyk7XG5cbmFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXG4gICAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJzY2FsZWRcIik7XG4gICAgYWxsLmNsYXNzTGlzdC5hZGQoJ2NvbG9yZWQnKTtcbn0pXG5cbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgIGNyZWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwic2NhbGVkXCIpO1xuICAgIGFsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJyk7XG59KVxuXG5zZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZWRcIik7XG4gICAgYWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbG9yZWQnKTtcbn0pXG5cbnNlbmQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgY3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJzY2FsZWRcIik7XG4gICAgYWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbG9yZWQnKTtcbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICghKGFkZC5jb250YWlucyh0YXJnZXQpIHx8IGNyZWF0ZS5jb250YWlucyh0YXJnZXQpKSkge1xuICAgICAgICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZSgnc2NhbGVkJyk7XG4gICAgICAgIGFsbC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvcmVkJyk7XG4gICAgfVxuXG59KVxuXG5cbmZyb250LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlRHJvcGRvd24pO1xuXG5jaG9vc2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVwbGFjZXIpO1xufSlcblxuXG5mdW5jdGlvbiB0b2dnbGVEcm9wZG93bigpIHtcbiAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgZnJvbnQuY2xhc3NMaXN0LnRvZ2dsZSgnb3V0bGluZXInKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCFmcm9udC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgZnJvbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3V0bGluZXInKTtcbiAgICB9XG5cbn0pXG5cblxuXG5mdW5jdGlvbiByZXBsYWNlcigpIHtcbiAgICBsZXQgY2hvc2VuID0gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICBzZXQuaW5uZXJIVE1MID0gY2hvc2VuLmlubmVySFRNTDtcblxuICAgIGlmIChjaG9zZW4uaW5uZXJIVE1MID09IFwiVHJpdmlhbFwiKSB7XG4gICAgICAgIGwxLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbDIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICBsMy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGw0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2UgaWYgKGNob3Nlbi5pbm5lckhUTUwgPT0gXCJFYXN5XCIpIHtcbiAgICAgICAgbDEuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBsMi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGwzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgbDQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0gZWxzZSBpZiAoY2hvc2VuLmlubmVySFRNTCA9PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgIGwxLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbDIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBsMy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGw0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsMS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIGwyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgbDMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICBsNC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgfVxuXG59XG5cbmxldCBkYXkgPSAwO1xubGV0IG1vbnRoID0gMDtcbmxldCB5ZWFyID0gMDtcblxuXG5jb25zdCBkYXlzVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXlzXCIpLFxuICAgIGN1cnJlbnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWRhdGVcIiksXG4gICAgcHJldk5leHRJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5pY29ucyBzcGFuXCIpO1xuLy8gZ2V0dGluZyBuZXcgZGF0ZSwgY3VycmVudCB5ZWFyIGFuZCBtb250aFxubGV0IGRhdGUgPSBuZXcgRGF0ZSgpLFxuICAgIGN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGN1cnJNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbi8vIHN0b3JpbmcgZnVsbCBuYW1lIG9mIGFsbCBtb250aHMgaW4gYXJyYXlcbmNvbnN0IG1vbnRocyA9IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl07XG5cblxuY29uc3QgcmVuZGVyQ2FsZW5kYXIgPSAoKSA9PiB7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgbGV0IGZpcnN0RGF5b2ZNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDEpLmdldERheSgpLCAvLyBnZXR0aW5nIGZpcnN0IGRheSBvZiBtb250aFxuICAgICAgICBsYXN0RGF0ZW9mTW9udGggPSBuZXcgRGF0ZShjdXJyWWVhciwgY3Vyck1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpLCAvLyBnZXR0aW5nIGxhc3QgZGF0ZSBvZiBtb250aFxuICAgICAgICBsYXN0RGF5b2ZNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIGxhc3REYXRlb2ZNb250aCkuZ2V0RGF5KCksIC8vIGdldHRpbmcgbGFzdCBkYXkgb2YgbW9udGhcbiAgICAgICAgbGFzdERhdGVvZkxhc3RNb250aCA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIDApLmdldERhdGUoKTsgLy8gZ2V0dGluZyBsYXN0IGRhdGUgb2YgcHJldmlvdXMgbW9udGhcbiAgICBsZXQgbGlUYWcgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSBmaXJzdERheW9mTW9udGg7IGkgPiAwOyBpLS0pIHsgLy8gY3JlYXRpbmcgbGkgb2YgcHJldmlvdXMgbW9udGggbGFzdCBkYXlzXG4gICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJpbmFjdGl2ZVwiPiR7bGFzdERhdGVvZkxhc3RNb250aCAtIGkgKyAxfTwvbGk+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbGFzdERhdGVvZk1vbnRoOyBpKyspIHsgLy8gY3JlYXRpbmcgbGkgb2YgYWxsIGRheXMgb2YgY3VycmVudCBtb250aFxuICAgICAgICAvLyBhZGRpbmcgYWN0aXZlIGNsYXNzIHRvIGxpIGlmIHRoZSBjdXJyZW50IGRheSwgbW9udGgsIGFuZCB5ZWFyIG1hdGNoZWRcbiAgICAgICAgbGV0IGlzVG9kYXkgPSBpID09PSBkYXRlLmdldERhdGUoKSAmJiBjdXJyTW9udGggPT09IG5ldyBEYXRlKCkuZ2V0TW9udGgoKVxuICAgICAgICAgICAgJiYgY3VyclllYXIgPT09IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSA/IFwiYWN0aXZlXCIgOiBcIlwiO1xuICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwiJHtpc1RvZGF5fVwiPiR7aX08L2xpPmA7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBsYXN0RGF5b2ZNb250aDsgaSA8IDY7IGkrKykgeyAvLyBjcmVhdGluZyBsaSBvZiBuZXh0IG1vbnRoIGZpcnN0IGRheXNcbiAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cImluYWN0aXZlXCI+JHtpIC0gbGFzdERheW9mTW9udGggKyAxfTwvbGk+YFxuICAgIH1cbiAgICBjdXJyZW50RGF0ZS5pbm5lclRleHQgPSBgJHttb250aHNbY3Vyck1vbnRoXX0gJHtjdXJyWWVhcn1gOyAvLyBwYXNzaW5nIGN1cnJlbnQgbW9uIGFuZCB5ciBhcyBjdXJyZW50RGF0ZSB0ZXh0XG4gICAgZGF5c1RhZy5pbm5lckhUTUwgPSBsaVRhZztcblxuXG5cblxuXG5cbiAgICBsZXQgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGlzdC5mb3JFYWNoKGxpID0+IHtcbiAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRheSA9IGxpLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBsZXQgcGlja2VkID0gY3VycmVudERhdGUudGV4dENvbnRlbnQuc3BsaXQoJyAnKVxuXG4gICAgICAgICAgICBtb250aCA9IHBpY2tlZFswXTtcbiAgICAgICAgICAgIHllYXIgPSBwaWNrZWRbMV07XG5cbiAgICAgICAgICAgIHJlbmRlckNhbGVuZGFyKCk7XG5cbiAgICAgICAgICAgIHNob3duLmlubmVySFRNTCA9IGAke2RheX0gJHttb250aH0gJHt5ZWFyfWA7XG4gICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcblxuXG4gICAgICAgIH0pXG4gICAgfSlcblxufVxuXG5jYWxlbmRhckRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckNhbGVuZGFyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgaWYgKCFjYWxlbmRhckRpdi5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH1cblxufSlcblxucHJldk5leHRJY29uLmZvckVhY2goaWNvbiA9PiB7IC8vIGdldHRpbmcgcHJldiBhbmQgbmV4dCBpY29uc1xuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgLy8gYWRkaW5nIGNsaWNrIGV2ZW50IG9uIGJvdGggaWNvbnNcbiAgICAgICAgLy8gaWYgY2xpY2tlZCBpY29uIGlzIHByZXZpb3VzIGljb24gdGhlbiBkZWNyZW1lbnQgY3VycmVudCBtb250aCBieSAxIGVsc2UgaW5jcmVtZW50IGl0IGJ5IDFcbiAgICAgICAgY3Vyck1vbnRoID0gaWNvbi5pZCA9PT0gXCJwcmV2XCIgPyBjdXJyTW9udGggLSAxIDogY3Vyck1vbnRoICsgMTtcbiAgICAgICAgaWYgKGN1cnJNb250aCA8IDAgfHwgY3Vyck1vbnRoID4gMTEpIHsgLy8gaWYgY3VycmVudCBtb250aCBpcyBsZXNzIHRoYW4gMCBvciBncmVhdGVyIHRoYW4gMTFcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgbmV3IGRhdGUgb2YgY3VycmVudCB5ZWFyICYgbW9udGggYW5kIHBhc3MgaXQgYXMgZGF0ZSB2YWx1ZVxuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJZZWFyLCBjdXJyTW9udGgsIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpKTtcbiAgICAgICAgICAgIGN1cnJZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpOyAvLyB1cGRhdGluZyBjdXJyZW50IHllYXIgd2l0aCBuZXcgZGF0ZSB5ZWFyXG4gICAgICAgICAgICBjdXJyTW9udGggPSBkYXRlLmdldE1vbnRoKCk7IC8vIHVwZGF0aW5nIGN1cnJlbnQgbW9udGggd2l0aCBuZXcgZGF0ZSBtb250aFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7IC8vIHBhc3MgdGhlIGN1cnJlbnQgZGF0ZSBhcyBkYXRlIHZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyQ2FsZW5kYXIoKTsgLy8gY2FsbGluZyByZW5kZXJDYWxlbmRhciBmdW5jdGlvblxuICAgIH0pO1xufSk7XG5cblxuLy8gYWN0dWFsIHN0b3JhZ2UgYW5kIHVzYWdlIG9mIGluc2VydGVkIHZhbHVlc1xuXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcbiAgICBsZXQgdGhpc1RpdGxlID0gdGl0bGVUZXh0LnZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlOiB0aGlzVGl0bGVcbiAgICB9XG59XG5cbmNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIGxldCB0aGlzRGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblRleHQudmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzY3JpcHRpb246IHRoaXNEZXNjcmlwdGlvblxuICAgIH1cbn1cblxuY29uc3QgZ2V0RGlmZmljdWx0eSA9ICgpID0+IHtcbiAgICBsZXQgZGlmZmljdWx0ID0gc2V0LnRleHRDb250ZW50O1xuICAgIGlmIChkaWZmaWN1bHQgPT0gXCJUcml2aWFsXCIpIHtcbiAgICAgICAgbGVmdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAneWVsbG93J1xuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRpZmZpY3VsdFxuICAgIH1cbn1cblxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICBsZXQgW2RheSwgbW9udGgsIHllYXJdID0gc2hvd24udGV4dENvbnRlbnQuc3BsaXQoJyAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXksXG4gICAgICAgIG1vbnRoLFxuICAgICAgICB5ZWFyXG4gICAgfVxufVxuXG5jb25zdCBnZXRUYWdzID0gKCkgPT4ge1xuICAgIGxldCBtYWluID0gW107XG4gICAgbGV0IHRhZ3MgPSBbXTtcbiAgICBpbnNpZGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwaWNrZXInKSl7XG4gICAgICAgICAgICBtYWluLnB1c2goaXRlbS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50KVxuICAgICAgICB9XG4gICAgICAgIGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgdGFncy5wdXNoKGl0ZW0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAobWFpbi5sZW5ndGggPT0gMCkge1xuICAgICAgICBtYWluID0gWydHZW5lcmFsJ107XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHRhZ3MsXG4gICAgICAgIG1haW5cbiAgICB9XG5cbn1cblxuXG5cblxuXG5cblxuY2hvb3NlMi5mb3JFYWNoKGl0ZW0gPT4ge1xuXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuXG5cbiAgICAgICAgaW5zaWRlLmZvckVhY2godGFnID0+IHtcblxuXG4gICAgICAgICAgICBsZXQgd29yZCA9IGl0ZW0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBpbnNlcnQgPSB0YWcuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcblxuXG5cblxuXG4gICAgICAgICAgICBpZiAod29yZCA9PSBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICB0YWcuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGlmICh0YWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaWNrZXInKSl7XG4gICAgICAgICAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QucmVtb3ZlKCdwaWNrZXInKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vc2V0Mi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGluc2lkZS5mb3JFYWNoKHRhZyA9PiB7XG5cbiAgICAgICAgICAgIGlmICghdGFnLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgc2V0Mi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXQyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBpbnNpZGUuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgaWYgKHN0b3Ape31cbiAgICAgICAgICAgIGVsc2UgaWYgKCF0YWcuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykgJiYgIXRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ3NldDInKSkge1xuICAgICAgICAgICAgICAgIHRhZy5jbGFzc0xpc3QuYWRkKCdwaWNrZXInKTtcbiAgICAgICAgICAgICAgICBzdG9wKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9KTtcblxuXG59KVxuXG5cblxuXG5jbG9zZVN2Zy5mb3JFYWNoKHN2ZyA9PiB7XG4gICAgc3ZnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzdmcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG5cbiAgICAgICAgaWYgKHN2Zy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGlja2VyJykpe1xuICAgICAgICAgICAgc3ZnLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGlja2VyJyk7XG4gICAgICAgICAgICBzdG9wID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc2lkZS5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcCl7fVxuICAgICAgICAgICAgZWxzZSBpZiAoIXRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSAmJiAhdGFnLmNsYXNzTGlzdC5jb250YWlucygnc2V0MicpKSB7XG4gICAgICAgICAgICAgICAgdGFnLmNsYXNzTGlzdC5hZGQoJ3BpY2tlcicpO1xuICAgICAgICAgICAgICAgIHN0b3ArKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGluc2lkZS5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG5cbiAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIHNldDIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Mi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cblxufSlcblxuaW5zaWRlLmZvckVhY2godGFnID0+IHtcbiAgICB0YWcuY2hpbGROb2Rlc1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFnLnBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuXG4gICAgICAgIGlmICh0YWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZVwiKSkge1xuICAgICAgICAgICAgdmlzaWJsZS0tXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aXNpYmxlKytcbiAgICAgICAgfVxuXG5cbiAgICB9KVxuXG59KVxuXG5cblxuXG50YWdJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcblxuICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2luc2lkZTInKTtcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ21hZGUnKTtcblxuICAgICAgICBsZXQgaW5zaWRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbnNpZGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2luc2lkZTInKTtcbiAgICAgICAgaW5zaWRlVGV4dC50ZXh0Q29udGVudCA9IHRhZ0lucHV0LnZhbHVlO1xuICAgICAgICB0YWdJbnB1dC52YWx1ZSA9IFwiXCI7XG5cblxuICAgICAgICBsZXQgcGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhcmVudERpdi5jbGFzc0xpc3QuYWRkKCdpbnNpZGUnKTtcblxuICAgICAgICBsZXQgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBzdmdFbGVtZW50LnNyYyA9ICcuL0Fzc2V0cy94LnN2Zyc7XG5cbiAgICAgICAgc3ZnRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzcGVjaWFsJylcbiAgICAgICAgc3ZnRWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMTNweFwiO1xuICAgICAgICBzdmdFbGVtZW50LnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgICAgICBzdmdFbGVtZW50LnN0eWxlLmZpbGwgPSBcInJlZFwiO1xuXG5cbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKGluc2lkZVRleHQpO1xuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG5cbiAgICAgICAgcGFyZW50RGl2LmFwcGVuZENoaWxkKG5ld0Rpdik7XG5cbiAgICAgICAgbW9kZTIuYXBwZW5kQ2hpbGQocGFyZW50RGl2KTtcblxuICAgIH1cblxuICAgIGxldCBpbnNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zaWRlJyk7XG4gICAgY29uc29sZS5sb2coaW5zaWRlKVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGluc2lkZS5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICAgICAgICBpZiAoIXRhZy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIHNldDIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Mi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIH1cbn0pXG5cblxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgbGV0IGNvbXB1dGVkSGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZShtb2RlMikuaGVpZ2h0O1xuXG4gICAgbGV0IHBhcnRzID0gY29tcHV0ZWRIZWlnaHQuc3BsaXQoLyhcXGQrKS8pXG4gICAgbGV0IGZpbmFsID0gcGFyc2VJbnQocGFydHNbMV0pICsgNjtcbiAgICBmaW5hbCArPSBwYXJ0c1syXTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tZGl2LWEtaGVpZ2h0JywgZmluYWwpXG5cblxuXG5cblxufSlcblxuXG5cblxuXG5jb25zdCBhbGxQcm9qZWN0cyA9IFtdO1xuXG5cbnNlbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKTtcbnNlbmQyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGFzayk7XG5cbmxldCByZXF1aXJlZEVtcHR5ID0gdHJ1ZTtcblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgICBsZXQgbmV3VGFzayA9IHRhc2soKTtcblxuICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spXG4gICAgaWYgKGNoZWNrSWZNYWRlKGFsbFByb2plY3RzLCBuZXdUYXNrLm1haW4pKSB7XG4gICAgICAgIGFsbFByb2plY3RzW3BhcnNlSW50KGNoZWNrSWZNYWRlKGFsbFByb2plY3RzLCBuZXdUYXNrLm1haW4pKV0uYXBwZW5kQ2hpbGQobWFrZURldGFpbHMobmV3VGFzaykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsbFByb2plY3RzLnB1c2gobWFrZVByb2plY3QobmV3VGFzaykpO1xuICAgIH1cblxuICAgIHByb2plY3RSZW5kZXIoKTtcblxuICAgIFxufVxuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZHJvcGRvd24yLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnb3V0bGluZXJTJyk7XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICByZXF1aXJlZEVtcHR5ID0gZ2V0VGl0bGUoKS50aXRsZSA9PSBcIlwiO1xuICAgIFxuXG4gICAgaWYgKCFmcm9udDIuY29udGFpbnModGFyZ2V0KSAmJiAhcmVxdWlyZWRFbXB0eSkge1xuICAgIGNvbnNvbGUubG9nKHJlcXVpcmVkRW1wdHkpXG4gICAgICAgIGRyb3Bkb3duMi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdvdXRsaW5lclMnKTtcbiAgICB9XG5cbn0pXG5cblxuZnVuY3Rpb24gcHJvamVjdFJlbmRlcigpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGFsbFByb2plY3RzW2luZGV4XSk7XG4gICAgfVxufVxuXG5jb25zdCB0YXNrID0gKCkgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgZ2V0VGl0bGUoKSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24oKSxcbiAgICAgICAgZ2V0RGlmZmljdWx0eSgpLFxuICAgICAgICBnZXREYXRlKCksXG4gICAgICAgIGdldFRhZ3MoKSxcbiAgICApXG59XG5cbmxldCBjb3VudGVyID0gMDtcblxuY29uc3QgbWFrZVByb2plY3QgPSAodGFzaykgPT4ge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcbiAgICBsZXQgY2xhc3NOYW1lID0gYHAke2NvdW50ZXJ9YDtcbiAgICBjb3VudGVyKys7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay5tYWluWzBdO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgbGV0IGxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGxlZnQpO1xuXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHJpZ2h0KTtcbiAgICBcbiAgICBsZXQgY2VudGVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VudGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NlbnRlckJ1dHRvbicpO1xuICAgIGxlZnQuYXBwZW5kQ2hpbGQoY2VudGVyQnV0dG9uKTtcblxuICAgIC8vIGFkZCBTVkcgc2hpdCBoZXJlXG5cbiAgICBsZXQgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8udGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKHRvZG8pO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZS5jbGFzc0xpc3QuYWRkKCdkdWUnKTtcbiAgICBkdWUudGV4dENvbnRlbnQgPSBgJHt0YXNrLm1vbnRofSBgO1xuXG4gICAgbGV0IG51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBudW0uY2xhc3NMaXN0LmFkZCgnbnVtJyk7XG4gICAgbnVtLnRleHRDb250ZW50ID0gdGFzay5kYXk7XG4gICAgZHVlLmFwcGVuZENoaWxkKG51bSk7XG4gICAgcmlnaHQuYXBwZW5kQ2hpbGQoZHVlKTtcblxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuXG5cblxuY29uc3QgbWFrZURldGFpbHMgPSAodGFzaykgPT4ge1xuXG4gICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgIGxldCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChsZWZ0KTtcblxuICAgIGxldCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgXG4gICAgbGV0IGNlbnRlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbnRlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJCdXR0b24nKTtcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGNlbnRlckJ1dHRvbik7XG5cbiAgICAvLyBhZGQgU1ZHIHNoaXQgaGVyZVxuXG4gICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICB0b2RvLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICByaWdodC5hcHBlbmRDaGlsZCh0b2RvKTtcblxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWUuY2xhc3NMaXN0LmFkZCgnZHVlJyk7XG4gICAgZHVlLnRleHRDb250ZW50ID0gYCR7dGFzay5tb250aH0gYDtcblxuICAgIGxldCBudW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbnVtLmNsYXNzTGlzdC5hZGQoJ251bScpO1xuICAgIG51bS50ZXh0Q29udGVudCA9IHRhc2suZGF5O1xuICAgIGR1ZS5hcHBlbmRDaGlsZChudW0pO1xuICAgIHJpZ2h0LmFwcGVuZENoaWxkKGR1ZSk7XG5cbiAgICByZXR1cm4gaXRlbTtcblxufVxuXG5mdW5jdGlvbiBjaGVja0lmTWFkZShwcm9qZWN0cywgcHJvamVjdE5hbWUpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChwcm9qZWN0c1tpbmRleF0uY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCA9PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICsgXCJcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qXG5sZXQgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnQuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuXG4gICAgbGV0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcblxuICAgIGxldCBjZW50ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZW50ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2VudGVyQnV0dG9uJyk7XG5cbiAgICBsZXQgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN2Z0VsZW1lbnQuc3JjID0gJy4vQXNzZXRzL2NoZWNrLWJvbGQuc3ZnJztcblxuICAgIGxldCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==