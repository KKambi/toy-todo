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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./controllers/IndexController.js":
/*!****************************************!*\
  !*** ./controllers/IndexController.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//출처: https://poiemaweb.com/js-spa\r\nclass IndexController {\r\n    constructor(headerContainer, mainContainer) {\r\n        this.headerContainer = headerContainer;\r\n        this.mainContainer = mainContainer;\r\n        this.api = \"http://localhost:3000\"\r\n        this.routes = {\r\n            '/': async () => {\r\n                const resJson = await this.get(`${this.api}/data/index.json`);\r\n                this.render(resJson);\r\n            },\r\n            '/search': async () => {\r\n                const resJson = await this.get(`${this.api}/data/search.json`);\r\n                this.render(resJson);\r\n            },\r\n            '/login': async () => {\r\n                const resJson = await this.get(`${this.api}/data/login.json`);\r\n                this.render(resJson);\r\n            },\r\n            otherwise(path) {\r\n                this.mainContainer.innerHTML = `${path} Not Found`;\r\n            }\r\n        }\r\n    }\r\n\r\n    init() {\r\n        //history pop을 위한 이벤트 핸들러 설정\r\n        window.addEventListener('popstate', event => {\r\n            // 이전페이지 / 다음페이지 button이 클릭되면 router를 호출\r\n            this.router(event.state.path);\r\n        })\r\n\r\n        //라우팅 이벤트 핸들러 설정\r\n        this.headerContainer.addEventListener(\"click\", event => {\r\n            if (!event.target || event.target.nodeName !== 'A') return;\r\n            event.preventDefault();\r\n            const path = event.target.getAttribute(\"href\")\r\n            history.pushState({ path }, null, path);    //history push\r\n            this.router(path);\r\n        })\r\n\r\n        //웹페이지가 처음 로딩되었을 때\r\n        this.router('/');\r\n    }\r\n\r\n    async get(url) {\r\n        const response = await fetch(url, { method: \"GET\", Accept: \"application/json\" });\r\n        const data = await response.json();\r\n        return data;\r\n    }\r\n\r\n    render(data) {\r\n        this.mainContainer.innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`;\r\n    }\r\n\r\n    renderHtml(html) {\r\n        this.mainContainer.innerHTML = html;\r\n    }\r\n\r\n    router(path) {\r\n        (this.routes[path] || this.routes.otherwise)(path);\r\n    }\r\n}\r\n\r\nmodule.exports = IndexController;\n\n//# sourceURL=webpack:///./controllers/IndexController.js?");

/***/ }),

/***/ "./src/index.entry.js":
/*!****************************!*\
  !*** ./src/index.entry.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.entry.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const IndexController = __webpack_require__(/*! ../controllers/IndexController */ \"./controllers/IndexController.js\")\r\n\r\nconst headerContainer = document.getElementById(\"header-container\")\r\nconst mainContainer = document.getElementById(\"main-container\")\r\nconst controller = new IndexController(headerContainer, mainContainer)\r\ncontroller.init()\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });