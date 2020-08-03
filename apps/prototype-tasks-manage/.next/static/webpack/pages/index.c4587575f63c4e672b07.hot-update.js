webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FormSetToken.jsx":
/*!*************************************!*\
  !*** ./components/FormSetToken.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"../../node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var react_monday__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-monday */ \"../../node_modules/react-monday/src/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme-ui */ \"../../node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/apps/prototype-tasks-manage/components/FormSetToken.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n/* --- Global --- */\n\n\n\n\n\n\n/**\n * @name FormModalTokenSet\n * @description Set authorization token for Monday Queries\n * @version 0.0.0\n */\n\nvar FormModalTokenSet = function FormModalTokenSet(_ref) {\n  _s();\n\n  var updateDefault = _ref.updateDefault,\n      sx = _ref.sx,\n      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"updateDefault\", \"sx\"]);\n\n  var monday = Object(react_monday__WEBPACK_IMPORTED_MODULE_6__[\"withMonday\"])();\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (monday.token) {\n      setValue(\"token\", monday.token);\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(monday, \"mondaymonday\");\n  }, [monday]);\n  /* --- Form Hook State --- */\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      errors = _useForm.errors,\n      setValue = _useForm.setValue,\n      formState = _useForm.formState;\n  /* --- Submit Handler --- */\n\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values) {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (values) {\n                monday.setToken(values.token);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* --- Form : Component --- */\n\n\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"form\",\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"input\",\n    name: \"token\",\n    placeholder: \"Token\",\n    register: register,\n    errors: errors,\n    sx: {\n      border: 1,\n      borderColor: \"solitude\",\n      borderStyle: \"solid\",\n      borderRadius: 4,\n      padding: 1,\n      \"&:focus\": {\n        borderColor: \"charcoal\"\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    as: \"button\",\n    sx: {\n      bg: \"blue\",\n      color: \"white\",\n      mt: 3,\n      width: \"100%\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_7__[\"Box\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, props.label)));\n};\n\n_s(FormModalTokenSet, \"WPXNucc/KXGyYNDLxRVBPOeVzjI=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_5__[\"useForm\"]];\n});\n\n_c = FormModalTokenSet;\nFormModalTokenSet.defaultProps = {\n  sx: {},\n  label: \"Submit\",\n  labelLoading: \"Loading...\",\n  labelComplete: \"Complete\"\n};\nFormModalTokenSet.propTypes = {\n  sx: prop_types__WEBPACK_IMPORTED_MODULE_4__[\"PropTypes\"].object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormModalTokenSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormModalTokenSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"../../node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtU2V0VG9rZW4uanN4PzE5MWQiXSwibmFtZXMiOlsiRm9ybU1vZGFsVG9rZW5TZXQiLCJ1cGRhdGVEZWZhdWx0Iiwic3giLCJwcm9wcyIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZUVmZmVjdCIsInRva2VuIiwic2V0VmFsdWUiLCJjb25zb2xlIiwibG9nIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJzZXRUb2tlbiIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiYm9yZGVyU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYmciLCJjb2xvciIsIm10Iiwid2lkdGgiLCJsYWJlbCIsImRlZmF1bHRQcm9wcyIsImxhYmVsTG9hZGluZyIsImxhYmVsQ29tcGxldGUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBTUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxhQUFrQyxRQUFsQ0EsYUFBa0M7QUFBQSxNQUFuQkMsRUFBbUIsUUFBbkJBLEVBQW1CO0FBQUEsTUFBWkMsS0FBWTs7QUFDN0QsTUFBTUMsTUFBTSxHQUFHQywrREFBVSxFQUF6QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUgsTUFBTSxDQUFDSSxLQUFYLEVBQWtCO0FBQ2hCQyxjQUFRLENBQUMsT0FBRCxFQUFVTCxNQUFNLENBQUNJLEtBQWpCLENBQVI7QUFDRDtBQUNGLEdBSkQsRUFJRyxFQUpIO0FBS0FGLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkcsV0FBTyxDQUFDQyxHQUFSLENBQVlQLE1BQVosRUFBb0IsY0FBcEI7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsTUFBRCxDQUZIO0FBSUE7O0FBWjZELGlCQWFHUSwrREFBTyxFQWJWO0FBQUEsTUFhckRDLFlBYnFELFlBYXJEQSxZQWJxRDtBQUFBLE1BYXZDQyxRQWJ1QyxZQWF2Q0EsUUFidUM7QUFBQSxNQWE3QkMsTUFiNkIsWUFhN0JBLE1BYjZCO0FBQUEsTUFhckJOLFFBYnFCLFlBYXJCQSxRQWJxQjtBQUFBLE1BYVhPLFNBYlcsWUFhWEEsU0FiVztBQWU3RDs7O0FBQ0EsTUFBTUMsUUFBUTtBQUFBLGlNQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZixrQkFBSUEsTUFBSixFQUFZO0FBQ1ZkLHNCQUFNLENBQUNlLFFBQVAsQ0FBZ0JELE1BQU0sQ0FBQ1YsS0FBdkI7QUFDRDs7QUFIYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSUyxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7QUFNQTs7O0FBQ0EsU0FDRSxNQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxZQUFRLEVBQUVKLFlBQVksQ0FBQ0ksUUFBRCxDQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUNFLE1BQUUsRUFBQyxPQURMO0FBRUUsUUFBSSxFQUFDLE9BRlA7QUFHRSxlQUFXLEVBQUMsT0FIZDtBQUlFLFlBQVEsRUFBRUgsUUFKWjtBQUtFLFVBQU0sRUFBRUMsTUFMVjtBQU1FLE1BQUUsRUFBRTtBQUNGSyxZQUFNLEVBQUUsQ0FETjtBQUVGQyxpQkFBVyxFQUFFLFVBRlg7QUFHRkMsaUJBQVcsRUFBRSxPQUhYO0FBSUZDLGtCQUFZLEVBQUUsQ0FKWjtBQUtGQyxhQUFPLEVBQUUsQ0FMUDtBQU1GLGlCQUFXO0FBQ1RILG1CQUFXLEVBQUU7QUFESjtBQU5ULEtBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBa0JFLE1BQUMsNENBQUQ7QUFDRSxNQUFFLEVBQUMsUUFETDtBQUVFLE1BQUUsRUFBRTtBQUFFSSxRQUFFLEVBQUUsTUFBTjtBQUFjQyxXQUFLLEVBQUUsT0FBckI7QUFBOEJDLFFBQUUsRUFBRSxDQUFsQztBQUFxQ0MsV0FBSyxFQUFFO0FBQTVDLEtBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNekIsS0FBSyxDQUFDMEIsS0FBWixDQUpGLENBbEJGLENBREY7QUFvQ0QsQ0EzREQ7O0dBQU03QixpQjtVQWE0RFksdUQ7OztLQWI1RFosaUI7QUE2RE5BLGlCQUFpQixDQUFDOEIsWUFBbEIsR0FBaUM7QUFDL0I1QixJQUFFLEVBQUUsRUFEMkI7QUFFL0IyQixPQUFLLEVBQUUsUUFGd0I7QUFHL0JFLGNBQVksRUFBRSxZQUhpQjtBQUkvQkMsZUFBYSxFQUFFO0FBSmdCLENBQWpDO0FBT0FoQyxpQkFBaUIsQ0FBQ2lDLFNBQWxCLEdBQThCO0FBQzVCL0IsSUFBRSxFQUFFZ0Msb0RBQVMsQ0FBQ0M7QUFEYyxDQUE5QjtBQUllbkMsZ0ZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1TZXRUb2tlbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gR2xvYmFsIC0tLSAqL1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VNb25kYXlVcGRhdGVDcmVhdGVNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1tb25kYXlcIjtcbmltcG9ydCB7IHVzZU1vbmRheUJvYXJkc1F1ZXJ5IH0gZnJvbSBcInJlYWN0LW1vbmRheVwiO1xuaW1wb3J0IHsgd2l0aE1vbmRheSwgc2V0VG9rZW4gfSBmcm9tIFwicmVhY3QtbW9uZGF5XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwidGhlbWUtdWlcIjtcblxuLyoqXG4gKiBAbmFtZSBGb3JtTW9kYWxUb2tlblNldFxuICogQGRlc2NyaXB0aW9uIFNldCBhdXRob3JpemF0aW9uIHRva2VuIGZvciBNb25kYXkgUXVlcmllc1xuICogQHZlcnNpb24gMC4wLjBcbiAqL1xuXG5jb25zdCBGb3JtTW9kYWxUb2tlblNldCA9ICh7IHVwZGF0ZURlZmF1bHQsIHN4LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IG1vbmRheSA9IHdpdGhNb25kYXkoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChtb25kYXkudG9rZW4pIHtcbiAgICAgIHNldFZhbHVlKFwidG9rZW5cIiwgbW9uZGF5LnRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhtb25kYXksIFwibW9uZGF5bW9uZGF5XCIpO1xuICB9LCBbbW9uZGF5XSk7XG5cbiAgLyogLS0tIEZvcm0gSG9vayBTdGF0ZSAtLS0gKi9cbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBlcnJvcnMsIHNldFZhbHVlLCBmb3JtU3RhdGUgfSA9IHVzZUZvcm0oKTtcblxuICAvKiAtLS0gU3VibWl0IEhhbmRsZXIgLS0tICovXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIG1vbmRheS5zZXRUb2tlbih2YWx1ZXMudG9rZW4pO1xuICAgIH1cbiAgfTtcblxuICAvKiAtLS0gRm9ybSA6IENvbXBvbmVudCAtLS0gKi9cbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwiZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxCb3hcbiAgICAgICAgYXM9XCJpbnB1dFwiXG4gICAgICAgIG5hbWU9XCJ0b2tlblwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVG9rZW5cIlxuICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXJ9XG4gICAgICAgIGVycm9ycz17ZXJyb3JzfVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJvcmRlcjogMSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogXCJzb2xpdHVkZVwiLFxuICAgICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICAgIHBhZGRpbmc6IDEsXG4gICAgICAgICAgXCImOmZvY3VzXCI6IHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcImNoYXJjb2FsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8Qm94XG4gICAgICAgIGFzPVwiYnV0dG9uXCJcbiAgICAgICAgc3g9e3sgYmc6IFwiYmx1ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtdDogMywgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICA+XG4gICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsfTwvQm94PlxuICAgICAgICB7Lyoge2Zvcm1TdGF0ZS5pc1N1Ym1pdHRpbmcgJiAhZm9ybVN0YXRlLmlzU3VibWl0dGVkID8gKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsTG9hZGluZ308L0JveD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Qm94Pntwcm9wcy5sYWJlbH08L0JveD5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWZvcm1TdGF0ZS5pc1N1Ym1pdHRpbmcgJiBmb3JtU3RhdGUuaXNTdWJtaXR0ZWQgJiYgKFxuICAgICAgICAgIDxCb3g+e3Byb3BzLmxhYmVsQ29tcGxldGV9PC9Cb3g+XG4gICAgICAgICl9ICovfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5Gb3JtTW9kYWxUb2tlblNldC5kZWZhdWx0UHJvcHMgPSB7XG4gIHN4OiB7fSxcbiAgbGFiZWw6IFwiU3VibWl0XCIsXG4gIGxhYmVsTG9hZGluZzogXCJMb2FkaW5nLi4uXCIsXG4gIGxhYmVsQ29tcGxldGU6IFwiQ29tcGxldGVcIixcbn07XG5cbkZvcm1Nb2RhbFRva2VuU2V0LnByb3BUeXBlcyA9IHtcbiAgc3g6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtTW9kYWxUb2tlblNldDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FormSetToken.jsx\n");

/***/ })

})