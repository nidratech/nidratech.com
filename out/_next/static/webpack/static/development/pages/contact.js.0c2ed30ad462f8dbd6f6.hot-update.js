webpackHotUpdate('static\\development\\pages\\contact.js', {
  /***/ './pages/contact.tsx':
    /*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
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
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\pages\\contact.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Contact() {
          return __jsx(
            ContactContainer,
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
                'Contact Us'
              )
            ),
            __jsx(
              TitleContainer,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14,
                  columnNumber: 7,
                },
              },
              __jsx(
                Title,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 9,
                  },
                },
                "We'd love to hear from you"
              ),
              __jsx(components__WEBPACK_IMPORTED_MODULE_4__['HighlightLine'], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 9,
                },
              })
            ),
            __jsx(
              'form',
              {
                action: 'https://formspree.io/contact@nidratech.com',
                method: 'POST',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 7,
                },
              },
              __jsx(
                FormGroup,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  FormLabel,
                  {
                    htmlFor: 'email',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21,
                      columnNumber: 11,
                    },
                  },
                  'Email'
                ),
                __jsx(EmailInput, {
                  id: 'email',
                  name: 'email',
                  type: 'email',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 11,
                  },
                })
              ),
              __jsx(
                FormGroup,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  FormLabel,
                  {
                    htmlFor: 'message',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26,
                      columnNumber: 11,
                    },
                  },
                  'Message'
                ),
                __jsx(MessageInput, {
                  id: 'message',
                  name: 'message',
                  rows: 3,
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 11,
                  },
                })
              ),
              __jsx('input', {
                type: 'hidden',
                name: '_next',
                value: 'https://www.nidratech.com/thanks',
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 9,
                },
              }),
              __jsx(
                components__WEBPACK_IMPORTED_MODULE_4__['Button'],
                {
                  type: 'submit',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                },
                'Submit'
              )
            )
          );
        }

        _c = Contact;
        var formControl = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['css'])(
          [
            'display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus{color:#495057;background-color:#fff;border-color:',
            ';outline:0;box-shadow:0 0 0 0.2rem ',
            ';}',
          ],
          function (_ref) {
            var theme = _ref.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['lighten'])(
              0.3,
              theme.colors.brand
            );
          },
          function (_ref2) {
            var theme = _ref2.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['opacify'])(
              0.1,
              theme.colors.brand
            );
          }
        );
        var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].label.withConfig({
          displayName: 'FormLabel',
          componentId: 'g7i81g-0',
        })(
          ['display:block;margin-bottom:', ';margin-top:', ';'],
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.spacing.medium;
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.spacing.small;
          }
        );
        _c2 = FormLabel;
        var MessageInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].textarea.withConfig({
          displayName: 'MessageInput',
          componentId: 'g7i81g-1',
        })(['', ''], formControl);
        _c3 = MessageInput;
        var EmailInput = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].input.withConfig(
          {
            displayName: 'EmailInput',
            componentId: 'g7i81g-2',
          }
        )(['', ''], formControl);
        _c4 = EmailInput;
        var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].div.withConfig({
          displayName: 'FormGroup',
          componentId: 'g7i81g-3',
        })(['margin-bottom:', ';'], function (_ref5) {
          var theme = _ref5.theme;
          return theme.spacing.medium;
        });
        _c5 = FormGroup;
        var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h1.withConfig({
          displayName: 'Title',
          componentId: 'g7i81g-4',
        })(['text-transform:uppercase;font-weight:700;font-size:', ';'], function (_ref6) {
          var theme = _ref6.theme;
          return theme.fontSize.mediumLarge;
        });
        _c6 = Title;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'g7i81g-5',
        })(['display:inline-block;margin-bottom:', ';'], function (_ref7) {
          var theme = _ref7.theme;
          return theme.spacing.large;
        });
        _c7 = TitleContainer;
        var ContactContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components__WEBPACK_IMPORTED_MODULE_4__['Container']
        ).withConfig({
          displayName: 'ContactContainer',
          componentId: 'g7i81g-6',
        })(['']);
        _c8 = ContactContainer;
        /* harmony default export */ __webpack_exports__['default'] = Contact;

        var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

        $RefreshReg$(_c, 'Contact');
        $RefreshReg$(_c2, 'FormLabel');
        $RefreshReg$(_c3, 'MessageInput');
        $RefreshReg$(_c4, 'EmailInput');
        $RefreshReg$(_c5, 'FormGroup');
        $RefreshReg$(_c6, 'Title');
        $RefreshReg$(_c7, 'TitleContainer');
        $RefreshReg$(_c8, 'ContactContainer');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJ0aGVtZSIsImxpZ2h0ZW4iLCJjb2xvcnMiLCJicmFuZCIsIm9wYWNpZnkiLCJGb3JtTGFiZWwiLCJzdHlsZWQiLCJsYWJlbCIsInNwYWNpbmciLCJtZWRpdW0iLCJzbWFsbCIsIk1lc3NhZ2VJbnB1dCIsInRleHRhcmVhIiwiRW1haWxJbnB1dCIsImlucHV0IiwiRm9ybUdyb3VwIiwiZGl2IiwiVGl0bGUiLCJoMSIsImZvbnRTaXplIiwibWVkaXVtTGFyZ2UiLCJUaXRsZUNvbnRhaW5lciIsImxhcmdlIiwiQ29udGFjdENvbnRhaW5lciIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixTQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQUtFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLEVBVUU7QUFBTSxVQUFNLEVBQUMsNENBQWI7QUFBMEQsVUFBTSxFQUFDLE1BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1B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Q0FBVDtBQUFBO0FBQUE7QUFBQSxRQUF0QjtNQUFNRCxnQjtBQUVTMUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbnRhY3QuanMuMGMyZWQzMGFkNDYyZjhkYmQ2ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGxpZ2h0ZW4sIG9wYWNpZnkgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBIaWdobGlnaHRMaW5lIH0gZnJvbSAnY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhY3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbnRhY3QgVXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgIDxUaXRsZT5XZSZhcG9zO2QgbG92ZSB0byBoZWFyIGZyb20geW91PC9UaXRsZT5cbiAgICAgICAgPEhpZ2hsaWdodExpbmUgLz5cbiAgICAgIDwvVGl0bGVDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2NvbnRhY3RAbmlkcmF0ZWNoLmNvbVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgPEVtYWlsSW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L0Zvcm1MYWJlbD5cbiAgICAgICAgICA8TWVzc2FnZUlucHV0IGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz17M30gLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHBzOi8vd3d3Lm5pZHJhdGVjaC5jb20vdGhhbmtzXCIgLz5cblxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0NvbnRhY3RDb250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IGZvcm1Db250cm9sID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gIDpmb2N1cyB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gbGlnaHRlbigwLjMsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtICR7KHsgdGhlbWUgfSkgPT4gb3BhY2lmeSgwLjEsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xuICB9XG5gO1xuY29uc3QgRm9ybUxhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5zbWFsbH07XG5gO1xuY29uc3QgTWVzc2FnZUlucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxuICAke2Zvcm1Db250cm9sfVxuYDtcbmNvbnN0IEVtYWlsSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICR7Zm9ybUNvbnRyb2x9XG5gO1xuY29uc3QgRm9ybUdyb3VwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5tZWRpdW1MYXJnZX07XG5gO1xuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5sYXJnZX07XG5gO1xuY29uc3QgQ29udGFjdENvbnRhaW5lciA9IHN0eWxlZChDb250YWluZXIpYGA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9
