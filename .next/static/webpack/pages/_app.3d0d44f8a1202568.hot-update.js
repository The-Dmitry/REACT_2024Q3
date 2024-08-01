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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_components_button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/button/Button */ \"./src/shared/components/button/Button.tsx\");\n/* harmony import */ var _shared_components_theme_checkbox_ThemeCheckbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/theme-checkbox/ThemeCheckbox */ \"./src/shared/components/theme-checkbox/ThemeCheckbox.tsx\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.module.css */ \"./src/core/components/header/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const obj = {\n            ...router.query\n        };\n        if (\"search\" in obj && typeof obj[\"search\"] === \"string\") {\n            setValue(obj[\"search\"]);\n        }\n    }, []);\n    const submit = ()=>{\n        const search = value.trim();\n        const query = {\n            ...router.query,\n            page: \"1\"\n        };\n        if (\"search\" in query && search === \"\") {\n            delete query.search;\n        }\n        search ? router.push({\n            query: {\n                ...query,\n                search\n            }\n        }) : router.push({\n            query\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                type: \"search\",\n                value: value,\n                onInput: (e)=>setValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_button_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                warning: false,\n                onClick: submit,\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_components_theme_checkbox_ThemeCheckbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\FORIT\\\\2023q4\\\\REACT_2024Q3\\\\src\\\\core\\\\components\\\\header\\\\Header.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"5WTONaWTMeKFzSOxyV9TiLusg9s=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDc0I7QUFDbkM7QUFDRztBQUNKO0FBRXZDLE1BQU1NLFNBQVM7O0lBQ2IsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBUztJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNTyxNQUFNO1lBQUUsR0FBR0gsT0FBT0ksS0FBSztRQUFDO1FBQzlCLElBQUksWUFBWUQsT0FBTyxPQUFPQSxHQUFHLENBQUMsU0FBUyxLQUFLLFVBQVU7WUFDeERELFNBQVNDLEdBQUcsQ0FBQyxTQUFTO1FBQ3hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUUsU0FBUztRQUNiLE1BQU1DLFNBQVNMLE1BQU1NLElBQUk7UUFDekIsTUFBTUgsUUFBUTtZQUFFLEdBQUdKLE9BQU9JLEtBQUs7WUFBRUksTUFBTTtRQUFJO1FBQzNDLElBQUksWUFBWUosU0FBU0UsV0FBVyxJQUFJO1lBQ3RDLE9BQU9GLE1BQU1FLE1BQU07UUFDckI7UUFDQUEsU0FDSU4sT0FBT1MsSUFBSSxDQUFDO1lBQUVMLE9BQU87Z0JBQUUsR0FBR0EsS0FBSztnQkFBRUU7WUFBTztRQUFFLEtBQzFDTixPQUFPUyxJQUFJLENBQUM7WUFBRUw7UUFBTTtJQUMxQjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFPQyxXQUFXaEIsa0VBQWE7OzBCQUM5Qiw4REFBQ2lCO2dCQUNDRCxXQUFXaEIsaUVBQVk7Z0JBQ3ZCa0IsTUFBSztnQkFDTFosT0FBT0E7Z0JBQ1BhLFNBQVMsQ0FBQ0MsSUFBTWIsU0FBUyxFQUFHYyxNQUFNLENBQXNCZixLQUFLOzs7Ozs7MEJBRS9ELDhEQUFDUix3RUFBTUE7Z0JBQUN3QixTQUFTO2dCQUFPQyxTQUFTYjswQkFBUTs7Ozs7OzBCQUd6Qyw4REFBQ1gsdUZBQWFBOzs7Ozs7Ozs7OztBQUdwQjtHQXBDTUs7O1FBQ1dELGtEQUFTQTs7O0tBRHBCQztBQXNDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29yZS9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4P2NkNmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbidcbmltcG9ydCBUaGVtZUNoZWNrYm94IGZyb20gJ0BzaGFyZWQvY29tcG9uZW50cy90aGVtZS1jaGVja2JveC9UaGVtZUNoZWNrYm94J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2JqID0geyAuLi5yb3V0ZXIucXVlcnkgfVxuICAgIGlmICgnc2VhcmNoJyBpbiBvYmogJiYgdHlwZW9mIG9ialsnc2VhcmNoJ10gPT09ICdzdHJpbmcnKSB7XG4gICAgICBzZXRWYWx1ZShvYmpbJ3NlYXJjaCddKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgc3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IHZhbHVlLnRyaW0oKVxuICAgIGNvbnN0IHF1ZXJ5ID0geyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6ICcxJyB9XG4gICAgaWYgKCdzZWFyY2gnIGluIHF1ZXJ5ICYmIHNlYXJjaCA9PT0gJycpIHtcbiAgICAgIGRlbGV0ZSBxdWVyeS5zZWFyY2hcbiAgICB9XG4gICAgc2VhcmNoXG4gICAgICA/IHJvdXRlci5wdXNoKHsgcXVlcnk6IHsgLi4ucXVlcnksIHNlYXJjaCB9IH0pXG4gICAgICA6IHJvdXRlci5wdXNoKHsgcXVlcnkgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbklucHV0PXsoZSkgPT4gc2V0VmFsdWUoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uIHdhcm5pbmc9e2ZhbHNlfSBvbkNsaWNrPXtzdWJtaXR9PlxuICAgICAgICBTZWFyY2hcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPFRoZW1lQ2hlY2tib3ggLz5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJUaGVtZUNoZWNrYm94Iiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJyb3V0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib2JqIiwicXVlcnkiLCJzdWJtaXQiLCJzZWFyY2giLCJ0cmltIiwicGFnZSIsInB1c2giLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJvbklucHV0IiwiZSIsInRhcmdldCIsIndhcm5pbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/components/header/Header.tsx\n"));

/***/ })

});