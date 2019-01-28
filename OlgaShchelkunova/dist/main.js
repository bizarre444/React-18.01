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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\src\\\\App.js: Unexpected token (22:16)\\n\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 22 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m document\\u001b[33m.\\u001b[39mquerySelector(\\u001b[32m'#root'\\u001b[39m))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Parser.raise (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3834:17)\\n    at Parser.unexpected (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5142:16)\\n    at Parser.parseExprAtom (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6279:20)\\n    at Parser.parseExprSubscripts (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5848:23)\\n    at Parser.parseMaybeUnary (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5828:21)\\n    at Parser.parseExprOps (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5717:23)\\n    at Parser.parseMaybeConditional (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5690:23)\\n    at Parser.parseMaybeAssign (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5635:21)\\n    at Parser.parseExprListItem (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6930:18)\\n    at Parser.parseCallExpressionArguments (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:6051:22)\\n    at Parser.parseSubscript (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5949:29)\\n    at Parser.parseSubscripts (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5868:19)\\n    at Parser.parseExprSubscripts (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5858:17)\\n    at Parser.parseMaybeUnary (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5828:21)\\n    at Parser.parseExprOps (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5717:23)\\n    at Parser.parseMaybeConditional (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5690:23)\\n    at Parser.parseMaybeAssign (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5635:21)\\n    at Parser.parseExpression (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:5587:23)\\n    at Parser.parseStatementContent (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7321:23)\\n    at Parser.parseStatement (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7199:17)\\n    at Parser.parseBlockOrModuleBlockBody (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7757:25)\\n    at Parser.parseBlockBody (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7744:10)\\n    at Parser.parseTopLevel (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7164:10)\\n    at Parser.parse (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8565:17)\\n    at parse (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10537:38)\\n    at parser (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:170:34)\\n    at normalizeFile (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:138:11)\\n    at runSync (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:44:43)\\n    at runAsync (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\index.js:35:14)\\n    at process.nextTick (B:\\\\javascript\\\\React-18.01\\\\OlgaShchelkunova\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:34:34)\");\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ })

/******/ });