/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./source/styling/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./source/styling/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

:root{
--black: black;
--white:white;

}

body{
	background-color: var(--black);
	color: var(--white);

}


header{
border-bottom: 2px solid var(--white);
display: flex;
justify-content: center;
align-items: center;
}

main{
	padding-top:10px;
	gap: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

section:first-of-type{
border: 2px solid var(--white);
width:80vw;
height:80vh;
display: grid;
grid-template: repeat(9, 1fr)/ repeat(9, 1fr);
}

section:first-of-type div[id]{
position: relative;

}
section:first-of-type img{
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;

}

.whitePiece{
background-color: #62838B;
}

.blackPiece{
background-color: #61866E;
}

.indicator{
align-self: center;
justify-self: center;
}

`, "",{"version":3,"sources":["webpack://./source/styling/style.css"],"names":[],"mappings":"AAAA;AACA,UAAU;AACV,SAAS;AACT,sBAAsB;AACtB;;AAEA;AACA,cAAc;AACd,aAAa;;AAEb;;AAEA;CACC,8BAA8B;CAC9B,mBAAmB;;AAEpB;;;AAGA;AACA,qCAAqC;AACrC,aAAa;AACb,uBAAuB;AACvB,mBAAmB;AACnB;;AAEA;CACC,gBAAgB;CAChB,SAAS;CACT,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;AACA,8BAA8B;AAC9B,UAAU;AACV,WAAW;AACX,aAAa;AACb,6CAA6C;AAC7C;;AAEA;AACA,kBAAkB;;AAElB;AACA;AACA,kBAAkB;AAClB,OAAO;AACP,MAAM;AACN,WAAW;AACX,YAAY;;AAEZ;;AAEA;AACA,yBAAyB;AACzB;;AAEA;AACA,yBAAyB;AACzB;;AAEA;AACA,kBAAkB;AAClB,oBAAoB;AACpB","sourcesContent":["*{\npadding: 0;\nmargin: 0;\nbox-sizing: border-box;\n}\n\n:root{\n--black: black;\n--white:white;\n\n}\n\nbody{\n\tbackground-color: var(--black);\n\tcolor: var(--white);\n\n}\n\n\nheader{\nborder-bottom: 2px solid var(--white);\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n}\n\nmain{\n\tpadding-top:10px;\n\tgap: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\nsection:first-of-type{\nborder: 2px solid var(--white);\nwidth:80vw;\nheight:80vh;\ndisplay: grid;\ngrid-template: repeat(9, 1fr)/ repeat(9, 1fr);\n}\n\nsection:first-of-type div[id]{\nposition: relative;\n\n}\nsection:first-of-type img{\nposition: absolute;\nleft: 0;\ntop: 0;\nwidth: 100%;\nheight: 100%;\n\n}\n\n.whitePiece{\nbackground-color: #62838B;\n}\n\n.blackPiece{\nbackground-color: #61866E;\n}\n\n.indicator{\nalign-self: center;\njustify-self: center;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./source/styling/style.css":
/*!**********************************!*\
  !*** ./source/styling/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./source/styling/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ }),

/***/ "./source/funcionality/playerPieces.js":
/*!*********************************************!*\
  !*** ./source/funcionality/playerPieces.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ playerPiece)
/* harmony export */ });



class playerPiece{
constructor(yPosition, xPosition ,order ){
this.xPosition = xPosition;
this.yPosition = yPosition;
this.order = order;
}

getPositionNameForGameBoardArray(){
let y = (this.yPosition -1) * 4;
let x = this.xPosition;
return y + x;

}

getPositionNameForId(){
switch(this.yPosition){
	case 1:
		return `h${this.xPosition}`;
	case 2:
		return `g${this.xPosition}`;
	case 3:
		return `f${this.xPosition}`;
	case 4:
		return `e${this.xPosition}`;
	case 5:
		return `d${this.xPosition}`;
	case 6:
		return `c${this.xPosition}`;
	case 7:
		return `b${this.xPosition}`;
	case 8:
		return `a${this.xPosition}`;
}



}


moveDiagonallyToLeftToKill(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition - 2;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition - 2;
displayPieces();
}

}  




moveDiagonallyToLeft(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition - 1;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition - 1;
displayPieces();
}

}  


moveDiagonallyToLeftToKill(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition + 2;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition + 2;
displayPieces();
}

}  




moveDiagonallyToRight(){
if(this.order == 'one'){
this.yPosition = this.yPosition + 1;
this.xPosition = this.xPosition + 1;
displayPieces();
}


else if(this.order == 'two'){

this.yPosition = this.yPosition - 1;
this.xPosition = this.xPosition + 1;
displayPieces();
}

}  

}







/***/ }),

/***/ "./source/img/playerOne.png":
/*!**********************************!*\
  !*** ./source/img/playerOne.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/playerOne.png";

/***/ }),

/***/ "./source/img/playerOneKing.png":
/*!**************************************!*\
  !*** ./source/img/playerOneKing.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/playerOneKing.png";

/***/ }),

/***/ "./source/img/playerTwo.png":
/*!**********************************!*\
  !*** ./source/img/playerTwo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/playerTwo.png";

/***/ }),

/***/ "./source/img/playerTwoKing.png":
/*!**************************************!*\
  !*** ./source/img/playerTwoKing.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/playerTwoKing.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!************************!*\
  !*** ./source/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styling_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling/style.css */ "./source/styling/style.css");
/* harmony import */ var _img_playerOne_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/playerOne.png */ "./source/img/playerOne.png");
/* harmony import */ var _img_playerTwo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/playerTwo.png */ "./source/img/playerTwo.png");
/* harmony import */ var _img_playerOneKing_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/playerOneKing.png */ "./source/img/playerOneKing.png");
/* harmony import */ var _img_playerTwoKing_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/playerTwoKing.png */ "./source/img/playerTwoKing.png");
/* harmony import */ var _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./funcionality/playerPieces.js */ "./source/funcionality/playerPieces.js");










let mode = 'selectPlayer';



 let playerOne = {
	nameForImage: _img_playerOne_png__WEBPACK_IMPORTED_MODULE_1__,
	nameForKingImage: _img_playerOneKing_png__WEBPACK_IMPORTED_MODULE_3__,
	pieces: [new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](1,1, 'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](1,3, 'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](1,5, 'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](1,7, 'one'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](2,2, 'one'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](2,4,'one'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](2,6,'one'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](2,8,'one'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](3,1,'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](3,3,'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](3,5,'one'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](3,7,'one')]
}


let playerTwo = {
	nameForImage: _img_playerTwo_png__WEBPACK_IMPORTED_MODULE_2__,
	nameForKingImage: _img_playerTwoKing_png__WEBPACK_IMPORTED_MODULE_4__,
	pieces: [new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](8,2,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](8,4,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](8,6,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](8,8,'two'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](7,1,'two'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](7,3,'two'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](7,5,'two'), new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](7,7,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](6,2,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](6,4,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](6,6,'two'),new _funcionality_playerPieces_js__WEBPACK_IMPORTED_MODULE_5__["default"](6,8,'two')]
}





function pushToGameboard(){
for(let piece of playerOne.pieces){
for(let i = 0 ;32 > i;i++){
if(piece.getPositionNameForGameBoardArray() == i){
gameBoard[i] = piece;

}

}

}

for(let piece of playerTwo.pieces){

for(let i =0;32 >i;i++){
if(piece.getPositionNameForGameBoardArray() == i){
gameBoard[i] = piece;
}

}

}

}


let gameBoard = [];
pushToGameboard();

function displayPieces(){
removeImgFromDiv();

let playerPiece;
updatePlayer(playerOne);
updatePlayer(playerTwo);


}



function removeImgFromDiv() {
let gameBoardImages = document.querySelectorAll(`#gameBoard img`)
for(let gameBoardImage of gameBoardImages){
gameBoardImage.parentNode.removeChild(gameBoardImage);
}
}

