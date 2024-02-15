"use strict";
exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 90664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useFetchDataPlans)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32923);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54997);
// hooks/useFetchDataPlans.ts


const fetchPackages = async (url)=>{
    let accessToken;
    if (false) {}
    if (!accessToken) {
        throw new Error("Access token is not available");
    }
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(url, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    return response.data.data;
};
const useFetchDataPlans = (apiUrl)=>{
    console.log(apiUrl, "omor");
    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__/* .useQuery */ .a)({
        queryKey: [
            "packages"
        ],
        queryFn: ()=>fetchPackages(apiUrl)
    });
};


/***/ })

};
;