"use strict";
exports.id = 7045;
exports.ids = [7045];
exports.modules = {

/***/ 25480:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(92439);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(64271));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
}), 'TimerOutlined');
exports.Z = _default;

/***/ }),

/***/ 77045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_TimerOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
" use client";




const OfferCard = ({ offer, detailsLink })=>{
    const [remainingDays, setRemainingDays] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const calculateRemainingDays = ()=>{
            const currentDate = new Date();
            const endDate = new Date(offer.date_to);
            const timeDifference = endDate.getTime() - currentDate.getTime();
            const days = Math.max(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)), 0);
            setRemainingDays(days);
        };
        calculateRemainingDays();
    }, [
        offer.date_to
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: "rounded-md shadow-md md:p-[1rem] p-[0.5rem] md:w-[260px] xl:my-[2rem]  w-[170px]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: offer.avatar,
                        alt: "",
                        className: "w-full h-[143px]  object-cover rounded-md"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                        className: "bg-[#FFF5F5] absolute bottom-0 right-[5%] text-[#EA1C24] my-[1rem] rounded-md p-[0.2rem] px-[0.4rem] text-[10px] w-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_TimerOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    "Offer ends in ",
                                    remainingDays,
                                    " days"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "bg-[#FFF5F5] text-[#EA1C24] my-[1rem] inline-block rounded-md p-[0.5rem] md:text-[12px] text-[10px] w-auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_TimerOutlined__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    " ",
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            offer.percentCashback,
                            " offer available in all branches"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-[#818080]  max-md:text-sm my-[1rem]",
                children: offer.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: detailsLink,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "underline",
                    children: " view details"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OfferCard);


/***/ })

};
;