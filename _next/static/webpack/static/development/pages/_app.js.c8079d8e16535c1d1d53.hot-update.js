webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Container.tsx":
/*!**********************************!*\
  !*** ./components/Container.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  componentId: "gy3cny-0"
})(["max-width:60rem;margin:auto;margin-top:", ";padding:", ";@media (max-width:", "){max-width:auto;margin:0 ", ";padding:", ";}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.medium;
}, function (_ref2) {
  var theme = _ref2.theme;
  return "0 ".concat(theme.spacing.large);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.breakpoints.mobile;
}, function (_ref4) {
  var theme = _ref4.theme;
  return "0 ".concat(theme.spacing.medium);
}, function (_ref5) {
  var theme = _ref5.theme;
  return "0 ".concat(theme.spacing.small);
}));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

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
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;align-items:center;@media (min-width:", "){display:none;}"], function (_ref6) {
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

/***/ }),

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
})(["display:flex;padding:0 ", ";color:", ";:hover{color:", ";}@media (max-width:", "){padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.medium;
}, function (_ref3) {
  var isActive = _ref3.isActive,
      theme = _ref3.theme;
  return isActive ? theme.colors.brand : theme.colors.grey;
}, function (_ref4) {
  var isActive = _ref4.isActive,
      theme = _ref4.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_3__["darken"])(0.05, isActive ? theme.colors.brand : theme.colors.grey);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.breakpoints.mobile;
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
})(["max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ", ";height:", ";background:", ";@media (max-width:", "){padding:", ";}"], function (_ref6) {
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
  return theme.breakpoints.mobile;
}, function (_ref10) {
  var theme = _ref10.theme;
  return "0 ".concat(theme.spacing.small);
});
_c5 = FlexContainer;
var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "NavLinks",
  componentId: "sc-8vwuz5-4"
})(["justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;@media (max-width:", "){display:none;}"], function (_ref11) {
  var theme = _ref11.theme;
  return theme.breakpoints.mobile;
});
_c6 = NavLinks;
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BurgerWrapper",
  componentId: "sc-8vwuz5-5"
})(["margin:auto 0;@media (min-width:", "){display:none;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.breakpoints.mobile;
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvQ29sbGFwc2VNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImRpdiIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImxhcmdlIiwiYnJlYWtwb2ludHMiLCJtb2JpbGUiLCJzbWFsbCIsIkNvbGxhcHNlTWVudSIsImlzTmF2YmFyT3BlbiIsInNldElzTmF2YmFyT3BlbiIsInVzZVNwcmluZyIsIm9wZW4iLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInRyYW5zZm9ybSIsImludGVycG9sYXRlIiwicmFuZ2UiLCJvdXRwdXQiLCJvcGVuVmFsdWUiLCJOYXZJdGVtIiwiYSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiQ29sbGFwc2VXcmFwcGVyIiwiYW5pbWF0ZWQiLCJ3aGl0ZSIsIk5hdkxpbmtzIiwidWwiLCJOYXZiYXIiLCJTdHlsZWROaWRyYXRlY2hMb2dvIiwiTmlkcmF0ZWNoTG9nbyIsIk5hdkJhciIsIm5hdiIsIkZsZXhDb250YWluZXIiLCJuYXZCYXJIZWlnaHQiLCJCdXJnZXJXcmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRWVBLHdIQUFNLENBQUNDLEdBQXRCO0FBQUE7QUFBQSxxSUFHZ0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUhoQixFQUlhO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEscUJBQW9CQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0UsS0FBbEM7QUFBQSxDQUpiLEVBTXVCO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FB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LEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYU0sS0FBNUI7QUFBQSxDQVBHLEVBU0k7QUFBQSxNQUFHNUIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxNQUFqQztBQUFBLENBVEosRUFVSjtBQUFBLE1BQUdMLEtBQUgsVUFBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxDQUFDQyxPQUFOLENBQWNLLEtBQWxDO0FBQUEsQ0FWSSxDQUFuQjtNQUFNOEIsYTtBQWFOLElBQU1QLFFBQVEsR0FBRy9CLHlEQUFNLENBQUNnQyxFQUFWO0FBQUE7QUFBQTtBQUFBLG1JQU9TO0FBQUEsTUFBRzlCLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsTUFBakM7QUFBQSxDQVBULENBQWQ7TUFBTXdCLFE7QUFXTixJQUFNUyxhQUFhLEdBQUd4Qyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZEQUdJO0FBQUEsTUFBR0MsS0FBSCxVQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxNQUFqQztBQUFBLENBSEosQ0FBbkI7TUFBTWlDLGE7QUFRU1AscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYzgwNzlkOGUxNjUzNWMxZDFkNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDYwcmVtO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5sYXJnZX1gfTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLm1lZGl1bX1gfTtcclxuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLnNtYWxsfWB9O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBDb2xsYXBzZU1lbnUgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgb3BlbiB9ID0gdXNlU3ByaW5nKHsgb3BlbjogaXNOYXZiYXJPcGVuID8gMCA6IDEgfSk7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGlmIChpc05hdmJhck9wZW4pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb2xsYXBzZVdyYXBwZXJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBvcGVuXHJcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZSh7XHJcbiAgICAgICAgICAgICAgcmFuZ2U6IFswLCAwLjIsIDAuMywgMV0sXHJcbiAgICAgICAgICAgICAgb3V0cHV0OiBbMCwgLTIwLCAwLCAtMjAwXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmludGVycG9sYXRlKChvcGVuVmFsdWUpID0+IGB0cmFuc2xhdGUzZCgwLCAke29wZW5WYWx1ZX1weCwgMGApLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPXsnQ2xpZW50cyd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsaWVudHNcclxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J1Byb2plY3RzJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHJvamVjdHMnfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J0NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jb250YWN0J31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvTmF2TGlua3M+XHJcbiAgICAgIDwvQ29sbGFwc2VXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29sbGFwc2VXcmFwcGVyID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4wNSwgdGhlbWUuY29sb3JzLndoaXRlKX07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNC41cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG5gO1xyXG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMnJlbSAxcmVtIDJyZW0gMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xyXG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tICcuL0J1cmdlck1lbnUnO1xyXG5pbXBvcnQgQ29sbGFwc2VNZW51IGZyb20gJy4vQ29sbGFwc2VNZW51JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdkJhcj5cclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWROaWRyYXRlY2hMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cclxuICAgICAgICAgICAgICAgICAgQ2xpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1Byb2plY3RzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvTmF2TGlua3M+XHJcblxyXG4gICAgICAgICAgPEJ1cmdlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgICAgICAgIDwvQnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvTmF2QmFyPlxyXG5cclxuICAgICAgPENvbGxhcHNlTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcclxuICB3aWR0aDogOS41cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuYDtcclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkJhciA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbmA7XHJcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTIwcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5icmVha3BvaW50cy5tb2JpbGV9KSB7XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxyXG4gIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IGF1dG8gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJyZWFrcG9pbnRzLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBCdXJnZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG8gMDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=