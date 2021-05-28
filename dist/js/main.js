/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/main/articles/articles.js":
/*!*************************************************!*\
  !*** ../views/blocks/main/articles/articles.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var windowWidth = window.innerWidth;
  var swiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      if (!inits) {
        inits = true;
        swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
        swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.articles .swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          speed: 400,
          spaceBetween: 32,
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        swiper.destroy();
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/benefits/benefits.js":
/*!*************************************************!*\
  !*** ../views/blocks/main/benefits/benefits.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var windowWidth = window.innerWidth;
  var swiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      if (!inits) {
        inits = true;
        swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
        swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.benefits .swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          speed: 400,
          spaceBetween: 32,
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        swiper.destroy();
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/partners/partners.js":
/*!*************************************************!*\
  !*** ../views/blocks/main/partners/partners.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var windowWidth = window.innerWidth;
  var swiper;
  var inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 1024) {
      if (!inits) {
        inits = true;
        swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
        swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.partners .swiper-container', {
          slidesPerView: 'auto',
          centeredSlides: true,
          speed: 400,
          spaceBetween: 32,
          navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        swiper.destroy();
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/request/request.js":
/*!***********************************************!*\
  !*** ../views/blocks/main/request/request.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.request .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 32,
    // centeredSlides: true,
    // loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/services/services.js":
/*!*************************************************!*\
  !*** ../views/blocks/main/services/services.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.services .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 32,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 32
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/main/squad/_squad.js":
/*!********************************************!*\
  !*** ../views/blocks/main/squad/_squad.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.squad__map').on('click', function (e) {
    if ($(e.target).is('svg')) {
      e.preventDefault();
    }
  });
  $('.squad__map-district').on('mouseenter focus', function () {
    var abbr = $(this).data('district');
    $('.squad__abbr').text(abbr);
    var marker = $(this).find('.squad__map-marker').offset(),
        textWidth = $('.squad__abbr').outerWidth(),
        corx = marker.left + 12 - textWidth / 2,
        cory = marker.top - 48;
    $('.squad__abbr').offset({
      top: cory,
      left: corx
    }).addClass('show');
  });
  $('.squad__map-district').on('mouseleave blur', function () {
    $('.squad__abbr').removeClass('show');
  });
});

/***/ }),

/***/ "../views/blocks/main/types/types.js":
/*!*******************************************!*\
  !*** ../views/blocks/main/types/types.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.types .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 32,
    // centeredSlides: true,
    // loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/media/media.js":
/*!**************************************!*\
  !*** ../views/blocks/media/media.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.media .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 32,
    // centeredSlides: true,
    // loop: true,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/modals/modal-district/modal-district.js":
/*!***************************************************************!*\
  !*** ../views/blocks/modals/modal-district/modal-district.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var districtName = $('.header-top__district');
  districtName.on('click', function () {
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_1__["modalOpen"])(this);
  });
  $('.modal-district__list button').on('click', function () {
    var data = $(this).data('district');
    districtName.find('span').text(data);
    Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_1__["modalCloseFunc"])();
  });
});

/***/ }),

/***/ "../views/components/slide/slide.js":
/*!******************************************!*\
  !*** ../views/components/slide/slide.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.slide-item__button').on('click', function () {
    $(this).parent('.slide-item').toggleClass('active');
    $(this).siblings('.slide-item__hidden').slideToggle(200);
  });
});

/***/ }),

/***/ "../views/layouts/header/header.js":
/*!*****************************************!*\
  !*** ../views/layouts/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  /* Появление меню по кнопке */
  $('.button-burger').on('click', function () {
    var expanded = $(this).attr('aria-expanded') === 'true';
    $(this).attr('aria-expanded', !expanded);
    $(this).toggleClass('open');
    $('.header-mid__menu').toggleClass('open');
    $('html').toggleClass('header__open');
  });
  $('.header-mid__menu').on('click', function () {
    $(this).toggleClass('active');
  });
  $('#navItemServices li a').on('mouseover', function () {
    var data = $(this).data('image');
    $('.header-mid__hidden-img img').prop('src', data).addClass('show');
  });
  $('#navItemServices li a').on('mouseleave', function () {
    $('.header-mid__hidden-img img').removeClass('show');
  });
});

/***/ }),

/***/ "../views/layouts/modal/modal.js":
/*!***************************************!*\
  !*** ../views/layouts/modal/modal.js ***!
  \***************************************/
