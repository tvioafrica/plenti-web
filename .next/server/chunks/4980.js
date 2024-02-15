exports.id = 4980;
exports.ids = [4980];
exports.modules = {

/***/ 72631:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14285))

/***/ }),

/***/ 36728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const Button = ({ title, leftIcon, rightIcon, handleClick, submitting, type, bgColor, textColor })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: type || "button",
        disabled: submitting || false,
        className: `flexCenter gap-3 px-8 py-2 
        ${textColor ? textColor : "text-white"} 
        ${submitting ? "bg-black/50" : bgColor ? bgColor : "bg-primary"} rounded-full text-md font-medium max-md:w-full`,
        onClick: handleClick,
        children: [
            leftIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: leftIcon,
                width: 14,
                height: 14,
                alt: "left icon"
            }),
            title,
            rightIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: rightIcon,
                width: 14,
                height: 14,
                alt: "right icon"
            })
        ]
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 17387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (/* binding */ moreWays),
/* harmony export */   H9: () => (/* binding */ NavLinks),
/* harmony export */   Zc: () => (/* binding */ productsData),
/* harmony export */   dk: () => (/* binding */ footerLinks),
/* harmony export */   fc: () => (/* binding */ dealsDetails),
/* harmony export */   merchantItems: () => (/* binding */ merchantItems),
/* harmony export */   xg: () => (/* binding */ bannerSection),
/* harmony export */   zp: () => (/* binding */ dealSection)
/* harmony export */ });
/* unused harmony exports section1, section2, section3, section4, faqSection, aboutUs, FaqLinks, contact, howItWorks */
/* harmony import */ var _public_section1_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81962);
/* harmony import */ var _public_loan_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9209);
/* harmony import */ var _public_section3_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86300);
/* harmony import */ var _public_section4_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79735);
/* harmony import */ var _public_deal_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8562);
/* harmony import */ var _public_storeimg_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99574);
/* harmony import */ var _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57488);
/* harmony import */ var _public_FAQ_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62313);
/* harmony import */ var _public_chat_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85517);
/* harmony import */ var _public_call_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45861);
/* harmony import */ var _public_sms_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24729);
/* harmony import */ var _public_gift_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26910);
/* harmony import */ var _public_airtime_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3396);
/* harmony import */ var _public_credit_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91307);
/* harmony import */ var _public_voucher_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25352);
/* harmony import */ var _public_refer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(42515);
/* harmony import */ var _public_msg_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59276);

















