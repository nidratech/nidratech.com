webpackHotUpdate_N_E("pages/contact",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components */ "./components/index.ts");


var _this = undefined,
    _jsxFileName = "F:\\Projects\\nidratech.com\\pages\\contact.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: grid;\n  margin-bottom: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  height: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  margin-bottom: ", ";\n  margin-top: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n\n  :focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: ", ";\n    outline: 0;\n    box-shadow: 0 0 0 0.1rem ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var Contact = function Contact() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var isSubmitEnabled = email.length > 2 && message.length > 2;
  return __jsx(components__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Contact | Nidratech")), __jsx(components__WEBPACK_IMPORTED_MODULE_5__["PageTitle"], {
    title: "Got a project? We want to hear about it",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), __jsx("form", {
    action: "https://formspree.io/contact@nidratech.com",
    method: "POST",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(FormGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(FormLabel, {
    htmlFor: "email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Email"), __jsx(EmailInput, {
    id: "email",
    name: "email",
    type: "email",
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })), __jsx(FormGroup, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(FormLabel, {
    htmlFor: "message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Message"), __jsx(MessageInput, {
    id: "message",
    name: "message",
    rows: 3,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  })), __jsx("input", {
    type: "hidden",
    name: "_next",
    value: "https://www.nidratech.com/success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    disabled: !isSubmitEnabled,
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Submit")));
};

_s(Contact, "mxdRTHxkiTeLOv2akPbesFCh75U=");

_c = Contact;
var formControl = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.3, theme.colors.brand);
}, function (_ref2) {
  var theme = _ref2.theme;
  return Object(polished__WEBPACK_IMPORTED_MODULE_4__["lighten"])(0.3, theme.colors.brand);
});
var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].label(_templateObject2(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.spacing.medium;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.spacing.small;
});
_c2 = FormLabel;
var MessageInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].textarea(_templateObject3(), formControl);
_c3 = MessageInput;
var EmailInput = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input(_templateObject4(), formControl);
_c4 = EmailInput;
var FormGroup = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject5(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.spacing.medium;
});
_c5 = FormGroup;
/* harmony default export */ __webpack_exports__["default"] = (Contact);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Contact");
$RefreshReg$(_c2, "FormLabel");
$RefreshReg$(_c3, "MessageInput");
$RefreshReg$(_c4, "EmailInput");
$RefreshReg$(_c5, "FormGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC50c3giXSwibmFtZXMiOlsiQ29udGFjdCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNTdWJtaXRFbmFibGVkIiwibGVuZ3RoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZm9ybUNvbnRyb2wiLCJjc3MiLCJ0aGVtZSIsImxpZ2h0ZW4iLCJjb2xvcnMiLCJicmFuZCIsIkZvcm1MYWJlbCIsInN0eWxlZCIsImxhYmVsIiwic3BhY2luZyIsIm1lZGl1bSIsInNtYWxsIiwiTWVzc2FnZUlucHV0IiwidGV4dGFyZWEiLCJFbWFpbElucHV0IiwiaW5wdXQiLCJGb3JtR3JvdXAiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNKQyxzREFBUSxDQUFDLEVBQUQsQ0FESjtBQUFBLE1BQ3ZCQyxLQUR1QjtBQUFBLE1BQ2hCQyxRQURnQjs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUV2QkcsT0FGdUI7QUFBQSxNQUVkQyxVQUZjOztBQUc5QixNQUFNQyxlQUFlLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTixHQUFlLENBQWYsSUFBb0JILE9BQU8sQ0FBQ0csTUFBUixHQUFpQixDQUE3RDtBQUVBLFNBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixDQURG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Y0MsTUFBN0I7QUFBQSxDQUZKLENBQWY7TUFBTU0sUztBQUtTM0Isc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY29udGFjdC5mMDc3NWVmOWQxNmIxMzI0M2U3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBsaWdodGVuIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIFBhZ2VUaXRsZSB9IGZyb20gJ2NvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFjdDogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGlzU3VibWl0RW5hYmxlZCA9IGVtYWlsLmxlbmd0aCA+IDIgJiYgbWVzc2FnZS5sZW5ndGggPiAyO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNvbnRhY3QgfCBOaWRyYXRlY2g8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8UGFnZVRpdGxlIHRpdGxlPVwiR290IGEgcHJvamVjdD8gV2Ugd2FudCB0byBoZWFyIGFib3V0IGl0XCIgLz5cclxuXHJcbiAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vZm9ybXNwcmVlLmlvL2NvbnRhY3RAbmlkcmF0ZWNoLmNvbVwiIG1ldGhvZD1cIlBPU1RcIj5cclxuICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgPEVtYWlsSW5wdXRcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Hcm91cD5cclxuXHJcbiAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICA8TWVzc2FnZUlucHV0XHJcbiAgICAgICAgICAgIGlkPVwibWVzc2FnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9uZXh0XCIgdmFsdWU9XCJodHRwczovL3d3dy5uaWRyYXRlY2guY29tL3N1Y2Nlc3NcIiAvPlxyXG5cclxuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXshaXNTdWJtaXRFbmFibGVkfSB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICBTdWJtaXRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IGZvcm1Db250cm9sID0gY3NzYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNzVyZW0gKyAycHgpO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiAgOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiBsaWdodGVuKDAuMywgdGhlbWUuY29sb3JzLmJyYW5kKX07XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtICR7KHsgdGhlbWUgfSkgPT4gbGlnaHRlbigwLjMsIHRoZW1lLmNvbG9ycy5icmFuZCl9O1xyXG4gIH1cclxuYDtcclxuY29uc3QgRm9ybUxhYmVsID0gc3R5bGVkLmxhYmVsYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5tZWRpdW19O1xyXG4gIG1hcmdpbi10b3A6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuc3BhY2luZy5zbWFsbH07XHJcbmA7XHJcbmNvbnN0IE1lc3NhZ2VJbnB1dCA9IHN0eWxlZC50ZXh0YXJlYWBcclxuICAke2Zvcm1Db250cm9sfVxyXG4gIGhlaWdodDogYXV0bztcclxuYDtcclxuY29uc3QgRW1haWxJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICAke2Zvcm1Db250cm9sfVxyXG5gO1xyXG5jb25zdCBGb3JtR3JvdXAgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9