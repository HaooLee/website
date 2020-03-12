module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/banner/index.js":
/*!************************************!*\
  !*** ./components/banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./components/banner/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/banner/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Banner extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      carouselBgColor: '#fbf0de'
    });

    this.state.banners = [{
      src: '/static/images/banner1.png',
      color: '#E94846'
    }, {
      src: '/static/images/banner1.png',
      color: '#E94846'
    }];
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // pauseOnFocus: true,
      dotsClass: 'slick-dots hhb-dot' // beforeChange: (oi, ni) => {
      //   this.setState({
      //     carouselBgColor: banners[ni].color
      //   })
      // }

    };
    const {
      banners
    } = this.state;
    return __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "carousel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "banner-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, settings, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), banners.map(i => {
      return __jsx("div", {
        style: {
          background: `url(${i.src}) no-repeat center center`
        },
        key: i,
        className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "banner-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      });
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_3__["default"]));
  }

}

/***/ }),

/***/ "./components/banner/index.less":
/*!**************************************!*\
  !*** ./components/banner/index.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".carousel.jsx-1014022862{border:1px solid red;}.carousel.jsx-1014022862 .banner-wrap.jsx-1014022862 .banner-item.jsx-1014022862{height:640px;width:1200px;}.carousel.jsx-1014022862 .hhb-dot{bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2Jhbm5lci9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUV3QixBQUdSLEFBSUQsWUFDZCxDQUplLFFBSGYsS0FJQSIsImZpbGUiOiIvVXNlcnMvbGloYW8vRGVza3RvcC/kuK3lkoznianogZTnvZEvbmV3LXdlYnNpdGUvY29tcG9uZW50cy9iYW5uZXIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLmNhcm91c2VsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLmNhcm91c2VsIC5iYW5uZXItd3JhcCAuYmFubmVyLWl0ZW0ge1xuICBoZWlnaHQ6IDY0MHB4O1xuICB3aWR0aDogMTIwMHB4O1xufVxuLmNhcm91c2VsIDpnbG9iYWwoLmhoYi1kb3QpIHtcbiAgYm90dG9tOiAxMHB4O1xufVxuYCJdfQ== */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/banner/index.less */");

_defaultExport.__hash = "1014022862";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/companyLogo/index.js":
/*!*****************************************!*\
  !*** ./components/companyLogo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompanyLogo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/companyLogo/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/companyLogo/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CompanyLogo extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      styleType: {
        0: "#C1C1C1",
        1: "#DCDCDC",
        2: '#ECECEC'
      }
    });
  }

  render() {
    const {
      styleType
    } = this.state;
    const {
      styleNum,
      logoSrc
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      style: {
        backgroundColor: styleType[styleNum % 3]
      },
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "company-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: logoSrc,
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }

}

/***/ }),

/***/ "./components/companyLogo/index.less":
/*!*******************************************!*\
  !*** ./components/companyLogo/index.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".company-logo.jsx-3091468845{display:inline-block;width:16.66%;min-width:200px;height:159px;text-align:center;line-height:159px;}.company-logo.jsx-3091468845 img.jsx-3091468845{width:222px;height:125px;display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2NvbXBhbnlMb2dvL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRXdCLEFBUVQsWUFDQyxTQVJBLElBU1EsU0FSTCxZQVNNLElBUlQsYUFDSyxLQVFwQixhQVBvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2xpaGFvL0Rlc2t0b3Av5Lit5ZKM54mp6IGU572RL25ldy13ZWJzaXRlL2NvbXBvbmVudHMvY29tcGFueUxvZ28vaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLmNvbXBhbnktbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2LjY2JTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTU5cHg7XG59XG4uY29tcGFueS1sb2dvIGltZyB7XG4gIHdpZHRoOiAyMjJweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuYCJdfQ== */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/companyLogo/index.less */");

