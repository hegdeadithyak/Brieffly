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

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ \"./src/pages/card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchQuestions = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/formulas\", {\n                    chapterName: \"Integration\"\n                });\n                // Normalize the 'Options' key to 'options' and update the state\n                if (response.data && Array.isArray(response.data.questions)) {\n                    const formattedQuestions = response.data.questions.map((q)=>({\n                            ...q,\n                            options: q.Options\n                        }));\n                    setQuestions(formattedQuestions);\n                } else {\n                    setError(\"Invalid data format from API\");\n                }\n            } catch (error) {\n                setError(error.message);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchQuestions();\n    }, []);\n    // Handle loading state\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/home.tsx\",\n        lineNumber: 46,\n        columnNumber: 23\n    }, undefined);\n    // Handle error state\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\n            \"Error: \",\n            error\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/home.tsx\",\n        lineNumber: 49,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"IIT JEE Mathematical Formulas Quiz\"\n            }, void 0, false, {\n                fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/home.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            questions.map((question, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    level: question.level,\n                    title: question.title,\n                    options: question.options,\n                    answer: question.answer\n                }, index, false, {\n                    fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/home.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hegdeadithyak/Documents/GitHub/Brieffly/src/pages/home.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"WUsELgM7HPnM2MO/4+fW4oQbMK8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFDQTtBQVUxQixNQUFNSSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBYSxFQUFFO0lBQ3pELE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQWdCO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGlCQUFpQjtZQUNyQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLElBQUksQ0FBQyxpQkFBaUI7b0JBQ2pEQyxhQUFhO2dCQUNmO2dCQUVBLGdFQUFnRTtnQkFDaEUsSUFBSUYsU0FBU0csSUFBSSxJQUFJQyxNQUFNQyxPQUFPLENBQUNMLFNBQVNHLElBQUksQ0FBQ1YsU0FBUyxHQUFHO29CQUMzRCxNQUFNYSxxQkFBcUJOLFNBQVNHLElBQUksQ0FBQ1YsU0FBUyxDQUFDYyxHQUFHLENBQUMsQ0FBQ0MsSUFBWTs0QkFDbEUsR0FBR0EsQ0FBQzs0QkFDSkMsU0FBU0QsRUFBRUUsT0FBTzt3QkFDcEI7b0JBQ0FoQixhQUFhWTtnQkFDZixPQUFPO29CQUNMUixTQUFTO2dCQUNYO1lBQ0YsRUFBRSxPQUFPRCxPQUFZO2dCQUNuQkMsU0FBU0QsTUFBTWMsT0FBTztZQUN4QixTQUFVO2dCQUNSZixXQUFXO1lBQ2I7UUFDRjtRQUVBRztJQUNGLEdBQUcsRUFBRTtJQUVMLHVCQUF1QjtJQUN2QixJQUFJSixTQUFTLHFCQUFPLDhEQUFDaUI7a0JBQUU7Ozs7OztJQUV2QixxQkFBcUI7SUFDckIsSUFBSWYsT0FBTyxxQkFBTyw4REFBQ2U7O1lBQUU7WUFBUWY7Ozs7Ozs7SUFFN0IscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7WUFLdkNyQixVQUFVYyxHQUFHLENBQUMsQ0FBQ1MsVUFBVUMsc0JBQ3hCLDhEQUFDMUIsNkNBQUlBO29CQUVIMkIsT0FBT0YsU0FBU0UsS0FBSztvQkFDckJDLE9BQU9ILFNBQVNHLEtBQUs7b0JBQ3JCVixTQUFTTyxTQUFTUCxPQUFPO29CQUN6QlcsUUFBUUosU0FBU0ksTUFBTTttQkFKbEJIOzs7Ozs7Ozs7OztBQVNmO0dBeERNekI7S0FBQUE7QUEwRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4PzkyZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vLyBEZWZpbmUgdGhlIHF1ZXN0aW9uIGludGVyZmFjZVxuaW50ZXJmYWNlIFF1ZXN0aW9uIHtcbiAgbGV2ZWw6IHN0cmluZzsgLy8gQ2hhbmdlZCBmcm9tIG51bWJlciB0byBzdHJpbmcgdG8gbWF0Y2ggdGhlIGRhdGFcbiAgdGl0bGU6IHN0cmluZztcbiAgb3B0aW9uczogc3RyaW5nW107IC8vIEZpeGVkICdPcHRpb25zJyB0byAnb3B0aW9ucydcbiAgYW5zd2VyOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZTxRdWVzdGlvbltdPihbXSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2Zvcm11bGFzXCIsIHtcbiAgICAgICAgICBjaGFwdGVyTmFtZTogXCJJbnRlZ3JhdGlvblwiLFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIE5vcm1hbGl6ZSB0aGUgJ09wdGlvbnMnIGtleSB0byAnb3B0aW9ucycgYW5kIHVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgQXJyYXkuaXNBcnJheShyZXNwb25zZS5kYXRhLnF1ZXN0aW9ucykpIHtcbiAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRRdWVzdGlvbnMgPSByZXNwb25zZS5kYXRhLnF1ZXN0aW9ucy5tYXAoKHE6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnEsXG4gICAgICAgICAgICBvcHRpb25zOiBxLk9wdGlvbnMsIC8vIE5vcm1hbGl6ZSAnT3B0aW9ucycgdG8gJ29wdGlvbnMnXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIHNldFF1ZXN0aW9ucyhmb3JtYXR0ZWRRdWVzdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVycm9yKFwiSW52YWxpZCBkYXRhIGZvcm1hdCBmcm9tIEFQSVwiKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBzZXRFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFF1ZXN0aW9ucygpO1xuICB9LCBbXSk7XG5cbiAgLy8gSGFuZGxlIGxvYWRpbmcgc3RhdGVcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcblxuICAvLyBIYW5kbGUgZXJyb3Igc3RhdGVcbiAgaWYgKGVycm9yKSByZXR1cm4gPHA+RXJyb3I6IHtlcnJvcn08L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTRcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICBJSVQgSkVFIE1hdGhlbWF0aWNhbCBGb3JtdWxhcyBRdWl6XG4gICAgICA8L2gxPlxuXG4gICAgICB7LyogUmVuZGVyIHRoZSBxdWVzdGlvbnMgaWYgYXZhaWxhYmxlICovfVxuICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8Q2FyZFxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgbGV2ZWw9e3F1ZXN0aW9uLmxldmVsfVxuICAgICAgICAgIHRpdGxlPXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgICBvcHRpb25zPXtxdWVzdGlvbi5vcHRpb25zfVxuICAgICAgICAgIGFuc3dlcj17cXVlc3Rpb24uYW5zd2VyfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJDYXJkIiwiSG9tZSIsInF1ZXN0aW9ucyIsInNldFF1ZXN0aW9ucyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoUXVlc3Rpb25zIiwicmVzcG9uc2UiLCJwb3N0IiwiY2hhcHRlck5hbWUiLCJkYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9ybWF0dGVkUXVlc3Rpb25zIiwibWFwIiwicSIsIm9wdGlvbnMiLCJPcHRpb25zIiwibWVzc2FnZSIsInAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInF1ZXN0aW9uIiwiaW5kZXgiLCJsZXZlbCIsInRpdGxlIiwiYW5zd2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/home.tsx\n"));

/***/ })

});