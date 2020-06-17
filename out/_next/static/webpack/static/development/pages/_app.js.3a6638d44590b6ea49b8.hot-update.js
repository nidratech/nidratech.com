webpackHotUpdate('static\\development\\pages\\_app.js', {
  /***/ './components/Container.tsx':
    /*!**********************************!*\
  !*** ./components/Container.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0__['default'].div.withConfig({
          componentId: 'gy3cny-0',
        })(
          [
            'max-width:60rem;margin:auto;margin-top:',
            ';padding:',
            ';@media (max-width:48rem){max-width:auto;margin:0 ',
            ';padding:',
            ';}',
          ],
          function (_ref) {
            var theme = _ref.theme;
            return theme.spacing.medium;
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return '0 '.concat(theme.spacing.large);
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return '0 '.concat(theme.spacing.medium);
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return '0 '.concat(theme.spacing.small);
          }
        );

        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports_1 = module.__proto__.exports;
          var prevExports =
            (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !==
              null && _b !== void 0
              ? _b
              : null;
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
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports_1
                )
              ) {
                module.hot.invalidate();
              } else {
                self.$RefreshHelpers$.scheduleUpdate();
              }
            }
          } else {
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

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ));

      /***/
    },

  /***/ './components/navbar/CollapseMenu.tsx':
    /*!********************************************!*\
  !*** ./components/navbar/CollapseMenu.tsx ***!
  \********************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-spring */ './node_modules/react-spring/web.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/link */ './node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_5__
        );
        var _this = undefined,
          _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\navbar\\CollapseMenu.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var CollapseMenu = function CollapseMenu(_ref) {
          _s();

          var isNavbarOpen = _ref.isNavbarOpen,
            setIsNavbarOpen = _ref.setIsNavbarOpen;

          var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__['useSpring'])({
              open: isNavbarOpen ? 0 : 1,
            }),
            open = _useSpring.open;

          var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__['useRouter'])(),
            pathname = _useRouter.pathname;

          if (isNavbarOpen) {
            return __jsx(
              CollapseWrapper,
              {
                style: {
                  transform: open
                    .interpolate({
                      range: [0, 0.2, 0.3, 1],
                      output: [0, -20, 0, -200],
                    })
                    .interpolate(function (openValue) {
                      return 'translate3d(0, '.concat(openValue, 'px, 0');
                    }),
                },
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 7,
                },
              },
              __jsx(
                NavLinks,
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Home',
                      onClick: function onClick() {
                        return setIsNavbarOpen(false);
                      },
                      isActive: pathname === '/',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 13,
                      },
                    },
                    'Home'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    href: '/clients',
                    passHref: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Clients',
                      onClick: function onClick() {
                        return setIsNavbarOpen(false);
                      },
                      isActive: pathname === '/clients',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 13,
                      },
                    },
                    'Clients'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    href: '/projects',
                    passHref: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Projects',
                      onClick: function onClick() {
                        return setIsNavbarOpen(false);
                      },
                      isActive: pathname === '/projects',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 13,
                      },
                    },
                    'Projects'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    href: '/contact',
                    passHref: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Contact',
                      onClick: function onClick() {
                        return setIsNavbarOpen(false);
                      },
                      isActive: pathname === '/contact',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63,
                        columnNumber: 13,
                      },
                    },
                    'Contact'
                  )
                )
              )
            );
          }

          return null;
        };

        _s(CollapseMenu, 'iExunLE4bQKF8G4FwvomFeCQaus=', false, function () {
          return [
            react_spring__WEBPACK_IMPORTED_MODULE_2__['useSpring'],
            next_router__WEBPACK_IMPORTED_MODULE_5__['useRouter'],
          ];
        });

        _c = CollapseMenu;
        var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].a.withConfig({
          displayName: 'NavItem',
          componentId: 'sc-3dpomo-0',
        })(
          ['display:flex;padding:0 ', ';color:', ';:hover{color:', ';}'],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.spacing.medium;
          },
          function (_ref3) {
            var isActive = _ref3.isActive,
              theme = _ref3.theme;
            return isActive ? theme.colors.brand : theme.colors.grey;
          },
          function (_ref4) {
            var isActive = _ref4.isActive,
              theme = _ref4.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_4__['darken'])(
              0.05,
              isActive ? theme.colors.brand : theme.colors.grey
            );
          }
        );
        _c2 = NavItem;
        var CollapseWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(
          react_spring__WEBPACK_IMPORTED_MODULE_2__['animated'].div
        ).withConfig({
          displayName: 'CollapseWrapper',
          componentId: 'sc-3dpomo-1',
        })(['background:', ';position:fixed;top:4.5rem;left:0;right:0;z-index:999;'], function (
          _ref5
        ) {
          var theme = _ref5.theme;
          return Object(polished__WEBPACK_IMPORTED_MODULE_4__['darken'])(0.05, theme.colors.white);
        });
        _c3 = CollapseWrapper;
        var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].ul.withConfig({
          displayName: 'NavLinks',
          componentId: 'sc-3dpomo-2',
        })([
          'list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;align-items:center;@media (min-width:48rem){display:none;}',
        ]);
        _c4 = NavLinks;
        /* harmony default export */ __webpack_exports__['default'] = CollapseMenu;

        var _c, _c2, _c3, _c4;

        $RefreshReg$(_c, 'CollapseMenu');
        $RefreshReg$(_c2, 'NavItem');
        $RefreshReg$(_c3, 'CollapseWrapper');
        $RefreshReg$(_c4, 'NavLinks');

        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports_1 = module.__proto__.exports;
          var prevExports =
            (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !==
              null && _b !== void 0
              ? _b
              : null;
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
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports_1
                )
              ) {
                module.hot.invalidate();
              } else {
                self.$RefreshHelpers$.scheduleUpdate();
              }
            }
          } else {
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

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ));

      /***/
    },

  /***/ './components/navbar/Navbar.tsx':
    /*!**************************************!*\
  !*** ./components/navbar/Navbar.tsx ***!
  \**************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! next/link */ './node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! components/NidratechLogo */ './components/NidratechLogo.tsx'
        );
        /* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./BurgerMenu */ './components/navbar/BurgerMenu.tsx'
        );
        /* harmony import */ var _CollapseMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./CollapseMenu */ './components/navbar/CollapseMenu.tsx'
        );
        var _this = undefined,
          _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\navbar\\Navbar.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        var Navbar = function Navbar(_ref) {
          _s();

          var isNavbarOpen = _ref.isNavbarOpen,
            setIsNavbarOpen = _ref.setIsNavbarOpen;

          var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter'])(),
            pathname = _useRouter.pathname;

          return __jsx(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            __jsx(
              NavBar,
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                FlexContainer,
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      'aria-label': 'Nidratech Ltd.',
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 23,
                        columnNumber: 13,
                      },
                    },
                    __jsx(StyledNidratechLogo, {
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24,
                        columnNumber: 15,
                      },
                    })
                  )
                ),
                __jsx(
                  NavLinks,
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                    {
                      href: '/',
                      passHref: true,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      NavItem,
                      {
                        as: 'a',
                        title: 'Home',
                        isActive: pathname === '/',
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30,
                          columnNumber: 15,
                        },
                      },
                      'Home'
                    )
                  ),
                  __jsx(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                    {
                      href: '/clients',
                      passHref: true,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      NavItem,
                      {
                        as: 'a',
                        title: 'Clients',
                        isActive: pathname === '/clients',
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36,
                          columnNumber: 15,
                        },
                      },
                      'Clients'
                    )
                  ),
                  __jsx(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                    {
                      href: '/projects',
                      passHref: true,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 41,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      NavItem,
                      {
                        as: 'a',
                        title: 'Projects',
                        isActive: pathname === '/projects',
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 42,
                          columnNumber: 15,
                        },
                      },
                      'Projects'
                    )
                  ),
                  __jsx(
                    next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                    {
                      href: '/contact',
                      passHref: true,
                      __self: _this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      NavItem,
                      {
                        as: 'a',
                        title: 'Contact us',
                        isActive: pathname === '/contact',
                        __self: _this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 48,
                          columnNumber: 15,
                        },
                      },
                      'Contact'
                    )
                  )
                ),
                __jsx(
                  BurgerWrapper,
                  {
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 11,
                    },
                  },
                  __jsx(_BurgerMenu__WEBPACK_IMPORTED_MODULE_6__['default'], {
                    isNavbarOpen: isNavbarOpen,
                    setIsNavbarOpen: setIsNavbarOpen,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 13,
                    },
                  })
                )
              )
            ),
            __jsx(_CollapseMenu__WEBPACK_IMPORTED_MODULE_7__['default'], {
              isNavbarOpen: isNavbarOpen,
              setIsNavbarOpen: setIsNavbarOpen,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 7,
              },
            })
          );
        };

        _s(Navbar, 'QpP2vYJstxsDz0K+Qwttl8PPVoY=', false, function () {
          return [next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter']];
        });

        _c = Navbar;
        var StyledNidratechLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['default'])(
          components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__['default']
        ).withConfig({
          displayName: 'StyledNidratechLogo',
          componentId: 'sc-8vwuz5-0',
        })(['width:9.5rem;height:4rem;']);
        _c2 = StyledNidratechLogo;
        var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].a.withConfig({
          displayName: 'NavItem',
          componentId: 'sc-8vwuz5-1',
        })(
          [
            'display:flex;padding:0 ',
            ';color:',
            ';:hover{color:',
            ';}@media (max-width:48rem){padding:0;}',
          ],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.spacing.medium;
          },
          function (_ref3) {
            var isActive = _ref3.isActive,
              theme = _ref3.theme;
            return isActive ? theme.colors.brand : theme.colors.grey;
          },
          function (_ref4) {
            var isActive = _ref4.isActive,
              theme = _ref4.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(
              0.05,
              isActive ? theme.colors.brand : theme.colors.grey
            );
          }
        );
        _c3 = NavItem;
        var NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].nav.withConfig({
          displayName: 'NavBar',
          componentId: 'sc-8vwuz5-2',
        })(['position:fixed;width:100%;top:0;left:0;z-index:1;']);
        _c4 = NavBar;
        var FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'FlexContainer',
          componentId: 'sc-8vwuz5-3',
        })(
          [
            'max-width:120rem;display:flex;margin:auto;justify-content:space-between;padding:0 ',
            ';height:',
            ';background:',
            ';@media (max-width:48rem){padding:',
            ';}',
          ],
          function (_ref5) {
            var theme = _ref5.theme;
            return theme.spacing.medium;
          },
          function (_ref6) {
            var theme = _ref6.theme;
            return theme.spacing.navBarHeight;
          },
          function (_ref7) {
            var theme = _ref7.theme;
            return theme.colors.white;
          },
          function (_ref8) {
            var theme = _ref8.theme;
            return '0 '.concat(theme.spacing.small);
          }
        );
        _c5 = FlexContainer;
        var NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].ul.withConfig({
          displayName: 'NavLinks',
          componentId: 'sc-8vwuz5-4',
        })([
          'justify-self:end;list-style-type:none;margin:auto 0;display:flex;align-items:center;@media (max-width:48rem){display:none;}',
        ]);
        _c6 = NavLinks;
        var BurgerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'BurgerWrapper',
          componentId: 'sc-8vwuz5-5',
        })(['margin:auto 0;@media (min-width:48rem){display:none;}']);
        _c7 = BurgerWrapper;
        /* harmony default export */ __webpack_exports__['default'] = Navbar;

        var _c, _c2, _c3, _c4, _c5, _c6, _c7;

        $RefreshReg$(_c, 'Navbar');
        $RefreshReg$(_c2, 'StyledNidratechLogo');
        $RefreshReg$(_c3, 'NavItem');
        $RefreshReg$(_c4, 'NavBar');
        $RefreshReg$(_c5, 'FlexContainer');
        $RefreshReg$(_c6, 'NavLinks');
        $RefreshReg$(_c7, 'BurgerWrapper');

        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (
          typeof self !== 'undefined' &&
          // AMP / No-JS mode does not inject these helpers:
          '$RefreshHelpers$' in self
        ) {
          var currentExports_1 = module.__proto__.exports;
          var prevExports =
            (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !==
              null && _b !== void 0
              ? _b
              : null;
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
              if (
                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                  prevExports,
                  currentExports_1
                )
              ) {
                module.hot.invalidate();
              } else {
                self.$RefreshHelpers$.scheduleUpdate();
              }
            }
          } else {
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

        /* WEBPACK VAR INJECTION */
      }.call(
        this,
        __webpack_require__(
          /*! ./../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
        )(module)
      ));

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvQ29sbGFwc2VNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImRpdiIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImxhcmdlIiwic21hbGwiLCJDb2xsYXBzZU1lbnUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJ1c2VTcHJpbmciLCJvcGVuIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJ0cmFuc2Zvcm0iLCJpbnRlcnBvbGF0ZSIsInJhbmdlIiwib3V0cHV0Iiwib3BlblZhbHVlIiwiTmF2SXRlbSIsImEiLCJpc0FjdGl2ZSIsImNvbG9ycyIsImJyYW5kIiwiZ3JleSIsImRhcmtlbiIsIkNvbGxhcHNlV3JhcHBlciIsImFuaW1hdGVkIiwid2hpdGUiLCJOYXZMaW5rcyIsInVsIiwiTmF2YmFyIiwiU3R5bGVkTmlkcmF0ZWNoTG9nbyIsIk5pZHJhdGVjaExvZ28iLCJOYXZCYXIiLCJuYXYiLCJGbGV4Q29udGFpbmVyIiwibmF2QmFySGVpZ2h0IiwiQnVyZ2VyV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVlQSx3SEFBTSxDQUFDQyxHQUF0QjtBQUFBO0FBQUEsc0lBR2dCO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FIaEIsRUFJYTtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxDQUFDQyxPQUFOLENBQWNFLEtBQWxDO0FBQUEsQ0FKYixFQVFnQjtBQUFBLE1BQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLHFCQUFvQkEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLE1B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QUFBQTtBQUFBO0FBQUEseURBQVo7TUFBTUQsTTtBQU9OLElBQU1FLGFBQWEsR0FBR3BDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUtBS0o7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUxJLEVBTVA7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY2tDLFlBQTdCO0FBQUEsQ0FOTyxFQU9IO0FBQUEsTUFBR25DLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ29CLE1BQU4sQ0FBYU0sS0FBNUI7QUFBQSxDQVBHLEVBVUo7QUFBQSxNQUFHMUIsS0FBSCxTQUFHQSxLQUFIO0FBQUEscUJBQW9CQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0csS0FBbEM7QUFBQSxDQVZJLENBQW5CO01BQU04QixhO0FBYU4sSUFBTVAsUUFBUSxHQUFHN0IseURBQU0sQ0FBQzhCLEVBQVY7QUFBQTtBQUFBO0FBQUEsbUlBQWQ7TUFBTUQsUTtBQVdOLElBQU1TLGFBQWEsR0FBR3RDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkRBQW5CO01BQU1xQyxhO0FBUVNQLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjNhNjYzOGQ0NDU5MGI2ZWE0OWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmRpdmBcbiAgbWF4LXdpZHRoOiA2MHJlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiBgMCAke3RoZW1lLnNwYWNpbmcubGFyZ2V9YH07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICAgbWF4LXdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMCAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5tZWRpdW19YH07XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KSA9PiBgMCAke3RoZW1lLnNwYWNpbmcuc21hbGx9YH07XG4gIH1cbmA7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn1cblxuY29uc3QgQ29sbGFwc2VNZW51ID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBvcGVuIH0gPSB1c2VTcHJpbmcoeyBvcGVuOiBpc05hdmJhck9wZW4gPyAwIDogMSB9KTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgaWYgKGlzTmF2YmFyT3Blbikge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sbGFwc2VXcmFwcGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgdHJhbnNmb3JtOiBvcGVuXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoe1xuICAgICAgICAgICAgICByYW5nZTogWzAsIDAuMiwgMC4zLCAxXSxcbiAgICAgICAgICAgICAgb3V0cHV0OiBbMCwgLTIwLCAwLCAtMjAwXSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuaW50ZXJwb2xhdGUoKG9wZW5WYWx1ZSkgPT4gYHRyYW5zbGF0ZTNkKDAsICR7b3BlblZhbHVlfXB4LCAwYCksXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxOYXZMaW5rcz5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgdGl0bGU9eydIb21lJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgIHRpdGxlPXsnQ2xpZW50cyd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jbGllbnRzJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICAgIGFzPVwiYVwiXG4gICAgICAgICAgICAgIHRpdGxlPXsnUHJvamVjdHMnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHJvamVjdHMnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgdGl0bGU9eydDb250YWN0J31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkxpbmtzPlxuICAgICAgPC9Db2xsYXBzZVdyYXBwZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcbiAgfVxuYDtcbmNvbnN0IENvbGxhcHNlV3JhcHBlciA9IHN0eWxlZChhbmltYXRlZC5kaXYpYFxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjA1LCB0aGVtZS5jb2xvcnMud2hpdGUpfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQuNXJlbTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDk5OTtcbmA7XG5jb25zdCBOYXZMaW5rcyA9IHN0eWxlZC51bGBcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSAycmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlTWVudTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE5pZHJhdGVjaExvZ28gZnJvbSAnY29tcG9uZW50cy9OaWRyYXRlY2hMb2dvJztcbmltcG9ydCBCdXJnZXJNZW51IGZyb20gJy4vQnVyZ2VyTWVudSc7XG5pbXBvcnQgQ29sbGFwc2VNZW51IGZyb20gJy4vQ29sbGFwc2VNZW51JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgaXNOYXZiYXJPcGVuOiBib29sZWFuO1xuICBzZXRJc05hdmJhck9wZW46ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbn1cblxuY29uc3QgTmF2YmFyID0gKHsgaXNOYXZiYXJPcGVuLCBzZXRJc05hdmJhck9wZW4gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhcj5cbiAgICAgICAgPEZsZXhDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxuICAgICAgICAgICAgICA8U3R5bGVkTmlkcmF0ZWNoTG9nbyAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxOYXZMaW5rcz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnSG9tZSd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfT5cbiAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jbGllbnRzJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQ2xpZW50cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jbGllbnRzJ30+XG4gICAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydQcm9qZWN0cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9wcm9qZWN0cyd9PlxuICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQ29udGFjdCB1cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jb250YWN0J30+XG4gICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZMaW5rcz5cblxuICAgICAgICAgIDxCdXJnZXJXcmFwcGVyPlxuICAgICAgICAgICAgPEJ1cmdlck1lbnUgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxuICAgICAgICAgIDwvQnVyZ2VyV3JhcHBlcj5cbiAgICAgICAgPC9GbGV4Q29udGFpbmVyPlxuICAgICAgPC9OYXZCYXI+XG5cbiAgICAgIDxDb2xsYXBzZU1lbnUgaXNOYXZiYXJPcGVuPXtpc05hdmJhck9wZW59IHNldElzTmF2YmFyT3Blbj17c2V0SXNOYXZiYXJPcGVufSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcbiAgd2lkdGg6IDkuNXJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuYDtcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cbiAgICAgIGRhcmtlbigwLjA1LCBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuY29uc3QgTmF2QmFyID0gc3R5bGVkLm5hdmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuYDtcbmNvbnN0IEZsZXhDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDEyMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcbiAgfVxuYDtcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IGF1dG8gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuY29uc3QgQnVyZ2VyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogYXV0byAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=