_defaultExport.__hash = "3091468845";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/footer/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "footer-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "w",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "company-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("ul", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("img", {
      src: "/static/images/qr.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "\u5BA2\u670D\u7535\u8BDD\uFF1A400-680-6000"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "\u5BA2\u670D\u90AE\u7BB1\uFF1Akefu@teddymobile.cn"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "\u5546\u52A1\u90AE\u7BB1\uFF1Abd@teddymobile.cn"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "\u5317\u4EAC\u603B\u90E8\uFF1A\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u4FE1\u606F\u8DEF\u753228\u53F77\u5C42D\u5EA77A3")), __jsx("ul", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\u4EA7\u54C1"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "\u53F7\u7801\u8BC6\u522B"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "\u5FEB\u5E94\u7528"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\u7F51\u7EDC\u6D88\u606F"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "DSP(\u5168\u57DF\u573A\u666F\u8425\u9500\u5E73\u53F0\uFF09")), __jsx("ul", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "\u5173\u4E8E\u6211\u4EEC"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "\u516C\u53F8\u4ECB\u7ECD"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "\u52A0\u5165\u6211\u4EEC"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "\u9690\u79C1\u7533\u660E"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "\u7533\u8BC9\u901A\u9053")), __jsx("ul", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u53CB\u60C5\u94FE\u63A5"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\u516C\u53F8\u4ECB\u7ECD"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\u52A0\u5165\u6211\u4EEC"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u9690\u79C1\u7533\u660E"), __jsx("li", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\u7533\u8BC9\u901A\u9053"))), __jsx("hr", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "registered-NO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\u5907\u6848\u53F7\uFF1A"), __jsx("a", {
      href: "http://www.beian.miit.gov.cn",
      target: "_blank",
      rel: "nofollow",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\u4EACICP\u590714051668\u53F7-2")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }

}

/***/ }),

/***/ "./components/footer/index.less":
/*!**************************************!*\
  !*** ./components/footer/index.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".footer-wrap.jsx-1069463500{background-color:#262626;height:601px;box-sizing:border-box;padding-top:113px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500{width:170px;height:267px;display:inline-block;vertical-align:top;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500 li.jsx-1069463500{position:relative;font-size:15px;font-family:Source Han Sans CN;font-weight:400;color:#fefefe;line-height:30px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500 li.jsx-1069463500 img.jsx-1069463500{width:143px;height:143px;margin-bottom:24px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500:last-child{width:100px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500:not(:last-child){margin-right:130px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500:not(:first-child){padding-top:68px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500:not(:first-child) li.jsx-1069463500:first-child{margin-bottom:40px;height:40px;font-size:16px;font-family:Source Han Sans CN;font-weight:bold;color:#fefefe;line-height:30px;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 ul.jsx-1069463500:not(:first-child) li.jsx-1069463500:first-child.jsx-1069463500:after{display:block;content:\"\";position:absolute;left:0;bottom:0;width:19px;height:1px;background-color:#fff;}.footer-wrap.jsx-1069463500 .company-info.jsx-1069463500 .info.jsx-1069463500{width:370px;}.footer-wrap.jsx-1069463500 .registered-NO.jsx-1069463500{margin-top:22px;}.footer-wrap.jsx-1069463500 .registered-NO.jsx-1069463500 span.jsx-1069463500,.footer-wrap.jsx-1069463500 .registered-NO.jsx-1069463500 a.jsx-1069463500{height:16px;font-size:16px;font-family:Source Han Sans CN;font-weight:400;color:#fefefe;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUU0QixBQU1iLEFBTU0sQUFRTixBQUtBLEFBR08sQUFHRixBQUdFLEFBU0wsQUFVRixBQUdJLEFBSUosWUFyREMsQUFjQSxBQUtmLEFBNEJBLEFBT2lCLEVBakJKLEVBYWIsQ0F6QkEsQ0FuQmlCLENBZ0JqQixBQU1jLE1BbENDLEFBT1EsQUFjRixBQXVCRCxFQWlCYSxJQTFCaEIsRUF0QmdCLEtBWlQsS0E0Q2YsQ0F2QlQsRUFkcUIsQUE0QlksSUFVdEIsUUFnQk8sQ0FmTCxDQTdDTyxJQVlGLENBTGxCLEtBdUNhLElBZUcsR0ExQkcsQ0FsQ25CLEVBWWdCLENBa0NRLE9BZUwsTUFoREEsQUFzQkgsU0FZaEIsRUFlQSxHQTFCbUIsR0F0Qm5CLGNBdUJBIiwiZmlsZSI6Ii9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2Zvb3Rlci9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuZm9vdGVyLXdyYXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBoZWlnaHQ6IDYwMXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nLXRvcDogMTEzcHg7XG59XG4uZm9vdGVyLXdyYXAgLmNvbXBhbnktaW5mbyB1bCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiAyNjdweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmZvb3Rlci13cmFwIC5jb21wYW55LWluZm8gdWwgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICNmZWZlZmU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmZvb3Rlci13cmFwIC5jb21wYW55LWluZm8gdWwgbGkgaW1nIHtcbiAgd2lkdGg6IDE0M3B4O1xuICBoZWlnaHQ6IDE0M3B4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmZvb3Rlci13cmFwIC5jb21wYW55LWluZm8gdWw6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5mb290ZXItd3JhcCAuY29tcGFueS1pbmZvIHVsOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDEzMHB4O1xufVxuLmZvb3Rlci13cmFwIC5jb21wYW55LWluZm8gdWw6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLXRvcDogNjhweDtcbn1cbi5mb290ZXItd3JhcCAuY29tcGFueS1pbmZvIHVsOm5vdCg6Zmlyc3QtY2hpbGQpIGxpOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBTb3VyY2UgSGFuIFNhbnMgQ047XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uZm9vdGVyLXdyYXAgLmNvbXBhbnktaW5mbyB1bDpub3QoOmZpcnN0LWNoaWxkKSBsaTpmaXJzdC1jaGlsZDphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmZvb3Rlci13cmFwIC5jb21wYW55LWluZm8gLmluZm8ge1xuICB3aWR0aDogMzcwcHg7XG59XG4uZm9vdGVyLXdyYXAgLnJlZ2lzdGVyZWQtTk8ge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuLmZvb3Rlci13cmFwIC5yZWdpc3RlcmVkLU5PIHNwYW4sXG4uZm9vdGVyLXdyYXAgLnJlZ2lzdGVyZWQtTk8gYSB7XG4gIGhlaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI2ZlZmVmZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5gIl19 */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/footer/index.less */");

