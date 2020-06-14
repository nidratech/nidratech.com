webpackHotUpdate('static\\development\\pages\\_app.js', {
  /***/ './components/Container.tsx':
    /*!**********************************!*\
  !*** ./components/Container.tsx ***!
  \**********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* WEBPACK VAR INJECTION */ (function (module) {
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );

        /* harmony default export */ __webpack_exports__[
          'default'
        ] = styled_components__WEBPACK_IMPORTED_MODULE_0__['default'].div.withConfig({
          componentId: 'gy3cny-0',
        })(['max-width:60rem;']);

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
    /*! exports provided: Button, Container, Header, HighlightLine, NidratechLogo */
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

        /* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./Header */ './components/Header.tsx'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Header',
          function () {
            return _Header__WEBPACK_IMPORTED_MODULE_2__['default'];
          }
        );

        /* harmony import */ var _HighlightLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./HighlightLine */ './components/HighlightLine.ts'
        );
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'HighlightLine',
          function () {
            return _HighlightLine__WEBPACK_IMPORTED_MODULE_3__['default'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFFZUEsd0hBQU0sQ0FBQ0MsR0FBdEI7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuN2UwODU5YjZlNjk5ZjU0Y2YxYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6IDYwcmVtO1xuYDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWluZXIgfSBmcm9tICcuL0NvbnRhaW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGlnaGxpZ2h0TGluZSB9IGZyb20gJy4vSGlnaGxpZ2h0TGluZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5pZHJhdGVjaExvZ28gfSBmcm9tICcuL05pZHJhdGVjaExvZ28nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
