webpackHotUpdate('static\\development\\pages\\index.js', {
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

        function Button(_ref) {
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
              __jsx(
                'div',
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 7,
                  },
                },
                children
              )
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
            ';color:',
            ';text-align:center;user-select:none;border:1px solid transparent;padding:0.375rem 0.75rem;line-height:1.5;border-radius:0.25rem;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;',
          ],
          function (_ref2) {
            var theme = _ref2.theme;
            return theme.colors.brand;
          },
          function (_ref3) {
            var theme = _ref3.theme;
            return theme.colors.white;
          }
        );
        _c2 = StyledButton;
        /* harmony default export */ __webpack_exports__['default'] = Button;

        var _c, _c2;

        $RefreshReg$(_c, 'Button');
        $RefreshReg$(_c2, 'StyledButton');

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
              next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
              {
                href: '/contact',
                passHref: true,
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 7,
                },
              },
              __jsx(
                components__WEBPACK_IMPORTED_MODULE_3__['Button'],
                {
                  type: 'button',
                  as: 'a',
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 9,
                  },
                },
                'Contact Us'
              )
            )
          );
        }

        _c = Home;
        var background = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__['keyframes'])([
          '0%{background-position:0 0;}100%{background-position:0 199px;}',
        ]);
        var PageTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'PageTitleContainer',
          componentId: 'sc-1xh3p16-0',
        })(['display:inline-block;']);
        _c2 = PageTitleContainer;
        var HomeContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'HomeContainer',
          componentId: 'sc-1xh3p16-1',
        })(
          [
            'background-color:#292929;background-image:url(images/hero-pattern.svg);background-size:100px 199px;animation:',
            ' 3.5s linear infinite;color:',
            ';padding:6vh 3vw;',
          ],
          background,
          function (_ref) {
            var theme = _ref.theme;
            return theme.colors.white;
          }
        );
        _c3 = HomeContainer;
        var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageTitle',
          componentId: 'sc-1xh3p16-2',
        })(['font-size:', ';margin-top:2vh;'], function (_ref2) {
          var theme = _ref2.theme;
          return theme.textSize.large;
        });
        _c4 = PageTitle;
        var PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageSubTitle',
          componentId: 'sc-1xh3p16-3',
        })(['font-size:', ';margin-top:5vh;margin-bottom:6vh;line-height:1.5;'], function (_ref3) {
          var theme = _ref3.theme;
          return theme.textSize.medium;
        });
        _c5 = PageSubTitle;
        /* harmony default export */ __webpack_exports__['default'] = Home;

        var _c, _c2, _c3, _c4, _c5;

        $RefreshReg$(_c, 'Home');
        $RefreshReg$(_c2, 'PageTitleContainer');
        $RefreshReg$(_c3, 'HomeContainer');
        $RefreshReg$(_c4, 'PageTitle');
        $RefreshReg$(_c5, 'PageSubTitle');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsIndoaXRlIiwiSG9tZSIsImJhY2tncm91bmQiLCJrZXlmcmFtZXMiLCJQYWdlVGl0bGVDb250YWluZXIiLCJkaXYiLCJIb21lQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiaDEiLCJ0ZXh0U2l6ZSIsImxhcmdlIiwiUGFnZVN1YlRpdGxlIiwibWVkaXVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFTQSxTQUFTQSxNQUFULE9BQXdEO0FBQUEsTUFBdENDLFFBQXNDLFFBQXRDQSxRQUFzQztBQUFBLE1BQTVCQyxPQUE0QixRQUE1QkEsT0FBNEI7QUFBQSxNQUFoQkMsS0FBZ0I7O0FBQ3RELFNBQ0U7QUFDQSxVQUFDLFlBQUQ7QUFBYyxhQUFPLEVBQUVEO0FBQXZCLE9BQW9DQyxLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFNRixRQUFOLENBREY7QUFGRjtBQU1EOztLQVBRRCxNO0FBU1QsSUFBTUksWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDJTQUNJO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FESixFQUVQO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFFLEtBQTVCO0FBQUEsQ0FGTyxDQUFsQjtNQUFNTixZO0FBYVNKLHFFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNXLElBQVQsR0FBZ0I7QUFDZCxTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsRUFHRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBT0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBQytEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEL0QsK0NBUEYsRUFZRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUUsRUFBQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBWkYsQ0FERjtBQW9CRDs7S0FyQlFBLEk7QUFzQlQsSUFBTUMsVUFBVSxHQUFHQyxtRUFBSCxvRUFBaEI7QUFTQSxJQUFNQyxrQkFBa0IsR0FBR1QseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSw2QkFBeEI7TUFBTUQsa0I7QUFHTixJQUFNRSxhQUFhLEdBQUdYLHlEQUFNLENBQUNVLEdBQVY7QUFBQTtBQUFBO0FBQUEsMktBSUpILFVBSkksRUFLUjtBQUFBLE1BQUdMLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhRSxLQUE1QjtBQUFBLENBTFEsQ0FBbkI7TUFBTU0sYTtBQVFOLElBQU1DLFNBQVMsR0FBR1oseURBQU0sQ0FBQ2EsRUFBVjtBQUFBO0FBQUE7QUFBQSx1Q0FDQTtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1ksUUFBTixDQUFlQyxLQUE5QjtBQUFBLENBREEsQ0FBZjtNQUFNSCxTO0FBSU4sSUFBTUksWUFBWSxHQUFHaEIseURBQU0sQ0FBQ2EsRUFBVjtBQUFBO0FBQUE7QUFBQSx5RUFDSDtBQUFBLE1BQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ1ksUUFBTixDQUFlRyxNQUE5QjtBQUFBLENBREcsQ0FBbEI7TUFBTUQsWTtBQU9TVixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZDUzNDE2NDRhMmE5ODI5MDVmZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgb25DbGljaz86ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZDtcbiAgdHlwZT86IHN0cmluZztcbiAgYXM/OiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIEJ1dHRvbih7IGNoaWxkcmVuLCBvbkNsaWNrLCAuLi5wcm9wcyB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICA8U3R5bGVkQnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9IHsuLi5wcm9wc30+XG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cbiAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgKTtcbn1cblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYnJhbmR9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgeyBCdXR0b24sIEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lQ29udGFpbmVyPlxyXG4gICAgICA8UGFnZVRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQYWdlVGl0bGU+V2ViIENvbnN1bHRpbmcgaW4gVG91Y2ggd2l0aCBUb21vcnJvdzwvUGFnZVRpdGxlPlxyXG5cclxuICAgICAgICA8SGlnaGxpZ2h0TGluZSAvPlxyXG4gICAgICA8L1BhZ2VUaXRsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxQYWdlU3ViVGl0bGU+XHJcbiAgICAgICAgV2UgYnJpbmcgaWRlYXMgdG8gbGlmZSBhbmQgY3JlYXRlIHByb2R1Y3RzIHRoYXQgcGVvcGxlIGxvdmUuIDxiciAvPlxyXG4gICAgICAgIExldCB1cyBoZWxwIHlvdSBtYWtlIHNvbWV0aGluZyByZW1hcmthYmxlLlxyXG4gICAgICA8L1BhZ2VTdWJUaXRsZT5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIHBhc3NIcmVmPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIGFzPVwiYVwiPlxyXG4gICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0hvbWVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5jb25zdCBiYWNrZ3JvdW5kID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxOTlweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFBhZ2VUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaGVyby1wYXR0ZXJuLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxOTlweDtcclxuICBhbmltYXRpb246ICR7YmFja2dyb3VuZH0gMy41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBwYWRkaW5nOiA2dmggM3Z3O1xyXG5gO1xyXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRTaXplLmxhcmdlfTtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbmA7XHJcbmNvbnN0IFBhZ2VTdWJUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubWVkaXVtfTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