const NavLinks = [
    {
        href: "/merchants",
        key: "For Merchants",
        text: "For Merchants"
    },
    {
        href: "/deals",
        key: "Deals",
        text: "Deals"
    },
    {
        href: "/how-it-works",
        key: "How it works",
        text: "How it works"
    },
    {
        href: "/contact",
        key: "Contact",
        text: "Contact"
    }
];
const footerLinks = [
    {
        title: "COMPANY",
        links: [
            "Deals",
            "For Merchant",
            "For Buyer",
            "How it works",
            "Contact Us"
        ]
    },
    {
        title: "Help",
        links: [
            "Contact Us",
            "Terms of Use",
            "Privacy Policy"
        ]
    },
    {
        title: "ADDRESS",
        links: [
            "Olugbosi Street, Off Bishop Oluwole Street Victoria Island Lagos"
        ]
    }
];
//   export const nav = {
//     logo: Logo,
//     loginText: "Log in",
//     signupText: "Get Started",
//     navItems: [
//       { name: "For Merchant", href: "/" },
//       { name: "Deals", href: "/" },
//       { name: "How It Works", href: "/" },
//       { name: "Contact", href: "/" },
//     ],
//   }
//   export const hero = {
//     title: "Earn more while you shop on Plenti",
//     subtext: "Get rewarded every time you shop, Plenti Africa is designed to bring you incredible deals, amazing rewards, and a seamless shopping experience.",
//     Image: Group,
//         btnText: "Join for free"
//   }
const section1 = {
    label: "Discover  deals at your favorite store",
    title: "Explore your preferred shopping categories, buy giftcards and get instant cashback & points.",
    subtext: "We've partnered with trusted merchants to bring you a wide range of quality products, services and reward all at your fingertips.",
    btnText: "Join for free",
    Image: _public_section1_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const section2 = {
    label: "Shop now pay later",
    title: "Get access to quick loans and shop at your convenience with plenti credit.",
    subtext: "Experience the flexibility of Plenti Credit. Shop now and pay later with our convenient Plenti Credit feature. No more waiting – enjoy your purchases while managing your budget. ",
    btnText: "Join for free",
    Image: _public_loan_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const section3 = {
    label: "Earn everytime you refer a buddy",
    title: "Earn referral bonus everytime you refer your friends to Plenti Africa.",
    subtext: "Use your unique referral link to invite them to join. The more friends you refer, the more you earn, your earnings can be withdrawn or used to shop at your favorite store.",
    btnText: "Join for free",
    Image: _public_section3_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};
const section4 = {
    label: "Buy gift cards from your favorites store",
    title: "Pay bills, buy gift cards & vouchers from your favorite stores ",
    subtext: "Every time you buy a gift card, you're not just getting the value of the card you also enjoy the double advantage of cashbacks and loyalty points with every purchase. ",
    btnText: "Join for free",
    Image: _public_section4_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};
const faqSection = {
    text: "Frequently asked question about Plenti Africa",
    title: "What is Plenti Africa ?",
    subtext: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
    Image: _public_FAQ_png__WEBPACK_IMPORTED_MODULE_7__["default"]
};
const aboutUs = {
    text: "Plenti Africa has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
};
const bannerSection = {
    title: "Elevate your shopping experience with the Plenti Africa app",
    text: "Your gateway to unbeatable deals, rewards, and convenience right at your fingertips",
    image: _public_section1_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const dealSection = {
    title: "Discover unbeatable deals and offers from your favorites store.",
    text: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
    image: _public_gift_png__WEBPACK_IMPORTED_MODULE_11__["default"]
};
const FaqLinks = [
    {
        name: "Deals on Plenti Africa ",
        href: "/"
    },
    {
        name: "How to become a Plenti Merchant",
        href: "/"
    },
    {
        name: "General Questions",
        href: "/"
    },
    {
        name: "Referral Program",
        href: "/"
    },
    {
        name: "Security and Privacy",
        href: "/"
    },
    {
        name: "Legal and Compliance",
        href: "/"
    }
];
//   export const dealsHeroSection = {
//     title: "Discover unbeatable deals and offers from your favorites store.",
//     text: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
//     image: Img
//   }
//   export const dealCategories = ["All categories", "Restaurants & bars", "Health & beauty", "Fashion", "Shoes"]
const dealsDetails = {
    label: "Earn ₦1,000 Cashback",
    timeLabel: "Deal ends in 4 days",
    merchantLogo: _public_storeimg_png__WEBPACK_IMPORTED_MODULE_5__["default"],
    merchantName: "Coldstone creamery ice creams",
    merchantEmail: "coldstonecreamy_ng",
    text: "Buy 2 cups of ice cream for ₦3000 and earn up to ₦1000 cashback and other free goodies ",
    subtext: "Cold Stone Creamery presents a world of exquisite ice cream creations that will tantalize your taste buds and melt your heart.",
    btnText: "Claim this offer",
    Image: _public_deal_png__WEBPACK_IMPORTED_MODULE_4__["default"]
};
const productsData = [
    {
        id: 1,
        name: "cloth",
        category: "Fashion",
        label: "Earn 300 airtime",
        timeLabel: "Deal ends in 4 days",
        text: "Buy Off-shoulder Sleeve Sweater Dress ",
        amount: 5000,
        link: "View details",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        id: 2,
        name: "shoe",
        category: "Health & Beauty",
        label: "Earn 300 airtime",
        timeLabel: "Deal ends in 4 days",
        text: "Buy Off-shoulder Sleeve Sweater Dress ",
        amount: 5000,
        link: "View details",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        id: 3,
        category: "Restaurants & bars",
        name: "vodka",
        label: "Earn 300 airtime",
        timeLabel: "Deal ends in 4 days",
        text: "Buy Off-shoulder Sleeve Sweater Dress ",
        amount: 5000,
        link: "View details",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        id: 3,
        category: "Fashion",
        name: "cream",
        label: "Earn 300 airtime",
        timeLabel: "Deal ends in 4 days",
        text: "Buy Off-shoulder Sleeve Sweater Dress ",
        amount: 5000,
        link: "View details",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
];
//   export const merchantCard = {
//     merchantLogo: img,
//     thumbNail: img,
//     title: "The palms shopping mall",
//     text: "They offer discounts and slash prices on all products from all deals and discounts....",
//     link: "View offer available"
// }
//   export const comment = [{
//     comments: "Plenti Africa has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
//   }]
//   export const accountandregistration = {
//     items: [
//       { name: "Deals on Plenti Africa ", href: "/" },
//       { name: "How to become a Plenti Merchant", href: "/" },
//       { name: "General Questions", href: "/" },
//       { name: "Referral Program", href: "/" },
//       { name: "Security and Privacy", href: "/" },
//       { name: "Legal and Compliance", href: "/" },
//     ],
//     faq: [
//       {
//         title: 'What is Plenti Africa ?',
//         text: "Plenti Africa is a marketplace and reward platform that offers great deals, exclusive rewards, and a range of services from your favorite stores. We're dedicated to making your shopping experience enjoyable and rewarding."
//       },
//     ]
//   }
const contact = {
    title: "We're here to help! Contact us for any inquiries or assistance.",
    subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
    items: [
        {
            id: 1,
            icon: _public_chat_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
            caption: "Chat with Us",
            text: "Look for the chat bubble icon at the bottom right corner of your screen. Simply click on it to initiate a chat session with us. Alternatively you can a dedicated support ticket system here"
        },
        {
            id: 2,
            icon: _public_call_png__WEBPACK_IMPORTED_MODULE_9__["default"],
            caption: "Give us a call",
            text: "Give us a call or send us a WhatsApp message. We're just a phone call away, ready to provide you with the support you need (+234-234-567-90). "
        },
        {
            id: 3,
            icon: _public_sms_png__WEBPACK_IMPORTED_MODULE_10__["default"],
            caption: "Chat with Us",
            text: "Have a question or need assistance? We're just an email away. Drop us a message, and our dedicated support team will get back to you promptly help.plenti.africa@gmail.com"
        }
    ]
};
const moreWays = {
    title: "We're here to help! Contact us for any inquiries or assistance.",
    subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
    items: [
        {
            id: 1,
            icon: _public_airtime_png__WEBPACK_IMPORTED_MODULE_12__["default"],
            "backgroundColor": "bg-section2Label",
            caption: "Buy Airtime & Data",
            text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
        },
        {
            id: 2,
            icon: _public_voucher_png__WEBPACK_IMPORTED_MODULE_14__["default"],
            "backgroundColor": "bg-secondary",
            caption: "Buy Gift cards & Vouchers",
            text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
        },
        {
            id: 3,
            icon: _public_refer_png__WEBPACK_IMPORTED_MODULE_15__["default"],
            "backgroundColor": "bg-black-100",
            caption: "Refer your buddies",
            text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
        },
        {
            id: 4,
            icon: _public_credit_png__WEBPACK_IMPORTED_MODULE_13__["default"],
            "backgroundColor": "bg-customBlue",
            caption: "Take plenti credit",
            text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
        }
    ]
};
const howItWorks = [
    {
        title: "Sign up and get rewarded every time you shop.",
        text: "If you're new here, sign up for a Plenti Africa account. If you're an existing user, simply log in to access your account to start earning when you shop at your favorites store.",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        title: "Pick Your Favorites stores so you can see their offers first.",
        text: "\uD83D\uDD0D Dive into our treasure trove of deals, gift cards, and exclusive rewards. Browse through an array of categories, from fashion to electronics, and discover discounts and cashbacks that'll make your wallet smile.",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        title: "Explore our offers, select a deal that suits your needs.",
        text: "Found a deal or offer that caught your eye? Click on it to view the details. If you're interested, proceed to make payment to claim your reward.",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    },
    {
        title: "Choose your preferred option to claim your rewards.",
        text: "Select how you want to receive your order. You can either: Pickup at a nearby store where your reward is available. Request a delivery wait for your order to be delivered right to your doorstep. Easy-peasy right ?",
        Image: _public_dealsimg_png__WEBPACK_IMPORTED_MODULE_6__["default"]
    }
];
const merchantItems = {
    heroSection: {
        title: "The ultimate marketplace and reward platform designed to elevate your business to new heights",
        text: "With Plenti Africa, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences.",
        heading1: "Effortless Order History",
        subText1: "Simplify your order management process. Our intuitive platform allows you to keep track of your order history, manage deliveries & pickups, and enhance the shopping experience for your customers.",
        heading2: "The ultimate marketplace and reward platform designed to elevate your business to new heights",
        subText2: "With Plenti Africa, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences."
    },
    testimony: {
        title: "Sisyphus",
        text: "At TechHub Electronics, we were searching for ways to connect with tech enthusiasts who share our passion. Plenti Africa's platform not only allowed us to showcase our latest gadgets but also empowered us to create promotions that resonated with our customers. The result? A loyal customer base that eagerly anticipates our new releases and special deals. - David Chen, CEO of TechHub Electronics",
        name: "Candice Wu",
        designation: "Store Manager, Sisyphus"
    },
    items: [
        {
            id: 1,
            icon: _public_msg_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
            title: "Reach an Expansive Audience",
            text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
        },
        {
            id: 2,
            icon: _public_msg_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
            title: "Streamlined Business Management",
            text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
        },
        {
            id: 3,
            icon: _public_msg_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
            title: "Comprehensive Analytics:",
            text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
        }
    ]
};


/***/ }),

/***/ 14285:
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
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./app/(landingpage)/_constants/index.ts
var _constants = __webpack_require__(17387);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(60930);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(32695);
;// CONCATENATED MODULE: ./app/(landingpage)/_components/Banner.tsx






const Banner = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#3f1e2a] container items-center  justify-between px-28 space-x-20 flex flex-row mx-auto rounded-tl-[80px] rounded-tr-[80px]  ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: _constants/* bannerSection */.xg.image,
                    width: 250,
                    height: 250,
                    alt: "logo",
                    className: "py-8"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-10 py-4 w-2/4  items-center content-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-3xl text-white",
                        children: _constants/* bannerSection */.xg.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-lg w-3/4 text-white",
                        children: _constants/* bannerSection */.xg.text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row space-x-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rounded-full space-x-4 bg-white flex items-center  px-3 py-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* BsApple */.t8I, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-[8px]",
                                                children: "DOWNLOAD ON THE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "",
                                                children: "App Store"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "rounded-full space-x-4 bg-white flex items-center px-3 py-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiLogoPlayStore */.M3R, {}),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-[8px]",
                                                children: "DOWNLOAD ON THE"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "",
                                                children: "Play Store"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _components_Banner = (Banner);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/(landingpage)/_components/Footer.tsx




const FooterColumn = ({ title, links })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer_column ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: "font-semibold",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "flex flex-col gap-2 font-normal",
                children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: link
                    }, link))
            })
        ]
    });
