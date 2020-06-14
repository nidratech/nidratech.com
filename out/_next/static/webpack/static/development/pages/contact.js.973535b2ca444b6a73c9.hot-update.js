webpackHotUpdate('static\\development\\pages\\contact.js', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvZGlzdC9wb2xpc2hlZC5lc20uanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJTdHlsZWROaWRyYXRlY2hMb2dvIiwic3R5bGVkIiwiTmlkcmF0ZWNoTG9nbyIsIk5hdkNvbnRhaW5lciIsImRpdiIsIk5hdkl0ZW0iLCJhIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJTdHlsZWROYXYiLCJuYXYiLCJsYXJnZSIsIlN0eWxlZEhlYWRlciIsImhlYWRlciIsIndoaXRlIiwibmF2QmFySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsbUJBQ0tDLDZEQUFTLEVBRGQ7QUFBQSxNQUNSQyxRQURRLGNBQ1JBLFFBRFE7O0FBR2hCLFNBQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxHQUFaO0FBQWlCLFlBQVEsTUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLE1BQUUsRUFBQyxHQUFaO0FBQWdCLGtCQUFZLGdCQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGLENBREYsRUFTRSxNQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixZQUFRLE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE9BQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFnQixTQUFL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K0RBQWM7QUFDekI7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUM0QjtBQUNoQjtBQUNJO0FBQ3NCOztBQUVoRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDJCQUEyQjtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFlBQVk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsYUFBYSxxR0FBMkI7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxrQkFBa0Isa0ZBQVE7QUFDN0I7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHLEtBQUs7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzRkFBc0Y7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sVUFBVSxzRkFBc0Y7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsRUFBRTtBQUNoQyxrQ0FBa0MsRUFBRTtBQUNwQyxxQ0FBcUMsRUFBRTtBQUN2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d2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY29udGFjdC5qcy45NzM1MzViMmNhNDQ0YjZhNzNjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTmlkcmF0ZWNoTG9nbyBmcm9tICdjb21wb25lbnRzL05pZHJhdGVjaExvZ28nO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEhlYWRlcj5cbiAgICAgIDxTdHlsZWROYXY+XG4gICAgICAgIDxOYXZDb250YWluZXI+XG4gICAgICAgICAgPExpbmsgaHJlZj17Jy8nfSBwYXNzSHJlZj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGFzPVwiYVwiIGFyaWEtbGFiZWw9eydOaWRyYXRlY2ggTHRkLid9PlxuICAgICAgICAgICAgICA8U3R5bGVkTmlkcmF0ZWNoTG9nbyAvPlxuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG5cbiAgICAgICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgICAgICA8TGluayBocmVmPXsnLyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydIb21lJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnLyd9PlxuICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9qZWN0cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydQcm9qZWN0cyd9IGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9wcm9qZWN0cyd9PlxuICAgICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY2xpZW50cyd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDbGllbnRzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfT5cbiAgICAgICAgICAgICAgQ2xpZW50c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvY29udGFjdCd9IHBhc3NIcmVmPlxuICAgICAgICAgICAgPE5hdkl0ZW0gYXM9XCJhXCIgdGl0bGU9eydDb250YWN0IHVzJ30gaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NvbnRhY3QnfT5cbiAgICAgICAgICAgICAgQ29udGFjdCB1c1xuICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9OYXZDb250YWluZXI+XG4gICAgICA8L1N0eWxlZE5hdj5cbiAgICA8L1N0eWxlZEhlYWRlcj5cbiAgKTtcbn1cblxuY29uc3QgU3R5bGVkTmlkcmF0ZWNoTG9nbyA9IHN0eWxlZChOaWRyYXRlY2hMb2dvKWBcbiAgd2lkdGg6IDkuNXJlbTtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5hPHsgaXNBY3RpdmU/OiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xuICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT4gKGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IGlzQWN0aXZlLCB0aGVtZSB9KSA9PlxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcbiAgfVxuYDtcbmNvbnN0IFN0eWxlZE5hdiA9IHN0eWxlZC5uYXZgXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLmxhcmdlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuY29uc3QgU3R5bGVkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5uYXZCYXJIZWlnaHR9O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICBzdHJpbmdzLnJhdyA9IHJhdztcbiAgcmV0dXJuIHN0cmluZ3M7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mXCI7XG5pbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2ZcIjtcbmltcG9ydCBpc05hdGl2ZUZ1bmN0aW9uIGZyb20gXCIuL2lzTmF0aXZlRnVuY3Rpb25cIjtcbmltcG9ydCBjb25zdHJ1Y3QgZnJvbSBcIi4vY29uc3RydWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF93cmFwTmF0aXZlU3VwZXIgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vd3JhcE5hdGl2ZVN1cGVyJztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UnO1xuXG5mdW5jdGlvbiBsYXN0KCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxLCBfcmVmIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IF9yZWYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbX3JlZl07XG59XG5cbmZ1bmN0aW9uIG5lZ2F0aW9uKGEpIHtcbiAgcmV0dXJuIC1hO1xufVxuXG5mdW5jdGlvbiBhZGRpdGlvbihhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxpY2F0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgKiBiO1xufVxuXG5mdW5jdGlvbiBkaXZpc2lvbihhLCBiKSB7XG4gIHJldHVybiBhIC8gYjtcbn1cblxuZnVuY3Rpb24gZmFjdG9yaWFsKGEpIHtcbiAgaWYgKGEgJSAxIHx8ICEoK2EgPj0gMCkpIHJldHVybiBOYU47XG4gIGlmIChhID4gMTcwKSByZXR1cm4gSW5maW5pdHk7ZWxzZSBpZiAoYSA9PT0gMCkgcmV0dXJuIDE7ZWxzZSB7XG4gICAgcmV0dXJuIGEgKiBmYWN0b3JpYWwoYSAtIDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBvd2VyKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGgucG93KGEsIGIpO1xufVxuXG5mdW5jdGlvbiBzcXJ0KGEpIHtcbiAgcmV0dXJuIE1hdGguc3FydChhKTtcbn1cblxuZnVuY3Rpb24gbWF4KCkge1xuICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gbWluKCkge1xuICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY29tbWEoKSB7XG4gIHJldHVybiBBcnJheS5vZi5hcHBseShBcnJheSwgYXJndW1lbnRzKTtcbn1cblxudmFyIGRlZmF1bHRNYXRoU3ltYm9scyA9IHtcbiAgc3ltYm9sczoge1xuICAgICchJzoge1xuICAgICAgcG9zdGZpeDoge1xuICAgICAgICBzeW1ib2w6ICchJyxcbiAgICAgICAgZjogZmFjdG9yaWFsLFxuICAgICAgICBub3RhdGlvbjogJ3Bvc3RmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA2LFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICchJyxcbiAgICAgIHJlZ1N5bWJvbDogJyEnXG4gICAgfSxcbiAgICAnXic6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJ14nLFxuICAgICAgICBmOiBwb3dlcixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDUsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAxLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJ14nLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXF4nXG4gICAgfSxcbiAgICAnKic6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJyonLFxuICAgICAgICBmOiBtdWx0aXBsaWNhdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDQsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJyonLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXConXG4gICAgfSxcbiAgICAnLyc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJy8nLFxuICAgICAgICBmOiBkaXZpc2lvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDQsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJy8nLFxuICAgICAgcmVnU3ltYm9sOiAnLydcbiAgICB9LFxuICAgICcrJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKycsXG4gICAgICAgIGY6IGFkZGl0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMixcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgcHJlZml4OiB7XG4gICAgICAgIHN5bWJvbDogJysnLFxuICAgICAgICBmOiBsYXN0LFxuICAgICAgICBub3RhdGlvbjogJ3ByZWZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDMsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJysnLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXCsnXG4gICAgfSxcbiAgICAnLSc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJy0nLFxuICAgICAgICBmOiBzdWJ0cmFjdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDIsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICctJyxcbiAgICAgICAgZjogbmVnYXRpb24sXG4gICAgICAgIG5vdGF0aW9uOiAncHJlZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMyxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnLScsXG4gICAgICByZWdTeW1ib2w6ICctJ1xuICAgIH0sXG4gICAgJywnOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcsJyxcbiAgICAgICAgZjogY29tbWEsXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAxLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcsJyxcbiAgICAgIHJlZ1N5bWJvbDogJywnXG4gICAgfSxcbiAgICAnKCc6IHtcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICcoJyxcbiAgICAgICAgZjogbGFzdCxcbiAgICAgICAgbm90YXRpb246ICdwcmVmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcoJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwoJ1xuICAgIH0sXG4gICAgJyknOiB7XG4gICAgICBwb3N0Zml4OiB7XG4gICAgICAgIHN5bWJvbDogJyknLFxuICAgICAgICBmOiB1bmRlZmluZWQsXG4gICAgICAgIG5vdGF0aW9uOiAncG9zdGZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDAsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJyknLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXCknXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIGZ1bmM6IHtcbiAgICAgICAgc3ltYm9sOiAnbWluJyxcbiAgICAgICAgZjogbWluLFxuICAgICAgICBub3RhdGlvbjogJ2Z1bmMnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdtaW4nLFxuICAgICAgcmVnU3ltYm9sOiAnbWluXFxcXGInXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIGZ1bmM6IHtcbiAgICAgICAgc3ltYm9sOiAnbWF4JyxcbiAgICAgICAgZjogbWF4LFxuICAgICAgICBub3RhdGlvbjogJ2Z1bmMnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdtYXgnLFxuICAgICAgcmVnU3ltYm9sOiAnbWF4XFxcXGInXG4gICAgfSxcbiAgICBzcXJ0OiB7XG4gICAgICBmdW5jOiB7XG4gICAgICAgIHN5bWJvbDogJ3NxcnQnLFxuICAgICAgICBmOiBzcXJ0LFxuICAgICAgICBub3RhdGlvbjogJ2Z1bmMnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdzcXJ0JyxcbiAgICAgIHJlZ1N5bWJvbDogJ3NxcnRcXFxcYidcbiAgICB9XG4gIH1cbn07XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL2ZjZjZmMzgwNGM1N2ExNGRkNzk4NGRmYWI3YmMwNmVlMmVkY2EwNDQvc3JjL3V0aWxzL2Vycm9yLmpzXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRVJST1JTID0ge1xuICBcIjFcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsKDM2MCwgMC43NSwgMC40KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2xhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsYSgzNjAsIDAuNzUsIDAuNCwgMC43KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUsIGFscGhhOiAwLjcgfSkuXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlBhc3NlZCBhbiBpbmNvcnJlY3QgYXJndW1lbnQgdG8gYSBjb2xvciBmdW5jdGlvbiwgcGxlYXNlIHBhc3MgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiQ291bGRuJ3QgZ2VuZXJhdGUgdmFsaWQgcmdiIHN0cmluZyBmcm9tICVzLCBpdCByZXR1cm5lZCAlcy5cXG5cXG5cIixcbiAgXCI1XCI6IFwiQ291bGRuJ3QgcGFyc2UgdGhlIGNvbG9yIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgdGhlIGNvbG9yIGFzIGEgc3RyaW5nIGluIGhleCwgcmdiLCByZ2JhLCBoc2wgb3IgaHNsYSBub3RhdGlvbi5cXG5cXG5cIixcbiAgXCI2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYiwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwKSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLlxcblxcblwiLFxuICBcIjdcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwLCAwLjc1KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43NSB9KS5cXG5cXG5cIixcbiAgXCI4XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjlcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCIxMFwiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjExXCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbSBzdHJpbmcgYnV0IGdvdCBcXFwiJXNcXFwiXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTNcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjE0XCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE2XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE3XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxOFwiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjE5XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIyMFwiOiBcImV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiMjFcIjogXCJleHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIyXCI6IFwiZXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjNcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjI0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjI1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI2XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyN1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjI4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjI5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjMwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjMxXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjMyXCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJylcXG5cXG5cIixcbiAgXCIzM1wiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzNFwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM1XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM2XCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCIzN1wiOiBcIlN5bnRheCBFcnJvciBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOFwiOiBcIkZvcm11bGEgY29udGFpbnMgYSBmdW5jdGlvbiB0aGF0IG5lZWRzIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjM5XCI6IFwiRm9ybXVsYSBpcyBtaXNzaW5nIGNsb3NpbmcgcGFyZW50aGVzaXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDBcIjogXCJGb3JtdWxhIGhhcyB0b28gbWFueSBjbG9zaW5nIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjQxXCI6IFwiQWxsIHZhbHVlcyBpbiBhIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgb3IgYmUgdW5pdGxlc3MuXFxuXFxuXCIsXG4gIFwiNDJcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCI0M1wiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjQ0XCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbS9yZW0gc3RyaW5nIGJ1dCBnb3QgJXMuXFxuXFxuXCIsXG4gIFwiNDVcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byBoc2xUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byByZ2JUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDdcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OFwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDlcIjogXCJFeHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUwXCI6IFwiRXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MVwiOiBcIkV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUyXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjUzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiNTZcIjogXCJsaW5lYXJHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1N1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjU5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjYwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjYxXCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCI2MlwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjYzXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjY0XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2NVwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXFxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJykuXFxuXFxuXCIsXG4gIFwiNjZcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY3XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY4XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OVwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzBcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MVwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzJcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzNcIjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIENTUyB2YXJpYWJsZS5cXG5cXG5cIixcbiAgXCI3NFwiOiBcIkNTUyB2YXJpYWJsZSBub3QgZm91bmQuXFxuXCJcbn07XG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYSA9IGFyZ3NbMF07XG4gIHZhciBiID0gW107XG4gIHZhciBjO1xuXG4gIGZvciAoYyA9IDE7IGMgPCBhcmdzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3NbY10pO1xuICB9XG5cbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvJVthLXpdLywgZCk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2xpc2hlZEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9saXNoZWRFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBQb2xpc2hlZEVycm9yKGNvZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3BvbGlzaGVkL2Jsb2IvbWFzdGVyL3NyYy9pbnRlcm5hbEhlbHBlcnMvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSB8fCB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIGZvcm1hdC5hcHBseSh2b2lkIDAsIFtFUlJPUlNbY29kZV1dLmNvbmNhdChhcmdzKSkpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFBvbGlzaGVkRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuXG52YXIgdW5pdFJlZ0V4cCA9IC8oKD8hXFx3KWF8bmF8aGN8bWN8ZGd8bWVbcl0/fHhlfG5pKD8hW2EtekEtWl0pfG1tfGNwfHRwfHhwfHEoPyFzKXxodnx4YW12fG5pbXZ8d3Z8c218cyg/IVxcRHwkKXxnZWR8ZGFyZz98bnJ1dCkvZzsgLy8gTWVyZ2VzIGFkZGl0aW9uYWwgbWF0aCBmdW5jdGlvbmFsaXR5IGludG8gdGhlIGRlZmF1bHRzLlxuXG5mdW5jdGlvbiBtZXJnZVN5bWJvbE1hcHMoYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHN5bWJvbE1hcCA9IHt9O1xuICBzeW1ib2xNYXAuc3ltYm9scyA9IGFkZGl0aW9uYWxTeW1ib2xzID8gX2V4dGVuZHMoe30sIGRlZmF1bHRNYXRoU3ltYm9scy5zeW1ib2xzLCB7fSwgYWRkaXRpb25hbFN5bWJvbHMuc3ltYm9scykgOiBfZXh0ZW5kcyh7fSwgZGVmYXVsdE1hdGhTeW1ib2xzLnN5bWJvbHMpO1xuICByZXR1cm4gc3ltYm9sTWFwO1xufVxuXG5mdW5jdGlvbiBleGVjKG9wZXJhdG9ycywgdmFsdWVzKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBvcCA9IG9wZXJhdG9ycy5wb3AoKTtcbiAgdmFsdWVzLnB1c2gob3AuZi5hcHBseShvcCwgKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIHZhbHVlcy5zcGxpY2UoLW9wLmFyZ0NvdW50KSkpKTtcbiAgcmV0dXJuIG9wLnByZWNlZGVuY2U7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShleHByZXNzaW9uLCBhZGRpdGlvbmFsU3ltYm9scykge1xuICB2YXIgc3ltYm9sTWFwID0gbWVyZ2VTeW1ib2xNYXBzKGFkZGl0aW9uYWxTeW1ib2xzKTtcbiAgdmFyIG1hdGNoO1xuICB2YXIgb3BlcmF0b3JzID0gW3N5bWJvbE1hcC5zeW1ib2xzWycoJ10ucHJlZml4XTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoIC8vIFBhdHRlcm4gZm9yIG51bWJlcnNcbiAgXCJcXFxcZCsoPzpcXFxcLlxcXFxkKyk/fFwiICsgLy8gLi4uYW5kIHBhdHRlcm5zIGZvciBpbmRpdmlkdWFsIG9wZXJhdG9ycy9mdW5jdGlvbiBuYW1lc1xuICBPYmplY3Qua2V5cyhzeW1ib2xNYXAuc3ltYm9scykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc3ltYm9sTWFwLnN5bWJvbHNba2V5XTtcbiAgfSkgLy8gbG9uZ2VyIHN5bWJvbHMgc2hvdWxkIGJlIGxpc3RlZCBmaXJzdFxuICAvLyAkRmxvd0ZpeE1lXG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc3ltYm9sLmxlbmd0aCAtIGEuc3ltYm9sLmxlbmd0aDtcbiAgfSkgLy8gJEZsb3dGaXhNZVxuICAubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsLnJlZ1N5bWJvbDtcbiAgfSkuam9pbignfCcpICsgXCJ8KFxcXFxTKVwiLCAnZycpO1xuICBwYXR0ZXJuLmxhc3RJbmRleCA9IDA7IC8vIFJlc2V0IHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RcblxuICB2YXIgYWZ0ZXJWYWx1ZSA9IGZhbHNlO1xuXG4gIGRvIHtcbiAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhleHByZXNzaW9uKTtcblxuICAgIHZhciBfcmVmMiA9IG1hdGNoIHx8IFsnKScsIHVuZGVmaW5lZF0sXG4gICAgICAgIHRva2VuID0gX3JlZjJbMF0sXG4gICAgICAgIGJhZCA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIG5vdE51bWJlciA9IHN5bWJvbE1hcC5zeW1ib2xzW3Rva2VuXTtcbiAgICB2YXIgbm90TmV3VmFsdWUgPSBub3ROdW1iZXIgJiYgIW5vdE51bWJlci5wcmVmaXggJiYgIW5vdE51bWJlci5mdW5jO1xuICAgIHZhciBub3RBZnRlclZhbHVlID0gIW5vdE51bWJlciB8fCAhbm90TnVtYmVyLnBvc3RmaXggJiYgIW5vdE51bWJlci5pbmZpeDsgLy8gQ2hlY2sgZm9yIHN5bnRheCBlcnJvcnM6XG5cbiAgICBpZiAoYmFkIHx8IChhZnRlclZhbHVlID8gbm90QWZ0ZXJWYWx1ZSA6IG5vdE5ld1ZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzcsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgaWYgKGFmdGVyVmFsdWUpIHtcbiAgICAgIC8vIFdlIGVpdGhlciBoYXZlIGFuIGluZml4IG9yIHBvc3RmaXggb3BlcmF0b3IgKHRoZXkgc2hvdWxkIGJlIG11dHVhbGx5IGV4Y2x1c2l2ZSlcbiAgICAgIHZhciBjdXJyID0gbm90TnVtYmVyLnBvc3RmaXggfHwgbm90TnVtYmVyLmluZml4O1xuXG4gICAgICBkbyB7XG4gICAgICAgIHZhciBwcmV2ID0gb3BlcmF0b3JzW29wZXJhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKChjdXJyLnByZWNlZGVuY2UgLSBwcmV2LnByZWNlZGVuY2UgfHwgcHJldi5yaWdodFRvTGVmdCkgPiAwKSBicmVhazsgLy8gQXBwbHkgcHJldmlvdXMgb3BlcmF0b3IsIHNpbmNlIGl0IGhhcyBwcmVjZWRlbmNlIG92ZXIgY3VycmVudCBvbmVcbiAgICAgIH0gd2hpbGUgKGV4ZWMob3BlcmF0b3JzLCB2YWx1ZXMpKTsgLy8gRXhpdCBsb29wIGFmdGVyIGV4ZWN1dGluZyBhbiBvcGVuaW5nIHBhcmVudGhlc2lzIG9yIGZ1bmN0aW9uXG5cblxuICAgICAgYWZ0ZXJWYWx1ZSA9IGN1cnIubm90YXRpb24gPT09ICdwb3N0Zml4JztcblxuICAgICAgaWYgKGN1cnIuc3ltYm9sICE9PSAnKScpIHtcbiAgICAgICAgb3BlcmF0b3JzLnB1c2goY3Vycik7IC8vIFBvc3RmaXggYWx3YXlzIGhhcyBwcmVjZWRlbmNlIG92ZXIgYW55IG9wZXJhdG9yIHRoYXQgZm9sbG93cyBhZnRlciBpdFxuXG4gICAgICAgIGlmIChhZnRlclZhbHVlKSBleGVjKG9wZXJhdG9ycywgdmFsdWVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vdE51bWJlcikge1xuICAgICAgLy8gcHJlZml4IG9wZXJhdG9yIG9yIGZ1bmN0aW9uXG4gICAgICBvcGVyYXRvcnMucHVzaChub3ROdW1iZXIucHJlZml4IHx8IG5vdE51bWJlci5mdW5jKTtcblxuICAgICAgaWYgKG5vdE51bWJlci5mdW5jKSB7XG4gICAgICAgIC8vIFJlcXVpcmUgYW4gb3BlbmluZyBwYXJlbnRoZXNpc1xuICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhleHByZXNzaW9uKTtcblxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzBdICE9PSAnKCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzOCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBudW1iZXJcbiAgICAgIHZhbHVlcy5wdXNoKCt0b2tlbik7XG4gICAgICBhZnRlclZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH0gd2hpbGUgKG1hdGNoICYmIG9wZXJhdG9ycy5sZW5ndGgpO1xuXG4gIGlmIChvcGVyYXRvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzksIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gIH0gZWxzZSBpZiAobWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0MCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWVzLnBvcCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cbi8qKlxuICogSGVscGVyIGZvciBkb2luZyBtYXRoIHdpdGggQ1NTIFVuaXRzLiBBY2NlcHRzIGEgZm9ybXVsYSBhcyBhIHN0cmluZy4gQWxsIHZhbHVlcyBpbiB0aGUgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCAob3IgYmUgdW5pdGxlc3MpLiBTdXBwb3J0cyBjb21wbGV4IGZvcm11bGFzIHV0bGl6aWluZyBhZGRpdGlvbiwgc3VidHJhY3Rpb24sIG11bHRpcGxpY2F0aW9uLCBkaXZpc2lvbiwgc3F1YXJlIHJvb3QsIHBvd2VycywgZmFjdG9yaWFsLCBtaW4sIG1heCwgYXMgd2VsbCBhcyBwYXJlbnRoZXNlcyBmb3Igb3JkZXIgb2Ygb3BlcmF0aW9uLlxuICpcbiAqSW4gY2FzZXMgd2hlcmUgeW91IG5lZWQgdG8gZG8gY2FsY3VsYXRpb25zIHdpdGggbWl4ZWQgdW5pdHMgd2hlcmUgb25lIHVuaXQgaXMgYSBbcmVsYXRpdmUgbGVuZ3RoIHVuaXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9sZW5ndGgjUmVsYXRpdmVfbGVuZ3RoX3VuaXRzKSwgeW91IHdpbGwgd2FudCB0byB1c2UgW0NTUyBDYWxjXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY2FsYykuXG4gKlxuICogKndhcm5pbmcqIFdoaWxlIHdlJ3ZlIGRvbmUgZXZlcnl0aGluZyBwb3NzaWJsZSB0byBlbnN1cmUgbWF0aCBzYWZlbHkgZXZhbHV0ZXMgZm9ybXVsYXMgZXhwcmVzc2VkIGFzIHN0cmluZ3MsIHlvdSBzaG91bGQgYWx3YXlzIHVzZSBleHRyZW1lIGNhdXRpb24gd2hlbiBwYXNzaW5nIGBtYXRoYCB1c2VyIHByb3ZpZGVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGZvbnRTaXplOiBtYXRoKCcxMnJlbSArIDhyZW0nKSxcbiAqICAgZm9udFNpemU6IG1hdGgoJygxMnB4ICsgMnB4KSAqIDMnKSxcbiAqICAgZm9udFNpemU6IG1hdGgoJzNweF4yICsgc3FydCg0KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBmb250U2l6ZTogJHttYXRoKCcxMnJlbSArIDhyZW0nKX07XG4gKiAgIGZvbnRTaXplOiAke21hdGgoJygxMnB4ICsgMnB4KSAqIDMnKX07XG4gKiAgIGZvbnRTaXplOiAke21hdGgoJzNweF4yICsgc3FydCg0KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgIGZvbnRTaXplOiAnMjByZW0nLFxuICogICBmb250U2l6ZTogJzQycHgnLFxuICogICBmb250U2l6ZTogJzExcHgnLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gbWF0aChmb3JtdWxhLCBhZGRpdGlvbmFsU3ltYm9scykge1xuICB2YXIgcmV2ZXJzZWRGb3JtdWxhID0gcmV2ZXJzZVN0cmluZyhmb3JtdWxhKTtcbiAgdmFyIGZvcm11bGFNYXRjaCA9IHJldmVyc2VkRm9ybXVsYS5tYXRjaCh1bml0UmVnRXhwKTsgLy8gQ2hlY2sgdGhhdCBhbGwgdW5pdHMgYXJlIHRoZSBzYW1lXG5cbiAgaWYgKGZvcm11bGFNYXRjaCAmJiAhZm9ybXVsYU1hdGNoLmV2ZXJ5KGZ1bmN0aW9uICh1bml0KSB7XG4gICAgcmV0dXJuIHVuaXQgPT09IGZvcm11bGFNYXRjaFswXTtcbiAgfSkpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0MSk7XG4gIH1cblxuICB2YXIgY2xlYW5Gb3JtdWxhID0gcmV2ZXJzZVN0cmluZyhyZXZlcnNlZEZvcm11bGEucmVwbGFjZSh1bml0UmVnRXhwLCAnJykpO1xuICByZXR1cm4gXCJcIiArIGNhbGN1bGF0ZShjbGVhbkZvcm11bGEsIGFkZGl0aW9uYWxTeW1ib2xzKSArIChmb3JtdWxhTWF0Y2ggPyByZXZlcnNlU3RyaW5nKGZvcm11bGFNYXRjaFswXSkgOiAnJyk7XG59XG5cbnZhciBjc3NWYXJpYWJsZVJlZ2V4ID0gLy0tW1xcU10qL2c7XG4vKipcbiAqIEZldGNoZXMgdGhlIHZhbHVlIG9mIGEgcGFzc2VkIENTUyBWYXJpYWJsZS5cbiAqXG4gKiBQYXNzdGhyb3VnaCBjYW4gYmUgZW5hYmxlZCAob2ZmIGJ5IGRlZmF1bHQpIGZvciB3aGVuIHlvdSBhcmUgdW5zdXJlIG9mIHRoZSBpbnB1dCBhbmQgd2FudCBub24tdmFyaWFibGUgdmFsdWVzIHRvIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYW4gZXJyb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2JhY2tncm91bmQnOiBjc3NWYXIoJy0tYmFja2dyb3VuZC1jb2xvcicpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2Nzc1ZhcignLS1iYWNrZ3JvdW5kLWNvbG9yJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2JhY2tncm91bmQnOiAncmVkJ1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGNzc1Zhcihjc3NWYXJpYWJsZSwgcGFzc1Rocm91Z2gpIHtcbiAgaWYgKCFjc3NWYXJpYWJsZSB8fCAhY3NzVmFyaWFibGUubWF0Y2goY3NzVmFyaWFibGVSZWdleCkpIHtcbiAgICBpZiAocGFzc1Rocm91Z2gpIHJldHVybiBjc3NWYXJpYWJsZTtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3Myk7XG4gIH1cblxuICB2YXIgdmFyaWFibGVWYWx1ZTtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlVmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXJpYWJsZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbiAgaWYgKHZhcmlhYmxlVmFsdWUpIHtcbiAgICByZXR1cm4gdmFyaWFibGVWYWx1ZS50cmltKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzQpO1xuICB9XG59XG5cbi8vIEBwcml2YXRlXG5mdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG52YXIgcG9zaXRpb25NYXAgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb3BlcnR5KHByb3BlcnR5LCBwb3NpdGlvbikge1xuICBpZiAoIXByb3BlcnR5KSByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKTtcbiAgdmFyIHNwbGl0UHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdCgnLScpO1xuXG4gIGlmIChzcGxpdFByb3BlcnR5Lmxlbmd0aCA+IDEpIHtcbiAgICBzcGxpdFByb3BlcnR5LnNwbGljZSgxLCAwLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHNwbGl0UHJvcGVydHkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbCkge1xuICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBjYXBpdGFsaXplU3RyaW5nKHZhbCk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgam9pbmVkUHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXCIgKyBwb3NpdGlvbiArIFwiJDJcIik7XG4gIHJldHVybiBwcm9wZXJ0eSA9PT0gam9pbmVkUHJvcGVydHkgPyBcIlwiICsgcHJvcGVydHkgKyBwb3NpdGlvbiA6IGpvaW5lZFByb3BlcnR5O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0eWxlcyhwcm9wZXJ0eSwgdmFsdWVzV2l0aERlZmF1bHRzKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlc1dpdGhEZWZhdWx0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh2YWx1ZXNXaXRoRGVmYXVsdHNbaV0gfHwgdmFsdWVzV2l0aERlZmF1bHRzW2ldID09PSAwKSB7XG4gICAgICBzdHlsZXNbZ2VuZXJhdGVQcm9wZXJ0eShwcm9wZXJ0eSwgcG9zaXRpb25NYXBbaV0pXSA9IHZhbHVlc1dpdGhEZWZhdWx0c1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuLyoqXG4gKiBFbmFibGVzIHNob3J0aGFuZCBmb3IgZGlyZWN0aW9uLWJhc2VkIHByb3BlcnRpZXMuIEl0IGFjY2VwdHMgYSBwcm9wZXJ0eSAoaHlwaGVuYXRlZCBvciBjYW1lbENhc2VkKSBhbmQgdXAgdG8gZm91ciB2YWx1ZXMgdGhhdCBtYXAgdG8gdG9wLCByaWdodCwgYm90dG9tLCBhbmQgbGVmdCwgcmVzcGVjdGl2ZWx5LiBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhbiBlbXB0eSBzdHJpbmcgdG8gZ2V0IG9ubHkgdGhlIGRpcmVjdGlvbmFsIHZhbHVlcyBhcyBwcm9wZXJ0aWVzLiBZb3UgY2FuIGFsc28gb3B0aW9uYWxseSBwYXNzIGEgbnVsbCBhcmd1bWVudCBmb3IgYSBkaXJlY3Rpb25hbCB2YWx1ZSB0byBpZ25vcmUgaXQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5kaXJlY3Rpb25hbFByb3BlcnR5KCdwYWRkaW5nJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2RpcmVjdGlvbmFsUHJvcGVydHkoJ3BhZGRpbmcnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAncGFkZGluZ1RvcCc6ICcxMnB4JyxcbiAqICAgJ3BhZGRpbmdSaWdodCc6ICcyNHB4JyxcbiAqICAgJ3BhZGRpbmdCb3R0b20nOiAnMzZweCcsXG4gKiAgICdwYWRkaW5nTGVmdCc6ICc0OHB4J1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gZGlyZWN0aW9uYWxQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gIHByZXR0aWVyLWlnbm9yZVxuICB2YXIgZmlyc3RWYWx1ZSA9IHZhbHVlc1swXSxcbiAgICAgIF92YWx1ZXMkID0gdmFsdWVzWzFdLFxuICAgICAgc2Vjb25kVmFsdWUgPSBfdmFsdWVzJCA9PT0gdm9pZCAwID8gZmlyc3RWYWx1ZSA6IF92YWx1ZXMkLFxuICAgICAgX3ZhbHVlcyQyID0gdmFsdWVzWzJdLFxuICAgICAgdGhpcmRWYWx1ZSA9IF92YWx1ZXMkMiA9PT0gdm9pZCAwID8gZmlyc3RWYWx1ZSA6IF92YWx1ZXMkMixcbiAgICAgIF92YWx1ZXMkMyA9IHZhbHVlc1szXSxcbiAgICAgIGZvdXJ0aFZhbHVlID0gX3ZhbHVlcyQzID09PSB2b2lkIDAgPyBzZWNvbmRWYWx1ZSA6IF92YWx1ZXMkMztcbiAgdmFyIHZhbHVlc1dpdGhEZWZhdWx0cyA9IFtmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWVdO1xuICByZXR1cm4gZ2VuZXJhdGVTdHlsZXMocHJvcGVydHksIHZhbHVlc1dpdGhEZWZhdWx0cyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgZW5kcyB3aXRoIHNvbWV0aGluZ1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5kc1dpdGggKHN0cmluZywgc3VmZml4KSB7XG4gIHJldHVybiBzdHJpbmcuc3Vic3RyKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xufVxuXG52YXIgY3NzUmVnZXggPSAvXihbKy1dPyg/OlxcZCt8XFxkKlxcLlxcZCspKShbYS16XSp8JSkkLztcbi8qKlxuICogUmV0dXJucyBhIGdpdmVuIENTUyB2YWx1ZSBtaW51cyBpdHMgdW5pdCBvZiBtZWFzdXJlLlxuICpcbiAqIEBkZXByZWNhdGVkIC0gc3RyaXBVbml0J3MgdW5pdFJldHVybiBmdW5jdGlvbmFsaXR5IGhhcyBiZWVuIG1hcmtlZCBmb3IgZGVwcmVjYXRpb24gaW4gcG9saXNoZWQgNC4wLiBJdCdzIGZ1bmN0aW9uYWxpdHkgaGFzIGJlZW4gYmVlbiBtb3ZlZCB0byBnZXRWYWx1ZUFuZFVuaXQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJy0tZGltZW5zaW9uJzogc3RyaXBVbml0KCcxMDBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIC0tZGltZW5zaW9uOiAke3N0cmlwVW5pdCgnMTAwcHgnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnLS1kaW1lbnNpb24nOiAxMDBcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzdHJpcFVuaXQodmFsdWUsIHVuaXRSZXR1cm4pIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiB1bml0UmV0dXJuID8gW3ZhbHVlLCB1bmRlZmluZWRdIDogdmFsdWU7XG4gIHZhciBtYXRjaGVkVmFsdWUgPSB2YWx1ZS5tYXRjaChjc3NSZWdleCk7XG5cbiAgaWYgKHVuaXRSZXR1cm4pIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihcInN0cmlwVW5pdCdzIHVuaXRSZXR1cm4gZnVuY3Rpb25hbGl0eSBoYXMgYmVlbiBtYXJrZWQgZm9yIGRlcHJlY2F0aW9uIGluIHBvbGlzaGVkIDQuMC4gSXQncyBmdW5jdGlvbmFsaXR5IGhhcyBiZWVuIGJlZW4gbW92ZWQgdG8gZ2V0VmFsdWVBbmRVbml0LlwiKTtcbiAgICBpZiAobWF0Y2hlZFZhbHVlKSByZXR1cm4gW3BhcnNlRmxvYXQodmFsdWUpLCBtYXRjaGVkVmFsdWVbMl1dO1xuICAgIHJldHVybiBbdmFsdWUsIHVuZGVmaW5lZF07XG4gIH1cblxuICBpZiAobWF0Y2hlZFZhbHVlKSByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBwaXhlbC10by14IGNvbnZlcnRlcnNcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHB4dG9GYWN0b3J5ID0gZnVuY3Rpb24gcHh0b0ZhY3RvcnkodG8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChweHZhbCwgYmFzZSkge1xuICAgIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICAgIGJhc2UgPSAnMTZweCc7XG4gICAgfVxuXG4gICAgdmFyIG5ld1B4dmFsID0gcHh2YWw7XG4gICAgdmFyIG5ld0Jhc2UgPSBiYXNlO1xuXG4gICAgaWYgKHR5cGVvZiBweHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghZW5kc1dpdGgocHh2YWwsICdweCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY5LCB0bywgcHh2YWwpO1xuICAgICAgfVxuXG4gICAgICBuZXdQeHZhbCA9IHN0cmlwVW5pdChweHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCFlbmRzV2l0aChiYXNlLCAncHgnKSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MCwgdG8sIGJhc2UpO1xuICAgICAgfVxuXG4gICAgICBuZXdCYXNlID0gc3RyaXBVbml0KGJhc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV3UHh2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MSwgcHh2YWwsIHRvKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld0Jhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MiwgYmFzZSwgdG8pO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiICsgbmV3UHh2YWwgLyBuZXdCYXNlICsgdG87XG4gIH07XG59O1xuXG4vKipcbiAqIENvbnZlcnQgcGl4ZWwgdmFsdWUgdG8gZW1zLiBUaGUgZGVmYXVsdCBiYXNlIHZhbHVlIGlzIDE2cHgsIGJ1dCBjYW4gYmUgY2hhbmdlZCBieSBwYXNzaW5nIGFcbiAqIHNlY29uZCBhcmd1bWVudCB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcHh2YWxcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2Jhc2U9JzE2cHgnXVxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2hlaWdodCc6IGVtKCcxNnB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgaGVpZ2h0OiAke2VtKCcxNnB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnaGVpZ2h0JzogJzFlbSdcbiAqIH1cbiAqL1xuXG52YXIgZW0gPSAvKiNfX1BVUkVfXyovcHh0b0ZhY3RvcnkoJ2VtJyk7XG5cbnZhciBjc3NSZWdleCQxID0gL14oWystXT8oPzpcXGQrfFxcZCpcXC5cXGQrKSkoW2Etel0qfCUpJC87XG4vKipcbiAqIFJldHVybnMgYSBnaXZlbiBDU1MgdmFsdWUgYW5kIGl0cyB1bml0IGFzIGVsZW1lbnRzIG9mIGFuIGFycmF5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICctLWRpbWVuc2lvbic6IGdldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVswXSxcbiAqICAgJy0tdW5pdCc6IGdldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVsxXSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgLS1kaW1lbnNpb246ICR7Z2V0VmFsdWVBbmRVbml0KCcxMDBweCcpWzBdfTtcbiAqICAgLS11bml0OiAke2dldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVsxXX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnLS1kaW1lbnNpb24nOiAxMDAsXG4gKiAgICctLXVuaXQnOiAncHgnLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGdldFZhbHVlQW5kVW5pdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIFt2YWx1ZSwgJyddO1xuICB2YXIgbWF0Y2hlZFZhbHVlID0gdmFsdWUubWF0Y2goY3NzUmVnZXgkMSk7XG4gIGlmIChtYXRjaGVkVmFsdWUpIHJldHVybiBbcGFyc2VGbG9hdCh2YWx1ZSksIG1hdGNoZWRWYWx1ZVsyXV07XG4gIHJldHVybiBbdmFsdWUsIHVuZGVmaW5lZF07XG59XG5cbnZhciByYXRpb05hbWVzID0ge1xuICBtaW5vclNlY29uZDogMS4wNjcsXG4gIG1ham9yU2Vjb25kOiAxLjEyNSxcbiAgbWlub3JUaGlyZDogMS4yLFxuICBtYWpvclRoaXJkOiAxLjI1LFxuICBwZXJmZWN0Rm91cnRoOiAxLjMzMyxcbiAgYXVnRm91cnRoOiAxLjQxNCxcbiAgcGVyZmVjdEZpZnRoOiAxLjUsXG4gIG1pbm9yU2l4dGg6IDEuNixcbiAgZ29sZGVuU2VjdGlvbjogMS42MTgsXG4gIG1ham9yU2l4dGg6IDEuNjY3LFxuICBtaW5vclNldmVudGg6IDEuNzc4LFxuICBtYWpvclNldmVudGg6IDEuODc1LFxuICBvY3RhdmU6IDIsXG4gIG1ham9yVGVudGg6IDIuNSxcbiAgbWFqb3JFbGV2ZW50aDogMi42NjcsXG4gIG1ham9yVHdlbGZ0aDogMyxcbiAgZG91YmxlT2N0YXZlOiA0XG59O1xuXG5mdW5jdGlvbiBnZXRSYXRpbyhyYXRpb05hbWUpIHtcbiAgcmV0dXJuIHJhdGlvTmFtZXNbcmF0aW9OYW1lXTtcbn1cbi8qKlxuICogRXN0YWJsaXNoIGNvbnNpc3RlbnQgbWVhc3VyZW1lbnRzIGFuZCBzcGFjaWFsIHJlbGF0aW9uc2hpcHMgdGhyb3VnaG91dCB5b3VyIHByb2plY3RzIGJ5IGluY3JlbWVudGluZyBhbiBlbSBvciByZW0gdmFsdWUgdXAgb3IgZG93biBhIGRlZmluZWQgc2NhbGUuIFdlIHByb3ZpZGUgYSBsaXN0IG9mIGNvbW1vbmx5IHVzZWQgc2NhbGVzIGFzIHByZS1kZWZpbmVkIHZhcmlhYmxlcy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAvLyBJbmNyZW1lbnQgdHdvIHN0ZXBzIHVwIHRoZSBkZWZhdWx0IHNjYWxlXG4gKiAgICdmb250U2l6ZSc6IG1vZHVsYXJTY2FsZSgyKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAgLy8gSW5jcmVtZW50IHR3byBzdGVwcyB1cCB0aGUgZGVmYXVsdCBzY2FsZVxuICogICBmb250U2l6ZTogJHttb2R1bGFyU2NhbGUoMil9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnZm9udFNpemUnOiAnMS43NzY4OWVtJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gbW9kdWxhclNjYWxlKHN0ZXBzLCBiYXNlLCByYXRpbykge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9ICcxZW0nO1xuICB9XG5cbiAgaWYgKHJhdGlvID09PSB2b2lkIDApIHtcbiAgICByYXRpbyA9IDEuMzMzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGVwcyAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Mik7XG4gIH1cblxuICBpZiAodHlwZW9mIHJhdGlvID09PSAnc3RyaW5nJyAmJiAhcmF0aW9OYW1lc1tyYXRpb10pIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Myk7XG4gIH1cblxuICB2YXIgX3JlZiA9IHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJyA/IGdldFZhbHVlQW5kVW5pdChiYXNlKSA6IFtiYXNlLCAnJ10sXG4gICAgICByZWFsQmFzZSA9IF9yZWZbMF0sXG4gICAgICB1bml0ID0gX3JlZlsxXTtcblxuICB2YXIgcmVhbFJhdGlvID0gdHlwZW9mIHJhdGlvID09PSAnc3RyaW5nJyA/IGdldFJhdGlvKHJhdGlvKSA6IHJhdGlvO1xuXG4gIGlmICh0eXBlb2YgcmVhbEJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDQsIGJhc2UpO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIgKyByZWFsQmFzZSAqIE1hdGgucG93KHJlYWxSYXRpbywgc3RlcHMpICsgKHVuaXQgfHwgJycpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgcGl4ZWwgdmFsdWUgdG8gcmVtcy4gVGhlIGRlZmF1bHQgYmFzZSB2YWx1ZSBpcyAxNnB4LCBidXQgY2FuIGJlIGNoYW5nZWQgYnkgcGFzc2luZyBhXG4gKiBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHB4dmFsXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtiYXNlPScxNnB4J11cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdoZWlnaHQnOiByZW0oJzE2cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBoZWlnaHQ6ICR7cmVtKCcxNnB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnaGVpZ2h0JzogJzFyZW0nXG4gKiB9XG4gKi9cblxudmFyIHJlbSA9IC8qI19fUFVSRV9fKi9weHRvRmFjdG9yeSgncmVtJyk7XG5cbi8qKlxuICogUmV0dXJucyBhIENTUyBjYWxjIGZvcm11bGEgZm9yIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9mIGEgcHJvcGVydHkgYmV0d2VlbiB0d28gdmFsdWVzLiBBY2NlcHRzIG9wdGlvbmFsIG1pblNjcmVlbiAoZGVmYXVsdHMgdG8gJzMyMHB4JykgYW5kIG1heFNjcmVlbiAoZGVmYXVsdHMgdG8gJzEyMDBweCcpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGZvbnRTaXplOiBiZXR3ZWVuKCcyMHB4JywgJzEwMHB4JywgJzQwMHB4JywgJzEwMDBweCcpLFxuICogICBmb250U2l6ZTogYmV0d2VlbignMjBweCcsICcxMDBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGZvbnRTaXplOiAke2JldHdlZW4oJzIwcHgnLCAnMTAwcHgnLCAnNDAwcHgnLCAnMTAwMHB4Jyl9O1xuICogICBmb250U2l6ZTogJHtiZXR3ZWVuKCcyMHB4JywgJzEwMHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGgxOiB7XG4gKiAgICdmb250U2l6ZSc6ICdjYWxjKC0zMy4zMzMzMzMzMzMzMzMzNHB4ICsgMTMuMzMzMzMzMzMzMzMzMzM0dncpJyxcbiAqICAgJ2ZvbnRTaXplJzogJ2NhbGMoLTkuMDkwOTA5MDkwOTA5MDkzcHggKyA5LjA5MDkwOTA5MDkwOTA5MnZ3KSdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBiZXR3ZWVuKGZyb21TaXplLCB0b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSB7XG4gIGlmIChtaW5TY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1pblNjcmVlbiA9ICczMjBweCc7XG4gIH1cblxuICBpZiAobWF4U2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtYXhTY3JlZW4gPSAnMTIwMHB4JztcbiAgfVxuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0ID0gZ2V0VmFsdWVBbmRVbml0KGZyb21TaXplKSxcbiAgICAgIHVuaXRsZXNzRnJvbVNpemUgPSBfZ2V0VmFsdWVBbmRVbml0WzBdLFxuICAgICAgZnJvbVNpemVVbml0ID0gX2dldFZhbHVlQW5kVW5pdFsxXTtcblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdDIgPSBnZXRWYWx1ZUFuZFVuaXQodG9TaXplKSxcbiAgICAgIHVuaXRsZXNzVG9TaXplID0gX2dldFZhbHVlQW5kVW5pdDJbMF0sXG4gICAgICB0b1NpemVVbml0ID0gX2dldFZhbHVlQW5kVW5pdDJbMV07XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQzID0gZ2V0VmFsdWVBbmRVbml0KG1pblNjcmVlbiksXG4gICAgICB1bml0bGVzc01pblNjcmVlbiA9IF9nZXRWYWx1ZUFuZFVuaXQzWzBdLFxuICAgICAgbWluU2NyZWVuVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXQzWzFdO1xuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0NCA9IGdldFZhbHVlQW5kVW5pdChtYXhTY3JlZW4pLFxuICAgICAgdW5pdGxlc3NNYXhTY3JlZW4gPSBfZ2V0VmFsdWVBbmRVbml0NFswXSxcbiAgICAgIG1heFNjcmVlblVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0NFsxXTtcblxuICBpZiAodHlwZW9mIHVuaXRsZXNzTWluU2NyZWVuICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdW5pdGxlc3NNYXhTY3JlZW4gIT09ICdudW1iZXInIHx8ICFtaW5TY3JlZW5Vbml0IHx8ICFtYXhTY3JlZW5Vbml0IHx8IG1pblNjcmVlblVuaXQgIT09IG1heFNjcmVlblVuaXQpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Nyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHVuaXRsZXNzRnJvbVNpemUgIT09ICdudW1iZXInIHx8IHR5cGVvZiB1bml0bGVzc1RvU2l6ZSAhPT0gJ251bWJlcicgfHwgZnJvbVNpemVVbml0ICE9PSB0b1NpemVVbml0KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDgpO1xuICB9XG5cbiAgdmFyIHNsb3BlID0gKHVuaXRsZXNzRnJvbVNpemUgLSB1bml0bGVzc1RvU2l6ZSkgLyAodW5pdGxlc3NNaW5TY3JlZW4gLSB1bml0bGVzc01heFNjcmVlbik7XG4gIHZhciBiYXNlID0gdW5pdGxlc3NUb1NpemUgLSBzbG9wZSAqIHVuaXRsZXNzTWF4U2NyZWVuO1xuICByZXR1cm4gXCJjYWxjKFwiICsgYmFzZS50b0ZpeGVkKDIpICsgKGZyb21TaXplVW5pdCB8fCAnJykgKyBcIiArIFwiICsgKDEwMCAqIHNsb3BlKS50b0ZpeGVkKDIpICsgXCJ2dylcIjtcbn1cblxuLyoqXG4gKiBDU1MgdG8gY29udGFpbiBhIGZsb2F0IChjcmVkaXQgdG8gQ1NTTW9qbykuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLmNsZWFyRml4KCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Y2xlYXJGaXgoKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJyY6OmFmdGVyJzoge1xuICogICAnY2xlYXInOiAnYm90aCcsXG4gKiAgICdjb250ZW50JzogJ1wiXCInLFxuICogICAnZGlzcGxheSc6ICd0YWJsZSdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gY2xlYXJGaXgocGFyZW50KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChwYXJlbnQgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudCA9ICcmJztcbiAgfVxuXG4gIHZhciBwc2V1ZG9TZWxlY3RvciA9IHBhcmVudCArIFwiOjphZnRlclwiO1xuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW3BzZXVkb1NlbGVjdG9yXSA9IHtcbiAgICBjbGVhcjogJ2JvdGgnLFxuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH0sIF9yZWY7XG59XG5cbi8qKlxuICogQ1NTIHRvIGZ1bGx5IGNvdmVyIGFuIGFyZWEuIENhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCBhbiBvZmZzZXQgdG8gYWN0IGFzIGEgXCJwYWRkaW5nXCIuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uY292ZXIoKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2NvdmVyKCl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAndG9wJzogJzAnLFxuICogICAncmlnaHQ6ICcwJyxcbiAqICAgJ2JvdHRvbSc6ICcwJyxcbiAqICAgJ2xlZnQ6ICcwJ1xuICogfVxuICovXG5mdW5jdGlvbiBjb3ZlcihvZmZzZXQpIHtcbiAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgcmlnaHQ6IG9mZnNldCxcbiAgICBib3R0b206IG9mZnNldCxcbiAgICBsZWZ0OiBvZmZzZXRcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gcmVwcmVzZW50IHRydW5jYXRlZCB0ZXh0IHdpdGggYW4gZWxsaXBzaXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZWxsaXBzaXMoJzI1MHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtlbGxpcHNpcygnMjUwcHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXG4gKiAgICdtYXhXaWR0aCc6ICcyNTBweCcsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAndGV4dE92ZXJmbG93JzogJ2VsbGlwc2lzJyxcbiAqICAgJ3doaXRlU3BhY2UnOiAnbm93cmFwJyxcbiAqICAgJ3dvcmRXcmFwJzogJ25vcm1hbCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZWxsaXBzaXMod2lkdGgpIHtcbiAgaWYgKHdpZHRoID09PSB2b2lkIDApIHtcbiAgICB3aWR0aCA9ICcxMDAlJztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWF4V2lkdGg6IHdpZHRoLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd29yZFdyYXA6ICdub3JtYWwnXG4gIH07XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobykgeyB2YXIgaSA9IDA7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IGkgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgcmV0dXJuIGkubmV4dC5iaW5kKGkpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2V0IG9mIG1lZGlhIHF1ZXJpZXMgdGhhdCByZXNpemVzIGEgcHJvcGVydHkgKG9yIHNldCBvZiBwcm9wZXJ0aWVzKSBiZXR3ZWVuIGEgcHJvdmlkZWQgZnJvbVNpemUgYW5kIHRvU2l6ZS4gQWNjZXB0cyBvcHRpb25hbCBtaW5TY3JlZW4gKGRlZmF1bHRzIHRvICczMjBweCcpIGFuZCBtYXhTY3JlZW4gKGRlZmF1bHRzIHRvICcxMjAwcHgnKSB0byBjb25zdHJhaW4gdGhlIGludGVycG9sYXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZmx1aWRSYW5nZShcbiAqICAgIHtcbiAqICAgICAgICBwcm9wOiAncGFkZGluZycsXG4gKiAgICAgICAgZnJvbVNpemU6ICcyMHB4JyxcbiAqICAgICAgICB0b1NpemU6ICcxMDBweCcsXG4gKiAgICAgIH0sXG4gKiAgICAgICc0MDBweCcsXG4gKiAgICAgICcxMDAwcHgnLFxuICogICAgKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2ZsdWlkUmFuZ2UoXG4gKiAgICAgIHtcbiAqICAgICAgICBwcm9wOiAncGFkZGluZycsXG4gKiAgICAgICAgZnJvbVNpemU6ICcyMHB4JyxcbiAqICAgICAgICB0b1NpemU6ICcxMDBweCcsXG4gKiAgICAgIH0sXG4gKiAgICAgICc0MDBweCcsXG4gKiAgICAgICcxMDAwcHgnLFxuICogICAgKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweClcIjogT2JqZWN0IHtcbiAqICAgICBcInBhZGRpbmdcIjogXCIxMDBweFwiLFxuICogICB9LFxuICogICBcIkBtZWRpYSAobWluLXdpZHRoOiA0MDBweClcIjogT2JqZWN0IHtcbiAqICAgICBcInBhZGRpbmdcIjogXCJjYWxjKC0zMy4zMzMzMzMzMzMzMzMzNHB4ICsgMTMuMzMzMzMzMzMzMzMzMzM0dncpXCIsXG4gKiAgIH0sXG4gKiAgIFwicGFkZGluZ1wiOiBcIjIwcHhcIixcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZmx1aWRSYW5nZShjc3NQcm9wLCBtaW5TY3JlZW4sIG1heFNjcmVlbikge1xuICBpZiAobWluU2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtaW5TY3JlZW4gPSAnMzIwcHgnO1xuICB9XG5cbiAgaWYgKG1heFNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWF4U2NyZWVuID0gJzEyMDBweCc7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY3NzUHJvcCkgJiYgdHlwZW9mIGNzc1Byb3AgIT09ICdvYmplY3QnIHx8IGNzc1Byb3AgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0OSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wKSkge1xuICAgIHZhciBtZWRpYVF1ZXJpZXMgPSB7fTtcbiAgICB2YXIgZmFsbGJhY2tzID0ge307XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGNzc1Byb3ApLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIF9leHRlbmRzMiwgX2V4dGVuZHMzO1xuXG4gICAgICB2YXIgb2JqID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICghb2JqLnByb3AgfHwgIW9iai5mcm9tU2l6ZSB8fCAhb2JqLnRvU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1MCk7XG4gICAgICB9XG5cbiAgICAgIGZhbGxiYWNrc1tvYmoucHJvcF0gPSBvYmouZnJvbVNpemU7XG4gICAgICBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtaW5TY3JlZW4gKyBcIilcIl0gPSBfZXh0ZW5kcyh7fSwgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWluU2NyZWVuICsgXCIpXCJdLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltvYmoucHJvcF0gPSBiZXR3ZWVuKG9iai5mcm9tU2l6ZSwgb2JqLnRvU2l6ZSwgbWluU2NyZWVuLCBtYXhTY3JlZW4pLCBfZXh0ZW5kczIpKTtcbiAgICAgIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1heFNjcmVlbiArIFwiKVwiXSA9IF9leHRlbmRzKHt9LCBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtYXhTY3JlZW4gKyBcIilcIl0sIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW29iai5wcm9wXSA9IG9iai50b1NpemUsIF9leHRlbmRzMykpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZmFsbGJhY2tzLCB7fSwgbWVkaWFRdWVyaWVzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzO1xuXG4gICAgaWYgKCFjc3NQcm9wLnByb3AgfHwgIWNzc1Byb3AuZnJvbVNpemUgfHwgIWNzc1Byb3AudG9TaXplKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1MSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYzID0ge30sIF9yZWYzW2Nzc1Byb3AucHJvcF0gPSBjc3NQcm9wLmZyb21TaXplLCBfcmVmM1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1pblNjcmVlbiArIFwiKVwiXSA9IChfcmVmID0ge30sIF9yZWZbY3NzUHJvcC5wcm9wXSA9IGJldHdlZW4oY3NzUHJvcC5mcm9tU2l6ZSwgY3NzUHJvcC50b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSwgX3JlZiksIF9yZWYzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWF4U2NyZWVuICsgXCIpXCJdID0gKF9yZWYyID0ge30sIF9yZWYyW2Nzc1Byb3AucHJvcF0gPSBjc3NQcm9wLnRvU2l6ZSwgX3JlZjIpLCBfcmVmMztcbiAgfVxufVxuXG52YXIgZGF0YVVSSVJlZ2V4ID0gL15cXHMqZGF0YTooW2Etel0rXFwvW2Etei1dKyg7W2Etei1dKz1bYS16LV0rKT8pPyg7Y2hhcnNldD1bYS16MC05LV0rKT8oO2Jhc2U2NCk/LFthLXowLTkhJCYnLCgpKissOz1cXC0uX346QC8/JVxcc10qXFxzKiQvaTtcbnZhciBmb3JtYXRIaW50TWFwID0ge1xuICB3b2ZmOiAnd29mZicsXG4gIHdvZmYyOiAnd29mZjInLFxuICB0dGY6ICd0cnVldHlwZScsXG4gIG90ZjogJ29wZW50eXBlJyxcbiAgZW90OiAnZW1iZWRkZWQtb3BlbnR5cGUnLFxuICBzdmc6ICdzdmcnLFxuICBzdmd6OiAnc3ZnJ1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtYXRIaW50KGZvcm1hdCwgZm9ybWF0SGludCkge1xuICBpZiAoIWZvcm1hdEhpbnQpIHJldHVybiAnJztcbiAgcmV0dXJuIFwiIGZvcm1hdChcXFwiXCIgKyBmb3JtYXRIaW50TWFwW2Zvcm1hdF0gKyBcIlxcXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGlzRGF0YVVSSShmb250RmlsZVBhdGgpIHtcbiAgcmV0dXJuICEhZm9udEZpbGVQYXRoLm1hdGNoKGRhdGFVUklSZWdleCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRmlsZVJlZmVyZW5jZXMoZm9udEZpbGVQYXRoLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCkge1xuICBpZiAoaXNEYXRhVVJJKGZvbnRGaWxlUGF0aCkpIHtcbiAgICByZXR1cm4gXCJ1cmwoXFxcIlwiICsgZm9udEZpbGVQYXRoICsgXCJcXFwiKVwiICsgZ2VuZXJhdGVGb3JtYXRIaW50KGZpbGVGb3JtYXRzWzBdLCBmb3JtYXRIaW50KTtcbiAgfVxuXG4gIHZhciBmaWxlRm9udFJlZmVyZW5jZXMgPSBmaWxlRm9ybWF0cy5tYXAoZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiBcInVybChcXFwiXCIgKyBmb250RmlsZVBhdGggKyBcIi5cIiArIGZvcm1hdCArIFwiXFxcIilcIiArIGdlbmVyYXRlRm9ybWF0SGludChmb3JtYXQsIGZvcm1hdEhpbnQpO1xuICB9KTtcbiAgcmV0dXJuIGZpbGVGb250UmVmZXJlbmNlcy5qb2luKCcsICcpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxvY2FsUmVmZXJlbmNlcyhsb2NhbEZvbnRzKSB7XG4gIHZhciBsb2NhbEZvbnRSZWZlcmVuY2VzID0gbG9jYWxGb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICByZXR1cm4gXCJsb2NhbChcXFwiXCIgKyBmb250ICsgXCJcXFwiKVwiO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsRm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTb3VyY2VzKGZvbnRGaWxlUGF0aCwgbG9jYWxGb250cywgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpIHtcbiAgdmFyIGZvbnRSZWZlcmVuY2VzID0gW107XG4gIGlmIChsb2NhbEZvbnRzKSBmb250UmVmZXJlbmNlcy5wdXNoKGdlbmVyYXRlTG9jYWxSZWZlcmVuY2VzKGxvY2FsRm9udHMpKTtcblxuICBpZiAoZm9udEZpbGVQYXRoKSB7XG4gICAgZm9udFJlZmVyZW5jZXMucHVzaChnZW5lcmF0ZUZpbGVSZWZlcmVuY2VzKGZvbnRGaWxlUGF0aCwgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpKTtcbiAgfVxuXG4gIHJldHVybiBmb250UmVmZXJlbmNlcy5qb2luKCcsICcpO1xufVxuLyoqXG4gKiBDU1MgZm9yIGEgQGZvbnQtZmFjZSBkZWNsYXJhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCBiYXNpYyB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLi4uZm9udEZhY2Uoe1xuICogICAgICAnZm9udEZhbWlseSc6ICdTYW5zLVBybycsXG4gKiAgICAgICdmb250RmlsZVBhdGgnOiAncGF0aC90by9maWxlJ1xuICogICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyBiYXNpYyB1c2FnZVxuICogY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWAke1xuICogICBmb250RmFjZSh7XG4gKiAgICAgJ2ZvbnRGYW1pbHknOiAnU2Fucy1Qcm8nLFxuICogICAgICdmb250RmlsZVBhdGgnOiAncGF0aC90by9maWxlJ1xuICogICB9XG4gKiApfWBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ0Bmb250LWZhY2UnOiB7XG4gKiAgICdmb250RmFtaWx5JzogJ1NhbnMtUHJvJyxcbiAqICAgJ3NyYyc6ICd1cmwoXCJwYXRoL3RvL2ZpbGUuZW90XCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUud29mZjJcIiksIHVybChcInBhdGgvdG8vZmlsZS53b2ZmXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUudHRmXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUuc3ZnXCIpJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvbnRGYWNlKF9yZWYpIHtcbiAgdmFyIGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmlsZVBhdGggPSBfcmVmLmZvbnRGaWxlUGF0aCxcbiAgICAgIGZvbnRTdHJldGNoID0gX3JlZi5mb250U3RyZXRjaCxcbiAgICAgIGZvbnRTdHlsZSA9IF9yZWYuZm9udFN0eWxlLFxuICAgICAgZm9udFZhcmlhbnQgPSBfcmVmLmZvbnRWYXJpYW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWYuZm9udFdlaWdodCxcbiAgICAgIF9yZWYkZmlsZUZvcm1hdHMgPSBfcmVmLmZpbGVGb3JtYXRzLFxuICAgICAgZmlsZUZvcm1hdHMgPSBfcmVmJGZpbGVGb3JtYXRzID09PSB2b2lkIDAgPyBbJ2VvdCcsICd3b2ZmMicsICd3b2ZmJywgJ3R0ZicsICdzdmcnXSA6IF9yZWYkZmlsZUZvcm1hdHMsXG4gICAgICBfcmVmJGZvcm1hdEhpbnQgPSBfcmVmLmZvcm1hdEhpbnQsXG4gICAgICBmb3JtYXRIaW50ID0gX3JlZiRmb3JtYXRIaW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZm9ybWF0SGludCxcbiAgICAgIGxvY2FsRm9udHMgPSBfcmVmLmxvY2FsRm9udHMsXG4gICAgICB1bmljb2RlUmFuZ2UgPSBfcmVmLnVuaWNvZGVSYW5nZSxcbiAgICAgIGZvbnREaXNwbGF5ID0gX3JlZi5mb250RGlzcGxheSxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5ncyA9IF9yZWYuZm9udFZhcmlhdGlvblNldHRpbmdzLFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5ncyA9IF9yZWYuZm9udEZlYXR1cmVTZXR0aW5ncztcbiAgLy8gRXJyb3IgSGFuZGxpbmdcbiAgaWYgKCFmb250RmFtaWx5KSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1NSk7XG5cbiAgaWYgKCFmb250RmlsZVBhdGggJiYgIWxvY2FsRm9udHMpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Mik7XG4gIH1cblxuICBpZiAobG9jYWxGb250cyAmJiAhQXJyYXkuaXNBcnJheShsb2NhbEZvbnRzKSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUzKTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShmaWxlRm9ybWF0cykpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1NCk7XG4gIH1cblxuICB2YXIgZm9udEZhY2VEZWNsYXJhdGlvbiA9IHtcbiAgICAnQGZvbnQtZmFjZSc6IHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBzcmM6IGdlbmVyYXRlU291cmNlcyhmb250RmlsZVBhdGgsIGxvY2FsRm9udHMsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSxcbiAgICAgIHVuaWNvZGVSYW5nZTogdW5pY29kZVJhbmdlLFxuICAgICAgZm9udFN0cmV0Y2g6IGZvbnRTdHJldGNoLFxuICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUsXG4gICAgICBmb250VmFyaWFudDogZm9udFZhcmlhbnQsXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udERpc3BsYXk6IGZvbnREaXNwbGF5LFxuICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBmb250VmFyaWF0aW9uU2V0dGluZ3MsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBmb250RmVhdHVyZVNldHRpbmdzXG4gICAgfVxuICB9OyAvLyBSZW1vdmVzIHVuZGVmaW5lZCBmaWVsZHMgZm9yIGNsZWFuZXIgY3NzIG9iamVjdC5cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb250RmFjZURlY2xhcmF0aW9uKSk7XG59XG5cbi8qKlxuICogQ1NTIHRvIGhpZGUgdGV4dCB0byBzaG93IGEgYmFja2dyb3VuZCBpbWFnZSBpbiBhIFNFTy1mcmllbmRseSB3YXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwobG9nby5wbmcpJyxcbiAqICAgLi4uaGlkZVRleHQoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZEltYWdlOiB1cmwobG9nby5wbmcpO1xuICogICAke2hpZGVUZXh0KCl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3VybChsb2dvLnBuZyknLFxuICogICAndGV4dEluZGVudCc6ICcxMDElJyxcbiAqICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gKiAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpZGVUZXh0KCkge1xuICByZXR1cm4ge1xuICAgIHRleHRJbmRlbnQ6ICcxMDElJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gaGlkZSBjb250ZW50IHZpc3VhbGx5IGJ1dCByZW1haW4gYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVycy5cbiAqIGZyb20gW0hUTUw1IEJvaWxlcnBsYXRlXShodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9ibG9iLzlhMTc2ZjU3YWYxY2ZlOGVjNzAzMDBkYTQ2MjFmYjliMDdlNWZhMzEvc3JjL2Nzcy9tYWluLmNzcyNMMTIxKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmhpZGVWaXN1YWxseSgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2hpZGVWaXN1YWxseSgpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ2JvcmRlcic6ICcwJyxcbiAqICAgJ2NsaXAnOiAncmVjdCgwIDAgMCAwKScsXG4gKiAgICdoZWlnaHQnOiAnMXB4JyxcbiAqICAgJ21hcmdpbic6ICctMXB4JyxcbiAqICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gKiAgICdwYWRkaW5nJzogJzAnLFxuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuICogICAnd2lkdGgnOiAnMXB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGlkZVZpc3VhbGx5KCkge1xuICByZXR1cm4ge1xuICAgIGJvcmRlcjogJzAnLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6ICcxcHgnXG4gIH07XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0IEhpRFBJIGRldmljZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICBbaGlEUEkoMS41KV06IHtcbiAqICAgIHdpZHRoOiAyMDBweDtcbiAqICB9XG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7aGlEUEkoMS41KX0ge1xuICogICAgIHdpZHRoOiAyMDBweDtcbiAqICAgfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41LzEpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE0NGRwaSksXG4gKiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS41ZHBweCknOiB7XG4gKiAgICd3aWR0aCc6ICcyMDBweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpRFBJKHJhdGlvKSB7XG4gIGlmIChyYXRpbyA9PT0gdm9pZCAwKSB7XG4gICAgcmF0aW8gPSAxLjM7XG4gIH1cblxuICByZXR1cm4gXCJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiBcIiArIHJhdGlvICsgXCIpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiKSxcXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiBcIiArIHJhdGlvICsgXCIvMSksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IFwiICsgTWF0aC5yb3VuZChyYXRpbyAqIDk2KSArIFwiZHBpKSxcXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogXCIgKyByYXRpbyArIFwiZHBweClcXG4gIFwiO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RHcmFkaWVudFZhbHVlKGxpdGVyYWxzKSB7XG4gIHZhciB0ZW1wbGF0ZSA9ICcnO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdWJzdGl0dXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdWJzdGl0dXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGl0ZXJhbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0ZW1wbGF0ZSArPSBsaXRlcmFsc1tpXTtcblxuICAgIGlmIChpID09PSBzdWJzdGl0dXRpb25zLmxlbmd0aCAtIDEgJiYgc3Vic3RpdHV0aW9uc1tpXSkge1xuICAgICAgdmFyIGRlZmluZWRWYWx1ZXMgPSBzdWJzdGl0dXRpb25zLmZpbHRlcihmdW5jdGlvbiAoc3Vic3RpdHV0ZSkge1xuICAgICAgICByZXR1cm4gISFzdWJzdGl0dXRlO1xuICAgICAgfSk7IC8vIEFkZHMgbGVhZGluZyBjb21hIGlmIHByb3BlcnRpZXMgcHJlY2VlZCBjb2xvci1zdG9wc1xuXG4gICAgICBpZiAoZGVmaW5lZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc2xpY2UoMCwgLTEpO1xuICAgICAgICB0ZW1wbGF0ZSArPSBcIiwgXCIgKyBzdWJzdGl0dXRpb25zW2ldOyAvLyBObyB0cmFpbGluZyBzcGFjZSBpZiBjb2xvci1zdG9wcyBpcyB0aGUgb25seSBwYXJhbSBwcm92aWRlZFxuICAgICAgfSBlbHNlIGlmIChkZWZpbmVkVmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0ZW1wbGF0ZSArPSBcIlwiICsgc3Vic3RpdHV0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN1YnN0aXR1dGlvbnNbaV0pIHtcbiAgICAgIHRlbXBsYXRlICs9IHN1YnN0aXR1dGlvbnNbaV0gKyBcIiBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVtcGxhdGUudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gIHZhciBkYXRhID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcImxpbmVhci1ncmFkaWVudChcIiwgXCJcIiwgXCIpXCJdKTtcblxuICBfdGVtcGxhdGVPYmplY3QgPSBmdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QoKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQ1NTIGZvciBkZWNsYXJpbmcgYSBsaW5lYXIgZ3JhZGllbnQsIGluY2x1ZGluZyBhIGZhbGxiYWNrIGJhY2tncm91bmQtY29sb3IuIFRoZSBmYWxsYmFjayBpcyBlaXRoZXIgdGhlIGZpcnN0IGNvbG9yLXN0b3Agb3IgYW4gZXhwbGljaXRseSBwYXNzZWQgZmFsbGJhY2sgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ubGluZWFyR3JhZGllbnQoe1xuICAgICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICAgICAgICB0b0RpcmVjdGlvbjogJ3RvIHRvcCByaWdodCcsXG4gICAgICAgIGZhbGxiYWNrOiAnI0ZGRicsXG4gICAgICB9KVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2xpbmVhckdyYWRpZW50KHtcbiAgICAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAgICAgICAgdG9EaXJlY3Rpb246ICd0byB0b3AgcmlnaHQnLFxuICAgICAgICBmYWxsYmFjazogJyNGRkYnLFxuICAgICAgfSl9XG4gKmBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdiYWNrZ3JvdW5kQ29sb3InOiAnI0ZGRicsXG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwRkZGRiAwJSwgcmdiYSgwLCAwLCAyNTUsIDApIDUwJSwgIzAwMDBGRiA5NSUpJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gbGluZWFyR3JhZGllbnQoX3JlZikge1xuICB2YXIgY29sb3JTdG9wcyA9IF9yZWYuY29sb3JTdG9wcyxcbiAgICAgIGZhbGxiYWNrID0gX3JlZi5mYWxsYmFjayxcbiAgICAgIF9yZWYkdG9EaXJlY3Rpb24gPSBfcmVmLnRvRGlyZWN0aW9uLFxuICAgICAgdG9EaXJlY3Rpb24gPSBfcmVmJHRvRGlyZWN0aW9uID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdG9EaXJlY3Rpb247XG5cbiAgaWYgKCFjb2xvclN0b3BzIHx8IGNvbG9yU3RvcHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU2KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWxsYmFjayB8fCBjb2xvclN0b3BzWzBdLnNwbGl0KCcgJylbMF0sXG4gICAgYmFja2dyb3VuZEltYWdlOiBjb25zdHJ1Y3RHcmFkaWVudFZhbHVlKF90ZW1wbGF0ZU9iamVjdCgpLCB0b0RpcmVjdGlvbiwgY29sb3JTdG9wcy5qb2luKCcsICcpKVxuICB9O1xufVxuXG4vKipcbiAqIENTUyB0byBub3JtYWxpemUgYWJub3JtYWxpdGllcyBhY3Jvc3MgYnJvd3NlcnMgKG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcylcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLi4ubm9ybWFsaXplKCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgJHtub3JtYWxpemUoKX1gXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGh0bWwge1xuICogICBsaW5lSGVpZ2h0OiAxLjE1LFxuICogICB0ZXh0U2l6ZUFkanVzdDogMTAwJSxcbiAqIH0gLi4uXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIFsoX3JlZiA9IHtcbiAgICBodG1sOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gICAgICB0ZXh0U2l6ZUFkanVzdDogJzEwMCUnXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgbWFpbjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAnMmVtJyxcbiAgICAgIG1hcmdpbjogJzAuNjdlbSAwJ1xuICAgIH0sXG4gICAgaHI6IHtcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGhlaWdodDogJzAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICAgIH0sXG4gICAgcHJlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlLCBtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6ICcxZW0nXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9LFxuICAgICdhYmJyW3RpdGxlXSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9LCBfcmVmW1wiYixcXG4gICAgc3Ryb25nXCJdID0ge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gIH0sIF9yZWZbXCJjb2RlLFxcbiAgICBrYmQsXFxuICAgIHNhbXBcIl0gPSB7XG4gICAgZm9udEZhbWlseTogJ21vbm9zcGFjZSwgbW9ub3NwYWNlJyxcbiAgICBmb250U2l6ZTogJzFlbSdcbiAgfSwgX3JlZi5zbWFsbCA9IHtcbiAgICBmb250U2l6ZTogJzgwJSdcbiAgfSwgX3JlZltcInN1YixcXG4gICAgc3VwXCJdID0ge1xuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJ1xuICB9LCBfcmVmLnN1YiA9IHtcbiAgICBib3R0b206ICctMC4yNWVtJ1xuICB9LCBfcmVmLnN1cCA9IHtcbiAgICB0b3A6ICctMC41ZW0nXG4gIH0sIF9yZWYuaW1nID0ge1xuICAgIGJvcmRlclN0eWxlOiAnbm9uZSdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaW5wdXQsXFxuICAgIG9wdGdyb3VwLFxcbiAgICBzZWxlY3QsXFxuICAgIHRleHRhcmVhXCJdID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgICBtYXJnaW46ICcwJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBpbnB1dFwiXSA9IHtcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIHNlbGVjdFwiXSA9IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZSdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICAgIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgICBbdHlwZT1cXFwic3VibWl0XFxcIl1cIl0gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ2J1dHRvbidcbiAgfSwgX3JlZltcImJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICBbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyXCJdID0ge1xuICAgIGJvcmRlclN0eWxlOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAnXG4gIH0sIF9yZWZbXCJidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gICAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZ1wiXSA9IHtcbiAgICBvdXRsaW5lOiAnMXB4IGRvdHRlZCBCdXR0b25UZXh0J1xuICB9LCBfcmVmLmZpZWxkc2V0ID0ge1xuICAgIHBhZGRpbmc6ICcwLjM1ZW0gMC42MjVlbSAwLjc1ZW0nXG4gIH0sIF9yZWYubGVnZW5kID0ge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm9ybWFsJ1xuICB9LCBfcmVmLnByb2dyZXNzID0ge1xuICAgIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZSdcbiAgfSwgX3JlZi50ZXh0YXJlYSA9IHtcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0sIF9yZWZbXCJbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gICAgW3R5cGU9XFxcInJhZGlvXFxcIl1cIl0gPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogJzAnXG4gIH0sIF9yZWZbXCJbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICAgIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXSA9IHtcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LCBfcmVmWydbdHlwZT1cInNlYXJjaFwiXSddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnLFxuICAgIG91dGxpbmVPZmZzZXQ6ICctMnB4J1xuICB9LCBfcmVmWydbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJ1xuICB9LCBfcmVmWyc6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uJ10gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ2J1dHRvbicsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0sIF9yZWYuZGV0YWlscyA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sIF9yZWYuc3VtbWFyeSA9IHtcbiAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJ1xuICB9LCBfcmVmLnRlbXBsYXRlID0ge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LCBfcmVmWydbaGlkZGVuXSddID0ge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LCBfcmVmKSwge1xuICAgICdhYmJyW3RpdGxlXSc6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lIGRvdHRlZCdcbiAgICB9XG4gIH1dO1xufVxuXG5mdW5jdGlvbiBfdGVtcGxhdGVPYmplY3QkMSgpIHtcbiAgdmFyIGRhdGEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wicmFkaWFsLWdyYWRpZW50KFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIilcIl0pO1xuXG4gIF90ZW1wbGF0ZU9iamVjdCQxID0gZnVuY3Rpb24gX3RlbXBsYXRlT2JqZWN0KCkge1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENTUyBmb3IgZGVjbGFyaW5nIGEgcmFkaWFsIGdyYWRpZW50LCBpbmNsdWRpbmcgYSBmYWxsYmFjayBiYWNrZ3JvdW5kLWNvbG9yLiBUaGUgZmFsbGJhY2sgaXMgZWl0aGVyIHRoZSBmaXJzdCBjb2xvci1zdG9wIG9yIGFuIGV4cGxpY2l0bHkgcGFzc2VkIGZhbGxiYWNrIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnJhZGlhbEdyYWRpZW50KHtcbiAqICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICogICAgIGV4dGVudDogJ2ZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgnLFxuICogICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAqICAgICBzaGFwZTogJ2VsbGlwc2UnLFxuICogICB9KVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3JhZGlhbEdyYWRpZW50KHtcbiAqICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICogICAgIGV4dGVudDogJ2ZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgnLFxuICogICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAqICAgICBzaGFwZTogJ2VsbGlwc2UnLFxuICogICB9KX1cbiAqYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMDBGRkZGJyxcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICdyYWRpYWwtZ3JhZGllbnQoY2VudGVyIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDQ1cHggNDVweCwgIzAwRkZGRiAwJSwgcmdiYSgwLCAwLCAyNTUsIDApIDUwJSwgIzAwMDBGRiA5NSUpJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnQoX3JlZikge1xuICB2YXIgY29sb3JTdG9wcyA9IF9yZWYuY29sb3JTdG9wcyxcbiAgICAgIF9yZWYkZXh0ZW50ID0gX3JlZi5leHRlbnQsXG4gICAgICBleHRlbnQgPSBfcmVmJGV4dGVudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGV4dGVudCxcbiAgICAgIGZhbGxiYWNrID0gX3JlZi5mYWxsYmFjayxcbiAgICAgIF9yZWYkcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgcG9zaXRpb24gPSBfcmVmJHBvc2l0aW9uID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkcG9zaXRpb24sXG4gICAgICBfcmVmJHNoYXBlID0gX3JlZi5zaGFwZSxcbiAgICAgIHNoYXBlID0gX3JlZiRzaGFwZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHNoYXBlO1xuXG4gIGlmICghY29sb3JTdG9wcyB8fCBjb2xvclN0b3BzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Nyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogZmFsbGJhY2sgfHwgY29sb3JTdG9wc1swXS5zcGxpdCgnICcpWzBdLFxuICAgIGJhY2tncm91bmRJbWFnZTogY29uc3RydWN0R3JhZGllbnRWYWx1ZShfdGVtcGxhdGVPYmplY3QkMSgpLCBwb3NpdGlvbiwgc2hhcGUsIGV4dGVudCwgY29sb3JTdG9wcy5qb2luKCcsICcpKVxuICB9O1xufVxuXG4vKipcbiAqIEEgaGVscGVyIHRvIGdlbmVyYXRlIGEgcmV0aW5hIGJhY2tncm91bmQgaW1hZ2UgYW5kIG5vbi1yZXRpbmFcbiAqIGJhY2tncm91bmQgaW1hZ2UuIFRoZSByZXRpbmEgYmFja2dyb3VuZCBpbWFnZSB3aWxsIG91dHB1dCB0byBhIEhpRFBJIG1lZGlhIHF1ZXJ5LiBUaGUgbWl4aW4gdXNlc1xuICogYSBfMngucG5nIGZpbGVuYW1lIHN1ZmZpeCBieSBkZWZhdWx0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgLi4ucmV0aW5hSW1hZ2UoJ215LWltZycpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cmV0aW5hSW1hZ2UoJ215LWltZycpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqIGRpdiB7XG4gKiAgIGJhY2tncm91bmRJbWFnZTogJ3VybChteS1pbWcucG5nKScsXG4gKiAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS4zKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zLzEpLFxuICogICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTQ0ZHBpKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpJzoge1xuICogICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChteS1pbWdfMngucG5nKScsXG4gKiAgIH1cbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmV0aW5hSW1hZ2UoZmlsZW5hbWUsIGJhY2tncm91bmRTaXplLCBleHRlbnNpb24sIHJldGluYUZpbGVuYW1lLCByZXRpbmFTdWZmaXgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgaWYgKGV4dGVuc2lvbiA9PT0gdm9pZCAwKSB7XG4gICAgZXh0ZW5zaW9uID0gJ3BuZyc7XG4gIH1cblxuICBpZiAocmV0aW5hU3VmZml4ID09PSB2b2lkIDApIHtcbiAgICByZXRpbmFTdWZmaXggPSAnXzJ4JztcbiAgfVxuXG4gIGlmICghZmlsZW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1OCk7XG4gIH0gLy8gUmVwbGFjZSB0aGUgZG90IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBhc3NlZCBleHRlbnNpb24gaWYgb25lIGV4aXN0c1xuXG5cbiAgdmFyIGV4dCA9IGV4dGVuc2lvbi5yZXBsYWNlKC9eXFwuLywgJycpO1xuICB2YXIgckZpbGVuYW1lID0gcmV0aW5hRmlsZW5hbWUgPyByZXRpbmFGaWxlbmFtZSArIFwiLlwiICsgZXh0IDogXCJcIiArIGZpbGVuYW1lICsgcmV0aW5hU3VmZml4ICsgXCIuXCIgKyBleHQ7XG4gIHJldHVybiBfcmVmID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBmaWxlbmFtZSArIFwiLlwiICsgZXh0ICsgXCIpXCJcbiAgfSwgX3JlZltoaURQSSgpXSA9IF9leHRlbmRzKHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgckZpbGVuYW1lICsgXCIpXCJcbiAgfSwgYmFja2dyb3VuZFNpemUgPyB7XG4gICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplXG4gIH0gOiB7fSksIF9yZWY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGtleS1zcGFjaW5nICovXG52YXIgZnVuY3Rpb25zTWFwID0ge1xuICBlYXNlSW5CYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSknLFxuICBlYXNlSW5DaXJjOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAgMC4wNDAsIDAuOTgwLCAwLjMzNSknLFxuICBlYXNlSW5DdWJpYzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDU1LCAwLjY3NSwgMC4xOTApJyxcbiAgZWFzZUluRXhwbzogJ2N1YmljLWJlemllcigwLjk1MCwgIDAuMDUwLCAwLjc5NSwgMC4wMzUpJyxcbiAgZWFzZUluUXVhZDogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAgZWFzZUluUXVhcnQ6ICdjdWJpYy1iZXppZXIoMC44OTUsICAwLjAzMCwgMC42ODUsIDAuMjIwKScsXG4gIGVhc2VJblF1aW50OiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAgMC4wNTAsIDAuODU1LCAwLjA2MCknLFxuICBlYXNlSW5TaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDcwLCAgMC4wMDAsIDAuNzQ1LCAwLjcxNSknLFxuICBlYXNlT3V0QmFjazogJ2N1YmljLWJlemllcigwLjE3NSwgIDAuODg1LCAwLjMyMCwgMS4yNzUpJyxcbiAgZWFzZU91dEN1YmljOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAgMC42MTAsIDAuMzU1LCAxLjAwMCknLFxuICBlYXNlT3V0Q2lyYzogJ2N1YmljLWJlemllcigwLjA3NSwgIDAuODIwLCAwLjE2NSwgMS4wMDApJyxcbiAgZWFzZU91dEV4cG86ICdjdWJpYy1iZXppZXIoMC4xOTAsICAxLjAwMCwgMC4yMjAsIDEuMDAwKScsXG4gIGVhc2VPdXRRdWFkOiAnY3ViaWMtYmV6aWVyKDAuMjUwLCAgMC40NjAsIDAuNDUwLCAwLjk0MCknLFxuICBlYXNlT3V0UXVhcnQ6ICdjdWJpYy1iZXppZXIoMC4xNjUsICAwLjg0MCwgMC40NDAsIDEuMDAwKScsXG4gIGVhc2VPdXRRdWludDogJ2N1YmljLWJlemllcigwLjIzMCwgIDEuMDAwLCAwLjMyMCwgMS4wMDApJyxcbiAgZWFzZU91dFNpbmU6ICdjdWJpYy1iZXppZXIoMC4zOTAsICAwLjU3NSwgMC41NjUsIDEuMDAwKScsXG4gIGVhc2VJbk91dEJhY2s6ICdjdWJpYy1iZXppZXIoMC42ODAsIC0wLjU1MCwgMC4yNjUsIDEuNTUwKScsXG4gIGVhc2VJbk91dENpcmM6ICdjdWJpYy1iZXppZXIoMC43ODUsICAwLjEzNSwgMC4xNTAsIDAuODYwKScsXG4gIGVhc2VJbk91dEN1YmljOiAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAgMC4wNDUsIDAuMzU1LCAxLjAwMCknLFxuICBlYXNlSW5PdXRFeHBvOiAnY3ViaWMtYmV6aWVyKDEuMDAwLCAgMC4wMDAsIDAuMDAwLCAxLjAwMCknLFxuICBlYXNlSW5PdXRRdWFkOiAnY3ViaWMtYmV6aWVyKDAuNDU1LCAgMC4wMzAsIDAuNTE1LCAwLjk1NSknLFxuICBlYXNlSW5PdXRRdWFydDogJ2N1YmljLWJlemllcigwLjc3MCwgIDAuMDAwLCAwLjE3NSwgMS4wMDApJyxcbiAgZWFzZUluT3V0UXVpbnQ6ICdjdWJpYy1iZXppZXIoMC44NjAsICAwLjAwMCwgMC4wNzAsIDEuMDAwKScsXG4gIGVhc2VJbk91dFNpbmU6ICdjdWJpYy1iZXppZXIoMC40NDUsICAwLjA1MCwgMC41NTAsIDAuOTUwKSdcbn07XG4vKiBlc2xpbnQtZW5hYmxlIGtleS1zcGFjaW5nICovXG5cbmZ1bmN0aW9uIGdldFRpbWluZ0Z1bmN0aW9uKGZ1bmN0aW9uTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb25zTWFwW2Z1bmN0aW9uTmFtZV07XG59XG4vKipcbiAqIFN0cmluZyB0byByZXByZXNlbnQgY29tbW9uIGVhc2luZyBmdW5jdGlvbnMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IChnaXRodWIuY29tL2phdWtpYS9lYXNpZSkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IHRpbWluZ0Z1bmN0aW9ucygnZWFzZUluUXVhZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqICBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICR7dGltaW5nRnVuY3Rpb25zKCdlYXNlSW5RdWFkJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9ucyh0aW1pbmdGdW5jdGlvbikge1xuICByZXR1cm4gZ2V0VGltaW5nRnVuY3Rpb24odGltaW5nRnVuY3Rpb24pO1xufVxuXG52YXIgZ2V0Qm9yZGVyV2lkdGggPSBmdW5jdGlvbiBnZXRCb3JkZXJXaWR0aChwb2ludGluZ0RpcmVjdGlvbiwgaGVpZ2h0LCB3aWR0aCkge1xuICB2YXIgZnVsbFdpZHRoID0gXCJcIiArIHdpZHRoWzBdICsgKHdpZHRoWzFdIHx8ICcnKTtcbiAgdmFyIGhhbGZXaWR0aCA9IFwiXCIgKyB3aWR0aFswXSAvIDIgKyAod2lkdGhbMV0gfHwgJycpO1xuICB2YXIgZnVsbEhlaWdodCA9IFwiXCIgKyBoZWlnaHRbMF0gKyAoaGVpZ2h0WzFdIHx8ICcnKTtcbiAgdmFyIGhhbGZIZWlnaHQgPSBcIlwiICsgaGVpZ2h0WzBdIC8gMiArIChoZWlnaHRbMV0gfHwgJycpO1xuXG4gIHN3aXRjaCAocG9pbnRpbmdEaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIFwiMCBcIiArIGhhbGZXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIFwiICsgaGFsZldpZHRoO1xuXG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICByZXR1cm4gZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0ICsgXCIgMCAwXCI7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBoYWxmSGVpZ2h0ICsgXCIgXCIgKyBmdWxsV2lkdGggKyBcIiBcIiArIGhhbGZIZWlnaHQgKyBcIiAwXCI7XG5cbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiBmdWxsV2lkdGggKyBcIiAwIDAgXCIgKyBmdWxsSGVpZ2h0O1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBmdWxsSGVpZ2h0ICsgXCIgXCIgKyBoYWxmV2lkdGggKyBcIiAwIFwiICsgaGFsZldpZHRoO1xuXG4gICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgcmV0dXJuIFwiMCAwIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0O1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGhhbGZIZWlnaHQgKyBcIiAwIFwiICsgaGFsZkhlaWdodCArIFwiIFwiICsgZnVsbFdpZHRoO1xuXG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCIwIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0ICsgXCIgMFwiO1xuICB9XG59O1xuXG52YXIgZ2V0Qm9yZGVyQ29sb3IgPSBmdW5jdGlvbiBnZXRCb3JkZXJDb2xvcihwb2ludGluZ0RpcmVjdGlvbiwgZm9yZWdyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgc3dpdGNoIChwb2ludGluZ0RpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgcmV0dXJuIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBmb3JlZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvcjtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBmb3JlZ3JvdW5kQ29sb3I7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIGZvcmVncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBiYWNrZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGJhY2tncm91bmRDb2xvcjtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIHJldHVybiBiYWNrZ3JvdW5kQ29sb3IgKyBcIiBcIiArIGZvcmVncm91bmRDb2xvciArIFwiIFwiICsgYmFja2dyb3VuZENvbG9yICsgXCIgXCIgKyBiYWNrZ3JvdW5kQ29sb3I7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTkpO1xuICB9XG59O1xuLyoqXG4gKiBDU1MgdG8gcmVwcmVzZW50IHRyaWFuZ2xlIHdpdGggYW55IHBvaW50aW5nIGRpcmVjdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGJhY2tncm91bmQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnRyaWFuZ2xlKHsgcG9pbnRpbmdEaXJlY3Rpb246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGZvcmVncm91bmRDb2xvcjogJ3JlZCcgfSlcbiAqIH1cbiAqXG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7dHJpYW5nbGUoeyBwb2ludGluZ0RpcmVjdGlvbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgZm9yZWdyb3VuZENvbG9yOiAncmVkJyB9KX1cbiAqXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICdib3JkZXJDb2xvcic6ICd0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZWQnLFxuICogICdib3JkZXJTdHlsZSc6ICdzb2xpZCcsXG4gKiAgJ2JvcmRlcldpZHRoJzogJzUwcHggMCA1MHB4IDEwMHB4JyxcbiAqICAnaGVpZ2h0JzogJzAnLFxuICogICd3aWR0aCc6ICcwJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaWFuZ2xlKF9yZWYpIHtcbiAgdmFyIHBvaW50aW5nRGlyZWN0aW9uID0gX3JlZi5wb2ludGluZ0RpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgZm9yZWdyb3VuZENvbG9yID0gX3JlZi5mb3JlZ3JvdW5kQ29sb3IsXG4gICAgICBfcmVmJGJhY2tncm91bmRDb2xvciA9IF9yZWYuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yID0gX3JlZiRiYWNrZ3JvdW5kQ29sb3IgPT09IHZvaWQgMCA/ICd0cmFuc3BhcmVudCcgOiBfcmVmJGJhY2tncm91bmRDb2xvcjtcbiAgdmFyIHdpZHRoQW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdCh3aWR0aCk7XG4gIHZhciBoZWlnaHRBbmRVbml0ID0gZ2V0VmFsdWVBbmRVbml0KGhlaWdodCk7XG5cbiAgaWYgKGlzTmFOKGhlaWdodEFuZFVuaXRbMF0pIHx8IGlzTmFOKHdpZHRoQW5kVW5pdFswXSkpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2MCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiAnMCcsXG4gICAgaGVpZ2h0OiAnMCcsXG4gICAgYm9yZGVyQ29sb3I6IGdldEJvcmRlckNvbG9yKHBvaW50aW5nRGlyZWN0aW9uLCBmb3JlZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvciksXG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IGdldEJvcmRlcldpZHRoKHBvaW50aW5nRGlyZWN0aW9uLCBoZWlnaHRBbmRVbml0LCB3aWR0aEFuZFVuaXQpXG4gIH07XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWFzeSB3YXkgdG8gY2hhbmdlIHRoZSBgd29yZFdyYXBgIHByb3BlcnR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLndvcmRXcmFwKCdicmVhay13b3JkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHt3b3JkV3JhcCgnYnJlYWstd29yZCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICogICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICogICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxuICogfVxuICovXG5mdW5jdGlvbiB3b3JkV3JhcCh3cmFwKSB7XG4gIGlmICh3cmFwID09PSB2b2lkIDApIHtcbiAgICB3cmFwID0gJ2JyZWFrLXdvcmQnO1xuICB9XG5cbiAgdmFyIHdvcmRCcmVhayA9IHdyYXAgPT09ICdicmVhay13b3JkJyA/ICdicmVhay1hbGwnIDogd3JhcDtcbiAgcmV0dXJuIHtcbiAgICBvdmVyZmxvd1dyYXA6IHdyYXAsXG4gICAgd29yZFdyYXA6IHdyYXAsXG4gICAgd29yZEJyZWFrOiB3b3JkQnJlYWtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb0ludChjb2xvcikge1xuICByZXR1cm4gTWF0aC5yb3VuZChjb2xvciAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ludChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiBjb2xvclRvSW50KHJlZCkgKyBcIixcIiArIGNvbG9yVG9JbnQoZ3JlZW4pICsgXCIsXCIgKyBjb2xvclRvSW50KGJsdWUpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydCkge1xuICBpZiAoY29udmVydCA9PT0gdm9pZCAwKSB7XG4gICAgY29udmVydCA9IGNvbnZlcnRUb0ludDtcbiAgfVxuXG4gIGlmIChzYXR1cmF0aW9uID09PSAwKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIHJldHVybiBjb252ZXJ0KGxpZ2h0bmVzcywgbGlnaHRuZXNzLCBsaWdodG5lc3MpO1xuICB9IC8vIGZvcm11bGFlIGZyb20gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFNMX2FuZF9IU1ZcblxuXG4gIHZhciBodWVQcmltZSA9IChodWUgJSAzNjAgKyAzNjApICUgMzYwIC8gNjA7XG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSkgKiBzYXR1cmF0aW9uO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicyhodWVQcmltZSAlIDIgLSAxKSk7XG4gIHZhciByZWQgPSAwO1xuICB2YXIgZ3JlZW4gPSAwO1xuICB2YXIgYmx1ZSA9IDA7XG5cbiAgaWYgKGh1ZVByaW1lID49IDAgJiYgaHVlUHJpbWUgPCAxKSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDEgJiYgaHVlUHJpbWUgPCAyKSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDIgJiYgaHVlUHJpbWUgPCAzKSB7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAzICYmIGh1ZVByaW1lIDwgNCkge1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNCAmJiBodWVQcmltZSA8IDUpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA1ICYmIGh1ZVByaW1lIDwgNikge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9XG5cbiAgdmFyIGxpZ2h0bmVzc01vZGlmaWNhdGlvbiA9IGxpZ2h0bmVzcyAtIGNocm9tYSAvIDI7XG4gIHZhciBmaW5hbFJlZCA9IHJlZCArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsR3JlZW4gPSBncmVlbiArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsQmx1ZSA9IGJsdWUgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHJldHVybiBjb252ZXJ0KGZpbmFsUmVkLCBmaW5hbEdyZWVuLCBmaW5hbEJsdWUpO1xufVxuXG52YXIgbmFtZWRDb2xvck1hcCA9IHtcbiAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgYXF1YTogJzAwZmZmZicsXG4gIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICBhenVyZTogJ2YwZmZmZicsXG4gIGJlaWdlOiAnZjVmNWRjJyxcbiAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgYmxhY2s6ICcwMDAnLFxuICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgYnJvd246ICdhNTJhMmEnLFxuICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgY29yYWw6ICdmZjdmNTAnLFxuICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgY3JpbXNvbjogJ2RjMTQzYycsXG4gIGN5YW46ICcwMGZmZmYnLFxuICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgZGFya2dyZXk6ICdhOWE5YTknLFxuICBkYXJra2hha2k6ICdiZGI3NmInLFxuICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgZGFya3NsYXRlZ3JleTogJzJmNGY0ZicsXG4gIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gIGRpbWdyYXk6ICc2OTY5NjknLFxuICBkaW1ncmV5OiAnNjk2OTY5JyxcbiAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gIGZpcmVicmljazogJ2IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gIGdvbGQ6ICdmZmQ3MDAnLFxuICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICBncmF5OiAnODA4MDgwJyxcbiAgZ3JlZW46ICcwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gIGdyZXk6ICc4MDgwODAnLFxuICBob25leWRldzogJ2YwZmZmMCcsXG4gIGhvdHBpbms6ICdmZjY5YjQnLFxuICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxuICBpbmRpZ286ICc0YjAwODInLFxuICBpdm9yeTogJ2ZmZmZmMCcsXG4gIGtoYWtpOiAnZjBlNjhjJyxcbiAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgbGlnaHRncmF5OiAnZDNkM2QzJyxcbiAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnNzg5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICc3ODknLFxuICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgbGltZTogJzBmMCcsXG4gIGxpbWVncmVlbjogJzMyY2QzMicsXG4gIGxpbmVuOiAnZmFmMGU2JyxcbiAgbWFnZW50YTogJ2YwZicsXG4gIG1hcm9vbjogJzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgbWVkaXVtcHVycGxlOiAnOTM3MGRiJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICBuYXZ5OiAnMDAwMDgwJyxcbiAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gIG9saXZlOiAnODA4MDAwJyxcbiAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICBwYWxldmlvbGV0cmVkOiAnZGI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gIHBlcnU6ICdjZDg1M2YnLFxuICBwaW5rOiAnZmZjMGNiJyxcbiAgcGx1bTogJ2RkYTBkZCcsXG4gIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICBwdXJwbGU6ICc4MDAwODAnLFxuICByZWJlY2NhcHVycGxlOiAnNjM5JyxcbiAgcmVkOiAnZjAwJyxcbiAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICBzYWxtb246ICdmYTgwNzInLFxuICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gIHNpZW5uYTogJ2EwNTIyZCcsXG4gIHNpbHZlcjogJ2MwYzBjMCcsXG4gIHNreWJsdWU6ICc4N2NlZWInLFxuICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICc3MDgwOTAnLFxuICBzbm93OiAnZmZmYWZhJyxcbiAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICB0YW46ICdkMmI0OGMnLFxuICB0ZWFsOiAnMDA4MDgwJyxcbiAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gIHRvbWF0bzogJ2ZmNjM0NycsXG4gIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gIHZpb2xldDogJ2VlODJlZScsXG4gIHdoZWF0OiAnZjVkZWIzJyxcbiAgd2hpdGU6ICdmZmYnLFxuICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgeWVsbG93OiAnZmYwJyxcbiAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG59O1xuLyoqXG4gKiBDaGVja3MgaWYgYSBzdHJpbmcgaXMgYSBDU1MgbmFtZWQgY29sb3IgYW5kIHJldHVybnMgaXRzIGVxdWl2YWxlbnQgaGV4IHZhbHVlLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3JpZ2luYWwgY29sb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG5hbWVUb0hleChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbG9yO1xuICB2YXIgbm9ybWFsaXplZENvbG9yTmFtZSA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdID8gXCIjXCIgKyBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdIDogY29sb3I7XG59XG5cbnZhciBoZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezZ9JC87XG52YXIgaGV4UmdiYVJlZ2V4ID0gL14jW2EtZkEtRjAtOV17OH0kLztcbnZhciByZWR1Y2VkSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXszfSQvO1xudmFyIHJlZHVjZWRSZ2JhSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs0fSQvO1xudmFyIHJnYlJlZ2V4ID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKlxcKSQvaTtcbnZhciByZ2JhUmVnZXggPSAvXnJnYmFcXChcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFstK10/WzAtOV0qWy5dP1swLTldKylcXHMqXFwpJC9pO1xudmFyIGhzbFJlZ2V4ID0gL15oc2xcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKylcXHMqLFxccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqLFxccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqXFwpJC9pO1xudmFyIGhzbGFSZWdleCA9IC9eaHNsYVxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKVxccyosXFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccyosXFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccyosXFxzKihbLStdP1swLTldKlsuXT9bMC05XSspXFxzKlxcKSQvaTtcbi8qKlxuICogUmV0dXJucyBhbiBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyByZWQ6IDI1NSwgZ3JlZW46IDAsIGJsdWU6IDAgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvUmdiKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyByZWQ6IDkyLCBncmVlbjogMTAyLCBibHVlOiAxMTIsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb1JnYignaHNsYSgyMTAsIDEwJSwgNDAlLCAwLjc1KScpO1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlVG9SZ2IoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSBuYW1lVG9IZXgoY29sb3IpO1xuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJnYmFSZWdleCkpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzddICsgbm9ybWFsaXplZENvbG9yWzhdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNiksXG4gICAgICBhbHBoYTogYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkSGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRSZ2JhSGV4UmVnZXgpKSB7XG4gICAgdmFyIF9hbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNF0gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpLFxuICAgICAgYWxwaGE6IF9hbHBoYVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYmFNYXRjaGVkID0gcmdiYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiYU1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsTWF0Y2hlZCA9IGhzbFJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsTWF0Y2hlZCkge1xuICAgIHZhciBodWUgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsxXSwgMTApO1xuICAgIHZhciBzYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcbiAgICB2YXIgbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbM10sIDEwKSAvIDEwMDtcbiAgICB2YXIgcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiKVwiO1xuICAgIHZhciBoc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhyZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIWhzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQsIG5vcm1hbGl6ZWRDb2xvciwgcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbGFNYXRjaGVkID0gaHNsYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsYU1hdGNoZWQpIHtcbiAgICB2YXIgX2h1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsxXSwgMTApO1xuXG4gICAgdmFyIF9zYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX2xpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9yZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgaHNsVG9SZ2IoX2h1ZSwgX3NhdHVyYXRpb24sIF9saWdodG5lc3MpICsgXCIpXCI7XG5cbiAgICB2YXIgX2hzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKF9yZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIV9oc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0LCBub3JtYWxpemVkQ29sb3IsIF9yZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNSk7XG59XG5cbmZ1bmN0aW9uIHJnYlRvSHNsKGNvbG9yKSB7XG4gIC8vIG1ha2Ugc3VyZSByZ2IgYXJlIGNvbnRhaW5lZCBpbiBhIHNldCBvZiBbMCwgMjU1XVxuICB2YXIgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICB2YXIgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgdmFyIGJsdWUgPSBjb2xvci5ibHVlIC8gMjU1O1xuICB2YXIgbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIGxpZ2h0bmVzcyA9IChtYXggKyBtaW4pIC8gMjtcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgaHVlO1xuICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gIHZhciBzYXR1cmF0aW9uID0gbGlnaHRuZXNzID4gMC41ID8gZGVsdGEgLyAoMiAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuXG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByZWQ6XG4gICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBncmVlbjpcbiAgICAgIGh1ZSA9IChibHVlIC0gcmVkKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGJsdWUgY2FzZVxuICAgICAgaHVlID0gKHJlZCAtIGdyZWVuKSAvIGRlbHRhICsgNDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaHVlICo9IDYwO1xuXG4gIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1ZTogaHVlLFxuICAgICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaHVlOiBodWUsXG4gICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9Ic2woJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMTI4LCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvSHNsKCdoc2xhKDEyOCwgMTAwJSwgNTAlLCAwLjc1KScpO1xuICovXG5mdW5jdGlvbiBwYXJzZVRvSHNsKGNvbG9yKSB7XG4gIC8vIE5vdGU6IEF0IGEgbGF0ZXIgc3RhZ2Ugd2UgY2FuIG9wdGltaXplIHRoaXMgZnVuY3Rpb24gYXMgcmlnaHQgbm93IGEgaHNsXG4gIC8vIGNvbG9yIHdvdWxkIGJlIHBhcnNlZCBjb252ZXJ0ZWQgdG8gcmdiIHZhbHVlcyBhbmQgY29udmVydGVkIGJhY2sgdG8gaHNsLlxuICByZXR1cm4gcmdiVG9Ic2wocGFyc2VUb1JnYihjb2xvcikpO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgaGV4IHZhbHVlcyBpZiBwb3NzaWJsZSBlLmcuICNmZjg4NjYgdG8gI2Y4NlxuICogQHByaXZhdGVcbiAqL1xudmFyIHJlZHVjZUhleFZhbHVlID0gZnVuY3Rpb24gcmVkdWNlSGV4VmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNyAmJiB2YWx1ZVsxXSA9PT0gdmFsdWVbMl0gJiYgdmFsdWVbM10gPT09IHZhbHVlWzRdICYmIHZhbHVlWzVdID09PSB2YWx1ZVs2XSkge1xuICAgIHJldHVybiBcIiNcIiArIHZhbHVlWzFdICsgdmFsdWVbM10gKyB2YWx1ZVs1XTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmZ1bmN0aW9uIG51bWJlclRvSGV4KHZhbHVlKSB7XG4gIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcbiAgcmV0dXJuIG51bWJlclRvSGV4KE1hdGgucm91bmQoY29sb3IgKiAyNTUpKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSGV4KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZUhleFZhbHVlKFwiI1wiICsgY29sb3JUb0hleChyZWQpICsgY29sb3JUb0hleChncmVlbikgKyBjb2xvclRvSGV4KGJsdWUpKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgcmV0dXJuIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0VG9IZXgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbCgzNTksIDAuNzUsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IGhzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2woMzU5LCAwLjc1LCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2wodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gaHNsVG9IZXgodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaHNsVG9IZXgodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAxKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAxKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xhKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFscGhhID49IDEgPyBoc2xUb0hleCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IFwicmdiYShcIiArIGhzbFRvUmdiKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkICYmIGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUuYWxwaGEgPj0gMSA/IGhzbFRvSGV4KHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSA6IFwicmdiYShcIiArIGhzbFRvUmdiKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSArIFwiLFwiICsgdmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIwNSwgMTAwKSxcbiAqICAgYmFja2dyb3VuZDogcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoMjU1LCAyMDUsIDEwMCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2IodmFsdWUsIGdyZWVuLCBibHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHJlZHVjZUhleFZhbHVlKFwiI1wiICsgbnVtYmVyVG9IZXgodmFsdWUpICsgbnVtYmVyVG9IZXgoZ3JlZW4pICsgbnVtYmVyVG9IZXgoYmx1ZSkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgZ3JlZW4gPT09IHVuZGVmaW5lZCAmJiBibHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVkdWNlSGV4VmFsdWUoXCIjXCIgKyBudW1iZXJUb0hleCh2YWx1ZS5yZWQpICsgbnVtYmVyVG9IZXgodmFsdWUuZ3JlZW4pICsgbnVtYmVyVG9IZXgodmFsdWUuYmx1ZSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNik7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGZhZGUgYSBjb2xvciBieSBwYXNzaW5nIGEgaGV4IHZhbHVlIG9yIG5hbWVkIENTUyBjb2xvciBhbG9uZyB3aXRoIGFuIGFscGhhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJyNmZmZmZmYnLCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCdibGFjaycsIDAuNyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAxKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnI2ZmZmZmZicsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJ2JsYWNrJywgMC43KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiYShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHJnYlZhbHVlID0gcGFyc2VUb1JnYihmaXJzdFZhbHVlKTtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiVmFsdWUucmVkICsgXCIsXCIgKyByZ2JWYWx1ZS5ncmVlbiArIFwiLFwiICsgcmdiVmFsdWUuYmx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvdXJ0aFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3VydGhWYWx1ZSA+PSAxID8gcmdiKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIsXCIgKyB0aGlyZFZhbHVlICsgXCIsXCIgKyBmb3VydGhWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnb2JqZWN0JyAmJiBzZWNvbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXJkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmb3VydGhWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZpcnN0VmFsdWUuYWxwaGEgPj0gMSA/IHJnYihmaXJzdFZhbHVlLnJlZCwgZmlyc3RWYWx1ZS5ncmVlbiwgZmlyc3RWYWx1ZS5ibHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUucmVkICsgXCIsXCIgKyBmaXJzdFZhbHVlLmdyZWVuICsgXCIsXCIgKyBmaXJzdFZhbHVlLmJsdWUgKyBcIixcIiArIGZpcnN0VmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDcpO1xufVxuXG52YXIgaXNSZ2IgPSBmdW5jdGlvbiBpc1JnYihjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gaXNSZ2JhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcblxudmFyIGlzSHNsID0gZnVuY3Rpb24gaXNIc2woY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc0hzbGEgPSBmdW5jdGlvbiBpc0hzbGEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCwgYHJnYmFgLCBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig4KTtcbiAgaWYgKGlzUmdiYShjb2xvcikpIHJldHVybiByZ2JhKGNvbG9yKTtcbiAgaWYgKGlzUmdiKGNvbG9yKSkgcmV0dXJuIHJnYihjb2xvcik7XG4gIGlmIChpc0hzbGEoY29sb3IpKSByZXR1cm4gaHNsYShjb2xvcik7XG4gIGlmIChpc0hzbChjb2xvcikpIHJldHVybiBoc2woY29sb3IpO1xuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig4KTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nY2FudGkvZmxvdy1zdGF0aWMtbGFuZC9ibG9iL21hc3Rlci9zcmMvRnVuLmpzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZnVuY3Rpb24gY3VycmllZChmLCBsZW5ndGgsIGFjYykge1xuICByZXR1cm4gZnVuY3Rpb24gZm4oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBjb21iaW5lZCA9IGFjYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkLmxlbmd0aCA+PSBsZW5ndGggPyBmLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IGN1cnJpZWQoZiwgbGVuZ3RoLCBjb21iaW5lZCk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG5mdW5jdGlvbiBjdXJyeShmKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG4gIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoLCBbXSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgaHVlIG9mIHRoZSBjb2xvci4gSHVlIGlzIGEgbnVtYmVyIGJldHdlZW4gMCB0byAzNjAuIFRoZSBmaXJzdFxuICogYXJndW1lbnQgZm9yIGFkanVzdEh1ZSBpcyB0aGUgYW1vdW50IG9mIGRlZ3JlZXMgdGhlIGNvbG9yIGlzIHJvdGF0ZWQgYXJvdW5kXG4gKiB0aGUgY29sb3Igd2hlZWwsIGFsd2F5cyBwcm9kdWNpbmcgYSBwb3NpdGl2ZSBodWUgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogYWRqdXN0SHVlKDE4MCwgJyM0NDgnKSxcbiAqICAgYmFja2dyb3VuZDogYWRqdXN0SHVlKCcxODAnLCAncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7YWRqdXN0SHVlKDE4MCwgJyM0NDgnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7YWRqdXN0SHVlKCcxODAnLCAncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM4ODg4NDRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzNiwxMzYsNjgsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGFkanVzdEh1ZShkZWdyZWUsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgaHVlOiBoc2xDb2xvci5odWUgKyBwYXJzZUZsb2F0KGRlZ3JlZSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZEFkanVzdEh1ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihhZGp1c3RIdWUpO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbXBsZW1lbnQgb2YgdGhlIHByb3ZpZGVkIGNvbG9yLiBUaGlzIGlzIGlkZW50aWNhbCB0byBhZGp1c3RIdWUoMTgwLCA8Y29sb3I+KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBjb21wbGVtZW50KCcjNDQ4JyksXG4gKiAgIGJhY2tncm91bmQ6IGNvbXBsZW1lbnQoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2NvbXBsZW1lbnQoJyM0NDgnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7Y29tcGxlbWVudCgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM4ODRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE1MywxNTMsMTUzLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBjb21wbGVtZW50KGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgaHVlOiAoaHNsQ29sb3IuaHVlICsgMTgwKSAlIDM2MFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJkKGxvd2VyQm91bmRhcnksIHVwcGVyQm91bmRhcnksIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChsb3dlckJvdW5kYXJ5LCBNYXRoLm1pbih1cHBlckJvdW5kYXJ5LCB2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBkYXJrZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmJkMzFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwxODksNDksMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGRhcmtlbihhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiBndWFyZCgwLCAxLCBoc2xDb2xvci5saWdodG5lc3MgLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREYXJrZW4gPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oZGFya2VuKTtcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIGludGVuc2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgaXMgYmV0d2VlbiAwIHRvIDEuIFRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgdGhlIGRlc2F0dXJhdGUgZnVuY3Rpb24gaXMgdGhlIGFtb3VudCBieSBob3cgbXVjaCB0aGUgY29sb3JcbiAqIGludGVuc2l0eSBzaG91bGQgYmUgZGVjcmVhc2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGVzYXR1cmF0ZSgwLjIsICcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2Rlc2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2I4Yjk3OVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTg0LDE4NSwxMjEsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGRlc2F0dXJhdGUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIHNhdHVyYXRpb246IGd1YXJkKDAsIDEsIGhzbENvbG9yLnNhdHVyYXRpb24gLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREZXNhdHVyYXRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGRlc2F0dXJhdGUpO1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgKGZsb2F0KSByZXByZXNlbnRpbmcgdGhlIGx1bWluYW5jZSBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnLFxuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJyxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJ307XG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKSd9O1xuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kOiBcIiNDQ0NENjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDU4LCAxMzMsIDI1NSwgMSlcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gMDtcbiAgdmFyIHJnYkNvbG9yID0gcGFyc2VUb1JnYihjb2xvcik7XG5cbiAgdmFyIF9PYmplY3Qka2V5cyRtYXAgPSBPYmplY3Qua2V5cyhyZ2JDb2xvcikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhbm5lbCA9IHJnYkNvbG9yW2tleV0gLyAyNTU7XG4gICAgcmV0dXJuIGNoYW5uZWwgPD0gMC4wMzkyOCA/IGNoYW5uZWwgLyAxMi45MiA6IE1hdGgucG93KChjaGFubmVsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pLFxuICAgICAgciA9IF9PYmplY3Qka2V5cyRtYXBbMF0sXG4gICAgICBnID0gX09iamVjdCRrZXlzJG1hcFsxXSxcbiAgICAgIGIgPSBfT2JqZWN0JGtleXMkbWFwWzJdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpLnRvRml4ZWQoMykpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycyBiYXNlZCBvblxuICogW1czJ3MgcmVjb21tZW5kZWQgZXF1YXRpb24gZm9yIGNhbGN1bGF0aW5nIGNvbnRyYXN0XShodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0KCcjNDQ0JywgJyNmZmYnKTtcbiAqL1xuXG5mdW5jdGlvbiBnZXRDb250cmFzdChjb2xvcjEsIGNvbG9yMikge1xuICB2YXIgbHVtaW5hbmNlMSA9IGdldEx1bWluYW5jZShjb2xvcjEpO1xuICB2YXIgbHVtaW5hbmNlMiA9IGdldEx1bWluYW5jZShjb2xvcjIpO1xuICByZXR1cm4gcGFyc2VGbG9hdCgobHVtaW5hbmNlMSA+IGx1bWluYW5jZTIgPyAobHVtaW5hbmNlMSArIDAuMDUpIC8gKGx1bWluYW5jZTIgKyAwLjA1KSA6IChsdW1pbmFuY2UyICsgMC4wNSkgLyAobHVtaW5hbmNlMSArIDAuMDUpKS50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgY29sb3IgdG8gYSBncmF5c2NhbGUsIGJ5IHJlZHVjaW5nIGl0cyBzYXR1cmF0aW9uIHRvIDAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZ3JheXNjYWxlKCcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGdyYXlzY2FsZSgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z3JheXNjYWxlKCcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2dyYXlzY2FsZSgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM5OTlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE1MywxNTMsMTUzLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBncmF5c2NhbGUoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIHNhdHVyYXRpb246IDBcbiAgfSkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IGhzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMDBmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjUsMC43MilcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsVG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoY29sb3IuYWxwaGEgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGhzbGEoe1xuICAgICAgICBodWU6IGNvbG9yLmh1ZSxcbiAgICAgICAgc2F0dXJhdGlvbjogY29sb3Iuc2F0dXJhdGlvbixcbiAgICAgICAgbGlnaHRuZXNzOiBjb2xvci5saWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhzbCh7XG4gICAgICBodWU6IGNvbG9yLmh1ZSxcbiAgICAgIHNhdHVyYXRpb246IGNvbG9yLnNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGNvbG9yLmxpZ2h0bmVzc1xuICAgIH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDUpO1xufVxuXG4vKipcbiAqIEludmVydHMgdGhlIHJlZCwgZ3JlZW4gYW5kIGJsdWUgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaW52ZXJ0KCcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGludmVydCgncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aW52ZXJ0KCcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2ludmVydCgncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMzMzMjliXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTQsMTU1LDUwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBpbnZlcnQoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7IC8vIHBhcnNlIGNvbG9yIHN0cmluZyB0byByZ2JcblxuICB2YXIgdmFsdWUgPSBwYXJzZVRvUmdiKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHZhbHVlLCB7XG4gICAgcmVkOiAyNTUgLSB2YWx1ZS5yZWQsXG4gICAgZ3JlZW46IDI1NSAtIHZhbHVlLmdyZWVuLFxuICAgIGJsdWU6IDI1NSAtIHZhbHVlLmJsdWVcbiAgfSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBsaWdodGVuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogbGlnaHRlbigwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbignMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2U1ZTZiMVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjI5LDIzMCwxNzcsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogZ3VhcmQoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzICsgcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkTGlnaHRlbiA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihsaWdodGVuKTtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoaWNoIGNvbnRyYXN0IGd1aWRlbGluZXMgaGF2ZSBiZWVuIG1ldCBmb3IgdHdvIGNvbG9ycy5cbiAqIEJhc2VkIG9uIHRoZSBbY29udHJhc3QgY2FsY3VsYXRpb25zIHJlY29tbWVuZGVkIGJ5IFczXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMS9VbmRlcnN0YW5kaW5nL2NvbnRyYXN0LWVuaGFuY2VkLmh0bWwpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzY29yZXMgPSBtZWV0c0NvbnRyYXN0R3VpZGVsaW5lcygnIzQ0NCcsICcjZmZmJyk7XG4gKi9cbmZ1bmN0aW9uIG1lZXRzQ29udHJhc3RHdWlkZWxpbmVzKGNvbG9yMSwgY29sb3IyKSB7XG4gIHZhciBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3QoY29sb3IxLCBjb2xvcjIpO1xuICByZXR1cm4ge1xuICAgIEFBOiBjb250cmFzdFJhdGlvID49IDQuNSxcbiAgICBBQUxhcmdlOiBjb250cmFzdFJhdGlvID49IDMsXG4gICAgQUFBOiBjb250cmFzdFJhdGlvID49IDcsXG4gICAgQUFBTGFyZ2U6IGNvbnRyYXN0UmF0aW8gPj0gNC41XG4gIH07XG59XG5cbi8qKlxuICogTWl4ZXMgdGhlIHR3byBwcm92aWRlZCBjb2xvcnMgdG9nZXRoZXIgYnkgY2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2Ugb2YgZWFjaCBvZiB0aGUgUkdCIGNvbXBvbmVudHMgd2VpZ2h0ZWQgdG8gdGhlIGZpcnN0IGNvbG9yIGJ5IHRoZSBwcm92aWRlZCB3ZWlnaHQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogbWl4KDAuNSwgJyNmMDAnLCAnIzAwZicpXG4gKiAgIGJhY2tncm91bmQ6IG1peCgwLjI1LCAnI2YwMCcsICcjMDBmJylcbiAqICAgYmFja2dyb3VuZDogbWl4KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuNSknLCAnIzAwZicpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KDAuNSwgJyNmMDAnLCAnIzAwZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHttaXgoMC4yNSwgJyNmMDAnLCAnIzAwZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHttaXgoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC41KScsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjN2YwMDdmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzNmMDBiZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoNjMsIDAsIDE5MSwgMC43NSlcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBtaXgod2VpZ2h0LCBjb2xvciwgb3RoZXJDb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBvdGhlckNvbG9yO1xuICBpZiAob3RoZXJDb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICBpZiAod2VpZ2h0ID09PSAwKSByZXR1cm4gb3RoZXJDb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yMSA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuXG4gIHZhciBjb2xvcjEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IxLCB7XG4gICAgYWxwaGE6IHR5cGVvZiBwYXJzZWRDb2xvcjEuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IxLmFscGhhIDogMVxuICB9KTtcblxuICB2YXIgcGFyc2VkQ29sb3IyID0gcGFyc2VUb1JnYihvdGhlckNvbG9yKTtcblxuICB2YXIgY29sb3IyID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yMiwge1xuICAgIGFscGhhOiB0eXBlb2YgcGFyc2VkQ29sb3IyLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yMi5hbHBoYSA6IDFcbiAgfSk7IC8vIFRoZSBmb3JtdWxhIGlzIGNvcGllZCBmcm9tIHRoZSBvcmlnaW5hbCBTYXNzIGltcGxlbWVudGF0aW9uOlxuICAvLyBodHRwOi8vc2Fzcy1sYW5nLmNvbS9kb2N1bWVudGF0aW9uL1Nhc3MvU2NyaXB0L0Z1bmN0aW9ucy5odG1sI21peC1pbnN0YW5jZV9tZXRob2RcblxuXG4gIHZhciBhbHBoYURlbHRhID0gY29sb3IxLmFscGhhIC0gY29sb3IyLmFscGhhO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQod2VpZ2h0KSAqIDIgLSAxO1xuICB2YXIgeSA9IHggKiBhbHBoYURlbHRhID09PSAtMSA/IHggOiB4ICsgYWxwaGFEZWx0YTtcbiAgdmFyIHogPSAxICsgeCAqIGFscGhhRGVsdGE7XG4gIHZhciB3ZWlnaHQxID0gKHkgLyB6ICsgMSkgLyAyLjA7XG4gIHZhciB3ZWlnaHQyID0gMSAtIHdlaWdodDE7XG4gIHZhciBtaXhlZENvbG9yID0ge1xuICAgIHJlZDogTWF0aC5mbG9vcihjb2xvcjEucmVkICogd2VpZ2h0MSArIGNvbG9yMi5yZWQgKiB3ZWlnaHQyKSxcbiAgICBncmVlbjogTWF0aC5mbG9vcihjb2xvcjEuZ3JlZW4gKiB3ZWlnaHQxICsgY29sb3IyLmdyZWVuICogd2VpZ2h0MiksXG4gICAgYmx1ZTogTWF0aC5mbG9vcihjb2xvcjEuYmx1ZSAqIHdlaWdodDEgKyBjb2xvcjIuYmx1ZSAqIHdlaWdodDIpLFxuICAgIGFscGhhOiBjb2xvcjEuYWxwaGEgKiAocGFyc2VGbG9hdCh3ZWlnaHQpIC8gMS4wKSArIGNvbG9yMi5hbHBoYSAqICgxIC0gcGFyc2VGbG9hdCh3ZWlnaHQpIC8gMS4wKVxuICB9O1xuICByZXR1cm4gcmdiYShtaXhlZENvbG9yKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRNaXggPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihtaXgpO1xuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IG9wYWNpZnkoMC4xLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJyk7XG4gKiAgIGJhY2tncm91bmQ6IG9wYWNpZnkoMC4yLCAnaHNsYSgwLCAwJSwgMTAwJSwgMC41KScpLFxuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuMiknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtvcGFjaWZ5KDAuMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpfTtcbiAqICAgYmFja2dyb3VuZDogJHtvcGFjaWZ5KDAuMiwgJ2hzbGEoMCwgMCUsIDEwMCUsIDAuNSknKX0sXG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjIpJyl9LFxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBvcGFjaWZ5KGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiBndWFyZCgwLCAxLCAoYWxwaGEgKiAxMDAgKyBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gcmdiYShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkT3BhY2lmeSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihvcGFjaWZ5KTtcblxudmFyIGRlZmF1bHRMaWdodFJldHVybkNvbG9yID0gJyMwMDAnO1xudmFyIGRlZmF1bHREYXJrUmV0dXJuQ29sb3IgPSAnI2ZmZic7XG4vKipcbiAqIFJldHVybnMgYmxhY2sgb3Igd2hpdGUgKG9yIG9wdGlvbmFsIGxpZ2h0IGFuZCBkYXJrIHJldHVybiBjb2xvcnMpIGZvciBiZXN0XG4gKiBjb250cmFzdCBkZXBlbmRpbmcgb24gdGhlIGx1bWlub3NpdHkgb2YgdGhlIGdpdmVuIGNvbG9yLlxuICogV2hlbiBwYXNzaW5nIGN1c3RvbSByZXR1cm4gY29sb3JzLCBzZXQgYHN0cmljdGAgdG8gYHRydWVgIHRvIGVuc3VyZSB0aGF0IHRoZVxuICogcmV0dXJuIGNvbG9yIGFsd2F5cyBtZWV0cyBvciBleGNlZWRzIFdDQUcgbGV2ZWwgQUEgb3IgZ3JlYXRlci4gSWYgdGhpcyB0ZXN0XG4gKiBmYWlscywgdGhlIGRlZmF1bHQgcmV0dXJuIGNvbG9yIChibGFjayBvciB3aGl0ZSkgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlXG4gKiBjdXN0b20gcmV0dXJuIGNvbG9yLlxuICpcbiAqIEZvbGxvd3MgW1czQyBzcGVjcyBmb3IgcmVhZGFiaWxpdHldKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE4Lmh0bWwpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCcjMDAwJyksXG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCdibGFjaycsICcjMDAxJywgJyNmZjgnKSxcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJ3doaXRlJywgJyMwMDEnLCAnI2ZmOCcpLFxuICogICBjb2xvcjogcmVhZGFibGVDb2xvcigncmVkJywgJyMzMzMnLCAnI2RkZCcsIHRydWUpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJyMwMDAnKX07XG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJ2JsYWNrJywgJyMwMDEnLCAnI2ZmOCcpfTtcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcignd2hpdGUnLCAnIzAwMScsICcjZmY4Jyl9O1xuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCdyZWQnLCAnIzMzMycsICcjZGRkJywgdHJ1ZSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBjb2xvcjogXCIjZmZmXCI7XG4gKiAgIGNvbG9yOiBcIiNmZjhcIjtcbiAqICAgY29sb3I6IFwiIzAwMVwiO1xuICogICBjb2xvcjogXCIjMDAwXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gcmVhZGFibGVDb2xvcihjb2xvciwgbGlnaHRSZXR1cm5Db2xvciwgZGFya1JldHVybkNvbG9yLCBzdHJpY3QpIHtcbiAgaWYgKGxpZ2h0UmV0dXJuQ29sb3IgPT09IHZvaWQgMCkge1xuICAgIGxpZ2h0UmV0dXJuQ29sb3IgPSBkZWZhdWx0TGlnaHRSZXR1cm5Db2xvcjtcbiAgfVxuXG4gIGlmIChkYXJrUmV0dXJuQ29sb3IgPT09IHZvaWQgMCkge1xuICAgIGRhcmtSZXR1cm5Db2xvciA9IGRlZmF1bHREYXJrUmV0dXJuQ29sb3I7XG4gIH1cblxuICBpZiAoc3RyaWN0ID09PSB2b2lkIDApIHtcbiAgICBzdHJpY3QgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBpc0xpZ2h0Q29sb3IgPSBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC4xNzk7XG4gIHZhciBwcmVmZXJyZWRSZXR1cm5Db2xvciA9IGlzTGlnaHRDb2xvciA/IGxpZ2h0UmV0dXJuQ29sb3IgOiBkYXJrUmV0dXJuQ29sb3I7IC8vIFRPRE86IE1ha2UgYHN0cmljdGAgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuXG4gIC8vIFdpdGhvdXQgYHN0cmljdGAsIHRoaXMgbWF5IHJldHVybiBhIGNvbG9yIHRoYXQgZG9lcyBub3QgbWVldCBXQ0FHIEFBLlxuXG4gIGlmICghc3RyaWN0IHx8IGdldENvbnRyYXN0KGNvbG9yLCBwcmVmZXJyZWRSZXR1cm5Db2xvcikgPj0gNC41KSB7XG4gICAgcmV0dXJuIHByZWZlcnJlZFJldHVybkNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIGlzTGlnaHRDb2xvciA/IGRlZmF1bHRMaWdodFJldHVybkNvbG9yIDogZGVmYXVsdERhcmtSZXR1cm5Db2xvcjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGByZ2JgIG9yIGByZ2JhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqICAgYmFja2dyb3VuZDogcmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYlRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJnYmEoe1xuICAgICAgICByZWQ6IGNvbG9yLnJlZCxcbiAgICAgICAgZ3JlZW46IGNvbG9yLmdyZWVuLFxuICAgICAgICBibHVlOiBjb2xvci5ibHVlLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZ2Ioe1xuICAgICAgcmVkOiBjb2xvci5yZWQsXG4gICAgICBncmVlbjogY29sb3IuZ3JlZW4sXG4gICAgICBibHVlOiBjb2xvci5ibHVlXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Nik7XG59XG5cbi8qKlxuICogSW5jcmVhc2VzIHRoZSBpbnRlbnNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGlzIGJldHdlZW4gMCB0byAxLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIHRoZSBzYXR1cmF0ZSBmdW5jdGlvbiBpcyB0aGUgYW1vdW50IGJ5IGhvdyBtdWNoIHRoZSBjb2xvclxuICogaW50ZW5zaXR5IHNob3VsZCBiZSBpbmNyZWFzZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NhdHVyYXRlKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNlMGUyNTBcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyNCwyMjYsODAsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNhdHVyYXRlKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBzYXR1cmF0aW9uOiBndWFyZCgwLCAxLCBoc2xDb2xvci5zYXR1cmF0aW9uICsgcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2F0dXJhdGUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2F0dXJhdGUpO1xuXG4vKipcbiAqIFNldHMgdGhlIGh1ZSBvZiBhIGNvbG9yIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGh1ZSByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMzU5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldEh1ZSg0MiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2V0SHVlKCcyNDQnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0SHVlKDQyLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRIdWUoJzI0NCcsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2NkYWU2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTA3LDEwMCwyMDUsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNldEh1ZShodWUsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBodWU6IHBhcnNlRmxvYXQoaHVlKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2V0SHVlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNldEh1ZSk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlnaHRuZXNzIG9mIGEgY29sb3IgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGUgbGlnaHRuZXNzIHJhbmdlIGNhbiBiZVxuICogZnJvbSAwIGFuZCAxLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldExpZ2h0bmVzcygwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNldExpZ2h0bmVzcygnMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzZXRMaWdodG5lc3MoMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRMaWdodG5lc3MoJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM0ZDRkMTlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyMywyMjQsMTU5LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRMaWdodG5lc3MobGlnaHRuZXNzLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgbGlnaHRuZXNzOiBwYXJzZUZsb2F0KGxpZ2h0bmVzcylcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNldExpZ2h0bmVzcyA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRMaWdodG5lc3MpO1xuXG4vKipcbiAqIFNldHMgdGhlIHNhdHVyYXRpb24gb2YgYSBjb2xvciB0byB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBzYXR1cmF0aW9uIHJhbmdlIGNhbiBiZVxuICogZnJvbSAwIGFuZCAxLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldFNhdHVyYXRpb24oMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzZXRTYXR1cmF0aW9uKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NldFNhdHVyYXRpb24oMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRTYXR1cmF0aW9uKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYWRhZDg0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjgsMjI5LDc2LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRTYXR1cmF0aW9uKHNhdHVyYXRpb24sIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBzYXR1cmF0aW9uOiBwYXJzZUZsb2F0KHNhdHVyYXRpb24pXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTZXRTYXR1cmF0aW9uID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNldFNhdHVyYXRpb24pO1xuXG4vKipcbiAqIFNoYWRlcyBhIGNvbG9yIGJ5IG1peGluZyBpdCB3aXRoIGJsYWNrLiBgc2hhZGVgIGNhbiBwcm9kdWNlXG4gKiBodWUgc2hpZnRzLCB3aGVyZSBhcyBgZGFya2VuYCBtYW5pcHVsYXRlcyB0aGUgbHVtaW5hbmNlIGNoYW5uZWwgYW5kIHRoZXJlZm9yZVxuICogZG9lc24ndCBwcm9kdWNlIGh1ZSBzaGlmdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2hhZGUoMC4yNSwgJyMwMGYnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NoYWRlKDAuMjUsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMDAwMDNmXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2hhZGUocGVyY2VudGFnZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiBjdXJyaWVkTWl4KHBhcnNlRmxvYXQocGVyY2VudGFnZSksICdyZ2IoMCwgMCwgMCknLCBjb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2hhZGUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2hhZGUpO1xuXG4vKipcbiAqIFRpbnRzIGEgY29sb3IgYnkgbWl4aW5nIGl0IHdpdGggd2hpdGUuIGB0aW50YCBjYW4gcHJvZHVjZVxuICogaHVlIHNoaWZ0cywgd2hlcmUgYXMgYGxpZ2h0ZW5gIG1hbmlwdWxhdGVzIHRoZSBsdW1pbmFuY2UgY2hhbm5lbCBhbmQgdGhlcmVmb3JlXG4gKiBkb2Vzbid0IHByb2R1Y2UgaHVlIHNoaWZ0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0aW50KDAuMjUsICcjMDBmJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0aW50KDAuMjUsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYmZiZmZmXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdGludChwZXJjZW50YWdlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIGN1cnJpZWRNaXgocGFyc2VGbG9hdChwZXJjZW50YWdlKSwgJ3JnYigyNTUsIDI1NSwgMjU1KScsIGNvbG9yKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUaW50ID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHRpbnQpO1xuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKTtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKX0sXG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjMpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gcGFyc2VUb1JnYihjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6IGd1YXJkKDAsIDEsIChhbHBoYSAqIDEwMCAtIHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMCkgLyAxMDApXG4gIH0pO1xuXG4gIHJldHVybiByZ2JhKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbih0cmFuc3BhcmVudGl6ZSk7XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBlYXNpbHkgc2V0dGluZyB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LiBBbGxvd3MgZWl0aGVyIG11bHRpcGxlIGFycmF5cyB3aXRoIGFuaW1hdGlvbnNcbiAqIG9yIGEgc2luZ2xlIGFuaW1hdGlvbiBzcHJlYWQgb3ZlciB0aGUgYXJndW1lbnRzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYW5pbWF0aW9uKFsncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0J10sIFsnY29sb3JjaGFuZ2UnLCAnMnMnXSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHthbmltYXRpb24oWydyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnXSwgWydjb2xvcmNoYW5nZScsICcycyddKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2FuaW1hdGlvbic6ICdyb3RhdGUgMXMgZWFzZS1pbi1vdXQsIGNvbG9yY2hhbmdlIDJzJ1xuICogfVxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYW5pbWF0aW9uKCdyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2FuaW1hdGlvbigncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdhbmltYXRpb24nOiAncm90YXRlIDFzIGVhc2UtaW4tb3V0J1xuICogfVxuICovXG5mdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBBbGxvdyBzaW5nbGUgb3IgbXVsdGlwbGUgYW5pbWF0aW9ucyBwYXNzZWRcbiAgdmFyIG11bHRpTW9kZSA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSk7XG5cbiAgaWYgKCFtdWx0aU1vZGUgJiYgYXJncy5sZW5ndGggPiA4KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjQpO1xuICB9XG5cbiAgdmFyIGNvZGUgPSBhcmdzLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKG11bHRpTW9kZSAmJiAhQXJyYXkuaXNBcnJheShhcmcpIHx8ICFtdWx0aU1vZGUgJiYgQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2NSk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoID4gOCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjYpO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmcuam9pbignICcpIDogYXJnO1xuICB9KS5qb2luKCcsICcpO1xuICByZXR1cm4ge1xuICAgIGFuaW1hdGlvbjogY29kZVxuICB9O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBiYWNrZ3JvdW5kSW1hZ2UgdmFsdWVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgc2luZ2xlIGJhY2tncm91bmQgc3RhdGVtZW50LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYmFja2dyb3VuZEltYWdlcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YmFja2dyb3VuZEltYWdlcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKSwgbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJ1xuICogfVxuICovXG5mdW5jdGlvbiBiYWNrZ3JvdW5kSW1hZ2VzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHByb3BlcnRpZXMuam9pbignLCAnKVxuICB9O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBiYWNrZ3JvdW5kIHZhbHVlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIHNpbmdsZSBiYWNrZ3JvdW5kIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJhY2tncm91bmRzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJywgJ2NlbnRlciBuby1yZXBlYXQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JhY2tncm91bmRzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJywgJ2NlbnRlciBuby1yZXBlYXQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JhY2tncm91bmQnOiAndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiksIGNlbnRlciBuby1yZXBlYXQnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJhY2tncm91bmRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kOiBwcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgfTtcbn1cblxudmFyIHNpZGVNYXAgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIHRoZSBib3JkZXIgcHJvcGVydHkgdGhhdCBzcGxpdHMgb3V0IGluZGl2aWR1YWwgcHJvcGVydGllcyBmb3IgdXNlIHdpdGggdG9vbHMgbGlrZSBGZWxhIGFuZCBTdHlsZXRyb24uIEEgc2lkZSBrZXl3b3JkIGNhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCB0byB0YXJnZXQgb25seSBvbmUgc2lkZSdzIGJvcmRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcignMXB4JywgJ3NvbGlkJywgJ3JlZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyKCcxcHgnLCAnc29saWQnLCAncmVkJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyV2lkdGgnOiBgMXB4YCxcbiAqIH1cbiAqXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcigndG9wJywgJzFweCcsICdzb2xpZCcsICdyZWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcigndG9wJywgJzFweCcsICdzb2xpZCcsICdyZWQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcENvbG9yJzogJ3JlZCcsXG4gKiAgICdib3JkZXJUb3BTdHlsZSc6ICdzb2xpZCcsXG4gKiAgICdib3JkZXJUb3BXaWR0aCc6IGAxcHhgLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGJvcmRlcihzaWRlS2V5d29yZCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzaWRlS2V5d29yZCA9PT0gJ3N0cmluZycgJiYgc2lkZU1hcC5pbmRleE9mKHNpZGVLZXl3b3JkKSA+PSAwKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1wiYm9yZGVyXCIgKyBjYXBpdGFsaXplU3RyaW5nKHNpZGVLZXl3b3JkKSArIFwiV2lkdGhcIl0gPSB2YWx1ZXNbMF0sIF9yZWZbXCJib3JkZXJcIiArIGNhcGl0YWxpemVTdHJpbmcoc2lkZUtleXdvcmQpICsgXCJTdHlsZVwiXSA9IHZhbHVlc1sxXSwgX3JlZltcImJvcmRlclwiICsgY2FwaXRhbGl6ZVN0cmluZyhzaWRlS2V5d29yZCkgKyBcIkNvbG9yXCJdID0gdmFsdWVzWzJdLCBfcmVmO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlcy51bnNoaWZ0KHNpZGVLZXl3b3JkKTtcbiAgICByZXR1cm4ge1xuICAgICAgYm9yZGVyV2lkdGg6IHZhbHVlc1swXSxcbiAgICAgIGJvcmRlclN0eWxlOiB2YWx1ZXNbMV0sXG4gICAgICBib3JkZXJDb2xvcjogdmFsdWVzWzJdXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJDb2xvcigncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJDb2xvcigncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyUmlnaHRDb2xvcic6ICdncmVlbicsXG4gKiAgICdib3JkZXJCb3R0b21Db2xvcic6ICdibHVlJyxcbiAqICAgJ2JvcmRlckxlZnRDb2xvcic6ICd5ZWxsb3cnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlckNvbG9yKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydib3JkZXJDb2xvciddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGEgdmFsdWUgZm9yIHNpZGUgYW5kIGEgdmFsdWUgZm9yIHJhZGl1cyBhbmQgYXBwbGllcyB0aGUgcmFkaXVzIHZhbHVlIHRvIGJvdGggY29ybmVycyBvZiB0aGUgc2lkZS5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlclJhZGl1cygndG9wJywgJzVweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyUmFkaXVzKCd0b3AnLCAnNXB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BSaWdodFJhZGl1cyc6ICc1cHgnLFxuICogICAnYm9yZGVyVG9wTGVmdFJhZGl1cyc6ICc1cHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJSYWRpdXMoc2lkZSwgcmFkaXVzKSB7XG4gIHZhciB1cHBlcmNhc2VTaWRlID0gY2FwaXRhbGl6ZVN0cmluZyhzaWRlKTtcblxuICBpZiAoIXJhZGl1cyAmJiByYWRpdXMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Mik7XG4gIH1cblxuICBpZiAodXBwZXJjYXNlU2lkZSA9PT0gJ1RvcCcgfHwgdXBwZXJjYXNlU2lkZSA9PT0gJ0JvdHRvbScpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbXCJib3JkZXJcIiArIHVwcGVyY2FzZVNpZGUgKyBcIlJpZ2h0UmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmW1wiYm9yZGVyXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJMZWZ0UmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmO1xuICB9XG5cbiAgaWYgKHVwcGVyY2FzZVNpZGUgPT09ICdMZWZ0JyB8fCB1cHBlcmNhc2VTaWRlID09PSAnUmlnaHQnKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW1wiYm9yZGVyVG9wXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWYyW1wiYm9yZGVyQm90dG9tXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWYyO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjMpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJTdHlsZSgnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCcsICdkb3VibGUnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlclN0eWxlKCdzb2xpZCcsICdkYXNoZWQnLCAnZG90dGVkJywgJ2RvdWJsZScpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyUmlnaHRTdHlsZSc6ICdkYXNoZWQnLFxuICogICAnYm9yZGVyQm90dG9tU3R5bGUnOiAnZG90dGVkJyxcbiAqICAgJ2JvcmRlckxlZnRTdHlsZSc6ICdkb3VibGUnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlclN0eWxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydib3JkZXJTdHlsZSddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyV2lkdGgoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcldpZHRoKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BXaWR0aCc6ICcxMnB4JyxcbiAqICAgJ2JvcmRlclJpZ2h0V2lkdGgnOiAnMjRweCcsXG4gKiAgICdib3JkZXJCb3R0b21XaWR0aCc6ICczNnB4JyxcbiAqICAgJ2JvcmRlckxlZnRXaWR0aCc6ICc0OHB4J1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJXaWR0aCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyV2lkdGgnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBzdGF0ZSkge1xuICB2YXIgc3RhdGVTdWZmaXggPSBzdGF0ZSA/IFwiOlwiICsgc3RhdGUgOiAnJztcbiAgcmV0dXJuIHRlbXBsYXRlKHN0YXRlU3VmZml4KTtcbn1cbi8qKlxuICogRnVuY3Rpb24gaGVscGVyIHRoYXQgYWRkcyBhbiBhcnJheSBvZiBzdGF0ZXMgdG8gYSB0ZW1wbGF0ZSBvZiBzZWxlY3RvcnMuIFVzZWQgaW4gdGV4dElucHV0cyBhbmQgYnV0dG9ucy5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdGF0ZWZ1bFNlbGVjdG9ycyhzdGF0ZXMsIHRlbXBsYXRlLCBzdGF0ZU1hcCkge1xuICBpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Nyk7XG4gIGlmIChzdGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZ2VuZXJhdGVTZWxlY3RvcnModGVtcGxhdGUsIG51bGwpO1xuICB2YXIgc2VsZWN0b3JzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc3RhdGVNYXAgJiYgc3RhdGVNYXAuaW5kZXhPZihzdGF0ZXNbaV0pIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjgpO1xuICAgIH1cblxuICAgIHNlbGVjdG9ycy5wdXNoKGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBzdGF0ZXNbaV0pKTtcbiAgfVxuXG4gIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG5cbnZhciBzdGF0ZU1hcCA9IFt1bmRlZmluZWQsIG51bGwsICdhY3RpdmUnLCAnZm9jdXMnLCAnaG92ZXInXTtcblxuZnVuY3Rpb24gdGVtcGxhdGUoc3RhdGUpIHtcbiAgcmV0dXJuIFwiYnV0dG9uXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl1cIiArIHN0YXRlO1xufVxuLyoqXG4gKiBQb3B1bGF0ZXMgc2VsZWN0b3JzIHRoYXQgdGFyZ2V0IGFsbCBidXR0b25zLiBZb3UgY2FuIHBhc3Mgb3B0aW9uYWwgc3RhdGVzIHRvIGFwcGVuZCB0byB0aGUgc2VsZWN0b3JzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgW2J1dHRvbnMoJ2FjdGl2ZScpXToge1xuICogICAgICdib3JkZXInOiAnbm9uZSdcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICA+ICR7YnV0dG9ucygnYWN0aXZlJyl9IHtcbiAqICAgICBib3JkZXI6IG5vbmU7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogICdidXR0b246YWN0aXZlLFxuICogICdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmFjdGl2ZSxcbiAqICAnaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTphY3RpdmUsXG4gKiAgJ2lucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZToge1xuICogICAnYm9yZGVyJzogJ25vbmUnXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBidXR0b25zKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RhdGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0YXRlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZWZ1bFNlbGVjdG9ycyhzdGF0ZXMsIHRlbXBsYXRlLCBzdGF0ZU1hcCk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLm1hcmdpbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7bWFyZ2luKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdtYXJnaW5Ub3AnOiAnMTJweCcsXG4gKiAgICdtYXJnaW5SaWdodCc6ICcyNHB4JyxcbiAqICAgJ21hcmdpbkJvdHRvbSc6ICczNnB4JyxcbiAqICAgJ21hcmdpbkxlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gbWFyZ2luKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydtYXJnaW4nXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnBhZGRpbmcoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3BhZGRpbmcoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3BhZGRpbmdUb3AnOiAnMTJweCcsXG4gKiAgICdwYWRkaW5nUmlnaHQnOiAnMjRweCcsXG4gKiAgICdwYWRkaW5nQm90dG9tJzogJzM2cHgnLFxuICogICAncGFkZGluZ0xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcGFkZGluZygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsncGFkZGluZyddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxudmFyIHBvc2l0aW9uTWFwJDEgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJywgJ3N0YXRpYycsICdzdGlja3knXTtcbi8qKlxuICogU2hvcnRoYW5kIGFjY2VwdHMgdXAgdG8gZml2ZSB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuIFRoZSBmaXJzdCB2YWx1ZSBjYW4gb3B0aW9uYWxseSBiZSBhIHBvc2l0aW9uIGtleXdvcmQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5wb3NpdGlvbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cG9zaXRpb24oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3RvcCc6ICcxMnB4JyxcbiAqICAgJ3JpZ2h0JzogJzI0cHgnLFxuICogICAnYm90dG9tJzogJzM2cHgnLFxuICogICAnbGVmdCc6ICc0OHB4J1xuICogfVxuICpcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucG9zaXRpb24oJ2Fic29sdXRlJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3Bvc2l0aW9uKCdhYnNvbHV0ZScsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gKiAgICd0b3AnOiAnMTJweCcsXG4gKiAgICdyaWdodCc6ICcyNHB4JyxcbiAqICAgJ2JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ2xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBwb3NpdGlvbihmaXJzdFZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocG9zaXRpb25NYXAkMS5pbmRleE9mKGZpcnN0VmFsdWUpID49IDAgJiYgZmlyc3RWYWx1ZSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnJ10uY29uY2F0KHZhbHVlcykpLCB7XG4gICAgICBwb3NpdGlvbjogZmlyc3RWYWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWycnLCBmaXJzdFZhbHVlXS5jb25jYXQodmFsdWVzKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gc2V0IHRoZSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXMgaW4gYSBzaW5nbGUgc3RhdGVtZW50LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uc2l6ZSgnMzAwcHgnLCAnMjUwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3NpemUoJzMwMHB4JywgJzI1MHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdoZWlnaHQnOiAnMzAwcHgnLFxuICogICAnd2lkdGgnOiAnMjUwcHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBzaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgaWYgKHdpZHRoID09PSB2b2lkIDApIHtcbiAgICB3aWR0aCA9IGhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH07XG59XG5cbnZhciBzdGF0ZU1hcCQxID0gW3VuZGVmaW5lZCwgbnVsbCwgJ2FjdGl2ZScsICdmb2N1cycsICdob3ZlciddO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZSQxKHN0YXRlKSB7XG4gIHJldHVybiBcImlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWVcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwibW9udGhcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInVybFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ3ZWVrXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0Om5vdChbdHlwZV0pXCIgKyBzdGF0ZSArIFwiLFxcbiAgICB0ZXh0YXJlYVwiICsgc3RhdGU7XG59XG4vKipcbiAqIFBvcHVsYXRlcyBzZWxlY3RvcnMgdGhhdCB0YXJnZXQgYWxsIHRleHQgaW5wdXRzLiBZb3UgY2FuIHBhc3Mgb3B0aW9uYWwgc3RhdGVzIHRvIGFwcGVuZCB0byB0aGUgc2VsZWN0b3JzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgW3RleHRJbnB1dHMoJ2FjdGl2ZScpXToge1xuICogICAgICdib3JkZXInOiAnbm9uZSdcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICA+ICR7dGV4dElucHV0cygnYWN0aXZlJyl9IHtcbiAqICAgICBib3JkZXI6IG5vbmU7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogICdpbnB1dFt0eXBlPVwiY29sb3JcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJkYXRlXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwibW9udGhcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJudW1iZXJcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInRlbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInRleHRcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0aW1lXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidXJsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwid2Vla1wiXTphY3RpdmUsXG4gKiAgaW5wdXQ6bm90KFt0eXBlXSk6YWN0aXZlLFxuICogIHRleHRhcmVhOmFjdGl2ZSc6IHtcbiAqICAgJ2JvcmRlcic6ICdub25lJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdGV4dElucHV0cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0YXRlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdGF0ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSQxLCBzdGF0ZU1hcCQxKTtcbn1cblxuLyoqXG4gKiBBY2NlcHRzIGFueSBudW1iZXIgb2YgdHJhbnNpdGlvbiB2YWx1ZXMgYXMgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBzaW5nbGUgdHJhbnNpdGlvbiBzdGF0ZW1lbnQuIFlvdSBtYXkgYWxzbyBwYXNzIGFuIGFycmF5IG9mIHByb3BlcnRpZXMgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRoZSBzYW1lIHRyYW5zaXRpb24gdmFsdWVzIHRvIChzZWNvbmQgcGFyYW1ldGVyKS5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnRyYW5zaXRpb25zKCdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcycsICd3aWR0aCAyLjBzIGVhc2UtaW4gMnMnKSxcbiAqICAgLi4udHJhbnNpdGlvbnMoWydjb2xvcicsICdiYWNrZ3JvdW5kLWNvbG9yJ10sICcyLjBzIGVhc2UtaW4gMnMnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3RyYW5zaXRpb25zKCdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcycsICd3aWR0aCAyLjBzIGVhc2UtaW4gMnMnKX07XG4gKiAgICR7dHJhbnNpdGlvbnMoWydjb2xvcicsICdiYWNrZ3JvdW5kLWNvbG9yJ10sICcyLjBzIGVhc2UtaW4gMnMnKSx9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAndHJhbnNpdGlvbic6ICdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcywgd2lkdGggMi4wcyBlYXNlLWluIDJzJ1xuICogICAndHJhbnNpdGlvbic6ICdjb2xvciAyLjBzIGVhc2UtaW4gMnMsIGJhY2tncm91bmQtY29sb3IgMi4wcyBlYXNlLWluIDJzJyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9ucygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXNbMF0pICYmIHByb3BlcnRpZXMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1sxXTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2MSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zaXRpb25zU3RyaW5nID0gcHJvcGVydGllc1swXS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gcHJvcGVydHkgKyBcIiBcIiArIHZhbHVlO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zU3RyaW5nXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogcHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBjdXJyaWVkQWRqdXN0SHVlIGFzIGFkanVzdEh1ZSwgYW5pbWF0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VzLCBiYWNrZ3JvdW5kcywgYmV0d2VlbiwgYm9yZGVyLCBib3JkZXJDb2xvciwgYm9yZGVyUmFkaXVzLCBib3JkZXJTdHlsZSwgYm9yZGVyV2lkdGgsIGJ1dHRvbnMsIGNsZWFyRml4LCBjb21wbGVtZW50LCBjb3ZlciwgY3NzVmFyLCBjdXJyaWVkRGFya2VuIGFzIGRhcmtlbiwgY3VycmllZERlc2F0dXJhdGUgYXMgZGVzYXR1cmF0ZSwgZGlyZWN0aW9uYWxQcm9wZXJ0eSwgZWxsaXBzaXMsIGVtLCBmbHVpZFJhbmdlLCBmb250RmFjZSwgZ2V0Q29udHJhc3QsIGdldEx1bWluYW5jZSwgZ2V0VmFsdWVBbmRVbml0LCBncmF5c2NhbGUsIGhpRFBJLCBoaWRlVGV4dCwgaGlkZVZpc3VhbGx5LCBoc2wsIGhzbFRvQ29sb3JTdHJpbmcsIGhzbGEsIGludmVydCwgY3VycmllZExpZ2h0ZW4gYXMgbGlnaHRlbiwgbGluZWFyR3JhZGllbnQsIG1hcmdpbiwgbWF0aCwgbWVldHNDb250cmFzdEd1aWRlbGluZXMsIGN1cnJpZWRNaXggYXMgbWl4LCBtb2R1bGFyU2NhbGUsIG5vcm1hbGl6ZSwgY3VycmllZE9wYWNpZnkgYXMgb3BhY2lmeSwgcGFkZGluZywgcGFyc2VUb0hzbCwgcGFyc2VUb1JnYiwgcG9zaXRpb24sIHJhZGlhbEdyYWRpZW50LCByZWFkYWJsZUNvbG9yLCByZW0sIHJldGluYUltYWdlLCByZ2IsIHJnYlRvQ29sb3JTdHJpbmcsIHJnYmEsIGN1cnJpZWRTYXR1cmF0ZSBhcyBzYXR1cmF0ZSwgY3VycmllZFNldEh1ZSBhcyBzZXRIdWUsIGN1cnJpZWRTZXRMaWdodG5lc3MgYXMgc2V0TGlnaHRuZXNzLCBjdXJyaWVkU2V0U2F0dXJhdGlvbiBhcyBzZXRTYXR1cmF0aW9uLCBjdXJyaWVkU2hhZGUgYXMgc2hhZGUsIHNpemUsIHN0cmlwVW5pdCwgdGV4dElucHV0cywgdGltaW5nRnVuY3Rpb25zLCBjdXJyaWVkVGludCBhcyB0aW50LCB0b0NvbG9yU3RyaW5nLCB0cmFuc2l0aW9ucywgY3VycmllZFRyYW5zcGFyZW50aXplIGFzIHRyYW5zcGFyZW50aXplLCB0cmlhbmdsZSwgd29yZFdyYXAgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
