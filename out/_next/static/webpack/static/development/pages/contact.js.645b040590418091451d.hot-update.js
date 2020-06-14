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
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! components/NidratechLogo */ './components/NidratechLogo.tsx'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\Header.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Header() {
          _s();

          var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter'])(),
            pathname = _useRouter.pathname;

          return __jsx(
            StyledHeader,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 5,
              },
            },
            __jsx(
              StyledNav,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              __jsx(
                NavContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
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
                      lineNumber: 15,
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
                        lineNumber: 16,
                        columnNumber: 13,
                      },
                    },
                    __jsx(StyledNidratechLogo, {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
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
                    lineNumber: 22,
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
                      lineNumber: 23,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Home',
                      isActive: pathname === '/',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24,
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
                      lineNumber: 29,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Projects',
                      isActive: pathname === '/projects',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30,
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
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Clients',
                      isActive: pathname === '/clients',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36,
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
                      lineNumber: 41,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Contact us',
                      isActive: pathname === '/contact',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42,
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

        _s(Header, 'QpP2vYJstxsDz0K+Qwttl8PPVoY=', false, function () {
          return [next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter']];
        });

        _c = Header;
        var StyledNidratechLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__['default']
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
            var isActive = _ref3.isActive,
              theme = _ref3.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(
              0.05,
              isActive ? theme.colors.brand : theme.colors.grey
            );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJTdHlsZWROaWRyYXRlY2hMb2dvIiwic3R5bGVkIiwiTmlkcmF0ZWNoTG9nbyIsIk5hdkNvbnRhaW5lciIsImRpdiIsIk5hdkl0ZW0iLCJhIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJTdHlsZWROYXYiLCJuYXYiLCJsYXJnZSIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsIndoaXRlIiwibmF2QmFySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsbUJBQ0tDLDZEQUFTLEVBRGQ7QUFBQSxNQUNSQyxRQURRLGNBQ1JBLFFBRFE7O0FBR2hCLFNBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQWlCLFlBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLGtCQUFZLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLFlBQUQ7QUFBQTtBQUFB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QUFBQTtBQUFBLHVGQU1GO0FBQUEsTUFBR1osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSSxNQUFOLENBQWFTLEtBQTVCO0FBQUEsQ0FORSxFQU9OO0FBQUEsTUFBR2IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNhLFlBQTdCO0FBQUEsQ0FQTSxDQUFsQjtNQUFNSCxZO0FBVVNyQixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy42NDViMDQwNTkwNDE4MDkxNDUxZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxTdHlsZWROYXY+XG4gICAgICAgIDxOYXZDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxuICAgICAgICAgICAgICA8U3R5bGVkTmlkcmF0ZWNoTG9nbyAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydQcm9qZWN0cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9wcm9qZWN0cyd9PlxuICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cbiAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cbiAgICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG4gICAgICA8L1N0eWxlZE5hdj5cbiAgICA8L1N0eWxlZEhlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcbiAgd2lkdGg6IDkuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZE5hdiA9IHN0eWxlZC5uYXZgXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
