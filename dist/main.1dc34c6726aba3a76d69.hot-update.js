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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar checkInput = function checkInput() {\n  var calcBlock = document.querySelector('.calc-block'),\n      inputName = document.querySelectorAll('.form-name'),\n      inputEmail = document.querySelectorAll('.form-email'),\n      inputPhone = document.querySelectorAll('.form-phone'),\n      inputMessage = document.querySelector('.mess');\n\n  var emailTest = function emailTest(event) {\n    var target = event.target;\n    return !/^(?!.*@.*@.*$)(?!.*@.*\\-\\-.*\\..*$)(?!.*@.*\\-\\..*$)(?!.*@.*\\-$)(.*@.+(\\..{1,11})?)$/.test(target.value);\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^\\d\\.]/g, '');\n  });\n  inputName.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^а-я ]/gi, '').replace(/\\S/g, function (b) {\n        return b.toLowerCase();\n      }).replace(/(^|\\s)\\S/g, function (a) {\n        return a.toUpperCase();\n      }).replace(/ +/g, ' ').trim();\n    });\n  });\n  inputEmail.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^a-z0-9'.@~*!_-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ');\n    });\n  });\n  inputPhone.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^()+-\\d]/g, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n    });\n  });\n  inputMessage.addEventListener('blur', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^\\dа-я-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInput);\n\n//# sourceURL=webpack://3dGlo/./src/modules/checkInput.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d838b42b519e57cbcc8")
/******/ })();
/******/ 
/******/ }
);