const Footer = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "md:w-full footer mt-10 bg-secondary",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:flex px-4 md:px-0 flex-row gap-12  container mx-auto pt-28 grid grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-start flex-col ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/plenti_logo_dark.svg",
                                    width: 116,
                                    height: 38,
                                    alt: "logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-start text-sm font-normal mt-5 ",
                                    children: "Biggest reward platform in Africa"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterColumn, {
                            title: _constants/* footerLinks */.dk[0].title,
                            links: _constants/* footerLinks */.dk[0].links
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(FooterColumn, {
                            title: _constants/* footerLinks */.dk[1].title,
                            links: _constants/* footerLinks */.dk[1].links
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(FooterColumn, {
                                title: _constants/* footerLinks */.dk[2].title,
                                links: _constants/* footerLinks */.dk[2].links
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex justify-items-center footer_copyright py-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-white text-center container mx-auto",
                    children: "@ 2024 Plenti. All rights reserved"
                })
            })
        ]
    });
/* harmony default export */ const _components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(7625);
;// CONCATENATED MODULE: ./app/(landingpage)/_components/MobileNav.tsx





const MobileNav = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-[#FFF8EE]  w-full h-full",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/plenti_logo_dark.svg",
                    width: 150,
                    height: 103,
                    alt: "logo",
                    className: "p-4"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "h-full flex flex-col justify-center   items-center gap-y-8",
                children: _constants/* NavLinks */.H9.map((item)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link text-black font-bold text-2xl",
                            href: item.href,
                            children: item.text
                        })
                    }, item.text);
                })
            })
        ]
    });
};
/* harmony default export */ const _components_MobileNav = (MobileNav);

