webpackHotUpdate('static\\development\\pages\\index.js', {
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
                __jsx(
                  'p',
                  {
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22,
                      columnNumber: 11,
                    },
                  },
                  'Contact Us'
                )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiSG9tZSIsImJhY2tncm91bmQiLCJrZXlmcmFtZXMiLCJQYWdlVGl0bGVDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJIb21lQ29udGFpbmVyIiwidGhlbWUiLCJjb2xvcnMiLCJ3aGl0ZSIsIlBhZ2VUaXRsZSIsImgxIiwidGV4dFNpemUiLCJsYXJnZSIsIlBhZ2VTdWJUaXRsZSIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNkLFNBQ0UsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUdFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRUFDK0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUQvRCwrQ0FQRixFQVlFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixZQUFRLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsTUFBRSxFQUFDLEdBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLENBREYsQ0FaRixDQURGO0FBb0JEOztLQXJCUUEsSTtBQXNCVCxJQUFNQyxVQUFVLEdBQUdDLG1FQUFILG9FQUFoQjtBQVNBLElBQU1DLGtCQUFrQixHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZCQUF4QjtNQUFNRixrQjtBQUdOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyS0FJSkosVUFKSSxFQUtSO0FBQUEsTUFBR00sS0FBSCxRQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQTVCO0FBQUEsQ0FMUSxDQUFuQjtNQUFNSCxhO0FBUU4sSUFBTUksU0FBUyxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHVDQUNBO0FBQUEsTUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsU0FBZUEsS0FBSyxDQUFDSyxRQUFOLENBQWVDLEtBQTlCO0FBQUEsQ0FEQSxDQUFmO01BQU1ILFM7QUFJTixJQUFNSSxZQUFZLEdBQUdWLHlEQUFNLENBQUNPLEVBQVY7QUFBQTtBQUFBO0FBQUEseUVBQ0g7QUFBQSxNQUFHSixLQUFILFNBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNLLFFBQU4sQ0FBZUcsTUFBOUI7QUFBQSxDQURHLENBQWxCO01BQU1ELFk7QUFPU2QsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjEyMzllYjhiNzgxYWZhZGI2MWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiwgSGlnaGxpZ2h0TGluZSB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhvbWVDb250YWluZXI+XHJcbiAgICAgIDxQYWdlVGl0bGVDb250YWluZXI+XHJcbiAgICAgICAgPFBhZ2VUaXRsZT5XZWIgQ29uc3VsdGluZyBpbiBUb3VjaCB3aXRoIFRvbW9ycm93PC9QYWdlVGl0bGU+XHJcblxyXG4gICAgICAgIDxIaWdobGlnaHRMaW5lIC8+XHJcbiAgICAgIDwvUGFnZVRpdGxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgPFBhZ2VTdWJUaXRsZT5cclxuICAgICAgICBXZSBicmluZyBpZGVhcyB0byBsaWZlIGFuZCBjcmVhdGUgcHJvZHVjdHMgdGhhdCBwZW9wbGUgbG92ZS4gPGJyIC8+XHJcbiAgICAgICAgTGV0IHVzIGhlbHAgeW91IG1ha2Ugc29tZXRoaW5nIHJlbWFya2FibGUuXHJcbiAgICAgIDwvUGFnZVN1YlRpdGxlPlxyXG5cclxuICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCIgcGFzc0hyZWY+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXM9XCJhXCI+XHJcbiAgICAgICAgICA8cD5Db250YWN0IFVzPC9wPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L0hvbWVDb250YWluZXI+XHJcbiAgKTtcclxufVxyXG5jb25zdCBiYWNrZ3JvdW5kID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxOTlweDtcclxuICB9XHJcbmA7XHJcbmNvbnN0IFBhZ2VUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5gO1xyXG5jb25zdCBIb21lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjkyOTI5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvaGVyby1wYXR0ZXJuLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCAxOTlweDtcclxuICBhbmltYXRpb246ICR7YmFja2dyb3VuZH0gMy41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcclxuICBwYWRkaW5nOiA2dmggM3Z3O1xyXG5gO1xyXG5jb25zdCBQYWdlVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRTaXplLmxhcmdlfTtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbmA7XHJcbmNvbnN0IFBhZ2VTdWJUaXRsZSA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dFNpemUubWVkaXVtfTtcclxuICBtYXJnaW4tdG9wOiA1dmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
