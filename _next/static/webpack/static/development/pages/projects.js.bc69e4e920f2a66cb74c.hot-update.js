webpackHotUpdate("static\\development\\pages\\projects.js",{

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
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;@media (min-width:", "){display:none;}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.breakpoints.mobile;
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9Db2xsYXBzZU1lbnUudHN4Il0sIm5hbWVzIjpbIkNvbGxhcHNlTWVudSIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVNwcmluZyIsIm9wZW4iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwicmFuZ2UiLCJvdXRwdXQiLCJvcGVuVmFsdWUiLCJOYXZJdGVtIiwic3R5bGVkIiwiYSIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiQ29sbGFwc2VXcmFwcGVyIiwiYW5pbWF0ZWQiLCJkaXYiLCJ3aGl0ZSIsIk5hdkxpbmtzIiwidWwiLCJicmVha3BvaW50cyIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFlBQTJDLFFBQTNDQSxZQUEyQztBQUFBLE1BQTdCQyxlQUE2QixRQUE3QkEsZUFBNkI7O0FBQUEsbUJBQ2hEQyw4REFBUyxDQUFDO0FBQUVDLFFBQUksRUFBRUgsWUFBWSxHQUFHLENBQUgsR0FBTztBQUEzQixHQUFELENBRHVDO0FBQUEsTUFDekRHLElBRHlELGNBQ3pEQSxJQUR5RDs7QUFBQSxtQkFFNUNDLDZEQUFTLEVBRm1DO0FBQUEsTUFFekRDLFFBRnlELGNBRXpEQSxRQUZ5RDs7QUFJakUsTUFBSUwsWUFBSixFQUFrQjtBQUNoQixXQUNFLE1BQUMsZUFBRDtBQUNFLFdBQUssRUFBRTtBQUNMTSxpQkFBUyxFQUFFSCxJQUFJLENBQ1pJLFdBRFEsQ0FDSTtBQUNYQyxlQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLENBREk7QUFFWEMsZ0JBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFDLEVBQUwsRUFBUyxDQUFULEVBQVksQ0FBQyxHQUFiO0FBRkcsU0FESixFQUtSRixXQUxRLENBS0ksVUFBQ0csU0FBRDtBQUFBLDBDQUFpQ0EsU0FBakM7QUFBQSxTQUxKO0FBRE4sT0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BVUUsTUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxHQUFaO0FBQWlCLGNBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsT0FBRDtBQUNFLFFBQUUsRUFBQyxHQURMO0FBRUUsV0FBSyxFQUFFLE1BRlQ7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNVCxlQUFlLENBQUMsS0FBRCxDQUFyQjtBQUFBLE9BSFg7QUFJRSxjQUFRLEVBQUVJLFFBQVEsS0FBSyxHQUp6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FERixDQURGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsVUFBWjtBQUF3QixjQUFRLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLE9BQUQ7QUFDRSxRQUFFLEVBQUMsR0FETDtBQUVFLFdBQUssRUFBRSxTQUZUO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUosZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxPQUhYO0FBSUUsY0FBUSxFQUFFSSxRQUFRLEtBQUssVUFKekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBZEYsRUEyQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUUsV0FBWjtBQUF5QixjQUFRLE1BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLE9BQUQ7QUFDRSxRQUFFLEVBQUMsR0FETDtBQUVFLFdBQUssRUFBRSxVQUZUO0FBR0UsYUFBTyxFQUFFO0FBQUEsZUFBTUosZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxPQUhYO0FBSUUsY0FBUSxFQUFFSSxRQUFRLEtBQUssV0FKekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBM0JGLEVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFLFVBQVo7QUFBd0IsY0FBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxPQUFEO0FBQ0UsUUFBRSxFQUFDLEdBREw7QUFFRSxXQUFLLEVBQUUsU0FGVDtBQUdFLGFBQU8sRUFBRTtBQUFBLGVBQU1KLGVBQWUsQ0FBQyxLQUFELENBQXJCO0FBQUEsT0FIWDtBQUlFLGNBQVEsRUFBRUksUUFBUSxLQUFLLFVBSnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixDQXhDRixDQVZGLENBREY7QUFrRUQ7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0ExRUQ7O0dBQU1OLFk7VUFDYUcsc0QsRUFDSUUscUQ7OztLQUZqQkwsWTtBQTRFTixJQUFNWSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsbUVBRUU7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUZGLEVBR0Y7QUFBQSxNQUFHQyxRQUFILFNBQUdBLFFBQUg7QUFBQSxNQUFhSCxLQUFiLFNBQWFBLEtBQWI7QUFBQSxTQUEwQkcsUUFBUSxHQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBaEIsR0FBd0JMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxJQUF2RTtBQUFBLENBSEUsRUFNQTtBQUFBLE1BQUdILFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFILEtBQWIsU0FBYUEsS0FBYjtBQUFBLFNBQ1BPLHVEQUFNLENBQUMsSUFBRCxFQUFPSixRQUFRLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFoQixHQUF3QkwsS0FBSyxDQUFDSSxNQUFOLENBQWFFLElBQXBELENBREM7QUFBQSxDQU5BLENBQWI7TUFBTVQsTztBQVVOLElBQU1XLGVBQWUsR0FBR1YsaUVBQU0sQ0FBQ1cscURBQVEsQ0FBQ0MsR0FBVixDQUFUO0FBQUE7QUFBQTtBQUFBLDhFQUNMO0FBQUEsTUFBR1YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZU8sdURBQU0sQ0FBQyxJQUFELEVBQU9QLEtBQUssQ0FBQ0ksTUFBTixDQUFhTyxLQUFwQixDQUFyQjtBQUFBLENBREssQ0FBckI7TUFBTUgsZTtBQVFOLElBQU1JLFFBQVEsR0FBR2QseURBQU0sQ0FBQ2UsRUFBVjtBQUFBO0FBQUE7QUFBQSxvSUFNUztBQUFBLE1BQUdiLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ2MsV0FBTixDQUFrQkMsTUFBakM7QUFBQSxDQU5ULENBQWQ7TUFBTUgsUTtBQVdTM0IsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2plY3RzLmpzLmJjNjllNGU5MjBmMmE2NmNiNzRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc05hdmJhck9wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNOYXZiYXJPcGVuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENvbGxhcHNlTWVudSA9ICh7IGlzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBvcGVuIH0gPSB1c2VTcHJpbmcoeyBvcGVuOiBpc05hdmJhck9wZW4gPyAwIDogMSB9KTtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKGlzTmF2YmFyT3Blbikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbGxhcHNlV3JhcHBlclxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IG9wZW5cclxuICAgICAgICAgICAgLmludGVycG9sYXRlKHtcclxuICAgICAgICAgICAgICByYW5nZTogWzAsIDAuMiwgMC4zLCAxXSxcclxuICAgICAgICAgICAgICBvdXRwdXQ6IFswLCAtMjAsIDAsIC0yMDBdLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoKG9wZW5WYWx1ZSkgPT4gYHRyYW5zbGF0ZTNkKDAsICR7b3BlblZhbHVlfXB4LCAwYCksXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxOYXZMaW5rcz5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXsnSG9tZSd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydDbGllbnRzJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY2xpZW50cyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xpZW50c1xyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXsnUHJvamVjdHMnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9wcm9qZWN0cyd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2NvbnRhY3QnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXsnQ29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC9OYXZMaW5rcz5cclxuICAgICAgPC9Db2xsYXBzZVdyYXBwZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+XHJcbiAgICAgIGRhcmtlbigwLjA1LCBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBDb2xsYXBzZVdyYXBwZXIgPSBzdHlsZWQoYW5pbWF0ZWQuZGl2KWBcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMud2hpdGUpfTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0LjVyZW07XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9