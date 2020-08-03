webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/FormSetToken.jsx":
/*!*************************************!*\
  !*** ./components/FormSetToken.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"../../node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_monday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-monday */ \"../../node_modules/react-monday/src/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"../../node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/apps/prototype-tasks-manage/components/FormSetToken.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/* --- Global --- */\n\n\n\n\n\n\n/**\n * @name FormModalTokenSet\n * @description Set authorization token for Monday Queries\n * @version 0.0.0\n */\n\nvar FormModalTokenSet = function FormModalTokenSet(_ref) {\n  _s();\n\n  var updateDefault = _ref.updateDefault,\n      sx = _ref.sx,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"updateDefault\", \"sx\"]);\n\n  var monday = Object(react_monday__WEBPACK_IMPORTED_MODULE_6__[\"withMonday\"])();\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (monday.token) {\n      setValue(\"token\", monday.token);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(monday, \"mondaymonday\");\n  }, [monday]);\n  /* --- Form Hook State --- */\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors,\n      setValue = _useForm.setValue,\n      formState = _useForm.formState;\n  /* --- Submit Handler --- */\n\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (values) {\n                monday.setToken(values.token);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* --- Form : Component --- */\n\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"form\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"input\",\n    name: \"token\",\n    placeholder: \"Token\",\n    register: register,\n    errors: errors,\n    sx: {\n      border: 1,\n      borderColor: \"solitude\",\n      borderStyle: \"solid\",\n      borderRadius: 4,\n      padding: 1,\n      \"&:hover\": {\n        borderStyle: \"charcoal\"\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"button\",\n    sx: {\n      bg: \"blue\",\n      color: \"white\",\n      mt: 3,\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, formState.isSubmitting & !formState.isSubmitted ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, props.labelLoading) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, props.label), !formState.isSubmitting & formState.isSubmitted && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, props.labelComplete)));\n};\n\n_s(FormModalTokenSet, \"WPXNucc/KXGyYNDLxRVBPOeVzjI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = FormModalTokenSet;\nFormModalTokenSet.defaultProps = {\n  sx: {},\n  label: \"Submit\",\n  labelLoading: \"Loading...\",\n  labelComplete: \"Complete\"\n};\nFormModalTokenSet.propTypes = {\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_4__[\"PropTypes\"].object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormModalTokenSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormModalTokenSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2V0VG9rZW4uanN4PzE5MWQiXSwibmFtZXMiOlsiRm9ybU1vZGFsVG9rZW5TZXQiLCJ1cGRhdGVEZWZhdWx0Iiwic3giLCJwcm9wcyIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRva2VuIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRUb2tlbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYmciLCJjb2xvciIsIm10Iiwid2lkdGgiLCJpc1N1Ym1pdHRpbmciLCJpc1N1Ym1pdHRlZCIsImxhYmVsTG9hZGluZyIsImxhYmVsIiwibGFiZWxDb21wbGV0ZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLGFBQWtDLFFBQWxDQSxhQUFrQztBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUM3RCxNQUFNQyxNQUFNLEdBQUdDLCtEQUFVLEVBQXpCO0FBRUFDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJSCxNQUFNLENBQUNJLEtBQVgsRUFBa0I7QUFDaEJDLGNBQVEsQ0FBQyxPQUFELEVBQVVMLE1BQU0sQ0FBQ0ksS0FBakIsQ0FBUjtBQUNEO0FBQ0YsR0FKRCxFQUlHLEVBSkg7QUFLQUYsOENB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c0NvbnRlbnQiOlsiLyogLS0tIEdsb2JhbCAtLS0gKi9cbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdXNlTW9uZGF5VXBkYXRlQ3JlYXRlTXV0YXRpb24gfSBmcm9tIFwicmVhY3QtbW9uZGF5XCI7XG5pbXBvcnQgeyB1c2VNb25kYXlCb2FyZHNRdWVyeSB9IGZyb20gXCJyZWFjdC1tb25kYXlcIjtcbmltcG9ydCB7IHdpdGhNb25kYXksIHNldFRva2VuIH0gZnJvbSBcInJlYWN0LW1vbmRheVwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5cbi8qKlxuICogQG5hbWUgRm9ybU1vZGFsVG9rZW5TZXRcbiAqIEBkZXNjcmlwdGlvbiBTZXQgYXV0aG9yaXphdGlvbiB0b2tlbiBmb3IgTW9uZGF5IFF1ZXJpZXNcbiAqIEB2ZXJzaW9uIDAuMC4wXG4gKi9cblxuY29uc3QgRm9ybU1vZGFsVG9rZW5TZXQgPSAoeyB1cGRhdGVEZWZhdWx0LCBzeCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBtb25kYXkgPSB3aXRoTW9uZGF5KCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW9uZGF5LnRva2VuKSB7XG4gICAgICBzZXRWYWx1ZShcInRva2VuXCIsIG1vbmRheS50b2tlbik7XG4gICAgfVxuICB9LCBbXSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobW9uZGF5LCBcIm1vbmRheW1vbmRheVwiKTtcbiAgfSwgW21vbmRheV0pO1xuXG4gIC8qIC0tLSBGb3JtIEhvb2sgU3RhdGUgLS0tICovXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgZXJyb3JzLCBzZXRWYWx1ZSwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XG5cbiAgLyogLS0tIFN1Ym1pdCBIYW5kbGVyIC0tLSAqL1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBtb25kYXkuc2V0VG9rZW4odmFsdWVzLnRva2VuKTtcbiAgICB9XG4gIH07XG5cbiAgLyogLS0tIEZvcm0gOiBDb21wb25lbnQgLS0tICovXG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8Qm94XG4gICAgICAgIGFzPVwiaW5wdXRcIlxuICAgICAgICBuYW1lPVwidG9rZW5cIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRva2VuXCJcbiAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBib3JkZXI6IDEsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwic29saXR1ZGVcIixcbiAgICAgICAgICBib3JkZXJTdHlsZTogXCJzb2xpZFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgICBwYWRkaW5nOiAxLFxuICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICBib3JkZXJTdHlsZTogXCJjaGFyY29hbFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIHN4PXt7IGJnOiBcImJsdWVcIiwgY29sb3I6IFwid2hpdGVcIiwgbXQ6IDMsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgPlxuICAgICAgICB7Zm9ybVN0YXRlLmlzU3VibWl0dGluZyAmICFmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxMb2FkaW5nfTwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsfTwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHshZm9ybVN0YXRlLmlzU3VibWl0dGluZyAmIGZvcm1TdGF0ZS5pc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxDb21wbGV0ZX08L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuRm9ybU1vZGFsVG9rZW5TZXQuZGVmYXVsdFByb3BzID0ge1xuICBzeDoge30sXG4gIGxhYmVsOiBcIlN1Ym1pdFwiLFxuICBsYWJlbExvYWRpbmc6IFwiTG9hZGluZy4uLlwiLFxuICBsYWJlbENvbXBsZXRlOiBcIkNvbXBsZXRlXCIsXG59O1xuXG5Gb3JtTW9kYWxUb2tlblNldC5wcm9wVHlwZXMgPSB7XG4gIHN4OiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybU1vZGFsVG9rZW5TZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormSetToken.jsx\n");

/***/ })

})