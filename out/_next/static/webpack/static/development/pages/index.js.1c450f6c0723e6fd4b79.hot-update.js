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
              'div',
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
              'div',
              {
                id: 'contact-container',
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
        var HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'HomeContainer',
          componentId: 'sc-1xh3p16-0',
        })(
          [
            'background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:background 3.5s linear infinite;color:',
            ';margin-bottom:0;border-radius:0;padding:3vw;min-height:60vh;',
          ],
          function (_ref) {
            var theme = _ref.theme;
            return theme.colors.white;
          }
        );
        _c2 = HomeContainer;
        var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageTitle',
          componentId: 'sc-1xh3p16-1',
        })(['font-size:', ';margin-top:2vh;'], function (_ref2) {
          var theme = _ref2.theme;
          return theme.textSize.large;
        });
        _c3 = PageTitle;
        var PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageSubTitle',
          componentId: 'sc-1xh3p16-2',
        })(['font-size:', ';margin-top:5vh;margin-bottom:4vh;'], function (_ref3) {
          var theme = _ref3.theme;
          return theme.textSize.merdium;
        });
        _c4 = PageSubTitle;
        /* harmony default export */ __webpack_exports__['default'] = Home;

        var _c, _c2, _c3, _c4;

        $RefreshReg$(_c, 'Home');
        $RefreshReg$(_c2, 'HomeContainer');
        $RefreshReg$(_c3, 'PageTitle');
        $RefreshReg$(_c4, 'PageSubTitle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsIkhvbWVDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsIndoaXRlIiwiUGFnZVRpdGxlIiwiaDEiLCJ0ZXh0U2l6ZSIsImxhcmdlIiwiUGFnZVN1YlRpdGxlIiwibWVyZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsRUFHRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBT0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBQytEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEL0QsK0NBUEYsRUFZRTtBQUFLLE1BQUUsRUFBQyxtQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxRQUFSO0FBQWlCLGFBQVMsRUFBQyxpQkFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBWkYsQ0FERjtBQXNCRDs7S0F2QlFBLEk7QUF5QlQsSUFBTUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZOQUtSO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FMUSxDQUFuQjtNQUFNTCxhO0FBV04sSUFBTU0sU0FBUyxHQUFHTCx5REFBTSxDQUFDTSxFQUFWO0FBQUE7QUFBQTtBQUFBLHVDQUNBO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxRQUFOLENBQWVDLEtBQTlCO0FBQUEsQ0FEQSxDQUFmO01BQU1ILFM7QUFJTixJQUFNSSxZQUFZLEdBQUdULHlEQUFNLENBQUNNLEVBQVY7QUFBQTtBQUFBO0FBQUEseURBQ0g7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLFFBQU4sQ0FBZUcsT0FBOUI7QUFBQSxDQURHLENBQWxCO01BQU1ELFk7QUFNU1gsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFjNDUwZjZjMDcyM2U2ZmQ0Yjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxQYWdlVGl0bGU+V2ViIENvbnN1bHRpbmcgaW4gVG91Y2ggd2l0aCBUb21vcnJvdzwvUGFnZVRpdGxlPlxyXG5cclxuICAgICAgICA8SGlnaGxpZ2h0TGluZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxQYWdlU3ViVGl0bGU+XHJcbiAgICAgICAgV2UgYnJpbmcgaWRlYXMgdG8gbGlmZSBhbmQgY3JlYXRlIHByb2R1Y3RzIHRoYXQgcGVvcGxlIGxvdmUuIDxiciAvPlxyXG4gICAgICAgIExldCB1cyBoZWxwIHlvdSBtYWtlIHNvbWV0aGluZyByZW1hcmthYmxlLlxyXG4gICAgICA8L1BhZ2VTdWJUaXRsZT5cclxuXHJcbiAgICAgIDxkaXYgaWQ9XCJjb250YWN0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgPGEgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvSG9tZUNvbnRhaW5lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaGVyby1wYXR0ZXJuLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxOTlweDtcclxuICBhbmltYXRpb246IGJhY2tncm91bmQgMy41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcGFkZGluZzogM3Z3O1xyXG4gIG1pbi1oZWlnaHQ6IDYwdmg7XHJcbmA7XHJcbmNvbnN0IFBhZ2VUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubGFyZ2V9O1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuYDtcclxuY29uc3QgUGFnZVN1YlRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS50ZXh0U2l6ZS5tZXJkaXVtfTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