// EXTERNAL MODULE: ./app/(landingpage)/_components/Button.tsx
var Button = __webpack_require__(36728);
;// CONCATENATED MODULE: ./app/(landingpage)/_components/Navbar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Navbar = ()=>{
    const [mobileNav, setMobileNav] = (0,react_.useState)(false);
    const [activeLink, setActiveLink] = (0,react_.useState)("");
    const handleLinkClick = (link)=>{
        setActiveLink(link);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "z-10  w-full  bg-white fixed px-4 md:px-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex z-10 justify-between py-4 container mx-auto items-center top-0 left-0 right-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/plenti_logo_dark.svg",
                            width: 116,
                            height: 43,
                            alt: "logo"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "space-x-10 hidden lg:flex",
                    children: _constants/* NavLinks */.H9.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.href,
                            className: `text-gray-800 hover:text-gray-500 ${activeLink === link.text ? "border-b-2 border-b-primary " : "bg-white text-gray-800"} px-4 py-2 `,
                            onClick: ()=>handleLinkClick(link.key),
                            children: link.text
                        }, link.text))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " gap-6 hidden lg:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                title: "Login",
                                bgColor: "bg-secondary",
                                textColor: "text-primary"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/register",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                title: "Get Started"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "lg:hidden",
                            onClick: ()=>setMobileNav(!mobileNav),
                            children: mobileNav ? /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdClose */.FU5, {
                                className: "text-3xl text-accent"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(bi_index_esm/* BiMenu */.ib2, {
                                size: 36,
                                className: "text-3xl text-accent"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `${mobileNav ? "left-0" : "-left-full"} fixed top-0 w-[80vw] lg:hidden transition-all bottom-0 bg-[#FFF8EE] `,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(_components_MobileNav, {})
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const _components_Navbar = (Navbar);

// EXTERNAL MODULE: ./app/(landingpage)/globals.css
var globals = __webpack_require__(20700);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(60925);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.css
var dist_aos = __webpack_require__(88593);
;// CONCATENATED MODULE: ./app/(landingpage)/layout.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const RootLayout = ({ children })=>{
    (0,react_.useEffect)(()=>{
        aos_default().init({
            duration: 800,
            once: false
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: "body ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(_components_Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "pt-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "hidden md:block md:pt-8",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(_components_Banner, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(_components_Footer, {})
            ]
        })
    });
};
/* harmony default export */ const layout = (RootLayout);


/***/ }),

