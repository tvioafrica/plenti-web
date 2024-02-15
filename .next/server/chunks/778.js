exports.id = 778;
exports.ids = [778];
exports.modules = {

/***/ 39446:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 73380, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 89827));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 56864));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99904))

/***/ }),

/***/ 89827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SidebarRoutes: () => (/* binding */ SidebarRoutes)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(44368);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-item.tsx
/* __next_internal_client_entry_do_not_use__ SidebarItem auto */ 



const SidebarItem = ({ icon: Icon, label, href })=>{
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    const isActive = pathname === "/" && href === "/customer" || pathname === href || pathname?.startsWith(`${href}/merchant`);
    const onClick = ()=>{
        router.push(href);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_button/* Button */.z, {
        onClick: onClick,
        type: "button",
        className: (0,utils.cn)("flex h-16 items-center gap-x-2 text-[#a1a1a0] text-sm font[500] pl-6 transition-all hover:text-[#000] hover:bg-[#fef4f5]", isActive && "text-[#5f2d41] font-bold bg-[#fef4f5] hover:bg-[#fffdfd] hover:text-[#5f2d41]"),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center gap-x-2 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                        size: 22,
                        className: (0,utils.cn)("text-[#a1a1a0]", isActive && "text-[#5f2d41]")
                    }),
                    label
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (0,utils.cn)("ml-auto opacity-0 border-2 border-[#5f2d41] h-full transition-all", isActive && "opacity-100")
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-routes.tsx
/* __next_internal_client_entry_do_not_use__ SidebarRoutes auto */ 



const merchantRoutes = [
    {
        icon: lucide_react/* Layout */.Ar2,
        label: "Overview",
        href: "/merchant"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Promotions & Offers",
        href: "/merchant/promotions"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Order history",
        href: "/merchant/orders"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Customers",
        href: "/merchant/sales"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Invoice",
        href: "/merchant/invoice"
    },
    {
        icon: lucide_react/* Compass */.QqS,
        label: "Settings",
        href: "/merchant/settings"
    }
];
const customerRoutes = [
    {
        icon: lucide_react/* List */.aVo,
        label: "Home",
        href: "/customer"
    },
    {
        icon: lucide_react/* BarChart */.vz2,
        label: "Category",
        href: "/customer/category"
    },
    {
        icon: lucide_react/* BarChart */.vz2,
        label: "Stores",
        href: "/customer/stores"
    },
    {
        icon: lucide_react/* BarChart */.vz2,
        label: "Profile",
        href: "/customer/profile"
    }
];
const SidebarRoutes = ()=>{
    const pathname = (0,navigation.usePathname)();
    const isCustomerPage = pathname?.includes("/customer");
    const routes = isCustomerPage ? customerRoutes : merchantRoutes;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col w-full",
        children: routes.map((route)=>/*#__PURE__*/ jsx_runtime_.jsx(SidebarItem, {
                icon: route.icon,
                label: route.label,
                href: route.href
            }, route.href))
    });
};


/***/ }),

/***/ 56864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarRoutes: () => (/* binding */ NavbarRoutes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44368);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51158);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ NavbarRoutes auto */ 




const NavbarRoutes = ()=>{
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();
    const isCustomerPage = pathname?.startsWith("/customer");
    const isMerchantPage = pathname?.includes("/merchant");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-x-2 ml-auto",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "h-full absolute inset-y-0 left-0 flex items-center pl-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-4 w-4 fill-current text-gray-500",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: "Search",
                        className: "appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            isCustomerPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/merchant",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    size: "sm",
                    variant: "ghost",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__/* .LogOut */ .d6Z, {
                            className: "h-4 w-4 mr-2"
                        }),
                        "Merchant Mode"
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: "/customer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .z, {
                    size: "sm",
                    variant: "ghost",
                    children: "Customer Mode"
                })
            })
        ]
    });
};


/***/ }),

/***/ 44368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71085);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97389);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12857);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-[#fffdfd] text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground hover:text-black ",
            link: "text-primary underline-offset-4 hover:underline",
            promo: ""
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-lg px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 99904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sheet: () => (/* binding */ Sheet),
/* harmony export */   SheetClose: () => (/* binding */ SheetClose),
/* harmony export */   SheetContent: () => (/* binding */ SheetContent),
/* harmony export */   SheetDescription: () => (/* binding */ SheetDescription),
/* harmony export */   SheetFooter: () => (/* binding */ SheetFooter),
/* harmony export */   SheetHeader: () => (/* binding */ SheetHeader),
/* harmony export */   SheetOverlay: () => (/* binding */ SheetOverlay),
/* harmony export */   SheetPortal: () => (/* binding */ SheetPortal),
/* harmony export */   SheetTitle: () => (/* binding */ SheetTitle),
/* harmony export */   SheetTrigger: () => (/* binding */ SheetTrigger)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7589);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97389);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51158);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12857);
/* __next_internal_client_entry_do_not_use__ Sheet,SheetPortal,SheetOverlay,SheetTrigger,SheetClose,SheetContent,SheetHeader,SheetFooter,SheetTitle,SheetDescription auto */ 





