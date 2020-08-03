webpackHotUpdate_N_E("pages/index",{

/***/ "../../node_modules/react-monday/src/Provider.jsx":
/*!***************************************************************************************************************!*\
  !*** /Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/Provider.jsx ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-hooks */ \"../../node_modules/graphql-hooks/es/graphql-hooks.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ \"../../node_modules/react-monday/src/actions/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Context */ \"../../node_modules/react-monday/src/Context.js\");\n/* harmony import */ var _lib_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/reducer */ \"../../node_modules/react-monday/src/lib/reducer.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/middleware */ \"../../node_modules/react-monday/src/lib/middleware.js\");\n/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/types */ \"../../node_modules/react-monday/src/lib/types.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/Provider.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* --- Global --- */\n\n\n/* --- Local --- */\n\n\n\n\n\n\n/**\n * @function Provider\n * @param {Array<React.Component>} children\n * @param {String} url\n * @param {String} token\n */\n\nvar Provider = function Provider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      url = _ref.url,\n      token = _ref.token,\n      devMode = _ref.devMode;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(_lib_reducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _Context__WEBPACK_IMPORTED_MODULE_6__[\"initialState\"]),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (devMode) {\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"ENABLE_DEV_MODE\"]\n      });\n    }\n\n    if (!url && token) {\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"AUTHORIZE_CLIENT\"],\n        payload: {\n          token: token\n        }\n      });\n    }\n\n    if (url && token) {\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"CONNECT_CLIENT\"],\n        payload: {\n          url: url,\n          token: token\n        }\n      });\n    }\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (state.token) {\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"AUTHORIZE_CLIENT\"],\n        payload: {\n          token: token\n        }\n      });\n    }\n  }, [state.token]);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var _token;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // Client-side-only code\n            if (true) {\n              if (window.localStorage) {\n                _token = window.localStorage.getItem(\"token\");\n              }\n\n              if (token) {\n                dispatch({\n                  type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"AUTHORIZE_CLIENT\"],\n                  payload: {\n                    token: token\n                  }\n                });\n              }\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [state.isDevMode]);\n  var isClientAuthorized = state.isClientAuthorized;\n  var actions = Object(_lib_middleware__WEBPACK_IMPORTED_MODULE_8__[\"enhanceActions\"])(_actions__WEBPACK_IMPORTED_MODULE_5__, state, dispatch);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(state, \"monday state\");\n  }, [state]);\n  return __jsx(graphql_hooks__WEBPACK_IMPORTED_MODULE_4__[\"ClientContext\"].Provider, {\n    value: state.client,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, __jsx(_Context__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n    value: _objectSpread(_objectSpread({}, actions), state),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(Provider, \"81pqpS0eGDTuWtP5MiWW4YsLtMY=\");\n\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\n\nvar _c;\n\n$RefreshReg$(_c, \"Provider\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL2VzZW5jZS93b3Jrb3MtbmV0d29yay1tb25vcmVwby9ub2RlX21vZHVsZXMvcmVhY3QtbW9uZGF5L3NyYy9Qcm92aWRlci5qc3g/NWVhOCJdLCJuYW1lcyI6WyJQcm92aWRlciIsImNoaWxkcmVuIiwidXJsIiwidG9rZW4iLCJkZXZNb2RlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU5BQkxFX0RFVl9NT0RFIiwiQVVUSE9SSVpFX0NMSUVOVCIsInBheWxvYWQiLCJDT05ORUNUX0NMSUVOVCIsInVzZU1lbW8iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaXNEZXZNb2RlIiwiaXNDbGllbnRBdXRob3JpemVkIiwiYWN0aW9ucyIsImVuaGFuY2VBY3Rpb25zIiwiYWN0aW9uTGlzdCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVDO0FBQUE7O0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTFCQyxHQUEwQixRQUExQkEsR0FBMEI7QUFBQSxNQUFyQkMsS0FBcUIsUUFBckJBLEtBQXFCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjOztBQUFBLG9CQUM1QkMsd0RBQVUsQ0FBQ0Msb0RBQUQsRUFBVUMscURBQVYsQ0FEa0I7QUFBQSxNQUMvQ0MsS0FEK0M7QUFBQSxNQUN4Q0MsUUFEd0M7O0FBR3REQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSVAsT0FBSixFQUFhO0FBQ1hLLGNBQVEsQ0FBQztBQUNQRyxZQUFJLEVBQUVDLDBEQUFlQTtBQURkLE9BQUQsQ0FBUjtBQUdEOztBQUNELFFBQUksQ0FBQ1gsR0FBRCxJQUFRQyxLQUFaLEVBQW1CO0FBQ2pCTSxjQUFRLENBQUM7QUFDUEcsWUFBSSxFQUFFRSwyREFEQztBQUVQQyxlQUFPLEVBQUU7QUFBRVosZUFBSyxFQUFMQTtBQUFGO0FBRkYsT0FBRCxDQUFSO0FBSUQ7O0FBQ0QsUUFBSUQsR0FBRyxJQUFJQyxLQUFYLEVBQWtCO0FBQ2hCTSxjQUFRLENBQUM7QUFDUEcsWUFBSSxFQUFFSSx5REFEQztBQUVQRCxlQUFPLEVBQUU7QUFDUGIsYUFBRyxFQUFIQSxHQURPO0FBRVBDLGVBQUssRUFBTEE7QUFGTztBQUZGLE9BQUQsQ0FBUjtBQU9EO0FBQ0YsR0FyQkQsRUFxQkcsRUFyQkg7QUF1QkFPLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJSCxLQUFLLENBQUNMLEtBQVYsRUFBaUI7QUFDZk0sY0FBUSxDQUFDO0FBQ1BHLFlBQUksRUFBRUUsMkRBREM7QUFFUEMsZUFBTyxFQUFFO0FBQUVaLGVBQUssRUFBTEE7QUFBRjtBQUZGLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FQRCxFQU9HLENBQUNLLEtBQUssQ0FBQ0wsS0FBUCxDQVBIO0FBU0FPLDhDQUFLLENBQUNPLE9BQU4sZ01BQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaO0FBQ0Esc0JBQXFCO0FBQ25CLGtCQUFJQyxNQUFNLENBQUNDLFlBQVgsRUFBeUI7QUFDakJoQixzQkFEaUIsR0FDVGUsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQURTO0FBRXhCOztBQUNELGtCQUFJakIsS0FBSixFQUFXO0FBQ1RNLHdCQUFRLENBQUM7QUFDUEcsc0JBQUksRUFBRUUsMkRBREM7QUFFUEMseUJBQU8sRUFBRTtBQUFFWix5QkFBSyxFQUFMQTtBQUFGO0FBRkYsaUJBQUQsQ0FBUjtBQUlEO0FBQ0Y7O0FBWlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZCxJQWFHLENBQUNLLEtBQUssQ0FBQ2EsU0FBUCxDQWJIO0FBbkNzRCxNQWtEOUNDLGtCQWxEOEMsR0FrRHZCZCxLQWxEdUIsQ0FrRDlDYyxrQkFsRDhDO0FBbUR0RCxNQUFNQyxPQUFPLEdBQUdDLHNFQUFjLENBQUNDLHFDQUFELEVBQWFqQixLQUFiLEVBQW9CQyxRQUFwQixDQUE5QjtBQUVBQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZbkIsS0FBWixFQUFtQixjQUFuQjtBQUNELEdBRkQsRUFFRyxDQUFDQSxLQUFELENBRkg7QUFJQSxTQUNFLE1BQUMsMkRBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRUEsS0FBSyxDQUFDb0IsTUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQsQ0FBUyxRQUFUO0FBQ0UsU0FBSyxrQ0FDQUwsT0FEQSxHQUVBZixLQUZBLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1HUCxRQU5ILENBREYsQ0FERjtBQVlELENBckVEOztHQUFNRCxROztLQUFBQSxRO0FBdUVTQSx1RUFBZiIsImZpbGUiOiIuLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9uZGF5L3NyYy9Qcm92aWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gR2xvYmFsIC0tLSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQsIENsaWVudENvbnRleHQgfSBmcm9tIFwiZ3JhcGhxbC1ob29rc1wiO1xuXG4vKiAtLS0gTG9jYWwgLS0tICovXG5pbXBvcnQgKiBhcyBhY3Rpb25MaXN0IGZyb20gXCIuL2FjdGlvbnNcIjtcbmltcG9ydCBDb250ZXh0LCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuL0NvbnRleHRcIjtcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuL2xpYi9yZWR1Y2VyXCI7XG5pbXBvcnQgeyBlbmhhbmNlQWN0aW9ucyB9IGZyb20gXCIuL2xpYi9taWRkbGV3YXJlXCI7XG5pbXBvcnQgeyBBVVRIT1JJWkVfQ0xJRU5ULCBFTkFCTEVfREVWX01PREUsIENPTk5FQ1RfQ0xJRU5UIH0gZnJvbSBcIi4vbGliL3R5cGVzXCI7XG5cbi8qKlxuICogQGZ1bmN0aW9uIFByb3ZpZGVyXG4gKiBAcGFyYW0ge0FycmF5PFJlYWN0LkNvbXBvbmVudD59IGNoaWxkcmVuXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge1N0cmluZ30gdG9rZW5cbiAqL1xuY29uc3QgUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgdXJsLCB0b2tlbiwgZGV2TW9kZSB9KSA9PiB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRldk1vZGUpIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogRU5BQkxFX0RFVl9NT0RFLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICghdXJsICYmIHRva2VuKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IEFVVEhPUklaRV9DTElFTlQsXG4gICAgICAgIHBheWxvYWQ6IHsgdG9rZW4gfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodXJsICYmIHRva2VuKSB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IENPTk5FQ1RfQ0xJRU5ULFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIHRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUudG9rZW4pIHtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogQVVUSE9SSVpFX0NMSUVOVCxcbiAgICAgICAgcGF5bG9hZDogeyB0b2tlbiB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc3RhdGUudG9rZW5dKTtcblxuICBSZWFjdC51c2VNZW1vKGFzeW5jICgpID0+IHtcbiAgICAvLyBDbGllbnQtc2lkZS1vbmx5IGNvZGVcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBBVVRIT1JJWkVfQ0xJRU5ULFxuICAgICAgICAgIHBheWxvYWQ6IHsgdG9rZW4gfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbc3RhdGUuaXNEZXZNb2RlXSk7XG5cbiAgY29uc3QgeyBpc0NsaWVudEF1dGhvcml6ZWQgfSA9IHN0YXRlO1xuICBjb25zdCBhY3Rpb25zID0gZW5oYW5jZUFjdGlvbnMoYWN0aW9uTGlzdCwgc3RhdGUsIGRpc3BhdGNoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlLCBcIm1vbmRheSBzdGF0ZVwiKTtcbiAgfSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGUuY2xpZW50fT5cbiAgICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgLi4uYWN0aW9ucyxcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2xpZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/react-monday/src/Provider.jsx\n");

/***/ })

})