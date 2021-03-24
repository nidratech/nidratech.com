webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/CollapseMenu.tsx":
/*!********************************************!*\
  !*** ./components/Navbar/CollapseMenu.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "F:\\Projects\\nidratech.com\\components\\Navbar\\CollapseMenu.tsx",
    _s = $RefreshSig$();








const CollapseMenu = ({
  isNavbarOpen,
  setIsNavbarOpen
}) => {
  _s();

  const {
    pathname
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const transition = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"])(isNavbarOpen, {
    from: {
      position: 'absolute',
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const menuToggle = document.querySelector('#menu-toggle');

    const handleClickOutside = event => {
      if (isNavbarOpen && !(ref !== null && ref !== void 0 && ref.current.contains(event.target)) && !(menuToggle !== null && menuToggle !== void 0 && menuToggle.contains(event.target))) {
        setIsNavbarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, isNavbarOpen]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: transition((style, item) => item &&
    /*#__PURE__*/
    // @ts-ignore TODO: weird style typing?
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CollapseWrapper, {
      ref: ref,
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavLinks, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Home',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/',
              children: "Home"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/clients',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Clients',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/clients',
              children: "Clients"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/projects',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Projects',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/projects',
              children: "Projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: '/contact',
            passHref: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(NavItem, {
              as: "a",
              title: 'Contact',
              onClick: () => setIsNavbarOpen(false),
              isActive: pathname === '/contact',
              children: "Contact"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 21
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 19
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined))
  }, void 0, false);
};

_s(CollapseMenu, "LD3uMfEetldYDiHdDgDsBjOnvOU=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_spring__WEBPACK_IMPORTED_MODULE_3__["useTransition"]];
});

