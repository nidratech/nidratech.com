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
        /* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
                lineNumber: 8,
                columnNumber: 5,
              },
            },
            __jsx(
              next_head__WEBPACK_IMPORTED_MODULE_1___default.a,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 9,
                  columnNumber: 7,
                },
              },
              __jsx(
                'title',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10,
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
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              __jsx(
                Title,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
                "We'd love to hear from you"
              ),
              __jsx(components__WEBPACK_IMPORTED_MODULE_3__['HighlightLine'], {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15,
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
                  lineNumber: 18,
                  columnNumber: 7,
                },
              },
              __jsx(
                FormGroup,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  FormLabel,
                  {
                    for: 'email',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20,
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
                    lineNumber: 21,
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
                    lineNumber: 24,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  FormLabel,
                  {
                    for: 'message',
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25,
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
                    lineNumber: 26,
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
                  lineNumber: 29,
                  columnNumber: 9,
                },
              }),
              __jsx(
                components__WEBPACK_IMPORTED_MODULE_3__['Button'],
                {
                  type: 'submit',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                },
                'Submit'
              )
            )
          );
        }

        _c = Contact;
        var formControl = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['css'])([
          'display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
        ]);
        var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].label.withConfig({
          displayName: 'FormLabel',
          componentId: 'g7i81g-0',
        })(['margin-bottom:0.5rem;']);
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
        })(['margin-bottom:', ';'], function (_ref) {
          var theme = _ref.theme;
          return theme.spacing.medium;
        });
        _c5 = FormGroup;
        var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h1.withConfig({
          displayName: 'Title',
          componentId: 'g7i81g-4',
        })(['text-transform:uppercase;font-weight:700;font-size:', ';'], function (_ref2) {
          var theme = _ref2.theme;
          return theme.fontSize.mediumLarge;
        });
        _c6 = Title;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'g7i81g-5',
        })(['display:inline-block;margin-bottom:', ';'], function (_ref3) {
          var theme = _ref3.theme;
          return theme.spacing.large;
        });
        _c7 = TitleContainer;
        var ContactContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components__WEBPACK_IMPORTED_MODULE_3__['Container']
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJGb3JtTGFiZWwiLCJzdHlsZWQiLCJsYWJlbCIsIk1lc3NhZ2VJbnB1dCIsInRleHRhcmVhIiwiRW1haWxJbnB1dCIsImlucHV0IiwiRm9ybUdyb3VwIiwiZGl2IiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiVGl0bGUiLCJoMSIsImZvbnRTaXplIiwibWVkaXVtTGFyZ2UiLCJUaXRsZUNvbnRhaW5lciIsImxhcmdlIiwiQ29udGFjdENvbnRhaW5lciIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNqQixTQUNFLE1BQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixFQUtFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxGLEVBVUU7QUFBTSxVQUFNLEVBQUMsNENBQWI7QUFBMEQsVUFBTSxFQUFDLE1BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFXLFdBQUksT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLFVBQUQ7QUFBWSxNQUFFLEVBQUMsT0FBZjtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBb0MsUUFBSSxFQUFDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBVyxXQUFJLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyxZQUFEO0FBQWMsTUFBRSxFQUFDLFNBQWpCO0FBQTJCLFFBQUksRUFBQyxTQUFoQztBQUEwQyxRQUFJLEVBQUUsQ0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTkYsRUFXRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxPQUExQjtBQUFrQyxTQUFLLEVBQUMsa0NBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWFFLE1BQUMsaURBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsQ0FWRixDQURGO0FBNEJEOztLQTdCUUEsTztBQStCVCxJQUFNQyxXQUFXLEdBQUdDLDZEQUFILGlTQUFqQjtBQWFBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSw2QkFBZjtNQUFNRixTO0FBR04sSUFBTUcsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxRQUFWO0FBQUE7QUFBQTtBQUFBLGFBQ2ROLFdBRGMsQ0FBbEI7TUFBTUssWTtBQUdOLElBQU1FLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0ssS0FBVjtBQUFBO0FBQUE7QUFBQSxhQUNaUixXQURZLENBQWhCO01BQU1PLFU7QUFHTixJQUFNRSxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEJBQ0k7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQURKLENBQWY7TUFBTUosUztBQUdOLElBQU1LLEtBQUssR0FBR1gseURBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSxpRUFHSTtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxXQUE5QjtBQUFBLENBSEosQ0FBWDtNQUFNSCxLO0FBS04sSUFBTUksY0FBYyxHQUFHZix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlEQUVEO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxPQUFOLENBQWNPLEtBQTdCO0FBQUEsQ0FGQyxDQUFwQjtNQUFNRCxjO0FBSU4sSUFBTUUsZ0JBQWdCLEdBQUdqQixpRUFBTSxDQUFDa0Isb0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUF0QjtNQUFNRCxnQjtBQUVTckIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbnRhY3QuanMuNGRkZTM5NmFkMDU1ZTUzNWU4ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcblxuZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFjdENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29udGFjdCBVczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlPldlJmFwb3M7ZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3U8L1RpdGxlPlxuICAgICAgICA8SGlnaGxpZ2h0TGluZSAvPlxuICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cblxuICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vY29udGFjdEBuaWRyYXRlY2guY29tXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtTGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxFbWFpbElucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtTGFiZWwgZm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L0Zvcm1MYWJlbD5cbiAgICAgICAgICA8TWVzc2FnZUlucHV0IGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz17M30gLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX25leHRcIiB2YWx1ZT1cImh0dHBzOi8vd3d3Lm5pZHJhdGVjaC5jb20vdGhhbmtzXCIgLz5cblxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0NvbnRhY3RDb250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IGZvcm1Db250cm9sID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuYDtcbmNvbnN0IEZvcm1MYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuYDtcbmNvbnN0IE1lc3NhZ2VJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgJHtmb3JtQ29udHJvbH1cbmA7XG5jb25zdCBFbWFpbElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke2Zvcm1Db250cm9sfVxuYDtcbmNvbnN0IEZvcm1Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuYDtcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubWVkaXVtTGFyZ2V9O1xuYDtcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubGFyZ2V9O1xuYDtcbmNvbnN0IENvbnRhY3RDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBgO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
