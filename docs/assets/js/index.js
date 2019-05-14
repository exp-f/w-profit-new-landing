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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

document.querySelector('.header__menu_button').addEventListener('click', function (e) {
  var header = document.querySelector('.header');
  header.classList.toggle('open');
});

document.querySelectorAll('.dev_3__item__title').forEach(function (item) {
  item.addEventListener('click', function (e) {
    var container = e.currentTarget.parentElement;
    var content = container.querySelector('.dev_3__showmore_content');
    var h = void 0;
    container.classList.toggle('open');
    if (container.classList.contains('open')) {
      h = content.offsetHeight;
      content.parentElement.style.maxHeight = h + 'px';
    } else {
      content.parentElement.style.maxHeight = '0';
    }
  });
});

document.querySelectorAll('.popup input, .popup textarea').forEach(function (item) {
  item.addEventListener('input', function (e) {
    if (e.target.value !== '') {
      e.target.parentElement.classList.add('not-empty');
    } else {
      e.target.parentElement.classList.remove('not-empty');
    }
  });
});

document.querySelectorAll('[data-target]').forEach(function (item) {
  item.addEventListener('click', function (e) {
    var target = e.target.getAttribute('data-target');
    var popup = document.getElementById(target).classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

document.querySelectorAll('.popup__close').forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.target.parentElement.parentElement.classList.remove('open');
    document.body.style.overflow = '';
  });
});

document.querySelector('.cookies__close').addEventListener('click', function (e) {
  e.target.parentNode.parentNode.classList.add('closed');
  sessionStorage.setItem('seencookies', '1');
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map