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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'worker_threads'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// const checkInput = () => {\n//    const calcBlock = document.querySelector('.calc-block'),\n//       inputName = document.querySelectorAll('.form-name'),\n//       inputEmail = document.querySelectorAll('.form-email'),\n//       inputPhone = document.querySelectorAll('.form-phone'),\n//       inputMessage = document.querySelector('.mess');\n //    const emailTest = () => {\n//       // const target = event.target;\n//       return /^(?!.*@.*@.*$)(?!.*@.*\\-\\-.*\\..*$)(?!.*@.*\\-\\..*$)(?!.*@.*\\-$)(.*@.+(\\..{1,11})?)$/g.test(inputEmail.value);\n//    };\n//    const phoneTest = () => {\n//       return /(^(?!\\+.*\\(.*\\).*\\-\\-.*$)(?!\\+.*\\(.*\\).*\\-$)(\\+[0-9]{1,3}\\([0-9]{1,3}\\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/g.test(inputPhone.value);\n//    };\n//    const nameTest = () => {\n//       return /(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(inputName.value);\n//    };\n//    // calcBlock.addEventListener('input', (event) => {\n//    //    const target = event.target;\n//    //    target.value = target.value.replace(/[^\\d\\.]/g, '');\n//    // });\n//    // inputName.forEach((elem) => {\n//    //    elem.addEventListener('blur', (event) => {\n//    //       const target = event.target;\n//    //       target.value = target.value.replace(/[^а-я ]/gi, '').replace(/\\S/g, (b) => b.toLowerCase()).replace(/(^|\\s)\\S/g, (a) => a.toUpperCase()).replace(/ +/g, ' ').trim();\n//    //    });\n//    // });\n//    inputName.forEach((elem) => {\n//       elem.addEventListener('blur', (event) => {\n//          const target = event.target;\n//          // if (!nameTest() || target.value === '') {\n//          //    target.style.boxShadow = \"0px 0px 15px red\";\n//          // }\n//          target.value = target.value.replace(!nameTest(), '');\n//       });\n//    });\n//    // inputEmail.forEach((elem) => {\n//    //    elem.addEventListener('blur', (event) => {\n//    //       const target = event.target;\n//    //       target.value = target.value.replace(/[^a-z0-9'.@~*!_-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ');\n//    //    });\n//    // });\n//    inputEmail.forEach((elem) => {\n//       elem.addEventListener('blur', (event) => {\n//          const target = event.target;\n//          if (!emailTest() || target.value === '') {\n//             target.style.boxShadow = \"0px 0px 15px red\";\n//             // target.value = '';\n//          }\n//       });\n//    });\n//    // inputPhone.forEach((elem) => {\n//    //    elem.addEventListener('blur', (event) => {\n//    //       const target = event.target;\n//    //       target.value = event.target.value.replace(/[^()+-\\d]/g, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n//    //    });\n//    // });\n//    inputPhone.forEach((elem) => {\n//       elem.addEventListener('blur', (event) => {\n//          const target = event.target;\n//          if (phoneTest() || target.value === '') {\n//             target.style.boxShadow = \"0px 0px 15px red\";\n//             target.value = '';\n//          }\n//       });\n//    });\n//    inputMessage.addEventListener('blur', (event) => {\n//       const target = event.target;\n//       target.value = target.value.replace(/[^\\dа-я-]/gi, '').replace(/-+/g, '-').replace(/ +/g, ' ').trim();\n//    });\n// };\n\nvar form1 = document.getElementById('form1');\nform1.addEventListener('submit', valid);\nvar elementsForm = [];\n\nvar _iterator = _createForOfIteratorHelper(form1.elements),\n    _step;\n\ntry {\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    var elem = _step.value;\n\n    if (elem.tagName !== 'button' && elem.type !== 'button') {\n      elementsForm.push(elem);\n    }\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\nfunction valid() {}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInput);\n\n//# sourceURL=webpack://3dGlo/./src/modules/checkInput.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b34f485e5d5204b8d928")
/******/ })();
/******/ 
/******/ }
);