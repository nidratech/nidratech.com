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
          return theme.fontSize.large;
        });
        _c4 = PageTitle;
        var PageSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'PageSubTitle',
          componentId: 'sc-1xh3p16-3',
        })(['font-size:', ';margin-top:5vh;margin-bottom:6vh;line-height:1.5;'], function (_ref3) {
          var theme = _ref3.theme;
          return theme.fontSize.medium;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInJlZiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJicmFuZCIsImZvbnRTaXplIiwibWVkaXVtIiwid2hpdGUiLCJmb3J3YXJkUmVmIiwiSG9tZSIsImJhY2tncm91bmQiLCJrZXlmcmFtZXMiLCJQYWdlVGl0bGVDb250YWluZXIiLCJkaXYiLCJIb21lQ29udGFpbmVyIiwiUGFnZVRpdGxlIiwiaDEiLCJsYXJnZSIsIlBhZ2VTdWJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxTQUFTQSxNQUFULE9BQXdEQyxHQUF4RCxFQUE2RDtBQUFBLE1BQTNDQyxRQUEyQyxRQUEzQ0EsUUFBMkM7QUFBQSxNQUFqQ0MsT0FBaUMsUUFBakNBLE9BQWlDO0FBQUEsTUFBckJDLEtBQXFCOztBQUMzRCxTQUNFO0FBQ0EsVUFBQyxZQUFEO0FBQWMsU0FBRyxFQUFFSCxHQUFuQjtBQUF3QixhQUFPLEVBQUVFO0FBQWpDLE9BQThDQyxLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dGLFFBREg7QUFGRjtBQU1EOztLQVBRRixNO0FBU1QsSUFBTUssWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDBUQUNJO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FESixFQUVIO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxRQUFOLENBQWVDLE1BQTlCO0FBQUEsQ0FGRyxFQUdQO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFJLEtBQTVCO0FBQUEsQ0FITyxDQUFsQjtNQUFNUixZO0FBY1MscUVBQUFTLHdEQUFVLENBQUNkLE1BQUQsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNlLElBQVQsR0FBZ0I7QUFDZCxTQUNFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBREYsRUFHRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBT0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0VBQytEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEL0QsK0NBUEYsRUFZRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsWUFBUSxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLE1BQUUsRUFBQyxHQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBWkYsQ0FERjtBQW9CRDs7S0FyQlFBLEk7QUFzQlQsSUFBTUMsVUFBVSxHQUFHQyxtRUFBSCxvRUFBaEI7QUFTQSxJQUFNQyxrQkFBa0IsR0FBR1oseURBQU0sQ0FBQ2EsR0FBVjtBQUFBO0FBQUE7QUFBQSw2QkFBeEI7TUFBTUQsa0I7QUFHTixJQUFNRSxhQUFhLEdBQUdkLHlEQUFNLENBQUNhLEdBQVY7QUFBQTtBQUFBO0FBQUEsMktBSUpILFVBSkksRUFLUjtBQUFBLE1BQUdSLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQWVBLEtBQUssQ0FBQ0MsTUFBTixDQUFhSSxLQUE1QjtBQUFBLENBTFEsQ0FBbkI7TUFBTU8sYTtBQVFOLElBQU1DLFNBQVMsR0FBR2YseURBQU0sQ0FBQ2dCLEVBQVY7QUFBQTtBQUFBO0FBQUEsdUNBQ0E7QUFBQSxNQUFHZCxLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNHLFFBQU4sQ0FBZVksS0FBOUI7QUFBQSxDQURBLENBQWY7TUFBTUYsUztBQUlOLElBQU1HLFlBQVksR0FBR2xCLHlEQUFNLENBQUNnQixFQUFWO0FBQUE7QUFBQTtBQUFBLHlFQUNIO0FBQUEsTUFBR2QsS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDRyxRQUFOLENBQWVDLE1BQTlCO0FBQUEsQ0FERyxDQUFsQjtNQUFNWSxZO0FBT1NULG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hZGQ1NDQ5MjhmMmI3MTUzNzNjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICBvbkNsaWNrPzogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkO1xuICB0eXBlPzogc3RyaW5nO1xuICBhcz86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gQnV0dG9uKHsgY2hpbGRyZW4sIG9uQ2xpY2ssIC4uLnByb3BzIH06IFByb3BzLCByZWYpIHtcbiAgcmV0dXJuIChcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgPFN0eWxlZEJ1dHRvbiByZWY9e3JlZn0gb25DbGljaz17b25DbGlja30gey4uLnByb3BzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgKTtcbn1cblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYnJhbmR9O1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udFNpemUubWVkaXVtfTtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxuICAgIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoQnV0dG9uKTtcbiIsImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBIaWdobGlnaHRMaW5lIH0gZnJvbSAnY29tcG9uZW50cyc7XHJcblxyXG5mdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SG9tZUNvbnRhaW5lcj5cclxuICAgICAgPFBhZ2VUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICA8UGFnZVRpdGxlPldlYiBDb25zdWx0aW5nIGluIFRvdWNoIHdpdGggVG9tb3Jyb3c8L1BhZ2VUaXRsZT5cclxuXHJcbiAgICAgICAgPEhpZ2hsaWdodExpbmUgLz5cclxuICAgICAgPC9QYWdlVGl0bGVDb250YWluZXI+XHJcblxyXG4gICAgICA8UGFnZVN1YlRpdGxlPlxyXG4gICAgICAgIFdlIGJyaW5nIGlkZWFzIHRvIGxpZmUgYW5kIGNyZWF0ZSBwcm9kdWN0cyB0aGF0IHBlb3BsZSBsb3ZlLiA8YnIgLz5cclxuICAgICAgICBMZXQgdXMgaGVscCB5b3UgbWFrZSBzb21ldGhpbmcgcmVtYXJrYWJsZS5cclxuICAgICAgPC9QYWdlU3ViVGl0bGU+XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBwYXNzSHJlZj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiBhcz1cImFcIj5cclxuICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Ib21lQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuY29uc3QgYmFja2dyb3VuZCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTk5cHg7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBQYWdlVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuYDtcclxuY29uc3QgSG9tZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5MjkyOTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2hlcm8tcGF0dGVybi5zdmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTk5cHg7XHJcbiAgYW5pbWF0aW9uOiAke2JhY2tncm91bmR9IDMuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgcGFkZGluZzogNnZoIDN2dztcclxuYDtcclxuY29uc3QgUGFnZVRpdGxlID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250U2l6ZS5sYXJnZX07XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG5gO1xyXG5jb25zdCBQYWdlU3ViVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnRTaXplLm1lZGl1bX07XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIG1hcmdpbi1ib3R0b206IDZ2aDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
