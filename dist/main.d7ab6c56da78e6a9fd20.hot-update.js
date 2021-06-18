/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dGlo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkInput */ \"./src/modules/checkInput.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar sendForm = function sendForm() {\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n\n  var clearInput = function clearInput(idForm) {\n    var form = document.getElementById(idForm);\n\n    _toConsumableArray(form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    }).forEach(function (item) {\n      return item.value = '';\n    });\n  };\n\n  var closePopup = function closePopup() {\n    var popup = document.querySelector('.popup'); // statusMessage.textContent = '';\n\n    popup.style.display = 'none';\n  };\n\n  var processingForm = function processingForm(idForm) {\n    var form = document.getElementById(idForm);\n    var statusMessage = document.createElement('div');\n\n    var showStatus = function showStatus(status) {\n      var img = document.createElement('img');\n      var statusList = {\n        load: {\n          message: ' Загрузка...',\n          img: './images/message/waiting.gif'\n        },\n        error: {\n          message: ' Что-то пошло не так...',\n          img: './images/message/Err.png'\n        },\n        success: {\n          message: ' Спасибо! Мы скоро с вами свяжемся!',\n          img: './images/message/OK.png'\n        }\n      };\n      statusMessage.textContent = statusList[status].message;\n      img.src = statusList[status].img;\n      img.height = 50;\n      statusMessage.insertBefore(img, statusMessage.firstChild);\n    };\n\n    statusMessage.style.cssText = 'font-size: 2rem; color: #fff';\n\n    var clearMessage = function clearMessage() {\n      statusMessage.textContent = '';\n    };\n\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n      showStatus('load');\n      form.appendChild(statusMessage);\n\n      if ((0,_checkInput__WEBPACK_IMPORTED_MODULE_0__.default)()) {\n        // postData(body)\n        postData(Object.fromEntries(new FormData(form))).then(function (response) {\n          if (response.status !== 200) throw new Error(\"Status network \".concat(request.status));\n          showStatus('success');\n          clearInput(idForm);\n          setTimeout(closePopup, 3000);\n          setTimeout(clearMessage, 3000);\n        })[\"catch\"](function (error) {\n          showStatus('error');\n          console.error(error);\n        });\n      }\n\n      ;\n    });\n  };\n\n  processingForm('form1');\n  processingForm('form2');\n  processingForm('form3');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dGlo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cc264d9faf9606e6e85c")
/******/ })();
/******/ 
/******/ }
);