_c = CollapseMenu;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "CollapseMenu__NavItem",
  componentId: "fhn05r-0"
})(["display:flex;padding:0 ", ";color:", ";justify-content:center;width:20vw;:hover{color:", ";}"], ({
  theme
}) => theme.spacing.medium, ({
  isActive,
  theme
}) => isActive ? theme.colors.brand : theme.colors.grey, ({
  isActive,
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.05, isActive ? theme.colors.brand : theme.colors.grey));
_c2 = NavItem;
const CollapseWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_3__["animated"].div).withConfig({
  displayName: "CollapseMenu__CollapseWrapper",
  componentId: "fhn05r-1"
})(["background:", ";position:fixed;top:4.5rem;left:0;right:0;z-index:999;"], ({
  theme
}) => Object(polished__WEBPACK_IMPORTED_MODULE_5__["darken"])(0.05, theme.colors.white));
_c3 = CollapseWrapper;
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "CollapseMenu__NavLinks",
  componentId: "fhn05r-2"
})(["list-style-type:none;padding:2rem 1rem 2rem 2rem;display:flex;justify-content:center;@media (min-width:", "){display:none;}"], ({
  theme
}) => theme.breakpoints.mobile);
_c4 = NavLinks;
/* harmony default export */ __webpack_exports__["default"] = (CollapseMenu);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "CollapseMenu");
$RefreshReg$(_c2, "NavItem");
$RefreshReg$(_c3, "CollapseWrapper");
$RefreshReg$(_c4, "NavLinks");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvQ29sbGFwc2VNZW51LnRzeCJdLCJuYW1lcyI6WyJDb2xsYXBzZU1lbnUiLCJpc05hdmJhck9wZW4iLCJzZXRJc05hdmJhck9wZW4iLCJwYXRobmFtZSIsInVzZVJvdXRlciIsInJlZiIsInVzZVJlZiIsInRyYW5zaXRpb24iLCJ1c2VUcmFuc2l0aW9uIiwiZnJvbSIsInBvc2l0aW9uIiwib3BhY2l0eSIsImVudGVyIiwibGVhdmUiLCJ1c2VFZmZlY3QiLCJtZW51VG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwiaXRlbSIsIk5hdkl0ZW0iLCJzdHlsZWQiLCJhIiwidGhlbWUiLCJzcGFjaW5nIiwibWVkaXVtIiwiaXNBY3RpdmUiLCJjb2xvcnMiLCJicmFuZCIsImdyZXkiLCJkYXJrZW4iLCJDb2xsYXBzZVdyYXBwZXIiLCJhbmltYXRlZCIsImRpdiIsIndoaXRlIiwiTmF2TGlua3MiLCJ1bCIsImJyZWFrcG9pbnRzIiwibW9iaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLE1BQU1BLFlBQVksR0FBRyxDQUFDO0FBQUVDLGNBQUY7QUFBZ0JDO0FBQWhCLENBQUQsS0FBMkQ7QUFBQTs7QUFDOUUsUUFBTTtBQUFFQztBQUFGLE1BQWVDLDZEQUFTLEVBQTlCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBbEI7QUFFQSxRQUFNQyxVQUFVLEdBQUdDLGtFQUFhLENBQUNQLFlBQUQsRUFBZTtBQUM3Q1EsUUFBSSxFQUFFO0FBQUVDLGNBQVEsRUFBRSxVQUFaO0FBQXdC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QU1JLFFBQVEsR0FBR2QseURBQU0sQ0FBQ2UsRUFBVjtBQUFBO0FBQUE7QUFBQSxvSUFNUyxDQUFDO0FBQUViO0FBQUYsQ0FBRCxLQUFlQSxLQUFLLENBQUNjLFdBQU4sQ0FBa0JDLE1BTjFDLENBQWQ7TUFBTUgsUTtBQVdTMUMsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZDE3NWM4M2Y1NzkzNTI3MTFkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBpc05hdmJhck9wZW46IGJvb2xlYW47XHJcbiAgc2V0SXNOYXZiYXJPcGVuOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IENvbGxhcHNlTWVudSA9ICh7IGlzTmF2YmFyT3Blbiwgc2V0SXNOYXZiYXJPcGVuIH06IFByb3BzKTogSlNYLkVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oaXNOYXZiYXJPcGVuLCB7XHJcbiAgICBmcm9tOiB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBvcGFjaXR5OiAwIH0sXHJcbiAgICBlbnRlcjogeyBvcGFjaXR5OiAxIH0sXHJcbiAgICBsZWF2ZTogeyBvcGFjaXR5OiAwIH0sXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtZW51VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdG9nZ2xlJyk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGlja091dHNpZGUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGlzTmF2YmFyT3BlbiAmJlxyXG4gICAgICAgICFyZWY/LmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICFtZW51VG9nZ2xlPy5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHNldElzTmF2YmFyT3BlbihmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbcmVmLCBpc05hdmJhck9wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0cmFuc2l0aW9uKFxyXG4gICAgICAgIChzdHlsZSwgaXRlbSkgPT5cclxuICAgICAgICAgIGl0ZW0gJiYgKFxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IHdlaXJkIHN0eWxlIHR5cGluZz9cclxuICAgICAgICAgICAgPENvbGxhcHNlV3JhcHBlciByZWY9e3JlZn0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICAgICAgICA8TmF2TGlua3M+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0hvbWUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy8nfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2NsaWVudHMnfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXM9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnQ2xpZW50cyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc05hdmJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU9e3BhdGhuYW1lID09PSAnL2NsaWVudHMnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENsaWVudHNcclxuICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2plY3RzJ30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J1Byb2plY3RzJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTmF2YmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17cGF0aG5hbWUgPT09ICcvcHJvamVjdHMnfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9jb250YWN0J30gcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17J0NvbnRhY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNOYXZiYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtwYXRobmFtZSA9PT0gJy9jb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGlua3M+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2VXcmFwcGVyPlxyXG4gICAgICAgICAgKVxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuYTx7IGlzQWN0aXZlPzogYm9vbGVhbiB9PmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5zcGFjaW5nLm1lZGl1bX07XHJcbiAgY29sb3I6ICR7KHsgaXNBY3RpdmUsIHRoZW1lIH0pID0+IChpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5icmFuZCA6IHRoZW1lLmNvbG9ycy5ncmV5KX07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDIwdnc7XHJcblxyXG4gIDpob3ZlciB7XHJcbiAgICBjb2xvcjogJHsoeyBpc0FjdGl2ZSwgdGhlbWUgfSkgPT5cclxuICAgICAgZGFya2VuKDAuMDUsIGlzQWN0aXZlID8gdGhlbWUuY29sb3JzLmJyYW5kIDogdGhlbWUuY29sb3JzLmdyZXkpfTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IENvbGxhcHNlV3JhcHBlciA9IHN0eWxlZChhbmltYXRlZC5kaXYpYFxyXG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gZGFya2VuKDAuMDUsIHRoZW1lLmNvbG9ycy53aGl0ZSl9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQuNXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuYDtcclxuY29uc3QgTmF2TGlua3MgPSBzdHlsZWQudWxgXHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbSAycmVtIDJyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYnJlYWtwb2ludHMubW9iaWxlfSkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2xsYXBzZU1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=