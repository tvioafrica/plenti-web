exports.id = 2003;
exports.ids = [2003];
exports.modules = {

/***/ 98833:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = generate;
var _tinycolor = __webpack_require__(79226);
var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = (0, _tinycolor.rgbToHsv)(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return "#".concat((0, _tinycolor.rgbToHex)(r, g, b, false));
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 1) {
    saturation = 1;
  }
  // 第一格的 s 限制在 0.06-0.1 之间
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = (0, _tinycolor.inputToRGB)(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex((0, _tinycolor.inputToRGB)({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex((0, _tinycolor.inputToRGB)({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }

  // dark theme patterns
  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(mix((0, _tinycolor.inputToRGB)(opts.backgroundColor || '#141414'), (0, _tinycolor.inputToRGB)(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

/***/ }),

/***/ 84013:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.geekblue = exports.cyan = exports.blue = void 0;
Object.defineProperty(exports, "generate", ({
  enumerable: true,
  get: function get() {
    return _generate.default;
  }
}));
exports.yellow = exports.volcano = exports.red = exports.purple = exports.presetPrimaryColors = exports.presetPalettes = exports.presetDarkPalettes = exports.orange = exports.magenta = exports.lime = exports.grey = exports.green = exports.gray = exports.gold = void 0;
var _generate = _interopRequireDefault(__webpack_require__(98833));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var presetPrimaryColors = exports.presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1677FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = exports.presetPalettes = {};
var presetDarkPalettes = exports.presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = (0, _generate.default)(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];

  // dark presetPalettes
  presetDarkPalettes[key] = (0, _generate.default)(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = exports.red = presetPalettes.red;
var volcano = exports.volcano = presetPalettes.volcano;
var gold = exports.gold = presetPalettes.gold;
var orange = exports.orange = presetPalettes.orange;
var yellow = exports.yellow = presetPalettes.yellow;
var lime = exports.lime = presetPalettes.lime;
var green = exports.green = presetPalettes.green;
var cyan = exports.cyan = presetPalettes.cyan;
var blue = exports.blue = presetPalettes.blue;
var geekblue = exports.geekblue = presetPalettes.geekblue;
var purple = exports.purple = presetPalettes.purple;
var magenta = exports.magenta = presetPalettes.magenta;
var grey = exports.grey = presetPalettes.grey;
var gray = exports.gray = presetPalettes.grey;

/***/ }),

/***/ 55487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
// [times, realValue]

var SPLIT = '%';
var Entity = /*#__PURE__*/function () {
  function Entity(instanceId) {
    (0, _classCallCheck2.default)(this, Entity);
    (0, _defineProperty2.default)(this, "instanceId", void 0);
    /** @private Internal cache map. Do not access this directly */
    (0, _defineProperty2.default)(this, "cache", new Map());
    this.instanceId = instanceId;
  }
  (0, _createClass2.default)(Entity, [{
    key: "get",
    value: function get(keys) {
      return this.cache.get(keys.join(SPLIT)) || null;
    }
  }, {
    key: "update",
    value: function update(keys, valueFn) {
      var path = keys.join(SPLIT);
      var prevValue = this.cache.get(path);
      var nextValue = valueFn(prevValue);
      if (nextValue === null) {
        this.cache.delete(path);
      } else {
        this.cache.set(path, nextValue);
      }
    }
  }]);
  return Entity;
}();
var _default = exports["default"] = Entity;

/***/ }),

/***/ 6350:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var Keyframe = /*#__PURE__*/function () {
  function Keyframe(name, style) {
    (0, _classCallCheck2.default)(this, Keyframe);
    (0, _defineProperty2.default)(this, "name", void 0);
    (0, _defineProperty2.default)(this, "style", void 0);
    (0, _defineProperty2.default)(this, "_keyframe", true);
    this.name = name;
    this.style = style;
  }
  (0, _createClass2.default)(Keyframe, [{
    key: "getName",
    value: function getName() {
      var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
    }
  }]);
  return Keyframe;
}();
var _default = exports["default"] = Keyframe;

/***/ }),

/***/ 82276:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.StyleProvider = exports.CSS_IN_JS_INSTANCE = exports.ATTR_TOKEN = exports.ATTR_MARK = exports.ATTR_CACHE_PATH = void 0;
exports.createCache = createCache;
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _useMemo = _interopRequireDefault(__webpack_require__(33580));
var _isEqual = _interopRequireDefault(__webpack_require__(63303));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Cache = _interopRequireDefault(__webpack_require__(55487));
var _excluded = ["children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var ATTR_TOKEN = exports.ATTR_TOKEN = 'data-token-hash';
var ATTR_MARK = exports.ATTR_MARK = 'data-css-hash';
var ATTR_CACHE_PATH = exports.ATTR_CACHE_PATH = 'data-cache-path';

// Mark css-in-js instance in style element
var CSS_IN_JS_INSTANCE = exports.CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
function createCache() {
  var cssinjsInstanceId = Math.random().toString(12).slice(2);

  // Tricky SSR: Move all inline style to the head.
  // PS: We do not recommend tricky mode.
  if (typeof document !== 'undefined' && document.head && document.body) {
    var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]")) || [];
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function (style) {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || cssinjsInstanceId;

      // Not force move if no head
      if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
        document.head.insertBefore(style, firstChild);
      }
    });

    // Deduplicate of moved styles
    var styleHash = {};
    Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function (style) {
      var hash = style.getAttribute(ATTR_MARK);
      if (styleHash[hash]) {
        if (style[CSS_IN_JS_INSTANCE] === cssinjsInstanceId) {
          var _style$parentNode;
          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash] = true;
      }
    });
  }
  return new _Cache.default(cssinjsInstanceId);
}
var StyleContext = /*#__PURE__*/React.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleProvider = exports.StyleProvider = function StyleProvider(props) {
  var children = props.children,
    restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var parentContext = React.useContext(StyleContext);
  var context = (0, _useMemo.default)(function () {
    var mergedContext = (0, _objectSpread2.default)({}, parentContext);
    Object.keys(restProps).forEach(function (key) {
      var value = restProps[key];
      if (restProps[key] !== undefined) {
        mergedContext[key] = value;
      }
    });
    var cache = restProps.cache;
    mergedContext.cache = mergedContext.cache || createCache();
    mergedContext.defaultCache = !cache && parentContext.defaultCache;
    return mergedContext;
  }, [parentContext, restProps], function (prev, next) {
    return !(0, _isEqual.default)(prev[0], next[0], true) || !(0, _isEqual.default)(prev[1], next[1], true);
  });
  return /*#__PURE__*/React.createElement(StyleContext.Provider, {
    value: context
  }, children);
};
var _default = exports["default"] = StyleContext;

/***/ }),

/***/ 5863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = extractStyle;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _useCacheToken = __webpack_require__(66488);
var _useCSSVarRegister = __webpack_require__(75019);
var _useStyleRegister = __webpack_require__(77924);
var _util = __webpack_require__(93466);
var _cacheMapUtil = __webpack_require__(57406);
var _ExtractStyleFns;
var ExtractStyleFns = (_ExtractStyleFns = {}, (0, _defineProperty2.default)(_ExtractStyleFns, _useStyleRegister.STYLE_PREFIX, _useStyleRegister.extract), (0, _defineProperty2.default)(_ExtractStyleFns, _useCacheToken.TOKEN_PREFIX, _useCacheToken.extract), (0, _defineProperty2.default)(_ExtractStyleFns, _useCSSVarRegister.CSS_VAR_PREFIX, _useCSSVarRegister.extract), _ExtractStyleFns);
function isNotNull(value) {
  return value !== null;
}
function extractStyle(cache, options) {
  var _ref = typeof options === 'boolean' ? {
      plain: options
    } : options || {},
    _ref$plain = _ref.plain,
    plain = _ref$plain === void 0 ? false : _ref$plain,
    _ref$types = _ref.types,
    types = _ref$types === void 0 ? ['style', 'token', 'cssVar'] : _ref$types;
  var matchPrefixRegexp = new RegExp("^(".concat((typeof types === 'string' ? [types] : types).join('|'), ")%"));

  // prefix with `style` is used for `useStyleRegister` to cache style context
  var styleKeys = Array.from(cache.cache.keys()).filter(function (key) {
    return matchPrefixRegexp.test(key);
  });

  // Common effect styles like animation
  var effectStyles = {};

  // Mapping of cachePath to style hash
  var cachePathMap = {};
  var styleText = '';
  styleKeys.map(function (key) {
    var cachePath = key.replace(matchPrefixRegexp, '').replace(/%/g, '|');
    var _key$split = key.split('%'),
      _key$split2 = (0, _slicedToArray2.default)(_key$split, 1),
      prefix = _key$split2[0];
    var extractFn = ExtractStyleFns[prefix];
    var extractedStyle = extractFn(cache.cache.get(key)[1], effectStyles, {
      plain: plain
    });
    if (!extractedStyle) {
      return null;
    }
    var _extractedStyle = (0, _slicedToArray2.default)(extractedStyle, 3),
      order = _extractedStyle[0],
      styleId = _extractedStyle[1],
      styleStr = _extractedStyle[2];
    if (key.startsWith('style')) {
      cachePathMap[cachePath] = styleId;
    }
    return [order, styleStr];
  }).filter(isNotNull).sort(function (_ref2, _ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref2, 1),
      o1 = _ref4[0];
    var _ref5 = (0, _slicedToArray2.default)(_ref3, 1),
      o2 = _ref5[0];
    return o1 - o2;
  }).forEach(function (_ref6) {
    var _ref7 = (0, _slicedToArray2.default)(_ref6, 2),
      style = _ref7[1];
    styleText += style;
  });

  // ==================== Fill Cache Path ====================
  styleText += (0, _util.toStyleStr)(".".concat(_cacheMapUtil.ATTR_CACHE_MAP, "{content:\"").concat((0, _cacheMapUtil.serialize)(cachePathMap), "\";}"), undefined, undefined, (0, _defineProperty2.default)({}, _cacheMapUtil.ATTR_CACHE_MAP, _cacheMapUtil.ATTR_CACHE_MAP), plain);
  return styleText;
}

/***/ }),

/***/ 75019:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extract = exports["default"] = exports.CSS_VAR_PREFIX = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _dynamicCSS = __webpack_require__(58296);
var _react = __webpack_require__(18038);
var _StyleContext = _interopRequireWildcard(__webpack_require__(82276));
var _util = __webpack_require__(93466);
var _cssVariables = __webpack_require__(23539);
var _useGlobalCache = _interopRequireDefault(__webpack_require__(13612));
var _useStyleRegister = __webpack_require__(77924);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var CSS_VAR_PREFIX = exports.CSS_VAR_PREFIX = 'cssVar';
var useCSSVarRegister = function useCSSVarRegister(config, fn) {
  var key = config.key,
    prefix = config.prefix,
    unitless = config.unitless,
    ignore = config.ignore,
    token = config.token,
    _config$scope = config.scope,
    scope = _config$scope === void 0 ? '' : _config$scope;
  var _useContext = (0, _react.useContext)(_StyleContext.default),
    instanceId = _useContext.cache.instanceId,
    container = _useContext.container;
  var tokenKey = token._tokenKey;
  var stylePath = [].concat((0, _toConsumableArray2.default)(config.path), [key, scope, tokenKey]);
  var cache = (0, _useGlobalCache.default)(CSS_VAR_PREFIX, stylePath, function () {
    var originToken = fn();
    var _transformToken = (0, _cssVariables.transformToken)(originToken, key, {
        prefix: prefix,
        unitless: unitless,
        ignore: ignore,
        scope: scope
      }),
      _transformToken2 = (0, _slicedToArray2.default)(_transformToken, 2),
      mergedToken = _transformToken2[0],
      cssVarsStr = _transformToken2[1];
    var styleId = (0, _useStyleRegister.uniqueHash)(stylePath, cssVarsStr);
    return [mergedToken, cssVarsStr, styleId, key];
  }, function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 3),
      styleId = _ref2[2];
    if (_util.isClientSide) {
      (0, _dynamicCSS.removeCSS)(styleId, {
        mark: _StyleContext.ATTR_MARK
      });
    }
  }, function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 3),
      cssVarsStr = _ref4[1],
      styleId = _ref4[2];
    if (!cssVarsStr) {
      return;
    }
    var style = (0, _dynamicCSS.updateCSS)(cssVarsStr, styleId, {
      mark: _StyleContext.ATTR_MARK,
      prepend: 'queue',
      attachTo: container,
      priority: -999
    });
    style[_StyleContext.CSS_IN_JS_INSTANCE] = instanceId;

    // Used for `useCacheToken` to remove on batch when token removed
    style.setAttribute(_StyleContext.ATTR_TOKEN, key);
  });
  return cache;
};
var extract = exports.extract = function extract(cache, effectStyles, options) {
  var _cache = (0, _slicedToArray2.default)(cache, 4),
    styleStr = _cache[1],
    styleId = _cache[2],
    cssVarKey = _cache[3];
  var _ref5 = options || {},
    plain = _ref5.plain;
  if (!styleStr) {
    return null;
  }
  var order = -999;

  // ====================== Style ======================
  // Used for rc-util
  var sharedAttrs = {
    'data-rc-order': 'prependQueue',
    'data-rc-priority': "".concat(order)
  };
  var styleText = (0, _util.toStyleStr)(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};
var _default = exports["default"] = useCSSVarRegister;

/***/ }),

/***/ 66488:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TOKEN_PREFIX = void 0;
exports["default"] = useCacheToken;
exports.getComputedToken = exports.extract = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _hash = _interopRequireDefault(__webpack_require__(32406));
var _dynamicCSS = __webpack_require__(58296);
var _react = __webpack_require__(18038);
var _StyleContext = _interopRequireWildcard(__webpack_require__(82276));
var _util = __webpack_require__(93466);
var _cssVariables = __webpack_require__(23539);
var _useGlobalCache = _interopRequireDefault(__webpack_require__(13612));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var EMPTY_OVERRIDE = {};

// Generate different prefix to make user selector break in production env.
// This helps developer not to do style override directly on the hash id.
var hashPrefix =  false ? 0 : 'css';
var tokenKeys = new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key, instanceId) {
  if (typeof document !== 'undefined') {
    var styles = document.querySelectorAll("style[".concat(_StyleContext.ATTR_TOKEN, "=\"").concat(key, "\"]"));
    styles.forEach(function (style) {
      if (style[_StyleContext.CSS_IN_JS_INSTANCE] === instanceId) {
        var _style$parentNode;
        (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 || _style$parentNode.removeChild(style);
      }
    });
  }
}
var TOKEN_THRESHOLD = 0;

// Remove will check current keys first
function cleanTokenStyle(tokenKey, instanceId) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function (key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });

  // Should keep tokens under threshold for not to insert style too often
  if (tokenKeyList.length - cleanableKeyList.length > TOKEN_THRESHOLD) {
    cleanableKeyList.forEach(function (key) {
      removeStyleTags(key, instanceId);
      tokenKeys.delete(key);
    });
  }
}
var getComputedToken = exports.getComputedToken = function getComputedToken(originToken, overrideToken, theme, format) {
  var derivativeToken = theme.getDerivativeToken(originToken);

  // Merge with override
  var mergedDerivativeToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, derivativeToken), overrideToken);

  // Format if needed
  if (format) {
    mergedDerivativeToken = format(mergedDerivativeToken);
  }
  return mergedDerivativeToken;
};
var TOKEN_PREFIX = exports.TOKEN_PREFIX = 'token';
/**
 * Cache theme derivative token as global shared one
 * @param theme Theme entity
 * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
 * @param option Additional config
 * @returns Call Theme.getDerivativeToken(tokenObject) to get token
 */
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _useContext = (0, _react.useContext)(_StyleContext.default),
    instanceId = _useContext.cache.instanceId,
    container = _useContext.container;
  var _option$salt = option.salt,
    salt = _option$salt === void 0 ? '' : _option$salt,
    _option$override = option.override,
    override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
    formatToken = option.formatToken,
    compute = option.getComputedToken,
    cssVar = option.cssVar;

  // Basic - We do basic cache here
  var mergedToken = (0, _util.memoResult)(function () {
    return Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(tokens)));
  }, tokens);
  var tokenStr = (0, _util.flattenToken)(mergedToken);
  var overrideTokenStr = (0, _util.flattenToken)(override);
  var cssVarStr = cssVar ? (0, _util.flattenToken)(cssVar) : '';
  var cachedToken = (0, _useGlobalCache.default)(TOKEN_PREFIX, [salt, theme.id, tokenStr, overrideTokenStr, cssVarStr], function () {
    var _cssVar$key;
    var mergedDerivativeToken = compute ? compute(mergedToken, override, theme) : getComputedToken(mergedToken, override, theme, formatToken);

    // Replace token value with css variables
    var actualToken = (0, _objectSpread2.default)({}, mergedDerivativeToken);
    var cssVarsStr = '';
    if (!!cssVar) {
      var _transformToken = (0, _cssVariables.transformToken)(mergedDerivativeToken, cssVar.key, {
        prefix: cssVar.prefix,
        ignore: cssVar.ignore,
        unitless: cssVar.unitless,
        preserve: cssVar.preserve
      });
      var _transformToken2 = (0, _slicedToArray2.default)(_transformToken, 2);
      mergedDerivativeToken = _transformToken2[0];
      cssVarsStr = _transformToken2[1];
    }

    // Optimize for `useStyleRegister` performance
    var tokenKey = (0, _util.token2key)(mergedDerivativeToken, salt);
    mergedDerivativeToken._tokenKey = tokenKey;
    actualToken._tokenKey = (0, _util.token2key)(actualToken, salt);
    var themeKey = (_cssVar$key = cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) !== null && _cssVar$key !== void 0 ? _cssVar$key : tokenKey;
    mergedDerivativeToken._themeKey = themeKey;
    recordCleanToken(themeKey);
    var hashId = "".concat(hashPrefix, "-").concat((0, _hash.default)(tokenKey));
    mergedDerivativeToken._hashId = hashId; // Not used

    return [mergedDerivativeToken, hashId, actualToken, cssVarsStr, (cssVar === null || cssVar === void 0 ? void 0 : cssVar.key) || ''];
  }, function (cache) {
    // Remove token will remove all related style
    cleanTokenStyle(cache[0]._themeKey, instanceId);
  }, function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 4),
      token = _ref2[0],
      cssVarsStr = _ref2[3];
    if (cssVar && cssVarsStr) {
      var style = (0, _dynamicCSS.updateCSS)(cssVarsStr, (0, _hash.default)("css-variables-".concat(token._themeKey)), {
        mark: _StyleContext.ATTR_MARK,
        prepend: 'queue',
        attachTo: container,
        priority: -999
      });
      style[_StyleContext.CSS_IN_JS_INSTANCE] = instanceId;

      // Used for `useCacheToken` to remove on batch when token removed
      style.setAttribute(_StyleContext.ATTR_TOKEN, token._themeKey);
    }
  });
  return cachedToken;
}
var extract = exports.extract = function extract(cache, effectStyles, options) {
  var _cache = (0, _slicedToArray2.default)(cache, 5),
    realToken = _cache[2],
    styleStr = _cache[3],
    cssVarKey = _cache[4];
  var _ref3 = options || {},
    plain = _ref3.plain;
  if (!styleStr) {
    return null;
  }
  var styleId = realToken._tokenKey;
  var order = -999;

  // ====================== Style ======================
  // Used for rc-util
  var sharedAttrs = {
    'data-rc-order': 'prependQueue',
    'data-rc-priority': "".concat(order)
  };
  var styleText = (0, _util.toStyleStr)(styleStr, cssVarKey, styleId, sharedAttrs, plain);
  return [order, styleId, styleText];
};

/***/ }),

/***/ 12523:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import canUseDom from 'rc-util/lib/Dom/canUseDom';

// We need fully clone React function here
// to avoid webpack warning React 17 do not export `useId`
var fullClone = (0, _objectSpread2.default)({}, React);
var useInsertionEffect = fullClone.useInsertionEffect;
/**
 * Polyfill `useInsertionEffect` for React < 18
 * @param renderEffect will be executed in `useMemo`, and do not have callback
 * @param effect will be executed in `useLayoutEffect`
 * @param deps
 */
var useInsertionEffectPolyfill = function useInsertionEffectPolyfill(renderEffect, effect, deps) {
  React.useMemo(renderEffect, deps);
  (0, _useLayoutEffect.default)(function () {
    return effect(true);
  }, deps);
};

/**
 * Compatible `useInsertionEffect`
 * will use `useInsertionEffect` if React version >= 18,
 * otherwise use `useInsertionEffectPolyfill`.
 */
var useCompatibleInsertionEffect = useInsertionEffect ? function (renderEffect, effect, deps) {
  return useInsertionEffect(function () {
    renderEffect();
    return effect();
  }, deps);
} : useInsertionEffectPolyfill;
var _default = exports["default"] = useCompatibleInsertionEffect;

/***/ }),

/***/ 18358:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _warning = __webpack_require__(32038);
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var fullClone = (0, _objectSpread2.default)({}, React);
var useInsertionEffect = fullClone.useInsertionEffect;

// DO NOT register functions in useEffect cleanup function, or functions that registered will never be called.
var useCleanupRegister = function useCleanupRegister(deps) {
  var effectCleanups = [];
  var cleanupFlag = false;
  function register(fn) {
    if (cleanupFlag) {
      if (false) {}
      return;
    }
    effectCleanups.push(fn);
  }
  React.useEffect(function () {
    // Compatible with strict mode
    cleanupFlag = false;
    return function () {
      cleanupFlag = true;
      if (effectCleanups.length) {
        effectCleanups.forEach(function (fn) {
          return fn();
        });
      }
    };
  }, deps);
  return register;
};
var useRun = function useRun() {
  return function (fn) {
    fn();
  };
};

// Only enable register in React 18
var useEffectCleanupRegister = typeof useInsertionEffect !== 'undefined' ? useCleanupRegister : useRun;
var _default = exports["default"] = useEffectCleanupRegister;

/***/ }),

/***/ 13612:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useGlobalCache;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _StyleContext = _interopRequireDefault(__webpack_require__(82276));
var _useCompatibleInsertionEffect = _interopRequireDefault(__webpack_require__(12523));
var _useEffectCleanupRegister = _interopRequireDefault(__webpack_require__(18358));
var _useHMR = _interopRequireDefault(__webpack_require__(46920));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function useGlobalCache(prefix, keyPath, cacheFn, onCacheRemove,
// Add additional effect trigger by `useInsertionEffect`
onCacheEffect) {
  var _React$useContext = React.useContext(_StyleContext.default),
    globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat((0, _toConsumableArray2.default)(keyPath));
  var deps = fullPath.join('_');
  var register = (0, _useEffectCleanupRegister.default)([deps]);
  var HMRUpdate = (0, _useHMR.default)();
  var buildCache = function buildCache(updater) {
    globalCache.update(fullPath, function (prevCache) {
      var _ref = prevCache || [undefined, undefined],
        _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        _ref2$ = _ref2[0],
        times = _ref2$ === void 0 ? 0 : _ref2$,
        cache = _ref2[1];

      // HMR should always ignore cache since developer may change it
      var tmpCache = cache;
      if (false) {}
      var mergedCache = tmpCache || cacheFn();
      var data = [times, mergedCache];

      // Call updater if need additional logic
      return updater ? updater(data) : data;
    });
  };

  // Create cache
  React.useMemo(function () {
    buildCache();
  }, /* eslint-disable react-hooks/exhaustive-deps */
  [deps]
  /* eslint-enable */);

  var cacheEntity = globalCache.get(fullPath);

  // HMR clean the cache but not trigger `useMemo` again
  // Let's fallback of this
  // ref https://github.com/ant-design/cssinjs/issues/127
  if (false) {}
  var cacheContent = cacheEntity[1];

  // Remove if no need anymore
  (0, _useCompatibleInsertionEffect.default)(function () {
    onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
  }, function (polyfill) {
    // It's bad to call build again in effect.
    // But we have to do this since StrictMode will call effect twice
    // which will clear cache on the first time.
    buildCache(function (_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        times = _ref4[0],
        cache = _ref4[1];
      if (polyfill && times === 0) {
        onCacheEffect === null || onCacheEffect === void 0 || onCacheEffect(cacheContent);
      }
      return [times + 1, cache];
    });
    return function () {
      globalCache.update(fullPath, function (prevCache) {
        var _ref5 = prevCache || [],
          _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
          _ref6$ = _ref6[0],
          times = _ref6$ === void 0 ? 0 : _ref6$,
          cache = _ref6[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          // Always remove styles in useEffect callback
          register(function () {
            // With polyfill, registered callback will always be called synchronously
            // But without polyfill, it will be called in effect clean up,
            // And by that time this cache is cleaned up.
            if (polyfill || !globalCache.get(fullPath)) {
              onCacheRemove === null || onCacheRemove === void 0 || onCacheRemove(cache, false);
            }
          });
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, [deps]);
  return cacheContent;
}

/***/ }),

/***/ 46920:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
function useProdHMR() {
  return false;
}
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var _default = exports["default"] =  true ? useProdHMR : 0; // Webpack `module.hot.accept` do not support any deps update trigger
// We have to hack handler to force mark as HRM
if (false) { var originWebpackHotUpdate, win; }

/***/ }),

/***/ 77924:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof3 = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.STYLE_PREFIX = void 0;
exports["default"] = useStyleRegister;
exports.extract = void 0;
exports.normalizeStyle = normalizeStyle;
exports.parseStyle = void 0;
exports.uniqueHash = uniqueHash;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _hash = _interopRequireDefault(__webpack_require__(32406));
var _dynamicCSS = __webpack_require__(58296);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _unitless = _interopRequireDefault(__webpack_require__(62865));
var _stylis = __webpack_require__(56836);
var _linters = __webpack_require__(5532);
var _StyleContext = _interopRequireWildcard(__webpack_require__(82276));
var _util = __webpack_require__(93466);
var _cacheMapUtil = __webpack_require__(57406);
var _useGlobalCache3 = _interopRequireDefault(__webpack_require__(13612));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof3(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// @ts-ignore

var SKIP_CHECK = '_skip_check_';
var MULTI_VALUE = '_multi_value_';
// ============================================================================
// ==                                 Parser                                 ==
// ============================================================================
// Preprocessor style content to browser support one
function normalizeStyle(styleStr) {
  var serialized = (0, _stylis.serialize)((0, _stylis.compile)(styleStr), _stylis.stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
  return (0, _typeof2.default)(value) === 'object' && value && (SKIP_CHECK in value || MULTI_VALUE in value);
}

// 注入 hash 值
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = ".".concat(hashId);
  var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;

  // 注入 hashId
  var keys = key.split(',').map(function (k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);

    // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
    var firstPath = fullPath[0] || '';
    var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
    firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat((0, _toConsumableArray2.default)(fullPath.slice(1))).join(' ');
  });
  return keys.join(',');
}
// Parse CSSObject to style content
var parseStyle = exports.parseStyle = function parseStyle(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      root: true,
      parentSelectors: []
    },
    root = _ref.root,
    injectHash = _ref.injectHash,
    parentSelectors = _ref.parentSelectors;
  var hashId = config.hashId,
    layer = config.layer,
    path = config.path,
    hashPriority = config.hashPriority,
    _config$transformers = config.transformers,
    transformers = _config$transformers === void 0 ? [] : _config$transformers,
    _config$linters = config.linters,
    linters = _config$linters === void 0 ? [] : _config$linters;
  var styleStr = '';
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle(keyframes.style, config, {
          root: false,
          parentSelectors: parentSelectors
        }),
        _parseStyle2 = (0, _slicedToArray2.default)(_parseStyle, 1),
        _parsedStr = _parseStyle2[0];
      effectStyle[animationName] = "@keyframes ".concat(keyframes.getName(hashId)).concat(_parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    list.forEach(function (item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function (originStyle) {
    // Only root level can use raw string
    var style = typeof originStyle === 'string' && !root ? {} : originStyle;
    if (typeof style === 'string') {
      styleStr += "".concat(style, "\n");
    } else if (style._keyframe) {
      // Keyframe
      parseKeyframes(style);
    } else {
      var mergedStyle = transformers.reduce(function (prev, trans) {
        var _trans$visit;
        return (trans === null || trans === void 0 || (_trans$visit = trans.visit) === null || _trans$visit === void 0 ? void 0 : _trans$visit.call(trans, prev)) || prev;
      }, style);

      // Normal CSSObject
      Object.keys(mergedStyle).forEach(function (key) {
        var value = mergedStyle[key];
        if ((0, _typeof2.default)(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
          var subInjectHash = false;

          // 当成嵌套对象来处理
          var mergedKey = key.trim();
          // Whether treat child as root. In most case it is false.
          var nextRoot = false;

          // 拆分多个选择器
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              // 略过媒体查询，交给子节点继续插入 hashId
              subInjectHash = true;
            } else {
              // 注入 hashId
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
            // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
            // But it does not conform to stylis syntax,
            // and finally we will get `{color:red;}` as css, which is wrong.
            // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
            mergedKey = '';
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle(value, config, {
              root: nextRoot,
              injectHash: subInjectHash,
              parentSelectors: [].concat((0, _toConsumableArray2.default)(parentSelectors), [mergedKey])
            }),
            _parseStyle4 = (0, _slicedToArray2.default)(_parseStyle3, 2),
            _parsedStr2 = _parseStyle4[0],
            childEffectStyle = _parseStyle4[1];
          effectStyle = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, effectStyle), childEffectStyle);
          styleStr += "".concat(mergedKey).concat(_parsedStr2);
        } else {
          var _value;
          function appendStyle(cssKey, cssValue) {
            if (false) {}

            // 如果是样式则直接插入
            var styleName = cssKey.replace(/[A-Z]/g, function (match) {
              return "-".concat(match.toLowerCase());
            });

            // Auto suffix with px
            var formatValue = cssValue;
            if (!_unitless.default[cssKey] && typeof formatValue === 'number' && formatValue !== 0) {
              formatValue = "".concat(formatValue, "px");
            }

            // handle animationName & Keyframe value
            if (cssKey === 'animationName' && cssValue !== null && cssValue !== void 0 && cssValue._keyframe) {
              parseKeyframes(cssValue);
              formatValue = cssValue.getName(hashId);
            }
            styleStr += "".concat(styleName, ":").concat(formatValue, ";");
          }
          var actualValue = (_value = value === null || value === void 0 ? void 0 : value.value) !== null && _value !== void 0 ? _value : value;
          if ((0, _typeof2.default)(value) === 'object' && value !== null && value !== void 0 && value[MULTI_VALUE] && Array.isArray(actualValue)) {
            actualValue.forEach(function (item) {
              appendStyle(key, item);
            });
          } else {
            appendStyle(key, actualValue);
          }
        }
      });
    }
  });
  if (!root) {
    styleStr = "{".concat(styleStr, "}");
  } else if (layer && (0, _util.supportLayer)()) {
    var layerCells = layer.split(',');
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");

    // Order of layer if needed
    if (layerCells.length > 1) {
      // zombieJ: stylis do not support layer order, so we need to handle it manually.
      styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};

// ============================================================================
// ==                                Register                                ==
// ============================================================================
function uniqueHash(path, styleStr) {
  return (0, _hash.default)("".concat(path.join('%')).concat(styleStr));
}
function Empty() {
  return null;
}
var STYLE_PREFIX = exports.STYLE_PREFIX = 'style';
/**
 * Register a style to the global style sheet.
 */
function useStyleRegister(info, styleFn) {
  var token = info.token,
    path = info.path,
    hashId = info.hashId,
    layer = info.layer,
    nonce = info.nonce,
    clientOnly = info.clientOnly,
    _info$order = info.order,
    order = _info$order === void 0 ? 0 : _info$order;
  var _React$useContext = React.useContext(_StyleContext.default),
    autoClear = _React$useContext.autoClear,
    mock = _React$useContext.mock,
    defaultCache = _React$useContext.defaultCache,
    hashPriority = _React$useContext.hashPriority,
    container = _React$useContext.container,
    ssrInline = _React$useContext.ssrInline,
    transformers = _React$useContext.transformers,
    linters = _React$useContext.linters,
    cache = _React$useContext.cache;
  var tokenKey = token._tokenKey;
  var fullPath = [tokenKey].concat((0, _toConsumableArray2.default)(path));

  // Check if need insert style
  var isMergedClientSide = _util.isClientSide;
  if (false) {}
  var _useGlobalCache = (0, _useGlobalCache3.default)(STYLE_PREFIX, fullPath,
    // Create cache if needed
    function () {
      var cachePath = fullPath.join('|');

      // Get style from SSR inline style directly
      if ((0, _cacheMapUtil.existPath)(cachePath)) {
        var _getStyleAndHash = (0, _cacheMapUtil.getStyleAndHash)(cachePath),
          _getStyleAndHash2 = (0, _slicedToArray2.default)(_getStyleAndHash, 2),
          inlineCacheStyleStr = _getStyleAndHash2[0],
          styleHash = _getStyleAndHash2[1];
        if (inlineCacheStyleStr) {
          return [inlineCacheStyleStr, tokenKey, styleHash, {}, clientOnly, order];
        }
      }

      // Generate style
      var styleObj = styleFn();
      var _parseStyle5 = parseStyle(styleObj, {
          hashId: hashId,
          hashPriority: hashPriority,
          layer: layer,
          path: path.join('-'),
          transformers: transformers,
          linters: linters
        }),
        _parseStyle6 = (0, _slicedToArray2.default)(_parseStyle5, 2),
        parsedStyle = _parseStyle6[0],
        effectStyle = _parseStyle6[1];
      var styleStr = normalizeStyle(parsedStyle);
      var styleId = uniqueHash(fullPath, styleStr);
      return [styleStr, tokenKey, styleId, effectStyle, clientOnly, order];
    },
    // Remove cache if no need
    function (_ref2, fromHMR) {
      var _ref3 = (0, _slicedToArray2.default)(_ref2, 3),
        styleId = _ref3[2];
      if ((fromHMR || autoClear) && _util.isClientSide) {
        (0, _dynamicCSS.removeCSS)(styleId, {
          mark: _StyleContext.ATTR_MARK
        });
      }
    },
    // Effect: Inject style here
    function (_ref4) {
      var _ref5 = (0, _slicedToArray2.default)(_ref4, 4),
        styleStr = _ref5[0],
        _ = _ref5[1],
        styleId = _ref5[2],
        effectStyle = _ref5[3];
      if (isMergedClientSide && styleStr !== _cacheMapUtil.CSS_FILE_STYLE) {
        var mergedCSSConfig = {
          mark: _StyleContext.ATTR_MARK,
          prepend: 'queue',
          attachTo: container,
          priority: order
        };
        var nonceStr = typeof nonce === 'function' ? nonce() : nonce;
        if (nonceStr) {
          mergedCSSConfig.csp = {
            nonce: nonceStr
          };
        }
        var style = (0, _dynamicCSS.updateCSS)(styleStr, styleId, mergedCSSConfig);
        style[_StyleContext.CSS_IN_JS_INSTANCE] = cache.instanceId;

        // Used for `useCacheToken` to remove on batch when token removed
        style.setAttribute(_StyleContext.ATTR_TOKEN, tokenKey);

        // Debug usage. Dev only
        if (false) {}

        // Inject client side effect style
        Object.keys(effectStyle).forEach(function (effectKey) {
          (0, _dynamicCSS.updateCSS)(normalizeStyle(effectStyle[effectKey]), "_effect-".concat(effectKey), mergedCSSConfig);
        });
      }
    }),
    _useGlobalCache2 = (0, _slicedToArray2.default)(_useGlobalCache, 3),
    cachedStyleStr = _useGlobalCache2[0],
    cachedTokenKey = _useGlobalCache2[1],
    cachedStyleId = _useGlobalCache2[2];
  return function (node) {
    var styleNode;
    if (!ssrInline || isMergedClientSide || !defaultCache) {
      styleNode = /*#__PURE__*/React.createElement(Empty, null);
    } else {
      var _ref6;
      styleNode = /*#__PURE__*/React.createElement("style", (0, _extends2.default)({}, (_ref6 = {}, (0, _defineProperty2.default)(_ref6, _StyleContext.ATTR_TOKEN, cachedTokenKey), (0, _defineProperty2.default)(_ref6, _StyleContext.ATTR_MARK, cachedStyleId), _ref6), {
        dangerouslySetInnerHTML: {
          __html: cachedStyleStr
        }
      }));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, styleNode, node);
  };
}
var extract = exports.extract = function extract(cache, effectStyles, options) {
  var _cache = (0, _slicedToArray2.default)(cache, 6),
    styleStr = _cache[0],
    tokenKey = _cache[1],
    styleId = _cache[2],
    effectStyle = _cache[3],
    clientOnly = _cache[4],
    order = _cache[5];
  var _ref7 = options || {},
    plain = _ref7.plain;

  // Skip client only style
  if (clientOnly) {
    return null;
  }
  var keyStyleText = styleStr;

  // ====================== Style ======================
  // Used for rc-util
  var sharedAttrs = {
    'data-rc-order': 'prependQueue',
    'data-rc-priority': "".concat(order)
  };
  keyStyleText = (0, _util.toStyleStr)(styleStr, tokenKey, styleId, sharedAttrs, plain);

  // =============== Create effect style ===============
  if (effectStyle) {
    Object.keys(effectStyle).forEach(function (effectKey) {
      // Effect style can be reused
      if (!effectStyles[effectKey]) {
        effectStyles[effectKey] = true;
        var effectStyleStr = normalizeStyle(effectStyle[effectKey]);
        keyStyleText += (0, _util.toStyleStr)(effectStyleStr, tokenKey, "_effect-".concat(effectKey), sharedAttrs, plain);
      }
    });
  }
  return [order, styleId, keyStyleText];
};

/***/ }),

/***/ 64021:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Keyframes", ({
  enumerable: true,
  get: function get() {
    return _Keyframes.default;
  }
}));
Object.defineProperty(exports, "NaNLinter", ({
  enumerable: true,
  get: function get() {
    return _linters.NaNLinter;
  }
}));
Object.defineProperty(exports, "StyleProvider", ({
  enumerable: true,
  get: function get() {
    return _StyleContext.StyleProvider;
  }
}));
Object.defineProperty(exports, "Theme", ({
  enumerable: true,
  get: function get() {
    return _theme.Theme;
  }
}));
exports._experimental = void 0;
Object.defineProperty(exports, "createCache", ({
  enumerable: true,
  get: function get() {
    return _StyleContext.createCache;
  }
}));
Object.defineProperty(exports, "createTheme", ({
  enumerable: true,
  get: function get() {
    return _theme.createTheme;
  }
}));
Object.defineProperty(exports, "extractStyle", ({
  enumerable: true,
  get: function get() {
    return _extractStyle.default;
  }
}));
Object.defineProperty(exports, "getComputedToken", ({
  enumerable: true,
  get: function get() {
    return _useCacheToken.getComputedToken;
  }
}));
Object.defineProperty(exports, "legacyLogicalPropertiesTransformer", ({
  enumerable: true,
  get: function get() {
    return _legacyLogicalProperties.default;
  }
}));
Object.defineProperty(exports, "legacyNotSelectorLinter", ({
  enumerable: true,
  get: function get() {
    return _linters.legacyNotSelectorLinter;
  }
}));
Object.defineProperty(exports, "logicalPropertiesLinter", ({
  enumerable: true,
  get: function get() {
    return _linters.logicalPropertiesLinter;
  }
}));
Object.defineProperty(exports, "parentSelectorLinter", ({
  enumerable: true,
  get: function get() {
    return _linters.parentSelectorLinter;
  }
}));
Object.defineProperty(exports, "px2remTransformer", ({
  enumerable: true,
  get: function get() {
    return _px2rem.default;
  }
}));
Object.defineProperty(exports, "token2CSSVar", ({
  enumerable: true,
  get: function get() {
    return _cssVariables.token2CSSVar;
  }
}));
Object.defineProperty(exports, "unit", ({
  enumerable: true,
  get: function get() {
    return _util.unit;
  }
}));
Object.defineProperty(exports, "useCSSVarRegister", ({
  enumerable: true,
  get: function get() {
    return _useCSSVarRegister.default;
  }
}));
Object.defineProperty(exports, "useCacheToken", ({
  enumerable: true,
  get: function get() {
    return _useCacheToken.default;
  }
}));
Object.defineProperty(exports, "useStyleRegister", ({
  enumerable: true,
  get: function get() {
    return _useStyleRegister.default;
  }
}));
var _extractStyle = _interopRequireDefault(__webpack_require__(5863));
var _useCacheToken = _interopRequireWildcard(__webpack_require__(66488));
var _useCSSVarRegister = _interopRequireDefault(__webpack_require__(75019));
var _useStyleRegister = _interopRequireDefault(__webpack_require__(77924));
var _Keyframes = _interopRequireDefault(__webpack_require__(6350));
var _linters = __webpack_require__(5532);
var _StyleContext = __webpack_require__(82276);
var _theme = __webpack_require__(25746);
var _legacyLogicalProperties = _interopRequireDefault(__webpack_require__(85355));
var _px2rem = _interopRequireDefault(__webpack_require__(72931));
var _util = __webpack_require__(93466);
var _cssVariables = __webpack_require__(23539);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var _experimental = exports._experimental = {
  supportModernCSS: function supportModernCSS() {
    return (0, _util.supportWhere)() && (0, _util.supportLogicProps)();
  }
};

/***/ }),

/***/ 57862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
var linter = function linter(key, value, info) {
  if (typeof value === 'string' && /NaN/g.test(value) || Number.isNaN(value)) {
    (0, _utils.lintWarning)("Unexpected 'NaN' in property '".concat(key, ": ").concat(value, "'."), info);
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 19345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
var linter = function linter(key, value, info) {
  if (key === 'content') {
    // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
    var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
    var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
    if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
      (0, _utils.lintWarning)("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`."), info);
    }
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 20386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
var linter = function linter(key, value, info) {
  if (key === 'animation') {
    if (info.hashId && value !== 'none') {
      (0, _utils.lintWarning)("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), info);
    }
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 5532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NaNLinter", ({
  enumerable: true,
  get: function get() {
    return _NaNLinter.default;
  }
}));
Object.defineProperty(exports, "contentQuotesLinter", ({
  enumerable: true,
  get: function get() {
    return _contentQuotesLinter.default;
  }
}));
Object.defineProperty(exports, "hashedAnimationLinter", ({
  enumerable: true,
  get: function get() {
    return _hashedAnimationLinter.default;
  }
}));
Object.defineProperty(exports, "legacyNotSelectorLinter", ({
  enumerable: true,
  get: function get() {
    return _legacyNotSelectorLinter.default;
  }
}));
Object.defineProperty(exports, "logicalPropertiesLinter", ({
  enumerable: true,
  get: function get() {
    return _logicalPropertiesLinter.default;
  }
}));
Object.defineProperty(exports, "parentSelectorLinter", ({
  enumerable: true,
  get: function get() {
    return _parentSelectorLinter.default;
  }
}));
var _contentQuotesLinter = _interopRequireDefault(__webpack_require__(19345));
var _hashedAnimationLinter = _interopRequireDefault(__webpack_require__(20386));
var _legacyNotSelectorLinter = _interopRequireDefault(__webpack_require__(58154));
var _logicalPropertiesLinter = _interopRequireDefault(__webpack_require__(34674));
var _NaNLinter = _interopRequireDefault(__webpack_require__(57862));
var _parentSelectorLinter = _interopRequireDefault(__webpack_require__(2334));

/***/ }),

/***/ 58154:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
function isConcatSelector(selector) {
  var _selector$match;
  var notContent = ((_selector$match = selector.match(/:not\(([^)]*)\)/)) === null || _selector$match === void 0 ? void 0 : _selector$match[1]) || '';

  // split selector. e.g.
  // `h1#a.b` => ['h1', #a', '.b']
  var splitCells = notContent.split(/(\[[^[]*])|(?=[.#])/).filter(function (str) {
    return str;
  });
  return splitCells.length > 1;
}
function parsePath(info) {
  return info.parentSelectors.reduce(function (prev, cur) {
    if (!prev) {
      return cur;
    }
    return cur.includes('&') ? cur.replace(/&/g, prev) : "".concat(prev, " ").concat(cur);
  }, '');
}
var linter = function linter(key, value, info) {
  var parentSelectorPath = parsePath(info);
  var notList = parentSelectorPath.match(/:not\([^)]*\)/g) || [];
  if (notList.length > 0 && notList.some(isConcatSelector)) {
    (0, _utils.lintWarning)("Concat ':not' selector not support in legacy browsers.", info);
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 34674:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
var linter = function linter(key, value, info) {
  switch (key) {
    case 'marginLeft':
    case 'marginRight':
    case 'paddingLeft':
    case 'paddingRight':
    case 'left':
    case 'right':
    case 'borderLeft':
    case 'borderLeftWidth':
    case 'borderLeftStyle':
    case 'borderLeftColor':
    case 'borderRight':
    case 'borderRightWidth':
    case 'borderRightStyle':
    case 'borderRightColor':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      (0, _utils.lintWarning)("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      return;
    case 'margin':
    case 'padding':
    case 'borderWidth':
    case 'borderStyle':
      // case 'borderColor':
      if (typeof value === 'string') {
        var valueArr = value.split(' ').map(function (item) {
          return item.trim();
        });
        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          (0, _utils.lintWarning)("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }
      return;
    case 'clear':
    case 'textAlign':
      if (value === 'left' || value === 'right') {
        (0, _utils.lintWarning)("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
      }
      return;
    case 'borderRadius':
      if (typeof value === 'string') {
        var radiusGroups = value.split('/').map(function (item) {
          return item.trim();
        });
        var invalid = radiusGroups.reduce(function (result, group) {
          if (result) {
            return result;
          }
          var radiusArr = group.split(' ').map(function (item) {
            return item.trim();
          });
          // borderRadius: '2px 4px'
          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          }
          // borderRadius: '4px 4px 2px'
          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          }
          // borderRadius: '4px 4px 2px 4px'
          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }
          return result;
        }, false);
        if (invalid) {
          (0, _utils.lintWarning)("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), info);
        }
      }
      return;
    default:
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 2334:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _utils = __webpack_require__(78867);
var linter = function linter(key, value, info) {
  if (info.parentSelectors.some(function (selector) {
    var selectors = selector.split(',');
    return selectors.some(function (item) {
      return item.split('&').length > 2;
    });
  })) {
    (0, _utils.lintWarning)('Should not use more than one `&` in a selector.', info);
  }
};
var _default = exports["default"] = linter;

/***/ }),

/***/ 78867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.lintWarning = lintWarning;
var _warning = _interopRequireDefault(__webpack_require__(32038));
function lintWarning(message, info) {
  var path = info.path,
    parentSelectors = info.parentSelectors;
  (0, _warning.default)(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in ".concat(path, ": ") : '').concat(message).concat(parentSelectors.length ? " Selector: ".concat(parentSelectors.join(' | ')) : ''));
}

/***/ }),

/***/ 92654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _warning = __webpack_require__(32038);
var uuid = 0;

/**
 * Theme with algorithms to derive tokens from design tokens.
 * Use `createTheme` first which will help to manage the theme instance cache.
 */
var Theme = exports["default"] = /*#__PURE__*/function () {
  function Theme(derivatives) {
    (0, _classCallCheck2.default)(this, Theme);
    (0, _defineProperty2.default)(this, "derivatives", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      (0, _warning.warning)(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
    }
    uuid += 1;
  }
  (0, _createClass2.default)(Theme, [{
    key: "getDerivativeToken",
    value: function getDerivativeToken(token) {
      return this.derivatives.reduce(function (result, derivative) {
        return derivative(token, result);
      }, undefined);
    }
  }]);
  return Theme;
}();

/***/ }),

/***/ 49824:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.sameDerivativeOption = sameDerivativeOption;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
// ================================== Cache ==================================

function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = exports["default"] = /*#__PURE__*/function () {
  function ThemeCache() {
    (0, _classCallCheck2.default)(this, ThemeCache);
    (0, _defineProperty2.default)(this, "cache", void 0);
    (0, _defineProperty2.default)(this, "keys", void 0);
    (0, _defineProperty2.default)(this, "cacheCallTimes", void 0);
    this.cache = new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  (0, _createClass2.default)(ThemeCache, [{
    key: "size",
    value: function size() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function internalGet(derivativeOption) {
      var _cache2, _cache3;
      var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var cache = {
        map: this.cache
      };
      derivativeOption.forEach(function (derivative) {
        if (!cache) {
          cache = undefined;
        } else {
          var _cache;
          cache = (_cache = cache) === null || _cache === void 0 || (_cache = _cache.map) === null || _cache === void 0 ? void 0 : _cache.get(derivative);
        }
      });
      if ((_cache2 = cache) !== null && _cache2 !== void 0 && _cache2.value && updateCallTimes) {
        cache.value[1] = this.cacheCallTimes++;
      }
      return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
    }
  }, {
    key: "get",
    value: function get(derivativeOption) {
      var _this$internalGet;
      return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
    }
  }, {
    key: "has",
    value: function has(derivativeOption) {
      return !!this.internalGet(derivativeOption);
    }
  }, {
    key: "set",
    value: function set(derivativeOption, value) {
      var _this = this;
      // New cache
      if (!this.has(derivativeOption)) {
        if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
          var _this$keys$reduce = this.keys.reduce(function (result, key) {
              var _result = (0, _slicedToArray2.default)(result, 2),
                callTimes = _result[1];
              if (_this.internalGet(key)[1] < callTimes) {
                return [key, _this.internalGet(key)[1]];
              }
              return result;
            }, [this.keys[0], this.cacheCallTimes]),
            _this$keys$reduce2 = (0, _slicedToArray2.default)(_this$keys$reduce, 1),
            targetKey = _this$keys$reduce2[0];
          this.delete(targetKey);
        }
        this.keys.push(derivativeOption);
      }
      var cache = this.cache;
      derivativeOption.forEach(function (derivative, index) {
        if (index === derivativeOption.length - 1) {
          cache.set(derivative, {
            value: [value, _this.cacheCallTimes++]
          });
        } else {
          var cacheValue = cache.get(derivative);
          if (!cacheValue) {
            cache.set(derivative, {
              map: new Map()
            });
          } else if (!cacheValue.map) {
            cacheValue.map = new Map();
          }
          cache = cache.get(derivative).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function deleteByPath(currentCache, derivatives) {
      var cache = currentCache.get(derivatives[0]);
      if (derivatives.length === 1) {
        var _cache$value;
        if (!cache.map) {
          currentCache.delete(derivatives[0]);
        } else {
          currentCache.set(derivatives[0], {
            map: cache.map
          });
        }
        return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
      }
      var result = this.deleteByPath(cache.map, derivatives.slice(1));
      if ((!cache.map || cache.map.size === 0) && !cache.value) {
        currentCache.delete(derivatives[0]);
      }
      return result;
    }
  }, {
    key: "delete",
    value: function _delete(derivativeOption) {
      // If cache exists
      if (this.has(derivativeOption)) {
        this.keys = this.keys.filter(function (item) {
          return !sameDerivativeOption(item, derivativeOption);
        });
        return this.deleteByPath(this.cache, derivativeOption);
      }
      return undefined;
    }
  }]);
  return ThemeCache;
}();
(0, _defineProperty2.default)(ThemeCache, "MAX_CACHE_SIZE", 20);
(0, _defineProperty2.default)(ThemeCache, "MAX_CACHE_OFFSET", 5);

/***/ }),

/***/ 34871:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = createTheme;
var _ThemeCache = _interopRequireDefault(__webpack_require__(49824));
var _Theme = _interopRequireDefault(__webpack_require__(92654));
var cacheThemes = new _ThemeCache.default();

/**
 * Same as new Theme, but will always return same one if `derivative` not changed.
 */
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  // Create new theme if not exist
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new _Theme.default(derivativeArr));
  }

  // Get theme from cache and return
  return cacheThemes.get(derivativeArr);
}

/***/ }),

/***/ 25746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Theme", ({
  enumerable: true,
  get: function get() {
    return _Theme.default;
  }
}));
Object.defineProperty(exports, "ThemeCache", ({
  enumerable: true,
  get: function get() {
    return _ThemeCache.default;
  }
}));
Object.defineProperty(exports, "createTheme", ({
  enumerable: true,
  get: function get() {
    return _createTheme.default;
  }
}));
var _createTheme = _interopRequireDefault(__webpack_require__(34871));
var _Theme = _interopRequireDefault(__webpack_require__(92654));
var _ThemeCache = _interopRequireDefault(__webpack_require__(49824));

/***/ }),

/***/ 85355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
function splitValues(value) {
  if (typeof value === 'number') {
    return [[value], false];
  }
  var rawStyle = String(value).trim();
  var importantCells = rawStyle.match(/(.*)(!important)/);
  var splitStyle = (importantCells ? importantCells[1] : rawStyle).trim().split(/\s+/);

  // Combine styles split in brackets, like `calc(1px + 2px)`
  var temp = '';
  var brackets = 0;
  return [splitStyle.reduce(function (list, item) {
    if (item.includes('(') || item.includes(')')) {
      var left = item.split('(').length - 1;
      var right = item.split(')').length - 1;
      brackets += left - right;
    }
    if (brackets === 0) {
      list.push(temp + item);
      temp = '';
    } else if (brackets > 0) {
      temp += item;
    }
    return list;
  }, []), !!importantCells];
}
function noSplit(list) {
  list.notSplit = true;
  return list;
}
var keyMap = {
  // Inset
  inset: ['top', 'right', 'bottom', 'left'],
  insetBlock: ['top', 'bottom'],
  insetBlockStart: ['top'],
  insetBlockEnd: ['bottom'],
  insetInline: ['left', 'right'],
  insetInlineStart: ['left'],
  insetInlineEnd: ['right'],
  // Margin
  marginBlock: ['marginTop', 'marginBottom'],
  marginBlockStart: ['marginTop'],
  marginBlockEnd: ['marginBottom'],
  marginInline: ['marginLeft', 'marginRight'],
  marginInlineStart: ['marginLeft'],
  marginInlineEnd: ['marginRight'],
  // Padding
  paddingBlock: ['paddingTop', 'paddingBottom'],
  paddingBlockStart: ['paddingTop'],
  paddingBlockEnd: ['paddingBottom'],
  paddingInline: ['paddingLeft', 'paddingRight'],
  paddingInlineStart: ['paddingLeft'],
  paddingInlineEnd: ['paddingRight'],
  // Border
  borderBlock: noSplit(['borderTop', 'borderBottom']),
  borderBlockStart: noSplit(['borderTop']),
  borderBlockEnd: noSplit(['borderBottom']),
  borderInline: noSplit(['borderLeft', 'borderRight']),
  borderInlineStart: noSplit(['borderLeft']),
  borderInlineEnd: noSplit(['borderRight']),
  // Border width
  borderBlockWidth: ['borderTopWidth', 'borderBottomWidth'],
  borderBlockStartWidth: ['borderTopWidth'],
  borderBlockEndWidth: ['borderBottomWidth'],
  borderInlineWidth: ['borderLeftWidth', 'borderRightWidth'],
  borderInlineStartWidth: ['borderLeftWidth'],
  borderInlineEndWidth: ['borderRightWidth'],
  // Border style
  borderBlockStyle: ['borderTopStyle', 'borderBottomStyle'],
  borderBlockStartStyle: ['borderTopStyle'],
  borderBlockEndStyle: ['borderBottomStyle'],
  borderInlineStyle: ['borderLeftStyle', 'borderRightStyle'],
  borderInlineStartStyle: ['borderLeftStyle'],
  borderInlineEndStyle: ['borderRightStyle'],
  // Border color
  borderBlockColor: ['borderTopColor', 'borderBottomColor'],
  borderBlockStartColor: ['borderTopColor'],
  borderBlockEndColor: ['borderBottomColor'],
  borderInlineColor: ['borderLeftColor', 'borderRightColor'],
  borderInlineStartColor: ['borderLeftColor'],
  borderInlineEndColor: ['borderRightColor'],
  // Border radius
  borderStartStartRadius: ['borderTopLeftRadius'],
  borderStartEndRadius: ['borderTopRightRadius'],
  borderEndStartRadius: ['borderBottomLeftRadius'],
  borderEndEndRadius: ['borderBottomRightRadius']
};
function wrapImportantAndSkipCheck(value, important) {
  var parsedValue = value;
  if (important) {
    parsedValue = "".concat(parsedValue, " !important");
  }
  return {
    _skip_check_: true,
    value: parsedValue
  };
}

/**
 * Convert css logical properties to legacy properties.
 * Such as: `margin-block-start` to `margin-top`.
 * Transform list:
 * - inset
 * - margin
 * - padding
 * - border
 */
var transform = {
  visit: function visit(cssObj) {
    var clone = {};
    Object.keys(cssObj).forEach(function (key) {
      var value = cssObj[key];
      var matchValue = keyMap[key];
      if (matchValue && (typeof value === 'number' || typeof value === 'string')) {
        var _splitValues = splitValues(value),
          _splitValues2 = (0, _slicedToArray2.default)(_splitValues, 2),
          _values = _splitValues2[0],
          _important = _splitValues2[1];
        if (matchValue.length && matchValue.notSplit) {
          // not split means always give same value like border
          matchValue.forEach(function (matchKey) {
            clone[matchKey] = wrapImportantAndSkipCheck(value, _important);
          });
        } else if (matchValue.length === 1) {
          // Handle like `marginBlockStart` => `marginTop`
          clone[matchValue[0]] = wrapImportantAndSkipCheck(value, _important);
        } else if (matchValue.length === 2) {
          // Handle like `marginBlock` => `marginTop` & `marginBottom`
          matchValue.forEach(function (matchKey, index) {
            var _values$index;
            clone[matchKey] = wrapImportantAndSkipCheck((_values$index = _values[index]) !== null && _values$index !== void 0 ? _values$index : _values[0], _important);
          });
        } else if (matchValue.length === 4) {
          // Handle like `inset` => `top` & `right` & `bottom` & `left`
          matchValue.forEach(function (matchKey, index) {
            var _ref, _values$index2;
            clone[matchKey] = wrapImportantAndSkipCheck((_ref = (_values$index2 = _values[index]) !== null && _values$index2 !== void 0 ? _values$index2 : _values[index - 2]) !== null && _ref !== void 0 ? _ref : _values[0], _important);
          });
        } else {
          clone[key] = value;
        }
      } else {
        clone[key] = value;
      }
    });
    return clone;
  }
};
var _default = exports["default"] = transform;

/***/ }),

/***/ 72931:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _unitless = _interopRequireDefault(__webpack_require__(62865));
/**
 * respect https://github.com/cuth/postcss-pxtorem
 */
// @ts-ignore

var pxRegex = /url\([^)]+\)|var\([^)]+\)|(\d*\.?\d+)px/g;
function toFixed(number, precision) {
  var multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}
var transform = function transform() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$rootValue = options.rootValue,
    rootValue = _options$rootValue === void 0 ? 16 : _options$rootValue,
    _options$precision = options.precision,
    precision = _options$precision === void 0 ? 5 : _options$precision,
    _options$mediaQuery = options.mediaQuery,
    mediaQuery = _options$mediaQuery === void 0 ? false : _options$mediaQuery;
  var pxReplace = function pxReplace(m, $1) {
    if (!$1) return m;
    var pixels = parseFloat($1);
    // covenant: pixels <= 1, not transform to rem @zombieJ
    if (pixels <= 1) return m;
    var fixedVal = toFixed(pixels / rootValue, precision);
    return "".concat(fixedVal, "rem");
  };
  var visit = function visit(cssObj) {
    var clone = (0, _objectSpread2.default)({}, cssObj);
    Object.entries(cssObj).forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (typeof value === 'string' && value.includes('px')) {
        var newValue = value.replace(pxRegex, pxReplace);
        clone[key] = newValue;
      }

      // no unit
      if (!_unitless.default[key] && typeof value === 'number' && value !== 0) {
        clone[key] = "".concat(value, "px").replace(pxRegex, pxReplace);
      }

      // Media queries
      var mergedKey = key.trim();
      if (mergedKey.startsWith('@') && mergedKey.includes('px') && mediaQuery) {
        var newKey = key.replace(pxRegex, pxReplace);
        clone[newKey] = clone[key];
        delete clone[key];
      }
    });
    return clone;
  };
  return {
    visit: visit
  };
};
var _default = exports["default"] = transform;

/***/ }),

/***/ 57406:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CSS_FILE_STYLE = exports.ATTR_CACHE_MAP = void 0;
exports.existPath = existPath;
exports.getStyleAndHash = getStyleAndHash;
exports.prepare = prepare;
exports.reset = reset;
exports.serialize = serialize;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _StyleContext = __webpack_require__(82276);
var ATTR_CACHE_MAP = exports.ATTR_CACHE_MAP = 'data-ant-cssinjs-cache-path';

/**
 * This marks style from the css file.
 * Which means not exist in `<style />` tag.
 */
var CSS_FILE_STYLE = exports.CSS_FILE_STYLE = '_FILE_STYLE__';
function serialize(cachePathMap) {
  return Object.keys(cachePathMap).map(function (path) {
    var hash = cachePathMap[path];
    return "".concat(path, ":").concat(hash);
  }).join(';');
}
var cachePathMap;
var fromCSSFile = true;

/**
 * @private Test usage only. Can save remove if no need.
 */
function reset(mockCache) {
  var fromFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  cachePathMap = mockCache;
  fromCSSFile = fromFile;
}
function prepare() {
  if (!cachePathMap) {
    cachePathMap = {};
    if ((0, _canUseDom.default)()) {
      var div = document.createElement('div');
      div.className = ATTR_CACHE_MAP;
      div.style.position = 'fixed';
      div.style.visibility = 'hidden';
      div.style.top = '-9999px';
      document.body.appendChild(div);
      var content = getComputedStyle(div).content || '';
      content = content.replace(/^"/, '').replace(/"$/, '');

      // Fill data
      content.split(';').forEach(function (item) {
        var _item$split = item.split(':'),
          _item$split2 = (0, _slicedToArray2.default)(_item$split, 2),
          path = _item$split2[0],
          hash = _item$split2[1];
        cachePathMap[path] = hash;
      });

      // Remove inline record style
      var inlineMapStyle = document.querySelector("style[".concat(ATTR_CACHE_MAP, "]"));
      if (inlineMapStyle) {
        var _inlineMapStyle$paren;
        fromCSSFile = false;
        (_inlineMapStyle$paren = inlineMapStyle.parentNode) === null || _inlineMapStyle$paren === void 0 || _inlineMapStyle$paren.removeChild(inlineMapStyle);
      }
      document.body.removeChild(div);
    }
  }
}
function existPath(path) {
  prepare();
  return !!cachePathMap[path];
}
function getStyleAndHash(path) {
  var hash = cachePathMap[path];
  var styleStr = null;
  if (hash && (0, _canUseDom.default)()) {
    if (fromCSSFile) {
      styleStr = CSS_FILE_STYLE;
    } else {
      var _style = document.querySelector("style[".concat(_StyleContext.ATTR_MARK, "=\"").concat(cachePathMap[path], "\"]"));
      if (_style) {
        styleStr = _style.innerHTML;
      } else {
        // Clean up since not exist anymore
        delete cachePathMap[path];
      }
    }
  }
  return [styleStr, hash];
}

/***/ }),

/***/ 23539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.transformToken = exports.token2CSSVar = exports.serializeCSSVar = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var token2CSSVar = exports.token2CSSVar = function token2CSSVar(token) {
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return "--".concat(prefix ? "".concat(prefix, "-") : '').concat(token).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2').replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();
};
var serializeCSSVar = exports.serializeCSSVar = function serializeCSSVar(cssVars, hashId, options) {
  if (!Object.keys(cssVars).length) {
    return '';
  }
  return ".".concat(hashId).concat(options !== null && options !== void 0 && options.scope ? ".".concat(options.scope) : '', "{").concat(Object.entries(cssVars).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return "".concat(key, ":").concat(value, ";");
  }).join(''), "}");
};
var transformToken = exports.transformToken = function transformToken(token, themeKey, config) {
  var cssVars = {};
  var result = {};
  Object.entries(token).forEach(function (_ref3) {
    var _config$preserve, _config$ignore;
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
      key = _ref4[0],
      value = _ref4[1];
    if (config !== null && config !== void 0 && (_config$preserve = config.preserve) !== null && _config$preserve !== void 0 && _config$preserve[key]) {
      result[key] = value;
    } else if ((typeof value === 'string' || typeof value === 'number') && !(config !== null && config !== void 0 && (_config$ignore = config.ignore) !== null && _config$ignore !== void 0 && _config$ignore[key])) {
      var _config$unitless;
      var cssVar = token2CSSVar(key, config === null || config === void 0 ? void 0 : config.prefix);
      cssVars[cssVar] = typeof value === 'number' && !(config !== null && config !== void 0 && (_config$unitless = config.unitless) !== null && _config$unitless !== void 0 && _config$unitless[key]) ? "".concat(value, "px") : String(value);
      result[key] = "var(".concat(cssVar, ")");
    }
  });
  return [result, serializeCSSVar(cssVars, themeKey, {
    scope: config === null || config === void 0 ? void 0 : config.scope
  })];
};

/***/ }),

/***/ 93466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.flattenToken = flattenToken;
exports.isClientSide = void 0;
exports.memoResult = memoResult;
exports.supportLayer = supportLayer;
exports.supportLogicProps = supportLogicProps;
exports.supportWhere = supportWhere;
exports.toStyleStr = toStyleStr;
exports.token2key = token2key;
exports.unit = unit;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread3 = _interopRequireDefault(__webpack_require__(89687));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _hash = _interopRequireDefault(__webpack_require__(32406));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _dynamicCSS = __webpack_require__(58296);
var _StyleContext = __webpack_require__(82276);
var _theme = __webpack_require__(25746);
// Create a cache for memo concat

var resultCache = new WeakMap();
var RESULT_VALUE = {};
function memoResult(callback, deps) {
  var current = resultCache;
  for (var i = 0; i < deps.length; i += 1) {
    var dep = deps[i];
    if (!current.has(dep)) {
      current.set(dep, new WeakMap());
    }
    current = current.get(dep);
  }
  if (!current.has(RESULT_VALUE)) {
    current.set(RESULT_VALUE, callback());
  }
  return current.get(RESULT_VALUE);
}

// Create a cache here to avoid always loop generate
var flattenTokenCache = new WeakMap();

/**
 * Flatten token to string, this will auto cache the result when token not change
 */
function flattenToken(token) {
  var str = flattenTokenCache.get(token) || '';
  if (!str) {
    Object.keys(token).forEach(function (key) {
      var value = token[key];
      str += key;
      if (value instanceof _theme.Theme) {
        str += value.id;
      } else if (value && (0, _typeof2.default)(value) === 'object') {
        str += flattenToken(value);
      } else {
        str += value;
      }
    });

    // Put in cache
    flattenTokenCache.set(token, str);
  }
  return str;
}

/**
 * Convert derivative token to key string
 */
function token2key(token, salt) {
  return (0, _hash.default)("".concat(salt, "_").concat(flattenToken(token)));
}
var randomSelectorKey = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');

// Magic `content` for detect selector support
var checkContent = '_bAmBoO_';
function supportSelector(styleStr, handleElement, supportCheck) {
  if ((0, _canUseDom.default)()) {
    var _getComputedStyle$con, _ele$parentNode;
    (0, _dynamicCSS.updateCSS)(styleStr, randomSelectorKey);
    var _ele = document.createElement('div');
    _ele.style.position = 'fixed';
    _ele.style.left = '0';
    _ele.style.top = '0';
    handleElement === null || handleElement === void 0 || handleElement(_ele);
    document.body.appendChild(_ele);
    if (false) {}
    var support = supportCheck ? supportCheck(_ele) : (_getComputedStyle$con = getComputedStyle(_ele).content) === null || _getComputedStyle$con === void 0 ? void 0 : _getComputedStyle$con.includes(checkContent);
    (_ele$parentNode = _ele.parentNode) === null || _ele$parentNode === void 0 || _ele$parentNode.removeChild(_ele);
    (0, _dynamicCSS.removeCSS)(randomSelectorKey);
    return support;
  }
  return false;
}
var canLayer = undefined;
function supportLayer() {
  if (canLayer === undefined) {
    canLayer = supportSelector("@layer ".concat(randomSelectorKey, " { .").concat(randomSelectorKey, " { content: \"").concat(checkContent, "\"!important; } }"), function (ele) {
      ele.className = randomSelectorKey;
    });
  }
  return canLayer;
}
var canWhere = undefined;
function supportWhere() {
  if (canWhere === undefined) {
    canWhere = supportSelector(":where(.".concat(randomSelectorKey, ") { content: \"").concat(checkContent, "\"!important; }"), function (ele) {
      ele.className = randomSelectorKey;
    });
  }
  return canWhere;
}
var canLogic = undefined;
function supportLogicProps() {
  if (canLogic === undefined) {
    canLogic = supportSelector(".".concat(randomSelectorKey, " { inset-block: 93px !important; }"), function (ele) {
      ele.className = randomSelectorKey;
    }, function (ele) {
      return getComputedStyle(ele).bottom === '93px';
    });
  }
  return canLogic;
}
var isClientSide = exports.isClientSide = (0, _canUseDom.default)();
function unit(num) {
  if (typeof num === 'number') {
    return "".concat(num, "px");
  }
  return num;
}
function toStyleStr(style, tokenKey, styleId) {
  var _objectSpread2;
  var customizeAttrs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var plain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (plain) {
    return style;
  }
  var attrs = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, customizeAttrs), {}, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, _StyleContext.ATTR_TOKEN, tokenKey), (0, _defineProperty2.default)(_objectSpread2, _StyleContext.ATTR_MARK, styleId), _objectSpread2));
  var attrStr = Object.keys(attrs).map(function (attr) {
    var val = attrs[attr];
    return val ? "".concat(attr, "=\"").concat(val, "\"") : null;
  }).filter(function (v) {
    return v;
  }).join(' ');
  return "<style ".concat(attrStr, ">").concat(style, "</style>");
}

/***/ }),

/***/ 32406:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(93867);
} else {}


/***/ }),

/***/ 93867:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function murmur2(str) {
  for (var k, h = 0, i = 0, len = str.length; len >= 4; ++i, len -= 4) k = 1540483477 * (65535 & (k = 255 & str.charCodeAt(i) | (255 & str.charCodeAt(++i)) << 8 | (255 & str.charCodeAt(++i)) << 16 | (255 & str.charCodeAt(++i)) << 24)) + (59797 * (k >>> 16) << 16), 
  h = 1540483477 * (65535 & (k ^= k >>> 24)) + (59797 * (k >>> 16) << 16) ^ 1540483477 * (65535 & h) + (59797 * (h >>> 16) << 16);
  switch (len) {
   case 3:
    h ^= (255 & str.charCodeAt(i + 2)) << 16;

   case 2:
    h ^= (255 & str.charCodeAt(i + 1)) << 8;

   case 1:
    h = 1540483477 * (65535 & (h ^= 255 & str.charCodeAt(i))) + (59797 * (h >>> 16) << 16);
  }
  return (((h = 1540483477 * (65535 & (h ^= h >>> 13)) + (59797 * (h >>> 16) << 16)) ^ h >>> 15) >>> 0).toString(36);
}

Object.defineProperty(exports, "__esModule", ({
  value: !0
})), exports["default"] = murmur2;


/***/ }),

/***/ 58718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var CloseCircleFilled = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, "name": "close-circle", "theme": "filled" };
exports["default"] = CloseCircleFilled;


/***/ }),

/***/ 52471:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var LoadingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, "name": "loading", "theme": "outlined" };
exports["default"] = LoadingOutlined;


/***/ }),

/***/ 74762:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

const _CloseCircleFilled = _interopRequireDefault(__webpack_require__(21152));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

const _default = _CloseCircleFilled;
exports["default"] = _default;
module.exports = _default;

/***/ }),

/***/ 79859:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

const _LoadingOutlined = _interopRequireDefault(__webpack_require__(76240));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

const _default = _LoadingOutlined;
exports["default"] = _default;
module.exports = _default;

/***/ }),

/***/ 35155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use client";
"use strict";
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _classnames = /*#__PURE__*/ _interop_require_default(__webpack_require__(54641));
var _colors = __webpack_require__(84013);
var _Context = /*#__PURE__*/ _interop_require_default(__webpack_require__(60961));
var _IconBase = /*#__PURE__*/ _interop_require_default(__webpack_require__(11585));
var _twoTonePrimaryColor = __webpack_require__(38305);
var _utils = __webpack_require__(56980);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
// Initial setting
// should move it to antd main repo?
(0, _twoTonePrimaryColor.setTwoToneColor)(_colors.blue.primary);
var Icon = /*#__PURE__*/ _react.forwardRef(function(props, ref) {
    var // affect outter <i>...</i>
    className = props.className, // affect inner <svg>...</svg>
    icon = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, // other
    twoToneColor = props.twoToneColor, restProps = _object_without_properties(props, [
        "className",
        "icon",
        "spin",
        "rotate",
        "tabIndex",
        "onClick",
        "twoToneColor"
    ]);
    var _React_useContext = _react.useContext(_Context.default), _React_useContext_prefixCls = _React_useContext.prefixCls, prefixCls = _React_useContext_prefixCls === void 0 ? "anticon" : _React_useContext_prefixCls, rootClassName = _React_useContext.rootClassName;
    var _obj;
    var classString = (0, _classnames.default)(rootClassName, prefixCls, (_obj = {}, _define_property(_obj, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _define_property(_obj, "".concat(prefixCls, "-spin"), !!spin || icon.name === "loading"), _obj), className);
    var iconTabIndex = tabIndex;
    if (iconTabIndex === undefined && onClick) {
        iconTabIndex = -1;
    }
    var svgStyle = rotate ? {
        msTransform: "rotate(".concat(rotate, "deg)"),
        transform: "rotate(".concat(rotate, "deg)")
    } : undefined;
    var _normalizeTwoToneColors = _sliced_to_array((0, _utils.normalizeTwoToneColors)(twoToneColor), 2), primaryColor = _normalizeTwoToneColors[0], secondaryColor = _normalizeTwoToneColors[1];
    return /*#__PURE__*/ _react.createElement("span", _object_spread_props(_object_spread({
        role: "img",
        "aria-label": icon.name
    }, restProps), {
        ref: ref,
        tabIndex: iconTabIndex,
        onClick: onClick,
        className: classString
    }), /*#__PURE__*/ _react.createElement(_IconBase.default, {
        icon: icon,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        style: svgStyle
    }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default = Icon;


/***/ }),

/***/ 60961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = __webpack_require__(18038);
var IconContext = /*#__PURE__*/ (0, _react.createContext)({});
var _default = IconContext;


/***/ }),

/***/ 11585:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _utils = __webpack_require__(56980);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var twoToneColorPalette = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: false
};
function setTwoToneColors(param) {
    var primaryColor = param.primaryColor, secondaryColor = param.secondaryColor;
    twoToneColorPalette.primaryColor = primaryColor;
    twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
    twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
    return _object_spread({}, twoToneColorPalette);
}
var IconBase = function(props) {
    var icon = props.icon, className = props.className, onClick = props.onClick, style = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _object_without_properties(props, [
        "icon",
        "className",
        "onClick",
        "style",
        "primaryColor",
        "secondaryColor"
    ]);
    var svgRef = _react.useRef();
    var colors = twoToneColorPalette;
    if (primaryColor) {
        colors = {
            primaryColor: primaryColor,
            secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
        };
    }
    (0, _utils.useInsertStyles)(svgRef);
    (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
    if (!(0, _utils.isIconDefinition)(icon)) {
        return null;
    }
    var target = icon;
    if (target && typeof target.icon === "function") {
        target = _object_spread_props(_object_spread({}, target), {
            icon: target.icon(colors.primaryColor, colors.secondaryColor)
        });
    }
    return (0, _utils.generate)(target.icon, "svg-".concat(target.name), _object_spread_props(_object_spread({
        className: className,
        onClick: onClick,
        style: style,
        "data-icon": target.name,
        width: "1em",
        height: "1em",
        fill: "currentColor",
        "aria-hidden": "true"
    }, restProps), {
        ref: svgRef
    }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var _default = IconBase;


/***/ }),

/***/ 38305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    setTwoToneColor: function() {
        return setTwoToneColor;
    },
    getTwoToneColor: function() {
        return getTwoToneColor;
    }
});
var _IconBase = /*#__PURE__*/ _interop_require_default(__webpack_require__(11585));
var _utils = __webpack_require__(56980);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function setTwoToneColor(twoToneColor) {
    var _normalizeTwoToneColors = _sliced_to_array((0, _utils.normalizeTwoToneColors)(twoToneColor), 2), primaryColor = _normalizeTwoToneColors[0], secondaryColor = _normalizeTwoToneColors[1];
    return _IconBase.default.setTwoToneColors({
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
    });
}
function getTwoToneColor() {
    var colors = _IconBase.default.getTwoToneColors();
    if (!colors.calculated) {
        return colors.primaryColor;
    }
    return [
        colors.primaryColor,
        colors.secondaryColor
    ];
}


/***/ }),

/***/ 21152:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _CloseCircleFilled = /*#__PURE__*/ _interop_require_default(__webpack_require__(58718));
var _AntdIcon = /*#__PURE__*/ _interop_require_default(__webpack_require__(35155));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var CloseCircleFilled = function(props, ref) {
    return /*#__PURE__*/ _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        icon: _CloseCircleFilled.default
    }));
};
if (false) {}
var _default = /*#__PURE__*/ _react.forwardRef(CloseCircleFilled);


/***/ }),

/***/ 76240:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _LoadingOutlined = /*#__PURE__*/ _interop_require_default(__webpack_require__(52471));
var _AntdIcon = /*#__PURE__*/ _interop_require_default(__webpack_require__(35155));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
var LoadingOutlined = function(props, ref) {
    return /*#__PURE__*/ _react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
        ref: ref,
        icon: _LoadingOutlined.default
    }));
};
if (false) {}
var _default = /*#__PURE__*/ _react.forwardRef(LoadingOutlined);


/***/ }),

/***/ 56980:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    warning: function() {
        return warning;
    },
    isIconDefinition: function() {
        return isIconDefinition;
    },
    normalizeAttrs: function() {
        return normalizeAttrs;
    },
    generate: function() {
        return generate;
    },
    getSecondaryColor: function() {
        return getSecondaryColor;
    },
    normalizeTwoToneColors: function() {
        return normalizeTwoToneColors;
    },
    svgBaseProps: function() {
        return svgBaseProps;
    },
    iconStyles: function() {
        return iconStyles;
    },
    useInsertStyles: function() {
        return useInsertStyles;
    }
});
var _colors = __webpack_require__(84013);
var _dynamicCSS = __webpack_require__(58296);
var _shadow = __webpack_require__(43480);
var _warning = /*#__PURE__*/ _interop_require_default(__webpack_require__(32038));
var _react = /*#__PURE__*/ _interop_require_wildcard(__webpack_require__(18038));
var _Context = /*#__PURE__*/ _interop_require_default(__webpack_require__(60961));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function camelCase(input) {
    return input.replace(/-(.)/g, function(match, g) {
        return g.toUpperCase();
    });
}
function warning(valid, message) {
    (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
    return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
    var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(attrs).reduce(function(acc, key) {
        var val = attrs[key];
        switch(key){
            case "class":
                acc.className = val;
                delete acc.class;
                break;
            default:
                delete acc[key];
                acc[camelCase(key)] = val;
        }
        return acc;
    }, {});
}
function generate(node, key, rootProps) {
    if (!rootProps) {
        return _react.default.createElement(node.tag, _object_spread({
            key: key
        }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
            return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
        }));
    }
    return _react.default.createElement(node.tag, _object_spread({
        key: key
    }, normalizeAttrs(node.attrs), rootProps), (node.children || []).map(function(child, index) {
        return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
}
function getSecondaryColor(primaryColor) {
    // choose the second color
    return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
    if (!twoToneColor) {
        return [];
    }
    return Array.isArray(twoToneColor) ? twoToneColor : [
        twoToneColor
    ];
}
var svgBaseProps = {
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    focusable: "false"
};
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function(eleRef) {
    var _useContext = (0, _react.useContext)(_Context.default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
    var mergedStyleStr = iconStyles;
    if (prefixCls) {
        mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
    }
    (0, _react.useEffect)(function() {
        var ele = eleRef.current;
        var shadowRoot = (0, _shadow.getShadowRoot)(ele);
        (0, _dynamicCSS.updateCSS)(mergedStyleStr, "@ant-design-icons", {
            prepend: true,
            csp: csp,
            attachTo: shadowRoot
        });
    }, []);
};


/***/ }),

/***/ 87706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numberInputToObject = exports.parseIntFromHex = exports.convertHexToDecimal = exports.convertDecimalToHex = exports.rgbaToArgbHex = exports.rgbaToHex = exports.rgbToHex = exports.hsvToRgb = exports.rgbToHsv = exports.hslToRgb = exports.rgbToHsl = exports.rgbToRgb = void 0;
var util_js_1 = __webpack_require__(12563);
// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: (0, util_js_1.bound01)(r, 255) * 255,
        g: (0, util_js_1.bound01)(g, 255) * 255,
        b: (0, util_js_1.bound01)(b, 255) * 255,
    };
}
exports.rgbToRgb = rgbToRgb;
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = (0, util_js_1.bound01)(r, 255);
    g = (0, util_js_1.bound01)(g, 255);
    b = (0, util_js_1.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
exports.rgbToHsl = rgbToHsl;
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = (0, util_js_1.bound01)(h, 360);
    s = (0, util_js_1.bound01)(s, 100);
    l = (0, util_js_1.bound01)(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
exports.hslToRgb = hslToRgb;
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = (0, util_js_1.bound01)(r, 255);
    g = (0, util_js_1.bound01)(g, 255);
    b = (0, util_js_1.bound01)(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
exports.rgbToHsv = rgbToHsv;
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = (0, util_js_1.bound01)(h, 360) * 6;
    s = (0, util_js_1.bound01)(s, 100);
    v = (0, util_js_1.bound01)(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
exports.hsvToRgb = hsvToRgb;
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        (0, util_js_1.pad2)(Math.round(r).toString(16)),
        (0, util_js_1.pad2)(Math.round(g).toString(16)),
        (0, util_js_1.pad2)(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
exports.rgbToHex = rgbToHex;
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        (0, util_js_1.pad2)(Math.round(r).toString(16)),
        (0, util_js_1.pad2)(Math.round(g).toString(16)),
        (0, util_js_1.pad2)(Math.round(b).toString(16)),
        (0, util_js_1.pad2)(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
exports.rgbaToHex = rgbaToHex;
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        (0, util_js_1.pad2)(convertDecimalToHex(a)),
        (0, util_js_1.pad2)(Math.round(r).toString(16)),
        (0, util_js_1.pad2)(Math.round(g).toString(16)),
        (0, util_js_1.pad2)(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
exports.rgbaToArgbHex = rgbaToArgbHex;
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
exports.convertDecimalToHex = convertDecimalToHex;
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
exports.convertHexToDecimal = convertHexToDecimal;
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
exports.parseIntFromHex = parseIntFromHex;
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}
exports.numberInputToObject = numberInputToObject;


/***/ }),

/***/ 1910:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.names = void 0;
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
exports.names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};


/***/ }),

/***/ 37837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidCSSUnit = exports.stringInputToObject = exports.inputToRGB = void 0;
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
var conversion_js_1 = __webpack_require__(87706);
var css_color_names_js_1 = __webpack_require__(1910);
var util_js_1 = __webpack_require__(12563);
/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = (0, conversion_js_1.rgbToRgb)(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = (0, util_js_1.convertToPercentage)(color.s);
            v = (0, util_js_1.convertToPercentage)(color.v);
            rgb = (0, conversion_js_1.hsvToRgb)(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = (0, util_js_1.convertToPercentage)(color.s);
            l = (0, util_js_1.convertToPercentage)(color.l);
            rgb = (0, conversion_js_1.hslToRgb)(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = (0, util_js_1.boundAlpha)(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
exports.inputToRGB = inputToRGB;
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (css_color_names_js_1.names[color]) {
        color = css_color_names_js_1.names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: (0, conversion_js_1.parseIntFromHex)(match[1]),
            g: (0, conversion_js_1.parseIntFromHex)(match[2]),
            b: (0, conversion_js_1.parseIntFromHex)(match[3]),
            a: (0, conversion_js_1.convertHexToDecimal)(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: (0, conversion_js_1.parseIntFromHex)(match[1]),
            g: (0, conversion_js_1.parseIntFromHex)(match[2]),
            b: (0, conversion_js_1.parseIntFromHex)(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: (0, conversion_js_1.parseIntFromHex)(match[1] + match[1]),
            g: (0, conversion_js_1.parseIntFromHex)(match[2] + match[2]),
            b: (0, conversion_js_1.parseIntFromHex)(match[3] + match[3]),
            a: (0, conversion_js_1.convertHexToDecimal)(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: (0, conversion_js_1.parseIntFromHex)(match[1] + match[1]),
            g: (0, conversion_js_1.parseIntFromHex)(match[2] + match[2]),
            b: (0, conversion_js_1.parseIntFromHex)(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
exports.stringInputToObject = stringInputToObject;
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}
exports.isValidCSSUnit = isValidCSSUnit;


/***/ }),

/***/ 50613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.legacyRandom = exports.fromRatio = void 0;
var index_js_1 = __webpack_require__(70547);
var util_js_1 = __webpack_require__(12563);
/**
 * If input is an object, force 1 into "1.0" to handle ratios properly
 * String input requires "1.0" as input, so 1 will be treated as 1
 */
function fromRatio(ratio, opts) {
    var newColor = {
        r: (0, util_js_1.convertToPercentage)(ratio.r),
        g: (0, util_js_1.convertToPercentage)(ratio.g),
        b: (0, util_js_1.convertToPercentage)(ratio.b),
    };
    if (ratio.a !== undefined) {
        newColor.a = Number(ratio.a);
    }
    return new index_js_1.TinyColor(newColor, opts);
}
exports.fromRatio = fromRatio;
/** old random function */
function legacyRandom() {
    return new index_js_1.TinyColor({
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    });
}
exports.legacyRandom = legacyRandom;


/***/ }),

/***/ 70547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tinycolor = exports.TinyColor = void 0;
var conversion_js_1 = __webpack_require__(87706);
var css_color_names_js_1 = __webpack_require__(1910);
var format_input_1 = __webpack_require__(37837);
var util_js_1 = __webpack_require__(12563);
var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = (0, conversion_js_1.numberInputToObject)(color);
        }
        this.originalInput = color;
        var rgb = (0, format_input_1.inputToRGB)(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = (0, util_js_1.boundAlpha)(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns whether the color is monochrome.
     */
    TinyColor.prototype.isMonochrome = function () {
        var s = this.toHsl().s;
        return s === 0;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = (0, conversion_js_1.rgbToHsv)(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = (0, conversion_js_1.rgbToHsv)(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = (0, conversion_js_1.rgbToHsl)(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = (0, conversion_js_1.rgbToHsl)(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return (0, conversion_js_1.rgbToHex)(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # prefixed.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return (0, conversion_js_1.rgbaToHex)(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # prefixed.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
     * @param allowShortChar will shorten hex value to 3 or 4 char if possible
     */
    TinyColor.prototype.toHexShortString = function (allowShortChar) {
        if (allowShortChar === void 0) { allowShortChar = false; }
        return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round((0, util_js_1.bound01)(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round((0, util_js_1.bound01)(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + (0, conversion_js_1.rgbToHex)(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(css_color_names_js_1.names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = (0, util_js_1.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = (0, util_js_1.clamp01)(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = (0, util_js_1.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = (0, util_js_1.clamp01)(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        var alpha = fg.a + bg.a * (1 - fg.a);
        return new TinyColor({
            r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
            g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
            b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
            a: alpha,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());
exports.TinyColor = TinyColor;
// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}
exports.tinycolor = tinycolor;


/***/ }),

/***/ 75235:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 79226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_js_1 = __webpack_require__(70547);
__exportStar(__webpack_require__(70547), exports);
__exportStar(__webpack_require__(1910), exports);
__exportStar(__webpack_require__(77468), exports);
__exportStar(__webpack_require__(92766), exports);
__exportStar(__webpack_require__(50613), exports);
__exportStar(__webpack_require__(37837), exports);
__exportStar(__webpack_require__(28900), exports);
__exportStar(__webpack_require__(75235), exports);
__exportStar(__webpack_require__(87706), exports);
// kept for backwards compatability with v1
exports["default"] = index_js_1.tinycolor;


/***/ }),

/***/ 28900:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bounds = exports.random = void 0;
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/
var index_js_1 = __webpack_require__(70547);
function random(options) {
    if (options === void 0) { options = {}; }
    // Check if we need to generate multiple colors
    if (options.count !== undefined &&
        options.count !== null) {
        var totalColors = options.count;
        var colors = [];
        options.count = undefined;
        while (totalColors > colors.length) {
            // Since we're generating multiple colors,
            // incremement the seed. Otherwise we'd just
            // generate the same color each time...
            options.count = null;
            if (options.seed) {
                options.seed += 1;
            }
            colors.push(random(options));
        }
        options.count = totalColors;
        return colors;
    }
    // First we pick a hue (H)
    var h = pickHue(options.hue, options.seed);
    // Then use H to determine saturation (S)
    var s = pickSaturation(h, options);
    // Then use S and H to determine brightness (B).
    var v = pickBrightness(h, s, options);
    var res = { h: h, s: s, v: v };
    if (options.alpha !== undefined) {
        res.a = options.alpha;
    }
    // Then we return the HSB color in the desired format
    return new index_js_1.TinyColor(res);
}
exports.random = random;
function pickHue(hue, seed) {
    var hueRange = getHueRange(hue);
    var res = randomWithin(hueRange, seed);
    // Instead of storing red as two seperate ranges,
    // we group them, using negative numbers
    if (res < 0) {
        res = 360 + res;
    }
    return res;
}
function pickSaturation(hue, options) {
    if (options.hue === 'monochrome') {
        return 0;
    }
    if (options.luminosity === 'random') {
        return randomWithin([0, 100], options.seed);
    }
    var saturationRange = getColorInfo(hue).saturationRange;
    var sMin = saturationRange[0];
    var sMax = saturationRange[1];
    switch (options.luminosity) {
        case 'bright':
            sMin = 55;
            break;
        case 'dark':
            sMin = sMax - 10;
            break;
        case 'light':
            sMax = 55;
            break;
        default:
            break;
    }
    return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
    var bMin = getMinimumBrightness(H, S);
    var bMax = 100;
    switch (options.luminosity) {
        case 'dark':
            bMax = bMin + 20;
            break;
        case 'light':
            bMin = (bMax + bMin) / 2;
            break;
        case 'random':
            bMin = 0;
            bMax = 100;
            break;
        default:
            break;
    }
    return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
    var lowerBounds = getColorInfo(H).lowerBounds;
    for (var i = 0; i < lowerBounds.length - 1; i++) {
        var s1 = lowerBounds[i][0];
        var v1 = lowerBounds[i][1];
        var s2 = lowerBounds[i + 1][0];
        var v2 = lowerBounds[i + 1][1];
        if (S >= s1 && S <= s2) {
            var m = (v2 - v1) / (s2 - s1);
            var b = v1 - m * s1;
            return m * S + b;
        }
    }
    return 0;
}
function getHueRange(colorInput) {
    var num = parseInt(colorInput, 10);
    if (!Number.isNaN(num) && num < 360 && num > 0) {
        return [num, num];
    }
    if (typeof colorInput === 'string') {
        var namedColor = exports.bounds.find(function (n) { return n.name === colorInput; });
        if (namedColor) {
            var color = defineColor(namedColor);
            if (color.hueRange) {
                return color.hueRange;
            }
        }
        var parsed = new index_js_1.TinyColor(colorInput);
        if (parsed.isValid) {
            var hue = parsed.toHsv().h;
            return [hue, hue];
        }
    }
    return [0, 360];
}
function getColorInfo(hue) {
    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
        hue -= 360;
    }
    for (var _i = 0, bounds_1 = exports.bounds; _i < bounds_1.length; _i++) {
        var bound = bounds_1[_i];
        var color = defineColor(bound);
        if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
            return color;
        }
    }
    throw Error('Color not found');
}
function randomWithin(range, seed) {
    if (seed === undefined) {
        return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
    }
    // Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
    var max = range[1] || 1;
    var min = range[0] || 0;
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
    var sMin = bound.lowerBounds[0][0];
    var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
    var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
    var bMax = bound.lowerBounds[0][1];
    return {
        name: bound.name,
        hueRange: bound.hueRange,
        lowerBounds: bound.lowerBounds,
        saturationRange: [sMin, sMax],
        brightnessRange: [bMin, bMax],
    };
}
/**
 * @hidden
 */
exports.bounds = [
    {
        name: 'monochrome',
        hueRange: null,
        lowerBounds: [
            [0, 0],
            [100, 0],
        ],
    },
    {
        name: 'red',
        hueRange: [-26, 18],
        lowerBounds: [
            [20, 100],
            [30, 92],
            [40, 89],
            [50, 85],
            [60, 78],
            [70, 70],
            [80, 60],
            [90, 55],
            [100, 50],
        ],
    },
    {
        name: 'orange',
        hueRange: [19, 46],
        lowerBounds: [
            [20, 100],
            [30, 93],
            [40, 88],
            [50, 86],
            [60, 85],
            [70, 70],
            [100, 70],
        ],
    },
    {
        name: 'yellow',
        hueRange: [47, 62],
        lowerBounds: [
            [25, 100],
            [40, 94],
            [50, 89],
            [60, 86],
            [70, 84],
            [80, 82],
            [90, 80],
            [100, 75],
        ],
    },
    {
        name: 'green',
        hueRange: [63, 178],
        lowerBounds: [
            [30, 100],
            [40, 90],
            [50, 85],
            [60, 81],
            [70, 74],
            [80, 64],
            [90, 50],
            [100, 40],
        ],
    },
    {
        name: 'blue',
        hueRange: [179, 257],
        lowerBounds: [
            [20, 100],
            [30, 86],
            [40, 80],
            [50, 74],
            [60, 60],
            [70, 52],
            [80, 44],
            [90, 39],
            [100, 35],
        ],
    },
    {
        name: 'purple',
        hueRange: [258, 282],
        lowerBounds: [
            [20, 100],
            [30, 87],
            [40, 79],
            [50, 70],
            [60, 65],
            [70, 59],
            [80, 52],
            [90, 45],
            [100, 42],
        ],
    },
    {
        name: 'pink',
        hueRange: [283, 334],
        lowerBounds: [
            [20, 100],
            [30, 90],
            [40, 86],
            [60, 84],
            [80, 80],
            [90, 75],
            [100, 73],
        ],
    },
];


/***/ }),

/***/ 77468:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mostReadable = exports.isReadable = exports.readability = void 0;
var index_js_1 = __webpack_require__(70547);
// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */
function readability(color1, color2) {
    var c1 = new index_js_1.TinyColor(color1);
    var c2 = new index_js_1.TinyColor(color2);
    return ((Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) /
        (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05));
}
exports.readability = readability;
/**
 * Ensure that foreground and background color combinations meet WCAG2 guidelines.
 * The third argument is an object.
 *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
 *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
 * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
 *
 * Example
 * ```ts
 * new TinyColor().isReadable('#000', '#111') => false
 * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
 * ```
 */
function isReadable(color1, color2, wcag2) {
    var _a, _b;
    if (wcag2 === void 0) { wcag2 = { level: 'AA', size: 'small' }; }
    var readabilityLevel = readability(color1, color2);
    switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
        case 'AAsmall':
        case 'AAAlarge':
            return readabilityLevel >= 4.5;
        case 'AAlarge':
            return readabilityLevel >= 3;
        case 'AAAsmall':
            return readabilityLevel >= 7;
        default:
            return false;
    }
}
exports.isReadable = isReadable;
/**
 * Given a base color and a list of possible foreground or background
 * colors for that base, returns the most readable color.
 * Optionally returns Black or White if the most readable color is unreadable.
 *
 * @param baseColor - the base color.
 * @param colorList - array of colors to pick the most readable one from.
 * @param args - and object with extra arguments
 *
 * Example
 * ```ts
 * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
 * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
 * ```
 */
function mostReadable(baseColor, colorList, args) {
    if (args === void 0) { args = { includeFallbackColors: false, level: 'AA', size: 'small' }; }
    var bestColor = null;
    var bestScore = 0;
    var includeFallbackColors = args.includeFallbackColors, level = args.level, size = args.size;
    for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
        var color = colorList_1[_i];
        var score = readability(baseColor, color);
        if (score > bestScore) {
            bestScore = score;
            bestColor = new index_js_1.TinyColor(color);
        }
    }
    if (isReadable(baseColor, bestColor, { level: level, size: size }) || !includeFallbackColors) {
        return bestColor;
    }
    args.includeFallbackColors = false;
    return mostReadable(baseColor, ['#fff', '#000'], args);
}
exports.mostReadable = mostReadable;


/***/ }),

/***/ 92766:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toMsFilter = void 0;
var conversion_js_1 = __webpack_require__(87706);
var index_js_1 = __webpack_require__(70547);
/**
 * Returns the color represented as a Microsoft filter for use in old versions of IE.
 */
function toMsFilter(firstColor, secondColor) {
    var color = new index_js_1.TinyColor(firstColor);
    var hex8String = '#' + (0, conversion_js_1.rgbaToArgbHex)(color.r, color.g, color.b, color.a);
    var secondHex8String = hex8String;
    var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
    if (secondColor) {
        var s = new index_js_1.TinyColor(secondColor);
        secondHex8String = '#' + (0, conversion_js_1.rgbaToArgbHex)(s.r, s.g, s.b, s.a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
}
exports.toMsFilter = toMsFilter;


/***/ }),

/***/ 12563:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pad2 = exports.convertToPercentage = exports.boundAlpha = exports.isPercentage = exports.isOnePointZero = exports.clamp01 = exports.bound01 = void 0;
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
exports.bound01 = bound01;
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
exports.clamp01 = clamp01;
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
exports.isOnePointZero = isOnePointZero;
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
exports.isPercentage = isPercentage;
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
exports.boundAlpha = boundAlpha;
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
exports.convertToPercentage = convertToPercentage;
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}
exports.pad2 = pad2;


/***/ }),

/***/ 62865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(23624);
} else {}


/***/ }),

/***/ 23624:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: !0
}));

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

exports["default"] = unitlessKeys;


/***/ }),

/***/ 57316:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var OrderContext = /*#__PURE__*/React.createContext(null);
var _default = OrderContext;
exports["default"] = _default;

/***/ }),

/***/ 58375:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _reactDom = __webpack_require__(98704);
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var _ref2 = __webpack_require__(310);
var _Context = _interopRequireDefault(__webpack_require__(57316));
var _useDom3 = _interopRequireDefault(__webpack_require__(64568));
var _useScrollLocker = _interopRequireDefault(__webpack_require__(47215));
var _mock = __webpack_require__(12092);
var getPortalContainer = function getPortalContainer(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!(0, _canUseDom.default)() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = React.useState(open),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;

  // ========================= Warning =========================
  if (false) {}

  // ====================== Should Render ======================
  React.useEffect(function () {
    if (autoDestroy || open) {
      setShouldRender(open);
    }
  }, [open, autoDestroy]);

  // ======================== Container ========================
  var _React$useState3 = React.useState(function () {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  React.useEffect(function () {
    var customizeContainer = getPortalContainer(getContainer);

    // Tell component that we check this in effect which is safe to be `null`
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = (0, _useDom3.default)(mergedRender && !innerContainer, debug),
    _useDom2 = (0, _slicedToArray2.default)(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;

  // ========================= Locker ==========================
  (0, _useScrollLocker.default)(autoLock && open && (0, _canUseDom.default)() && (mergedContainer === defaultContainer || mergedContainer === document.body));

  // =========================== Ref ===========================
  var childRef = null;
  if (children && (0, _ref2.supportRef)(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = (0, _ref2.useComposeRef)(childRef, ref);

  // ========================= Render ==========================
  // Do not render when nothing need render
  // When innerContainer is `undefined`, it may not ready since user use ref in the same render
  if (!mergedRender || !(0, _canUseDom.default)() || innerContainer === undefined) {
    return null;
  }

  // Render inline
  var renderInline = mergedContainer === false || (0, _mock.inlineMock)();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /*#__PURE__*/React.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /*#__PURE__*/React.createElement(_Context.default.Provider, {
    value: queueCreate
  }, renderInline ? reffedChildren : /*#__PURE__*/(0, _reactDom.createPortal)(reffedChildren, mergedContainer));
});
if (false) {}
var _default = Portal;
exports["default"] = _default;

/***/ }),

/***/ 14329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
Object.defineProperty(exports, "inlineMock", ({
  enumerable: true,
  get: function get() {
    return _mock.inlineMock;
  }
}));
var _Portal = _interopRequireDefault(__webpack_require__(58375));
var _mock = __webpack_require__(12092);
var _default = _Portal.default;
exports["default"] = _default;

/***/ }),

/***/ 12092:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.inline = void 0;
exports.inlineMock = inlineMock;
var inline = false;
exports.inline = inline;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    exports.inline = inline = nextInline;
  }
  return inline;
}

/***/ }),

/***/ 64568:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useDom;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _Context = _interopRequireDefault(__webpack_require__(57316));
var EMPTY_LIST = [];

/**
 * Will add `div` to document. Nest call will keep order
 * @param render Render DOM in document
 */
function useDom(render, debug) {
  var _React$useState = React.useState(function () {
      if (!(0, _canUseDom.default)()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (false) {}
      return defaultEle;
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
    ele = _React$useState2[0];

  // ========================== Order ==========================
  var appendedRef = React.useRef(false);
  var queueCreate = React.useContext(_Context.default);
  var _React$useState3 = React.useState(EMPTY_LIST),
    _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate = queueCreate || (appendedRef.current ? undefined : function (appendFn) {
    setQueue(function (origin) {
      var newQueue = [appendFn].concat((0, _toConsumableArray2.default)(origin));
      return newQueue;
    });
  });

  // =========================== DOM ===========================
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
    appendedRef.current = true;
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0 ? void 0 : _ele$parentElement.removeChild(ele);
    appendedRef.current = false;
  }
  (0, _useLayoutEffect.default)(function () {
    if (render) {
      if (queueCreate) {
        queueCreate(append);
      } else {
        append();
      }
    } else {
      cleanup();
    }
    return cleanup;
  }, [render]);
  (0, _useLayoutEffect.default)(function () {
    if (queue.length) {
      queue.forEach(function (appendFn) {
        return appendFn();
      });
      setQueue(EMPTY_LIST);
    }
  }, [queue]);
  return [ele, mergedQueueCreate];
}

/***/ }),

/***/ 47215:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useScrollLocker;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _dynamicCSS = __webpack_require__(58296);
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _getScrollBarSize = __webpack_require__(61608);
var _util = __webpack_require__(31447);
var UNIQUE_ID = "rc-util-locker-".concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React.useState(function () {
      uuid += 1;
      return "".concat(UNIQUE_ID, "_").concat(uuid);
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 1),
    id = _React$useState2[0];
  (0, _useLayoutEffect.default)(function () {
    if (mergedLock) {
      var scrollbarSize = (0, _getScrollBarSize.getTargetScrollBarSize)(document.body).width;
      var isOverflow = (0, _util.isBodyOverflowing)();
      (0, _dynamicCSS.updateCSS)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(isOverflow ? "width: calc(100% - ".concat(scrollbarSize, "px);") : '', "\n}"), id);
    } else {
      (0, _dynamicCSS.removeCSS)(id);
    }
    return function () {
      (0, _dynamicCSS.removeCSS)(id);
    };
  }, [mergedLock, id]);
}

/***/ }),

/***/ 31447:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isBodyOverflowing = isBodyOverflowing;
/**
 * Test usage export. Do not use in your production
 */
function isBodyOverflowing() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}

/***/ }),

/***/ 32232:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Arrow;
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var React = _interopRequireWildcard(__webpack_require__(18038));
function Arrow(props) {
  var prefixCls = props.prefixCls,
    align = props.align,
    arrow = props.arrow,
    arrowPos = props.arrowPos;
  var _ref = arrow || {},
    className = _ref.className,
    content = _ref.content;
  var _arrowPos$x = arrowPos.x,
    x = _arrowPos$x === void 0 ? 0 : _arrowPos$x,
    _arrowPos$y = arrowPos.y,
    y = _arrowPos$y === void 0 ? 0 : _arrowPos$y;
  var arrowRef = React.useRef();

  // Skip if no align
  if (!align || !align.points) {
    return null;
  }
  var alignStyle = {
    position: 'absolute'
  };

  // Skip if no need to align
  if (align.autoArrow !== false) {
    var popupPoints = align.points[0];
    var targetPoints = align.points[1];
    var popupTB = popupPoints[0];
    var popupLR = popupPoints[1];
    var targetTB = targetPoints[0];
    var targetLR = targetPoints[1];

    // Top & Bottom
    if (popupTB === targetTB || !['t', 'b'].includes(popupTB)) {
      alignStyle.top = y;
    } else if (popupTB === 't') {
      alignStyle.top = 0;
    } else {
      alignStyle.bottom = 0;
    }

    // Left & Right
    if (popupLR === targetLR || !['l', 'r'].includes(popupLR)) {
      alignStyle.left = x;
    } else if (popupLR === 'l') {
      alignStyle.left = 0;
    } else {
      alignStyle.right = 0;
    }
  }
  return /*#__PURE__*/React.createElement("div", {
    ref: arrowRef,
    className: (0, _classnames.default)("".concat(prefixCls, "-arrow"), className),
    style: alignStyle
  }, content);
}

/***/ }),

/***/ 36111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Mask;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var _rcMotion = _interopRequireDefault(__webpack_require__(54029));
var React = _interopRequireWildcard(__webpack_require__(18038));
function Mask(props) {
  var prefixCls = props.prefixCls,
    open = props.open,
    zIndex = props.zIndex,
    mask = props.mask,
    motion = props.motion;
  if (!mask) {
    return null;
  }
  return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({}, motion, {
    motionAppear: true,
    visible: open,
    removeOnLeave: true
  }), function (_ref) {
    var className = _ref.className;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        zIndex: zIndex
      },
      className: (0, _classnames.default)("".concat(prefixCls, "-mask"), className)
    });
  });
}

/***/ }),

/***/ 5211:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var PopupContent = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  return children;
}, function (_, next) {
  return next.cache;
});
if (false) {}
var _default = exports["default"] = PopupContent;

/***/ }),

/***/ 23004:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var _rcMotion = _interopRequireDefault(__webpack_require__(54029));
var _rcResizeObserver = _interopRequireDefault(__webpack_require__(78922));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _ref2 = __webpack_require__(310);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Arrow = _interopRequireDefault(__webpack_require__(32232));
var _Mask = _interopRequireDefault(__webpack_require__(36111));
var _PopupContent = _interopRequireDefault(__webpack_require__(5211));
var Popup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var popup = props.popup,
    className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    target = props.target,
    _onVisibleChanged = props.onVisibleChanged,
    open = props.open,
    keepDom = props.keepDom,
    fresh = props.fresh,
    onClick = props.onClick,
    mask = props.mask,
    arrow = props.arrow,
    arrowPos = props.arrowPos,
    align = props.align,
    motion = props.motion,
    maskMotion = props.maskMotion,
    forceRender = props.forceRender,
    getPopupContainer = props.getPopupContainer,
    autoDestroy = props.autoDestroy,
    Portal = props.portal,
    zIndex = props.zIndex,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onPointerEnter = props.onPointerEnter,
    ready = props.ready,
    offsetX = props.offsetX,
    offsetY = props.offsetY,
    offsetR = props.offsetR,
    offsetB = props.offsetB,
    onAlign = props.onAlign,
    onPrepare = props.onPrepare,
    stretch = props.stretch,
    targetWidth = props.targetWidth,
    targetHeight = props.targetHeight;
  var childNode = typeof popup === 'function' ? popup() : popup;

  // We can not remove holder only when motion finished.
  var isNodeVisible = open || keepDom;

  // ======================= Container ========================
  var getPopupContainerNeedParams = (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer.length) > 0;
  var _React$useState = React.useState(!getPopupContainer || !getPopupContainerNeedParams),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    show = _React$useState2[0],
    setShow = _React$useState2[1];

  // Delay to show since `getPopupContainer` need target element
  (0, _useLayoutEffect.default)(function () {
    if (!show && getPopupContainerNeedParams && target) {
      setShow(true);
    }
  }, [show, getPopupContainerNeedParams, target]);

  // ========================= Render =========================
  if (!show) {
    return null;
  }

  // >>>>> Offset
  var AUTO = 'auto';
  var offsetStyle = {
    left: '-1000vw',
    top: '-1000vh',
    right: AUTO,
    bottom: AUTO
  };

  // Set align style
  if (ready || !open) {
    var _experimental;
    var points = align.points;
    var dynamicInset = align.dynamicInset || ((_experimental = align._experimental) === null || _experimental === void 0 ? void 0 : _experimental.dynamicInset);
    var alignRight = dynamicInset && points[0][1] === 'r';
    var alignBottom = dynamicInset && points[0][0] === 'b';
    if (alignRight) {
      offsetStyle.right = offsetR;
      offsetStyle.left = AUTO;
    } else {
      offsetStyle.left = offsetX;
      offsetStyle.right = AUTO;
    }
    if (alignBottom) {
      offsetStyle.bottom = offsetB;
      offsetStyle.top = AUTO;
    } else {
      offsetStyle.top = offsetY;
      offsetStyle.bottom = AUTO;
    }
  }

  // >>>>> Misc
  var miscStyle = {};
  if (stretch) {
    if (stretch.includes('height') && targetHeight) {
      miscStyle.height = targetHeight;
    } else if (stretch.includes('minHeight') && targetHeight) {
      miscStyle.minHeight = targetHeight;
    }
    if (stretch.includes('width') && targetWidth) {
      miscStyle.width = targetWidth;
    } else if (stretch.includes('minWidth') && targetWidth) {
      miscStyle.minWidth = targetWidth;
    }
  }
  if (!open) {
    miscStyle.pointerEvents = 'none';
  }
  return /*#__PURE__*/React.createElement(Portal, {
    open: forceRender || isNodeVisible,
    getContainer: getPopupContainer && function () {
      return getPopupContainer(target);
    },
    autoDestroy: autoDestroy
  }, /*#__PURE__*/React.createElement(_Mask.default, {
    prefixCls: prefixCls,
    open: open,
    zIndex: zIndex,
    mask: mask,
    motion: maskMotion
  }), /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
    onResize: onAlign,
    disabled: !open
  }, function (resizeObserverRef) {
    return /*#__PURE__*/React.createElement(_rcMotion.default, (0, _extends2.default)({
      motionAppear: true,
      motionEnter: true,
      motionLeave: true,
      removeOnLeave: false,
      forceRender: forceRender,
      leavedClassName: "".concat(prefixCls, "-hidden")
    }, motion, {
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      visible: open,
      onVisibleChanged: function onVisibleChanged(nextVisible) {
        var _motion$onVisibleChan;
        motion === null || motion === void 0 || (_motion$onVisibleChan = motion.onVisibleChanged) === null || _motion$onVisibleChan === void 0 || _motion$onVisibleChan.call(motion, nextVisible);
        _onVisibleChanged(nextVisible);
      }
    }), function (_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var cls = (0, _classnames.default)(prefixCls, motionClassName, className);
      return /*#__PURE__*/React.createElement("div", {
        ref: (0, _ref2.composeRef)(resizeObserverRef, ref, motionRef),
        className: cls,
        style: (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
          '--arrow-x': "".concat(arrowPos.x || 0, "px"),
          '--arrow-y': "".concat(arrowPos.y || 0, "px")
        }, offsetStyle), miscStyle), motionStyle), {}, {
          boxSizing: 'border-box',
          zIndex: zIndex
        }, style),
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        onPointerEnter: onPointerEnter,
        onClick: onClick
      }, arrow && /*#__PURE__*/React.createElement(_Arrow.default, {
        prefixCls: prefixCls,
        arrow: arrow,
        arrowPos: arrowPos,
        align: align
      }), /*#__PURE__*/React.createElement(_PopupContent.default, {
        cache: !open && !fresh
      }, childNode));
    });
  }));
});
if (false) {}
var _default = exports["default"] = Popup;

/***/ }),

/***/ 75445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ref = __webpack_require__(310);
var React = _interopRequireWildcard(__webpack_require__(18038));
var TriggerWrapper = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    getTriggerDOMNode = props.getTriggerDOMNode;
  var canUseRef = (0, _ref.supportRef)(children);

  // When use `getTriggerDOMNode`, we should do additional work to get the real dom
  var setRef = React.useCallback(function (node) {
    (0, _ref.fillRef)(ref, getTriggerDOMNode ? getTriggerDOMNode(node) : node);
  }, [getTriggerDOMNode]);
  var mergedRef = (0, _ref.useComposeRef)(setRef, children.ref);
  return canUseRef ? /*#__PURE__*/React.cloneElement(children, {
    ref: mergedRef
  }) : children;
});
if (false) {}
var _default = exports["default"] = TriggerWrapper;

/***/ }),

/***/ 49777:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var TriggerContext = /*#__PURE__*/React.createContext(null);
var _default = exports["default"] = TriggerContext;

/***/ }),

/***/ 9815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useAction;
var React = _interopRequireWildcard(__webpack_require__(18038));
function toArray(val) {
  return val ? Array.isArray(val) ? val : [val] : [];
}
function useAction(mobile, action, showAction, hideAction) {
  return React.useMemo(function () {
    var mergedShowAction = toArray(showAction !== null && showAction !== void 0 ? showAction : action);
    var mergedHideAction = toArray(hideAction !== null && hideAction !== void 0 ? hideAction : action);
    var showActionSet = new Set(mergedShowAction);
    var hideActionSet = new Set(mergedHideAction);
    if (mobile) {
      if (showActionSet.has('hover')) {
        showActionSet.delete('hover');
        showActionSet.add('click');
      }
      if (hideActionSet.has('hover')) {
        hideActionSet.delete('hover');
        hideActionSet.add('click');
      }
    }
    return [showActionSet, hideActionSet];
  }, [mobile, action, showAction, hideAction]);
}

/***/ }),

/***/ 27260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useAlign;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _findDOMNode = __webpack_require__(29321);
var _isVisible = _interopRequireDefault(__webpack_require__(8703));
var _useEvent = _interopRequireDefault(__webpack_require__(64301));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _util = __webpack_require__(3806);
function getUnitOffset(size) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offsetStr = "".concat(offset);
  var cells = offsetStr.match(/^(.*)\%$/);
  if (cells) {
    return size * (parseFloat(cells[1]) / 100);
  }
  return parseFloat(offsetStr);
}
function getNumberOffset(rect, offset) {
  var _ref = offset || [],
    _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    offsetX = _ref2[0],
    offsetY = _ref2[1];
  return [getUnitOffset(rect.width, offsetX), getUnitOffset(rect.height, offsetY)];
}
function splitPoints() {
  var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return [points[0], points[1]];
}
function getAlignPoint(rect, points) {
  var topBottom = points[0];
  var leftRight = points[1];
  var x;
  var y;

  // Top & Bottom
  if (topBottom === 't') {
    y = rect.y;
  } else if (topBottom === 'b') {
    y = rect.y + rect.height;
  } else {
    y = rect.y + rect.height / 2;
  }

  // Left & Right
  if (leftRight === 'l') {
    x = rect.x;
  } else if (leftRight === 'r') {
    x = rect.x + rect.width;
  } else {
    x = rect.x + rect.width / 2;
  }
  return {
    x: x,
    y: y
  };
}
function reversePoints(points, index) {
  var reverseMap = {
    t: 'b',
    b: 't',
    l: 'r',
    r: 'l'
  };
  return points.map(function (point, i) {
    if (i === index) {
      return reverseMap[point] || 'c';
    }
    return point;
  }).join('');
}
function useAlign(open, popupEle, target, placement, builtinPlacements, popupAlign, onPopupAlign) {
  var _React$useState = React.useState({
      ready: false,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: builtinPlacements[placement] || {}
    }),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    offsetInfo = _React$useState2[0],
    setOffsetInfo = _React$useState2[1];
  var alignCountRef = React.useRef(0);
  var scrollerList = React.useMemo(function () {
    if (!popupEle) {
      return [];
    }
    return (0, _util.collectScroller)(popupEle);
  }, [popupEle]);

  // ========================= Flip ==========================
  // We will memo flip info.
  // If size change to make flip, it will memo the flip info and use it in next align.
  var prevFlipRef = React.useRef({});
  var resetFlipCache = function resetFlipCache() {
    prevFlipRef.current = {};
  };
  if (!open) {
    resetFlipCache();
  }

  // ========================= Align =========================
  var onAlign = (0, _useEvent.default)(function () {
    if (popupEle && target && open) {
      var _popupElement$parentE, _popupElement$parentE2;
      var popupElement = popupEle;
      var doc = popupElement.ownerDocument;
      var win = (0, _util.getWin)(popupElement);
      var _win$getComputedStyle = win.getComputedStyle(popupElement),
        width = _win$getComputedStyle.width,
        height = _win$getComputedStyle.height,
        popupPosition = _win$getComputedStyle.position;
      var originLeft = popupElement.style.left;
      var originTop = popupElement.style.top;
      var originRight = popupElement.style.right;
      var originBottom = popupElement.style.bottom;
      var originOverflow = popupElement.style.overflow;

      // Placement
      var placementInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, builtinPlacements[placement]), popupAlign);

      // placeholder element
      var placeholderElement = doc.createElement('div');
      (_popupElement$parentE = popupElement.parentElement) === null || _popupElement$parentE === void 0 || _popupElement$parentE.appendChild(placeholderElement);
      placeholderElement.style.left = "".concat(popupElement.offsetLeft, "px");
      placeholderElement.style.top = "".concat(popupElement.offsetTop, "px");
      placeholderElement.style.position = popupPosition;
      placeholderElement.style.height = "".concat(popupElement.offsetHeight, "px");
      placeholderElement.style.width = "".concat(popupElement.offsetWidth, "px");

      // Reset first
      popupElement.style.left = '0';
      popupElement.style.top = '0';
      popupElement.style.right = 'auto';
      popupElement.style.bottom = 'auto';
      popupElement.style.overflow = 'hidden';

      // Calculate align style, we should consider `transform` case
      var targetRect;
      if (Array.isArray(target)) {
        targetRect = {
          x: target[0],
          y: target[1],
          width: 0,
          height: 0
        };
      } else {
        var rect = target.getBoundingClientRect();
        targetRect = {
          x: rect.x,
          y: rect.y,
          width: rect.width,
          height: rect.height
        };
      }
      var popupRect = popupElement.getBoundingClientRect();
      var _doc$documentElement = doc.documentElement,
        clientWidth = _doc$documentElement.clientWidth,
        clientHeight = _doc$documentElement.clientHeight,
        scrollWidth = _doc$documentElement.scrollWidth,
        scrollHeight = _doc$documentElement.scrollHeight,
        scrollTop = _doc$documentElement.scrollTop,
        scrollLeft = _doc$documentElement.scrollLeft;
      var popupHeight = popupRect.height;
      var popupWidth = popupRect.width;
      var targetHeight = targetRect.height;
      var targetWidth = targetRect.width;

      // Get bounding of visible area
      var visibleRegion = {
        left: 0,
        top: 0,
        right: clientWidth,
        bottom: clientHeight
      };
      var scrollRegion = {
        left: -scrollLeft,
        top: -scrollTop,
        right: scrollWidth - scrollLeft,
        bottom: scrollHeight - scrollTop
      };
      var htmlRegion = placementInfo.htmlRegion;
      var VISIBLE = 'visible';
      var VISIBLE_FIRST = 'visibleFirst';
      if (htmlRegion !== 'scroll' && htmlRegion !== VISIBLE_FIRST) {
        htmlRegion = VISIBLE;
      }
      var isVisibleFirst = htmlRegion === VISIBLE_FIRST;
      var scrollRegionArea = (0, _util.getVisibleArea)(scrollRegion, scrollerList);
      var visibleRegionArea = (0, _util.getVisibleArea)(visibleRegion, scrollerList);
      var visibleArea = htmlRegion === VISIBLE ? visibleRegionArea : scrollRegionArea;

      // When set to `visibleFirst`,
      // the check `adjust` logic will use `visibleRegion` for check first.
      var adjustCheckVisibleArea = isVisibleFirst ? visibleRegionArea : visibleArea;

      // Record right & bottom align data
      popupElement.style.left = 'auto';
      popupElement.style.top = 'auto';
      popupElement.style.right = '0';
      popupElement.style.bottom = '0';
      var popupMirrorRect = popupElement.getBoundingClientRect();

      // Reset back
      popupElement.style.left = originLeft;
      popupElement.style.top = originTop;
      popupElement.style.right = originRight;
      popupElement.style.bottom = originBottom;
      popupElement.style.overflow = originOverflow;
      (_popupElement$parentE2 = popupElement.parentElement) === null || _popupElement$parentE2 === void 0 || _popupElement$parentE2.removeChild(placeholderElement);

      // Calculate scale
      var _scaleX = (0, _util.toNum)(Math.round(popupWidth / parseFloat(width) * 1000) / 1000);
      var _scaleY = (0, _util.toNum)(Math.round(popupHeight / parseFloat(height) * 1000) / 1000);

      // No need to align since it's not visible in view
      if (_scaleX === 0 || _scaleY === 0 || (0, _findDOMNode.isDOM)(target) && !(0, _isVisible.default)(target)) {
        return;
      }

      // Offset
      var offset = placementInfo.offset,
        targetOffset = placementInfo.targetOffset;
      var _getNumberOffset = getNumberOffset(popupRect, offset),
        _getNumberOffset2 = (0, _slicedToArray2.default)(_getNumberOffset, 2),
        popupOffsetX = _getNumberOffset2[0],
        popupOffsetY = _getNumberOffset2[1];
      var _getNumberOffset3 = getNumberOffset(targetRect, targetOffset),
        _getNumberOffset4 = (0, _slicedToArray2.default)(_getNumberOffset3, 2),
        targetOffsetX = _getNumberOffset4[0],
        targetOffsetY = _getNumberOffset4[1];
      targetRect.x -= targetOffsetX;
      targetRect.y -= targetOffsetY;

      // Points
      var _ref3 = placementInfo.points || [],
        _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        popupPoint = _ref4[0],
        targetPoint = _ref4[1];
      var targetPoints = splitPoints(targetPoint);
      var popupPoints = splitPoints(popupPoint);
      var targetAlignPoint = getAlignPoint(targetRect, targetPoints);
      var popupAlignPoint = getAlignPoint(popupRect, popupPoints);

      // Real align info may not same as origin one
      var nextAlignInfo = (0, _objectSpread2.default)({}, placementInfo);

      // Next Offset
      var nextOffsetX = targetAlignPoint.x - popupAlignPoint.x + popupOffsetX;
      var nextOffsetY = targetAlignPoint.y - popupAlignPoint.y + popupOffsetY;

      // ============== Intersection ===============
      // Get area by position. Used for check if flip area is better
      function getIntersectionVisibleArea(offsetX, offsetY) {
        var area = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : visibleArea;
        var l = popupRect.x + offsetX;
        var t = popupRect.y + offsetY;
        var r = l + popupWidth;
        var b = t + popupHeight;
        var visibleL = Math.max(l, area.left);
        var visibleT = Math.max(t, area.top);
        var visibleR = Math.min(r, area.right);
        var visibleB = Math.min(b, area.bottom);
        return Math.max(0, (visibleR - visibleL) * (visibleB - visibleT));
      }
      var originIntersectionVisibleArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY);

      // As `visibleFirst`, we prepare this for check
      var originIntersectionRecommendArea = getIntersectionVisibleArea(nextOffsetX, nextOffsetY, visibleRegionArea);

      // ========================== Overflow ===========================
      var targetAlignPointTL = getAlignPoint(targetRect, ['t', 'l']);
      var popupAlignPointTL = getAlignPoint(popupRect, ['t', 'l']);
      var targetAlignPointBR = getAlignPoint(targetRect, ['b', 'r']);
      var popupAlignPointBR = getAlignPoint(popupRect, ['b', 'r']);
      var overflow = placementInfo.overflow || {};
      var adjustX = overflow.adjustX,
        adjustY = overflow.adjustY,
        shiftX = overflow.shiftX,
        shiftY = overflow.shiftY;
      var supportAdjust = function supportAdjust(val) {
        if (typeof val === 'boolean') {
          return val;
        }
        return val >= 0;
      };

      // Prepare position
      var nextPopupY;
      var nextPopupBottom;
      var nextPopupX;
      var nextPopupRight;
      function syncNextPopupPosition() {
        nextPopupY = popupRect.y + nextOffsetY;
        nextPopupBottom = nextPopupY + popupHeight;
        nextPopupX = popupRect.x + nextOffsetX;
        nextPopupRight = nextPopupX + popupWidth;
      }
      syncNextPopupPosition();

      // >>>>>>>>>> Top & Bottom
      var needAdjustY = supportAdjust(adjustY);
      var sameTB = popupPoints[0] === targetPoints[0];

      // Bottom to Top
      if (needAdjustY && popupPoints[0] === 't' && (nextPopupBottom > adjustCheckVisibleArea.bottom || prevFlipRef.current.bt)) {
        var tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          tmpNextOffsetY -= popupHeight - targetHeight;
        } else {
          tmpNextOffsetY = targetAlignPointTL.y - popupAlignPointBR.y - popupOffsetY;
        }
        var newVisibleArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY);
        var newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        newVisibleArea > originIntersectionVisibleArea || newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.bt = true;
          nextOffsetY = tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.bt = false;
        }
      }

      // Top to Bottom
      if (needAdjustY && popupPoints[0] === 'b' && (nextPopupY < adjustCheckVisibleArea.top || prevFlipRef.current.tb)) {
        var _tmpNextOffsetY = nextOffsetY;
        if (sameTB) {
          _tmpNextOffsetY += popupHeight - targetHeight;
        } else {
          _tmpNextOffsetY = targetAlignPointBR.y - popupAlignPointTL.y - popupOffsetY;
        }
        var _newVisibleArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY);
        var _newVisibleRecommendArea = getIntersectionVisibleArea(nextOffsetX, _tmpNextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea > originIntersectionVisibleArea || _newVisibleArea === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea >= originIntersectionRecommendArea)) {
          prevFlipRef.current.tb = true;
          nextOffsetY = _tmpNextOffsetY;
          popupOffsetY = -popupOffsetY;
          nextAlignInfo.points = [reversePoints(popupPoints, 0), reversePoints(targetPoints, 0)];
        } else {
          prevFlipRef.current.tb = false;
        }
      }

      // >>>>>>>>>> Left & Right
      var needAdjustX = supportAdjust(adjustX);

      // >>>>> Flip
      var sameLR = popupPoints[1] === targetPoints[1];

      // Right to Left
      if (needAdjustX && popupPoints[1] === 'l' && (nextPopupRight > adjustCheckVisibleArea.right || prevFlipRef.current.rl)) {
        var tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          tmpNextOffsetX -= popupWidth - targetWidth;
        } else {
          tmpNextOffsetX = targetAlignPointTL.x - popupAlignPointBR.x - popupOffsetX;
        }
        var _newVisibleArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea2 = getIntersectionVisibleArea(tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea2 > originIntersectionVisibleArea || _newVisibleArea2 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea2 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.rl = true;
          nextOffsetX = tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.rl = false;
        }
      }

      // Left to Right
      if (needAdjustX && popupPoints[1] === 'r' && (nextPopupX < adjustCheckVisibleArea.left || prevFlipRef.current.lr)) {
        var _tmpNextOffsetX = nextOffsetX;
        if (sameLR) {
          _tmpNextOffsetX += popupWidth - targetWidth;
        } else {
          _tmpNextOffsetX = targetAlignPointBR.x - popupAlignPointTL.x - popupOffsetX;
        }
        var _newVisibleArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY);
        var _newVisibleRecommendArea3 = getIntersectionVisibleArea(_tmpNextOffsetX, nextOffsetY, visibleRegionArea);
        if (
        // Of course use larger one
        _newVisibleArea3 > originIntersectionVisibleArea || _newVisibleArea3 === originIntersectionVisibleArea && (!isVisibleFirst ||
        // Choose recommend one
        _newVisibleRecommendArea3 >= originIntersectionRecommendArea)) {
          prevFlipRef.current.lr = true;
          nextOffsetX = _tmpNextOffsetX;
          popupOffsetX = -popupOffsetX;
          nextAlignInfo.points = [reversePoints(popupPoints, 1), reversePoints(targetPoints, 1)];
        } else {
          prevFlipRef.current.lr = false;
        }
      }

      // ============================ Shift ============================
      syncNextPopupPosition();
      var numShiftX = shiftX === true ? 0 : shiftX;
      if (typeof numShiftX === 'number') {
        // Left
        if (nextPopupX < visibleRegionArea.left) {
          nextOffsetX -= nextPopupX - visibleRegionArea.left - popupOffsetX;
          if (targetRect.x + targetWidth < visibleRegionArea.left + numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.left + targetWidth - numShiftX;
          }
        }

        // Right
        if (nextPopupRight > visibleRegionArea.right) {
          nextOffsetX -= nextPopupRight - visibleRegionArea.right - popupOffsetX;
          if (targetRect.x > visibleRegionArea.right - numShiftX) {
            nextOffsetX += targetRect.x - visibleRegionArea.right + numShiftX;
          }
        }
      }
      var numShiftY = shiftY === true ? 0 : shiftY;
      if (typeof numShiftY === 'number') {
        // Top
        if (nextPopupY < visibleRegionArea.top) {
          nextOffsetY -= nextPopupY - visibleRegionArea.top - popupOffsetY;

          // When target if far away from visible area
          // Stop shift
          if (targetRect.y + targetHeight < visibleRegionArea.top + numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.top + targetHeight - numShiftY;
          }
        }

        // Bottom
        if (nextPopupBottom > visibleRegionArea.bottom) {
          nextOffsetY -= nextPopupBottom - visibleRegionArea.bottom - popupOffsetY;
          if (targetRect.y > visibleRegionArea.bottom - numShiftY) {
            nextOffsetY += targetRect.y - visibleRegionArea.bottom + numShiftY;
          }
        }
      }

      // ============================ Arrow ============================
      // Arrow center align
      var popupLeft = popupRect.x + nextOffsetX;
      var popupRight = popupLeft + popupWidth;
      var popupTop = popupRect.y + nextOffsetY;
      var popupBottom = popupTop + popupHeight;
      var targetLeft = targetRect.x;
      var targetRight = targetLeft + targetWidth;
      var targetTop = targetRect.y;
      var targetBottom = targetTop + targetHeight;
      var maxLeft = Math.max(popupLeft, targetLeft);
      var minRight = Math.min(popupRight, targetRight);
      var xCenter = (maxLeft + minRight) / 2;
      var nextArrowX = xCenter - popupLeft;
      var maxTop = Math.max(popupTop, targetTop);
      var minBottom = Math.min(popupBottom, targetBottom);
      var yCenter = (maxTop + minBottom) / 2;
      var nextArrowY = yCenter - popupTop;
      onPopupAlign === null || onPopupAlign === void 0 || onPopupAlign(popupEle, nextAlignInfo);

      // Additional calculate right & bottom position
      var offsetX4Right = popupMirrorRect.right - popupRect.x - (nextOffsetX + popupRect.width);
      var offsetY4Bottom = popupMirrorRect.bottom - popupRect.y - (nextOffsetY + popupRect.height);
      setOffsetInfo({
        ready: true,
        offsetX: nextOffsetX / _scaleX,
        offsetY: nextOffsetY / _scaleY,
        offsetR: offsetX4Right / _scaleX,
        offsetB: offsetY4Bottom / _scaleY,
        arrowX: nextArrowX / _scaleX,
        arrowY: nextArrowY / _scaleY,
        scaleX: _scaleX,
        scaleY: _scaleY,
        align: nextAlignInfo
      });
    }
  });
  var triggerAlign = function triggerAlign() {
    alignCountRef.current += 1;
    var id = alignCountRef.current;

    // Merge all align requirement into one frame
    Promise.resolve().then(function () {
      if (alignCountRef.current === id) {
        onAlign();
      }
    });
  };

  // Reset ready status when placement & open changed
  var resetReady = function resetReady() {
    setOffsetInfo(function (ori) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, ori), {}, {
        ready: false
      });
    });
  };
  (0, _useLayoutEffect.default)(resetReady, [placement]);
  (0, _useLayoutEffect.default)(function () {
    if (!open) {
      resetReady();
    }
  }, [open]);
  return [offsetInfo.ready, offsetInfo.offsetX, offsetInfo.offsetY, offsetInfo.offsetR, offsetInfo.offsetB, offsetInfo.arrowX, offsetInfo.arrowY, offsetInfo.scaleX, offsetInfo.scaleY, offsetInfo.align, triggerAlign];
}

/***/ }),

/***/ 55867:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useWatch;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _util = __webpack_require__(3806);
function useWatch(open, target, popup, onAlign, onScroll) {
  (0, _useLayoutEffect.default)(function () {
    if (open && target && popup) {
      var targetElement = target;
      var popupElement = popup;
      var targetScrollList = (0, _util.collectScroller)(targetElement);
      var popupScrollList = (0, _util.collectScroller)(popupElement);
      var win = (0, _util.getWin)(popupElement);
      var mergedList = new Set([win].concat((0, _toConsumableArray2.default)(targetScrollList), (0, _toConsumableArray2.default)(popupScrollList)));
      function notifyScroll() {
        onAlign();
        onScroll();
      }
      mergedList.forEach(function (scroller) {
        scroller.addEventListener('scroll', notifyScroll, {
          passive: true
        });
      });
      win.addEventListener('resize', notifyScroll, {
        passive: true
      });

      // First time always do align
      onAlign();
      return function () {
        mergedList.forEach(function (scroller) {
          scroller.removeEventListener('scroll', notifyScroll);
          win.removeEventListener('resize', notifyScroll);
        });
      };
    }
  }, [open, target, popup]);
}

/***/ }),

/***/ 23651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useWinClick;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _warning = __webpack_require__(32038);
var _shadow = __webpack_require__(43480);
var _raf = _interopRequireDefault(__webpack_require__(83884));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _util = __webpack_require__(3806);
function useWinClick(open, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen) {
  var openRef = React.useRef(open);

  // Window click to hide should be lock to avoid trigger lock immediately
  var lockRef = React.useRef(false);
  if (openRef.current !== open) {
    lockRef.current = true;
    openRef.current = open;
  }
  React.useEffect(function () {
    var id = (0, _raf.default)(function () {
      lockRef.current = false;
    });
    return function () {
      _raf.default.cancel(id);
    };
  }, [open]);

  // Click to hide is special action since click popup element should not hide
  React.useEffect(function () {
    if (clickToHide && popupEle && (!mask || maskClosable)) {
      var genClickEvents = function genClickEvents() {
        var clickInside = false;

        // User may mouseDown inside and drag out of popup and mouse up
        // Record here to prevent close
        var onWindowMouseDown = function onWindowMouseDown(_ref) {
          var target = _ref.target;
          clickInside = inPopupOrChild(target);
        };
        var onWindowClick = function onWindowClick(_ref2) {
          var target = _ref2.target;
          if (!lockRef.current && openRef.current && !clickInside && !inPopupOrChild(target)) {
            triggerOpen(false);
          }
        };
        return [onWindowMouseDown, onWindowClick];
      };

      // Events
      var _genClickEvents = genClickEvents(),
        _genClickEvents2 = (0, _slicedToArray2.default)(_genClickEvents, 2),
        onWinMouseDown = _genClickEvents2[0],
        onWinClick = _genClickEvents2[1];
      var _genClickEvents3 = genClickEvents(),
        _genClickEvents4 = (0, _slicedToArray2.default)(_genClickEvents3, 2),
        onShadowMouseDown = _genClickEvents4[0],
        onShadowClick = _genClickEvents4[1];
      var win = (0, _util.getWin)(popupEle);
      win.addEventListener('mousedown', onWinMouseDown, true);
      win.addEventListener('click', onWinClick, true);
      win.addEventListener('contextmenu', onWinClick, true);

      // shadow root
      var targetShadowRoot = (0, _shadow.getShadowRoot)(targetEle);
      if (targetShadowRoot) {
        targetShadowRoot.addEventListener('mousedown', onShadowMouseDown, true);
        targetShadowRoot.addEventListener('click', onShadowClick, true);
        targetShadowRoot.addEventListener('contextmenu', onShadowClick, true);
      }

      // Warning if target and popup not in same root
      if (false) { var popupRoot, targetRoot, _targetEle$getRootNod, _popupEle$getRootNode; }
      return function () {
        win.removeEventListener('mousedown', onWinMouseDown, true);
        win.removeEventListener('click', onWinClick, true);
        win.removeEventListener('contextmenu', onWinClick, true);
        if (targetShadowRoot) {
          targetShadowRoot.removeEventListener('mousedown', onShadowMouseDown, true);
          targetShadowRoot.removeEventListener('click', onShadowClick, true);
          targetShadowRoot.removeEventListener('contextmenu', onShadowClick, true);
        }
      };
    }
  }, [clickToHide, targetEle, popupEle, mask, maskClosable]);
}

/***/ }),

/***/ 71042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.generateTrigger = generateTrigger;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _portal = _interopRequireDefault(__webpack_require__(14329));
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var _rcResizeObserver = _interopRequireDefault(__webpack_require__(78922));
var _findDOMNode = __webpack_require__(29321);
var _shadow = __webpack_require__(43480);
var _useEvent = _interopRequireDefault(__webpack_require__(64301));
var _useId = _interopRequireDefault(__webpack_require__(81922));
var _useLayoutEffect = _interopRequireDefault(__webpack_require__(50368));
var _isMobile = _interopRequireDefault(__webpack_require__(57213));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Popup = _interopRequireDefault(__webpack_require__(23004));
var _TriggerWrapper = _interopRequireDefault(__webpack_require__(75445));
var _context = _interopRequireDefault(__webpack_require__(49777));
var _useAction3 = _interopRequireDefault(__webpack_require__(9815));
var _useAlign3 = _interopRequireDefault(__webpack_require__(27260));
var _useWatch = _interopRequireDefault(__webpack_require__(55867));
var _useWinClick = _interopRequireDefault(__webpack_require__(23651));
var _util = __webpack_require__(3806);
var _excluded = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
// Removed Props List
// Seems this can be auto
// getDocument?: (element?: HTMLElement) => Document;

// New version will not wrap popup with `rc-trigger-popup-content` when multiple children

function generateTrigger() {
  var PortalComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _portal.default;
  var Trigger = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-trigger-popup' : _props$prefixCls,
      children = props.children,
      _props$action = props.action,
      action = _props$action === void 0 ? 'hover' : _props$action,
      showAction = props.showAction,
      hideAction = props.hideAction,
      popupVisible = props.popupVisible,
      defaultPopupVisible = props.defaultPopupVisible,
      onPopupVisibleChange = props.onPopupVisibleChange,
      afterPopupVisibleChange = props.afterPopupVisibleChange,
      mouseEnterDelay = props.mouseEnterDelay,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      focusDelay = props.focusDelay,
      blurDelay = props.blurDelay,
      mask = props.mask,
      _props$maskClosable = props.maskClosable,
      maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
      getPopupContainer = props.getPopupContainer,
      forceRender = props.forceRender,
      autoDestroy = props.autoDestroy,
      destroyPopupOnHide = props.destroyPopupOnHide,
      popup = props.popup,
      popupClassName = props.popupClassName,
      popupStyle = props.popupStyle,
      popupPlacement = props.popupPlacement,
      _props$builtinPlaceme = props.builtinPlacements,
      builtinPlacements = _props$builtinPlaceme === void 0 ? {} : _props$builtinPlaceme,
      popupAlign = props.popupAlign,
      zIndex = props.zIndex,
      stretch = props.stretch,
      getPopupClassNameFromAlign = props.getPopupClassNameFromAlign,
      fresh = props.fresh,
      alignPoint = props.alignPoint,
      onPopupClick = props.onPopupClick,
      onPopupAlign = props.onPopupAlign,
      arrow = props.arrow,
      popupMotion = props.popupMotion,
      maskMotion = props.maskMotion,
      popupTransitionName = props.popupTransitionName,
      popupAnimation = props.popupAnimation,
      maskTransitionName = props.maskTransitionName,
      maskAnimation = props.maskAnimation,
      className = props.className,
      getTriggerDOMNode = props.getTriggerDOMNode,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);
    var mergedAutoDestroy = autoDestroy || destroyPopupOnHide || false;

    // =========================== Mobile ===========================
    var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      mobile = _React$useState2[0],
      setMobile = _React$useState2[1];
    (0, _useLayoutEffect.default)(function () {
      setMobile((0, _isMobile.default)());
    }, []);

    // ========================== Context ===========================
    var subPopupElements = React.useRef({});
    var parentContext = React.useContext(_context.default);
    var context = React.useMemo(function () {
      return {
        registerSubPopup: function registerSubPopup(id, subPopupEle) {
          subPopupElements.current[id] = subPopupEle;
          parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, subPopupEle);
        }
      };
    }, [parentContext]);

    // =========================== Popup ============================
    var id = (0, _useId.default)();
    var _React$useState3 = React.useState(null),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      popupEle = _React$useState4[0],
      setPopupEle = _React$useState4[1];
    var setPopupRef = (0, _useEvent.default)(function (node) {
      if ((0, _findDOMNode.isDOM)(node) && popupEle !== node) {
        setPopupEle(node);
      }
      parentContext === null || parentContext === void 0 || parentContext.registerSubPopup(id, node);
    });

    // =========================== Target ===========================
    // Use state to control here since `useRef` update not trigger render
    var _React$useState5 = React.useState(null),
      _React$useState6 = (0, _slicedToArray2.default)(_React$useState5, 2),
      targetEle = _React$useState6[0],
      setTargetEle = _React$useState6[1];

    // Used for forwardRef target. Not use internal
    var externalForwardRef = React.useRef(null);
    var setTargetRef = (0, _useEvent.default)(function (node) {
      if ((0, _findDOMNode.isDOM)(node) && targetEle !== node) {
        setTargetEle(node);
        externalForwardRef.current = node;
      }
    });

    // ========================== Children ==========================
    var child = React.Children.only(children);
    var originChildProps = (child === null || child === void 0 ? void 0 : child.props) || {};
    var cloneProps = {};
    var inPopupOrChild = (0, _useEvent.default)(function (ele) {
      var _getShadowRoot, _getShadowRoot2;
      var childDOM = targetEle;
      return (childDOM === null || childDOM === void 0 ? void 0 : childDOM.contains(ele)) || ((_getShadowRoot = (0, _shadow.getShadowRoot)(childDOM)) === null || _getShadowRoot === void 0 ? void 0 : _getShadowRoot.host) === ele || ele === childDOM || (popupEle === null || popupEle === void 0 ? void 0 : popupEle.contains(ele)) || ((_getShadowRoot2 = (0, _shadow.getShadowRoot)(popupEle)) === null || _getShadowRoot2 === void 0 ? void 0 : _getShadowRoot2.host) === ele || ele === popupEle || Object.values(subPopupElements.current).some(function (subPopupEle) {
        return (subPopupEle === null || subPopupEle === void 0 ? void 0 : subPopupEle.contains(ele)) || ele === subPopupEle;
      });
    });

    // =========================== Motion ===========================
    var mergePopupMotion = (0, _util.getMotion)(prefixCls, popupMotion, popupAnimation, popupTransitionName);
    var mergeMaskMotion = (0, _util.getMotion)(prefixCls, maskMotion, maskAnimation, maskTransitionName);

    // ============================ Open ============================
    var _React$useState7 = React.useState(defaultPopupVisible || false),
      _React$useState8 = (0, _slicedToArray2.default)(_React$useState7, 2),
      internalOpen = _React$useState8[0],
      setInternalOpen = _React$useState8[1];

    // Render still use props as first priority
    var mergedOpen = popupVisible !== null && popupVisible !== void 0 ? popupVisible : internalOpen;

    // We use effect sync here in case `popupVisible` back to `undefined`
    var setMergedOpen = (0, _useEvent.default)(function (nextOpen) {
      if (popupVisible === undefined) {
        setInternalOpen(nextOpen);
      }
    });
    (0, _useLayoutEffect.default)(function () {
      setInternalOpen(popupVisible || false);
    }, [popupVisible]);
    var openRef = React.useRef(mergedOpen);
    openRef.current = mergedOpen;
    var lastTriggerRef = React.useRef([]);
    lastTriggerRef.current = [];
    var internalTriggerOpen = (0, _useEvent.default)(function (nextOpen) {
      var _lastTriggerRef$curre;
      setMergedOpen(nextOpen);

      // Enter or Pointer will both trigger open state change
      // We only need take one to avoid duplicated change event trigger
      // Use `lastTriggerRef` to record last open type
      if (((_lastTriggerRef$curre = lastTriggerRef.current[lastTriggerRef.current.length - 1]) !== null && _lastTriggerRef$curre !== void 0 ? _lastTriggerRef$curre : mergedOpen) !== nextOpen) {
        lastTriggerRef.current.push(nextOpen);
        onPopupVisibleChange === null || onPopupVisibleChange === void 0 || onPopupVisibleChange(nextOpen);
      }
    });

    // Trigger for delay
    var delayRef = React.useRef();
    var clearDelay = function clearDelay() {
      clearTimeout(delayRef.current);
    };
    var triggerOpen = function triggerOpen(nextOpen) {
      var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      clearDelay();
      if (delay === 0) {
        internalTriggerOpen(nextOpen);
      } else {
        delayRef.current = setTimeout(function () {
          internalTriggerOpen(nextOpen);
        }, delay * 1000);
      }
    };
    React.useEffect(function () {
      return clearDelay;
    }, []);

    // ========================== Motion ============================
    var _React$useState9 = React.useState(false),
      _React$useState10 = (0, _slicedToArray2.default)(_React$useState9, 2),
      inMotion = _React$useState10[0],
      setInMotion = _React$useState10[1];
    (0, _useLayoutEffect.default)(function (firstMount) {
      if (!firstMount || mergedOpen) {
        setInMotion(true);
      }
    }, [mergedOpen]);
    var _React$useState11 = React.useState(null),
      _React$useState12 = (0, _slicedToArray2.default)(_React$useState11, 2),
      motionPrepareResolve = _React$useState12[0],
      setMotionPrepareResolve = _React$useState12[1];

    // =========================== Align ============================
    var _React$useState13 = React.useState([0, 0]),
      _React$useState14 = (0, _slicedToArray2.default)(_React$useState13, 2),
      mousePos = _React$useState14[0],
      setMousePos = _React$useState14[1];
    var setMousePosByEvent = function setMousePosByEvent(event) {
      setMousePos([event.clientX, event.clientY]);
    };
    var _useAlign = (0, _useAlign3.default)(mergedOpen, popupEle, alignPoint ? mousePos : targetEle, popupPlacement, builtinPlacements, popupAlign, onPopupAlign),
      _useAlign2 = (0, _slicedToArray2.default)(_useAlign, 11),
      ready = _useAlign2[0],
      offsetX = _useAlign2[1],
      offsetY = _useAlign2[2],
      offsetR = _useAlign2[3],
      offsetB = _useAlign2[4],
      arrowX = _useAlign2[5],
      arrowY = _useAlign2[6],
      scaleX = _useAlign2[7],
      scaleY = _useAlign2[8],
      alignInfo = _useAlign2[9],
      onAlign = _useAlign2[10];
    var _useAction = (0, _useAction3.default)(mobile, action, showAction, hideAction),
      _useAction2 = (0, _slicedToArray2.default)(_useAction, 2),
      showActions = _useAction2[0],
      hideActions = _useAction2[1];
    var clickToShow = showActions.has('click');
    var clickToHide = hideActions.has('click') || hideActions.has('contextMenu');
    var triggerAlign = (0, _useEvent.default)(function () {
      if (!inMotion) {
        onAlign();
      }
    });
    var onScroll = function onScroll() {
      if (openRef.current && alignPoint && clickToHide) {
        triggerOpen(false);
      }
    };
    (0, _useWatch.default)(mergedOpen, targetEle, popupEle, triggerAlign, onScroll);
    (0, _useLayoutEffect.default)(function () {
      triggerAlign();
    }, [mousePos, popupPlacement]);

    // When no builtinPlacements and popupAlign changed
    (0, _useLayoutEffect.default)(function () {
      if (mergedOpen && !(builtinPlacements !== null && builtinPlacements !== void 0 && builtinPlacements[popupPlacement])) {
        triggerAlign();
      }
    }, [JSON.stringify(popupAlign)]);
    var alignedClassName = React.useMemo(function () {
      var baseClassName = (0, _util.getAlignPopupClassName)(builtinPlacements, prefixCls, alignInfo, alignPoint);
      return (0, _classnames.default)(baseClassName, getPopupClassNameFromAlign === null || getPopupClassNameFromAlign === void 0 ? void 0 : getPopupClassNameFromAlign(alignInfo));
    }, [alignInfo, getPopupClassNameFromAlign, builtinPlacements, prefixCls, alignPoint]);

    // ============================ Refs ============================
    React.useImperativeHandle(ref, function () {
      return {
        nativeElement: externalForwardRef.current,
        forceAlign: triggerAlign
      };
    });

    // ========================== Stretch ===========================
    var _React$useState15 = React.useState(0),
      _React$useState16 = (0, _slicedToArray2.default)(_React$useState15, 2),
      targetWidth = _React$useState16[0],
      setTargetWidth = _React$useState16[1];
    var _React$useState17 = React.useState(0),
      _React$useState18 = (0, _slicedToArray2.default)(_React$useState17, 2),
      targetHeight = _React$useState18[0],
      setTargetHeight = _React$useState18[1];
    var syncTargetSize = function syncTargetSize() {
      if (stretch && targetEle) {
        var rect = targetEle.getBoundingClientRect();
        setTargetWidth(rect.width);
        setTargetHeight(rect.height);
      }
    };
    var onTargetResize = function onTargetResize() {
      syncTargetSize();
      triggerAlign();
    };

    // ========================== Motion ============================
    var onVisibleChanged = function onVisibleChanged(visible) {
      setInMotion(false);
      onAlign();
      afterPopupVisibleChange === null || afterPopupVisibleChange === void 0 || afterPopupVisibleChange(visible);
    };

    // We will trigger align when motion is in prepare
    var onPrepare = function onPrepare() {
      return new Promise(function (resolve) {
        syncTargetSize();
        setMotionPrepareResolve(function () {
          return resolve;
        });
      });
    };
    (0, _useLayoutEffect.default)(function () {
      if (motionPrepareResolve) {
        onAlign();
        motionPrepareResolve();
        setMotionPrepareResolve(null);
      }
    }, [motionPrepareResolve]);

    // =========================== Action ===========================
    /**
     * Util wrapper for trigger action
     */
    function wrapperAction(eventName, nextOpen, delay, preEvent) {
      cloneProps[eventName] = function (event) {
        var _originChildProps$eve;
        preEvent === null || preEvent === void 0 || preEvent(event);
        triggerOpen(nextOpen, delay);

        // Pass to origin
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        (_originChildProps$eve = originChildProps[eventName]) === null || _originChildProps$eve === void 0 || _originChildProps$eve.call.apply(_originChildProps$eve, [originChildProps, event].concat(args));
      };
    }

    // ======================= Action: Click ========================
    if (clickToShow || clickToHide) {
      cloneProps.onClick = function (event) {
        var _originChildProps$onC;
        if (openRef.current && clickToHide) {
          triggerOpen(false);
        } else if (!openRef.current && clickToShow) {
          setMousePosByEvent(event);
          triggerOpen(true);
        }

        // Pass to origin
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        (_originChildProps$onC = originChildProps.onClick) === null || _originChildProps$onC === void 0 || _originChildProps$onC.call.apply(_originChildProps$onC, [originChildProps, event].concat(args));
      };
    }

    // Click to hide is special action since click popup element should not hide
    (0, _useWinClick.default)(mergedOpen, clickToHide, targetEle, popupEle, mask, maskClosable, inPopupOrChild, triggerOpen);

    // ======================= Action: Hover ========================
    var hoverToShow = showActions.has('hover');
    var hoverToHide = hideActions.has('hover');
    var onPopupMouseEnter;
    var onPopupMouseLeave;
    if (hoverToShow) {
      // Compatible with old browser which not support pointer event
      wrapperAction('onMouseEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      wrapperAction('onPointerEnter', true, mouseEnterDelay, function (event) {
        setMousePosByEvent(event);
      });
      onPopupMouseEnter = function onPopupMouseEnter() {
        // Only trigger re-open when popup is visible
        if (mergedOpen || inMotion) {
          triggerOpen(true, mouseEnterDelay);
        }
      };

      // Align Point
      if (alignPoint) {
        cloneProps.onMouseMove = function (event) {
          var _originChildProps$onM;
          // setMousePosByEvent(event);
          (_originChildProps$onM = originChildProps.onMouseMove) === null || _originChildProps$onM === void 0 || _originChildProps$onM.call(originChildProps, event);
        };
      }
    }
    if (hoverToHide) {
      wrapperAction('onMouseLeave', false, mouseLeaveDelay);
      wrapperAction('onPointerLeave', false, mouseLeaveDelay);
      onPopupMouseLeave = function onPopupMouseLeave() {
        triggerOpen(false, mouseLeaveDelay);
      };
    }

    // ======================= Action: Focus ========================
    if (showActions.has('focus')) {
      wrapperAction('onFocus', true, focusDelay);
    }
    if (hideActions.has('focus')) {
      wrapperAction('onBlur', false, blurDelay);
    }

    // ==================== Action: ContextMenu =====================
    if (showActions.has('contextMenu')) {
      cloneProps.onContextMenu = function (event) {
        var _originChildProps$onC2;
        if (openRef.current && hideActions.has('contextMenu')) {
          triggerOpen(false);
        } else {
          setMousePosByEvent(event);
          triggerOpen(true);
        }
        event.preventDefault();

        // Pass to origin
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        (_originChildProps$onC2 = originChildProps.onContextMenu) === null || _originChildProps$onC2 === void 0 || _originChildProps$onC2.call.apply(_originChildProps$onC2, [originChildProps, event].concat(args));
      };
    }

    // ========================= ClassName ==========================
    if (className) {
      cloneProps.className = (0, _classnames.default)(originChildProps.className, className);
    }

    // =========================== Render ===========================
    var mergedChildrenProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, originChildProps), cloneProps);

    // Pass props into cloneProps for nest usage
    var passedProps = {};
    var passedEventList = ['onContextMenu', 'onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
    passedEventList.forEach(function (eventName) {
      if (restProps[eventName]) {
        passedProps[eventName] = function () {
          var _mergedChildrenProps$;
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          (_mergedChildrenProps$ = mergedChildrenProps[eventName]) === null || _mergedChildrenProps$ === void 0 || _mergedChildrenProps$.call.apply(_mergedChildrenProps$, [mergedChildrenProps].concat(args));
          restProps[eventName].apply(restProps, args);
        };
      }
    });

    // Child Node
    var triggerNode = /*#__PURE__*/React.cloneElement(child, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedChildrenProps), passedProps));
    var arrowPos = {
      x: arrowX,
      y: arrowY
    };
    var innerArrow = arrow ? (0, _objectSpread2.default)({}, arrow !== true ? arrow : {}) : null;

    // Render
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_rcResizeObserver.default, {
      disabled: !mergedOpen,
      ref: setTargetRef,
      onResize: onTargetResize
    }, /*#__PURE__*/React.createElement(_TriggerWrapper.default, {
      getTriggerDOMNode: getTriggerDOMNode
    }, triggerNode)), /*#__PURE__*/React.createElement(_context.default.Provider, {
      value: context
    }, /*#__PURE__*/React.createElement(_Popup.default, {
      portal: PortalComponent,
      ref: setPopupRef,
      prefixCls: prefixCls,
      popup: popup,
      className: (0, _classnames.default)(popupClassName, alignedClassName),
      style: popupStyle,
      target: targetEle,
      onMouseEnter: onPopupMouseEnter,
      onMouseLeave: onPopupMouseLeave
      // https://github.com/ant-design/ant-design/issues/43924
      ,
      onPointerEnter: onPopupMouseEnter,
      zIndex: zIndex
      // Open
      ,
      open: mergedOpen,
      keepDom: inMotion,
      fresh: fresh
      // Click
      ,
      onClick: onPopupClick
      // Mask
      ,
      mask: mask
      // Motion
      ,
      motion: mergePopupMotion,
      maskMotion: mergeMaskMotion,
      onVisibleChanged: onVisibleChanged,
      onPrepare: onPrepare
      // Portal
      ,
      forceRender: forceRender,
      autoDestroy: mergedAutoDestroy,
      getPopupContainer: getPopupContainer
      // Arrow
      ,
      align: alignInfo,
      arrow: innerArrow,
      arrowPos: arrowPos
      // Align
      ,
      ready: ready,
      offsetX: offsetX,
      offsetY: offsetY,
      offsetR: offsetR,
      offsetB: offsetB,
      onAlign: triggerAlign
      // Stretch
      ,
      stretch: stretch,
      targetWidth: targetWidth / scaleX,
      targetHeight: targetHeight / scaleY
    })));
  });
  if (false) {}
  return Trigger;
}
var _default = exports["default"] = generateTrigger(_portal.default);

/***/ }),

/***/ 3806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.collectScroller = collectScroller;
exports.getAlignPopupClassName = getAlignPopupClassName;
exports.getMotion = getMotion;
exports.getVisibleArea = getVisibleArea;
exports.getWin = getWin;
exports.toNum = toNum;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
function isPointsEq() {
  var a1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var a2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var isAlignPoint = arguments.length > 2 ? arguments[2] : undefined;
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var _builtinPlacements$pl;
    var placement = placements[i];
    if (isPointsEq((_builtinPlacements$pl = builtinPlacements[placement]) === null || _builtinPlacements$pl === void 0 ? void 0 : _builtinPlacements$pl.points, points, isAlignPoint)) {
      return "".concat(prefixCls, "-placement-").concat(placement);
    }
  }
  return '';
}

/** @deprecated We should not use this if we can refactor all deps */
function getMotion(prefixCls, motion, animation, transitionName) {
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: "".concat(prefixCls, "-").concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}
function getWin(ele) {
  return ele.ownerDocument.defaultView;
}

/**
 * Get all the scrollable parent elements of the element
 * @param ele       The element to be detected
 * @param areaOnly  Only return the parent which will cut visible area
 */
function collectScroller(ele) {
  var scrollerList = [];
  var current = ele === null || ele === void 0 ? void 0 : ele.parentElement;
  var scrollStyle = ['hidden', 'scroll', 'clip', 'auto'];
  while (current) {
    var _getWin$getComputedSt = getWin(current).getComputedStyle(current),
      overflowX = _getWin$getComputedSt.overflowX,
      overflowY = _getWin$getComputedSt.overflowY,
      overflow = _getWin$getComputedSt.overflow;
    if ([overflowX, overflowY, overflow].some(function (o) {
      return scrollStyle.includes(o);
    })) {
      scrollerList.push(current);
    }
    current = current.parentElement;
  }
  return scrollerList;
}
function toNum(num) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return Number.isNaN(num) ? defaultValue : num;
}
function getPxValue(val) {
  return toNum(parseFloat(val), 0);
}
/**
 *
 *
 *  **************************************
 *  *              Border                *
 *  *     **************************     *
 *  *     *                  *     *     *
 *  *  B  *                  *  S  *  B  *
 *  *  o  *                  *  c  *  o  *
 *  *  r  *      Content     *  r  *  r  *
 *  *  d  *                  *  o  *  d  *
 *  *  e  *                  *  l  *  e  *
 *  *  r  ********************  l  *  r  *
 *  *     *        Scroll          *     *
 *  *     **************************     *
 *  *              Border                *
 *  **************************************
 *
 */
/**
 * Get visible area of element
 */
function getVisibleArea(initArea, scrollerList) {
  var visibleArea = (0, _objectSpread2.default)({}, initArea);
  (scrollerList || []).forEach(function (ele) {
    if (ele instanceof HTMLBodyElement || ele instanceof HTMLHtmlElement) {
      return;
    }

    // Skip if static position which will not affect visible area
    var _getWin$getComputedSt2 = getWin(ele).getComputedStyle(ele),
      overflow = _getWin$getComputedSt2.overflow,
      overflowClipMargin = _getWin$getComputedSt2.overflowClipMargin,
      borderTopWidth = _getWin$getComputedSt2.borderTopWidth,
      borderBottomWidth = _getWin$getComputedSt2.borderBottomWidth,
      borderLeftWidth = _getWin$getComputedSt2.borderLeftWidth,
      borderRightWidth = _getWin$getComputedSt2.borderRightWidth;
    var eleRect = ele.getBoundingClientRect();
    var eleOutHeight = ele.offsetHeight,
      eleInnerHeight = ele.clientHeight,
      eleOutWidth = ele.offsetWidth,
      eleInnerWidth = ele.clientWidth;
    var borderTopNum = getPxValue(borderTopWidth);
    var borderBottomNum = getPxValue(borderBottomWidth);
    var borderLeftNum = getPxValue(borderLeftWidth);
    var borderRightNum = getPxValue(borderRightWidth);
    var scaleX = toNum(Math.round(eleRect.width / eleOutWidth * 1000) / 1000);
    var scaleY = toNum(Math.round(eleRect.height / eleOutHeight * 1000) / 1000);

    // Original visible area
    var eleScrollWidth = (eleOutWidth - eleInnerWidth - borderLeftNum - borderRightNum) * scaleX;
    var eleScrollHeight = (eleOutHeight - eleInnerHeight - borderTopNum - borderBottomNum) * scaleY;

    // Cut border size
    var scaledBorderTopWidth = borderTopNum * scaleY;
    var scaledBorderBottomWidth = borderBottomNum * scaleY;
    var scaledBorderLeftWidth = borderLeftNum * scaleX;
    var scaledBorderRightWidth = borderRightNum * scaleX;

    // Clip margin
    var clipMarginWidth = 0;
    var clipMarginHeight = 0;
    if (overflow === 'clip') {
      var clipNum = getPxValue(overflowClipMargin);
      clipMarginWidth = clipNum * scaleX;
      clipMarginHeight = clipNum * scaleY;
    }

    // Region
    var eleLeft = eleRect.x + scaledBorderLeftWidth - clipMarginWidth;
    var eleTop = eleRect.y + scaledBorderTopWidth - clipMarginHeight;
    var eleRight = eleLeft + eleRect.width + 2 * clipMarginWidth - scaledBorderLeftWidth - scaledBorderRightWidth - eleScrollWidth;
    var eleBottom = eleTop + eleRect.height + 2 * clipMarginHeight - scaledBorderTopWidth - scaledBorderBottomWidth - eleScrollHeight;
    visibleArea.left = Math.max(visibleArea.left, eleLeft);
    visibleArea.top = Math.max(visibleArea.top, eleTop);
    visibleArea.right = Math.min(visibleArea.right, eleRight);
    visibleArea.bottom = Math.min(visibleArea.bottom, eleBottom);
  });
  return visibleArea;
}

/***/ }),

/***/ 99838:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.withPureRenderTheme = withPureRenderTheme;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useMergedState = _interopRequireDefault(__webpack_require__(56146));
var _configProvider = _interopRequireWildcard(__webpack_require__(34791));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function withPureRenderTheme(Component) {
  return props => ( /*#__PURE__*/React.createElement(_configProvider.default, {
    theme: {
      token: {
        motion: false,
        zIndexPopupBase: 0
      }
    }
  }, /*#__PURE__*/React.createElement(Component, Object.assign({}, props))));
}
/* istanbul ignore next */
const genPurePanel = (Component, defaultPrefixCls, getDropdownCls, postProps) => {
  const PurePanel = props => {
    const {
      prefixCls: customizePrefixCls,
      style
    } = props;
    const holderRef = React.useRef(null);
    const [popupHeight, setPopupHeight] = React.useState(0);
    const [popupWidth, setPopupWidth] = React.useState(0);
    const [open, setOpen] = (0, _useMergedState.default)(false, {
      value: props.open
    });
    const {
      getPrefixCls
    } = React.useContext(_configProvider.ConfigContext);
    const prefixCls = getPrefixCls(defaultPrefixCls || 'select', customizePrefixCls);
    React.useEffect(() => {
      // We do not care about ssr
      setOpen(true);
      if (typeof ResizeObserver !== 'undefined') {
        const resizeObserver = new ResizeObserver(entries => {
          const element = entries[0].target;
          setPopupHeight(element.offsetHeight + 8);
          setPopupWidth(element.offsetWidth);
        });
        const interval = setInterval(() => {
          var _a;
          const dropdownCls = getDropdownCls ? `.${getDropdownCls(prefixCls)}` : `.${prefixCls}-dropdown`;
          const popup = (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(dropdownCls);
          if (popup) {
            clearInterval(interval);
            resizeObserver.observe(popup);
          }
        }, 10);
        return () => {
          clearInterval(interval);
          resizeObserver.disconnect();
        };
      }
    }, []);
    let mergedProps = Object.assign(Object.assign({}, props), {
      style: Object.assign(Object.assign({}, style), {
        margin: 0
      }),
      open,
      visible: open,
      getPopupContainer: () => holderRef.current
    });
    if (postProps) {
      mergedProps = postProps(mergedProps);
    }
    const mergedStyle = {
      paddingBottom: popupHeight,
      position: 'relative',
      minWidth: popupWidth
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: holderRef,
      style: mergedStyle
    }, /*#__PURE__*/React.createElement(Component, Object.assign({}, mergedProps)));
  };
  return withPureRenderTheme(PurePanel);
};
var _default = exports["default"] = genPurePanel;

/***/ }),

/***/ 76152:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.containerBaseZIndexOffset = exports.consumerBaseZIndexOffset = exports.CONTAINER_MAX_OFFSET = void 0;
exports.useZIndex = useZIndex;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _useToken = _interopRequireDefault(__webpack_require__(11753));
var _zindexContext = _interopRequireDefault(__webpack_require__(1274));
// Z-Index control range
// Container: 1000 + offset 100 (max base + 10 * offset = 2000)
// Popover: offset 50
// Notification: Container Max zIndex + componentOffset
const CONTAINER_OFFSET = 100;
const CONTAINER_OFFSET_MAX_COUNT = 10;
const CONTAINER_MAX_OFFSET = exports.CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
const containerBaseZIndexOffset = exports.containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET
};
const consumerBaseZIndexOffset = exports.consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function isContainerType(type) {
  return type in containerBaseZIndexOffset;
}
function useZIndex(componentType, customZIndex) {
  const [, token] = (0, _useToken.default)();
  const parentZIndex = _react.default.useContext(_zindexContext.default);
  const isContainer = isContainerType(componentType);
  if (customZIndex !== undefined) {
    return [customZIndex, customZIndex];
  }
  let zIndex = parentZIndex !== null && parentZIndex !== void 0 ? parentZIndex : 0;
  if (isContainer) {
    zIndex +=
    // Use preset token zIndex by default but not stack when has parent container
    (parentZIndex ? 0 : token.zIndexPopupBase) +
    // Container offset
    containerBaseZIndexOffset[componentType];
    zIndex = Math.min(zIndex, token.zIndexPopupBase + CONTAINER_MAX_OFFSET);
  } else {
    zIndex += consumerBaseZIndexOffset[componentType];
  }
  return [parentZIndex === undefined ? customZIndex : zIndex, zIndex];
}

/***/ }),

/***/ 95201:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getMergedStatus = void 0;
exports.getStatusClassNames = getStatusClassNames;
var _classnames = _interopRequireDefault(__webpack_require__(54641));
const InputStatuses = (/* unused pure expression or super */ null && (['warning', 'error', '']));
function getStatusClassNames(prefixCls, status, hasFeedback) {
  return (0, _classnames.default)({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
}
const getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;
exports.getMergedStatus = getMergedStatus;

/***/ }),

/***/ 4474:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.devUseWarning = exports["default"] = exports.WarningContext = void 0;
exports.noop = noop;
exports.resetWarned = resetWarned;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _warning = _interopRequireWildcard(__webpack_require__(32038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function noop() {}
let deprecatedWarnList = null;
function resetWarned() {
  deprecatedWarnList = null;
  (0, _warning.resetWarned)();
}
// eslint-disable-next-line import/no-mutable-exports
let warning = noop;
if (false) {}
const WarningContext = exports.WarningContext = /*#__PURE__*/React.createContext({});
/**
 * This is a hook but we not named as `useWarning`
 * since this is only used in development.
 * We should always wrap this in `if (process.env.NODE_ENV !== 'production')` condition
 */
const devUseWarning = exports.devUseWarning =  false ? 0 : () => {
  const noopWarning = () => {};
  noopWarning.deprecated = noop;
  return noopWarning;
};
var _default = exports["default"] = warning;

/***/ }),

/***/ 1274:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(18038));
const zIndexContext = /*#__PURE__*/_react.default.createContext(undefined);
if (false) {}
var _default = exports["default"] = zIndexContext;

/***/ }),

/***/ 8365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _en_US = _interopRequireDefault(__webpack_require__(63584));
var _default = exports["default"] = _en_US.default;

/***/ }),

/***/ 42076:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.DisabledContextProvider = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const DisabledContext = /*#__PURE__*/React.createContext(false);
const DisabledContextProvider = _ref => {
  let {
    children,
    disabled
  } = _ref;
  const originDisabled = React.useContext(DisabledContext);
  return /*#__PURE__*/React.createElement(DisabledContext.Provider, {
    value: disabled !== null && disabled !== void 0 ? disabled : originDisabled
  }, children);
};
exports.DisabledContextProvider = DisabledContextProvider;
var _default = exports["default"] = DisabledContext;

/***/ }),

/***/ 71754:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = MotionWrapper;
var _rcMotion = __webpack_require__(54029);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _internal = __webpack_require__(37952);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function MotionWrapper(props) {
  const {
    children
  } = props;
  const [, token] = (0, _internal.useToken)();
  const {
    motion
  } = token;
  const needWrapMotionProviderRef = React.useRef(false);
  needWrapMotionProviderRef.current = needWrapMotionProviderRef.current || motion === false;
  if (needWrapMotionProviderRef.current) {
    return /*#__PURE__*/React.createElement(_rcMotion.Provider, {
      motion: motion
    }, children);
  }
  return children;
}

/***/ }),

/***/ 61671:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _warning = __webpack_require__(4474);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Warning for ConfigProviderProps.
 * This will be empty function in production.
 */
const PropWarning = /*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(_ref => {
  let {
    dropdownMatchSelectWidth
  } = _ref;
  const warning = (0, _warning.devUseWarning)('ConfigProvider');
  warning.deprecated(dropdownMatchSelectWidth === undefined, 'dropdownMatchSelectWidth', 'popupMatchSelectWidth');
  return null;
})));
if (false) {}
var _default = exports["default"] =  false ? 0 : () => null;

/***/ }),

/***/ 65721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SizeContextProvider = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SizeContext = /*#__PURE__*/React.createContext(undefined);
const SizeContextProvider = _ref => {
  let {
    children,
    size
  } = _ref;
  const originSize = React.useContext(SizeContext);
  return /*#__PURE__*/React.createElement(SizeContext.Provider, {
    value: size || originSize
  }, children);
};
exports.SizeContextProvider = SizeContextProvider;
var _default = exports["default"] = SizeContext;

/***/ }),

/***/ 85440:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultIconPrefixCls = exports.ConfigContext = exports.ConfigConsumer = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const defaultIconPrefixCls = exports.defaultIconPrefixCls = 'anticon';
const defaultGetPrefixCls = (suffixCls, customizePrefixCls) => {
  if (customizePrefixCls) {
    return customizePrefixCls;
  }
  return suffixCls ? `ant-${suffixCls}` : 'ant';
};
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will cause circular dependency.
const ConfigContext = exports.ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls
});
const {
  Consumer: ConfigConsumer
} = ConfigContext;
exports.ConfigConsumer = ConfigConsumer;

/***/ }),

/***/ 87241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getStyle = getStyle;
exports.registerTheme = registerTheme;
var _colors = __webpack_require__(84013);
var _tinycolor = __webpack_require__(79226);
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _dynamicCSS = __webpack_require__(58296);
var _warning = _interopRequireDefault(__webpack_require__(4474));
/* eslint-disable import/prefer-default-export, prefer-destructuring */

const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`;
function getStyle(globalPrefixCls, theme) {
  const variables = {};
  const formatColor = (color, updater) => {
    let clone = color.clone();
    clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
    return clone.toRgbString();
  };
  const fillColor = (colorVal, type) => {
    const baseColor = new _tinycolor.TinyColor(colorVal);
    const colorPalettes = (0, _colors.generate)(baseColor.toRgbString());
    variables[`${type}-color`] = formatColor(baseColor);
    variables[`${type}-color-disabled`] = colorPalettes[1];
    variables[`${type}-color-hover`] = colorPalettes[4];
    variables[`${type}-color-active`] = colorPalettes[6];
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString();
    variables[`${type}-color-deprecated-bg`] = colorPalettes[0];
    variables[`${type}-color-deprecated-border`] = colorPalettes[2];
  };
  // ================ Primary Color ================
  if (theme.primaryColor) {
    fillColor(theme.primaryColor, 'primary');
    const primaryColor = new _tinycolor.TinyColor(theme.primaryColor);
    const primaryColors = (0, _colors.generate)(primaryColor.toRgbString());
    // Legacy - We should use semantic naming standard
    primaryColors.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color;
    });
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, c => c.lighten(35));
    variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, c => c.lighten(20));
    variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, c => c.tint(20));
    variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, c => c.tint(50));
    variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, c => c.setAlpha(c.getAlpha() * 0.12));
    const primaryActiveColor = new _tinycolor.TinyColor(primaryColors[0]);
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c => c.setAlpha(c.getAlpha() * 0.3));
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2));
  }
  // ================ Success Color ================
  if (theme.successColor) {
    fillColor(theme.successColor, 'success');
  }
  // ================ Warning Color ================
  if (theme.warningColor) {
    fillColor(theme.warningColor, 'warning');
  }
  // ================= Error Color =================
  if (theme.errorColor) {
    fillColor(theme.errorColor, 'error');
  }
  // ================= Info Color ==================
  if (theme.infoColor) {
    fillColor(theme.infoColor, 'info');
  }
  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${globalPrefixCls}-${key}: ${variables[key]};`);
  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim();
}
function registerTheme(globalPrefixCls, theme) {
  const style = getStyle(globalPrefixCls, theme);
  if ((0, _canUseDom.default)()) {
    (0, _dynamicCSS.updateCSS)(style, `${dynamicStyleMark}-dynamic-theme`);
  } else {
     false ? 0 : void 0;
  }
}

/***/ }),

/***/ 23607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _internal = __webpack_require__(37952);
/**
 * This hook is only for cssVar to add root className for components.
 * If root ClassName is needed, this hook could be refactored with `-root`
 * @param prefixCls
 */
const useCSSVarCls = prefixCls => {
  const [,,,, cssVar] = (0, _internal.useToken)();
  return cssVar ? `${prefixCls}-css-var` : '';
};
var _default = exports["default"] = useCSSVarCls;

/***/ }),

/***/ 24608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(18038);
var _DisabledContext = _interopRequireDefault(__webpack_require__(42076));
var _SizeContext = _interopRequireDefault(__webpack_require__(65721));
function useConfig() {
  const componentDisabled = (0, _react.useContext)(_DisabledContext.default);
  const componentSize = (0, _react.useContext)(_SizeContext.default);
  return {
    componentDisabled,
    componentSize
  };
}
var _default = exports["default"] = useConfig;

/***/ }),

/***/ 97662:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _SizeContext = _interopRequireDefault(__webpack_require__(65721));
const useSize = customSize => {
  const size = _react.default.useContext(_SizeContext.default);
  const mergedSize = _react.default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === 'string') {
      return customSize !== null && customSize !== void 0 ? customSize : size;
    }
    if (customSize instanceof Function) {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var _default = exports["default"] = useSize;

/***/ }),

/***/ 93520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useTheme;
var _useMemo = _interopRequireDefault(__webpack_require__(33580));
var _isEqual = _interopRequireDefault(__webpack_require__(63303));
var _internal = __webpack_require__(37952);
var _useThemeKey = _interopRequireDefault(__webpack_require__(89590));
var _warning = __webpack_require__(4474);
function useTheme(theme, parentTheme) {
  var _a;
  const warning = (0, _warning.devUseWarning)('ConfigProvider');
  const themeConfig = theme || {};
  const parentThemeConfig = themeConfig.inherit === false || !parentTheme ? _internal.defaultConfig : parentTheme;
  const themeKey = (0, _useThemeKey.default)();
  if (false) {}
  return (0, _useMemo.default)(() => {
    var _a, _b;
    if (!theme) {
      return parentTheme;
    }
    // Override
    const mergedComponents = Object.assign({}, parentThemeConfig.components);
    Object.keys(theme.components || {}).forEach(componentName => {
      mergedComponents[componentName] = Object.assign(Object.assign({}, mergedComponents[componentName]), theme.components[componentName]);
    });
    const cssVarKey = `css-var-${themeKey.replace(/:/g, '')}`;
    const mergedCssVar = ((_a = themeConfig.cssVar) !== null && _a !== void 0 ? _a : parentThemeConfig.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: 'ant'
    }, typeof parentThemeConfig.cssVar === 'object' ? parentThemeConfig.cssVar : {}), typeof themeConfig.cssVar === 'object' ? themeConfig.cssVar : {}), {
      key: typeof themeConfig.cssVar === 'object' && ((_b = themeConfig.cssVar) === null || _b === void 0 ? void 0 : _b.key) || cssVarKey
    });
    // Base token
    return Object.assign(Object.assign(Object.assign({}, parentThemeConfig), themeConfig), {
      token: Object.assign(Object.assign({}, parentThemeConfig.token), themeConfig.token),
      components: mergedComponents,
      cssVar: mergedCssVar
    });
  }, [themeConfig, parentThemeConfig], (prev, next) => prev.some((prevTheme, index) => {
    const nextTheme = next[index];
    return !(0, _isEqual.default)(prevTheme, nextTheme, true);
  }));
}

/***/ }),

/***/ 89590:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const fullClone = Object.assign({}, React);
const {
  useId
} = fullClone;
const useEmptyId = () => '';
const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;
var _default = exports["default"] = useThemeKey;

/***/ }),

/***/ 34791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";
'use client';

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "ConfigConsumer", ({
  enumerable: true,
  get: function () {
    return _context3.ConfigConsumer;
  }
}));
Object.defineProperty(exports, "ConfigContext", ({
  enumerable: true,
  get: function () {
    return _context3.ConfigContext;
  }
}));
exports["default"] = exports.configConsumerProps = void 0;
Object.defineProperty(exports, "defaultIconPrefixCls", ({
  enumerable: true,
  get: function () {
    return _context3.defaultIconPrefixCls;
  }
}));
exports.warnContext = exports.globalConfig = exports.defaultPrefixCls = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _cssinjs = __webpack_require__(64021);
var _Context = _interopRequireDefault(__webpack_require__(60961));
var _useMemo = _interopRequireDefault(__webpack_require__(33580));
var _set = __webpack_require__(44263);
var _warning = _interopRequireWildcard(__webpack_require__(4474));
var _validateMessagesContext = _interopRequireDefault(__webpack_require__(81105));
var _locale = _interopRequireWildcard(__webpack_require__(38654));
var _context = _interopRequireDefault(__webpack_require__(1438));
var _en_US = _interopRequireDefault(__webpack_require__(18701));
var _context2 = __webpack_require__(42155);
var _seed = _interopRequireDefault(__webpack_require__(13245));
var _context3 = __webpack_require__(85440);
var _cssVariables = __webpack_require__(87241);
var _DisabledContext = __webpack_require__(42076);
var _useConfig = _interopRequireDefault(__webpack_require__(24608));
var _useTheme = _interopRequireDefault(__webpack_require__(93520));
var _MotionWrapper = _interopRequireDefault(__webpack_require__(71754));
var _PropWarning = _interopRequireDefault(__webpack_require__(61671));
var _SizeContext = _interopRequireWildcard(__webpack_require__(65721));
var _style = _interopRequireDefault(__webpack_require__(98758));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Since too many feedback using static method like `Modal.confirm` not getting theme, we record the
 * theme register info here to help developer get warning info.
 */
let existThemeConfig = false;
const warnContext = exports.warnContext =  false ? 0 : /* istanbul ignore next */
null;
const configConsumerProps = exports.configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
// These props is used by `useContext` directly in sub component
const PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form', 'select', 'button'];
const defaultPrefixCls = exports.defaultPrefixCls = 'ant';
let globalPrefixCls;
let globalIconPrefixCls;
let globalTheme;
function getGlobalPrefixCls() {
  return globalPrefixCls || defaultPrefixCls;
}
function getGlobalIconPrefixCls() {
  return globalIconPrefixCls || _context3.defaultIconPrefixCls;
}
function isLegacyTheme(theme) {
  return Object.keys(theme).some(key => key.endsWith('Color'));
}
const setGlobalConfig = _ref => {
  let {
    prefixCls,
    iconPrefixCls,
    theme
  } = _ref;
  if (prefixCls !== undefined) {
    globalPrefixCls = prefixCls;
  }
  if (iconPrefixCls !== undefined) {
    globalIconPrefixCls = iconPrefixCls;
  }
  if (theme) {
    if (isLegacyTheme(theme)) {
       false ? 0 : void 0;
      (0, _cssVariables.registerTheme)(getGlobalPrefixCls(), theme);
    } else {
      globalTheme = theme;
    }
  }
};
const globalConfig = () => ({
  getPrefixCls: (suffixCls, customizePrefixCls) => {
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    return suffixCls ? `${getGlobalPrefixCls()}-${suffixCls}` : getGlobalPrefixCls();
  },
  getIconPrefixCls: getGlobalIconPrefixCls,
  getRootPrefixCls: () => {
    // If Global prefixCls provided, use this
    if (globalPrefixCls) {
      return globalPrefixCls;
    }
    // Fallback to default prefixCls
    return getGlobalPrefixCls();
  },
  getTheme: () => globalTheme
});
exports.globalConfig = globalConfig;
const ProviderChildren = props => {
  const {
    children,
    csp: customCsp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    form,
    locale,
    componentSize,
    direction,
    space,
    virtual,
    dropdownMatchSelectWidth,
    popupMatchSelectWidth,
    popupOverflow,
    legacyLocale,
    parentContext,
    iconPrefixCls: customIconPrefixCls,
    theme,
    componentDisabled,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    input,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  } = props;
  // =================================== Context ===================================
  const getPrefixCls = React.useCallback((suffixCls, customizePrefixCls) => {
    const {
      prefixCls
    } = props;
    if (customizePrefixCls) {
      return customizePrefixCls;
    }
    const mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  }, [parentContext.getPrefixCls, props.prefixCls]);
  const iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || _context3.defaultIconPrefixCls;
  const csp = customCsp || parentContext.csp;
  (0, _style.default)(iconPrefixCls, csp);
  const mergedTheme = (0, _useTheme.default)(theme, parentContext.theme);
  if (false) {}
  const baseConfig = {
    csp,
    autoInsertSpaceInButton,
    alert,
    anchor,
    locale: locale || legacyLocale,
    direction,
    space,
    virtual,
    popupMatchSelectWidth: popupMatchSelectWidth !== null && popupMatchSelectWidth !== void 0 ? popupMatchSelectWidth : dropdownMatchSelectWidth,
    popupOverflow,
    getPrefixCls,
    iconPrefixCls,
    theme: mergedTheme,
    segmented,
    statistic,
    spin,
    calendar,
    carousel,
    cascader,
    collapse,
    typography,
    checkbox,
    descriptions,
    divider,
    drawer,
    skeleton,
    steps,
    image,
    input,
    layout,
    list,
    mentions,
    modal,
    progress,
    result,
    slider,
    breadcrumb,
    menu,
    pagination,
    empty,
    badge,
    radio,
    rate,
    switch: SWITCH,
    transfer,
    avatar,
    message,
    tag,
    table,
    card,
    tabs,
    timeline,
    timePicker,
    upload,
    notification,
    tree,
    colorPicker,
    datePicker,
    rangePicker,
    flex,
    wave,
    dropdown,
    warning: warningConfig
  };
  const config = Object.assign({}, parentContext);
  Object.keys(baseConfig).forEach(key => {
    if (baseConfig[key] !== undefined) {
      config[key] = baseConfig[key];
    }
  });
  // Pass the props used by `useContext` directly with child component.
  // These props should merged into `config`.
  PASSED_PROPS.forEach(propName => {
    const propValue = props[propName];
    if (propValue) {
      config[propName] = propValue;
    }
  });
  // https://github.com/ant-design/ant-design/issues/27617
  const memoedConfig = (0, _useMemo.default)(() => config, config, (prevConfig, currentConfig) => {
    const prevKeys = Object.keys(prevConfig);
    const currentKeys = Object.keys(currentConfig);
    return prevKeys.length !== currentKeys.length || prevKeys.some(key => prevConfig[key] !== currentConfig[key]);
  });
  const memoIconContextValue = React.useMemo(() => ({
    prefixCls: iconPrefixCls,
    csp
  }), [iconPrefixCls, csp]);
  let childNode = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_PropWarning.default, {
    dropdownMatchSelectWidth: dropdownMatchSelectWidth
  }), children);
  const validateMessages = React.useMemo(() => {
    var _a, _b, _c, _d;
    return (0, _set.merge)(((_a = _en_US.default.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || {}, ((_c = (_b = memoedConfig.locale) === null || _b === void 0 ? void 0 : _b.Form) === null || _c === void 0 ? void 0 : _c.defaultValidateMessages) || {}, ((_d = memoedConfig.form) === null || _d === void 0 ? void 0 : _d.validateMessages) || {}, (form === null || form === void 0 ? void 0 : form.validateMessages) || {});
  }, [memoedConfig, form === null || form === void 0 ? void 0 : form.validateMessages]);
  if (Object.keys(validateMessages).length > 0) {
    childNode = /*#__PURE__*/React.createElement(_validateMessagesContext.default.Provider, {
      value: validateMessages
    }, childNode);
  }
  if (locale) {
    childNode = /*#__PURE__*/React.createElement(_locale.default, {
      locale: locale,
      _ANT_MARK__: _locale.ANT_MARK
    }, childNode);
  }
  if (iconPrefixCls || csp) {
    childNode = /*#__PURE__*/React.createElement(_Context.default.Provider, {
      value: memoIconContextValue
    }, childNode);
  }
  if (componentSize) {
    childNode = /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, childNode);
  }
  // =================================== Motion ===================================
  childNode = /*#__PURE__*/React.createElement(_MotionWrapper.default, null, childNode);
  // ================================ Dynamic theme ================================
  const memoTheme = React.useMemo(() => {
    const _a = mergedTheme || {},
      {
        algorithm,
        token,
        components,
        cssVar
      } = _a,
      rest = __rest(_a, ["algorithm", "token", "components", "cssVar"]);
    const themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? (0, _cssinjs.createTheme)(algorithm) : _context2.defaultTheme;
    const parsedComponents = {};
    Object.entries(components || {}).forEach(_ref2 => {
      let [componentName, componentToken] = _ref2;
      const parsedToken = Object.assign({}, componentToken);
      if ('algorithm' in parsedToken) {
        if (parsedToken.algorithm === true) {
          parsedToken.theme = themeObj;
        } else if (Array.isArray(parsedToken.algorithm) || typeof parsedToken.algorithm === 'function') {
          parsedToken.theme = (0, _cssinjs.createTheme)(parsedToken.algorithm);
        }
        delete parsedToken.algorithm;
      }
      parsedComponents[componentName] = parsedToken;
    });
    const mergedToken = Object.assign(Object.assign({}, _seed.default), token);
    return Object.assign(Object.assign({}, rest), {
      theme: themeObj,
      token: mergedToken,
      components: parsedComponents,
      override: Object.assign({
        override: mergedToken
      }, parsedComponents),
      cssVar: cssVar
    });
  }, [mergedTheme]);
  if (theme) {
    childNode = /*#__PURE__*/React.createElement(_context2.DesignTokenContext.Provider, {
      value: memoTheme
    }, childNode);
  }
  // ================================== Warning ===================================
  if (memoedConfig.warning) {
    childNode = /*#__PURE__*/React.createElement(_warning.WarningContext.Provider, {
      value: memoedConfig.warning
    }, childNode);
  }
  // =================================== Render ===================================
  if (componentDisabled !== undefined) {
    childNode = /*#__PURE__*/React.createElement(_DisabledContext.DisabledContextProvider, {
      disabled: componentDisabled
    }, childNode);
  }
  return /*#__PURE__*/React.createElement(_context3.ConfigContext.Provider, {
    value: memoedConfig
  }, childNode);
};
const ConfigProvider = props => {
  const context = React.useContext(_context3.ConfigContext);
  const antLocale = React.useContext(_context.default);
  return /*#__PURE__*/React.createElement(ProviderChildren, Object.assign({
    parentContext: context,
    legacyLocale: antLocale
  }, props));
};
ConfigProvider.ConfigContext = _context3.ConfigContext;
ConfigProvider.SizeContext = _SizeContext.default;
ConfigProvider.config = setGlobalConfig;
ConfigProvider.useConfig = _useConfig.default;
Object.defineProperty(ConfigProvider, 'SizeContext', {
  get: () => {
     false ? 0 : void 0;
    return _SizeContext.default;
  }
});
if (false) {}
var _default = exports["default"] = ConfigProvider;

/***/ }),

/***/ 98758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _internal.useResetIconStyle;
  }
}));
var _internal = __webpack_require__(37952);

/***/ }),

/***/ 63584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _en_US = _interopRequireDefault(__webpack_require__(71759));
var _en_US2 = _interopRequireDefault(__webpack_require__(71216));
// Merge into a locale object
const locale = {
  lang: Object.assign({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US.default),
  timePickerLocale: Object.assign({}, _en_US2.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
var _default = exports["default"] = locale;

/***/ }),

/***/ 37710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NoStyleItemContext = exports.NoFormStyle = exports.FormProvider = exports.FormItemPrefixContext = exports.FormItemInputContext = exports.FormContext = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var React = _react;
var _rcFieldForm = __webpack_require__(91230);
var _omit = _interopRequireDefault(__webpack_require__(63007));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FormContext = exports.FormContext = /*#__PURE__*/React.createContext({
  labelAlign: 'right',
  vertical: false,
  itemRef: () => {}
});
const NoStyleItemContext = exports.NoStyleItemContext = /*#__PURE__*/React.createContext(null);
const FormProvider = props => {
  const providerProps = (0, _omit.default)(props, ['prefixCls']);
  return /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, Object.assign({}, providerProps));
};
exports.FormProvider = FormProvider;
const FormItemPrefixContext = exports.FormItemPrefixContext = /*#__PURE__*/React.createContext({
  prefixCls: ''
});
const FormItemInputContext = exports.FormItemInputContext = /*#__PURE__*/React.createContext({});
if (false) {}
const NoFormStyle = _ref => {
  let {
    children,
    status,
    override
  } = _ref;
  const formItemInputContext = (0, _react.useContext)(FormItemInputContext);
  const newFormItemInputContext = (0, _react.useMemo)(() => {
    const newContext = Object.assign({}, formItemInputContext);
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return /*#__PURE__*/React.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
exports.NoFormStyle = NoFormStyle;

/***/ }),

/***/ 81105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(18038);
// ZombieJ: We export single file here since
// ConfigProvider use this which will make loop deps
// to import whole `rc-field-form`
var _default = exports["default"] = /*#__PURE__*/(0, _react.createContext)(undefined);

/***/ }),

/***/ 1438:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _react = __webpack_require__(18038);
const LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = exports["default"] = LocaleContext;

/***/ }),

/***/ 18701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _en_US = _interopRequireDefault(__webpack_require__(54681));
var _en_US2 = _interopRequireDefault(__webpack_require__(8365));
var _en_US3 = _interopRequireDefault(__webpack_require__(63584));
var _en_US4 = _interopRequireDefault(__webpack_require__(71216));
/* eslint-disable no-template-curly-in-string */

const typeTemplate = '${label} is not a valid ${type}';
const localeValues = {
  locale: 'en',
  Pagination: _en_US.default,
  DatePicker: _en_US3.default,
  TimePicker: _en_US4.default,
  Calendar: _en_US2.default,
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    filterCheckall: 'Select all items',
    filterSearchPlaceholder: 'Search in filters',
    emptyText: 'No data',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectNone: 'Clear all data',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click to sort descending',
    triggerAsc: 'Click to sort ascending',
    cancelSort: 'Click to cancel sorting'
  },
  Tour: {
    Next: 'Next',
    Previous: 'Previous',
    Finish: 'Finish'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    optional: '(optional)',
    defaultValidateMessages: {
      default: 'Field validation error for ${label}',
      required: 'Please enter ${label}',
      enum: '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        boolean: typeTemplate,
        integer: typeTemplate,
        float: typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} must be at least ${min} characters',
        max: '${label} must be up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} must be minimum ${min}',
        max: '${label} must be maximum ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Preview'
  },
  QRCode: {
    expired: 'QR code expired',
    refresh: 'Refresh'
  },
  ColorPicker: {
    presetEmpty: 'Empty'
  }
};
var _default = exports["default"] = localeValues;

/***/ }),

/***/ 38654:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.ANT_MARK = void 0;
Object.defineProperty(exports, "useLocale", ({
  enumerable: true,
  get: function () {
    return _useLocale.default;
  }
}));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _warning = __webpack_require__(4474);
var _locale = __webpack_require__(70500);
var _context = _interopRequireDefault(__webpack_require__(1438));
var _useLocale = _interopRequireDefault(__webpack_require__(77701));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ANT_MARK = exports.ANT_MARK = 'internalMark';
const LocaleProvider = props => {
  const {
    locale = {},
    children,
    _ANT_MARK__
  } = props;
  if (false) {}
  React.useEffect(() => {
    const clearLocale = (0, _locale.changeConfirmLocale)(locale && locale.Modal);
    return clearLocale;
  }, [locale]);
  const getMemoizedContextValue = React.useMemo(() => Object.assign(Object.assign({}, locale), {
    exist: true
  }), [locale]);
  return /*#__PURE__*/React.createElement(_context.default.Provider, {
    value: getMemoizedContextValue
  }, children);
};
if (false) {}
var _default = exports["default"] = LocaleProvider;

/***/ }),

/***/ 77701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _context = _interopRequireDefault(__webpack_require__(1438));
var _en_US = _interopRequireDefault(__webpack_require__(18701));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const useLocale = (componentName, defaultLocale) => {
  const fullLocale = React.useContext(_context.default);
  const getLocale = React.useMemo(() => {
    var _a;
    const locale = defaultLocale || _en_US.default[componentName];
    const localeFromContext = (_a = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale[componentName]) !== null && _a !== void 0 ? _a : {};
    return Object.assign(Object.assign({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
  }, [componentName, defaultLocale, fullLocale]);
  const getLocaleCode = React.useMemo(() => {
    const localeCode = fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if ((fullLocale === null || fullLocale === void 0 ? void 0 : fullLocale.exist) && !localeCode) {
      return _en_US.default.locale;
    }
    return localeCode;
  }, [fullLocale]);
  return [getLocale, getLocaleCode];
};
var _default = exports["default"] = useLocale;

/***/ }),

/***/ 70500:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;
var _en_US = _interopRequireDefault(__webpack_require__(18701));
let runtimeLocale = Object.assign({}, _en_US.default.Modal);
let localeList = [];
const generateLocale = () => localeList.reduce((merged, locale) => Object.assign(Object.assign({}, merged), locale), _en_US.default.Modal);
function changeConfirmLocale(newLocale) {
  if (newLocale) {
    const cloneLocale = Object.assign({}, newLocale);
    localeList.push(cloneLocale);
    runtimeLocale = generateLocale();
    return () => {
      localeList = localeList.filter(locale => locale !== cloneLocale);
      runtimeLocale = generateLocale();
    };
  }
  runtimeLocale = Object.assign({}, _en_US.default.Modal);
}
function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ 39599:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useCompactItemContext = exports["default"] = exports.SpaceCompactItemContext = exports.NoCompactStyle = void 0;
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var _toArray = _interopRequireDefault(__webpack_require__(87424));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _configProvider = __webpack_require__(34791);
var _useSize = _interopRequireDefault(__webpack_require__(97662));
var _style = _interopRequireDefault(__webpack_require__(84962));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const SpaceCompactItemContext = exports.SpaceCompactItemContext = /*#__PURE__*/React.createContext(null);
const useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React.useMemo(() => {
    if (!compactItemContext) {
      return '';
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === 'vertical' ? '-vertical-' : '-';
    return (0, _classnames.default)(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === 'rtl'
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
exports.useCompactItemContext = useCompactItemContext;
const NoCompactStyle = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
exports.NoCompactStyle = NoCompactStyle;
const CompactItem = _a => {
  var {
      children
    } = _a,
    otherProps = __rest(_a, ["children"]);
  return /*#__PURE__*/React.createElement(SpaceCompactItemContext.Provider, {
    value: otherProps
  }, children);
};
const Compact = props => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = React.useContext(_configProvider.ConfigContext);
  const {
      size,
      direction,
      block,
      prefixCls: customizePrefixCls,
      className,
      rootClassName,
      children
    } = props,
    restProps = __rest(props, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]);
  const mergedSize = (0, _useSize.default)(ctx => size !== null && size !== void 0 ? size : ctx);
  const prefixCls = getPrefixCls('space-compact', customizePrefixCls);
  const [wrapCSSVar, hashId] = (0, _style.default)(prefixCls);
  const clx = (0, _classnames.default)(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === 'rtl',
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: direction === 'vertical'
  }, className, rootClassName);
  const compactItemContext = React.useContext(SpaceCompactItemContext);
  const childNodes = (0, _toArray.default)(children);
  const nodes = React.useMemo(() => childNodes.map((child, i) => {
    const key = child && child.key || `${prefixCls}-item-${i}`;
    return /*#__PURE__*/React.createElement(CompactItem, {
      key: key,
      compactSize: mergedSize,
      compactDirection: direction,
      isFirstItem: i === 0 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isFirstItem)),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || (compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.isLastItem))
    }, child);
  }), [size, childNodes, compactItemContext]);
  // =========================== Render ===========================
  if (childNodes.length === 0) {
    return null;
  }
  return wrapCSSVar( /*#__PURE__*/React.createElement("div", Object.assign({
    className: clx
  }, restProps), nodes));
};
var _default = exports["default"] = Compact;

/***/ }),

/***/ 68656:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const genSpaceCompactStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-block': {
        display: 'flex',
        width: '100%'
      },
      '&-vertical': {
        flexDirection: 'column'
      }
    }
  };
};
// ============================== Export ==============================
var _default = exports["default"] = genSpaceCompactStyle;

/***/ }),

/***/ 84962:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.prepareComponentToken = exports["default"] = void 0;
var _internal = __webpack_require__(37952);
var _compact = _interopRequireDefault(__webpack_require__(68656));
const genSpaceStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'inline-flex',
      '&-rtl': {
        direction: 'rtl'
      },
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-align': {
        flexDirection: 'column',
        '&-center': {
          alignItems: 'center'
        },
        '&-start': {
          alignItems: 'flex-start'
        },
        '&-end': {
          alignItems: 'flex-end'
        },
        '&-baseline': {
          alignItems: 'baseline'
        }
      },
      [`${componentCls}-item:empty`]: {
        display: 'none'
      }
    }
  };
};
const genSpaceGapStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-gap-row-small': {
        rowGap: token.spaceGapSmallSize
      },
      '&-gap-row-middle': {
        rowGap: token.spaceGapMiddleSize
      },
      '&-gap-row-large': {
        rowGap: token.spaceGapLargeSize
      },
      '&-gap-col-small': {
        columnGap: token.spaceGapSmallSize
      },
      '&-gap-col-middle': {
        columnGap: token.spaceGapMiddleSize
      },
      '&-gap-col-large': {
        columnGap: token.spaceGapLargeSize
      }
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = () => ({});
exports.prepareComponentToken = prepareComponentToken;
var _default = exports["default"] = (0, _internal.genStyleHooks)('Space', token => {
  const spaceToken = (0, _internal.mergeToken)(token, {
    spaceGapSmallSize: token.paddingXS,
    spaceGapMiddleSize: token.padding,
    spaceGapLargeSize: token.paddingLG
  });
  return [genSpaceStyle(spaceToken), genSpaceGapStyle(spaceToken), (0, _compact.default)(spaceToken)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});

/***/ }),

/***/ 17952:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.genCompactItemStyle = genCompactItemStyle;
// handle border collapse
function compactItemBorder(token, parentCls, options) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? '> *' : '';
  const hoverEffects = ['hover', focus ? 'focus' : null, 'active'].filter(Boolean).map(n => `&:${n} ${childCombinator}`).join(',');
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    '&-item': Object.assign(Object.assign({
      [hoverEffects]: {
        zIndex: 2
      }
    }, focusElCls ? {
      [`&${focusElCls}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    })
  };
}
// handle border-radius
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : '';
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    focus: true
  };
  const {
    componentCls
  } = token;
  const compactCls = `${componentCls}-compact`;
  return {
    [compactCls]: Object.assign(Object.assign({}, compactItemBorder(token, compactCls, options)), compactItemBorderRadius(componentCls, compactCls, options))
  };
}

/***/ }),

/***/ 82760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.genLinkStyle = exports.genFocusStyle = exports.genFocusOutline = exports.genCommonStyle = exports.clearFix = void 0;
Object.defineProperty(exports, "operationUnit", ({
  enumerable: true,
  get: function () {
    return _operationUnit.operationUnit;
  }
}));
exports.textEllipsis = exports.resetIcon = exports.resetComponent = void 0;
var _cssinjs = __webpack_require__(64021);
var _operationUnit = __webpack_require__(98736);
const textEllipsis = exports.textEllipsis = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};
const resetComponent = function (token) {
  let needInheritFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    color: token.colorText,
    fontSize: token.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: token.lineHeight,
    listStyle: 'none',
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: needInheritFontFamily ? 'inherit' : token.fontFamily
  };
};
exports.resetComponent = resetComponent;
const resetIcon = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: 'inherit',
  fontStyle: 'normal',
  lineHeight: 0,
  textAlign: 'center',
  textTransform: 'none',
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  '> *': {
    lineHeight: 1
  },
  svg: {
    display: 'inline-block'
  }
});
exports.resetIcon = resetIcon;
const clearFix = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  '&::before': {
    display: 'table',
    content: '""'
  },
  '&::after': {
    // https://github.com/ant-design/ant-design/issues/21864
    display: 'table',
    clear: 'both',
    content: '""'
  }
});
exports.clearFix = clearFix;
const genLinkStyle = token => ({
  a: {
    color: token.colorLink,
    textDecoration: token.linkDecoration,
    backgroundColor: 'transparent',
    // remove the gray background on active links in IE 10.
    outline: 'none',
    cursor: 'pointer',
    transition: `color ${token.motionDurationSlow}`,
    '-webkit-text-decoration-skip': 'objects',
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    '&:hover': {
      color: token.colorLinkHover
    },
    '&:active': {
      color: token.colorLinkActive
    },
    [`&:active,
  &:hover`]: {
      textDecoration: token.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    '&:focus': {
      textDecoration: token.linkFocusDecoration,
      outline: 0
    },
    '&[disabled]': {
      color: token.colorTextDisabled,
      cursor: 'not-allowed'
    }
  }
});
exports.genLinkStyle = genLinkStyle;
const genCommonStyle = (token, componentPrefixCls) => {
  const {
    fontFamily,
    fontSize
  } = token;
  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;
  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',
      '&::before, &::after': {
        boxSizing: 'border-box'
      },
      [rootPrefixSelector]: {
        boxSizing: 'border-box',
        '&::before, &::after': {
          boxSizing: 'border-box'
        }
      }
    }
  };
};
exports.genCommonStyle = genCommonStyle;
const genFocusOutline = token => ({
  outline: `${(0, _cssinjs.unit)(token.lineWidthFocus)} solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s'
});
exports.genFocusOutline = genFocusOutline;
const genFocusStyle = token => ({
  '&:focus-visible': Object.assign({}, genFocusOutline(token))
});
exports.genFocusStyle = genFocusStyle;

/***/ }),

/***/ 692:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const genCollapseMotion = token => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: 'hidden',
      '&-active': {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: 'hidden',
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
var _default = exports["default"] = genCollapseMotion;

/***/ }),

/***/ 68477:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initFadeMotion = exports.fadeOut = exports.fadeIn = void 0;
var _cssinjs = __webpack_require__(64021);
var _motion = __webpack_require__(20449);
const fadeIn = exports.fadeIn = new _cssinjs.Keyframes('antFadeIn', {
  '0%': {
    opacity: 0
  },
  '100%': {
    opacity: 1
  }
});
const fadeOut = exports.fadeOut = new _cssinjs.Keyframes('antFadeOut', {
  '0%': {
    opacity: 1
  },
  '100%': {
    opacity: 0
  }
});
const initFadeMotion = function (token) {
  let sameLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return [(0, _motion.initMotion)(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: 'linear'
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: 'linear'
    }
  }];
};
exports.initFadeMotion = initFadeMotion;

/***/ }),

/***/ 12175:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "fadeIn", ({
  enumerable: true,
  get: function () {
    return _fade.fadeIn;
  }
}));
Object.defineProperty(exports, "fadeOut", ({
  enumerable: true,
  get: function () {
    return _fade.fadeOut;
  }
}));
Object.defineProperty(exports, "genCollapseMotion", ({
  enumerable: true,
  get: function () {
    return _collapse.default;
  }
}));
Object.defineProperty(exports, "initFadeMotion", ({
  enumerable: true,
  get: function () {
    return _fade.initFadeMotion;
  }
}));
Object.defineProperty(exports, "initMoveMotion", ({
  enumerable: true,
  get: function () {
    return _move.initMoveMotion;
  }
}));
Object.defineProperty(exports, "initSlideMotion", ({
  enumerable: true,
  get: function () {
    return _slide.initSlideMotion;
  }
}));
Object.defineProperty(exports, "initZoomMotion", ({
  enumerable: true,
  get: function () {
    return _zoom.initZoomMotion;
  }
}));
Object.defineProperty(exports, "moveDownIn", ({
  enumerable: true,
  get: function () {
    return _move.moveDownIn;
  }
}));
Object.defineProperty(exports, "moveDownOut", ({
  enumerable: true,
  get: function () {
    return _move.moveDownOut;
  }
}));
Object.defineProperty(exports, "moveLeftIn", ({
  enumerable: true,
  get: function () {
    return _move.moveLeftIn;
  }
}));
Object.defineProperty(exports, "moveLeftOut", ({
  enumerable: true,
  get: function () {
    return _move.moveLeftOut;
  }
}));
Object.defineProperty(exports, "moveRightIn", ({
  enumerable: true,
  get: function () {
    return _move.moveRightIn;
  }
}));
Object.defineProperty(exports, "moveRightOut", ({
  enumerable: true,
  get: function () {
    return _move.moveRightOut;
  }
}));
Object.defineProperty(exports, "moveUpIn", ({
  enumerable: true,
  get: function () {
    return _move.moveUpIn;
  }
}));
Object.defineProperty(exports, "moveUpOut", ({
  enumerable: true,
  get: function () {
    return _move.moveUpOut;
  }
}));
Object.defineProperty(exports, "slideDownIn", ({
  enumerable: true,
  get: function () {
    return _slide.slideDownIn;
  }
}));
Object.defineProperty(exports, "slideDownOut", ({
  enumerable: true,
  get: function () {
    return _slide.slideDownOut;
  }
}));
Object.defineProperty(exports, "slideLeftIn", ({
  enumerable: true,
  get: function () {
    return _slide.slideLeftIn;
  }
}));
Object.defineProperty(exports, "slideLeftOut", ({
  enumerable: true,
  get: function () {
    return _slide.slideLeftOut;
  }
}));
Object.defineProperty(exports, "slideRightIn", ({
  enumerable: true,
  get: function () {
    return _slide.slideRightIn;
  }
}));
Object.defineProperty(exports, "slideRightOut", ({
  enumerable: true,
  get: function () {
    return _slide.slideRightOut;
  }
}));
Object.defineProperty(exports, "slideUpIn", ({
  enumerable: true,
  get: function () {
    return _slide.slideUpIn;
  }
}));
Object.defineProperty(exports, "slideUpOut", ({
  enumerable: true,
  get: function () {
    return _slide.slideUpOut;
  }
}));
Object.defineProperty(exports, "zoomBigIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomBigIn;
  }
}));
Object.defineProperty(exports, "zoomBigOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomBigOut;
  }
}));
Object.defineProperty(exports, "zoomDownIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomDownIn;
  }
}));
Object.defineProperty(exports, "zoomDownOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomDownOut;
  }
}));
Object.defineProperty(exports, "zoomIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomIn;
  }
}));
Object.defineProperty(exports, "zoomLeftIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomLeftIn;
  }
}));
Object.defineProperty(exports, "zoomLeftOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomLeftOut;
  }
}));
Object.defineProperty(exports, "zoomOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomOut;
  }
}));
Object.defineProperty(exports, "zoomRightIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomRightIn;
  }
}));
Object.defineProperty(exports, "zoomRightOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomRightOut;
  }
}));
Object.defineProperty(exports, "zoomUpIn", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomUpIn;
  }
}));
Object.defineProperty(exports, "zoomUpOut", ({
  enumerable: true,
  get: function () {
    return _zoom.zoomUpOut;
  }
}));
var _fade = __webpack_require__(68477);
var _move = __webpack_require__(2773);
var _slide = __webpack_require__(21385);
var _zoom = __webpack_require__(40288);
var _collapse = _interopRequireDefault(__webpack_require__(692));

/***/ }),

/***/ 20449:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initMotion = void 0;
const initMotionCommon = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
// FIXME: origin less code seems same as initMotionCommon. Maybe we can safe remove
const initMotionCommonLeave = duration => ({
  animationDuration: duration,
  animationFillMode: 'both'
});
const initMotion = function (motionCls, inKeyframes, outKeyframes, duration) {
  let sameLevel = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  const sameLevelPrefix = sameLevel ? '&' : '';
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: Object.assign(Object.assign({}, initMotionCommon(duration)), {
      animationPlayState: 'paused'
    }),
    [`${sameLevelPrefix}${motionCls}-leave`]: Object.assign(Object.assign({}, initMotionCommonLeave(duration)), {
      animationPlayState: 'paused'
    }),
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: 'running'
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: 'running',
      pointerEvents: 'none'
    }
  };
};
exports.initMotion = initMotion;

/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.moveUpOut = exports.moveUpIn = exports.moveRightOut = exports.moveRightIn = exports.moveLeftOut = exports.moveLeftIn = exports.moveDownOut = exports.moveDownIn = exports.initMoveMotion = void 0;
var _cssinjs = __webpack_require__(64021);
var _motion = __webpack_require__(20449);
const moveDownIn = exports.moveDownIn = new _cssinjs.Keyframes('antMoveDownIn', {
  '0%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveDownOut = exports.moveDownOut = new _cssinjs.Keyframes('antMoveDownOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, 100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveLeftIn = exports.moveLeftIn = new _cssinjs.Keyframes('antMoveLeftIn', {
  '0%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveLeftOut = exports.moveLeftOut = new _cssinjs.Keyframes('antMoveLeftOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(-100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveRightIn = exports.moveRightIn = new _cssinjs.Keyframes('antMoveRightIn', {
  '0%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveRightOut = exports.moveRightOut = new _cssinjs.Keyframes('antMoveRightOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(100%, 0, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveUpIn = exports.moveUpIn = new _cssinjs.Keyframes('antMoveUpIn', {
  '0%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  },
  '100%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  }
});
const moveUpOut = exports.moveUpOut = new _cssinjs.Keyframes('antMoveUpOut', {
  '0%': {
    transform: 'translate3d(0, 0, 0)',
    transformOrigin: '0 0',
    opacity: 1
  },
  '100%': {
    transform: 'translate3d(0, -100%, 0)',
    transformOrigin: '0 0',
    opacity: 0
  }
});
const moveMotion = {
  'move-up': {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  'move-down': {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  'move-left': {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  'move-right': {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
const initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
exports.initMoveMotion = initMoveMotion;

/***/ }),

/***/ 21385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.slideUpOut = exports.slideUpIn = exports.slideRightOut = exports.slideRightIn = exports.slideLeftOut = exports.slideLeftIn = exports.slideDownOut = exports.slideDownIn = exports.initSlideMotion = void 0;
var _cssinjs = __webpack_require__(64021);
var _motion = __webpack_require__(20449);
const slideUpIn = exports.slideUpIn = new _cssinjs.Keyframes('antSlideUpIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideUpOut = exports.slideUpOut = new _cssinjs.Keyframes('antSlideUpOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideDownIn = exports.slideDownIn = new _cssinjs.Keyframes('antSlideDownIn', {
  '0%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  }
});
const slideDownOut = exports.slideDownOut = new _cssinjs.Keyframes('antSlideDownOut', {
  '0%': {
    transform: 'scaleY(1)',
    transformOrigin: '100% 100%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleY(0.8)',
    transformOrigin: '100% 100%',
    opacity: 0
  }
});
const slideLeftIn = exports.slideLeftIn = new _cssinjs.Keyframes('antSlideLeftIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  }
});
const slideLeftOut = exports.slideLeftOut = new _cssinjs.Keyframes('antSlideLeftOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '0% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '0% 0%',
    opacity: 0
  }
});
const slideRightIn = exports.slideRightIn = new _cssinjs.Keyframes('antSlideRightIn', {
  '0%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  }
});
const slideRightOut = exports.slideRightOut = new _cssinjs.Keyframes('antSlideRightOut', {
  '0%': {
    transform: 'scaleX(1)',
    transformOrigin: '100% 0%',
    opacity: 1
  },
  '100%': {
    transform: 'scaleX(0.8)',
    transformOrigin: '100% 0%',
    opacity: 0
  }
});
const slideMotion = {
  'slide-up': {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  'slide-down': {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  'slide-left': {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  'slide-right': {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
const initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: 'scale(0)',
      transformOrigin: '0% 0%',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      [`&-prepare`]: {
        transform: 'scale(1)'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};
exports.initSlideMotion = initSlideMotion;

/***/ }),

/***/ 40288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.zoomUpOut = exports.zoomUpIn = exports.zoomRightOut = exports.zoomRightIn = exports.zoomOut = exports.zoomLeftOut = exports.zoomLeftIn = exports.zoomIn = exports.zoomDownOut = exports.zoomDownIn = exports.zoomBigOut = exports.zoomBigIn = exports.initZoomMotion = void 0;
var _cssinjs = __webpack_require__(64021);
var _motion = __webpack_require__(20449);
const zoomIn = exports.zoomIn = new _cssinjs.Keyframes('antZoomIn', {
  '0%': {
    transform: 'scale(0.2)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomOut = exports.zoomOut = new _cssinjs.Keyframes('antZoomOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.2)',
    opacity: 0
  }
});
const zoomBigIn = exports.zoomBigIn = new _cssinjs.Keyframes('antZoomBigIn', {
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
});
const zoomBigOut = exports.zoomBigOut = new _cssinjs.Keyframes('antZoomBigOut', {
  '0%': {
    transform: 'scale(1)'
  },
  '100%': {
    transform: 'scale(0.8)',
    opacity: 0
  }
});
const zoomUpIn = exports.zoomUpIn = new _cssinjs.Keyframes('antZoomUpIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  }
});
const zoomUpOut = exports.zoomUpOut = new _cssinjs.Keyframes('antZoomUpOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 0%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 0%',
    opacity: 0
  }
});
const zoomLeftIn = exports.zoomLeftIn = new _cssinjs.Keyframes('antZoomLeftIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  }
});
const zoomLeftOut = exports.zoomLeftOut = new _cssinjs.Keyframes('antZoomLeftOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '0% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '0% 50%',
    opacity: 0
  }
});
const zoomRightIn = exports.zoomRightIn = new _cssinjs.Keyframes('antZoomRightIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  }
});
const zoomRightOut = exports.zoomRightOut = new _cssinjs.Keyframes('antZoomRightOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '100% 50%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '100% 50%',
    opacity: 0
  }
});
const zoomDownIn = exports.zoomDownIn = new _cssinjs.Keyframes('antZoomDownIn', {
  '0%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  },
  '100%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  }
});
const zoomDownOut = exports.zoomDownOut = new _cssinjs.Keyframes('antZoomDownOut', {
  '0%': {
    transform: 'scale(1)',
    transformOrigin: '50% 100%'
  },
  '100%': {
    transform: 'scale(0.8)',
    transformOrigin: '50% 100%',
    opacity: 0
  }
});
const zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  'zoom-big': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-big-fast': {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  'zoom-left': {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  'zoom-right': {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  'zoom-up': {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  'zoom-down': {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
const initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [(0, _motion.initMotion)(motionCls, inKeyframes, outKeyframes, motionName === 'zoom-big-fast' ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: 'scale(0)',
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      '&-prepare': {
        transform: 'none'
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};
exports.initZoomMotion = initZoomMotion;

/***/ }),

/***/ 98736:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.operationUnit = void 0;
// eslint-disable-next-line import/prefer-default-export
const operationUnit = token => ({
  // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
  // And Typography use this to generate link style which should not do this.
  color: token.colorLink,
  textDecoration: 'none',
  outline: 'none',
  cursor: 'pointer',
  transition: `color ${token.motionDurationSlow}`,
  '&:focus, &:hover': {
    color: token.colorLinkHover
  },
  '&:active': {
    color: token.colorLinkActive
  }
});
exports.operationUnit = operationUnit;

/***/ }),

/***/ 42155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultTheme = exports.defaultConfig = exports.DesignTokenContext = void 0;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _cssinjs = __webpack_require__(64021);
var _default = _interopRequireDefault(__webpack_require__(7324));
var _seed = _interopRequireDefault(__webpack_require__(13245));
const defaultTheme = exports.defaultTheme = (0, _cssinjs.createTheme)(_default.default);
// ================================ Context =================================
// To ensure snapshot stable. We disable hashed in test env.
const defaultConfig = exports.defaultConfig = {
  token: _seed.default,
  override: {
    override: _seed.default
  },
  hashed: true
};
const DesignTokenContext = exports.DesignTokenContext = /*#__PURE__*/_react.default.createContext(defaultConfig);

/***/ }),

/***/ 51449:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PresetColors", ({
  enumerable: true,
  get: function () {
    return _presetColors.PresetColors;
  }
}));
var _presetColors = __webpack_require__(6854);

/***/ }),

/***/ 6854:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PresetColors = void 0;
const PresetColors = exports.PresetColors = ['blue', 'purple', 'cyan', 'green', 'magenta', 'pink', 'red', 'orange', 'yellow', 'volcano', 'geekblue', 'lime', 'gold'];

/***/ }),

/***/ 37952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "DesignTokenContext", ({
  enumerable: true,
  get: function () {
    return _context.DesignTokenContext;
  }
}));
Object.defineProperty(exports, "PresetColors", ({
  enumerable: true,
  get: function () {
    return _interface.PresetColors;
  }
}));
Object.defineProperty(exports, "calc", ({
  enumerable: true,
  get: function () {
    return _calc.default;
  }
}));
Object.defineProperty(exports, "defaultConfig", ({
  enumerable: true,
  get: function () {
    return _context.defaultConfig;
  }
}));
Object.defineProperty(exports, "genComponentStyleHook", ({
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.default;
  }
}));
Object.defineProperty(exports, "genPresetColor", ({
  enumerable: true,
  get: function () {
    return _genPresetColor.default;
  }
}));
Object.defineProperty(exports, "genStyleHooks", ({
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.genStyleHooks;
  }
}));
Object.defineProperty(exports, "genSubStyleComponent", ({
  enumerable: true,
  get: function () {
    return _genComponentStyleHook.genSubStyleComponent;
  }
}));
Object.defineProperty(exports, "mergeToken", ({
  enumerable: true,
  get: function () {
    return _statistic.merge;
  }
}));
Object.defineProperty(exports, "statisticToken", ({
  enumerable: true,
  get: function () {
    return _statistic.default;
  }
}));
Object.defineProperty(exports, "useResetIconStyle", ({
  enumerable: true,
  get: function () {
    return _useResetIconStyle.default;
  }
}));
Object.defineProperty(exports, "useStyleRegister", ({
  enumerable: true,
  get: function () {
    return _cssinjs.useStyleRegister;
  }
}));
Object.defineProperty(exports, "useToken", ({
  enumerable: true,
  get: function () {
    return _useToken.default;
  }
}));
var _cssinjs = __webpack_require__(64021);
var _interface = __webpack_require__(51449);
var _useToken = _interopRequireDefault(__webpack_require__(11753));
var _genComponentStyleHook = _interopRequireWildcard(__webpack_require__(13142));
var _genPresetColor = _interopRequireDefault(__webpack_require__(97750));
var _statistic = _interopRequireWildcard(__webpack_require__(58937));
var _useResetIconStyle = _interopRequireDefault(__webpack_require__(36389));
var _calc = _interopRequireDefault(__webpack_require__(9898));
var _context = __webpack_require__(42155);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }

/***/ }),

/***/ 75699:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getSolidColor = exports.getAlphaColor = void 0;
var _tinycolor = __webpack_require__(79226);
const getAlphaColor = (baseColor, alpha) => new _tinycolor.TinyColor(baseColor).setAlpha(alpha).toRgbString();
exports.getAlphaColor = getAlphaColor;
const getSolidColor = (baseColor, brightness) => {
  const instance = new _tinycolor.TinyColor(baseColor);
  return instance.darken(brightness).toHexString();
};
exports.getSolidColor = getSolidColor;

/***/ }),

/***/ 94457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generateNeutralColorPalettes = exports.generateColorPalettes = void 0;
var _colors = __webpack_require__(84013);
var _colorAlgorithm = __webpack_require__(75699);
const generateColorPalettes = baseColor => {
  const colors = (0, _colors.generate)(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
};
exports.generateColorPalettes = generateColorPalettes;
const generateNeutralColorPalettes = (bgBaseColor, textBaseColor) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#000';
  return {
    colorBgBase,
    colorTextBase,
    colorText: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.88),
    colorTextSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.65),
    colorTextTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.45),
    colorTextQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.25),
    colorFill: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.15),
    colorFillSecondary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.06),
    colorFillTertiary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.04),
    colorFillQuaternary: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.02),
    colorBgLayout: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 4),
    colorBgContainer: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
    colorBgElevated: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 0),
    colorBgSpotlight: (0, _colorAlgorithm.getAlphaColor)(colorTextBase, 0.85),
    colorBgBlur: 'transparent',
    colorBorder: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 15),
    colorBorderSecondary: (0, _colorAlgorithm.getSolidColor)(colorBgBase, 6)
  };
};
exports.generateNeutralColorPalettes = generateNeutralColorPalettes;

/***/ }),

/***/ 7324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = derivative;
var _colors = __webpack_require__(84013);
var _genControlHeight = _interopRequireDefault(__webpack_require__(37666));
var _genSizeMapToken = _interopRequireDefault(__webpack_require__(64103));
var _seed = __webpack_require__(13245);
var _genColorMapToken = _interopRequireDefault(__webpack_require__(29190));
var _genCommonMapToken = _interopRequireDefault(__webpack_require__(75255));
var _colors2 = __webpack_require__(94457);
var _genFontMapToken = _interopRequireDefault(__webpack_require__(78894));
function derivative(token) {
  const colorPalettes = Object.keys(_seed.defaultPresetColors).map(colorKey => {
    const colors = (0, _colors.generate)(token[colorKey]);
    return new Array(10).fill(1).reduce((prev, _, i) => {
      prev[`${colorKey}-${i + 1}`] = colors[i];
      prev[`${colorKey}${i + 1}`] = colors[i];
      return prev;
    }, {});
  }).reduce((prev, cur) => {
    prev = Object.assign(Object.assign({}, prev), cur);
    return prev;
  }, {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, token), colorPalettes), (0, _genColorMapToken.default)(token, {
    generateColorPalettes: _colors2.generateColorPalettes,
    generateNeutralColorPalettes: _colors2.generateNeutralColorPalettes
  })), (0, _genFontMapToken.default)(token.fontSize)), (0, _genSizeMapToken.default)(token)), (0, _genControlHeight.default)(token)), (0, _genCommonMapToken.default)(token));
}

/***/ }),

/***/ 13245:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultPresetColors = exports["default"] = void 0;
const defaultPresetColors = exports.defaultPresetColors = {
  blue: '#1677ff',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
};
const seedToken = Object.assign(Object.assign({}, defaultPresetColors), {
  // Color
  colorPrimary: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#1677ff',
  colorLink: '',
  colorTextBase: '',
  colorBgBase: '',
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: 'solid',
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: false,
  // Motion
  motion: true
});
var _default = exports["default"] = seedToken;

/***/ }),

/***/ 29190:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genColorMapToken;
var _tinycolor = __webpack_require__(79226);
function genColorMapToken(seed, _ref) {
  let {
    generateColorPalettes,
    generateNeutralColorPalettes
  } = _ref;
  const {
    colorSuccess: colorSuccessBase,
    colorWarning: colorWarningBase,
    colorError: colorErrorBase,
    colorInfo: colorInfoBase,
    colorPrimary: colorPrimaryBase,
    colorBgBase,
    colorTextBase
  } = seed;
  const primaryColors = generateColorPalettes(colorPrimaryBase);
  const successColors = generateColorPalettes(colorSuccessBase);
  const warningColors = generateColorPalettes(colorWarningBase);
  const errorColors = generateColorPalettes(colorErrorBase);
  const infoColors = generateColorPalettes(colorInfoBase);
  const neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
  // Color Link
  const colorLink = seed.colorLink || seed.colorInfo;
  const linkColors = generateColorPalettes(colorLink);
  return Object.assign(Object.assign({}, neutralColors), {
    colorPrimaryBg: primaryColors[1],
    colorPrimaryBgHover: primaryColors[2],
    colorPrimaryBorder: primaryColors[3],
    colorPrimaryBorderHover: primaryColors[4],
    colorPrimaryHover: primaryColors[5],
    colorPrimary: primaryColors[6],
    colorPrimaryActive: primaryColors[7],
    colorPrimaryTextHover: primaryColors[8],
    colorPrimaryText: primaryColors[9],
    colorPrimaryTextActive: primaryColors[10],
    colorSuccessBg: successColors[1],
    colorSuccessBgHover: successColors[2],
    colorSuccessBorder: successColors[3],
    colorSuccessBorderHover: successColors[4],
    colorSuccessHover: successColors[4],
    colorSuccess: successColors[6],
    colorSuccessActive: successColors[7],
    colorSuccessTextHover: successColors[8],
    colorSuccessText: successColors[9],
    colorSuccessTextActive: successColors[10],
    colorErrorBg: errorColors[1],
    colorErrorBgHover: errorColors[2],
    colorErrorBorder: errorColors[3],
    colorErrorBorderHover: errorColors[4],
    colorErrorHover: errorColors[5],
    colorError: errorColors[6],
    colorErrorActive: errorColors[7],
    colorErrorTextHover: errorColors[8],
    colorErrorText: errorColors[9],
    colorErrorTextActive: errorColors[10],
    colorWarningBg: warningColors[1],
    colorWarningBgHover: warningColors[2],
    colorWarningBorder: warningColors[3],
    colorWarningBorderHover: warningColors[4],
    colorWarningHover: warningColors[4],
    colorWarning: warningColors[6],
    colorWarningActive: warningColors[7],
    colorWarningTextHover: warningColors[8],
    colorWarningText: warningColors[9],
    colorWarningTextActive: warningColors[10],
    colorInfoBg: infoColors[1],
    colorInfoBgHover: infoColors[2],
    colorInfoBorder: infoColors[3],
    colorInfoBorderHover: infoColors[4],
    colorInfoHover: infoColors[4],
    colorInfo: infoColors[6],
    colorInfoActive: infoColors[7],
    colorInfoTextHover: infoColors[8],
    colorInfoText: infoColors[9],
    colorInfoTextActive: infoColors[10],
    colorLinkHover: linkColors[4],
    colorLink: linkColors[6],
    colorLinkActive: linkColors[7],
    colorBgMask: new _tinycolor.TinyColor('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff'
  });
}

/***/ }),

/***/ 75255:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genCommonMapToken;
var _genRadius = _interopRequireDefault(__webpack_require__(65111));
function genCommonMapToken(token) {
  const {
    motionUnit,
    motionBase,
    borderRadius,
    lineWidth
  } = token;
  return Object.assign({
    // motion
    motionDurationFast: `${(motionBase + motionUnit).toFixed(1)}s`,
    motionDurationMid: `${(motionBase + motionUnit * 2).toFixed(1)}s`,
    motionDurationSlow: `${(motionBase + motionUnit * 3).toFixed(1)}s`,
    // line
    lineWidthBold: lineWidth + 1
  }, (0, _genRadius.default)(borderRadius));
}

/***/ }),

/***/ 37666:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const genControlHeight = token => {
  const {
    controlHeight
  } = token;
  return {
    controlHeightSM: controlHeight * 0.75,
    controlHeightXS: controlHeight * 0.5,
    controlHeightLG: controlHeight * 1.25
  };
};
var _default = exports["default"] = genControlHeight;

/***/ }),

/***/ 78894:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _genFontSizes = _interopRequireDefault(__webpack_require__(92246));
const genFontMapToken = fontSize => {
  const fontSizePairs = (0, _genFontSizes.default)(fontSize);
  const fontSizes = fontSizePairs.map(pair => pair.size);
  const lineHeights = fontSizePairs.map(pair => pair.lineHeight);
  const fontSizeMD = fontSizes[1];
  const fontSizeSM = fontSizes[0];
  const fontSizeLG = fontSizes[2];
  const lineHeight = lineHeights[1];
  const lineHeightSM = lineHeights[0];
  const lineHeightLG = lineHeights[2];
  return {
    fontSizeSM,
    fontSize: fontSizeMD,
    fontSizeLG,
    fontSizeXL: fontSizes[3],
    fontSizeHeading1: fontSizes[6],
    fontSizeHeading2: fontSizes[5],
    fontSizeHeading3: fontSizes[4],
    fontSizeHeading4: fontSizes[3],
    fontSizeHeading5: fontSizes[2],
    lineHeight,
    lineHeightLG,
    lineHeightSM,
    fontHeight: Math.round(lineHeight * fontSizeMD),
    fontHeightLG: Math.round(lineHeightLG * fontSizeLG),
    fontHeightSM: Math.round(lineHeightSM * fontSizeSM),
    lineHeightHeading1: lineHeights[6],
    lineHeightHeading2: lineHeights[5],
    lineHeightHeading3: lineHeights[4],
    lineHeightHeading4: lineHeights[3],
    lineHeightHeading5: lineHeights[2]
  };
};
var _default = exports["default"] = genFontMapToken;

/***/ }),

/***/ 92246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getFontSizes;
// https://zhuanlan.zhihu.com/p/32746810
function getFontSizes(base) {
  const fontSizes = new Array(10).fill(null).map((_, index) => {
    const i = index - 1;
    const baseSize = base * Math.pow(2.71828, i / 5);
    const intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
    // Convert to even
    return Math.floor(intSize / 2) * 2;
  });
  fontSizes[1] = base;
  return fontSizes.map(size => {
    const height = size + 8;
    return {
      size,
      lineHeight: height / size
    };
  });
}

/***/ }),

/***/ 65111:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const genRadius = radiusBase => {
  let radiusLG = radiusBase;
  let radiusSM = radiusBase;
  let radiusXS = radiusBase;
  let radiusOuter = radiusBase;
  // radiusLG
  if (radiusBase < 6 && radiusBase >= 5) {
    radiusLG = radiusBase + 1;
  } else if (radiusBase < 16 && radiusBase >= 6) {
    radiusLG = radiusBase + 2;
  } else if (radiusBase >= 16) {
    radiusLG = 16;
  }
  // radiusSM
  if (radiusBase < 7 && radiusBase >= 5) {
    radiusSM = 4;
  } else if (radiusBase < 8 && radiusBase >= 7) {
    radiusSM = 5;
  } else if (radiusBase < 14 && radiusBase >= 8) {
    radiusSM = 6;
  } else if (radiusBase < 16 && radiusBase >= 14) {
    radiusSM = 7;
  } else if (radiusBase >= 16) {
    radiusSM = 8;
  }
  // radiusXS
  if (radiusBase < 6 && radiusBase >= 2) {
    radiusXS = 1;
  } else if (radiusBase >= 6) {
    radiusXS = 2;
  }
  // radiusOuter
  if (radiusBase > 4 && radiusBase < 8) {
    radiusOuter = 4;
  } else if (radiusBase >= 8) {
    radiusOuter = 6;
  }
  return {
    borderRadius: radiusBase,
    borderRadiusXS: radiusXS,
    borderRadiusSM: radiusSM,
    borderRadiusLG: radiusLG,
    borderRadiusOuter: radiusOuter
  };
};
var _default = exports["default"] = genRadius;

/***/ }),

/***/ 64103:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genSizeMapToken;
function genSizeMapToken(token) {
  const {
    sizeUnit,
    sizeStep
  } = token;
  return {
    sizeXXL: sizeUnit * (sizeStep + 8),
    // 48
    sizeXL: sizeUnit * (sizeStep + 4),
    // 32
    sizeLG: sizeUnit * (sizeStep + 2),
    // 24
    sizeMD: sizeUnit * (sizeStep + 1),
    // 20
    sizeMS: sizeUnit * sizeStep,
    // 16
    size: sizeUnit * sizeStep,
    // 16
    sizeSM: sizeUnit * (sizeStep - 1),
    // 12
    sizeXS: sizeUnit * (sizeStep - 2),
    // 8
    sizeXXS: sizeUnit * (sizeStep - 3) // 4
  };
}

/***/ }),

/***/ 11753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useToken;
exports.unitless = exports.ignore = exports.getComputedToken = void 0;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _cssinjs = __webpack_require__(64021);
var _version = _interopRequireDefault(__webpack_require__(64814));
var _context = __webpack_require__(42155);
var _seed = _interopRequireDefault(__webpack_require__(13245));
var _alias = _interopRequireDefault(__webpack_require__(69947));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
const unitless = exports.unitless = {
  lineHeight: true,
  lineHeightSM: true,
  lineHeightLG: true,
  lineHeightHeading1: true,
  lineHeightHeading2: true,
  lineHeightHeading3: true,
  lineHeightHeading4: true,
  lineHeightHeading5: true,
  opacityLoading: true,
  fontWeightStrong: true,
  zIndexPopupBase: true,
  zIndexBase: true
};
const ignore = exports.ignore = {
  size: true,
  sizeSM: true,
  sizeLG: true,
  sizeMD: true,
  sizeXS: true,
  sizeXXS: true,
  sizeMS: true,
  sizeXL: true,
  sizeXXL: true,
  sizeUnit: true,
  sizeStep: true,
  motionBase: true,
  motionUnit: true
};
const preserve = {
  screenXS: true,
  screenXSMin: true,
  screenXSMax: true,
  screenSM: true,
  screenSMMin: true,
  screenSMMax: true,
  screenMD: true,
  screenMDMin: true,
  screenMDMax: true,
  screenLG: true,
  screenLGMin: true,
  screenLGMax: true,
  screenXL: true,
  screenXLMin: true,
  screenXLMax: true,
  screenXXL: true,
  screenXXLMin: true
};
const getComputedToken = (originToken, overrideToken, theme) => {
  const derivativeToken = theme.getDerivativeToken(originToken);
  const {
      override
    } = overrideToken,
    components = __rest(overrideToken, ["override"]);
  // Merge with override
  let mergedDerivativeToken = Object.assign(Object.assign({}, derivativeToken), {
    override
  });
  // Format if needed
  mergedDerivativeToken = (0, _alias.default)(mergedDerivativeToken);
  if (components) {
    Object.entries(components).forEach(_ref => {
      let [key, value] = _ref;
      const {
          theme: componentTheme
        } = value,
        componentTokens = __rest(value, ["theme"]);
      let mergedComponentToken = componentTokens;
      if (componentTheme) {
        mergedComponentToken = getComputedToken(Object.assign(Object.assign({}, mergedDerivativeToken), componentTokens), {
          override: componentTokens
        }, componentTheme);
      }
      mergedDerivativeToken[key] = mergedComponentToken;
    });
  }
  return mergedDerivativeToken;
};
// ================================== Hook ==================================
exports.getComputedToken = getComputedToken;
function useToken() {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    override,
    cssVar
  } = _react.default.useContext(_context.DesignTokenContext);
  const salt = `${_version.default}-${hashed || ''}`;
  const mergedTheme = theme || _context.defaultTheme;
  const [token, hashId, realToken] = (0, _cssinjs.useCacheToken)(mergedTheme, [_seed.default, rootDesignToken], {
    salt,
    override,
    getComputedToken,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _alias.default,
    cssVar: cssVar && {
      prefix: cssVar.prefix,
      key: cssVar.key,
      unitless,
      ignore,
      preserve
    }
  });
  return [mergedTheme, realToken, hashed ? hashId : '', token, cssVar];
}

/***/ }),

/***/ 69947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = formatToken;
var _tinycolor = __webpack_require__(79226);
var _seed = _interopRequireDefault(__webpack_require__(13245));
var _getAlphaColor = _interopRequireDefault(__webpack_require__(97204));
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * Seed (designer) > Derivative (designer) > Alias (developer).
 *
 * Merge seed & derivative & override token and generate alias token for developer.
 */
function formatToken(derivativeToken) {
  const {
      override
    } = derivativeToken,
    restToken = __rest(derivativeToken, ["override"]);
  const overrideTokens = Object.assign({}, override);
  Object.keys(_seed.default).forEach(token => {
    delete overrideTokens[token];
  });
  const mergedToken = Object.assign(Object.assign({}, restToken), overrideTokens);
  const screenXS = 480;
  const screenSM = 576;
  const screenMD = 768;
  const screenLG = 992;
  const screenXL = 1200;
  const screenXXL = 1600;
  // Motion
  if (mergedToken.motion === false) {
    const fastDuration = '0s';
    mergedToken.motionDurationFast = fastDuration;
    mergedToken.motionDurationMid = fastDuration;
    mergedToken.motionDurationSlow = fastDuration;
  }
  // Generate alias token
  const aliasToken = Object.assign(Object.assign(Object.assign({}, mergedToken), {
    // ============== Background ============== //
    colorFillContent: mergedToken.colorFillSecondary,
    colorFillContentHover: mergedToken.colorFill,
    colorFillAlter: mergedToken.colorFillQuaternary,
    colorBgContainerDisabled: mergedToken.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: mergedToken.colorBgContainer,
    colorSplit: (0, _getAlphaColor.default)(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: mergedToken.colorTextQuaternary,
    colorTextDisabled: mergedToken.colorTextQuaternary,
    colorTextHeading: mergedToken.colorText,
    colorTextLabel: mergedToken.colorTextSecondary,
    colorTextDescription: mergedToken.colorTextTertiary,
    colorTextLightSolid: mergedToken.colorWhite,
    colorHighlight: mergedToken.colorError,
    colorBgTextHover: mergedToken.colorFillSecondary,
    colorBgTextActive: mergedToken.colorFill,
    colorIcon: mergedToken.colorTextTertiary,
    colorIconHover: mergedToken.colorText,
    colorErrorOutline: (0, _getAlphaColor.default)(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
    colorWarningOutline: (0, _getAlphaColor.default)(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
    // Font
    fontSizeIcon: mergedToken.fontSizeSM,
    // Line
    lineWidthFocus: mergedToken.lineWidth * 4,
    // Control
    lineWidth: mergedToken.lineWidth,
    controlOutlineWidth: mergedToken.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: mergedToken.controlHeight / 2,
    controlItemBgHover: mergedToken.colorFillTertiary,
    controlItemBgActive: mergedToken.colorPrimaryBg,
    controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
    controlItemBgActiveDisabled: mergedToken.colorFill,
    controlTmpOutline: mergedToken.colorFillQuaternary,
    controlOutline: (0, _getAlphaColor.default)(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
    lineType: mergedToken.lineType,
    borderRadius: mergedToken.borderRadius,
    borderRadiusXS: mergedToken.borderRadiusXS,
    borderRadiusSM: mergedToken.borderRadiusSM,
    borderRadiusLG: mergedToken.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: 'none',
    linkHoverDecoration: 'none',
    linkFocusDecoration: 'none',
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: mergedToken.sizeXXS,
    paddingXS: mergedToken.sizeXS,
    paddingSM: mergedToken.sizeSM,
    padding: mergedToken.size,
    paddingMD: mergedToken.sizeMD,
    paddingLG: mergedToken.sizeLG,
    paddingXL: mergedToken.sizeXL,
    paddingContentHorizontalLG: mergedToken.sizeLG,
    paddingContentVerticalLG: mergedToken.sizeMS,
    paddingContentHorizontal: mergedToken.sizeMS,
    paddingContentVertical: mergedToken.sizeSM,
    paddingContentHorizontalSM: mergedToken.size,
    paddingContentVerticalSM: mergedToken.sizeXS,
    marginXXS: mergedToken.sizeXXS,
    marginXS: mergedToken.sizeXS,
    marginSM: mergedToken.sizeSM,
    margin: mergedToken.size,
    marginMD: mergedToken.sizeMD,
    marginLG: mergedToken.sizeLG,
    marginXL: mergedToken.sizeXL,
    marginXXL: mergedToken.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS,
    screenXSMin: screenXS,
    screenXSMax: screenSM - 1,
    screenSM,
    screenSMMin: screenSM,
    screenSMMax: screenMD - 1,
    screenMD,
    screenMDMin: screenMD,
    screenMDMax: screenLG - 1,
    screenLG,
    screenLGMin: screenLG,
    screenLGMax: screenXL - 1,
    screenXL,
    screenXLMin: screenXL,
    screenXLMax: screenXXL - 1,
    screenXXL,
    screenXXLMin: screenXXL,
    boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
    boxShadowCard: `
      0 1px 2px -2px ${new _tinycolor.TinyColor('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new _tinycolor.TinyColor('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new _tinycolor.TinyColor('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
    boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)'
  }), overrideTokens);
  return aliasToken;
}

/***/ }),

/***/ 85393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var _calculator = _interopRequireDefault(__webpack_require__(12837));
const CALC_UNIT = 'CALC_UNIT';
function unit(value) {
  if (typeof value === 'number') {
    return `${value}${CALC_UNIT}`;
  }
  return value;
}
let CSSCalculator = exports["default"] = /*#__PURE__*/function (_AbstractCalculator) {
  (0, _inherits2.default)(CSSCalculator, _AbstractCalculator);
  var _super = (0, _createSuper2.default)(CSSCalculator);
  function CSSCalculator(num) {
    var _this;
    (0, _classCallCheck2.default)(this, CSSCalculator);
    _this = _super.call(this);
    _this.result = '';
    if (num instanceof CSSCalculator) {
      _this.result = `(${num.result})`;
    } else if (typeof num === 'number') {
      _this.result = unit(num);
    } else if (typeof num === 'string') {
      _this.result = num;
    }
    return _this;
  }
  (0, _createClass2.default)(CSSCalculator, [{
    key: "add",
    value: function add(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} + ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} + ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} - ${num.getResult()}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} - ${unit(num)}`;
      }
      this.lowPriority = true;
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} * ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} * ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (this.lowPriority) {
        this.result = `(${this.result})`;
      }
      if (num instanceof CSSCalculator) {
        this.result = `${this.result} / ${num.getResult(true)}`;
      } else if (typeof num === 'number' || typeof num === 'string') {
        this.result = `${this.result} / ${num}`;
      }
      this.lowPriority = false;
      return this;
    }
  }, {
    key: "getResult",
    value: function getResult(force) {
      return this.lowPriority || force ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function equal(options) {
      const {
        unit: cssUnit = true
      } = options || {};
      const regexp = new RegExp(`${CALC_UNIT}`, 'g');
      this.result = this.result.replace(regexp, cssUnit ? 'px' : '');
      if (typeof this.lowPriority !== 'undefined') {
        return `calc(${this.result})`;
      }
      return this.result;
    }
  }]);
  return CSSCalculator;
}(_calculator.default);

/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var _calculator = _interopRequireDefault(__webpack_require__(12837));
let NumCalculator = exports["default"] = /*#__PURE__*/function (_AbstractCalculator) {
  (0, _inherits2.default)(NumCalculator, _AbstractCalculator);
  var _super = (0, _createSuper2.default)(NumCalculator);
  function NumCalculator(num) {
    var _this;
    (0, _classCallCheck2.default)(this, NumCalculator);
    _this = _super.call(this);
    _this.result = 0;
    if (num instanceof NumCalculator) {
      _this.result = num.result;
    } else if (typeof num === 'number') {
      _this.result = num;
    }
    return _this;
  }
  (0, _createClass2.default)(NumCalculator, [{
    key: "add",
    value: function add(num) {
      if (num instanceof NumCalculator) {
        this.result += num.result;
      } else if (typeof num === 'number') {
        this.result += num;
      }
      return this;
    }
  }, {
    key: "sub",
    value: function sub(num) {
      if (num instanceof NumCalculator) {
        this.result -= num.result;
      } else if (typeof num === 'number') {
        this.result -= num;
      }
      return this;
    }
  }, {
    key: "mul",
    value: function mul(num) {
      if (num instanceof NumCalculator) {
        this.result *= num.result;
      } else if (typeof num === 'number') {
        this.result *= num;
      }
      return this;
    }
  }, {
    key: "div",
    value: function div(num) {
      if (num instanceof NumCalculator) {
        this.result /= num.result;
      } else if (typeof num === 'number') {
        this.result /= num;
      }
      return this;
    }
  }, {
    key: "equal",
    value: function equal() {
      return this.result;
    }
  }]);
  return NumCalculator;
}(_calculator.default);

/***/ }),

/***/ 12837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
let AbstractCalculator = /*#__PURE__*/(0, _createClass2.default)(function AbstractCalculator() {
  (0, _classCallCheck2.default)(this, AbstractCalculator);
});
var _default = exports["default"] = AbstractCalculator;

/***/ }),

/***/ 9898:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _NumCalculator = _interopRequireDefault(__webpack_require__(614));
var _CSSCalculator = _interopRequireDefault(__webpack_require__(85393));
const genCalc = type => {
  const Calculator = type === 'css' ? _CSSCalculator.default : _NumCalculator.default;
  return num => new Calculator(num);
};
var _default = exports["default"] = genCalc;

/***/ }),

/***/ 13142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genComponentStyleHook;
exports.genSubStyleComponent = exports.genStyleHooks = void 0;
var _react = _interopRequireWildcard(__webpack_require__(18038));
var _cssinjs = __webpack_require__(64021);
var _rcUtil = __webpack_require__(87844);
var _context = __webpack_require__(85440);
var _style = __webpack_require__(82760);
var _useToken = _interopRequireWildcard(__webpack_require__(11753));
var _calc = _interopRequireDefault(__webpack_require__(9898));
var _maxmin = _interopRequireDefault(__webpack_require__(33695));
var _statistic = _interopRequireWildcard(__webpack_require__(58937));
var _useResetIconStyle = _interopRequireDefault(__webpack_require__(36389));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const getDefaultComponentToken = (component, token, getDefaultToken) => {
  var _a;
  if (typeof getDefaultToken === 'function') {
    return getDefaultToken((0, _statistic.merge)(token, (_a = token[component]) !== null && _a !== void 0 ? _a : {}));
  }
  return getDefaultToken !== null && getDefaultToken !== void 0 ? getDefaultToken : {};
};
const getComponentToken = (component, token, defaultToken, options) => {
  const customToken = Object.assign({}, token[component]);
  if (options === null || options === void 0 ? void 0 : options.deprecatedTokens) {
    const {
      deprecatedTokens
    } = options;
    deprecatedTokens.forEach(_ref => {
      let [oldTokenKey, newTokenKey] = _ref;
      var _a;
      if (false) {}
      // Should wrap with `if` clause, or there will be `undefined` in object.
      if ((customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey]) || (customToken === null || customToken === void 0 ? void 0 : customToken[newTokenKey])) {
        (_a = customToken[newTokenKey]) !== null && _a !== void 0 ? _a : customToken[newTokenKey] = customToken === null || customToken === void 0 ? void 0 : customToken[oldTokenKey];
      }
    });
  }
  let mergedToken = Object.assign(Object.assign({}, defaultToken), customToken);
  if (options === null || options === void 0 ? void 0 : options.format) {
    mergedToken = options.format(mergedToken);
  }
  // Remove same value as global token to minimize size
  Object.keys(mergedToken).forEach(key => {
    if (mergedToken[key] === token[key]) {
      delete mergedToken[key];
    }
  });
  return mergedToken;
};
const getCompVarPrefix = (component, prefix) => `${[prefix, component.replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2').replace(/([a-z])([A-Z])/g, '$1-$2')].filter(Boolean).join('-')}`;
function genComponentStyleHook(componentName, styleFn, getDefaultToken) {
  let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const cells = Array.isArray(componentName) ? componentName : [componentName, componentName];
  const [component] = cells;
  const concatComponent = cells.join('-');
  return prefixCls => {
    const [theme, realToken, hashId, token, cssVar] = (0, _useToken.default)();
    const {
      getPrefixCls,
      iconPrefixCls,
      csp
    } = (0, _react.useContext)(_context.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const type = cssVar ? 'css' : 'js';
    const calc = (0, _calc.default)(type);
    const {
      max,
      min
    } = (0, _maxmin.default)(type);
    // Shared config
    const sharedConfig = {
      theme,
      token,
      hashId,
      nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce,
      clientOnly: options.clientOnly,
      // antd is always at top of styles
      order: options.order || -999
    };
    // Generate style for all a tags in antd component.
    (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      clientOnly: false,
      path: ['Shared', rootPrefixCls]
    }), () => [{
      // Link
      '&': (0, _style.genLinkStyle)(token)
    }]);
    // Generate style for icons
    (0, _useResetIconStyle.default)(iconPrefixCls, csp);
    const wrapSSR = (0, _cssinjs.useStyleRegister)(Object.assign(Object.assign({}, sharedConfig), {
      path: [concatComponent, prefixCls, iconPrefixCls]
    }), () => {
      if (options.injectStyle === false) {
        return [];
      }
      const {
        token: proxyToken,
        flush
      } = (0, _statistic.default)(token);
      const defaultComponentToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentCls = `.${prefixCls}`;
      const componentToken = getComponentToken(component, realToken, defaultComponentToken, {
        deprecatedTokens: options.deprecatedTokens,
        format: options.format
      });
      if (cssVar) {
        Object.keys(defaultComponentToken).forEach(key => {
          defaultComponentToken[key] = `var(${(0, _cssinjs.token2CSSVar)(key, getCompVarPrefix(component, cssVar.prefix))})`;
        });
      }
      const mergedToken = (0, _statistic.merge)(proxyToken, {
        componentCls,
        prefixCls,
        iconCls: `.${iconPrefixCls}`,
        antCls: `.${rootPrefixCls}`,
        calc,
        max,
        min
      }, cssVar ? defaultComponentToken : componentToken);
      const styleInterpolation = styleFn(mergedToken, {
        hashId,
        prefixCls,
        rootPrefixCls,
        iconPrefixCls
      });
      flush(component, componentToken);
      return [options.resetStyle === false ? null : (0, _style.genCommonStyle)(mergedToken, prefixCls), styleInterpolation];
    });
    return [wrapSSR, hashId];
  };
}
const genSubStyleComponent = (componentName, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(componentName, styleFn, getDefaultToken, Object.assign({
    resetStyle: false,
    // Sub Style should default after root one
    order: -998
  }, options));
  const StyledComponent = _ref2 => {
    let {
      prefixCls
    } = _ref2;
    useStyle(prefixCls);
    return null;
  };
  if (false) {}
  return StyledComponent;
};
exports.genSubStyleComponent = genSubStyleComponent;
const genCSSVarRegister = (component, getDefaultToken, options) => {
  function prefixToken(key) {
    return `${component}${key.slice(0, 1).toUpperCase()}${key.slice(1)}`;
  }
  const {
    unitless: originUnitless = {},
    injectStyle = true
  } = options !== null && options !== void 0 ? options : {};
  const compUnitless = {
    [prefixToken('zIndexPopup')]: true
  };
  Object.keys(originUnitless).forEach(key => {
    compUnitless[prefixToken(key)] = originUnitless[key];
  });
  const CSSVarRegister = _ref3 => {
    let {
      rootCls,
      cssVar
    } = _ref3;
    const [, realToken] = (0, _useToken.default)();
    (0, _cssinjs.useCSSVarRegister)({
      path: [component],
      prefix: cssVar.prefix,
      key: cssVar === null || cssVar === void 0 ? void 0 : cssVar.key,
      unitless: Object.assign(Object.assign({}, _useToken.unitless), compUnitless),
      ignore: _useToken.ignore,
      token: realToken,
      scope: rootCls
    }, () => {
      const defaultToken = getDefaultComponentToken(component, realToken, getDefaultToken);
      const componentToken = getComponentToken(component, realToken, defaultToken, {
        format: options === null || options === void 0 ? void 0 : options.format,
        deprecatedTokens: options === null || options === void 0 ? void 0 : options.deprecatedTokens
      });
      Object.keys(defaultToken).forEach(key => {
        componentToken[prefixToken(key)] = componentToken[key];
        delete componentToken[key];
      });
      return componentToken;
    });
    return null;
  };
  const useCSSVar = rootCls => {
    const [,,,, cssVar] = (0, _useToken.default)();
    return [node => injectStyle && cssVar ? ( /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CSSVarRegister, {
      rootCls: rootCls,
      cssVar: cssVar,
      component: component
    }), node)) : node, cssVar === null || cssVar === void 0 ? void 0 : cssVar.key];
  };
  return useCSSVar;
};
const genStyleHooks = (component, styleFn, getDefaultToken, options) => {
  const useStyle = genComponentStyleHook(component, styleFn, getDefaultToken, options);
  const useCSSVar = genCSSVarRegister(Array.isArray(component) ? component[0] : component, getDefaultToken, options);
  return function (prefixCls) {
    let rootCls = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : prefixCls;
    const [, hashId] = useStyle(prefixCls);
    const [wrapCSSVar, cssVarCls] = useCSSVar(rootCls);
    return [wrapCSSVar, hashId, cssVarCls];
  };
};
exports.genStyleHooks = genStyleHooks;

/***/ }),

/***/ 97750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genPresetColor;
var _interface = __webpack_require__(51449);
function genPresetColor(token, genCss) {
  return _interface.PresetColors.reduce((prev, colorKey) => {
    const lightColor = token[`${colorKey}1`];
    const lightBorderColor = token[`${colorKey}3`];
    const darkColor = token[`${colorKey}6`];
    const textColor = token[`${colorKey}7`];
    return Object.assign(Object.assign({}, prev), genCss(colorKey, {
      lightColor,
      lightBorderColor,
      darkColor,
      textColor
    }));
  }, {});
}

/***/ }),

/***/ 97204:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _tinycolor = __webpack_require__(79226);
function isStableColor(color) {
  return color >= 0 && color <= 255;
}
function getAlphaColor(frontColor, backgroundColor) {
  const {
    r: fR,
    g: fG,
    b: fB,
    a: originAlpha
  } = new _tinycolor.TinyColor(frontColor).toRgb();
  if (originAlpha < 1) {
    return frontColor;
  }
  const {
    r: bR,
    g: bG,
    b: bB
  } = new _tinycolor.TinyColor(backgroundColor).toRgb();
  for (let fA = 0.01; fA <= 1; fA += 0.01) {
    const r = Math.round((fR - bR * (1 - fA)) / fA);
    const g = Math.round((fG - bG * (1 - fA)) / fA);
    const b = Math.round((fB - bB * (1 - fA)) / fA);
    if (isStableColor(r) && isStableColor(g) && isStableColor(b)) {
      return new _tinycolor.TinyColor({
        r,
        g,
        b,
        a: Math.round(fA * 100) / 100
      }).toRgbString();
    }
  }
  // fallback
  /* istanbul ignore next */
  return new _tinycolor.TinyColor({
    r: fR,
    g: fG,
    b: fB,
    a: 1
  }).toRgbString();
}
var _default = exports["default"] = getAlphaColor;

/***/ }),

/***/ 33695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = genMaxMin;
var _cssinjs = __webpack_require__(64021);
function genMaxMin(type) {
  if (type === 'js') {
    return {
      max: Math.max,
      min: Math.min
    };
  }
  return {
    max: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return `max(${args.map(value => (0, _cssinjs.unit)(value)).join(',')})`;
    },
    min: function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return `min(${args.map(value => (0, _cssinjs.unit)(value)).join(',')})`;
    }
  };
}

/***/ }),

/***/ 58937:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports._statistic_build_ = void 0;
exports.merge = merge;
exports.statistic = void 0;
const enableStatistic =  false || typeof CSSINJS_STATISTIC !== 'undefined';
let recording = true;
/**
 * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
 * pass all value access in development. To support statistic field usage with alias token.
 */
function merge() {
  for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }
  /* istanbul ignore next */
  if (!enableStatistic) {
    return Object.assign.apply(Object, [{}].concat(objs));
  }
  recording = false;
  const ret = {};
  objs.forEach(obj => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
      Object.defineProperty(ret, key, {
        configurable: true,
        enumerable: true,
        get: () => obj[key]
      });
    });
  });
  recording = true;
  return ret;
}
/** @internal Internal Usage. Not use in your production. */
const statistic = exports.statistic = {};
/** @internal Internal Usage. Not use in your production. */
// eslint-disable-next-line camelcase
const _statistic_build_ = exports._statistic_build_ = {};
/* istanbul ignore next */
function noop() {}
/** Statistic token usage case. Should use `merge` function if you do not want spread record. */
const statisticToken = token => {
  let tokenKeys;
  let proxy = token;
  let flush = noop;
  if (enableStatistic && typeof Proxy !== 'undefined') {
    tokenKeys = new Set();
    proxy = new Proxy(token, {
      get(obj, prop) {
        if (recording) {
          tokenKeys.add(prop);
        }
        return obj[prop];
      }
    });
    flush = (componentName, componentToken) => {
      var _a;
      statistic[componentName] = {
        global: Array.from(tokenKeys),
        component: Object.assign(Object.assign({}, (_a = statistic[componentName]) === null || _a === void 0 ? void 0 : _a.component), componentToken)
      };
    };
  }
  return {
    token: proxy,
    keys: tokenKeys,
    flush
  };
};
var _default = exports["default"] = statisticToken;

/***/ }),

/***/ 36389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _cssinjs = __webpack_require__(64021);
var _style = __webpack_require__(82760);
var _useToken = _interopRequireDefault(__webpack_require__(11753));
const useResetIconStyle = (iconPrefixCls, csp) => {
  const [theme, token] = (0, _useToken.default)();
  // Generate style for icons
  return (0, _cssinjs.useStyleRegister)({
    theme,
    token,
    hashId: '',
    path: ['ant-design-icons', iconPrefixCls],
    nonce: () => csp === null || csp === void 0 ? void 0 : csp.nonce
  }, () => [{
    [`.${iconPrefixCls}`]: Object.assign(Object.assign({}, (0, _style.resetIcon)()), {
      [`.${iconPrefixCls} .${iconPrefixCls}-icon`]: {
        display: 'block'
      }
    })
  }]);
};
var _default = exports["default"] = useResetIconStyle;

/***/ }),

/***/ 71216:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = exports["default"] = locale;

/***/ }),

/***/ 64814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

"use client";

/* eslint import/no-unresolved: 0 */
// @ts-ignore
var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _version = _interopRequireDefault(__webpack_require__(27425));
var _default = exports["default"] = _version.default;

/***/ }),

/***/ 27425:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = '5.12.8';

/***/ }),

/***/ 31457:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = (function () {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
});

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

exports["default"] = Schema;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 64277:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _regeneratorRuntime2 = _interopRequireDefault(__webpack_require__(23984));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(82510));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49687));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _toArray = _interopRequireDefault(__webpack_require__(87424));
var _isEqual = _interopRequireDefault(__webpack_require__(63303));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _FieldContext = _interopRequireWildcard(__webpack_require__(27210));
var _ListContext = _interopRequireDefault(__webpack_require__(3848));
var _typeUtil = __webpack_require__(51554);
var _validateUtil = __webpack_require__(7563);
var _valueUtil = __webpack_require__(31994);
var _excluded = ["name"];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(prev, next, 'source' in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
// We use Class instead of Hooks here since it will cost much code by using Hooks.
var Field = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Field, _React$Component);
  var _super = (0, _createSuper2.default)(Field);
  // ============================== Subscriptions ==============================
  function Field(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Field);
    _this = _super.call(this, props);

    // Register on init
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      resetCount: 0
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelRegisterFunc", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mounted", false);
    /**
     * Follow state should not management in State since it will async update by React.
     * This makes first render of form can not get correct state value.
     */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touched", false);
    /**
     * Mark when touched & validated. Currently only used for `dependencies`.
     * Note that we do not think field with `initialValue` is dirty
     * but this will be by `isFieldDirty` func.
     */
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "dirty", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "validatePromise", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "prevValidating", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "errors", EMPTY_ERRORS);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "warnings", EMPTY_ERRORS);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "cancelRegister", function () {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, (0, _valueUtil.getNamePath)(name));
      }
      _this.cancelRegisterFunc = null;
    });
    // ================================== Utils ==================================
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getNamePath", function () {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== undefined ? [].concat((0, _toConsumableArray2.default)(prefixName), (0, _toConsumableArray2.default)(name)) : [];
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRules", function () {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function (rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "refresh", function () {
      if (!_this.mounted) return;

      /**
       * Clean up current node.
       */
      _this.setState(function (_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    });
    // Event should only trigger when meta changed
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "metaCache", null);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "triggerMetaEvent", function (destroy) {
      var onMetaChange = _this.props.onMetaChange;
      if (onMetaChange) {
        var _meta = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.getMeta()), {}, {
          destroy: destroy
        });
        if (!(0, _isEqual.default)(_this.metaCache, _meta)) {
          onMetaChange(_meta);
        }
        _this.metaCache = _meta;
      } else {
        _this.metaCache = null;
      }
    });
    // ========================= Field Entity Interfaces =========================
    // Trigger by store update. Check if need update the component
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStoreChange", function (prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && (0, _valueUtil.containsNamePath)(namePathList, namePath);

      // `setFieldsValue` is a quick access to update related status
      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            // Clean up state
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = undefined;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 || onReset();
            _this.refresh();
            return;
          }
          break;

        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case 'remove':
          {
            if (shouldUpdate) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'setField':
          {
            var data = info.data;
            if (namePathMatch) {
              if ('touched' in data) {
                _this.touched = data.touched;
              }
              if ('validating' in data && !('originRCField' in data)) {
                _this.validatePromise = data.validating ? Promise.resolve([]) : null;
              }
              if ('errors' in data) {
                _this.errors = data.errors || EMPTY_ERRORS;
              }
              if ('warnings' in data) {
                _this.warnings = data.warnings || EMPTY_ERRORS;
              }
              _this.dirty = true;
              _this.triggerMetaEvent();
              _this.reRender();
              return;
            } else if ('value' in data && (0, _valueUtil.containsNamePath)(namePathList, namePath, true)) {
              // Contains path with value should also check
              _this.reRender();
              return;
            }

            // Handle update by `setField` with `shouldUpdate`
            if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
              _this.reRender();
              return;
            }
            break;
          }
        case 'dependenciesUpdate':
          {
            /**
             * Trigger when marked `dependencies` updated. Related fields will all update
             */
            var dependencyList = dependencies.map(_valueUtil.getNamePath);
            // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
            // emitted earlier and they will work there
            // If set it may cause unnecessary twice rerendering
            if (dependencyList.some(function (dependency) {
              return (0, _valueUtil.containsNamePath)(info.relatedFields, dependency);
            })) {
              _this.reRender();
              return;
            }
            break;
          }
        default:
          // 1. If `namePath` exists in `namePathList`, means it's related value and should update
          //      For example <List name="list"><Field name={['list', 0]}></List>
          //      If `namePathList` is [['list']] (List value update), Field should be updated
          //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
          // 2.
          //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
          //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
          //       is not provided
          //   2.2 If `shouldUpdate` provided, use customize logic to update the field
          //       else to check if value changed
          if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "validateRules", function (options) {
      // We should fixed namePath & value to avoid developer change then by form function
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var _ref2 = options || {},
        triggerName = _ref2.triggerName,
        _ref2$validateOnly = _ref2.validateOnly,
        validateOnly = _ref2$validateOnly === void 0 ? false : _ref2$validateOnly;

      // Force change to async to avoid rule OOD under renderProps field
      var rootPromise = Promise.resolve().then( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee() {
        var _this$props5, _this$props5$validate, validateFirst, messageVariables, validateDebounce, filteredRules, promise;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (_this.mounted) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return", []);
            case 2:
              _this$props5 = _this.props, _this$props5$validate = _this$props5.validateFirst, validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate, messageVariables = _this$props5.messageVariables, validateDebounce = _this$props5.validateDebounce; // Start validate
              filteredRules = _this.getRules();
              if (triggerName) {
                filteredRules = filteredRules.filter(function (rule) {
                  return rule;
                }).filter(function (rule) {
                  var validateTrigger = rule.validateTrigger;
                  if (!validateTrigger) {
                    return true;
                  }
                  var triggerList = (0, _typeUtil.toArray)(validateTrigger);
                  return triggerList.includes(triggerName);
                });
              }

              // Wait for debounce. Skip if no `triggerName` since its from `validateFields / submit`
              if (!(validateDebounce && triggerName)) {
                _context.next = 10;
                break;
              }
              _context.next = 8;
              return new Promise(function (resolve) {
                setTimeout(resolve, validateDebounce);
              });
            case 8:
              if (!(_this.validatePromise !== rootPromise)) {
                _context.next = 10;
                break;
              }
              return _context.abrupt("return", []);
            case 10:
              promise = (0, _validateUtil.validateRules)(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
              promise.catch(function (e) {
                return e;
              }).then(function () {
                var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
                if (_this.validatePromise === rootPromise) {
                  var _ruleErrors$forEach;
                  _this.validatePromise = null;

                  // Get errors & warnings
                  var nextErrors = [];
                  var nextWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function (_ref4) {
                    var warningOnly = _ref4.rule.warningOnly,
                      _ref4$errors = _ref4.errors,
                      errors = _ref4$errors === void 0 ? EMPTY_ERRORS : _ref4$errors;
                    if (warningOnly) {
                      nextWarnings.push.apply(nextWarnings, (0, _toConsumableArray2.default)(errors));
                    } else {
                      nextErrors.push.apply(nextErrors, (0, _toConsumableArray2.default)(errors));
                    }
                  });
                  _this.errors = nextErrors;
                  _this.warnings = nextWarnings;
                  _this.triggerMetaEvent();
                  _this.reRender();
                }
              });
              return _context.abrupt("return", promise);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })));
      if (validateOnly) {
        return rootPromise;
      }
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();

      // Force trigger re-render since we need sync renderProps with new meta
      _this.reRender();
      return rootPromise;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isFieldValidating", function () {
      return !!_this.validatePromise;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isFieldTouched", function () {
      return _this.touched;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isFieldDirty", function () {
      // Touched or validate or has initialValue
      if (_this.dirty || _this.props.initialValue !== undefined) {
        return true;
      }

      // Form set initialValue
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(_FieldContext.HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== undefined) {
        return true;
      }
      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getErrors", function () {
      return _this.errors;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getWarnings", function () {
      return _this.warnings;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isListField", function () {
      return _this.props.isListField;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isList", function () {
      return _this.props.isList;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isPreserve", function () {
      return _this.props.preserve;
    });
    // ============================= Child Component =============================
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getMeta", function () {
      // Make error & validating in cache to save perf
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath(),
        validated: _this.validatePromise === null
      };
      return meta;
    });
    // Only return validate child node. If invalidate, will do nothing about field.
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getOnlyChild", function (children) {
      // Support render props
      if (typeof children === 'function') {
        var _meta2 = _this.getMeta();
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _this.getOnlyChild(children(_this.getControlled(), _meta2, _this.props.fieldContext))), {}, {
          isFunction: true
        });
      }

      // Filed element only
      var childList = (0, _toArray.default)(children);
      if (childList.length !== 1 || ! /*#__PURE__*/React.isValidElement(childList[0])) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    });
    // ============================== Field Control ==============================
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getValue", function (store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return (0, _valueUtil.getValue)(store || getFieldsValue(true), namePath);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getControlled", function () {
      var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks(_FieldContext.HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps = getValueProps || function (val) {
        return (0, _defineProperty2.default)({}, valuePropName, val);
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var originTriggerFunc = childProps[trigger];
      var control = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, childProps), mergedGetValueProps(value));

      // Add trigger
      control[trigger] = function () {
        // Mark as touched
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = _valueUtil.defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize) {
          newValue = normalize(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: 'updateValue',
          namePath: namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };

      // Add validateTrigger
      var validateTriggerList = (0, _typeUtil.toArray)(mergedValidateTrigger || []);
      validateTriggerList.forEach(function (triggerName) {
        // Wrap additional function of component, so that we can get latest value from store
        var originTrigger = control[triggerName];
        control[triggerName] = function () {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }

          // Always use latest rules
          var rules = _this.props.rules;
          if (rules && rules.length) {
            // We dispatch validate to root,
            // since it will update related data with other field with same name
            dispatch({
              type: 'validateField',
              namePath: namePath,
              triggerName: triggerName
            });
          }
        };
      });
      return control;
    });
    if (props.fieldContext) {
      var getInternalHooks = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks(_FieldContext.HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue((0, _assertThisInitialized2.default)(_this));
    }
    return _this;
  }
  (0, _createClass2.default)(Field, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props7 = this.props,
        shouldUpdate = _this$props7.shouldUpdate,
        fieldContext = _this$props7.fieldContext;
      this.mounted = true;

      // Register on init
      if (fieldContext) {
        var getInternalHooks = fieldContext.getInternalHooks;
        var _getInternalHooks3 = getInternalHooks(_FieldContext.HOOK_MARK),
          registerField = _getInternalHooks3.registerField;
        this.cancelRegisterFunc = registerField(this);
      }

      // One more render for component in case fields not ready
      if (shouldUpdate === true) {
        this.reRender();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cancelRegister();
      this.triggerMetaEvent(true);
      this.mounted = false;
    }
  }, {
    key: "reRender",
    value: function reRender() {
      if (!this.mounted) return;
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var resetCount = this.state.resetCount;
      var children = this.props.children;
      var _this$getOnlyChild = this.getOnlyChild(children),
        child = _this$getOnlyChild.child,
        isFunction = _this$getOnlyChild.isFunction;

      // Not need to `cloneElement` since user can handle this in render function self
      var returnChildNode;
      if (isFunction) {
        returnChildNode = child;
      } else if ( /*#__PURE__*/React.isValidElement(child)) {
        returnChildNode = /*#__PURE__*/React.cloneElement(child, this.getControlled(child.props));
      } else {
        (0, _warning.default)(!child, '`children` of Field is not validate ReactElement.');
        returnChildNode = child;
      }
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: resetCount
      }, returnChildNode);
    }
  }]);
  return Field;
}(React.Component);
(0, _defineProperty2.default)(Field, "contextType", _FieldContext.default);
(0, _defineProperty2.default)(Field, "defaultProps", {
  trigger: 'onChange',
  valuePropName: 'value'
});
function WrapperField(_ref6) {
  var name = _ref6.name,
    restProps = (0, _objectWithoutProperties2.default)(_ref6, _excluded);
  var fieldContext = React.useContext(_FieldContext.default);
  var listContext = React.useContext(_ListContext.default);
  var namePath = name !== undefined ? (0, _valueUtil.getNamePath)(name) : undefined;
  var key = 'keep';
  if (!restProps.isListField) {
    key = "_".concat((namePath || []).join('_'));
  }

  // Warning if it's a directly list field.
  // We can still support multiple level field preserve.
  if (false) {}
  return /*#__PURE__*/React.createElement(Field, (0, _extends2.default)({
    key: key,
    name: namePath,
    isListField: !!listContext
  }, restProps, {
    fieldContext: fieldContext
  }));
}
var _default = exports["default"] = WrapperField;

/***/ }),

/***/ 27210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.HOOK_MARK = void 0;
var _warning = _interopRequireDefault(__webpack_require__(32038));
var React = _interopRequireWildcard(__webpack_require__(18038));
var HOOK_MARK = exports.HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
var warningFunc = function warningFunc() {
  (0, _warning.default)(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /*#__PURE__*/React.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var _default = exports["default"] = Context;

/***/ }),

/***/ 42464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _useForm3 = _interopRequireDefault(__webpack_require__(74100));
var _FieldContext = _interopRequireWildcard(__webpack_require__(27210));
var _FormContext = _interopRequireDefault(__webpack_require__(23846));
var _valueUtil = __webpack_require__(31994);
var _ListContext = _interopRequireDefault(__webpack_require__(3848));
var _excluded = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
var Form = function Form(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var formContext = React.useContext(_FormContext.default);

  // We customize handle event since Context will makes all the consumer re-render:
  // https://reactjs.org/docs/context.html#contextprovider
  var _useForm = (0, _useForm3.default)(form),
    _useForm2 = (0, _slicedToArray2.default)(_useForm, 1),
    formInstance = _useForm2[0];
  var _getInternalHooks = formInstance.getInternalHooks(_FieldContext.HOOK_MARK),
    useSubscribe = _getInternalHooks.useSubscribe,
    setInitialValues = _getInternalHooks.setInitialValues,
    setCallbacks = _getInternalHooks.setCallbacks,
    setValidateMessages = _getInternalHooks.setValidateMessages,
    setPreserve = _getInternalHooks.setPreserve,
    destroyForm = _getInternalHooks.destroyForm;

  // Pass ref with form instance
  React.useImperativeHandle(ref, function () {
    return formInstance;
  });

  // Register form into Context
  React.useEffect(function () {
    formContext.registerForm(name, formInstance);
    return function () {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);

  // Pass props to store
  setValidateMessages((0, _objectSpread2.default)((0, _objectSpread2.default)({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange: onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values) {
      formContext.triggerFormFinish(name, values);
      if (_onFinish) {
        _onFinish(values);
      }
    },
    onFinishFailed: onFinishFailed
  });
  setPreserve(preserve);

  // Set initial value, init store value when first mount
  var mountRef = React.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React.useEffect(function () {
    return destroyForm;
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  // Prepare children by `children` type
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var _values = formInstance.getFieldsValue(true);
    childrenNode = children(_values, formInstance);
  } else {
    childrenNode = children;
  }

  // Not use subscribe when using render props
  useSubscribe(!childrenRenderProps);

  // Listen if fields provided. We use ref to save prev data here to avoid additional render
  var prevFieldsRef = React.useRef();
  React.useEffect(function () {
    if (!(0, _valueUtil.isSimilar)(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  var formContextValue = React.useMemo(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, formInstance), {}, {
      validateTrigger: validateTrigger
    });
  }, [formInstance, validateTrigger]);
  var wrapperNode = /*#__PURE__*/React.createElement(_ListContext.default.Provider, {
    value: null
  }, /*#__PURE__*/React.createElement(_FieldContext.default.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component === false) {
    return wrapperNode;
  }
  return /*#__PURE__*/React.createElement(Component, (0, _extends2.default)({}, restProps, {
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: function onReset(event) {
      var _restProps$onReset;
      event.preventDefault();
      formInstance.resetFields();
      (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 || _restProps$onReset.call(restProps, event);
    }
  }), wrapperNode);
};
var _default = exports["default"] = Form;

/***/ }),

/***/ 23846:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormProvider = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread3 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
var FormContext = /*#__PURE__*/React.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = exports.FormProvider = function FormProvider(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = React.useContext(FormContext);
  var formsRef = React.useRef({});
  return /*#__PURE__*/React.createElement(FormContext.Provider, {
    value: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formContext), {}, {
      validateMessages: (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formContext.validateMessages), validateMessages),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function triggerFormChange(name, changedFields) {
        if (onFormChange) {
          onFormChange(name, {
            changedFields: changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: function triggerFormFinish(name, values) {
        if (onFormFinish) {
          onFormFinish(name, {
            values: values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: function registerForm(name, form) {
        if (name) {
          formsRef.current = (0, _objectSpread3.default)((0, _objectSpread3.default)({}, formsRef.current), {}, (0, _defineProperty2.default)({}, name, form));
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: function unregisterForm(name) {
        var newForms = (0, _objectSpread3.default)({}, formsRef.current);
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    })
  }, children);
};
var _default = exports["default"] = FormContext;

/***/ }),

/***/ 71539:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var _FieldContext = _interopRequireDefault(__webpack_require__(27210));
var _Field = _interopRequireDefault(__webpack_require__(64277));
var _valueUtil = __webpack_require__(31994);
var _ListContext = _interopRequireDefault(__webpack_require__(3848));
function List(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger,
    isListField = _ref.isListField;
  var context = React.useContext(_FieldContext.default);
  var wrapperListContext = React.useContext(_ListContext.default);
  var keyRef = React.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = React.useMemo(function () {
    var parentPrefixName = (0, _valueUtil.getNamePath)(context.prefixName) || [];
    return [].concat((0, _toConsumableArray2.default)(parentPrefixName), (0, _toConsumableArray2.default)((0, _valueUtil.getNamePath)(name)));
  }, [context.prefixName, name]);
  var fieldContext = React.useMemo(function () {
    return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, context), {}, {
      prefixName: prefixName
    });
  }, [context, prefixName]);

  // List context
  var listContext = React.useMemo(function () {
    return {
      getKey: function getKey(namePath) {
        var len = prefixName.length;
        var pathName = namePath[len];
        return [keyManager.keys[pathName], namePath.slice(len + 1)];
      }
    };
  }, [prefixName]);

  // User should not pass `children` as other type.
  if (typeof children !== 'function') {
    (0, _warning.default)(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /*#__PURE__*/React.createElement(_ListContext.default.Provider, {
    value: listContext
  }, /*#__PURE__*/React.createElement(_FieldContext.default.Provider, {
    value: fieldContext
  }, /*#__PURE__*/React.createElement(_Field.default, {
    name: [],
    shouldUpdate: shouldUpdate,
    rules: rules,
    validateTrigger: validateTrigger,
    initialValue: initialValue,
    isList: true,
    isListField: isListField !== null && isListField !== void 0 ? isListField : !!wrapperListContext
  }, function (_ref3, meta) {
    var _ref3$value = _ref3.value,
      value = _ref3$value === void 0 ? [] : _ref3$value,
      onChange = _ref3.onChange;
    var getFieldValue = context.getFieldValue;
    var getNewValue = function getNewValue() {
      var values = getFieldValue(prefixName || []);
      return values || [];
    };
    /**
     * Always get latest value in case user update fields by `form` api.
     */
    var operations = {
      add: function add(defaultValue, index) {
        // Mapping keys
        var newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [].concat((0, _toConsumableArray2.default)(keyManager.keys.slice(0, index)), [keyManager.id], (0, _toConsumableArray2.default)(keyManager.keys.slice(index)));
          onChange([].concat((0, _toConsumableArray2.default)(newValue.slice(0, index)), [defaultValue], (0, _toConsumableArray2.default)(newValue.slice(index))));
        } else {
          if (false) {}
          keyManager.keys = [].concat((0, _toConsumableArray2.default)(keyManager.keys), [keyManager.id]);
          onChange([].concat((0, _toConsumableArray2.default)(newValue), [defaultValue]));
        }
        keyManager.id += 1;
      },
      remove: function remove(index) {
        var newValue = getNewValue();
        var indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
          return !indexSet.has(keysIndex);
        });

        // Trigger store change
        onChange(newValue.filter(function (_, valueIndex) {
          return !indexSet.has(valueIndex);
        }));
      },
      move: function move(from, to) {
        if (from === to) {
          return;
        }
        var newValue = getNewValue();

        // Do not handle out of range
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = (0, _valueUtil.move)(keyManager.keys, from, to);

        // Trigger store change
        onChange((0, _valueUtil.move)(newValue, from, to));
      }
    };
    var listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (false) {}
    }
    return children(listValue.map(function (__, index) {
      var key = keyManager.keys[index];
      if (key === undefined) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key: key,
        isListField: true
      };
    }), operations, meta);
  })));
}
var _default = exports["default"] = List;

/***/ }),

/***/ 3848:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var ListContext = /*#__PURE__*/React.createContext(null);
var _default = exports["default"] = ListContext;

/***/ }),

/***/ 91230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Field", ({
  enumerable: true,
  get: function get() {
    return _Field.default;
  }
}));
Object.defineProperty(exports, "FieldContext", ({
  enumerable: true,
  get: function get() {
    return _FieldContext.default;
  }
}));
Object.defineProperty(exports, "FormProvider", ({
  enumerable: true,
  get: function get() {
    return _FormContext.FormProvider;
  }
}));
Object.defineProperty(exports, "List", ({
  enumerable: true,
  get: function get() {
    return _List.default;
  }
}));
Object.defineProperty(exports, "ListContext", ({
  enumerable: true,
  get: function get() {
    return _ListContext.default;
  }
}));
exports["default"] = void 0;
Object.defineProperty(exports, "useForm", ({
  enumerable: true,
  get: function get() {
    return _useForm.default;
  }
}));
Object.defineProperty(exports, "useWatch", ({
  enumerable: true,
  get: function get() {
    return _useWatch.default;
  }
}));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Field = _interopRequireDefault(__webpack_require__(64277));
var _List = _interopRequireDefault(__webpack_require__(71539));
var _useForm = _interopRequireDefault(__webpack_require__(74100));
var _Form = _interopRequireDefault(__webpack_require__(42464));
var _FormContext = __webpack_require__(23846);
var _FieldContext = _interopRequireDefault(__webpack_require__(27210));
var _ListContext = _interopRequireDefault(__webpack_require__(3848));
var _useWatch = _interopRequireDefault(__webpack_require__(95697));
var InternalForm = /*#__PURE__*/React.forwardRef(_Form.default);
var RefForm = InternalForm;
RefForm.FormProvider = _FormContext.FormProvider;
RefForm.Field = _Field.default;
RefForm.List = _List.default;
RefForm.useForm = _useForm.default;
RefForm.useWatch = _useWatch.default;
var _default = exports["default"] = RefForm;

/***/ }),

/***/ 74100:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.FormStore = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _set = __webpack_require__(44263);
var _warning = _interopRequireDefault(__webpack_require__(32038));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _FieldContext = __webpack_require__(27210);
var _asyncUtil = __webpack_require__(83194);
var _messages = __webpack_require__(76719);
var _NameMap = _interopRequireDefault(__webpack_require__(29325));
var _valueUtil = __webpack_require__(31994);
var _excluded = ["name"];
var FormStore = exports.FormStore = /*#__PURE__*/(0, _createClass2.default)(function FormStore(forceRootUpdate) {
  var _this = this;
  (0, _classCallCheck2.default)(this, FormStore);
  (0, _defineProperty2.default)(this, "formHooked", false);
  (0, _defineProperty2.default)(this, "forceRootUpdate", void 0);
  (0, _defineProperty2.default)(this, "subscribable", true);
  (0, _defineProperty2.default)(this, "store", {});
  (0, _defineProperty2.default)(this, "fieldEntities", []);
  (0, _defineProperty2.default)(this, "initialValues", {});
  (0, _defineProperty2.default)(this, "callbacks", {});
  (0, _defineProperty2.default)(this, "validateMessages", null);
  (0, _defineProperty2.default)(this, "preserve", null);
  (0, _defineProperty2.default)(this, "lastValidatePromise", null);
  (0, _defineProperty2.default)(this, "getForm", function () {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  });
  // ======================== Internal Hooks ========================
  (0, _defineProperty2.default)(this, "getInternalHooks", function (key) {
    if (key === _FieldContext.HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    (0, _warning.default)(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  });
  (0, _defineProperty2.default)(this, "useSubscribe", function (subscribable) {
    _this.subscribable = subscribable;
  });
  /**
   * Record prev Form unmount fieldEntities which config preserve false.
   * This need to be refill with initialValues instead of store value.
   */
  (0, _defineProperty2.default)(this, "prevWithoutPreserves", null);
  /**
   * First time `setInitialValues` should update store with initial value
   */
  (0, _defineProperty2.default)(this, "setInitialValues", function (initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = (0, _set.merge)(initialValues, _this.store);

      // We will take consider prev form unmount fields.
      // When the field is not `preserve`, we need fill this with initialValues instead of store.
      // eslint-disable-next-line array-callback-return
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 || _this$prevWithoutPres.map(function (_ref) {
        var namePath = _ref.key;
        nextStore = (0, _valueUtil.setValue)(nextStore, namePath, (0, _valueUtil.getValue)(initialValues, namePath));
      });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  });
  (0, _defineProperty2.default)(this, "destroyForm", function () {
    var prevWithoutPreserves = new _NameMap.default();
    _this.getFieldEntities(true).forEach(function (entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  });
  (0, _defineProperty2.default)(this, "getInitialValue", function (namePath) {
    var initValue = (0, _valueUtil.getValue)(_this.initialValues, namePath);

    // Not cloneDeep when without `namePath`
    return namePath.length ? (0, _set.merge)(initValue) : initValue;
  });
  (0, _defineProperty2.default)(this, "setCallbacks", function (callbacks) {
    _this.callbacks = callbacks;
  });
  (0, _defineProperty2.default)(this, "setValidateMessages", function (validateMessages) {
    _this.validateMessages = validateMessages;
  });
  (0, _defineProperty2.default)(this, "setPreserve", function (preserve) {
    _this.preserve = preserve;
  });
  // ============================= Watch ============================
  (0, _defineProperty2.default)(this, "watchList", []);
  (0, _defineProperty2.default)(this, "registerWatch", function (callback) {
    _this.watchList.push(callback);
    return function () {
      _this.watchList = _this.watchList.filter(function (fn) {
        return fn !== callback;
      });
    };
  });
  (0, _defineProperty2.default)(this, "notifyWatch", function () {
    var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // No need to cost perf when nothing need to watch
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      var allValues = _this.getFieldsValue(true);
      _this.watchList.forEach(function (callback) {
        callback(values, allValues, namePath);
      });
    }
  });
  // ========================== Dev Warning =========================
  (0, _defineProperty2.default)(this, "timeoutId", null);
  (0, _defineProperty2.default)(this, "warningUnhooked", function () {
    if (false) {}
  });
  // ============================ Store =============================
  (0, _defineProperty2.default)(this, "updateStore", function (nextStore) {
    _this.store = nextStore;
  });
  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  (0, _defineProperty2.default)(this, "getFieldEntities", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function (field) {
      return field.getNamePath().length;
    });
  });
  (0, _defineProperty2.default)(this, "getFieldsMap", function () {
    var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var cache = new _NameMap.default();
    _this.getFieldEntities(pure).forEach(function (field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  });
  (0, _defineProperty2.default)(this, "getFieldEntitiesForNamePathList", function (nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function (name) {
      var namePath = (0, _valueUtil.getNamePath)(name);
      return cache.get(namePath) || {
        INVALIDATE_NAME_PATH: (0, _valueUtil.getNamePath)(name)
      };
    });
  });
  (0, _defineProperty2.default)(this, "getFieldsValue", function (nameList, filterFunc) {
    _this.warningUnhooked();

    // Fill args
    var mergedNameList;
    var mergedFilterFunc;
    var mergedStrict;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && (0, _typeof2.default)(nameList) === 'object') {
      mergedStrict = nameList.strict;
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function (entity) {
      var _isListField, _ref3;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();

      // Ignore when it's a list item and not specific the namePath,
      // since parent field is already take in count
      if (mergedStrict) {
        var _isList, _ref2;
        if ((_isList = (_ref2 = entity).isList) !== null && _isList !== void 0 && _isList.call(_ref2)) {
          return;
        }
      } else if (!mergedNameList && (_isListField = (_ref3 = entity).isListField) !== null && _isListField !== void 0 && _isListField.call(_ref3)) {
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return (0, _valueUtil.cloneByNamePathList)(_this.store, filteredNameList.map(_valueUtil.getNamePath));
  });
  (0, _defineProperty2.default)(this, "getFieldValue", function (name) {
    _this.warningUnhooked();
    var namePath = (0, _valueUtil.getNamePath)(name);
    return (0, _valueUtil.getValue)(_this.store, namePath);
  });
  (0, _defineProperty2.default)(this, "getFieldsError", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function (entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: (0, _valueUtil.getNamePath)(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  });
  (0, _defineProperty2.default)(this, "getFieldError", function (name) {
    _this.warningUnhooked();
    var namePath = (0, _valueUtil.getNamePath)(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  });
  (0, _defineProperty2.default)(this, "getFieldWarning", function (name) {
    _this.warningUnhooked();
    var namePath = (0, _valueUtil.getNamePath)(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  });
  (0, _defineProperty2.default)(this, "isFieldsTouched", function () {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(_valueUtil.getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(_valueUtil.getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched(field) {
      return field.isFieldTouched();
    };

    // ===== Will get fully compare when not config namePathList =====
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }

    // Generate a nest tree for validate
    var map = new _NameMap.default();
    namePathList.forEach(function (shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function (field) {
      var fieldNamePath = field.getNamePath();

      // Find matched entity and put into list
      namePathList.forEach(function (shortNamePath) {
        if (shortNamePath.every(function (nameUnit, i) {
          return fieldNamePath[i] === nameUnit;
        })) {
          map.update(shortNamePath, function (list) {
            return [].concat((0, _toConsumableArray2.default)(list), [field]);
          });
        }
      });
    });

    // Check if NameMap value is touched
    var isNamePathListTouched = function isNamePathListTouched(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function (_ref4) {
      var value = _ref4.value;
      return value;
    });
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  });
  (0, _defineProperty2.default)(this, "isFieldTouched", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  });
  (0, _defineProperty2.default)(this, "isFieldsValidating", function (nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function (testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(_valueUtil.getNamePath);
    return fieldEntities.some(function (testField) {
      var fieldNamePath = testField.getNamePath();
      return (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  });
  (0, _defineProperty2.default)(this, "isFieldValidating", function (name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  });
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */
  (0, _defineProperty2.default)(this, "resetWithFieldInitialValue", function () {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // Create cache
    var cache = new _NameMap.default();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function (field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();

      // Record only if has `initialValue`
      if (initialValue !== undefined) {
        var records = cache.get(namePath) || new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });

    // Reset
    var resetWithFields = function resetWithFields(entities) {
      entities.forEach(function (field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== undefined) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== undefined) {
            // Warning if conflict with form initialValues and do not modify value
            (0, _warning.default)(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              // Warning if multiple field set `initialValue`and do not modify value
              (0, _warning.default)(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              var isListField = field.isListField();

              // Set `initialValue`
              if (!isListField && (!info.skipExist || originValue === undefined)) {
                _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, (0, _toConsumableArray2.default)(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function (namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, (0, _toConsumableArray2.default)((0, _toConsumableArray2.default)(records).map(function (r) {
            return r.entity;
          })));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  });
  (0, _defineProperty2.default)(this, "resetFields", function (nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore((0, _set.merge)(_this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }

    // Reset by `nameList`
    var namePathList = nameList.map(_valueUtil.getNamePath);
    namePathList.forEach(function (namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList: namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  });
  (0, _defineProperty2.default)(this, "setFields", function (fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function (fieldData) {
      var name = fieldData.name,
        data = (0, _objectWithoutProperties2.default)(fieldData, _excluded);
      var namePath = (0, _valueUtil.getNamePath)(name);
      namePathList.push(namePath);

      // Value
      if ('value' in data) {
        _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  });
  (0, _defineProperty2.default)(this, "getFields", function () {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function (field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, meta), {}, {
        name: namePath,
        value: _this.getFieldValue(namePath)
      });
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  });
  // =========================== Observer ===========================
  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */
  (0, _defineProperty2.default)(this, "initEntityValue", function (entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== undefined) {
      var namePath = entity.getNamePath();
      var prevValue = (0, _valueUtil.getValue)(_this.store, namePath);
      if (prevValue === undefined) {
        _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, initialValue));
      }
    }
  });
  (0, _defineProperty2.default)(this, "isMergedPreserve", function (fieldPreserve) {
    var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  });
  (0, _defineProperty2.default)(this, "registerField", function (entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);

    // Set initial values
    if (entity.props.initialValue !== undefined) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }

    // un-register field callback
    return function (isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function (item) {
        return item !== entity;
      });

      // Clean up store value if not preserve
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
        if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
          return (
            // Only reset when no namePath exist
            !(0, _valueUtil.matchNamePath)(field.getNamePath(), namePath)
          );
        })) {
          var _prevStore = _this.store;
          _this.updateStore((0, _valueUtil.setValue)(_prevStore, namePath, defaultValue, true));

          // Notify that field is unmount
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });

          // Dependencies update
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  });
  (0, _defineProperty2.default)(this, "dispatch", function (action) {
    switch (action.type) {
      case 'updateValue':
        {
          var namePath = action.namePath,
            value = action.value;
          _this.updateValue(namePath, value);
          break;
        }
      case 'validateField':
        {
          var _namePath = action.namePath,
            triggerName = action.triggerName;
          _this.validateFields([_namePath], {
            triggerName: triggerName
          });
          break;
        }
      default:
      // Currently we don't have other action. Do nothing.
    }
  });
  (0, _defineProperty2.default)(this, "notifyObservers", function (prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, info), {}, {
        store: _this.getFieldsValue(true)
      });
      _this.getFieldEntities().forEach(function (_ref5) {
        var onStoreChange = _ref5.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  });
  /**
   * Notify dependencies children with parent update
   * We need delay to trigger validate in case Field is under render props
   */
  (0, _defineProperty2.default)(this, "triggerDependenciesUpdate", function (prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat((0, _toConsumableArray2.default)(childrenFields))
    });
    return childrenFields;
  });
  (0, _defineProperty2.default)(this, "updateValue", function (name, value) {
    var namePath = (0, _valueUtil.getNamePath)(name);
    var prevStore = _this.store;
    _this.updateStore((0, _valueUtil.setValue)(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);

    // Dependencies update
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);

    // trigger callback function
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = (0, _valueUtil.cloneByNamePathList)(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat((0, _toConsumableArray2.default)(childrenFields)));
  });
  // Let all child Field get update.
  (0, _defineProperty2.default)(this, "setFieldsValue", function (store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = (0, _set.merge)(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  });
  (0, _defineProperty2.default)(this, "setFieldValue", function (name, value) {
    _this.setFields([{
      name: name,
      value: value
    }]);
  });
  (0, _defineProperty2.default)(this, "getDependencyChildrenFields", function (rootNamePath) {
    var children = new Set();
    var childrenFields = [];
    var dependencies2fields = new _NameMap.default();

    /**
     * Generate maps
     * Can use cache to save perf if user report performance issue with this
     */
    _this.getFieldEntities().forEach(function (field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function (dependency) {
        var dependencyNamePath = (0, _valueUtil.getNamePath)(dependency);
        dependencies2fields.update(dependencyNamePath, function () {
          var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren(namePath) {
      var fields = dependencies2fields.get(namePath) || new Set();
      fields.forEach(function (field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  });
  (0, _defineProperty2.default)(this, "triggerOnFieldsChange", function (namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();

      /**
       * Fill errors since `fields` may be replaced by controlled fields
       */
      if (filedErrors) {
        var cache = new _NameMap.default();
        filedErrors.forEach(function (_ref6) {
          var name = _ref6.name,
            errors = _ref6.errors;
          cache.set(name, errors);
        });
        fields.forEach(function (field) {
          // eslint-disable-next-line no-param-reassign
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function (_ref7) {
        var fieldName = _ref7.name;
        return (0, _valueUtil.containsNamePath)(namePathList, fieldName);
      });
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  });
  // =========================== Validate ===========================
  (0, _defineProperty2.default)(this, "validateFields", function (arg1, arg2) {
    _this.warningUnhooked();
    var nameList;
    var options;
    if (Array.isArray(arg1) || typeof arg1 === 'string' || typeof arg2 === 'string') {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(_valueUtil.getNamePath) : [];

    // Collect result in promise list
    var promiseList = [];

    // We temp save the path which need trigger for `onFieldsChange`
    var TMP_SPLIT = String(Date.now());
    var validateNamePathList = new Set();
    var _ref8 = options || {},
      recursive = _ref8.recursive,
      dirty = _ref8.dirty;
    _this.getFieldEntities(true).forEach(function (field) {
      // Add field if not provide `nameList`
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }

      // Skip if without rule
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }

      // Skip if only validate dirty field
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));

      // Add field validate rule in to promise list
      if (!provideNameList || (0, _valueUtil.containsNamePath)(namePathList, fieldNamePath, recursive)) {
        var promise = field.validateRules((0, _objectSpread2.default)({
          validateMessages: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _messages.defaultValidateMessages), _this.validateMessages)
        }, options));

        // Wrap promise with field
        promiseList.push(promise.then(function () {
          return {
            name: fieldNamePath,
            errors: [],
            warnings: []
          };
        }).catch(function (ruleErrors) {
          var _ruleErrors$forEach;
          var mergedErrors = [];
          var mergedWarnings = [];
          (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 || _ruleErrors$forEach.call(ruleErrors, function (_ref9) {
            var warningOnly = _ref9.rule.warningOnly,
              errors = _ref9.errors;
            if (warningOnly) {
              mergedWarnings.push.apply(mergedWarnings, (0, _toConsumableArray2.default)(errors));
            } else {
              mergedErrors.push.apply(mergedErrors, (0, _toConsumableArray2.default)(errors));
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    var summaryPromise = (0, _asyncUtil.allPromiseFinish)(promiseList);
    _this.lastValidatePromise = summaryPromise;

    // Notify fields with rule that validate has finished and need update
    summaryPromise.catch(function (results) {
      return results;
    }).then(function (results) {
      var resultNamePathList = results.map(function (_ref10) {
        var name = _ref10.name;
        return name;
      });
      _this.notifyObservers(_this.store, resultNamePathList, {
        type: 'validateFinish'
      });
      _this.triggerOnFieldsChange(resultNamePathList, results);
    });
    var returnPromise = summaryPromise.then(function () {
      if (_this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(_this.getFieldsValue(namePathList));
      }
      return Promise.reject([]);
    }).catch(function (results) {
      var errorList = results.filter(function (result) {
        return result && result.errors.length;
      });
      return Promise.reject({
        values: _this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: _this.lastValidatePromise !== summaryPromise
      });
    });

    // Do not throw in console
    returnPromise.catch(function (e) {
      return e;
    });

    // `validating` changed. Trigger `onFieldsChange`
    var triggerNamePathList = namePathList.filter(function (namePath) {
      return validateNamePathList.has(namePath.join(TMP_SPLIT));
    });
    _this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  });
  // ============================ Submit ============================
  (0, _defineProperty2.default)(this, "submit", function () {
    _this.warningUnhooked();
    _this.validateFields().then(function (values) {
      var onFinish = _this.callbacks.onFinish;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          // Should print error if user `onFinish` callback failed
          console.error(err);
        }
      }
    }).catch(function (e) {
      var onFinishFailed = _this.callbacks.onFinishFailed;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  });
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = React.useRef();
  var _React$useState = React.useState({}),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      // Create a new FormStore if not provided
      var forceReRender = function forceReRender() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var _default = exports["default"] = useForm;

/***/ }),

/***/ 95697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.stringify = stringify;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var _react = __webpack_require__(18038);
var _FieldContext = _interopRequireWildcard(__webpack_require__(27210));
var _typeUtil = __webpack_require__(51554);
var _valueUtil = __webpack_require__(31994);
function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
var useWatchWarning =  false ? 0 : function () {};

// ------- selector type -------

// ------- selector type end -------

function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var dependencies = args[0],
    _args$ = args[1],
    _form = _args$ === void 0 ? {} : _args$;
  var options = (0, _typeUtil.isFormInstance)(_form) ? {
    form: _form
  } : _form;
  var form = options.form;
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var valueStr = (0, _react.useMemo)(function () {
    return stringify(value);
  }, [value]);
  var valueStrRef = (0, _react.useRef)(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = (0, _react.useContext)(_FieldContext.default);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;

  // Warning if not exist form instance
  if (false) {}
  var namePath = (0, _valueUtil.getNamePath)(dependencies);
  var namePathRef = (0, _react.useRef)(namePath);
  namePathRef.current = namePath;
  useWatchWarning(namePath);
  (0, _react.useEffect)(function () {
    // Skip if not exist form instance
    if (!isValidForm) {
      return;
    }
    var getFieldsValue = formInstance.getFieldsValue,
      getInternalHooks = formInstance.getInternalHooks;
    var _getInternalHooks = getInternalHooks(_FieldContext.HOOK_MARK),
      registerWatch = _getInternalHooks.registerWatch;
    var getWatchValue = function getWatchValue(values, allValues) {
      var watchValue = options.preserve ? allValues : values;
      return typeof dependencies === 'function' ? dependencies(watchValue) : (0, _valueUtil.getValue)(watchValue, namePathRef.current);
    };
    var cancelRegister = registerWatch(function (values, allValues) {
      var newValue = getWatchValue(values, allValues);
      var nextValueStr = stringify(newValue);

      // Compare stringify in case it's nest object
      if (valueStrRef.current !== nextValueStr) {
        valueStrRef.current = nextValueStr;
        setValue(newValue);
      }
    });

    // TODO: We can improve this perf in future
    var initialValue = getWatchValue(getFieldsValue(), getFieldsValue(true));

    // React 18 has the bug that will queue update twice even the value is not changed
    // ref: https://github.com/facebook/react/issues/27213
    if (value !== initialValue) {
      setValue(initialValue);
    }
    return cancelRegister;
  },
  // We do not need re-register since namePath content is the same
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [isValidForm]);
  return value;
}
var _default = exports["default"] = useWatch;

/***/ }),

/***/ 29325:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var SPLIT = '__@field_split__';

/**
 * Convert name path into string to fast the fetch speed of Map.
 */
function normalize(namePath) {
  return namePath.map(function (cell) {
    return "".concat((0, _typeof2.default)(cell), ":").concat(cell);
  })
  // Magic split
  .join(SPLIT);
}

/**
 * NameMap like a `Map` but accepts `string[]` as key.
 */
var NameMap = /*#__PURE__*/function () {
  function NameMap() {
    (0, _classCallCheck2.default)(this, NameMap);
    (0, _defineProperty2.default)(this, "kvs", new Map());
  }
  (0, _createClass2.default)(NameMap, [{
    key: "set",
    value: function set(key, value) {
      this.kvs.set(normalize(key), value);
    }
  }, {
    key: "get",
    value: function get(key) {
      return this.kvs.get(normalize(key));
    }
  }, {
    key: "update",
    value: function update(key, updater) {
      var origin = this.get(key);
      var next = updater(origin);
      if (!next) {
        this.delete(key);
      } else {
        this.set(key, next);
      }
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      this.kvs.delete(normalize(key));
    }

    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function map(callback) {
      return (0, _toConsumableArray2.default)(this.kvs.entries()).map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        var cells = key.split(SPLIT);
        return callback({
          key: cells.map(function (cell) {
            var _cell$match = cell.match(/^([^:]*):(.*)$/),
              _cell$match2 = (0, _slicedToArray2.default)(_cell$match, 3),
              type = _cell$match2[1],
              unit = _cell$match2[2];
            return type === 'number' ? Number(unit) : unit;
          }),
          value: value
        });
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var json = {};
      this.map(function (_ref3) {
        var key = _ref3.key,
          value = _ref3.value;
        json[key.join('.')] = value;
        return null;
      });
      return json;
    }
  }]);
  return NameMap;
}();
var _default = exports["default"] = NameMap;

/***/ }),

/***/ 83194:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.allPromiseFinish = allPromiseFinish;
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function (resolve, reject) {
    promiseList.forEach(function (promise, index) {
      promise.catch(function (e) {
        hasError = true;
        return e;
      }).then(function (result) {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}

/***/ }),

/***/ 76719:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.defaultValidateMessages = void 0;
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = exports.defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

/***/ }),

/***/ 51554:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isFormInstance = isFormInstance;
exports.toArray = toArray;
function toArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}

/***/ }),

/***/ 7563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.validateRules = validateRules;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _regeneratorRuntime2 = _interopRequireDefault(__webpack_require__(23984));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(82510));
var _asyncValidator = _interopRequireDefault(__webpack_require__(31457));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _warning = _interopRequireDefault(__webpack_require__(32038));
var _messages = __webpack_require__(76719);
var _set = __webpack_require__(44263);
// Remove incorrect original ts define
var AsyncValidator = _asyncValidator.default;

/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function (str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
/**
 * We use `async-validator` to validate the value.
 * But only check one value in a time to avoid namePath validate issue.
 */
function _validateRule() {
  _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee2(name, value, rule, options, messageVariables) {
    var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          cloneRule = (0, _objectSpread2.default)({}, rule); // Bug of `async-validator`
          // https://github.com/react-component/field-form/issues/316
          // https://github.com/react-component/field-form/issues/313
          delete cloneRule.ruleIndex;

          // https://github.com/ant-design/ant-design/issues/40497#issuecomment-1422282378
          AsyncValidator.warning = function () {
            return void 0;
          };
          if (cloneRule.validator) {
            originValidator = cloneRule.validator;
            cloneRule.validator = function () {
              try {
                return originValidator.apply(void 0, arguments);
              } catch (error) {
                console.error(error);
                return Promise.reject(CODE_LOGIC_ERROR);
              }
            };
          }

          // We should special handle array validate
          subRuleField = null;
          if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
            subRuleField = cloneRule.defaultField;
            delete cloneRule.defaultField;
          }
          validator = new AsyncValidator((0, _defineProperty2.default)({}, name, [cloneRule]));
          messages = (0, _set.merge)(_messages.defaultValidateMessages, options.validateMessages);
          validator.messages(messages);
          result = [];
          _context2.prev = 10;
          _context2.next = 13;
          return Promise.resolve(validator.validate((0, _defineProperty2.default)({}, name, value), (0, _objectSpread2.default)({}, options)));
        case 13:
          _context2.next = 18;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](10);
          if (_context2.t0.errors) {
            result = _context2.t0.errors.map(function (_ref4, index) {
              var message = _ref4.message;
              var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
              return /*#__PURE__*/React.isValidElement(mergedMessage) ?
              /*#__PURE__*/
              // Wrap ReactNode with `key`
              React.cloneElement(mergedMessage, {
                key: "error_".concat(index)
              }) : mergedMessage;
            });
          }
        case 18:
          if (!(!result.length && subRuleField)) {
            _context2.next = 23;
            break;
          }
          _context2.next = 21;
          return Promise.all(value.map(function (subValue, i) {
            return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
          }));
        case 21:
          subResults = _context2.sent;
          return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
            return [].concat((0, _toConsumableArray2.default)(prev), (0, _toConsumableArray2.default)(errors));
          }, []));
        case 23:
          // Replace message with variables
          kv = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rule), {}, {
            name: name,
            enum: (rule.enum || []).join(', ')
          }, messageVariables);
          fillVariableResult = result.map(function (error) {
            if (typeof error === 'string') {
              return replaceMessage(error, kv);
            }
            return error;
          });
          return _context2.abrupt("return", fillVariableResult);
        case 26:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 15]]);
  }));
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');

  // Fill rule with context
  var filledRules = rules.map(function (currentRule, ruleIndex) {
    var originValidatorFunc = currentRule.validator;
    var cloneRule = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentRule), {}, {
      ruleIndex: ruleIndex
    });

    // Replace validator if needed
    if (originValidatorFunc) {
      cloneRule.validator = function (rule, val, callback) {
        var hasPromise = false;

        // Wrap callback only accept when promise not provided
        var wrappedCallback = function wrappedCallback() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          // Wait a tick to make sure return type is a promise
          Promise.resolve().then(function () {
            (0, _warning.default)(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
            if (!hasPromise) {
              callback.apply(void 0, args);
            }
          });
        };

        // Get promise
        var promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';

        /**
         * 1. Use promise as the first priority.
         * 2. If promise not exist, use callback with warning instead
         */
        (0, _warning.default)(hasPromise, '`callback` is deprecated. Please return a promise instead.');
        if (hasPromise) {
          promise.then(function () {
            callback();
          }).catch(function (err) {
            callback(err || ' ');
          });
        }
      };
    }
    return cloneRule;
  }).sort(function (_ref, _ref2) {
    var w1 = _ref.warningOnly,
      i1 = _ref.ruleIndex;
    var w2 = _ref2.warningOnly,
      i2 = _ref2.ruleIndex;
    if (!!w1 === !!w2) {
      // Let keep origin order
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });

  // Do validate rules
  var summaryPromise;
  if (validateFirst === true) {
    // >>>>> Validate by serialization
    summaryPromise = new Promise( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee(resolve, reject) {
        var i, rule, errors;
        return (0, _regeneratorRuntime2.default)().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              i = 0;
            case 1:
              if (!(i < filledRules.length)) {
                _context.next = 12;
                break;
              }
              rule = filledRules[i];
              _context.next = 5;
              return validateRule(name, value, rule, options, messageVariables);
            case 5:
              errors = _context.sent;
              if (!errors.length) {
                _context.next = 9;
                break;
              }
              reject([{
                errors: errors,
                rule: rule
              }]);
              return _context.abrupt("return");
            case 9:
              i += 1;
              _context.next = 1;
              break;
            case 12:
              /* eslint-enable */

              resolve([]);
            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
      };
    }());
  } else {
    // >>>>> Validate by parallel
    var rulePromises = filledRules.map(function (rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
        return {
          errors: errors,
          rule: rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
      // Always change to rejection for Field to catch
      return Promise.reject(errors);
    });
  }

  // Internal catch error to avoid console error log.
  summaryPromise.catch(function (e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee3(rulePromises) {
    return (0, _regeneratorRuntime2.default)().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
            var _ref5;
            var errors = (_ref5 = []).concat.apply(_ref5, (0, _toConsumableArray2.default)(errorsList));
            return errors;
          }));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = (0, _asyncToGenerator2.default)( /*#__PURE__*/(0, _regeneratorRuntime2.default)().mark(function _callee4(rulePromises) {
    var count;
    return (0, _regeneratorRuntime2.default)().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          count = 0;
          return _context4.abrupt("return", new Promise(function (resolve) {
            rulePromises.forEach(function (promise) {
              promise.then(function (ruleError) {
                if (ruleError.errors.length) {
                  resolve([ruleError]);
                }
                count += 1;
                if (count === rulePromises.length) {
                  resolve([]);
                }
              });
            });
          }));
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _finishOnFirstFailed.apply(this, arguments);
}

/***/ }),

/***/ 31994:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneByNamePathList = cloneByNamePathList;
exports.containsNamePath = containsNamePath;
exports.defaultGetValueFromEvent = defaultGetValueFromEvent;
exports.getNamePath = getNamePath;
Object.defineProperty(exports, "getValue", ({
  enumerable: true,
  get: function get() {
    return _get.default;
  }
}));
exports.isSimilar = isSimilar;
exports.matchNamePath = matchNamePath;
exports.move = move;
Object.defineProperty(exports, "setValue", ({
  enumerable: true,
  get: function get() {
    return _set.default;
  }
}));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _get = _interopRequireDefault(__webpack_require__(42012));
var _set = _interopRequireDefault(__webpack_require__(44263));
var _typeUtil = __webpack_require__(51554);
/**
 * Convert name to internal supported format.
 * This function should keep since we still thinking if need support like `a.b.c` format.
 * 'a' => ['a']
 * 123 => [123]
 * ['a', 123] => ['a', 123]
 */
function getNamePath(path) {
  return (0, _typeUtil.toArray)(path);
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function (namePath) {
    var value = (0, _get.default)(store, namePath);
    newStore = (0, _set.default)(newStore, namePath, value);
  });
  return newStore;
}

/**
 * Check if `namePathList` includes `namePath`.
 * @param namePathList A list of `InternalNamePath[]`
 * @param namePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function containsNamePath(namePathList, namePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return namePathList && namePathList.some(function (path) {
    return matchNamePath(namePath, path, partialMatch);
  });
}

/**
 * Check if `namePath` is super set or equal of `subNamePath`.
 * @param namePath A list of `InternalNamePath[]`
 * @param subNamePath Compare `InternalNamePath`
 * @param partialMatch True will make `[a, b]` match `[a, b, c]`
 */
function matchNamePath(namePath, subNamePath) {
  var partialMatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every(function (nameUnit, i) {
    return namePath[i] === nameUnit;
  });
}

// Like `shallowEqual`, but we not check the data which may cause re-render

function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || (0, _typeof2.default)(source) !== 'object' || (0, _typeof2.default)(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return (0, _toConsumableArray2.default)(keys).every(function (key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? undefined : arguments[1];
  if (event && event.target && (0, _typeof2.default)(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

/**
 * Moves an array item from one position in an array to another.
 *
 * Note: This is a pure function so a new array will be returned, instead
 * of altering the array argument.
 *
 * @param array         Array in which to move an item.         (required)
 * @param moveIndex     The index of the item to move.          (required)
 * @param toIndex       The index to move item at moveIndex to. (required)
 */
function move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    // move left
    return [].concat((0, _toConsumableArray2.default)(array.slice(0, toIndex)), [item], (0, _toConsumableArray2.default)(array.slice(toIndex, moveIndex)), (0, _toConsumableArray2.default)(array.slice(moveIndex + 1, length)));
  }
  if (diff < 0) {
    // move right
    return [].concat((0, _toConsumableArray2.default)(array.slice(0, moveIndex)), (0, _toConsumableArray2.default)(array.slice(moveIndex + 1, toIndex + 1)), [item], (0, _toConsumableArray2.default)(array.slice(toIndex + 1, length)));
  }
  return array;
}

/***/ }),

/***/ 2797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof3 = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.genCSSMotion = genCSSMotion;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _classnames = _interopRequireDefault(__webpack_require__(54641));
var _findDOMNode = _interopRequireDefault(__webpack_require__(29321));
var _ref2 = __webpack_require__(310);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _context = __webpack_require__(12970);
var _DomWrapper = _interopRequireDefault(__webpack_require__(45797));
var _useStatus3 = _interopRequireDefault(__webpack_require__(44583));
var _useStepQueue = __webpack_require__(37413);
var _interface = __webpack_require__(85485);
var _motion = __webpack_require__(85482);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  if ((0, _typeof2.default)(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props, contextMotion) {
    return !!(props.motionName && transitionSupport && contextMotion !== false);
  }
  var CSSMotion = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var _React$useContext = React.useContext(_context.Context),
      contextMotion = _React$useContext.motion;
    var supportMotion = isSupportTransition(props, contextMotion);

    // Ref to the react node, it may be a HTMLElement
    var nodeRef = (0, React.useRef)();
    // Ref to the dom wrapper in case ref can not pass to HTMLElement
    var wrapperNodeRef = (0, React.useRef)();
    function getDomElement() {
      try {
        // Here we're avoiding call for findDOMNode since it's deprecated
        // in strict mode. We're calling it only when node ref is not
        // an instance of DOM HTMLElement. Otherwise use
        // findDOMNode as a final resort
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : (0, _findDOMNode.default)(wrapperNodeRef.current);
      } catch (e) {
        // Only happen when `motionDeadline` trigger but element removed.
        return null;
      }
    }
    var _useStatus = (0, _useStatus3.default)(supportMotion, visible, getDomElement, props),
      _useStatus2 = (0, _slicedToArray2.default)(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];

    // Record whether content has rendered
    // Will return null for un-rendered even when `removeOnLeave={false}`
    var renderedRef = React.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }

    // ====================== Refs ======================
    var setNodeRef = React.useCallback(function (node) {
      nodeRef.current = node;
      (0, _ref2.fillRef)(ref, node);
    }, [ref]);

    // ===================== Render =====================
    var motionChildren;
    var mergedProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, eventProps), {}, {
      visible: visible
    });
    if (!children) {
      // No children
      motionChildren = null;
    } else if (status === _interface.STATUS_NONE) {
      // Stable children
      if (mergedVisible) {
        motionChildren = children((0, _objectSpread2.default)({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current && leavedClassName) {
        motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
          className: leavedClassName
        }), setNodeRef);
      } else if (forceRender || !removeOnLeave && !leavedClassName) {
        motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
          style: {
            display: 'none'
          }
        }), setNodeRef);
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      // In motion
      var statusSuffix;
      if (statusStep === _interface.STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if ((0, _useStepQueue.isActive)(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === _interface.STEP_START) {
        statusSuffix = 'start';
      }
      var motionCls = (0, _motion.getTransitionName)(motionName, "".concat(status, "-").concat(statusSuffix));
      motionChildren = children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, mergedProps), {}, {
        className: (0, _classnames.default)((0, _motion.getTransitionName)(motionName, status), (_classNames = {}, (0, _defineProperty2.default)(_classNames, motionCls, motionCls && statusSuffix), (0, _defineProperty2.default)(_classNames, motionName, typeof motionName === 'string'), _classNames)),
        style: statusStyle
      }), setNodeRef);
    }

    // Auto inject ref if child node not have `ref` props
    if ( /*#__PURE__*/React.isValidElement(motionChildren) && (0, _ref2.supportRef)(motionChildren)) {
      var _ref = motionChildren,
        originNodeRef = _ref.ref;
      if (!originNodeRef) {
        motionChildren = /*#__PURE__*/React.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /*#__PURE__*/React.createElement(_DomWrapper.default, {
      ref: wrapperNodeRef
    }, motionChildren);
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var _default = genCSSMotion(_motion.supportTransition);
exports["default"] = _default;

/***/ }),

/***/ 1094:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.genCSSMotionList = genCSSMotionList;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(49687));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _CSSMotion = _interopRequireDefault(__webpack_require__(2797));
var _diff = __webpack_require__(71148);
var _motion = __webpack_require__(85482);
var _excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
  _excluded2 = ["status"];
/* eslint react/prop-types: 0 */
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearPrepare', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
/**
 * Generate a CSSMotionList component with config
 * @param transitionSupport No need since CSSMotionList no longer depends on transition support
 * @param CSSMotion CSSMotion component
 */
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _CSSMotion.default;
  var CSSMotionList = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2.default)(CSSMotionList, _React$Component);
    var _super = (0, _createSuper2.default)(CSSMotionList);
    function CSSMotionList() {
      var _this;
      (0, _classCallCheck2.default)(this, CSSMotionList);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
        keyEntities: []
      });
      // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
      (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "removeKey", function (removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function (entity) {
          if (entity.key !== removeKey) return entity;
          return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, entity), {}, {
            status: _diff.STATUS_REMOVED
          });
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function (_ref) {
          var status = _ref.status;
          return status !== _diff.STATUS_REMOVED;
        }).length;
      });
      return _this;
    }
    (0, _createClass2.default)(CSSMotionList, [{
      key: "render",
      value: function render() {
        var _this2 = this;
        var keyEntities = this.state.keyEntities;
        var _this$props = this.props,
          component = _this$props.component,
          children = _this$props.children,
          _onVisibleChanged = _this$props.onVisibleChanged,
          onAllRemoved = _this$props.onAllRemoved,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
        var Component = component || React.Fragment;
        var motionProps = {};
        MOTION_PROP_NAMES.forEach(function (prop) {
          motionProps[prop] = restProps[prop];
          delete restProps[prop];
        });
        delete restProps.keys;
        return /*#__PURE__*/React.createElement(Component, restProps, keyEntities.map(function (_ref2, index) {
          var status = _ref2.status,
            eventProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
          var visible = status === _diff.STATUS_ADD || status === _diff.STATUS_KEEP;
          return /*#__PURE__*/React.createElement(CSSMotion, (0, _extends2.default)({}, motionProps, {
            key: eventProps.key,
            visible: visible,
            eventProps: eventProps,
            onVisibleChanged: function onVisibleChanged(changedVisible) {
              _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                key: eventProps.key
              });
              if (!changedVisible) {
                var restKeysCount = _this2.removeKey(eventProps.key);
                if (restKeysCount === 0 && onAllRemoved) {
                  onAllRemoved();
                }
              }
            }
          }), function (props, ref) {
            return children((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
              index: index
            }), ref);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(_ref3, _ref4) {
        var keys = _ref3.keys;
        var keyEntities = _ref4.keyEntities;
        var parsedKeyObjects = (0, _diff.parseKeys)(keys);
        var mixedKeyEntities = (0, _diff.diffKeys)(keyEntities, parsedKeyObjects);
        return {
          keyEntities: mixedKeyEntities.filter(function (entity) {
            var prevEntity = keyEntities.find(function (_ref5) {
              var key = _ref5.key;
              return entity.key === key;
            });

            // Remove if already mark as removed
            if (prevEntity && prevEntity.status === _diff.STATUS_REMOVED && entity.status === _diff.STATUS_REMOVE) {
              return false;
            }
            return true;
          })
        };
      }
    }]);
    return CSSMotionList;
  }(React.Component);
  (0, _defineProperty2.default)(CSSMotionList, "defaultProps", {
    component: 'div'
  });
  return CSSMotionList;
}
var _default = genCSSMotionList(_motion.supportTransition);
exports["default"] = _default;

/***/ }),

/***/ 45797:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DomWrapper = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DomWrapper, _React$Component);
  var _super = (0, _createSuper2.default)(DomWrapper);
  function DomWrapper() {
    (0, _classCallCheck2.default)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(React.Component);
var _default = DomWrapper;
exports["default"] = _default;

/***/ }),

/***/ 12970:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Context = void 0;
exports["default"] = MotionProvider;
var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(14498));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _excluded = ["children"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Context = /*#__PURE__*/React.createContext({});
exports.Context = Context;
function MotionProvider(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: props
  }, children);
}

/***/ }),

/***/ 14288:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _motion = __webpack_require__(85482);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = function _default(callback) {
  var cacheElementRef = (0, React.useRef)();

  // Cache callback
  var callbackRef = (0, React.useRef)(callback);
  callbackRef.current = callback;

  // Internal motion event handler
  var onInternalMotionEnd = React.useCallback(function (event) {
    callbackRef.current(event);
  }, []);

  // Remove events
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(_motion.transitionEndName, onInternalMotionEnd);
      element.removeEventListener(_motion.animationEndName, onInternalMotionEnd);
    }
  }

  // Patch events
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(_motion.transitionEndName, onInternalMotionEnd);
      element.addEventListener(_motion.animationEndName, onInternalMotionEnd);

      // Save as cache in case dom removed trigger by `motionDeadline`
      cacheElementRef.current = element;
    }
  }

  // Clean up when removed
  React.useEffect(function () {
    return function () {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};
exports["default"] = _default;

/***/ }),

/***/ 31533:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _react = __webpack_require__(18038);
// It's safe to use `useLayoutEffect` but the warning is annoying
var useIsomorphicLayoutEffect = (0, _canUseDom.default)() ? _react.useLayoutEffect : _react.useEffect;
var _default = useIsomorphicLayoutEffect;
exports["default"] = _default;

/***/ }),

/***/ 57133:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _raf = _interopRequireDefault(__webpack_require__(83884));
var React = _interopRequireWildcard(__webpack_require__(18038));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var _default = function _default() {
  var nextFrameRef = React.useRef(null);
  function cancelNextFrame() {
    _raf.default.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = (0, _raf.default)(function () {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};
exports["default"] = _default;

/***/ }),

/***/ 44583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useStatus;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(513));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _useState7 = _interopRequireDefault(__webpack_require__(21659));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _interface = __webpack_require__(85485);
var _useDomMotionEvents3 = _interopRequireDefault(__webpack_require__(14288));
var _useIsomorphicLayoutEffect = _interopRequireDefault(__webpack_require__(31533));
var _useStepQueue3 = _interopRequireWildcard(__webpack_require__(37413));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  // Used for outer render usage to avoid `visible: false & status: none` to render nothing
  var _useState = (0, _useState7.default)(),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useState3 = (0, _useState7.default)(_interface.STATUS_NONE),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = (0, _useState7.default)(null),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    style = _useState6[0],
    setStyle = _useState6[1];
  var mountedRef = (0, React.useRef)(false);
  var deadlineRef = (0, React.useRef)(null);

  // =========================== Dom Node ===========================
  function getDomElement() {
    return getElement();
  }

  // ========================== Motion End ==========================
  var activeRef = (0, React.useRef)(false);

  /**
   * Clean up status & style
   */
  function updateMotionEndStatus() {
    setStatus(_interface.STATUS_NONE, true);
    setStyle(null, true);
  }
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      // event exists
      // not initiated by deadline
      // transitionEnd not fired by inner elements
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === _interface.STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === _interface.STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === _interface.STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }

    // Only update status when `canEnd` and not destroyed
    if (status !== _interface.STATUS_NONE && currentActive && canEnd !== false) {
      updateMotionEndStatus();
    }
  }
  var _useDomMotionEvents = (0, _useDomMotionEvents3.default)(onInternalMotionEnd),
    _useDomMotionEvents2 = (0, _slicedToArray2.default)(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];

  // ============================= Step =============================
  var getEventHandlers = function getEventHandlers(targetStatus) {
    var _ref2, _ref3, _ref4;
    switch (targetStatus) {
      case _interface.STATUS_APPEAR:
        return _ref2 = {}, (0, _defineProperty2.default)(_ref2, _interface.STEP_PREPARE, onAppearPrepare), (0, _defineProperty2.default)(_ref2, _interface.STEP_START, onAppearStart), (0, _defineProperty2.default)(_ref2, _interface.STEP_ACTIVE, onAppearActive), _ref2;
      case _interface.STATUS_ENTER:
        return _ref3 = {}, (0, _defineProperty2.default)(_ref3, _interface.STEP_PREPARE, onEnterPrepare), (0, _defineProperty2.default)(_ref3, _interface.STEP_START, onEnterStart), (0, _defineProperty2.default)(_ref3, _interface.STEP_ACTIVE, onEnterActive), _ref3;
      case _interface.STATUS_LEAVE:
        return _ref4 = {}, (0, _defineProperty2.default)(_ref4, _interface.STEP_PREPARE, onLeavePrepare), (0, _defineProperty2.default)(_ref4, _interface.STEP_START, onLeaveStart), (0, _defineProperty2.default)(_ref4, _interface.STEP_ACTIVE, onLeaveActive), _ref4;
      default:
        return {};
    }
  };
  var eventHandlers = React.useMemo(function () {
    return getEventHandlers(status);
  }, [status]);
  var _useStepQueue = (0, _useStepQueue3.default)(status, !supportMotion, function (newStep) {
      // Only prepare step can be skip
      if (newStep === _interface.STEP_PREPARE) {
        var onPrepare = eventHandlers[_interface.STEP_PREPARE];
        if (!onPrepare) {
          return _useStepQueue3.SkipStep;
        }
        return onPrepare(getDomElement());
      }

      // Rest step is sync update
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
      }
      if (step === _interface.STEP_ACTIVE) {
        // Patch events when motion needed
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function () {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      if (step === _interface.STEP_PREPARED) {
        updateMotionEndStatus();
      }
      return _useStepQueue3.DoStep;
    }),
    _useStepQueue2 = (0, _slicedToArray2.default)(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = (0, _useStepQueue3.isActive)(step);
  activeRef.current = active;

  // ============================ Status ============================
  // Update with new status
  (0, _useIsomorphicLayoutEffect.default)(function () {
    setAsyncVisible(visible);
    var isMounted = mountedRef.current;
    mountedRef.current = true;

    // if (!supportMotion) {
    //   return;
    // }

    var nextStatus;

    // Appear
    if (!isMounted && visible && motionAppear) {
      nextStatus = _interface.STATUS_APPEAR;
    }

    // Enter
    if (isMounted && visible && motionEnter) {
      nextStatus = _interface.STATUS_ENTER;
    }

    // Leave
    if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
      nextStatus = _interface.STATUS_LEAVE;
    }
    var nextEventHandlers = getEventHandlers(nextStatus);

    // Update to next status
    if (nextStatus && (supportMotion || nextEventHandlers[_interface.STEP_PREPARE])) {
      setStatus(nextStatus);
      startStep();
    } else {
      // Set back in case no motion but prev status has prepare step
      setStatus(_interface.STATUS_NONE);
    }
  }, [visible]);

  // ============================ Effect ============================
  // Reset when motion changed
  (0, React.useEffect)(function () {
    if (
    // Cancel appear
    status === _interface.STATUS_APPEAR && !motionAppear ||
    // Cancel enter
    status === _interface.STATUS_ENTER && !motionEnter ||
    // Cancel leave
    status === _interface.STATUS_LEAVE && !motionLeave) {
      setStatus(_interface.STATUS_NONE);
    }
  }, [motionAppear, motionEnter, motionLeave]);
  (0, React.useEffect)(function () {
    return function () {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);

  // Trigger `onVisibleChanged`
  var firstMountChangeRef = React.useRef(false);
  (0, React.useEffect)(function () {
    // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
    if (asyncVisible) {
      firstMountChangeRef.current = true;
    }
    if (asyncVisible !== undefined && status === _interface.STATUS_NONE) {
      // Skip first render is invisible since it's nothing changed
      if (firstMountChangeRef.current || asyncVisible) {
        onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
      }
      firstMountChangeRef.current = true;
    }
  }, [asyncVisible, status]);

  // ============================ Styles ============================
  var mergedStyle = style;
  if (eventHandlers[_interface.STEP_PREPARE] && step === _interface.STEP_START) {
    mergedStyle = (0, _objectSpread2.default)({
      transition: 'none'
    }, mergedStyle);
  }
  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

/***/ }),

/***/ 37413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
var _typeof = __webpack_require__(67236);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.SkipStep = exports.DoStep = void 0;
exports.isActive = isActive;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _useState3 = _interopRequireDefault(__webpack_require__(21659));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _interface = __webpack_require__(85485);
var _useIsomorphicLayoutEffect = _interopRequireDefault(__webpack_require__(31533));
var _useNextFrame3 = _interopRequireDefault(__webpack_require__(57133));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FULL_STEP_QUEUE = [_interface.STEP_PREPARE, _interface.STEP_START, _interface.STEP_ACTIVE, _interface.STEP_ACTIVATED];
var SIMPLE_STEP_QUEUE = [_interface.STEP_PREPARE, _interface.STEP_PREPARED];

/** Skip current step */
var SkipStep = false;
/** Current step should be update in */
exports.SkipStep = SkipStep;
var DoStep = true;
exports.DoStep = DoStep;
function isActive(step) {
  return step === _interface.STEP_ACTIVE || step === _interface.STEP_ACTIVATED;
}
var _default = function _default(status, prepareOnly, callback) {
  var _useState = (0, _useState3.default)(_interface.STEP_NONE),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = (0, _useNextFrame3.default)(),
    _useNextFrame2 = (0, _slicedToArray2.default)(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(_interface.STEP_PREPARE, true);
  }
  var STEP_QUEUE = prepareOnly ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
  (0, _useIsomorphicLayoutEffect.default)(function () {
    if (step !== _interface.STEP_NONE && step !== _interface.STEP_ACTIVATED) {
      var index = STEP_QUEUE.indexOf(step);
      var nextStep = STEP_QUEUE[index + 1];
      var result = callback(step);
      if (result === SkipStep) {
        // Skip when no needed
        setStep(nextStep, true);
      } else if (nextStep) {
        // Do as frame for step update
        nextFrame(function (info) {
          function doNext() {
            // Skip since current queue is ood
            if (info.isCanceled()) return;
            setStep(nextStep, true);
          }
          if (result === true) {
            doNext();
          } else {
            // Only promise should be async
            Promise.resolve(result).then(doNext);
          }
        });
      }
    }
  }, [status, step]);
  React.useEffect(function () {
    return function () {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};
exports["default"] = _default;

/***/ }),

/***/ 54029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "CSSMotionList", ({
  enumerable: true,
  get: function get() {
    return _CSSMotionList.default;
  }
}));
Object.defineProperty(exports, "Provider", ({
  enumerable: true,
  get: function get() {
    return _context.default;
  }
}));
exports["default"] = void 0;
var _CSSMotion = _interopRequireDefault(__webpack_require__(2797));
var _CSSMotionList = _interopRequireDefault(__webpack_require__(1094));
var _context = _interopRequireDefault(__webpack_require__(12970));
var _default = _CSSMotion.default;
exports["default"] = _default;

/***/ }),

/***/ 85485:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.STEP_START = exports.STEP_PREPARED = exports.STEP_PREPARE = exports.STEP_NONE = exports.STEP_ACTIVE = exports.STEP_ACTIVATED = exports.STATUS_NONE = exports.STATUS_LEAVE = exports.STATUS_ENTER = exports.STATUS_APPEAR = void 0;
var STATUS_NONE = 'none';
exports.STATUS_NONE = STATUS_NONE;
var STATUS_APPEAR = 'appear';
exports.STATUS_APPEAR = STATUS_APPEAR;
var STATUS_ENTER = 'enter';
exports.STATUS_ENTER = STATUS_ENTER;
var STATUS_LEAVE = 'leave';
exports.STATUS_LEAVE = STATUS_LEAVE;
var STEP_NONE = 'none';
exports.STEP_NONE = STEP_NONE;
var STEP_PREPARE = 'prepare';
exports.STEP_PREPARE = STEP_PREPARE;
var STEP_START = 'start';
exports.STEP_START = STEP_START;
var STEP_ACTIVE = 'active';
exports.STEP_ACTIVE = STEP_ACTIVE;
var STEP_ACTIVATED = 'end';
/**
 * Used for disabled motion case.
 * Prepare stage will still work but start & active will be skipped.
 */
exports.STEP_ACTIVATED = STEP_ACTIVATED;
var STEP_PREPARED = 'prepared';
exports.STEP_PREPARED = STEP_PREPARED;

/***/ }),

/***/ 71148:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.STATUS_REMOVED = exports.STATUS_REMOVE = exports.STATUS_KEEP = exports.STATUS_ADD = void 0;
exports.diffKeys = diffKeys;
exports.parseKeys = parseKeys;
exports.wrapKeyToObject = wrapKeyToObject;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var STATUS_ADD = 'add';
exports.STATUS_ADD = STATUS_ADD;
var STATUS_KEEP = 'keep';
exports.STATUS_KEEP = STATUS_KEEP;
var STATUS_REMOVE = 'remove';
exports.STATUS_REMOVE = STATUS_REMOVE;
var STATUS_REMOVED = 'removed';
exports.STATUS_REMOVED = STATUS_REMOVED;
function wrapKeyToObject(key) {
  var keyObj;
  if (key && (0, _typeof2.default)(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key: key
    };
  }
  return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, keyObj), {}, {
    key: String(keyObj.key)
  });
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);

  // Check prev keys to insert or keep
  prevKeyObjects.forEach(function (keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        // New added keys should add before current key
        if (currentIndex < i) {
          list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, obj), {}, {
              status: STATUS_ADD
            });
          }));
          currentIndex = i;
        }
        list.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, currentKeyObj), {}, {
          status: STATUS_KEEP
        }));
        currentIndex += 1;
        hit = true;
        break;
      }
    }

    // If not hit, it means key is removed
    if (!hit) {
      list.push((0, _objectSpread2.default)((0, _objectSpread2.default)({}, keyObj), {}, {
        status: STATUS_REMOVE
      }));
    }
  });

  // Add rest to the list
  if (currentIndex < currentLen) {
    list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, obj), {}, {
        status: STATUS_ADD
      });
    }));
  }

  /**
   * Merge same key when it remove and add again:
   *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
   */
  var keys = {};
  list.forEach(function (_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function (key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function (matchKey) {
    // Remove `STATUS_REMOVE` node.
    list = list.filter(function (_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });

    // Update `STATUS_ADD` to `STATUS_KEEP`
    list.forEach(function (node) {
      if (node.key === matchKey) {
        // eslint-disable-next-line no-param-reassign
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

/***/ }),

/***/ 85482:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(92439);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.animationEndName = void 0;
exports.getTransitionName = getTransitionName;
exports.getVendorPrefixedEventName = getVendorPrefixedEventName;
exports.getVendorPrefixes = getVendorPrefixes;
exports.transitionEndName = exports.supportTransition = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
  prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
  prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
  prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes((0, _canUseDom.default)(), typeof window !== 'undefined' ? window : {});
var style = {};
if ((0, _canUseDom.default)()) {
  var _document$createEleme = document.createElement('div');
  style = _document$createEleme.style;
}
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
exports.supportTransition = supportTransition;
var animationEndName = internalAnimationEndName || 'animationend';
exports.animationEndName = animationEndName;
var transitionEndName = internalTransitionEndName || 'transitionend';
exports.transitionEndName = transitionEndName;
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if ((0, _typeof2.default)(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return "".concat(transitionName, "-").concat(transitionType);
}

/***/ }),

/***/ 54681:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var locale = {
  // Options
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: 'Page',
  // Pagination
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages',
  page_size: 'Page Size'
};
var _default = exports["default"] = locale;

/***/ }),

/***/ 71759:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'OK',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = exports["default"] = locale;

/***/ }),

/***/ 81207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Collection = Collection;
exports.CollectionContext = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var CollectionContext = exports.CollectionContext = /*#__PURE__*/React.createContext(null);
/**
 * Collect all the resize event from children ResizeObserver
 */
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React.useRef(0);
  var resizeInfosRef = React.useRef([]);
  var onCollectionResize = React.useContext(CollectionContext);
  var onResize = React.useCallback(function (size, element, data) {
    resizeIdRef.current += 1;
    var currentId = resizeIdRef.current;
    resizeInfosRef.current.push({
      size: size,
      element: element,
      data: data
    });
    Promise.resolve().then(function () {
      if (currentId === resizeIdRef.current) {
        onBatchResize === null || onBatchResize === void 0 || onBatchResize(resizeInfosRef.current);
        resizeInfosRef.current = [];
      }
    });

    // Continue bubbling if parent exist
    onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(size, element, data);
  }, [onBatchResize, onCollectionResize]);
  return /*#__PURE__*/React.createElement(CollectionContext.Provider, {
    value: onResize
  }, children);
}

/***/ }),

/***/ 55631:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(31456));
var _createClass2 = _interopRequireDefault(__webpack_require__(55282));
var _inherits2 = _interopRequireDefault(__webpack_require__(22261));
var _createSuper2 = _interopRequireDefault(__webpack_require__(62996));
var React = _interopRequireWildcard(__webpack_require__(18038));
/**
 * Fallback to findDOMNode if origin ref do not provide any dom element
 */
var DomWrapper = exports["default"] = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DomWrapper, _React$Component);
  var _super = (0, _createSuper2.default)(DomWrapper);
  function DomWrapper() {
    (0, _classCallCheck2.default)(this, DomWrapper);
    return _super.apply(this, arguments);
  }
  (0, _createClass2.default)(DomWrapper, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return DomWrapper;
}(React.Component);

/***/ }),

/***/ 77744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _findDOMNode = _interopRequireDefault(__webpack_require__(29321));
var _ref = __webpack_require__(310);
var React = _interopRequireWildcard(__webpack_require__(18038));
var _Collection = __webpack_require__(81207);
var _observerUtil = __webpack_require__(3493);
var _DomWrapper = _interopRequireDefault(__webpack_require__(55631));
function SingleObserver(props, ref) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = React.useRef(null);
  var wrapperRef = React.useRef(null);
  var onCollectionResize = React.useContext(_Collection.CollectionContext);

  // =========================== Children ===========================
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;

  // ============================= Size =============================
  var sizeRef = React.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });

  // ============================= Ref ==============================
  var canRef = !isRenderProps && /*#__PURE__*/React.isValidElement(mergedChildren) && (0, _ref.supportRef)(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = (0, _ref.useComposeRef)(originRef, elementRef);
  var getDom = function getDom() {
    var _elementRef$current;
    return (0, _findDOMNode.default)(elementRef.current) || (
    // Support `nativeElement` format
    elementRef.current && (0, _typeof2.default)(elementRef.current) === 'object' ? (0, _findDOMNode.default)((_elementRef$current = elementRef.current) === null || _elementRef$current === void 0 ? void 0 : _elementRef$current.nativeElement) : null) || (0, _findDOMNode.default)(wrapperRef.current);
  };
  React.useImperativeHandle(ref, function () {
    return getDom();
  });

  // =========================== Observe ============================
  var propsRef = React.useRef(props);
  propsRef.current = props;

  // Handler
  var onInternalResize = React.useCallback(function (target) {
    var _propsRef$current = propsRef.current,
      onResize = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (sizeRef.current.width !== fixedWidth || sizeRef.current.height !== fixedHeight || sizeRef.current.offsetWidth !== offsetWidth || sizeRef.current.offsetHeight !== offsetHeight) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth: offsetWidth,
        offsetHeight: offsetHeight
      };
      sizeRef.current = size;

      // IE is strange, right?
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, size), {}, {
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight
      });

      // Let collection know what happened
      onCollectionResize === null || onCollectionResize === void 0 || onCollectionResize(sizeInfo, target, data);
      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(function () {
          onResize(sizeInfo, target);
        });
      }
    }
  }, []);

  // Dynamic observe
  React.useEffect(function () {
    var currentElement = getDom();
    if (currentElement && !disabled) {
      (0, _observerUtil.observe)(currentElement, onInternalResize);
    }
    return function () {
      return (0, _observerUtil.unobserve)(currentElement, onInternalResize);
    };
  }, [elementRef.current, disabled]);

  // ============================ Render ============================
  return /*#__PURE__*/React.createElement(_DomWrapper.default, {
    ref: wrapperRef
  }, canRef ? /*#__PURE__*/React.cloneElement(mergedChildren, {
    ref: mergedRef
  }) : mergedChildren);
}
var RefSingleObserver = /*#__PURE__*/React.forwardRef(SingleObserver);
if (false) {}
var _default = exports["default"] = RefSingleObserver;

/***/ }),

/***/ 78922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "_rs", ({
  enumerable: true,
  get: function get() {
    return _observerUtil._rs;
  }
}));
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(43259));
var React = _interopRequireWildcard(__webpack_require__(18038));
var _toArray = _interopRequireDefault(__webpack_require__(87424));
var _warning = __webpack_require__(32038);
var _SingleObserver = _interopRequireDefault(__webpack_require__(77744));
var _Collection = __webpack_require__(81207);
var _observerUtil = __webpack_require__(3493);
var INTERNAL_PREFIX_KEY = 'rc-observer-key';
function ResizeObserver(props, ref) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : (0, _toArray.default)(children);
  if (false) {}
  return childNodes.map(function (child, index) {
    var key = (child === null || child === void 0 ? void 0 : child.key) || "".concat(INTERNAL_PREFIX_KEY, "-").concat(index);
    return /*#__PURE__*/React.createElement(_SingleObserver.default, (0, _extends2.default)({}, props, {
      key: key,
      ref: index === 0 ? ref : undefined
    }), child);
  });
}
var RefResizeObserver = /*#__PURE__*/React.forwardRef(ResizeObserver);
if (false) {}
RefResizeObserver.Collection = _Collection.Collection;
var _default = exports["default"] = RefResizeObserver;

/***/ }),

/***/ 3493:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports._rs = exports._el = void 0;
exports.observe = observe;
exports.unobserve = unobserve;
var _resizeObserverPolyfill = _interopRequireDefault(__webpack_require__(91759));
// =============================== Const ===============================
var elementListeners = new Map();
function onResize(entities) {
  entities.forEach(function (entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0 || _elementListeners$get.forEach(function (listener) {
      return listener(target);
    });
  });
}

// Note: ResizeObserver polyfill not support option to measure border-box resize
var resizeObserver = new _resizeObserverPolyfill.default(onResize);

// Dev env only
var _el = exports._el =  false ? 0 : null; // eslint-disable-line
var _rs = exports._rs =  false ? 0 : null; // eslint-disable-line

// ============================== Observe ==============================
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

/***/ }),

/***/ 87424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = toArray;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _reactIs = __webpack_require__(62189);
function toArray(children) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var ret = [];
  _react.default.Children.forEach(children, function (child) {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return;
    }
    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children, option));
    } else {
      ret.push(child);
    }
  });
  return ret;
}

/***/ }),

/***/ 6995:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = canUseDom;
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ 35613:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = contains;
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/***/ }),

/***/ 58296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.clearContainerCache = clearContainerCache;
exports.injectCSS = injectCSS;
exports.removeCSS = removeCSS;
exports.updateCSS = updateCSS;
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
var _contains = _interopRequireDefault(__webpack_require__(35613));
var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(0, _canUseDom.default)()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === 'prependQueue';
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function (node) {
        // Ignore style which not injected by rc-util with prepend
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        // Ignore style which priority less then new style
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !(0, _contains.default)(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option);

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

/***/ }),

/***/ 29321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = findDOMNode;
exports.isDOM = isDOM;
var _react = _interopRequireDefault(__webpack_require__(18038));
var _reactDom = _interopRequireDefault(__webpack_require__(98704));
function isDOM(node) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Element
  // Since XULElement is also subclass of Element, we only need HTMLElement and SVGElement
  return node instanceof HTMLElement || node instanceof SVGElement;
}

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (isDOM(node)) {
    return node;
  }
  if (node instanceof _react.default.Component) {
    return _reactDom.default.findDOMNode(node);
  }
  return null;
}

/***/ }),

/***/ 8703:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = function _default(element) {
  if (!element) {
    return false;
  }
  if (element instanceof Element) {
    if (element.offsetParent) {
      return true;
    }
    if (element.getBBox) {
      var _getBBox = element.getBBox(),
        width = _getBBox.width,
        height = _getBBox.height;
      if (width || height) {
        return true;
      }
    }
    if (element.getBoundingClientRect) {
      var _element$getBoundingC = element.getBoundingClientRect(),
        _width = _element$getBoundingC.width,
        _height = _element$getBoundingC.height;
      if (_width || _height) {
        return true;
      }
    }
  }
  return false;
};

/***/ }),

/***/ 43480:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getShadowRoot = getShadowRoot;
exports.inShadow = inShadow;
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

/***/ }),

/***/ 81390:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    var keyCode = e.keyCode;
    if (e.altKey && !e.ctrlKey || e.metaKey ||
    // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }

    // The following keys are quite harmless, even in combination with
    // CTRL, ALT or SHIFT.
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }

    // Safari sends zero key code for non-latin characters.
    if (window.navigator.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  }
};
var _default = exports["default"] = KeyCode;

/***/ }),

/***/ 61608:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = getScrollBarSize;
exports.getTargetScrollBarSize = getTargetScrollBarSize;
/* eslint-disable no-param-reassign */

var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

/***/ }),

/***/ 64301:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useEvent;
var React = _interopRequireWildcard(__webpack_require__(18038));
function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function () {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0 ? void 0 : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

/***/ }),

/***/ 81922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.resetUuid = resetUuid;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var React = _interopRequireWildcard(__webpack_require__(18038));
function getUseId() {
  // We need fully clone React function here to avoid webpack warning React 17 do not export `useId`
  var fullClone = (0, _objectSpread2.default)({}, React);
  return fullClone.useId;
}
var uuid = 0;

/** @private Note only worked in develop env. Not work in production. */
function resetUuid() {
  if (false) {}
}
var useOriginId = getUseId();
var _default = exports["default"] = useOriginId ?
// Use React `useId`
function useId(id) {
  var reactId = useOriginId();

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}
  return reactId;
} :
// Use compatible of `useId`
function useCompatId(id) {
  // Inner id for accessibility usage. Only work in client side
  var _React$useState = React.useState('ssr-id'),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React.useEffect(function () {
    var nextId = uuid;
    uuid += 1;
    setInnerId("rc_unique_".concat(nextId));
  }, []);

  // Developer passed id is single source of truth
  if (id) {
    return id;
  }

  // Test env always return mock id
  if (false) {}

  // Return react native id or inner id
  return innerId;
};

/***/ }),

/***/ 50368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useLayoutUpdateEffect = exports["default"] = void 0;
var React = _interopRequireWildcard(__webpack_require__(18038));
var _canUseDom = _interopRequireDefault(__webpack_require__(6995));
/**
 * Wrap `React.useLayoutEffect` which will not throw warning message in test env
 */
var useInternalLayoutEffect =  true && (0, _canUseDom.default)() ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect = function useLayoutEffect(callback, deps) {
  var firstMountRef = React.useRef(true);
  useInternalLayoutEffect(function () {
    return callback(firstMountRef.current);
  }, deps);

  // We tell react that first mount has passed
  useInternalLayoutEffect(function () {
    firstMountRef.current = false;
    return function () {
      firstMountRef.current = true;
    };
  }, []);
};
var useLayoutUpdateEffect = exports.useLayoutUpdateEffect = function useLayoutUpdateEffect(callback, deps) {
  useLayoutEffect(function (firstMount) {
    if (!firstMount) {
      return callback();
    }
  }, deps);
};
var _default = exports["default"] = useLayoutEffect;

/***/ }),

/***/ 33580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMemo;
var React = _interopRequireWildcard(__webpack_require__(18038));
function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

/***/ }),

/***/ 56146:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useMergedState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var _useEvent = _interopRequireDefault(__webpack_require__(64301));
var _useLayoutEffect = __webpack_require__(50368);
var _useState5 = _interopRequireDefault(__webpack_require__(21659));
/** We only think `undefined` is empty */
function hasValue(value) {
  return value !== undefined;
}

/**
 * Similar to `useState` but will use props value if provided.
 * Note that internal use rc-util `useState` hook.
 */
function useMergedState(defaultStateValue, option) {
  var _ref = option || {},
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    postState = _ref.postState;

  // ======================= Init =======================
  var _useState = (0, _useState5.default)(function () {
      if (hasValue(value)) {
        return value;
      } else if (hasValue(defaultValue)) {
        return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
      } else {
        return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
      }
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    innerValue = _useState2[0],
    setInnerValue = _useState2[1];
  var mergedValue = value !== undefined ? value : innerValue;
  var postMergedValue = postState ? postState(mergedValue) : mergedValue;

  // ====================== Change ======================
  var onChangeFn = (0, _useEvent.default)(onChange);
  var _useState3 = (0, _useState5.default)([mergedValue]),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    prevValue = _useState4[0],
    setPrevValue = _useState4[1];
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    var prev = prevValue[0];
    if (innerValue !== prev) {
      onChangeFn(innerValue, prev);
    }
  }, [prevValue]);

  // Sync value back to `undefined` when it from control to un-control
  (0, _useLayoutEffect.useLayoutUpdateEffect)(function () {
    if (!hasValue(value)) {
      setInnerValue(value);
    }
  }, [value]);

  // ====================== Update ======================
  var triggerChange = (0, _useEvent.default)(function (updater, ignoreDestroy) {
    setInnerValue(updater, ignoreDestroy);
    setPrevValue([mergedValue], ignoreDestroy);
  });
  return [postMergedValue, triggerChange];
}

/***/ }),

/***/ 21659:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireWildcard = (__webpack_require__(35876)["default"]);
var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = useSafeState;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(16522));
var React = _interopRequireWildcard(__webpack_require__(18038));
/**
 * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
 * We do not make this auto is to avoid real memory leak.
 * Developer should confirm it's safe to ignore themselves.
 */
function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function () {
    destroyRef.current = false;
    return function () {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

/***/ }),

/***/ 87844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "get", ({
  enumerable: true,
  get: function get() {
    return _get.default;
  }
}));
Object.defineProperty(exports, "set", ({
  enumerable: true,
  get: function get() {
    return _set.default;
  }
}));
Object.defineProperty(exports, "supportNodeRef", ({
  enumerable: true,
  get: function get() {
    return _ref.supportNodeRef;
  }
}));
Object.defineProperty(exports, "supportRef", ({
  enumerable: true,
  get: function get() {
    return _ref.supportRef;
  }
}));
Object.defineProperty(exports, "useComposeRef", ({
  enumerable: true,
  get: function get() {
    return _ref.useComposeRef;
  }
}));
Object.defineProperty(exports, "useEvent", ({
  enumerable: true,
  get: function get() {
    return _useEvent.default;
  }
}));
Object.defineProperty(exports, "useMergedState", ({
  enumerable: true,
  get: function get() {
    return _useMergedState.default;
  }
}));
Object.defineProperty(exports, "warning", ({
  enumerable: true,
  get: function get() {
    return _warning.default;
  }
}));
var _useEvent = _interopRequireDefault(__webpack_require__(64301));
var _useMergedState = _interopRequireDefault(__webpack_require__(56146));
var _ref = __webpack_require__(310);
var _get = _interopRequireDefault(__webpack_require__(42012));
var _set = _interopRequireDefault(__webpack_require__(44263));
var _warning = _interopRequireDefault(__webpack_require__(32038));

/***/ }),

/***/ 63303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _warning = _interopRequireDefault(__webpack_require__(32038));
/**
 * Deeply compares two object literals.
 * @param obj1 object 1
 * @param obj2 object 2
 * @param shallow shallow compare
 * @returns
 */
function isEqual(obj1, obj2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // https://github.com/mapbox/mapbox-gl-js/pull/5979/files#diff-fde7145050c47cc3a306856efd5f9c3016e86e859de9afbd02c879be5067e58f
  var refSet = new Set();
  function deepEqual(a, b) {
    var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var circular = refSet.has(a);
    (0, _warning.default)(!circular, 'Warning: There may be circular references');
    if (circular) {
      return false;
    }
    if (a === b) {
      return true;
    }
    if (shallow && level > 1) {
      return false;
    }
    refSet.add(a);
    var newLevel = level + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) {
        return false;
      }
      for (var i = 0; i < a.length; i++) {
        if (!deepEqual(a[i], b[i], newLevel)) {
          return false;
        }
      }
      return true;
    }
    if (a && b && (0, _typeof2.default)(a) === 'object' && (0, _typeof2.default)(b) === 'object') {
      var keys = Object.keys(a);
      if (keys.length !== Object.keys(b).length) {
        return false;
      }
      return keys.every(function (key) {
        return deepEqual(a[key], b[key], newLevel);
      });
    }
    // other
    return false;
  }
  return deepEqual(obj1, obj2);
}
var _default = exports["default"] = isEqual;

/***/ }),

/***/ 57213:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = function _default() {
  if (typeof navigator === 'undefined' || typeof window === 'undefined') {
    return false;
  }
  var agent = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(agent === null || agent === void 0 ? void 0 : agent.substr(0, 4));
};

/***/ }),

/***/ 63007:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = omit;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
function omit(obj, fields) {
  var clone = (0, _objectSpread2.default)({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function (key) {
      delete clone[key];
    });
  }
  return clone;
}

/***/ }),

/***/ 69392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = pickAttrs;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var attributes = "accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap";
var eventsName = "onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError";
var propList = "".concat(attributes, " ").concat(eventsName).split(/[\s\n]+/);

/* eslint-enable max-len */
var ariaPrefix = 'aria-';
var dataPrefix = 'data-';
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
/**
 * Picker props from exist props with filter
 * @param props Passed props
 * @param ariaOnly boolean | { aria?: boolean; data?: boolean; attr?: boolean; } filter config
 */
function pickAttrs(props) {
  var ariaOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = (0, _objectSpread2.default)({}, ariaOnly);
  }
  var attrs = {};
  Object.keys(props).forEach(function (key) {
    if (
    // Aria
    mergedConfig.aria && (key === 'role' || match(key, ariaPrefix)) ||
    // Data
    mergedConfig.data && match(key, dataPrefix) ||
    // Attr
    mergedConfig.attr && propList.includes(key)) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

/***/ }),

/***/ 83884:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var raf = function raf(callback) {
  return +setTimeout(callback, 16);
};
var caf = function caf(num) {
  return clearTimeout(num);
};
if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  raf = function raf(callback) {
    return window.requestAnimationFrame(callback);
  };
  caf = function caf(handle) {
    return window.cancelAnimationFrame(handle);
  };
}
var rafUUID = 0;
var rafIds = new Map();
function cleanup(id) {
  rafIds.delete(id);
}
var wrapperRaf = function wrapperRaf(callback) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  rafUUID += 1;
  var id = rafUUID;
  function callRef(leftTimes) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      var realId = raf(function () {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }
  callRef(times);
  return id;
};
wrapperRaf.cancel = function (id) {
  var realId = rafIds.get(id);
  cleanup(id);
  return caf(realId);
};
if (false) {}
var _default = exports["default"] = wrapperRaf;

/***/ }),

/***/ 310:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.composeRef = composeRef;
exports.fillRef = fillRef;
exports.supportNodeRef = supportNodeRef;
exports.supportRef = supportRef;
exports.useComposeRef = useComposeRef;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _react = __webpack_require__(18038);
var _reactIs = __webpack_require__(62189);
var _useMemo = _interopRequireDefault(__webpack_require__(33580));
/* eslint-disable no-param-reassign */

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0, _typeof2.default)(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

/**
 * Merge refs into one ref function to support ref passing.
 */
function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  var refList = refs.filter(function (ref) {
    return ref;
  });
  if (refList.length <= 1) {
    return refList[0];
  }
  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}
function useComposeRef() {
  for (var _len2 = arguments.length, refs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    refs[_key2] = arguments[_key2];
  }
  return (0, _useMemo.default)(function () {
    return composeRef.apply(void 0, refs);
  }, refs, function (prev, next) {
    return prev.length !== next.length || prev.every(function (ref, i) {
      return ref !== next[i];
    });
  });
}
function supportRef(nodeOrComponent) {
  var _type$prototype, _nodeOrComponent$prot;
  var type = (0, _reactIs.isMemo)(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type;

  // Function component node
  if (typeof type === 'function' && !((_type$prototype = type.prototype) !== null && _type$prototype !== void 0 && _type$prototype.render)) {
    return false;
  }

  // Class component
  if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) !== null && _nodeOrComponent$prot !== void 0 && _nodeOrComponent$prot.render)) {
    return false;
  }
  return true;
}
function supportNodeRef(node) {
  if (! /*#__PURE__*/(0, _react.isValidElement)(node)) {
    return false;
  }
  if ((0, _reactIs.isFragment)(node)) {
    return false;
  }
  return supportRef(node);
}
/* eslint-enable */

/***/ }),

/***/ 42012:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = get;
function get(entity, path) {
  var current = entity;
  for (var i = 0; i < path.length; i += 1) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[path[i]];
  }
  return current;
}

/***/ }),

/***/ 44263:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = (__webpack_require__(92439)["default"]);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = set;
exports.merge = merge;
var _typeof2 = _interopRequireDefault(__webpack_require__(67236));
var _objectSpread2 = _interopRequireDefault(__webpack_require__(89687));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(42798));
var _toArray2 = _interopRequireDefault(__webpack_require__(90641));
var _get = _interopRequireDefault(__webpack_require__(42012));
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = (0, _toArray2.default)(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = (0, _toConsumableArray2.default)(entity);
  } else {
    clone = (0, _objectSpread2.default)({}, entity);
  }

  // Delete prop if `removeIfUndefined` and value is undefined
  if (removeIfUndefined && value === undefined && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // Do nothing if `removeIfUndefined` and parent object not exist
  if (paths.length && removeIfUndefined && value === undefined && !(0, _get.default)(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}
function isObject(obj) {
  return (0, _typeof2.default)(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function createEmpty(source) {
  return Array.isArray(source) ? [] : {};
}
var keys = typeof Reflect === 'undefined' ? Object.keys : Reflect.ownKeys;

/**
 * Merge objects which will create
 */
function merge() {
  for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }
  var clone = createEmpty(sources[0]);
  sources.forEach(function (src) {
    function internalMerge(path, parentLoopSet) {
      var loopSet = new Set(parentLoopSet);
      var value = (0, _get.default)(src, path);
      var isArr = Array.isArray(value);
      if (isArr || isObject(value)) {
        // Only add not loop obj
        if (!loopSet.has(value)) {
          loopSet.add(value);
          var originValue = (0, _get.default)(clone, path);
          if (isArr) {
            // Array will always be override
            clone = set(clone, path, []);
          } else if (!originValue || (0, _typeof2.default)(originValue) !== 'object') {
            // Init container if not exist
            clone = set(clone, path, createEmpty(value));
          }
          keys(value).forEach(function (key) {
            internalMerge([].concat((0, _toConsumableArray2.default)(path), [key]), loopSet);
          });
        }
      } else {
        clone = set(clone, path, value);
      }
    }
    internalMerge([]);
  });
  return clone;
}

/***/ }),

/***/ 32038:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.call = call;
exports["default"] = void 0;
exports.note = note;
exports.noteOnce = noteOnce;
exports.preMessage = void 0;
exports.resetWarned = resetWarned;
exports.warning = warning;
exports.warningOnce = warningOnce;
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = exports.preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function note(valid, message) {
  // Support uglify
  if (false) { var finalMessage; }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var _default = exports["default"] = warningOnce;
/* eslint-enable */

/***/ }),

/***/ 32283:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 62189:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(32283);
} else {}


/***/ }),

/***/ 91759:
/***/ (function(module) {

(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () { 'use strict';

    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */
    /* eslint-disable require-jsdoc, valid-jsdoc */
    var MapShim = (function () {
        if (typeof Map !== 'undefined') {
            return Map;
        }
        /**
         * Returns index in provided array that matches the specified key.
         *
         * @param {Array<Array>} arr
         * @param {*} key
         * @returns {number}
         */
        function getIndex(arr, key) {
            var result = -1;
            arr.some(function (entry, index) {
                if (entry[0] === key) {
                    result = index;
                    return true;
                }
                return false;
            });
            return result;
        }
        return /** @class */ (function () {
            function class_1() {
                this.__entries__ = [];
            }
            Object.defineProperty(class_1.prototype, "size", {
                /**
                 * @returns {boolean}
                 */
                get: function () {
                    return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @param {*} key
             * @returns {*}
             */
            class_1.prototype.get = function (key) {
                var index = getIndex(this.__entries__, key);
                var entry = this.__entries__[index];
                return entry && entry[1];
            };
            /**
             * @param {*} key
             * @param {*} value
             * @returns {void}
             */
            class_1.prototype.set = function (key, value) {
                var index = getIndex(this.__entries__, key);
                if (~index) {
                    this.__entries__[index][1] = value;
                }
                else {
                    this.__entries__.push([key, value]);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.delete = function (key) {
                var entries = this.__entries__;
                var index = getIndex(entries, key);
                if (~index) {
                    entries.splice(index, 1);
                }
            };
            /**
             * @param {*} key
             * @returns {void}
             */
            class_1.prototype.has = function (key) {
                return !!~getIndex(this.__entries__, key);
            };
            /**
             * @returns {void}
             */
            class_1.prototype.clear = function () {
                this.__entries__.splice(0);
            };
            /**
             * @param {Function} callback
             * @param {*} [ctx=null]
             * @returns {void}
             */
            class_1.prototype.forEach = function (callback, ctx) {
                if (ctx === void 0) { ctx = null; }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                    var entry = _a[_i];
                    callback.call(ctx, entry[1], entry[0]);
                }
            };
            return class_1;
        }());
    })();

    /**
     * Detects whether window and document objects are available in current environment.
     */
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

    // Returns global object of a current environment.
    var global$1 = (function () {
        if (typeof global !== 'undefined' && global.Math === Math) {
            return global;
        }
        if (typeof self !== 'undefined' && self.Math === Math) {
            return self;
        }
        if (typeof window !== 'undefined' && window.Math === Math) {
            return window;
        }
        // eslint-disable-next-line no-new-func
        return Function('return this')();
    })();

    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */
    var requestAnimationFrame$1 = (function () {
        if (typeof requestAnimationFrame === 'function') {
            // It's required to use a bounded function because IE sometimes throws
            // an "Invalid calling object" error if rAF is invoked without the global
            // object on the left hand side.
            return requestAnimationFrame.bind(global$1);
        }
        return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
    })();

    // Defines minimum timeout before adding a trailing call.
    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */
    function throttle (callback, delay) {
        var leadingCall = false, trailingCall = false, lastCallTime = 0;
        /**
         * Invokes the original callback function and schedules new invocation if
         * the "proxy" was called during current request.
         *
         * @returns {void}
         */
        function resolvePending() {
            if (leadingCall) {
                leadingCall = false;
                callback();
            }
            if (trailingCall) {
                proxy();
            }
        }
        /**
         * Callback invoked after the specified delay. It will further postpone
         * invocation of the original function delegating it to the
         * requestAnimationFrame.
         *
         * @returns {void}
         */
        function timeoutCallback() {
            requestAnimationFrame$1(resolvePending);
        }
        /**
         * Schedules invocation of the original function.
         *
         * @returns {void}
         */
        function proxy() {
            var timeStamp = Date.now();
            if (leadingCall) {
                // Reject immediately following calls.
                if (timeStamp - lastCallTime < trailingTimeout) {
                    return;
                }
                // Schedule new call to be in invoked when the pending one is resolved.
                // This is important for "transitions" which never actually start
                // immediately so there is a chance that we might miss one if change
                // happens amids the pending invocation.
                trailingCall = true;
            }
            else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
            }
            lastCallTime = timeStamp;
        }
        return proxy;
    }

    // Minimum delay before invoking the update of observers.
    var REFRESH_DELAY = 20;
    // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.
    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];
    // Check if MutationObserver is available.
    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */
    var ResizeObserverController = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserverController.
         *
         * @private
         */
        function ResizeObserverController() {
            /**
             * Indicates whether DOM listeners have been added.
             *
             * @private {boolean}
             */
            this.connected_ = false;
            /**
             * Tells that controller has subscribed for Mutation Events.
             *
             * @private {boolean}
             */
            this.mutationEventsAdded_ = false;
            /**
             * Keeps reference to the instance of MutationObserver.
             *
             * @private {MutationObserver}
             */
            this.mutationsObserver_ = null;
            /**
             * A list of connected observers.
             *
             * @private {Array<ResizeObserverSPI>}
             */
            this.observers_ = [];
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
            this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
        }
        /**
         * Adds observer to observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be added.
         * @returns {void}
         */
        ResizeObserverController.prototype.addObserver = function (observer) {
            if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
            }
            // Add listeners if they haven't been added yet.
            if (!this.connected_) {
                this.connect_();
            }
        };
        /**
         * Removes observer from observers list.
         *
         * @param {ResizeObserverSPI} observer - Observer to be removed.
         * @returns {void}
         */
        ResizeObserverController.prototype.removeObserver = function (observer) {
            var observers = this.observers_;
            var index = observers.indexOf(observer);
            // Remove observer if it's present in registry.
            if (~index) {
                observers.splice(index, 1);
            }
            // Remove listeners if controller has no connected observers.
            if (!observers.length && this.connected_) {
                this.disconnect_();
            }
        };
        /**
         * Invokes the update of observers. It will continue running updates insofar
         * it detects changes.
         *
         * @returns {void}
         */
        ResizeObserverController.prototype.refresh = function () {
            var changesDetected = this.updateObservers_();
            // Continue running updates if changes have been detected as there might
            // be future ones caused by CSS transitions.
            if (changesDetected) {
                this.refresh();
            }
        };
        /**
         * Updates every observer from observers list and notifies them of queued
         * entries.
         *
         * @private
         * @returns {boolean} Returns "true" if any observer has detected changes in
         *      dimensions of it's elements.
         */
        ResizeObserverController.prototype.updateObservers_ = function () {
            // Collect observers that have active observations.
            var activeObservers = this.observers_.filter(function (observer) {
                return observer.gatherActive(), observer.hasActive();
            });
            // Deliver notifications in a separate cycle in order to avoid any
            // collisions between observers, e.g. when multiple instances of
            // ResizeObserver are tracking the same element and the callback of one
            // of them changes content dimensions of the observed target. Sometimes
            // this may result in notifications being blocked for the rest of observers.
            activeObservers.forEach(function (observer) { return observer.broadcastActive(); });
            return activeObservers.length > 0;
        };
        /**
         * Initializes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.connect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already added.
            if (!isBrowser || this.connected_) {
                return;
            }
            // Subscription to the "Transitionend" event is used as a workaround for
            // delayed transitions. This way it's possible to capture at least the
            // final state of an element.
            document.addEventListener('transitionend', this.onTransitionEnd_);
            window.addEventListener('resize', this.refresh);
            if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }
            else {
                document.addEventListener('DOMSubtreeModified', this.refresh);
                this.mutationEventsAdded_ = true;
            }
            this.connected_ = true;
        };
        /**
         * Removes DOM listeners.
         *
         * @private
         * @returns {void}
         */
        ResizeObserverController.prototype.disconnect_ = function () {
            // Do nothing if running in a non-browser environment or if listeners
            // have been already removed.
            if (!isBrowser || !this.connected_) {
                return;
            }
            document.removeEventListener('transitionend', this.onTransitionEnd_);
            window.removeEventListener('resize', this.refresh);
            if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
            }
            if (this.mutationEventsAdded_) {
                document.removeEventListener('DOMSubtreeModified', this.refresh);
            }
            this.mutationsObserver_ = null;
            this.mutationEventsAdded_ = false;
            this.connected_ = false;
        };
        /**
         * "Transitionend" event handler.
         *
         * @private
         * @param {TransitionEvent} event
         * @returns {void}
         */
        ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
            var _b = _a.propertyName, propertyName = _b === void 0 ? '' : _b;
            // Detect whether transition may affect dimensions of an element.
            var isReflowProperty = transitionKeys.some(function (key) {
                return !!~propertyName.indexOf(key);
            });
            if (isReflowProperty) {
                this.refresh();
            }
        };
        /**
         * Returns instance of the ResizeObserverController.
         *
         * @returns {ResizeObserverController}
         */
        ResizeObserverController.getInstance = function () {
            if (!this.instance_) {
                this.instance_ = new ResizeObserverController();
            }
            return this.instance_;
        };
        /**
         * Holds reference to the controller's instance.
         *
         * @private {ResizeObserverController}
         */
        ResizeObserverController.instance_ = null;
        return ResizeObserverController;
    }());

    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */
    var defineConfigurable = (function (target, props) {
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var key = _a[_i];
            Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
            });
        }
        return target;
    });

    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */
    var getWindowOf = (function (target) {
        // Assume that the element is an instance of Node, which means that it
        // has the "ownerDocument" property from which we can retrieve a
        // corresponding global object.
        var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
        // Return the local global object if it's not possible extract one from
        // provided element.
        return ownerGlobal || global$1;
    });

    // Placeholder of an empty content rectangle.
    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */
    function toFloat(value) {
        return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */
    function getBordersSize(styles) {
        var positions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positions[_i - 1] = arguments[_i];
        }
        return positions.reduce(function (size, position) {
            var value = styles['border-' + position + '-width'];
            return size + toFloat(value);
        }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */
    function getPaddings(styles) {
        var positions = ['top', 'right', 'bottom', 'left'];
        var paddings = {};
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            var value = styles['padding-' + position];
            paddings[position] = toFloat(value);
        }
        return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */
    function getSVGContentRect(target) {
        var bbox = target.getBBox();
        return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */
    function getHTMLElementContentRect(target) {
        // Client width & height properties can't be
        // used exclusively as they provide rounded values.
        var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
        // By this condition we can catch all non-replaced inline, hidden and
        // detached elements. Though elements with width & height properties less
        // than 0.5 will be discarded as well.
        //
        // Without it we would need to implement separate methods for each of
        // those cases and it's not possible to perform a precise and performance
        // effective test for hidden elements. E.g. even jQuery's ':visible' filter
        // gives wrong results for elements with width & height less than 0.5.
        if (!clientWidth && !clientHeight) {
            return emptyRect;
        }
        var styles = getWindowOf(target).getComputedStyle(target);
        var paddings = getPaddings(styles);
        var horizPad = paddings.left + paddings.right;
        var vertPad = paddings.top + paddings.bottom;
        // Computed styles of width & height are being used because they are the
        // only dimensions available to JS that contain non-rounded values. It could
        // be possible to utilize the getBoundingClientRect if only it's data wasn't
        // affected by CSS transformations let alone paddings, borders and scroll bars.
        var width = toFloat(styles.width), height = toFloat(styles.height);
        // Width & height include paddings and borders when the 'border-box' box
        // model is applied (except for IE).
        if (styles.boxSizing === 'border-box') {
            // Following conditions are required to handle Internet Explorer which
            // doesn't include paddings and borders to computed CSS dimensions.
            //
            // We can say that if CSS dimensions + paddings are equal to the "client"
            // properties then it's either IE, and thus we don't need to subtract
            // anything, or an element merely doesn't have paddings/borders styles.
            if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, 'left', 'right') + horizPad;
            }
            if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
            }
        }
        // Following steps can't be applied to the document's root element as its
        // client[Width/Height] properties represent viewport area of the window.
        // Besides, it's as well not necessary as the <html> itself neither has
        // rendered scroll bars nor it can be clipped.
        if (!isDocumentElement(target)) {
            // In some browsers (only in Firefox, actually) CSS width & height
            // include scroll bars size which can be removed at this step as scroll
            // bars are the only difference between rounded dimensions + paddings
            // and "client" properties, though that is not always true in Chrome.
            var vertScrollbar = Math.round(width + horizPad) - clientWidth;
            var horizScrollbar = Math.round(height + vertPad) - clientHeight;
            // Chrome has a rather weird rounding of "client" properties.
            // E.g. for an element with content width of 314.2px it sometimes gives
            // the client width of 315px and for the width of 314.7px it may give
            // 314px. And it doesn't happen all the time. So just ignore this delta
            // as a non-relevant.
            if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
            }
            if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
            }
        }
        return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    var isSVGGraphicsElement = (function () {
        // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
        // interface.
        if (typeof SVGGraphicsElement !== 'undefined') {
            return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
        }
        // If it's so, then check that element is at least an instance of the
        // SVGElement and that it has the "getBBox" method.
        // eslint-disable-next-line no-extra-parens
        return function (target) { return (target instanceof getWindowOf(target).SVGElement &&
            typeof target.getBBox === 'function'); };
    })();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */
    function isDocumentElement(target) {
        return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */
    function getContentRect(target) {
        if (!isBrowser) {
            return emptyRect;
        }
        if (isSVGGraphicsElement(target)) {
            return getSVGContentRect(target);
        }
        return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */
    function createReadOnlyRect(_a) {
        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        // If DOMRectReadOnly is available use it as a prototype for the rectangle.
        var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
        var rect = Object.create(Constr.prototype);
        // Rectangle's properties are not writable and non-enumerable.
        defineConfigurable(rect, {
            x: x, y: y, width: width, height: height,
            top: y,
            right: x + width,
            bottom: height + y,
            left: x
        });
        return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */
    function createRectInit(x, y, width, height) {
        return { x: x, y: y, width: width, height: height };
    }

    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */
    var ResizeObservation = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObservation.
         *
         * @param {Element} target - Element to be observed.
         */
        function ResizeObservation(target) {
            /**
             * Broadcasted width of content rectangle.
             *
             * @type {number}
             */
            this.broadcastWidth = 0;
            /**
             * Broadcasted height of content rectangle.
             *
             * @type {number}
             */
            this.broadcastHeight = 0;
            /**
             * Reference to the last observed content rectangle.
             *
             * @private {DOMRectInit}
             */
            this.contentRect_ = createRectInit(0, 0, 0, 0);
            this.target = target;
        }
        /**
         * Updates content rectangle and tells whether it's width or height properties
         * have changed since the last broadcast.
         *
         * @returns {boolean}
         */
        ResizeObservation.prototype.isActive = function () {
            var rect = getContentRect(this.target);
            this.contentRect_ = rect;
            return (rect.width !== this.broadcastWidth ||
                rect.height !== this.broadcastHeight);
        };
        /**
         * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
         * from the corresponding properties of the last observed content rectangle.
         *
         * @returns {DOMRectInit} Last observed content rectangle.
         */
        ResizeObservation.prototype.broadcastRect = function () {
            var rect = this.contentRect_;
            this.broadcastWidth = rect.width;
            this.broadcastHeight = rect.height;
            return rect;
        };
        return ResizeObservation;
    }());

    var ResizeObserverEntry = /** @class */ (function () {
        /**
         * Creates an instance of ResizeObserverEntry.
         *
         * @param {Element} target - Element that is being observed.
         * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
         */
        function ResizeObserverEntry(target, rectInit) {
            var contentRect = createReadOnlyRect(rectInit);
            // According to the specification following properties are not writable
            // and are also not enumerable in the native implementation.
            //
            // Property accessors are not being used as they'd require to define a
            // private WeakMap storage which may cause memory leaks in browsers that
            // don't support this type of collections.
            defineConfigurable(this, { target: target, contentRect: contentRect });
        }
        return ResizeObserverEntry;
    }());

    var ResizeObserverSPI = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback function that is invoked
         *      when one of the observed elements changes it's content dimensions.
         * @param {ResizeObserverController} controller - Controller instance which
         *      is responsible for the updates of observer.
         * @param {ResizeObserver} callbackCtx - Reference to the public
         *      ResizeObserver instance which will be passed to callback function.
         */
        function ResizeObserverSPI(callback, controller, callbackCtx) {
            /**
             * Collection of resize observations that have detected changes in dimensions
             * of elements.
             *
             * @private {Array<ResizeObservation>}
             */
            this.activeObservations_ = [];
            /**
             * Registry of the ResizeObservation instances.
             *
             * @private {Map<Element, ResizeObservation>}
             */
            this.observations_ = new MapShim();
            if (typeof callback !== 'function') {
                throw new TypeError('The callback provided as parameter 1 is not a function.');
            }
            this.callback_ = callback;
            this.controller_ = controller;
            this.callbackCtx_ = callbackCtx;
        }
        /**
         * Starts observing provided element.
         *
         * @param {Element} target - Element to be observed.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.observe = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is already being observed.
            if (observations.has(target)) {
                return;
            }
            observations.set(target, new ResizeObservation(target));
            this.controller_.addObserver(this);
            // Force the update of observations.
            this.controller_.refresh();
        };
        /**
         * Stops observing provided element.
         *
         * @param {Element} target - Element to stop observing.
         * @returns {void}
         */
        ResizeObserverSPI.prototype.unobserve = function (target) {
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            // Do nothing if current environment doesn't have the Element interface.
            if (typeof Element === 'undefined' || !(Element instanceof Object)) {
                return;
            }
            if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
            }
            var observations = this.observations_;
            // Do nothing if element is not being observed.
            if (!observations.has(target)) {
                return;
            }
            observations.delete(target);
            if (!observations.size) {
                this.controller_.removeObserver(this);
            }
        };
        /**
         * Stops observing all elements.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.disconnect = function () {
            this.clearActive();
            this.observations_.clear();
            this.controller_.removeObserver(this);
        };
        /**
         * Collects observation instances the associated element of which has changed
         * it's content rectangle.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.gatherActive = function () {
            var _this = this;
            this.clearActive();
            this.observations_.forEach(function (observation) {
                if (observation.isActive()) {
                    _this.activeObservations_.push(observation);
                }
            });
        };
        /**
         * Invokes initial callback function with a list of ResizeObserverEntry
         * instances collected from active resize observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.broadcastActive = function () {
            // Do nothing if observer doesn't have active observations.
            if (!this.hasActive()) {
                return;
            }
            var ctx = this.callbackCtx_;
            // Create ResizeObserverEntry instance for every active observation.
            var entries = this.activeObservations_.map(function (observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
            });
            this.callback_.call(ctx, entries, ctx);
            this.clearActive();
        };
        /**
         * Clears the collection of active observations.
         *
         * @returns {void}
         */
        ResizeObserverSPI.prototype.clearActive = function () {
            this.activeObservations_.splice(0);
        };
        /**
         * Tells whether observer has active observations.
         *
         * @returns {boolean}
         */
        ResizeObserverSPI.prototype.hasActive = function () {
            return this.activeObservations_.length > 0;
        };
        return ResizeObserverSPI;
    }());

    // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.
    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */
    var ResizeObserver = /** @class */ (function () {
        /**
         * Creates a new instance of ResizeObserver.
         *
         * @param {ResizeObserverCallback} callback - Callback that is invoked when
         *      dimensions of the observed elements change.
         */
        function ResizeObserver(callback) {
            if (!(this instanceof ResizeObserver)) {
                throw new TypeError('Cannot call a class as a function.');
            }
            if (!arguments.length) {
                throw new TypeError('1 argument required, but only 0 present.');
            }
            var controller = ResizeObserverController.getInstance();
            var observer = new ResizeObserverSPI(callback, controller, this);
            observers.set(this, observer);
        }
        return ResizeObserver;
    }());
    // Expose public methods of ResizeObserver.
    [
        'observe',
        'unobserve',
        'disconnect'
    ].forEach(function (method) {
        ResizeObserver.prototype[method] = function () {
            var _a;
            return (_a = observers.get(this))[method].apply(_a, arguments);
        };
    });

    var index = (function () {
        // Export existing implementation if available.
        if (typeof global$1.ResizeObserver !== 'undefined') {
            return global$1.ResizeObserver;
        }
        return ResizeObserver;
    })();

    return index;

})));


/***/ }),

/***/ 56836:
/***/ (function(__unused_webpack_module, exports) {

(function(e,r){ true?r(exports):0})(this,(function(e){"use strict";var r="-ms-";var a="-moz-";var c="-webkit-";var n="comm";var t="rule";var s="decl";var i="@page";var u="@media";var o="@import";var l="@charset";var f="@viewport";var p="@supports";var h="@document";var v="@namespace";var b="@keyframes";var d="@font-face";var w="@counter-style";var m="@font-feature-values";var g="@layer";var k=Math.abs;var $=String.fromCharCode;var x=Object.assign;function E(e,r){return M(e,0)^45?(((r<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function y(e){return e.trim()}function T(e,r){return(e=r.exec(e))?e[0]:e}function A(e,r,a){return e.replace(r,a)}function O(e,r,a){return e.indexOf(r,a)}function M(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function R(e){return e.length}function S(e){return e.length}function z(e,r){return r.push(e),e}function N(e,r){return e.map(r).join("")}function P(e,r){return e.filter((function(e){return!T(e,r)}))}e.line=1;e.column=1;e.length=0;e.position=0;e.character=0;e.characters="";function j(r,a,c,n,t,s,i,u){return{value:r,root:a,parent:c,type:n,props:t,children:s,line:e.line,column:e.column,length:i,return:"",siblings:u}}function U(e,r){return x(j("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function _(e){while(e.root)e=U(e.root,{children:[e]});z(e,e.siblings)}function F(){return e.character}function I(){e.character=e.position>0?M(e.characters,--e.position):0;if(e.column--,e.character===10)e.column=1,e.line--;return e.character}function L(){e.character=e.position<e.length?M(e.characters,e.position++):0;if(e.column++,e.character===10)e.column=1,e.line++;return e.character}function D(){return M(e.characters,e.position)}function Y(){return e.position}function K(r,a){return C(e.characters,r,a)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(r){return e.line=e.column=1,e.length=R(e.characters=r),e.position=0,[]}function B(r){return e.characters="",r}function G(r){return y(K(e.position-1,Q(r===91?r+2:r===40?r+1:r)))}function H(e){return B(q(W(e)))}function Z(r){while(e.character=D())if(e.character<33)L();else break;return V(r)>2||V(e.character)>3?"":" "}function q(r){while(L())switch(V(e.character)){case 0:z(ee(e.position-1),r);break;case 2:z(G(e.character),r);break;default:z($(e.character),r)}return r}function J(r,a){while(--a&&L())if(e.character<48||e.character>102||e.character>57&&e.character<65||e.character>70&&e.character<97)break;return K(r,Y()+(a<6&&D()==32&&L()==32))}function Q(r){while(L())switch(e.character){case r:return e.position;case 34:case 39:if(r!==34&&r!==39)Q(e.character);break;case 40:if(r===41)Q(r);break;case 92:L();break}return e.position}function X(r,a){while(L())if(r+e.character===47+10)break;else if(r+e.character===42+42&&D()===47)break;return"/*"+K(a,e.position-1)+"*"+$(r===47?r:L())}function ee(r){while(!V(D()))L();return K(r,e.position)}function re(e){return B(ae("",null,null,null,[""],e=W(e),0,[0],e))}function ae(e,r,a,c,n,t,s,i,u){var o=0;var l=0;var f=s;var p=0;var h=0;var v=0;var b=1;var d=1;var w=1;var m=0;var g="";var x=n;var E=t;var y=c;var T=g;while(d)switch(v=m,m=L()){case 40:if(v!=108&&M(T,f-1)==58){if(O(T+=A(G(m),"&","&\f"),"&\f",k(o?i[o-1]:0))!=-1)w=-1;break}case 34:case 39:case 91:T+=G(m);break;case 9:case 10:case 13:case 32:T+=Z(v);break;case 92:T+=J(Y()-1,7);continue;case 47:switch(D()){case 42:case 47:z(ne(X(L(),Y()),r,a,u),u);break;default:T+="/"}break;case 123*b:i[o++]=R(T)*w;case 125*b:case 59:case 0:switch(m){case 0:case 125:d=0;case 59+l:if(w==-1)T=A(T,/\f/g,"");if(h>0&&R(T)-f)z(h>32?te(T+";",c,a,f-1,u):te(A(T," ","")+";",c,a,f-2,u),u);break;case 59:T+=";";default:z(y=ce(T,r,a,o,l,n,i,g,x=[],E=[],f,t),t);if(m===123)if(l===0)ae(T,r,y,y,x,t,f,i,E);else switch(p===99&&M(T,3)===110?100:p){case 100:case 108:case 109:case 115:ae(e,y,y,c&&z(ce(e,y,y,0,0,n,i,g,n,x=[],f,E),E),n,E,f,i,c?x:E);break;default:ae(T,y,y,y,[""],E,0,i,E)}}o=l=h=0,b=w=1,g=T="",f=s;break;case 58:f=1+R(T),h=v;default:if(b<1)if(m==123)--b;else if(m==125&&b++==0&&I()==125)continue;switch(T+=$(m),m*b){case 38:w=l>0?1:(T+="\f",-1);break;case 44:i[o++]=(R(T)-1)*w,w=1;break;case 64:if(D()===45)T+=G(L());p=D(),l=f=R(g=T+=ee(Y())),m++;break;case 45:if(v===45&&R(T)==2)b=0}}return t}function ce(e,r,a,c,n,s,i,u,o,l,f,p){var h=n-1;var v=n===0?s:[""];var b=S(v);for(var d=0,w=0,m=0;d<c;++d)for(var g=0,$=C(e,h+1,h=k(w=i[d])),x=e;g<b;++g)if(x=y(w>0?v[g]+" "+$:A($,/&\f/g,v[g])))o[m++]=x;return j(e,r,a,n===0?t:u,o,l,f,p)}function ne(e,r,a,c){return j(e,r,a,n,$(F()),C(e,2,-2),0,c)}function te(e,r,a,c,n){return j(e,r,a,s,C(e,0,c),C(e,c+1,-1),c,n)}function se(e,n,t){switch(E(e,n)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+a+e+r+e+e;case 5936:switch(M(e,n+11)){case 114:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+r+e+e;case 6165:return c+e+r+"flex-"+e+e;case 5187:return c+e+A(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+r+"flex-$1$2")+e;case 5443:return c+e+r+"flex-item-"+A(e,/flex-|-self/g,"")+(!T(e,/flex-|baseline/)?r+"grid-row-"+A(e,/flex-|-self/g,""):"")+e;case 4675:return c+e+r+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+r+A(e,"shrink","negative")+e;case 5292:return c+e+r+A(e,"basis","preferred-size")+e;case 6060:return c+"box-"+A(e,"-grow","")+c+e+r+A(e,"grow","positive")+e;case 4554:return c+A(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,c+"$1"+"$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+r+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!T(e,/flex-|baseline/))return r+"grid-column-align"+C(e,n)+e;break;case 2592:case 3360:return r+A(e,"template-","")+e;case 4384:case 3616:if(t&&t.some((function(e,r){return n=r,T(e.props,/grid-\w+-end/)}))){return~O(e+(t=t[n].value),"span",0)?e:r+A(e,"-start","")+e+r+"grid-row-span:"+(~O(t,"span",0)?T(t,/\d+/):+T(t,/\d+/)-+T(e,/\d+/))+";"}return r+A(e,"-start","")+e;case 4896:case 4128:return t&&t.some((function(e){return T(e.props,/grid-\w+-start/)}))?e:r+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-n>6)switch(M(e,n+1)){case 109:if(M(e,n+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3"+"$1"+a+(M(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~O(e,"stretch",0)?se(A(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(a,c,n,t,s,i,u){return r+c+":"+n+u+(t?r+c+"-span:"+(s?i:+i-+n)+u:"")+e}));case 4949:if(M(e,n+6)===121)return A(e,":",":"+c)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(M(e,14)===45?"inline-":"")+"box$3"+"$1"+c+"$2$3"+"$1"+r+"$2box$3")+e;case 100:return A(e,":",":"+r)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function ie(e,r){var a="";for(var c=0;c<e.length;c++)a+=r(e[c],c,e,r)||"";return a}function ue(e,r,a,c){switch(e.type){case g:if(e.children.length)break;case o:case s:return e.return=e.return||e.value;case n:return"";case b:return e.return=e.value+"{"+ie(e.children,c)+"}";case t:if(!R(e.value=e.props.join(",")))return""}return R(a=ie(e.children,c))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=S(e);return function(a,c,n,t){var s="";for(var i=0;i<r;i++)s+=e[i](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r)}}function fe(e,n,i,u){if(e.length>-1)if(!e.return)switch(e.type){case s:e.return=se(e.value,e.length,i);return;case b:return ie([U(e,{value:A(e.value,"@","@"+c)})],u);case t:if(e.length)return N(i=e.props,(function(n){switch(T(n,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_(U(e,{props:[A(n,/:(read-\w+)/,":"+a+"$1")]}));_(U(e,{props:[n]}));x(e,{props:P(i,u)});break;case"::placeholder":_(U(e,{props:[A(n,/:(plac\w+)/,":"+c+"input-$1")]}));_(U(e,{props:[A(n,/:(plac\w+)/,":"+a+"$1")]}));_(U(e,{props:[A(n,/:(plac\w+)/,r+"input-$1")]}));_(U(e,{props:[n]}));x(e,{props:P(i,u)});break}return""}))}}function pe(e){switch(e.type){case t:e.props=e.props.map((function(r){return N(H(r),(function(r,a,c){switch(M(r,0)){case 12:return C(r,1,R(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+C(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return S(c)>1?"":r;case a=S(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}))}}e.CHARSET=l;e.COMMENT=n;e.COUNTER_STYLE=w;e.DECLARATION=s;e.DOCUMENT=h;e.FONT_FACE=d;e.FONT_FEATURE_VALUES=m;e.IMPORT=o;e.KEYFRAMES=b;e.LAYER=g;e.MEDIA=u;e.MOZ=a;e.MS=r;e.NAMESPACE=v;e.PAGE=i;e.RULESET=t;e.SUPPORTS=p;e.VIEWPORT=f;e.WEBKIT=c;e.abs=k;e.alloc=W;e.append=z;e.assign=x;e.caret=Y;e.char=F;e.charat=M;e.combine=N;e.comment=ne;e.commenter=X;e.compile=re;e.copy=U;e.dealloc=B;e.declaration=te;e.delimit=G;e.delimiter=Q;e.escaping=J;e.filter=P;e.from=$;e.hash=E;e.identifier=ee;e.indexof=O;e.lift=_;e.match=T;e.middleware=oe;e.namespace=pe;e.next=L;e.node=j;e.parse=ae;e.peek=D;e.prefix=se;e.prefixer=fe;e.prev=I;e.replace=A;e.ruleset=ce;e.rulesheet=le;e.serialize=ie;e.sizeof=S;e.slice=K;e.stringify=ue;e.strlen=R;e.substr=C;e.token=V;e.tokenize=H;e.tokenizer=q;e.trim=y;e.whitespace=Z;Object.defineProperty(e,"__esModule",{value:true})}));
//# sourceMappingURL=stylis.js.map


/***/ }),

/***/ 89025:
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11441:
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 23032:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(89025);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 49687:
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 82510:
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31456:
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 55282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(36651);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 62996:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getPrototypeOf = __webpack_require__(35091);
var isNativeReflectConstruct = __webpack_require__(53650);
var possibleConstructorReturn = __webpack_require__(7880);
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return possibleConstructorReturn(this, result);
  };
}
module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(36651);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 35091:
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22261:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(31540);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 35876:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(67236)["default"]);
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
    "default": e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n["default"] = e, t && t.set(e, n), n;
}
module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 53650:
/***/ ((module) => {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50226:
/***/ ((module) => {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 6506:
/***/ ((module) => {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 76874:
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 76235:
/***/ ((module) => {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 89687:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(513);
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(54845);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7880:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(67236)["default"]);
var assertThisInitialized = __webpack_require__(49687);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 23984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(67236)["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 31540:
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(11441);
var iterableToArrayLimit = __webpack_require__(6506);
var unsupportedIterableToArray = __webpack_require__(16563);
var nonIterableRest = __webpack_require__(76874);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 90641:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(11441);
var iterableToArray = __webpack_require__(50226);
var unsupportedIterableToArray = __webpack_require__(16563);
var nonIterableRest = __webpack_require__(76874);
function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}
module.exports = _toArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 42798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithoutHoles = __webpack_require__(23032);
var iterableToArray = __webpack_require__(50226);
var unsupportedIterableToArray = __webpack_require__(16563);
var nonIterableSpread = __webpack_require__(76235);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 49312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(67236)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 36651:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(67236)["default"]);
var toPrimitive = __webpack_require__(49312);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 67236:
/***/ ((module) => {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16563:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(89025);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 54641:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

};
;