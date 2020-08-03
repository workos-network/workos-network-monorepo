webpackHotUpdate_N_E("pages/_app",{

/***/ "../../node_modules/react-monday/src/Provider.jsx":
/*!***************************************************************************************************************!*\
  !*** /Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/Provider.jsx ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"../../node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-hooks */ \"../../node_modules/graphql-hooks/es/graphql-hooks.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions */ \"../../node_modules/react-monday/src/actions/index.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Context */ \"../../node_modules/react-monday/src/Context.js\");\n/* harmony import */ var _lib_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/reducer */ \"../../node_modules/react-monday/src/lib/reducer.js\");\n/* harmony import */ var _lib_middleware__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/middleware */ \"../../node_modules/react-monday/src/lib/middleware.js\");\n/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/types */ \"../../node_modules/react-monday/src/lib/types.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/Provider.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* --- Global --- */\n\n\n/* --- Local --- */\n\n\n\n\n\n\n/**\n * @function Provider\n * @param {Array<React.Component>} children\n * @param {String} url\n * @param {String} token\n */\n\nvar Provider = function Provider(_ref) {\n  _s();\n\n  var children = _ref.children,\n      url = _ref.url,\n      token = _ref.token,\n      devMode = _ref.devMode;\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(_lib_reducer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _Context__WEBPACK_IMPORTED_MODULE_6__[\"initialState\"]),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (devMode) {\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"ENABLE_DEV_MODE\"]\n      });\n    } // if (!url && token) {\n    //   dispatch({\n    //     type: AUTHORIZE_CLIENT,\n    //     payload: { token },\n    //   });\n    // }\n    // if (url && token) {\n    //   dispatch({\n    //     type: CONNECT_CLIENT,\n    //     payload: {\n    //       url,\n    //       token,\n    //     },\n    //   });\n    // }\n\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n    var _token;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (true) {\n              if (window.localStorage) {\n                _token = window.localStorage.getItem(\"token\");\n\n                if (_token) {\n                  dispatch({\n                    type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"SET_TOKEN\"],\n                    payload: {\n                      token: _token\n                    }\n                  });\n                }\n              }\n            }\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    if (state.token) {\n      console.log(state.token, \"state.token2\");\n      dispatch({\n        type: _lib_types__WEBPACK_IMPORTED_MODULE_9__[\"AUTHORIZE_CLIENT\"],\n        payload: {\n          token: state.token\n        }\n      });\n    }\n  }, [state.token]);\n  var actions = Object(_lib_middleware__WEBPACK_IMPORTED_MODULE_8__[\"enhanceActions\"])(_actions__WEBPACK_IMPORTED_MODULE_5__, state, dispatch);\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {\n    console.log(state, \"monday state\");\n  }, [state]);\n  return __jsx(graphql_hooks__WEBPACK_IMPORTED_MODULE_4__[\"ClientContext\"].Provider, {\n    value: state.client,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 5\n    }\n  }, __jsx(_Context__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Provider, {\n    value: _objectSpread(_objectSpread({}, actions), state),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(Provider, \"z/7hl/uhfAYWEZaIwKqXN6M8hpA=\");\n\n_c = Provider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\n\nvar _c;\n\n$RefreshReg$(_c, \"Provider\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL2VzZW5jZS93b3Jrb3MtbmV0d29yay1tb25vcmVwby9ub2RlX21vZHVsZXMvcmVhY3QtbW9uZGF5L3NyYy9Qcm92aWRlci5qc3g/NWVhOCJdLCJuYW1lcyI6WyJQcm92aWRlciIsImNoaWxkcmVuIiwidXJsIiwidG9rZW4iLCJkZXZNb2RlIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiRU5BQkxFX0RFVl9NT0RFIiwidXNlTWVtbyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJTRVRfVE9LRU4iLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIkFVVEhPUklaRV9DTElFTlQiLCJhY3Rpb25zIiwiZW5oYW5jZUFjdGlvbnMiLCJhY3Rpb25MaXN0IiwiY2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7Ozs7Ozs7QUFNQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1QztBQUFBOztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxvQkFDNUJDLHdEQUFVLENBQUNDLG9EQUFELEVBQVVDLHFEQUFWLENBRGtCO0FBQUEsTUFDL0NDLEtBRCtDO0FBQUEsTUFDeENDLFFBRHdDOztBQUd0REMsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlQLE9BQUosRUFBYTtBQUNYSyxjQUFRLENBQUM7QUFDUEcsWUFBSSxFQUFFQywwREFBZUE7QUFEZCxPQUFELENBQVI7QUFHRCxLQUxtQixDQU1wQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsR0FyQkQsRUFxQkcsRUFyQkg7QUF1QkFILDhDQUFLLENBQUNJLE9BQU4sZ01BQWM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaLHNCQUFxQjtBQUNuQixrQkFBSUMsTUFBTSxDQUFDQyxZQUFYLEVBQXlCO0FBQ2pCYixzQkFEaUIsR0FDVFksTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQURTOztBQUV2QixvQkFBSWQsTUFBSixFQUFXO0FBQ1RNLDBCQUFRLENBQUM7QUFDUEcsd0JBQUksRUFBRU0sb0RBREM7QUFFUEMsMkJBQU8sRUFBRTtBQUFFaEIsMkJBQUssRUFBTEE7QUFBRjtBQUZGLG1CQUFELENBQVI7QUFJRDtBQUNGO0FBQ0Y7O0FBWFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZCxJQVlHLEVBWkg7QUFjQU8sOENBQUssQ0FBQ0MsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlILEtBQUssQ0FBQ0wsS0FBVixFQUFpQjtBQUNmaUIsYUFBTyxDQUFDQyxHQUFSLENBQVliLEtBQUssQ0FBQ0wsS0FBbEIsRUFBeUIsY0FBekI7QUFDQU0sY0FBUSxDQUFDO0FBQ1BHLFlBQUksRUFBRVUsMkRBREM7QUFFUEgsZUFBTyxFQUFFO0FBQUVoQixlQUFLLEVBQUVLLEtBQUssQ0FBQ0w7QUFBZjtBQUZGLE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FSRCxFQVFHLENBQUNLLEtBQUssQ0FBQ0wsS0FBUCxDQVJIO0FBVUEsTUFBTW9CLE9BQU8sR0FBR0Msc0VBQWMsQ0FBQ0MscUNBQUQsRUFBYWpCLEtBQWIsRUFBb0JDLFFBQXBCLENBQTlCO0FBRUFDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQlMsV0FBTyxDQUFDQyxHQUFSLENBQVliLEtBQVosRUFBbUIsY0FBbkI7QUFDRCxHQUZELEVBRUcsQ0FBQ0EsS0FBRCxDQUZIO0FBSUEsU0FDRSxNQUFDLDJEQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUVBLEtBQUssQ0FBQ2tCLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFELENBQVMsUUFBVDtBQUNFLFNBQUssa0NBQ0FILE9BREEsR0FFQWYsS0FGQSxDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR1AsUUFOSCxDQURGLENBREY7QUFZRCxDQXBFRDs7R0FBTUQsUTs7S0FBQUEsUTtBQXNFU0EsdUVBQWYiLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vbmRheS9zcmMvUHJvdmlkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tIEdsb2JhbCAtLS0gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBDbGllbnRDb250ZXh0IH0gZnJvbSBcImdyYXBocWwtaG9va3NcIjtcblxuLyogLS0tIExvY2FsIC0tLSAqL1xuaW1wb3J0ICogYXMgYWN0aW9uTGlzdCBmcm9tIFwiLi9hY3Rpb25zXCI7XG5pbXBvcnQgQ29udGV4dCwgeyBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi9Db250ZXh0XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi9saWIvcmVkdWNlclwiO1xuaW1wb3J0IHsgZW5oYW5jZUFjdGlvbnMgfSBmcm9tIFwiLi9saWIvbWlkZGxld2FyZVwiO1xuaW1wb3J0IHtcbiAgQVVUSE9SSVpFX0NMSUVOVCxcbiAgRU5BQkxFX0RFVl9NT0RFLFxuICBDT05ORUNUX0NMSUVOVCxcbiAgU0VUX1RPS0VOLFxufSBmcm9tIFwiLi9saWIvdHlwZXNcIjtcblxuLyoqXG4gKiBAZnVuY3Rpb24gUHJvdmlkZXJcbiAqIEBwYXJhbSB7QXJyYXk8UmVhY3QuQ29tcG9uZW50Pn0gY2hpbGRyZW5cbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7U3RyaW5nfSB0b2tlblxuICovXG5jb25zdCBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCB1cmwsIHRva2VuLCBkZXZNb2RlIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGV2TW9kZSkge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBFTkFCTEVfREVWX01PREUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gaWYgKCF1cmwgJiYgdG9rZW4pIHtcbiAgICAvLyAgIGRpc3BhdGNoKHtcbiAgICAvLyAgICAgdHlwZTogQVVUSE9SSVpFX0NMSUVOVCxcbiAgICAvLyAgICAgcGF5bG9hZDogeyB0b2tlbiB9LFxuICAgIC8vICAgfSk7XG4gICAgLy8gfVxuICAgIC8vIGlmICh1cmwgJiYgdG9rZW4pIHtcbiAgICAvLyAgIGRpc3BhdGNoKHtcbiAgICAvLyAgICAgdHlwZTogQ09OTkVDVF9DTElFTlQsXG4gICAgLy8gICAgIHBheWxvYWQ6IHtcbiAgICAvLyAgICAgICB1cmwsXG4gICAgLy8gICAgICAgdG9rZW4sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcbiAgICAvLyB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VNZW1vKGFzeW5jICgpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBTRVRfVE9LRU4sXG4gICAgICAgICAgICBwYXlsb2FkOiB7IHRva2VuIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzdGF0ZS50b2tlbikge1xuICAgICAgY29uc29sZS5sb2coc3RhdGUudG9rZW4sIFwic3RhdGUudG9rZW4yXCIpO1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBBVVRIT1JJWkVfQ0xJRU5ULFxuICAgICAgICBwYXlsb2FkOiB7IHRva2VuOiBzdGF0ZS50b2tlbiB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc3RhdGUudG9rZW5dKTtcblxuICBjb25zdCBhY3Rpb25zID0gZW5oYW5jZUFjdGlvbnMoYWN0aW9uTGlzdCwgc3RhdGUsIGRpc3BhdGNoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHN0YXRlLCBcIm1vbmRheSBzdGF0ZVwiKTtcbiAgfSwgW3N0YXRlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2xpZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGUuY2xpZW50fT5cbiAgICAgIDxDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgLi4uYWN0aW9ucyxcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Db250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ2xpZW50Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../node_modules/react-monday/src/Provider.jsx\n");

/***/ })

})