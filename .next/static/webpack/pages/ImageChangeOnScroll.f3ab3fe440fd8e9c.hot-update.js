"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ImageChangeOnScroll",{

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageToggleOnScroll */ \"./src/ImageToggleOnScroll.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar ImageChangeOnScroll = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentSpeakerId = ref[0], setCurrentSpeakerId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), mouseEventCnt = ref1[0], setMouseEventCnt = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.document.title = \"SpeakerId: \".concat(currentSpeakerId);\n        console.log(\"useEffect: setting title to \".concat(currentSpeakerId));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"mouseEventCnt: \",\n                    mouseEventCnt\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dwagner/Library/Mobile Documents/com~apple~CloudDocs/Documents/pluralsightReactPath/using-react-hooks/pages/ImageChangeOnScroll.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            [\n                1124,\n                187,\n                823,\n                1269,\n                1530\n            ].map(function(speakerId) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onMouseOver: function() {\n                        setCurrentSpeakerId(speakerId);\n                        setMouseEventCnt(mouseEventCnt + 1);\n                        console.log(\"onMouseOver:\".concat(speakerId));\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        primaryImg: \"/static/speakers/bw/Speaker-\".concat(speakerId, \".jpg\"),\n                        secondaryImg: \"/static/speakers/Speaker-\".concat(speakerId, \".jpg\"),\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dwagner/Library/Mobile Documents/com~apple~CloudDocs/Documents/pluralsightReactPath/using-react-hooks/pages/ImageChangeOnScroll.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this)\n                }, speakerId, false, {\n                    fileName: \"/Users/dwagner/Library/Mobile Documents/com~apple~CloudDocs/Documents/pluralsightReactPath/using-react-hooks/pages/ImageChangeOnScroll.js\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dwagner/Library/Mobile Documents/com~apple~CloudDocs/Documents/pluralsightReactPath/using-react-hooks/pages/ImageChangeOnScroll.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(ImageChangeOnScroll, \"OXS62ODG4RQsK7Ahu3eBIqyuJeo=\");\n_c = ImageChangeOnScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);\nvar _c;\n$RefreshReg$(_c, \"ImageChangeOnScroll\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7QUFBaUQ7QUFDWTtBQUU3RCxJQUFNSSxtQkFBbUIsR0FBRyxXQUFNOztJQUVoQyxJQUFnREgsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFwREksZ0JBQWdCLEdBQXlCSixHQUFXLEdBQXBDLEVBQUVLLG1CQUFtQixHQUFJTCxHQUFXLEdBQWY7SUFDNUMsSUFBMENBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUNNLGFBQWEsR0FBc0JOLElBQVcsR0FBakMsRUFBRU8sZ0JBQWdCLEdBQUlQLElBQVcsR0FBZjtJQUV0Q0MsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RPLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUcsYUFBWSxDQUFtQixPQUFqQk4sZ0JBQWdCLENBQUUsQ0FBQztRQUN6RE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsOEJBQTZCLENBQW1CLE9BQWpCUixnQkFBZ0IsQ0FBRSxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBRUYscUJBQ0UsOERBQUNTLEtBQUc7OzBCQUNGLDhEQUFDQyxNQUFJOztvQkFBQyxpQkFBZTtvQkFBQ1IsYUFBYTs7Ozs7O3FCQUFRO1lBQzFDO0FBQUMsb0JBQUk7QUFBRSxtQkFBRztBQUFFLG1CQUFHO0FBQUUsb0JBQUk7QUFBRSxvQkFBSTthQUFDLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxTQUFTLEVBQUs7Z0JBQy9DLHFCQUNFLDhEQUFDSCxLQUFHO29CQUNGSSxXQUFXLEVBQUUsV0FBTTt3QkFDakJaLG1CQUFtQixDQUFDVyxTQUFTLENBQUMsQ0FBQzt3QkFDL0JULGdCQUFnQixDQUFDRCxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFhLENBQVksT0FBVkksU0FBUyxDQUFFLENBQUMsQ0FBQztvQkFDMUMsQ0FBQzs4QkFFRCw0RUFBQ2QsZ0VBQW1CO3dCQUNsQmdCLFVBQVUsRUFBRSw4QkFBNkIsQ0FBWSxNQUFJLENBQWRGLFNBQVMsRUFBQyxNQUFJLENBQUM7d0JBQzFERyxZQUFZLEVBQUUsMkJBQTBCLENBQVksTUFBSSxDQUFkSCxTQUFTLEVBQUMsTUFBSSxDQUFDO3dCQUN6REksR0FBRyxFQUFDLEVBQUU7Ozs7OzZCQUNOO21CQVhNSixTQUFTOzs7O3lCQVliLENBQ047WUFDSixDQUFDLENBQUM7Ozs7OzthQUNFLENBQ047QUFDSixDQUFDO0dBaENLYixtQkFBbUI7QUFBbkJBLEtBQUFBLG1CQUFtQjtBQWtDekIsK0RBQWVBLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0ltYWdlQ2hhbmdlT25TY3JvbGwuanM/NjA3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZVRvZ2dsZU9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZU9uU2Nyb2xsJztcblxuY29uc3QgSW1hZ2VDaGFuZ2VPblNjcm9sbCA9ICgpID0+IHtcblxuICBjb25zdCBbY3VycmVudFNwZWFrZXJJZCwgc2V0Q3VycmVudFNwZWFrZXJJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21vdXNlRXZlbnRDbnQsIHNldE1vdXNlRXZlbnRDbnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuZG9jdW1lbnQudGl0bGUgPSBgU3BlYWtlcklkOiAke2N1cnJlbnRTcGVha2VySWR9YDtcbiAgICBjb25zb2xlLmxvZyhgdXNlRWZmZWN0OiBzZXR0aW5nIHRpdGxlIHRvICR7Y3VycmVudFNwZWFrZXJJZH1gKTtcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiB7bW91c2VFdmVudENudH08L3NwYW4+XG4gICAgICB7WzExMjQsIDE4NywgODIzLCAxMjY5LCAxNTMwXS5tYXAoKHNwZWFrZXJJZCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtzcGVha2VySWR9XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRDdXJyZW50U3BlYWtlcklkKHNwZWFrZXJJZCk7XG4gICAgICAgICAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArIDEpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb25Nb3VzZU92ZXI6JHtzcGVha2VySWR9YCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVRvZ2dsZU9uU2Nyb2xsXG4gICAgICAgICAgICAgIHByaW1hcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2J3L1NwZWFrZXItJHtzcGVha2VySWR9LmpwZ2B9XG4gICAgICAgICAgICAgIHNlY29uZGFyeUltZz17YC9zdGF0aWMvc3BlYWtlcnMvU3BlYWtlci0ke3NwZWFrZXJJZH0uanBnYH1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZVRvZ2dsZU9uU2Nyb2xsIiwiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRTcGVha2VySWQiLCJzZXRDdXJyZW50U3BlYWtlcklkIiwibW91c2VFdmVudENudCIsInNldE1vdXNlRXZlbnRDbnQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInRpdGxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInNwYW4iLCJtYXAiLCJzcGVha2VySWQiLCJvbk1vdXNlT3ZlciIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n"));

/***/ })

});