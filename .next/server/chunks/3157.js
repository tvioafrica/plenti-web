exports.id = 3157;
exports.ids = [3157];
exports.modules = {

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ }),

/***/ 35108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 43618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ $b73a6c6685e72184$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony export Label */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35108);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43979);







/* -------------------------------------------------------------------------------------------------
 * Label
 * -----------------------------------------------------------------------------------------------*/ const $b73a6c6685e72184$var$NAME = 'Label';
const $b73a6c6685e72184$export$b04be29aa201d4f5 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__/* .Primitive */ .WV.label, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({}, props, {
        ref: forwardedRef,
        onMouseDown: (event)=>{
            var _props$onMouseDown;
            (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event); // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    }));
});
/*#__PURE__*/ Object.assign($b73a6c6685e72184$export$b04be29aa201d4f5, {
    displayName: $b73a6c6685e72184$var$NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;