_defaultExport.__hash = "1069463500";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/newsCard/index.js":
/*!**************************************!*\
  !*** ./components/newsCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/newsCard/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/newsCard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class NewsCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      picSrc,
      logoSrc,
      desc,
      company,
      date
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "news-card-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "pic-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      src: picSrc,
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      href: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "\u5F00\u53D1\u8005\u5927\u4F1A"), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "desc-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, desc)), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "date-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("img", {
      src: logoSrc,
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, company), __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, " | "), __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, date)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }

}

/***/ }),

/***/ "./components/newsCard/index.less":
/*!****************************************!*\
  !*** ./components/newsCard/index.less ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".news-card-wrap.jsx-1437551167{width:1197px;height:323px;background:#ffffff;box-shadow:0px 12px 23px 4px rgba(216,223,229,0.65);box-sizing:border-box;padding:41px 35px;}.news-card-wrap.jsx-1437551167 .pic-wrap.jsx-1437551167{width:400px;height:241px;overflow:hidden;border:1px solid #eee;float:left;}.news-card-wrap.jsx-1437551167 .pic-wrap.jsx-1437551167 img.jsx-1437551167{width:100%;height:100%;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167{padding-left:80px;overflow:hidden;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .title.jsx-1437551167{width:600px;font-size:30px;font-family:Source Han Sans CN;-webkit-text-decoration:none;text-decoration:none;font-weight:bold;color:#333333;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .desc-wrap.jsx-1437551167{width:600px;height:120px;margin-top:30px;overflow-y:auto;margin-bottom:30px;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .desc-wrap.jsx-1437551167 .desc.jsx-1437551167{font-size:20px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:30px;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .date-wrap.jsx-1437551167{height:30px;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .date-wrap.jsx-1437551167 img.jsx-1437551167{display:inline-block;width:30px;height:30px;vertical-align:middle;margin-right:15px;}.news-card-wrap.jsx-1437551167 .content.jsx-1437551167 .date-wrap.jsx-1437551167 span.jsx-1437551167{display:inline-block;vertical-align:middle;font-size:20px;font-family:Source Han Sans CN;font-weight:400;color:#666666;margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL25ld3NDYXJkL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWdCLEFBUUQsQUFPRCxBQUlPLEFBSU4sQUFRQSxBQU9HLEFBT0gsQUFHUyxBQU9BLFdBdkNULENBUEMsQUFlRSxBQVFGLEFBY2YsQ0E3Q2UsRUFzQ2tCLEdBbkJmLEdBNkJMLEFBT1csRUF2Q3hCLEVBUGtCLEFBdUJBLENBL0JHLENBdUJZLEtBeUJuQixFQTdCZCxPQVZ3QixBQXVCTixFQXVCRCxDQU5PLENBaERpQyxDQXFDdkMsV0FMRyxDQVRFLEFBZ0NVLElBakJqQixDQTdCSCxHQXdDTyxRQXZDcEIsRUF1QkEsQUFNbUIsUUFXbkIsS0FNa0IsSUFoQmxCLElBdkN3QixRQXdEUixHQWpDRyxXQXRCQyxBQXdEQSxNQWpDSixZQXRCaEIsQUF3REEsRUFqQ0EiLCJmaWxlIjoiL1VzZXJzL2xpaGFvL0Rlc2t0b3Av5Lit5ZKM54mp6IGU572RL25ldy13ZWJzaXRlL2NvbXBvbmVudHMvbmV3c0NhcmQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLm5ld3MtY2FyZC13cmFwIHtcbiAgd2lkdGg6IDExOTdweDtcbiAgaGVpZ2h0OiAzMjNweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjNweCA0cHggcmdiYSgyMTYsIDIyMywgMjI5LCAwLjY1KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogNDFweCAzNXB4O1xufVxuLm5ld3MtY2FyZC13cmFwIC5waWMtd3JhcCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyNDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmV3cy1jYXJkLXdyYXAgLnBpYy13cmFwIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBTb3VyY2UgSGFuIFNhbnMgQ047XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLm5ld3MtY2FyZC13cmFwIC5jb250ZW50IC5kZXNjLXdyYXAge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQgLmRlc2Mtd3JhcCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLm5ld3MtY2FyZC13cmFwIC5jb250ZW50IC5kYXRlLXdyYXAge1xuICBoZWlnaHQ6IDMwcHg7XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQgLmRhdGUtd3JhcCBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5uZXdzLWNhcmQtd3JhcCAuY29udGVudCAuZGF0ZS13cmFwIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmAiXX0= */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/newsCard/index.less */");

