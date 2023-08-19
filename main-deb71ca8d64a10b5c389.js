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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0IscUVBQVcsa0JBQWtCLHFFQUFXLGlCQUFpQixxRUFBVyxpQkFBaUIscUVBQVcsZ0JBQWdCLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVcsaUJBQWlCLHFFQUFXLGlCQUFpQixxRUFBVyxpQkFBaUIscUVBQVc7QUFDN1U7OztBQUdBO0FBQ0EsZUFBZSwrQ0FBWTtBQUMzQixtQkFBbUIsbURBQWdCO0FBQ25DLGNBQWMscUVBQVcsZ0JBQWdCLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVcsaUJBQWlCLHFFQUFXLGlCQUFpQixxRUFBVyxpQkFBaUIscUVBQVcsaUJBQWlCLHFFQUFXLGdCQUFnQixxRUFBVyxnQkFBZ0IscUVBQVcsZ0JBQWdCLHFFQUFXLGdCQUFnQixxRUFBVztBQUN0VTs7Ozs7O0FBTUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGNBQWMsMEJBQTBCO0FBQ3hDO0FBQ0E7QUFDQSxZQUFZLHdDQUF3QztBQUNwRDtBQUNBLDJCQUEyQix3Q0FBd0M7QUFDbkU7QUFDQTs7OztBQUlBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWNrZXJzLy4vc291cmNlL3N0eWxpbmcvc3R5bGUuY3NzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vc291cmNlL3N0eWxpbmcvc3R5bGUuY3NzP2RhODUiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NoZWNrZXJzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaGVja2Vycy8uL3NvdXJjZS9mdW5jaW9uYWxpdHkvcGxheWVyUGllY2VzLmpzIiwid2VicGFjazovL2NoZWNrZXJzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZWNrZXJzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NoZWNrZXJzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NoZWNrZXJzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jaGVja2Vycy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2hlY2tlcnMvLi9zb3VyY2UvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbnBhZGRpbmc6IDA7XG5tYXJnaW46IDA7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdHtcbi0tYmxhY2s6IGJsYWNrO1xuLS13aGl0ZTp3aGl0ZTtcblxufVxuXG5ib2R5e1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XG5cdGNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbn1cblxuXG5oZWFkZXJ7XG5ib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWFpbntcblx0cGFkZGluZy10b3A6MTBweDtcblx0Z2FwOiAxMHB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc2VjdGlvbjpmaXJzdC1vZi10eXBle1xuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xud2lkdGg6ODB2dztcbmhlaWdodDo4MHZoO1xuZGlzcGxheTogZ3JpZDtcbmdyaWQtdGVtcGxhdGU6IHJlcGVhdCg5LCAxZnIpLyByZXBlYXQoOSwgMWZyKTtcbn1cblxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIGRpdltpZF17XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZSBpbWd7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5sZWZ0OiAwO1xudG9wOiAwO1xud2lkdGg6IDEwMCU7XG5oZWlnaHQ6IDEwMCU7XG5cbn1cblxuLndoaXRlUGllY2V7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjNjI4MzhCO1xufVxuXG4uYmxhY2tQaWVjZXtcbmJhY2tncm91bmQtY29sb3I6ICM2MTg2NkU7XG59XG5cbi5pbmRpY2F0b3J7XG5hbGlnbi1zZWxmOiBjZW50ZXI7XG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zb3VyY2Uvc3R5bGluZy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7QUFDQSxVQUFVO0FBQ1YsU0FBUztBQUNULHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxhQUFhOztBQUViOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLG1CQUFtQjs7QUFFcEI7OztBQUdBO0FBQ0EscUNBQXFDO0FBQ3JDLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsbUJBQW1CO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFNBQVM7Q0FDVCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWLFdBQVc7QUFDWCxhQUFhO0FBQ2IsNkNBQTZDO0FBQzdDOztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLE9BQU87QUFDUCxNQUFNO0FBQ04sV0FBVztBQUNYLFlBQVk7O0FBRVo7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxucGFkZGluZzogMDtcXG5tYXJnaW46IDA7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3R7XFxuLS1ibGFjazogYmxhY2s7XFxuLS13aGl0ZTp3aGl0ZTtcXG5cXG59XFxuXFxuYm9keXtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXG59XFxuXFxuXFxuaGVhZGVye1xcbmJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5tYWlue1xcblxcdHBhZGRpbmctdG9wOjEwcHg7XFxuXFx0Z2FwOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5zZWN0aW9uOmZpcnN0LW9mLXR5cGV7XFxuYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUpO1xcbndpZHRoOjgwdnc7XFxuaGVpZ2h0Ojgwdmg7XFxuZGlzcGxheTogZ3JpZDtcXG5ncmlkLXRlbXBsYXRlOiByZXBlYXQoOSwgMWZyKS8gcmVwZWF0KDksIDFmcik7XFxufVxcblxcbnNlY3Rpb246Zmlyc3Qtb2YtdHlwZSBkaXZbaWRde1xcbnBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG59XFxuc2VjdGlvbjpmaXJzdC1vZi10eXBlIGltZ3tcXG5wb3NpdGlvbjogYWJzb2x1dGU7XFxubGVmdDogMDtcXG50b3A6IDA7XFxud2lkdGg6IDEwMCU7XFxuaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ud2hpdGVQaWVjZXtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNjI4MzhCO1xcbn1cXG5cXG4uYmxhY2tQaWVjZXtcXG5iYWNrZ3JvdW5kLWNvbG9yOiAjNjE4NjZFO1xcbn1cXG5cXG4uaW5kaWNhdG9ye1xcbmFsaWduLXNlbGY6IGNlbnRlcjtcXG5qdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHBsYXllclBpZWNle1xuY29uc3RydWN0b3IoeVBvc2l0aW9uLCB4UG9zaXRpb24gLG9yZGVyICl7XG50aGlzLnhQb3NpdGlvbiA9IHhQb3NpdGlvbjtcbnRoaXMueVBvc2l0aW9uID0geVBvc2l0aW9uO1xudGhpcy5vcmRlciA9IG9yZGVyO1xufVxuXG5nZXRQb3NpdGlvbk5hbWVGb3JHYW1lQm9hcmRBcnJheSgpe1xubGV0IHkgPSAodGhpcy55UG9zaXRpb24gLTEpICogNDtcbmxldCB4ID0gdGhpcy54UG9zaXRpb247XG5yZXR1cm4geSArIHg7XG5cbn1cblxuZ2V0UG9zaXRpb25OYW1lRm9ySWQoKXtcbnN3aXRjaCh0aGlzLnlQb3NpdGlvbil7XG5cdGNhc2UgMTpcblx0XHRyZXR1cm4gYGgke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgMjpcblx0XHRyZXR1cm4gYGcke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgMzpcblx0XHRyZXR1cm4gYGYke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgNDpcblx0XHRyZXR1cm4gYGUke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgNTpcblx0XHRyZXR1cm4gYGQke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgNjpcblx0XHRyZXR1cm4gYGMke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgNzpcblx0XHRyZXR1cm4gYGIke3RoaXMueFBvc2l0aW9ufWA7XG5cdGNhc2UgODpcblx0XHRyZXR1cm4gYGEke3RoaXMueFBvc2l0aW9ufWA7XG59XG5cblxuXG59XG5cblxubW92ZURpYWdvbmFsbHlUb0xlZnRUb0tpbGwoKXtcbmlmKHRoaXMub3JkZXIgPT0gJ29uZScpe1xudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiArIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uIC0gMjtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxuXG5lbHNlIGlmKHRoaXMub3JkZXIgPT0gJ3R3bycpe1xuXG50aGlzLnlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uIC0gMTtcbnRoaXMueFBvc2l0aW9uID0gdGhpcy54UG9zaXRpb24gLSAyO1xuZGlzcGxheVBpZWNlcygpO1xufVxuXG59ICBcblxuXG5cblxubW92ZURpYWdvbmFsbHlUb0xlZnQoKXtcbmlmKHRoaXMub3JkZXIgPT0gJ29uZScpe1xudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiArIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uIC0gMTtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxuXG5lbHNlIGlmKHRoaXMub3JkZXIgPT0gJ3R3bycpe1xuXG50aGlzLnlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uIC0gMTtcbnRoaXMueFBvc2l0aW9uID0gdGhpcy54UG9zaXRpb24gLSAxO1xuZGlzcGxheVBpZWNlcygpO1xufVxuXG59ICBcblxuXG5tb3ZlRGlhZ29uYWxseVRvTGVmdFRvS2lsbCgpe1xuaWYodGhpcy5vcmRlciA9PSAnb25lJyl7XG50aGlzLnlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uICsgMTtcbnRoaXMueFBvc2l0aW9uID0gdGhpcy54UG9zaXRpb24gKyAyO1xuZGlzcGxheVBpZWNlcygpO1xufVxuXG5cbmVsc2UgaWYodGhpcy5vcmRlciA9PSAndHdvJyl7XG5cbnRoaXMueVBvc2l0aW9uID0gdGhpcy55UG9zaXRpb24gLSAxO1xudGhpcy54UG9zaXRpb24gPSB0aGlzLnhQb3NpdGlvbiArIDI7XG5kaXNwbGF5UGllY2VzKCk7XG59XG5cbn0gIFxuXG5cblxuXG5tb3ZlRGlhZ29uYWxseVRvUmlnaHQoKXtcbmlmKHRoaXMub3JkZXIgPT0gJ29uZScpe1xudGhpcy55UG9zaXRpb24gPSB0aGlzLnlQb3NpdGlvbiArIDE7XG50aGlzLnhQb3NpdGlvbiA9IHRoaXMueFBvc2l0aW9uICsgMTtcbmRpc3BsYXlQaWVjZXMoKTtcbn1cblxuXG5lbHNlIGlmKHRoaXMub3JkZXIgPT0gJ3R3bycpe1xuXG50aGlzLnlQb3NpdGlvbiA9IHRoaXMueVBvc2l0aW9uIC0gMTtcbnRoaXMueFBvc2l0aW9uID0gdGhpcy54UG9zaXRpb24gKyAxO1xuZGlzcGxheVBpZWNlcygpO1xufVxuXG59ICBcblxufVxuXG5cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxpbmcvc3R5bGUuY3NzJ1xuaW1wb3J0IHBsYXllck9uZUltZyBmcm9tICcuL2ltZy9wbGF5ZXJPbmUucG5nJ1xuaW1wb3J0IHBsYXllclR3b0ltZyBmcm9tICcuL2ltZy9wbGF5ZXJUd28ucG5nJ1xuaW1wb3J0IHBsYXllck9uZUtpbmdJbWcgZnJvbSAnLi9pbWcvcGxheWVyT25lS2luZy5wbmcnXG5pbXBvcnQgcGxheWVyVHdvS2luZ0ltZyBmcm9tICcuL2ltZy9wbGF5ZXJUd29LaW5nLnBuZydcblxuaW1wb3J0IHBsYXllclBpZWNlIGZyb20gJy4vZnVuY2lvbmFsaXR5L3BsYXllclBpZWNlcy5qcydcblxuXG5cbmxldCBtb2RlID0gJ3NlbGVjdFBsYXllcic7XG5cblxuIGxldCBwbGF5ZXJPbmUgPSB7XG5cdG5hbWVGb3JJbWFnZTogcGxheWVyT25lSW1nLFxuXHRuYW1lRm9yS2luZ0ltYWdlOiBwbGF5ZXJPbmVLaW5nSW1nLFxuXHRwaWVjZXM6IFtuZXcgcGxheWVyUGllY2UoMSwxLCAnb25lJyksIG5ldyBwbGF5ZXJQaWVjZSgxLDMsICdvbmUnKSwgbmV3IHBsYXllclBpZWNlKDEsNSwgJ29uZScpLCBuZXcgcGxheWVyUGllY2UoMSw3LCAnb25lJyksbmV3IHBsYXllclBpZWNlKDIsMiwgJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDQsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDYsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgyLDgsJ29uZScpLG5ldyBwbGF5ZXJQaWVjZSgzLDEsJ29uZScpLCBuZXcgcGxheWVyUGllY2UoMywzLCdvbmUnKSwgbmV3IHBsYXllclBpZWNlKDMsNSwnb25lJyksIG5ldyBwbGF5ZXJQaWVjZSgzLDcsJ29uZScpXVxufVxuXG5cbmxldCBwbGF5ZXJUd28gPSB7XG5cdG5hbWVGb3JJbWFnZTogcGxheWVyVHdvSW1nLFxuXHRuYW1lRm9yS2luZ0ltYWdlOiBwbGF5ZXJUd29LaW5nSW1nLFxuXHRwaWVjZXM6IFtuZXcgcGxheWVyUGllY2UoOCwyLCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw0LCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw2LCd0d28nKSxuZXcgcGxheWVyUGllY2UoOCw4LCd0d28nKSwgbmV3IHBsYXllclBpZWNlKDcsMSwndHdvJyksIG5ldyBwbGF5ZXJQaWVjZSg3LDMsJ3R3bycpLCBuZXcgcGxheWVyUGllY2UoNyw1LCd0d28nKSwgbmV3IHBsYXllclBpZWNlKDcsNywndHdvJyksbmV3IHBsYXllclBpZWNlKDYsMiwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsNCwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsNiwndHdvJyksbmV3IHBsYXllclBpZWNlKDYsOCwndHdvJyldXG59XG5cblxuXG5cblxuZnVuY3Rpb24gcHVzaFRvR2FtZWJvYXJkKCl7XG5mb3IobGV0IHBpZWNlIG9mIHBsYXllck9uZS5waWVjZXMpe1xuZm9yKGxldCBpID0gMCA7MzIgPiBpO2krKyl7XG5pZihwaWVjZS5nZXRQb3NpdGlvbk5hbWVGb3JHYW1lQm9hcmRBcnJheSgpID09IGkpe1xuZ2FtZUJvYXJkW2ldID0gcGllY2U7XG5cbn1cblxufVxuXG59XG5cbmZvcihsZXQgcGllY2Ugb2YgcGxheWVyVHdvLnBpZWNlcyl7XG5cbmZvcihsZXQgaSA9MDszMiA+aTtpKyspe1xuaWYocGllY2UuZ2V0UG9zaXRpb25OYW1lRm9yR2FtZUJvYXJkQXJyYXkoKSA9PSBpKXtcbmdhbWVCb2FyZFtpXSA9IHBpZWNlO1xufVxuXG59XG5cbn1cblxufVxuXG5cbmxldCBnYW1lQm9hcmQgPSBbXTtcbnB1c2hUb0dhbWVib2FyZCgpO1xuXG5mdW5jdGlvbiBkaXNwbGF5UGllY2VzKCl7XG5yZW1vdmVJbWdGcm9tRGl2KCk7XG5cbmxldCBwbGF5ZXJQaWVjZTtcbnVwZGF0ZVBsYXllcihwbGF5ZXJPbmUpO1xudXBkYXRlUGxheWVyKHBsYXllclR3byk7XG5cblxufVxuXG5cblxuZnVuY3Rpb24gcmVtb3ZlSW1nRnJvbURpdigpIHtcbmxldCBnYW1lQm9hcmRJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAjZ2FtZUJvYXJkIGltZ2ApXG5mb3IobGV0IGdhbWVCb2FyZEltYWdlIG9mIGdhbWVCb2FyZEltYWdlcyl7XG5nYW1lQm9hcmRJbWFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGdhbWVCb2FyZEltYWdlKTtcbn1cbn1cblxuZnVuY3Rpb24gIHVwZGF0ZVBsYXllcihwbGF5ZXIpe1xuXG5mb3IobGV0IGkgPSAwO3BsYXllci5waWVjZXMubGVuZ3RoID4gaTsgaSsrKXtcbmxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmltZy5zcmMgPSBwbGF5ZXIubmFtZUZvckltYWdlO1xuaW1nLmlkID0gYCR7cGxheWVyLnBpZWNlc1tpXS5nZXRQb3NpdGlvbk5hbWVGb3JJZCgpfWA7XG5pbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RNb3ZlbWVudCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtwbGF5ZXIucGllY2VzW2ldLmdldFBvc2l0aW9uTmFtZUZvcklkKCl9YCkuYXBwZW5kQ2hpbGQoaW1nKTtcbn1cbn1cblxuXG5cbmRpc3BsYXlQaWVjZXMoKTtcblxuXG5cbmZ1bmN0aW9uIHNlbGVjdE1vdmVtZW50KGV2ZW50KXtcblxuaWYobW9kZSA9ICdzZWxlY3RQbGF5ZXInKXtcbmxldCBjdXJyZW50UGllY2UgPSByZXR1cm5QaWVjZShldmVudCk7XG5tb2RlID0gJ21vdmVQbGF5ZXInO1xubGV0IHNwb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIGdhbWVCb2FyZCBibGFja1BpZWNlICcpO1xufVxufVxuXG5cbmZ1bmN0aW9uIHJldHVyblBpZWNlKGV2ZW50KXtcbmZvcihsZXQgcGxheWVyT25lUGllY2Ugb2YgcGxheWVyT25lLnBpZWNlcyl7XG5pZihwbGF5ZXJPbmVQaWVjZS5nZXRQb3NpdGlvbk5hbWVGb3JJZCgpID09IGV2ZW50LnRhcmdldC5pZClcbnJldHVybiBwbGF5ZXJPbmVQaWVjZTtcbn1cblxuXG5mb3IobGV0IHBsYXllclR3b1BpZWNlIG9mIHBsYXllclR3by5waWVjZXMpe1xuaWYocGxheWVyVHdvUGllY2UuZ2V0UG9zaXRpb25OYW1lRm9ySWQoKSA9PSBldmVudC50YXJnZXQuaWQpXG5yZXR1cm4gcGxheWVyVHdvUGllY2U7XG59XG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==