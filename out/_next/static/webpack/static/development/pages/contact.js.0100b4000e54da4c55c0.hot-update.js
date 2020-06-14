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
                  'label',
                  {
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
                  'label',
                  {
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
          'display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
        ]);
        var MessageInput = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].textarea.withConfig({
          displayName: 'MessageInput',
          componentId: 'g7i81g-0',
        })(['', ''], formControl);
        _c2 = MessageInput;
        var EmailInput = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].input.withConfig(
          {
            displayName: 'EmailInput',
            componentId: 'g7i81g-1',
          }
        )(['', ''], formControl);
        _c3 = EmailInput;
        var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].div.withConfig({
          displayName: 'FormGroup',
          componentId: 'g7i81g-2',
        })(['margin-bottom:', ';'], function (_ref) {
          var theme = _ref.theme;
          return theme.spacing.medium;
        });
        _c4 = FormGroup;
        var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].h1.withConfig({
          displayName: 'Title',
          componentId: 'g7i81g-3',
        })(['text-transform:uppercase;font-weight:700;font-size:', ';'], function (_ref2) {
          var theme = _ref2.theme;
          return theme.fontSize.mediumLarge;
        });
        _c5 = Title;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'g7i81g-4',
        })(['display:inline-block;margin-bottom:', ';'], function (_ref3) {
          var theme = _ref3.theme;
          return theme.spacing.large;
        });
        _c6 = TitleContainer;
        var ContactContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components__WEBPACK_IMPORTED_MODULE_3__['Container']
        ).withConfig({
          displayName: 'ContactContainer',
          componentId: 'g7i81g-5',
        })(['']);
        _c7 = ContactContainer;
        /* harmony default export */ __webpack_exports__['default'] = Contact;

        var _c, _c2, _c3, _c4, _c5, _c6, _c7;

        $RefreshReg$(_c, 'Contact');
        $RefreshReg$(_c2, 'MessageInput');
        $RefreshReg$(_c3, 'EmailInput');
        $RefreshReg$(_c4, 'FormGroup');
        $RefreshReg$(_c5, 'Title');
        $RefreshReg$(_c6, 'TitleContainer');
        $RefreshReg$(_c7, 'ContactContainer');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJNZXNzYWdlSW5wdXQiLCJzdHlsZWQiLCJ0ZXh0YXJlYSIsIkVtYWlsSW5wdXQiLCJpbnB1dCIsIkZvcm1Hcm91cCIsImRpdiIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsIlRpdGxlIiwiaDEiLCJmb250U2l6ZSIsIm1lZGl1bUxhcmdlIiwiVGl0bGVDb250YWluZXIiLCJsYXJnZSIsIkNvbnRhY3RDb250YWluZXIiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsU0FDRSxNQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsRUFLRSxNQUFDLGNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FMRixFQVVFO0FBQU0sVUFBTSxFQUFDLDRDQUFiO0FBQTBELFVBQU0sRUFBQyxNQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUMsT0FBakI7QUFBeUIsUUFBSSxFQUFDLE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLFlBQUQ7QUFBYyxRQUFJLEVBQUMsU0FBbkI7QUFBNkIsUUFBSSxFQUFFLENBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQU5GLEVBV0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsT0FBMUI7QUFBa0MsU0FBSyxFQUFDLGtDQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFhRSxNQUFDLGlEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGLENBVkYsQ0FERjtBQTRCRDs7S0E3QlFBLE87QUErQlQsSUFBTUMsV0FBVyxHQUFHQyw2REFBSCxnVEFBakI7QUFjQSxJQUFNQyxZQUFZLEdBQUdDLHlEQUFNLENBQUNDLFFBQVY7QUFBQTtBQUFBO0FBQUEsYUFDZEosV0FEYyxDQUFsQjtNQUFNRSxZO0FBR04sSUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxLQUFWO0FBQUE7QUFBQTtBQUFBLGFBQ1pOLFdBRFksQ0FBaEI7TUFBTUssVTtBQUdOLElBQU1FLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0ssR0FBVjtBQUFBO0FBQUE7QUFBQSw0QkFDSTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsT0FBTixDQUFjQyxNQUE3QjtBQUFBLENBREosQ0FBZjtNQUFNSixTO0FBR04sSUFBTUssS0FBSyxHQUFHVCx5REFBTSxDQUFDVSxFQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUdJO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxRQUFOLENBQWVDLFdBQTlCO0FBQUEsQ0FISixDQUFYO01BQU1ILEs7QUFLTixJQUFNSSxjQUFjLEdBQUdiLHlEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBRUQ7QUFBQSxNQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY08sS0FBN0I7QUFBQSxDQUZDLENBQXBCO01BQU1ELGM7QUFJTixJQUFNRSxnQkFBZ0IsR0FBR2YsaUVBQU0sQ0FBQ2dCLG9EQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsUUFBdEI7TUFBTUQsZ0I7QUFFU25CLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjb250YWN0LmpzLjAxMDBiNDAwMGU1NGRhNGM1NWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBIaWdobGlnaHRMaW5lIH0gZnJvbSAnY29tcG9uZW50cyc7XG5cbmZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gIHJldHVybiAoXG4gICAgPENvbnRhY3RDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbnRhY3QgVXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVDb250YWluZXI+XG4gICAgICAgIDxUaXRsZT5XZSZhcG9zO2QgbG92ZSB0byBoZWFyIGZyb20geW91PC9UaXRsZT5cbiAgICAgICAgPEhpZ2hsaWdodExpbmUgLz5cbiAgICAgIDwvVGl0bGVDb250YWluZXI+XG5cbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2NvbnRhY3RAbmlkcmF0ZWNoLmNvbVwiIG1ldGhvZD1cIlBPU1RcIj5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxFbWFpbElucHV0IG5hbWU9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPGxhYmVsPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgIDxNZXNzYWdlSW5wdXQgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPXszfSAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbmV4dFwiIHZhbHVlPVwiaHR0cHM6Ly93d3cubmlkcmF0ZWNoLmNvbS90aGFua3NcIiAvPlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFjdENvbnRhaW5lcj5cbiAgKTtcbn1cblxuY29uc3QgZm9ybUNvbnRyb2wgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC43NXJlbSArIDJweCk7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbmA7XG5jb25zdCBNZXNzYWdlSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXG4gICR7Zm9ybUNvbnRyb2x9XG5gO1xuY29uc3QgRW1haWxJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtmb3JtQ29udHJvbH1cbmA7XG5jb25zdCBGb3JtR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbmA7XG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm1lZGl1bUxhcmdlfTtcbmA7XG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcbmA7XG5jb25zdCBDb250YWN0Q29udGFpbmVyID0gc3R5bGVkKENvbnRhaW5lcilgYDtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=
