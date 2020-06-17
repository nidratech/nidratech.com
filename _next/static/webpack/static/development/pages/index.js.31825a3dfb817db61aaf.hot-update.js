webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/navbar/Navbar.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/NidratechLogo */ "./components/NidratechLogo.tsx");
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BurgerMenu */ "./components/navbar/BurgerMenu.tsx");
/* harmony import */ var _CollapseMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CollapseMenu */ "./components/navbar/CollapseMenu.tsx");
var _this = undefined,
    _jsxFileName = "F:\\Projects\\nidratech.com\\components\\navbar\\Navbar.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Navbar = function Navbar(_ref) {
  _s();

  var isNavbarOpen = _ref.isNavbarOpen,
      setIsNavbarOpen = _ref.setIsNavbarOpen;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])(),
      pathname = _useRouter.pathname;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(NavBar, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(FlexContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/',
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(NavItem, {
    as: "a",
    "aria-label": 'Nidratech Ltd.',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(StyledNidratechLogo, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }))), __jsx(NavLinks, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/',
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx(NavItem, {
    as: "a",
    title: 'Home',
    isActive: pathname === '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Home"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/clients',
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx(NavItem, {
    as: "a",
    title: 'Clients',
    isActive: pathname === '/clients',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "Clients"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/projects',
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 15
    }
  }, __jsx(NavItem, {
    as: "a",
    title: 'Projects',
    isActive: pathname === '/projects',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "Projects"))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/contact',
    passHref: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx(NavItem, {
    as: "a",
    title: 'Contact us',
    isActive: pathname === '/contact',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Contact")))), __jsx(BurgerWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 11
    }
  }, __jsx(_BurgerMenu__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isNavbarOpen: isNavbarOpen,
    setIsNavbarOpen: setIsNavbarOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  })))), __jsx(_CollapseMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isNavbarOpen: isNavbarOpen,
    setIsNavbarOpen: setIsNavbarOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }));
};