const Sheet = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const SheetTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const SheetClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8;
const SheetPortal = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
            ...props
        })
    });
SheetPortal.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_.displayName;
const SheetOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }));
SheetOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV.displayName;
const sheetVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_4__/* .cva */ .j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
    variants: {
        side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
        }
    },
    defaultVariants: {
        side: "right"
    }
});
const SheetContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ side = "right", className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SheetOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(sheetVariants({
                    side
                }), className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_5__.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
SheetContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const SheetHeader = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    });
SheetHeader.displayName = "SheetHeader";
const SheetFooter = ({ className, ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
SheetFooter.displayName = "SheetFooter";
const SheetTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold text-foreground", className),
        ...props
    }));
SheetTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx.displayName;
const SheetDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
SheetDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk.displayName;



/***/ }),

/***/ 12857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10566);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59610);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 52147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/logo.tsx


const Logo = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        height: 150,
        width: 120,
        alt: "logo",
        src: "/logo.svg"
    });
};

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar-routes.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\app\(dashboard)\_components\sidebar-routes.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SidebarRoutes"];

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(4094);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/(dashboard)/_components/sidebar.tsx






const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full border-r flex flex-col overflow-y-auto bg-[#fffdfd] shadow-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-items-center border-b h-20 p-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col w-full bg-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-auto py-20 px-6 flex-col flex-end ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/Logo2.png",
                                width: 50,
                                height: 100,
                                alt: "logo",
                                className: " "
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xs",
                                        children: "Business tag"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "flex items-center text-[14px] font-semibold",
                                                children: "Shoprite Ikeja"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* ChevronDown */._ME, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex gap-4 py-6 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/logout.png",
                                    width: 20,
                                    height: 20,
                                    alt: "logo",
                                    className: " "
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-red-400 font-semibold",
                                    children: "Log out"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/navbar-routes.tsx

const navbar_routes_proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\components\navbar-routes.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: navbar_routes_esModule, $$typeof: navbar_routes_$$typeof } = navbar_routes_proxy;
const navbar_routes_default_ = navbar_routes_proxy.default;

const navbar_routes_e0 = navbar_routes_proxy["NavbarRoutes"];

;// CONCATENATED MODULE: ./components/ui/sheet.tsx

const sheet_proxy = (0,module_proxy.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\components\ui\sheet.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: sheet_esModule, $$typeof: sheet_$$typeof } = sheet_proxy;
const sheet_default_ = sheet_proxy.default;

const sheet_e0 = sheet_proxy["Sheet"];

const e1 = sheet_proxy["SheetPortal"];

const e2 = sheet_proxy["SheetOverlay"];

const e3 = sheet_proxy["SheetTrigger"];

const e4 = sheet_proxy["SheetClose"];

const e5 = sheet_proxy["SheetContent"];

const e6 = sheet_proxy["SheetHeader"];

const e7 = sheet_proxy["SheetFooter"];

const e8 = sheet_proxy["SheetTitle"];

const e9 = sheet_proxy["SheetDescription"];

;// CONCATENATED MODULE: ./app/(dashboard)/_components/mobile-sidebar.tsx




const MobileSidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(sheet_e0, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(e3, {
                className: "md:hidden pr-4 hover:opacity-75 transition",
                children: /*#__PURE__*/ jsx_runtime_.jsx(lucide_react/* Menu */.v2r, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(e5, {
                side: "left",
                className: "p-0 bg-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/(dashboard)/_components/navbar.tsx



const Navbar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "p-4 border-b h-full flex items-center bg-[#fffdfd] shadow-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileSidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(navbar_routes_e0, {})
        ]
    });
};

// EXTERNAL MODULE: ./app/(dashboard)/globals.css
var globals = __webpack_require__(87667);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/merchant/layout.tsx




const DashboardLayout = ({ children })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "body ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full bg-[#fffdfd]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[80px] md:pl-56 fixed inset-y-0 w-full z-50",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "md:pl-56 pt-[80px] h-full",
                        children: children
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout = (DashboardLayout);


/***/ }),

/***/ 87667:
/***/ (() => {



/***/ })

};
;