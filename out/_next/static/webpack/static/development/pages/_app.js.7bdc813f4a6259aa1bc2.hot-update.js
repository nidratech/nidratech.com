webpackHotUpdate('static\\development\\pages\\_app.js', {
  /***/ './pages/_app.tsx':
    /*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! next/head */ './node_modules/next/dist/next-server/lib/head.js'
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styles */ './styles/index.ts'
        );
        /* harmony import */ var lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! lib/analytics */ './lib/analytics.ts'
        );
        /* harmony import */ var components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! components */ './components/index.ts'
        );

        var _this = undefined,
          _jsxFileName = 'F:\\Projects\\nidratech.com\\pages\\_app.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on(
          'routeChangeComplete',
          function (url) {
            window.scrollTo(0, 0);
            Object(lib_analytics__WEBPACK_IMPORTED_MODULE_6__['trackPageView'])(url);
          }
        );
        var year = new Date().getFullYear();

        var App = function App(_ref) {
          var Component = _ref.Component,
            pageProps = _ref.pageProps,
            router = _ref.router;
          return __jsx(
            styled_components__WEBPACK_IMPORTED_MODULE_2__['ThemeProvider'],
            {
              theme: styles__WEBPACK_IMPORTED_MODULE_5__['theme'],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 5,
              },
            },
            __jsx(
              next_head__WEBPACK_IMPORTED_MODULE_4___default.a,
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 7,
                },
              },
              __jsx(
                'title',
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 9,
                  },
                },
                'Nidratech Ltd.'
              )
            ),
            __jsx(styles__WEBPACK_IMPORTED_MODULE_5__['GlobalStyles'], {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 7,
              },
            }),
            __jsx(
              MainLayoutContainer,
              {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 7,
                },
              },
              __jsx(components__WEBPACK_IMPORTED_MODULE_7__['Header'], {
                __self: _this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 9,
                },
              }),
              __jsx(
                StyledMain,
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  Component,
                  Object(
                    _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default']
                  )({}, pageProps, {
                    key: router.route,
                    __self: _this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 11,
                    },
                  })
                )
              ),
              __jsx(
                StyledFooter,
                {
                  __self: _this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 9,
                  },
                },
                'Forged from \uD83D\uDD25 \xA9',
                year,
                ' Nidratech Ltd.'
              )
            )
          );
        };

        _c = App;
        var MainLayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'MainLayoutContainer',
          componentId: 'sc-1qpzaiq-0',
        })(['display:grid;grid-template-rows:1fr min-content;min-height:100vh;']);
        _c2 = MainLayoutContainer;
        var StyledMain = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].main.withConfig({
          displayName: 'StyledMain',
          componentId: 'sc-1qpzaiq-1',
        })(['padding-top:', ';'], function (_ref2) {
          var theme = _ref2.theme;
          return theme.spacing.navBarHeight;
        });
        _c3 = StyledMain;
        var StyledFooter = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].footer.withConfig({
          displayName: 'StyledFooter',
          componentId: 'sc-1qpzaiq-2',
        })(
          ['display:flex;justify-content:center;padding:', ';color:', ';'],
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.spacing.medium;
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.colors.grey;
          }
        );
        _c4 = StyledFooter;
        /* harmony default export */ __webpack_exports__['default'] = App;

        var _c, _c2, _c3, _c4;

        $RefreshReg$(_c, 'App');
        $RefreshReg$(_c2, 'MainLayoutContainer');
        $RefreshReg$(_c3, 'StyledMain');
        $RefreshReg$(_c4, 'StyledFooter');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInVybCIsIndpbmRvdyIsInNjcm9sbFRvIiwidHJhY2tQYWdlVmlldyIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ0aGVtZSIsInJvdXRlIiwiTWFpbkxheW91dENvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZE1haW4iLCJtYWluIiwic3BhY2luZyIsIm5hdkJhckhlaWdodCIsIlN0eWxlZEZvb3RlciIsImZvb3RlciIsIm1lZGl1bSIsImNvbG9ycyIsImdyZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUFBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsVUFBQ0MsR0FBRCxFQUFTO0FBQy9DQyxRQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQUMscUVBQWEsQ0FBQ0gsR0FBRCxDQUFiO0FBQ0QsQ0FIRDtBQUtBLElBQU1JLElBQUksR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBYjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFnRDtBQUFBLE1BQTdDQyxTQUE2QyxRQUE3Q0EsU0FBNkM7QUFBQSxNQUFsQ0MsU0FBa0MsUUFBbENBLFNBQWtDO0FBQUEsTUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUMxRCxTQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVDLDRDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQURGLEVBS0UsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFPRSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlRixTQUFmO0FBQTBCLE9BQUcsRUFBRUMsTUFBTSxDQUFDRSxLQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FIRixFQU9FLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUErQlIsSUFBL0Isb0JBUEYsQ0FQRixDQURGO0FBbUJELENBcEJEOztLQUFNRyxHO0FBc0JOLElBQU1NLG1CQUFtQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUF6QjtNQUFNRixtQjtBQUtOLElBQU1HLFVBQVUsR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSwwQkFDQztBQUFBLE1BQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxZQUE3QjtBQUFBLENBREQsQ0FBaEI7TUFBTUgsVTtBQUdOLElBQU1JLFlBQVksR0FBR04seURBQU0sQ0FBQ08sTUFBVjtBQUFBO0FBQUE7QUFBQSxxRUFHTDtBQUFBLE1BQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjSSxNQUE3QjtBQUFBLENBSEssRUFJUDtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUE1QjtBQUFBLENBSk8sQ0FBbEI7TUFBTUosWTtBQU9TYixrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43YmRjODEzZjRhNjI1OWFhMWJjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMsIHRoZW1lIH0gZnJvbSAnc3R5bGVzJztcbmltcG9ydCB7IHRyYWNrUGFnZVZpZXcgfSBmcm9tICdsaWIvYW5hbHl0aWNzJztcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJ2NvbXBvbmVudHMnO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKHVybCkgPT4ge1xuICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gIHRyYWNrUGFnZVZpZXcodXJsKTtcbn0pO1xuXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmlkcmF0ZWNoIEx0ZC48L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XG5cbiAgICAgIDxNYWluTGF5b3V0Q29udGFpbmVyPlxuICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgPFN0eWxlZE1haW4+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e3JvdXRlci5yb3V0ZX0gLz5cbiAgICAgICAgPC9TdHlsZWRNYWluPlxuXG4gICAgICAgIDxTdHlsZWRGb290ZXI+Rm9yZ2VkIGZyb20g8J+UpSDCqXt5ZWFyfSBOaWRyYXRlY2ggTHRkLjwvU3R5bGVkRm9vdGVyPlxuICAgICAgPC9NYWluTGF5b3V0Q29udGFpbmVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IE1haW5MYXlvdXRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBtaW4tY29udGVudDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5gO1xuY29uc3QgU3R5bGVkTWFpbiA9IHN0eWxlZC5tYWluYFxuICBwYWRkaW5nLXRvcDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm5hdkJhckhlaWdodH07XG5gO1xuY29uc3QgU3R5bGVkRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9
