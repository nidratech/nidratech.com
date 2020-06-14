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
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
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
                    lineNumber: 16,
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
            'min-width:8rem;background-color:',
            ';font-size:',
            ';color:',
            ';text-align:center;user-select:none;border:1px solid transparent;padding:0.5rem 1rem;line-height:1.5;border-radius:0.25rem;cursor:pointer;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;:focus,:hover{background-color:',
            ';}:disabled{cursor:not-allowed;background-color:',
            ';}',
          ],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.colors.brand;
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.fontSize.small;
          },
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.colors.white;
          },
          function (_ref5) {
            var theme = _ref5.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_4__['darken'])(0.1, theme.colors.brand);
          },
          function (_ref6) {
            var theme = _ref6.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_4__['lighten'])(
              0.2,
              theme.colors.brand
            );
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi50c3giXSwibmFtZXMiOlsiQnV0dG9uIiwicmVmIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwicHJvcHMiLCJTdHlsZWRCdXR0b24iLCJzdHlsZWQiLCJidXR0b24iLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwiZm9udFNpemUiLCJzbWFsbCIsIndoaXRlIiwiZGFya2VuIiwibGlnaHRlbiIsImZvcndhcmRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBVUEsU0FBU0EsTUFBVCxPQUF3REMsR0FBeEQsRUFBNkQ7QUFBQSxNQUEzQ0MsUUFBMkMsUUFBM0NBLFFBQTJDO0FBQUEsTUFBakNDLE9BQWlDLFFBQWpDQSxPQUFpQztBQUFBLE1BQXJCQyxLQUFxQjs7QUFDM0QsU0FDRTtBQUNBLFVBQUMsWUFBRDtBQUFjLFNBQUcsRUFBRUgsR0FBbkI7QUFBd0IsYUFBTyxFQUFFRTtBQUFqQyxPQUE4Q0MsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHRixRQURIO0FBRkY7QUFNRDs7S0FQUUYsTTtBQVNULElBQU1LLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSw0YUFFSTtBQUFBLE1BQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUE1QjtBQUFBLENBRkosRUFHSDtBQUFBLE1BQUdGLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0csUUFBTixDQUFlQyxLQUE5QjtBQUFBLENBSEcsRUFJUDtBQUFBLE1BQUdKLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSSxLQUE1QjtBQUFBLENBSk8sRUFpQk07QUFBQSxNQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlTSx1REFBTSxDQUFDLEdBQUQsRUFBTU4sS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQW5CLENBQXJCO0FBQUEsQ0FqQk4sRUFzQk07QUFBQSxNQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlTyx3REFBTyxDQUFDLEdBQUQsRUFBTVAsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQW5CLENBQXRCO0FBQUEsQ0F0Qk4sQ0FBbEI7TUFBTUwsWTtBQTBCUyxxRUFBQVcsd0RBQVUsQ0FBQ2hCLE1BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuNjMzZGE2YzBjMGI0NjcyMmFjZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGFya2VuLCBsaWdodGVuIH0gZnJvbSAncG9saXNoZWQnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgb25DbGljaz86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgdHlwZT86IHN0cmluZztcbiAgYXM/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIC4uLnByb3BzIH06IFByb3BzLCByZWYpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgPFN0eWxlZEJ1dHRvbiByZWY9e3JlZn0gb25DbGljaz17b25DbGlja30gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgKTtcbn1cblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgbWluLXdpZHRoOiA4cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5icmFuZH07XG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5zbWFsbH07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgOmZvY3VzLFxuICA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMSwgdGhlbWUuY29sb3JzLmJyYW5kKX07XG4gIH1cblxuICA6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBsaWdodGVuKDAuMiwgdGhlbWUuY29sb3JzLmJyYW5kKX07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoQnV0dG9uKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
