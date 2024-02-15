"use strict";
exports.id = 4017;
exports.ids = [4017];
exports.modules = {

/***/ 41463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62274);
/* harmony import */ var react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2__);



const Loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_spinners_BarLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
            color: "#36d7b7"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ 26280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34944);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54997);
/* eslint-disable react-hooks/rules-of-hooks */ 

const usePostRequest = ()=>{
    return (url, onSuccess, onError)=>{
        return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__/* .useMutation */ .D)({
            mutationFn: async (data)=>{
                const accessToken = sessionStorage.getItem("accessToken");
                // if (!accessToken) {
                //   throw new Error("No access token found in session storage");
                // }
                return await axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.post(url, data, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`
                    }
                });
            },
            onSuccess,
            onError
        });
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostRequest);


/***/ })

};
;