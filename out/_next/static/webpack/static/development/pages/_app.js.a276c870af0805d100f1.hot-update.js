webpackHotUpdate("static\\development\\pages\\_app.js",{

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
})(["display:flex;padding:0 ", ";color:", ";font-weight:", ";:hover{color:", ";}@media (max-width:48rem){padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive,
      theme = _ref3.theme;
  return isActive ? theme.colors.brand : theme.colors.grey;
}, function (_ref4) {
  var isActive = _ref4.isActive;
  return isActive ? 'bold' : 'normal';
}, function (_ref5) {
  var isActive = _ref5.isActive,
      theme = _ref5.theme;
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
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:48rem){padding:", ";}"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.spacing.medium;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.spacing.navBarHeight;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white;
}, function (_ref9) {
  var theme = _ref9.theme;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Il0sIm5hbWVzIjpbIk5hdmJhciIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiU3R5bGVkTmlkcmF0ZWNoTG9nbyIsInN0eWxlZCIsIk5pZHJhdGVjaExvZ28iLCJOYXZJdGVtIiwiYSIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiTmF2QmFyIiwibmF2IiwiRmxleENvbnRhaW5lciIsImRpdiIsIm5hdkJhckhlaWdodCIsIndoaXRlIiwic21hbGwiLCJOYXZMaW5rcyIsInVsIiwiQnVyZ2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQThDO0FBQUE7O0FBQUEsTUFBM0NDLFlBQTJDLFFBQTNDQSxZQUEyQztBQUFBLE1BQTdCQyxlQUE2QixRQUE3QkEsZUFBNkI7O0FBQUEsbUJBQ3RDQyw2REFBUyxFQUQ2QjtBQUFBLE1BQ25EQyxRQURtRCxjQUNuREEsUUFEbUQ7O0FBRzNELFNBQ0UsbUVBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixZQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixrQkFBWSxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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UTtBQVdOLElBQU1FLGFBQWEsR0FBR3JCLHlEQUFNLENBQUNlLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQW5CO01BQU1NLGE7QUFRUzNCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmEyNzZjODcwYWYwODA1ZDEwMGYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xyXG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tICcuL0J1cmdlck1lbnUnO1xyXG5pbXBvcnQgQ29sbGFwc2VNZW51IGZyb20gJy4vQ29sbGFwc2VNZW51JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdkJhcj5cclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWROaWRyYXRlY2hMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cclxuICAgICAgICAgICAgICAgICAgQ2xpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1Byb2plY3RzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvTmF2TGlua3M+XHJcblxyXG4gICAgICAgICAgPEJ1cmdlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgICAgICAgIDwvQnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvTmF2QmFyPlxyXG5cclxuICAgICAgPENvbGxhcHNlTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcclxuICB3aWR0aDogOS41cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuYDtcclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuICBmb250LXdlaWdodDogJHsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyAnYm9sZCcgOiAnbm9ybWFsJyl9O1xyXG5cclxuICA6aG92ZXIge1xyXG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+XHJcbiAgICAgIGRhcmtlbigwLjA1LCBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAxO1xyXG5gO1xyXG5jb25zdCBGbGV4Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDEyMHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IEJ1cmdlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogYXV0byAwO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9