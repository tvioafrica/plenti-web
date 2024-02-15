"use strict";
exports.id = 8204;
exports.ids = [8204];
exports.modules = {

/***/ 84720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ table)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-dialog/dist/index.mjs
var dist = __webpack_require__(7589);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/cjs/lucide-react.js
var lucide_react = __webpack_require__(51158);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(12857);
;// CONCATENATED MODULE: ./components/ui/dialog.tsx
/* __next_internal_client_entry_do_not_use__ Dialog,DialogPortal,DialogOverlay,DialogClose,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = dist/* Root */.fC;
const DialogTrigger = dist/* Trigger */.xz;
const DialogPortal = dist/* Portal */.h_;
const DialogClose = dist/* Close */.x8;
const DialogOverlay = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Overlay */.aV, {
        ref: ref,
        className: (0,utils.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }));
DialogOverlay.displayName = dist/* Overlay */.aV.displayName;
const DialogContent = /*#__PURE__*/ react_.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogOverlay, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Content */.VY, {
                ref: ref,
                className: (0,utils.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist/* Close */.x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(lucide_react.X, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
DialogContent.displayName = dist/* Content */.VY.displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({ className, ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (0,utils.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }));
DialogTitle.displayName = dist/* Title */.Dx.displayName;
const DialogDescription = /*#__PURE__*/ react_.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
DialogDescription.displayName = dist/* Description */.dk.displayName;


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(44368);
;// CONCATENATED MODULE: ./components/providers/order-details.tsx




const OrderDetail = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Dialog, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DialogTrigger, {
                className: "underline",
                children: "View details"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(DialogContent, {
                className: "bg-white",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogHeader, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DialogTitle, {
                            children: "Order Details"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DialogDescription, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center py-6",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "w-1/2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        width: 200,
                                                        height: 100,
                                                        src: "/productDetail.png",
                                                        alt: "Placeholder Image",
                                                        className: "object-fit rounded-lg "
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-1/2 justify-center items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: " flex justify-between py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[#a8a9a9] ",
                                                                    children: "Category:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "Food and Drink"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: " flex justify-between py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[#a8a9a9] ",
                                                                    children: "Offer earned:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "font-semibold",
                                                                    children: "N500 Airtime"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: " flex justify-between py-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[#a8a9a9] ",
                                                                    children: "Order Fulfilment:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "rounded-lg text-[10px] font-semibold flex items-center text-blue-500 px-2 bg-blue-100",
                                                                    children: "Delivery"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "pb-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "pt-8",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9]",
                                                                children: "Customer's name:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: "Kanyinsola Balogun"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Phone Number:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: "080665544236"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Amount:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: "N2,500"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Product name:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold text-[12px]",
                                                                children: "Buy 2 cups of ice cream for N3000"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Address:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: "100B Kanyinsola Balogun Street Festac"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Offer type:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "rounded-lg text-[10px] font-semibold flex items-center text-purple-500 px-2 bg-purple-100",
                                                                children: "Airtime"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "flex justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "text-[#a8a9a9] ",
                                                                children: "Order ID:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: "PA6788"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* Button */.z, {
                                        type: "button",
                                        variant: "ghost",
                                        size: "lg",
                                        className: "bg-black w-1/2 text-white  rounded-3xl hover:bg-black-100 hover:text-white",
                                        children: "Okay"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const order_details = (OrderDetail);

;// CONCATENATED MODULE: ./components/providers/table.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Table = ({ data, headers, color, showAdditionalContent, extraTableRow })=>{
    const [selectedRow, setSelectedRow] = (0,react_.useState)(null);
    const [modelContent, setModalContent] = (0,react_.useState)(null);
    const handleRowClick = (index)=>{
        setSelectedRow(index === selectedRow ? null : index);
    };
    const openModal = (content)=>{
        setModalContent(content);
    };
    const closeModal = ()=>{
        setModalContent(null);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "inline-block w-full shadow-md rounded-lg overflow-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            className: "min-w-full leading-normal ",
            children: [
                headers && /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            headers.map((header, index)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                    children: header
                                }, index)),
                            extraTableRow && /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                className: "px-5 py-3 border-b-2 bg-[#f6f7f6]  border-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",
                                children: "Actions"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: data.map((row, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                headers && headers.map((header, colIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "px-5 py-5 border-b border-gray-200 bg-white text-sm",
                                        children: row[header]
                                    }, colIndex)),
                                extraTableRow && /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    className: "px-5 py-5 border-b border-gray-200 bg-white text-sm",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(order_details, {})
                                })
                            ]
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const table = (Table);


/***/ }),

/***/ 16730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\components\providers\table.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;