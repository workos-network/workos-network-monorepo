webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/FormSetToken.jsx":
/*!*************************************!*\
  !*** ./components/FormSetToken.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"../../node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_monday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-monday */ \"../../node_modules/react-monday/src/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"../../node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/apps/prototype-tasks-manage/components/FormSetToken.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/* --- Global --- */\n\n\n\n\n\n\ntheme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"];\n/**\n * @name FormModalTokenSet\n * @description Set authorization token for Monday Queries\n * @version 0.0.0\n */\n\nvar FormModalTokenSet = function FormModalTokenSet(_ref) {\n  _s();\n\n  var updateDefault = _ref.updateDefault,\n      sx = _ref.sx,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"updateDefault\", \"sx\"]);\n\n  var monday = Object(react_monday__WEBPACK_IMPORTED_MODULE_6__[\"withMonday\"])();\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (monday.token) {\n      setValue(\"token\", monday.token);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(monday, \"mondaymonday\");\n  }, [monday]);\n  /* --- Form Hook State --- */\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors,\n      setValue = _useForm.setValue,\n      formState = _useForm.formState;\n  /* --- Submit Handler --- */\n\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (values) {\n                monday.setToken(values.token);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* --- Form : Component --- */\n\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"form\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    name: \"token\",\n    placeholder: \"Token\",\n    register: register,\n    errors: errors,\n    sx: {},\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"button\",\n    sx: {\n      bg: \"blue\",\n      color: \"white\",\n      mt: 3,\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, formState.isSubmitting & !formState.isSubmitted ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, props.labelLoading) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, props.label), !formState.isSubmitting & formState.isSubmitted && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, props.labelComplete)));\n};\n\n_s(FormModalTokenSet, \"WPXNucc/KXGyYNDLxRVBPOeVzjI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = FormModalTokenSet;\nFormModalTokenSet.defaultProps = {\n  sx: {},\n  label: \"Submit\",\n  labelLoading: \"Loading...\",\n  labelComplete: \"Complete\"\n};\nFormModalTokenSet.propTypes = {\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_4__[\"PropTypes\"].object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormModalTokenSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormModalTokenSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2V0VG9rZW4uanN4PzE5MWQiXSwibmFtZXMiOlsiQm94IiwiRm9ybU1vZGFsVG9rZW5TZXQiLCJ1cGRhdGVEZWZhdWx0Iiwic3giLCJwcm9wcyIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRva2VuIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRUb2tlbiIsImJnIiwiY29sb3IiLCJtdCIsIndpZHRoIiwiaXNTdWJtaXR0aW5nIiwiaXNTdWJtaXR0ZWQiLCJsYWJlbExvYWRpbmciLCJsYWJlbCIsImxhYmVsQ29tcGxldGUiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsNENBQUc7QUFFSDs7Ozs7O0FBTUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsRUFBbUIsUUFBbkJBLEVBQW1CO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0QsTUFBTUMsTUFBTSxHQUFHQywrREFBVSxFQUF6QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUgsTUFBTSxDQUFDSSxLQUFYLEVBQWtCO0FBQ2hCQyxjQUFRLENBQUMsT0FBRCxFQUFVTCxNQUFNLENBQUNJLEtBQWpCLENBQVI7QUFDRDtBQUNGLEdBSkQsRUFJRyxFQUpIO0FBS0FGLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkcsV0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVosRUFBb0IsY0FBcEI7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsTUFBRCxDQUZIO0FBSUE7O0FBWjZELGlCQWFHUSwrREFBTyxFQWJWO0FBQUEsTUFhckRDLFlBYnFELFlBYXJEQSxZQWJxRDtBQUFBLE1BYXZDQyxRQWJ1QyxZQWF2Q0EsUUFidUM7QUFBQSxNQWE3QkMsTUFiNkIsWUFhN0JBLE1BYjZCO0FBQUEsTUFhckJOLFFBYnFCLFlBYXJCQSxRQWJxQjtBQUFBLE1BYVhPLFNBYlcsWUFhWEEsU0FiVztBQWU3RDs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLGlNQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixrQkFBSUEsTUFBSixFQUFZO0FBQ1ZkLHNCQUFNLENBQUNlLFFBQVAsQ0FBZ0JELE1BQU0sQ0FBQ1YsS0FBdkI7QUFDRDs7QUFIYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7QUFNQTs7O0FBQ0EsU0FDRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxZQUFRLEVBQUVKLFlBQVksQ0FBQ0ksUUFBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLGVBQVcsRUFBQyxPQUZkO0FBR0UsWUFBUSxFQUFFSCxRQUhaO0FBSUUsVUFBTSxFQUFFQyxNQUpWO0FBS0UsTUFBRSxFQUFFLEVBTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUUsTUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsTUFBRSxFQUFFO0FBQUVLLFFBQUUsRUFBRSxNQUFOO0FBQWNDLFdBQUssRUFBRSxPQUFyQjtBQUE4QkMsUUFBRSxFQUFFLENBQWxDO0FBQXFDQyxXQUFLLEVBQUU7QUFBNUMsS0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdQLFNBQVMsQ0FBQ1EsWUFBVixHQUF5QixDQUFDUixTQUFTLENBQUNTLFdBQXBDLEdBQ0MsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU10QixLQUFLLENBQUN1QixZQUFaLENBREQsR0FHQyxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXZCLEtBQUssQ0FBQ3dCLEtBQVosQ0FQSixFQVVHLENBQUNYLFNBQVMsQ0FBQ1EsWUFBWCxHQUEwQlIsU0FBUyxDQUFDUyxXQUFwQyxJQUNDLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNdEIsS0FBSyxDQUFDeUIsYUFBWixDQVhKLENBUkYsQ0FERjtBQXlCRCxDQWhERDs7R0FBTTVCLGlCO1VBYTREWSx1RDs7O0tBYjVEWixpQjtBQWtETkEsaUJBQWlCLENBQUM2QixZQUFsQixHQUFpQztBQUMvQjNCLElBQUUsRUFBRSxFQUQyQjtBQUUvQnlCLE9BQUssRUFBRSxRQUZ3QjtBQUcvQkQsY0FBWSxFQUFFLFlBSGlCO0FBSS9CRSxlQUFhLEVBQUU7QUFKZ0IsQ0FBakM7QUFPQTVCLGlCQUFpQixDQUFDOEIsU0FBbEIsR0FBOEI7QUFDNUI1QixJQUFFLEVBQUU2QixvREFBUyxDQUFDQztBQURjLENBQTlCO0FBSWVoQyxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybVNldFRva2VuLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLSBHbG9iYWwgLS0tICovXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZU1vbmRheVVwZGF0ZUNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LW1vbmRheVwiO1xuaW1wb3J0IHsgdXNlTW9uZGF5Qm9hcmRzUXVlcnkgfSBmcm9tIFwicmVhY3QtbW9uZGF5XCI7XG5pbXBvcnQgeyB3aXRoTW9uZGF5LCBzZXRUb2tlbiB9IGZyb20gXCJyZWFjdC1tb25kYXlcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuQm94O1xuXG4vKipcbiAqIEBuYW1lIEZvcm1Nb2RhbFRva2VuU2V0XG4gKiBAZGVzY3JpcHRpb24gU2V0IGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIE1vbmRheSBRdWVyaWVzXG4gKiBAdmVyc2lvbiAwLjAuMFxuICovXG5cbmNvbnN0IEZvcm1Nb2RhbFRva2VuU2V0ID0gKHsgdXBkYXRlRGVmYXVsdCwgc3gsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgbW9uZGF5ID0gd2l0aE1vbmRheSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vbmRheS50b2tlbikge1xuICAgICAgc2V0VmFsdWUoXCJ0b2tlblwiLCBtb25kYXkudG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1vbmRheSwgXCJtb25kYXltb25kYXlcIik7XG4gIH0sIFttb25kYXldKTtcblxuICAvKiAtLS0gRm9ybSBIb29rIFN0YXRlIC0tLSAqL1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVnaXN0ZXIsIGVycm9ycywgc2V0VmFsdWUsIGZvcm1TdGF0ZSB9ID0gdXNlRm9ybSgpO1xuXG4gIC8qIC0tLSBTdWJtaXQgSGFuZGxlciAtLS0gKi9cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgbW9uZGF5LnNldFRva2VuKHZhbHVlcy50b2tlbik7XG4gICAgfVxuICB9O1xuXG4gIC8qIC0tLSBGb3JtIDogQ29tcG9uZW50IC0tLSAqL1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPGlucHV0XG4gICAgICAgIG5hbWU9XCJ0b2tlblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVG9rZW5cIlxuICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICBzeD17e319XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIHN4PXt7IGJnOiBcImJsdWVcIiwgY29sb3I6IFwid2hpdGVcIiwgbXQ6IDMsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgPlxuICAgICAgICB7Zm9ybVN0YXRlLmlzU3VibWl0dGluZyAmICFmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxMb2FkaW5nfTwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsfTwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHshZm9ybVN0YXRlLmlzU3VibWl0dGluZyAmIGZvcm1TdGF0ZS5pc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxDb21wbGV0ZX08L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuRm9ybU1vZGFsVG9rZW5TZXQuZGVmYXVsdFByb3BzID0ge1xuICBzeDoge30sXG4gIGxhYmVsOiBcIlN1Ym1pdFwiLFxuICBsYWJlbExvYWRpbmc6IFwiTG9hZGluZy4uLlwiLFxuICBsYWJlbENvbXBsZXRlOiBcIkNvbXBsZXRlXCIsXG59O1xuXG5Gb3JtTW9kYWxUb2tlblNldC5wcm9wVHlwZXMgPSB7XG4gIHN4OiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybU1vZGFsVG9rZW5TZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormSetToken.jsx\n");

/***/ })

})