webpackHotUpdate('static\\development\\pages\\contact.js', {
  /***/ './components/Header.tsx':
    /*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ './node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
        );
        /* harmony import */ var components_NidratechLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! components/NidratechLogo */ './components/NidratechLogo.tsx'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\Header.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Header() {
          return __jsx(
            StyledHeader,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 5,
              },
            },
            __jsx(
              StyledNav,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                  columnNumber: 7,
                },
              },
              __jsx(
                NavContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 12,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      'aria-label': 'Nidratech Ltd.',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13,
                        columnNumber: 13,
                      },
                    },
                    __jsx(StyledNidratechLogo, {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 14,
                        columnNumber: 15,
                      },
                    })
                  )
                )
              ),
              __jsx(
                NavContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Home',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21,
                        columnNumber: 13,
                      },
                    },
                    'Home'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/projects',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Projects',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                        columnNumber: 13,
                      },
                    },
                    'Projects'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/clients',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Clients',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33,
                        columnNumber: 13,
                      },
                    },
                    'Clients'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/contact',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Contact us',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39,
                        columnNumber: 13,
                      },
                    },
                    'Contact us'
                  )
                )
              )
            )
          );
        }

        _c = Header;
        var StyledNidratechLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components_NidratechLogo__WEBPACK_IMPORTED_MODULE_4__['default']
        ).withConfig({
          displayName: 'StyledNidratechLogo',
          componentId: 'sc-1rgxcs4-0',
        })(['width:9.5rem;height:100%;']);
        _c2 = StyledNidratechLogo;
        var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].div.withConfig(
          {
            displayName: 'NavContainer',
            componentId: 'sc-1rgxcs4-1',
          }
        )(['display:flex;align-items:center;']);
        _c3 = NavContainer;
        var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].a.withConfig({
          displayName: 'NavItem',
          componentId: 'sc-1rgxcs4-2',
        })(
          ['display:flex;padding:0 ', ';color:', ';:hover{color:', ';}'],
          function (_ref) {
            var theme = _ref.theme;
            return theme.spacing.medium;
          },
          function (_ref2) {
            var isActive = _ref2.isActive,
              theme = _ref2.theme;
            return isActive ? theme.colors.brand : theme.colors.grey;
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(0.1, theme.colors.brand);
          }
        );
        _c4 = NavItem;
        var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].nav.withConfig({
          displayName: 'StyledNav',
          componentId: 'sc-1rgxcs4-3',
        })(
          [
            'padding:0 ',
            ';display:flex;align-items:center;justify-content:space-between;height:100%;',
          ],
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.spacing.large;
          }
        );
        _c5 = StyledNav;
        var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].header.withConfig({
          displayName: 'StyledHeader',
          componentId: 'sc-1rgxcs4-4',
        })(
          ['position:fixed;top:0;left:0;width:100%;z-index:99;background:', ';height:', ';'],
          function (_ref5) {
            var theme = _ref5.theme;
            return theme.colors.white;
          },
          function (_ref6) {
            var theme = _ref6.theme;
            return theme.spacing.navBarHeight;
          }
        );
        _c6 = StyledHeader;
        /* harmony default export */ __webpack_exports__['default'] = Header;

        var _c, _c2, _c3, _c4, _c5, _c6;

        $RefreshReg$(_c, 'Header');
        $RefreshReg$(_c2, 'StyledNidratechLogo');
        $RefreshReg$(_c3, 'NavContainer');
        $RefreshReg$(_c4, 'NavItem');
        $RefreshReg$(_c5, 'StyledNav');
        $RefreshReg$(_c6, 'StyledHeader');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwiU3R5bGVkTmlkcmF0ZWNoTG9nbyIsInN0eWxlZCIsIk5pZHJhdGVjaExvZ28iLCJOYXZDb250YWluZXIiLCJkaXYiLCJOYXZJdGVtIiwiYSIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsImlzQWN0aXZlIiwiY29sb3JzIiwiYnJhbmQiLCJncmV5IiwiZGFya2VuIiwiU3R5bGVkTmF2IiwibmF2IiwibGFyZ2UiLCJTdHlsZWRIZWFkZXIiLCJoZWFkZXIiLCJ3aGl0ZSIsIm5hdkJhckhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixTQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixZQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixrQkFBWSxnQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FERixDQURGLEVBU0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBaUIsWUFBUSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLEdBQVo7QUFBZ0IsU0FBSyxFQUFFLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQURGLEVBT0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxXQUFaO0FBQXlCLFlBQVEsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLFNBQUssRUFBRSxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBUEYsRUFhRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLFVBQVo7QUFBd0IsWUFBUSxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLEdBQVo7QUFBZ0IsU0FBSyxFQUFFLFNBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixDQWJGLEVBbUJFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsVUFBWjtBQUF3QixZQUFRLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixTQUFLLEVBQUUsWUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQW5CRixDQVRGLENBREYsQ0FERjtBQXVDRDs7S0F4Q1FBLE07QUEwQ1QsSUFBTUMsbUJBQW1CLEdBQUdDLGlFQUFNLENBQUNDLGdFQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsaUNBQXpCO01BQU1GLG1CO0FBSU4sSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdDQUFsQjtNQUFNRCxZO0FBSU4sSUFBTUUsT0FBTyxHQUFHSix5REFBTSxDQUFDSyxDQUFWO0FBQUE7QUFBQTtBQUFBLG1FQUVFO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FGRixFQUdGO0FBQUEsTUFBR0MsUUFBSCxTQUFHQSxRQUFIO0FBQUEsTUFBYUgsS0FBYixTQUFhQSxLQUFiO0FBQUEsU0FBMEJHLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWhCLEdBQXdCTCxLQUFLLENBQUNJLE1BQU4sQ0FBYUUsSUFBdkU7QUFBQSxDQUhFLEVBS0E7QUFBQSxNQUFHTixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlTyx1REFBTSxDQUFDLEdBQUQsRUFBTVAsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQW5CLENBQXJCO0FBQUEsQ0FMQSxDQUFiO01BQU1QLE87QUFRTixJQUFNVSxTQUFTLEdBQUdkLHlEQUFNLENBQUNlLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0dBQ0E7QUFBQSxNQUFHVCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY1MsS0FBN0I7QUFBQSxDQURBLENBQWY7TUFBTUYsUztBQU9OLElBQU1HLFlBQVksR0FBR2pCLHlEQUFNLENBQUNrQixNQUFWO0FBQUE7QUFBQTtBQUFBLHVGQU1GO0FBQUEsTUFBR1osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxNQUFOLENBQWFTLEtBQTVCO0FBQUEsQ0FORSxFQU9OO0FBQUEsTUFBR2IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNhLFlBQTdCO0FBQUEsQ0FQTSxDQUFsQjtNQUFNSCxZO0FBVVNuQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy40NjMxMGZiZWQzYTI2ODU3NDM4NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxTdHlsZWROYXY+XG4gICAgICAgIDxOYXZDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxuICAgICAgICAgICAgICA8U3R5bGVkTmlkcmF0ZWNoTG9nbyAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J1Byb2plY3RzJ30+XG4gICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9jbGllbnRzJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiB0aXRsZT17J0NsaWVudHMnfT5cbiAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30+XG4gICAgICAgICAgICAgIENvbnRhY3QgdXNcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2Q29udGFpbmVyPlxuICAgICAgPC9TdHlsZWROYXY+XG4gICAgPC9TdHlsZWRIZWFkZXI+XG4gICk7XG59XG5cbmNvbnN0IFN0eWxlZE5pZHJhdGVjaExvZ28gPSBzdHlsZWQoTmlkcmF0ZWNoTG9nbylgXG4gIHdpZHRoOiA5LjVyZW07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlOiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBkYXJrZW4oMC4xLCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZE5hdiA9IHN0eWxlZC5uYXZgXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
