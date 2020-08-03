webpackHotUpdate_N_E("pages/_app",{

/***/ "../../node_modules/react-monday/src/lib/reducer.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/lib/reducer.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"../../node_modules/react-monday/src/lib/types.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar reducerActions = function reducerActions(state, action) {\n  var type = action.type,\n      payload = action.payload;\n\n  switch (type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"ENABLE_DEV_MODE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isDevMode: true\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"DISABLE_DEV_MODE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isDevMode: false\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"SET_TOKEN\"]:\n      if (window.localStorage) {\n        console.log(\"setting token\", payload);\n        window.localStorage.setItem(\"token\", payload.token);\n      }\n\n      return _objectSpread(_objectSpread({}, state), {}, {\n        token: payload.token\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"AUTHORIZE_CLIENT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isClientAuthorized: true,\n        client: state.client.setHeader(\"Authorization\", payload.token)\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"CONNECT_CLIENT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        client: state.client.setHeader(\"Authorization\", payload.token)\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducerActions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL2VzZW5jZS93b3Jrb3MtbmV0d29yay1tb25vcmVwby9ub2RlX21vZHVsZXMvcmVhY3QtbW9uZGF5L3NyYy9saWIvcmVkdWNlci5qcz8yODc5Il0sIm5hbWVzIjpbInJlZHVjZXJBY3Rpb25zIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkVOQUJMRV9ERVZfTU9ERSIsImlzRGV2TW9kZSIsIkRJU0FCTEVfREVWX01PREUiLCJTRVRfVE9LRU4iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJjb25zb2xlIiwibG9nIiwic2V0SXRlbSIsInRva2VuIiwiQVVUSE9SSVpFX0NMSUVOVCIsImlzQ2xpZW50QXV0aG9yaXplZCIsImNsaWVudCIsInNldEhlYWRlciIsIkNPTk5FQ1RfQ0xJRU5UIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFRQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFBLE1BQ2hDQyxJQURnQyxHQUNkRCxNQURjLENBQ2hDQyxJQURnQztBQUFBLE1BQzFCQyxPQUQwQixHQUNkRixNQURjLENBQzFCRSxPQUQwQjs7QUFFeEMsVUFBUUQsSUFBUjtBQUNFLFNBQUtFLHNEQUFMO0FBQ0UsNkNBQ0tKLEtBREw7QUFFRUssaUJBQVMsRUFBRTtBQUZiOztBQUlGLFNBQUtDLHVEQUFMO0FBQ0UsNkNBQ0tOLEtBREw7QUFFRUssaUJBQVMsRUFBRTtBQUZiOztBQUlGLFNBQUtFLGdEQUFMO0FBQ0UsVUFBSUMsTUFBTSxDQUFDQyxZQUFYLEVBQXlCO0FBQ3ZCQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCUixPQUE3QjtBQUNBSyxjQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDVCxPQUFPLENBQUNVLEtBQTdDO0FBQ0Q7O0FBQ0QsNkNBQ0tiLEtBREw7QUFFRWEsYUFBSyxFQUFFVixPQUFPLENBQUNVO0FBRmpCOztBQUlGLFNBQUtDLHVEQUFMO0FBQ0UsNkNBQ0tkLEtBREw7QUFFRWUsMEJBQWtCLEVBQUUsSUFGdEI7QUFHRUMsY0FBTSxFQUFFaEIsS0FBSyxDQUFDZ0IsTUFBTixDQUFhQyxTQUFiLENBQXVCLGVBQXZCLEVBQXdDZCxPQUFPLENBQUNVLEtBQWhEO0FBSFY7O0FBS0YsU0FBS0sscURBQUw7QUFDRSw2Q0FDS2xCLEtBREw7QUFFRWdCLGNBQU0sRUFBRWhCLEtBQUssQ0FBQ2dCLE1BQU4sQ0FBYUMsU0FBYixDQUF1QixlQUF2QixFQUF3Q2QsT0FBTyxDQUFDVSxLQUFoRDtBQUZWOztBQUtGO0FBQ0UsYUFBT2IsS0FBUDtBQWpDSjtBQW1DRCxDQXJDRDs7QUF1Q2VELDZFQUFmIiwiZmlsZSI6Ii4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb25kYXkvc3JjL2xpYi9yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQVVUSE9SSVpFX0NMSUVOVCxcbiAgRU5BQkxFX0RFVl9NT0RFLFxuICBESVNBQkxFX0RFVl9NT0RFLFxuICBDT05ORUNUX0NMSUVOVCxcbiAgU0VUX1RPS0VOLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCByZWR1Y2VyQWN0aW9ucyA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIGNvbnN0IHsgdHlwZSwgcGF5bG9hZCB9ID0gYWN0aW9uO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIEVOQUJMRV9ERVZfTU9ERTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0Rldk1vZGU6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgRElTQUJMRV9ERVZfTU9ERTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0Rldk1vZGU6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIFNFVF9UT0tFTjpcbiAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyB0b2tlblwiLCBwYXlsb2FkKTtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcGF5bG9hZC50b2tlbik7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdG9rZW46IHBheWxvYWQudG9rZW4sXG4gICAgICB9O1xuICAgIGNhc2UgQVVUSE9SSVpFX0NMSUVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0NsaWVudEF1dGhvcml6ZWQ6IHRydWUsXG4gICAgICAgIGNsaWVudDogc3RhdGUuY2xpZW50LnNldEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgcGF5bG9hZC50b2tlbiksXG4gICAgICB9O1xuICAgIGNhc2UgQ09OTkVDVF9DTElFTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2xpZW50OiBzdGF0ZS5jbGllbnQuc2V0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBwYXlsb2FkLnRva2VuKSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyQWN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../node_modules/react-monday/src/lib/reducer.js\n");

/***/ })

})