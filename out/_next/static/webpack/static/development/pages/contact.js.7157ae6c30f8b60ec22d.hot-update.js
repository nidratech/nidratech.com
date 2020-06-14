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
        })(['display:inline-block;margin:', ' 0;'], function (_ref7) {
          var theme = _ref7.theme;
          return theme.spacing.medium;
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LnRzeCJdLCJuYW1lcyI6WyJDb250YWN0IiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJ0aGVtZSIsImxpZ2h0ZW4iLCJjb2xvcnMiLCJicmFuZCIsIkZvcm1MYWJlbCIsInN0eWxlZCIsImxhYmVsIiwic3BhY2luZyIsIm1lZGl1bSIsInNtYWxsIiwiTWVzc2FnZUlucHV0IiwidGV4dGFyZWEiLCJFbWFpbElucHV0IiwiaW5wdXQiLCJGb3JtR3JvdXAiLCJkaXYiLCJUaXRsZSIsImgxIiwiZm9udFNpemUiLCJtZWRpdW1MYXJnZSIsIlRpdGxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQ2pCLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLEVBS0UsTUFBQyxjQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixFQUVFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsRUFVRTtBQUFNLFVBQU0sRUFBQyw0Q0FBYjtBQUEwRCxVQUFNLEVBQUMsTUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQVcsV0FBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsVUFBRDtBQUFZLE1BQUUsRUFBQyxPQUFmO0FBQXVCLFFBQUksRUFBQyxPQUE1QjtBQUFvQyxRQUFJLEVBQUMsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFXLFdBQU8sRUFBQyxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRSxNQUFDLFlBQUQ7QUFBYyxNQUFFLEVBQUMsU0FBakI7QUFBMkIsUUFBSSxFQUFDLFNBQWhDO0FBQTBDLFFBQUksRUFBRSxDQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQVdFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLE9BQTFCO0FBQWtDLFNBQUssRUFBQyxtQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBYUUsTUFBQyxpREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixDQVZGLENBREY7QUE0QkQ7O0tBN0JRQSxPO0FBK0JULElBQU1DLFdBQVcsR0FBR0MsNkRBQUgsdVlBZ0JHO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUMsd0RBQU8sQ0FBQyxHQUFELEVBQU1ELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFuQixDQUF0QjtBQUFBLENBaEJILEVBa0JjO0FBQUEsTUFBR0gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUMsd0RBQU8sQ0FBQyxHQUFELEVBQU1ELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUFuQixDQUF0QjtBQUFBLENBbEJkLENBQWpCO0FBcUJBLElBQU1DLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsS0FBVjtBQUFBO0FBQUE7QUFBQSwwREFFSTtBQUFBLE1BQUdOLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjQyxNQUE3QjtBQUFBLENBRkosRUFHQztBQUFBLE1BQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ08sT0FBTixDQUFjRSxLQUE3QjtBQUFBLENBSEQsQ0FBZjtNQUFNTCxTO0FBS04sSUFBTU0sWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxRQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUNkYixXQURjLENBQWxCO01BQU1ZLFk7QUFJTixJQUFNRSxVQUFVLEdBQUdQLHlEQUFNLENBQUNRLEtBQVY7QUFBQTtBQUFBO0FBQUEsYUFDWmYsV0FEWSxDQUFoQjtNQUFNYyxVO0FBR04sSUFBTUUsU0FBUyxHQUFHVCx5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLDRCQUNJO0FBQUEsTUFBR2YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTyxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FESixDQUFmO01BQU1NLFM7QUFHTixJQUFNRSxLQUFLLEdBQUdYLHlEQUFNLENBQUNZLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUVBR0k7QUFBQSxNQUFHakIsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDa0IsUUFBTixDQUFlQyxXQUE5QjtBQUFBLENBSEosQ0FBWDtNQUFNSCxLO0FBS04sSUFBTUksY0FBYyxHQUFHZix5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLDRDQUVSO0FBQUEsTUFBR2YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDTyxPQUFOLENBQWNDLE1BQTdCO0FBQUEsQ0FGUSxDQUFwQjtNQUFNWSxjO0FBS1N2QixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy43MTU3YWU2YzMwZjhiNjBlYzIyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgbGlnaHRlbiwgb3BhY2lmeSB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcblxuZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db250YWN0IFVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlQ29udGFpbmVyPlxuICAgICAgICA8VGl0bGU+V2UmYXBvcztkIGxvdmUgdG8gaGVhciBmcm9tIHlvdTwvVGl0bGU+XG4gICAgICAgIDxIaWdobGlnaHRMaW5lIC8+XG4gICAgICA8L1RpdGxlQ29udGFpbmVyPlxuXG4gICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9jb250YWN0QG5pZHJhdGVjaC5jb21cIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgIDxFbWFpbElucHV0IGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgPE1lc3NhZ2VJbnB1dCBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJvd3M9ezN9IC8+XG4gICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwczovL3d3dy5uaWRyYXRlY2guY29tL3N1Y2Nlc3NcIiAvPlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBmb3JtQ29udHJvbCA9IGNzc2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjc1cmVtICsgMnB4KTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcblxuICA6Zm9jdXMge1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IGxpZ2h0ZW4oMC4zLCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSAkeyh7IHRoZW1lIH0pID0+IGxpZ2h0ZW4oMC4zLCB0aGVtZS5jb2xvcnMuYnJhbmQpfTtcbiAgfVxuYDtcbmNvbnN0IEZvcm1MYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBtYXJnaW4tdG9wOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcuc21hbGx9O1xuYDtcbmNvbnN0IE1lc3NhZ2VJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcbiAgJHtmb3JtQ29udHJvbH1cbiAgaGVpZ2h0OiBhdXRvO1xuYDtcbmNvbnN0IEVtYWlsSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gICR7Zm9ybUNvbnRyb2x9XG5gO1xuY29uc3QgRm9ybUdyb3VwID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG5gO1xuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5tZWRpdW1MYXJnZX07XG5gO1xuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX0gMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9