_defaultExport.__hash = "1437551167";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/sectionCard/index.js":
/*!*****************************************!*\
  !*** ./components/sectionCard/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SectionCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/sectionCard/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/sectionCard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SectionCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      bgc,
      desc,
      children,
      overflow
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
      style: {
        backgroundColor: bgc || '#fff'
      },
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "w",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("h2", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, title), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "desc",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, desc), !overflow && children), overflow && children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }

}

/***/ }),

/***/ "./components/sectionCard/index.less":
/*!*******************************************!*\
  !*** ./components/sectionCard/index.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("h2.jsx-693784038{position:relative;font-size:36px;font-family:Source Han Sans CN;margin-top:89px;padding-bottom:20px;margin-bottom:60px;font-weight:bold;color:#333333;line-height:30px;text-align:center;}h2.jsx-693784038:after{position:absolute;display:block;width:63px;height:3px;background-color:#355EA6;content:\"\";bottom:0;left:0;right:0;margin:auto;}.desc.jsx-693784038{max-width:1195px;font-size:20px;text-align:center;margin-bottom:16px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL3NlY3Rpb25DYXJkL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRXFCLEFBWUEsQUFZRCxpQkFDRixDQXhCQSxBQVlELGNBQ0gsQUFZTyxDQXhCYSxVQWFwQixPQVlRLElBWE0sVUFiVCxLQXlCZSxVQVhwQixDQWJTLFVBY1gsU0FDRixDQWRZLEFBd0JILE1BVFIsUUFDSSxFQVNFLEdBeEJHLE9BZ0JuQixJQVNtQixNQXhCSCxXQXlCaEIsR0F4Qm1CLGlCQUNDLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbGloYW8vRGVza3RvcC/kuK3lkoznianogZTnvZEvbmV3LXdlYnNpdGUvY29tcG9uZW50cy9zZWN0aW9uQ2FyZC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2BoMiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBtYXJnaW4tdG9wOiA4OXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaDI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNjNweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTVFQTY7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5kZXNjIHtcbiAgbWF4LXdpZHRoOiAxMTk1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5gIl19 */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/sectionCard/index.less */");