/***/ 8558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\wamp64\www\plenty\plenti-web\app\(landingpage)\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 62313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/FAQ.99cf9b1d.png","height":303,"width":302,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBUlEQVR42mM47mTC2sjAwMMABAcYGFgYoOBx9QQ2BhiwKD1Uv2jtnlAGIHj57l/0tv//FRhg4IOlY+gu58xb8938Jt8JSC568f7/3BezV+57w8BQfHnadg6Gl4rqhz8xMHT9YGCIfBxl/Ox9AEPXVYaAhddCCw99YWCoZnglr7HvpbFp82sG7f1PUh1OnczS+37Go/7ShPCe208ZGJIYXjMw+FwWYWi8CaQZgMCEgWHyAwaGoiMMDE93CxiGMrx6+VzySGfr6xNnLmRcu30p6uaRg1XP//63+nvtrten5asMGN4/fCH68dc/te8fvpo/e/bW9tOX3xYfXryz+fL/v/qP//+5AClBdr8Ak0CeAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 3396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/airtime.d74f447d.png","height":72,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEX////////+/v7+/v7+/Pz+/Pv+/v7+/v3////99fP88u/88u788Oz87+r76uP65dz65Nv649v549pe09nXAAAACHRSTlMAKsHu+fn6+mM6g5sAAAA6SURBVHjaRYvJDQAhEMMyYYHsxdV/sQwPRF6WYgPGnGmABfmCgYq1RRFJX/lvJYd39MeButq6jrzzCTixAZO8mG7wAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 45861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/call.3073c2f4.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAlklEQVR42mMAgVfSyrYvpVWkIWwVAyD2ZYCBlxCB/0D6MJRvB8TVQJwH0S2jHAnEIAVArGwIpLWAuBJoagVQow9IAT8QfwAKPnwppcoONUUbiG2B2ABmSgTUmi6oOywZYABoFBNEl3IuUMFsoOR5IP4PxIeBWBpmAgvUaD8g/gpzExBbMQABTBEbVBEPyOFAWp+BgYEBAIFLSYe5NwmZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 85517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chat.6e1b0727.svg","height":48,"width":48,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 91307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/credit.6f9d8d4f.png","height":72,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX////////+/v7+/v7+/v79/v3+/v7////z/fTz/fPy/fPy/fLu/O/s/Ozg+uDV+dXS+dPQ+NH5rfc1AAAAB3RSTlMAKsHu+fn6M4UywQAAADlJREFUeNpFi0kSwCAMw5zQxqXs//8svjD4pBlZgHmEG2CJWjI4ny+/dATbmpUhqKNngdRfpO755Bsy2QFpW84KcwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 8562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/deal.f1be81ab.png","height":408,"width":691,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AY9jWP61zdUBvNDhAEQwGwC+0NcAdGpsAEc+PgDc4uH/AWA8Lf+gxNMAHigmAHtVPADm5d8AGChLADY9OwDu5ugAAX9oaf8mHx4A5OrpANre1AAlEwgAy+3/ABgbIAAD//4AAXVeXv8uIyIAoba4ACwNCAAkHR0A7B0fABYXGADx9vcAAVwrJv7cCg4B+v0AADQnGgASCvwABhcqANjb3wAk7vD/clw+oYRupkkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 57488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/dealsimg.61ba0705.png","height":254,"width":358,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAxklEQVR42g3MzUoCURiA4Xe+TshMozFRMhW0cBG0SpAuoa6hiwradTXtalEQRBshfw+Co6KjzlGZH51Bnwt4rLfXl3z9/yMP9w2Ud82RW8GgmE8C0iQpVDjUUn98xr+rY9sO2SbCPy5hfJ/f708RCyi2GYNOkzDQiCXkWYxXLuM4NlI6cTmvVskWAa2vd6LpiG1qSOKIyukZClFs5jNWfx/EYY+xd4F76G9qtxizRO3yvFgYI17jidrVJd1+D5KUvtbodrPYA13rUSdQ1otXAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 26910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/gift.8f6fa535.png","height":589,"width":588,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42mN4ysDL8ZyBQYQBF3jl5pn3xifwNgODitOu//8ZtyVlOJ+cP/vm9dVrLjcoqhszvGEwF3kc7hx6cpL3lY1B7ikXKit37Nw28//Fgxv+z1YOcYAY81+SaUKK/REGcQaOA5w5llOOdf6fuqn63w6GXFuG//cuMO5vX8zKwGCxlcEkhHd3frn15e1b/+fGJfxvFta2Y0AC5QwMDDx5DAy6T3bt/L+mo+u/GQODHcOvP/95Ht97ZnFi8668h9cfRJ/Ytrfw+dGjf54fPvyxKyLejuH922+cr55/UHn98pP2u/c/jV6/+Gjw+tUnxfevP0u9e/qWAwDgE3KYaIBvhwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/loan.20cef53e.svg","height":456,"width":577,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 59276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/msg.abcd34d3.svg","height":56,"width":56,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 42515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/refer.75871aad.png","height":72,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAJ1BMVEX////////+/v7+/v7////5+P7+/v7////w8Pzv7vzm5fvU0vnRz/gWIvO4AAAAB3RSTlMAKsHu+fn6M4UywQAAACxJREFUeNpjYFRLEmAQLi83ZFCPWlrEkD57ZxlDes+JMgZ1j5YiiASjWpIAANqJCvYsyieKAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 81962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/section1.bbb145eb.svg","height":585,"width":435,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 86300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/section3.1e1799e3.svg","height":569,"width":423,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 79735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/section4.bbe2bb0a.svg","height":474,"width":520,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 24729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/sms.fdfcb37b.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEXqHCPpHCTpHCPqGyTqGyPpGyTpGyTpGyToGyTqHCPqGyTqHCTqGyPpHCPqHCTpHCPqGyTpGyTpGyTpGyTpGyPpGyTqGyTqGyTqGyTpHCPpGyTqHCTqHCPqHCPpGyTqHCTqHCPpHCTpHCPqGyTqGyPpGyTpGyMXLdPKAAAAH3RSTlMAAAAAAAAICQlUVFVVW1xcjY+QmpqbnLy9yMjS0tvfnSFnZgAAAEZJREFUeNoFQAkWQCAQ/WZkp+xEyYT7H9GDYgITMbLR2d0tGero78e/DdrLDL2JGp2EbQ2iUYZPRGKFYj6sPaccCsRpwuoHpa0EpIY67KkAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 99574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/storeimg.1e93c558.png","height":80,"width":80,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA6ElEQVR42iXIQUvCYBzA4d//de/UjZIlUVRWhy566RJU2CXo4Gfo2sWPtA9UbAShUdbFY2SEZdhi27u5FfkcHwG4d/c71LXP9PsEFGXTCSRd9IFnGR4ctomSG/lIvOK4RWkWVB4mlI3aDFefWTJ+8cH2Sibm5+jClszg3gZG4ubfFb4MuucGpTVzg3Hm4NawpxpZb0AcZVb16hK1WiV9f8MxYO+1yOMIVbExoxEqC8PQShNWtraNs7OJVeS43pqxvj4p74aBDKADXAt4wlLBv5mCrgA89nrtbPzqx1V9ClDP8lDvbvSBp184jlinc5l51wAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 25352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/voucher.a6131d7c.png","height":72,"width":72,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEX////////+/v7+/v78+v78+f78+P7+/v7////37/z27fz26/z16fv05/vz5vvx4vrw3/ru2vru2fniJGksAAAACHRSTlMAKsHu+fn5+kgX0FgAAAA6SURBVHjaPYtJEsAgDMOc0DYutGz/fyy+gE+akQWYR7gBlqglg/PK+aYj2OaoDMHfv1cgVcojdc47XzfwAYzk0UCGAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 20700:
/***/ (() => {



/***/ })

};
;