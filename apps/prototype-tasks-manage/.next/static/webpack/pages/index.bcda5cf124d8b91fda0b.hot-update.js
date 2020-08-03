webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FormSetToken.jsx":
/*!*************************************!*\
  !*** ./components/FormSetToken.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"../../node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_monday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-monday */ \"../../node_modules/react-monday/src/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"../../node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/apps/prototype-tasks-manage/components/FormSetToken.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/* --- Global --- */\n\n\n\n\n\n\n/**\n * @name FormModalTokenSet\n * @description Set authorization token for Monday Queries\n * @version 0.0.0\n */\n\nvar FormModalTokenSet = function FormModalTokenSet(_ref) {\n  _s();\n\n  var updateDefault = _ref.updateDefault,\n      sx = _ref.sx,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"updateDefault\", \"sx\"]);\n\n  var monday = Object(react_monday__WEBPACK_IMPORTED_MODULE_6__[\"withMonday\"])();\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (monday.token) {\n      setValue(\"token\", monday.token);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(monday, \"mondaymonday\");\n  }, [monday]);\n  /* --- Form Hook State --- */\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors,\n      setValue = _useForm.setValue,\n      formState = _useForm.formState;\n  /* --- Submit Handler --- */\n\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (values) {\n                monday.setToken(values.token);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* --- Form : Component --- */\n\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"form\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"input\",\n    name: \"token\",\n    placeholder: \"Token\",\n    register: register,\n    errors: errors,\n    sx: {\n      border: 1,\n      borderColor: \"solitude\",\n      borderStyle: \"solid\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"button\",\n    sx: {\n      bg: \"blue\",\n      color: \"white\",\n      mt: 3,\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, formState.isSubmitting & !formState.isSubmitted ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, props.labelLoading) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, props.label), !formState.isSubmitting & formState.isSubmitted && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, props.labelComplete)));\n};\n\n_s(FormModalTokenSet, \"WPXNucc/KXGyYNDLxRVBPOeVzjI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = FormModalTokenSet;\nFormModalTokenSet.defaultProps = {\n  sx: {},\n  label: \"Submit\",\n  labelLoading: \"Loading...\",\n  labelComplete: \"Complete\"\n};\nFormModalTokenSet.propTypes = {\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_4__[\"PropTypes\"].object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormModalTokenSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormModalTokenSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2V0VG9rZW4uanN4PzE5MWQiXSwibmFtZXMiOlsiRm9ybU1vZGFsVG9rZW5TZXQiLCJ1cGRhdGVEZWZhdWx0Iiwic3giLCJwcm9wcyIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRva2VuIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRUb2tlbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyU3R5bGUiLCJiZyIsImNvbG9yIiwibXQiLCJ3aWR0aCIsImlzU3VibWl0dGluZyIsImlzU3VibWl0dGVkIiwibGFiZWxMb2FkaW5nIiwibGFiZWwiLCJsYWJlbENvbXBsZXRlIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBcUM7QUFBQTs7QUFBQSxNQUFsQ0MsYUFBa0MsUUFBbENBLGFBQWtDO0FBQUEsTUFBbkJDLEVBQW1CLFFBQW5CQSxFQUFtQjtBQUFBLE1BQVpDLEtBQVk7O0FBQzdELE1BQU1DLE1BQU0sR0FBR0MsK0RBQVUsRUFBekI7QUFFQUMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlILE1BQU0sQ0FBQ0ksS0FBWCxFQUFrQjtBQUNoQkMsY0FBUSxDQUFDLE9BQUQsRUFBVUwsTUFBTSxDQUFDSSxLQUFqQixDQUFSO0FBQ0Q7QUFDRixHQUpELEVBSUcsRUFKSDtBQUtBRiw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxNQUFaLEVBQW9CLGNBQXBCO0FBQ0QsR0FGRCxFQUVHLENBQUNBLE1BQUQsQ0FGSDtBQUlBOztBQVo2RCxpQkFhR1EsK0RBQU8sRUFiVjtBQUFBLE1BYXJEQyxZQWJxRCxZQWFyREEsWUFicUQ7QUFBQSxNQWF2Q0MsUUFidUMsWUFhdkNBLFFBYnVDO0FBQUEsTUFhN0JDLE1BYjZCLFlBYTdCQSxNQWI2QjtBQUFBLE1BYXJCTixRQWJxQixZQWFyQkEsUUFicUI7QUFBQSxNQWFYTyxTQWJXLFlBYVhBLFNBYlc7QUFlN0Q7OztBQUNBLE1BQU1DLFFBQVE7QUFBQSxpTUFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Ysa0JBQUlBLE1BQUosRUFBWTtBQUNWZCxzQkFBTSxDQUFDZSxRQUFQLENBQWdCRCxNQUFNLENBQUNWLEtBQXZCO0FBQ0Q7O0FBSGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUlMsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkO0FBTUE7OztBQUNBLFNBQ0UsTUFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsWUFBUSxFQUFFSixZQUFZLENBQUNJLFFBQUQsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsT0FETDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsZUFBVyxFQUFDLE9BSGQ7QUFJRSxZQUFRLEVBQUVILFFBSlo7QUFLRSxVQUFNLEVBQUVDLE1BTFY7QUFNRSxNQUFFLEVBQUU7QUFDRkssWUFBTSxFQUFFLENBRE47QUFFRkMsaUJBQVcsRUFBRSxVQUZYO0FBR0ZDLGlCQUFXLEVBQUU7QUFIWCxLQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQWFFLE1BQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLE1BQUUsRUFBRTtBQUFFQyxRQUFFLEVBQUUsTUFBTjtBQUFjQyxXQUFLLEVBQUUsT0FBckI7QUFBOEJDLFFBQUUsRUFBRSxDQUFsQztBQUFxQ0MsV0FBSyxFQUFFO0FBQTVDLEtBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHVixTQUFTLENBQUNXLFlBQVYsR0FBeUIsQ0FBQ1gsU0FBUyxDQUFDWSxXQUFwQyxHQUNDLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNekIsS0FBSyxDQUFDMEIsWUFBWixDQURELEdBR0MsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU0xQixLQUFLLENBQUMyQixLQUFaLENBUEosRUFVRyxDQUFDZCxTQUFTLENBQUNXLFlBQVgsR0FBMEJYLFNBQVMsQ0FBQ1ksV0FBcEMsSUFDQyxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTXpCLEtBQUssQ0FBQzRCLGFBQVosQ0FYSixDQWJGLENBREY7QUE4QkQsQ0FyREQ7O0dBQU0vQixpQjtVQWE0RFksdUQ7OztLQWI1RFosaUI7QUF1RE5BLGlCQUFpQixDQUFDZ0MsWUFBbEIsR0FBaUM7QUFDL0I5QixJQUFFLEVBQUUsRUFEMkI7QUFFL0I0QixPQUFLLEVBQUUsUUFGd0I7QUFHL0JELGNBQVksRUFBRSxZQUhpQjtBQUkvQkUsZUFBYSxFQUFFO0FBSmdCLENBQWpDO0FBT0EvQixpQkFBaUIsQ0FBQ2lDLFNBQWxCLEdBQThCO0FBQzVCL0IsSUFBRSxFQUFFZ0Msb0RBQVMsQ0FBQ0M7QUFEYyxDQUE5QjtBQUllbkMsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1TZXRUb2tlbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gR2xvYmFsIC0tLSAqL1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VNb25kYXlVcGRhdGVDcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1tb25kYXlcIjtcbmltcG9ydCB7IHVzZU1vbmRheUJvYXJkc1F1ZXJ5IH0gZnJvbSBcInJlYWN0LW1vbmRheVwiO1xuaW1wb3J0IHsgd2l0aE1vbmRheSwgc2V0VG9rZW4gfSBmcm9tIFwicmVhY3QtbW9uZGF5XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuLyoqXG4gKiBAbmFtZSBGb3JtTW9kYWxUb2tlblNldFxuICogQGRlc2NyaXB0aW9uIFNldCBhdXRob3JpemF0aW9uIHRva2VuIGZvciBNb25kYXkgUXVlcmllc1xuICogQHZlcnNpb24gMC4wLjBcbiAqL1xuXG5jb25zdCBGb3JtTW9kYWxUb2tlblNldCA9ICh7IHVwZGF0ZURlZmF1bHQsIHN4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG1vbmRheSA9IHdpdGhNb25kYXkoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb25kYXkudG9rZW4pIHtcbiAgICAgIHNldFZhbHVlKFwidG9rZW5cIiwgbW9uZGF5LnRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtb25kYXksIFwibW9uZGF5bW9uZGF5XCIpO1xuICB9LCBbbW9uZGF5XSk7XG5cbiAgLyogLS0tIEZvcm0gSG9vayBTdGF0ZSAtLS0gKi9cbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBlcnJvcnMsIHNldFZhbHVlLCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcblxuICAvKiAtLS0gU3VibWl0IEhhbmRsZXIgLS0tICovXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIG1vbmRheS5zZXRUb2tlbih2YWx1ZXMudG9rZW4pO1xuICAgIH1cbiAgfTtcblxuICAvKiAtLS0gRm9ybSA6IENvbXBvbmVudCAtLS0gKi9cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxCb3hcbiAgICAgICAgYXM9XCJpbnB1dFwiXG4gICAgICAgIG5hbWU9XCJ0b2tlblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVG9rZW5cIlxuICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJvcmRlcjogMSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJzb2xpdHVkZVwiLFxuICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBhcz1cImJ1dHRvblwiXG4gICAgICAgIHN4PXt7IGJnOiBcImJsdWVcIiwgY29sb3I6IFwid2hpdGVcIiwgbXQ6IDMsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgPlxuICAgICAgICB7Zm9ybVN0YXRlLmlzU3VibWl0dGluZyAmICFmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgPyAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxMb2FkaW5nfTwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsfTwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIHshZm9ybVN0YXRlLmlzU3VibWl0dGluZyAmIGZvcm1TdGF0ZS5pc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgICAgPEJveD57cHJvcHMubGFiZWxDb21wbGV0ZX08L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuRm9ybU1vZGFsVG9rZW5TZXQuZGVmYXVsdFByb3BzID0ge1xuICBzeDoge30sXG4gIGxhYmVsOiBcIlN1Ym1pdFwiLFxuICBsYWJlbExvYWRpbmc6IFwiTG9hZGluZy4uLlwiLFxuICBsYWJlbENvbXBsZXRlOiBcIkNvbXBsZXRlXCIsXG59O1xuXG5Gb3JtTW9kYWxUb2tlblNldC5wcm9wVHlwZXMgPSB7XG4gIHN4OiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybU1vZGFsVG9rZW5TZXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/FormSetToken.jsx\n");

/***/ })

})