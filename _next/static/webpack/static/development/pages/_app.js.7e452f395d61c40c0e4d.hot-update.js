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
  return theme.spacing.mobile;
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
  return theme.spacing.mobile;
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
  return theme.spacing.mobile;
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
  return theme.spacing.mobile;
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
  return theme.spacing.mobile;
});
_c6 = NavLinks;
var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "BurgerWrapper",
  componentId: "sc-8vwuz5-5"
})(["margin:auto 0;@media (min-width:", "){display:none;}"], function (_ref12) {
  var theme = _ref12.theme;
  return theme.spacing.mobile;
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

/***/ }),

/***/ "./styles/theme.ts":
/*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
/*! exports provided: COLOR_BRAND, COLOR_WHITE, COLOR_GREY_LIGHT, COLOR_GREY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_BRAND", function() { return COLOR_BRAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_WHITE", function() { return COLOR_WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GREY_LIGHT", function() { return COLOR_GREY_LIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GREY", function() { return COLOR_GREY; });
var COLOR_BRAND = '#d5851d';
var COLOR_WHITE = '#ffffff';
var COLOR_GREY_LIGHT = '#CFD2D3';
var COLOR_GREY = '#6c757d';
var theme = {
  colors: {
    brand: COLOR_BRAND,
    white: COLOR_WHITE,
    greyLight: COLOR_GREY_LIGHT,
    grey: COLOR_GREY
  },
  spacing: {
    navBarHeight: '5rem',
    small: '0.5rem',
    medium: '1rem',
    mediumLarge: '1.5rem',
    large: '2rem'
  },
  breakpoints: {
    mobile: '48rem'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvQ29sbGFwc2VNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Iiwid2VicGFjazovLy8uL3N0eWxlcy90aGVtZS50cyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsInNwYWNpbmciLCJtZWRpdW0iLCJsYXJnZSIsIm1vYmlsZSIsInNtYWxsIiwiQ29sbGFwc2VNZW51IiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwidXNlU3ByaW5nIiwib3BlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJyYW5nZSIsIm91dHB1dCIsIm9wZW5WYWx1ZSIsIk5hdkl0ZW0iLCJhIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJDb2xsYXBzZVdyYXBwZXIiLCJhbmltYXRlZCIsIndoaXRlIiwiTmF2TGlua3MiLCJ1bCIsIk5hdmJhciIsIlN0eWxlZE5pZHJhdGVjaExvZ28iLCJOaWRyYXRlY2hMb2dvIiwiTmF2QmFyIiwibmF2IiwiRmxleENvbnRhaW5lciIsIm5hdkJhckhlaWdodCIsIkJ1cmdlcldyYXBwZXIiLCJDT0xPUl9CUkFORCIsIkNPTE9SX1dISVRFIiwiQ09MT1JfR1JFWV9MSUdIVCIsIkNPTE9SX0dSRVkiLCJncmV5TGlnaHQiLCJtZWRpdW1MYXJnZSIsImJyZWFrcG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRWVBLHdIQUFNLENBQUNDLEdBQXRCO0FBQUE7QUFBQSxxSUFHZ0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUhoQixFQUlhO0FBQUEsTUFB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TXpDLEtBQW1CLEdBQUc7QUFDMUJxQixRQUFNLEVBQUU7QUFDTkMsU0FBSyxFQUFFZ0IsV0FERDtBQUVOWCxTQUFLLEVBQUVZLFdBRkQ7QUFHTkcsYUFBUyxFQUFFRixnQkFITDtBQUlOakIsUUFBSSxFQUFFa0I7QUFKQSxHQURrQjtBQU8xQnhDLFNBQU8sRUFBRTtBQUNQbUMsZ0JBQVksRUFBRSxNQURQO0FBRVAvQixTQUFLLEVBQUUsUUFGQTtBQUdQSCxVQUFNLEVBQUUsTUFIRDtBQUlQeUMsZUFBVyxFQUFFLFFBSk47QUFLUHhDLFNBQUssRUFBRTtBQUxBLEdBUGlCO0FBYzFCeUMsYUFBVyxFQUFFO0FBQ1h4QyxVQUFNLEVBQUU7QUFERztBQWRhLENBQTVCO0FBbUJlSixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43ZTQ1MmYzOTVkNjFjNDBjMGU0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNjByZW07XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLmxhcmdlfWB9O1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1vYmlsZX0pIHtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMCAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5tZWRpdW19YH07XHJcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGlzTmF2YmFyT3BlbjogYm9vbGVhbjtcclxuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgQ29sbGFwc2VNZW51ID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCB7IG9wZW4gfSA9IHVzZVNwcmluZyh7IG9wZW46IGlzTmF2YmFyT3BlbiA/IDAgOiAxIH0pO1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBpZiAoaXNOYXZiYXJPcGVuKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29sbGFwc2VXcmFwcGVyXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHRyYW5zZm9ybTogb3BlblxyXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoe1xyXG4gICAgICAgICAgICAgIHJhbmdlOiBbMCwgMC4yLCAwLjMsIDFdLFxyXG4gICAgICAgICAgICAgIG91dHB1dDogWzAsIC0yMCwgMCwgLTIwMF0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZSgob3BlblZhbHVlKSA9PiBgdHJhbnNsYXRlM2QoMCwgJHtvcGVuVmFsdWV9cHgsIDBgKSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE5hdkxpbmtzPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jbGllbnRzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17J0NsaWVudHMnfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jbGllbnRzJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbGllbnRzXHJcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydQcm9qZWN0cyd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0c1xyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgIDxOYXZJdGVtXHJcbiAgICAgICAgICAgICAgICBhcz1cImFcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9eydDb250YWN0J31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L05hdkxpbmtzPlxyXG4gICAgICA8L0NvbGxhcHNlV3JhcHBlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cclxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbGxhcHNlV3JhcHBlciA9IHN0eWxlZChhbmltYXRlZC5kaXYpYFxyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy53aGl0ZSl9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQuNXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xyXG5pbXBvcnQgQnVyZ2VyTWVudSBmcm9tICcuL0J1cmdlck1lbnUnO1xyXG5pbXBvcnQgQ29sbGFwc2VNZW51IGZyb20gJy4vQ29sbGFwc2VNZW51JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xyXG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdkJhcj5cclxuICAgICAgICA8RmxleENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxyXG4gICAgICAgICAgICAgIDxTdHlsZWROaWRyYXRlY2hMb2dvIC8+XHJcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxyXG4gICAgICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cclxuICAgICAgICAgICAgICAgICAgQ2xpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1Byb2plY3RzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ30+XHJcbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cclxuICAgICAgICAgICAgICAgICAgQ29udGFjdFxyXG4gICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvTmF2TGlua3M+XHJcblxyXG4gICAgICAgICAgPEJ1cmdlcldyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCdXJnZXJNZW51IGlzTmF2YmFyT3Blbj17aXNOYXZiYXJPcGVufSBzZXRJc05hdmJhck9wZW49e3NldElzTmF2YmFyT3Blbn0gLz5cclxuICAgICAgICAgIDwvQnVyZ2VyV3JhcHBlcj5cclxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XHJcbiAgICAgIDwvTmF2QmFyPlxyXG5cclxuICAgICAgPENvbGxhcHNlTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcclxuICB3aWR0aDogOS41cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuYDtcclxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcclxuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuXHJcbiAgOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxyXG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tb2JpbGV9KSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuYDtcclxuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuYDtcclxuY29uc3QgRmxleENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiAxMjByZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubmF2QmFySGVpZ2h0fTtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubW9iaWxlfSkge1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiBgMCAke3RoZW1lLnNwYWNpbmcuc21hbGx9YH07XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC51bGBcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1vYmlsZX0pIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBCdXJnZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IGF1dG8gMDtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tb2JpbGV9KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENPTE9SX0JSQU5EID0gJyNkNTg1MWQnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfV0hJVEUgPSAnI2ZmZmZmZic7XHJcbmV4cG9ydCBjb25zdCBDT0xPUl9HUkVZX0xJR0hUID0gJyNDRkQyRDMnO1xyXG5leHBvcnQgY29uc3QgQ09MT1JfR1JFWSA9ICcjNmM3NTdkJztcclxuXHJcbmNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XHJcbiAgY29sb3JzOiB7XHJcbiAgICBicmFuZDogQ09MT1JfQlJBTkQsXHJcbiAgICB3aGl0ZTogQ09MT1JfV0hJVEUsXHJcbiAgICBncmV5TGlnaHQ6IENPTE9SX0dSRVlfTElHSFQsXHJcbiAgICBncmV5OiBDT0xPUl9HUkVZLFxyXG4gIH0sXHJcbiAgc3BhY2luZzoge1xyXG4gICAgbmF2QmFySGVpZ2h0OiAnNXJlbScsXHJcbiAgICBzbWFsbDogJzAuNXJlbScsXHJcbiAgICBtZWRpdW06ICcxcmVtJyxcclxuICAgIG1lZGl1bUxhcmdlOiAnMS41cmVtJyxcclxuICAgIGxhcmdlOiAnMnJlbScsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgbW9iaWxlOiAnNDhyZW0nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==