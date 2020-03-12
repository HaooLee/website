webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/companyLogo/index.js":
/*!*****************************************!*\
  !*** ./components/companyLogo/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompanyLogo; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./components/companyLogo/index.less");







var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/companyLogo/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



var CompanyLogo = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CompanyLogo, _React$Component);

  function CompanyLogo(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CompanyLogo);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CompanyLogo).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      styleType: {
        0: "#C1C1C1",
        1: "#DCDCDC",
        2: '#ECECEC'
      }
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CompanyLogo, [{
    key: "render",
    value: function render() {
      var styleType = this.state.styleType;
      var _this$props = this.props,
          styleNum = _this$props.styleNum,
          logoSrc = _this$props.logoSrc;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        style: {
          backgroundColor: styleType[styleNum]
        },
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["default"].__hash) + " " + "company-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx("img", {
        src: logoSrc,
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_9__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: _index_less__WEBPACK_IMPORTED_MODULE_9__["default"].__hash,
        __self: this
      }, _index_less__WEBPACK_IMPORTED_MODULE_9__["default"]));
    }
  }]);

  return CompanyLogo;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ }),

/***/ "./components/companyLogo/index.less":
/*!*******************************************!*\
  !*** ./components/companyLogo/index.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".company-logo.jsx-2478751016{width:320px;height:159px;text-align:center;line-height:159px;}.company-logo.jsx-2478751016 img.jsx-2478751016{display:inline-block;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2NvbXBhbnlMb2dvL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWUsQUFNUyxZQUxSLFNBTVMsSUFMSixrQkFDQSxBQUtwQixrQkFKQSIsImZpbGUiOiIvVXNlcnMvbGloYW8vRGVza3RvcC/kuK3lkoznianogZTnvZEvbmV3LXdlYnNpdGUvY29tcG9uZW50cy9jb21wYW55TG9nby9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AuY29tcGFueS1sb2dvIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDE1OXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNTlweDtcbn1cbi5jb21wYW55LWxvZ28gaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuYCJdfQ== */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/companyLogo/index.less */");

_defaultExport.__hash = "2478751016";
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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/banner */ "./components/banner/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./pages/index/index.less");
/* harmony import */ var _components_sectionCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/sectionCard */ "./components/sectionCard/index.js");
/* harmony import */ var _components_solutionCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/solutionCard */ "./components/solutionCard/index.js");
/* harmony import */ var _components_companyLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/companyLogo */ "./components/companyLogo/index.js");





var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/pages/index/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





 // import {FormattedMessage} from 'react-intl'

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(_components_banner__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), __jsx("section", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "w product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7")), __jsx("span", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "+"), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7")), __jsx("span", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "+"), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u54C1\u724C\u8BA4\u8BC1+\u77ED\u4FE1\u8D4B\u80FD"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1\u516C\u4F17\u53F7"))), __jsx("img", {
        src: "/static/images/center-pic.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "center-pic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }))), __jsx("section", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "feature-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "w feature-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/sms.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1"), __jsx("h3", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "\u65B0\u77ED\u4FE1\u3001\u65B0\u8425\u9500"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
        href: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1"), " \u4E86\u89E3\u66F4\u591A\u6548\u679C\u8F6C\u5316\u65B0\u73A9\u6CD5")))), __jsx("section", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "feature-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "w feature-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u573A\u666F\u6D88\u606F"), __jsx("h3", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "\u591A\u5F62\u5F0F\u3001\u6548\u7387\u9AD8\u3001\u5168\u573A\u666F\u3001 \u7701\u6210\u672C"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
        href: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u573A\u666F\u6D88\u606F"), " \u4E86\u89E3\u66F4\u591A\u6548\u679C\u8F6C\u5316\u65B0\u73A9\u6CD5")), __jsx("img", {
        src: "/static/images/senceMsg.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }))), __jsx("section", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "feature-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "w feature-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/\u53F7\u7801\u8BA4\u8BC1@2x.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u53F7\u7801\u8BA4\u8BC1"), __jsx("h3", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "\u6765\u7535\u63A5\u7684\u5B89\u5FC3\uFF0C\u53BB\u7535\u4E0D\u518D\u88AB\u62D2\u7EDD"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
        href: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "\u53F7\u7801\u8BA4\u8BC1"), " \u89E3\u9501")))), __jsx("section", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "feature-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "w feature-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("h2", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u5FEB\u5E94\u7528"), __jsx("h3", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "\u514D\u5B89\u88C5\u3001\u514D\u5B58\u50A8\u3001\u4E00\u952E\u76F4\u8FBE\u3001\u66F4\u65B0\u76F4\u63A5\u63A8\u9001"), __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\u9A6C\u4E0A\u901A\u8FC7 ", __jsx("a", {
        href: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "\u667A\u80FD\u77ED\u4FE1"), " \u89E3\u9501\u66F4\u591A\u8425\u9500\u65B0\u73A9\u6CD5")), __jsx("img", {
        src: "/static/images/sms.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }))), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: '为不同行业提供专业的全场景营销解决方案',
        bgc: "#F8FAFF",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "sloution-card-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '金融',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '互联网金融',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '运营商',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '金融',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '互联网金融',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx(_components_solutionCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: '/static/images/jr.png',
        title: '运营商',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: '覆盖主流手机厂商',
        desc: '泰迪熊移动利用自身强大的技术优势，与OPPO、vivo、魅族、金立、联想、乐视、酷派、阿里YunOS等国内主流手机厂商进行了深度合\n' + '作，累计覆盖终端7亿+，日活用户4亿。',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("img", {
        src: "/static/images/\u5408\u4F5C\u5382\u5546@2x.png",
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash) + " " + "cp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: '这些成功的企业正在使用泰迪熊移动',
        desc: '泰迪熊移动成立于2014年，已为京东、淘宝、苏宁、携程、屈臣氏、建设银行、招商银行、百度等国内百家企业提供大数据和场景服务，\n' + '覆盖快消、电商、零售、互联网、手机厂商、金融、旅游、教育等数十个行业，助力客户建设场景生态。',
        overflow: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, Array(12).fill({
        src: '/static/images/京东@2x.png'
      }).map(function (i, idx) {
        return __jsx(_components_companyLogo__WEBPACK_IMPORTED_MODULE_11__["default"], {
          styleNum: idx,
          logoSrc: i.src,
          key: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        });
      })), __jsx(_components_sectionCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: '热点资讯',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _index_less__WEBPACK_IMPORTED_MODULE_8__["default"].__hash,
        __self: this
      }, _index_less__WEBPACK_IMPORTED_MODULE_8__["default"]));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.ddab3235793b40fdae85.hot-update.js.map