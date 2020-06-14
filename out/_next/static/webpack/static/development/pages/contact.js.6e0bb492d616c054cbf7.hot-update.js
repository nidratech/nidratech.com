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
        var formControl = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['css'])([
          'display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem;transition:border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
        ]);
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
          return theme.textSize.mediumLarge;
        });
        _c5 = Title;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'g7i81g-4',
        })(['display:inline-block;']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiTWVzc2FnZUlucHV0Iiwic3R5bGVkIiwidGV4dGFyZWEiLCJmb3JtQ29udHJvbCIsIkVtYWlsSW5wdXQiLCJpbnB1dCIsImNzcyIsIkZvcm1Hcm91cCIsImRpdiIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSIsIlRpdGxlIiwiaDEiLCJ0ZXh0U2l6ZSIsIm1lZGl1bUxhcmdlIiwiVGl0bGVDb250YWluZXIiLCJDb250YWN0Q29udGFpbmVyIiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0UsTUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBS0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFVRTtBQUFNLFVBQU0sRUFBQyw0Q0FBYjtBQUEwRCxVQUFNLEVBQUMsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUUsTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFDLE9BQWpCO0FBQXlCLFFBQUksRUFBQyxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyxZQUFEO0FBQWMsUUFBSSxFQUFDLFNBQW5CO0FBQTZCLFFBQUksRUFBRSxDQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQVdFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLE9BQTFCO0FBQWtDLFNBQUssRUFBQyxrQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBYUUsTUFBQyxpREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQVZGLENBREY7QUE0QkQ7O0tBN0JRQSxPO0FBK0JULElBQU1DLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsUUFBVjtBQUFBO0FBQUE7QUFBQSxhQUNkQyxXQURjLENBQWxCO01BQU1ILFk7QUFHTixJQUFNSSxVQUFVLEdBQUdILHlEQUFNLENBQUNJLEtBQVY7QUFBQTtBQUFBO0FBQUEsYUFDWkYsV0FEWSxDQUFoQjtNQUFNQyxVO0FBR04sSUFBTUQsV0FBVyxHQUFHRyw2REFBSCxnVEFBakI7QUFjQSxJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsNEJBQ0k7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQURKLENBQWY7TUFBTUosUztBQUdOLElBQU1LLEtBQUssR0FBR1gseURBQU0sQ0FBQ1ksRUFBVjtBQUFBO0FBQUE7QUFBQSxpRUFHSTtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0ssUUFBTixDQUFlQyxXQUE5QjtBQUFBLENBSEosQ0FBWDtNQUFNSCxLO0FBS04sSUFBTUksY0FBYyxHQUFHZix5REFBTSxDQUFDTyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZCQUFwQjtNQUFNUSxjO0FBR04sSUFBTUMsZ0JBQWdCLEdBQUdoQixpRUFBTSxDQUFDaUIsb0RBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxRQUF0QjtNQUFNRCxnQjtBQUVTbEIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNvbnRhY3QuanMuNmUwYmI0OTJkNjE2YzA1NGNiZjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcblxuZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFjdENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29udGFjdCBVczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlPldlJmFwb3M7ZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3U8L1RpdGxlPlxuICAgICAgICA8SGlnaGxpZ2h0TGluZSAvPlxuICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cblxuICAgICAgPGZvcm0gYWN0aW9uPVwiaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vY29udGFjdEBuaWRyYXRlY2guY29tXCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPEVtYWlsSW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICA8bGFiZWw+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgPE1lc3NhZ2VJbnB1dCBuYW1lPVwibWVzc2FnZVwiIHJvd3M9ezN9IC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwczovL3d3dy5uaWRyYXRlY2guY29tL3RoYW5rc1wiIC8+XG5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Db250YWN0Q29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBNZXNzYWdlSW5wdXQgPSBzdHlsZWQudGV4dGFyZWFgXG4gICR7Zm9ybUNvbnRyb2x9XG5gO1xuY29uc3QgRW1haWxJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtmb3JtQ29udHJvbH1cbmA7XG5jb25zdCBmb3JtQ29udHJvbCA9IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuYDtcbmNvbnN0IEZvcm1Hcm91cCA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuYDtcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubWVkaXVtTGFyZ2V9O1xuYDtcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcbmNvbnN0IENvbnRhY3RDb250YWluZXIgPSBzdHlsZWQoQ29udGFpbmVyKWBgO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
