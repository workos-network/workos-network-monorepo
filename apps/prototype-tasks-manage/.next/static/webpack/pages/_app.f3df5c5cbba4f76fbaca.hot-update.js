webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/FormSetToken.jsx":
/*!*************************************!*\
  !*** ./components/FormSetToken.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"../../node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_monday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-monday */ \"../../node_modules/react-monday/src/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"../../node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/apps/prototype-tasks-manage/components/FormSetToken.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/* --- Global --- */\n\n\n\n\n\n\n/**\n * @name FormModalTokenSet\n * @description Set authorization token for Monday Queries\n * @version 0.0.0\n */\n\nvar FormModalTokenSet = function FormModalTokenSet(_ref) {\n  _s();\n\n  var updateDefault = _ref.updateDefault,\n      sx = _ref.sx,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"updateDefault\", \"sx\"]);\n\n  var monday = Object(react_monday__WEBPACK_IMPORTED_MODULE_6__[\"withMonday\"])();\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (monday.token) {\n      setValue(\"token\", monday.token);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(monday, \"mondaymonday\");\n  }, [monday]);\n  /* --- Form Hook State --- */\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors,\n      setValue = _useForm.setValue,\n      formState = _useForm.formState;\n  /* --- Submit Handler --- */\n\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(values, \"setToken\");\n\n              if (values) {\n                monday.setToken(values.token);\n              }\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* --- Form : Component --- */\n\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"form\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"input\",\n    name: \"token\",\n    placeholder: \"Token\" // register={register}\n    ,\n    ref: register({\n      required: true,\n      maxLength: 100\n    }),\n    errors: errors,\n    sx: {\n      border: 1,\n      borderColor: \"solitude\",\n      borderStyle: \"solid\",\n      borderRadius: 4,\n      padding: 1,\n      \"&:focus\": {\n        borderColor: \"charcoal\"\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"button\",\n    sx: {\n      bg: \"blue\",\n      color: \"white\",\n      mt: 3,\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, props.label)));\n};\n\n_s(FormModalTokenSet, \"WPXNucc/KXGyYNDLxRVBPOeVzjI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = FormModalTokenSet;\nFormModalTokenSet.defaultProps = {\n  sx: {},\n  label: \"Submit\",\n  labelLoading: \"Loading...\",\n  labelComplete: \"Complete\"\n};\nFormModalTokenSet.propTypes = {\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_4__[\"PropTypes\"].object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormModalTokenSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormModalTokenSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2V0VG9rZW4uanN4PzE5MWQiXSwibmFtZXMiOlsiRm9ybU1vZGFsVG9rZW5TZXQiLCJ1cGRhdGVEZWZhdWx0Iiwic3giLCJwcm9wcyIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRva2VuIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRUb2tlbiIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJTdHlsZSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJiZyIsImNvbG9yIiwibXQiLCJ3aWR0aCIsImxhYmVsIiwiZGVmYXVsdFByb3BzIiwibGFiZWxMb2FkaW5nIiwibGFiZWxDb21wbGV0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLGFBQWtDLFFBQWxDQSxhQUFrQztBQUFBLE1BQW5CQyxFQUFtQixRQUFuQkEsRUFBbUI7QUFBQSxNQUFaQyxLQUFZOztBQUM3RCxNQUFNQyxNQUFNLEdBQUdDLCtEQUFVLEVBQXpCO0FBRUFDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJSCxNQUFNLENBQUNJLEtBQVgsRUFBa0I7QUFDaEJDLGNBQVEsQ0FBQyxPQUFELEVBQVVMLE1BQU0sQ0FBQ0ksS0FBakIsQ0FBUjtBQUNEO0FBQ0YsR0FKRCxFQUlHLEVBSkg7QUFNQUYsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCRyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsTUFBWixFQUFvQixjQUFwQjtBQUNELEdBRkQsRUFFRyxDQUFDQSxNQUFELENBRkg7QUFJQTs7QUFiNkQsaUJBY0dRLCtEQUFPLEVBZFY7QUFBQSxNQWNyREMsWUFkcUQsWUFjckRBLFlBZHFEO0FBQUEsTUFjdkNDLFFBZHVDLFlBY3ZDQSxRQWR1QztBQUFBLE1BYzdCQyxNQWQ2QixZQWM3QkEsTUFkNkI7QUFBQSxNQWNyQk4sUUFkcUIsWUFjckJBLFFBZHFCO0FBQUEsTUFjWE8sU0FkVyxZQWNYQSxTQWRXO0FBZ0I3RDs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLGlNQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZlIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQUFaLEVBQW9CLFVBQXBCOztBQUNBLGtCQUFJQSxNQUFKLEVBQVk7QUFDVmQsc0JBQU0sQ0FBQ2UsUUFBUCxDQUFnQkQsTUFBTSxDQUFDVixLQUF2QjtBQUNEOztBQUpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJTLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDtBQU9BOzs7QUFDQSxTQUNFLE1BQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLFlBQVEsRUFBRUosWUFBWSxDQUFDSSxRQUFELENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQ0UsTUFBRSxFQUFDLE9BREw7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLGVBQVcsRUFBQyxPQUhkLENBSUU7QUFKRjtBQUtFLE9BQUcsRUFBRUgsUUFBUSxDQUFDO0FBQUVNLGNBQVEsRUFBRSxJQUFaO0FBQWtCQyxlQUFTLEVBQUU7QUFBN0IsS0FBRCxDQUxmO0FBTUUsVUFBTSxFQUFFTixNQU5WO0FBT0UsTUFBRSxFQUFFO0FBQ0ZPLFlBQU0sRUFBRSxDQUROO0FBRUZDLGlCQUFXLEVBQUUsVUFGWDtBQUdGQyxpQkFBVyxFQUFFLE9BSFg7QUFJRkMsa0JBQVksRUFBRSxDQUpaO0FBS0ZDLGFBQU8sRUFBRSxDQUxQO0FBTUYsaUJBQVc7QUFDVEgsbUJBQVcsRUFBRTtBQURKO0FBTlQsS0FQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFtQkUsTUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxRQURMO0FBRUUsTUFBRSxFQUFFO0FBQUVJLFFBQUUsRUFBRSxNQUFOO0FBQWNDLFdBQUssRUFBRSxPQUFyQjtBQUE4QkMsUUFBRSxFQUFFLENBQWxDO0FBQXFDQyxXQUFLLEVBQUU7QUFBNUMsS0FGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUUsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0zQixLQUFLLENBQUM0QixLQUFaLENBSkYsQ0FuQkYsQ0FERjtBQXFDRCxDQTlERDs7R0FBTS9CLGlCO1VBYzREWSx1RDs7O0tBZDVEWixpQjtBQWdFTkEsaUJBQWlCLENBQUNnQyxZQUFsQixHQUFpQztBQUMvQjlCLElBQUUsRUFBRSxFQUQyQjtBQUUvQjZCLE9BQUssRUFBRSxRQUZ3QjtBQUcvQkUsY0FBWSxFQUFFLFlBSGlCO0FBSS9CQyxlQUFhLEVBQUU7QUFKZ0IsQ0FBakM7QUFPQWxDLGlCQUFpQixDQUFDbUMsU0FBbEIsR0FBOEI7QUFDNUJqQyxJQUFFLEVBQUVrQyxvREFBUyxDQUFDQztBQURjLENBQTlCO0FBSWVyQyxnRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9ybVNldFRva2VuLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLSBHbG9iYWwgLS0tICovXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IHVzZU1vbmRheVVwZGF0ZUNyZWF0ZU11dGF0aW9uIH0gZnJvbSBcInJlYWN0LW1vbmRheVwiO1xuaW1wb3J0IHsgdXNlTW9uZGF5Qm9hcmRzUXVlcnkgfSBmcm9tIFwicmVhY3QtbW9uZGF5XCI7XG5pbXBvcnQgeyB3aXRoTW9uZGF5LCBzZXRUb2tlbiB9IGZyb20gXCJyZWFjdC1tb25kYXlcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuXG4vKipcbiAqIEBuYW1lIEZvcm1Nb2RhbFRva2VuU2V0XG4gKiBAZGVzY3JpcHRpb24gU2V0IGF1dGhvcml6YXRpb24gdG9rZW4gZm9yIE1vbmRheSBRdWVyaWVzXG4gKiBAdmVyc2lvbiAwLjAuMFxuICovXG5cbmNvbnN0IEZvcm1Nb2RhbFRva2VuU2V0ID0gKHsgdXBkYXRlRGVmYXVsdCwgc3gsIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgbW9uZGF5ID0gd2l0aE1vbmRheSgpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKG1vbmRheS50b2tlbikge1xuICAgICAgc2V0VmFsdWUoXCJ0b2tlblwiLCBtb25kYXkudG9rZW4pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobW9uZGF5LCBcIm1vbmRheW1vbmRheVwiKTtcbiAgfSwgW21vbmRheV0pO1xuXG4gIC8qIC0tLSBGb3JtIEhvb2sgU3RhdGUgLS0tICovXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgZXJyb3JzLCBzZXRWYWx1ZSwgZm9ybVN0YXRlIH0gPSB1c2VGb3JtKCk7XG5cbiAgLyogLS0tIFN1Ym1pdCBIYW5kbGVyIC0tLSAqL1xuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZXMsIFwic2V0VG9rZW5cIik7XG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgbW9uZGF5LnNldFRva2VuKHZhbHVlcy50b2tlbik7XG4gICAgfVxuICB9O1xuXG4gIC8qIC0tLSBGb3JtIDogQ29tcG9uZW50IC0tLSAqL1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPEJveFxuICAgICAgICBhcz1cImlucHV0XCJcbiAgICAgICAgbmFtZT1cInRva2VuXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUb2tlblwiXG4gICAgICAgIC8vIHJlZ2lzdGVyPXtyZWdpc3Rlcn1cbiAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDEwMCB9KX1cbiAgICAgICAgZXJyb3JzPXtlcnJvcnN9XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYm9yZGVyOiAxLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcInNvbGl0dWRlXCIsXG4gICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgICAgICAgcGFkZGluZzogMSxcbiAgICAgICAgICBcIiY6Zm9jdXNcIjoge1xuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiY2hhcmNvYWxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgYXM9XCJidXR0b25cIlxuICAgICAgICBzeD17eyBiZzogXCJibHVlXCIsIGNvbG9yOiBcIndoaXRlXCIsIG10OiAzLCB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgID5cbiAgICAgICAgPEJveD57cHJvcHMubGFiZWx9PC9Cb3g+XG4gICAgICAgIHsvKiB7Zm9ybVN0YXRlLmlzU3VibWl0dGluZyAmICFmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxMb2FkaW5nfTwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsfTwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHshZm9ybVN0YXRlLmlzU3VibWl0dGluZyAmIGZvcm1TdGF0ZS5pc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxDb21wbGV0ZX08L0JveD5cbiAgICAgICAgKX0gKi99XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkZvcm1Nb2RhbFRva2VuU2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc3g6IHt9LFxuICBsYWJlbDogXCJTdWJtaXRcIixcbiAgbGFiZWxMb2FkaW5nOiBcIkxvYWRpbmcuLi5cIixcbiAgbGFiZWxDb21wbGV0ZTogXCJDb21wbGV0ZVwiLFxufTtcblxuRm9ybU1vZGFsVG9rZW5TZXQucHJvcFR5cGVzID0ge1xuICBzeDogUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Nb2RhbFRva2VuU2V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FormSetToken.jsx\n");

/***/ })

})