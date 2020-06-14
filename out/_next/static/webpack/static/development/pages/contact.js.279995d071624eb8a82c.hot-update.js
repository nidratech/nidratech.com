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
                      isActive: pathName === '/',
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
                      isActive: pathName === '/',
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
                      isActive: pathName === '/',
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
                      isActive: pathName === '/',
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
                      isActive: pathName === '/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJwYXRoTmFtZSIsIlN0eWxlZE5pZHJhdGVjaExvZ28iLCJzdHlsZWQiLCJOaWRyYXRlY2hMb2dvIiwiTmF2Q29udGFpbmVyIiwiZGl2IiwiTmF2SXRlbSIsImEiLCJ0aGVtZSIsInNwYWNpbmciLCJtZWRpdW0iLCJpc0FjdGl2ZSIsImNvbG9ycyIsImJyYW5kIiwiZ3JleSIsImRhcmtlbiIsIlN0eWxlZE5hdiIsIm5hdiIsImxhcmdlIiwiU3R5bGVkSGVhZGVyIiwiaGVhZGVyIiwid2hpdGUiLCJuYXZCYXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxtQkFDS0MsNkRBQVMsRUFEZDtBQUFBLE1BQ1JDLFFBRFEsY0FDUkEsUUFEUTs7QUFHaEIsU0FDRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBaUIsWUFBUSxNQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxPQUFEO0FBQVMsTUFBRSxFQUFDLEdBQVo7QUFBZ0Isa0JBQVksZ0JBQTVCO0FBQThDLFlBQVEsRUFBRUMsUUFBUSxLQUFLLEdBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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QUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNJLE1BQU4sQ0FBYVMsS0FBNUI7QUFBQSxDQU5FLEVBT047QUFBQSxNQUFHYixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY2EsWUFBN0I7QUFBQSxDQVBNLENBQWxCO01BQU1ILFk7QUFVU3RCLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb250YWN0LmpzLjI3OTk5NWQwNzE2MjRlYjhhODJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBkYXJrZW4gfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBOaWRyYXRlY2hMb2dvIGZyb20gJ2NvbXBvbmVudHMvTmlkcmF0ZWNoTG9nbyc7XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkSGVhZGVyPlxuICAgICAgPFN0eWxlZE5hdj5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgYXJpYS1sYWJlbD17J05pZHJhdGVjaCBMdGQuJ30gaXNBY3RpdmU9e3BhdGhOYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICA8U3R5bGVkTmlkcmF0ZWNoTG9nbyAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhOYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydQcm9qZWN0cyd9IGlzQWN0aXZlPXtwYXRoTmFtZSA9PT0gJy8nfT5cbiAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQ2xpZW50cyd9IGlzQWN0aXZlPXtwYXRoTmFtZSA9PT0gJy8nfT5cbiAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhOYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICBDb250YWN0IHVzXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L05hdkNvbnRhaW5lcj5cbiAgICAgIDwvU3R5bGVkTmF2PlxuICAgIDwvU3R5bGVkSGVhZGVyPlxuICApO1xufVxuXG5jb25zdCBTdHlsZWROaWRyYXRlY2hMb2dvID0gc3R5bGVkKE5pZHJhdGVjaExvZ28pYFxuICB3aWR0aDogOS41cmVtO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmE8eyBpc0FjdGl2ZT86IGJvb2xlYW4gfT5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PiAoaXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMuYnJhbmQgOiB0aGVtZS5jb2xvcnMuZ3JleSl9O1xuICA6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGRhcmtlbigwLjEsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xuICB9XG5gO1xuY29uc3QgU3R5bGVkTmF2ID0gc3R5bGVkLm5hdmBcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubGFyZ2V9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbmA7XG5jb25zdCBTdHlsZWRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIGhlaWdodDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9