_s(Navbar, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Navbar;
var StyledNidratechLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "StyledNidratechLogo",
  componentId: "sc-8vwuz5-0"
})(["width:9.5rem;height:4rem;"]);
_c2 = StyledNidratechLogo;
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "NavItem",
  componentId: "sc-8vwuz5-1"
})(["display:flex;padding:0 ", ";font-weight:", ";:hover{color:", ";}@media (max-width:48rem){padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive;
  return isActive ? 'bold' : 'normal';
}, function (_ref4) {
  var isActive = _ref4.isActive,
      theme = _ref4.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, isActive ? theme.colors.brand : theme.colors.grey);
});
_c3 = NavItem;
var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "NavBar",
  componentId: "sc-8vwuz5-2"
})(["position:fixed;width:100%;top:0;left:0;z-index:1;"]);
_c4 = NavBar;
var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "FlexContainer",
  componentId: "sc-8vwuz5-3"
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:48rem){padding:", ";}"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.medium;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.navBarHeight;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.white;
}, function (_ref8) {
  var theme = _ref8.theme;
  return "0 ".concat(theme.spacing.small);
});
_c5 = FlexContainer;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "NavLinks",
  componentId: "sc-8vwuz5-4"
})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;@media (max-width:48rem){display:none;}"]);
_c6 = NavLinks;
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BurgerWrapper",
  componentId: "sc-8vwuz5-5"
})(["margin:auto 0;@media (min-width:48rem){display:none;}"]);
_c7 = BurgerWrapper;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "StyledNidratechLogo");
$RefreshReg$(_c3, "NavItem");
$RefreshReg$(_c4, "NavBar");
$RefreshReg$(_c5, "FlexContainer");
$RefreshReg$(_c6, "NavLinks");
$RefreshReg$(_c7, "BurgerWrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiU3R5bGVkTmlkcmF0ZWNoTG9nbyIsInN0eWxlZCIsIk5pZHJhdGVjaExvZ28iLCJOYXZJdGVtIiwiYSIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiZGFya2VuIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiTmF2QmFyIiwibmF2IiwiRmxleENvbnRhaW5lciIsImRpdiIsIm5hdkJhckhlaWdodCIsIndoaXRlIiwic21hbGwiLCJOYXZMaW5rcyIsInVsIiwiQnVyZ2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFlBQTJDLFFBQTNDQSxZQUEyQztBQUFBLE1BQTdCQyxlQUE2QixRQUE3QkEsZUFBNkI7O0FBQUEsbUJBQ3RDQyw2REFBUyxFQUQ2QjtBQUFBLE1BQ25EQyxRQURtRCxjQUNuREEsUUFEbUQ7O0FBRzNELFNBQ0UsbUVBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixZQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixrQkFBWSxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QUFZLFFBQXZDO0FBQUEsQ0FISixFQU1BO0FBQUEsTUFBR0EsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUgsS0FBYixTQUFhQSxLQUFiO0FBQUEsU0FDUEksdURBQU0sQ0FBQyxJQUFELEVBQU9ELFFBQVEsR0FBR0gsS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQWhCLEdBQXdCTixLQUFLLENBQUNLLE1BQU4sQ0FBYUUsSUFBcEQsQ0FEQztBQUFBLENBTkEsQ0FBYjtNQUFNVCxPO0FBY04sSUFBTVUsTUFBTSxHQUFHWix5REFBTSxDQUFDYSxHQUFWO0FBQUE7QUFBQTtBQUFBLHlEQUFaO01BQU1ELE07QUFPTixJQUFNRSxhQUFhLEdBQUdkLHlEQUFNLENBQUNlLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUtBS0o7QUFBQSxNQUFHWCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUxJLEVBTVA7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY1csWUFBN0I7QUFBQSxDQU5PLEVBT0g7QUFBQSxNQUFHWixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLE1BQU4sQ0FBYVEsS0FBNUI7QUFBQSxDQVBHLEVBVUo7QUFBQSxNQUFHYixLQUFILFNBQUdBLEtBQUg7QUFBQSxxQkFBb0JBLEtBQUssQ0FBQ0MsT0FBTixDQUFjYSxLQUFsQztBQUFBLENBVkksQ0FBbkI7TUFBTUosYTtBQWFOLElBQU1LLFFBQVEsR0FBR25CLHlEQUFNLENBQUNvQixFQUFWO0FBQUE7QUFBQTtBQUFBLG1JQUFkO01BQU1ELFE7QUFXTixJQUFNRSxhQUFhLEdBQUdyQix5REFBTSxDQUFDZSxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUFuQjtNQUFNTSxhO0FBUVMzQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzE4MjVhM2RmYjgxN2RiNjFhYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBOaWRyYXRlY2hMb2dvIGZyb20gJ2NvbXBvbmVudHMvTmlkcmF0ZWNoTG9nbyc7XHJcbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJy4vQnVyZ2VyTWVudSc7XHJcbmltcG9ydCBDb2xsYXBzZU1lbnUgZnJvbSAnLi9Db2xsYXBzZU1lbnUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc05hdmJhck9wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNOYXZiYXJPcGVuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGlzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2QmFyPlxyXG4gICAgICAgIDxGbGV4Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgYXJpYS1sYWJlbD17J05pZHJhdGVjaCBMdGQuJ30+XHJcbiAgICAgICAgICAgICAgPFN0eWxlZE5pZHJhdGVjaExvZ28gLz5cclxuICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgIDxOYXZMaW5rcz5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0hvbWUnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ30+XHJcbiAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jbGllbnRzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0NsaWVudHMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY2xpZW50cyd9PlxyXG4gICAgICAgICAgICAgICAgICBDbGllbnRzXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnUHJvamVjdHMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHJvamVjdHMnfT5cclxuICAgICAgICAgICAgICAgICAgUHJvamVjdHNcclxuICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0NvbnRhY3QgdXMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9PlxyXG4gICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC9OYXZMaW5rcz5cclxuXHJcbiAgICAgICAgICA8QnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICAgICAgPEJ1cmdlck1lbnUgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxyXG4gICAgICAgICAgPC9CdXJnZXJXcmFwcGVyPlxyXG4gICAgICAgIDwvRmxleENvbnRhaW5lcj5cclxuICAgICAgPC9OYXZCYXI+XHJcblxyXG4gICAgICA8Q29sbGFwc2VNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTdHlsZWROaWRyYXRlY2hMb2dvID0gc3R5bGVkKE5pZHJhdGVjaExvZ28pYFxyXG4gIHdpZHRoOiA5LjVyZW07XHJcbiAgaGVpZ2h0OiA0cmVtO1xyXG5gO1xyXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGZvbnQtd2VpZ2h0OiAkeyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/ICdib2xkJyA6ICdub3JtYWwnKX07XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cclxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLnNtYWxsfWB9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQudWxgXHJcbiAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogYXV0byAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQnVyZ2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=