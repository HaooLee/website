webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/newsCard/index.js":
/*!**************************************!*\
  !*** ./components/newsCard/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsCard; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.less */ "./components/newsCard/index.less");





var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/newsCard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var NewsCard = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewsCard, _React$Component);

  function NewsCard(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewsCard);

    return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewsCard).call(this, props));
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewsCard, [{
    key: "render",
    value: function render() {
      var picSrc = this.props.picSrc;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "news-card-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "pic-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("img", {
        src: picSrc,
        alt: "",
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\u5F00\u53D1\u8005\u5927\u4F1A"), __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "desc-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("p", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + "desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: _index_less__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
        __self: this
      }, _index_less__WEBPACK_IMPORTED_MODULE_7__["default"]));
    }
  }]);

  return NewsCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/newsCard/index.less":
/*!****************************************!*\
  !*** ./components/newsCard/index.less ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".news-card-wrap.jsx-2583685012{width:1197px;height:323px;background:#ffffff;box-shadow:0px 12px 23px 4px rgba(216,223,229,0.65);box-sizing:border-box;padding:41px 35px;}.news-card-wrap.jsx-2583685012 .pic-wrap.jsx-2583685012{width:400px;height:241px;overflow:hidden;border:1px solid #eee;float:left;}.news-card-wrap.jsx-2583685012 .pic-wrap.jsx-2583685012 img.jsx-2583685012{width:100%;height:100%;}.news-card-wrap.jsx-2583685012 .content.jsx-2583685012{padding-left:80px;border:1px solid;overflow:hidden;}.news-card-wrap.jsx-2583685012 .content.jsx-2583685012 .title.jsx-2583685012{width:600px;font-size:30px;font-family:Source Han Sans CN;font-weight:bold;color:#333333;line-height:24px;}.news-card-wrap.jsx-2583685012 .content.jsx-2583685012 .desc-wrap.jsx-2583685012 .desc.jsx-2583685012{font-size:20px;font-family:Source Han Sans CN;font-weight:400;color:#666666;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL25ld3NDYXJkL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWtCLEFBRWdCLEFBUUQsQUFPRCxBQUlPLEFBS04sQUFRRyxXQWhCSCxDQVBDLEFBZ0JFLENBeEJGLEVBZ0NrQixHQWJkLEtBSG5CLEVBUGtCLENBUkcsQ0F3QlksUUFMZixNQVZNLElBUmlDLENBK0J2QyxLQVpsQixPQUttQixJQVFILENBdkJILFdBQ2IsQ0FlZ0IsQ0FRRyxhQVBBLElBUW5CLElBakN3QixTQTBCeEIsYUF6Qm9CLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbGloYW8vRGVza3RvcC/kuK3lkoznianogZTnvZEvbmV3LXdlYnNpdGUvY29tcG9uZW50cy9uZXdzQ2FyZC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNzc2AubmV3cy1jYXJkLXdyYXAge1xuICB3aWR0aDogMTE5N3B4O1xuICBoZWlnaHQ6IDMyM3B4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyM3B4IDRweCByZ2JhKDIxNiwgMjIzLCAyMjksIDAuNjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA0MXB4IDM1cHg7XG59XG4ubmV3cy1jYXJkLXdyYXAgLnBpYy13cmFwIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDI0MXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5uZXdzLWNhcmQtd3JhcCAucGljLXdyYXAgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5uZXdzLWNhcmQtd3JhcCAuY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogODBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQgLnRpdGxlIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBTb3VyY2UgSGFuIFNhbnMgQ047XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ubmV3cy1jYXJkLXdyYXAgLmNvbnRlbnQgLmRlc2Mtd3JhcCAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFNvdXJjZSBIYW4gU2FucyBDTjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuYCJdfQ== */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/newsCard/index.less */");

_defaultExport.__hash = "2583685012";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ })

})
//# sourceMappingURL=index.js.4320405f61869a9f9787.hot-update.js.map