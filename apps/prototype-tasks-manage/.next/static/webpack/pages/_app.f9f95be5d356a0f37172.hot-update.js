webpackHotUpdate_N_E("pages/_app",{

/***/ "../../node_modules/react-monday/src/hooks/useItemsQuery.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/admin/Documents/GitHub/esence/workos-network-monorepo/node_modules/react-monday/src/hooks/useItemsQuery.js ***!
  \*************************************************************************************************************************/
/*! exports provided: ITEMS_QUERY_REQUEST, ITEMS_QUERY_SUCCESS, ITEMS_QUERY_FAILURE, useItemsQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITEMS_QUERY_REQUEST\", function() { return ITEMS_QUERY_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITEMS_QUERY_SUCCESS\", function() { return ITEMS_QUERY_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITEMS_QUERY_FAILURE\", function() { return ITEMS_QUERY_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useItemsQuery\", function() { return useItemsQuery; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"../../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _withContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../withContext */ \"../../node_modules/react-monday/src/withContext.js\");\n/* harmony import */ var _lib_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/graphql */ \"../../node_modules/react-monday/src/lib/graphql/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/* --- Global --- */\n\n\n\nvar ITEMS_QUERY_REQUEST = \"ITEMS_QUERY_REQUEST\";\nvar ITEMS_QUERY_SUCCESS = \"ITEMS_QUERY_SUCCESS\";\nvar ITEMS_QUERY_FAILURE = \"ITEMS_QUERY_FAILURE\";\n/**\n * @name useItemsQuery\n * @param {Integer} limit\n * @param {Integer} page\n */\n\nvar useItemsQuery = function useItemsQuery(_ref) {\n  _s();\n\n  var limit = _ref.limit,\n      page = _ref.page;\n  var monday = Object(_withContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      Set = _React$useState2[1];\n\n  var initialState = {\n    data: undefined,\n    error: undefined,\n    loading: false\n  };\n\n  function reducer(state, action) {\n    switch (action.type) {\n      case ITEMS_QUERY_REQUEST:\n        return _objectSpread(_objectSpread({}, state), {}, {\n          loading: true\n        });\n\n      case ITEMS_QUERY_SUCCESS:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      case ITEMS_QUERY_FAILURE:\n        return _objectSpread(_objectSpread({}, state), {}, {\n          error: action.payload\n        });\n\n      default:\n        throw new Error();\n    }\n  }\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useReducer\"])(reducer, initialState),\n      state = _useReducer[0],\n      dispatch = _useReducer[1];\n  /* ------------------- */\n  // Actions\n\n  /* ------------------- */\n\n\n  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function (inputs) {\n    if (state.loading) {\n      console.log(\"requesting\");\n\n      if (monday.client && monday.isClientAuthorized) {\n        monday.client.request({\n          query: _lib_graphql__WEBPACK_IMPORTED_MODULE_5__[\"ITEMS_QUERY\"],\n          variables: {\n            limit: 35 // page: inputs.page\n\n          }\n        }).then(function (_ref2) {\n          var data = _ref2.data,\n              error = _ref2.error;\n          dispatch({\n            type: ITEMS_QUERY_SUCCESS,\n            payload: {\n              data: data.items,\n              error: error\n            }\n          });\n        })[\"catch\"](function (_ref3) {\n          var data = _ref3.data,\n              error = _ref3.error,\n              rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref3, [\"data\", \"error\"]);\n\n          console.log(data, error, rest, \"data, error\");\n          dispatch({\n            type: ITEMS_QUERY_FAILURE,\n            payload: error\n          });\n        });\n      }\n    }\n  }, [state.loading, monday.client, monday.isClientAuthorized]);\n\n  var request = function request(inputs) {\n    return dispatch({\n      type: ITEMS_QUERY_REQUEST,\n      payload: inputs\n    });\n  }; // const { loading, error, data, refetch, subscribeToMore } = useQuery(\n  //   ITEMS_QUERY,\n  //   {\n  //     variables: {\n  //       limit: 30,\n  //       page: 1\n  //     }\n  //   }\n  // );\n\n\n  return {\n    request: request,\n    data: state.data,\n    loading: state.loading,\n    error: state.error,\n    refetch: request\n  };\n};\n\n_s(useItemsQuery, \"Xc3uEYG0SCKz8YbF8zyo9W5V9P4=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useItemsQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvR2l0SHViL2VzZW5jZS93b3Jrb3MtbmV0d29yay1tb25vcmVwby9ub2RlX21vZHVsZXMvcmVhY3QtbW9uZGF5L3NyYy9ob29rcy91c2VJdGVtc1F1ZXJ5LmpzPzcxMTAiXSwibmFtZXMiOlsiSVRFTVNfUVVFUllfUkVRVUVTVCIsIklURU1TX1FVRVJZX1NVQ0NFU1MiLCJJVEVNU19RVUVSWV9GQUlMVVJFIiwidXNlSXRlbXNRdWVyeSIsImxpbWl0IiwicGFnZSIsIm1vbmRheSIsIndpdGhNb25kYXkiLCJSZWFjdCIsInVzZVN0YXRlIiwiU2V0IiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsInVuZGVmaW5lZCIsImVycm9yIiwibG9hZGluZyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJpbnB1dHMiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiaXNDbGllbnRBdXRob3JpemVkIiwicmVxdWVzdCIsInF1ZXJ5IiwiSVRFTVNfUVVFUlkiLCJ2YXJpYWJsZXMiLCJ0aGVuIiwiaXRlbXMiLCJyZXN0IiwicmVmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBRVA7Ozs7OztBQUtPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0MsNERBQVUsRUFBekI7O0FBRGdELHdCQUVoQ0MsNENBQUss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Q0EvRk07O0dBQU0zQixhOztBQWlHRUEsNEVBQWYiLCJmaWxlIjoiLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vbmRheS9zcmMvaG9va3MvdXNlSXRlbXNRdWVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLSBHbG9iYWwgLS0tICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhNb25kYXkgZnJvbSBcIi4uL3dpdGhDb250ZXh0XCI7XG5pbXBvcnQgeyBJVEVNU19RVUVSWSB9IGZyb20gXCIuLi9saWIvZ3JhcGhxbFwiO1xuXG5leHBvcnQgY29uc3QgSVRFTVNfUVVFUllfUkVRVUVTVCA9IFwiSVRFTVNfUVVFUllfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IElURU1TX1FVRVJZX1NVQ0NFU1MgPSBcIklURU1TX1FVRVJZX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBJVEVNU19RVUVSWV9GQUlMVVJFID0gXCJJVEVNU19RVUVSWV9GQUlMVVJFXCI7XG5cbi8qKlxuICogQG5hbWUgdXNlSXRlbXNRdWVyeVxuICogQHBhcmFtIHtJbnRlZ2VyfSBsaW1pdFxuICogQHBhcmFtIHtJbnRlZ2VyfSBwYWdlXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VJdGVtc1F1ZXJ5ID0gKHsgbGltaXQsIHBhZ2UgfSkgPT4ge1xuICBjb25zdCBtb25kYXkgPSB3aXRoTW9uZGF5KCk7XG4gIGNvbnN0IFssIFNldF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZGF0YTogdW5kZWZpbmVkLFxuICAgIGVycm9yOiB1bmRlZmluZWQsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gIH07XG5cbiAgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBJVEVNU19RVUVSWV9SRVFVRVNUOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgIH07XG4gICAgICBjYXNlIElURU1TX1FVRVJZX1NVQ0NFU1M6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH07XG4gICAgICBjYXNlIElURU1TX1FVRVJZX0ZBSUxVUkU6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICB9O1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIC8vIEFjdGlvbnNcbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBSZWFjdC51c2VFZmZlY3QoXG4gICAgKGlucHV0cykgPT4ge1xuICAgICAgaWYgKHN0YXRlLmxvYWRpbmcpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0aW5nXCIpO1xuICAgICAgICBpZiAobW9uZGF5LmNsaWVudCAmJiBtb25kYXkuaXNDbGllbnRBdXRob3JpemVkKSB7XG4gICAgICAgICAgbW9uZGF5LmNsaWVudFxuICAgICAgICAgICAgLnJlcXVlc3Qoe1xuICAgICAgICAgICAgICBxdWVyeTogSVRFTVNfUVVFUlksXG4gICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGxpbWl0OiAzNSxcbiAgICAgICAgICAgICAgICAvLyBwYWdlOiBpbnB1dHMucGFnZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IElURU1TX1FVRVJZX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YS5pdGVtcyxcbiAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoeyBkYXRhLCBlcnJvciwgLi4ucmVzdCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIGVycm9yLCByZXN0LCBcImRhdGEsIGVycm9yXCIpO1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogSVRFTVNfUVVFUllfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvcixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3N0YXRlLmxvYWRpbmcsIG1vbmRheS5jbGllbnQsIG1vbmRheS5pc0NsaWVudEF1dGhvcml6ZWRdXG4gICk7XG5cbiAgY29uc3QgcmVxdWVzdCA9IChpbnB1dHMpID0+XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSVRFTVNfUVVFUllfUkVRVUVTVCxcbiAgICAgIHBheWxvYWQ6IGlucHV0cyxcbiAgICB9KTtcblxuICAvLyBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCByZWZldGNoLCBzdWJzY3JpYmVUb01vcmUgfSA9IHVzZVF1ZXJ5KFxuICAvLyAgIElURU1TX1FVRVJZLFxuICAvLyAgIHtcbiAgLy8gICAgIHZhcmlhYmxlczoge1xuICAvLyAgICAgICBsaW1pdDogMzAsXG4gIC8vICAgICAgIHBhZ2U6IDFcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICk7XG5cbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0LFxuICAgIGRhdGE6IHN0YXRlLmRhdGEsXG4gICAgbG9hZGluZzogc3RhdGUubG9hZGluZyxcbiAgICBlcnJvcjogc3RhdGUuZXJyb3IsXG4gICAgcmVmZXRjaDogcmVxdWVzdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUl0ZW1zUXVlcnk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../node_modules/react-monday/src/hooks/useItemsQuery.js\n");

/***/ })

})