function  updatePlayer(player){

for(let i = 0;player.pieces.length > i; i++){
let img = document.createElement('img');
img.src = player.nameForImage;
img.id = `${player.pieces[i].getPositionNameForId()}`;
img.addEventListener('click', selectMovement);
document.querySelector(`#${player.pieces[i].getPositionNameForId()}`).appendChild(img);
}
}



displayPieces();



function selectMovement(event){

if(mode = 'selectPlayer'){
let currentPiece = returnPiece(event);
mode = 'movePlayer';
let spots = document.querySelectorAll(' gameBoard blackPiece ');
}
}


function returnPiece(event){
for(let playerOnePiece of playerOne.pieces){
if(playerOnePiece.getPositionNameForId() == event.target.id)
return playerOnePiece;
}


for(let playerTwoPiece of playerTwo.pieces){
if(playerTwoPiece.getPositionNameForId() == event.target.id)
return playerTwoPiece;
}

}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCLHFFQUFXLGtCQUFrQixxRUFBVyxpQkFBaUIscUVBQVcsaUJBQWlCLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVcsZ0JBQWdCLHFFQUFXLGlCQUFpQixxRUFBVyxpQkFBaUIscUVBQVcsaUJBQWlCLHFFQUFXO0FBQzdVOzs7QUFHQTtBQUNBLGVBQWUsK0NBQVk7QUFDM0IsbUJBQW1CLG1EQUFnQjtBQUNuQyxjQUFjLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVcsZ0JBQWdCLHFFQUFXLGlCQUFpQixxRUFBVyxpQkFBaUIscUVBQVcsaUJBQWlCLHFFQUFXLGlCQUFpQixxRUFBVyxnQkFBZ0IscUVBQVcsZ0JBQWdCLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVc7QUFDdFU7Ozs7OztBQU1BO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFjLDBCQUEwQjtBQUN4QztBQUNBO0FBQ0EsWUFBWSx3Q0FBd0M7QUFDcEQ7QUFDQSwyQkFBMkIsd0NBQXdDO0FBQ25FO0FBQ0E7Ozs7QUFJQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja2Vycy8uL3NvdXJjZS9zdHlsaW5nL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL3NvdXJjZS9zdHlsaW5nL3N0eWxlLmNzcz9kYTg1Iiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zb3VyY2UvZnVuY2lvbmFsaXR5L3BsYXllclBpZWNlcy5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoZWNrZXJzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NoZWNrZXJzLy4vc291cmNlL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG5wYWRkaW5nOiAwO1xubWFyZ2luOiAwO1xuYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3R7XG4tLWJsYWNrOiBibGFjaztcbi0td2hpdGU6d2hpdGU7XG5cbn1cblxuYm9keXtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuXHRjb2xvcjogdmFyKC0td2hpdGUpO1xuXG59XG5cblxuaGVhZGVye1xuYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1haW57XG5cdHBhZGRpbmctdG9wOjEwcHg7XG5cdGdhcDogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZXtcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcbndpZHRoOjgwdnc7XG5oZWlnaHQ6ODB2aDtcbmRpc3BsYXk6IGdyaWQ7XG5ncmlkLXRlbXBsYXRlOiByZXBlYXQoOSwgMWZyKS8gcmVwZWF0KDksIDFmcik7XG59XG5cbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZSBkaXZbaWRde1xucG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUgaW1ne1xucG9zaXRpb246IGFic29sdXRlO1xubGVmdDogMDtcbnRvcDogMDtcbndpZHRoOiAxMDAlO1xuaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi53aGl0ZVBpZWNle1xuYmFja2dyb3VuZC1jb2xvcjogIzYyODM4Qjtcbn1cblxuLmJsYWNrUGllY2V7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNjE4NjZFO1xufVxuXG4uaW5kaWNhdG9ye1xuYWxpZ24tc2VsZjogY2VudGVyO1xuanVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc291cmNlL3N0eWxpbmcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0EsVUFBVTtBQUNWLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsYUFBYTs7QUFFYjs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixtQkFBbUI7O0FBRXBCOzs7QUFHQTtBQUNBLHFDQUFxQztBQUNyQyxhQUFhO0FBQ2IsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLFVBQVU7QUFDVixXQUFXO0FBQ1gsYUFBYTtBQUNiLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1AsTUFBTTtBQUNOLFdBQVc7QUFDWCxZQUFZOztBQUVaOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbnBhZGRpbmc6IDA7XFxubWFyZ2luOiAwO1xcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290e1xcbi0tYmxhY2s6IGJsYWNrO1xcbi0td2hpdGU6d2hpdGU7XFxuXFxufVxcblxcbmJvZHl7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFxufVxcblxcblxcbmhlYWRlcntcXG5ib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxubWFpbntcXG5cXHRwYWRkaW5nLXRvcDoxMHB4O1xcblxcdGdhcDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuc2VjdGlvbjpmaXJzdC1vZi10eXBle1xcbmJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG53aWR0aDo4MHZ3O1xcbmhlaWdodDo4MHZoO1xcbmRpc3BsYXk6IGdyaWQ7XFxuZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDksIDFmcikvIHJlcGVhdCg5LCAxZnIpO1xcbn1cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGUgZGl2W2lkXXtcXG5wb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxufVxcbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZSBpbWd7XFxucG9zaXRpb246IGFic29sdXRlO1xcbmxlZnQ6IDA7XFxudG9wOiAwO1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLndoaXRlUGllY2V7XFxuYmFja2dyb3VuZC1jb2xvcjogIzYyODM4QjtcXG59XFxuXFxuLmJsYWNrUGllY2V7XFxuYmFja2dyb3VuZC1jb2xvcjogIzYxODY2RTtcXG59XFxuXFxuLmluZGljYXRvcntcXG5hbGlnbi1zZWxmOiBjZW50ZXI7XFxuanVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwbGF5ZXJQaWVjZXtcbmNvbnN0cnVjdG9yKHlQb3NpdGlvbiwgeFBvc2l0aW9uICxvcmRlciApe1xudGhpcy54UG9zaXRpb24gPSB4UG9zaXRpb247XG50aGlzLnlQb3NpdGlvbiA9IHlQb3NpdGlvbjtcbnRoaXMub3JkZXIgPSBvcmRlcjtcbn1cblxuZ2V0UG9zaXRpb25OYW1lRm9yR2FtZUJvYXJkQXJyYXkoKXtcbmxldCB5ID0gKHRoaXMueVBvc2l0aW9uIC0xKSAqIDQ7XG5sZXQgeCA9IHRoaXMueFBvc2l0aW9uO1xucmV0dXJuIHkgKyB4O1xuXG59XG5cbmdldFBvc2l0aW9uTmFtZUZvcklkKCl7XG5zd2l0Y2godGhpcy55UG9zaXRpb24pe1xuXHRjYXNlIDE6XG5cdFx0cmV0dXJuIGBoJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDI6XG5cdFx0cmV0dXJuIGBnJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDM6XG5cdFx0cmV0dXJuIGBmJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDQ6XG5cdFx0cmV0dXJuIGBlJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDU6XG5cdFx0cmV0dXJuIGBkJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDY6XG5cdFx0cmV0dXJuIGBjJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDc6XG5cdFx0cmV0dXJuIGBiJHt0aGlzLnhQb3NpdGlvbn1gO1xuXHRjYXNlIDg6XG5cdFx0cmV0dXJuIGBhJHt0aGlzLnhQb3NpdGlvbn1gO1xufVxuXG5cblxufVxuXG5cbm1vdmVEaWFnb25hbGx5VG9MZWZ0VG9LaWxsKCl7XG5pZih0aGlzLm9yZGVyID09ICdvbmUnKXtcbnRoaXMueVBvc2l0aW9uID0gdGhpcy55UG9zaXRpb24gKyAxO1xudGhpcy54UG9zaXRpb24gPSB0aGlzLnhQb3NpdGlvbiAtIDI7XG5kaXNwbGF5UGllY2VzKCk7XG59XG5cblxuZWxzZSBpZih0aGlzLm9yZGVyID09ICd0d28nKXtcblxudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiAtIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uIC0gMjtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxufSAgXG5cblxuXG5cbm1vdmVEaWFnb25hbGx5VG9MZWZ0KCl7XG5pZih0aGlzLm9yZGVyID09ICdvbmUnKXtcbnRoaXMueVBvc2l0aW9uID0gdGhpcy55UG9zaXRpb24gKyAxO1xudGhpcy54UG9zaXRpb24gPSB0aGlzLnhQb3NpdGlvbiAtIDE7XG5kaXNwbGF5UGllY2VzKCk7XG59XG5cblxuZWxzZSBpZih0aGlzLm9yZGVyID09ICd0d28nKXtcblxudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiAtIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uIC0gMTtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxufSAgXG5cblxubW92ZURpYWdvbmFsbHlUb0xlZnRUb0tpbGwoKXtcbmlmKHRoaXMub3JkZXIgPT0gJ29uZScpe1xudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiArIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uICsgMjtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxuXG5lbHNlIGlmKHRoaXMub3JkZXIgPT0gJ3R3bycpe1xuXG50aGlzLnlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uIC0gMTtcbnRoaXMueFBvc2l0aW9uID0gdGhpcy54UG9zaXRpb24gKyAyO1xuZGlzcGxheVBpZWNlcygpO1xufVxuXG59ICBcblxuXG5cblxubW92ZURpYWdvbmFsbHlUb1JpZ2h0KCl7XG5pZih0aGlzLm9yZGVyID09ICdvbmUnKXtcbnRoaXMueVBvc2l0aW9uID0gdGhpcy55UG9zaXRpb24gKyAxO1xudGhpcy54UG9zaXRpb24gPSB0aGlzLnhQb3NpdGlvbiArIDE7XG5kaXNwbGF5UGllY2VzKCk7XG59XG5cblxuZWxzZSBpZih0aGlzLm9yZGVyID09ICd0d28nKXtcblxudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiAtIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uICsgMTtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxufSAgXG5cbn1cblxuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsaW5nL3N0eWxlLmNzcydcbmltcG9ydCBwbGF5ZXJPbmVJbWcgZnJvbSAnLi9pbWcvcGxheWVyT25lLnBuZydcbmltcG9ydCBwbGF5ZXJUd29JbWcgZnJvbSAnLi9pbWcvcGxheWVyVHdvLnBuZydcbmltcG9ydCBwbGF5ZXJPbmVLaW5nSW1nIGZyb20gJy4vaW1nL3BsYXllck9uZUtpbmcucG5nJ1xuaW1wb3J0IHBsYXllclR3b0tpbmdJbWcgZnJvbSAnLi9pbWcvcGxheWVyVHdvS2luZy5wbmcnXG5cbmltcG9ydCBwbGF5ZXJQaWVjZSBmcm9tICcuL2Z1bmNpb25hbGl0eS9wbGF5ZXJQaWVjZXMuanMnXG5cblxuXG5sZXQgbW9kZSA9ICdzZWxlY3RQbGF5ZXInO1xuXG5cblxuIGxldCBwbGF5ZXJPbmUgPSB7XG5cdG5hbWVGb3JJbWFnZTogcGxheWVyT25lSW1nLFxuXHRuYW1lRm9yS2luZ0ltYWdlOiBwbGF5ZXJPbmVLaW5nSW1nLFxuXHRwaWVjZXM6IFtuZXcgcGxheWVyUGllY2UoMSwxLCAnb25lJyksIG5ldyBwbGF5ZXJQaWVjZSgxLDMsICdvbmUnKSwgbmV3IHBsYXllclBpZWNlKDEsNSwgJ29uZScpLCBuZXcgcGxheWVyUGllY2UoMSw3LCAnb25lJyksbmV3IHBsYXllclBpZWNlKDIsMiwgJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDQsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDYsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDgsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgzLDEsJ29uZScpLCBuZXcgcGxheWVyUGllY2UoMywzLCdvbmUnKSwgbmV3IHBsYXllclBpZWNlKDMsNSwnb25lJyksIG5ldyBwbGF5ZXJQaWVjZSgzLDcsJ29uZScpXVxufVxuXG5cbmxldCBwbGF5ZXJUd28gPSB7XG5cdG5hbWVGb3JJbWFnZTogcGxheWVyVHdvSW1nLFxuXHRuYW1lRm9yS2luZ0ltYWdlOiBwbGF5ZXJUd29LaW5nSW1nLFxuXHRwaWVjZXM6IFtuZXcgcGxheWVyUGllY2UoOCwyLCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw0LCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw2LCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw4LCd0d28nKSwgbmV3IHBsYXllclBpZWNlKDcsMSwndHdvJyksIG5ldyBwbGF5ZXJQaWVjZSg3LDMsJ3R3bycpLCBuZXcgcGxheWVyUGllY2UoNyw1LCd0d28nKSwgbmV3IHBsYXllclBpZWNlKDcsNywndHdvJyksbmV3IHBsYXllclBpZWNlKDYsMiwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsNCwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsNiwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsOCwndHdvJyldXG59XG5cblxuXG5cblxuZnVuY3Rpb24gcHVzaFRvR2FtZWJvYXJkKCl7XG5mb3IobGV0IHBpZWNlIG9mIHBsYXllck9uZS5waWVjZXMpe1xuZm9yKGxldCBpID0gMCA7MzIgPiBpO2krKyl7XG5pZihwaWVjZS5nZXRQb3NpdGlvbk5hbWVGb3JHYW1lQm9hcmRBcnJheSgpID09IGkpe1xuZ2FtZUJvYXJkW2ldID0gcGllY2U7XG5cbn1cblxufVxuXG59XG5cbmZvcihsZXQgcGllY2Ugb2YgcGxheWVyVHdvLnBpZWNlcyl7XG5cbmZvcihsZXQgaSA9MDszMiA+aTtpKyspe1xuaWYocGllY2UuZ2V0UG9zaXRpb25OYW1lRm9yR2FtZUJvYXJkQXJyYXkoKSA9PSBpKXtcbmdhbWVCb2FyZFtpXSA9IHBpZWNlO1xufVxuXG59XG5cbn1cblxufVxuXG5cbmxldCBnYW1lQm9hcmQgPSBbXTtcbnB1c2hUb0dhbWVib2FyZCgpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UGllY2VzKCl7XG5yZW1vdmVJbWdGcm9tRGl2KCk7XG5cbmxldCBwbGF5ZXJQaWVjZTtcbnVwZGF0ZVBsYXllcihwbGF5ZXJPbmUpO1xudXBkYXRlUGxheWVyKHBsYXllclR3byk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlSW1nRnJvbURpdigpIHtcbmxldCBnYW1lQm9hcmRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjZ2FtZUJvYXJkIGltZ2ApXG5mb3IobGV0IGdhbWVCb2FyZEltYWdlIG9mIGdhbWVCb2FyZEltYWdlcyl7XG5nYW1lQm9hcmRJbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdhbWVCb2FyZEltYWdlKTtcbn1cbn1cblxuZnVuY3Rpb24gIHVwZGF0ZVBsYXllcihwbGF5ZXIpe1xuXG5mb3IobGV0IGkgPSAwO3BsYXllci5waWVjZXMubGVuZ3RoID4gaTsgaSsrKXtcbmxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZy5zcmMgPSBwbGF5ZXIubmFtZUZvckltYWdlO1xuaW1nLmlkID0gYCR7cGxheWVyLnBpZWNlc1tpXS5nZXRQb3NpdGlvbk5hbWVGb3JJZCgpfWA7XG5pbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RNb3ZlbWVudCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIucGllY2VzW2ldLmdldFBvc2l0aW9uTmFtZUZvcklkKCl9YCkuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cbn1cblxuXG5cbmRpc3BsYXlQaWVjZXMoKTtcblxuXG5cbmZ1bmN0aW9uIHNlbGVjdE1vdmVtZW50KGV2ZW50KXtcblxuaWYobW9kZSA9ICdzZWxlY3RQbGF5ZXInKXtcbmxldCBjdXJyZW50UGllY2UgPSByZXR1cm5QaWVjZShldmVudCk7XG5tb2RlID0gJ21vdmVQbGF5ZXInO1xubGV0IHNwb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIGdhbWVCb2FyZCBibGFja1BpZWNlICcpO1xufVxufVxuXG5cbmZ1bmN0aW9uIHJldHVyblBpZWNlKGV2ZW50KXtcbmZvcihsZXQgcGxheWVyT25lUGllY2Ugb2YgcGxheWVyT25lLnBpZWNlcyl7XG5pZihwbGF5ZXJPbmVQaWVjZS5nZXRQb3NpdGlvbk5hbWVGb3JJZCgpID09IGV2ZW50LnRhcmdldC5pZClcbnJldHVybiBwbGF5ZXJPbmVQaWVjZTtcbn1cblxuXG5mb3IobGV0IHBsYXllclR3b1BpZWNlIG9mIHBsYXllclR3by5waWVjZXMpe1xuaWYocGxheWVyVHdvUGllY2UuZ2V0UG9zaXRpb25OYW1lRm9ySWQoKSA9PSBldmVudC50YXJnZXQuaWQpXG5yZXR1cm4gcGxheWVyVHdvUGllY2U7XG59XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==