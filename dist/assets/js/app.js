/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader.js */ \"./src/assets/js/preloader.js\");\n/* harmony import */ var _scrollSmooth_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollSmooth.js */ \"./src/assets/js/scrollSmooth.js\");\n\r\n\r\n(0,_preloader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n// header allocate navigation on achieve a section\r\nconst headerNavigationItemsDesktop = document.querySelectorAll(\r\n\t'.header__navigation-item-desktop'\r\n)\r\n\r\nconst headerNavigationItemsMobile = document.querySelectorAll(\r\n\t'.header__navigation-item-mobile'\r\n)\r\n\r\n// find all sections\r\nconst auction = document.querySelector('.auction')\r\nconst newStickers = document.querySelector('.new-stickers')\r\nconst beAuthor = document.querySelector('.be-author')\r\n\r\nconst allSections = [auction, newStickers, beAuthor]\r\n\r\n// if element was scroll the function return true\r\nfunction isElementScroll(element) {\r\n\tconst distanceFromTop = element.offsetTop\r\n\tconst scrollPosition = window.scrollY\r\n\tconst delay = 120 // x>0 => speed up; x<0 => delay\r\n\r\n\tif (scrollPosition >= distanceFromTop - 120) {\r\n\t\treturn true\r\n\t}\r\n\r\n\treturn false\r\n}\r\n\r\nconst allocateNavigation = () => {\r\n\tfor (let i = allSections.length - 1; i >= 0; i--) {\r\n\t\tconst section = allSections[i]\r\n\t\tconst isSectionScrolled = isElementScroll(section)\r\n\r\n\t\tif (isSectionScrolled) {\r\n\t\t\theaderNavigationItemsDesktop.forEach((headerNavigationItem, j) => {\r\n\t\t\t\tif (i !== j) {\r\n\t\t\t\t\theaderNavigationItem.classList.remove(\r\n\t\t\t\t\t\t'header__navigation-item--active'\r\n\t\t\t\t\t)\r\n\t\t\t\t} else {\r\n\t\t\t\t\theaderNavigationItem.classList.add('header__navigation-item--active')\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\theaderNavigationItemsMobile.forEach((headerNavigationItem, j) => {\r\n\t\t\t\tif (i !== j) {\r\n\t\t\t\t\theaderNavigationItem.classList.remove(\r\n\t\t\t\t\t\t'header__navigation-item--active'\r\n\t\t\t\t\t)\r\n\t\t\t\t} else {\r\n\t\t\t\t\theaderNavigationItem.classList.add('header__navigation-item--active')\r\n\t\t\t\t}\r\n\t\t\t})\r\n\r\n\t\t\tbreak\r\n\t\t}\r\n\r\n\t\tif (i === 0) {\r\n\t\t\theaderNavigationItemsDesktop.forEach(headerNavigationItem => {\r\n\t\t\t\theaderNavigationItem.classList.remove('header__navigation-item--active')\r\n\t\t\t})\r\n\t\t\theaderNavigationItemsMobile.forEach(headerNavigationItem => {\r\n\t\t\t\theaderNavigationItem.classList.remove('header__navigation-item--active')\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n}\r\n\r\nallocateNavigation()\r\nwindow.addEventListener('scroll', allocateNavigation)\r\n\r\n// auction timer\r\nlet hours = 23\r\nlet minutes = 59\r\nlet seconds = 60\r\n\r\nconst auctionHours = document.querySelector('.auction__hours')\r\nconst auctionMinutes = document.querySelector('.auction__minutes')\r\nconst auctionSeconds = document.querySelector('.auction__seconds')\r\n\r\nauctionHours.innerHTML = hours < 10 ? `0${hours}` : hours\r\nauctionMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes\r\nauctionSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds\r\n\r\nsetInterval(() => {\r\n\tseconds -= 1\r\n\r\n\tif (seconds === 0) {\r\n\t\tminutes -= 1\r\n\t\tseconds = 60\r\n\r\n\t\tif (minutes === 0) {\r\n\t\t\thours -= 1\r\n\t\t\tminutes = 59\r\n\r\n\t\t\tif (hours === 0) {\r\n\t\t\t\thours = 23\r\n\t\t\t\tminutes = 59\r\n\t\t\t\tseconds = 59\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tauctionHours.innerHTML = hours < 10 ? `0${hours}` : hours\r\n\tauctionMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes\r\n\tauctionSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds\r\n}, 1000)\r\n\r\n// new stickers slider\r\nnew Swiper('.new-stickers__swiper-container', {\r\n\tpagination: {\r\n\t\tel: '.new-stickers__swiper-pagination',\r\n\t\tclickable: true,\r\n\t\trenderBullet: function (index, className) {\r\n\t\t\treturn (\r\n\t\t\t\t'<span class=\"' +\r\n\t\t\t\tclassName +\r\n\t\t\t\t' new-stickers__button\">' +\r\n\t\t\t\t(index + 1) +\r\n\t\t\t\t'</span>'\r\n\t\t\t)\r\n\t\t},\r\n\t},\r\n\tslidesPerView: 3,\r\n\r\n\tbreakpoints: {\r\n\t\t1024: {\r\n\t\t\tslidesPerView: 3,\r\n\t\t},\r\n\t\t768: {\r\n\t\t\tslidesPerView: 2,\r\n\t\t},\r\n\t\t0: {\r\n\t\t\tslidesPerView: 1,\r\n\t\t},\r\n\t},\r\n})\r\n\r\n// another auctions show all columns\r\nconst anotherAuctionsColumns = document.querySelectorAll(\r\n\t'.another-auctions__column'\r\n)\r\nconst anotherAuctionsBottomBtn = document.querySelector(\r\n\t'.another-auctions__bottom-btn'\r\n)\r\n\r\nconst hideAnotherAuctionsColumns = visibleBlocks => {\r\n\tanotherAuctionsColumns.forEach((anotherAuctionsColumn, i) => {\r\n\t\tif (i > visibleBlocks) {\r\n\t\t\tanotherAuctionsColumn.classList.add('another-auctions__column--hidden')\r\n\t\t}\r\n\t})\r\n}\r\n\r\nconst showAnotherAuctionsColumns = () => {\r\n\tanotherAuctionsColumns.forEach(anotherAuctionsColumn => {\r\n\t\tanotherAuctionsColumn.classList.remove('another-auctions__column--hidden')\r\n\t})\r\n}\r\n\r\nhideAnotherAuctionsColumns(3)\r\n\r\nanotherAuctionsBottomBtn.addEventListener('click', () => {\r\n\tshowAnotherAuctionsColumns()\r\n\tanotherAuctionsBottomBtn.classList.add('another-auctions__bottom-btn--hidden')\r\n})\r\n\r\n// distribution toggle check mark\r\nconst distributionFormCheckWrapper = document.querySelector(\r\n\t'.distribution__form-check-wrapper'\r\n)\r\n\r\nconst distributionFormCheck = document.querySelector(\r\n\t'.distribution__form-check'\r\n)\r\n\r\nconst distributionFormCheckToggleVisible = () => {\r\n\tif (\r\n\t\tdistributionFormCheck.classList.contains(\r\n\t\t\t'distribution__form-check--visible'\r\n\t\t)\r\n\t) {\r\n\t\tdistributionFormCheck.classList.remove('distribution__form-check--visible')\r\n\t} else {\r\n\t\tdistributionFormCheck.classList.add('distribution__form-check--visible')\r\n\t}\r\n}\r\n\r\ndistributionFormCheckWrapper.addEventListener(\r\n\t'click',\r\n\tdistributionFormCheckToggleVisible\r\n)\r\n\r\n// be author drop file\r\nconst beAuthorFile = document.querySelector('.be-author__file')\r\n\r\nbeAuthorFile.addEventListener('dragover', e => {\r\n\te.preventDefault()\r\n\tbeAuthorFile.classList.add('be-author__file--active')\r\n})\r\n\r\nbeAuthorFile.addEventListener('dragleave', e => {\r\n\te.preventDefault()\r\n\tbeAuthorFile.classList.remove('be-author__file--active')\r\n})\r\n\r\nbeAuthorFile.addEventListener('drop', e => {\r\n\tbeAuthorFile.classList.remove('be-author__file--active')\r\n\tconst beAuthorFileName = beAuthorFile.querySelector('p')\r\n\tconst file = e.dataTransfer.files[0]\r\n\r\n\tbeAuthorFileName.textContent = file.name\r\n\te.preventDefault()\r\n})\r\n\r\nbeAuthorFile.addEventListener('click', () => {\r\n\tconst fileInput = document.createElement('input')\r\n\tfileInput.type = 'file'\r\n\tfileInput.style.display = 'none'\r\n\r\n\tfileInput.addEventListener('input', e => {\r\n\t\tconsole.log('qwe')\r\n\t\tconst beAuthorFileName = beAuthorFile.querySelector('p')\r\n\t\tconst file = e.target.files[0]\r\n\t\tconsole.log(beAuthorFileName)\r\n\r\n\t\tbeAuthorFileName.textContent = file.name\r\n\t})\r\n\r\n\tdocument.body.appendChild(fileInput)\r\n\tfileInput.click()\r\n\tdocument.body.removeChild(fileInput)\r\n})\r\n\r\n// smooth scroll\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/preloader.js":
/*!************************************!*\
  !*** ./src/assets/js/preloader.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst preloader = () => {\r\n\tconst preloader = document.querySelector('.preloader')\r\n\r\n\tsetTimeout(() => {\r\n\t\tpreloader.classList.add('preloader--hide')\r\n\t\tdocument.body.classList.remove('scroll-disabled')\r\n\r\n\t\tsetTimeout(() => {\r\n\t\t\tpreloader.classList.add('zIndex-1')\r\n\t\t}, 600)\r\n\t}, 2000)\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (preloader);\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/preloader.js?");

/***/ }),

/***/ "./src/assets/js/scrollSmooth.js":
/*!***************************************!*\
  !*** ./src/assets/js/scrollSmooth.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst smoothScrollAnimation = () => {\r\n\tfunction smoothScroll(targetId) {\r\n\t\tconst targetElement = document.getElementById(targetId)\r\n\r\n\t\tif (targetElement) {\r\n\t\t\twindow.scrollTo({\r\n\t\t\t\ttop: targetElement.offsetTop, // Вертикальное положение цели\r\n\t\t\t\tbehavior: 'smooth', // Плавный скролл\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\r\n\tconst anchorLinks = document.querySelectorAll('a[href^=\"#\"]')\r\n\r\n\tanchorLinks.forEach(link => {\r\n\t\tlink.addEventListener('click', e => {\r\n\t\t\te.preventDefault() // Отменяем стандартное действие перехода по якорю\r\n\r\n\t\t\tconst targetId = link.getAttribute('href').substring(1) // Получаем ID цели\r\n\t\t\tsmoothScroll(targetId) // Вызываем функцию плавного скролла\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (smoothScrollAnimation);\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scrollSmooth.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/preloader.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/scrollSmooth.js");
/******/ 	
/******/ })()
;