_defaultExport.__hash = "693784038";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./components/solutionCard/index.js":
/*!******************************************!*\
  !*** ./components/solutionCard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolutionCard; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./components/solutionCard/index.less");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/solutionCard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class SolutionCard extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      src,
      title
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "solution-card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}` + " " + "pic-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      src: src,
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, title)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_2__["default"]));
  }

}

/***/ }),

/***/ "./components/solutionCard/index.less":
/*!********************************************!*\
  !*** ./components/solutionCard/index.less ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".solution-card.jsx-1772100480{width:301px;height:219px;display:inline-block;background:#f8faff;margin-bottom:22px;box-shadow:0px 12px 23px 4px rgba(216,223,229,0.3);}.solution-card.jsx-1772100480 .pic-wrap.jsx-1772100480{width:301px;height:124px;overflow:hidden;border:1px solid #eee;}.solution-card.jsx-1772100480 .pic-wrap.jsx-1772100480 img.jsx-1772100480{width:301px;height:124px;}.solution-card.jsx-1772100480 p.jsx-1772100480{height:23px;font-size:24px;font-family:Source Han Sans CN;font-weight:400;color:#666666;margin-left:51px;margin-top:35px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL3NvbHV0aW9uQ2FyZC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVlLEFBUUEsQUFNQSxBQUlBLFlBakJDLEFBUUEsQUFNQSxBQUlFLGFBakJNLEFBUUwsQUFNbEIsRUFJaUMsY0FUVCxLQVJILFlBa0JILEtBVGxCLEVBUnFCLFNBa0JMLFVBakJ3QyxJQWtCckMsaUJBQ0QsZ0JBQ2xCLGNBbkJBIiwiZmlsZSI6Ii9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL3NvbHV0aW9uQ2FyZC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2Auc29sdXRpb24tY2FyZCB7XG4gIHdpZHRoOiAzMDFweDtcbiAgaGVpZ2h0OiAyMTlweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZmO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyM3B4IDRweCByZ2JhKDIxNiwgMjIzLCAyMjksIDAuMyk7XG59XG4uc29sdXRpb24tY2FyZCAucGljLXdyYXAge1xuICB3aWR0aDogMzAxcHg7XG4gIGhlaWdodDogMTI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG4uc29sdXRpb24tY2FyZCAucGljLXdyYXAgaW1nIHtcbiAgd2lkdGg6IDMwMXB4O1xuICBoZWlnaHQ6IDEyNHB4O1xufVxuLnNvbHV0aW9uLWNhcmQgcCB7XG4gIGhlaWdodDogMjNweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbWFyZ2luLWxlZnQ6IDUxcHg7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5gIl19 */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/solutionCard/index.less */");

_defaultExport.__hash = "1772100480";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./pages/index/index.js":
/*!******************************!*\
  !*** ./pages/index/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/banner */ "./components/banner/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./pages/index/index.less");
/* harmony import */ var _components_sectionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/sectionCard */ "./components/sectionCard/index.js");
/* harmony import */ var _components_solutionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/solutionCard */ "./components/solutionCard/index.js");
/* harmony import */ var _components_companyLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/companyLogo */ "./components/companyLogo/index.js");
/* harmony import */ var _components_newsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/newsCard */ "./components/newsCard/index.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/footer */ "./components/footer/index.js");
var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/pages/index/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // import {FormattedMessage} from 'react-intl'

