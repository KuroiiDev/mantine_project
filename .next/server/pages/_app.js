"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mantine/core */ \"@mantine/core\");\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mantine/notifications */ \"@mantine/notifications\");\n/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst QueryClients = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({\n    defaultOptions: {\n        queries: {\n            refetchOnWindowFocus: false,\n            retry: 1,\n            cacheTime: 60 * 1000,\n            staleTime: 0 * 10 * 1000 // 0seconds\n        }\n    }\n});\nfunction App(props) {\n    const { Component, pageProps } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Page title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.MantineProvider, {\n                withGlobalStyles: true,\n                withNormalizeCSS: true,\n                theme: {\n                    /** Put your mantine theme override here */ colorScheme: \"light\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_notifications__WEBPACK_IMPORTED_MODULE_4__.Notifications, {}, void 0, false, {\n                        fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                        client: QueryClients,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                            state: pageProps.dehydratedState,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\$ Project UGM\\\\node\\\\web-app-ugm\\\\src\\\\pages\\\\_app.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNtQjtBQUtqQjtBQUN3QjtBQUV2RCxNQUFNTSxlQUFlLElBQUlILDhEQUFXQSxDQUFDO0lBQ25DSSxnQkFBZ0I7UUFDZEMsU0FBUztZQUNQQyxzQkFBc0I7WUFDdEJDLE9BQU87WUFDUEMsV0FBVyxLQUFLO1lBQ2hCQyxXQUFXLElBQUksS0FBSyxLQUFLLFdBQVc7UUFDdEM7SUFDRjtBQUNGO0FBR2UsU0FBU0MsSUFBSUMsS0FBSztJQUMvQixNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUdGO0lBRWpDLHFCQUNFOzswQkFDRSw4REFBQ2Qsa0RBQUlBOztrQ0FDSCw4REFBQ2lCO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDbkIsMERBQWVBO2dCQUNkb0IsZ0JBQWdCO2dCQUNoQkMsZ0JBQWdCO2dCQUNoQkMsT0FBTztvQkFDTCx5Q0FBeUMsR0FDekNDLGFBQWE7Z0JBQ2Y7O2tDQUVBLDhEQUFDbkIsaUVBQWFBOzs7OztrQ0FDZCw4REFBQ0Qsc0VBQW1CQTt3QkFBQ3FCLFFBQVFuQjtrQ0FDM0IsNEVBQUNKLDBEQUFPQTs0QkFBQ3dCLE9BQU9WLFVBQVVXLGVBQWU7c0NBQ3ZDLDRFQUFDWjtnQ0FBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAtMi8uL3NyYy9wYWdlcy9fYXBwLmpzPzhmZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgTWFudGluZVByb3ZpZGVyIH0gZnJvbSAnQG1hbnRpbmUvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgSHlkcmF0ZSxcclxuICBRdWVyeUNsaWVudCxcclxuICBRdWVyeUNsaWVudFByb3ZpZGVyLFxyXG59IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tICdAbWFudGluZS9ub3RpZmljYXRpb25zJztcclxuXHJcbmNvbnN0IFF1ZXJ5Q2xpZW50cyA9IG5ldyBRdWVyeUNsaWVudCh7XHJcbiAgZGVmYXVsdE9wdGlvbnM6IHtcclxuICAgIHF1ZXJpZXM6IHtcclxuICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxyXG4gICAgICByZXRyeTogMSxcclxuICAgICAgY2FjaGVUaW1lOiA2MCAqIDEwMDAsIC8vIDYwc2Vjb25kc1xyXG4gICAgICBzdGFsZVRpbWU6IDAgKiAxMCAqIDEwMDAgLy8gMHNlY29uZHNcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlBhZ2UgdGl0bGU8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPE1hbnRpbmVQcm92aWRlclxyXG4gICAgICAgIHdpdGhHbG9iYWxTdHlsZXNcclxuICAgICAgICB3aXRoTm9ybWFsaXplQ1NTXHJcbiAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgIC8qKiBQdXQgeW91ciBtYW50aW5lIHRoZW1lIG92ZXJyaWRlIGhlcmUgKi9cclxuICAgICAgICAgIGNvbG9yU2NoZW1lOiAnbGlnaHQnLFxyXG4gICAgICAgIH19XHJcbiAgICAgID4gXHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbnMgLz5cclxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e1F1ZXJ5Q2xpZW50c30+XHJcbiAgICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgIDwvSHlkcmF0ZT5cclxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIDwvTWFudGluZVByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJIZWFkIiwiTWFudGluZVByb3ZpZGVyIiwiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIk5vdGlmaWNhdGlvbnMiLCJRdWVyeUNsaWVudHMiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInJldHJ5IiwiY2FjaGVUaW1lIiwic3RhbGVUaW1lIiwiQXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIndpdGhHbG9iYWxTdHlsZXMiLCJ3aXRoTm9ybWFsaXplQ1NTIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImNsaWVudCIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "@mantine/core":
/*!********************************!*\
  !*** external "@mantine/core" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ "@mantine/notifications":
/*!*****************************************!*\
  !*** external "@mantine/notifications" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mantine/notifications");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();