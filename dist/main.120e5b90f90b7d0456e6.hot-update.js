/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/checkInput.js":
/*!***********************************!*\
  !*** ./src/modules/checkInput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar checkInput = function checkInput() {\n  var calcBlock = document.querySelector('.calc-block'),\n      inputName = document.querySelectorAll('.form-name'),\n      inputEmail = document.querySelectorAll('.form-email'),\n      inputPhone = document.querySelectorAll('.form-phone'),\n      inputMessage = document.querySelectorAll('.mess');\n  var result = true;\n  inputName.forEach(function (elem) {\n    var nameTest = function nameTest() {\n      return /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value);\n    };\n\n    if (elem.value === '' || !nameTest()) {\n      elem.style.boxShadow = \"0px 0px 15px red\";\n      result = false;\n    } else {\n      elem.style.boxShadow = \"\";\n      result = true;\n    }\n  });\n  inputEmail.forEach(function (elem) {\n    var emailTest = function emailTest() {\n      return /^(?!.*@.*@.*$)(?!.*@.*\\-\\-.*\\..*$)(?!.*@.*\\-\\..*$)(?!.*@.*\\-$)(.*@.+(\\..{1,11})?)$/g.test(elem.value);\n    };\n\n    if (elem.value === '' || !emailTest()) {\n      elem.style.boxShadow = \"0px 0px 15px red\";\n      result = false;\n    } else {\n      elem.style.boxShadow = \"\";\n      result = true;\n    }\n  });\n  inputPhone.forEach(function (elem) {\n    if (elem.value === '') {\n      elem.style.boxShadow = \"0px 0px 15px red\";\n      result = false;\n    } else {\n      elem.style.boxShadow = \"\";\n      result = true;\n    }\n  });\n  inputMessage.forEach(function (elem) {\n    if (elem.value === '') {\n      elem.style.boxShadow = \"0px 0px 15px red\";\n      result = false;\n    } else {\n      elem.style.boxShadow = \"\";\n      result = true;\n    }\n  });\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInput);\n\n//# sourceURL=webpack://3dGlo/./src/modules/checkInput.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("697d60e8498b892e8c51")
/******/ })();
/******/ 
/******/ }
);