class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_banner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("section", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "w product",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7")), __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "+"), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7")), __jsx("span", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "+"), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7"))), __jsx("img", {
      src: "/static/images/center-pic.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "center-pic",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))), __jsx("section", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "feature-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "w feature-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("img", {
      src: "/static/images/sms.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("h2", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1"), __jsx("h3", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u65B0\u77ED\u4FE1\u3001\u65B0\u8425\u9500"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
      href: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1"), " \u4E86\u89E3\u66F4\u591A\u6548\u679C\u8F6C\u5316\u65B0\u73A9\u6CD5")))), __jsx("section", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "feature-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "w feature-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("h2", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\u573A\u666F\u6D88\u606F"), __jsx("h3", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "\u591A\u5F62\u5F0F\u3001\u6548\u7387\u9AD8\u3001\u5168\u573A\u666F\u3001 \u7701\u6210\u672C"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
      href: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "\u573A\u666F\u6D88\u606F"), " \u4E86\u89E3\u66F4\u591A\u6548\u679C\u8F6C\u5316\u65B0\u73A9\u6CD5")), __jsx("img", {
      src: "/static/images/senceMsg.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }))), __jsx("section", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "feature-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "w feature-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("img", {
      src: "/static/images/\u53F7\u7801\u8BA4\u8BC1@2x.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("h2", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "\u53F7\u7801\u8BA4\u8BC1"), __jsx("h3", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "\u6765\u7535\u63A5\u7684\u5B89\u5FC3\uFF0C\u53BB\u7535\u4E0D\u518D\u88AB\u62D2\u7EDD"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
      href: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "\u53F7\u7801\u8BA4\u8BC1"), " \u89E3\u9501")))), __jsx("section", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "feature-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "w feature-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("h2", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "\u5FEB\u5E94\u7528"), __jsx("h3", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "\u514D\u5B89\u88C5\u3001\u514D\u5B58\u50A8\u3001\u4E00\u952E\u76F4\u8FBE\u3001\u66F4\u65B0\u76F4\u63A5\u63A8\u9001"), __jsx("p", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
      href: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "\u667A\u80FD\u77ED\u4FE1"), " \u89E3\u9501\u66F4\u591A\u8425\u9500\u65B0\u73A9\u6CD5")), __jsx("img", {
      src: "/static/images/sms.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }))), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: '为不同行业提供专业的全场景营销解决方案',
      bgc: "#F8FAFF",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "sloution-card-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '金融',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '互联网金融',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '运营商',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '金融',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '互联网金融',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: '/static/images/jr.png',
      title: '运营商',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }))), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: '覆盖主流手机厂商',
      desc: '泰迪熊移动利用自身强大的技术优势，与OPPO、vivo、魅族、金立、联想、乐视、酷派、阿里YunOS等国内主流手机厂商进行了深度合\n' + '作，累计覆盖终端7亿+，日活用户4亿。',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("img", {
      src: "/static/images/\u5408\u4F5C\u5382\u5546@2x.png",
      alt: "",
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "cp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    })), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: '这些成功的企业正在使用泰迪熊移动',
      desc: '泰迪熊移动成立于2014年，已为京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度等国内百家企业提供大数据和场景服务，\n' + '覆盖快消、电商、零售、互联网、手机厂商、金融、旅游、教育等数十个行业，助力客户建设场景生态。',
      overflow: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "company-card-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, Array(12).fill({
      src: '/static/images/京东@2x.png'
    }).map((i, idx) => __jsx(_components_companyLogo__WEBPACK_IMPORTED_MODULE_6__["default"], {
      styleNum: idx,
      logoSrc: i.src,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    })))), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: '热点资讯',
      bgc: '#F7F7F7',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: `jsx-${_index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "news-wrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(_components_newsCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      company: "泰迪资讯",
      date: '2020年2月14日',
      logoSrc: "/static/images/图层 18@2x.png",
      desc: "这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动这些成功的企业正在使用泰迪熊移动",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: _index_less__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
      __self: this
    }, _index_less__WEBPACK_IMPORTED_MODULE_3__["default"]));
  }

}

/***/ }),

/***/ "./pages/index/index.less":
/*!********************************!*\
  !*** ./pages/index/index.less ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String(".product.jsx-3007256912{position:relative;height:1004px;}.product.jsx-3007256912 .card.jsx-3007256912{display:inline-block;line-height:100%;width:183px;height:162px;margin-top:85px;margin-left:7px;margin-right:7px;border:2px solid #c2dbfd;box-shadow:0px 12px 23px 4px rgba(216,223,229,0.3);}.product.jsx-3007256912 .center-pic.jsx-3007256912{position:absolute;width:787px;height:628px;margin:-54px auto 0;left:0px;right:0px;}.feature-left.jsx-3007256912{height:701px;background-color:#F8FAFF;}.feature-left.jsx-3007256912 .feature-content.jsx-3007256912 img.jsx-3007256912{width:257px;height:521px;margin-top:90px;margin-left:180px;}.feature-left.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912{display:inline-block;vertical-align:top;}.feature-left.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 h2.jsx-3007256912{width:145px;height:34px;font-size:36px;margin-top:180px;margin-left:226px;margin-bottom:51px;font-family:Source Han Sans CN;font-weight:bold;color:#333333;}.feature-left.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 h3.jsx-3007256912{height:23px;font-size:24px;margin-left:226px;margin-bottom:30px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:36px;}.feature-left.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 p.jsx-3007256912{height:18px;font-size:18px;margin-left:226px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:36px;}.feature-right.jsx-3007256912{height:701px;}.feature-right.jsx-3007256912 .feature-content.jsx-3007256912 img.jsx-3007256912{width:257px;height:521px;margin-top:90px;margin-left:180px;}.feature-right.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912{display:inline-block;vertical-align:top;}.feature-right.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 h2.jsx-3007256912{width:145px;height:34px;font-size:36px;margin-top:180px;margin-left:226px;margin-bottom:51px;font-family:Source Han Sans CN;font-weight:bold;color:#333333;}.feature-right.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 h3.jsx-3007256912{height:23px;font-size:24px;margin-left:226px;margin-bottom:30px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:36px;}.feature-right.jsx-3007256912 .feature-content.jsx-3007256912 .text.jsx-3007256912 p.jsx-3007256912{height:18px;font-size:18px;margin-left:226px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:36px;}.sloution-card-wrap.jsx-3007256912{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:950px;margin:auto;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.cp.jsx-3007256912{width:1200px;}.company-card-wrap.jsx-3007256912{margin-top:90px;}.news-wrap.jsx-3007256912{margin-bottom:90px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9wYWdlcy9pbmRleC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVxQixBQUlHLEFBV0gsQUFRTCxBQUlELEFBTVMsQUFJVCxBQVdBLEFBVUEsQUFTQyxBQUdELEFBTVMsQUFJVCxBQVdBLEFBVUEsQUFTQyxBQU9BLEFBR0csQUFHRyxZQS9GTixBQVVELEFBV0csQUFVQSxBQVlGLEFBVUQsQUFXRyxBQVVBLENBOUVVLEFBNEMzQixBQWtEQSxHQUdBLEVBeEhnQixBQWVGLENBNEdkLEVBdkhtQixBQTZCRSxBQTJDQSxHQXRDSixBQTJDQSxDQXJEQyxBQTJDQSxFQXRCRSxBQVVBLEFBaUNBLEFBVUEsR0F0RkwsRUFmZixNQUljLEFBbUJkLENBZW1CLEFBMkNBLENBaERuQixBQTJDQSxDQWhEb0IsQUEyQ0EsRUF2REUsRUFpQ0QsQUFVWSxBQWlDWixBQVVZLEtBakdsQixNQWtDSyxBQTJDQSxHQXJEcEIsQUEyQ0EsSUFsRWtCLEFBV1AsQ0FpQ3NCLEFBMkNBLFFBM0VyQixFQXNCUyxBQTJDQSxBQTBCUCxFQWpESSxBQTJDQSxHQWhHQSxHQVlsQixJQTJGYyxNQWpERSxBQTJDQSxDQS9EaUIsQUEyQ0EsRUE1RWQsQUEyQ0QsQUEyQ0EsR0FpQmMsUUFqRGIsQUEyQ0EsS0FyREgsQUEyQ0EsQ0F0RlcsV0FzRDNCLEFBMkNBLENBaEVtQixBQTJDQSxDQWhDQSxBQTJDQSxZQXRGcUMsSUFpQ3hDLEFBMkNBLENBaENoQixBQTJDQSxhQXJEQSxBQTJDQSxpQ0E1RUEseUJBcUdpQix5REFDakIiLCJmaWxlIjoiL1VzZXJzL2xpaGFvL0Rlc2t0b3Av5Lit5ZKM54mp6IGU572RL25ldy13ZWJzaXRlL3BhZ2VzL2luZGV4L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5wcm9kdWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMDRweDtcbn1cbi5wcm9kdWN0IC5jYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE4M3B4O1xuICBoZWlnaHQ6IDE2MnB4O1xuICBtYXJnaW4tdG9wOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2MyZGJmZDtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjNweCA0cHggcmdiYSgyMTYsIDIyMywgMjI5LCAwLjMpO1xufVxuLnByb2R1Y3QgLmNlbnRlci1waWMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3ODdweDtcbiAgaGVpZ2h0OiA2MjhweDtcbiAgbWFyZ2luOiAtNTRweCBhdXRvIDA7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cbi5mZWF0dXJlLWxlZnQge1xuICBoZWlnaHQ6IDcwMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGQUZGO1xufVxuLmZlYXR1cmUtbGVmdCAuZmVhdHVyZS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAyNTdweDtcbiAgaGVpZ2h0OiA1MjFweDtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xufVxuLmZlYXR1cmUtbGVmdCAuZmVhdHVyZS1jb250ZW50IC50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuLmZlYXR1cmUtbGVmdCAuZmVhdHVyZS1jb250ZW50IC50ZXh0IGgyIHtcbiAgd2lkdGg6IDE0NXB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLXRvcDogMTgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTFweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZlYXR1cmUtbGVmdCAuZmVhdHVyZS1jb250ZW50IC50ZXh0IGgzIHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLmZlYXR1cmUtbGVmdCAuZmVhdHVyZS1jb250ZW50IC50ZXh0IHAge1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzY2NjY2NjtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG59XG4uZmVhdHVyZS1yaWdodCB7XG4gIGhlaWdodDogNzAxcHg7XG59XG4uZmVhdHVyZS1yaWdodCAuZmVhdHVyZS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiAyNTdweDtcbiAgaGVpZ2h0OiA1MjFweDtcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xufVxuLmZlYXR1cmUtcmlnaHQgLmZlYXR1cmUtY29udGVudCAudGV4dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5mZWF0dXJlLXJpZ2h0IC5mZWF0dXJlLWNvbnRlbnQgLnRleHQgaDIge1xuICB3aWR0aDogMTQ1cHg7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBtYXJnaW4tdG9wOiAxODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIyNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MXB4O1xuICBmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmVhdHVyZS1yaWdodCAuZmVhdHVyZS1jb250ZW50IC50ZXh0IGgzIHtcbiAgaGVpZ2h0OiAyM3B4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLmZlYXR1cmUtcmlnaHQgLmZlYXR1cmUtY29udGVudCAudGV4dCBwIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMjZweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xufVxuLnNsb3V0aW9uLWNhcmQtd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5NTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5jcCB7XG4gIHdpZHRoOiAxMjAwcHg7XG59XG4uY29tcGFueS1jYXJkLXdyYXAge1xuICBtYXJnaW4tdG9wOiA5MHB4O1xufVxuLm5ld3Mtd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDkwcHg7XG59XG5gIl19 */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/pages/index/index.less */");

_defaultExport.__hash = "3007256912";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./pages/index/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lihao/Desktop/中和物联网/new-website/pages/index/index.js */"./pages/index/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map