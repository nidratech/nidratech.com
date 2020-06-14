webpackHotUpdate('static\\development\\pages\\_app.js', {
  /***/ './components/Button.tsx':
    /*!*******************************!*\
  !*** ./components/Button.tsx ***!
  \*******************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
        );
        /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ './node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );

        var _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\Button.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

        function Button(_ref, ref) {
          var children = _ref.children,
            onClick = _ref.onClick,
            props = Object(
              _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )(_ref, ['children', 'onClick']);

          return (
            // @ts-ignore
            __jsx(
              StyledButton,
              Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
                {
                  ref: ref,
                  onClick: onClick,
                },
                props,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 5,
                  },
                }
              ),
              children
            )
          );
        }

        _c = Button;
        var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[
          'default'
        ].button.withConfig({
          displayName: 'StyledButton',
          componentId: 'ajxmy-0',
        })(
          [
            'background-color:',
            ';font-size:',
            ';color:',
            ';text-align:center;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
          ],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.colors.brand;
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.fontSize.medium;
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.colors.white;
          }
        );
        _c2 = StyledButton;
        /* harmony default export */ __webpack_exports__['default'] = _c3 = Object(
          react__WEBPACK_IMPORTED_MODULE_2__['forwardRef']
        )(Button);

        var _c, _c2, _c3;

        $RefreshReg$(_c, 'Button');
        $RefreshReg$(_c2, 'StyledButton');
        $RefreshReg$(_c3, '%default%');

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

  /***/ './styles/theme.ts':
    /*!*************************!*\
  !*** ./styles/theme.ts ***!
  \*************************/
    /*! exports provided: COLOR_BRAND, COLOR_WHITE, COLOR_GREY_LIGHT, COLOR_GREY, default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_BRAND',
          function () {
            return COLOR_BRAND;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_WHITE',
          function () {
            return COLOR_WHITE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GREY_LIGHT',
          function () {
            return COLOR_GREY_LIGHT;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'COLOR_GREY',
          function () {
            return COLOR_GREY;
          }
        );
        var COLOR_BRAND = '#d5851d';
        var COLOR_WHITE = '#ffffff';
        var COLOR_GREY_LIGHT = '#CFD2D3';
        var COLOR_GREY = '#6c757d';
        var theme = {
          colors: {
            brand: COLOR_BRAND,
            white: COLOR_WHITE,
            greyLight: COLOR_GREY_LIGHT,
            grey: COLOR_GREY,
          },
          fontSize: {
            small: '0.6125em',
            medium: '1.25em',
            mediumLarge: '1.5em',
            large: '2.5em',
          },
          spacing: {
            navBarHeight: '5rem',
            small: '0.5rem',
            medium: '1rem',
            large: '2rem',
          },
        };
        /* harmony default export */ __webpack_exports__['default'] = theme;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL3RoZW1lLnRzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInJlZiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsImZvbnRTaXplIiwibWVkaXVtIiwid2hpdGUiLCJmb3J3YXJkUmVmIiwiQ09MT1JfQlJBTkQiLCJDT0xPUl9XSElURSIsIkNPTE9SX0dSRVlfTElHSFQiLCJDT0xPUl9HUkVZIiwiZ3JleUxpZ2h0IiwiZ3JleSIsInNtYWxsIiwibWVkaXVtTGFyZ2UiLCJsYXJnZSIsInNwYWNpbmciLCJuYXZCYXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBU0EsU0FBU0EsTUFBVCxPQUF3REMsR0FBeEQsRUFBNkQ7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXJCQyxLQUFxQjs7QUFDM0QsU0FDRTtBQUNBLFVBQUMsWUFBRDtBQUFjLFNBQUcsRUFBRUgsR0FBbkI7QUFBd0IsYUFBTyxFQUFFRTtBQUFqQyxPQUE4Q0MsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHRixRQURIO0FBRkY7QUFNRDs7S0FQUUYsTTtBQVNULElBQU1LLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSwwVEFDSTtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUE1QjtBQUFBLENBREosRUFFSDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxNQUE5QjtBQUFBLENBRkcsRUFHUDtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSSxLQUE1QjtBQUFBLENBSE8sQ0FBbEI7TUFBTVIsWTtBQWNTLHFFQUFBUyx3REFBVSxDQUFDZCxNQUFELENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLElBQU1lLFdBQVcsR0FBRyxTQUFwQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxTQUFwQjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLFNBQXpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBRVAsSUFBTVYsS0FBbUIsR0FBRztBQUMxQkMsUUFBTSxFQUFFO0FBQ05DLFNBQUssRUFBRUssV0FERDtBQUVORixTQUFLLEVBQUVHLFdBRkQ7QUFHTkcsYUFBUyxFQUFFRixnQkFITDtBQUlORyxRQUFJLEVBQUVGO0FBSkEsR0FEa0I7QUFPMUJQLFVBQVEsRUFBRTtBQUNSVSxTQUFLLEVBQUUsVUFEQztBQUVSVCxVQUFNLEVBQUUsUUFGQTtBQUdSVSxlQUFXLEVBQUUsT0FITDtBQUlSQyxTQUFLLEVBQUU7QUFKQyxHQVBnQjtBQWExQkMsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUUsTUFEUDtBQUVQSixTQUFLLEVBQUUsUUFGQTtBQUdQVCxVQUFNLEVBQUUsTUFIRDtBQUlQVyxTQUFLLEVBQUU7QUFKQTtBQWJpQixDQUE1QjtBQXFCZWYsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYWRkNTQ0OTI4ZjJiNzE1MzczY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgb25DbGljaz86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgdHlwZT86IHN0cmluZztcbiAgYXM/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEJ1dHRvbih7IGNoaWxkcmVuLCBvbkNsaWNrLCAuLi5wcm9wcyB9OiBQcm9wcywgcmVmKSB7XG4gIHJldHVybiAoXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIDxTdHlsZWRCdXR0b24gcmVmPXtyZWZ9IG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5wcm9wc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWRCdXR0b24+XG4gICk7XG59XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJyYW5kfTtcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm1lZGl1bX07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKEJ1dHRvbik7XG4iLCJpbXBvcnQgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBDT0xPUl9CUkFORCA9ICcjZDU4NTFkJztcbmV4cG9ydCBjb25zdCBDT0xPUl9XSElURSA9ICcjZmZmZmZmJztcbmV4cG9ydCBjb25zdCBDT0xPUl9HUkVZX0xJR0hUID0gJyNDRkQyRDMnO1xuZXhwb3J0IGNvbnN0IENPTE9SX0dSRVkgPSAnIzZjNzU3ZCc7XG5cbmNvbnN0IHRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gIGNvbG9yczoge1xuICAgIGJyYW5kOiBDT0xPUl9CUkFORCxcbiAgICB3aGl0ZTogQ09MT1JfV0hJVEUsXG4gICAgZ3JleUxpZ2h0OiBDT0xPUl9HUkVZX0xJR0hULFxuICAgIGdyZXk6IENPTE9SX0dSRVksXG4gIH0sXG4gIGZvbnRTaXplOiB7XG4gICAgc21hbGw6ICcwLjYxMjVlbScsXG4gICAgbWVkaXVtOiAnMS4yNWVtJyxcbiAgICBtZWRpdW1MYXJnZTogJzEuNWVtJyxcbiAgICBsYXJnZTogJzIuNWVtJyxcbiAgfSxcbiAgc3BhY2luZzoge1xuICAgIG5hdkJhckhlaWdodDogJzVyZW0nLFxuICAgIHNtYWxsOiAnMC41cmVtJyxcbiAgICBtZWRpdW06ICcxcmVtJyxcbiAgICBsYXJnZTogJzJyZW0nLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9
