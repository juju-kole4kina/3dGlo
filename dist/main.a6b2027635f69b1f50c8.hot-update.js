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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar checkInput = function checkInput() {\n  var calcBlock = document.querySelector('.calc-block'),\n      inputName = document.querySelectorAll('.form-name'),\n      inputEmail = document.querySelectorAll('.form-email'),\n      inputPhone = document.querySelectorAll('.form-phone'),\n      inputMessage = document.querySelector('.mess');\n\n  var emailTest = function emailTest() {\n    // const target = event.target;\n    return /^(?!.*@.*@.*$)(?!.*@.*\\-\\-.*\\..*$)(?!.*@.*\\-\\..*$)(?!.*@.*\\-$)(.*@.+(\\..{1,11})?)$/g.test(inputEmail.value);\n  };\n\n  var phoneTest = function phoneTest() {\n    return /(^(?!\\+.*\\(.*\\).*\\-\\-.*$)(?!\\+.*\\(.*\\).*\\-$)(\\+[0-9]{1,3}\\([0-9]{1,3}\\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/g.test(inputPhone.value);\n  };\n\n  var nameTest = function nameTest() {\n    return /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(inputName.value);\n  }; // calcBlock.addEventListener('input', (event) => {\n  //    const target = event.target;\n  //    target.value = target.value.replace(/[^\\d\\.]/g, '');\n  // });\n  // inputName.forEach((elem) => {\n  //    elem.addEventListener('blur', (event) => {\n  //       const target = event.target;\n  //       target.value = target.value.replace(/[^а-я ]/gi, '').replace(/\\S/g, (b) => b.toLowerCase()).replace(/(^|\\s)\\S/g, (a) => a.toUpperCase()).replace(/ +/g, ' ').trim();\n  //    });\n  // });\n\n\n  inputName.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n\n      if (!nameTest() || target.value === '') {\n        target.style.boxShadow = \"0px 0px 15px red\";\n        event.preventDefault();\n      } // target.value = target.value.replace(!nameTest(), '');\n\n    });\n  }); // inputEmail.forEach((elem) => {\n  //    elem.addEventListener('blur', (event) => {\n  //       const target = event.target;\n  //       target.value = target.value.replace(/[^a-z0-9'.@~*!_-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ');\n  //    });\n  // });\n\n  inputEmail.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n\n      if (!emailTest() || target.value === '') {\n        target.style.boxShadow = \"0px 0px 15px red\"; // target.value = '';\n      }\n    });\n  }); // inputPhone.forEach((elem) => {\n  //    elem.addEventListener('blur', (event) => {\n  //       const target = event.target;\n  //       target.value = event.target.value.replace(/[^()+-\\d]/g, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n  //    });\n  // });\n\n  inputPhone.forEach(function (elem) {\n    elem.addEventListener('blur', function (event) {\n      var target = event.target;\n\n      if (phoneTest() || target.value === '') {\n        target.style.boxShadow = \"0px 0px 15px red\";\n        target.value = '';\n      }\n    });\n  });\n  inputMessage.addEventListener('blur', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^\\dа-я-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInput);\n\n//# sourceURL=webpack://3dGlo/./src/modules/checkInput.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d1059c12dee85ba7353a")
/******/ })();
/******/ 
/******/ }
);