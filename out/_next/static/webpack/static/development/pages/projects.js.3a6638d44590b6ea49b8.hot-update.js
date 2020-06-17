webpackHotUpdate('static\\development\\pages\\projects.js', {
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

  /***/ './pages/projects.tsx':
    /*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
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
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/head */ './node_modules/next/dist/next-server/lib/head.js'
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
        );
        /* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! components */ './components/index.ts'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\pages\\projects.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Projects() {
          return __jsx(
            components__WEBPACK_IMPORTED_MODULE_4__['Container'],
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 5,
              },
            },
            __jsx(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 7,
                },
              },
              __jsx(
                'title',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 9,
                  },
                },
                'Projects - Nidratech'
              )
            ),
            __jsx(components__WEBPACK_IMPORTED_MODULE_4__['PageTitle'], {
              title: "What we've been up to lately",
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 7,
              },
            }),
            __jsx(
              PageSubTitle,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 7,
                },
              },
              'Outside of working with our clients, we spend some time working on side projects.'
            ),
            __jsx(
              ProjectContainer,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                TitleContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  ProjectLink,
                  {
                    href: 'https://www.tomati.io',
                    rel: 'noreferrer',
                    target: '_blank',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 11,
                    },
                  },
                  __jsx('img', {
                    src: 'images/tomati-logo.png',
                    title: 'Tomati',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  'div',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    TomatiTitle,
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      'a',
                      {
                        href: 'https://www.tomati.io',
                        rel: 'noreferrer',
                        target: '_blank',
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 15,
                        },
                      },
                      __jsx(InlineProjectImg, {
                        src: 'images/tomati-logo.png',
                        title: 'Tomati',
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 29,
                          columnNumber: 17,
                        },
                      }),
                      ' Tomati'
                    )
                  ),
                  __jsx(
                    'p',
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 13,
                      },
                    },
                    'A restaurant health inspection reports aggregator. We gather inspection reports from hundreds of thousands of Canadian and American food establishments and aggregate them with Groupon deals, data from Google, Yelp and Zomato to provide the user with a rich collection of information about the favorite local restaurants.'
                  )
                )
              ),
              __jsx(
                PromoImages,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 9,
                  },
                },
                __jsx(ProjectImg, {
                  src: 'images/tomati-1.jpg',
                  alt: 'Tomati screenshot #1',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 11,
                  },
                }),
                __jsx(ProjectImg, {
                  src: 'images/tomati-4.jpg',
                  alt: 'Tomati screenshot #2',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44,
                    columnNumber: 11,
                  },
                }),
                __jsx(ProjectImg, {
                  src: 'images/tomati-2.jpg',
                  alt: 'Tomati screenshot #3',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 11,
                  },
                })
              ),
              __jsx(
                IconContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  'a',
                  {
                    href: 'https://play.google.com/store/apps/details?id=com.nidratech.tomati',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 11,
                    },
                  },
                  __jsx(PlayStoreIcon, {
                    src: 'images/android-play-badge.png',
                    title: 'Android app',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  'a',
                  {
                    href:
                      'https://itunes.apple.com/us/app/tomati-restaurant-inspector/id1440846554',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 11,
                    },
                  },
                  __jsx(AppStoreIcon, {
                    src: 'images/app-store-badge.svg',
                    alt: 'iOS app',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 13,
                    },
                  })
                )
              )
            ),
            __jsx(
              ProjectContainer,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 7,
                },
              },
              __jsx(
                TitleContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  ProjectLink,
                  {
                    href: 'https://www.huegasm.com',
                    rel: 'noreferrer',
                    target: '_blank',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 11,
                    },
                  },
                  __jsx('img', {
                    src: 'images/huegasm-logo.png',
                    title: 'Huegasm',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  'div',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    HuegasmTitle,
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 13,
                      },
                    },
                    __jsx(
                      'a',
                      {
                        href: 'https://www.huegasm.com',
                        rel: 'noreferrer',
                        target: '_blank',
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                          columnNumber: 15,
                        },
                      },
                      __jsx(InlineProjectImg, {
                        src: 'images/huegasm-logo.png',
                        title: 'Huegasm',
                        __self: this,
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 76,
                          columnNumber: 17,
                        },
                      }),
                      ' Huegasm'
                    )
                  ),
                  __jsx(
                    'p',
                    {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 13,
                      },
                    },
                    'A Chrome extension, web, Android and iOS app for controlling and syncing Philips Hue lights with music.'
                  )
                )
              ),
              __jsx(
                PromoImages,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87,
                    columnNumber: 9,
                  },
                },
                __jsx(ProjectImg, {
                  src: 'images/huegasm-1.jpg',
                  alt: 'Huegasm screenshot #1',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 11,
                  },
                }),
                __jsx(ProjectImg, {
                  src: 'images/huegasm-2.jpg',
                  alt: 'Huegasm screenshot #2',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 11,
                  },
                }),
                __jsx(ProjectImg, {
                  src: 'images/huegasm-3.jpg',
                  alt: 'Huegasm screenshot #3',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 11,
                  },
                })
              ),
              __jsx(
                IconContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  'a',
                  {
                    href:
                      'https://chrome.google.com/webstore/detail/huegasm-for-philips-hue-l/mbjanbdhcpohhfecjgbdpcfhnnbofooj',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 11,
                    },
                  },
                  __jsx(ChromeStoreIcon, {
                    src: 'images/chrome-store-badge.png',
                    title: 'Chrome extension',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  'a',
                  {
                    href: 'https://play.google.com/store/apps/details?id=com.hoboman313.huegasm',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 11,
                    },
                  },
                  __jsx(PlayStoreIcon, {
                    src: 'images/android-play-badge.png',
                    title: 'Android app',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 13,
                    },
                  })
                ),
                __jsx(
                  'a',
                  {
                    href:
                      'https://itunes.apple.com/us/app/huegasm-for-philips-hue-lights/id1403108485',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 11,
                    },
                  },
                  __jsx(AppStoreIcon, {
                    src: 'images/app-store-badge.svg',
                    alt: 'iOS app',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 13,
                    },
                  })
                )
              )
            )
          );
        }

        _c = Projects;
        var PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h3.withConfig({
          displayName: 'PageSubTitle',
          componentId: 'sc-1ugqrvt-0',
        })(['margin-bottom:', ';font-size:1.25em;'], function (_ref) {
          var theme = _ref.theme;
          return theme.spacing.medium;
        });
        _c2 = PageSubTitle;
        var InlineProjectImg = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].img.withConfig({
          displayName: 'InlineProjectImg',
          componentId: 'sc-1ugqrvt-1',
        })(['width:2rem;position:relative;top:0.25rem;@media (min-width:48rem){display:none;}']);
        _c3 = InlineProjectImg;
        var ProjectLink = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].a.withConfig({
          displayName: 'ProjectLink',
          componentId: 'sc-1ugqrvt-2',
        })(['@media (max-width:48rem){display:none;}']);
        _c4 = ProjectLink;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'sc-1ugqrvt-3',
        })(
          [
            'display:grid;grid-gap:',
            ';grid-template-columns:5rem 1fr;align-items:center;@media (max-width:48rem){grid-template-columns:1fr;}',
          ],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.spacing.medium;
          }
        );
        _c5 = TitleContainer;
        var TomatiTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h2.withConfig({
          displayName: 'TomatiTitle',
          componentId: 'sc-1ugqrvt-4',
        })(
          ['font-size:1.5em;margin:0.5rem 0;a{color:#f93e0b;:hover,:focus{color:', ';}}'],
          Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(0.05, '#f93e0b')
        );
        _c6 = TomatiTitle;
        var HuegasmTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h2.withConfig({
          displayName: 'HuegasmTitle',
          componentId: 'sc-1ugqrvt-5',
        })(
          ['font-size:1.5em;margin:0.5rem 0;a{color:#910249;:hover,:focus{color:', ';}}'],
          Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(0.05, '#910249')
        );
        _c7 = HuegasmTitle;
        var PromoImages = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].div.withConfig({
          displayName: 'PromoImages',
          componentId: 'sc-1ugqrvt-6',
        })(
          [
            'margin-top:',
            ';display:grid;grid-template-columns:repeat(3,12.5rem);grid-gap:',
            ';align-items:center;justify-content:center;justify-items:center;@media (max-width:48rem){grid-template-columns:1fr;}',
          ],
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.spacing.medium;
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.spacing.small;
          }
        );
        _c8 = PromoImages;
        var ChromeStoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].img.withConfig({
          displayName: 'ChromeStoreIcon',
          componentId: 'sc-1ugqrvt-7',
        })(['width:10.5rem;']);
        _c9 = ChromeStoreIcon;
        var PlayStoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].img.withConfig({
          displayName: 'PlayStoreIcon',
          componentId: 'sc-1ugqrvt-8',
        })(['width:9.25rem;']);
        _c10 = PlayStoreIcon;
        var AppStoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].img.withConfig(
          {
            displayName: 'AppStoreIcon',
            componentId: 'sc-1ugqrvt-9',
          }
        )(['width:7.5rem;']);
        _c11 = AppStoreIcon;
        var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'IconContainer',
          componentId: 'sc-1ugqrvt-10',
        })(['display:flex;align-items:center;margin-top:0.5rem;flex-flow:wrap;']);
        _c12 = IconContainer;
        var ProjectContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'ProjectContainer',
          componentId: 'sc-1ugqrvt-11',
        })(
          ['border:1px solid rgba(0,0,0,0.125);padding:0.75rem 1.25rem;margin-bottom:', ';'],
          function (_ref5) {
            var theme = _ref5.theme;
            return theme.spacing.medium;
          }
        );
        _c13 = ProjectContainer;
        var ProjectImg = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].img.withConfig({
          displayName: 'ProjectImg',
          componentId: 'sc-1ugqrvt-12',
        })(
          [
            'width:12.5rem;margin-bottom:',
            ';padding:0 0.25rem;@media (max-width:48rem){margin-bottom:0;}',
          ],
          function (_ref6) {
            var theme = _ref6.theme;
            return theme.spacing.medium;
          }
        );
        _c14 = ProjectImg;
        /* harmony default export */ __webpack_exports__['default'] = Projects;

        var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

        $RefreshReg$(_c, 'Projects');
        $RefreshReg$(_c2, 'PageSubTitle');
        $RefreshReg$(_c3, 'InlineProjectImg');
        $RefreshReg$(_c4, 'ProjectLink');
        $RefreshReg$(_c5, 'TitleContainer');
        $RefreshReg$(_c6, 'TomatiTitle');
        $RefreshReg$(_c7, 'HuegasmTitle');
        $RefreshReg$(_c8, 'PromoImages');
        $RefreshReg$(_c9, 'ChromeStoreIcon');
        $RefreshReg$(_c10, 'PlayStoreIcon');
        $RefreshReg$(_c11, 'AppStoreIcon');
        $RefreshReg$(_c12, 'IconContainer');
        $RefreshReg$(_c13, 'ProjectContainer');
        $RefreshReg$(_c14, 'ProjectImg');

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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZiYXIvQ29sbGFwc2VNZW51LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci9OYXZiYXIudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2plY3RzLnRzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsInNwYWNpbmciLCJtZWRpdW0iLCJsYXJnZSIsInNtYWxsIiwiQ29sbGFwc2VNZW51IiwiaXNOYXZiYXJPcGVuIiwic2V0SXNOYXZiYXJPcGVuIiwidXNlU3ByaW5nIiwib3BlbiIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwidHJhbnNmb3JtIiwiaW50ZXJwb2xhdGUiLCJyYW5nZSIsIm91dHB1dCIsIm9wZW5WYWx1ZSIsIk5hdkl0ZW0iLCJhIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJDb2xsYXBzZVdyYXBwZXIiLCJhbmltYXRlZCIsIndoaXRlIiwiTmF2TGlua3MiLCJ1bCIsIk5hdmJhciIsIlN0eWxlZE5pZHJhdGVjaExvZ28iLCJOaWRyYXRlY2hMb2dvIiwiTmF2QmFyIiwibmF2IiwiRmxleENvbnRhaW5lciIsIm5hdkJhckhlaWdodCIsIkJ1cmdlcldyYXBwZXIiLCJQcm9qZWN0cyIsIlBhZ2VTdWJUaXRsZSIsImgzIiwiSW5saW5lUHJvamVjdEltZyIsImltZyIsIlByb2plY3RMaW5rIiwiVGl0bGVDb250YWluZXIiLCJUb21hdGlUaXRsZSIsImgyIiwiSHVlZ2FzbVRpdGxlIiwiUHJvbW9JbWFnZXMiLCJDaHJvbWVTdG9yZUljb24iLCJQbGF5U3RvcmVJY29uIiwiQXBwU3RvcmVJY29uIiwiSWNvbkNvbnRhaW5lciIsIlByb2plY3RDb250YWluZXIiLCJQcm9qZWN0SW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBRWVB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Q0FKRyxDQUFqQjtNQUFNMkMsVztBQWFOLElBQU1DLGVBQWUsR0FBR2xELHlEQUFNLENBQUMyQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNCQUFyQjtNQUFNTyxlO0FBR04sSUFBTUMsYUFBYSxHQUFHbkQseURBQU0sQ0FBQzJDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0JBQW5CO09BQU1RLGE7QUFHTixJQUFNQyxZQUFZLEdBQUdwRCx5REFBTSxDQUFDMkMsR0FBVjtBQUFBO0FBQUE7QUFBQSxxQkFBbEI7T0FBTVMsWTtBQUdOLElBQU1DLGFBQWEsR0FBR3JELHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseUVBQW5CO09BQU1vRCxhO0FBTU4sSUFBTUMsZ0JBQWdCLEdBQUd0RCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVGQUdIO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FIRyxDQUF0QjtPQUFNa0QsZ0I7QUFLTixJQUFNQyxVQUFVLEdBQUd2RCx5REFBTSxDQUFDMkMsR0FBVjtBQUFBO0FBQUE7QUFBQSxzR0FFRztBQUFBLE1BQUd6QyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUZILENBQWhCO09BQU1tRCxVO0FBVVNoQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvamVjdHMuanMuM2E2NjM4ZDQ0NTkwYjZlYTQ5YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDYwcmVtO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5sYXJnZX1gfTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgICBtYXgtd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLm1lZGl1bX1gfTtcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pID0+IGAwICR7dGhlbWUuc3BhY2luZy5zbWFsbH1gfTtcbiAgfVxuYDtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc05hdmJhck9wZW46IGJvb2xlYW47XG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb2xsYXBzZU1lbnUgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IG9wZW4gfSA9IHVzZVNwcmluZyh7IG9wZW46IGlzTmF2YmFyT3BlbiA/IDAgOiAxIH0pO1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAoaXNOYXZiYXJPcGVuKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2xsYXBzZVdyYXBwZXJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0cmFuc2Zvcm06IG9wZW5cbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZSh7XG4gICAgICAgICAgICAgIHJhbmdlOiBbMCwgMC4yLCAwLjMsIDFdLFxuICAgICAgICAgICAgICBvdXRwdXQ6IFswLCAtMjAsIDAsIC0yMDBdLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5pbnRlcnBvbGF0ZSgob3BlblZhbHVlKSA9PiBgdHJhbnNsYXRlM2QoMCwgJHtvcGVuVmFsdWV9cHgsIDBgKSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPE5hdkxpbmtzPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICB0aXRsZT17J0hvbWUnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgdGl0bGU9eydDbGllbnRzJ31cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbGllbnRzXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgdGl0bGU9eydQcm9qZWN0cyd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XG4gICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9wcm9qZWN0cyd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICB0aXRsZT17J0NvbnRhY3QnfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvY29udGFjdCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2TGlua3M+XG4gICAgICA8L0NvbGxhcHNlV3JhcHBlcj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xuXG4gIDpob3ZlciB7XG4gICAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+XG4gICAgICBkYXJrZW4oMC4wNSwgaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xuICB9XG5gO1xuY29uc3QgQ29sbGFwc2VXcmFwcGVyID0gc3R5bGVkKGFuaW1hdGVkLmRpdilgXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy53aGl0ZSl9O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNC41cmVtO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5O1xuYDtcbmNvbnN0IE5hdkxpbmtzID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFwc2VNZW51O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xuaW1wb3J0IEJ1cmdlck1lbnUgZnJvbSAnLi9CdXJnZXJNZW51JztcbmltcG9ydCBDb2xsYXBzZU1lbnUgZnJvbSAnLi9Db2xsYXBzZU1lbnUnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBpc05hdmJhck9wZW46IGJvb2xlYW47XG4gIHNldElzTmF2YmFyT3BlbjogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xufVxuXG5jb25zdCBOYXZiYXIgPSAoeyBpc05hdmJhck9wZW4sIHNldElzTmF2YmFyT3BlbiB9OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyPlxuICAgICAgICA8RmxleENvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgYXJpYS1sYWJlbD17J05pZHJhdGVjaCBMdGQuJ30+XG4gICAgICAgICAgICAgIDxTdHlsZWROaWRyYXRlY2hMb2dvIC8+XG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPE5hdkxpbmtzPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cbiAgICAgICAgICAgICAgICBDbGllbnRzXG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1Byb2plY3RzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL3Byb2plY3RzJ30+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2NvbnRhY3QnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L05hdkxpbmtzPlxuXG4gICAgICAgICAgPEJ1cmdlcldyYXBwZXI+XG4gICAgICAgICAgICA8QnVyZ2VyTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XG4gICAgICAgICAgPC9CdXJnZXJXcmFwcGVyPlxuICAgICAgICA8L0ZsZXhDb250YWluZXI+XG4gICAgICA8L05hdkJhcj5cblxuICAgICAgPENvbGxhcHNlTWVudSBpc05hdmJhck9wZW49e2lzTmF2YmFyT3Blbn0gc2V0SXNOYXZiYXJPcGVuPXtzZXRJc05hdmJhck9wZW59IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBTdHlsZWROaWRyYXRlY2hMb2dvID0gc3R5bGVkKE5pZHJhdGVjaExvZ28pYFxuICB3aWR0aDogOS41cmVtO1xuICBoZWlnaHQ6IDRyZW07XG5gO1xuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5jb25zdCBOYXZCYXIgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG5gO1xuY29uc3QgRmxleENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDogMTIwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubmF2QmFySGVpZ2h0fTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAgIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gYDAgJHt0aGVtZS5zcGFjaW5nLnNtYWxsfWB9O1xuICB9XG5gO1xuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQudWxgXG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogYXV0byAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBCdXJnZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiBhdXRvIDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgeyBQYWdlVGl0bGUsIENvbnRhaW5lciB9IGZyb20gJ2NvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qcm9qZWN0cyAtIE5pZHJhdGVjaDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJXaGF0IHdlJ3ZlIGJlZW4gdXAgdG8gbGF0ZWx5XCIgLz5cblxuICAgICAgPFBhZ2VTdWJUaXRsZT5cbiAgICAgICAgT3V0c2lkZSBvZiB3b3JraW5nIHdpdGggb3VyIGNsaWVudHMsIHdlIHNwZW5kIHNvbWUgdGltZSB3b3JraW5nIG9uIHNpZGUgcHJvamVjdHMuXG4gICAgICA8L1BhZ2VTdWJUaXRsZT5cblxuICAgICAgPFByb2plY3RDb250YWluZXI+XG4gICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgICA8UHJvamVjdExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LnRvbWF0aS5pb1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3RvbWF0aS1sb2dvLnBuZ1wiIHRpdGxlPVwiVG9tYXRpXCIgLz5cbiAgICAgICAgICA8L1Byb2plY3RMaW5rPlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUb21hdGlUaXRsZT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRvbWF0aS5pb1wiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8SW5saW5lUHJvamVjdEltZyBzcmM9XCJpbWFnZXMvdG9tYXRpLWxvZ28ucG5nXCIgdGl0bGU9XCJUb21hdGlcIiAvPiBUb21hdGlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Ub21hdGlUaXRsZT5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEEgcmVzdGF1cmFudCBoZWFsdGggaW5zcGVjdGlvbiByZXBvcnRzIGFnZ3JlZ2F0b3IuIFdlIGdhdGhlciBpbnNwZWN0aW9uIHJlcG9ydHMgZnJvbVxuICAgICAgICAgICAgICBodW5kcmVkcyBvZiB0aG91c2FuZHMgb2YgQ2FuYWRpYW4gYW5kIEFtZXJpY2FuIGZvb2QgZXN0YWJsaXNobWVudHMgYW5kIGFnZ3JlZ2F0ZSB0aGVtXG4gICAgICAgICAgICAgIHdpdGggR3JvdXBvbiBkZWFscywgZGF0YSBmcm9tIEdvb2dsZSwgWWVscCBhbmQgWm9tYXRvIHRvIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHJpY2hcbiAgICAgICAgICAgICAgY29sbGVjdGlvbiBvZiBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZmF2b3JpdGUgbG9jYWwgcmVzdGF1cmFudHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVGl0bGVDb250YWluZXI+XG5cbiAgICAgICAgPFByb21vSW1hZ2VzPlxuICAgICAgICAgIDxQcm9qZWN0SW1nIHNyYz1cImltYWdlcy90b21hdGktMS5qcGdcIiBhbHQ9XCJUb21hdGkgc2NyZWVuc2hvdCAjMVwiIC8+XG4gICAgICAgICAgPFByb2plY3RJbWcgc3JjPVwiaW1hZ2VzL3RvbWF0aS00LmpwZ1wiIGFsdD1cIlRvbWF0aSBzY3JlZW5zaG90ICMyXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEltZyBzcmM9XCJpbWFnZXMvdG9tYXRpLTIuanBnXCIgYWx0PVwiVG9tYXRpIHNjcmVlbnNob3QgIzNcIiAvPlxuICAgICAgICA8L1Byb21vSW1hZ2VzPlxuXG4gICAgICAgIDxJY29uQ29udGFpbmVyPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5uaWRyYXRlY2gudG9tYXRpXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxheVN0b3JlSWNvbiBzcmM9XCJpbWFnZXMvYW5kcm9pZC1wbGF5LWJhZGdlLnBuZ1wiIHRpdGxlPVwiQW5kcm9pZCBhcHBcIiAvPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC90b21hdGktcmVzdGF1cmFudC1pbnNwZWN0b3IvaWQxNDQwODQ2NTU0XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXBwU3RvcmVJY29uIHNyYz1cImltYWdlcy9hcHAtc3RvcmUtYmFkZ2Uuc3ZnXCIgYWx0PVwiaU9TIGFwcFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICA8L1Byb2plY3RDb250YWluZXI+XG5cbiAgICAgIDxQcm9qZWN0Q29udGFpbmVyPlxuICAgICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgICAgPFByb2plY3RMaW5rIGhyZWY9XCJodHRwczovL3d3dy5odWVnYXNtLmNvbVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2h1ZWdhc20tbG9nby5wbmdcIiB0aXRsZT1cIkh1ZWdhc21cIiAvPlxuICAgICAgICAgIDwvUHJvamVjdExpbms+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEh1ZWdhc21UaXRsZT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmh1ZWdhc20uY29tXCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgIDxJbmxpbmVQcm9qZWN0SW1nIHNyYz1cImltYWdlcy9odWVnYXNtLWxvZ28ucG5nXCIgdGl0bGU9XCJIdWVnYXNtXCIgLz4gSHVlZ2FzbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0h1ZWdhc21UaXRsZT5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEEgQ2hyb21lIGV4dGVuc2lvbiwgd2ViLCBBbmRyb2lkIGFuZCBpT1MgYXBwIGZvciBjb250cm9sbGluZyBhbmQgc3luY2luZyBQaGlsaXBzIEh1ZVxuICAgICAgICAgICAgICBsaWdodHMgd2l0aCBtdXNpYy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cblxuICAgICAgICA8UHJvbW9JbWFnZXM+XG4gICAgICAgICAgPFByb2plY3RJbWcgc3JjPVwiaW1hZ2VzL2h1ZWdhc20tMS5qcGdcIiBhbHQ9XCJIdWVnYXNtIHNjcmVlbnNob3QgIzFcIiAvPlxuICAgICAgICAgIDxQcm9qZWN0SW1nIHNyYz1cImltYWdlcy9odWVnYXNtLTIuanBnXCIgYWx0PVwiSHVlZ2FzbSBzY3JlZW5zaG90ICMyXCIgLz5cbiAgICAgICAgICA8UHJvamVjdEltZyBzcmM9XCJpbWFnZXMvaHVlZ2FzbS0zLmpwZ1wiIGFsdD1cIkh1ZWdhc20gc2NyZWVuc2hvdCAjM1wiIC8+XG4gICAgICAgIDwvUHJvbW9JbWFnZXM+XG5cbiAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9odWVnYXNtLWZvci1waGlsaXBzLWh1ZS1sL21iamFuYmRoY3BvaGhmZWNqZ2JkcGNmaG5uYm9mb29qXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hyb21lU3RvcmVJY29uIHNyYz1cImltYWdlcy9jaHJvbWUtc3RvcmUtYmFkZ2UucG5nXCIgdGl0bGU9XCJDaHJvbWUgZXh0ZW5zaW9uXCIgLz5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uaG9ib21hbjMxMy5odWVnYXNtXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8UGxheVN0b3JlSWNvbiBzcmM9XCJpbWFnZXMvYW5kcm9pZC1wbGF5LWJhZGdlLnBuZ1wiIHRpdGxlPVwiQW5kcm9pZCBhcHBcIiAvPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3VzL2FwcC9odWVnYXNtLWZvci1waGlsaXBzLWh1ZS1saWdodHMvaWQxNDAzMTA4NDg1XCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXBwU3RvcmVJY29uIHNyYz1cImltYWdlcy9hcHAtc3RvcmUtYmFkZ2Uuc3ZnXCIgYWx0PVwiaU9TIGFwcFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0ljb25Db250YWluZXI+XG4gICAgICA8L1Byb2plY3RDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IFBhZ2VTdWJUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuYDtcbmNvbnN0IElubGluZVByb2plY3RJbWcgPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogMnJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDAuMjVyZW07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcbmNvbnN0IFByb2plY3RMaW5rID0gc3R5bGVkLmFgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1cmVtIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuYDtcbmNvbnN0IFRvbWF0aVRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuXG4gIGEge1xuICAgIGNvbG9yOiAjZjkzZTBiO1xuXG4gICAgOmhvdmVyLFxuICAgIDpmb2N1cyB7XG4gICAgICBjb2xvcjogJHtkYXJrZW4oMC4wNSwgJyNmOTNlMGInKX07XG4gICAgfVxuICB9XG5gO1xuY29uc3QgSHVlZ2FzbVRpdGxlID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuXG4gIGEge1xuICAgIGNvbG9yOiAjOTEwMjQ5O1xuXG4gICAgOmhvdmVyLFxuICAgIDpmb2N1cyB7XG4gICAgICBjb2xvcjogJHtkYXJrZW4oMC4wNSwgJyM5MTAyNDknKX07XG4gICAgfVxuICB9XG5gO1xuY29uc3QgUHJvbW9JbWFnZXMgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMTIuNXJlbSk7XG4gIGdyaWQtZ2FwOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcuc21hbGx9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0OHJlbSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5gO1xuY29uc3QgQ2hyb21lU3RvcmVJY29uID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwLjVyZW07XG5gO1xuY29uc3QgUGxheVN0b3JlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA5LjI1cmVtO1xuYDtcbmNvbnN0IEFwcFN0b3JlSWNvbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA3LjVyZW07XG5gO1xuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZmxleC1mbG93OiB3cmFwO1xuYDtcbmNvbnN0IFByb2plY3RDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbmA7XG5jb25zdCBQcm9qZWN0SW1nID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4cmVtKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwic291cmNlUm9vdCI6IiJ9
