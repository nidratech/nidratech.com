webpackHotUpdate('static\\development\\pages\\_app.js', {
  /***/ './components/PageTitle.tsx':
    /*!**********************************!*\
  !*** ./components/PageTitle.tsx ***!
  \**********************************/
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
        /* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! components */ './components/index.ts'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\PageTitle.tsx';

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function PageTitle(title) {
          return __jsx(
            TitleContainer,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
            },
            __jsx(
              Title,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 8,
                  columnNumber: 7,
                },
              },
              title
            ),
            __jsx(components__WEBPACK_IMPORTED_MODULE_2__['HighlightLine'], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 7,
              },
            })
          );
        }

        _c = PageTitle;
        var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__['default'].h1.withConfig({
          displayName: 'Title',
          componentId: 'sc-1dghbrv-0',
        })(['text-transform:uppercase;font-weight:700;font-size:1.5em;']);
        _c2 = Title;
        var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[
          'default'
        ].div.withConfig({
          displayName: 'TitleContainer',
          componentId: 'sc-1dghbrv-1',
        })(['display:inline-block;margin-bottom:', ';'], function (_ref) {
          var theme = _ref.theme;
          return theme.spacing.medium;
        });
        _c3 = TitleContainer;
        /* harmony default export */ __webpack_exports__['default'] = PageTitle;

        var _c, _c2, _c3;

        $RefreshReg$(_c, 'PageTitle');
        $RefreshReg$(_c2, 'Title');
        $RefreshReg$(_c3, 'TitleContainer');

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

  /***/ './components/index.ts':
    /*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
    /*! exports provided: Button, Container, HighlightLine, Navbar, NidratechLogo, PageTitle */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./Button */ './components/Button.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Button',
          function () {
            return _Button__WEBPACK_IMPORTED_MODULE_0__['default'];
          }
        );

        /* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./Container */ './components/Container.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Container',
          function () {
            return _Container__WEBPACK_IMPORTED_MODULE_1__['default'];
          }
        );

        /* harmony import */ var _HighlightLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./HighlightLine */ './components/HighlightLine.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HighlightLine',
          function () {
            return _HighlightLine__WEBPACK_IMPORTED_MODULE_2__['default'];
          }
        );

        /* harmony import */ var _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./navbar/Navbar */ './components/navbar/Navbar.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Navbar',
          function () {
            return _navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__['default'];
          }
        );

        /* harmony import */ var _NidratechLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./NidratechLogo */ './components/NidratechLogo.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'NidratechLogo',
          function () {
            return _NidratechLogo__WEBPACK_IMPORTED_MODULE_4__['default'];
          }
        );

        /* harmony import */ var _PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./PageTitle */ './components/PageTitle.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PageTitle',
          function () {
            return _PageTitle__WEBPACK_IMPORTED_MODULE_5__['default'];
          }
        );

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VUaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6WyJQYWdlVGl0bGUiLCJ0aXRsZSIsIlRpdGxlIiwic3R5bGVkIiwiaDEiLCJUaXRsZUNvbnRhaW5lciIsImRpdiIsInRoZW1lIiwic3BhY2luZyIsIm1lZGl1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN4QixTQUNFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsS0FBUixDQURGLEVBRUUsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1EOztLQVBRRCxTO0FBU1QsSUFBTUUsS0FBSyxHQUFHQyx5REFBTSxDQUFDQyxFQUFWO0FBQUE7QUFBQTtBQUFBLGlFQUFYO01BQU1GLEs7QUFLTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsaURBRUQ7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFlQSxLQUFLLENBQUNDLE9BQU4sQ0FBY0MsTUFBN0I7QUFBQSxDQUZDLENBQXBCO01BQU1KLGM7QUFLU0wsd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy40MmEzMjkzNzk5NTBlZjg0MjUxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEhpZ2hsaWdodExpbmUgfSBmcm9tICdjb21wb25lbnRzJztcblxuZnVuY3Rpb24gUGFnZVRpdGxlKHRpdGxlKSB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlQ29udGFpbmVyPlxuICAgICAgPFRpdGxlPnt0aXRsZX08L1RpdGxlPlxuICAgICAgPEhpZ2hsaWdodExpbmUgLz5cbiAgICA8L1RpdGxlQ29udGFpbmVyPlxuICApO1xufVxuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbmA7XG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGU7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIaWdobGlnaHRMaW5lIH0gZnJvbSAnLi9IaWdobGlnaHRMaW5lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXIvTmF2YmFyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTmlkcmF0ZWNoTG9nbyB9IGZyb20gJy4vTmlkcmF0ZWNoTG9nbyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VUaXRsZSB9IGZyb20gJy4vUGFnZVRpdGxlJztcbiJdLCJzb3VyY2VSb290IjoiIn0=
