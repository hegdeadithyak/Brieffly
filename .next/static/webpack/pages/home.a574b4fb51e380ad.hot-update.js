"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/pages/card.tsx":
/*!****************************!*\
  !*** ./src/pages/card.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Card = (param)=>{\n    let { question } = param;\n    const { level, title, options, answer } = question;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-4 mb-4 w-full max-w-md rounded shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-semibold mb-2\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-600\",\n                children: [\n                    \"Level: \",\n                    level\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"list-disc pl-5 mt-2 mb-4\",\n                children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"text-sm text-gray-800\",\n                        children: option\n                    }, index, false, {\n                        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-green-600 font-bold\",\n                children: [\n                    \"Correct Answer: \",\n                    answer\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFXMUIsTUFBTUMsT0FBZ0M7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDakQsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR0o7SUFFMUMscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBOEJKOzs7Ozs7MEJBQzVDLDhEQUFDTTtnQkFBRUYsV0FBVTs7b0JBQXdCO29CQUFRTDs7Ozs7OzswQkFFN0MsOERBQUNRO2dCQUFHSCxXQUFVOzBCQUNYSCxRQUFRTyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3BCLDhEQUFDQzt3QkFBZVAsV0FBVTtrQ0FDdkJLO3VCQURNQzs7Ozs7Ozs7OzswQkFNYiw4REFBQ0o7Z0JBQUVGLFdBQVU7O29CQUFtQztvQkFBaUJGOzs7Ozs7Ozs7Ozs7O0FBR3ZFO0tBbkJNTDtBQXFCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2FyZC50c3g/NTk3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBRdWVzdGlvblByb3BzIHtcbiAgcXVlc3Rpb246IHtcbiAgICBsZXZlbDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgYW5zd2VyOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IENhcmQ6IFJlYWN0LkZDPFF1ZXN0aW9uUHJvcHM+ID0gKHsgcXVlc3Rpb24gfSkgPT4ge1xuICBjb25zdCB7IGxldmVsLCB0aXRsZSwgb3B0aW9ucywgYW5zd2VyIH0gPSBxdWVzdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCBtYi00IHctZnVsbCBtYXgtdy1tZCByb3VuZGVkIHNoYWRvdy1tZFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+e3RpdGxlfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5MZXZlbDoge2xldmVsfTwvcD5cblxuICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC01IG10LTIgbWItNFwiPlxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktODAwXCI+XG4gICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyZWVuLTYwMCBmb250LWJvbGRcIj5Db3JyZWN0IEFuc3dlcjoge2Fuc3dlcn08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInF1ZXN0aW9uIiwibGV2ZWwiLCJ0aXRsZSIsIm9wdGlvbnMiLCJhbnN3ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJ1bCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/card.tsx\n"));

/***/ })

});