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
              ContactContainer,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  href: '/contact',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  'a',
                  {
                    type: 'button',
                    className: 'btn btn-primary',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 11,
                    },
                  },
                  'Contact Us'
                )
              )
            )
          );
        }

        _c = Home;
        var ContactContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'ContactContainer',
          componentId: 'sc-1xh3p16-0',
        })(
          ['background-color:', ';color:', ';'],
          function (_ref) {
            var theme = _ref.theme;
            return theme.colors.brand;
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.colors.white;
          }
        );
        _c2 = ContactContainer;
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
            ';padding:3vw;',
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
        $RefreshReg$(_c2, 'ContactContainer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIkNvbnRhY3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwid2hpdGUiLCJQYWdlVGl0bGVDb250YWluZXIiLCJIb21lQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiaDEiLCJ0ZXh0U2l6ZSIsImxhcmdlIiwiUGFnZVN1YlRpdGxlIiwibWVkaXVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQ2QsU0FDRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBR0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU9FLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQUMrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRC9ELCtDQVBGLEVBWUUsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxRQUFSO0FBQWlCLGFBQVMsRUFBQyxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBWkYsQ0FERjtBQXNCRDs7S0F2QlFBLEk7QUF5QlQsSUFBTUMsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMENBQ0E7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBNUI7QUFBQSxDQURBLEVBRVg7QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUUsS0FBNUI7QUFBQSxDQUZXLENBQXRCO01BQU1OLGdCO0FBS04sSUFBTU8sa0JBQWtCLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkJBQXhCO01BQU1LLGtCO0FBR04sSUFBTUMsYUFBYSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZLQUtSO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQTVCO0FBQUEsQ0FMUSxDQUFuQjtNQUFNRSxhO0FBUU4sSUFBTUMsU0FBUyxHQUFHUix5REFBTSxDQUFDUyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVDQUNBO0FBQUEsTUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDUSxRQUFOLENBQWVDLEtBQTlCO0FBQUEsQ0FEQSxDQUFmO01BQU1ILFM7QUFJTixJQUFNSSxZQUFZLEdBQUdaLHlEQUFNLENBQUNTLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBQ0g7QUFBQSxNQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNRLFFBQU4sQ0FBZUcsTUFBOUI7QUFBQSxDQURHLENBQWxCO01BQU1ELFk7QUFPU2QsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjM5ZDQyZWZhOWJhYjUxOWNjZGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lQ29udGFpbmVyPlxyXG4gICAgICA8UGFnZVRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQYWdlVGl0bGU+V2ViIENvbnN1bHRpbmcgaW4gVG91Y2ggd2l0aCBUb21vcnJvdzwvUGFnZVRpdGxlPlxyXG5cclxuICAgICAgICA8SGlnaGxpZ2h0TGluZSAvPlxyXG4gICAgICA8L1BhZ2VUaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxQYWdlU3ViVGl0bGU+XHJcbiAgICAgICAgV2UgYnJpbmcgaWRlYXMgdG8gbGlmZSBhbmQgY3JlYXRlIHByb2R1Y3RzIHRoYXQgcGVvcGxlIGxvdmUuIDxiciAvPlxyXG4gICAgICAgIExldCB1cyBoZWxwIHlvdSBtYWtlIHNvbWV0aGluZyByZW1hcmthYmxlLlxyXG4gICAgICA8L1BhZ2VTdWJUaXRsZT5cclxuXHJcbiAgICAgIDxDb250YWN0Q29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhY3RDb250YWluZXI+XHJcbiAgICA8L0hvbWVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ29udGFjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYnJhbmR9O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbmA7XHJcblxyXG5jb25zdCBQYWdlVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2hlcm8tcGF0dGVybi5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTk5cHg7XHJcbiAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kIDMuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcGFkZGluZzogM3Z3O1xyXG5gO1xyXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRTaXplLmxhcmdlfTtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbmA7XHJcbmNvbnN0IFBhZ2VTdWJUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubWVkaXVtfTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
