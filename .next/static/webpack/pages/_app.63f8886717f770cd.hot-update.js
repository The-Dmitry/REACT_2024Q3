"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/core/components/header/Header.tsx":
/*!***********************************************!*\
  !*** ./src/core/components/header/Header.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/button/Button */ \"./src/shared/components/button/Button.tsx\");\n/* harmony import */ var _shared_components_theme_checkbox_ThemeCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/theme-checkbox/ThemeCheckbox */ \"./src/shared/components/theme-checkbox/ThemeCheckbox.tsx\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.css */ \"./src/core/components/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const submit = ()=>{\n        const search = value.trim();\n        const query = {\n            ...router.query,\n            page: \"1\"\n        };\n        if (\"search\" in query && search === \"\") {\n            delete query.search;\n        }\n        search ? router.push({\n            query: {\n                ...query,\n                search\n            }\n        }) : router.push({\n            query\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                type: \"search\",\n                value: value,\n                onInput: (e)=>setValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                warning: false,\n                onClick: submit,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_theme_checkbox_ThemeCheckbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"mgZGMVXPIn80le69WS7rSjGznPE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDc0I7QUFDbkM7QUFDUjtBQUNPO0FBRXZDLE1BQU1LLFNBQVM7O0lBQ2IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTSxTQUFTO1FBQ2IsTUFBTUMsU0FBU0gsTUFBTUksSUFBSTtRQUN6QixNQUFNQyxRQUFRO1lBQUUsR0FBR04sT0FBT00sS0FBSztZQUFFQyxNQUFNO1FBQUk7UUFDM0MsSUFBSSxZQUFZRCxTQUFTRixXQUFXLElBQUk7WUFDdEMsT0FBT0UsTUFBTUYsTUFBTTtRQUNyQjtRQUNBQSxTQUNJSixPQUFPUSxJQUFJLENBQUM7WUFBRUYsT0FBTztnQkFBRSxHQUFHQSxLQUFLO2dCQUFFRjtZQUFPO1FBQUUsS0FDMUNKLE9BQU9RLElBQUksQ0FBQztZQUFFRjtRQUFNO0lBQzFCO0lBRUEscUJBQ0UsOERBQUNHO1FBQU9DLFdBQVdkLGtFQUFhOzswQkFDOUIsOERBQUNlO2dCQUNDRCxXQUFXZCxpRUFBWTtnQkFDdkJnQixNQUFLO2dCQUNMWCxPQUFPQTtnQkFDUFksU0FBUyxDQUFDQyxJQUFNWixTQUFTLEVBQUdhLE1BQU0sQ0FBc0JkLEtBQUs7Ozs7OzswQkFFL0QsOERBQUNQLHdFQUFNQTtnQkFBQ3NCLFNBQVM7Z0JBQU9DLFNBQVNkOzBCQUFROzs7Ozs7MEJBR3pDLDhEQUFDUix1RkFBYUE7Ozs7Ozs7Ozs7O0FBR3BCO0dBN0JNSTs7UUFDV0Qsa0RBQVNBOzs7S0FEcEJDO0FBK0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci50c3g/Y2Q2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gJ0BzaGFyZWQvY29tcG9uZW50cy9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IFRoZW1lQ2hlY2tib3ggZnJvbSAnQHNoYXJlZC9jb21wb25lbnRzL3RoZW1lLWNoZWNrYm94L1RoZW1lQ2hlY2tib3gnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBzdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gdmFsdWUudHJpbSgpXG4gICAgY29uc3QgcXVlcnkgPSB7IC4uLnJvdXRlci5xdWVyeSwgcGFnZTogJzEnIH1cbiAgICBpZiAoJ3NlYXJjaCcgaW4gcXVlcnkgJiYgc2VhcmNoID09PSAnJykge1xuICAgICAgZGVsZXRlIHF1ZXJ5LnNlYXJjaFxuICAgIH1cbiAgICBzZWFyY2hcbiAgICAgID8gcm91dGVyLnB1c2goeyBxdWVyeTogeyAuLi5xdWVyeSwgc2VhcmNoIH0gfSlcbiAgICAgIDogcm91dGVyLnB1c2goeyBxdWVyeSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uSW5wdXQ9eyhlKSA9PiBzZXRWYWx1ZSgoZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpfVxuICAgICAgLz5cbiAgICAgIDxCdXR0b24gd2FybmluZz17ZmFsc2V9IG9uQ2xpY2s9e3N1Ym1pdH0+XG4gICAgICAgIFNlYXJjaFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8VGhlbWVDaGVja2JveCAvPlxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIlRoZW1lQ2hlY2tib3giLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWRlciIsInJvdXRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJzdWJtaXQiLCJzZWFyY2giLCJ0cmltIiwicXVlcnkiLCJwYWdlIiwicHVzaCIsImhlYWRlciIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsIm9uSW5wdXQiLCJlIiwidGFyZ2V0Iiwid2FybmluZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/components/header/Header.tsx\n"));

/***/ })

});