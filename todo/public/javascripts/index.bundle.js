/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry/index.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/mainContainer.sass":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/mainContainer.sass ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"#main-container {\\n  padding: 2rem;\\n  height: 100%;\\n  display: flex; }\\n\\n.column-container {\\n  margin-right: 1.5rem;\\n  max-width: 35rem;\\n  min-width: 35rem;\\n  font-size: 1.4rem;\\n  height: 100%;\\n  border: 0.1rem solid #e1e4e8;\\n  border-radius: 0.6rem;\\n  background-color: #EEF1F3;\\n  overflow-y: auto; }\\n  .column-container .column-header-container {\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 1.6rem 1rem 1rem; }\\n  .column-container .card-container {\\n    padding: 1.5rem;\\n    margin: 0 0.8rem 0.8rem 0.8rem;\\n    background-color: #FFFFFF; }\\n\\n.column-header-title {\\n  display: flex;\\n  line-height: normal;\\n  font-weight: 600; }\\n  .column-header-title .column-card-number {\\n    width: 2rem;\\n    height: 2rem;\\n    border-radius: 50%;\\n    background-color: #CFD2D4;\\n    margin-right: 1rem;\\n    text-align: center; }\\n\\n.column-header-menu {\\n  display: flex; }\\n  .column-header-menu button {\\n    border: 0;\\n    background-color: transparent;\\n    color: #586069;\\n    padding: 0 0.4rem 0 0.4rem; }\\n  .column-header-menu button:hover {\\n    color: #DB5A77; }\\n\\n.card-container {\\n  border: 0.1rem solid #e1e4e8;\\n  border-radius: 0.6rem;\\n  box-shadow: 0 0.3rem 0.3rem #e1e4e8; }\\n  .card-container .card-header-container {\\n    display: flex; }\\n    .card-container .card-header-container .icon {\\n      margin-right: 0.5rem; }\\n  .card-container .card-section-container {\\n    margin: 2rem 0 2rem 0; }\\n  .card-container .card-footer-container {\\n    font-size: 90%; }\\n\\n.card-add-container {\\n  margin: 0.8rem; }\\n  .card-add-container .card-content {\\n    height: 7rem;\\n    padding: 1rem;\\n    font-family: inherit;\\n    font-size: inherit;\\n    width: 100%;\\n    resize: vertical;\\n    border: 0.1rem solid #CDD0D2;\\n    border-radius: 0.6rem;\\n    box-shadow: inset 0 0.3rem 0.3rem #e1e4e8; }\\n  .card-add-container .card-buttons {\\n    display: flex;\\n    height: 3.5rem;\\n    margin-top: 0.8rem;\\n    font-weight: 600; }\\n    .card-add-container .card-buttons .card-add-button {\\n      margin-right: 0.4rem;\\n      background: #DB5A77;\\n      color: #FFFFFF; }\\n    .card-add-container .card-buttons .card-cancel-button {\\n      background: #FAFBFC;\\n      margin-left: 0.4rem; }\\n    .card-add-container .card-buttons .card-add-button {\\n      background: linear-gradient(-180deg, #DB7189, #DF4265); }\\n    .card-add-container .card-buttons .card-cancel-button:hover {\\n      background: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%); }\\n    .card-add-container .card-buttons button {\\n      opacity: 0.9;\\n      flex-grow: 1;\\n      flex-basis: 0;\\n      text-align: center;\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: center;\\n      border: 0.1rem solid #c5cad0;\\n      border-radius: 0.6rem; }\\n    .card-add-container .card-buttons button:hover {\\n      opacity: 1;\\n      border: 0.1rem solid #b8b3b3; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesheets/mainContainer.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/reset.sass":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/reset.sass ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=block);\", \"\"]);\n// Module\nexports.push([module.i, \"html, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  vertical-align: baseline; }\\n\\nhtml {\\n  font-size: 10px;\\n  width: 100%;\\n  height: 100%;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box; }\\n\\nbody {\\n  width: 100%;\\n  height: 100%;\\n  font-family: \\\"Noto Sans\\\", sans-serif;\\n  font-weight: normal;\\n  line-height: 1;\\n  padding-top: 5rem; }\\n\\n*, *::before, *::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit; }\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nol, ul {\\n  list-style: none;\\n  font-size: 0; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n/* Header tag default size by KKambi */\\nh1 {\\n  font-size: 4.5em; }\\n\\nh2 {\\n  font-size: 3.5em; }\\n\\nh3 {\\n  font-size: 2.5em; }\\n\\n/* a none tag */\\na, a:link, a:hover, a:active, a:visited, button {\\n  cursor: pointer;\\n  text-decoration: none; }\\n\\n.icon {\\n  fill: currentColor; }\\n\\n.text-gray-light {\\n  color: #6a737d; }\\n\\n.text-gray-dark {\\n  color: #24292e; }\\n\\n.hidden {\\n  display: none; }\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/stylesheets/reset.sass?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/entry/index.entry.js":
/*!**********************************!*\
  !*** ./src/entry/index.entry.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylesheets/reset.sass */ \"./src/stylesheets/reset.sass\");\n/* harmony import */ var _stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_reset_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascripts_mainContiner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascripts/mainContiner.js */ \"./src/javascripts/mainContiner.js\");\n/* harmony import */ var _stylesheets_mainContainer_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stylesheets/mainContainer.sass */ \"./src/stylesheets/mainContainer.sass\");\n/* harmony import */ var _stylesheets_mainContainer_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylesheets_mainContainer_sass__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/entry/index.entry.js?");

