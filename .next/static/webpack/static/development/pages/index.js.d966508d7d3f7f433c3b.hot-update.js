webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/banner/index.js":
/*!************************************!*\
  !*** ./components/banner/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.less */ "./components/banner/index.less");








var _jsxFileName = "/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/banner/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var Banner = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Banner, _React$Component);

  function Banner(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Banner);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner).call(this, props));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      carouselBgColor: '#fbf0de'
    });

    _this.state.banners = [{
      src: '/static/images/banner1.png',
      color: '#E94846'
    }, {
      src: '/static/images/banner1.png',
      color: '#E94846'
    }];
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Banner, [{
    key: "render",
    value: function render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // pauseOnFocus: true,
        dotsClass: 'slick-dots td-dot' // beforeChange: (oi, ni) => {
        //   this.setState({
        //     carouselBgColor: banners[ni].color
        //   })
        // }

      };
      var banners = this.state.banners;
      return __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "carousel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "banner-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_9___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), banners.map(function (i) {
        return __jsx("div", {
          key: i,
          className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_11__["default"].__hash) + " " + "banner-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("img", {
          src: i.src,
          alt: "",
          className: "jsx-".concat(_index_less__WEBPACK_IMPORTED_MODULE_11__["default"].__hash),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: _index_less__WEBPACK_IMPORTED_MODULE_11__["default"].__hash,
        __self: this
      }, _index_less__WEBPACK_IMPORTED_MODULE_11__["default"]));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./components/banner/index.less":
/*!**************************************!*\
  !*** ./components/banner/index.less ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _defaultExport = new String(".carousel.jsx-669356461{border:1px solid red;}.carousel.jsx-669356461 .banner-wrap.jsx-669356461 .banner-item.jsx-669356461{height:640px;width:1200px;}.carousel.jsx-669356461 .td-dot{bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhhby9EZXNrdG9wL+S4reWSjOeJqeiBlOe9kS9uZXctd2Vic2l0ZS9jb21wb25lbnRzL2Jhbm5lci9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUV3QixBQUdSLEFBSUQsWUFDZCxDQUplLFFBSGYsS0FJQSIsImZpbGUiOiIvVXNlcnMvbGloYW8vRGVza3RvcC/kuK3lkoznianogZTnvZEvbmV3LXdlYnNpdGUvY29tcG9uZW50cy9iYW5uZXIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjc3NgLmNhcm91c2VsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuLmNhcm91c2VsIC5iYW5uZXItd3JhcCAuYmFubmVyLWl0ZW0ge1xuICBoZWlnaHQ6IDY0MHB4O1xuICB3aWR0aDogMTIwMHB4O1xufVxuLmNhcm91c2VsIDpnbG9iYWwoLnRkLWRvdCkge1xuICBib3R0b206IDEwcHg7XG59XG5gIl19 */\n/*@ sourceURL=/Users/lihao/Desktop/\u4E2D\u548C\u7269\u8054\u7F51/new-website/components/banner/index.less */");

_defaultExport.__hash = "669356461";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ })

})
//# sourceMappingURL=index.js.d966508d7d3f7f433c3b.hot-update.js.map