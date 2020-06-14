webpackHotUpdate('static\\development\\pages\\index.js', {
  /***/ './components/Header.tsx':
    /*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
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
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! next/link */ './node_modules/next/link.js'
        );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
        );
        /* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! polished */ './node_modules/polished/dist/polished.esm.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! next/router */ './node_modules/next/dist/client/router.js'
        );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! components/NidratechLogo */ './components/NidratechLogo.tsx'
        );
        var _jsxFileName = 'F:\\Projects\\nidratech.com\\components\\Header.tsx',
          _s = $RefreshSig$();

        var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

        function Header() {
          _s();

          var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter'])(),
            pathname = _useRouter.pathname;

          return __jsx(
            StyledHeader,
            {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 5,
              },
            },
            __jsx(
              StyledNav,
              {
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13,
                  columnNumber: 7,
                },
              },
              __jsx(
                NavContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      'aria-label': 'Nidratech Ltd.',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16,
                        columnNumber: 13,
                      },
                    },
                    __jsx(StyledNidratechLogo, {
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17,
                        columnNumber: 15,
                      },
                    })
                  )
                )
              ),
              __jsx(
                NavContainer,
                {
                  __self: this,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 9,
                  },
                },
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Home',
                      isActive: pathname === '/',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24,
                        columnNumber: 13,
                      },
                    },
                    'Home'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/projects',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Projects',
                      isActive: pathname === '/projects',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30,
                        columnNumber: 13,
                      },
                    },
                    'Projects'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/clients',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Clients',
                      isActive: pathname === '/clients',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36,
                        columnNumber: 13,
                      },
                    },
                    'Clients'
                  )
                ),
                __jsx(
                  next_link__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    href: '/contact',
                    passHref: true,
                    __self: this,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 11,
                    },
                  },
                  __jsx(
                    NavItem,
                    {
                      as: 'a',
                      title: 'Contact us',
                      isActive: pathname === '/contact',
                      __self: this,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 13,
                      },
                    },
                    'Contact us'
                  )
                )
              )
            )
          );
        }

        _s(Header, 'QpP2vYJstxsDz0K+Qwttl8PPVoY=', false, function () {
          return [next_router__WEBPACK_IMPORTED_MODULE_4__['useRouter']];
        });

        _c = Header;
        var StyledNidratechLogo = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__['default'])(
          components_NidratechLogo__WEBPACK_IMPORTED_MODULE_5__['default']
        ).withConfig({
          displayName: 'StyledNidratechLogo',
          componentId: 'sc-1rgxcs4-0',
        })(['width:9.5rem;height:100%;']);
        _c2 = StyledNidratechLogo;
        var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].div.withConfig(
          {
            displayName: 'NavContainer',
            componentId: 'sc-1rgxcs4-1',
          }
        )(['display:flex;align-items:center;']);
        _c3 = NavContainer;
        var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].a.withConfig({
          displayName: 'NavItem',
          componentId: 'sc-1rgxcs4-2',
        })(
          ['display:flex;padding:0 ', ';color:', ';:hover{color:', ';}'],
          function (_ref) {
            var theme = _ref.theme;
            return theme.spacing.medium;
          },
          function (_ref2) {
            var isActive = _ref2.isActive,
              theme = _ref2.theme;
            return isActive ? theme.colors.brand : theme.colors.grey;
          },
          function (_ref3) {
            var isActive = _ref3.isActive,
              theme = _ref3.theme;
            return Object(polished__WEBPACK_IMPORTED_MODULE_3__['darken'])(
              0.05,
              isActive ? theme.colors.brand : theme.colors.grey
            );
          }
        );
        _c4 = NavItem;
        var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_2__['default'].nav.withConfig({
          displayName: 'StyledNav',
          componentId: 'sc-1rgxcs4-3',
        })(
          [
            'padding:0 ',
            ';display:flex;align-items:center;justify-content:space-between;height:100%;',
          ],
          function (_ref4) {
            var theme = _ref4.theme;
            return theme.spacing.large;
          }
        );
        _c5 = StyledNav;
        var StyledHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__[
          'default'
        ].header.withConfig({
          displayName: 'StyledHeader',
          componentId: 'sc-1rgxcs4-4',
        })(
          ['position:fixed;top:0;left:0;width:100%;z-index:99;background:', ';height:', ';'],
          function (_ref5) {
            var theme = _ref5.theme;
            return theme.colors.white;
          },
          function (_ref6) {
            var theme = _ref6.theme;
            return theme.spacing.navBarHeight;
          }
        );
        _c6 = StyledHeader;
        /* harmony default export */ __webpack_exports__['default'] = Header;

        var _c, _c2, _c3, _c4, _c5, _c6;

        $RefreshReg$(_c, 'Header');
        $RefreshReg$(_c2, 'StyledNidratechLogo');
        $RefreshReg$(_c3, 'NavContainer');
        $RefreshReg$(_c4, 'NavItem');
        $RefreshReg$(_c5, 'StyledNav');
        $RefreshReg$(_c6, 'StyledHeader');

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

  /***/ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _assertThisInitialized;
        }
      );
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/construct.js':
    /*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _construct;
        }
      );
      /* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./setPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js'
      );
      /* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./isNativeReflectConstruct */ './node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js'
      );

      function _construct(Parent, args, Class) {
        if (Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__['default'])()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class)
              Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__['default'])(
                instance,
                Class.prototype
              );
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js':
    /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _getPrototypeOf;
        }
      );
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js':
    /*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _inheritsLoose;
        }
      );
      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/isNativeFunction.js':
    /*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _isNativeFunction;
        }
      );
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf('[native code]') !== -1;
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js':
    /*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _isNativeReflectConstruct;
        }
      );
      function _isNativeReflectConstruct() {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js':
    /*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _setPrototypeOf;
        }
      );
      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };

        return _setPrototypeOf(o, p);
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js':
    /*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js ***!
  \*******************************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _taggedTemplateLiteralLoose;
        }
      );
      function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }

        strings.raw = raw;
        return strings;
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js':
    /*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function () {
          return _wrapNativeSuper;
        }
      );
      /* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./getPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
      );
      /* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./setPrototypeOf */ './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js'
      );
      /* harmony import */ var _isNativeFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./isNativeFunction */ './node_modules/@babel/runtime/helpers/esm/isNativeFunction.js'
      );
      /* harmony import */ var _construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./construct */ './node_modules/@babel/runtime/helpers/esm/construct.js'
      );

      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === 'function' ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (
            Class === null ||
            !Object(_isNativeFunction__WEBPACK_IMPORTED_MODULE_2__['default'])(Class)
          )
            return Class;

          if (typeof Class !== 'function') {
            throw new TypeError('Super expression must either be null or a function');
          }

          if (typeof _cache !== 'undefined') {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return Object(_construct__WEBPACK_IMPORTED_MODULE_3__['default'])(
              Class,
              arguments,
              Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__['default'])(this).constructor
            );
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true,
            },
          });
          return Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__['default'])(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      /***/
    },

  /***/ './node_modules/polished/dist/polished.esm.js':
    /*!****************************************************!*\
  !*** ./node_modules/polished/dist/polished.esm.js ***!
  \****************************************************/
    /*! exports provided: adjustHue, animation, backgroundImages, backgrounds, between, border, borderColor, borderRadius, borderStyle, borderWidth, buttons, clearFix, complement, cover, cssVar, darken, desaturate, directionalProperty, ellipsis, em, fluidRange, fontFace, getContrast, getLuminance, getValueAndUnit, grayscale, hiDPI, hideText, hideVisually, hsl, hslToColorString, hsla, invert, lighten, linearGradient, margin, math, meetsContrastGuidelines, mix, modularScale, normalize, opacify, padding, parseToHsl, parseToRgb, position, radialGradient, readableColor, rem, retinaImage, rgb, rgbToColorString, rgba, saturate, setHue, setLightness, setSaturation, shade, size, stripUnit, textInputs, timingFunctions, tint, toColorString, transitions, transparentize, triangle, wordWrap */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'adjustHue',
        function () {
          return curriedAdjustHue;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'animation',
        function () {
          return animation;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'backgroundImages',
        function () {
          return backgroundImages;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'backgrounds',
        function () {
          return backgrounds;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'between',
        function () {
          return between;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'border',
        function () {
          return border;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'borderColor',
        function () {
          return borderColor;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'borderRadius',
        function () {
          return borderRadius;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'borderStyle',
        function () {
          return borderStyle;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'borderWidth',
        function () {
          return borderWidth;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'buttons',
        function () {
          return buttons;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'clearFix',
        function () {
          return clearFix;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'complement',
        function () {
          return complement;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'cover',
        function () {
          return cover;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'cssVar',
        function () {
          return cssVar;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'darken',
        function () {
          return curriedDarken;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'desaturate',
        function () {
          return curriedDesaturate;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'directionalProperty',
        function () {
          return directionalProperty;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'ellipsis',
        function () {
          return ellipsis;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'em', function () {
        return em;
      });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'fluidRange',
        function () {
          return fluidRange;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'fontFace',
        function () {
          return fontFace;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getContrast',
        function () {
          return getContrast;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getLuminance',
        function () {
          return getLuminance;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'getValueAndUnit',
        function () {
          return getValueAndUnit;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'grayscale',
        function () {
          return grayscale;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'hiDPI',
        function () {
          return hiDPI;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'hideText',
        function () {
          return hideText;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'hideVisually',
        function () {
          return hideVisually;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'hsl', function () {
        return hsl;
      });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'hslToColorString',
        function () {
          return hslToColorString;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'hsla',
        function () {
          return hsla;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'invert',
        function () {
          return invert;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'lighten',
        function () {
          return curriedLighten;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'linearGradient',
        function () {
          return linearGradient;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'margin',
        function () {
          return margin;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'math',
        function () {
          return math;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'meetsContrastGuidelines',
        function () {
          return meetsContrastGuidelines;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'mix', function () {
        return curriedMix;
      });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'modularScale',
        function () {
          return modularScale;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'normalize',
        function () {
          return normalize;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'opacify',
        function () {
          return curriedOpacify;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'padding',
        function () {
          return padding;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'parseToHsl',
        function () {
          return parseToHsl;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'parseToRgb',
        function () {
          return parseToRgb;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'position',
        function () {
          return position;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'radialGradient',
        function () {
          return radialGradient;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'readableColor',
        function () {
          return readableColor;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'rem', function () {
        return rem;
      });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'retinaImage',
        function () {
          return retinaImage;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'rgb', function () {
        return rgb;
      });
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'rgbToColorString',
        function () {
          return rgbToColorString;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'rgba',
        function () {
          return rgba;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'saturate',
        function () {
          return curriedSaturate;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setHue',
        function () {
          return curriedSetHue;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setLightness',
        function () {
          return curriedSetLightness;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'setSaturation',
        function () {
          return curriedSetSaturation;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'shade',
        function () {
          return curriedShade;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'size',
        function () {
          return size;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'stripUnit',
        function () {
          return stripUnit;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'textInputs',
        function () {
          return textInputs;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'timingFunctions',
        function () {
          return timingFunctions;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'tint',
        function () {
          return curriedTint;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'toColorString',
        function () {
          return toColorString;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'transitions',
        function () {
          return transitions;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'transparentize',
        function () {
          return curriedTransparentize;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'triangle',
        function () {
          return triangle;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'wordWrap',
        function () {
          return wordWrap;
        }
      );
      /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
      );
      /* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/assertThisInitialized */ './node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js'
      );
      /* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/inheritsLoose */ './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'
      );
      /* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/wrapNativeSuper */ './node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js'
      );
      /* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ './node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js'
      );

      function last() {
        var _ref;

        return (
          (_ref = arguments.length - 1),
          _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref]
        );
      }

      function negation(a) {
        return -a;
      }

      function addition(a, b) {
        return a + b;
      }

      function subtraction(a, b) {
        return a - b;
      }

      function multiplication(a, b) {
        return a * b;
      }

      function division(a, b) {
        return a / b;
      }

      function factorial(a) {
        if (a % 1 || !(+a >= 0)) return NaN;
        if (a > 170) return Infinity;
        else if (a === 0) return 1;
        else {
          return a * factorial(a - 1);
        }
      }

      function power(a, b) {
        return Math.pow(a, b);
      }

      function sqrt(a) {
        return Math.sqrt(a);
      }

      function max() {
        return Math.max.apply(Math, arguments);
      }

      function min() {
        return Math.min.apply(Math, arguments);
      }

      function comma() {
        return Array.of.apply(Array, arguments);
      }

      var defaultMathSymbols = {
        symbols: {
          '!': {
            postfix: {
              symbol: '!',
              f: factorial,
              notation: 'postfix',
              precedence: 6,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: '!',
            regSymbol: '!',
          },
          '^': {
            infix: {
              symbol: '^',
              f: power,
              notation: 'infix',
              precedence: 5,
              rightToLeft: 1,
              argCount: 2,
            },
            symbol: '^',
            regSymbol: '\\^',
          },
          '*': {
            infix: {
              symbol: '*',
              f: multiplication,
              notation: 'infix',
              precedence: 4,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: '*',
            regSymbol: '\\*',
          },
          '/': {
            infix: {
              symbol: '/',
              f: division,
              notation: 'infix',
              precedence: 4,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: '/',
            regSymbol: '/',
          },
          '+': {
            infix: {
              symbol: '+',
              f: addition,
              notation: 'infix',
              precedence: 2,
              rightToLeft: 0,
              argCount: 2,
            },
            prefix: {
              symbol: '+',
              f: last,
              notation: 'prefix',
              precedence: 3,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: '+',
            regSymbol: '\\+',
          },
          '-': {
            infix: {
              symbol: '-',
              f: subtraction,
              notation: 'infix',
              precedence: 2,
              rightToLeft: 0,
              argCount: 2,
            },
            prefix: {
              symbol: '-',
              f: negation,
              notation: 'prefix',
              precedence: 3,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: '-',
            regSymbol: '-',
          },
          ',': {
            infix: {
              symbol: ',',
              f: comma,
              notation: 'infix',
              precedence: 1,
              rightToLeft: 0,
              argCount: 2,
            },
            symbol: ',',
            regSymbol: ',',
          },
          '(': {
            prefix: {
              symbol: '(',
              f: last,
              notation: 'prefix',
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: '(',
            regSymbol: '\\(',
          },
          ')': {
            postfix: {
              symbol: ')',
              f: undefined,
              notation: 'postfix',
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: ')',
            regSymbol: '\\)',
          },
          min: {
            func: {
              symbol: 'min',
              f: min,
              notation: 'func',
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: 'min',
            regSymbol: 'min\\b',
          },
          max: {
            func: {
              symbol: 'max',
              f: max,
              notation: 'func',
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: 'max',
            regSymbol: 'max\\b',
          },
          sqrt: {
            func: {
              symbol: 'sqrt',
              f: sqrt,
              notation: 'func',
              precedence: 0,
              rightToLeft: 0,
              argCount: 1,
            },
            symbol: 'sqrt',
            regSymbol: 'sqrt\\b',
          },
        },
      };

      // based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

      /**
       * Parse errors.md and turn it into a simple hash of code: message
       * @private
       */
      var ERRORS = {
        '1':
          'Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n',
        '2':
          'Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n',
        '3':
          'Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n',
        '4': "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
        '5':
          "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
        '6':
          'Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n',
        '7':
          'Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n',
        '8':
          'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n',
        '9': 'Please provide a number of steps to the modularScale helper.\n\n',
        '10':
          'Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n',
        '11':
          'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',
        '12':
          'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',
        '13':
          'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',
        '14':
          'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
        '15':
          'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',
        '16': 'You must provide a template to this method.\n\n',
        '17': 'You passed an unsupported selector state to this method.\n\n',
        '18':
          'minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n',
        '19':
          'fromSize and toSize must be provided as stringified numbers with the same units.\n\n',
        '20':
          'expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n',
        '21':
          'expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
        '22':
          'expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n',
        '23': 'fontFace expects a name of a font-family.\n\n',
        '24': 'fontFace expects either the path to the font file(s) or a name of a local copy.\n\n',
        '25': 'fontFace expects localFonts to be an array.\n\n',
        '26': 'fontFace expects fileFormats to be an array.\n\n',
        '27': 'radialGradient requries at least 2 color-stops to properly render.\n\n',
        '28': 'Please supply a filename to retinaImage() as the first argument.\n\n',
        '29':
          "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
        '30':
          'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
        '31':
          'The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n',
        '32':
          "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
        '33':
          'The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n',
        '34':
          'borderRadius expects a radius value as a string or number as the second argument.\n\n',
        '35':
          'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
        '36': 'Property must be a string value.\n\n',
        '37': 'Syntax Error at %s.\n\n',
        '38': 'Formula contains a function that needs parentheses at %s.\n\n',
        '39': 'Formula is missing closing parenthesis at %s.\n\n',
        '40': 'Formula has too many closing parentheses at %s.\n\n',
        '41': 'All values in a formula must have the same unit or be unitless.\n\n',
        '42': 'Please provide a number of steps to the modularScale helper.\n\n',
        '43':
          'Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n',
        '44':
          'Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n',
        '45':
          'Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n',
        '46':
          'Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n',
        '47':
          'minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n',
        '48':
          'fromSize and toSize must be provided as stringified numbers with the same units.\n\n',
        '49':
          'Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n',
        '50':
          'Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n',
        '51':
          'Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n',
        '52': 'fontFace expects either the path to the font file(s) or a name of a local copy.\n\n',
        '53': 'fontFace expects localFonts to be an array.\n\n',
        '54': 'fontFace expects fileFormats to be an array.\n\n',
        '55': 'fontFace expects a name of a font-family.\n\n',
        '56': 'linearGradient requries at least 2 color-stops to properly render.\n\n',
        '57': 'radialGradient requries at least 2 color-stops to properly render.\n\n',
        '58': 'Please supply a filename to retinaImage() as the first argument.\n\n',
        '59':
          "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
        '60':
          'Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n',
        '61': 'Property must be a string value.\n\n',
        '62':
          'borderRadius expects a radius value as a string or number as the second argument.\n\n',
        '63':
          'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',
        '64':
          'The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n',
        '65':
          "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
        '66':
          'The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n',
        '67': 'You must provide a template to this method.\n\n',
        '68': 'You passed an unsupported selector state to this method.\n\n',
        '69':
          'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',
        '70':
          'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',
        '71': 'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',
        '72': 'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',
        '73': 'Please provide a valid CSS variable.\n\n',
        '74': 'CSS variable not found.\n',
      };
      /**
       * super basic version of sprintf
       * @private
       */

      function format() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var a = args[0];
        var b = [];
        var c;

        for (c = 1; c < args.length; c += 1) {
          b.push(args[c]);
        }

        b.forEach(function (d) {
          a = a.replace(/%[a-z]/, d);
        });
        return a;
      }
      /**
       * Create an error file out of errors.md for development and a simple web link to the full errors
       * in production mode.
       * @private
       */

      var PolishedError = /*#__PURE__*/ (function (_Error) {
        Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__['default'])(
          PolishedError,
          _Error
        );

        function PolishedError(code) {
          var _this;

          if (false) {
          } else {
            for (
              var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1;
              _key2 < _len2;
              _key2++
            ) {
              args[_key2 - 1] = arguments[_key2];
            }

            _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
          }

          return Object(
            _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__['default']
          )(_this);
        }

        return PolishedError;
      })(
        /*#__PURE__*/ Object(
          _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__['default']
        )(Error)
      );

      var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g; // Merges additional math functionality into the defaults.

      function mergeSymbolMaps(additionalSymbols) {
        var symbolMap = {};
        symbolMap.symbols = additionalSymbols
          ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
              {},
              defaultMathSymbols.symbols,
              {},
              additionalSymbols.symbols
            )
          : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
              {},
              defaultMathSymbols.symbols
            );
        return symbolMap;
      }

      function exec(operators, values) {
        var _ref;

        var op = operators.pop();
        values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
        return op.precedence;
      }

      function calculate(expression, additionalSymbols) {
        var symbolMap = mergeSymbolMaps(additionalSymbols);
        var match;
        var operators = [symbolMap.symbols['('].prefix];
        var values = [];
        var pattern = new RegExp( // Pattern for numbers
          '\\d+(?:\\.\\d+)?|' + // ...and patterns for individual operators/function names
            Object.keys(symbolMap.symbols)
              .map(function (key) {
                return symbolMap.symbols[key];
              }) // longer symbols should be listed first
              // $FlowFixMe
              .sort(function (a, b) {
                return b.symbol.length - a.symbol.length;
              }) // $FlowFixMe
              .map(function (val) {
                return val.regSymbol;
              })
              .join('|') +
            '|(\\S)',
          'g'
        );
        pattern.lastIndex = 0; // Reset regular expression object

        var afterValue = false;

        do {
          match = pattern.exec(expression);

          var _ref2 = match || [')', undefined],
            token = _ref2[0],
            bad = _ref2[1];

          var notNumber = symbolMap.symbols[token];
          var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
          var notAfterValue = !notNumber || (!notNumber.postfix && !notNumber.infix); // Check for syntax errors:

          if (bad || (afterValue ? notAfterValue : notNewValue)) {
            throw new PolishedError(37, match ? match.index : expression.length, expression);
          }

          if (afterValue) {
            // We either have an infix or postfix operator (they should be mutually exclusive)
            var curr = notNumber.postfix || notNumber.infix;

            do {
              var prev = operators[operators.length - 1];
              if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break; // Apply previous operator, since it has precedence over current one
            } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function

            afterValue = curr.notation === 'postfix';

            if (curr.symbol !== ')') {
              operators.push(curr); // Postfix always has precedence over any operator that follows after it

              if (afterValue) exec(operators, values);
            }
          } else if (notNumber) {
            // prefix operator or function
            operators.push(notNumber.prefix || notNumber.func);

            if (notNumber.func) {
              // Require an opening parenthesis
              match = pattern.exec(expression);

              if (!match || match[0] !== '(') {
                throw new PolishedError(38, match ? match.index : expression.length, expression);
              }
            }
          } else {
            // number
            values.push(+token);
            afterValue = true;
          }
        } while (match && operators.length);

        if (operators.length) {
          throw new PolishedError(39, match ? match.index : expression.length, expression);
        } else if (match) {
          throw new PolishedError(40, match ? match.index : expression.length, expression);
        } else {
          return values.pop();
        }
      }

      function reverseString(str) {
        return str.split('').reverse().join('');
      }
      /**
       * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
       *
       *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
       *
       * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
       * @example
       * // Styles as object usage
       * const styles = {
       *   fontSize: math('12rem + 8rem'),
       *   fontSize: math('(12px + 2px) * 3'),
       *   fontSize: math('3px^2 + sqrt(4)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   fontSize: ${math('12rem + 8rem')};
       *   fontSize: ${math('(12px + 2px) * 3')};
       *   fontSize: ${math('3px^2 + sqrt(4)')};
       * `
       *
       * // CSS as JS Output
       *
       * div: {
       *   fontSize: '20rem',
       *   fontSize: '42px',
       *   fontSize: '11px',
       * }
       */

      function math(formula, additionalSymbols) {
        var reversedFormula = reverseString(formula);
        var formulaMatch = reversedFormula.match(unitRegExp); // Check that all units are the same

        if (
          formulaMatch &&
          !formulaMatch.every(function (unit) {
            return unit === formulaMatch[0];
          })
        ) {
          throw new PolishedError(41);
        }

        var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
        return (
          '' +
          calculate(cleanFormula, additionalSymbols) +
          (formulaMatch ? reverseString(formulaMatch[0]) : '')
        );
      }

      var cssVariableRegex = /--[\S]*/g;
      /**
       * Fetches the value of a passed CSS Variable.
       *
       * Passthrough can be enabled (off by default) for when you are unsure of the input and want non-variable values to be returned instead of an error.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   'background': cssVar('--background-color'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${cssVar('--background-color')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   'background': 'red'
       * }
       */

      function cssVar(cssVariable, passThrough) {
        if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
          if (passThrough) return cssVariable;
          throw new PolishedError(73);
        }

        var variableValue;
        /* eslint-disable */

        /* istanbul ignore next */

        if (typeof document !== 'undefined' && document.documentElement !== null) {
          variableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
        }
        /* eslint-enable */

        if (variableValue) {
          return variableValue.trim();
        } else {
          throw new PolishedError(74);
        }
      }

      // @private
      function capitalizeString(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

      var positionMap = ['Top', 'Right', 'Bottom', 'Left'];

      function generateProperty(property, position) {
        if (!property) return position.toLowerCase();
        var splitProperty = property.split('-');

        if (splitProperty.length > 1) {
          splitProperty.splice(1, 0, position);
          return splitProperty.reduce(function (acc, val) {
            return '' + acc + capitalizeString(val);
          });
        }

        var joinedProperty = property.replace(/([a-z])([A-Z])/g, '$1' + position + '$2');
        return property === joinedProperty ? '' + property + position : joinedProperty;
      }

      function generateStyles(property, valuesWithDefaults) {
        var styles = {};

        for (var i = 0; i < valuesWithDefaults.length; i += 1) {
          if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
            styles[generateProperty(property, positionMap[i])] = valuesWithDefaults[i];
          }
        }

        return styles;
      }
      /**
       * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'paddingTop': '12px',
       *   'paddingRight': '24px',
       *   'paddingBottom': '36px',
       *   'paddingLeft': '48px'
       * }
       */

      function directionalProperty(property) {
        for (
          var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
          _key < _len;
          _key++
        ) {
          values[_key - 1] = arguments[_key];
        }

        //  prettier-ignore
        var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
        var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
        return generateStyles(property, valuesWithDefaults);
      }

      /**
       * Check if a string ends with something
       * @private
       */
      function endsWith(string, suffix) {
        return string.substr(-suffix.length) === suffix;
      }

      var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
      /**
       * Returns a given CSS value minus its unit of measure.
       *
       * @deprecated - stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   '--dimension': stripUnit('100px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   --dimension: ${stripUnit('100px')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   '--dimension': 100
       * }
       */

      function stripUnit(value, unitReturn) {
        if (typeof value !== 'string') return unitReturn ? [value, undefined] : value;
        var matchedValue = value.match(cssRegex);

        if (unitReturn) {
          // eslint-disable-next-line no-console
          console.warn(
            "stripUnit's unitReturn functionality has been marked for deprecation in polished 4.0. It's functionality has been been moved to getValueAndUnit."
          );
          if (matchedValue) return [parseFloat(value), matchedValue[2]];
          return [value, undefined];
        }

        if (matchedValue) return parseFloat(value);
        return value;
      }

      /**
       * Factory function that creates pixel-to-x converters
       * @private
       */

      var pxtoFactory = function pxtoFactory(to) {
        return function (pxval, base) {
          if (base === void 0) {
            base = '16px';
          }

          var newPxval = pxval;
          var newBase = base;

          if (typeof pxval === 'string') {
            if (!endsWith(pxval, 'px')) {
              throw new PolishedError(69, to, pxval);
            }

            newPxval = stripUnit(pxval);
          }

          if (typeof base === 'string') {
            if (!endsWith(base, 'px')) {
              throw new PolishedError(70, to, base);
            }

            newBase = stripUnit(base);
          }

          if (typeof newPxval === 'string') {
            throw new PolishedError(71, pxval, to);
          }

          if (typeof newBase === 'string') {
            throw new PolishedError(72, base, to);
          }

          return '' + newPxval / newBase + to;
        };
      };

      /**
       * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
       * second argument to the function.
       * @function
       * @param {string|number} pxval
       * @param {string|number} [base='16px']
       * @example
       * // Styles as object usage
       * const styles = {
       *   'height': em('16px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   height: ${em('16px')}
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   'height': '1em'
       * }
       */

      var em = /*#__PURE__*/ pxtoFactory('em');

      var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
      /**
       * Returns a given CSS value and its unit as elements of an array.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   '--dimension': getValueAndUnit('100px')[0],
       *   '--unit': getValueAndUnit('100px')[1],
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   --dimension: ${getValueAndUnit('100px')[0]};
       *   --unit: ${getValueAndUnit('100px')[1]};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   '--dimension': 100,
       *   '--unit': 'px',
       * }
       */

      function getValueAndUnit(value) {
        if (typeof value !== 'string') return [value, ''];
        var matchedValue = value.match(cssRegex$1);
        if (matchedValue) return [parseFloat(value), matchedValue[2]];
        return [value, undefined];
      }

      var ratioNames = {
        minorSecond: 1.067,
        majorSecond: 1.125,
        minorThird: 1.2,
        majorThird: 1.25,
        perfectFourth: 1.333,
        augFourth: 1.414,
        perfectFifth: 1.5,
        minorSixth: 1.6,
        goldenSection: 1.618,
        majorSixth: 1.667,
        minorSeventh: 1.778,
        majorSeventh: 1.875,
        octave: 2,
        majorTenth: 2.5,
        majorEleventh: 2.667,
        majorTwelfth: 3,
        doubleOctave: 4,
      };

      function getRatio(ratioName) {
        return ratioNames[ratioName];
      }
      /**
       * Establish consistent measurements and spacial relationships throughout your projects by incrementing an em or rem value up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
       * @example
       * // Styles as object usage
       * const styles = {
       *    // Increment two steps up the default scale
       *   'fontSize': modularScale(2)
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *    // Increment two steps up the default scale
       *   fontSize: ${modularScale(2)}
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   'fontSize': '1.77689em'
       * }
       */

      function modularScale(steps, base, ratio) {
        if (base === void 0) {
          base = '1em';
        }

        if (ratio === void 0) {
          ratio = 1.333;
        }

        if (typeof steps !== 'number') {
          throw new PolishedError(42);
        }

        if (typeof ratio === 'string' && !ratioNames[ratio]) {
          throw new PolishedError(43);
        }

        var _ref = typeof base === 'string' ? getValueAndUnit(base) : [base, ''],
          realBase = _ref[0],
          unit = _ref[1];

        var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

        if (typeof realBase === 'string') {
          throw new PolishedError(44, base);
        }

        return '' + realBase * Math.pow(realRatio, steps) + (unit || '');
      }

      /**
       * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
       * second argument to the function.
       * @function
       * @param {string|number} pxval
       * @param {string|number} [base='16px']
       * @example
       * // Styles as object usage
       * const styles = {
       *   'height': rem('16px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   height: ${rem('16px')}
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   'height': '1rem'
       * }
       */

      var rem = /*#__PURE__*/ pxtoFactory('rem');

      /**
       * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   fontSize: between('20px', '100px', '400px', '1000px'),
       *   fontSize: between('20px', '100px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   fontSize: ${between('20px', '100px', '400px', '1000px')};
       *   fontSize: ${between('20px', '100px')}
       * `
       *
       * // CSS as JS Output
       *
       * h1: {
       *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
       *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
       * }
       */

      function between(fromSize, toSize, minScreen, maxScreen) {
        if (minScreen === void 0) {
          minScreen = '320px';
        }

        if (maxScreen === void 0) {
          maxScreen = '1200px';
        }

        var _getValueAndUnit = getValueAndUnit(fromSize),
          unitlessFromSize = _getValueAndUnit[0],
          fromSizeUnit = _getValueAndUnit[1];

        var _getValueAndUnit2 = getValueAndUnit(toSize),
          unitlessToSize = _getValueAndUnit2[0],
          toSizeUnit = _getValueAndUnit2[1];

        var _getValueAndUnit3 = getValueAndUnit(minScreen),
          unitlessMinScreen = _getValueAndUnit3[0],
          minScreenUnit = _getValueAndUnit3[1];

        var _getValueAndUnit4 = getValueAndUnit(maxScreen),
          unitlessMaxScreen = _getValueAndUnit4[0],
          maxScreenUnit = _getValueAndUnit4[1];

        if (
          typeof unitlessMinScreen !== 'number' ||
          typeof unitlessMaxScreen !== 'number' ||
          !minScreenUnit ||
          !maxScreenUnit ||
          minScreenUnit !== maxScreenUnit
        ) {
          throw new PolishedError(47);
        }

        if (
          typeof unitlessFromSize !== 'number' ||
          typeof unitlessToSize !== 'number' ||
          fromSizeUnit !== toSizeUnit
        ) {
          throw new PolishedError(48);
        }

        var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
        var base = unitlessToSize - slope * unitlessMaxScreen;
        return (
          'calc(' +
          base.toFixed(2) +
          (fromSizeUnit || '') +
          ' + ' +
          (100 * slope).toFixed(2) +
          'vw)'
        );
      }

      /**
       * CSS to contain a float (credit to CSSMojo).
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *    ...clearFix(),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${clearFix()}
       * `
       *
       * // CSS as JS Output
       *
       * '&::after': {
       *   'clear': 'both',
       *   'content': '""',
       *   'display': 'table'
       * }
       */
      function clearFix(parent) {
        var _ref;

        if (parent === void 0) {
          parent = '&';
        }

        var pseudoSelector = parent + '::after';
        return (
          (_ref = {}),
          (_ref[pseudoSelector] = {
            clear: 'both',
            content: '""',
            display: 'table',
          }),
          _ref
        );
      }

      /**
       * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...cover()
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${cover()}
       * `
       *
       * // CSS as JS Output
       *
       * div: {
       *   'position': 'absolute',
       *   'top': '0',
       *   'right: '0',
       *   'bottom': '0',
       *   'left: '0'
       * }
       */
      function cover(offset) {
        if (offset === void 0) {
          offset = 0;
        }

        return {
          position: 'absolute',
          top: offset,
          right: offset,
          bottom: offset,
          left: offset,
        };
      }

      /**
       * CSS to represent truncated text with an ellipsis.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...ellipsis('250px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${ellipsis('250px')}
       * `
       *
       * // CSS as JS Output
       *
       * div: {
       *   'display': 'inline-block',
       *   'maxWidth': '250px',
       *   'overflow': 'hidden',
       *   'textOverflow': 'ellipsis',
       *   'whiteSpace': 'nowrap',
       *   'wordWrap': 'normal'
       * }
       */
      function ellipsis(width) {
        if (width === void 0) {
          width = '100%';
        }

        return {
          display: 'inline-block',
          maxWidth: width,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
        };
      }

      function _createForOfIteratorHelperLoose(o) {
        var i = 0;
        if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (o = _unsupportedIterableToArray(o)))
            return function () {
              if (i >= o.length) return { done: true };
              return { done: false, value: o[i++] };
            };
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        i = o[Symbol.iterator]();
        return i.next.bind(i);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(n);
        if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }

      /**
       * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...fluidRange(
       *    {
       *        prop: 'padding',
       *        fromSize: '20px',
       *        toSize: '100px',
       *      },
       *      '400px',
       *      '1000px',
       *    )
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${fluidRange(
       *      {
       *        prop: 'padding',
       *        fromSize: '20px',
       *        toSize: '100px',
       *      },
       *      '400px',
       *      '1000px',
       *    )}
       * `
       *
       * // CSS as JS Output
       *
       * div: {
       *   "@media (min-width: 1000px)": Object {
       *     "padding": "100px",
       *   },
       *   "@media (min-width: 400px)": Object {
       *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
       *   },
       *   "padding": "20px",
       * }
       */
      function fluidRange(cssProp, minScreen, maxScreen) {
        if (minScreen === void 0) {
          minScreen = '320px';
        }

        if (maxScreen === void 0) {
          maxScreen = '1200px';
        }

        if ((!Array.isArray(cssProp) && typeof cssProp !== 'object') || cssProp === null) {
          throw new PolishedError(49);
        }

        if (Array.isArray(cssProp)) {
          var mediaQueries = {};
          var fallbacks = {};

          for (
            var _iterator = _createForOfIteratorHelperLoose(cssProp), _step;
            !(_step = _iterator()).done;

          ) {
            var _extends2, _extends3;

            var obj = _step.value;

            if (!obj.prop || !obj.fromSize || !obj.toSize) {
              throw new PolishedError(50);
            }

            fallbacks[obj.prop] = obj.fromSize;
            mediaQueries['@media (min-width: ' + minScreen + ')'] = Object(
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default']
            )(
              {},
              mediaQueries['@media (min-width: ' + minScreen + ')'],
              ((_extends2 = {}),
              (_extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen)),
              _extends2)
            );
            mediaQueries['@media (min-width: ' + maxScreen + ')'] = Object(
              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default']
            )(
              {},
              mediaQueries['@media (min-width: ' + maxScreen + ')'],
              ((_extends3 = {}), (_extends3[obj.prop] = obj.toSize), _extends3)
            );
          }

          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
            {},
            fallbacks,
            {},
            mediaQueries
          );
        } else {
          var _ref, _ref2, _ref3;

          if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
            throw new PolishedError(51);
          }

          return (
            (_ref3 = {}),
            (_ref3[cssProp.prop] = cssProp.fromSize),
            (_ref3['@media (min-width: ' + minScreen + ')'] =
              ((_ref = {}),
              (_ref[cssProp.prop] = between(
                cssProp.fromSize,
                cssProp.toSize,
                minScreen,
                maxScreen
              )),
              _ref)),
            (_ref3['@media (min-width: ' + maxScreen + ')'] =
              ((_ref2 = {}), (_ref2[cssProp.prop] = cssProp.toSize), _ref2)),
            _ref3
          );
        }
      }

      var dataURIRegex = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
      var formatHintMap = {
        woff: 'woff',
        woff2: 'woff2',
        ttf: 'truetype',
        otf: 'opentype',
        eot: 'embedded-opentype',
        svg: 'svg',
        svgz: 'svg',
      };

      function generateFormatHint(format, formatHint) {
        if (!formatHint) return '';
        return ' format("' + formatHintMap[format] + '")';
      }

      function isDataURI(fontFilePath) {
        return !!fontFilePath.match(dataURIRegex);
      }

      function generateFileReferences(fontFilePath, fileFormats, formatHint) {
        if (isDataURI(fontFilePath)) {
          return 'url("' + fontFilePath + '")' + generateFormatHint(fileFormats[0], formatHint);
        }

        var fileFontReferences = fileFormats.map(function (format) {
          return (
            'url("' + fontFilePath + '.' + format + '")' + generateFormatHint(format, formatHint)
          );
        });
        return fileFontReferences.join(', ');
      }

      function generateLocalReferences(localFonts) {
        var localFontReferences = localFonts.map(function (font) {
          return 'local("' + font + '")';
        });
        return localFontReferences.join(', ');
      }

      function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
        var fontReferences = [];
        if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

        if (fontFilePath) {
          fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
        }

        return fontReferences.join(', ');
      }
      /**
       * CSS for a @font-face declaration.
       *
       * @example
       * // Styles as object basic usage
       * const styles = {
       *    ...fontFace({
       *      'fontFamily': 'Sans-Pro',
       *      'fontFilePath': 'path/to/file'
       *    })
       * }
       *
       * // styled-components basic usage
       * const GlobalStyle = createGlobalStyle`${
       *   fontFace({
       *     'fontFamily': 'Sans-Pro',
       *     'fontFilePath': 'path/to/file'
       *   }
       * )}`
       *
       * // CSS as JS Output
       *
       * '@font-face': {
       *   'fontFamily': 'Sans-Pro',
       *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
       * }
       */

      function fontFace(_ref) {
        var fontFamily = _ref.fontFamily,
          fontFilePath = _ref.fontFilePath,
          fontStretch = _ref.fontStretch,
          fontStyle = _ref.fontStyle,
          fontVariant = _ref.fontVariant,
          fontWeight = _ref.fontWeight,
          _ref$fileFormats = _ref.fileFormats,
          fileFormats =
            _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
          _ref$formatHint = _ref.formatHint,
          formatHint = _ref$formatHint === void 0 ? false : _ref$formatHint,
          localFonts = _ref.localFonts,
          unicodeRange = _ref.unicodeRange,
          fontDisplay = _ref.fontDisplay,
          fontVariationSettings = _ref.fontVariationSettings,
          fontFeatureSettings = _ref.fontFeatureSettings;
        // Error Handling
        if (!fontFamily) throw new PolishedError(55);

        if (!fontFilePath && !localFonts) {
          throw new PolishedError(52);
        }

        if (localFonts && !Array.isArray(localFonts)) {
          throw new PolishedError(53);
        }

        if (!Array.isArray(fileFormats)) {
          throw new PolishedError(54);
        }

        var fontFaceDeclaration = {
          '@font-face': {
            fontFamily: fontFamily,
            src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
            unicodeRange: unicodeRange,
            fontStretch: fontStretch,
            fontStyle: fontStyle,
            fontVariant: fontVariant,
            fontWeight: fontWeight,
            fontDisplay: fontDisplay,
            fontVariationSettings: fontVariationSettings,
            fontFeatureSettings: fontFeatureSettings,
          },
        }; // Removes undefined fields for cleaner css object.

        return JSON.parse(JSON.stringify(fontFaceDeclaration));
      }

      /**
       * CSS to hide text to show a background image in a SEO-friendly way.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   'backgroundImage': 'url(logo.png)',
       *   ...hideText(),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   backgroundImage: url(logo.png);
       *   ${hideText()};
       * `
       *
       * // CSS as JS Output
       *
       * 'div': {
       *   'backgroundImage': 'url(logo.png)',
       *   'textIndent': '101%',
       *   'overflow': 'hidden',
       *   'whiteSpace': 'nowrap',
       * }
       */
      function hideText() {
        return {
          textIndent: '101%',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        };
      }

      /**
       * CSS to hide content visually but remain accessible to screen readers.
       * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...hideVisually(),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${hideVisually()};
       * `
       *
       * // CSS as JS Output
       *
       * 'div': {
       *   'border': '0',
       *   'clip': 'rect(0 0 0 0)',
       *   'height': '1px',
       *   'margin': '-1px',
       *   'overflow': 'hidden',
       *   'padding': '0',
       *   'position': 'absolute',
       *   'whiteSpace': 'nowrap',
       *   'width': '1px',
       * }
       */
      function hideVisually() {
        return {
          border: '0',
          clip: 'rect(0 0 0 0)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          padding: '0',
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px',
        };
      }

      /**
       * Generates a media query to target HiDPI devices.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *  [hiDPI(1.5)]: {
       *    width: 200px;
       *  }
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${hiDPI(1.5)} {
       *     width: 200px;
       *   }
       * `
       *
       * // CSS as JS Output
       *
       * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
       *  only screen and (min--moz-device-pixel-ratio: 1.5),
       *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
       *  only screen and (min-resolution: 144dpi),
       *  only screen and (min-resolution: 1.5dppx)': {
       *   'width': '200px',
       * }
       */
      function hiDPI(ratio) {
        if (ratio === void 0) {
          ratio = 1.3;
        }

        return (
          '\n    @media only screen and (-webkit-min-device-pixel-ratio: ' +
          ratio +
          '),\n    only screen and (min--moz-device-pixel-ratio: ' +
          ratio +
          '),\n    only screen and (-o-min-device-pixel-ratio: ' +
          ratio +
          '/1),\n    only screen and (min-resolution: ' +
          Math.round(ratio * 96) +
          'dpi),\n    only screen and (min-resolution: ' +
          ratio +
          'dppx)\n  '
        );
      }

      function constructGradientValue(literals) {
        var template = '';

        for (
          var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
          _key < _len;
          _key++
        ) {
          substitutions[_key - 1] = arguments[_key];
        }

        for (var i = 0; i < literals.length; i += 1) {
          template += literals[i];

          if (i === substitutions.length - 1 && substitutions[i]) {
            var definedValues = substitutions.filter(function (substitute) {
              return !!substitute;
            }); // Adds leading coma if properties preceed color-stops

            if (definedValues.length > 1) {
              template = template.slice(0, -1);
              template += ', ' + substitutions[i]; // No trailing space if color-stops is the only param provided
            } else if (definedValues.length === 1) {
              template += '' + substitutions[i];
            }
          } else if (substitutions[i]) {
            template += substitutions[i] + ' ';
          }
        }

        return template.trim();
      }

      function _templateObject() {
        var data = Object(
          _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__[
            'default'
          ]
        )(['linear-gradient(', '', ')']);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      /**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
      function linearGradient(_ref) {
        var colorStops = _ref.colorStops,
          fallback = _ref.fallback,
          _ref$toDirection = _ref.toDirection,
          toDirection = _ref$toDirection === void 0 ? '' : _ref$toDirection;

        if (!colorStops || colorStops.length < 2) {
          throw new PolishedError(56);
        }

        return {
          backgroundColor: fallback || colorStops[0].split(' ')[0],
          backgroundImage: constructGradientValue(
            _templateObject(),
            toDirection,
            colorStops.join(', ')
          ),
        };
      }

      /**
       * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *    ...normalize(),
       * }
       *
       * // styled-components usage
       * const GlobalStyle = createGlobalStyle`${normalize()}`
       *
       * // CSS as JS Output
       *
       * html {
       *   lineHeight: 1.15,
       *   textSizeAdjust: 100%,
       * } ...
       */
      function normalize() {
        var _ref;

        return [
          ((_ref = {
            html: {
              lineHeight: '1.15',
              textSizeAdjust: '100%',
            },
            body: {
              margin: '0',
            },
            main: {
              display: 'block',
            },
            h1: {
              fontSize: '2em',
              margin: '0.67em 0',
            },
            hr: {
              boxSizing: 'content-box',
              height: '0',
              overflow: 'visible',
            },
            pre: {
              fontFamily: 'monospace, monospace',
              fontSize: '1em',
            },
            a: {
              backgroundColor: 'transparent',
            },
            'abbr[title]': {
              borderBottom: 'none',
              textDecoration: 'underline',
            },
          }),
          (_ref['b,\n    strong'] = {
            fontWeight: 'bolder',
          }),
          (_ref['code,\n    kbd,\n    samp'] = {
            fontFamily: 'monospace, monospace',
            fontSize: '1em',
          }),
          (_ref.small = {
            fontSize: '80%',
          }),
          (_ref['sub,\n    sup'] = {
            fontSize: '75%',
            lineHeight: '0',
            position: 'relative',
            verticalAlign: 'baseline',
          }),
          (_ref.sub = {
            bottom: '-0.25em',
          }),
          (_ref.sup = {
            top: '-0.5em',
          }),
          (_ref.img = {
            borderStyle: 'none',
          }),
          (_ref['button,\n    input,\n    optgroup,\n    select,\n    textarea'] = {
            fontFamily: 'inherit',
            fontSize: '100%',
            lineHeight: '1.15',
            margin: '0',
          }),
          (_ref['button,\n    input'] = {
            overflow: 'visible',
          }),
          (_ref['button,\n    select'] = {
            textTransform: 'none',
          }),
          (_ref['button,\n    html [type="button"],\n    [type="reset"],\n    [type="submit"]'] = {
            WebkitAppearance: 'button',
          }),
          (_ref[
            'button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner'
          ] = {
            borderStyle: 'none',
            padding: '0',
          }),
          (_ref[
            'button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring'
          ] = {
            outline: '1px dotted ButtonText',
          }),
          (_ref.fieldset = {
            padding: '0.35em 0.625em 0.75em',
          }),
          (_ref.legend = {
            boxSizing: 'border-box',
            color: 'inherit',
            display: 'table',
            maxWidth: '100%',
            padding: '0',
            whiteSpace: 'normal',
          }),
          (_ref.progress = {
            verticalAlign: 'baseline',
          }),
          (_ref.textarea = {
            overflow: 'auto',
          }),
          (_ref['[type="checkbox"],\n    [type="radio"]'] = {
            boxSizing: 'border-box',
            padding: '0',
          }),
          (_ref[
            '[type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button'
          ] = {
            height: 'auto',
          }),
          (_ref['[type="search"]'] = {
            WebkitAppearance: 'textfield',
            outlineOffset: '-2px',
          }),
          (_ref['[type="search"]::-webkit-search-decoration'] = {
            WebkitAppearance: 'none',
          }),
          (_ref['::-webkit-file-upload-button'] = {
            WebkitAppearance: 'button',
            font: 'inherit',
          }),
          (_ref.details = {
            display: 'block',
          }),
          (_ref.summary = {
            display: 'list-item',
          }),
          (_ref.template = {
            display: 'none',
          }),
          (_ref['[hidden]'] = {
            display: 'none',
          }),
          _ref),
          {
            'abbr[title]': {
              textDecoration: 'underline dotted',
            },
          },
        ];
      }

      function _templateObject$1() {
        var data = Object(
          _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__[
            'default'
          ]
        )(['radial-gradient(', '', '', '', ')']);

        _templateObject$1 = function _templateObject() {
          return data;
        };

        return data;
      }

      /**
       * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...radialGradient({
       *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
       *     extent: 'farthest-corner at 45px 45px',
       *     position: 'center',
       *     shape: 'ellipse',
       *   })
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${radialGradient({
       *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
       *     extent: 'farthest-corner at 45px 45px',
       *     position: 'center',
       *     shape: 'ellipse',
       *   })}
       *`
       *
       * // CSS as JS Output
       *
       * div: {
       *   'backgroundColor': '#00FFFF',
       *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
       * }
       */
      function radialGradient(_ref) {
        var colorStops = _ref.colorStops,
          _ref$extent = _ref.extent,
          extent = _ref$extent === void 0 ? '' : _ref$extent,
          fallback = _ref.fallback,
          _ref$position = _ref.position,
          position = _ref$position === void 0 ? '' : _ref$position,
          _ref$shape = _ref.shape,
          shape = _ref$shape === void 0 ? '' : _ref$shape;

        if (!colorStops || colorStops.length < 2) {
          throw new PolishedError(57);
        }

        return {
          backgroundColor: fallback || colorStops[0].split(' ')[0],
          backgroundImage: constructGradientValue(
            _templateObject$1(),
            position,
            shape,
            extent,
            colorStops.join(', ')
          ),
        };
      }

      /**
       * A helper to generate a retina background image and non-retina
       * background image. The retina background image will output to a HiDPI media query. The mixin uses
       * a _2x.png filename suffix by default.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *  ...retinaImage('my-img')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${retinaImage('my-img')}
       * `
       *
       * // CSS as JS Output
       * div {
       *   backgroundImage: 'url(my-img.png)',
       *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
       *    only screen and (min--moz-device-pixel-ratio: 1.3),
       *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
       *    only screen and (min-resolution: 144dpi),
       *    only screen and (min-resolution: 1.5dppx)': {
       *     backgroundImage: 'url(my-img_2x.png)',
       *   }
       * }
       */
      function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
        var _ref;

        if (extension === void 0) {
          extension = 'png';
        }

        if (retinaSuffix === void 0) {
          retinaSuffix = '_2x';
        }

        if (!filename) {
          throw new PolishedError(58);
        } // Replace the dot at the beginning of the passed extension if one exists

        var ext = extension.replace(/^\./, '');
        var rFilename = retinaFilename
          ? retinaFilename + '.' + ext
          : '' + filename + retinaSuffix + '.' + ext;
        return (
          (_ref = {
            backgroundImage: 'url(' + filename + '.' + ext + ')',
          }),
          (_ref[hiDPI()] = Object(
            _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default']
          )(
            {
              backgroundImage: 'url(' + rFilename + ')',
            },
            backgroundSize
              ? {
                  backgroundSize: backgroundSize,
                }
              : {}
          )),
          _ref
        );
      }

      /* eslint-disable key-spacing */
      var functionsMap = {
        easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
        easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
        easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
        easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
        easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
        easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
        easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
        easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
        easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
        easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
        easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
        easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
        easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
        easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
        easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
        easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
        easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
        easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
        easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
        easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
        easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
        easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
        easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)',
      };
      /* eslint-enable key-spacing */

      function getTimingFunction(functionName) {
        return functionsMap[functionName];
      }
      /**
       * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   'transitionTimingFunction': timingFunctions('easeInQuad')
       * }
       *
       * // styled-components usage
       *  const div = styled.div`
       *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
       * `
       *
       * // CSS as JS Output
       *
       * 'div': {
       *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
       * }
       */

      function timingFunctions(timingFunction) {
        return getTimingFunction(timingFunction);
      }

      var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
        var fullWidth = '' + width[0] + (width[1] || '');
        var halfWidth = '' + width[0] / 2 + (width[1] || '');
        var fullHeight = '' + height[0] + (height[1] || '');
        var halfHeight = '' + height[0] / 2 + (height[1] || '');

        switch (pointingDirection) {
          case 'top':
            return '0 ' + halfWidth + ' ' + fullHeight + ' ' + halfWidth;

          case 'topLeft':
            return fullWidth + ' ' + fullHeight + ' 0 0';

          case 'left':
            return halfHeight + ' ' + fullWidth + ' ' + halfHeight + ' 0';

          case 'bottomLeft':
            return fullWidth + ' 0 0 ' + fullHeight;

          case 'bottom':
            return fullHeight + ' ' + halfWidth + ' 0 ' + halfWidth;

          case 'bottomRight':
            return '0 0 ' + fullWidth + ' ' + fullHeight;

          case 'right':
            return halfHeight + ' 0 ' + halfHeight + ' ' + fullWidth;

          case 'topRight':
          default:
            return '0 ' + fullWidth + ' ' + fullHeight + ' 0';
        }
      };

      var getBorderColor = function getBorderColor(
        pointingDirection,
        foregroundColor,
        backgroundColor
      ) {
        switch (pointingDirection) {
          case 'top':
          case 'bottomRight':
            return (
              backgroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              foregroundColor +
              ' ' +
              backgroundColor
            );

          case 'right':
          case 'bottomLeft':
            return (
              backgroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              foregroundColor
            );

          case 'bottom':
          case 'topLeft':
            return (
              foregroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              backgroundColor
            );

          case 'left':
          case 'topRight':
            return (
              backgroundColor +
              ' ' +
              foregroundColor +
              ' ' +
              backgroundColor +
              ' ' +
              backgroundColor
            );

          default:
            throw new PolishedError(59);
        }
      };
      /**
       * CSS to represent triangle with any pointing direction with an optional background color.
       *
       * @example
       * // Styles as object usage
       *
       * const styles = {
       *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
       * }
       *
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
       *
       *
       * // CSS as JS Output
       *
       * div: {
       *  'borderColor': 'transparent transparent transparent red',
       *  'borderStyle': 'solid',
       *  'borderWidth': '50px 0 50px 100px',
       *  'height': '0',
       *  'width': '0',
       * }
       */

      function triangle(_ref) {
        var pointingDirection = _ref.pointingDirection,
          height = _ref.height,
          width = _ref.width,
          foregroundColor = _ref.foregroundColor,
          _ref$backgroundColor = _ref.backgroundColor,
          backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
        var widthAndUnit = getValueAndUnit(width);
        var heightAndUnit = getValueAndUnit(height);

        if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
          throw new PolishedError(60);
        }

        return {
          width: '0',
          height: '0',
          borderColor: getBorderColor(pointingDirection, foregroundColor, backgroundColor),
          borderStyle: 'solid',
          borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit),
        };
      }

      /**
       * Provides an easy way to change the `wordWrap` property.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...wordWrap('break-word')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${wordWrap('break-word')}
       * `
       *
       * // CSS as JS Output
       *
       * const styles = {
       *   overflowWrap: 'break-word',
       *   wordWrap: 'break-word',
       *   wordBreak: 'break-all',
       * }
       */
      function wordWrap(wrap) {
        if (wrap === void 0) {
          wrap = 'break-word';
        }

        var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
        return {
          overflowWrap: wrap,
          wordWrap: wrap,
          wordBreak: wordBreak,
        };
      }

      function colorToInt(color) {
        return Math.round(color * 255);
      }

      function convertToInt(red, green, blue) {
        return colorToInt(red) + ',' + colorToInt(green) + ',' + colorToInt(blue);
      }

      function hslToRgb(hue, saturation, lightness, convert) {
        if (convert === void 0) {
          convert = convertToInt;
        }

        if (saturation === 0) {
          // achromatic
          return convert(lightness, lightness, lightness);
        } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV

        var huePrime = (((hue % 360) + 360) % 360) / 60;
        var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));
        var red = 0;
        var green = 0;
        var blue = 0;

        if (huePrime >= 0 && huePrime < 1) {
          red = chroma;
          green = secondComponent;
        } else if (huePrime >= 1 && huePrime < 2) {
          red = secondComponent;
          green = chroma;
        } else if (huePrime >= 2 && huePrime < 3) {
          green = chroma;
          blue = secondComponent;
        } else if (huePrime >= 3 && huePrime < 4) {
          green = secondComponent;
          blue = chroma;
        } else if (huePrime >= 4 && huePrime < 5) {
          red = secondComponent;
          blue = chroma;
        } else if (huePrime >= 5 && huePrime < 6) {
          red = chroma;
          blue = secondComponent;
        }

        var lightnessModification = lightness - chroma / 2;
        var finalRed = red + lightnessModification;
        var finalGreen = green + lightnessModification;
        var finalBlue = blue + lightnessModification;
        return convert(finalRed, finalGreen, finalBlue);
      }

      var namedColorMap = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkgrey: 'a9a9a9',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        grey: '808080',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgreen: '90ee90',
        lightgrey: 'd3d3d3',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370db',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'db7093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '639',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32',
      };
      /**
       * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
       * @private
       */

      function nameToHex(color) {
        if (typeof color !== 'string') return color;
        var normalizedColorName = color.toLowerCase();
        return namedColorMap[normalizedColorName]
          ? '#' + namedColorMap[normalizedColorName]
          : color;
      }

      var hexRegex = /^#[a-fA-F0-9]{6}$/;
      var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
      var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
      var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
      var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;
      var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
      var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
      var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*(\d{1,3}[.]?[0-9]?)%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/i;
      /**
       * Returns an RgbColor or RgbaColor object. This utility function is only useful
       * if want to extract a color component. With the color util `toColorString` you
       * can convert a RgbColor or RgbaColor object back to a string.
       *
       * @example
       * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
       * const color1 = parseToRgb('rgb(255, 0, 0)');
       * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
       * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
       */

      function parseToRgb(color) {
        if (typeof color !== 'string') {
          throw new PolishedError(3);
        }

        var normalizedColor = nameToHex(color);

        if (normalizedColor.match(hexRegex)) {
          return {
            red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
            green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
            blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
          };
        }

        if (normalizedColor.match(hexRgbaRegex)) {
          var alpha = parseFloat(
            (parseInt('' + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2)
          );
          return {
            red: parseInt('' + normalizedColor[1] + normalizedColor[2], 16),
            green: parseInt('' + normalizedColor[3] + normalizedColor[4], 16),
            blue: parseInt('' + normalizedColor[5] + normalizedColor[6], 16),
            alpha: alpha,
          };
        }

        if (normalizedColor.match(reducedHexRegex)) {
          return {
            red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
            green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
            blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
          };
        }

        if (normalizedColor.match(reducedRgbaHexRegex)) {
          var _alpha = parseFloat(
            (parseInt('' + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2)
          );

          return {
            red: parseInt('' + normalizedColor[1] + normalizedColor[1], 16),
            green: parseInt('' + normalizedColor[2] + normalizedColor[2], 16),
            blue: parseInt('' + normalizedColor[3] + normalizedColor[3], 16),
            alpha: _alpha,
          };
        }

        var rgbMatched = rgbRegex.exec(normalizedColor);

        if (rgbMatched) {
          return {
            red: parseInt('' + rgbMatched[1], 10),
            green: parseInt('' + rgbMatched[2], 10),
            blue: parseInt('' + rgbMatched[3], 10),
          };
        }

        var rgbaMatched = rgbaRegex.exec(normalizedColor);

        if (rgbaMatched) {
          return {
            red: parseInt('' + rgbaMatched[1], 10),
            green: parseInt('' + rgbaMatched[2], 10),
            blue: parseInt('' + rgbaMatched[3], 10),
            alpha: parseFloat('' + rgbaMatched[4]),
          };
        }

        var hslMatched = hslRegex.exec(normalizedColor);

        if (hslMatched) {
          var hue = parseInt('' + hslMatched[1], 10);
          var saturation = parseInt('' + hslMatched[2], 10) / 100;
          var lightness = parseInt('' + hslMatched[3], 10) / 100;
          var rgbColorString = 'rgb(' + hslToRgb(hue, saturation, lightness) + ')';
          var hslRgbMatched = rgbRegex.exec(rgbColorString);

          if (!hslRgbMatched) {
            throw new PolishedError(4, normalizedColor, rgbColorString);
          }

          return {
            red: parseInt('' + hslRgbMatched[1], 10),
            green: parseInt('' + hslRgbMatched[2], 10),
            blue: parseInt('' + hslRgbMatched[3], 10),
          };
        }

        var hslaMatched = hslaRegex.exec(normalizedColor);

        if (hslaMatched) {
          var _hue = parseInt('' + hslaMatched[1], 10);

          var _saturation = parseInt('' + hslaMatched[2], 10) / 100;

          var _lightness = parseInt('' + hslaMatched[3], 10) / 100;

          var _rgbColorString = 'rgb(' + hslToRgb(_hue, _saturation, _lightness) + ')';

          var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

          if (!_hslRgbMatched) {
            throw new PolishedError(4, normalizedColor, _rgbColorString);
          }

          return {
            red: parseInt('' + _hslRgbMatched[1], 10),
            green: parseInt('' + _hslRgbMatched[2], 10),
            blue: parseInt('' + _hslRgbMatched[3], 10),
            alpha: parseFloat('' + hslaMatched[4]),
          };
        }

        throw new PolishedError(5);
      }

      function rgbToHsl(color) {
        // make sure rgb are contained in a set of [0, 255]
        var red = color.red / 255;
        var green = color.green / 255;
        var blue = color.blue / 255;
        var max = Math.max(red, green, blue);
        var min = Math.min(red, green, blue);
        var lightness = (max + min) / 2;

        if (max === min) {
          // achromatic
          if (color.alpha !== undefined) {
            return {
              hue: 0,
              saturation: 0,
              lightness: lightness,
              alpha: color.alpha,
            };
          } else {
            return {
              hue: 0,
              saturation: 0,
              lightness: lightness,
            };
          }
        }

        var hue;
        var delta = max - min;
        var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

        switch (max) {
          case red:
            hue = (green - blue) / delta + (green < blue ? 6 : 0);
            break;

          case green:
            hue = (blue - red) / delta + 2;
            break;

          default:
            // blue case
            hue = (red - green) / delta + 4;
            break;
        }

        hue *= 60;

        if (color.alpha !== undefined) {
          return {
            hue: hue,
            saturation: saturation,
            lightness: lightness,
            alpha: color.alpha,
          };
        }

        return {
          hue: hue,
          saturation: saturation,
          lightness: lightness,
        };
      }

      /**
       * Returns an HslColor or HslaColor object. This utility function is only useful
       * if want to extract a color component. With the color util `toColorString` you
       * can convert a HslColor or HslaColor object back to a string.
       *
       * @example
       * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
       * const color1 = parseToHsl('rgb(255, 0, 0)');
       * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
       * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
       */
      function parseToHsl(color) {
        // Note: At a later stage we can optimize this function as right now a hsl
        // color would be parsed converted to rgb values and converted back to hsl.
        return rgbToHsl(parseToRgb(color));
      }

      /**
       * Reduces hex values if possible e.g. #ff8866 to #f86
       * @private
       */
      var reduceHexValue = function reduceHexValue(value) {
        if (
          value.length === 7 &&
          value[1] === value[2] &&
          value[3] === value[4] &&
          value[5] === value[6]
        ) {
          return '#' + value[1] + value[3] + value[5];
        }

        return value;
      };

      function numberToHex(value) {
        var hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }

      function colorToHex(color) {
        return numberToHex(Math.round(color * 255));
      }

      function convertToHex(red, green, blue) {
        return reduceHexValue('#' + colorToHex(red) + colorToHex(green) + colorToHex(blue));
      }

      function hslToHex(hue, saturation, lightness) {
        return hslToRgb(hue, saturation, lightness, convertToHex);
      }

      /**
       * Returns a string value for the color. The returned result is the smallest possible hex notation.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: hsl(359, 0.75, 0.4),
       *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${hsl(359, 0.75, 0.4)};
       *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#b3191c";
       *   background: "#b3191c";
       * }
       */
      function hsl(value, saturation, lightness) {
        if (
          typeof value === 'number' &&
          typeof saturation === 'number' &&
          typeof lightness === 'number'
        ) {
          return hslToHex(value, saturation, lightness);
        } else if (
          typeof value === 'object' &&
          saturation === undefined &&
          lightness === undefined
        ) {
          return hslToHex(value.hue, value.saturation, value.lightness);
        }

        throw new PolishedError(1);
      }

      /**
       * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: hsla(359, 0.75, 0.4, 0.7),
       *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
       *   background: hsla(359, 0.75, 0.4, 1),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${hsla(359, 0.75, 0.4, 0.7)};
       *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
       *   background: ${hsla(359, 0.75, 0.4, 1)};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "rgba(179,25,28,0.7)";
       *   background: "rgba(179,25,28,0.7)";
       *   background: "#b3191c";
       * }
       */
      function hsla(value, saturation, lightness, alpha) {
        if (
          typeof value === 'number' &&
          typeof saturation === 'number' &&
          typeof lightness === 'number' &&
          typeof alpha === 'number'
        ) {
          return alpha >= 1
            ? hslToHex(value, saturation, lightness)
            : 'rgba(' + hslToRgb(value, saturation, lightness) + ',' + alpha + ')';
        } else if (
          typeof value === 'object' &&
          saturation === undefined &&
          lightness === undefined &&
          alpha === undefined
        ) {
          return value.alpha >= 1
            ? hslToHex(value.hue, value.saturation, value.lightness)
            : 'rgba(' +
                hslToRgb(value.hue, value.saturation, value.lightness) +
                ',' +
                value.alpha +
                ')';
        }

        throw new PolishedError(2);
      }

      /**
       * Returns a string value for the color. The returned result is the smallest possible hex notation.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: rgb(255, 205, 100),
       *   background: rgb({ red: 255, green: 205, blue: 100 }),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${rgb(255, 205, 100)};
       *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#ffcd64";
       *   background: "#ffcd64";
       * }
       */
      function rgb(value, green, blue) {
        if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
          return reduceHexValue('#' + numberToHex(value) + numberToHex(green) + numberToHex(blue));
        } else if (typeof value === 'object' && green === undefined && blue === undefined) {
          return reduceHexValue(
            '#' + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue)
          );
        }

        throw new PolishedError(6);
      }

      /**
       * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
       *
       * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: rgba(255, 205, 100, 0.7),
       *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
       *   background: rgba(255, 205, 100, 1),
       *   background: rgba('#ffffff', 0.4),
       *   background: rgba('black', 0.7),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${rgba(255, 205, 100, 0.7)};
       *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
       *   background: ${rgba(255, 205, 100, 1)};
       *   background: ${rgba('#ffffff', 0.4)};
       *   background: ${rgba('black', 0.7)};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "rgba(255,205,100,0.7)";
       *   background: "rgba(255,205,100,0.7)";
       *   background: "#ffcd64";
       *   background: "rgba(255,255,255,0.4)";
       *   background: "rgba(0,0,0,0.7)";
       * }
       */
      function rgba(firstValue, secondValue, thirdValue, fourthValue) {
        if (typeof firstValue === 'string' && typeof secondValue === 'number') {
          var rgbValue = parseToRgb(firstValue);
          return (
            'rgba(' +
            rgbValue.red +
            ',' +
            rgbValue.green +
            ',' +
            rgbValue.blue +
            ',' +
            secondValue +
            ')'
          );
        } else if (
          typeof firstValue === 'number' &&
          typeof secondValue === 'number' &&
          typeof thirdValue === 'number' &&
          typeof fourthValue === 'number'
        ) {
          return fourthValue >= 1
            ? rgb(firstValue, secondValue, thirdValue)
            : 'rgba(' + firstValue + ',' + secondValue + ',' + thirdValue + ',' + fourthValue + ')';
        } else if (
          typeof firstValue === 'object' &&
          secondValue === undefined &&
          thirdValue === undefined &&
          fourthValue === undefined
        ) {
          return firstValue.alpha >= 1
            ? rgb(firstValue.red, firstValue.green, firstValue.blue)
            : 'rgba(' +
                firstValue.red +
                ',' +
                firstValue.green +
                ',' +
                firstValue.blue +
                ',' +
                firstValue.alpha +
                ')';
        }

        throw new PolishedError(7);
      }

      var isRgb = function isRgb(color) {
        return (
          typeof color.red === 'number' &&
          typeof color.green === 'number' &&
          typeof color.blue === 'number' &&
          (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
        );
      };

      var isRgba = function isRgba(color) {
        return (
          typeof color.red === 'number' &&
          typeof color.green === 'number' &&
          typeof color.blue === 'number' &&
          typeof color.alpha === 'number'
        );
      };

      var isHsl = function isHsl(color) {
        return (
          typeof color.hue === 'number' &&
          typeof color.saturation === 'number' &&
          typeof color.lightness === 'number' &&
          (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')
        );
      };

      var isHsla = function isHsla(color) {
        return (
          typeof color.hue === 'number' &&
          typeof color.saturation === 'number' &&
          typeof color.lightness === 'number' &&
          typeof color.alpha === 'number'
        );
      };
      /**
       * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
       * This util is useful in case you only know on runtime which color object is
       * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: toColorString({ red: 255, green: 205, blue: 100 }),
       *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
       *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
       *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
       *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
       *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
       *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#ffcd64";
       *   background: "rgba(255,205,100,0.72)";
       *   background: "#00f";
       *   background: "rgba(179,25,25,0.72)";
       * }
       */

      function toColorString(color) {
        if (typeof color !== 'object') throw new PolishedError(8);
        if (isRgba(color)) return rgba(color);
        if (isRgb(color)) return rgb(color);
        if (isHsla(color)) return hsla(color);
        if (isHsl(color)) return hsl(color);
        throw new PolishedError(8);
      }

      // Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line no-unused-vars
      // eslint-disable-next-line no-redeclare
      function curried(f, length, acc) {
        return function fn() {
          // eslint-disable-next-line prefer-rest-params
          var combined = acc.concat(Array.prototype.slice.call(arguments));
          return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
        };
      } // eslint-disable-next-line no-redeclare

      function curry(f) {
        // eslint-disable-line no-redeclare
        return curried(f, f.length, []);
      }

      /**
       * Changes the hue of the color. Hue is a number between 0 to 360. The first
       * argument for adjustHue is the amount of degrees the color is rotated around
       * the color wheel, always producing a positive hue value.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: adjustHue(180, '#448'),
       *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${adjustHue(180, '#448')};
       *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#888844";
       *   background: "rgba(136,136,68,0.7)";
       * }
       */

      function adjustHue(degree, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
} // prettier-ignore

      var curriedAdjustHue = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        adjustHue
      );

      /**
       * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: complement('#448'),
       *   background: complement('rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${complement('#448')};
       *   background: ${complement('rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#884";
       *   background: "rgba(153,153,153,0.7)";
       * }
       */

      function complement(color) {
        if (color === 'transparent') return color;
        var hslColor = parseToHsl(color);
        return toColorString(
          Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
            {},
            hslColor,
            {
              hue: (hslColor.hue + 180) % 360,
            }
          )
        );
      }

      function guard(lowerBoundary, upperBoundary, value) {
        return Math.max(lowerBoundary, Math.min(upperBoundary, value));
      }

      /**
       * Returns a string value for the darkened color.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: darken(0.2, '#FFCD64'),
       *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${darken(0.2, '#FFCD64')};
       *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#ffbd31";
       *   background: "rgba(255,189,49,0.7)";
       * }
       */

      function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore

      var curriedDarken = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        darken
      );

      /**
       * Decreases the intensity of a color. Its range is between 0 to 1. The first
       * argument of the desaturate function is the amount by how much the color
       * intensity should be decreased.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: desaturate(0.2, '#CCCD64'),
       *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${desaturate(0.2, '#CCCD64')};
       *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#b8b979";
       *   background: "rgba(184,185,121,0.7)";
       * }
       */

      function desaturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore

      var curriedDesaturate = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        desaturate
      );

      /**
       * Returns a number (float) representing the luminance of a color.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
       *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
       *                             'rgba(58, 133, 255, 1)' :
       *                             'rgba(255, 57, 149, 1)',
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
       *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
       *                             'rgba(58, 133, 255, 1)' :
       *                             'rgba(255, 57, 149, 1)'};
       *
       * // CSS in JS Output
       *
       * div {
       *   background: "#CCCD64";
       *   background: "rgba(58, 133, 255, 1)";
       * }
       */

      function getLuminance(color) {
        if (color === 'transparent') return 0;
        var rgbColor = parseToRgb(color);

        var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
            var channel = rgbColor[key] / 255;
            return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
          }),
          r = _Object$keys$map[0],
          g = _Object$keys$map[1],
          b = _Object$keys$map[2];

        return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
      }

      /**
       * Returns the contrast ratio between two colors based on
       * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
       *
       * @example
       * const contrastRatio = getContrast('#444', '#fff');
       */

      function getContrast(color1, color2) {
        var luminance1 = getLuminance(color1);
        var luminance2 = getLuminance(color2);
        return parseFloat(
          (luminance1 > luminance2
            ? (luminance1 + 0.05) / (luminance2 + 0.05)
            : (luminance2 + 0.05) / (luminance1 + 0.05)
          ).toFixed(2)
        );
      }

      /**
       * Converts the color to a grayscale, by reducing its saturation to 0.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: grayscale('#CCCD64'),
       *   background: grayscale('rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${grayscale('#CCCD64')};
       *   background: ${grayscale('rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#999";
       *   background: "rgba(153,153,153,0.7)";
       * }
       */

      function grayscale(color) {
        if (color === 'transparent') return color;
        return toColorString(
          Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
            {},
            parseToHsl(color),
            {
              saturation: 0,
            }
          )
        );
      }

      /**
       * Converts a HslColor or HslaColor object to a color string.
       * This util is useful in case you only know on runtime which color object is
       * used. Otherwise we recommend to rely on `hsl` or `hsla`.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
       *   background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
       *   background: ${hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#00f";
       *   background: "rgba(179,25,25,0.72)";
       * }
       */
      function hslToColorString(color) {
        if (
          typeof color === 'object' &&
          typeof color.hue === 'number' &&
          typeof color.saturation === 'number' &&
          typeof color.lightness === 'number'
        ) {
          if (color.alpha && typeof color.alpha === 'number') {
            return hsla({
              hue: color.hue,
              saturation: color.saturation,
              lightness: color.lightness,
              alpha: color.alpha,
            });
          }

          return hsl({
            hue: color.hue,
            saturation: color.saturation,
            lightness: color.lightness,
          });
        }

        throw new PolishedError(45);
      }

      /**
       * Inverts the red, green and blue values of a color.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: invert('#CCCD64'),
       *   background: invert('rgba(101,100,205,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${invert('#CCCD64')};
       *   background: ${invert('rgba(101,100,205,0.7)')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#33329b";
       *   background: "rgba(154,155,50,0.7)";
       * }
       */

      function invert(color) {
        if (color === 'transparent') return color; // parse color string to rgb

        var value = parseToRgb(color);
        return toColorString(
          Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
            {},
            value,
            {
              red: 255 - value.red,
              green: 255 - value.green,
              blue: 255 - value.blue,
            }
          )
        );
      }

      /**
       * Returns a string value for the lightened color.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: lighten(0.2, '#CCCD64'),
       *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${lighten(0.2, '#FFCD64')};
       *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#e5e6b1";
       *   background: "rgba(229,230,177,0.7)";
       * }
       */

      function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore

      var curriedLighten = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        lighten
      );

      /**
       * Determines which contrast guidelines have been met for two colors.
       * Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
       *
       * @example
       * const scores = meetsContrastGuidelines('#444', '#fff');
       */
      function meetsContrastGuidelines(color1, color2) {
        var contrastRatio = getContrast(color1, color2);
        return {
          AA: contrastRatio >= 4.5,
          AALarge: contrastRatio >= 3,
          AAA: contrastRatio >= 7,
          AAALarge: contrastRatio >= 4.5,
        };
      }

      /**
       * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: mix(0.5, '#f00', '#00f')
       *   background: mix(0.25, '#f00', '#00f')
       *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${mix(0.5, '#f00', '#00f')};
       *   background: ${mix(0.25, '#f00', '#00f')};
       *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#7f007f";
       *   background: "#3f00bf";
       *   background: "rgba(63, 0, 191, 0.75)";
       * }
       */

      function mix(weight, color, otherColor) {
  if (color === 'transparent') return otherColor;
  if (otherColor === 'transparent') return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color);

  var color1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  }); // The formula is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method


  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * (parseFloat(weight) / 1.0) + color2.alpha * (1 - parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore

      var curriedMix = /*#__PURE__*/ curry(
        /* ::<number | string, string, string, string> */
        mix
      );

      /**
       * Increases the opacity of a color. Its range for the amount is between 0 to 1.
       *
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
       *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
       *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
       *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
       *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#fff";
       *   background: "rgba(255,255,255,0.7)";
       *   background: "rgba(255,0,0,0.7)";
       * }
       */

      function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore

      var curriedOpacify = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        opacify
      );

      var defaultLightReturnColor = '#000';
      var defaultDarkReturnColor = '#fff';
      /**
       * Returns black or white (or optional light and dark return colors) for best
       * contrast depending on the luminosity of the given color.
       * When passing custom return colors, set `strict` to `true` to ensure that the
       * return color always meets or exceeds WCAG level AA or greater. If this test
       * fails, the default return color (black or white) is returned in place of the
       * custom return color.
       *
       * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   color: readableColor('#000'),
       *   color: readableColor('black', '#001', '#ff8'),
       *   color: readableColor('white', '#001', '#ff8'),
       *   color: readableColor('red', '#333', '#ddd', true)
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   color: ${readableColor('#000')};
       *   color: ${readableColor('black', '#001', '#ff8')};
       *   color: ${readableColor('white', '#001', '#ff8')};
       *   color: ${readableColor('red', '#333', '#ddd', true)};
       * `
       *
       * // CSS in JS Output
       * element {
       *   color: "#fff";
       *   color: "#ff8";
       *   color: "#001";
       *   color: "#000";
       * }
       */

      function readableColor(color, lightReturnColor, darkReturnColor, strict) {
        if (lightReturnColor === void 0) {
          lightReturnColor = defaultLightReturnColor;
        }

        if (darkReturnColor === void 0) {
          darkReturnColor = defaultDarkReturnColor;
        }

        if (strict === void 0) {
          strict = false;
        }

        var isLightColor = getLuminance(color) > 0.179;
        var preferredReturnColor = isLightColor ? lightReturnColor : darkReturnColor; // TODO: Make `strict` the default behaviour in the next major release.
        // Without `strict`, this may return a color that does not meet WCAG AA.

        if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
          return preferredReturnColor;
        }

        return isLightColor ? defaultLightReturnColor : defaultDarkReturnColor;
      }

      /**
       * Converts a RgbColor or RgbaColor object to a color string.
       * This util is useful in case you only know on runtime which color object is
       * used. Otherwise we recommend to rely on `rgb` or `rgba`.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
       *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
       *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#ffcd64";
       *   background: "rgba(255,205,100,0.72)";
       * }
       */
      function rgbToColorString(color) {
        if (
          typeof color === 'object' &&
          typeof color.red === 'number' &&
          typeof color.green === 'number' &&
          typeof color.blue === 'number'
        ) {
          if (typeof color.alpha === 'number') {
            return rgba({
              red: color.red,
              green: color.green,
              blue: color.blue,
              alpha: color.alpha,
            });
          }

          return rgb({
            red: color.red,
            green: color.green,
            blue: color.blue,
          });
        }

        throw new PolishedError(46);
      }

      /**
       * Increases the intensity of a color. Its range is between 0 to 1. The first
       * argument of the saturate function is the amount by how much the color
       * intensity should be increased.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: saturate(0.2, '#CCCD64'),
       *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${saturate(0.2, '#FFCD64')};
       *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#e0e250";
       *   background: "rgba(224,226,80,0.7)";
       * }
       */

      function saturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore

      var curriedSaturate = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        saturate
      );

      /**
       * Sets the hue of a color to the provided value. The hue range can be
       * from 0 and 359.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: setHue(42, '#CCCD64'),
       *   background: setHue('244', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${setHue(42, '#CCCD64')};
       *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#cdae64";
       *   background: "rgba(107,100,205,0.7)";
       * }
       */

      function setHue(hue, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore

      var curriedSetHue = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        setHue
      );

      /**
       * Sets the lightness of a color to the provided value. The lightness range can be
       * from 0 and 1.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: setLightness(0.2, '#CCCD64'),
       *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${setLightness(0.2, '#CCCD64')};
       *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#4d4d19";
       *   background: "rgba(223,224,159,0.7)";
       * }
       */

      function setLightness(lightness, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore

      var curriedSetLightness = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        setLightness
      );

      /**
       * Sets the saturation of a color to the provided value. The saturation range can be
       * from 0 and 1.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: setSaturation(0.2, '#CCCD64'),
       *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${setSaturation(0.2, '#CCCD64')};
       *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
       * `
       *
       * // CSS in JS Output
       * element {
       *   background: "#adad84";
       *   background: "rgba(228,229,76,0.7)";
       * }
       */

      function setSaturation(saturation, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore

      var curriedSetSaturation = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        setSaturation
      );

      /**
       * Shades a color by mixing it with black. `shade` can produce
       * hue shifts, where as `darken` manipulates the luminance channel and therefore
       * doesn't produce hue shifts.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: shade(0.25, '#00f')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${shade(0.25, '#00f')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#00003f";
       * }
       */

      function shade(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore

      var curriedShade = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        shade
      );

      /**
       * Tints a color by mixing it with white. `tint` can produce
       * hue shifts, where as `lighten` manipulates the luminance channel and therefore
       * doesn't produce hue shifts.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: tint(0.25, '#00f')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${tint(0.25, '#00f')};
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "#bfbfff";
       * }
       */

      function tint(percentage, color) {
  if (color === 'transparent') return color;
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore

      var curriedTint = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        tint
      );

      /**
       * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
       *
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   background: transparentize(0.1, '#fff');
       *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
       *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   background: ${transparentize(0.1, '#fff')};
       *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
       *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
       * `
       *
       * // CSS in JS Output
       *
       * element {
       *   background: "rgba(255,255,255,0.9)";
       *   background: "rgba(255,255,255,0.8)";
       *   background: "rgba(255,0,0,0.3)";
       * }
       */

      function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore

      var curriedTransparentize = /*#__PURE__*/ curry(
        /* ::<number | string, string, string> */
        transparentize
      );

      /**
       * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
       * or a single animation spread over the arguments.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
       * }
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...animation('rotate', '1s', 'ease-in-out')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${animation('rotate', '1s', 'ease-in-out')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'animation': 'rotate 1s ease-in-out'
       * }
       */
      function animation() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // Allow single or multiple animations passed
        var multiMode = Array.isArray(args[0]);

        if (!multiMode && args.length > 8) {
          throw new PolishedError(64);
        }

        var code = args
          .map(function (arg) {
            if ((multiMode && !Array.isArray(arg)) || (!multiMode && Array.isArray(arg))) {
              throw new PolishedError(65);
            }

            if (Array.isArray(arg) && arg.length > 8) {
              throw new PolishedError(66);
            }

            return Array.isArray(arg) ? arg.join(' ') : arg;
          })
          .join(', ');
        return {
          animation: code,
        };
      }

      /**
       * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
       * }
       */
      function backgroundImages() {
        for (
          var _len = arguments.length, properties = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          properties[_key] = arguments[_key];
        }

        return {
          backgroundImage: properties.join(', '),
        };
      }

      /**
       * Shorthand that accepts any number of background values as parameters for creating a single background statement.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
       * }
       */
      function backgrounds() {
        for (
          var _len = arguments.length, properties = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          properties[_key] = arguments[_key];
        }

        return {
          background: properties.join(', '),
        };
      }

      var sideMap = ['top', 'right', 'bottom', 'left'];
      /**
       * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
       *
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...border('1px', 'solid', 'red')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${border('1px', 'solid', 'red')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderColor': 'red',
       *   'borderStyle': 'solid',
       *   'borderWidth': `1px`,
       * }
       *
       * // Styles as object usage
       * const styles = {
       *   ...border('top', '1px', 'solid', 'red')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${border('top', '1px', 'solid', 'red')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderTopColor': 'red',
       *   'borderTopStyle': 'solid',
       *   'borderTopWidth': `1px`,
       * }
       */

      function border(sideKeyword) {
        for (
          var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
          _key < _len;
          _key++
        ) {
          values[_key - 1] = arguments[_key];
        }

        if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
          var _ref;

          return (
            (_ref = {}),
            (_ref['border' + capitalizeString(sideKeyword) + 'Width'] = values[0]),
            (_ref['border' + capitalizeString(sideKeyword) + 'Style'] = values[1]),
            (_ref['border' + capitalizeString(sideKeyword) + 'Color'] = values[2]),
            _ref
          );
        } else {
          values.unshift(sideKeyword);
          return {
            borderWidth: values[0],
            borderStyle: values[1],
            borderColor: values[2],
          };
        }
      }

      /**
       * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...borderColor('red', 'green', 'blue', 'yellow')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${borderColor('red', 'green', 'blue', 'yellow')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderTopColor': 'red',
       *   'borderRightColor': 'green',
       *   'borderBottomColor': 'blue',
       *   'borderLeftColor': 'yellow'
       * }
       */
      function borderColor() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return directionalProperty.apply(void 0, ['borderColor'].concat(values));
      }

      /**
       * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...borderRadius('top', '5px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${borderRadius('top', '5px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderTopRightRadius': '5px',
       *   'borderTopLeftRadius': '5px',
       * }
       */
      function borderRadius(side, radius) {
        var uppercaseSide = capitalizeString(side);

        if (!radius && radius !== 0) {
          throw new PolishedError(62);
        }

        if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
          var _ref;

          return (
            (_ref = {}),
            (_ref['border' + uppercaseSide + 'RightRadius'] = radius),
            (_ref['border' + uppercaseSide + 'LeftRadius'] = radius),
            _ref
          );
        }

        if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
          var _ref2;

          return (
            (_ref2 = {}),
            (_ref2['borderTop' + uppercaseSide + 'Radius'] = radius),
            (_ref2['borderBottom' + uppercaseSide + 'Radius'] = radius),
            _ref2
          );
        }

        throw new PolishedError(63);
      }

      /**
       * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderTopStyle': 'solid',
       *   'borderRightStyle': 'dashed',
       *   'borderBottomStyle': 'dotted',
       *   'borderLeftStyle': 'double'
       * }
       */
      function borderStyle() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
      }

      /**
       * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...borderWidth('12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${borderWidth('12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'borderTopWidth': '12px',
       *   'borderRightWidth': '24px',
       *   'borderBottomWidth': '36px',
       *   'borderLeftWidth': '48px'
       * }
       */
      function borderWidth() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
      }

      function generateSelectors(template, state) {
        var stateSuffix = state ? ':' + state : '';
        return template(stateSuffix);
      }
      /**
       * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
       * @private
       */

      function statefulSelectors(states, template, stateMap) {
        if (!template) throw new PolishedError(67);
        if (states.length === 0) return generateSelectors(template, null);
        var selectors = [];

        for (var i = 0; i < states.length; i += 1) {
          if (stateMap && stateMap.indexOf(states[i]) < 0) {
            throw new PolishedError(68);
          }

          selectors.push(generateSelectors(template, states[i]));
        }

        selectors = selectors.join(',');
        return selectors;
      }

      var stateMap = [undefined, null, 'active', 'focus', 'hover'];

      function template(state) {
        return (
          'button' +
          state +
          ',\n  input[type="button"]' +
          state +
          ',\n  input[type="reset"]' +
          state +
          ',\n  input[type="submit"]' +
          state
        );
      }
      /**
       * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
       * @example
       * // Styles as object usage
       * const styles = {
       *   [buttons('active')]: {
       *     'border': 'none'
       *   }
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   > ${buttons('active')} {
       *     border: none;
       *   }
       * `
       *
       * // CSS in JS Output
       *
       *  'button:active,
       *  'input[type="button"]:active,
       *  'input[type=\"reset\"]:active,
       *  'input[type=\"submit\"]:active: {
       *   'border': 'none'
       * }
       */

      function buttons() {
        for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
          states[_key] = arguments[_key];
        }

        return statefulSelectors(states, template, stateMap);
      }

      /**
       * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...margin('12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${margin('12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'marginTop': '12px',
       *   'marginRight': '24px',
       *   'marginBottom': '36px',
       *   'marginLeft': '48px'
       * }
       */
      function margin() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return directionalProperty.apply(void 0, ['margin'].concat(values));
      }

      /**
       * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...padding('12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${padding('12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'paddingTop': '12px',
       *   'paddingRight': '24px',
       *   'paddingBottom': '36px',
       *   'paddingLeft': '48px'
       * }
       */
      function padding() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return directionalProperty.apply(void 0, ['padding'].concat(values));
      }

      var positionMap$1 = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
      /**
       * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...position('12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${position('12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'top': '12px',
       *   'right': '24px',
       *   'bottom': '36px',
       *   'left': '48px'
       * }
       *
       * // Styles as object usage
       * const styles = {
       *   ...position('absolute', '12px', '24px', '36px', '48px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${position('absolute', '12px', '24px', '36px', '48px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'position': 'absolute',
       *   'top': '12px',
       *   'right': '24px',
       *   'bottom': '36px',
       *   'left': '48px'
       * }
       */

      function position(firstValue) {
        for (
          var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1;
          _key < _len;
          _key++
        ) {
          values[_key - 1] = arguments[_key];
        }

        if (positionMap$1.indexOf(firstValue) >= 0 && firstValue) {
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__['default'])(
            {},
            directionalProperty.apply(void 0, [''].concat(values)),
            {
              position: firstValue,
            }
          );
        } else {
          return directionalProperty.apply(void 0, ['', firstValue].concat(values));
        }
      }

      /**
       * Shorthand to set the height and width properties in a single statement.
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...size('300px', '250px')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${size('300px', '250px')}
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'height': '300px',
       *   'width': '250px',
       * }
       */
      function size(height, width) {
        if (width === void 0) {
          width = height;
        }

        return {
          height: height,
          width: width,
        };
      }

      var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

      function template$1(state) {
        return (
          'input[type="color"]' +
          state +
          ',\n    input[type="date"]' +
          state +
          ',\n    input[type="datetime"]' +
          state +
          ',\n    input[type="datetime-local"]' +
          state +
          ',\n    input[type="email"]' +
          state +
          ',\n    input[type="month"]' +
          state +
          ',\n    input[type="number"]' +
          state +
          ',\n    input[type="password"]' +
          state +
          ',\n    input[type="search"]' +
          state +
          ',\n    input[type="tel"]' +
          state +
          ',\n    input[type="text"]' +
          state +
          ',\n    input[type="time"]' +
          state +
          ',\n    input[type="url"]' +
          state +
          ',\n    input[type="week"]' +
          state +
          ',\n    input:not([type])' +
          state +
          ',\n    textarea' +
          state
        );
      }
      /**
       * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
       * @example
       * // Styles as object usage
       * const styles = {
       *   [textInputs('active')]: {
       *     'border': 'none'
       *   }
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   > ${textInputs('active')} {
       *     border: none;
       *   }
       * `
       *
       * // CSS in JS Output
       *
       *  'input[type="color"]:active,
       *  input[type="date"]:active,
       *  input[type="datetime"]:active,
       *  input[type="datetime-local"]:active,
       *  input[type="email"]:active,
       *  input[type="month"]:active,
       *  input[type="number"]:active,
       *  input[type="password"]:active,
       *  input[type="search"]:active,
       *  input[type="tel"]:active,
       *  input[type="text"]:active,
       *  input[type="time"]:active,
       *  input[type="url"]:active,
       *  input[type="week"]:active,
       *  input:not([type]):active,
       *  textarea:active': {
       *   'border': 'none'
       * }
       */

      function textInputs() {
        for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
          states[_key] = arguments[_key];
        }

        return statefulSelectors(states, template$1, stateMap$1);
      }

      /**
       * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same transition values to (second parameter).
       * @example
       * // Styles as object usage
       * const styles = {
       *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
       *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
       * }
       *
       * // styled-components usage
       * const div = styled.div`
       *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
       *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
       * `
       *
       * // CSS as JS Output
       *
       * div {
       *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
       *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
       * }
       */

      function transitions() {
        for (
          var _len = arguments.length, properties = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          properties[_key] = arguments[_key];
        }

        if (Array.isArray(properties[0]) && properties.length === 2) {
          var value = properties[1];

          if (typeof value !== 'string') {
            throw new PolishedError(61);
          }

          var transitionsString = properties[0]
            .map(function (property) {
              return property + ' ' + value;
            })
            .join(', ');
          return {
            transition: transitionsString,
          };
        } else {
          return {
            transition: properties.join(', '),
          };
        }
      }

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvZGlzdC9wb2xpc2hlZC5lc20uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJTdHlsZWROaWRyYXRlY2hMb2dvIiwic3R5bGVkIiwiTmlkcmF0ZWNoTG9nbyIsIk5hdkNvbnRhaW5lciIsImRpdiIsIk5hdkl0ZW0iLCJhIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJTdHlsZWROYXYiLCJuYXYiLCJsYXJnZSIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsIndoaXRlIiwibmF2QmFySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsbUJBQ0tDLDZEQUFTLEVBRGQ7QUFBQSxNQUNSQyxRQURRLGNBQ1JBLFFBRFE7O0FBR2hCLFNBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQWlCLFlBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLGtCQUFZLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixZQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixTQUFL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K0RBQWM7QUFDekI7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUM0QjtBQUNoQjtBQUNJO0FBQ3NCOztBQUVoRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsYUFBYSxxR0FBMkI7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxrQkFBa0Isa0ZBQVE7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHLEtBQUs7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzRkFBc0Y7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sVUFBVSxzRkFBc0Y7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsRUFBRTtBQUNoQyxrQ0FBa0MsRUFBRTtBQUNwQyxxQ0FBcUMsRUFBRTtBQUN2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d2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTczNTM1YjJjYTQ0NGI2YTczYzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IE5pZHJhdGVjaExvZ28gZnJvbSAnY29tcG9uZW50cy9OaWRyYXRlY2hMb2dvJztcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRIZWFkZXI+XG4gICAgICA8U3R5bGVkTmF2PlxuICAgICAgICA8TmF2Q29udGFpbmVyPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TmF2SXRlbSBhcz1cImFcIiBhcmlhLWxhYmVsPXsnTmlkcmF0ZWNoIEx0ZC4nfT5cbiAgICAgICAgICAgICAgPFN0eWxlZE5pZHJhdGVjaExvZ28gLz5cbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2Q29udGFpbmVyPlxuXG4gICAgICAgIDxOYXZDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnSG9tZSd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfT5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvamVjdHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnUHJvamVjdHMnfSBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHJvamVjdHMnfT5cbiAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQ2xpZW50cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jbGllbnRzJ30+XG4gICAgICAgICAgICAgIENsaWVudHNcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8TGluayBocmVmPXsnL2NvbnRhY3QnfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIHRpdGxlPXsnQ29udGFjdCB1cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jb250YWN0J30+XG4gICAgICAgICAgICAgIENvbnRhY3QgdXNcbiAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2Q29udGFpbmVyPlxuICAgICAgPC9TdHlsZWROYXY+XG4gICAgPC9TdHlsZWRIZWFkZXI+XG4gICk7XG59XG5cbmNvbnN0IFN0eWxlZE5pZHJhdGVjaExvZ28gPSBzdHlsZWQoTmlkcmF0ZWNoTG9nbylgXG4gIHdpZHRoOiA5LjVyZW07XG4gIGhlaWdodDogMTAwJTtcbmA7XG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubWVkaXVtfTtcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cbiAgICAgIGRhcmtlbigwLjA1LCBpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XG4gIH1cbmA7XG5jb25zdCBTdHlsZWROYXYgPSBzdHlsZWQubmF2YFxuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5sYXJnZX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbmNvbnN0IFN0eWxlZEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNpbmcubmF2QmFySGVpZ2h0fTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChEYXRlLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZlwiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgaXNOYXRpdmVGdW5jdGlvbiBmcm9tIFwiLi9pc05hdGl2ZUZ1bmN0aW9uXCI7XG5pbXBvcnQgY29uc3RydWN0IGZyb20gXCIuL2NvbnN0cnVjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfd3JhcE5hdGl2ZVN1cGVyIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlcic7XG5pbXBvcnQgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlJztcblxuZnVuY3Rpb24gbGFzdCgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIC0gMSwgX3JlZiA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBfcmVmID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW19yZWZdO1xufVxuXG5mdW5jdGlvbiBuZWdhdGlvbihhKSB7XG4gIHJldHVybiAtYTtcbn1cblxuZnVuY3Rpb24gYWRkaXRpb24oYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsaWNhdGlvbihhLCBiKSB7XG4gIHJldHVybiBhICogYjtcbn1cblxuZnVuY3Rpb24gZGl2aXNpb24oYSwgYikge1xuICByZXR1cm4gYSAvIGI7XG59XG5cbmZ1bmN0aW9uIGZhY3RvcmlhbChhKSB7XG4gIGlmIChhICUgMSB8fCAhKCthID49IDApKSByZXR1cm4gTmFOO1xuICBpZiAoYSA+IDE3MCkgcmV0dXJuIEluZmluaXR5O2Vsc2UgaWYgKGEgPT09IDApIHJldHVybiAxO2Vsc2Uge1xuICAgIHJldHVybiBhICogZmFjdG9yaWFsKGEgLSAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3dlcihhLCBiKSB7XG4gIHJldHVybiBNYXRoLnBvdyhhLCBiKTtcbn1cblxuZnVuY3Rpb24gc3FydChhKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoYSk7XG59XG5cbmZ1bmN0aW9uIG1heCgpIHtcbiAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG1pbigpIHtcbiAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNvbW1hKCkge1xuICByZXR1cm4gQXJyYXkub2YuYXBwbHkoQXJyYXksIGFyZ3VtZW50cyk7XG59XG5cbnZhciBkZWZhdWx0TWF0aFN5bWJvbHMgPSB7XG4gIHN5bWJvbHM6IHtcbiAgICAnISc6IHtcbiAgICAgIHBvc3RmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnIScsXG4gICAgICAgIGY6IGZhY3RvcmlhbCxcbiAgICAgICAgbm90YXRpb246ICdwb3N0Zml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogNixcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnIScsXG4gICAgICByZWdTeW1ib2w6ICchJ1xuICAgIH0sXG4gICAgJ14nOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICdeJyxcbiAgICAgICAgZjogcG93ZXIsXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA1LFxuICAgICAgICByaWdodFRvTGVmdDogMSxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdeJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFxeJ1xuICAgIH0sXG4gICAgJyonOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcqJyxcbiAgICAgICAgZjogbXVsdGlwbGljYXRpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA0LFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcqJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwqJ1xuICAgIH0sXG4gICAgJy8nOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcvJyxcbiAgICAgICAgZjogZGl2aXNpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA0LFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcvJyxcbiAgICAgIHJlZ1N5bWJvbDogJy8nXG4gICAgfSxcbiAgICAnKyc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJysnLFxuICAgICAgICBmOiBhZGRpdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDIsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICcrJyxcbiAgICAgICAgZjogbGFzdCxcbiAgICAgICAgbm90YXRpb246ICdwcmVmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAzLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcrJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwrJ1xuICAgIH0sXG4gICAgJy0nOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICctJyxcbiAgICAgICAgZjogc3VidHJhY3Rpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAyLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLScsXG4gICAgICAgIGY6IG5lZ2F0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ3ByZWZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDMsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJy0nLFxuICAgICAgcmVnU3ltYm9sOiAnLSdcbiAgICB9LFxuICAgICcsJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLCcsXG4gICAgICAgIGY6IGNvbW1hLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMSxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnLCcsXG4gICAgICByZWdTeW1ib2w6ICcsJ1xuICAgIH0sXG4gICAgJygnOiB7XG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKCcsXG4gICAgICAgIGY6IGxhc3QsXG4gICAgICAgIG5vdGF0aW9uOiAncHJlZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnKCcsXG4gICAgICByZWdTeW1ib2w6ICdcXFxcKCdcbiAgICB9LFxuICAgICcpJzoge1xuICAgICAgcG9zdGZpeDoge1xuICAgICAgICBzeW1ib2w6ICcpJyxcbiAgICAgICAgZjogdW5kZWZpbmVkLFxuICAgICAgICBub3RhdGlvbjogJ3Bvc3RmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcpJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwpJ1xuICAgIH0sXG4gICAgbWluOiB7XG4gICAgICBmdW5jOiB7XG4gICAgICAgIHN5bWJvbDogJ21pbicsXG4gICAgICAgIGY6IG1pbixcbiAgICAgICAgbm90YXRpb246ICdmdW5jJyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnbWluJyxcbiAgICAgIHJlZ1N5bWJvbDogJ21pblxcXFxiJ1xuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICBmdW5jOiB7XG4gICAgICAgIHN5bWJvbDogJ21heCcsXG4gICAgICAgIGY6IG1heCxcbiAgICAgICAgbm90YXRpb246ICdmdW5jJyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnbWF4JyxcbiAgICAgIHJlZ1N5bWJvbDogJ21heFxcXFxiJ1xuICAgIH0sXG4gICAgc3FydDoge1xuICAgICAgZnVuYzoge1xuICAgICAgICBzeW1ib2w6ICdzcXJ0JyxcbiAgICAgICAgZjogc3FydCxcbiAgICAgICAgbm90YXRpb246ICdmdW5jJyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnc3FydCcsXG4gICAgICByZWdTeW1ib2w6ICdzcXJ0XFxcXGInXG4gICAgfVxuICB9XG59O1xuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9mY2Y2ZjM4MDRjNTdhMTRkZDc5ODRkZmFiN2JjMDZlZTJlZGNhMDQ0L3NyYy91dGlscy9lcnJvci5qc1xuXG4vKipcbiAqIFBhcnNlIGVycm9ycy5tZCBhbmQgdHVybiBpdCBpbnRvIGEgc2ltcGxlIGhhc2ggb2YgY29kZTogbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xudmFyIEVSUk9SUyA9IHtcbiAgXCIxXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbCwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbCgzNjAsIDAuNzUsIDAuNCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjJcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbGEoMzYwLCAwLjc1LCAwLjQsIDAuNykgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1LCBhbHBoYTogMC43IH0pLlxcblxcblwiLFxuICBcIjNcIjogXCJQYXNzZWQgYW4gaW5jb3JyZWN0IGFyZ3VtZW50IHRvIGEgY29sb3IgZnVuY3Rpb24sIHBsZWFzZSBwYXNzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIkNvdWxkbid0IGdlbmVyYXRlIHZhbGlkIHJnYiBzdHJpbmcgZnJvbSAlcywgaXQgcmV0dXJuZWQgJXMuXFxuXFxuXCIsXG4gIFwiNVwiOiBcIkNvdWxkbid0IHBhcnNlIHRoZSBjb2xvciBzdHJpbmcuIFBsZWFzZSBwcm92aWRlIHRoZSBjb2xvciBhcyBhIHN0cmluZyBpbiBoZXgsIHJnYiwgcmdiYSwgaHNsIG9yIGhzbGEgbm90YXRpb24uXFxuXFxuXCIsXG4gIFwiNlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2IsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KS5cXG5cXG5cIixcbiAgXCI3XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYmEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCwgMC43NSkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiMTBcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCIxMVwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0gc3RyaW5nIGJ1dCBnb3QgXFxcIiVzXFxcIlxcblxcblwiLFxuICBcIjEyXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjEzXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE1XCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNlwiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxN1wiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMThcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIxOVwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMjBcIjogXCJleHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjIxXCI6IFwiZXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyMlwiOiBcImV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCIyNFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCIyNVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyNlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCIyOFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIyOVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCIzMFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCIzMVwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzMlwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpXFxuXFxuXCIsXG4gIFwiMzNcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzRcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNVwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNlwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiMzdcIjogXCJTeW50YXggRXJyb3IgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzhcIjogXCJGb3JtdWxhIGNvbnRhaW5zIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOVwiOiBcIkZvcm11bGEgaXMgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzIGF0ICVzLlxcblxcblwiLFxuICBcIjQwXCI6IFwiRm9ybXVsYSBoYXMgdG9vIG1hbnkgY2xvc2luZyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MVwiOiBcIkFsbCB2YWx1ZXMgaW4gYSBmb3JtdWxhIG11c3QgaGF2ZSB0aGUgc2FtZSB1bml0IG9yIGJlIHVuaXRsZXNzLlxcblxcblwiLFxuICBcIjQyXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiNDNcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCI0NFwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0vcmVtIHN0cmluZyBidXQgZ290ICVzLlxcblxcblwiLFxuICBcIjQ1XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gaHNsVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gcmdiVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ3XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDhcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ5XCI6IFwiRXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MFwiOiBcIkV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTFcIjogXCJFeHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCI1M1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTVcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjU2XCI6IFwibGluZWFyR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNTdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1OFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI1OVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCI2MFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCI2MVwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiNjJcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2M1wiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2NFwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjVcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpLlxcblxcblwiLFxuICBcIjY2XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2N1wiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OFwiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjlcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcwXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzFcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjcyXCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjczXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBDU1MgdmFyaWFibGUuXFxuXFxuXCIsXG4gIFwiNzRcIjogXCJDU1MgdmFyaWFibGUgbm90IGZvdW5kLlxcblwiXG59O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGEgPSBhcmdzWzBdO1xuICB2YXIgYiA9IFtdO1xuICB2YXIgYztcblxuICBmb3IgKGMgPSAxOyBjIDwgYXJncy5sZW5ndGg7IGMgKz0gMSkge1xuICAgIGIucHVzaChhcmdzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9saXNoZWRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbGlzaGVkRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gUG9saXNoZWRFcnJvcihjb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9wb2xpc2hlZC9ibG9iL21hc3Rlci9zcmMvaW50ZXJuYWxIZWxwZXJzL2Vycm9ycy5tZCNcIiArIGNvZGUgKyBcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIikgfHwgdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoYXJncykpKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgfVxuXG4gIHJldHVybiBQb2xpc2hlZEVycm9yO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxudmFyIHVuaXRSZWdFeHAgPSAvKCg/IVxcdylhfG5hfGhjfG1jfGRnfG1lW3JdP3x4ZXxuaSg/IVthLXpBLVpdKXxtbXxjcHx0cHx4cHxxKD8hcyl8aHZ8eGFtdnxuaW12fHd2fHNtfHMoPyFcXER8JCl8Z2VkfGRhcmc/fG5ydXQpL2c7IC8vIE1lcmdlcyBhZGRpdGlvbmFsIG1hdGggZnVuY3Rpb25hbGl0eSBpbnRvIHRoZSBkZWZhdWx0cy5cblxuZnVuY3Rpb24gbWVyZ2VTeW1ib2xNYXBzKGFkZGl0aW9uYWxTeW1ib2xzKSB7XG4gIHZhciBzeW1ib2xNYXAgPSB7fTtcbiAgc3ltYm9sTWFwLnN5bWJvbHMgPSBhZGRpdGlvbmFsU3ltYm9scyA/IF9leHRlbmRzKHt9LCBkZWZhdWx0TWF0aFN5bWJvbHMuc3ltYm9scywge30sIGFkZGl0aW9uYWxTeW1ib2xzLnN5bWJvbHMpIDogX2V4dGVuZHMoe30sIGRlZmF1bHRNYXRoU3ltYm9scy5zeW1ib2xzKTtcbiAgcmV0dXJuIHN5bWJvbE1hcDtcbn1cblxuZnVuY3Rpb24gZXhlYyhvcGVyYXRvcnMsIHZhbHVlcykge1xuICB2YXIgX3JlZjtcblxuICB2YXIgb3AgPSBvcGVyYXRvcnMucG9wKCk7XG4gIHZhbHVlcy5wdXNoKG9wLmYuYXBwbHkob3AsIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCB2YWx1ZXMuc3BsaWNlKC1vcC5hcmdDb3VudCkpKSk7XG4gIHJldHVybiBvcC5wcmVjZWRlbmNlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZXhwcmVzc2lvbiwgYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHN5bWJvbE1hcCA9IG1lcmdlU3ltYm9sTWFwcyhhZGRpdGlvbmFsU3ltYm9scyk7XG4gIHZhciBtYXRjaDtcbiAgdmFyIG9wZXJhdG9ycyA9IFtzeW1ib2xNYXAuc3ltYm9sc1snKCddLnByZWZpeF07XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCAvLyBQYXR0ZXJuIGZvciBudW1iZXJzXG4gIFwiXFxcXGQrKD86XFxcXC5cXFxcZCspP3xcIiArIC8vIC4uLmFuZCBwYXR0ZXJucyBmb3IgaW5kaXZpZHVhbCBvcGVyYXRvcnMvZnVuY3Rpb24gbmFtZXNcbiAgT2JqZWN0LmtleXMoc3ltYm9sTWFwLnN5bWJvbHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHN5bWJvbE1hcC5zeW1ib2xzW2tleV07XG4gIH0pIC8vIGxvbmdlciBzeW1ib2xzIHNob3VsZCBiZSBsaXN0ZWQgZmlyc3RcbiAgLy8gJEZsb3dGaXhNZVxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnN5bWJvbC5sZW5ndGggLSBhLnN5bWJvbC5sZW5ndGg7XG4gIH0pIC8vICRGbG93Rml4TWVcbiAgLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbC5yZWdTeW1ib2w7XG4gIH0pLmpvaW4oJ3wnKSArIFwifChcXFxcUylcIiwgJ2cnKTtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSAwOyAvLyBSZXNldCByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0XG5cbiAgdmFyIGFmdGVyVmFsdWUgPSBmYWxzZTtcblxuICBkbyB7XG4gICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZXhwcmVzc2lvbik7XG5cbiAgICB2YXIgX3JlZjIgPSBtYXRjaCB8fCBbJyknLCB1bmRlZmluZWRdLFxuICAgICAgICB0b2tlbiA9IF9yZWYyWzBdLFxuICAgICAgICBiYWQgPSBfcmVmMlsxXTtcblxuICAgIHZhciBub3ROdW1iZXIgPSBzeW1ib2xNYXAuc3ltYm9sc1t0b2tlbl07XG4gICAgdmFyIG5vdE5ld1ZhbHVlID0gbm90TnVtYmVyICYmICFub3ROdW1iZXIucHJlZml4ICYmICFub3ROdW1iZXIuZnVuYztcbiAgICB2YXIgbm90QWZ0ZXJWYWx1ZSA9ICFub3ROdW1iZXIgfHwgIW5vdE51bWJlci5wb3N0Zml4ICYmICFub3ROdW1iZXIuaW5maXg7IC8vIENoZWNrIGZvciBzeW50YXggZXJyb3JzOlxuXG4gICAgaWYgKGJhZCB8fCAoYWZ0ZXJWYWx1ZSA/IG5vdEFmdGVyVmFsdWUgOiBub3ROZXdWYWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDM3LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIGlmIChhZnRlclZhbHVlKSB7XG4gICAgICAvLyBXZSBlaXRoZXIgaGF2ZSBhbiBpbmZpeCBvciBwb3N0Zml4IG9wZXJhdG9yICh0aGV5IHNob3VsZCBiZSBtdXR1YWxseSBleGNsdXNpdmUpXG4gICAgICB2YXIgY3VyciA9IG5vdE51bWJlci5wb3N0Zml4IHx8IG5vdE51bWJlci5pbmZpeDtcblxuICAgICAgZG8ge1xuICAgICAgICB2YXIgcHJldiA9IG9wZXJhdG9yc1tvcGVyYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICgoY3Vyci5wcmVjZWRlbmNlIC0gcHJldi5wcmVjZWRlbmNlIHx8IHByZXYucmlnaHRUb0xlZnQpID4gMCkgYnJlYWs7IC8vIEFwcGx5IHByZXZpb3VzIG9wZXJhdG9yLCBzaW5jZSBpdCBoYXMgcHJlY2VkZW5jZSBvdmVyIGN1cnJlbnQgb25lXG4gICAgICB9IHdoaWxlIChleGVjKG9wZXJhdG9ycywgdmFsdWVzKSk7IC8vIEV4aXQgbG9vcCBhZnRlciBleGVjdXRpbmcgYW4gb3BlbmluZyBwYXJlbnRoZXNpcyBvciBmdW5jdGlvblxuXG5cbiAgICAgIGFmdGVyVmFsdWUgPSBjdXJyLm5vdGF0aW9uID09PSAncG9zdGZpeCc7XG5cbiAgICAgIGlmIChjdXJyLnN5bWJvbCAhPT0gJyknKSB7XG4gICAgICAgIG9wZXJhdG9ycy5wdXNoKGN1cnIpOyAvLyBQb3N0Zml4IGFsd2F5cyBoYXMgcHJlY2VkZW5jZSBvdmVyIGFueSBvcGVyYXRvciB0aGF0IGZvbGxvd3MgYWZ0ZXIgaXRcblxuICAgICAgICBpZiAoYWZ0ZXJWYWx1ZSkgZXhlYyhvcGVyYXRvcnMsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub3ROdW1iZXIpIHtcbiAgICAgIC8vIHByZWZpeCBvcGVyYXRvciBvciBmdW5jdGlvblxuICAgICAgb3BlcmF0b3JzLnB1c2gobm90TnVtYmVyLnByZWZpeCB8fCBub3ROdW1iZXIuZnVuYyk7XG5cbiAgICAgIGlmIChub3ROdW1iZXIuZnVuYykge1xuICAgICAgICAvLyBSZXF1aXJlIGFuIG9wZW5pbmcgcGFyZW50aGVzaXNcbiAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZXhwcmVzc2lvbik7XG5cbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFswXSAhPT0gJygnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzgsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbnVtYmVyXG4gICAgICB2YWx1ZXMucHVzaCgrdG9rZW4pO1xuICAgICAgYWZ0ZXJWYWx1ZSA9IHRydWU7XG4gICAgfVxuICB9IHdoaWxlIChtYXRjaCAmJiBvcGVyYXRvcnMubGVuZ3RoKTtcblxuICBpZiAob3BlcmF0b3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDM5LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICB9IGVsc2UgaWYgKG1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDAsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlcy5wb3AoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXZlcnNlU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59XG4vKipcbiAqIEhlbHBlciBmb3IgZG9pbmcgbWF0aCB3aXRoIENTUyBVbml0cy4gQWNjZXB0cyBhIGZvcm11bGEgYXMgYSBzdHJpbmcuIEFsbCB2YWx1ZXMgaW4gdGhlIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgKG9yIGJlIHVuaXRsZXNzKS4gU3VwcG9ydHMgY29tcGxleCBmb3JtdWxhcyB1dGxpemlpbmcgYWRkaXRpb24sIHN1YnRyYWN0aW9uLCBtdWx0aXBsaWNhdGlvbiwgZGl2aXNpb24sIHNxdWFyZSByb290LCBwb3dlcnMsIGZhY3RvcmlhbCwgbWluLCBtYXgsIGFzIHdlbGwgYXMgcGFyZW50aGVzZXMgZm9yIG9yZGVyIG9mIG9wZXJhdGlvbi5cbiAqXG4gKkluIGNhc2VzIHdoZXJlIHlvdSBuZWVkIHRvIGRvIGNhbGN1bGF0aW9ucyB3aXRoIG1peGVkIHVuaXRzIHdoZXJlIG9uZSB1bml0IGlzIGEgW3JlbGF0aXZlIGxlbmd0aCB1bml0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGVuZ3RoI1JlbGF0aXZlX2xlbmd0aF91bml0cyksIHlvdSB3aWxsIHdhbnQgdG8gdXNlIFtDU1MgQ2FsY10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NhbGMpLlxuICpcbiAqICp3YXJuaW5nKiBXaGlsZSB3ZSd2ZSBkb25lIGV2ZXJ5dGhpbmcgcG9zc2libGUgdG8gZW5zdXJlIG1hdGggc2FmZWx5IGV2YWx1dGVzIGZvcm11bGFzIGV4cHJlc3NlZCBhcyBzdHJpbmdzLCB5b3Ugc2hvdWxkIGFsd2F5cyB1c2UgZXh0cmVtZSBjYXV0aW9uIHdoZW4gcGFzc2luZyBgbWF0aGAgdXNlciBwcm92aWRlZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBmb250U2l6ZTogbWF0aCgnMTJyZW0gKyA4cmVtJyksXG4gKiAgIGZvbnRTaXplOiBtYXRoKCcoMTJweCArIDJweCkgKiAzJyksXG4gKiAgIGZvbnRTaXplOiBtYXRoKCczcHheMiArIHNxcnQoNCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgZm9udFNpemU6ICR7bWF0aCgnMTJyZW0gKyA4cmVtJyl9O1xuICogICBmb250U2l6ZTogJHttYXRoKCcoMTJweCArIDJweCkgKiAzJyl9O1xuICogICBmb250U2l6ZTogJHttYXRoKCczcHheMiArIHNxcnQoNCknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICBmb250U2l6ZTogJzIwcmVtJyxcbiAqICAgZm9udFNpemU6ICc0MnB4JyxcbiAqICAgZm9udFNpemU6ICcxMXB4JyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hdGgoZm9ybXVsYSwgYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHJldmVyc2VkRm9ybXVsYSA9IHJldmVyc2VTdHJpbmcoZm9ybXVsYSk7XG4gIHZhciBmb3JtdWxhTWF0Y2ggPSByZXZlcnNlZEZvcm11bGEubWF0Y2godW5pdFJlZ0V4cCk7IC8vIENoZWNrIHRoYXQgYWxsIHVuaXRzIGFyZSB0aGUgc2FtZVxuXG4gIGlmIChmb3JtdWxhTWF0Y2ggJiYgIWZvcm11bGFNYXRjaC5ldmVyeShmdW5jdGlvbiAodW5pdCkge1xuICAgIHJldHVybiB1bml0ID09PSBmb3JtdWxhTWF0Y2hbMF07XG4gIH0pKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDEpO1xuICB9XG5cbiAgdmFyIGNsZWFuRm9ybXVsYSA9IHJldmVyc2VTdHJpbmcocmV2ZXJzZWRGb3JtdWxhLnJlcGxhY2UodW5pdFJlZ0V4cCwgJycpKTtcbiAgcmV0dXJuIFwiXCIgKyBjYWxjdWxhdGUoY2xlYW5Gb3JtdWxhLCBhZGRpdGlvbmFsU3ltYm9scykgKyAoZm9ybXVsYU1hdGNoID8gcmV2ZXJzZVN0cmluZyhmb3JtdWxhTWF0Y2hbMF0pIDogJycpO1xufVxuXG52YXIgY3NzVmFyaWFibGVSZWdleCA9IC8tLVtcXFNdKi9nO1xuLyoqXG4gKiBGZXRjaGVzIHRoZSB2YWx1ZSBvZiBhIHBhc3NlZCBDU1MgVmFyaWFibGUuXG4gKlxuICogUGFzc3Rocm91Z2ggY2FuIGJlIGVuYWJsZWQgKG9mZiBieSBkZWZhdWx0KSBmb3Igd2hlbiB5b3UgYXJlIHVuc3VyZSBvZiB0aGUgaW5wdXQgYW5kIHdhbnQgbm9uLXZhcmlhYmxlIHZhbHVlcyB0byBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIGFuIGVycm9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdiYWNrZ3JvdW5kJzogY3NzVmFyKCctLWJhY2tncm91bmQtY29sb3InKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtjc3NWYXIoJy0tYmFja2dyb3VuZC1jb2xvcicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdiYWNrZ3JvdW5kJzogJ3JlZCdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBjc3NWYXIoY3NzVmFyaWFibGUsIHBhc3NUaHJvdWdoKSB7XG4gIGlmICghY3NzVmFyaWFibGUgfHwgIWNzc1ZhcmlhYmxlLm1hdGNoKGNzc1ZhcmlhYmxlUmVnZXgpKSB7XG4gICAgaWYgKHBhc3NUaHJvdWdoKSByZXR1cm4gY3NzVmFyaWFibGU7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzMpO1xuICB9XG5cbiAgdmFyIHZhcmlhYmxlVmFsdWU7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZVZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyaWFibGUpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuXG4gIGlmICh2YXJpYWJsZVZhbHVlKSB7XG4gICAgcmV0dXJuIHZhcmlhYmxlVmFsdWUudHJpbSgpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc0KTtcbiAgfVxufVxuXG4vLyBAcHJpdmF0ZVxuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxudmFyIHBvc2l0aW9uTWFwID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9wZXJ0eShwcm9wZXJ0eSwgcG9zaXRpb24pIHtcbiAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBzcGxpdFByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoJy0nKTtcblxuICBpZiAoc3BsaXRQcm9wZXJ0eS5sZW5ndGggPiAxKSB7XG4gICAgc3BsaXRQcm9wZXJ0eS5zcGxpY2UoMSwgMCwgcG9zaXRpb24pO1xuICAgIHJldHVybiBzcGxpdFByb3BlcnR5LnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHtcbiAgICAgIHJldHVybiBcIlwiICsgYWNjICsgY2FwaXRhbGl6ZVN0cmluZyh2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGpvaW5lZFByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMVwiICsgcG9zaXRpb24gKyBcIiQyXCIpO1xuICByZXR1cm4gcHJvcGVydHkgPT09IGpvaW5lZFByb3BlcnR5ID8gXCJcIiArIHByb3BlcnR5ICsgcG9zaXRpb24gOiBqb2luZWRQcm9wZXJ0eTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdHlsZXMocHJvcGVydHksIHZhbHVlc1dpdGhEZWZhdWx0cykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXNXaXRoRGVmYXVsdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodmFsdWVzV2l0aERlZmF1bHRzW2ldIHx8IHZhbHVlc1dpdGhEZWZhdWx0c1tpXSA9PT0gMCkge1xuICAgICAgc3R5bGVzW2dlbmVyYXRlUHJvcGVydHkocHJvcGVydHksIHBvc2l0aW9uTWFwW2ldKV0gPSB2YWx1ZXNXaXRoRGVmYXVsdHNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cbi8qKlxuICogRW5hYmxlcyBzaG9ydGhhbmQgZm9yIGRpcmVjdGlvbi1iYXNlZCBwcm9wZXJ0aWVzLiBJdCBhY2NlcHRzIGEgcHJvcGVydHkgKGh5cGhlbmF0ZWQgb3IgY2FtZWxDYXNlZCkgYW5kIHVwIHRvIGZvdXIgdmFsdWVzIHRoYXQgbWFwIHRvIHRvcCwgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQsIHJlc3BlY3RpdmVseS4gWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYW4gZW1wdHkgc3RyaW5nIHRvIGdldCBvbmx5IHRoZSBkaXJlY3Rpb25hbCB2YWx1ZXMgYXMgcHJvcGVydGllcy4gWW91IGNhbiBhbHNvIG9wdGlvbmFsbHkgcGFzcyBhIG51bGwgYXJndW1lbnQgZm9yIGEgZGlyZWN0aW9uYWwgdmFsdWUgdG8gaWdub3JlIGl0LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZGlyZWN0aW9uYWxQcm9wZXJ0eSgncGFkZGluZycsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtkaXJlY3Rpb25hbFByb3BlcnR5KCdwYWRkaW5nJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3BhZGRpbmdUb3AnOiAnMTJweCcsXG4gKiAgICdwYWRkaW5nUmlnaHQnOiAnMjRweCcsXG4gKiAgICdwYWRkaW5nQm90dG9tJzogJzM2cHgnLFxuICogICAncGFkZGluZ0xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGRpcmVjdGlvbmFsUHJvcGVydHkocHJvcGVydHkpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vICBwcmV0dGllci1pZ25vcmVcbiAgdmFyIGZpcnN0VmFsdWUgPSB2YWx1ZXNbMF0sXG4gICAgICBfdmFsdWVzJCA9IHZhbHVlc1sxXSxcbiAgICAgIHNlY29uZFZhbHVlID0gX3ZhbHVlcyQgPT09IHZvaWQgMCA/IGZpcnN0VmFsdWUgOiBfdmFsdWVzJCxcbiAgICAgIF92YWx1ZXMkMiA9IHZhbHVlc1syXSxcbiAgICAgIHRoaXJkVmFsdWUgPSBfdmFsdWVzJDIgPT09IHZvaWQgMCA/IGZpcnN0VmFsdWUgOiBfdmFsdWVzJDIsXG4gICAgICBfdmFsdWVzJDMgPSB2YWx1ZXNbM10sXG4gICAgICBmb3VydGhWYWx1ZSA9IF92YWx1ZXMkMyA9PT0gdm9pZCAwID8gc2Vjb25kVmFsdWUgOiBfdmFsdWVzJDM7XG4gIHZhciB2YWx1ZXNXaXRoRGVmYXVsdHMgPSBbZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlXTtcbiAgcmV0dXJuIGdlbmVyYXRlU3R5bGVzKHByb3BlcnR5LCB2YWx1ZXNXaXRoRGVmYXVsdHMpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIGVuZHMgd2l0aCBzb21ldGhpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuZHNXaXRoIChzdHJpbmcsIHN1ZmZpeCkge1xuICByZXR1cm4gc3RyaW5nLnN1YnN0cigtc3VmZml4Lmxlbmd0aCkgPT09IHN1ZmZpeDtcbn1cblxudmFyIGNzc1JlZ2V4ID0gL14oWystXT8oPzpcXGQrfFxcZCpcXC5cXGQrKSkoW2Etel0qfCUpJC87XG4vKipcbiAqIFJldHVybnMgYSBnaXZlbiBDU1MgdmFsdWUgbWludXMgaXRzIHVuaXQgb2YgbWVhc3VyZS5cbiAqXG4gKiBAZGVwcmVjYXRlZCAtIHN0cmlwVW5pdCdzIHVuaXRSZXR1cm4gZnVuY3Rpb25hbGl0eSBoYXMgYmVlbiBtYXJrZWQgZm9yIGRlcHJlY2F0aW9uIGluIHBvbGlzaGVkIDQuMC4gSXQncyBmdW5jdGlvbmFsaXR5IGhhcyBiZWVuIGJlZW4gbW92ZWQgdG8gZ2V0VmFsdWVBbmRVbml0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICctLWRpbWVuc2lvbic6IHN0cmlwVW5pdCgnMTAwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAtLWRpbWVuc2lvbjogJHtzdHJpcFVuaXQoJzEwMHB4Jyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJy0tZGltZW5zaW9uJzogMTAwXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc3RyaXBVbml0KHZhbHVlLCB1bml0UmV0dXJuKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdW5pdFJldHVybiA/IFt2YWx1ZSwgdW5kZWZpbmVkXSA6IHZhbHVlO1xuICB2YXIgbWF0Y2hlZFZhbHVlID0gdmFsdWUubWF0Y2goY3NzUmVnZXgpO1xuXG4gIGlmICh1bml0UmV0dXJuKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLndhcm4oXCJzdHJpcFVuaXQncyB1bml0UmV0dXJuIGZ1bmN0aW9uYWxpdHkgaGFzIGJlZW4gbWFya2VkIGZvciBkZXByZWNhdGlvbiBpbiBwb2xpc2hlZCA0LjAuIEl0J3MgZnVuY3Rpb25hbGl0eSBoYXMgYmVlbiBiZWVuIG1vdmVkIHRvIGdldFZhbHVlQW5kVW5pdC5cIik7XG4gICAgaWYgKG1hdGNoZWRWYWx1ZSkgcmV0dXJuIFtwYXJzZUZsb2F0KHZhbHVlKSwgbWF0Y2hlZFZhbHVlWzJdXTtcbiAgICByZXR1cm4gW3ZhbHVlLCB1bmRlZmluZWRdO1xuICB9XG5cbiAgaWYgKG1hdGNoZWRWYWx1ZSkgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgcGl4ZWwtdG8teCBjb252ZXJ0ZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBweHRvRmFjdG9yeSA9IGZ1bmN0aW9uIHB4dG9GYWN0b3J5KHRvKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHh2YWwsIGJhc2UpIHtcbiAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiYXNlID0gJzE2cHgnO1xuICAgIH1cblxuICAgIHZhciBuZXdQeHZhbCA9IHB4dmFsO1xuICAgIHZhciBuZXdCYXNlID0gYmFzZTtcblxuICAgIGlmICh0eXBlb2YgcHh2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIWVuZHNXaXRoKHB4dmFsLCAncHgnKSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2OSwgdG8sIHB4dmFsKTtcbiAgICAgIH1cblxuICAgICAgbmV3UHh2YWwgPSBzdHJpcFVuaXQocHh2YWwpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghZW5kc1dpdGgoYmFzZSwgJ3B4JykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzAsIHRvLCBiYXNlKTtcbiAgICAgIH1cblxuICAgICAgbmV3QmFzZSA9IHN0cmlwVW5pdChiYXNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld1B4dmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzEsIHB4dmFsLCB0byk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdCYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzIsIGJhc2UsIHRvKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIiArIG5ld1B4dmFsIC8gbmV3QmFzZSArIHRvO1xuICB9O1xufTtcblxuLyoqXG4gKiBDb252ZXJ0IHBpeGVsIHZhbHVlIHRvIGVtcy4gVGhlIGRlZmF1bHQgYmFzZSB2YWx1ZSBpcyAxNnB4LCBidXQgY2FuIGJlIGNoYW5nZWQgYnkgcGFzc2luZyBhXG4gKiBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHB4dmFsXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtiYXNlPScxNnB4J11cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdoZWlnaHQnOiBlbSgnMTZweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGhlaWdodDogJHtlbSgnMTZweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2hlaWdodCc6ICcxZW0nXG4gKiB9XG4gKi9cblxudmFyIGVtID0gLyojX19QVVJFX18qL3B4dG9GYWN0b3J5KCdlbScpO1xuXG52YXIgY3NzUmVnZXgkMSA9IC9eKFsrLV0/KD86XFxkK3xcXGQqXFwuXFxkKykpKFthLXpdKnwlKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGEgZ2l2ZW4gQ1NTIHZhbHVlIGFuZCBpdHMgdW5pdCBhcyBlbGVtZW50cyBvZiBhbiBhcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnLS1kaW1lbnNpb24nOiBnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMF0sXG4gKiAgICctLXVuaXQnOiBnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMV0sXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIC0tZGltZW5zaW9uOiAke2dldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVswXX07XG4gKiAgIC0tdW5pdDogJHtnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMV19O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJy0tZGltZW5zaW9uJzogMTAwLFxuICogICAnLS11bml0JzogJ3B4JyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRWYWx1ZUFuZFVuaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBbdmFsdWUsICcnXTtcbiAgdmFyIG1hdGNoZWRWYWx1ZSA9IHZhbHVlLm1hdGNoKGNzc1JlZ2V4JDEpO1xuICBpZiAobWF0Y2hlZFZhbHVlKSByZXR1cm4gW3BhcnNlRmxvYXQodmFsdWUpLCBtYXRjaGVkVmFsdWVbMl1dO1xuICByZXR1cm4gW3ZhbHVlLCB1bmRlZmluZWRdO1xufVxuXG52YXIgcmF0aW9OYW1lcyA9IHtcbiAgbWlub3JTZWNvbmQ6IDEuMDY3LFxuICBtYWpvclNlY29uZDogMS4xMjUsXG4gIG1pbm9yVGhpcmQ6IDEuMixcbiAgbWFqb3JUaGlyZDogMS4yNSxcbiAgcGVyZmVjdEZvdXJ0aDogMS4zMzMsXG4gIGF1Z0ZvdXJ0aDogMS40MTQsXG4gIHBlcmZlY3RGaWZ0aDogMS41LFxuICBtaW5vclNpeHRoOiAxLjYsXG4gIGdvbGRlblNlY3Rpb246IDEuNjE4LFxuICBtYWpvclNpeHRoOiAxLjY2NyxcbiAgbWlub3JTZXZlbnRoOiAxLjc3OCxcbiAgbWFqb3JTZXZlbnRoOiAxLjg3NSxcbiAgb2N0YXZlOiAyLFxuICBtYWpvclRlbnRoOiAyLjUsXG4gIG1ham9yRWxldmVudGg6IDIuNjY3LFxuICBtYWpvclR3ZWxmdGg6IDMsXG4gIGRvdWJsZU9jdGF2ZTogNFxufTtcblxuZnVuY3Rpb24gZ2V0UmF0aW8ocmF0aW9OYW1lKSB7XG4gIHJldHVybiByYXRpb05hbWVzW3JhdGlvTmFtZV07XG59XG4vKipcbiAqIEVzdGFibGlzaCBjb25zaXN0ZW50IG1lYXN1cmVtZW50cyBhbmQgc3BhY2lhbCByZWxhdGlvbnNoaXBzIHRocm91Z2hvdXQgeW91ciBwcm9qZWN0cyBieSBpbmNyZW1lbnRpbmcgYW4gZW0gb3IgcmVtIHZhbHVlIHVwIG9yIGRvd24gYSBkZWZpbmVkIHNjYWxlLiBXZSBwcm92aWRlIGEgbGlzdCBvZiBjb21tb25seSB1c2VkIHNjYWxlcyBhcyBwcmUtZGVmaW5lZCB2YXJpYWJsZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLy8gSW5jcmVtZW50IHR3byBzdGVwcyB1cCB0aGUgZGVmYXVsdCBzY2FsZVxuICogICAnZm9udFNpemUnOiBtb2R1bGFyU2NhbGUoMilcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgIC8vIEluY3JlbWVudCB0d28gc3RlcHMgdXAgdGhlIGRlZmF1bHQgc2NhbGVcbiAqICAgZm9udFNpemU6ICR7bW9kdWxhclNjYWxlKDIpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2ZvbnRTaXplJzogJzEuNzc2ODllbSdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIG1vZHVsYXJTY2FsZShzdGVwcywgYmFzZSwgcmF0aW8pIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnMWVtJztcbiAgfVxuXG4gIGlmIChyYXRpbyA9PT0gdm9pZCAwKSB7XG4gICAgcmF0aW8gPSAxLjMzMztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RlcHMgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByYXRpbyA9PT0gJ3N0cmluZycgJiYgIXJhdGlvTmFtZXNbcmF0aW9dKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDMpO1xuICB9XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycgPyBnZXRWYWx1ZUFuZFVuaXQoYmFzZSkgOiBbYmFzZSwgJyddLFxuICAgICAgcmVhbEJhc2UgPSBfcmVmWzBdLFxuICAgICAgdW5pdCA9IF9yZWZbMV07XG5cbiAgdmFyIHJlYWxSYXRpbyA9IHR5cGVvZiByYXRpbyA9PT0gJ3N0cmluZycgPyBnZXRSYXRpbyhyYXRpbykgOiByYXRpbztcblxuICBpZiAodHlwZW9mIHJlYWxCYXNlID09PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ0LCBiYXNlKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiICsgcmVhbEJhc2UgKiBNYXRoLnBvdyhyZWFsUmF0aW8sIHN0ZXBzKSArICh1bml0IHx8ICcnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHBpeGVsIHZhbHVlIHRvIHJlbXMuIFRoZSBkZWZhdWx0IGJhc2UgdmFsdWUgaXMgMTZweCwgYnV0IGNhbiBiZSBjaGFuZ2VkIGJ5IHBhc3NpbmcgYVxuICogc2Vjb25kIGFyZ3VtZW50IHRvIHRoZSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBweHZhbFxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbYmFzZT0nMTZweCddXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnaGVpZ2h0JzogcmVtKCcxNnB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgaGVpZ2h0OiAke3JlbSgnMTZweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2hlaWdodCc6ICcxcmVtJ1xuICogfVxuICovXG5cbnZhciByZW0gPSAvKiNfX1BVUkVfXyovcHh0b0ZhY3RvcnkoJ3JlbScpO1xuXG4vKipcbiAqIFJldHVybnMgYSBDU1MgY2FsYyBmb3JtdWxhIGZvciBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvZiBhIHByb3BlcnR5IGJldHdlZW4gdHdvIHZhbHVlcy4gQWNjZXB0cyBvcHRpb25hbCBtaW5TY3JlZW4gKGRlZmF1bHRzIHRvICczMjBweCcpIGFuZCBtYXhTY3JlZW4gKGRlZmF1bHRzIHRvICcxMjAwcHgnKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBmb250U2l6ZTogYmV0d2VlbignMjBweCcsICcxMDBweCcsICc0MDBweCcsICcxMDAwcHgnKSxcbiAqICAgZm9udFNpemU6IGJldHdlZW4oJzIwcHgnLCAnMTAwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBmb250U2l6ZTogJHtiZXR3ZWVuKCcyMHB4JywgJzEwMHB4JywgJzQwMHB4JywgJzEwMDBweCcpfTtcbiAqICAgZm9udFNpemU6ICR7YmV0d2VlbignMjBweCcsICcxMDBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBoMToge1xuICogICAnZm9udFNpemUnOiAnY2FsYygtMzMuMzMzMzMzMzMzMzMzMzRweCArIDEzLjMzMzMzMzMzMzMzMzMzNHZ3KScsXG4gKiAgICdmb250U2l6ZSc6ICdjYWxjKC05LjA5MDkwOTA5MDkwOTA5M3B4ICsgOS4wOTA5MDkwOTA5MDkwOTJ2dyknXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gYmV0d2Vlbihmcm9tU2l6ZSwgdG9TaXplLCBtaW5TY3JlZW4sIG1heFNjcmVlbikge1xuICBpZiAobWluU2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtaW5TY3JlZW4gPSAnMzIwcHgnO1xuICB9XG5cbiAgaWYgKG1heFNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWF4U2NyZWVuID0gJzEyMDBweCc7XG4gIH1cblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdChmcm9tU2l6ZSksXG4gICAgICB1bml0bGVzc0Zyb21TaXplID0gX2dldFZhbHVlQW5kVW5pdFswXSxcbiAgICAgIGZyb21TaXplVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXRbMV07XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQyID0gZ2V0VmFsdWVBbmRVbml0KHRvU2l6ZSksXG4gICAgICB1bml0bGVzc1RvU2l6ZSA9IF9nZXRWYWx1ZUFuZFVuaXQyWzBdLFxuICAgICAgdG9TaXplVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXQyWzFdO1xuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0MyA9IGdldFZhbHVlQW5kVW5pdChtaW5TY3JlZW4pLFxuICAgICAgdW5pdGxlc3NNaW5TY3JlZW4gPSBfZ2V0VmFsdWVBbmRVbml0M1swXSxcbiAgICAgIG1pblNjcmVlblVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0M1sxXTtcblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdDQgPSBnZXRWYWx1ZUFuZFVuaXQobWF4U2NyZWVuKSxcbiAgICAgIHVuaXRsZXNzTWF4U2NyZWVuID0gX2dldFZhbHVlQW5kVW5pdDRbMF0sXG4gICAgICBtYXhTY3JlZW5Vbml0ID0gX2dldFZhbHVlQW5kVW5pdDRbMV07XG5cbiAgaWYgKHR5cGVvZiB1bml0bGVzc01pblNjcmVlbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHVuaXRsZXNzTWF4U2NyZWVuICE9PSAnbnVtYmVyJyB8fCAhbWluU2NyZWVuVW5pdCB8fCAhbWF4U2NyZWVuVW5pdCB8fCBtaW5TY3JlZW5Vbml0ICE9PSBtYXhTY3JlZW5Vbml0KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB1bml0bGVzc0Zyb21TaXplICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdW5pdGxlc3NUb1NpemUgIT09ICdudW1iZXInIHx8IGZyb21TaXplVW5pdCAhPT0gdG9TaXplVW5pdCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ4KTtcbiAgfVxuXG4gIHZhciBzbG9wZSA9ICh1bml0bGVzc0Zyb21TaXplIC0gdW5pdGxlc3NUb1NpemUpIC8gKHVuaXRsZXNzTWluU2NyZWVuIC0gdW5pdGxlc3NNYXhTY3JlZW4pO1xuICB2YXIgYmFzZSA9IHVuaXRsZXNzVG9TaXplIC0gc2xvcGUgKiB1bml0bGVzc01heFNjcmVlbjtcbiAgcmV0dXJuIFwiY2FsYyhcIiArIGJhc2UudG9GaXhlZCgyKSArIChmcm9tU2l6ZVVuaXQgfHwgJycpICsgXCIgKyBcIiArICgxMDAgKiBzbG9wZSkudG9GaXhlZCgyKSArIFwidncpXCI7XG59XG5cbi8qKlxuICogQ1NTIHRvIGNvbnRhaW4gYSBmbG9hdCAoY3JlZGl0IHRvIENTU01vam8pLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAuLi5jbGVhckZpeCgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2NsZWFyRml4KCl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICcmOjphZnRlcic6IHtcbiAqICAgJ2NsZWFyJzogJ2JvdGgnLFxuICogICAnY29udGVudCc6ICdcIlwiJyxcbiAqICAgJ2Rpc3BsYXknOiAndGFibGUnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyRml4KHBhcmVudCkge1xuICB2YXIgX3JlZjtcblxuICBpZiAocGFyZW50ID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnQgPSAnJic7XG4gIH1cblxuICB2YXIgcHNldWRvU2VsZWN0b3IgPSBwYXJlbnQgKyBcIjo6YWZ0ZXJcIjtcbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltwc2V1ZG9TZWxlY3Rvcl0gPSB7XG4gICAgY2xlYXI6ICdib3RoJyxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgZGlzcGxheTogJ3RhYmxlJ1xuICB9LCBfcmVmO1xufVxuXG4vKipcbiAqIENTUyB0byBmdWxseSBjb3ZlciBhbiBhcmVhLiBDYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgYW4gb2Zmc2V0IHRvIGFjdCBhcyBhIFwicGFkZGluZ1wiLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmNvdmVyKClcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtjb3ZlcigpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAqICAgJ3RvcCc6ICcwJyxcbiAqICAgJ3JpZ2h0OiAnMCcsXG4gKiAgICdib3R0b20nOiAnMCcsXG4gKiAgICdsZWZ0OiAnMCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gY292ZXIob2Zmc2V0KSB7XG4gIGlmIChvZmZzZXQgPT09IHZvaWQgMCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogb2Zmc2V0LFxuICAgIHJpZ2h0OiBvZmZzZXQsXG4gICAgYm90dG9tOiBvZmZzZXQsXG4gICAgbGVmdDogb2Zmc2V0XG4gIH07XG59XG5cbi8qKlxuICogQ1NTIHRvIHJlcHJlc2VudCB0cnVuY2F0ZWQgdGV4dCB3aXRoIGFuIGVsbGlwc2lzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmVsbGlwc2lzKCcyNTBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7ZWxsaXBzaXMoJzI1MHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxuICogICAnbWF4V2lkdGgnOiAnMjUwcHgnLFxuICogICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAqICAgJ3RleHRPdmVyZmxvdyc6ICdlbGxpcHNpcycsXG4gKiAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gKiAgICd3b3JkV3JhcCc6ICdub3JtYWwnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGVsbGlwc2lzKHdpZHRoKSB7XG4gIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGggPSAnMTAwJSc7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1heFdpZHRoOiB3aWR0aCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHdvcmRXcmFwOiAnbm9ybWFsJ1xuICB9O1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8pIHsgdmFyIGkgPSAwOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHJldHVybiBmdW5jdGlvbiAoKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH07IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IHJldHVybiBpLm5leHQuYmluZChpKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHNldCBvZiBtZWRpYSBxdWVyaWVzIHRoYXQgcmVzaXplcyBhIHByb3BlcnR5IChvciBzZXQgb2YgcHJvcGVydGllcykgYmV0d2VlbiBhIHByb3ZpZGVkIGZyb21TaXplIGFuZCB0b1NpemUuIEFjY2VwdHMgb3B0aW9uYWwgbWluU2NyZWVuIChkZWZhdWx0cyB0byAnMzIwcHgnKSBhbmQgbWF4U2NyZWVuIChkZWZhdWx0cyB0byAnMTIwMHB4JykgdG8gY29uc3RyYWluIHRoZSBpbnRlcnBvbGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmZsdWlkUmFuZ2UoXG4gKiAgICB7XG4gKiAgICAgICAgcHJvcDogJ3BhZGRpbmcnLFxuICogICAgICAgIGZyb21TaXplOiAnMjBweCcsXG4gKiAgICAgICAgdG9TaXplOiAnMTAwcHgnLFxuICogICAgICB9LFxuICogICAgICAnNDAwcHgnLFxuICogICAgICAnMTAwMHB4JyxcbiAqICAgIClcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtmbHVpZFJhbmdlKFxuICogICAgICB7XG4gKiAgICAgICAgcHJvcDogJ3BhZGRpbmcnLFxuICogICAgICAgIGZyb21TaXplOiAnMjBweCcsXG4gKiAgICAgICAgdG9TaXplOiAnMTAwcHgnLFxuICogICAgICB9LFxuICogICAgICAnNDAwcHgnLFxuICogICAgICAnMTAwMHB4JyxcbiAqICAgICl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpXCI6IE9iamVjdCB7XG4gKiAgICAgXCJwYWRkaW5nXCI6IFwiMTAwcHhcIixcbiAqICAgfSxcbiAqICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpXCI6IE9iamVjdCB7XG4gKiAgICAgXCJwYWRkaW5nXCI6IFwiY2FsYygtMzMuMzMzMzMzMzMzMzMzMzRweCArIDEzLjMzMzMzMzMzMzMzMzMzNHZ3KVwiLFxuICogICB9LFxuICogICBcInBhZGRpbmdcIjogXCIyMHB4XCIsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGZsdWlkUmFuZ2UoY3NzUHJvcCwgbWluU2NyZWVuLCBtYXhTY3JlZW4pIHtcbiAgaWYgKG1pblNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWluU2NyZWVuID0gJzMyMHB4JztcbiAgfVxuXG4gIGlmIChtYXhTY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1heFNjcmVlbiA9ICcxMjAwcHgnO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGNzc1Byb3ApICYmIHR5cGVvZiBjc3NQcm9wICE9PSAnb2JqZWN0JyB8fCBjc3NQcm9wID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDkpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcCkpIHtcbiAgICB2YXIgbWVkaWFRdWVyaWVzID0ge307XG4gICAgdmFyIGZhbGxiYWNrcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjc3NQcm9wKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBfZXh0ZW5kczIsIF9leHRlbmRzMztcblxuICAgICAgdmFyIG9iaiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoIW9iai5wcm9wIHx8ICFvYmouZnJvbVNpemUgfHwgIW9iai50b1NpemUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTApO1xuICAgICAgfVxuXG4gICAgICBmYWxsYmFja3Nbb2JqLnByb3BdID0gb2JqLmZyb21TaXplO1xuICAgICAgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWluU2NyZWVuICsgXCIpXCJdID0gX2V4dGVuZHMoe30sIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1pblNjcmVlbiArIFwiKVwiXSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbb2JqLnByb3BdID0gYmV0d2VlbihvYmouZnJvbVNpemUsIG9iai50b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSwgX2V4dGVuZHMyKSk7XG4gICAgICBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtYXhTY3JlZW4gKyBcIilcIl0gPSBfZXh0ZW5kcyh7fSwgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWF4U2NyZWVuICsgXCIpXCJdLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tvYmoucHJvcF0gPSBvYmoudG9TaXplLCBfZXh0ZW5kczMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGZhbGxiYWNrcywge30sIG1lZGlhUXVlcmllcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMztcblxuICAgIGlmICghY3NzUHJvcC5wcm9wIHx8ICFjc3NQcm9wLmZyb21TaXplIHx8ICFjc3NQcm9wLnRvU2l6ZSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTEpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVmMyA9IHt9LCBfcmVmM1tjc3NQcm9wLnByb3BdID0gY3NzUHJvcC5mcm9tU2l6ZSwgX3JlZjNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtaW5TY3JlZW4gKyBcIilcIl0gPSAoX3JlZiA9IHt9LCBfcmVmW2Nzc1Byb3AucHJvcF0gPSBiZXR3ZWVuKGNzc1Byb3AuZnJvbVNpemUsIGNzc1Byb3AudG9TaXplLCBtaW5TY3JlZW4sIG1heFNjcmVlbiksIF9yZWYpLCBfcmVmM1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1heFNjcmVlbiArIFwiKVwiXSA9IChfcmVmMiA9IHt9LCBfcmVmMltjc3NQcm9wLnByb3BdID0gY3NzUHJvcC50b1NpemUsIF9yZWYyKSwgX3JlZjM7XG4gIH1cbn1cblxudmFyIGRhdGFVUklSZWdleCA9IC9eXFxzKmRhdGE6KFthLXpdK1xcL1thLXotXSsoO1thLXotXSs9W2Etei1dKyk/KT8oO2NoYXJzZXQ9W2EtejAtOS1dKyk/KDtiYXNlNjQpPyxbYS16MC05ISQmJywoKSorLDs9XFwtLl9+OkAvPyVcXHNdKlxccyokL2k7XG52YXIgZm9ybWF0SGludE1hcCA9IHtcbiAgd29mZjogJ3dvZmYnLFxuICB3b2ZmMjogJ3dvZmYyJyxcbiAgdHRmOiAndHJ1ZXR5cGUnLFxuICBvdGY6ICdvcGVudHlwZScsXG4gIGVvdDogJ2VtYmVkZGVkLW9wZW50eXBlJyxcbiAgc3ZnOiAnc3ZnJyxcbiAgc3ZnejogJ3N2Zydcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybWF0SGludChmb3JtYXQsIGZvcm1hdEhpbnQpIHtcbiAgaWYgKCFmb3JtYXRIaW50KSByZXR1cm4gJyc7XG4gIHJldHVybiBcIiBmb3JtYXQoXFxcIlwiICsgZm9ybWF0SGludE1hcFtmb3JtYXRdICsgXCJcXFwiKVwiO1xufVxuXG5mdW5jdGlvbiBpc0RhdGFVUkkoZm9udEZpbGVQYXRoKSB7XG4gIHJldHVybiAhIWZvbnRGaWxlUGF0aC5tYXRjaChkYXRhVVJJUmVnZXgpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZpbGVSZWZlcmVuY2VzKGZvbnRGaWxlUGF0aCwgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpIHtcbiAgaWYgKGlzRGF0YVVSSShmb250RmlsZVBhdGgpKSB7XG4gICAgcmV0dXJuIFwidXJsKFxcXCJcIiArIGZvbnRGaWxlUGF0aCArIFwiXFxcIilcIiArIGdlbmVyYXRlRm9ybWF0SGludChmaWxlRm9ybWF0c1swXSwgZm9ybWF0SGludCk7XG4gIH1cblxuICB2YXIgZmlsZUZvbnRSZWZlcmVuY2VzID0gZmlsZUZvcm1hdHMubWFwKGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gXCJ1cmwoXFxcIlwiICsgZm9udEZpbGVQYXRoICsgXCIuXCIgKyBmb3JtYXQgKyBcIlxcXCIpXCIgKyBnZW5lcmF0ZUZvcm1hdEhpbnQoZm9ybWF0LCBmb3JtYXRIaW50KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlRm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMb2NhbFJlZmVyZW5jZXMobG9jYWxGb250cykge1xuICB2YXIgbG9jYWxGb250UmVmZXJlbmNlcyA9IGxvY2FsRm9udHMubWFwKGZ1bmN0aW9uIChmb250KSB7XG4gICAgcmV0dXJuIFwibG9jYWwoXFxcIlwiICsgZm9udCArIFwiXFxcIilcIjtcbiAgfSk7XG4gIHJldHVybiBsb2NhbEZvbnRSZWZlcmVuY2VzLmpvaW4oJywgJyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU291cmNlcyhmb250RmlsZVBhdGgsIGxvY2FsRm9udHMsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSB7XG4gIHZhciBmb250UmVmZXJlbmNlcyA9IFtdO1xuICBpZiAobG9jYWxGb250cykgZm9udFJlZmVyZW5jZXMucHVzaChnZW5lcmF0ZUxvY2FsUmVmZXJlbmNlcyhsb2NhbEZvbnRzKSk7XG5cbiAgaWYgKGZvbnRGaWxlUGF0aCkge1xuICAgIGZvbnRSZWZlcmVuY2VzLnB1c2goZ2VuZXJhdGVGaWxlUmVmZXJlbmNlcyhmb250RmlsZVBhdGgsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSk7XG4gIH1cblxuICByZXR1cm4gZm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cbi8qKlxuICogQ1NTIGZvciBhIEBmb250LWZhY2UgZGVjbGFyYXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgYmFzaWMgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLmZvbnRGYWNlKHtcbiAqICAgICAgJ2ZvbnRGYW1pbHknOiAnU2Fucy1Qcm8nLFxuICogICAgICAnZm9udEZpbGVQYXRoJzogJ3BhdGgvdG8vZmlsZSdcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgYmFzaWMgdXNhZ2VcbiAqIGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgJHtcbiAqICAgZm9udEZhY2Uoe1xuICogICAgICdmb250RmFtaWx5JzogJ1NhbnMtUHJvJyxcbiAqICAgICAnZm9udEZpbGVQYXRoJzogJ3BhdGgvdG8vZmlsZSdcbiAqICAgfVxuICogKX1gXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdAZm9udC1mYWNlJzoge1xuICogICAnZm9udEZhbWlseSc6ICdTYW5zLVBybycsXG4gKiAgICdzcmMnOiAndXJsKFwicGF0aC90by9maWxlLmVvdFwiKSwgdXJsKFwicGF0aC90by9maWxlLndvZmYyXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUud29mZlwiKSwgdXJsKFwicGF0aC90by9maWxlLnR0ZlwiKSwgdXJsKFwicGF0aC90by9maWxlLnN2Z1wiKScsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBmb250RmFjZShfcmVmKSB7XG4gIHZhciBmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZpbGVQYXRoID0gX3JlZi5mb250RmlsZVBhdGgsXG4gICAgICBmb250U3RyZXRjaCA9IF9yZWYuZm9udFN0cmV0Y2gsXG4gICAgICBmb250U3R5bGUgPSBfcmVmLmZvbnRTdHlsZSxcbiAgICAgIGZvbnRWYXJpYW50ID0gX3JlZi5mb250VmFyaWFudCxcbiAgICAgIGZvbnRXZWlnaHQgPSBfcmVmLmZvbnRXZWlnaHQsXG4gICAgICBfcmVmJGZpbGVGb3JtYXRzID0gX3JlZi5maWxlRm9ybWF0cyxcbiAgICAgIGZpbGVGb3JtYXRzID0gX3JlZiRmaWxlRm9ybWF0cyA9PT0gdm9pZCAwID8gWydlb3QnLCAnd29mZjInLCAnd29mZicsICd0dGYnLCAnc3ZnJ10gOiBfcmVmJGZpbGVGb3JtYXRzLFxuICAgICAgX3JlZiRmb3JtYXRIaW50ID0gX3JlZi5mb3JtYXRIaW50LFxuICAgICAgZm9ybWF0SGludCA9IF9yZWYkZm9ybWF0SGludCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGZvcm1hdEhpbnQsXG4gICAgICBsb2NhbEZvbnRzID0gX3JlZi5sb2NhbEZvbnRzLFxuICAgICAgdW5pY29kZVJhbmdlID0gX3JlZi51bmljb2RlUmFuZ2UsXG4gICAgICBmb250RGlzcGxheSA9IF9yZWYuZm9udERpc3BsYXksXG4gICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3MgPSBfcmVmLmZvbnRWYXJpYXRpb25TZXR0aW5ncyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3MgPSBfcmVmLmZvbnRGZWF0dXJlU2V0dGluZ3M7XG4gIC8vIEVycm9yIEhhbmRsaW5nXG4gIGlmICghZm9udEZhbWlseSkgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTUpO1xuXG4gIGlmICghZm9udEZpbGVQYXRoICYmICFsb2NhbEZvbnRzKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTIpO1xuICB9XG5cbiAgaWYgKGxvY2FsRm9udHMgJiYgIUFycmF5LmlzQXJyYXkobG9jYWxGb250cykpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Myk7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsZUZvcm1hdHMpKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTQpO1xuICB9XG5cbiAgdmFyIGZvbnRGYWNlRGVjbGFyYXRpb24gPSB7XG4gICAgJ0Bmb250LWZhY2UnOiB7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgc3JjOiBnZW5lcmF0ZVNvdXJjZXMoZm9udEZpbGVQYXRoLCBsb2NhbEZvbnRzLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCksXG4gICAgICB1bmljb2RlUmFuZ2U6IHVuaWNvZGVSYW5nZSxcbiAgICAgIGZvbnRTdHJldGNoOiBmb250U3RyZXRjaCxcbiAgICAgIGZvbnRTdHlsZTogZm9udFN0eWxlLFxuICAgICAgZm9udFZhcmlhbnQ6IGZvbnRWYXJpYW50LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnREaXNwbGF5OiBmb250RGlzcGxheSxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogZm9udFZhcmlhdGlvblNldHRpbmdzLFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogZm9udEZlYXR1cmVTZXR0aW5nc1xuICAgIH1cbiAgfTsgLy8gUmVtb3ZlcyB1bmRlZmluZWQgZmllbGRzIGZvciBjbGVhbmVyIGNzcyBvYmplY3QuXG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9udEZhY2VEZWNsYXJhdGlvbikpO1xufVxuXG4vKipcbiAqIENTUyB0byBoaWRlIHRleHQgdG8gc2hvdyBhIGJhY2tncm91bmQgaW1hZ2UgaW4gYSBTRU8tZnJpZW5kbHkgd2F5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAndXJsKGxvZ28ucG5nKScsXG4gKiAgIC4uLmhpZGVUZXh0KCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmRJbWFnZTogdXJsKGxvZ28ucG5nKTtcbiAqICAgJHtoaWRlVGV4dCgpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwobG9nby5wbmcpJyxcbiAqICAgJ3RleHRJbmRlbnQnOiAnMTAxJScsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuICogfVxuICovXG5mdW5jdGlvbiBoaWRlVGV4dCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0SW5kZW50OiAnMTAxJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH07XG59XG5cbi8qKlxuICogQ1NTIHRvIGhpZGUgY29udGVudCB2aXN1YWxseSBidXQgcmVtYWluIGFjY2Vzc2libGUgdG8gc2NyZWVuIHJlYWRlcnMuXG4gKiBmcm9tIFtIVE1MNSBCb2lsZXJwbGF0ZV0oaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi85YTE3NmY1N2FmMWNmZThlYzcwMzAwZGE0NjIxZmI5YjA3ZTVmYTMxL3NyYy9jc3MvbWFpbi5jc3MjTDEyMSlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5oaWRlVmlzdWFsbHkoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtoaWRlVmlzdWFsbHkoKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICdib3JkZXInOiAnMCcsXG4gKiAgICdjbGlwJzogJ3JlY3QoMCAwIDAgMCknLFxuICogICAnaGVpZ2h0JzogJzFweCcsXG4gKiAgICdtYXJnaW4nOiAnLTFweCcsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAncGFkZGluZyc6ICcwJyxcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAqICAgJ3doaXRlU3BhY2UnOiAnbm93cmFwJyxcbiAqICAgJ3dpZHRoJzogJzFweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpZGVWaXN1YWxseSgpIHtcbiAgcmV0dXJuIHtcbiAgICBib3JkZXI6ICcwJyxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHdpZHRoOiAnMXB4J1xuICB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldCBIaURQSSBkZXZpY2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgW2hpRFBJKDEuNSldOiB7XG4gKiAgICB3aWR0aDogMjAwcHg7XG4gKiAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2hpRFBJKDEuNSl9IHtcbiAqICAgICB3aWR0aDogMjAwcHg7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNS8xKSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpJzoge1xuICogICAnd2lkdGgnOiAnMjAwcHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBoaURQSShyYXRpbykge1xuICBpZiAocmF0aW8gPT09IHZvaWQgMCkge1xuICAgIHJhdGlvID0gMS4zO1xuICB9XG5cbiAgcmV0dXJuIFwiXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiKSxcXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IFwiICsgcmF0aW8gKyBcIiksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiLzEpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiBcIiArIE1hdGgucm91bmQocmF0aW8gKiA5NikgKyBcImRwaSksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IFwiICsgcmF0aW8gKyBcImRwcHgpXFxuICBcIjtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0R3JhZGllbnRWYWx1ZShsaXRlcmFscykge1xuICB2YXIgdGVtcGxhdGUgPSAnJztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3Vic3RpdHV0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3Vic3RpdHV0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpdGVyYWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGVtcGxhdGUgKz0gbGl0ZXJhbHNbaV07XG5cbiAgICBpZiAoaSA9PT0gc3Vic3RpdHV0aW9ucy5sZW5ndGggLSAxICYmIHN1YnN0aXR1dGlvbnNbaV0pIHtcbiAgICAgIHZhciBkZWZpbmVkVmFsdWVzID0gc3Vic3RpdHV0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHN1YnN0aXR1dGUpIHtcbiAgICAgICAgcmV0dXJuICEhc3Vic3RpdHV0ZTtcbiAgICAgIH0pOyAvLyBBZGRzIGxlYWRpbmcgY29tYSBpZiBwcm9wZXJ0aWVzIHByZWNlZWQgY29sb3Itc3RvcHNcblxuICAgICAgaWYgKGRlZmluZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgdGVtcGxhdGUgKz0gXCIsIFwiICsgc3Vic3RpdHV0aW9uc1tpXTsgLy8gTm8gdHJhaWxpbmcgc3BhY2UgaWYgY29sb3Itc3RvcHMgaXMgdGhlIG9ubHkgcGFyYW0gcHJvdmlkZWRcbiAgICAgIH0gZWxzZSBpZiAoZGVmaW5lZFZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGVtcGxhdGUgKz0gXCJcIiArIHN1YnN0aXR1dGlvbnNbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdWJzdGl0dXRpb25zW2ldKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBzdWJzdGl0dXRpb25zW2ldICsgXCIgXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICB2YXIgZGF0YSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJsaW5lYXItZ3JhZGllbnQoXCIsIFwiXCIsIFwiKVwiXSk7XG5cbiAgX3RlbXBsYXRlT2JqZWN0ID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENTUyBmb3IgZGVjbGFyaW5nIGEgbGluZWFyIGdyYWRpZW50LCBpbmNsdWRpbmcgYSBmYWxsYmFjayBiYWNrZ3JvdW5kLWNvbG9yLiBUaGUgZmFsbGJhY2sgaXMgZWl0aGVyIHRoZSBmaXJzdCBjb2xvci1zdG9wIG9yIGFuIGV4cGxpY2l0bHkgcGFzc2VkIGZhbGxiYWNrIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmxpbmVhckdyYWRpZW50KHtcbiAgICAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAgICAgICAgdG9EaXJlY3Rpb246ICd0byB0b3AgcmlnaHQnLFxuICAgICAgICBmYWxsYmFjazogJyNGRkYnLFxuICAgICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtsaW5lYXJHcmFkaWVudCh7XG4gICAgICAgIGNvbG9yU3RvcHM6IFsnIzAwRkZGRiAwJScsICdyZ2JhKDAsIDAsIDI1NSwgMCkgNTAlJywgJyMwMDAwRkYgOTUlJ10sXG4gICAgICAgIHRvRGlyZWN0aW9uOiAndG8gdG9wIHJpZ2h0JyxcbiAgICAgICAgZmFsbGJhY2s6ICcjRkZGJyxcbiAgICAgIH0pfVxuICpgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAnYmFja2dyb3VuZENvbG9yJzogJyNGRkYnLFxuICogICAnYmFja2dyb3VuZEltYWdlJzogJ2xpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMEZGRkYgMCUsIHJnYmEoMCwgMCwgMjU1LCAwKSA1MCUsICMwMDAwRkYgOTUlKScsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KF9yZWYpIHtcbiAgdmFyIGNvbG9yU3RvcHMgPSBfcmVmLmNvbG9yU3RvcHMsXG4gICAgICBmYWxsYmFjayA9IF9yZWYuZmFsbGJhY2ssXG4gICAgICBfcmVmJHRvRGlyZWN0aW9uID0gX3JlZi50b0RpcmVjdGlvbixcbiAgICAgIHRvRGlyZWN0aW9uID0gX3JlZiR0b0RpcmVjdGlvbiA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHRvRGlyZWN0aW9uO1xuXG4gIGlmICghY29sb3JTdG9wcyB8fCBjb2xvclN0b3BzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Nik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogZmFsbGJhY2sgfHwgY29sb3JTdG9wc1swXS5zcGxpdCgnICcpWzBdLFxuICAgIGJhY2tncm91bmRJbWFnZTogY29uc3RydWN0R3JhZGllbnRWYWx1ZShfdGVtcGxhdGVPYmplY3QoKSwgdG9EaXJlY3Rpb24sIGNvbG9yU3RvcHMuam9pbignLCAnKSlcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gbm9ybWFsaXplIGFibm9ybWFsaXRpZXMgYWNyb3NzIGJyb3dzZXJzIChub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLm5vcm1hbGl6ZSgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYCR7bm9ybWFsaXplKCl9YFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBodG1sIHtcbiAqICAgbGluZUhlaWdodDogMS4xNSxcbiAqICAgdGV4dFNpemVBZGp1c3Q6IDEwMCUsXG4gKiB9IC4uLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUoKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBbKF9yZWYgPSB7XG4gICAgaHRtbDoge1xuICAgICAgbGluZUhlaWdodDogJzEuMTUnLFxuICAgICAgdGV4dFNpemVBZGp1c3Q6ICcxMDAlJ1xuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIG1haW46IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogJzJlbScsXG4gICAgICBtYXJnaW46ICcwLjY3ZW0gMCdcbiAgICB9LFxuICAgIGhyOiB7XG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgICB9LFxuICAgIHByZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZSwgbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAnMWVtJ1xuICAgIH0sXG4gICAgYToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICAnYWJiclt0aXRsZV0nOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xuICAgIH1cbiAgfSwgX3JlZltcImIsXFxuICAgIHN0cm9uZ1wiXSA9IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZGVyJ1xuICB9LCBfcmVmW1wiY29kZSxcXG4gICAga2JkLFxcbiAgICBzYW1wXCJdID0ge1xuICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UsIG1vbm9zcGFjZScsXG4gICAgZm9udFNpemU6ICcxZW0nXG4gIH0sIF9yZWYuc21hbGwgPSB7XG4gICAgZm9udFNpemU6ICc4MCUnXG4gIH0sIF9yZWZbXCJzdWIsXFxuICAgIHN1cFwiXSA9IHtcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgbGluZUhlaWdodDogJzAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZSdcbiAgfSwgX3JlZi5zdWIgPSB7XG4gICAgYm90dG9tOiAnLTAuMjVlbSdcbiAgfSwgX3JlZi5zdXAgPSB7XG4gICAgdG9wOiAnLTAuNWVtJ1xuICB9LCBfcmVmLmltZyA9IHtcbiAgICBib3JkZXJTdHlsZTogJ25vbmUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIGlucHV0LFxcbiAgICBvcHRncm91cCxcXG4gICAgc2VsZWN0LFxcbiAgICB0ZXh0YXJlYVwiXSA9IHtcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gICAgbWFyZ2luOiAnMCdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaW5wdXRcIl0gPSB7XG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBzZWxlY3RcIl0gPSB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIGh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gICAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdXCJdID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdidXR0b24nXG4gIH0sIF9yZWZbXCJidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lclwiXSA9IHtcbiAgICBib3JkZXJTdHlsZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6ICcwJ1xuICB9LCBfcmVmW1wiYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3JpbmdcIl0gPSB7XG4gICAgb3V0bGluZTogJzFweCBkb3R0ZWQgQnV0dG9uVGV4dCdcbiAgfSwgX3JlZi5maWVsZHNldCA9IHtcbiAgICBwYWRkaW5nOiAnMC4zNWVtIDAuNjI1ZW0gMC43NWVtJ1xuICB9LCBfcmVmLmxlZ2VuZCA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgd2hpdGVTcGFjZTogJ25vcm1hbCdcbiAgfSwgX3JlZi5wcm9ncmVzcyA9IHtcbiAgICB2ZXJ0aWNhbEFsaWduOiAnYmFzZWxpbmUnXG4gIH0sIF9yZWYudGV4dGFyZWEgPSB7XG4gICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICB9LCBfcmVmW1wiW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuICAgIFt0eXBlPVxcXCJyYWRpb1xcXCJdXCJdID0ge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6ICcwJ1xuICB9LCBfcmVmW1wiW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIl0gPSB7XG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfSwgX3JlZlsnW3R5cGU9XCJzZWFyY2hcIl0nXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAndGV4dGZpZWxkJyxcbiAgICBvdXRsaW5lT2Zmc2V0OiAnLTJweCdcbiAgfSwgX3JlZlsnW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24nXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZSdcbiAgfSwgX3JlZlsnOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdidXR0b24nLFxuICAgIGZvbnQ6ICdpbmhlcml0J1xuICB9LCBfcmVmLmRldGFpbHMgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LCBfcmVmLnN1bW1hcnkgPSB7XG4gICAgZGlzcGxheTogJ2xpc3QtaXRlbSdcbiAgfSwgX3JlZi50ZW1wbGF0ZSA9IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfSwgX3JlZlsnW2hpZGRlbl0nXSA9IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfSwgX3JlZiksIHtcbiAgICAnYWJiclt0aXRsZV0nOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSBkb3R0ZWQnXG4gICAgfVxuICB9XTtcbn1cblxuZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0JDEoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcInJhZGlhbC1ncmFkaWVudChcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCIpXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QkMSA9IGZ1bmN0aW9uIF90ZW1wbGF0ZU9iamVjdCgpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBDU1MgZm9yIGRlY2xhcmluZyBhIHJhZGlhbCBncmFkaWVudCwgaW5jbHVkaW5nIGEgZmFsbGJhY2sgYmFja2dyb3VuZC1jb2xvci4gVGhlIGZhbGxiYWNrIGlzIGVpdGhlciB0aGUgZmlyc3QgY29sb3Itc3RvcCBvciBhbiBleHBsaWNpdGx5IHBhc3NlZCBmYWxsYmFjayBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5yYWRpYWxHcmFkaWVudCh7XG4gKiAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAqICAgICBleHRlbnQ6ICdmYXJ0aGVzdC1jb3JuZXIgYXQgNDVweCA0NXB4JyxcbiAqICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gKiAgICAgc2hhcGU6ICdlbGxpcHNlJyxcbiAqICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtyYWRpYWxHcmFkaWVudCh7XG4gKiAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAqICAgICBleHRlbnQ6ICdmYXJ0aGVzdC1jb3JuZXIgYXQgNDVweCA0NXB4JyxcbiAqICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gKiAgICAgc2hhcGU6ICdlbGxpcHNlJyxcbiAqICAgfSl9XG4gKmBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzAwRkZGRicsXG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAncmFkaWFsLWdyYWRpZW50KGNlbnRlciBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgsICMwMEZGRkYgMCUsIHJnYmEoMCwgMCwgMjU1LCAwKSA1MCUsICMwMDAwRkYgOTUlKScsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50KF9yZWYpIHtcbiAgdmFyIGNvbG9yU3RvcHMgPSBfcmVmLmNvbG9yU3RvcHMsXG4gICAgICBfcmVmJGV4dGVudCA9IF9yZWYuZXh0ZW50LFxuICAgICAgZXh0ZW50ID0gX3JlZiRleHRlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRleHRlbnQsXG4gICAgICBmYWxsYmFjayA9IF9yZWYuZmFsbGJhY2ssXG4gICAgICBfcmVmJHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbixcbiAgICAgIHBvc2l0aW9uID0gX3JlZiRwb3NpdGlvbiA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHBvc2l0aW9uLFxuICAgICAgX3JlZiRzaGFwZSA9IF9yZWYuc2hhcGUsXG4gICAgICBzaGFwZSA9IF9yZWYkc2hhcGUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRzaGFwZTtcblxuICBpZiAoIWNvbG9yU3RvcHMgfHwgY29sb3JTdG9wcy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhbGxiYWNrIHx8IGNvbG9yU3RvcHNbMF0uc3BsaXQoJyAnKVswXSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbnN0cnVjdEdyYWRpZW50VmFsdWUoX3RlbXBsYXRlT2JqZWN0JDEoKSwgcG9zaXRpb24sIHNoYXBlLCBleHRlbnQsIGNvbG9yU3RvcHMuam9pbignLCAnKSlcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciB0byBnZW5lcmF0ZSBhIHJldGluYSBiYWNrZ3JvdW5kIGltYWdlIGFuZCBub24tcmV0aW5hXG4gKiBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgcmV0aW5hIGJhY2tncm91bmQgaW1hZ2Ugd2lsbCBvdXRwdXQgdG8gYSBIaURQSSBtZWRpYSBxdWVyeS4gVGhlIG1peGluIHVzZXNcbiAqIGEgXzJ4LnBuZyBmaWxlbmFtZSBzdWZmaXggYnkgZGVmYXVsdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogIC4uLnJldGluYUltYWdlKCdteS1pbWcnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3JldGluYUltYWdlKCdteS1pbWcnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwobXktaW1nLnBuZyknLFxuICogICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpLFxuICogICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMy8xKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE0NGRwaSksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KSc6IHtcbiAqICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwobXktaW1nXzJ4LnBuZyknLFxuICogICB9XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJldGluYUltYWdlKGZpbGVuYW1lLCBiYWNrZ3JvdW5kU2l6ZSwgZXh0ZW5zaW9uLCByZXRpbmFGaWxlbmFtZSwgcmV0aW5hU3VmZml4KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChleHRlbnNpb24gPT09IHZvaWQgMCkge1xuICAgIGV4dGVuc2lvbiA9ICdwbmcnO1xuICB9XG5cbiAgaWYgKHJldGluYVN1ZmZpeCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0aW5hU3VmZml4ID0gJ18yeCc7XG4gIH1cblxuICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTgpO1xuICB9IC8vIFJlcGxhY2UgdGhlIGRvdCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBwYXNzZWQgZXh0ZW5zaW9uIGlmIG9uZSBleGlzdHNcblxuXG4gIHZhciBleHQgPSBleHRlbnNpb24ucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgdmFyIHJGaWxlbmFtZSA9IHJldGluYUZpbGVuYW1lID8gcmV0aW5hRmlsZW5hbWUgKyBcIi5cIiArIGV4dCA6IFwiXCIgKyBmaWxlbmFtZSArIHJldGluYVN1ZmZpeCArIFwiLlwiICsgZXh0O1xuICByZXR1cm4gX3JlZiA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgZmlsZW5hbWUgKyBcIi5cIiArIGV4dCArIFwiKVwiXG4gIH0sIF9yZWZbaGlEUEkoKV0gPSBfZXh0ZW5kcyh7XG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHJGaWxlbmFtZSArIFwiKVwiXG4gIH0sIGJhY2tncm91bmRTaXplID8ge1xuICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZVxuICB9IDoge30pLCBfcmVmO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBrZXktc3BhY2luZyAqL1xudmFyIGZ1bmN0aW9uc01hcCA9IHtcbiAgZWFzZUluQmFjazogJ2N1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpJyxcbiAgZWFzZUluQ2lyYzogJ2N1YmljLWJlemllcigwLjYwMCwgIDAuMDQwLCAwLjk4MCwgMC4zMzUpJyxcbiAgZWFzZUluQ3ViaWM6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA1NSwgMC42NzUsIDAuMTkwKScsXG4gIGVhc2VJbkV4cG86ICdjdWJpYy1iZXppZXIoMC45NTAsICAwLjA1MCwgMC43OTUsIDAuMDM1KScsXG4gIGVhc2VJblF1YWQ6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gIGVhc2VJblF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuODk1LCAgMC4wMzAsIDAuNjg1LCAwLjIyMCknLFxuICBlYXNlSW5RdWludDogJ2N1YmljLWJlemllcigwLjc1NSwgIDAuMDUwLCAwLjg1NSwgMC4wNjApJyxcbiAgZWFzZUluU2luZTogJ2N1YmljLWJlemllcigwLjQ3MCwgIDAuMDAwLCAwLjc0NSwgMC43MTUpJyxcbiAgZWFzZU91dEJhY2s6ICdjdWJpYy1iZXppZXIoMC4xNzUsICAwLjg4NSwgMC4zMjAsIDEuMjc1KScsXG4gIGVhc2VPdXRDdWJpYzogJ2N1YmljLWJlemllcigwLjIxNSwgIDAuNjEwLCAwLjM1NSwgMS4wMDApJyxcbiAgZWFzZU91dENpcmM6ICdjdWJpYy1iZXppZXIoMC4wNzUsICAwLjgyMCwgMC4xNjUsIDEuMDAwKScsXG4gIGVhc2VPdXRFeHBvOiAnY3ViaWMtYmV6aWVyKDAuMTkwLCAgMS4wMDAsIDAuMjIwLCAxLjAwMCknLFxuICBlYXNlT3V0UXVhZDogJ2N1YmljLWJlemllcigwLjI1MCwgIDAuNDYwLCAwLjQ1MCwgMC45NDApJyxcbiAgZWFzZU91dFF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAgMC44NDAsIDAuNDQwLCAxLjAwMCknLFxuICBlYXNlT3V0UXVpbnQ6ICdjdWJpYy1iZXppZXIoMC4yMzAsICAxLjAwMCwgMC4zMjAsIDEuMDAwKScsXG4gIGVhc2VPdXRTaW5lOiAnY3ViaWMtYmV6aWVyKDAuMzkwLCAgMC41NzUsIDAuNTY1LCAxLjAwMCknLFxuICBlYXNlSW5PdXRCYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MCknLFxuICBlYXNlSW5PdXRDaXJjOiAnY3ViaWMtYmV6aWVyKDAuNzg1LCAgMC4xMzUsIDAuMTUwLCAwLjg2MCknLFxuICBlYXNlSW5PdXRDdWJpYzogJ2N1YmljLWJlemllcigwLjY0NSwgIDAuMDQ1LCAwLjM1NSwgMS4wMDApJyxcbiAgZWFzZUluT3V0RXhwbzogJ2N1YmljLWJlemllcigxLjAwMCwgIDAuMDAwLCAwLjAwMCwgMS4wMDApJyxcbiAgZWFzZUluT3V0UXVhZDogJ2N1YmljLWJlemllcigwLjQ1NSwgIDAuMDMwLCAwLjUxNSwgMC45NTUpJyxcbiAgZWFzZUluT3V0UXVhcnQ6ICdjdWJpYy1iZXppZXIoMC43NzAsICAwLjAwMCwgMC4xNzUsIDEuMDAwKScsXG4gIGVhc2VJbk91dFF1aW50OiAnY3ViaWMtYmV6aWVyKDAuODYwLCAgMC4wMDAsIDAuMDcwLCAxLjAwMCknLFxuICBlYXNlSW5PdXRTaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAgMC4wNTAsIDAuNTUwLCAwLjk1MCknXG59O1xuLyogZXNsaW50LWVuYWJsZSBrZXktc3BhY2luZyAqL1xuXG5mdW5jdGlvbiBnZXRUaW1pbmdGdW5jdGlvbihmdW5jdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uc01hcFtmdW5jdGlvbk5hbWVdO1xufVxuLyoqXG4gKiBTdHJpbmcgdG8gcmVwcmVzZW50IGNvbW1vbiBlYXNpbmcgZnVuY3Rpb25zIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiAoZ2l0aHViLmNvbS9qYXVraWEvZWFzaWUpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiB0aW1pbmdGdW5jdGlvbnMoJ2Vhc2VJblF1YWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiAgY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAke3RpbWluZ0Z1bmN0aW9ucygnZWFzZUluUXVhZCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbnModGltaW5nRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGdldFRpbWluZ0Z1bmN0aW9uKHRpbWluZ0Z1bmN0aW9uKTtcbn1cblxudmFyIGdldEJvcmRlcldpZHRoID0gZnVuY3Rpb24gZ2V0Qm9yZGVyV2lkdGgocG9pbnRpbmdEaXJlY3Rpb24sIGhlaWdodCwgd2lkdGgpIHtcbiAgdmFyIGZ1bGxXaWR0aCA9IFwiXCIgKyB3aWR0aFswXSArICh3aWR0aFsxXSB8fCAnJyk7XG4gIHZhciBoYWxmV2lkdGggPSBcIlwiICsgd2lkdGhbMF0gLyAyICsgKHdpZHRoWzFdIHx8ICcnKTtcbiAgdmFyIGZ1bGxIZWlnaHQgPSBcIlwiICsgaGVpZ2h0WzBdICsgKGhlaWdodFsxXSB8fCAnJyk7XG4gIHZhciBoYWxmSGVpZ2h0ID0gXCJcIiArIGhlaWdodFswXSAvIDIgKyAoaGVpZ2h0WzFdIHx8ICcnKTtcblxuICBzd2l0Y2ggKHBvaW50aW5nRGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBcIjAgXCIgKyBoYWxmV2lkdGggKyBcIiBcIiArIGZ1bGxIZWlnaHQgKyBcIiBcIiArIGhhbGZXaWR0aDtcblxuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIDAgMFwiO1xuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gaGFsZkhlaWdodCArIFwiIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBoYWxmSGVpZ2h0ICsgXCIgMFwiO1xuXG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICByZXR1cm4gZnVsbFdpZHRoICsgXCIgMCAwIFwiICsgZnVsbEhlaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gZnVsbEhlaWdodCArIFwiIFwiICsgaGFsZldpZHRoICsgXCIgMCBcIiArIGhhbGZXaWR0aDtcblxuICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgIHJldHVybiBcIjAgMCBcIiArIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodDtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBoYWxmSGVpZ2h0ICsgXCIgMCBcIiArIGhhbGZIZWlnaHQgKyBcIiBcIiArIGZ1bGxXaWR0aDtcblxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiMCBcIiArIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIDBcIjtcbiAgfVxufTtcblxudmFyIGdldEJvcmRlckNvbG9yID0gZnVuY3Rpb24gZ2V0Qm9yZGVyQ29sb3IocG9pbnRpbmdEaXJlY3Rpb24sIGZvcmVncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yKSB7XG4gIHN3aXRjaCAocG9pbnRpbmdEaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgZm9yZWdyb3VuZENvbG9yICsgXCIgXCIgKyBiYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBiYWNrZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgZm9yZWdyb3VuZENvbG9yO1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHJldHVybiBmb3JlZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBiYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICByZXR1cm4gYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBmb3JlZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU5KTtcbiAgfVxufTtcbi8qKlxuICogQ1NTIHRvIHJlcHJlc2VudCB0cmlhbmdsZSB3aXRoIGFueSBwb2ludGluZyBkaXJlY3Rpb24gd2l0aCBhbiBvcHRpb25hbCBiYWNrZ3JvdW5kIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKlxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi50cmlhbmdsZSh7IHBvaW50aW5nRGlyZWN0aW9uOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBmb3JlZ3JvdW5kQ29sb3I6ICdyZWQnIH0pXG4gKiB9XG4gKlxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3RyaWFuZ2xlKHsgcG9pbnRpbmdEaXJlY3Rpb246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGZvcmVncm91bmRDb2xvcjogJ3JlZCcgfSl9XG4gKlxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAnYm9yZGVyQ29sb3InOiAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmVkJyxcbiAqICAnYm9yZGVyU3R5bGUnOiAnc29saWQnLFxuICogICdib3JkZXJXaWR0aCc6ICc1MHB4IDAgNTBweCAxMDBweCcsXG4gKiAgJ2hlaWdodCc6ICcwJyxcbiAqICAnd2lkdGgnOiAnMCcsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0cmlhbmdsZShfcmVmKSB7XG4gIHZhciBwb2ludGluZ0RpcmVjdGlvbiA9IF9yZWYucG9pbnRpbmdEaXJlY3Rpb24sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGZvcmVncm91bmRDb2xvciA9IF9yZWYuZm9yZWdyb3VuZENvbG9yLFxuICAgICAgX3JlZiRiYWNrZ3JvdW5kQ29sb3IgPSBfcmVmLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9yZWYkYmFja2dyb3VuZENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZiRiYWNrZ3JvdW5kQ29sb3I7XG4gIHZhciB3aWR0aEFuZFVuaXQgPSBnZXRWYWx1ZUFuZFVuaXQod2lkdGgpO1xuICB2YXIgaGVpZ2h0QW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdChoZWlnaHQpO1xuXG4gIGlmIChpc05hTihoZWlnaHRBbmRVbml0WzBdKSB8fCBpc05hTih3aWR0aEFuZFVuaXRbMF0pKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjApO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogJzAnLFxuICAgIGhlaWdodDogJzAnLFxuICAgIGJvcmRlckNvbG9yOiBnZXRCb3JkZXJDb2xvcihwb2ludGluZ0RpcmVjdGlvbiwgZm9yZWdyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IpLFxuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiBnZXRCb3JkZXJXaWR0aChwb2ludGluZ0RpcmVjdGlvbiwgaGVpZ2h0QW5kVW5pdCwgd2lkdGhBbmRVbml0KVxuICB9O1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGNoYW5nZSB0aGUgYHdvcmRXcmFwYCBwcm9wZXJ0eS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi53b3JkV3JhcCgnYnJlYWstd29yZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7d29yZFdyYXAoJ2JyZWFrLXdvcmQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAqICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAqICAgd29yZEJyZWFrOiAnYnJlYWstYWxsJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gd29yZFdyYXAod3JhcCkge1xuICBpZiAod3JhcCA9PT0gdm9pZCAwKSB7XG4gICAgd3JhcCA9ICdicmVhay13b3JkJztcbiAgfVxuXG4gIHZhciB3b3JkQnJlYWsgPSB3cmFwID09PSAnYnJlYWstd29yZCcgPyAnYnJlYWstYWxsJyA6IHdyYXA7XG4gIHJldHVybiB7XG4gICAgb3ZlcmZsb3dXcmFwOiB3cmFwLFxuICAgIHdvcmRXcmFwOiB3cmFwLFxuICAgIHdvcmRCcmVhazogd29yZEJyZWFrXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9JbnQoY29sb3IpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoY29sb3IgKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9JbnQocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gY29sb3JUb0ludChyZWQpICsgXCIsXCIgKyBjb2xvclRvSW50KGdyZWVuKSArIFwiLFwiICsgY29sb3JUb0ludChibHVlKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnQpIHtcbiAgaWYgKGNvbnZlcnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnZlcnQgPSBjb252ZXJ0VG9JbnQ7XG4gIH1cblxuICBpZiAoc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICByZXR1cm4gY29udmVydChsaWdodG5lc3MsIGxpZ2h0bmVzcywgbGlnaHRuZXNzKTtcbiAgfSAvLyBmb3JtdWxhZSBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWXG5cblxuICB2YXIgaHVlUHJpbWUgPSAoaHVlICUgMzYwICsgMzYwKSAlIDM2MCAvIDYwO1xuICB2YXIgY2hyb21hID0gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpICogc2F0dXJhdGlvbjtcbiAgdmFyIHNlY29uZENvbXBvbmVudCA9IGNocm9tYSAqICgxIC0gTWF0aC5hYnMoaHVlUHJpbWUgJSAyIC0gMSkpO1xuICB2YXIgcmVkID0gMDtcbiAgdmFyIGdyZWVuID0gMDtcbiAgdmFyIGJsdWUgPSAwO1xuXG4gIGlmIChodWVQcmltZSA+PSAwICYmIGh1ZVByaW1lIDwgMSkge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAxICYmIGh1ZVByaW1lIDwgMikge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAyICYmIGh1ZVByaW1lIDwgMykge1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMyAmJiBodWVQcmltZSA8IDQpIHtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDQgJiYgaHVlUHJpbWUgPCA1KSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNSAmJiBodWVQcmltZSA8IDYpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfVxuXG4gIHZhciBsaWdodG5lc3NNb2RpZmljYXRpb24gPSBsaWdodG5lc3MgLSBjaHJvbWEgLyAyO1xuICB2YXIgZmluYWxSZWQgPSByZWQgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEdyZWVuID0gZ3JlZW4gKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEJsdWUgPSBibHVlICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICByZXR1cm4gY29udmVydChmaW5hbFJlZCwgZmluYWxHcmVlbiwgZmluYWxCbHVlKTtcbn1cblxudmFyIG5hbWVkQ29sb3JNYXAgPSB7XG4gIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gIGFxdWE6ICcwMGZmZmYnLFxuICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgYXp1cmU6ICdmMGZmZmYnLFxuICBiZWlnZTogJ2Y1ZjVkYycsXG4gIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gIGJsYWNrOiAnMDAwJyxcbiAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gIGJyb3duOiAnYTUyYTJhJyxcbiAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gIGNvcmFsOiAnZmY3ZjUwJyxcbiAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gIGNyaW1zb246ICdkYzE0M2MnLFxuICBjeWFuOiAnMDBmZmZmJyxcbiAgZGFya2JsdWU6ICcwMDAwOGInLFxuICBkYXJrY3lhbjogJzAwOGI4YicsXG4gIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gIGRhcmtncmV5OiAnYTlhOWE5JyxcbiAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgZGFya3JlZDogJzhiMDAwMCcsXG4gIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcyZjRmNGYnLFxuICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgZGltZ3JleTogJzY5Njk2OScsXG4gIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICBnb2xkOiAnZmZkNzAwJyxcbiAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgZ3JheTogJzgwODA4MCcsXG4gIGdyZWVuOiAnMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICBncmV5OiAnODA4MDgwJyxcbiAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgaW5kaWFucmVkOiAnY2Q1YzVjJyxcbiAgaW5kaWdvOiAnNGIwMDgyJyxcbiAgaXZvcnk6ICdmZmZmZjAnLFxuICBraGFraTogJ2YwZTY4YycsXG4gIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gIGxpZ2h0Z3JheTogJ2QzZDNkMycsXG4gIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICBsaWdodHNsYXRlZ3JheTogJzc4OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnNzg5JyxcbiAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gIGxpbWU6ICcwZjAnLFxuICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICBsaW5lbjogJ2ZhZjBlNicsXG4gIG1hZ2VudGE6ICdmMGYnLFxuICBtYXJvb246ICc4MDAwMDAnLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gIG1lZGl1bXB1cnBsZTogJzkzNzBkYicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgbmF2eTogJzAwMDA4MCcsXG4gIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICBvbGl2ZTogJzgwODAwMCcsXG4gIG9saXZlZHJhYjogJzZiOGUyMycsXG4gIG9yYW5nZTogJ2ZmYTUwMCcsXG4gIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gIG9yY2hpZDogJ2RhNzBkNicsXG4gIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgcGFsZXZpb2xldHJlZDogJ2RiNzA5MycsXG4gIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICBwZXJ1OiAnY2Q4NTNmJyxcbiAgcGluazogJ2ZmYzBjYicsXG4gIHBsdW06ICdkZGEwZGQnLFxuICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgcHVycGxlOiAnODAwMDgwJyxcbiAgcmViZWNjYXB1cnBsZTogJzYzOScsXG4gIHJlZDogJ2YwMCcsXG4gIHJvc3licm93bjogJ2JjOGY4ZicsXG4gIHJveWFsYmx1ZTogJzQxNjllMScsXG4gIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICBzaWVubmE6ICdhMDUyMmQnLFxuICBzaWx2ZXI6ICdjMGMwYzAnLFxuICBza3libHVlOiAnODdjZWViJyxcbiAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnNzA4MDkwJyxcbiAgc25vdzogJ2ZmZmFmYScsXG4gIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgdGFuOiAnZDJiNDhjJyxcbiAgdGVhbDogJzAwODA4MCcsXG4gIHRoaXN0bGU6ICdkOGJmZDgnLFxuICB0b21hdG86ICdmZjYzNDcnLFxuICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICB2aW9sZXQ6ICdlZTgyZWUnLFxuICB3aGVhdDogJ2Y1ZGViMycsXG4gIHdoaXRlOiAnZmZmJyxcbiAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gIHllbGxvdzogJ2ZmMCcsXG4gIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xufTtcbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgQ1NTIG5hbWVkIGNvbG9yIGFuZCByZXR1cm5zIGl0cyBlcXVpdmFsZW50IGhleCB2YWx1ZSwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG9yaWdpbmFsIGNvbG9yLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBuYW1lVG9IZXgoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHJldHVybiBjb2xvcjtcbiAgdmFyIG5vcm1hbGl6ZWRDb2xvck5hbWUgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA/IFwiI1wiICsgbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA6IGNvbG9yO1xufVxuXG52YXIgaGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs2fSQvO1xudmFyIGhleFJnYmFSZWdleCA9IC9eI1thLWZBLUYwLTldezh9JC87XG52YXIgcmVkdWNlZEhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17M30kLztcbnZhciByZWR1Y2VkUmdiYUhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17NH0kLztcbnZhciByZ2JSZWdleCA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkL2k7XG52YXIgcmdiYVJlZ2V4ID0gL15yZ2JhXFwoXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvaTtcbnZhciBoc2xSZWdleCA9IC9eaHNsXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSspXFxzKixcXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKixcXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKlxcKSQvaTtcbnZhciBoc2xhUmVnZXggPSAvXmhzbGFcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqLFxccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqLFxccyooWy0rXT9bMC05XSpbLl0/WzAtOV0rKVxccypcXCkkL2k7XG4vKipcbiAqIFJldHVybnMgYW4gUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiAyNTUsIGdyZWVuOiAwLCBibHVlOiAwIH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb1JnYigncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiA5MiwgZ3JlZW46IDEwMiwgYmx1ZTogMTEyLCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9SZ2IoJ2hzbGEoMjEwLCAxMCUsIDQwJSwgMC43NSknKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRvUmdiKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMyk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZENvbG9yID0gbmFtZVRvSGV4KGNvbG9yKTtcblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZ2JhUmVnZXgpKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls3XSArIG5vcm1hbGl6ZWRDb2xvcls4XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpLFxuICAgICAgYWxwaGE6IGFscGhhXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZEhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkUmdiYUhleFJlZ2V4KSkge1xuICAgIHZhciBfYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzRdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KSxcbiAgICAgIGFscGhhOiBfYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYk1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JhTWF0Y2hlZCA9IHJnYmFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYmFNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbE1hdGNoZWQgPSBoc2xSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbE1hdGNoZWQpIHtcbiAgICB2YXIgaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMV0sIDEwKTtcbiAgICB2YXIgc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG4gICAgdmFyIGxpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG4gICAgdmFyIHJnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIilcIjtcbiAgICB2YXIgaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMocmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFoc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0LCBub3JtYWxpemVkQ29sb3IsIHJnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xhTWF0Y2hlZCA9IGhzbGFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbGFNYXRjaGVkKSB7XG4gICAgdmFyIF9odWUgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMV0sIDEwKTtcblxuICAgIHZhciBfc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9saWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbM10sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArIGhzbFRvUmdiKF9odWUsIF9zYXR1cmF0aW9uLCBfbGlnaHRuZXNzKSArIFwiKVwiO1xuXG4gICAgdmFyIF9oc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhfcmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFfaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNCwgbm9ybWFsaXplZENvbG9yLCBfcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUpO1xufVxuXG5mdW5jdGlvbiByZ2JUb0hzbChjb2xvcikge1xuICAvLyBtYWtlIHN1cmUgcmdiIGFyZSBjb250YWluZWQgaW4gYSBzZXQgb2YgWzAsIDI1NV1cbiAgdmFyIHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgdmFyIGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gIHZhciBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBsaWdodG5lc3MgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGh1ZTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgc2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcmVkOlxuICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgZ3JlZW46XG4gICAgICBodWUgPSAoYmx1ZSAtIHJlZCkgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBibHVlIGNhc2VcbiAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGh1ZSAqPSA2MDtcblxuICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGh1ZTogaHVlLFxuICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvSHNsKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyBodWU6IDEyOCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb0hzbCgnaHNsYSgxMjgsIDEwMCUsIDUwJSwgMC43NSknKTtcbiAqL1xuZnVuY3Rpb24gcGFyc2VUb0hzbChjb2xvcikge1xuICAvLyBOb3RlOiBBdCBhIGxhdGVyIHN0YWdlIHdlIGNhbiBvcHRpbWl6ZSB0aGlzIGZ1bmN0aW9uIGFzIHJpZ2h0IG5vdyBhIGhzbFxuICAvLyBjb2xvciB3b3VsZCBiZSBwYXJzZWQgY29udmVydGVkIHRvIHJnYiB2YWx1ZXMgYW5kIGNvbnZlcnRlZCBiYWNrIHRvIGhzbC5cbiAgcmV0dXJuIHJnYlRvSHNsKHBhcnNlVG9SZ2IoY29sb3IpKTtcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIGhleCB2YWx1ZXMgaWYgcG9zc2libGUgZS5nLiAjZmY4ODY2IHRvICNmODZcbiAqIEBwcml2YXRlXG4gKi9cbnZhciByZWR1Y2VIZXhWYWx1ZSA9IGZ1bmN0aW9uIHJlZHVjZUhleFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDcgJiYgdmFsdWVbMV0gPT09IHZhbHVlWzJdICYmIHZhbHVlWzNdID09PSB2YWx1ZVs0XSAmJiB2YWx1ZVs1XSA9PT0gdmFsdWVbNl0pIHtcbiAgICByZXR1cm4gXCIjXCIgKyB2YWx1ZVsxXSArIHZhbHVlWzNdICsgdmFsdWVbNV07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG5mdW5jdGlvbiBudW1iZXJUb0hleCh2YWx1ZSkge1xuICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5mdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yKSB7XG4gIHJldHVybiBudW1iZXJUb0hleChNYXRoLnJvdW5kKGNvbG9yICogMjU1KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiByZWR1Y2VIZXhWYWx1ZShcIiNcIiArIGNvbG9yVG9IZXgocmVkKSArIGNvbG9yVG9IZXgoZ3JlZW4pICsgY29sb3JUb0hleChibHVlKSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIHJldHVybiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydFRvSGV4KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2woMzU5LCAwLjc1LCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiBoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKDM1OSwgMC43NSwgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGhzbFRvSGV4KHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhzbFRvSGV4KHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDEpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsYSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFscGhhID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbHBoYSA+PSAxID8gaHNsVG9IZXgodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyBoc2xUb1JnYih2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCAmJiBhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmFscGhhID49IDEgPyBoc2xUb0hleCh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyBoc2xUb1JnYih2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgKyBcIixcIiArIHZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDUsIDEwMCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKDI1NSwgMjA1LCAxMDApfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiKHZhbHVlLCBncmVlbiwgYmx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBibHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiByZWR1Y2VIZXhWYWx1ZShcIiNcIiArIG51bWJlclRvSGV4KHZhbHVlKSArIG51bWJlclRvSGV4KGdyZWVuKSArIG51bWJlclRvSGV4KGJsdWUpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGdyZWVuID09PSB1bmRlZmluZWQgJiYgYmx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlZHVjZUhleFZhbHVlKFwiI1wiICsgbnVtYmVyVG9IZXgodmFsdWUucmVkKSArIG51bWJlclRvSGV4KHZhbHVlLmdyZWVuKSArIG51bWJlclRvSGV4KHZhbHVlLmJsdWUpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBmYWRlIGEgY29sb3IgYnkgcGFzc2luZyBhIGhleCB2YWx1ZSBvciBuYW1lZCBDU1MgY29sb3IgYWxvbmcgd2l0aCBhbiBhbHBoYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDEpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCcjZmZmZmZmJywgMC40KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnYmxhY2snLCAwLjcpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJyNmZmZmZmYnLCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCdibGFjaycsIDAuNyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYmEoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciByZ2JWYWx1ZSA9IHBhcnNlVG9SZ2IoZmlyc3RWYWx1ZSk7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlZhbHVlLnJlZCArIFwiLFwiICsgcmdiVmFsdWUuZ3JlZW4gKyBcIixcIiArIHJnYlZhbHVlLmJsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXJkVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBmb3VydGhWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZm91cnRoVmFsdWUgPj0gMSA/IHJnYihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiLFwiICsgdGhpcmRWYWx1ZSArIFwiLFwiICsgZm91cnRoVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ29iamVjdCcgJiYgc2Vjb25kVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlyZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZm91cnRoVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmaXJzdFZhbHVlLmFscGhhID49IDEgPyByZ2IoZmlyc3RWYWx1ZS5yZWQsIGZpcnN0VmFsdWUuZ3JlZW4sIGZpcnN0VmFsdWUuYmx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlLnJlZCArIFwiLFwiICsgZmlyc3RWYWx1ZS5ncmVlbiArIFwiLFwiICsgZmlyc3RWYWx1ZS5ibHVlICsgXCIsXCIgKyBmaXJzdFZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3KTtcbn1cblxudmFyIGlzUmdiID0gZnVuY3Rpb24gaXNSZ2IoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uIGlzUmdiYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG5cbnZhciBpc0hzbCA9IGZ1bmN0aW9uIGlzSHNsKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gaXNIc2xhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAsIGByZ2JhYCwgYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoOCk7XG4gIGlmIChpc1JnYmEoY29sb3IpKSByZXR1cm4gcmdiYShjb2xvcik7XG4gIGlmIChpc1JnYihjb2xvcikpIHJldHVybiByZ2IoY29sb3IpO1xuICBpZiAoaXNIc2xhKGNvbG9yKSkgcmV0dXJuIGhzbGEoY29sb3IpO1xuICBpZiAoaXNIc2woY29sb3IpKSByZXR1cm4gaHNsKGNvbG9yKTtcbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoOCk7XG59XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ2NhbnRpL2Zsb3ctc3RhdGljLWxhbmQvYmxvYi9tYXN0ZXIvc3JjL0Z1bi5qc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmZ1bmN0aW9uIGN1cnJpZWQoZiwgbGVuZ3RoLCBhY2MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZuKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgY29tYmluZWQgPSBhY2MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiBjb21iaW5lZC5sZW5ndGggPj0gbGVuZ3RoID8gZi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBjdXJyaWVkKGYsIGxlbmd0aCwgY29tYmluZWQpO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuZnVuY3Rpb24gY3VycnkoZikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuICByZXR1cm4gY3VycmllZChmLCBmLmxlbmd0aCwgW10pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGh1ZSBvZiB0aGUgY29sb3IuIEh1ZSBpcyBhIG51bWJlciBiZXR3ZWVuIDAgdG8gMzYwLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IGZvciBhZGp1c3RIdWUgaXMgdGhlIGFtb3VudCBvZiBkZWdyZWVzIHRoZSBjb2xvciBpcyByb3RhdGVkIGFyb3VuZFxuICogdGhlIGNvbG9yIHdoZWVsLCBhbHdheXMgcHJvZHVjaW5nIGEgcG9zaXRpdmUgaHVlIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGFkanVzdEh1ZSgxODAsICcjNDQ4JyksXG4gKiAgIGJhY2tncm91bmQ6IGFkanVzdEh1ZSgnMTgwJywgJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2FkanVzdEh1ZSgxODAsICcjNDQ4Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2FkanVzdEh1ZSgnMTgwJywgJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjODg4ODQ0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsMTM2LDY4LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBhZGp1c3RIdWUoZGVncmVlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGh1ZTogaHNsQ29sb3IuaHVlICsgcGFyc2VGbG9hdChkZWdyZWUpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRBZGp1c3RIdWUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oYWRqdXN0SHVlKTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb21wbGVtZW50IG9mIHRoZSBwcm92aWRlZCBjb2xvci4gVGhpcyBpcyBpZGVudGljYWwgdG8gYWRqdXN0SHVlKDE4MCwgPGNvbG9yPikuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogY29tcGxlbWVudCgnIzQ0OCcpLFxuICogICBiYWNrZ3JvdW5kOiBjb21wbGVtZW50KCdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtjb21wbGVtZW50KCcjNDQ4Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2NvbXBsZW1lbnQoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjODg0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTMsMTUzLDE1MywwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gY29tcGxlbWVudChjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGh1ZTogKGhzbENvbG9yLmh1ZSArIDE4MCkgJSAzNjBcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBndWFyZChsb3dlckJvdW5kYXJ5LCB1cHBlckJvdW5kYXJ5LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobG93ZXJCb3VuZGFyeSwgTWF0aC5taW4odXBwZXJCb3VuZGFyeSwgdmFsdWUpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZGFya2VuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKDAuMiwgJyNGRkNENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZiZDMxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMTg5LDQ5LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBkYXJrZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogZ3VhcmQoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGFya2VuID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGRhcmtlbik7XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBpbnRlbnNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGlzIGJldHdlZW4gMCB0byAxLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIHRoZSBkZXNhdHVyYXRlIGZ1bmN0aW9uIGlzIHRoZSBhbW91bnQgYnkgaG93IG11Y2ggdGhlIGNvbG9yXG4gKiBpbnRlbnNpdHkgc2hvdWxkIGJlIGRlY3JlYXNlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGVzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2Rlc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkZXNhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiOGI5NzlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE4NCwxODUsMTIxLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBkZXNhdHVyYXRlKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBzYXR1cmF0aW9uOiBndWFyZCgwLCAxLCBoc2xDb2xvci5zYXR1cmF0aW9uIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGVzYXR1cmF0ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihkZXNhdHVyYXRlKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIChmbG9hdCkgcmVwcmVzZW50aW5nIHRoZSBsdW1pbmFuY2Ugb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJyxcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScsXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZid9O1xuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknfTtcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZDogXCIjQ0NDRDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg1OCwgMTMzLCAyNTUsIDEpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIDA7XG4gIHZhciByZ2JDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuXG4gIHZhciBfT2JqZWN0JGtleXMkbWFwID0gT2JqZWN0LmtleXMocmdiQ29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoYW5uZWwgPSByZ2JDb2xvcltrZXldIC8gMjU1O1xuICAgIHJldHVybiBjaGFubmVsIDw9IDAuMDM5MjggPyBjaGFubmVsIC8gMTIuOTIgOiBNYXRoLnBvdygoY2hhbm5lbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KSxcbiAgICAgIHIgPSBfT2JqZWN0JGtleXMkbWFwWzBdLFxuICAgICAgZyA9IF9PYmplY3Qka2V5cyRtYXBbMV0sXG4gICAgICBiID0gX09iamVjdCRrZXlzJG1hcFsyXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKS50b0ZpeGVkKDMpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMgYmFzZWQgb25cbiAqIFtXMydzIHJlY29tbWVuZGVkIGVxdWF0aW9uIGZvciBjYWxjdWxhdGluZyBjb250cmFzdF0oaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZikuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdCgnIzQ0NCcsICcjZmZmJyk7XG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29udHJhc3QoY29sb3IxLCBjb2xvcjIpIHtcbiAgdmFyIGx1bWluYW5jZTEgPSBnZXRMdW1pbmFuY2UoY29sb3IxKTtcbiAgdmFyIGx1bWluYW5jZTIgPSBnZXRMdW1pbmFuY2UoY29sb3IyKTtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoKGx1bWluYW5jZTEgPiBsdW1pbmFuY2UyID8gKGx1bWluYW5jZTEgKyAwLjA1KSAvIChsdW1pbmFuY2UyICsgMC4wNSkgOiAobHVtaW5hbmNlMiArIDAuMDUpIC8gKGx1bWluYW5jZTEgKyAwLjA1KSkudG9GaXhlZCgyKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGNvbG9yIHRvIGEgZ3JheXNjYWxlLCBieSByZWR1Y2luZyBpdHMgc2F0dXJhdGlvbiB0byAwLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdyYXlzY2FsZSgnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBncmF5c2NhbGUoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2dyYXlzY2FsZSgnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtncmF5c2NhbGUoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjOTk5XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTMsMTUzLDE1MywwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZ3JheXNjYWxlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBzYXR1cmF0aW9uOiAwXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGBoc2xgIG9yIGBoc2xhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbFRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGNvbG9yLmFscGhhICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBoc2xhKHtcbiAgICAgICAgaHVlOiBjb2xvci5odWUsXG4gICAgICAgIHNhdHVyYXRpb246IGNvbG9yLnNhdHVyYXRpb24sXG4gICAgICAgIGxpZ2h0bmVzczogY29sb3IubGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBoc2woe1xuICAgICAgaHVlOiBjb2xvci5odWUsXG4gICAgICBzYXR1cmF0aW9uOiBjb2xvci5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBjb2xvci5saWdodG5lc3NcbiAgICB9KTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ1KTtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIHRoZSByZWQsIGdyZWVuIGFuZCBibHVlIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGludmVydCgnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBpbnZlcnQoJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2ludmVydCgnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtpbnZlcnQoJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzMzMzI5YlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTU0LDE1NSw1MCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gaW52ZXJ0KGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yOyAvLyBwYXJzZSBjb2xvciBzdHJpbmcgdG8gcmdiXG5cbiAgdmFyIHZhbHVlID0gcGFyc2VUb1JnYihjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCB2YWx1ZSwge1xuICAgIHJlZDogMjU1IC0gdmFsdWUucmVkLFxuICAgIGdyZWVuOiAyNTUgLSB2YWx1ZS5ncmVlbixcbiAgICBibHVlOiAyNTUgLSB2YWx1ZS5ibHVlXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgbGlnaHRlbmVkIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBsaWdodGVuKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNlNWU2YjFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyOSwyMzAsMTc3LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBsaWdodGVuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6IGd1YXJkKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyArIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZExpZ2h0ZW4gPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4obGlnaHRlbik7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGljaCBjb250cmFzdCBndWlkZWxpbmVzIGhhdmUgYmVlbiBtZXQgZm9yIHR3byBjb2xvcnMuXG4gKiBCYXNlZCBvbiB0aGUgW2NvbnRyYXN0IGNhbGN1bGF0aW9ucyByZWNvbW1lbmRlZCBieSBXM10oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9XQ0FHMjEvVW5kZXJzdGFuZGluZy9jb250cmFzdC1lbmhhbmNlZC5odG1sKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc2NvcmVzID0gbWVldHNDb250cmFzdEd1aWRlbGluZXMoJyM0NDQnLCAnI2ZmZicpO1xuICovXG5mdW5jdGlvbiBtZWV0c0NvbnRyYXN0R3VpZGVsaW5lcyhjb2xvcjEsIGNvbG9yMikge1xuICB2YXIgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0KGNvbG9yMSwgY29sb3IyKTtcbiAgcmV0dXJuIHtcbiAgICBBQTogY29udHJhc3RSYXRpbyA+PSA0LjUsXG4gICAgQUFMYXJnZTogY29udHJhc3RSYXRpbyA+PSAzLFxuICAgIEFBQTogY29udHJhc3RSYXRpbyA+PSA3LFxuICAgIEFBQUxhcmdlOiBjb250cmFzdFJhdGlvID49IDQuNVxuICB9O1xufVxuXG4vKipcbiAqIE1peGVzIHRoZSB0d28gcHJvdmlkZWQgY29sb3JzIHRvZ2V0aGVyIGJ5IGNhbGN1bGF0aW5nIHRoZSBhdmVyYWdlIG9mIGVhY2ggb2YgdGhlIFJHQiBjb21wb25lbnRzIHdlaWdodGVkIHRvIHRoZSBmaXJzdCBjb2xvciBieSB0aGUgcHJvdmlkZWQgd2VpZ2h0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IG1peCgwLjUsICcjZjAwJywgJyMwMGYnKVxuICogICBiYWNrZ3JvdW5kOiBtaXgoMC4yNSwgJyNmMDAnLCAnIzAwZicpXG4gKiAgIGJhY2tncm91bmQ6IG1peCgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJywgJyMwMGYnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke21peCgwLjUsICcjZjAwJywgJyMwMGYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KDAuMjUsICcjZjAwJywgJyMwMGYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuNSknLCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzdmMDA3ZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMzZjAwYmZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDYzLCAwLCAxOTEsIDAuNzUpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gbWl4KHdlaWdodCwgY29sb3IsIG90aGVyQ29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gb3RoZXJDb2xvcjtcbiAgaWYgKG90aGVyQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgaWYgKHdlaWdodCA9PT0gMCkgcmV0dXJuIG90aGVyQ29sb3I7XG4gIHZhciBwYXJzZWRDb2xvcjEgPSBwYXJzZVRvUmdiKGNvbG9yKTtcblxuICB2YXIgY29sb3IxID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yMSwge1xuICAgIGFscGhhOiB0eXBlb2YgcGFyc2VkQ29sb3IxLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yMS5hbHBoYSA6IDFcbiAgfSk7XG5cbiAgdmFyIHBhcnNlZENvbG9yMiA9IHBhcnNlVG9SZ2Iob3RoZXJDb2xvcik7XG5cbiAgdmFyIGNvbG9yMiA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvcjIsIHtcbiAgICBhbHBoYTogdHlwZW9mIHBhcnNlZENvbG9yMi5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvcjIuYWxwaGEgOiAxXG4gIH0pOyAvLyBUaGUgZm9ybXVsYSBpcyBjb3BpZWQgZnJvbSB0aGUgb3JpZ2luYWwgU2FzcyBpbXBsZW1lbnRhdGlvbjpcbiAgLy8gaHR0cDovL3Nhc3MtbGFuZy5jb20vZG9jdW1lbnRhdGlvbi9TYXNzL1NjcmlwdC9GdW5jdGlvbnMuaHRtbCNtaXgtaW5zdGFuY2VfbWV0aG9kXG5cblxuICB2YXIgYWxwaGFEZWx0YSA9IGNvbG9yMS5hbHBoYSAtIGNvbG9yMi5hbHBoYTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHdlaWdodCkgKiAyIC0gMTtcbiAgdmFyIHkgPSB4ICogYWxwaGFEZWx0YSA9PT0gLTEgPyB4IDogeCArIGFscGhhRGVsdGE7XG4gIHZhciB6ID0gMSArIHggKiBhbHBoYURlbHRhO1xuICB2YXIgd2VpZ2h0MSA9ICh5IC8geiArIDEpIC8gMi4wO1xuICB2YXIgd2VpZ2h0MiA9IDEgLSB3ZWlnaHQxO1xuICB2YXIgbWl4ZWRDb2xvciA9IHtcbiAgICByZWQ6IE1hdGguZmxvb3IoY29sb3IxLnJlZCAqIHdlaWdodDEgKyBjb2xvcjIucmVkICogd2VpZ2h0MiksXG4gICAgZ3JlZW46IE1hdGguZmxvb3IoY29sb3IxLmdyZWVuICogd2VpZ2h0MSArIGNvbG9yMi5ncmVlbiAqIHdlaWdodDIpLFxuICAgIGJsdWU6IE1hdGguZmxvb3IoY29sb3IxLmJsdWUgKiB3ZWlnaHQxICsgY29sb3IyLmJsdWUgKiB3ZWlnaHQyKSxcbiAgICBhbHBoYTogY29sb3IxLmFscGhhICogKHBhcnNlRmxvYXQod2VpZ2h0KSAvIDEuMCkgKyBjb2xvcjIuYWxwaGEgKiAoMSAtIHBhcnNlRmxvYXQod2VpZ2h0KSAvIDEuMClcbiAgfTtcbiAgcmV0dXJuIHJnYmEobWl4ZWRDb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkTWl4ID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4obWl4KTtcblxuLyoqXG4gKiBJbmNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KDAuMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpO1xuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KDAuMiwgJ2hzbGEoMCwgMCUsIDEwMCUsIDAuNSknKSxcbiAqICAgYmFja2dyb3VuZDogb3BhY2lmeSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjIpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgwLjEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgwLjIsICdoc2xhKDAsIDAlLCAxMDAlLCAwLjUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke29wYWNpZnkoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC4yKScpfSxcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gb3BhY2lmeShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IgPSBwYXJzZVRvUmdiKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogZ3VhcmQoMCwgMSwgKGFscGhhICogMTAwICsgcGFyc2VGbG9hdChhbW91bnQpICogMTAwKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuIHJnYmEoY29sb3JXaXRoQWxwaGEpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZE9wYWNpZnkgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4ob3BhY2lmeSk7XG5cbnZhciBkZWZhdWx0TGlnaHRSZXR1cm5Db2xvciA9ICcjMDAwJztcbnZhciBkZWZhdWx0RGFya1JldHVybkNvbG9yID0gJyNmZmYnO1xuLyoqXG4gKiBSZXR1cm5zIGJsYWNrIG9yIHdoaXRlIChvciBvcHRpb25hbCBsaWdodCBhbmQgZGFyayByZXR1cm4gY29sb3JzKSBmb3IgYmVzdFxuICogY29udHJhc3QgZGVwZW5kaW5nIG9uIHRoZSBsdW1pbm9zaXR5IG9mIHRoZSBnaXZlbiBjb2xvci5cbiAqIFdoZW4gcGFzc2luZyBjdXN0b20gcmV0dXJuIGNvbG9ycywgc2V0IGBzdHJpY3RgIHRvIGB0cnVlYCB0byBlbnN1cmUgdGhhdCB0aGVcbiAqIHJldHVybiBjb2xvciBhbHdheXMgbWVldHMgb3IgZXhjZWVkcyBXQ0FHIGxldmVsIEFBIG9yIGdyZWF0ZXIuIElmIHRoaXMgdGVzdFxuICogZmFpbHMsIHRoZSBkZWZhdWx0IHJldHVybiBjb2xvciAoYmxhY2sgb3Igd2hpdGUpIGlzIHJldHVybmVkIGluIHBsYWNlIG9mIHRoZVxuICogY3VzdG9tIHJldHVybiBjb2xvci5cbiAqXG4gKiBGb2xsb3dzIFtXM0Mgc3BlY3MgZm9yIHJlYWRhYmlsaXR5XShodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxOC5odG1sKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBjb2xvcjogcmVhZGFibGVDb2xvcignIzAwMCcpLFxuICogICBjb2xvcjogcmVhZGFibGVDb2xvcignYmxhY2snLCAnIzAwMScsICcjZmY4JyksXG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCd3aGl0ZScsICcjMDAxJywgJyNmZjgnKSxcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJ3JlZCcsICcjMzMzJywgJyNkZGQnLCB0cnVlKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCcjMDAwJyl9O1xuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCdibGFjaycsICcjMDAxJywgJyNmZjgnKX07XG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJ3doaXRlJywgJyMwMDEnLCAnI2ZmOCcpfTtcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcigncmVkJywgJyMzMzMnLCAnI2RkZCcsIHRydWUpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgY29sb3I6IFwiI2ZmZlwiO1xuICogICBjb2xvcjogXCIjZmY4XCI7XG4gKiAgIGNvbG9yOiBcIiMwMDFcIjtcbiAqICAgY29sb3I6IFwiIzAwMFwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHJlYWRhYmxlQ29sb3IoY29sb3IsIGxpZ2h0UmV0dXJuQ29sb3IsIGRhcmtSZXR1cm5Db2xvciwgc3RyaWN0KSB7XG4gIGlmIChsaWdodFJldHVybkNvbG9yID09PSB2b2lkIDApIHtcbiAgICBsaWdodFJldHVybkNvbG9yID0gZGVmYXVsdExpZ2h0UmV0dXJuQ29sb3I7XG4gIH1cblxuICBpZiAoZGFya1JldHVybkNvbG9yID09PSB2b2lkIDApIHtcbiAgICBkYXJrUmV0dXJuQ29sb3IgPSBkZWZhdWx0RGFya1JldHVybkNvbG9yO1xuICB9XG5cbiAgaWYgKHN0cmljdCA9PT0gdm9pZCAwKSB7XG4gICAgc3RyaWN0ID0gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNMaWdodENvbG9yID0gZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuMTc5O1xuICB2YXIgcHJlZmVycmVkUmV0dXJuQ29sb3IgPSBpc0xpZ2h0Q29sb3IgPyBsaWdodFJldHVybkNvbG9yIDogZGFya1JldHVybkNvbG9yOyAvLyBUT0RPOiBNYWtlIGBzdHJpY3RgIHRoZSBkZWZhdWx0IGJlaGF2aW91ciBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuICAvLyBXaXRob3V0IGBzdHJpY3RgLCB0aGlzIG1heSByZXR1cm4gYSBjb2xvciB0aGF0IGRvZXMgbm90IG1lZXQgV0NBRyBBQS5cblxuICBpZiAoIXN0cmljdCB8fCBnZXRDb250cmFzdChjb2xvciwgcHJlZmVycmVkUmV0dXJuQ29sb3IpID49IDQuNSkge1xuICAgIHJldHVybiBwcmVmZXJyZWRSZXR1cm5Db2xvcjtcbiAgfVxuXG4gIHJldHVybiBpc0xpZ2h0Q29sb3IgPyBkZWZhdWx0TGlnaHRSZXR1cm5Db2xvciA6IGRlZmF1bHREYXJrUmV0dXJuQ29sb3I7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCBvciBgcmdiYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2JUb0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiByZ2JhKHtcbiAgICAgICAgcmVkOiBjb2xvci5yZWQsXG4gICAgICAgIGdyZWVuOiBjb2xvci5ncmVlbixcbiAgICAgICAgYmx1ZTogY29sb3IuYmx1ZSxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmdiKHtcbiAgICAgIHJlZDogY29sb3IucmVkLFxuICAgICAgZ3JlZW46IGNvbG9yLmdyZWVuLFxuICAgICAgYmx1ZTogY29sb3IuYmx1ZVxuICAgIH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDYpO1xufVxuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgaW50ZW5zaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBpcyBiZXR3ZWVuIDAgdG8gMS4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiB0aGUgc2F0dXJhdGUgZnVuY3Rpb24gaXMgdGhlIGFtb3VudCBieSBob3cgbXVjaCB0aGUgY29sb3JcbiAqIGludGVuc2l0eSBzaG91bGQgYmUgaW5jcmVhc2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzYXR1cmF0ZSgwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3NhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZTBlMjUwXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjQsMjI2LDgwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzYXR1cmF0ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgc2F0dXJhdGlvbjogZ3VhcmQoMCwgMSwgaHNsQ29sb3Iuc2F0dXJhdGlvbiArIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNhdHVyYXRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNhdHVyYXRlKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBodWUgb2YgYSBjb2xvciB0byB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBodWUgcmFuZ2UgY2FuIGJlXG4gKiBmcm9tIDAgYW5kIDM1OS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRIdWUoNDIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNldEh1ZSgnMjQ0JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NldEh1ZSg0MiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0SHVlKCcyNDQnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNjZGFlNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDEwNywxMDAsMjA1LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRIdWUoaHVlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgaHVlOiBwYXJzZUZsb2F0KGh1ZSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNldEh1ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRIdWUpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpZ2h0bmVzcyBvZiBhIGNvbG9yIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGxpZ2h0bmVzcyByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRMaWdodG5lc3MoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzZXRMaWdodG5lc3MoJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0TGlnaHRuZXNzKDAuMiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0TGlnaHRuZXNzKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjNGQ0ZDE5XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjMsMjI0LDE1OSwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2V0TGlnaHRuZXNzKGxpZ2h0bmVzcywgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIGxpZ2h0bmVzczogcGFyc2VGbG9hdChsaWdodG5lc3MpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTZXRMaWdodG5lc3MgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2V0TGlnaHRuZXNzKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBzYXR1cmF0aW9uIG9mIGEgY29sb3IgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGUgc2F0dXJhdGlvbiByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRTYXR1cmF0aW9uKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2V0U2F0dXJhdGlvbignMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzZXRTYXR1cmF0aW9uKDAuMiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0U2F0dXJhdGlvbignMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2FkYWQ4NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjI4LDIyOSw3NiwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2V0U2F0dXJhdGlvbihzYXR1cmF0aW9uLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgc2F0dXJhdGlvbjogcGFyc2VGbG9hdChzYXR1cmF0aW9uKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2V0U2F0dXJhdGlvbiA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRTYXR1cmF0aW9uKTtcblxuLyoqXG4gKiBTaGFkZXMgYSBjb2xvciBieSBtaXhpbmcgaXQgd2l0aCBibGFjay4gYHNoYWRlYCBjYW4gcHJvZHVjZVxuICogaHVlIHNoaWZ0cywgd2hlcmUgYXMgYGRhcmtlbmAgbWFuaXB1bGF0ZXMgdGhlIGx1bWluYW5jZSBjaGFubmVsIGFuZCB0aGVyZWZvcmVcbiAqIGRvZXNuJ3QgcHJvZHVjZSBodWUgc2hpZnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNoYWRlKDAuMjUsICcjMDBmJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzaGFkZSgwLjI1LCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwMDAzZlwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNoYWRlKHBlcmNlbnRhZ2UsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gY3VycmllZE1peChwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpLCAncmdiKDAsIDAsIDApJywgY29sb3IpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNoYWRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNoYWRlKTtcblxuLyoqXG4gKiBUaW50cyBhIGNvbG9yIGJ5IG1peGluZyBpdCB3aXRoIHdoaXRlLiBgdGludGAgY2FuIHByb2R1Y2VcbiAqIGh1ZSBzaGlmdHMsIHdoZXJlIGFzIGBsaWdodGVuYCBtYW5pcHVsYXRlcyB0aGUgbHVtaW5hbmNlIGNoYW5uZWwgYW5kIHRoZXJlZm9yZVxuICogZG9lc24ndCBwcm9kdWNlIGh1ZSBzaGlmdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdGludCgwLjI1LCAnIzAwZicpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dGludCgwLjI1LCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2JmYmZmZlwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHRpbnQocGVyY2VudGFnZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiBjdXJyaWVkTWl4KHBhcnNlRmxvYXQocGVyY2VudGFnZSksICdyZ2IoMjU1LCAyNTUsIDI1NSknLCBjb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVGludCA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbih0aW50KTtcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyk7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKSxcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpfSxcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyl9LFxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwwLDAsMC4zKVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiBndWFyZCgwLCAxLCAoYWxwaGEgKiAxMDAgLSBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gcmdiYShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4odHJhbnNwYXJlbnRpemUpO1xuXG4vKipcbiAqIFNob3J0aGFuZCBmb3IgZWFzaWx5IHNldHRpbmcgdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eS4gQWxsb3dzIGVpdGhlciBtdWx0aXBsZSBhcnJheXMgd2l0aCBhbmltYXRpb25zXG4gKiBvciBhIHNpbmdsZSBhbmltYXRpb24gc3ByZWFkIG92ZXIgdGhlIGFyZ3VtZW50cy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmFuaW1hdGlvbihbJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCddLCBbJ2NvbG9yY2hhbmdlJywgJzJzJ10pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YW5pbWF0aW9uKFsncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0J10sIFsnY29sb3JjaGFuZ2UnLCAnMnMnXSl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdhbmltYXRpb24nOiAncm90YXRlIDFzIGVhc2UtaW4tb3V0LCBjb2xvcmNoYW5nZSAycydcbiAqIH1cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmFuaW1hdGlvbigncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHthbmltYXRpb24oJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYW5pbWF0aW9uJzogJ3JvdGF0ZSAxcyBlYXNlLWluLW91dCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gQWxsb3cgc2luZ2xlIG9yIG11bHRpcGxlIGFuaW1hdGlvbnMgcGFzc2VkXG4gIHZhciBtdWx0aU1vZGUgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pO1xuXG4gIGlmICghbXVsdGlNb2RlICYmIGFyZ3MubGVuZ3RoID4gOCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY0KTtcbiAgfVxuXG4gIHZhciBjb2RlID0gYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChtdWx0aU1vZGUgJiYgIUFycmF5LmlzQXJyYXkoYXJnKSB8fCAhbXVsdGlNb2RlICYmIEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjUpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCA+IDgpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpID8gYXJnLmpvaW4oJyAnKSA6IGFyZztcbiAgfSkuam9pbignLCAnKTtcbiAgcmV0dXJuIHtcbiAgICBhbmltYXRpb246IGNvZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGFueSBudW1iZXIgb2YgYmFja2dyb3VuZEltYWdlIHZhbHVlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIHNpbmdsZSBiYWNrZ3JvdW5kIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJhY2tncm91bmRJbWFnZXMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JhY2tncm91bmRJbWFnZXMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiksIGxpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKSdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYmFja2dyb3VuZEltYWdlcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBwcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGFueSBudW1iZXIgb2YgYmFja2dyb3VuZCB2YWx1ZXMgYXMgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBzaW5nbGUgYmFja2dyb3VuZCBzdGF0ZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5iYWNrZ3JvdW5kcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScsICdjZW50ZXIgbm8tcmVwZWF0JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtiYWNrZ3JvdW5kcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScsICdjZW50ZXIgbm8tcmVwZWF0Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdiYWNrZ3JvdW5kJzogJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKSwgbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pLCBjZW50ZXIgbm8tcmVwZWF0J1xuICogfVxuICovXG5mdW5jdGlvbiBiYWNrZ3JvdW5kcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZDogcHJvcGVydGllcy5qb2luKCcsICcpXG4gIH07XG59XG5cbnZhciBzaWRlTWFwID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbi8qKlxuICogU2hvcnRoYW5kIGZvciB0aGUgYm9yZGVyIHByb3BlcnR5IHRoYXQgc3BsaXRzIG91dCBpbmRpdmlkdWFsIHByb3BlcnRpZXMgZm9yIHVzZSB3aXRoIHRvb2xzIGxpa2UgRmVsYSBhbmQgU3R5bGV0cm9uLiBBIHNpZGUga2V5d29yZCBjYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgdG8gdGFyZ2V0IG9ubHkgb25lIHNpZGUncyBib3JkZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXIoJzFweCcsICdzb2xpZCcsICdyZWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcignMXB4JywgJ3NvbGlkJywgJ3JlZCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyQ29sb3InOiAncmVkJyxcbiAqICAgJ2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcbiAqICAgJ2JvcmRlcldpZHRoJzogYDFweGAsXG4gKiB9XG4gKlxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXIoJ3RvcCcsICcxcHgnLCAnc29saWQnLCAncmVkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXIoJ3RvcCcsICcxcHgnLCAnc29saWQnLCAncmVkJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyVG9wU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyVG9wV2lkdGgnOiBgMXB4YCxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBib3JkZXIoc2lkZUtleXdvcmQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2lkZUtleXdvcmQgPT09ICdzdHJpbmcnICYmIHNpZGVNYXAuaW5kZXhPZihzaWRlS2V5d29yZCkgPj0gMCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltcImJvcmRlclwiICsgY2FwaXRhbGl6ZVN0cmluZyhzaWRlS2V5d29yZCkgKyBcIldpZHRoXCJdID0gdmFsdWVzWzBdLCBfcmVmW1wiYm9yZGVyXCIgKyBjYXBpdGFsaXplU3RyaW5nKHNpZGVLZXl3b3JkKSArIFwiU3R5bGVcIl0gPSB2YWx1ZXNbMV0sIF9yZWZbXCJib3JkZXJcIiArIGNhcGl0YWxpemVTdHJpbmcoc2lkZUtleXdvcmQpICsgXCJDb2xvclwiXSA9IHZhbHVlc1syXSwgX3JlZjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZXMudW5zaGlmdChzaWRlS2V5d29yZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvcmRlcldpZHRoOiB2YWx1ZXNbMF0sXG4gICAgICBib3JkZXJTdHlsZTogdmFsdWVzWzFdLFxuICAgICAgYm9yZGVyQ29sb3I6IHZhbHVlc1syXVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyQ29sb3IoJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3llbGxvdycpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyQ29sb3IoJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3llbGxvdycpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wQ29sb3InOiAncmVkJyxcbiAqICAgJ2JvcmRlclJpZ2h0Q29sb3InOiAnZ3JlZW4nLFxuICogICAnYm9yZGVyQm90dG9tQ29sb3InOiAnYmx1ZScsXG4gKiAgICdib3JkZXJMZWZ0Q29sb3InOiAneWVsbG93J1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJDb2xvcigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyQ29sb3InXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyBhIHZhbHVlIGZvciBzaWRlIGFuZCBhIHZhbHVlIGZvciByYWRpdXMgYW5kIGFwcGxpZXMgdGhlIHJhZGl1cyB2YWx1ZSB0byBib3RoIGNvcm5lcnMgb2YgdGhlIHNpZGUuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJSYWRpdXMoJ3RvcCcsICc1cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlclJhZGl1cygndG9wJywgJzVweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnOiAnNXB4JyxcbiAqICAgJ2JvcmRlclRvcExlZnRSYWRpdXMnOiAnNXB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyUmFkaXVzKHNpZGUsIHJhZGl1cykge1xuICB2YXIgdXBwZXJjYXNlU2lkZSA9IGNhcGl0YWxpemVTdHJpbmcoc2lkZSk7XG5cbiAgaWYgKCFyYWRpdXMgJiYgcmFkaXVzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjIpO1xuICB9XG5cbiAgaWYgKHVwcGVyY2FzZVNpZGUgPT09ICdUb3AnIHx8IHVwcGVyY2FzZVNpZGUgPT09ICdCb3R0b20nKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1wiYm9yZGVyXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSaWdodFJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZltcImJvcmRlclwiICsgdXBwZXJjYXNlU2lkZSArIFwiTGVmdFJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZjtcbiAgfVxuXG4gIGlmICh1cHBlcmNhc2VTaWRlID09PSAnTGVmdCcgfHwgdXBwZXJjYXNlU2lkZSA9PT0gJ1JpZ2h0Jykge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHJldHVybiBfcmVmMiA9IHt9LCBfcmVmMltcImJvcmRlclRvcFwiICsgdXBwZXJjYXNlU2lkZSArIFwiUmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmMltcImJvcmRlckJvdHRvbVwiICsgdXBwZXJjYXNlU2lkZSArIFwiUmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmMjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYzKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyU3R5bGUoJ3NvbGlkJywgJ2Rhc2hlZCcsICdkb3R0ZWQnLCAnZG91YmxlJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJTdHlsZSgnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCcsICdkb3VibGUnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcFN0eWxlJzogJ3NvbGlkJyxcbiAqICAgJ2JvcmRlclJpZ2h0U3R5bGUnOiAnZGFzaGVkJyxcbiAqICAgJ2JvcmRlckJvdHRvbVN0eWxlJzogJ2RvdHRlZCcsXG4gKiAgICdib3JkZXJMZWZ0U3R5bGUnOiAnZG91YmxlJ1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJTdHlsZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyU3R5bGUnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcldpZHRoKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJXaWR0aCgnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wV2lkdGgnOiAnMTJweCcsXG4gKiAgICdib3JkZXJSaWdodFdpZHRoJzogJzI0cHgnLFxuICogICAnYm9yZGVyQm90dG9tV2lkdGgnOiAnMzZweCcsXG4gKiAgICdib3JkZXJMZWZ0V2lkdGgnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyV2lkdGgoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ2JvcmRlcldpZHRoJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9ycyh0ZW1wbGF0ZSwgc3RhdGUpIHtcbiAgdmFyIHN0YXRlU3VmZml4ID0gc3RhdGUgPyBcIjpcIiArIHN0YXRlIDogJyc7XG4gIHJldHVybiB0ZW1wbGF0ZShzdGF0ZVN1ZmZpeCk7XG59XG4vKipcbiAqIEZ1bmN0aW9uIGhlbHBlciB0aGF0IGFkZHMgYW4gYXJyYXkgb2Ygc3RhdGVzIHRvIGEgdGVtcGxhdGUgb2Ygc2VsZWN0b3JzLiBVc2VkIGluIHRleHRJbnB1dHMgYW5kIGJ1dHRvbnMuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSwgc3RhdGVNYXApIHtcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjcpO1xuICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBudWxsKTtcbiAgdmFyIHNlbGVjdG9ycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YXRlTWFwICYmIHN0YXRlTWFwLmluZGV4T2Yoc3RhdGVzW2ldKSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY4KTtcbiAgICB9XG5cbiAgICBzZWxlY3RvcnMucHVzaChnZW5lcmF0ZVNlbGVjdG9ycyh0ZW1wbGF0ZSwgc3RhdGVzW2ldKSk7XG4gIH1cblxuICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuXG52YXIgc3RhdGVNYXAgPSBbdW5kZWZpbmVkLCBudWxsLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2hvdmVyJ107XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKHN0YXRlKSB7XG4gIHJldHVybiBcImJ1dHRvblwiICsgc3RhdGUgKyBcIixcXG4gIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdXCIgKyBzdGF0ZTtcbn1cbi8qKlxuICogUG9wdWxhdGVzIHNlbGVjdG9ycyB0aGF0IHRhcmdldCBhbGwgYnV0dG9ucy4gWW91IGNhbiBwYXNzIG9wdGlvbmFsIHN0YXRlcyB0byBhcHBlbmQgdG8gdGhlIHNlbGVjdG9ycy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIFtidXR0b25zKCdhY3RpdmUnKV06IHtcbiAqICAgICAnYm9yZGVyJzogJ25vbmUnXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgPiAke2J1dHRvbnMoJ2FjdGl2ZScpfSB7XG4gKiAgICAgYm9yZGVyOiBub25lO1xuICogICB9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqICAnYnV0dG9uOmFjdGl2ZSxcbiAqICAnaW5wdXRbdHlwZT1cImJ1dHRvblwiXTphY3RpdmUsXG4gKiAgJ2lucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06YWN0aXZlLFxuICogICdpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTphY3RpdmU6IHtcbiAqICAgJ2JvcmRlcic6ICdub25lJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gYnV0dG9ucygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0YXRlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdGF0ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSwgc3RhdGVNYXApO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5tYXJnaW4oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke21hcmdpbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnbWFyZ2luVG9wJzogJzEycHgnLFxuICogICAnbWFyZ2luUmlnaHQnOiAnMjRweCcsXG4gKiAgICdtYXJnaW5Cb3R0b20nOiAnMzZweCcsXG4gKiAgICdtYXJnaW5MZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIG1hcmdpbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnbWFyZ2luJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5wYWRkaW5nKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtwYWRkaW5nKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdwYWRkaW5nVG9wJzogJzEycHgnLFxuICogICAncGFkZGluZ1JpZ2h0JzogJzI0cHgnLFxuICogICAncGFkZGluZ0JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ3BhZGRpbmdMZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHBhZGRpbmcoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ3BhZGRpbmcnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbnZhciBwb3NpdGlvbk1hcCQxID0gWydhYnNvbHV0ZScsICdmaXhlZCcsICdyZWxhdGl2ZScsICdzdGF0aWMnLCAnc3RpY2t5J107XG4vKipcbiAqIFNob3J0aGFuZCBhY2NlcHRzIHVwIHRvIGZpdmUgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLiBUaGUgZmlyc3QgdmFsdWUgY2FuIG9wdGlvbmFsbHkgYmUgYSBwb3NpdGlvbiBrZXl3b3JkLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucG9zaXRpb24oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3Bvc2l0aW9uKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICd0b3AnOiAnMTJweCcsXG4gKiAgICdyaWdodCc6ICcyNHB4JyxcbiAqICAgJ2JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ2xlZnQnOiAnNDhweCdcbiAqIH1cbiAqXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnBvc2l0aW9uKCdhYnNvbHV0ZScsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtwb3NpdGlvbignYWJzb2x1dGUnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAndG9wJzogJzEycHgnLFxuICogICAncmlnaHQnOiAnMjRweCcsXG4gKiAgICdib3R0b20nOiAnMzZweCcsXG4gKiAgICdsZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gcG9zaXRpb24oZmlyc3RWYWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHBvc2l0aW9uTWFwJDEuaW5kZXhPZihmaXJzdFZhbHVlKSA+PSAwICYmIGZpcnN0VmFsdWUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJyddLmNvbmNhdCh2YWx1ZXMpKSwge1xuICAgICAgcG9zaXRpb246IGZpcnN0VmFsdWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnJywgZmlyc3RWYWx1ZV0uY29uY2F0KHZhbHVlcykpO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRvIHNldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzIGluIGEgc2luZ2xlIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnNpemUoJzMwMHB4JywgJzI1MHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtzaXplKCczMDBweCcsICcyNTBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnaGVpZ2h0JzogJzMwMHB4JyxcbiAqICAgJ3dpZHRoJzogJzI1MHB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGggPSBoZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9O1xufVxuXG52YXIgc3RhdGVNYXAkMSA9IFt1bmRlZmluZWQsIG51bGwsICdhY3RpdmUnLCAnZm9jdXMnLCAnaG92ZXInXTtcblxuZnVuY3Rpb24gdGVtcGxhdGUkMShzdGF0ZSkge1xuICByZXR1cm4gXCJpbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcIm1vbnRoXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGVsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwid2Vla1xcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dDpub3QoW3R5cGVdKVwiICsgc3RhdGUgKyBcIixcXG4gICAgdGV4dGFyZWFcIiArIHN0YXRlO1xufVxuLyoqXG4gKiBQb3B1bGF0ZXMgc2VsZWN0b3JzIHRoYXQgdGFyZ2V0IGFsbCB0ZXh0IGlucHV0cy4gWW91IGNhbiBwYXNzIG9wdGlvbmFsIHN0YXRlcyB0byBhcHBlbmQgdG8gdGhlIHNlbGVjdG9ycy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIFt0ZXh0SW5wdXRzKCdhY3RpdmUnKV06IHtcbiAqICAgICAnYm9yZGVyJzogJ25vbmUnXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgPiAke3RleHRJbnB1dHMoJ2FjdGl2ZScpfSB7XG4gKiAgICAgYm9yZGVyOiBub25lO1xuICogICB9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqICAnaW5wdXRbdHlwZT1cImNvbG9yXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJlbWFpbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cIm1vbnRoXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0ZWxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidGltZVwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInVybFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cIndlZWtcIl06YWN0aXZlLFxuICogIGlucHV0Om5vdChbdHlwZV0pOmFjdGl2ZSxcbiAqICB0ZXh0YXJlYTphY3RpdmUnOiB7XG4gKiAgICdib3JkZXInOiAnbm9uZSdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRleHRJbnB1dHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdGF0ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3RhdGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlZnVsU2VsZWN0b3JzKHN0YXRlcywgdGVtcGxhdGUkMSwgc3RhdGVNYXAkMSk7XG59XG5cbi8qKlxuICogQWNjZXB0cyBhbnkgbnVtYmVyIG9mIHRyYW5zaXRpb24gdmFsdWVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgc2luZ2xlIHRyYW5zaXRpb24gc3RhdGVtZW50LiBZb3UgbWF5IGFsc28gcGFzcyBhbiBhcnJheSBvZiBwcm9wZXJ0aWVzIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhcHBseSB0aGUgc2FtZSB0cmFuc2l0aW9uIHZhbHVlcyB0byAoc2Vjb25kIHBhcmFtZXRlcikuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi50cmFuc2l0aW9ucygnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMnLCAnd2lkdGggMi4wcyBlYXNlLWluIDJzJyksXG4gKiAgIC4uLnRyYW5zaXRpb25zKFsnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvciddLCAnMi4wcyBlYXNlLWluIDJzJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHt0cmFuc2l0aW9ucygnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMnLCAnd2lkdGggMi4wcyBlYXNlLWluIDJzJyl9O1xuICogICAke3RyYW5zaXRpb25zKFsnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvciddLCAnMi4wcyBlYXNlLWluIDJzJyksfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3RyYW5zaXRpb24nOiAnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMsIHdpZHRoIDIuMHMgZWFzZS1pbiAycydcbiAqICAgJ3RyYW5zaXRpb24nOiAnY29sb3IgMi4wcyBlYXNlLWluIDJzLCBiYWNrZ3JvdW5kLWNvbG9yIDIuMHMgZWFzZS1pbiAycycsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHByb3BlcnRpZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzWzBdKSAmJiBwcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnRpZXNbMV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjEpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2l0aW9uc1N0cmluZyA9IHByb3BlcnRpZXNbMF0ubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgXCIgXCIgKyB2YWx1ZTtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uc1N0cmluZ1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IHByb3BlcnRpZXMuam9pbignLCAnKVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgY3VycmllZEFkanVzdEh1ZSBhcyBhZGp1c3RIdWUsIGFuaW1hdGlvbiwgYmFja2dyb3VuZEltYWdlcywgYmFja2dyb3VuZHMsIGJldHdlZW4sIGJvcmRlciwgYm9yZGVyQ29sb3IsIGJvcmRlclJhZGl1cywgYm9yZGVyU3R5bGUsIGJvcmRlcldpZHRoLCBidXR0b25zLCBjbGVhckZpeCwgY29tcGxlbWVudCwgY292ZXIsIGNzc1ZhciwgY3VycmllZERhcmtlbiBhcyBkYXJrZW4sIGN1cnJpZWREZXNhdHVyYXRlIGFzIGRlc2F0dXJhdGUsIGRpcmVjdGlvbmFsUHJvcGVydHksIGVsbGlwc2lzLCBlbSwgZmx1aWRSYW5nZSwgZm9udEZhY2UsIGdldENvbnRyYXN0LCBnZXRMdW1pbmFuY2UsIGdldFZhbHVlQW5kVW5pdCwgZ3JheXNjYWxlLCBoaURQSSwgaGlkZVRleHQsIGhpZGVWaXN1YWxseSwgaHNsLCBoc2xUb0NvbG9yU3RyaW5nLCBoc2xhLCBpbnZlcnQsIGN1cnJpZWRMaWdodGVuIGFzIGxpZ2h0ZW4sIGxpbmVhckdyYWRpZW50LCBtYXJnaW4sIG1hdGgsIG1lZXRzQ29udHJhc3RHdWlkZWxpbmVzLCBjdXJyaWVkTWl4IGFzIG1peCwgbW9kdWxhclNjYWxlLCBub3JtYWxpemUsIGN1cnJpZWRPcGFjaWZ5IGFzIG9wYWNpZnksIHBhZGRpbmcsIHBhcnNlVG9Ic2wsIHBhcnNlVG9SZ2IsIHBvc2l0aW9uLCByYWRpYWxHcmFkaWVudCwgcmVhZGFibGVDb2xvciwgcmVtLCByZXRpbmFJbWFnZSwgcmdiLCByZ2JUb0NvbG9yU3RyaW5nLCByZ2JhLCBjdXJyaWVkU2F0dXJhdGUgYXMgc2F0dXJhdGUsIGN1cnJpZWRTZXRIdWUgYXMgc2V0SHVlLCBjdXJyaWVkU2V0TGlnaHRuZXNzIGFzIHNldExpZ2h0bmVzcywgY3VycmllZFNldFNhdHVyYXRpb24gYXMgc2V0U2F0dXJhdGlvbiwgY3VycmllZFNoYWRlIGFzIHNoYWRlLCBzaXplLCBzdHJpcFVuaXQsIHRleHRJbnB1dHMsIHRpbWluZ0Z1bmN0aW9ucywgY3VycmllZFRpbnQgYXMgdGludCwgdG9Db2xvclN0cmluZywgdHJhbnNpdGlvbnMsIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSBhcyB0cmFuc3BhcmVudGl6ZSwgdHJpYW5nbGUsIHdvcmRXcmFwIH07XG4iXSwic291cmNlUm9vdCI6IiJ9