/***/ }),

/***/ "./src/javascripts/components/Column.js":
/*!**********************************************!*\
  !*** ./src/javascripts/components/Column.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Column; });\nconst columnHTML = (name, sort) => \r\n`<div class=\"column-container\" data-column-name=\"${name}\" data-column-sort=\"${sort}\">\r\n    <div class=\"column-header-container\">\r\n        <div class=\"column-header-title\">\r\n            <div class=\"column-card-number\">\r\n                0\r\n            </div>\r\n            <div class=\"column-title\">\r\n                ${name}\r\n            </div>\r\n        </div>\r\n        \r\n        <div class=\"column-header-menu\">\r\n            <button class=\"column-toggle-button\" type=\"button\" aria-label=\"Add a note to this column\">\r\n                <svg class=\"icon icon-plus\" viewBox=\"0 0 12 16\" width=\"12\" heigth=\"16\" aria-hidden=\"true\">\r\n                    <path fill-rule=\"evenodd\" d=\"M12 9H7v5H5V9H0V7h5V2h2v5h5v2z\">\r\n                    </path>\r\n                </svg>\r\n            </button>\r\n            <button class=\"column-edit-button\" type=\"button\" aria-label=\"Column menu\">\r\n                <svg class=\"icon icon-modify\" viewBox=\"0 0 13 16\" width=\"13\" heigth=\"16\" aria-hidden=\"true\">\r\n                    <path fill-rule=\"evenodd\" d=\"M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\">\r\n                    </path>\r\n                </svg>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-add-container\" style=\"display: none;\">\r\n        <textarea class=\"card-content\" name=\"content\" placeholder=\"Enter a note\">\r\n        </textarea>\r\n        <div class=\"card-buttons\">\r\n            <button class=\"card-add-button\">Add</button>\r\n            <button class=\"card-cancel-button\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>`\r\n\r\nclass Column {\r\n    constructor(mainContainer, name, sort){\r\n        this.mainContainer = mainContainer\r\n        this.name = name\r\n        this.sort = sort\r\n    }\r\n\r\n    init(){\r\n        this.render()\r\n        this.selfContainer = this.findSelf()\r\n        this.addToggleEventListener()\r\n    }\r\n\r\n    render(){\r\n        this.mainContainer.insertAdjacentHTML('beforeend', columnHTML(this.name, this.sort))\r\n    }\r\n\r\n    findSelf(){\r\n        return document.querySelector(`[data-column-name=\"${this.name}\"]`);\r\n    }\r\n\r\n    addToggleEventListener(){\r\n        const toggleButton = this.selfContainer.querySelector(\".column-toggle-button\")\r\n        toggleButton.addEventListener(\"click\", (event) => {\r\n            if (!event.target) return;\r\n            this.toggleAddSection()\r\n        })\r\n    }\r\n\r\n    toggleAddSection(){\r\n        const cardAddContainer = this.selfContainer.querySelector('.card-add-container')\r\n        const next = cardAddContainer.style.display === 'none' ? 'block' : 'none';\r\n        cardAddContainer.style.display =  next\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/javascripts/components/Column.js?");

/***/ }),

/***/ "./src/javascripts/mainContiner.js":
/*!*****************************************!*\
  !*** ./src/javascripts/mainContiner.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Column */ \"./src/javascripts/components/Column.js\");\n\r\nconst container = document.getElementById(\"main-container\")\r\nconst columnComponent = new _components_Column__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, \"테스트\", 4)\r\ncolumnComponent.init()\n\n//# sourceURL=webpack:///./src/javascripts/mainContiner.js?");

/***/ }),

/***/ "./src/stylesheets/mainContainer.sass":
/*!********************************************!*\
  !*** ./src/stylesheets/mainContainer.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mainContainer.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/mainContainer.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesheets/mainContainer.sass?");

/***/ }),

/***/ "./src/stylesheets/reset.sass":
/*!************************************!*\
  !*** ./src/stylesheets/reset.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.sass */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/reset.sass\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/stylesheets/reset.sass?");

/***/ })

/******/ });