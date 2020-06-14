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
                value: 'https://www.nidratech.com/success',
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
            ';outline:0;box-shadow:0 0 0 0.1rem ',
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
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['lighten'])(
              0.3,
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
        })(['', ' height:auto;'], formControl);
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
        })(
          ['display:inline-block;margin:', ' 0 ', ' 0;'],
          function (_ref7) {
            var theme = _ref7.theme;
            return theme.spacing.small;
          },
          function (_ref8) {
            var theme = _ref8.theme;
            return theme.spacing.medium;
          }
        );
        _c7 = TitleContainer;
        /* harmony default export */ __webpack_exports__['default'] = Contact;

        var _c, _c2, _c3, _c4, _c5, _c6, _c7;

        $RefreshReg$(_c, 'Contact');
        $RefreshReg$(_c2, 'FormLabel');
        $RefreshReg$(_c3, 'MessageInput');
        $RefreshReg$(_c4, 'EmailInput');
        $RefreshReg$(_c5, 'FormGroup');
        $RefreshReg$(_c6, 'Title');
        $RefreshReg$(_c7, 'TitleContainer');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJ0aGVtZSIsImxpZ2h0ZW4iLCJjb2xvcnMiLCJicmFuZCIsIkZvcm1MYWJlbCIsInN0eWxlZCIsImxhYmVsIiwic3BhY2luZyIsIm1lZGl1bSIsInNtYWxsIiwiTWVzc2FnZUlucHV0IiwidGV4dGFyZWEiLCJFbWFpbElucHV0IiwiaW5wdXQiLCJGb3JtR3JvdXAiLCJkaXYiLCJUaXRsZSIsImgxIiwiZm9udFNpemUiLCJtZWRpdW1MYXJnZSIsIlRpdGxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBS0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFVRTtBQUFNLFVBQU0sRUFBQyw0Q0FBYjtBQUEwRCxVQUFNLEVBQUMsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQVcsV0FBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7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IiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb250YWN0LmpzLjYzZDkzMjNlMjAxYmY2YzgwOTdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsaWdodGVuLCBvcGFjaWZ5IH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgSGlnaGxpZ2h0TGluZSB9IGZyb20gJ2NvbXBvbmVudHMnO1xuXG5mdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbnRhY3QgVXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgIDxUaXRsZT5XZSZhcG9zO2QgbG92ZSB0byBoZWFyIGZyb20geW91PC9UaXRsZT5cbiAgICAgICAgPEhpZ2hsaWdodExpbmUgLz5cbiAgICAgIDwvVGl0bGVDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2NvbnRhY3RAbmlkcmF0ZWNoLmNvbVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgPEVtYWlsSW5wdXQgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L0Zvcm1MYWJlbD5cbiAgICAgICAgICA8TWVzc2FnZUlucHV0IGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz17M30gLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHBzOi8vd3d3Lm5pZHJhdGVjaC5jb20vc3VjY2Vzc1wiIC8+XG5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IGZvcm1Db250cm9sID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuXG4gIDpmb2N1cyB7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gbGlnaHRlbigwLjMsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICR7KHsgdGhlbWUgfSkgPT4gbGlnaHRlbigwLjMsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xuICB9XG5gO1xuY29uc3QgRm9ybUxhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5zbWFsbH07XG5gO1xuY29uc3QgTWVzc2FnZUlucHV0ID0gc3R5bGVkLnRleHRhcmVhYFxuICAke2Zvcm1Db250cm9sfVxuICBoZWlnaHQ6IGF1dG87XG5gO1xuY29uc3QgRW1haWxJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtmb3JtQ29udHJvbH1cbmA7XG5jb25zdCBGb3JtR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm1lZGl1bUxhcmdlfTtcbmA7XG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcuc21hbGx9IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX0gMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9
