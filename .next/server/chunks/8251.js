"use strict";
exports.id = 8251;
exports.ids = [8251];
exports.modules = {

/***/ 78251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ _components_Tabs)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/_components/Tab.tsx


const Tab = ({ label, isActive, onClick, icon })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        className: `px-4 py-2 relative flex items-center space-x-1 transition-colors duration-300 ease-in-out ${isActive ? "text-black" : "text-[#424040]"}`,
        children: [
            icon && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "icon",
                children: icon
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-xs sm:text-base whitespace-nowrap",
                children: label
            }),
            isActive && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[0.15rem] bg-gray-500 rounded transition-width duration-300 ease-in-out"
            })
        ]
    });
};
/* harmony default export */ const _components_Tab = (Tab);

;// CONCATENATED MODULE: ./app/(dashboard)/(route)/customer/_components/Tabs.tsx



const Tabs = ({ tabData, children })=>{
    const [activeTab, setActiveTab] = (0,react_.useState)(tabData[0]?.label || "");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex ${tabData.length > 3 ? "overflow-x-auto" : "justify-around"} space-x-4 mb-4`,
                style: tabData.length > 3 ? {
                    scrollbarWidth: "none"
                } : {},
                children: tabData.map(({ label, icon })=>/*#__PURE__*/ jsx_runtime_.jsx(_components_Tab, {
                        label: label,
                        icon: icon,
                        isActive: activeTab === label,
                        onClick: ()=>setActiveTab(label)
                    }, label))
            }),
            react_default().Children.map(children, (child, index)=>{
                if (activeTab === tabData[index]?.label) return child;
                return null;
            })
        ]
    });
};
/* harmony default export */ const _components_Tabs = (Tabs);


/***/ })

};
;