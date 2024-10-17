"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/card",{

/***/ "./src/pages/card.tsx":
/*!****************************!*\
  !*** ./src/pages/card.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Card = (param)=>{\n    let { level, title, options, answer } = param;\n    _s();\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isCorrect, setIsCorrect] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedOption !== null) {\n            const timer = setTimeout(()=>{\n                setSelectedOption(null);\n                setIsCorrect(null);\n            }, 2000);\n            return ()=>clearTimeout(timer);\n        }\n    }, [\n        selectedOption\n    ]);\n    const handleOptionClick = (option)=>{\n        setSelectedOption(option);\n        setIsCorrect(option === answer);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-4 rounded-lg shadow-md bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-semibold\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm text-gray-500\",\n                children: [\n                    \"Level: \",\n                    level\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-2\",\n                children: options.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleOptionClick(String.fromCharCode(65 + index)),\n                        className: \"cursor-pointer p-2 my-1 rounded \".concat(selectedOption === String.fromCharCode(65 + index) ? isCorrect ? \"bg-green-200\" : \"bg-red-200\" : \"bg-gray-100 hover:bg-gray-200\"),\n                        children: [\n                            String.fromCharCode(65 + index),\n                            \") \",\n                            option\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, undefined),\n            selectedOption && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-2\",\n                children: isCorrect ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-green-600 font-bold\",\n                    children: \"Correct!\"\n                }, void 0, false, {\n                    fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 15\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-red-600 font-bold\",\n                    children: \"Incorrect!\"\n                }, void 0, false, {\n                    fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n                lineNumber: 50,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/card.tsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Card, \"2+z/Pc+PCtzu4KzGFESQnl/l7uw=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBUzFDLE1BQU1FLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQWE7O0lBQ3hELE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQWdCO0lBQ3BFLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBaUI7SUFDM0RDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sbUJBQW1CLE1BQU07WUFDM0IsTUFBTUksUUFBUUMsV0FBVztnQkFDdkJKLGtCQUFrQjtnQkFDbEJFLGFBQWE7WUFDZixHQUFHO1lBRUgsT0FBTyxJQUFNRyxhQUFhRjtRQUM1QjtJQUNGLEdBQUc7UUFBQ0o7S0FBZTtJQUNuQixNQUFNTyxvQkFBb0IsQ0FBQ0M7UUFDekJQLGtCQUFrQk87UUFDbEJMLGFBQWFLLFdBQVdUO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUJiOzs7Ozs7MEJBQ3ZDLDhEQUFDZTtnQkFBRUYsV0FBVTs7b0JBQXdCO29CQUFRZDs7Ozs7OzswQkFDN0MsOERBQUNpQjtnQkFBR0gsV0FBVTswQkFDWFosUUFBUWdCLEdBQUcsQ0FBQyxDQUFDTixRQUFRTyxzQkFDcEIsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1WLGtCQUFrQlcsT0FBT0MsWUFBWSxDQUFDLEtBQUtKO3dCQUMxREwsV0FBVyxtQ0FNVixPQUxDVixtQkFBbUJrQixPQUFPQyxZQUFZLENBQUMsS0FBS0osU0FDeENiLFlBQ0UsaUJBQ0EsZUFDRjs7NEJBR0xnQixPQUFPQyxZQUFZLENBQUMsS0FBS0o7NEJBQU87NEJBQUdQOzt1QkFWL0JPOzs7Ozs7Ozs7O1lBY1ZmLGdDQUNDLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDWlIsMEJBQ0MsOERBQUNrQjtvQkFBS1YsV0FBVTs4QkFBMkI7Ozs7OzhDQUUzQyw4REFBQ1U7b0JBQUtWLFdBQVU7OEJBQXlCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQWxETWY7S0FBQUE7QUFvRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NhcmQudHN4PzU5NzQiXSwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcblxuICBpbnRlcmZhY2UgQ2FyZFByb3BzIHtcbiAgICBsZXZlbDogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgb3B0aW9uczogc3RyaW5nW107XG4gICAgYW5zd2VyOiBzdHJpbmc7XG4gIH1cblxuICBjb25zdCBDYXJkID0gKHsgbGV2ZWwsIHRpdGxlLCBvcHRpb25zLCBhbnN3ZXIgfTogQ2FyZFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBbaXNDb3JyZWN0LCBzZXRJc0NvcnJlY3RdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRPcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTZWxlY3RlZE9wdGlvbihudWxsKTtcbiAgICAgICAgICBzZXRJc0NvcnJlY3QobnVsbCk7XG4gICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0sIFtzZWxlY3RlZE9wdGlvbl0pO1xuICAgIGNvbnN0IGhhbmRsZU9wdGlvbkNsaWNrID0gKG9wdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICBzZXRTZWxlY3RlZE9wdGlvbihvcHRpb24pO1xuICAgICAgc2V0SXNDb3JyZWN0KG9wdGlvbiA9PT0gYW5zd2VyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtNCByb3VuZGVkLWxnIHNoYWRvdy1tZCBiZy13aGl0ZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+e3RpdGxlfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkxldmVsOiB7bGV2ZWx9PC9wPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wdGlvbkNsaWNrKFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleCkpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BjdXJzb3ItcG9pbnRlciBwLTIgbXktMSByb3VuZGVkICR7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24gPT09IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleClcbiAgICAgICAgICAgICAgICAgID8gaXNDb3JyZWN0XG4gICAgICAgICAgICAgICAgICAgID8gJ2JnLWdyZWVuLTIwMCdcbiAgICAgICAgICAgICAgICAgICAgOiAnYmctcmVkLTIwMCdcbiAgICAgICAgICAgICAgICAgIDogJ2JnLWdyYXktMTAwIGhvdmVyOmJnLWdyYXktMjAwJ1xuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleCl9KSB7b3B0aW9ufVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge3NlbGVjdGVkT3B0aW9uICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgIHtpc0NvcnJlY3QgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwIGZvbnQtYm9sZFwiPkNvcnJlY3QhPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGZvbnQtYm9sZFwiPkluY29ycmVjdCE8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsImxldmVsIiwidGl0bGUiLCJvcHRpb25zIiwiYW5zd2VyIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImlzQ29ycmVjdCIsInNldElzQ29ycmVjdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZU9wdGlvbkNsaWNrIiwib3B0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwib25DbGljayIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/card.tsx\n"));

/***/ })

});