/*! exports provided: modalClose, modalCloseFunc, modalOpen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalClose", function() { return modalClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalCloseFunc", function() { return modalCloseFunc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOpen", function() { return modalOpen; });
var modalClose = function modalClose() {
  //Отмена по кнопке "Закрыть" и по фону
  $('.modal__button, .modal__close').on('click', function () {
    modalCloseFunc();
  });
  $('.modal-overlay').on('click', function () {
    modalCloseFunc();
  }); //Отмена по Esc

  $(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 27) {
      modalCloseFunc();
    }
  });
}; //Закрытие модалки

var modalCloseFunc = function modalCloseFunc() {
  var html = $('html');

  if (html[0].modals) {
    $('.modal-privacy').removeClass('modal-showed');
    html[0].modals = false;
  } else {
    $('body, .modal').css('padding-right', 0);
    $('.modal, .modal-overlay, html').removeClass('modal-showed');
    $('.modal-form__hidden, .modal-form__visible').removeClass('form-done');
  }
}; //открытие модального окна

var modalOpen = function modalOpen(el) {
  var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var modalName = $(el).data('modal'),
      body = $('body').width();
  var scrollWidth = window.innerWidth - body;

  if (second) {
    var html = $('html');
    html[0].modals = true;
  } //Показ модалки


  $(".modal[data-modal=\"".concat(modalName, "\"]")).addClass('modal-showed'); //Фиксируем страницу

  $('html').addClass('modal-showed');

  if (scrollWidth > 0) {
    $('body, .modal').css('padding-right', scrollWidth);
  }
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @layouts/header/header */ "../views/layouts/header/header.js");
/* harmony import */ var _blocks_main_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/main/services/services */ "../views/blocks/main/services/services.js");
/* harmony import */ var _blocks_main_types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/main/types/types */ "../views/blocks/main/types/types.js");
/* harmony import */ var _blocks_main_request_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/main/request/request */ "../views/blocks/main/request/request.js");
/* harmony import */ var _blocks_media_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @blocks/media/media */ "../views/blocks/media/media.js");
/* harmony import */ var _components_slide_slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/slide/slide */ "../views/components/slide/slide.js");
/* harmony import */ var _blocks_main_articles_articles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @blocks/main/articles/articles */ "../views/blocks/main/articles/articles.js");
/* harmony import */ var _blocks_main_partners_partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @blocks/main/partners/partners */ "../views/blocks/main/partners/partners.js");
/* harmony import */ var _blocks_main_benefits_benefits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @blocks/main/benefits/benefits */ "../views/blocks/main/benefits/benefits.js");
/* harmony import */ var _blocks_main_squad_squad__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @blocks/main/squad/_squad */ "../views/blocks/main/squad/_squad.js");
/* harmony import */ var _blocks_modals_modal_district_modal_district__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @blocks/modals/modal-district/modal-district */ "../views/blocks/modals/modal-district/modal-district.js");
/* harmony import */ var _layouts_modal_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @layouts/modal/modal */ "../views/layouts/modal/modal.js");
// import $ from 'jquery';

/* полифил для :focus-visible */











 // import modalForm from '@blocks/modals/modal-form/modal-form';

 //Показ сайта
// let scrolling = 'main >section, main >section div';
// $(scrolling).each(function () {
//   this.showed = true;
//   $(this).addClass('body-scrolled');
// });

$(function () {
  /*   let numberFormat = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });
   let price = $('.types-card__price b, .slide-item strong.title-h3');
   price.each(function () {
    let num = $(this).text();
    $(this).text(numberFormat.format(num));
  }); */
  // $(window).on('scroll resize load', function () {
  //   let scroll = $(window).scrollTop() + window.innerHeight - 50;
  //   $(scrolling).each(function () {
  //     if (scroll > $(this).offset().top && this.showed) {
  //       $(this).removeClass('body-scrolled');
  //       this.showed = false;
  //     }
  //   });
  // });
  //Плавный переход
  // $('a[href^="#"]').on('click', function (e) {
  //   e.preventDefault();
  //   let href = this.hash;
  //   let hrefTo = $(`${href}`);
  //   $('html, body').animate({ scrollTop: hrefTo.offset().top }, 'slow');
  // });
  Object(_layouts_header_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_blocks_main_services_services__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_blocks_main_types_types__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_blocks_main_request_request__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_components_slide_slide__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_blocks_media_media__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_blocks_modals_modal_district_modal_district__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_layouts_modal_modal__WEBPACK_IMPORTED_MODULE_12__["modalClose"])();
  Object(_blocks_main_squad_squad__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
Object(_blocks_main_articles_articles__WEBPACK_IMPORTED_MODULE_7__["default"])();
Object(_blocks_main_partners_partners__WEBPACK_IMPORTED_MODULE_8__["default"])();
Object(_blocks_main_benefits_benefits__WEBPACK_IMPORTED_MODULE_9__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map