webpackHotUpdate('static\\development\\pages\\index.js', {
  /***/ './pages/index.tsx':
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
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
        /* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! components */ './components/index.ts'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\pages\\index.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Home() {
          return __jsx(
            HomeContainer,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 8,
                columnNumber: 5,
              },
            },
            __jsx(
              PageTitleContainer,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              __jsx(
                PageTitle,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
                    columnNumber: 9,
                  },
                },
                'Web Consulting in Touch with Tomorrow'
              ),
              __jsx(components__WEBPACK_IMPORTED_MODULE_3__['HighlightLine'], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12,
                  columnNumber: 9,
                },
              })
            ),
            __jsx(
              PageSubTitle,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 7,
                },
              },
              'We bring ideas to life and create products that people love. ',
              __jsx('br', {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 70,
                },
              }),
              'Let us help you make something remarkable.'
            ),
            __jsx(
              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
              {
                href: '/contact',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                ContactButton,
                {
                  type: 'button',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                'Contact Us'
              )
            )
          );
        }

        _c = Home;
        var ContactButton = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].a.withConfig({
          displayName: 'ContactButton',
          componentId: 'sc-1xh3p16-0',
        })(
          [
            'background-color:',
            ';color:',
            ';text-align:center;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
          ],
          function (_ref) {
            var theme = _ref.theme;
            return theme.colors.brand;
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.colors.white;
          }
        );
        _c2 = ContactButton;
        var PageTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'PageTitleContainer',
          componentId: 'sc-1xh3p16-1',
        })(['display:inline-block;']);
        _c3 = PageTitleContainer;
        var HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'HomeContainer',
          componentId: 'sc-1xh3p16-2',
        })(
          [
            'background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:background 3.5s linear infinite;color:',
            ';padding:10vh 3vw;',
          ],
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.colors.white;
          }
        );
        _c4 = HomeContainer;
        var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageTitle',
          componentId: 'sc-1xh3p16-3',
        })(['font-size:', ';margin-top:2vh;'], function (_ref4) {
          var theme = _ref4.theme;
          return theme.textSize.large;
        });
        _c5 = PageTitle;
        var PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageSubTitle',
          componentId: 'sc-1xh3p16-4',
        })(['font-size:', ';margin-top:5vh;margin-bottom:4vh;line-height:1.5;'], function (_ref5) {
          var theme = _ref5.theme;
          return theme.textSize.medium;
        });
        _c6 = PageSubTitle;
        /* harmony default export */ __webpack_exports__['default'] = Home;

        var _c, _c2, _c3, _c4, _c5, _c6;

        $RefreshReg$(_c, 'Home');
        $RefreshReg$(_c2, 'ContactButton');
        $RefreshReg$(_c3, 'PageTitleContainer');
        $RefreshReg$(_c4, 'HomeContainer');
        $RefreshReg$(_c5, 'PageTitle');
        $RefreshReg$(_c6, 'PageSubTitle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIkNvbnRhY3RCdXR0b24iLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsIndoaXRlIiwiUGFnZVRpdGxlQ29udGFpbmVyIiwiZGl2IiwiSG9tZUNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsImgxIiwidGV4dFNpemUiLCJsYXJnZSIsIlBhZ2VTdWJUaXRsZSIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUdFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFDK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQvRCwrQ0FQRixFQVlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxhQUFEO0FBQWUsUUFBSSxFQUFDLFFBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FaRixDQURGO0FBa0JEOztLQW5CUUEsSTtBQXFCVCxJQUFNQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLENBQVY7QUFBQTtBQUFBO0FBQUEsMlNBQ0c7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBNUI7QUFBQSxDQURILEVBRVI7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQUZRLENBQW5CO01BQU1OLGE7QUFZTixJQUFNTyxrQkFBa0IsR0FBR04seURBQU0sQ0FBQ08sR0FBVjtBQUFBO0FBQUE7QUFBQSw2QkFBeEI7TUFBTUQsa0I7QUFHTixJQUFNRSxhQUFhLEdBQUdSLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0xBS1I7QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQUxRLENBQW5CO01BQU1HLGE7QUFRTixJQUFNQyxTQUFTLEdBQUdULHlEQUFNLENBQUNVLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQ0E7QUFBQSxNQUFHUixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNTLFFBQU4sQ0FBZUMsS0FBOUI7QUFBQSxDQURBLENBQWY7TUFBTUgsUztBQUlOLElBQU1JLFlBQVksR0FBR2IseURBQU0sQ0FBQ1UsRUFBVjtBQUFBO0FBQUE7QUFBQSx5RUFDSDtBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1MsUUFBTixDQUFlRyxNQUE5QjtBQUFBLENBREcsQ0FBbEI7TUFBTUQsWTtBQU9TZixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjFiNWQ3ZDc3OTZiYWY0ODk3MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgSGlnaGxpZ2h0TGluZSB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhvbWVDb250YWluZXI+XHJcbiAgICAgIDxQYWdlVGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgPFBhZ2VUaXRsZT5XZWIgQ29uc3VsdGluZyBpbiBUb3VjaCB3aXRoIFRvbW9ycm93PC9QYWdlVGl0bGU+XHJcblxyXG4gICAgICAgIDxIaWdobGlnaHRMaW5lIC8+XHJcbiAgICAgIDwvUGFnZVRpdGxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgPFBhZ2VTdWJUaXRsZT5cclxuICAgICAgICBXZSBicmluZyBpZGVhcyB0byBsaWZlIGFuZCBjcmVhdGUgcHJvZHVjdHMgdGhhdCBwZW9wbGUgbG92ZS4gPGJyIC8+XHJcbiAgICAgICAgTGV0IHVzIGhlbHAgeW91IG1ha2Ugc29tZXRoaW5nIHJlbWFya2FibGUuXHJcbiAgICAgIDwvUGFnZVN1YlRpdGxlPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XHJcbiAgICAgICAgPENvbnRhY3RCdXR0b24gdHlwZT1cImJ1dHRvblwiPkNvbnRhY3QgVXM8L0NvbnRhY3RCdXR0b24+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvSG9tZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDb250YWN0QnV0dG9uID0gc3R5bGVkLmFgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYnJhbmR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5gO1xyXG5jb25zdCBQYWdlVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2hlcm8tcGF0dGVybi5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTk5cHg7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kIDMuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcGFkZGluZzogMTB2aCAzdnc7XHJcbmA7XHJcbmNvbnN0IFBhZ2VUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubGFyZ2V9O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuYDtcclxuY29uc3QgUGFnZVN1YlRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U2l6ZS5tZWRpdW19O1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBtYXJnaW4tYm90dG9tOiA0dmg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
