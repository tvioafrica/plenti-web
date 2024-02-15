exports.id = 6865;
exports.ids = [6865];
exports.modules = {

/***/ 3324:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 18389));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92867));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33088));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 75286))

/***/ }),

/***/ 18389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32122);
/* harmony import */ var _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31978);
/* harmony import */ var _mui_icons_material_NotificationsNoneOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94403);
/* harmony import */ var _app_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98975);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Navbar = ()=>{
    const { userInfo } = (0,_app_hooks_useUserInfo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 left-[280px] z-50 h-[80px] bg-white p-[1rem] border-b-2 md:flex items-center justify-between   w-full m-auto hidden ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "basis-[60%] flex items-center gap-20",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__/* .logo */ .jY.src,
                            alt: "",
                            className: "p-[2rem] md:block hidden"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {
                        component: "form",
                        sx: {
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#F3F3F3",
                            boxShadow: "none",
                            width: "60%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                                type: "submit",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
                                placeholder: "Search merchants deals and customers...",
                                inputProps: {
                                    "aria-label": "search"
                                },
                                sx: {
                                    ml: 1,
                                    flex: 1,
                                    border: "none",
                                    boxShadow: "none"
                                }
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
                className: "flex gap-3 basis-[20%] m-[1rem] items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_NotificationsNoneOutlined__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "avatar online",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[60px] rounded-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            })
                        })
                    }),
                    userInfo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "md:block hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    userInfo.first_name,
                                    " ",
                                    userInfo.last_name
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: userInfo.email
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 75286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31978);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11987);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3986);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63754);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23141);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// Import Swiper React components

// Import Swiper styles


const Promotions = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-[1rem]",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .Swiper */ .tq, {
                style: {
                    width: "100%"
                },
                slidesPerView: 1,
                modules: [
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Navigation */ .W_,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Pagination */ .tl,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .Autoplay */ .pt,
                    swiper_modules__WEBPACK_IMPORTED_MODULE_3__/* .A11y */ .s5
                ],
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    clickable: true
                },
                onSlideChange: ()=>console.log("slide change"),
                onSwiper: (swiper)=>console.log(swiper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o5, {
                        style: {
                            width: "350px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__/* .promotion1 */ .M2.src,
                            alt: "",
                            className: "w-[350px] m-auto h-[132px] rounded-md"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__/* .SwiperSlide */ .o5, {
                        style: {
                            width: "350px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__/* .promotion1 */ .M2.src,
                            alt: "",
                            className: "w-[350px] m-auto h-[132px] rounded-md"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: _public_customerImages_index__WEBPACK_IMPORTED_MODULE_2__/* .promotion2 */ .iG.src,
                className: "w-full h-[352px] my-[1rem] rounded-md max-md:hidden"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promotions);


/***/ }),

/***/ 92867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_customerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62972);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import { logo } from "@/images/index";

const Sidebar = ()=>{
    const currentRoute = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: " bg-white md:sticky top-[80px] left-0 md:w-[250px] md:h-[100vh] ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "md:block hidden",
                children: _constants_customerData__WEBPACK_IMPORTED_MODULE_3__/* .navLinks */ .FV.map((nav)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: nav.link,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: currentRoute === nav.link ? "border-l-4 border-l-[black] rounded-md text-black flex gap-4 p-6 text-[#818080]" : "text-black flex gap-4 p-6 text-[#818080]",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: nav.icons.src,
                                    alt: ""
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: nav.name
                                })
                            ]
                        })
                    }, nav.name);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "w-full z-30 items-center justify-center fixed bottom-0 left-0 flex bg-white md:hidden",
                children: _constants_customerData__WEBPACK_IMPORTED_MODULE_3__/* .navLinks */ .FV.map((nav)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: nav.link,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: currentRoute === nav.link ? "border-t-4 border-t-red-400  rounded-md flex-col text-black flex  items-center justify-center gap-4 p-6 text-[#818080]" : "text-black flex flex-col items-center justify-center gap-4 p-6 text-[#818080] z-40",
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: nav.icons.src,
                                    alt: "",
                                    className: "w-[25px] h-[25px]"
                                }),
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: nav.name
                                })
                            ]
                        })
                    }, nav.name);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 98975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
const useUserInfo = ()=>{
    const [userInfo, setUserInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const storedUserInfo = sessionStorage.getItem("userInfo");
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }
    }, []);
    const updateUser = (newUserInfo)=>{
        sessionStorage.setItem("userInfo", JSON.stringify(newUserInfo));
        setUserInfo(newUserInfo);
    };
    return {
        userInfo,
        updateUser
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUserInfo);


/***/ }),

/***/ 16424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\(dashboard)\\(route)\\customer\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_dashboard_route_customer_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(78690);
var target_path_app_dashboard_route_customer_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_dashboard_route_customer_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/_components/Navbar.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\app\(dashboard)\(route)\customer\_components\Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/_components/Sidebar.tsx

const Sidebar_proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\app\(dashboard)\(route)\customer\_components\Sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Sidebar_esModule, $$typeof: Sidebar_$$typeof } = Sidebar_proxy;
const Sidebar_default_ = Sidebar_proxy.default;


/* harmony default export */ const Sidebar = (Sidebar_default_);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/_components/Promotions.tsx

const Promotions_proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\app\(dashboard)\(route)\customer\_components\Promotions.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Promotions_esModule, $$typeof: Promotions_$$typeof } = Promotions_proxy;
const Promotions_default_ = Promotions_proxy.default;


/* harmony default export */ const Promotions = (Promotions_default_);
// EXTERNAL MODULE: ./app/(dashboard)/globals.css
var globals = __webpack_require__(87667);
// EXTERNAL MODULE: ./app/ReactQueryprovider.tsx
var ReactQueryprovider = __webpack_require__(61948);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/layout.tsx
// import '../globals.css'


// import Navbar from "../Components/Navbar";





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ReactQueryprovider/* ReactQueryProvider */.m, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            className: "font-family-raleway",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_app_dashboard_route_customer_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                        className: "md:flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "  mb-[100px] flex max-sm:p-[1rem] md:w-[95%] overflow-hidden  height-minus-80",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                                        className: "md:w-[70%] w-full h-full overflow-auto hide-scrollbar",
                                        children: children
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                                        className: "w-[30%] hidden md:block",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Promotions, {})
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;