webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/navbar/CollapseMenu.tsx":
/*!********************************************!*\
  !*** ./components/navbar/CollapseMenu.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
    _jsxFileName = "F:\\Projects\\nidratech.com\\components\\navbar\\CollapseMenu.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var CollapseMenu = function CollapseMenu(_ref) {
  _s();

  var isNavbarOpen = _ref.isNavbarOpen,
      setIsNavbarOpen = _ref.setIsNavbarOpen;

  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"])({
    open: isNavbarOpen ? 0 : 1
  }),
      open = _useSpring.open;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  if (isNavbarOpen) {
    return __jsx(CollapseWrapper, {
      style: {
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200]
        }).interpolate(function (openValue) {
          return "translate3d(0, ".concat(openValue, "px, 0");
        })
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx(NavLinks, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/',
      passHref: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx(NavItem, {
      as: "a",
      title: 'Home',
      onClick: function onClick() {
        return setIsNavbarOpen(false);
      },
      isActive: pathname === '/',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, "Home"))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/clients',
      passHref: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(NavItem, {
      as: "a",
      title: 'Clients',
      onClick: function onClick() {
        return setIsNavbarOpen(false);
      },
      isActive: pathname === '/clients',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, "Clients"))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/projects',
      passHref: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx(NavItem, {
      as: "a",
      title: 'Projects',
      onClick: function onClick() {
        return setIsNavbarOpen(false);
      },
      isActive: pathname === '/projects',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, "Projects"))), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: '/contact',
      passHref: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx(NavItem, {
      as: "a",
      title: 'Contact',
      onClick: function onClick() {
        return setIsNavbarOpen(false);
      },
      isActive: pathname === '/contact',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, "Contact")))));
  }

  return null;
};

_s(CollapseMenu, "iExunLE4bQKF8G4FwvomFeCQaus=", false, function () {
  return [react_spring__WEBPACK_IMPORTED_MODULE_2__["useSpring"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = CollapseMenu;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "NavItem",
  componentId: "sc-3dpomo-0"
})(["display:flex;padding:0 ", ";color:", ";:hover{color:", ";}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive,
      theme = _ref3.theme;
  return isActive ? theme.colors.brand : theme.colors.grey;
}, function (_ref4) {
  var isActive = _ref4.isActive,
      theme = _ref4.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.05, isActive ? theme.colors.brand : theme.colors.grey);
});
_c2 = NavItem;
var CollapseWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_2__["animated"].div).withConfig({
  displayName: "CollapseWrapper",
  componentId: "sc-3dpomo-1"
})(["background:", ";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"], function (_ref5) {
  var theme = _ref5.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["darken"])(0.05, theme.colors.white);
});
_c3 = CollapseWrapper;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "NavLinks",
  componentId: "sc-3dpomo-2"
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;align-items:center;@media (min-width:48rem){display:none;}"]);
_c4 = NavLinks;
/* harmony default export */ __webpack_exports__["default"] = (CollapseMenu);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "CollapseMenu");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "CollapseWrapper");
$RefreshReg$(_c4, "NavLinks");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9Db2xsYXBzZU1lbnUudHN4Il0sIm5hbWVzIjpbIkNvbGxhcHNlTWVudSIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVNwcmluZyIsIm9wZW4iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwicmFuZ2UiLCJvdXRwdXQiLCJvcGVuVmFsdWUiLCJOYXZJdGVtIiwic3R5bGVkIiwiYSIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiQ29sbGFwc2VXcmFwcGVyIiwiYW5pbWF0ZWQiLCJkaXYiLCJ3aGl0ZSIsIk5hdkxpbmtzIiwidWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUE4QztBQUFBOztBQUFBLE1BQTNDQyxZQUEyQyxRQUEzQ0EsWUFBMkM7QUFBQSxNQUE3QkMsZUFBNkIsUUFBN0JBLGVBQTZCOztBQUFBLG1CQUNoREMsOERBQVMsQ0FBQztBQUFFQyxRQUFJLEVBQUVILFlBQVksR0FBRyxDQUFILEdBQU87QUFBM0IsR0FBRCxDQUR1QztBQUFBLE1BQ3pERyxJQUR5RCxjQUN6REEsSUFEeUQ7O0FBQUEsbUJBRTVDQyw2REFBUyxFQUZtQztBQUFBLE1BRXpEQyxRQUZ5RCxjQUV6REEsUUFGeUQ7O0FBSWpFLE1BQUlMLFlBQUosRUFBa0I7QUFDaEIsV0FDRSxNQUFDLGVBQUQ7QUFDRSxXQUFLLEVBQUU7QUFDTE0saUJBQVMsRUFBRUgsSUFBSSxDQUNaSSxXQURRLENBQ0k7QUFDWEMsZUFBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxDQURJO0FBRVhDLGdCQUFNLEVBQUUsQ0FB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R0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWhCLEdBQXdCTCxLQUFLLENBQUNJLE1BQU4sQ0FBYUUsSUFBdkU7QUFBQSxDQUhFLEVBTUE7QUFBQSxNQUFHSCxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhSCxLQUFiLFNBQWFBLEtBQWI7QUFBQSxTQUNQTyx1REFBTSxDQUFDLElBQUQsRUFBT0osUUFBUSxHQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBaEIsR0FBd0JMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxJQUFwRCxDQURDO0FBQUEsQ0FOQSxDQUFiO01BQU1ULE87QUFVTixJQUFNVyxlQUFlLEdBQUdWLGlFQUFNLENBQUNXLHFEQUFRLENBQUNDLEdBQVYsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4RUFDTDtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVPLHVEQUFNLENBQUMsSUFBRCxFQUFPUCxLQUFLLENBQUNJLE1BQU4sQ0FBYU8sS0FBcEIsQ0FBckI7QUFBQSxDQURLLENBQXJCO01BQU1ILGU7QUFRTixJQUFNSSxRQUFRLEdBQUdkLHlEQUFNLENBQUNlLEVBQVY7QUFBQTtBQUFBO0FBQUEsZ0lBQWQ7TUFBTUQsUTtBQVdTM0IsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYmM3Yjg2YTQ1YzFhMTk5MzEwMDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzTmF2YmFyT3BlbjogYm9vbGVhbjtcclxuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ29sbGFwc2VNZW51ID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IG9wZW4gfSA9IHVzZVNwcmluZyh7IG9wZW46IGlzTmF2YmFyT3BlbiA/IDAgOiAxIH0pO1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAoaXNOYXZiYXJPcGVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29sbGFwc2VXcmFwcGVyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogb3BlblxyXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoe1xyXG4gICAgICAgICAgICAgIHJhbmdlOiBbMCwgMC4yLCAwLjMsIDFdLFxyXG4gICAgICAgICAgICAgIG91dHB1dDogWzAsIC0yMCwgMCwgLTIwMF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZSgob3BlblZhbHVlKSA9PiBgdHJhbnNsYXRlM2QoMCwgJHtvcGVuVmFsdWV9cHgsIDBgKSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jbGllbnRzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J0NsaWVudHMnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jbGllbnRzJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGllbnRzXHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydQcm9qZWN0cyd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydDb250YWN0J31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L05hdkxpbmtzPlxyXG4gICAgICA8L0NvbGxhcHNlV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cclxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbGxhcHNlV3JhcHBlciA9IHN0eWxlZChhbmltYXRlZC5kaXYpYFxyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy53aGl0ZSl9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQuNXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9