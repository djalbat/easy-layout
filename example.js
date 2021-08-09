(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // node_modules/easy/lib/offset.js
  var require_offset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _classCallCheck(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _createClass(Offset2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        }
      ]);
      return Offset2;
    }();
    exports.default = Offset;
  });

  // node_modules/easy/lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, bottom, right) {
        _classCallCheck(this, Bounds2);
        this.top = top;
        this.left = left;
        this.bottom = bottom;
        this.right = right;
      }
      _createClass(Bounds2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        },
        {
          key: "getBottom",
          value: function getBottom() {
            return this.bottom;
          }
        },
        {
          key: "getRight",
          value: function getRight() {
            return this.right;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width = this.right - this.left;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var height = this.bottom - this.top;
            return height;
          }
        },
        {
          key: "setTop",
          value: function setTop(top) {
            this.top = top;
          }
        },
        {
          key: "setLeft",
          value: function setLeft(left) {
            this.left = left;
          }
        },
        {
          key: "setBottom",
          value: function setBottom(bottom) {
            this.bottom = bottom;
          }
        },
        {
          key: "setRight",
          value: function setRight(right) {
            this.right = right;
          }
        },
        {
          key: "shift",
          value: function shift(horizontalOffset, verticalOffset) {
            this.top += verticalOffset;
            this.left += horizontalOffset;
            this.bottom += verticalOffset;
            this.right += horizontalOffset;
          }
        },
        {
          key: "isOverlappingMouse",
          value: function isOverlappingMouse(mouseTop, mouseLeft) {
            return this.top <= mouseTop && this.left <= mouseLeft && this.right > mouseLeft && this.bottom > mouseTop;
          }
        },
        {
          key: "areOverlapping",
          value: function areOverlapping(bounds) {
            return this.top < bounds.bottom && this.left < bounds.right && this.right > bounds.left && this.bottom > bounds.top;
          }
        }
      ], [
        {
          key: "fromBoundingClientRect",
          value: function fromBoundingClientRect(boundingClientRect) {
            var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, right = boundingClientRect.right + windowScrollLeft, bounds = new Bounds2(top, left, bottom, right);
            return bounds;
          }
        },
        {
          key: "fromTopLeftWidthAndHeight",
          value: function fromTopLeftWidthAndHeight(top, left, width, height) {
            var bottom = top + height, right = left + width, bounds = new Bounds2(top, left, bottom, right);
            return bounds;
          }
        }
      ]);
      return Bounds2;
    }();
    exports.default = Bounds;
  });

  // node_modules/easy/lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combine = combine;
    exports.prune = prune;
    function combine(targetObject, param) {
      var sourceObject = param === void 0 ? {} : param;
      var sourceKeys = Object.keys(sourceObject);
      sourceKeys.forEach(function(sourceKey) {
        var targetProperty = targetObject[sourceKey], sourceProperty = sourceObject[sourceKey];
        targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
      });
    }
    function prune(targetObject, sourceKeys) {
      sourceKeys.forEach(function(sourceKey) {
        if (targetObject.hasOwnProperty(sourceKey)) {
          delete targetObject[sourceKey];
        }
      });
    }
  });

  // node_modules/easy/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.push = push;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    exports.augment = augment;
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function flatten(array) {
      return array.reduce(function(array1, element) {
        array1 = array1.concat(element);
        return array1;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
  });

  // node_modules/easy/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSVGTagName = isSVGTagName;
    exports.isSVGAttributeName = isSVGAttributeName;
    exports.isHTMLAttributeName = isHTMLAttributeName;
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // node_modules/easy/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_PROPERTIES = exports.BLOCK = exports.CLICK = exports.SPACE = exports.EMPTY_STRING = exports.BODY = exports.UNDEFINED = exports.MOUSEOUT = exports.DISPLAY = exports.OBJECT = exports.LEFT_MOUSE_BUTTON = exports.CLASS_NAME = exports.RIGHT_MOUSE_BUTTON = exports.TEXT_HTML = exports.CLASS = exports.WIDTH = exports.MIDDLE_MOUSE_BUTTON = exports.WILDCARD = exports.DISABLED = exports.HTML_FOR = exports.ABOUT_BLANK = exports.FUNCTION = exports.HEIGHT = exports.SVG_NAMESPACE_URI = exports.CHANGE = exports.KEYDOWN = exports.default = exports.KEYUP = exports.NONE = exports.MOUSEMOVE = exports.MOUSEDOWN = exports.MOUSEUP = exports.STRING = exports.RESIZE = exports.SCROLL = exports.FOR = exports.MOUSEOVER = exports.BOOLEAN = exports.IGNORED_PROPERTIES = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var BODY = "body";
    exports.BODY = BODY;
    var NONE = "none";
    exports.NONE = NONE;
    var SPACE = " ";
    exports.SPACE = SPACE;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var CLICK = "click";
    exports.CLICK = CLICK;
    var KEYUP = "keyup";
    exports.KEYUP = KEYUP;
    var WIDTH = "width";
    exports.WIDTH = WIDTH;
    var BLOCK = "block";
    exports.BLOCK = BLOCK;
    var HEIGHT = "height";
    exports.HEIGHT = HEIGHT;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var CHANGE = "change";
    exports.CHANGE = CHANGE;
    var RESIZE = "resize";
    exports.RESIZE = RESIZE;
    var SCROLL = "scroll";
    exports.SCROLL = SCROLL;
    var STRING = "string";
    exports.STRING = STRING;
    var DISPLAY = "display";
    exports.DISPLAY = DISPLAY;
    var KEYDOWN = "keydown";
    exports.KEYDOWN = KEYDOWN;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var MOUSEUP = "mouseup";
    exports.MOUSEUP = MOUSEUP;
    var DISABLED = "disabled";
    exports.DISABLED = DISABLED;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var WILDCARD = "*";
    exports.WILDCARD = WILDCARD;
    var MOUSEOUT = "mouseout";
    exports.MOUSEOUT = MOUSEOUT;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var UNDEFINED = "undefined";
    exports.UNDEFINED = UNDEFINED;
    var MOUSEOVER = "mouseover";
    exports.MOUSEOVER = MOUSEOVER;
    var MOUSEDOWN = "mousedown";
    exports.MOUSEDOWN = MOUSEDOWN;
    var MOUSEMOVE = "mousemove";
    exports.MOUSEMOVE = MOUSEMOVE;
    var TEXT_HTML = "text/html";
    exports.TEXT_HTML = TEXT_HTML;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var ABOUT_BLANK = "about:blank";
    exports.ABOUT_BLANK = ABOUT_BLANK;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
    var DEFAULT_PROPERTIES = "defaultProperties";
    exports.DEFAULT_PROPERTIES = DEFAULT_PROPERTIES;
    var IGNORED_PROPERTIES = "ignoredProperties";
    exports.IGNORED_PROPERTIES = IGNORED_PROPERTIES;
    var LEFT_MOUSE_BUTTON = 0;
    exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
    var RIGHT_MOUSE_BUTTON = 2;
    exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
    var MIDDLE_MOUSE_BUTTON = 1;
    exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementsFromDOMElements = elementsFromDOMElements;
    exports.ascendantDOMNodesFromDOMNode = ascendantDOMNodesFromDOMNode;
    exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
    exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
    exports.domNodeMatchesSelector = domNodeMatchesSelector;
    exports.filterDOMNodes = filterDOMNodes;
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== void 0;
      }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
      });
      return elements;
    }
    function ascendantDOMNodesFromDOMNode(domNode, height, param) {
      var ascendantDOMNodes = param === void 0 ? [] : param;
      if (height > 0) {
        var parentDOMNode = domNode.parentElement;
        if (parentDOMNode !== null) {
          ascendantDOMNodes.push(parentDOMNode);
          height--;
          ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
      }
      return ascendantDOMNodes;
    }
    function descendantDOMNodesFromDOMNode(domNode, depth, param) {
      var descendantDOMNodes = param === void 0 ? [] : param;
      if (depth > 0) {
        var childDOMNodes = domNode.childNodes;
        (0, _array).push(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach(function(childDOMNode) {
          return descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        return domNodeMatchesSelector(domNode, selector);
      });
      return filteredDOMNodes;
    }
    function domNodeMatchesSelector(domNode, selector) {
      var domNodeType = domNode.nodeType;
      switch (domNodeType) {
        case Node.ELEMENT_NODE: {
          var domElement = domNode;
          return domElement.matches(selector);
        }
        case Node.TEXT_NODE: {
          if (selector === _constants.WILDCARD) {
            return true;
          }
        }
      }
      return false;
    }
    function filterDOMNodes(domNodes, test) {
      var filteredDOMNodes = [], domNodesLength = domNodes.length;
      for (var index = 0; index < domNodesLength; index++) {
        var domNode = domNodes[index], result = test(domNode);
        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }
      return filteredDOMNodes;
    }
  });

  // node_modules/easy/lib/mixins/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom).elementsFromDOMElements(parentDOMElements), firstParentElement = (0, _array).first(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom).filterDOMNodesBySelector(childDOMNodes, selector), childElements = (0, _dom).elementsFromDOMElements(childDOMElements);
      return childElements;
    }
    function getAscendantElements(param, param1) {
      var selector = param === void 0 ? _constants.WILDCARD : param, height = param1 === void 0 ? Infinity : param1;
      var domNode = this.domElement, ascendantDOMNodes = (0, _dom).ascendantDOMNodesFromDOMNode(domNode, height), ascendantDOMElements = (0, _dom).filterDOMNodesBySelector(ascendantDOMNodes, selector), ascendantElements = (0, _dom).elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements(param, param1) {
      var selector = param === void 0 ? _constants.WILDCARD : param, depth = param1 === void 0 ? Infinity : param1;
      var domNode = this.domElement, descendantDOMNodes = (0, _dom).descendantDOMNodesFromDOMNode(domNode, depth), descendantDOMElements = (0, _dom).filterDOMNodesBySelector(descendantDOMNodes, selector), descendantElements = (0, _dom).elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement(param) {
      var selector = param === void 0 ? _constants.WILDCARD : param;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }
      return previousSiblingElement;
    }
    var elementMixins = {
      getParentElement,
      getChildElements,
      getAscendantElements,
      getDescendantElements,
      getNextSiblingElement,
      getPreviousSiblingElement
    };
    var _default = elementMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _element = _interopRequireDefault2(require_element());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _classCallCheck(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _createClass(TextElement2, [
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var clientWidth = this.domElement.clientWidth, width = clientWidth;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var clientHeight = this.domElement.clientHeight, height = clientHeight;
            return height;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "remove",
          value: function remove() {
            this.domElement.remove();
          }
        }
      ]);
      return TextElement2;
    }();
    Object.assign(TextElement.prototype, _element.default);
    var _default = TextElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeFalseyElements = removeFalseyElements;
    exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
    var _textElement = _interopRequireDefault2(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyElements(elements) {
      elements = elements.reduce(function(elements1, element) {
        if (element) {
          elements1.push(element);
        }
        return elements1;
      }, []);
      return elements;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map(function(element) {
        if (_typeof(element) === _constants.STRING) {
          var text = element, textElement = new _textElement.default(text);
          element = textElement;
        }
        return element;
      });
      return elements;
    }
  });

  // node_modules/easy/lib/mixins/jsx.js
  var require_jsx = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _object = require_object();
    var _array = require_array();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      this.properties = properties;
      properties = Object.assign({}, properties);
      (0, _object).combine(properties, defaultProperties);
      var childElements = childElementsFromElement(this) || properties.childElements;
      (0, _object).prune(properties, ignoredProperties);
      var _domElement = this.domElement, namespaceURI = _domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, names = Object.keys(properties);
      names.forEach(function(name) {
        var value = properties[name];
        if (false) {
        } else if (isHandlerName(name)) {
          addHandler(this, name, value);
        } else if (isAttributeName(name, svg)) {
          addAttribute(this, name, value);
        } else {
        }
      }.bind(this));
      var context = {};
      childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        this.add(childElement);
      }.bind(this));
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names, thenDelete) {
      var argumentsLength = arguments.length;
      if (argumentsLength === 1) {
        var firstArgument = (0, _array).first(arguments);
        if (_typeof(firstArgument) === _constants.BOOLEAN) {
          names = Object.keys(this.context);
          thenDelete = firstArgument;
        } else {
          thenDelete = true;
        }
      }
      if (argumentsLength === 0) {
        names = Object.keys(this.context);
        thenDelete = true;
      }
      names.forEach(function(name) {
        var value = this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(this, propertyName, descriptor);
        if (thenDelete) {
          delete this.context[name];
        }
      }.bind(this), []);
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    exports.default = _default;
    function childElementsFromElement(element) {
      var childElements = null;
      if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array).guarantee(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _typeof(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      var eventType = name.substr(2).toLowerCase(), handler = value;
      element.on(eventType, handler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if (_typeof(value) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if (_typeof(value) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isHandlerName(name) {
      return name.match(/^on/);
    }
    function isAttributeName(name, svg) {
      return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
    }
  });

  // node_modules/easy/lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onKeyUp(keyUpHandler, element) {
      this.on(_constants.KEYUP, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.off(_constants.KEYUP, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.on(_constants.KEYDOWN, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.off(_constants.KEYDOWN, keyDownHandler, element);
    }
    var keyMixins = {
      onKeyUp,
      offKeyUp,
      onKeyDown,
      offKeyDown
    };
    var _default = keyMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onClick(clickHandler, element) {
      this.on(_constants.CLICK, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_constants.CLICK, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick
    };
    var _default = clickMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function getState() {
      return this.state;
    }
    function setState(state) {
      this.state = state;
    }
    function updateState(state) {
      Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onResize = onResize;
    exports.offResize = offResize;
    exports.default = void 0;
    var _constants = require_constants();
    function onResize(resizeHandler, element) {
      this.on(_constants.RESIZE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.off(_constants.RESIZE, resizeHandler, element);
    }
    function addResizeObject() {
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _constants.TEXT_HTML;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        return resizeObjectLoadHandler(this);
      }.bind(this);
      this.domElement.appendChild(resizeObject);
    }
    function removeResizeObject() {
      var resizeObject = this.__resizeObject__, objectWindow = resizeObject.contentDocument.defaultView;
      objectWindow.removeEventListener(_constants.RESIZE, resizeEventListener);
      this.domElement.removeChild(resizeObject);
      delete this.__resizeObject__;
    }
    var resizeMixins = {
      onResize,
      offResize,
      addResizeObject,
      removeResizeObject
    };
    var _default = resizeMixins;
    exports.default = _default;
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_constants.RESIZE, function(event) {
        var resizeEventListeners = element.findEventListeners(_constants.RESIZE);
        resizeEventListeners.forEach(function(resizeEventListener2) {
          return resizeEventListener2(event);
        });
      });
    }
  });

  // node_modules/easy/lib/mixins/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _resize = require_resize();
    function on(eventTypes, handler, element) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _constants.RESIZE) {
          var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            this.addResizeObject();
          }
        }
        var eventListener = this.addEventListener(eventType, handler, element);
        this.domElement.addEventListener(eventType, eventListener);
      }.bind(this));
    }
    function off(eventTypes, handler, element) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = this.removeEventListener(eventType, handler, element);
        this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _constants.RESIZE) {
          var resizeEventListeners = this.findEventListeners(_constants.RESIZE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            (0, _resize).removeResizeObject(this);
          }
        }
      }.bind(this));
    }
    function addEventListener(eventType, handler, param) {
      var element = param === void 0 ? this : param;
      if (this.eventListeners === void 0) {
        this.eventListeners = [];
      }
      var eventListener = createEventListener(eventType, handler, element);
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, param) {
      var element = param === void 0 ? this : param;
      var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      var eventListener = this.eventListeners.find(function(eventListener1) {
        var found = eventListener1.element === element && eventListener1.handler === handler && eventListener1.eventType === eventType;
        if (found) {
          return true;
        }
      });
      return eventListener;
    }
    function findEventListeners(eventType) {
      var eventListeners = [];
      if (this.eventListeners !== void 0) {
        this.eventListeners.forEach(function(eventListener) {
          var found = eventListener.eventType === eventType;
          if (found) {
            eventListeners.push(eventListener);
          }
        });
      }
      return eventListeners;
    }
    function createEventListener(eventType, handler, element) {
      var eventListener;
      eventListener = function(event) {
        handler.call(element, event, element);
      };
      Object.assign(eventListener, {
        element,
        handler,
        eventType
      });
      return eventListener;
    }
    var eventMixins = {
      on,
      off,
      addEventListener,
      removeEventListener,
      findEventListener,
      findEventListeners
    };
    var _default = eventMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onMouseUp(mouseUpHandler, element) {
      this.on(_constants.MOUSEUP, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.off(_constants.MOUSEUP, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.on(_constants.MOUSEOUT, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.off(_constants.MOUSEOUT, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.on(_constants.MOUSEDOWN, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.off(_constants.MOUSEDOWN, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.on(_constants.MOUSEOVER, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.off(_constants.MOUSEOVER, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.on(_constants.MOUSEMOVE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.off(_constants.MOUSEMOVE, mouseMoveHandler, element);
    }
    var mouseMixins = {
      onMouseUp,
      offMouseUp,
      onMouseOut,
      offMouseOut,
      onMouseDown,
      offMouseDown,
      onMouseOver,
      offMouseOver,
      onMouseMove,
      offMouseMove
    };
    var _default = mouseMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onScroll(scrollHandler, element) {
      this.on(_constants.SCROLL, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.off(_constants.SCROLL, scrollHandler, element);
    }
    function getScrollTop() {
      return this.domElement.scrollTop;
    }
    function getScrollLeft() {
      return this.domElement.scrollLeft;
    }
    function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
    function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
    var scrollMixins = {
      onScroll,
      offScroll,
      getScrollTop,
      getScrollLeft,
      setScrollTop,
      setScrollLeft
    };
    var _default = scrollMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _jsx = _interopRequireDefault2(require_jsx());
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _state = _interopRequireDefault2(require_state());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _resize = _interopRequireDefault2(require_resize());
    var _scroll = _interopRequireDefault2(require_scroll());
    var _element = _interopRequireDefault2(require_element());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _constants = require_constants();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _bind;
    var Element1 = /* @__PURE__ */ function() {
      function Element12(selector) {
        _classCallCheck(this, Element12);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _createClass(Element12, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth(param) {
            var includeBorder = param === void 0 ? true : param;
            var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
            return width;
          }
        },
        {
          key: "setWidth",
          value: function setWidth(width) {
            width = "".concat(width, "px");
            this.style(_constants.WIDTH, width);
          }
        },
        {
          key: "getHeight",
          value: function getHeight(param) {
            var includeBorder = param === void 0 ? true : param;
            var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
            return height;
          }
        },
        {
          key: "setHeight",
          value: function setHeight(height) {
            height = "".concat(height, "px");
            this.style(_constants.HEIGHT, height);
          }
        },
        {
          key: "hasAttribute",
          value: function hasAttribute(name) {
            return this.domElement.hasAttribute(name);
          }
        },
        {
          key: "getAttribute",
          value: function getAttribute(name) {
            return this.domElement.getAttribute(name);
          }
        },
        {
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.domElement.setAttribute(name, value);
          }
        },
        {
          key: "clearAttribute",
          value: function clearAttribute(name) {
            this.domElement.removeAttribute(name);
          }
        },
        {
          key: "addAttribute",
          value: function addAttribute(name, value) {
            this.setAttribute(name, value);
          }
        },
        {
          key: "removeAttribute",
          value: function removeAttribute(name) {
            this.clearAttribute(name);
          }
        },
        {
          key: "setClass",
          value: function setClass(className) {
            this.domElement.className = className;
          }
        },
        {
          key: "addClass",
          value: function addClass(className) {
            this.domElement.classList.add(className);
          }
        },
        {
          key: "removeClass",
          value: function removeClass(className) {
            this.domElement.classList.remove(className);
          }
        },
        {
          key: "toggleClass",
          value: function toggleClass(className) {
            this.domElement.classList.toggle(className);
          }
        },
        {
          key: "hasClass",
          value: function hasClass(className) {
            return this.domElement.classList.contains(className);
          }
        },
        {
          key: "clearClasses",
          value: function clearClasses() {
            this.domElement.className = _constants.EMPTY_STRING;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "prepend",
          value: function prepend(element) {
            var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild;
            this.domElement.insertBefore(domElement, firstChildDOMElement);
          }
        },
        {
          key: "append",
          value: function append(element) {
            var domElement = element.domElement;
            this.domElement.insertBefore(domElement, null);
          }
        },
        {
          key: "add",
          value: function add(element) {
            this.append(element);
          }
        },
        {
          key: "remove",
          value: function remove(element) {
            if (element) {
              var domElement = element.domElement;
              this.domElement.removeChild(domElement);
            } else {
              this.domElement.remove();
            }
          }
        },
        {
          key: "mount",
          value: function mount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.reverse();
            this.add(element);
            elements.forEach(function(element1) {
              return element1.didMount && element1.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element1) {
              return element1.willUnmount && element1.willUnmount();
            });
            this.remove(element);
          }
        },
        {
          key: "show",
          value: function show(param) {
            var displayStyle = param === void 0 ? _constants.BLOCK : param;
            this.display(displayStyle);
          }
        },
        {
          key: "hide",
          value: function hide() {
            this.style(_constants.DISPLAY, _constants.NONE);
          }
        },
        {
          key: "display",
          value: function display(display1) {
            this.style(_constants.DISPLAY, display1);
          }
        },
        {
          key: "enable",
          value: function enable() {
            this.clearAttribute(_constants.DISABLED);
          }
        },
        {
          key: "disable",
          value: function disable() {
            this.setAttribute(_constants.DISABLED, _constants.DISABLED);
          }
        },
        {
          key: "isEnabled",
          value: function isEnabled() {
            var disabled = this.isDisabled(), enabled = !disabled;
            return enabled;
          }
        },
        {
          key: "isDisabled",
          value: function isDisabled() {
            var disabled = this.hasAttribute(_constants.DISABLED);
            return disabled;
          }
        },
        {
          key: "isDisplayed",
          value: function isDisplayed() {
            var display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
            return displayed;
          }
        },
        {
          key: "isShowing",
          value: function isShowing() {
            var displayed = this.isDisplayed(), showing = displayed;
            return showing;
          }
        },
        {
          key: "isHidden",
          value: function isHidden() {
            var displayed = this.isDisplayed(), hidden = !displayed;
            return hidden;
          }
        },
        {
          key: "style",
          value: function style(name, value) {
            if (value !== void 0) {
              this.domElement.style[name] = value;
            } else {
              var style1 = this.domElement.style[name];
              return style1;
            }
          }
        },
        {
          key: "html",
          value: function html(html1) {
            if (html1 === void 0) {
              var innerHTML = this.domElement.innerHTML;
              html1 = innerHTML;
              return html1;
            } else {
              var innerHTML = html1;
              this.domElement.innerHTML = innerHTML;
            }
          }
        },
        {
          key: "css",
          value: function css(css1) {
            if (css1 === void 0) {
              var computedStyle = getComputedStyle(this.domElement), css2 = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                css2[name] = value;
              }
              return css2;
            } else if (_typeof(css1) === _constants.STRING) {
              var name = css1;
              var computedStyle = getComputedStyle(this.domElement), value = computedStyle.getPropertyValue(name);
              css1 = value;
              return css1;
            } else {
              var names = Object.keys(css1);
              names.forEach(function(name2) {
                var value2 = css1[name2];
                this.style(name2, value2);
              }.bind(this));
            }
          }
        },
        {
          key: "blur",
          value: function blur() {
            this.domElement.blur();
          }
        },
        {
          key: "focus",
          value: function focus() {
            this.domElement.focus();
          }
        },
        {
          key: "hasFocus",
          value: function hasFocus() {
            var focus = document.activeElement === this.domElement;
            return focus;
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var tagName = Class.tagName, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        },
        {
          key: "fromTagName",
          value: function fromTagName(tagName, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var Class = Element12, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        }
      ]);
      return Element12;
    }();
    Object.assign(Element1.prototype, _jsx.default);
    Object.assign(Element1.prototype, _key.default);
    Object.assign(Element1.prototype, _click.default);
    Object.assign(Element1.prototype, _state.default);
    Object.assign(Element1.prototype, _event.default);
    Object.assign(Element1.prototype, _mouse.default);
    Object.assign(Element1.prototype, _resize.default);
    Object.assign(Element1.prototype, _scroll.default);
    Object.assign(Element1.prototype, _element.default);
    var _default = Element1;
    exports.default = _default;
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
        remainingArguments[_key1 - 2] = arguments[_key1];
      }
      var selector = null, element = new ((_bind = Function.prototype.bind).call.apply(_bind, [
        Class,
        null,
        selector
      ].concat(_toConsumableArray(remainingArguments))))();
      element.domElement = (0, _name).isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class, param) {
      var defaultProperties = param === void 0 ? {} : param;
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class, param) {
      var ignoredProperties = param === void 0 ? [] : param;
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
          return !ignoredProperties.includes(ignoredProperty);
        });
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        ignoredPropertiesFromClass(superClass, ignoredProperties);
      }
      return ignoredProperties;
    }
  });

  // node_modules/easy/lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Body = /* @__PURE__ */ function(Element1) {
      _inherits(Body2, Element1);
      function Body2(param) {
        var selector = param === void 0 ? _constants.BODY : param;
        _classCallCheck(this, Body2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Body2).call(this, selector));
      }
      return Body2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Body, "tagName", "body");
    exports.default = Body;
  });

  // node_modules/easy/lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Button = /* @__PURE__ */ function(Element1) {
      _inherits(Button2, Element1);
      function Button2() {
        _classCallCheck(this, Button2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Button2).apply(this, arguments));
      }
      return Button2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Button, "tagName", "button");
    exports.default = Button;
  });

  // node_modules/easy/lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    function onChange(changeHandler, element) {
      this.on(_constants.CHANGE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.off(_constants.CHANGE, changeHandler, element);
    }
    var changeMixins = {
      onChange,
      offChange
    };
    var _default = changeMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Checkbox = /* @__PURE__ */ function(Element1) {
      _inherits(Checkbox2, Element1);
      function Checkbox2() {
        _classCallCheck(this, Checkbox2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox2).apply(this, arguments));
      }
      _createClass(Checkbox2, [
        {
          key: "isChecked",
          value: function isChecked() {
            return this.domElement.checked;
          }
        },
        {
          key: "check",
          value: function check(param) {
            var checked = param === void 0 ? true : param;
            this.domElement.checked = checked;
          }
        }
      ]);
      return Checkbox2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Checkbox, "tagName", "input");
    _defineProperty(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _change.default);
    var _default = Checkbox;
    exports.default = _default;
  });

  // node_modules/easy/lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Link = /* @__PURE__ */ function(Element1) {
      _inherits(Link2, Element1);
      function Link2() {
        _classCallCheck(this, Link2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Link2).apply(this, arguments));
      }
      _createClass(Link2, [
        {
          key: "getHRef",
          value: function getHRef() {
            return this.getAttribute("href");
          }
        },
        {
          key: "setHRef",
          value: function setHRef(href) {
            return this.setAttribute("href", href);
          }
        }
      ]);
      return Link2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Link, "tagName", "a");
    exports.default = Link;
  });

  // node_modules/easy/lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var Select = /* @__PURE__ */ function(Element1) {
      _inherits(Select2, Element1);
      function Select2() {
        _classCallCheck(this, Select2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Select2).apply(this, arguments));
      }
      _createClass(Select2, [
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        }
      ]);
      return Select2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Select, "tagName", "select");
    Object.assign(Select.prototype, _change.default);
    var _default = Select;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var InputElement = /* @__PURE__ */ function(Element1) {
      _inherits(InputElement2, Element1);
      function InputElement2() {
        _classCallCheck(this, InputElement2);
        return _possibleConstructorReturn(this, _getPrototypeOf(InputElement2).apply(this, arguments));
      }
      _createClass(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.on(_constants.CHANGE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.off(_constants.CHANGE, changeHandler, element);
          }
        },
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "getSelectionStart",
          value: function getSelectionStart() {
            return this.domElement.selectionStart;
          }
        },
        {
          key: "getSelectionEnd",
          value: function getSelectionEnd() {
            return this.domElement.selectionEnd;
          }
        },
        {
          key: "isReadOnly",
          value: function isReadOnly() {
            return this.domElement.readOnly;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        },
        {
          key: "setSelectionStart",
          value: function setSelectionStart(selectionStart) {
            this.domElement.selectionStart = selectionStart;
          }
        },
        {
          key: "setSelectionEnd",
          value: function setSelectionEnd(selectionEnd) {
            this.domElement.selectionEnd = selectionEnd;
          }
        },
        {
          key: "setReadOnly",
          value: function setReadOnly(readOnly) {
            this.domElement.readOnly = readOnly;
          }
        },
        {
          key: "select",
          value: function select() {
            this.domElement.select();
          }
        }
      ]);
      return InputElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(InputElement.prototype, _change.default);
    var _default = InputElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      function Input2() {
        _classCallCheck(this, Input2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Input2).apply(this, arguments));
      }
      return Input2;
    }(_inputElement.default);
    _defineProperty(Input, "tagName", "input");
    exports.default = Input;
  });

  // node_modules/easy/lib/inputElement/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      function Textarea2() {
        _classCallCheck(this, Textarea2);
        return _possibleConstructorReturn(this, _getPrototypeOf(Textarea2).apply(this, arguments));
      }
      return Textarea2;
    }(_inputElement.default);
    _defineProperty(Textarea, "tagName", "textarea");
    exports.default = Textarea;
  });

  // node_modules/easy/lib/mixins/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/window.js
  var require_window2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _click = _interopRequireDefault2(require_click());
    var _window = _interopRequireDefault2(require_window());
    var _constants = require_constants();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _Object;
    var Window1 = /* @__PURE__ */ function() {
      function Window12() {
        _classCallCheck(this, Window12);
        this.domElement = window;
      }
      _createClass(Window12, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key1 = 0; _key1 < _len; _key1++) {
              sources[_key1] = arguments[_key1];
            }
            var target = this.domElement;
            (_Object = Object).assign.apply(_Object, [
              target
            ].concat(_toConsumableArray(sources)));
          }
        },
        {
          key: "addResizeObject",
          value: function addResizeObject() {
          }
        },
        {
          key: "removeResizeObject",
          value: function removeResizeObject() {
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.innerWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.innerHeight;
          }
        },
        {
          key: "getScrollTop",
          value: function getScrollTop() {
            return this.domElement.pageYOffset;
          }
        },
        {
          key: "getScrollLeft",
          value: function getScrollLeft() {
            return this.domElement.pageXOffset;
          }
        }
      ]);
      return Window12;
    }();
    Object.assign(Window1.prototype, _key.default);
    Object.assign(Window1.prototype, _event.default);
    Object.assign(Window1.prototype, _mouse.default);
    Object.assign(Window1.prototype, _click.default);
    Object.assign(Window1.prototype, _window.default);
    var _default = _typeof(window) === _constants.UNDEFINED ? void 0 : new Window1();
    exports.default = _default;
  });

  // node_modules/easy/lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _constants = require_constants();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Document1 = function Document12() {
      _classCallCheck(this, Document12);
      this.domElement = document;
    };
    var _default = _typeof(document) === _constants.UNDEFINED ? void 0 : new Document1();
    exports.default = _default;
    Object.assign(Document1.prototype, _key.default);
    Object.assign(Document1.prototype, _click.default);
    Object.assign(Document1.prototype, _event.default);
    Object.assign(Document1.prototype, _mouse.default);
  });

  // node_modules/easy/lib/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        var childElements = childElementsFromRemainingArguments(remainingArguments);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if (_typeof(firstArgument) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if (_typeof(firstArgument) === _constants.FUNCTION) {
          var elementFunction = firstArgument;
          element = elementFunction(properties);
        }
      }
      return element;
    }
    var React2 = {
      createElement
    };
    var _default = React2;
    exports.default = _default;
    function childElementsFromRemainingArguments(remainingArguments) {
      remainingArguments = (0, _array).flatten(remainingArguments);
      var childElements = remainingArguments;
      childElements = (0, _elements).removeFalseyElements(childElements);
      childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var typeOf = false;
      if (argument.name === Class.name) {
        typeOf = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument) {
          typeOf = isSubclassOf(argument, Class);
        }
      }
      return typeOf;
    }
  });

  // node_modules/easy/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _body = _interopRequireDefault2(require_body());
    var _button = _interopRequireDefault2(require_button());
    var _checkbox = _interopRequireDefault2(require_checkbox());
    var _link = _interopRequireDefault2(require_link());
    var _select = _interopRequireDefault2(require_select());
    var _input = _interopRequireDefault2(require_input());
    var _textarea = _interopRequireDefault2(require_textarea());
    var _element = _interopRequireDefault2(require_element2());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _inputElement = _interopRequireDefault2(require_inputElement());
    var _window = _interopRequireDefault2(require_window2());
    var _document = _interopRequireDefault2(require_document());
    var _constants = _interopRequireDefault2(require_constants());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _offset = _interopRequireDefault2(require_offset());
    var _react = _interopRequireDefault2(require_react());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Body", {
      enumerable: true,
      get: function() {
        return _body.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _button.default;
      }
    });
    Object.defineProperty(exports, "Checkbox", {
      enumerable: true,
      get: function() {
        return _checkbox.default;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return _link.default;
      }
    });
    Object.defineProperty(exports, "Select", {
      enumerable: true,
      get: function() {
        return _select.default;
      }
    });
    Object.defineProperty(exports, "Input", {
      enumerable: true,
      get: function() {
        return _input.default;
      }
    });
    Object.defineProperty(exports, "Textarea", {
      enumerable: true,
      get: function() {
        return _textarea.default;
      }
    });
    Object.defineProperty(exports, "Element", {
      enumerable: true,
      get: function() {
        return _element.default;
      }
    });
    Object.defineProperty(exports, "TextElement", {
      enumerable: true,
      get: function() {
        return _textElement.default;
      }
    });
    Object.defineProperty(exports, "InputElement", {
      enumerable: true,
      get: function() {
        return _inputElement.default;
      }
    });
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return _window.default;
      }
    });
    Object.defineProperty(exports, "document", {
      enumerable: true,
      get: function() {
        return _document.default;
      }
    });
    Object.defineProperty(exports, "constants", {
      enumerable: true,
      get: function() {
        return _constants.default;
      }
    });
    Object.defineProperty(exports, "Bounds", {
      enumerable: true,
      get: function() {
        return _bounds.default;
      }
    });
    Object.defineProperty(exports, "Offset", {
      enumerable: true,
      get: function() {
        return _offset.default;
      }
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
  });

  // lib/example/preamble.js
  var require_preamble = __commonJS(() => {
    "use strict";
    var _easy2 = require_lib();
    _easy2.window.assign({
      React: _easy2.React
    });
  });

  // node_modules/with-style/lib/tagNames.js
  var require_tagNames = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var tagNames = [
      "a",
      "abbr",
      "address",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "svg",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr"
    ];
    var _default = tagNames;
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/bnf/entries.js
  var require_entries = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        special: "^(?:::=|\\||\\(|\\)|\\?|\\!|\\*|\\+|\\.|\u03B5|;|<NO_WHITESPACE>|<END_OF_LINE>)"
      },
      {
        type: "^\\[[^\\]]+\\]"
      },
      {
        name: "^[\\w~]+"
      },
      {
        unassigned: "^[^\\s]+"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_LOG_FILE_BASE_NAME = exports.BACKSPACE_CHARACTER = exports.ETX_CHARACTER = exports.CONTENT_TYPE = exports.DEFAULT_RC_BASE_EXTENSION = exports.DATA_EVENT = exports.POST = exports.CARRIAGE_RETURN_CHARACTER = exports.DEFAULT_ENCODING = exports.ERROR = exports.EMPTY_STRING = exports.ACCEPT = exports.AMPERSAND_CHARACTER = exports.COLON_CHARACTER = exports.CTRL_C = exports.DEFAULT_ATTEMPTS = exports.DEFAULT_INITIAL_ANSWER = exports.APPLICATION_JSON = exports.GET = exports.LINE_FEED_CHARACTER = exports.DEFAULT_LOG_DIRECTORY_PATH = exports.UTF8_ENCODING = void 0;
    var GET = "GET";
    exports.GET = GET;
    var POST = "POST";
    exports.POST = POST;
    var ERROR = "error";
    exports.ERROR = ERROR;
    var CTRL_C = "^C";
    exports.CTRL_C = CTRL_C;
    var ACCEPT = "accept";
    exports.ACCEPT = ACCEPT;
    var DATA_EVENT = "data";
    exports.DATA_EVENT = DATA_EVENT;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var CONTENT_TYPE = "content-type";
    exports.CONTENT_TYPE = CONTENT_TYPE;
    var UTF8_ENCODING = "utf8";
    exports.UTF8_ENCODING = UTF8_ENCODING;
    var ETX_CHARACTER = "";
    exports.ETX_CHARACTER = ETX_CHARACTER;
    var COLON_CHARACTER = ":";
    exports.COLON_CHARACTER = COLON_CHARACTER;
    var DEFAULT_ATTEMPTS = 3;
    exports.DEFAULT_ATTEMPTS = DEFAULT_ATTEMPTS;
    var APPLICATION_JSON = "application/json";
    exports.APPLICATION_JSON = APPLICATION_JSON;
    var DEFAULT_ENCODING = UTF8_ENCODING;
    exports.DEFAULT_ENCODING = DEFAULT_ENCODING;
    var AMPERSAND_CHARACTER = "&";
    exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
    var LINE_FEED_CHARACTER = "\n";
    exports.LINE_FEED_CHARACTER = LINE_FEED_CHARACTER;
    var BACKSPACE_CHARACTER = String.fromCharCode(127);
    exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
    var DEFAULT_INITIAL_ANSWER = EMPTY_STRING;
    exports.DEFAULT_INITIAL_ANSWER = DEFAULT_INITIAL_ANSWER;
    var CARRIAGE_RETURN_CHARACTER = "\r";
    exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
    var DEFAULT_RC_BASE_EXTENSION = EMPTY_STRING;
    exports.DEFAULT_RC_BASE_EXTENSION = DEFAULT_RC_BASE_EXTENSION;
    var DEFAULT_LOG_DIRECTORY_PATH = null;
    exports.DEFAULT_LOG_DIRECTORY_PATH = DEFAULT_LOG_DIRECTORY_PATH;
    var DEFAULT_LOG_FILE_BASE_NAME = "default";
    exports.DEFAULT_LOG_FILE_BASE_NAME = DEFAULT_LOG_FILE_BASE_NAME;
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    exports.fifthLast = fifthLast;
    exports.fourthLast = fourthLast;
    exports.thirdLast = thirdLast;
    exports.secondLast = secondLast;
    exports.last = last;
    exports.head = head;
    exports.tail = tail;
    exports.push = push;
    exports.unshift = unshift;
    exports.concat = concat;
    exports.clear = clear;
    exports.copy = copy;
    exports.merge = merge;
    exports.splice = splice;
    exports.replace = replace;
    exports.filter = filter;
    exports.find = find;
    exports.prune = prune;
    exports.patch = patch;
    exports.augment = augment;
    exports.separate = separate;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    exports.forwardsEvery = forwardsEvery;
    exports.backwardsEvery = backwardsEvery;
    exports.forwardsReduce = forwardsReduce;
    exports.backwardsReduce = backwardsReduce;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function first(array) {
      return array[0];
    }
    function second(array) {
      return array[1];
    }
    function third(array) {
      return array[2];
    }
    function fourth(array) {
      return array[3];
    }
    function fifth(array) {
      return array[4];
    }
    function fifthLast(array) {
      return array[array.length - 5];
    }
    function fourthLast(array) {
      return array[array.length - 4];
    }
    function thirdLast(array) {
      return array[array.length - 3];
    }
    function secondLast(array) {
      return array[array.length - 2];
    }
    function last(array) {
      return array[array.length - 1];
    }
    function head(array) {
      return array.slice(0, 1);
    }
    function tail(array) {
      return array.slice(1);
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function unshift(array1, array2) {
      Array.prototype.unshift.apply(array1, array2);
    }
    function concat(array1, elementOrArray2) {
      var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
        elementOrArray2
      ];
      push(array1, array2);
    }
    function clear(array) {
      var start = 0;
      return array.splice(start);
    }
    function copy(array1, array2) {
      var start = 0, deleteCount = array2.length;
      splice(array1, start, deleteCount, array2);
    }
    function merge(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function splice(array1, start, param, param1) {
      var deleteCount = param === void 0 ? Infinity : param, array2 = param1 === void 0 ? [] : param1;
      var args = [
        start,
        deleteCount
      ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
      return deletedItemsArray;
    }
    function replace(array, element, test) {
      var start;
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          start = index;
          return true;
        }
      });
      if (found) {
        var deleteCount = 1;
        array.splice(start, deleteCount, element);
      }
      return found;
    }
    function filter(array, test) {
      var filteredElements = [];
      backwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          filteredElements.unshift(firstDeletedElement);
        }
      });
      return filteredElements;
    }
    function find(array, test) {
      var elements = [];
      forwardsForEach(array, function(element, index) {
        var passed = test(element, index);
        if (passed) {
          elements.push(element);
        }
      });
      return elements;
    }
    function prune(array, test) {
      var prunedElement = void 0;
      array.some(function(element, index) {
        var passed = test(element, index);
        if (!passed) {
          var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
          prunedElement = firstDeletedElement;
          return true;
        }
      });
      return prunedElement;
    }
    function patch(array, element, test) {
      var found = array.some(function(element1, index) {
        var passed = test(element1, index);
        if (passed) {
          return true;
        }
      });
      if (found) {
        array.push(element);
      }
      return found;
    }
    function augment(array1, array2, test) {
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
    }
    function separate(array, array1, array2, test) {
      array.forEach(function(element, index) {
        var passed = test(element, index);
        passed ? array1.push(element) : array2.push(element);
      });
    }
    function forwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function backwardsSome(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (result) {
          return true;
        }
      }
      return false;
    }
    function forwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function backwardsEvery(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index], result = callback(element, index);
        if (!result) {
          return false;
        }
      }
      return true;
    }
    function forwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      forwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function backwardsReduce(array, callback, initialValue) {
      var value = initialValue;
      backwardsForEach(array, function(element, index) {
        value = callback(value, element, index);
      });
      return value;
    }
    function forwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = 0; index < arrayLength; index++) {
        var element = array[index];
        callback(element, index);
      }
    }
    function backwardsForEach(array, callback) {
      var arrayLength = array.length;
      for (var index = arrayLength - 1; index >= 0; index--) {
        var element = array[index];
        callback(element, index);
      }
    }
    var _default = {
      first,
      second,
      third,
      fourth,
      fifth,
      fifthLast,
      fourthLast,
      thirdLast,
      secondLast,
      last,
      head,
      tail,
      push,
      unshift,
      concat,
      clear,
      copy,
      merge,
      splice,
      replace,
      filter,
      find,
      prune,
      patch,
      augment,
      separate,
      forwardsSome,
      backwardsSome,
      forwardsEvery,
      backwardsEvery,
      forwardsReduce,
      backwardsReduce,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPathName = isPathName;
    exports.isPathTopmostName = isPathTopmostName;
    exports.isPathRelativePath = isPathRelativePath;
    exports.isPathAbsolutePath = isPathAbsolutePath;
    exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
    exports.combinePaths = combinePaths;
    exports.concatenatePaths = concatenatePaths;
    exports.bottommostNameFromPath = bottommostNameFromPath;
    exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
    exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
    exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
    exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
    exports.default = void 0;
    var _constants = require_constants2();
    var _array = require_array2();
    function isPathName(path) {
      path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
      var pathName = /\//.test(path) === false;
      return pathName;
    }
    function isPathTopmostName(path) {
      var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
      return pathTopmostName;
    }
    function isPathRelativePath(path) {
      var pathRelativePath = !/^\//.test(path);
      return pathRelativePath;
    }
    function isPathAbsolutePath(path) {
      var pathAbsolutePath = /^\//.test(path);
      return pathAbsolutePath;
    }
    function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
      var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
      return topmostNameInAbsolutePath;
    }
    function combinePaths(path, relativePath) {
      var combinedPath = null;
      var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
      var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
      if (firstRelativePathName === ".") {
        relativePathNames.shift();
      }
      firstRelativePathName = (0, _array).first(relativePathNames);
      lastPathName = (0, _array).last(pathNames);
      while (firstRelativePathName === ".." && lastPathName !== void 0) {
        relativePathNames.shift();
        pathNames.pop();
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
      }
      if (lastPathName !== void 0) {
        var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
        combinedPath = combinedPathNames.join("/");
      }
      return combinedPath;
    }
    function concatenatePaths(path, relativePath) {
      path = path.replace(/\/$/, _constants.EMPTY_STRING);
      var concatenatedPath = "".concat(path, "/").concat(relativePath);
      return concatenatedPath;
    }
    function bottommostNameFromPath(path) {
      var bottommostName = null;
      var matches = path.match(/^.*\/([^\/]+\/?)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        bottommostName = secondMatch;
      }
      return bottommostName;
    }
    function topmostDirectoryPathFromPath(path) {
      var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
      return topmostDirectoryPath;
    }
    function topmostDirectoryNameFromPath(path) {
      var topmostDirectoryName = null;
      var matches = path.match(/^([^\/]+)\/.+$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        topmostDirectoryName = secondMatch;
      }
      return topmostDirectoryName;
    }
    function pathWithoutBottommostNameFromPath(path) {
      var pathWithoutBottommostName = null;
      var matches = path.match(/^(.*)\/[^\/]+\/?$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutBottommostName = secondMatch;
      }
      return pathWithoutBottommostName;
    }
    function pathWithoutTopmostDirectoryNameFromPath(path) {
      var pathWithoutTopmostDirectoryName = null;
      var matches = path.match(/^[^\/]+\/(.+)$/);
      if (matches !== null) {
        var secondMatch = (0, _array).second(matches);
        pathWithoutTopmostDirectoryName = secondMatch;
      }
      return pathWithoutTopmostDirectoryName;
    }
    var _default = {
      isPathName,
      isPathTopmostName,
      isPathRelativePath,
      isPathAbsolutePath,
      isTopmostNameInAbsolutePath,
      combinePaths,
      concatenatePaths,
      bottommostNameFromPath,
      topmostDirectoryPathFromPath,
      topmostDirectoryNameFromPath,
      pathWithoutBottommostNameFromPath,
      pathWithoutTopmostDirectoryNameFromPath
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.overwrite = overwrite;
    exports.underwrite = underwrite;
    exports.portFromHost = portFromHost;
    exports.secureFromHost = secureFromHost;
    exports.hostnameFromHost = hostnameFromHost;
    exports.queryStringFromParameters = queryStringFromParameters;
    exports.urlFromHostURIAndParameters = urlFromHostURIAndParameters;
    exports.default = void 0;
    var _array = require_array2();
    var _constants = require_constants2();
    function overwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowerCaseName = name.toLowerCase(), overwritten = ownPropertyNames.some(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        if (lowerCaseOwnPropertyName === lowerCaseName) {
          headers[ownPropertyName] = value;
          return true;
        }
      });
      if (!overwritten) {
        headers[name] = value;
      }
    }
    function underwrite(headers, name, value) {
      var ownPropertyNames = Object.getOwnPropertyNames(headers), lowercaseName = name.toLowerCase(), lowerCaseOwnPropertyNames = ownPropertyNames.map(function(ownPropertyName) {
        var lowerCaseOwnPropertyName = ownPropertyName.toLowerCase();
        return lowerCaseOwnPropertyName;
      }), lowerCaseOwnPropertyNamesIncludesLowercaseName = lowerCaseOwnPropertyNames.includes(lowercaseName);
      if (!lowerCaseOwnPropertyNamesIncludesLowercaseName) {
        headers[name] = value;
      }
    }
    function portFromHost(host) {
      var port;
      var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_constants.COLON_CHARACTER);
      if (index === -1) {
        var secure = secureFromHost(host);
        port = secure ? 443 : 80;
      } else {
        var start = index + 1, portString = secondMatch.substring(start);
        port = Number(portString);
      }
      return port;
    }
    function secureFromHost(host) {
      var secure = /^https:\/\//.test(host);
      return secure;
    }
    function hostnameFromHost(host) {
      var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
      return hostname;
    }
    function queryStringFromParameters(parameters) {
      var names = Object.keys(parameters), namesLength = names.length, lastIndex = namesLength - 1, queryString = names.reduce(function(queryString1, name, index) {
        var value = parameters[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _constants.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
        queryString1 += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
        return queryString1;
      }, _constants.EMPTY_STRING);
      return queryString;
    }
    function urlFromHostURIAndParameters(host, uri, parameters) {
      var queryString = queryStringFromParameters(parameters), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
      return url;
    }
    var _default = {
      overwrite,
      underwrite,
      portFromHost,
      secureFromHost,
      hostnameFromHost,
      queryStringFromParameters,
      urlFromHostURIAndParameters
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.whilst = whilst;
    exports.forEach = forEach;
    exports.sequence = sequence;
    exports.eventually = eventually;
    exports.repeatedly = repeatedly;
    exports.forwardsForEach = forwardsForEach;
    exports.backwardsForEach = backwardsForEach;
    exports.default = void 0;
    function whilst(callback, done, context) {
      var count = -1;
      function next() {
        count++;
        var index = count, terminate = callback(next, done, context, index);
        if (terminate) {
          done();
        }
      }
      next();
    }
    function forEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function sequence(callbacks, done, context) {
      var length = callbacks.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, callback = callbacks[index];
          callback(next, done, context, index);
        }
      }
      next();
    }
    function eventually(callbacks, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var length = callbacks.length;
      var count = 0;
      callbacks.forEach(function(callback, index) {
        callback(next, done, context, index);
      });
    }
    function repeatedly(callback, length, done, context) {
      var next = function next2() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        }
      };
      var count = 0;
      for (var index = 0; index < length; index++) {
        callback(next, done, context, index);
      }
    }
    function forwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    function backwardsForEach(array, callback, done, context) {
      var length = array.length;
      var count = length;
      function next() {
        count--;
        var terminate = count === -1;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
          callback(element, next, done, context, index);
        }
      }
      next();
    }
    var _default = {
      whilst,
      forEach,
      sequence,
      eventually,
      repeatedly,
      forwardsForEach,
      backwardsForEach
    };
    exports.default = _default;
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = get;
    exports.post = post;
    exports.request = request;
    exports.default = void 0;
    var _http = require_http();
    var _constants = require_constants2();
    function get(host, uri, parameters, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.GET, body2 = null;
      underwriteAccept(headers);
      request(host, uri, parameters, method, body2, headers, callback);
    }
    function post(host, uri, parameters, body2, headers, callback) {
      if (callback === void 0) {
        callback = headers;
        headers = {};
      }
      var method = _constants.POST;
      underwriteAccept(headers);
      underwriteContentType(headers);
      request(host, uri, parameters, method, body2, headers, callback);
    }
    function request(host, uri, parameters, method, body2, headers, callback) {
      var url = (0, _http).urlFromHostURIAndParameters(host, uri, parameters), accept = headers[_constants.ACCEPT] || null, contentType = headers[_constants.CONTENT_TYPE] || null, xmlHttpRequest = new XMLHttpRequest();
      if (contentType === _constants.APPLICATION_JSON) {
        var json = body2, jsonString = JSON.stringify(json);
        body2 = jsonString;
      }
      xmlHttpRequest.onreadystatechange = function() {
        var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, responseText = xmlHttpRequest.responseText;
        if (readyState == 4) {
          var body1 = responseText;
          if (accept === _constants.APPLICATION_JSON) {
            try {
              var jsonString2 = body1, json2 = JSON.parse(jsonString2);
              body1 = json2;
            } catch (error) {
              body1 = null;
            }
            callback(body1, status);
          }
        }
      };
      xmlHttpRequest.open(method, url);
      if (accept !== null) {
        xmlHttpRequest.setRequestHeader(_constants.ACCEPT, accept);
      }
      if (contentType !== null) {
        xmlHttpRequest.setRequestHeader(_constants.CONTENT_TYPE, contentType);
      }
      body2 !== null ? xmlHttpRequest.send(body2) : xmlHttpRequest.send();
    }
    var _default = {
      get,
      post,
      request
    };
    exports.default = _default;
    function underwriteAccept(headers) {
      var name = _constants.ACCEPT, value = _constants.APPLICATION_JSON;
      (0, _http).underwrite(headers, name, value);
    }
    function underwriteContentType(headers) {
      var name = _constants.CONTENT_TYPE, value = _constants.APPLICATION_JSON;
      (0, _http).underwrite(headers, name, value);
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _path = _interopRequireDefault2(require_path());
    var _http = _interopRequireDefault2(require_http());
    var _array = _interopRequireDefault2(require_array2());
    var _asynchronous = _interopRequireDefault2(require_asynchronous());
    var _ajax = _interopRequireDefault2(require_ajax());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "pathUtilities", {
      enumerable: true,
      get: function() {
        return _path.default;
      }
    });
    Object.defineProperty(exports, "httpUtilities", {
      enumerable: true,
      get: function() {
        return _http.default;
      }
    });
    Object.defineProperty(exports, "arrayUtilities", {
      enumerable: true,
      get: function() {
        return _array.default;
      }
    });
    Object.defineProperty(exports, "asynchronousUtilities", {
      enumerable: true,
      get: function() {
        return _asynchronous.default;
      }
    });
    Object.defineProperty(exports, "ajaxUtilities", {
      enumerable: true,
      get: function() {
        return _ajax.default;
      }
    });
  });

  // node_modules/occam-lexers/lib/utilities/content.js
  var require_content = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.sanitiseContent = sanitiseContent;
    function sanitiseContent(content) {
      var sanitisedContent = content.replace(/&/, "&amp;").replace(/</, "&lt;").replace(/>/, "&gt;");
      return sanitisedContent;
    }
  });

  // node_modules/occam-lexers/lib/common/types.js
  var require_types = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.typeType = exports.startOfMultiLineCommentType = exports.regularExpressionType = exports.endOfMultiLineCommentType = exports.brokenStringLiteralType = exports.stringLiteralType = exports.nameType = exports.whitespaceType = exports.endOfLineType = exports.singleLineCommentType = exports.default = exports.commentType = exports.brokenCommentType = exports.middleOfMultiLineCommentType = void 0;
    var typeType = "type";
    exports.typeType = typeType;
    var nameType = "name";
    exports.nameType = nameType;
    var commentType = "comment";
    exports.commentType = commentType;
    var endOfLineType = "end-of-line";
    exports.endOfLineType = endOfLineType;
    var whitespaceType = "whitespace";
    exports.whitespaceType = whitespaceType;
    var stringLiteralType = "string-literal";
    exports.stringLiteralType = stringLiteralType;
    var brokenCommentType = "broken-c0mment";
    exports.brokenCommentType = brokenCommentType;
    var regularExpressionType = "regular-expression";
    exports.regularExpressionType = regularExpressionType;
    var brokenStringLiteralType = "broken-string-literal";
    exports.brokenStringLiteralType = brokenStringLiteralType;
    var singleLineCommentType = "single-line ".concat(commentType);
    exports.singleLineCommentType = singleLineCommentType;
    var endOfMultiLineCommentType = "end-of-multi-line ".concat(commentType);
    exports.endOfMultiLineCommentType = endOfMultiLineCommentType;
    var startOfMultiLineCommentType = "start-of-multi-line ".concat(commentType);
    exports.startOfMultiLineCommentType = startOfMultiLineCommentType;
    var middleOfMultiLineCommentType = "middle-of-multi-line ".concat(commentType);
    exports.middleOfMultiLineCommentType = middleOfMultiLineCommentType;
    var _default = {
      typeType,
      nameType,
      commentType,
      endOfLineType,
      whitespaceType,
      stringLiteralType,
      brokenCommentType,
      regularExpressionType,
      brokenStringLiteralType,
      singleLineCommentType,
      endOfMultiLineCommentType,
      startOfMultiLineCommentType,
      middleOfMultiLineCommentType
    };
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/common/token.js
  var require_token = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _content = require_content();
    var _types = require_types();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var first = _necessary.arrayUtilities.first;
    var Token = function() {
      function Token2(type, content, innerHTML, significant) {
        _classCallCheck(this, Token2);
        this.type = type;
        this.content = content;
        this.innerHTML = innerHTML;
        this.significant = significant;
      }
      _createClass(Token2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            return this.content;
          }
        },
        {
          key: "getInnerHTML",
          value: function getInnerHTML() {
            return this.innerHTML;
          }
        },
        {
          key: "getContentLength",
          value: function getContentLength() {
            var contentLength = this.content.length;
            return contentLength;
          }
        },
        {
          key: "isSignificant",
          value: function isSignificant() {
            return this.significant;
          }
        },
        {
          key: "isCommentToken",
          value: function isCommentToken() {
            var typeIncludesCommentType = this.type.includes(_types.commentType), commentToken = typeIncludesCommentType;
            return commentToken;
          }
        },
        {
          key: "isEndOfLineToken",
          value: function isEndOfLineToken() {
            var typeEndOfLineType = this.type === _types.endOfLineType, endOfLineToken = typeEndOfLineType;
            return endOfLineToken;
          }
        },
        {
          key: "isWhitespaceToken",
          value: function isWhitespaceToken() {
            var typeWhitespaceType = this.type === _types.whitespaceType, whitespaceToken = typeWhitespaceType;
            return whitespaceToken;
          }
        },
        {
          key: "isEqualTo",
          value: function isEqualTo(token) {
            var equalToToken = this === token;
            return equalToToken;
          }
        },
        {
          key: "match",
          value: function match(token) {
            var type = token.getType(), content = token.getContent(), significant = token.isSignificant(), matches = this.type === type && this.content === content && this.significant === significant;
            return matches;
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var className = this.type, html = '<span class="'.concat(className, '">').concat(this.innerHTML, "</span>");
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
              remainingArguments[_key - 4] = arguments[_key];
            }
            var token = null;
            if (startPosition !== endPosition) {
              var content = this.getContent();
              content = content.substring(startPosition, endPosition);
              var type = this.getType(), sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent;
              token = _construct(Class, [
                type,
                content,
                innerHTML,
                significant
              ].concat(_toConsumableArray(remainingArguments)));
            }
            return token;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var token = null;
            var type = Class.type, regularExpression = Class.regularExpression, matches = content.match(regularExpression);
            if (matches !== null) {
              var index = matches.index;
              if (index === 0) {
                var firstMatch = first(matches);
                content = firstMatch;
                var contentLength = content.length;
                if (contentLength > 0) {
                  var sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent;
                  token = _construct(Class, [
                    type,
                    content,
                    innerHTML,
                    significant
                  ].concat(_toConsumableArray(remainingArguments)));
                }
              }
            }
            return token;
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            var type = Class.type, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
              type,
              content,
              innerHTML,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return token;
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type, significant) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
              remainingArguments[_key - 4] = arguments[_key];
            }
            var sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, token = _construct(Class, [
              type,
              content,
              innerHTML,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return token;
          }
        }
      ]);
      return Token2;
    }();
    exports.default = Token;
  });

  // node_modules/occam-lexers/lib/common/token/significant.js
  var require_significant = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _token = _interopRequireDefault2(require_token());
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _instance;
    var _Token;
    var _Token1;
    var _Token2;
    var significant = true;
    var SignificantToken = function(Token) {
      _inherits(SignificantToken2, Token);
      function SignificantToken2() {
        _classCallCheck(this, SignificantToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SignificantToken2).apply(this, arguments));
      }
      _createClass(SignificantToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            if (endPosition === void 0) {
              endPosition = startPosition;
              startPosition = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_instance = _get(_getPrototypeOf(SignificantToken2.prototype), "clone", this)).call.apply(_instance, [
              this,
              Class,
              startPosition,
              endPosition,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            if (content === void 0) {
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token = _token.default).match.apply(_Token, [
              Class,
              content,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            if (content === void 0) {
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token1 = _token.default).fromContent.apply(_Token1, [
              Class,
              content,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
              remainingArguments[_key - 3] = arguments[_key];
            }
            if (type === void 0) {
              type = content;
              content = Class;
              Class = SignificantToken2;
            }
            var significantToken = (_Token2 = _token.default).fromContentAndType.apply(_Token2, [
              Class,
              content,
              type,
              significant
            ].concat(_toConsumableArray(remainingArguments)));
            return significantToken;
          }
        }
      ]);
      return SignificantToken2;
    }(_token.default);
    exports.default = SignificantToken;
  });

  // node_modules/occam-lexers/lib/common/rule.js
  var require_rule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _significant = _interopRequireDefault2(require_significant());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var first = _necessary.arrayUtilities.first;
    var Rule = function() {
      function Rule2(type, regularExpression) {
        _classCallCheck(this, Rule2);
        this.type = type;
        this.regularExpression = regularExpression;
      }
      _createClass(Rule2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "getRegularExpression",
          value: function getRegularExpression() {
            return this.regularExpression;
          }
        },
        {
          key: "match",
          value: function match(content) {
            var significantToken = null;
            var matches = content.match(this.regularExpression);
            if (matches !== null) {
              var index = matches.index;
              if (index === 0) {
                var firstMatch = first(matches);
                content = firstMatch;
                var contentLength = content.length;
                if (contentLength > 0) {
                  significantToken = _significant.default.fromContentAndType(content, this.type);
                }
              }
            }
            return significantToken;
          }
        },
        {
          key: "asEntry",
          value: function asEntry() {
            var entry = {}, regularExpressionPattern = "".concat(this.regularExpression);
            entry[this.type] = regularExpressionPattern;
            return entry;
          }
        }
      ], [
        {
          key: "fromToken",
          value: function fromToken(Token) {
            var type = Token.type, regularExpression = Token.regularExpression, rule = new Rule2(type, regularExpression);
            return rule;
          }
        },
        {
          key: "fromEntry",
          value: function fromEntry(entry) {
            var entryKeys = Object.keys(entry), firstEntryKey = first(entryKeys), type = firstEntryKey, regularExpressionPattern = entry[type], rule = Rule2.fromTypeAndRegularExpressionPattern(type, regularExpressionPattern);
            return rule;
          }
        },
        {
          key: "fromTypeAndRegularExpressionPattern",
          value: function fromTypeAndRegularExpressionPattern(type, regularExpressionPattern) {
            var unicode = isUnicode(regularExpressionPattern), flags = unicode ? "u" : "", regExp = new RegExp(regularExpressionPattern, flags), regularExpression = regExp, rule = new Rule2(type, regularExpression);
            return rule;
          }
        }
      ]);
      return Rule2;
    }();
    exports.default = Rule;
    function isUnicode(regularExpressionPattern) {
      var unicodeRegularExpression = /u{/, index = regularExpressionPattern.search(unicodeRegularExpression), unicode = index !== -1;
      return unicode;
    }
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant.js
  var require_nonSignificant = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _token = _interopRequireDefault2(require_token());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var significant = false;
    var NonSignificantToken = function(Token) {
      _inherits(NonSignificantToken2, Token);
      function NonSignificantToken2() {
        _classCallCheck(this, NonSignificantToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NonSignificantToken2).apply(this, arguments));
      }
      _createClass(NonSignificantToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(NonSignificantToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition, significant);
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _token.default.match(Class, content, significant);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _token.default.fromContent(Class, content, significant);
          }
        },
        {
          key: "fromContentAndType",
          value: function fromContentAndType(Class, content, type) {
            return _token.default.fromContentAndType(Class, content, type, significant);
          }
        }
      ]);
      return NonSignificantToken2;
    }(_token.default);
    exports.default = NonSignificantToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/whitespace.js
  var require_whitespace = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var WhitespaceToken = function(NonSignificantToken) {
      _inherits(WhitespaceToken2, NonSignificantToken);
      function WhitespaceToken2() {
        _classCallCheck(this, WhitespaceToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(WhitespaceToken2).apply(this, arguments));
      }
      _createClass(WhitespaceToken2, [
        {
          key: "asHTML",
          value: function asHTML() {
            var html = this.innerHTML;
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(WhitespaceToken2.prototype), "clone", this).call(this, WhitespaceToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(WhitespaceToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(WhitespaceToken2, content);
          }
        }
      ]);
      return WhitespaceToken2;
    }(_nonSignificant.default);
    _defineProperty(WhitespaceToken, "type", _types.whitespaceType);
    _defineProperty(WhitespaceToken, "regularExpression", /^[\t ]+/);
    exports.default = WhitespaceToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/brokenComment.js
  var require_brokenComment = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var BrokenCommentToken = function(NonSignificantToken) {
      _inherits(BrokenCommentToken2, NonSignificantToken);
      function BrokenCommentToken2() {
        _classCallCheck(this, BrokenCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BrokenCommentToken2).apply(this, arguments));
      }
      _createClass(BrokenCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(BrokenCommentToken2.prototype), "clone", this).call(this, BrokenCommentToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(BrokenCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(BrokenCommentToken2, content);
          }
        }
      ]);
      return BrokenCommentToken2;
    }(_nonSignificant.default);
    _defineProperty(BrokenCommentToken, "type", _types.brokenCommentType);
    _defineProperty(BrokenCommentToken, "regularExpression", /^\//);
    exports.default = BrokenCommentToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/regularExpression.js
  var require_regularExpression = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RegularExpressionToken = function(SignificantToken) {
      _inherits(RegularExpressionToken2, SignificantToken);
      function RegularExpressionToken2() {
        _classCallCheck(this, RegularExpressionToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionToken2).apply(this, arguments));
      }
      _createClass(RegularExpressionToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(RegularExpressionToken2.prototype), "clone", this).call(this, RegularExpressionToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(RegularExpressionToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(RegularExpressionToken2, content);
          }
        }
      ]);
      return RegularExpressionToken2;
    }(_significant.default);
    _defineProperty(RegularExpressionToken, "type", _types.regularExpressionType);
    _defineProperty(RegularExpressionToken, "regularExpression", /^\/(?:\\.|[^\/])*\//);
    exports.default = RegularExpressionToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/comment/singleLine.js
  var require_singleLine = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SingleLineCommentToken = function(NonSignificantToken) {
      _inherits(SingleLineCommentToken2, NonSignificantToken);
      function SingleLineCommentToken2() {
        _classCallCheck(this, SingleLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SingleLineCommentToken2).apply(this, arguments));
      }
      _createClass(SingleLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(SingleLineCommentToken2.prototype), "clone", this).call(this, SingleLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = false;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(SingleLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(SingleLineCommentToken2, content);
          }
        }
      ]);
      return SingleLineCommentToken2;
    }(_nonSignificant.default);
    _defineProperty(SingleLineCommentToken, "type", _types.singleLineCommentType);
    _defineProperty(SingleLineCommentToken, "regularExpression", /^\/\/.*/);
    exports.default = SingleLineCommentToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/comment/multiLine/endOf.js
  var require_endOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var EndOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(EndOfMultiLineCommentToken2, NonSignificantToken);
      function EndOfMultiLineCommentToken2() {
        _classCallCheck(this, EndOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(EndOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfMultiLineCommentToken2.prototype), "clone", this).call(this, EndOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = false;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(EndOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(EndOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return EndOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    _defineProperty(EndOfMultiLineCommentToken, "type", _types.endOfMultiLineCommentType);
    _defineProperty(EndOfMultiLineCommentToken, "regularExpression", /^\*\//);
    exports.default = EndOfMultiLineCommentToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/endOfLine.js
  var require_endOfLine = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    var _content = require_content();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var first = _necessary.arrayUtilities.first;
    var EndOfLineNonSignificantToken = function(NonSignificantToken) {
      _inherits(EndOfLineNonSignificantToken2, NonSignificantToken);
      function EndOfLineNonSignificantToken2(type, content, innerHTML, significant, index) {
        _classCallCheck(this, EndOfLineNonSignificantToken2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNonSignificantToken2).call(this, type, content, innerHTML, significant));
        _this.index = index;
        return _this;
      }
      _createClass(EndOfLineNonSignificantToken2, [
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = "\n";
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineNonSignificantToken2.prototype), "clone", this).call(this, EndOfLineNonSignificantToken2, startPosition, endPosition, this.index);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            var endOfLineNonSignificantToken = null;
            var regularExpression = /\r\n|\r|\n/, matches = content.match(regularExpression);
            if (matches !== null) {
              var firstMatch = first(matches);
              content = firstMatch;
              var contentLength = content.length;
              if (contentLength > 0) {
                var type = _types.endOfLineType, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, significant = false, index = matches.index;
                endOfLineNonSignificantToken = new EndOfLineNonSignificantToken2(type, content, innerHTML, significant, index);
              }
            }
            return endOfLineNonSignificantToken;
          }
        }
      ]);
      return EndOfLineNonSignificantToken2;
    }(_nonSignificant.default);
    exports.default = EndOfLineNonSignificantToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/comment/multiLine/startOf.js
  var require_startOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var StartOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(StartOfMultiLineCommentToken2, NonSignificantToken);
      function StartOfMultiLineCommentToken2() {
        _classCallCheck(this, StartOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(StartOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(StartOfMultiLineCommentToken2.prototype), "clone", this).call(this, StartOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = true;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(StartOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(StartOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return StartOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    _defineProperty(StartOfMultiLineCommentToken, "type", _types.startOfMultiLineCommentType);
    _defineProperty(StartOfMultiLineCommentToken, "regularExpression", /^\/\*/);
    exports.default = StartOfMultiLineCommentToken;
  });

  // node_modules/occam-lexers/lib/common/token/nonSignificant/comment/multiLine/middleOf.js
  var require_middleOf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var MiddleOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(MiddleOfMultiLineCommentToken2, NonSignificantToken);
      function MiddleOfMultiLineCommentToken2() {
        _classCallCheck(this, MiddleOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(MiddleOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(MiddleOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken2.prototype), "clone", this).call(this, MiddleOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = true;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _nonSignificant.default.match(MiddleOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _nonSignificant.default.fromContent(MiddleOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return MiddleOfMultiLineCommentToken2;
    }(_nonSignificant.default);
    _defineProperty(MiddleOfMultiLineCommentToken, "type", _types.middleOfMultiLineCommentType);
    _defineProperty(MiddleOfMultiLineCommentToken, "regularExpression", /^(?:.+?(?=\*\/)|.+$)/);
    exports.default = MiddleOfMultiLineCommentToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/stringLiteral.js
  var require_stringLiteral = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var StringLiteralToken = function(SignificantToken) {
      _inherits(StringLiteralToken2, SignificantToken);
      function StringLiteralToken2() {
        _classCallCheck(this, StringLiteralToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(StringLiteralToken2).apply(this, arguments));
      }
      _createClass(StringLiteralToken2, [
        {
          key: "clone",
          value: function clone(Class, startPosition, endPosition) {
            return _get(_getPrototypeOf(StringLiteralToken2.prototype), "clone", this).call(this, Class, startPosition, endPosition);
          }
        },
        {
          key: "getString",
          value: function getString() {
            var content = this.getContent(), contentLength = content.length, start = 1, end = contentLength - 1, string = content.substring(start, end);
            return string;
          }
        }
      ], [
        {
          key: "match",
          value: function match(Class, content) {
            return _significant.default.match(Class, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(Class, content) {
            return _significant.default.fromContent(Class, content);
          }
        }
      ]);
      return StringLiteralToken2;
    }(_significant.default);
    exports.default = StringLiteralToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/stringLiteral/singlyQuoted.js
  var require_singlyQuoted = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _stringLiteral = _interopRequireDefault2(require_stringLiteral());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SinglyQuotedStringLiteralToken = function(StringLiteralToken) {
      _inherits(SinglyQuotedStringLiteralToken2, StringLiteralToken);
      function SinglyQuotedStringLiteralToken2() {
        _classCallCheck(this, SinglyQuotedStringLiteralToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SinglyQuotedStringLiteralToken2).apply(this, arguments));
      }
      _createClass(SinglyQuotedStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(SinglyQuotedStringLiteralToken2.prototype), "clone", this).call(this, SinglyQuotedStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _stringLiteral.default.match(SinglyQuotedStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _stringLiteral.default.fromContent(SinglyQuotedStringLiteralToken2, content);
          }
        }
      ]);
      return SinglyQuotedStringLiteralToken2;
    }(_stringLiteral.default);
    _defineProperty(SinglyQuotedStringLiteralToken, "type", _types.stringLiteralType);
    _defineProperty(SinglyQuotedStringLiteralToken, "regularExpression", /^'(?:\\.|[^'])*'/);
    exports.default = SinglyQuotedStringLiteralToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/stringLiteral/doublyQuoted.js
  var require_doublyQuoted = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _stringLiteral = _interopRequireDefault2(require_stringLiteral());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DoublyQuotedStringLiteralToken = function(StringLiteralToken) {
      _inherits(DoublyQuotedStringLiteralToken2, StringLiteralToken);
      function DoublyQuotedStringLiteralToken2() {
        _classCallCheck(this, DoublyQuotedStringLiteralToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DoublyQuotedStringLiteralToken2).apply(this, arguments));
      }
      _createClass(DoublyQuotedStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(DoublyQuotedStringLiteralToken2.prototype), "clone", this).call(this, DoublyQuotedStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _stringLiteral.default.match(DoublyQuotedStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _stringLiteral.default.fromContent(DoublyQuotedStringLiteralToken2, content);
          }
        }
      ]);
      return DoublyQuotedStringLiteralToken2;
    }(_stringLiteral.default);
    _defineProperty(DoublyQuotedStringLiteralToken, "type", _types.stringLiteralType);
    _defineProperty(DoublyQuotedStringLiteralToken, "regularExpression", /^"(?:\\.|[^"\\])*"/);
    exports.default = DoublyQuotedStringLiteralToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/brokenStringLiteral/singlyQuoted.js
  var require_singlyQuoted2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SinglyQuotedBrokenStringLiteralToken = function(SignificantToken) {
      _inherits(SinglyQuotedBrokenStringLiteralToken2, SignificantToken);
      function SinglyQuotedBrokenStringLiteralToken2() {
        _classCallCheck(this, SinglyQuotedBrokenStringLiteralToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SinglyQuotedBrokenStringLiteralToken2).apply(this, arguments));
      }
      _createClass(SinglyQuotedBrokenStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(SinglyQuotedBrokenStringLiteralToken2.prototype), "clone", this).call(this, SinglyQuotedBrokenStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(SinglyQuotedBrokenStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(SinglyQuotedBrokenStringLiteralToken2, content);
          }
        }
      ]);
      return SinglyQuotedBrokenStringLiteralToken2;
    }(_significant.default);
    _defineProperty(SinglyQuotedBrokenStringLiteralToken, "type", _types.brokenStringLiteralType);
    _defineProperty(SinglyQuotedBrokenStringLiteralToken, "regularExpression", /^'/);
    exports.default = SinglyQuotedBrokenStringLiteralToken;
  });

  // node_modules/occam-lexers/lib/common/token/significant/brokenStringLiteral/doublyQuoted.js
  var require_doublyQuoted2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DoublyQuotedBrokenStringLiteralToken = function(SignificantToken) {
      _inherits(DoublyQuotedBrokenStringLiteralToken2, SignificantToken);
      function DoublyQuotedBrokenStringLiteralToken2() {
        _classCallCheck(this, DoublyQuotedBrokenStringLiteralToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DoublyQuotedBrokenStringLiteralToken2).apply(this, arguments));
      }
      _createClass(DoublyQuotedBrokenStringLiteralToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(DoublyQuotedBrokenStringLiteralToken2.prototype), "clone", this).call(this, DoublyQuotedBrokenStringLiteralToken2, startPosition, endPosition);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _significant.default.match(DoublyQuotedBrokenStringLiteralToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _significant.default.fromContent(DoublyQuotedBrokenStringLiteralToken2, content);
          }
        }
      ]);
      return DoublyQuotedBrokenStringLiteralToken2;
    }(_significant.default);
    _defineProperty(DoublyQuotedBrokenStringLiteralToken, "type", _types.brokenStringLiteralType);
    _defineProperty(DoublyQuotedBrokenStringLiteralToken, "regularExpression", /^"/);
    exports.default = DoublyQuotedBrokenStringLiteralToken;
  });

  // node_modules/occam-lexers/lib/common/lexer.js
  var require_lexer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _rule = _interopRequireDefault2(require_rule());
    var _whitespace = _interopRequireDefault2(require_whitespace());
    var _brokenComment = _interopRequireDefault2(require_brokenComment());
    var _regularExpression = _interopRequireDefault2(require_regularExpression());
    var _singleLine = _interopRequireDefault2(require_singleLine());
    var _endOf = _interopRequireDefault2(require_endOf());
    var _endOfLine = _interopRequireDefault2(require_endOfLine());
    var _startOf = _interopRequireDefault2(require_startOf());
    var _middleOf = _interopRequireDefault2(require_middleOf());
    var _singlyQuoted = _interopRequireDefault2(require_singlyQuoted());
    var _doublyQuoted = _interopRequireDefault2(require_doublyQuoted());
    var _singlyQuoted1 = _interopRequireDefault2(require_singlyQuoted2());
    var _doublyQuoted1 = _interopRequireDefault2(require_doublyQuoted2());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var splice = _necessary.arrayUtilities.splice;
    var CommonLexer = function() {
      function CommonLexer2(rules) {
        _classCallCheck(this, CommonLexer2);
        this.rules = rules;
      }
      _createClass(CommonLexer2, [
        {
          key: "getRules",
          value: function getRules() {
            return this.rules;
          }
        },
        {
          key: "tokenise",
          value: function tokenise(content) {
            var endOfLineTokensOrContents = this.tokeniseEndOfLines(content), tokensOrContents = endOfLineTokensOrContents;
            this.tokeniseContents(tokensOrContents);
            var tokens = tokensOrContents;
            return tokens;
          }
        },
        {
          key: "tokeniseEndOfLines",
          value: function tokeniseEndOfLines(content, param) {
            var EndOfLineToken = param === void 0 ? _endOfLine.default : param;
            var endOfLineTokensOrContents = [];
            var endOfLineToken = EndOfLineToken.match(content);
            while (endOfLineToken !== null) {
              var endOfLineTokenIndex = endOfLineToken.getIndex(), endOfLineTokenContentLength = endOfLineToken.getContentLength(), left = endOfLineTokenIndex, right = endOfLineTokenIndex + endOfLineTokenContentLength, leftContent = content.substring(0, left), rightContent = content.substring(right);
              content = leftContent;
              endOfLineTokensOrContents.push(content);
              endOfLineTokensOrContents.push(endOfLineToken);
              content = rightContent;
              endOfLineToken = EndOfLineToken.match(content);
            }
            endOfLineTokensOrContents.push(content);
            return endOfLineTokensOrContents;
          }
        },
        {
          key: "tokeniseContents",
          value: function tokeniseContents(tokensOrContents) {
            var inComment = false;
            var index = 0, tokensOrContentsLength = tokensOrContents.length;
            while (index < tokensOrContentsLength) {
              var tokenOrContent = tokensOrContents[index], tokenOrContentString = typeof tokenOrContent === "string", tokenOrContentContent = tokenOrContentString;
              if (tokenOrContentContent) {
                var tokens = [], content = tokenOrContent;
                inComment = this.tokeniseContent(content, tokens, inComment);
                var tokensLength = tokens.length, start = index, deleteCount = 1;
                splice(tokensOrContents, start, deleteCount, tokens);
                tokensOrContentsLength += tokensLength - 1;
                index += tokensLength - 1;
              }
              index++;
            }
          }
        },
        {
          key: "tokeniseContent",
          value: function tokeniseContent(content, tokens, inComment) {
            while (content !== "") {
              var token = this.matchMultiLineCommentInComment(content, inComment) || this.matchWhitespace(content) || this.matchMultiLineCommentNotInComment(content, inComment) || this.matchSingleLineComment(content, inComment) || this.matchBrokenComment(content, inComment) || this.matchRegularExpression(content) || this.matchSinglyQuotedStringLiteral(content) || this.matchDoublyQuotedStringLiteral(content);
              if (token === null) {
                var significantToken = null;
                this.rules.some(function(rule) {
                  significantToken = rule.match(content);
                  if (significantToken !== null) {
                    token = significantToken;
                    return true;
                  }
                });
              }
              if (token === null) {
                throw new Error("The content '".concat(content, "' cannot be tokenised."));
              }
              tokens.push(token);
              var tokenContentLength = token.getContentLength(), start = tokenContentLength;
              content = content = content.substring(start);
              var tokenCommentToken = token.isCommentToken();
              if (tokenCommentToken) {
                var commentToken = token;
                inComment = commentToken.isInComment();
              }
            }
            return inComment;
          }
        },
        {
          key: "matchBrokenComment",
          value: function matchBrokenComment(content, inComment) {
            var brokenCommentToken = inComment ? null : _brokenComment.default.match(content);
            return brokenCommentToken;
          }
        },
        {
          key: "matchSingleLineComment",
          value: function matchSingleLineComment(content, inComment) {
            var singleLineCommentToken = inComment ? null : _singleLine.default.match(content);
            return singleLineCommentToken;
          }
        },
        {
          key: "matchMultiLineCommentInComment",
          value: function matchMultiLineCommentInComment(content, inComment) {
            var multiLinCommentToken = inComment ? _endOf.default.match(content) || _middleOf.default.match(content) : null;
            return multiLinCommentToken;
          }
        },
        {
          key: "matchMultiLineCommentNotInComment",
          value: function matchMultiLineCommentNotInComment(content, inComment) {
            var multiLinCommentToken = inComment ? null : _startOf.default.match(content);
            return multiLinCommentToken;
          }
        },
        {
          key: "matchWhitespace",
          value: function matchWhitespace(content) {
            return _whitespace.default.match(content);
          }
        },
        {
          key: "matchRegularExpression",
          value: function matchRegularExpression(content) {
            return _regularExpression.default.match(content);
          }
        },
        {
          key: "matchSinglyQuotedStringLiteral",
          value: function matchSinglyQuotedStringLiteral(content) {
            return _singlyQuoted.default.match(content) || _singlyQuoted1.default.match(content);
          }
        },
        {
          key: "matchDoublyQuotedStringLiteral",
          value: function matchDoublyQuotedStringLiteral(content) {
            return _doublyQuoted.default.match(content) || _doublyQuoted1.default.match(content);
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing(Class) {
            var entries = Class.entries, rules = entries.map(function(entry) {
              return _rule.default.fromEntry(entry);
            }), lexer = new Class(rules);
            return lexer;
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(Class, entries) {
            var rules = entries.map(function(entry) {
              return _rule.default.fromEntry(entry);
            }), lexer = new Class(rules);
            return lexer;
          }
        }
      ]);
      return CommonLexer2;
    }();
    exports.default = CommonLexer;
  });

  // node_modules/occam-lexers/lib/bnf/lexer.js
  var require_lexer2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _entries = _interopRequireDefault2(require_entries());
    var _lexer = _interopRequireDefault2(require_lexer());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var BNFLexer = function(CommonLexer) {
      _inherits(BNFLexer2, CommonLexer);
      function BNFLexer2() {
        _classCallCheck(this, BNFLexer2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFLexer2).apply(this, arguments));
      }
      _createClass(BNFLexer2, [
        {
          key: "matchBrokenComment",
          value: function matchBrokenComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchSingleLineComment",
          value: function matchSingleLineComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchMultiLineCommentInComment",
          value: function matchMultiLineCommentInComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchMultiLineCommentNotInComment",
          value: function matchMultiLineCommentNotInComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchSinglyQuotedStringLiteral",
          value: function matchSinglyQuotedStringLiteral(content) {
            return null;
          }
        },
        {
          key: "tokensFromBNF",
          value: function tokensFromBNF(bnf) {
            var content = bnf, tokens = _get(_getPrototypeOf(BNFLexer2.prototype), "tokenise", this).call(this, content);
            return tokens;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _lexer.default.fromNothing(BNFLexer2);
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _lexer.default.fromEntries(BNFLexer2, entries);
          }
        }
      ]);
      return BNFLexer2;
    }(_lexer.default);
    _defineProperty(BNFLexer, "entries", _entries.default);
    exports.default = BNFLexer;
  });

  // node_modules/occam-lexers/lib/basic/entries.js
  var require_entries2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        digit: "^\\d+"
      },
      {
        bracket: "^(?:\\(|\\))"
      },
      {
        operator: "^(?:\\+|\\-|\\*|\\/)"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/basic/lexer.js
  var require_lexer3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _entries = _interopRequireDefault2(require_entries2());
    var _lexer = _interopRequireDefault2(require_lexer());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var BasicLexer = function(CommonLexer) {
      _inherits(BasicLexer2, CommonLexer);
      function BasicLexer2() {
        _classCallCheck(this, BasicLexer2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BasicLexer2).apply(this, arguments));
      }
      _createClass(BasicLexer2, [
        {
          key: "matchBrokenComment",
          value: function matchBrokenComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchSingleLineComment",
          value: function matchSingleLineComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchMultiLineCommentInComment",
          value: function matchMultiLineCommentInComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchMultiLineCommentNotInComment",
          value: function matchMultiLineCommentNotInComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchRegularExpression",
          value: function matchRegularExpression(content) {
            return null;
          }
        },
        {
          key: "matchSinglyQuotedStringLiteral",
          value: function matchSinglyQuotedStringLiteral(content) {
            return null;
          }
        },
        {
          key: "matchDoublyQuotedStringLiteral",
          value: function matchDoublyQuotedStringLiteral(content) {
            return null;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _lexer.default.fromNothing(BasicLexer2);
          }
        },
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _lexer.default.fromEntries(BasicLexer2, entries);
          }
        }
      ]);
      return BasicLexer2;
    }(_lexer.default);
    _defineProperty(BasicLexer, "entries", _entries.default);
    exports.default = BasicLexer;
  });

  // node_modules/occam-lexers/lib/bnf/specialSymbols.js
  var require_specialSymbols = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.questionMark = exports.openBracket = exports.END_OF_LINE = exports.wildcard = exports.default = exports.plus = exports.separator = exports.epsilon = exports.exclamationMark = exports.closeBracket = exports.asterisk = exports.verticalBar = exports.terminator = exports.NO_WHITESPACE = void 0;
    var plus = "+";
    exports.plus = plus;
    var epsilon = "\u03B5";
    exports.epsilon = epsilon;
    var wildcard = ".";
    exports.wildcard = wildcard;
    var asterisk = "*";
    exports.asterisk = asterisk;
    var separator = "::=";
    exports.separator = separator;
    var terminator = ";";
    exports.terminator = terminator;
    var verticalBar = "|";
    exports.verticalBar = verticalBar;
    var openBracket = "(";
    exports.openBracket = openBracket;
    var closeBracket = ")";
    exports.closeBracket = closeBracket;
    var questionMark = "?";
    exports.questionMark = questionMark;
    var exclamationMark = "!";
    exports.exclamationMark = exclamationMark;
    var NO_WHITESPACE = "<NO_WHITESPACE>";
    exports.NO_WHITESPACE = NO_WHITESPACE;
    var END_OF_LINE = "<END_OF_LINE>";
    exports.END_OF_LINE = END_OF_LINE;
    var _default = {
      plus,
      epsilon,
      wildcard,
      asterisk,
      separator,
      terminator,
      verticalBar,
      openBracket,
      closeBracket,
      questionMark,
      exclamationMark,
      NO_WHITESPACE,
      END_OF_LINE
    };
    exports.default = _default;
  });

  // node_modules/occam-lexers/lib/common/token/significant/endOfLine.js
  var require_endOfLine2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _necessary = require_browser();
    var _significant = _interopRequireDefault2(require_significant());
    var _types = require_types();
    var _content = require_content();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var first = _necessary.arrayUtilities.first;
    var EndOfLineSignificantToken = function(SignificantToken) {
      _inherits(EndOfLineSignificantToken2, SignificantToken);
      function EndOfLineSignificantToken2(type, content, innerHTML, significant, index) {
        _classCallCheck(this, EndOfLineSignificantToken2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineSignificantToken2).call(this, type, content, innerHTML, significant));
        _this.index = index;
        return _this;
      }
      _createClass(EndOfLineSignificantToken2, [
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "asHTML",
          value: function asHTML() {
            var html = "\n";
            return html;
          }
        },
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfLineSignificantToken2.prototype), "clone", this).call(this, EndOfLineSignificantToken2, startPosition, endPosition, this.index);
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            var endOfLineSignificantToken = null;
            var regularExpression = /\r\n|\r|\n/, matches = content.match(regularExpression);
            if (matches !== null) {
              var firstMatch = first(matches);
              content = firstMatch;
              var contentLength = content.length;
              if (contentLength > 0) {
                var type = _types.endOfLineType, sanitisedContent = (0, _content).sanitiseContent(content), innerHTML = sanitisedContent, significant = true, index = matches.index;
                endOfLineSignificantToken = new EndOfLineSignificantToken2(type, content, innerHTML, significant, index);
              }
            }
            return endOfLineSignificantToken;
          }
        }
      ]);
      return EndOfLineSignificantToken2;
    }(_significant.default);
    exports.default = EndOfLineSignificantToken;
  });

  // node_modules/occam-lexers/lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _lexer = _interopRequireDefault2(require_lexer2());
    var _lexer1 = _interopRequireDefault2(require_lexer3());
    var _lexer2 = _interopRequireDefault2(require_lexer());
    var _rule = _interopRequireDefault2(require_rule());
    var _types = _interopRequireDefault2(require_types());
    var _specialSymbols = _interopRequireDefault2(require_specialSymbols());
    var _significant = _interopRequireDefault2(require_significant());
    var _nonSignificant = _interopRequireDefault2(require_nonSignificant());
    var _endOfLine = _interopRequireDefault2(require_endOfLine2());
    var _endOfLine1 = _interopRequireDefault2(require_endOfLine());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "BNFLexer", {
      enumerable: true,
      get: function() {
        return _lexer.default;
      }
    });
    Object.defineProperty(exports, "BasicLexer", {
      enumerable: true,
      get: function() {
        return _lexer1.default;
      }
    });
    Object.defineProperty(exports, "CommonLexer", {
      enumerable: true,
      get: function() {
        return _lexer2.default;
      }
    });
    Object.defineProperty(exports, "Rule", {
      enumerable: true,
      get: function() {
        return _rule.default;
      }
    });
    Object.defineProperty(exports, "types", {
      enumerable: true,
      get: function() {
        return _types.default;
      }
    });
    Object.defineProperty(exports, "specialSymbols", {
      enumerable: true,
      get: function() {
        return _specialSymbols.default;
      }
    });
    Object.defineProperty(exports, "SignificantToken", {
      enumerable: true,
      get: function() {
        return _significant.default;
      }
    });
    Object.defineProperty(exports, "NonSignificantToken", {
      enumerable: true,
      get: function() {
        return _nonSignificant.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine.default;
      }
    });
    Object.defineProperty(exports, "EndOfLineNonSignificantToken", {
      enumerable: true,
      get: function() {
        return _endOfLine1.default;
      }
    });
  });

  // node_modules/with-style/lib/css/entries.js
  var require_entries3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var entries = [
      {
        colour: "^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})"
      },
      {
        keyword: "^(?:!important|@media)"
      },
      {
        percentage: "^(?:[0-9]+|[0-9]*\\.[0-9]+)\\%"
      },
      {
        frequency: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:hz|khz)"
      },
      {
        fraction: "^[1-9][0-9]*?fr"
      },
      {
        length: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:px|cm|mm|in|pt|pc)"
      },
      {
        angle: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:deg|rad|grad)"
      },
      {
        time: "^(?:[0-9]+|[0-9]*\\.[0-9]+)(?:s|ms)"
      },
      {
        rems: "^(?:[0-9]+|[0-9]*\\.[0-9]+)rem"
      },
      {
        ems: "^(?:[0-9]+|[0-9]*\\.[0-9]+)em"
      },
      {
        number: "^[0-9]+|[0-9]*\\.[0-9]+"
      },
      {
        special: "^;|::|:|\\.|,|/|\\|=|~=|=|>|\\{|\\}|\\(|\\)|\\[|\\]"
      },
      {
        operator: "^^(?:and|not|only)$"
      },
      {
        identifier: "^[_a-zA-Z][_a-zA-Z0-9-]*"
      },
      {
        "unary-operator": "^\\+|\\-"
      },
      {
        unassigned: "^[^\\s]+"
      }
    ];
    var _default = entries;
    exports.default = _default;
  });

  // node_modules/with-style/lib/token/nonSignificant/comment/singleLine.js
  var require_singleLine2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var singleLineCommentType = _occamLexers.types.singleLineCommentType;
    var SingleLineCommentToken = function(NonSignificantToken) {
      _inherits(SingleLineCommentToken2, _occamLexers.NonSignificantToken);
      function SingleLineCommentToken2() {
        _classCallCheck(this, SingleLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SingleLineCommentToken2).apply(this, arguments));
      }
      _createClass(SingleLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(SingleLineCommentToken2.prototype), "clone", this).call(this, SingleLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = false;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _occamLexers.NonSignificantToken.match(SingleLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _occamLexers.NonSignificantToken.fromContent(SingleLineCommentToken2, content);
          }
        }
      ]);
      return SingleLineCommentToken2;
    }(_occamLexers.NonSignificantToken);
    _defineProperty(SingleLineCommentToken, "type", singleLineCommentType);
    _defineProperty(SingleLineCommentToken, "regularExpression", /^\/\/.*/);
    exports.default = SingleLineCommentToken;
  });

  // node_modules/with-style/lib/token/nonSignificant/comment/multiLine/endOf.js
  var require_endOf2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var endOfMultiLineCommentType = _occamLexers.types.endOfMultiLineCommentType;
    var EndOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(EndOfMultiLineCommentToken2, _occamLexers.NonSignificantToken);
      function EndOfMultiLineCommentToken2() {
        _classCallCheck(this, EndOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(EndOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(EndOfMultiLineCommentToken2.prototype), "clone", this).call(this, EndOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = false;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _occamLexers.NonSignificantToken.match(EndOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _occamLexers.NonSignificantToken.fromContent(EndOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return EndOfMultiLineCommentToken2;
    }(_occamLexers.NonSignificantToken);
    _defineProperty(EndOfMultiLineCommentToken, "type", endOfMultiLineCommentType);
    _defineProperty(EndOfMultiLineCommentToken, "regularExpression", /^\*\//);
    exports.default = EndOfMultiLineCommentToken;
  });

  // node_modules/with-style/lib/token/nonSignificant/comment/multiLine/startOf.js
  var require_startOf2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var startOfMultiLineCommentType = _occamLexers.types.startOfMultiLineCommentType;
    var StartOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(StartOfMultiLineCommentToken2, _occamLexers.NonSignificantToken);
      function StartOfMultiLineCommentToken2() {
        _classCallCheck(this, StartOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(StartOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(StartOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(StartOfMultiLineCommentToken2.prototype), "clone", this).call(this, StartOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = true;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _occamLexers.NonSignificantToken.match(StartOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _occamLexers.NonSignificantToken.fromContent(StartOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return StartOfMultiLineCommentToken2;
    }(_occamLexers.NonSignificantToken);
    _defineProperty(StartOfMultiLineCommentToken, "type", startOfMultiLineCommentType);
    _defineProperty(StartOfMultiLineCommentToken, "regularExpression", /^\/\*/);
    exports.default = StartOfMultiLineCommentToken;
  });

  // node_modules/with-style/lib/token/nonSignificant/comment/multiLine/middleOf.js
  var require_middleOf2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var middleOfMultiLineCommentType = _occamLexers.types.middleOfMultiLineCommentType;
    var MiddleOfMultiLineCommentToken = function(NonSignificantToken) {
      _inherits(MiddleOfMultiLineCommentToken2, _occamLexers.NonSignificantToken);
      function MiddleOfMultiLineCommentToken2() {
        _classCallCheck(this, MiddleOfMultiLineCommentToken2);
        return _possibleConstructorReturn(this, _getPrototypeOf(MiddleOfMultiLineCommentToken2).apply(this, arguments));
      }
      _createClass(MiddleOfMultiLineCommentToken2, [
        {
          key: "clone",
          value: function clone(startPosition, endPosition) {
            return _get(_getPrototypeOf(MiddleOfMultiLineCommentToken2.prototype), "clone", this).call(this, MiddleOfMultiLineCommentToken2, startPosition, endPosition);
          }
        },
        {
          key: "isInComment",
          value: function isInComment() {
            var inComment = true;
            return inComment;
          }
        }
      ], [
        {
          key: "match",
          value: function match(content) {
            return _occamLexers.NonSignificantToken.match(MiddleOfMultiLineCommentToken2, content);
          }
        },
        {
          key: "fromContent",
          value: function fromContent(content) {
            return _occamLexers.NonSignificantToken.fromContent(MiddleOfMultiLineCommentToken2, content);
          }
        }
      ]);
      return MiddleOfMultiLineCommentToken2;
    }(_occamLexers.NonSignificantToken);
    _defineProperty(MiddleOfMultiLineCommentToken, "type", middleOfMultiLineCommentType);
    _defineProperty(MiddleOfMultiLineCommentToken, "regularExpression", /^(?:.+?(?=\*\/)|.+$)/);
    exports.default = MiddleOfMultiLineCommentToken;
  });

  // node_modules/with-style/lib/css/lexer.js
  var require_lexer4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _entries = _interopRequireDefault2(require_entries3());
    var _singleLine = _interopRequireDefault2(require_singleLine2());
    var _endOf = _interopRequireDefault2(require_endOf2());
    var _startOf = _interopRequireDefault2(require_startOf2());
    var _middleOf = _interopRequireDefault2(require_middleOf2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var CSSLexer = function(CommonLexer) {
      _inherits(CSSLexer2, _occamLexers.CommonLexer);
      function CSSLexer2() {
        _classCallCheck(this, CSSLexer2);
        return _possibleConstructorReturn(this, _getPrototypeOf(CSSLexer2).apply(this, arguments));
      }
      _createClass(CSSLexer2, [
        {
          key: "tokeniseEndOfLines",
          value: function tokeniseEndOfLines(content) {
            return _get(_getPrototypeOf(CSSLexer2.prototype), "tokeniseEndOfLines", this).call(this, content, _occamLexers.EndOfLineNonSignificantToken);
          }
        },
        {
          key: "matchBrokenComment",
          value: function matchBrokenComment(content, inComment) {
            return null;
          }
        },
        {
          key: "matchSingleLineComment",
          value: function matchSingleLineComment(content, inComment) {
            var singleLineCommentToken = inComment ? null : _singleLine.default.match(content);
            return singleLineCommentToken;
          }
        },
        {
          key: "matchMultiLineCommentInComment",
          value: function matchMultiLineCommentInComment(content, inComment) {
            var multiLinCommentToken = inComment ? _endOf.default.match(content) || _middleOf.default.match(content) : null;
            return multiLinCommentToken;
          }
        },
        {
          key: "matchMultiLineCommentNotInComment",
          value: function matchMultiLineCommentNotInComment(content, inComment) {
            var multiLinCommentToken = inComment ? null : _startOf.default.match(content);
            return multiLinCommentToken;
          }
        },
        {
          key: "matchRegularExpression",
          value: function matchRegularExpression(content) {
            return null;
          }
        }
      ], [
        {
          key: "fromEntries",
          value: function fromEntries(entries) {
            return _occamLexers.CommonLexer.fromEntries(CSSLexer2, entries);
          }
        },
        {
          key: "fromNothing",
          value: function fromNothing() {
            return _occamLexers.CommonLexer.fromNothing(CSSLexer2);
          }
        }
      ]);
      return CSSLexer2;
    }(_occamLexers.CommonLexer);
    _defineProperty(CSSLexer, "entries", _entries.default);
    exports.default = CSSLexer;
  });

  // node_modules/occam-parsers/lib/bnf/bnf.js
  var require_bnf = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n      document              ::=  ( rule | error )+ ;\n\n      rule                  ::=  name "::=" definitions ";" ;\n\n      name                  ::=  [name] ;\n\n      definitions           ::=  definition ( "|" definition )* ;\n\n      definition            ::=  part+ ;\n\n      part                  ::=  nonTerminalPart quantifier*\n\n                              |  terminalPart quantifier*\n                              \n                              |  noWhitespacePart\n\n                              ;\n\n      nonTerminalPart       ::=  choiceOfParts\n\n                              |  sequenceOfParts\n\n                              |  ruleName lookAheadModifier?\n\n                              ;\n\n      terminalPart          ::=  significantTokenType\n \n                              |  regularExpression\n\n                              |  terminalSymbol\n \n                              |  endOfLine\n \n                              |  epsilon\n \n                              |  wildcard\n \n                              ;\n                              \n      noWhitespacePart      ::=  "<NO_WHITESPACE>" ;                              \n\n      choiceOfParts         ::=  "(" part ( "|" part )+ ")" ;\n\n      sequenceOfParts       ::=  "(" part part+ ")" ;\n\n      ruleName              ::=  [name] ;\n\n      significantTokenType  ::=  [type] ;\n\n      regularExpression     ::=  [regular-expression] ;\n\n      terminalSymbol        ::=  [string-literal] ;\n\n      endOfLine             ::=  "<END_OF_LINE>" ;\n\n      epsilon               ::=  "\u03B5" ; \n\n      wildcard              ::=  "." ;\n\n      quantifier            ::=  optionalQuantifier\n\n                              |  oneOrMoreQuantifier\n \n                              |  zeroOrMoreQuantifier\n \n                              ;\n\n      lookAheadModifier     ::=  <NO_WHITESPACE>"!" ;\n\n      optionalQuantifier    ::=  <NO_WHITESPACE>"?" ;\n\n      oneOrMoreQuantifier   ::=  <NO_WHITESPACE>"+" ;\n\n      zeroOrMoreQuantifier  ::=  <NO_WHITESPACE>"*" ;\n\n      error                 ::=  . ;\n\n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.paddingFromPaddingLength = paddingFromPaddingLength;
    function paddingFromPaddingLength(paddingLength) {
      var padding = "";
      for (var position = 0; position < paddingLength; position++) {
        padding += " ";
      }
      return padding;
    }
  });

  // node_modules/occam-parsers/lib/bnf/rule.js
  var require_rule2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _string = require_string();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Rule = function() {
      function Rule2(name, definitions, NonTerminalNode) {
        _classCallCheck(this, Rule2);
        this.name = name;
        this.definitions = definitions;
        this.NonTerminalNode = NonTerminalNode;
      }
      _createClass(Rule2, [
        {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        },
        {
          key: "getDefinitions",
          value: function getDefinitions() {
            return this.definitions;
          }
        },
        {
          key: "getNonTerminalNode",
          value: function getNonTerminalNode() {
            return this.NonTerminalNode;
          }
        },
        {
          key: "setName",
          value: function setName(name) {
            this.name = name;
          }
        },
        {
          key: "setDefinitions",
          value: function setDefinitions(definitions) {
            this.definitions = definitions;
          }
        },
        {
          key: "setNonTerminalNode",
          value: function setNonTerminalNode(NonTerminalNode) {
            this.NonTerminalNode = NonTerminalNode;
          }
        },
        {
          key: "addDefinition",
          value: function addDefinition(definition, position) {
            var definitionsIncludesDefinition = this.definitions.includes(definition);
            if (!definitionsIncludesDefinition) {
              if (position === void 0) {
                var definitionsLength = this.definitions.length;
                position = definitionsLength;
              }
              var start = position, deleteCount = 0;
              this.definitions.splice(start, deleteCount, definition);
            }
          }
        },
        {
          key: "removeDefinition",
          value: function removeDefinition(definition) {
            var definitionsIncludesDefinition = this.definitions.includes(definition);
            if (definitionsIncludesDefinition) {
              var definitionIndex = this.definitions.indexOf(definition), start = definitionIndex, deleteCount = 1;
              this.definitions.splice(start, deleteCount);
            }
          }
        },
        {
          key: "replaceDefinition",
          value: function replaceDefinition(oldDefinition, newDefinition) {
            var oldDefinitionIndex = this.definitions.indexOf(oldDefinition);
            if (oldDefinitionIndex > -1) {
              var start = oldDefinitionIndex, deleteCount = 1;
              this.definitions.splice(start, deleteCount, newDefinition);
            }
          }
        },
        {
          key: "parse",
          value: function parse(context, callback) {
            var ruleNode = null;
            context.increaseDepth();
            var tooDeep = context.isTooDeep();
            if (tooDeep) {
              throw new Error('The parse tree is too deep at rule "'.concat(this.name, '".'));
            }
            var parsed, definitionNodes;
            this.definitions.some(function(definition) {
              definitionNodes = [];
              parsed = this.parseDefinition(definition, definitionNodes, context, callback);
              if (parsed) {
                return true;
              }
            }.bind(this));
            if (parsed) {
              var ruleName = this.name, childNodes = definitionNodes, nonTerminalNode = this.NonTerminalNode.fromRuleNameAndChildNodes(ruleName, childNodes);
              ruleNode = nonTerminalNode;
            }
            context.decreaseDepth();
            return ruleNode;
          }
        },
        {
          key: "parseDefinition",
          value: function parseDefinition(definition, nodes, context, callback) {
            var parsed;
            var savedIndex = context.getSavedIndex();
            parsed = definition.parse(nodes, context, callback);
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString(maximumRuleNameLength, param) {
            var multiLine = param === void 0 ? true : param;
            var definitionsLength = this.definitions.length;
            multiLine = multiLine && definitionsLength > 1;
            var maximumPadding = (0, _string).paddingFromPaddingLength(maximumRuleNameLength), definitionsString = this.definitions.reduce(function(definitionsString1, definition) {
              var definitionString = definition.asString();
              if (definitionsString1 === "") {
                definitionsString1 = definitionString;
              } else {
                definitionsString1 = multiLine ? "".concat(definitionsString1, "\n\n").concat(maximumPadding, "   | ").concat(definitionString) : "".concat(definitionsString1, " | ").concat(definitionString);
              }
              return definitionsString1;
            }, ""), ruleName = this.name, ruleNameLength = ruleName.length, paddingLength = maximumRuleNameLength - ruleNameLength, padding = (0, _string).paddingFromPaddingLength(paddingLength);
            var semicolonString = multiLine ? "\n\n".concat(maximumPadding, "   ;") : " ;", string = "\n\n".concat(this.name).concat(padding, " ::= ").concat(definitionsString).concat(semicolonString);
            return string;
          }
        }
      ], [
        {
          key: "fromRule",
          value: function fromRule(Class, rule) {
            if (rule === void 0) {
              rule = Class;
              Class = Rule2;
            }
            var name = rule.getName(), definitions = rule.getDefinitions(), NonTerminalNode = rule.getNonTerminalNode();
            rule = new Class(name, definitions, NonTerminalNode);
            return rule;
          }
        }
      ]);
      return Rule2;
    }();
    exports.default = Rule;
  });

  // node_modules/occam-parsers/lib/utilities/array.js
  var require_array3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.even = even;
    exports.allButFirst = allButFirst;
    exports.allButFirstAndLast = allButFirstAndLast;
    exports.third = exports.push = exports.filter = exports.first = exports.last = exports.second = exports.backwardsSome = exports.forwardsSome = void 0;
    var _necessary = require_browser();
    var first = _necessary.arrayUtilities.first;
    var second = _necessary.arrayUtilities.second;
    var third = _necessary.arrayUtilities.third;
    var last = _necessary.arrayUtilities.last;
    var push = _necessary.arrayUtilities.push;
    var filter = _necessary.arrayUtilities.filter;
    var forwardsSome = _necessary.arrayUtilities.forwardsSome;
    var backwardsSome = _necessary.arrayUtilities.backwardsSome;
    exports.first = first;
    exports.second = second;
    exports.third = third;
    exports.last = last;
    exports.push = push;
    exports.filter = filter;
    exports.forwardsSome = forwardsSome;
    exports.backwardsSome = backwardsSome;
    function even(array) {
      return array.filter(function(entry, index) {
        return isEven(index);
      });
    }
    function allButFirst(array) {
      array = array.slice();
      array.shift();
      return array;
    }
    function allButFirstAndLast(array) {
      array = array.slice();
      array.shift();
      array.pop();
      return array;
    }
    function isEven(index) {
      var even1 = Math.floor(index / 2) === index / 2;
      return even1;
    }
  });

  // node_modules/occam-parsers/lib/common/parseTree.js
  var require_parseTree = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var ParseTree = function() {
      function ParseTree2(lines) {
        _classCallCheck(this, ParseTree2);
        this.lines = lines;
      }
      _createClass(ParseTree2, [
        {
          key: "clone",
          value: function clone() {
            var lines = this.lines.slice(), parseTree = new ParseTree2(lines);
            return parseTree;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width;
            var linesLength = this.lines.length;
            if (linesLength === 0) {
              width = 0;
            } else {
              var lastLine = (0, _array).last(this.lines), lastLineLength = lastLine.length;
              width = lastLineLength;
            }
            return width;
          }
        },
        {
          key: "getDepth",
          value: function getDepth() {
            var linesLength = this.lines.length, depth = linesLength;
            return depth;
          }
        },
        {
          key: "forEachLine",
          value: function forEachLine(callback) {
            this.lines.forEach(callback);
          }
        },
        {
          key: "appendToTop",
          value: function appendToTop(parseTree) {
            parseTree.forEachLine(function(line) {
              this.lines.unshift(line);
            }.bind(this));
          }
        },
        {
          key: "appendToLeft",
          value: function appendToLeft(parseTree) {
            parseTree.forEachLine(function(line, index) {
              this.lines[index] = line + this.lines[index];
            }.bind(this));
          }
        },
        {
          key: "appendToRight",
          value: function appendToRight(parseTree) {
            parseTree.forEachLine(function(line, index) {
              this.lines[index] = this.lines[index] + line;
            }.bind(this));
          }
        },
        {
          key: "appendToBottom",
          value: function appendToBottom(parseTree) {
            parseTree.forEachLine(function(line) {
              this.lines.push(line);
            }.bind(this));
          }
        },
        {
          key: "addTopMargin",
          value: function addTopMargin(topMarginDepth) {
            var width = this.getWidth(), topMarginWidth = width, topMarginString = marginStringFromMarginWidth(topMarginWidth);
            for (var index = 0; index < topMarginDepth; index++) {
              this.lines.unshift(topMarginString);
            }
          }
        },
        {
          key: "addLeftMargin",
          value: function addLeftMargin(leftMarginWidth) {
            var leftMarginString = marginStringFromMarginWidth(leftMarginWidth), linesLength = this.lines.length;
            for (var index = 0; index < linesLength; index++) {
              this.lines[index] = leftMarginString + this.lines[index];
            }
          }
        },
        {
          key: "addRightMargin",
          value: function addRightMargin(rightMarginWidth) {
            var rightMarginString = marginStringFromMarginWidth(rightMarginWidth), linesLength = this.lines.length;
            for (var index = 0; index < linesLength; index++) {
              this.lines[index] = this.lines[index] + rightMarginString;
            }
          }
        },
        {
          key: "addBottomMargin",
          value: function addBottomMargin(bottomMarginDepth) {
            var width = this.getWidth(), bottomMarginWidth = width, bottomMarginString = marginStringFromMarginWidth(bottomMarginWidth);
            for (var index = 0; index < bottomMarginDepth; index++) {
              this.lines.push(bottomMarginString);
            }
          }
        },
        {
          key: "popLine",
          value: function popLine() {
            return this.lines.pop();
          }
        },
        {
          key: "shiftLine",
          value: function shiftLine() {
            return this.lines.shift();
          }
        },
        {
          key: "pushLine",
          value: function pushLine(line) {
            this.lines.push(line);
          }
        },
        {
          key: "unshiftLine",
          value: function unshiftLine(line) {
            this.lines.unshift(line);
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = this.lines.reduce(function(string1, line) {
              string1 += line + "\n";
              return string1;
            }, "");
            return string;
          }
        }
      ]);
      return ParseTree2;
    }();
    exports.default = ParseTree;
    function marginStringFromMarginWidth(marginWidth, spaceCharacter) {
      spaceCharacter = spaceCharacter || " ";
      var marginString = "";
      for (var index = 0; index < marginWidth; index++) {
        marginString += spaceCharacter;
      }
      return marginString;
    }
  });

  // node_modules/occam-parsers/lib/common/parseTree/verticalBranch.js
  var require_verticalBranch = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _parseTree = _interopRequireDefault2(require_parseTree());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var VerticalBranchParseTree = function(ParseTree) {
      _inherits(VerticalBranchParseTree2, ParseTree);
      function VerticalBranchParseTree2(lines, verticalBranchPosition) {
        _classCallCheck(this, VerticalBranchParseTree2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalBranchParseTree2).call(this, lines));
        _this.verticalBranchPosition = verticalBranchPosition;
        return _this;
      }
      _createClass(VerticalBranchParseTree2, [
        {
          key: "getVerticalBranchPosition",
          value: function getVerticalBranchPosition() {
            return this.verticalBranchPosition;
          }
        },
        {
          key: "addLeftMargin",
          value: function addLeftMargin(leftMarginWidth) {
            _get(_getPrototypeOf(VerticalBranchParseTree2.prototype), "addLeftMargin", this).call(this, leftMarginWidth);
            this.verticalBranchPosition += leftMarginWidth;
          }
        }
      ], [
        {
          key: "fromWidth",
          value: function fromWidth(width) {
            var string = "|", verticalBranchPosition = 0, verticalBranchParseTree = VerticalBranchParseTree2.fromStringAndVerticalBranchPosition(VerticalBranchParseTree2, string, verticalBranchPosition), leftMarginWidth = Math.floor(width / 2), rightMarginWidth = width - leftMarginWidth - 1;
            verticalBranchParseTree.addLeftMargin(leftMarginWidth);
            verticalBranchParseTree.addRightMargin(rightMarginWidth);
            return verticalBranchParseTree;
          }
        },
        {
          key: "fromDepthAndVerticalBranchPosition",
          value: function fromDepthAndVerticalBranchPosition(Class, depth, verticalBranchPosition) {
            var lines = linesFromDepth(depth), args = [
              null,
              lines,
              verticalBranchPosition
            ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))();
            return verticalBranchParseTree;
          }
        },
        {
          key: "fromStringAndVerticalBranchPosition",
          value: function fromStringAndVerticalBranchPosition(Class, string, verticalBranchPosition) {
            if (verticalBranchPosition === void 0) {
              verticalBranchPosition = string;
              string = Class;
              Class = _parseTree.default;
            }
            var line = string, lines = [
              line
            ], args = [
              null,
              lines,
              verticalBranchPosition
            ], verticalBranchParseTree = new (Function.prototype.bind.apply(Class, args))();
            return verticalBranchParseTree;
          }
        }
      ]);
      return VerticalBranchParseTree2;
    }(_parseTree.default);
    exports.default = VerticalBranchParseTree;
    function linesFromDepth(depth) {
      var lines = [];
      var index = 0;
      while (index < depth) {
        lines[index++] = "";
      }
      return lines;
    }
  });

  // node_modules/occam-parsers/lib/common/parseTree/ruleName.js
  var require_ruleName = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNameParseTree = function(VerticalBranchParseTree) {
      _inherits(RuleNameParseTree2, VerticalBranchParseTree);
      function RuleNameParseTree2() {
        _classCallCheck(this, RuleNameParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameParseTree2).apply(this, arguments));
      }
      _createClass(RuleNameParseTree2, null, [
        {
          key: "fromNonTerminalNodeAndTokens",
          value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
            var ruleName = nonTerminalNode.getRuleName(), tokenIndexes = tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), string = "".concat(ruleName).concat(tokenIndexes), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), ruleNameParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(RuleNameParseTree2, string, verticalBranchPosition);
            ruleNameParseTree.appendToTop(verticalBranchParseTree);
            return ruleNameParseTree;
          }
        }
      ]);
      return RuleNameParseTree2;
    }(_verticalBranch.default);
    exports.default = RuleNameParseTree;
    function tokenIndexesFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
      var firstSignificantToken = nonTerminalNode.getFirstSignificantToken(), lastSignificantToken = nonTerminalNode.getLastSignificantToken(), firstSignificantTokenIndex = tokens.indexOf(firstSignificantToken), lastSignificantTokenIndex = tokens.indexOf(lastSignificantToken), tokenIndexes = firstSignificantTokenIndex !== lastSignificantTokenIndex ? "(".concat(firstSignificantTokenIndex, "-").concat(lastSignificantTokenIndex, ")") : "(".concat(firstSignificantTokenIndex, ")");
      return tokenIndexes;
    }
  });

  // node_modules/occam-parsers/lib/common/parseTree/horizontalBranch.js
  var require_horizontalBranch = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _parseTree = _interopRequireDefault2(require_parseTree());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var HorizontalBranchParseTree = function(ParseTree) {
      _inherits(HorizontalBranchParseTree2, ParseTree);
      function HorizontalBranchParseTree2() {
        _classCallCheck(this, HorizontalBranchParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalBranchParseTree2).apply(this, arguments));
      }
      _createClass(HorizontalBranchParseTree2, null, [
        {
          key: "fromWidth",
          value: function fromWidth(width) {
            var string = stringFromCharactersWidth(width, "-"), line = string, lines = [
              line
            ], horizontalBranchParseTree = new HorizontalBranchParseTree2(lines);
            return horizontalBranchParseTree;
          }
        }
      ]);
      return HorizontalBranchParseTree2;
    }(_parseTree.default);
    exports.default = HorizontalBranchParseTree;
    function stringFromCharactersWidth(charactersWidth, character) {
      var string = "";
      for (var index = 0; index < charactersWidth; index++) {
        string += character;
      }
      return string;
    }
  });

  // node_modules/occam-parsers/lib/common/parseTree/childNodes.js
  var require_childNodes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    var _horizontalBranch = _interopRequireDefault2(require_horizontalBranch());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ChildNodesParseTree = function(VerticalBranchParseTree) {
      _inherits(ChildNodesParseTree2, VerticalBranchParseTree);
      function ChildNodesParseTree2() {
        _classCallCheck(this, ChildNodesParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(ChildNodesParseTree2).apply(this, arguments));
      }
      _createClass(ChildNodesParseTree2, null, [
        {
          key: "fromChildNodesAndTokens",
          value: function fromChildNodesAndTokens(childNodes, tokens) {
            var childNodesParseTree;
            var childNodeParseTrees = childNodes.reduce(function(childNodeParseTrees1, childNode) {
              var childNodeParseTree = childNode.asParseTree(tokens);
              childNodeParseTrees1.push(childNodeParseTree);
              return childNodeParseTrees1;
            }, []), childNodeParseTreesLength = childNodeParseTrees.length;
            if (childNodeParseTreesLength === 1) {
              var firstChildNodeParseTree = (0, _array).first(childNodeParseTrees);
              childNodesParseTree = firstChildNodeParseTree;
            } else {
              var firstVerticalBranchPosition = void 0, lastVerticalBranchPosition = 0, childNodeParseTreesWidth = 0, childNodeParseTreesDepth = 0;
              childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                var childNodeParseTreeWidth = childNodeParseTree.getWidth(), childNodeParseTreeDepth = childNodeParseTree.getDepth();
                if (index === 0) {
                  var firstChildNodeParseTree2 = childNodeParseTree, firstChildNodeParseTreeVerticalBranchPosition = firstChildNodeParseTree2.getVerticalBranchPosition();
                  firstVerticalBranchPosition = firstChildNodeParseTreeVerticalBranchPosition;
                }
                if (index === childNodeParseTreesLength - 1) {
                  var lastChildNodeParseTree = childNodeParseTree, lastChildNodeParseTreeVerticalBranchPosition = lastChildNodeParseTree.getVerticalBranchPosition();
                  lastVerticalBranchPosition += lastChildNodeParseTreeVerticalBranchPosition;
                }
                if (index < childNodeParseTreesLength - 1) {
                  lastVerticalBranchPosition += childNodeParseTreeWidth;
                  lastVerticalBranchPosition += 1;
                  childNodeParseTreesWidth += 1;
                }
                childNodeParseTreesWidth += childNodeParseTreeWidth;
                childNodeParseTreesDepth = Math.max(childNodeParseTreesDepth, childNodeParseTreeDepth);
              });
              var width = lastVerticalBranchPosition - firstVerticalBranchPosition + 1, verticalBranchParseTree = _verticalBranch.default.fromWidth(width), horizontalBranchParseTree = _horizontalBranch.default.fromWidth(width), leftMarginWidth = firstVerticalBranchPosition, rightMarginWidth = childNodeParseTreesWidth - width - leftMarginWidth;
              verticalBranchParseTree.addLeftMargin(leftMarginWidth);
              verticalBranchParseTree.addRightMargin(rightMarginWidth);
              horizontalBranchParseTree.addLeftMargin(leftMarginWidth);
              horizontalBranchParseTree.addRightMargin(rightMarginWidth);
              var verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition();
              childNodesParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(ChildNodesParseTree2, childNodeParseTreesDepth, verticalBranchPosition);
              childNodeParseTrees.forEach(function(childNodeParseTree, index) {
                var childNodeParseTreeDepth = childNodeParseTree.getDepth(), clonedChildNodeParseTree = childNodeParseTree.clone();
                if (index < childNodeParseTreesLength - 1) {
                  var rightMarginWidth1 = 1;
                  clonedChildNodeParseTree.addRightMargin(rightMarginWidth1);
                }
                if (childNodeParseTreeDepth < childNodeParseTreesDepth) {
                  var bottomMarginDepth = childNodeParseTreesDepth - childNodeParseTreeDepth;
                  clonedChildNodeParseTree.addBottomMargin(bottomMarginDepth);
                }
                childNodesParseTree.appendToRight(clonedChildNodeParseTree);
              });
              childNodesParseTree.appendToTop(horizontalBranchParseTree);
              childNodesParseTree.appendToTop(verticalBranchParseTree);
            }
            return childNodesParseTree;
          }
        }
      ]);
      return ChildNodesParseTree2;
    }(_verticalBranch.default);
    exports.default = ChildNodesParseTree;
  });

  // node_modules/occam-parsers/lib/common/parseTree/nonTerminalNode.js
  var require_nonTerminalNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ruleName = _interopRequireDefault2(require_ruleName());
    var _childNodes = _interopRequireDefault2(require_childNodes());
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NonTerminalNodeParseTree = function(VerticalBranchParseTree) {
      _inherits(NonTerminalNodeParseTree2, VerticalBranchParseTree);
      function NonTerminalNodeParseTree2() {
        _classCallCheck(this, NonTerminalNodeParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalNodeParseTree2).apply(this, arguments));
      }
      _createClass(NonTerminalNodeParseTree2, null, [
        {
          key: "fromNonTerminalNodeAndTokens",
          value: function fromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
            var childNodes = nonTerminalNode.getChildNodes(), ruleNameParseTree = _ruleName.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), childNodesParseTree = _childNodes.default.fromChildNodesAndTokens(childNodes, tokens);
            var ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
            var childNodesParseTreeVerticalBranchPosition = childNodesParseTree.getVerticalBranchPosition(), verticalBranchPositionsDifference = ruleNameParseTreeVerticalBranchPosition - childNodesParseTreeVerticalBranchPosition;
            var leftMarginWidth = void 0;
            if (false) {
            } else if (verticalBranchPositionsDifference < 0) {
              leftMarginWidth = -verticalBranchPositionsDifference;
              ruleNameParseTree.addLeftMargin(leftMarginWidth);
            } else if (verticalBranchPositionsDifference > 0) {
              leftMarginWidth = +verticalBranchPositionsDifference;
              childNodesParseTree.addLeftMargin(leftMarginWidth);
            }
            var ruleNameParseTreeWidth = ruleNameParseTree.getWidth(), childNodesParseTreeWidth = childNodesParseTree.getWidth(), widthsDifference = ruleNameParseTreeWidth - childNodesParseTreeWidth;
            var rightMarginWidth = void 0;
            if (false) {
            } else if (widthsDifference < 0) {
              rightMarginWidth = -widthsDifference;
              ruleNameParseTree.addRightMargin(rightMarginWidth);
            } else if (widthsDifference > 0) {
              rightMarginWidth = +widthsDifference;
              childNodesParseTree.addRightMargin(rightMarginWidth);
            }
            ruleNameParseTreeVerticalBranchPosition = ruleNameParseTree.getVerticalBranchPosition();
            var ruleNameParseTreeDepth = ruleNameParseTree.getDepth(), nonTerminalNodeParseTreeDepth = ruleNameParseTreeDepth, verticalBranchPosition = ruleNameParseTreeVerticalBranchPosition, nonTerminalNodeParseTree = _verticalBranch.default.fromDepthAndVerticalBranchPosition(NonTerminalNodeParseTree2, nonTerminalNodeParseTreeDepth, verticalBranchPosition);
            nonTerminalNodeParseTree.appendToRight(ruleNameParseTree);
            nonTerminalNodeParseTree.appendToBottom(childNodesParseTree);
            return nonTerminalNodeParseTree;
          }
        }
      ]);
      return NonTerminalNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = NonTerminalNodeParseTree;
  });

  // node_modules/occam-parsers/lib/common/node/nonTerminal.js
  var require_nonTerminal = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminalNode = _interopRequireDefault2(require_nonTerminalNode());
    var _array = require_array3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var NonTerminalNode = function() {
      function NonTerminalNode2(ruleName, parentNode, childNodes) {
        _classCallCheck(this, NonTerminalNode2);
        this.ruleName = ruleName;
        this.parentNode = parentNode;
        this.childNodes = childNodes;
      }
      _createClass(NonTerminalNode2, [
        {
          key: "isTerminalNode",
          value: function isTerminalNode() {
            var terminalNode = false;
            return terminalNode;
          }
        },
        {
          key: "isNonTerminalNode",
          value: function isNonTerminalNode() {
            var nonTerminalNode = true;
            return nonTerminalNode;
          }
        },
        {
          key: "getRuleName",
          value: function getRuleName() {
            return this.ruleName;
          }
        },
        {
          key: "getParentNode",
          value: function getParentNode() {
            return this.parentNode;
          }
        },
        {
          key: "getChildNodes",
          value: function getChildNodes() {
            return this.childNodes;
          }
        },
        {
          key: "getFirstSignificantToken",
          value: function getFirstSignificantToken() {
            var firstSignificantToken = null;
            (0, _array).forwardsSome(this.childNodes, function(childNode) {
              firstSignificantToken = childNode.getFirstSignificantToken();
              if (firstSignificantToken !== null) {
                return true;
              }
            });
            return firstSignificantToken;
          }
        },
        {
          key: "getLastSignificantToken",
          value: function getLastSignificantToken() {
            var lastSignificantToken = null;
            (0, _array).backwardsSome(this.childNodes, function(childNode) {
              lastSignificantToken = childNode.getLastSignificantToken();
              if (lastSignificantToken !== null) {
                return true;
              }
            });
            return lastSignificantToken;
          }
        },
        {
          key: "setRuleName",
          value: function setRuleName(ruleName) {
            this.ruleName = ruleName;
          }
        },
        {
          key: "setParentNode",
          value: function setParentNode(parentNode) {
            this.parentNode = parentNode;
          }
        },
        {
          key: "setChildNodes",
          value: function setChildNodes(childNodes) {
            this.childNodes = childNodes;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var nonTerminalNode = this, nonTerminalNodeParseTree = _nonTerminalNode.default.fromNonTerminalNodeAndTokens(nonTerminalNode, tokens), parseTree = nonTerminalNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(Class, ruleName, childNodes) {
            if (childNodes === void 0) {
              childNodes = ruleName;
              ruleName = Class;
              Class = NonTerminalNode2;
            }
            var childNodesLength = childNodes.length;
            if (childNodesLength === 0) {
              throw new Error("There are no child nodes at rule '".concat(ruleName, "'."));
            }
            var parentNode = void 0, nonTerminalNode = new Class(ruleName, parentNode, childNodes);
            return nonTerminalNode;
          }
        }
      ]);
      return NonTerminalNode2;
    }();
    exports.default = NonTerminalNode;
  });

  // node_modules/occam-parsers/lib/bnf/node/name.js
  var require_name2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NameNode = function(NonTerminalNode) {
      _inherits(NameNode2, NonTerminalNode);
      function NameNode2() {
        _classCallCheck(this, NameNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NameNode2).apply(this, arguments));
      }
      _createClass(NameNode2, [
        {
          key: "getName",
          value: function getName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), name = terminalNodeContent;
            return name;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NameNode2, ruleName, childNodes);
          }
        }
      ]);
      return NameNode2;
    }(_nonTerminal.default);
    exports.default = NameNode;
  });

  // node_modules/occam-parsers/lib/utilities/part.js
  var require_part = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isPartRuleNamePartWithLookAhead = isPartRuleNamePartWithLookAhead;
    function isPartRuleNamePartWithLookAhead(part) {
      var partRuleNamePartWithLookAhead = false;
      var partRuleNamePart = isPartRuleNamePart(part);
      if (partRuleNamePart) {
        var ruleNamePart = part, lookAhead = ruleNamePart.isLookAhead();
        if (lookAhead) {
          partRuleNamePartWithLookAhead = true;
        }
      }
      return partRuleNamePartWithLookAhead;
    }
    function isPartRuleNamePart(part) {
      var partRuleNamePart = false;
      var partTerminalPart = part.isTerminalPart(), partNonTerminalPart = !partTerminalPart;
      if (partNonTerminalPart) {
        var nonTerminalPart = part, nonTerminalPartRuleNamePart = nonTerminalPart.isRuleNamePart();
        partRuleNamePart = nonTerminalPartRuleNamePart;
      }
      return partRuleNamePart;
    }
  });

  // node_modules/occam-parsers/lib/bnf/definition.js
  var require_definition = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array3();
    var _part = require_part();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Definition = function() {
      function Definition2(parts) {
        _classCallCheck(this, Definition2);
        this.parts = parts;
      }
      _createClass(Definition2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "getFirstPart",
          value: function getFirstPart() {
            var firstPart = (0, _array).first(this.parts);
            return firstPart;
          }
        },
        {
          key: "getPartsLength",
          value: function getPartsLength() {
            var partsLength = this.parts.length;
            return partsLength;
          }
        },
        {
          key: "getAllButFirstParts",
          value: function getAllButFirstParts() {
            var allButFirstParts = (0, _array).allButFirst(this.parts);
            return allButFirstParts;
          }
        },
        {
          key: "addPart",
          value: function addPart(part) {
            this.parts.push(part);
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var index = 0;
            parsed = parseParts(this.parts, nodes, index, context, callback);
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString = this.parts.reduce(function(partsString1, part) {
              var partString = part.asString();
              if (partsString1 === "") {
                partsString1 = partString;
              } else {
                partsString1 = "".concat(partsString1, " ").concat(partString);
              }
              return partsString1;
            }, ""), string = partsString;
            return string;
          }
        }
      ]);
      return Definition2;
    }();
    exports.default = Definition;
    function parseParts(parts, nodes, index, context, callback) {
      var parsed;
      var partsLength = parts.length;
      if (index === partsLength) {
        parsed = true;
        if (callback) {
          parsed = callback();
        }
      } else {
        var part = parts[index++];
        parsed = parsePart(part, parts, nodes, index, context, callback);
      }
      return parsed;
    }
    function parsePart(part, parts, nodes, index, context, callback) {
      var parsed;
      if (callback) {
        var partsNodes = [];
        parsed = part.parse(nodes, context, function() {
          return parseParts(parts, partsNodes, index, context, callback);
        });
        if (parsed) {
          (0, _array).push(nodes, partsNodes);
        }
      } else {
        var partRuleNamePartWithLookAhead = (0, _part).isPartRuleNamePartWithLookAhead(part);
        if (partRuleNamePartWithLookAhead) {
          var ruleNamePart = part, partsNodes = [];
          parsed = ruleNamePart.parse(nodes, context, function() {
            return parseParts(parts, partsNodes, index, context);
          });
          if (parsed) {
            (0, _array).push(nodes, partsNodes);
          }
        } else {
          parsed = part.parse(nodes, context);
          if (parsed) {
            parsed = parseParts(parts, nodes, index, context);
          }
        }
      }
      return parsed;
    }
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal.js
  var require_terminal = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var TerminalPart = function() {
      function TerminalPart2() {
        _classCallCheck(this, TerminalPart2);
      }
      _createClass(TerminalPart2, [
        {
          key: "isNonTerminalPart",
          value: function isNonTerminalPart() {
            var nonTerminalPart = false;
            return nonTerminalPart;
          }
        },
        {
          key: "isTerminalPart",
          value: function isTerminalPart() {
            var terminalPart = true;
            return terminalPart;
          }
        },
        {
          key: "isEpsilonPart",
          value: function isEpsilonPart() {
            var epsilonPart = false;
            return epsilonPart;
          }
        },
        {
          key: "isNoWhitespacePart",
          value: function isNoWhitespacePart() {
            var noWhitespacePart = false;
            return noWhitespacePart;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            return _construct(Part, _toConsumableArray(remainingArguments));
          }
        }
      ]);
      return TerminalPart2;
    }();
    exports.default = TerminalPart;
  });

  // node_modules/occam-parsers/lib/common/parseTree/terminalNode.js
  var require_terminalNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalNodeParseTree = function(VerticalBranchParseTree) {
      _inherits(TerminalNodeParseTree2, VerticalBranchParseTree);
      function TerminalNodeParseTree2() {
        _classCallCheck(this, TerminalNodeParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalNodeParseTree2).apply(this, arguments));
      }
      _createClass(TerminalNodeParseTree2, null, [
        {
          key: "fromTerminalNodeAndTokens",
          value: function fromTerminalNodeAndTokens(terminalNode, tokens) {
            var significantToken = terminalNode.getSignificantToken(), content = terminalNode.getContent(), type = significantToken.getType(), tokenIndex = tokens.indexOf(significantToken), string = "".concat(content, "[").concat(type, "](").concat(tokenIndex, ")"), stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(TerminalNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            return terminalNodeParseTree;
          }
        }
      ]);
      return TerminalNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = TerminalNodeParseTree;
  });

  // node_modules/occam-parsers/lib/common/node/terminal.js
  var require_terminal2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminalNode = _interopRequireDefault2(require_terminalNode());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TerminalNode = function() {
      function TerminalNode2(significantToken, parentNode) {
        _classCallCheck(this, TerminalNode2);
        this.significantToken = significantToken;
        this.parentNode = parentNode;
      }
      _createClass(TerminalNode2, [
        {
          key: "getSignificantToken",
          value: function getSignificantToken() {
            return this.significantToken;
          }
        },
        {
          key: "getParentNode",
          value: function getParentNode() {
            return this.parentNode;
          }
        },
        {
          key: "getFirstSignificantToken",
          value: function getFirstSignificantToken() {
            var firstSignificantToken = this.significantToken;
            return firstSignificantToken;
          }
        },
        {
          key: "getLastSignificantToken",
          value: function getLastSignificantToken() {
            var lastSignificantToken = this.significantToken;
            return lastSignificantToken;
          }
        },
        {
          key: "isNoWhitespaceNode",
          value: function isNoWhitespaceNode() {
            var noWhitespaceNode = false;
            return noWhitespaceNode;
          }
        },
        {
          key: "isEpsilonNode",
          value: function isEpsilonNode() {
            var epsilonNode = false;
            return epsilonNode;
          }
        },
        {
          key: "isTerminalNode",
          value: function isTerminalNode() {
            var terminalNode = true;
            return terminalNode;
          }
        },
        {
          key: "isNonTerminalNode",
          value: function isNonTerminalNode() {
            var nonTerminalNode = false;
            return nonTerminalNode;
          }
        },
        {
          key: "getType",
          value: function getType() {
            return this.significantToken.getType();
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            return this.significantToken.getContent();
          }
        },
        {
          key: "setSignificantToken",
          value: function setSignificantToken(significantToken) {
            this.significantToken = significantToken;
          }
        },
        {
          key: "setParentNode",
          value: function setParentNode(parentNode) {
            this.parentNode = parentNode;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var terminalNode = this, terminalNodeParseTree = _terminalNode.default.fromTerminalNodeAndTokens(terminalNode, tokens), parseTree = terminalNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromSignificantToken",
          value: function fromSignificantToken(Class, significantToken) {
            if (significantToken === void 0) {
              significantToken = Class;
              Class = TerminalNode2;
            }
            var parentNode = void 0, terminalNode = new Class(significantToken, parentNode);
            return terminalNode;
          }
        }
      ]);
      return TerminalNode2;
    }();
    exports.default = TerminalNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/significantTokenType.js
  var require_significantTokenType = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SignificantTokenTypePart = function(TerminalPart) {
      _inherits(SignificantTokenTypePart2, TerminalPart);
      function SignificantTokenTypePart2(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypePart2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypePart2).call(this));
        _this.significantTokenType = significantTokenType;
        return _this;
      }
      _createClass(SignificantTokenTypePart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var significantTokenType = significantToken.getType();
              if (significantTokenType === this.significantTokenType) {
                terminalNode = _terminal1.default.fromSignificantToken(significantToken);
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = "[".concat(this.significantTokenType, "]");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(SignificantTokenTypePart2.prototype), "clone", this).call(this, SignificantTokenTypePart2, this.significantTokenType);
          }
        }
      ]);
      return SignificantTokenTypePart2;
    }(_terminal.default);
    exports.default = SignificantTokenTypePart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/name.js
  var require_name3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var nameType = _occamLexers.types.nameType;
    var NameDefinition = function(Definition) {
      _inherits(NameDefinition2, Definition);
      function NameDefinition2() {
        _classCallCheck(this, NameDefinition2);
        var nameSignificantTokenType = nameType, nameSignificantTokenTypePart = new _significantTokenType.default(nameSignificantTokenType), parts = [
          nameSignificantTokenTypePart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NameDefinition2).call(this, parts));
      }
      return NameDefinition2;
    }(_definition.default);
    exports.default = NameDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/ruleNames.js
  var require_ruleNames = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EpsilonRuleName = exports.WildcardRuleName = exports.SignificantTokenTypeRuleName = exports.OneOrMoreQuantifierRuleName = exports.OptionalQuantifierRuleName = exports.RegularExpressionRuleName = exports.LookAheadModifierRuleName = exports.NoWhitespacePartRuleName = exports.NonTerminalPartRuleName = exports.TerminalSymbolRuleName = exports.EndOfLineRuleName = exports.ChoiceOfPartsRuleName = exports.QuantifierRuleName = exports.DefinitionRuleName = exports.RuleNameRuleName = exports.ErrorRuleName = exports.RuleRuleName = exports.NameRuleName = exports.DocumentRuleName = exports.TerminalPartRuleName = exports.PartRuleName = exports.DefinitionsRuleName = exports.SequenceOfPartsRuleName = exports.ZeroOrMoreQuantifierRuleName = void 0;
    var NameRuleName = "name";
    exports.NameRuleName = NameRuleName;
    var PartRuleName = "part";
    exports.PartRuleName = PartRuleName;
    var RuleRuleName = "rule";
    exports.RuleRuleName = RuleRuleName;
    var ErrorRuleName = "error";
    exports.ErrorRuleName = ErrorRuleName;
    var EpsilonRuleName = "epsilon";
    exports.EpsilonRuleName = EpsilonRuleName;
    var RuleNameRuleName = "ruleName";
    exports.RuleNameRuleName = RuleNameRuleName;
    var DocumentRuleName = "document";
    exports.DocumentRuleName = DocumentRuleName;
    var WildcardRuleName = "wildcard";
    exports.WildcardRuleName = WildcardRuleName;
    var EndOfLineRuleName = "endOfLine";
    exports.EndOfLineRuleName = EndOfLineRuleName;
    var DefinitionRuleName = "definition";
    exports.DefinitionRuleName = DefinitionRuleName;
    var QuantifierRuleName = "quantifier";
    exports.QuantifierRuleName = QuantifierRuleName;
    var DefinitionsRuleName = "definitions";
    exports.DefinitionsRuleName = DefinitionsRuleName;
    var TerminalPartRuleName = "terminalPart";
    exports.TerminalPartRuleName = TerminalPartRuleName;
    var ChoiceOfPartsRuleName = "choiceOfParts";
    exports.ChoiceOfPartsRuleName = ChoiceOfPartsRuleName;
    var TerminalSymbolRuleName = "terminalSymbol";
    exports.TerminalSymbolRuleName = TerminalSymbolRuleName;
    var NonTerminalPartRuleName = "nonTerminalPart";
    exports.NonTerminalPartRuleName = NonTerminalPartRuleName;
    var SequenceOfPartsRuleName = "sequenceOfParts";
    exports.SequenceOfPartsRuleName = SequenceOfPartsRuleName;
    var NoWhitespacePartRuleName = "noWhitespacePart";
    exports.NoWhitespacePartRuleName = NoWhitespacePartRuleName;
    var LookAheadModifierRuleName = "lookAheadModifier";
    exports.LookAheadModifierRuleName = LookAheadModifierRuleName;
    var RegularExpressionRuleName = "regularExpression";
    exports.RegularExpressionRuleName = RegularExpressionRuleName;
    var OptionalQuantifierRuleName = "optionalQuantifier";
    exports.OptionalQuantifierRuleName = OptionalQuantifierRuleName;
    var OneOrMoreQuantifierRuleName = "oneOrMoreQuantifier";
    exports.OneOrMoreQuantifierRuleName = OneOrMoreQuantifierRuleName;
    var ZeroOrMoreQuantifierRuleName = "zeroOrMoreQuantifier";
    exports.ZeroOrMoreQuantifierRuleName = ZeroOrMoreQuantifierRuleName;
    var SignificantTokenTypeRuleName = "significantTokenType";
    exports.SignificantTokenTypeRuleName = SignificantTokenTypeRuleName;
  });

  // node_modules/occam-parsers/lib/bnf/rule/name.js
  var require_name4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _name = _interopRequireDefault2(require_name2());
    var _name1 = _interopRequireDefault2(require_name3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NameRule = function(Rule) {
      _inherits(NameRule2, Rule);
      function NameRule2() {
        _classCallCheck(this, NameRule2);
        var nameDefinition = new _name1.default(), name = _ruleNames.NameRuleName, definitions = [
          nameDefinition
        ], Node1 = _name.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NameRule2).call(this, name, definitions, Node1));
      }
      return NameRule2;
    }(_rule.default);
    exports.default = NameRule;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal.js
  var require_nonTerminal2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var NonTerminalPart = function() {
      function NonTerminalPart2(type) {
        _classCallCheck(this, NonTerminalPart2);
        this.type = type;
      }
      _createClass(NonTerminalPart2, [
        {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        },
        {
          key: "isNonTerminalPart",
          value: function isNonTerminalPart() {
            var nonTerminalPart = true;
            return nonTerminalPart;
          }
        },
        {
          key: "isTerminalPart",
          value: function isTerminalPart() {
            var terminalPart = false;
            return terminalPart;
          }
        },
        {
          key: "isRuleNamePart",
          value: function isRuleNamePart() {
            var ruleNamePart = false;
            return ruleNamePart;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            return _construct(Part, _toConsumableArray(remainingArguments));
          }
        }
      ]);
      return NonTerminalPart2;
    }();
    exports.default = NonTerminalPart;
  });

  // node_modules/occam-parsers/lib/bnf/partTypes.js
  var require_partTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.OneOrMorePartsPartType = exports.ChoiceOfPartsPartType = exports.default = exports.ZeroOrMorePartsPartType = exports.OptionalPartPartType = exports.RuleNamePartType = exports.SequenceOfPartsPartType = void 0;
    var RuleNamePartType = "ruleNamePart";
    exports.RuleNamePartType = RuleNamePartType;
    var OptionalPartPartType = "optionalPart";
    exports.OptionalPartPartType = OptionalPartPartType;
    var ChoiceOfPartsPartType = "choiceOfParts";
    exports.ChoiceOfPartsPartType = ChoiceOfPartsPartType;
    var OneOrMorePartsPartType = "oneOrMoreParts";
    exports.OneOrMorePartsPartType = OneOrMorePartsPartType;
    var ZeroOrMorePartsPartType = "zeroOrMoreParts";
    exports.ZeroOrMorePartsPartType = ZeroOrMorePartsPartType;
    var SequenceOfPartsPartType = "sequenceOfParts";
    exports.SequenceOfPartsPartType = SequenceOfPartsPartType;
    var _default = {
      RuleNamePartType,
      OptionalPartPartType,
      ChoiceOfPartsPartType,
      OneOrMorePartsPartType,
      ZeroOrMorePartsPartType,
      SequenceOfPartsPartType
    };
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/optionalPart.js
  var require_optionalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _partTypes = require_partTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var questionMark = _occamLexers.specialSymbols.questionMark;
    var OptionalPartPart = function(NonTerminalPart) {
      _inherits(OptionalPartPart2, NonTerminalPart);
      function OptionalPartPart2(part) {
        _classCallCheck(this, OptionalPartPart2);
        var _this;
        var type = _partTypes.OptionalPartPartType;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionalPartPart2).call(this, type));
        _this.part = part;
        return _this;
      }
      _createClass(OptionalPartPart2, [
        {
          key: "getPart",
          value: function getPart() {
            return this.part;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var part = this.getPart();
            if (callback) {
              parsed = callback();
              if (!parsed) {
                parsed = part.parse(nodes, context, callback);
              }
            } else {
              parsed = part.parse(nodes, context);
              parsed = true;
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = questionMark, partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(OptionalPartPart2.prototype), "clone", this).call(this, OptionalPartPart2, this.part);
          }
        }
      ]);
      return OptionalPartPart2;
    }(_nonTerminal.default);
    exports.default = OptionalPartPart;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/collectionOfParts.js
  var require_collectionOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var CollectionOfPartsPart = function(NonTerminalPart) {
      _inherits(CollectionOfPartsPart2, NonTerminalPart);
      function CollectionOfPartsPart2(type, part) {
        _classCallCheck(this, CollectionOfPartsPart2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CollectionOfPartsPart2).call(this, type));
        _this.part = part;
        return _this;
      }
      _createClass(CollectionOfPartsPart2, [
        {
          key: "getPart",
          value: function getPart() {
            return this.part;
          }
        },
        {
          key: "asString",
          value: function asString(operatorString) {
            var partString = this.part.asString(), string = "".concat(partString).concat(operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone(Part) {
            return _get(_getPrototypeOf(CollectionOfPartsPart2.prototype), "clone", this).call(this, Part, this.part);
          }
        }
      ]);
      return CollectionOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = CollectionOfPartsPart;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/oneOrMoreParts.js
  var require_oneOrMoreParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _collectionOfParts = _interopRequireDefault2(require_collectionOfParts());
    var _array = require_array3();
    var _partTypes = require_partTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var plus = _occamLexers.specialSymbols.plus;
    var OneOrMorePartsPart = function(CollectionOfPartsPart) {
      _inherits(OneOrMorePartsPart2, CollectionOfPartsPart);
      function OneOrMorePartsPart2(part) {
        _classCallCheck(this, OneOrMorePartsPart2);
        var type = _partTypes.OneOrMorePartsPartType;
        return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMorePartsPart2).call(this, type, part));
      }
      _createClass(OneOrMorePartsPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var part = this.getPart(), savedIndex = context.getSavedIndex(), partsNodes = [];
            var count = 0;
            if (callback) {
              var parsePart = function() {
                var parsed12 = part.parse(partsNodes, context, function() {
                  var parsed2 = callback();
                  if (!parsed2) {
                    parsed2 = parsePart();
                  }
                  return parsed2;
                });
                if (parsed12) {
                  count++;
                }
                return parsed12;
              };
              parsePart();
            } else {
              for (; ; ) {
                var parsed1 = part.parse(partsNodes, context);
                if (!parsed1) {
                  break;
                }
                count++;
              }
            }
            parsed = count !== 0;
            if (parsed) {
              (0, _array).push(nodes, partsNodes);
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = plus, string = _get(_getPrototypeOf(OneOrMorePartsPart2.prototype), "asString", this).call(this, operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(OneOrMorePartsPart2.prototype), "clone", this).call(this, OneOrMorePartsPart2);
          }
        }
      ]);
      return OneOrMorePartsPart2;
    }(_collectionOfParts.default);
    exports.default = OneOrMorePartsPart;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/zeroOrMoreParts.js
  var require_zeroOrMoreParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _collectionOfParts = _interopRequireDefault2(require_collectionOfParts());
    var _partTypes = require_partTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var asterisk = _occamLexers.specialSymbols.asterisk;
    var ZeroOrMorePartsPart = function(CollectionOfPartsPart) {
      _inherits(ZeroOrMorePartsPart2, CollectionOfPartsPart);
      function ZeroOrMorePartsPart2(part) {
        _classCallCheck(this, ZeroOrMorePartsPart2);
        var type = _partTypes.ZeroOrMorePartsPartType;
        return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMorePartsPart2).call(this, type, part));
      }
      _createClass(ZeroOrMorePartsPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var part = this.getPart();
            if (callback) {
              parsed = callback();
              if (!parsed) {
                var parsePart = function() {
                  var parsed1 = part.parse(nodes, context, function() {
                    var parsed2 = callback();
                    if (!parsed2) {
                      parsed2 = parsePart();
                    }
                    return parsed2;
                  });
                  return parsed1;
                };
                parsed = parsePart();
              }
            } else {
              for (; ; ) {
                parsed = part.parse(nodes, context);
                if (!parsed) {
                  break;
                }
              }
              parsed = true;
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var operatorString = asterisk, string = _get(_getPrototypeOf(ZeroOrMorePartsPart2.prototype), "asString", this).call(this, operatorString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(ZeroOrMorePartsPart2.prototype), "clone", this).call(this, ZeroOrMorePartsPart2);
          }
        }
      ]);
      return ZeroOrMorePartsPart2;
    }(_collectionOfParts.default);
    exports.default = ZeroOrMorePartsPart;
  });

  // node_modules/occam-parsers/lib/utilities/bnf.js
  var require_bnf2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isNodeChoiceNode = isNodeChoiceNode;
    exports.isNodeRuleNameNode = isNodeRuleNameNode;
    exports.isNodeQuantifierNode = isNodeQuantifierNode;
    exports.isNodeLookAheadModifierNode = isNodeLookAheadModifierNode;
    exports.ruleNameFromQuantifierNode = ruleNameFromQuantifierNode;
    var _array = require_array3();
    var _ruleNames = require_ruleNames();
    function isNodeChoiceNode(node) {
      var nodeNoChoiceNode = false;
      var nodeTerminalNode = node.isTerminalNode();
      if (nodeTerminalNode) {
        var terminalNode = node, terminalNodeContent = terminalNode.getContent();
        nodeNoChoiceNode = terminalNodeContent === "|";
      }
      return nodeNoChoiceNode;
    }
    function isNodeRuleNameNode(node) {
      var nodeRuleNameNode = false;
      var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName();
        nodeRuleNameNode = nonTerminalNodeRuleName === _ruleNames.RuleNameRuleName;
      }
      return nodeRuleNameNode;
    }
    function isNodeQuantifierNode(node) {
      var nodeQuantifierNode = false;
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameQuantifierRuleName = ruleName === _ruleNames.QuantifierRuleName;
        nodeQuantifierNode = ruleNameQuantifierRuleName;
      }
      return nodeQuantifierNode;
    }
    function isNodeLookAheadModifierNode(node) {
      var nodeLookAheadModifierNode = false;
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName(), ruleNameLookAheadModifierRuleName = ruleName === _ruleNames.LookAheadModifierRuleName;
        nodeLookAheadModifierNode = ruleNameLookAheadModifierRuleName;
      }
      return nodeLookAheadModifierNode;
    }
    function ruleNameFromQuantifierNode(quantifierNode) {
      var nonTerminalNode;
      nonTerminalNode = quantifierNode;
      var childNodes = nonTerminalNode.getChildNodes(), firstChildNode = (0, _array).first(childNodes);
      nonTerminalNode = firstChildNode;
      var ruleName = nonTerminalNode.getRuleName();
      return ruleName;
    }
  });

  // node_modules/occam-parsers/lib/bnf/node/part.js
  var require_part2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _array = require_array3();
    var _bnf = require_bnf2();
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var PartNode = function(NonTerminalNode) {
      _inherits(PartNode2, NonTerminalNode);
      function PartNode2() {
        _classCallCheck(this, PartNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(PartNode2).apply(this, arguments));
      }
      _createClass(PartNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(PartNode2, ruleName, childNodes);
          }
        }
      ]);
      return PartNode2;
    }(_nonTerminal.default);
    exports.default = PartNode;
    function partFromNodes(nodes) {
      var part = null;
      var nodesLength = nodes.length;
      if (nodesLength === 1) {
        var node = nodes.pop(), lookAhead = false;
        part = node.generatePart(lookAhead);
      } else {
        var lastNodeQuantifierNode = isLastNodeQuantifierNode(nodes);
        if (lastNodeQuantifierNode) {
          var node = nodes.pop(), quantifierNode = node;
          part = partFromNodes(nodes);
          var ruleName = (0, _bnf).ruleNameFromQuantifierNode(quantifierNode), collectionOfPartsPart = collectionOfPartsPartFromPartAndRuleName(part, ruleName);
          part = collectionOfPartsPart;
        } else {
          nodes.shift();
          part = partFromNodes(nodes);
        }
      }
      return part;
    }
    function isLastNodeQuantifierNode(nodes) {
      var lastNode = (0, _array).last(nodes), lastNodeQuantifierNode = (0, _bnf).isNodeQuantifierNode(lastNode);
      return lastNodeQuantifierNode;
    }
    function collectionOfPartsPartFromPartAndRuleName(part, ruleName) {
      var collectionOfPartsPart;
      switch (ruleName) {
        case _ruleNames.OptionalQuantifierRuleName:
          var optionalPartPart = new _optionalPart.default(part);
          collectionOfPartsPart = optionalPartPart;
          break;
        case _ruleNames.OneOrMoreQuantifierRuleName:
          var oneOrMorePartsPart = new _oneOrMoreParts.default(part);
          collectionOfPartsPart = oneOrMorePartsPart;
          break;
        case _ruleNames.ZeroOrMoreQuantifierRuleName:
          var zeroOrMorePartsPart = new _zeroOrMoreParts.default(part);
          collectionOfPartsPart = zeroOrMorePartsPart;
          break;
      }
      return collectionOfPartsPart;
    }
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/ruleName.js
  var require_ruleName2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _partTypes = require_partTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
    var RuleNamePart = function(NonTerminalPart) {
      _inherits(RuleNamePart2, NonTerminalPart);
      function RuleNamePart2(ruleName, param) {
        var lookAhead = param === void 0 ? false : param;
        _classCallCheck(this, RuleNamePart2);
        var _this;
        var type = _partTypes.RuleNamePartType;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RuleNamePart2).call(this, type));
        _this.ruleName = ruleName;
        _this.lookAhead = lookAhead;
        return _this;
      }
      _createClass(RuleNamePart2, [
        {
          key: "getRuleName",
          value: function getRuleName() {
            return this.ruleName;
          }
        },
        {
          key: "isLookAhead",
          value: function isLookAhead() {
            return this.lookAhead;
          }
        },
        {
          key: "isRuleNamePart",
          value: function isRuleNamePart() {
            var ruleNamePart = true;
            return ruleNamePart;
          }
        },
        {
          key: "setLookAhead",
          value: function setLookAhead(lookAhead) {
            this.lookAhead = lookAhead;
          }
        },
        {
          key: "findRule",
          value: function findRule(context) {
            var ruleMap = context.getRuleMap(), rule = ruleMap[this.ruleName] || null;
            return rule;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var rule = this.findRule(context);
            if (rule === null) {
              parsed = false;
            } else {
              var ruleNode = rule.parse(context, callback);
              parsed = ruleNode !== null;
              if (parsed) {
                nodes.push(ruleNode);
              }
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var lookAheadString = this.lookAhead ? exclamationMark : "", string = "".concat(this.ruleName).concat(lookAheadString);
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(RuleNamePart2.prototype), "clone", this).call(this, RuleNamePart2, this.ruleName, this.lookAhead);
          }
        }
      ]);
      return RuleNamePart2;
    }(_nonTerminal.default);
    exports.default = RuleNamePart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/ruleName.js
  var require_ruleName3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNameDefinition = function(Definition) {
      _inherits(RuleNameDefinition2, Definition);
      function RuleNameDefinition2(ruleName) {
        _classCallCheck(this, RuleNameDefinition2);
        var ruleNameRuleNamePart = new _ruleName.default(ruleName), parts = [
          ruleNameRuleNamePart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameDefinition2).call(this, parts));
      }
      return RuleNameDefinition2;
    }(_definition.default);
    exports.default = RuleNameDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/definition/partRule/terminal.js
  var require_terminal3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalPartRuleDefinition = function(Definition) {
      _inherits(TerminalPartRuleDefinition2, Definition);
      function TerminalPartRuleDefinition2() {
        _classCallCheck(this, TerminalPartRuleDefinition2);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, terminalPartRuleName = _ruleNames.TerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), terminalPartRuleNamePart = new _ruleName.default(terminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
          terminalPartRuleNamePart,
          zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRuleDefinition2).call(this, parts));
      }
      return TerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = TerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/definition/partRule/nonTerminal.js
  var require_nonTerminal3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NonTerminalPartRuleDefinition = function(Definition) {
      _inherits(NonTerminalPartRuleDefinition2, Definition);
      function NonTerminalPartRuleDefinition2() {
        _classCallCheck(this, NonTerminalPartRuleDefinition2);
        var quantifierRuleName = _ruleNames.QuantifierRuleName, nonTerminalPartRuleName = _ruleNames.NonTerminalPartRuleName, quantifierRuleNamePart = new _ruleName.default(quantifierRuleName), nonTerminalPartRuleNamePart = new _ruleName.default(nonTerminalPartRuleName), zeroOrMoreQuantifierRuleNamePartsPart = new _zeroOrMoreParts.default(quantifierRuleNamePart), parts = [
          nonTerminalPartRuleNamePart,
          zeroOrMoreQuantifierRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRuleDefinition2).call(this, parts));
      }
      return NonTerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = NonTerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/part.js
  var require_part3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _part = _interopRequireDefault2(require_part2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _terminal = _interopRequireDefault2(require_terminal3());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var PartRule = function(Rule) {
      _inherits(PartRule2, Rule);
      function PartRule2() {
        _classCallCheck(this, PartRule2);
        var name = _ruleNames.PartRuleName, terminalPartRuleDefinition = new _terminal.default(), nonTerminalPartRuleDefinition = new _nonTerminal.default(), noWhitespacePartRuleNameDefinition = new _ruleName.default(_ruleNames.NoWhitespacePartRuleName), definitions = [
          nonTerminalPartRuleDefinition,
          terminalPartRuleDefinition,
          noWhitespacePartRuleNameDefinition
        ], Node1 = _part.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(PartRule2).call(this, name, definitions, Node1));
      }
      return PartRule2;
    }(_rule.default);
    exports.default = PartRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/rule.js
  var require_rule3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNode = function(NonTerminalNode) {
      _inherits(RuleNode2, NonTerminalNode);
      function RuleNode2() {
        _classCallCheck(this, RuleNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNode2).apply(this, arguments));
      }
      _createClass(RuleNode2, [
        {
          key: "generateRule",
          value: function generateRule(Rule) {
            var name = this.getName(), definitions = this.generateDefinitions(), Node1 = _nonTerminal.default, rule = new Rule(name, definitions, Node1);
            return rule;
          }
        },
        {
          key: "getName",
          value: function getName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), nameNode = firstChildNode, name = nameNode.getName();
            return name;
          }
        },
        {
          key: "generateDefinitions",
          value: function generateDefinitions() {
            var childNodes = this.getChildNodes(), thirdChildNode = (0, _array).third(childNodes), definitionsNode = thirdChildNode, definitions = definitionsNode.generateDefinitions();
            return definitions;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RuleNode2, ruleName, childNodes);
          }
        }
      ]);
      return RuleNode2;
    }(_nonTerminal.default);
    exports.default = RuleNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/terminalSymbol.js
  var require_terminalSymbol = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalSymbolPart = function(TerminalPart) {
      _inherits(TerminalSymbolPart2, TerminalPart);
      function TerminalSymbolPart2(content) {
        _classCallCheck(this, TerminalSymbolPart2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolPart2).call(this));
        _this.content = content;
        return _this;
      }
      _createClass(TerminalSymbolPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var content = significantToken.getContent();
              if (content === this.content) {
                terminalNode = _terminal1.default.fromSignificantToken(significantToken);
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var content = this.content.replace(/\\/, "\\\\"), string = '"'.concat(content, '"');
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(TerminalSymbolPart2.prototype), "clone", this).call(this, TerminalSymbolPart2, this.content);
          }
        }
      ]);
      return TerminalSymbolPart2;
    }(_terminal.default);
    exports.default = TerminalSymbolPart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/rule.js
  var require_rule4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var separator = _occamLexers.specialSymbols.separator;
    var terminator = _occamLexers.specialSymbols.terminator;
    var RuleDefinition = function(Definition) {
      _inherits(RuleDefinition2, Definition);
      function RuleDefinition2() {
        _classCallCheck(this, RuleDefinition2);
        var separatorTerminalSymbolContent = separator, terminatorTerminalSymbolContent = terminator, nameRuleName = _ruleNames.NameRuleName, definitionsRuleName = _ruleNames.DefinitionsRuleName, nameRuleNamePart = new _ruleName.default(nameRuleName), separatorTerminalSymbolPart = new _terminalSymbol.default(separatorTerminalSymbolContent), definitionsRuleNamePart = new _ruleName.default(definitionsRuleName), terminatorTerminalSymbolPart = new _terminalSymbol.default(terminatorTerminalSymbolContent), parts = [
          nameRuleNamePart,
          separatorTerminalSymbolPart,
          definitionsRuleNamePart,
          terminatorTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleDefinition2).call(this, parts));
      }
      return RuleDefinition2;
    }(_definition.default);
    exports.default = RuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/rule.js
  var require_rule5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _rule1 = _interopRequireDefault2(require_rule3());
    var _rule2 = _interopRequireDefault2(require_rule4());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleRule = function(Rule) {
      _inherits(RuleRule2, Rule);
      function RuleRule2() {
        _classCallCheck(this, RuleRule2);
        var ruleDefinition = new _rule2.default(), name = _ruleNames.RuleRuleName, definitions = [
          ruleDefinition
        ], Node1 = _rule1.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleRule2).call(this, name, definitions, Node1));
      }
      return RuleRule2;
    }(_rule.default);
    exports.default = RuleRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/error.js
  var require_error = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ErrorNode = function(NonTerminalNode) {
      _inherits(ErrorNode2, NonTerminalNode);
      function ErrorNode2() {
        _classCallCheck(this, ErrorNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorNode2).apply(this, arguments));
      }
      _createClass(ErrorNode2, null, [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(ErrorNode2, ruleName, childNodes);
          }
        }
      ]);
      return ErrorNode2;
    }(_nonTerminal.default);
    exports.default = ErrorNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/wildcard.js
  var require_wildcard = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var wildcard = _occamLexers.specialSymbols.wildcard;
    var WildcardPart = function(TerminalPart) {
      _inherits(WildcardPart2, TerminalPart);
      function WildcardPart2() {
        _classCallCheck(this, WildcardPart2);
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardPart2).apply(this, arguments));
      }
      _createClass(WildcardPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              terminalNode = _terminal1.default.fromSignificantToken(significantToken);
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = wildcard;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(WildcardPart2.prototype), "clone", this).call(this, WildcardPart2);
          }
        }
      ]);
      return WildcardPart2;
    }(_terminal.default);
    exports.default = WildcardPart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/error.js
  var require_error2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _wildcard = _interopRequireDefault2(require_wildcard());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ErrorDefinition = function(Definition) {
      _inherits(ErrorDefinition2, Definition);
      function ErrorDefinition2() {
        _classCallCheck(this, ErrorDefinition2);
        var wildcardPart = new _wildcard.default(), parts = [
          wildcardPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorDefinition2).call(this, parts));
      }
      return ErrorDefinition2;
    }(_definition.default);
    exports.default = ErrorDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/error.js
  var require_error3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _error = _interopRequireDefault2(require_error());
    var _error1 = _interopRequireDefault2(require_error2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ErrorRule = function(Rule) {
      _inherits(ErrorRule2, Rule);
      function ErrorRule2() {
        _classCallCheck(this, ErrorRule2);
        var errorDefinition = new _error1.default(), name = _ruleNames.ErrorRuleName, definitions = [
          errorDefinition
        ], Node1 = _error.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ErrorRule2).call(this, name, definitions, Node1));
      }
      return ErrorRule2;
    }(_rule.default);
    exports.default = ErrorRule;
  });

  // node_modules/occam-parsers/lib/common/parseTree/epsilonNode.js
  var require_epsilonNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var epsilon = _occamLexers.specialSymbols.epsilon;
    var EpsilonNodeParseTree = function(VerticalBranchParseTree) {
      _inherits(EpsilonNodeParseTree2, VerticalBranchParseTree);
      function EpsilonNodeParseTree2() {
        _classCallCheck(this, EpsilonNodeParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNodeParseTree2).apply(this, arguments));
      }
      _createClass(EpsilonNodeParseTree2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var string = epsilon, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(EpsilonNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            var epsilonNodeParseTree = terminalNodeParseTree;
            return epsilonNodeParseTree;
          }
        }
      ]);
      return EpsilonNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = EpsilonNodeParseTree;
  });

  // node_modules/occam-parsers/lib/common/node/terminal/epsilon.js
  var require_epsilon = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _epsilonNode = _interopRequireDefault2(require_epsilonNode());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var epsilon = _occamLexers.specialSymbols.epsilon;
    var EpsilonNode = function(TerminalNode) {
      _inherits(EpsilonNode2, TerminalNode);
      function EpsilonNode2() {
        _classCallCheck(this, EpsilonNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode2).apply(this, arguments));
      }
      _createClass(EpsilonNode2, [
        {
          key: "getContent",
          value: function getContent() {
            var content = epsilon;
            return content;
          }
        },
        {
          key: "isEpsilonNode",
          value: function isEpsilonNode() {
            var epsilonNode = true;
            return epsilonNode;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var epsilonNodeParseTree = _epsilonNode.default.fromNothing(), parseTree = epsilonNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var significantToken = null, epsilonNode = _terminal.default.fromSignificantToken(EpsilonNode2, significantToken);
            return epsilonNode;
          }
        }
      ]);
      return EpsilonNode2;
    }(_terminal.default);
    exports.default = EpsilonNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/epsilon.js
  var require_epsilon2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _epsilon = _interopRequireDefault2(require_epsilon());
    var _terminal = _interopRequireDefault2(require_terminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var epsilon = _occamLexers.specialSymbols.epsilon;
    var EpsilonPart = function(TerminalPart) {
      _inherits(EpsilonPart2, TerminalPart);
      function EpsilonPart2() {
        _classCallCheck(this, EpsilonPart2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonPart2).apply(this, arguments));
      }
      _createClass(EpsilonPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var epsilonNode = _epsilon.default.fromNothing();
            parsed = epsilonNode !== null;
            if (parsed) {
              nodes.push(epsilonNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            return parsed;
          }
        },
        {
          key: "isEpsilonPart",
          value: function isEpsilonPart() {
            var epsilonPart = true;
            return epsilonPart;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = epsilon;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(EpsilonPart2.prototype), "clone", this).call(this, EpsilonPart2);
          }
        }
      ]);
      return EpsilonPart2;
    }(_terminal.default);
    exports.default = EpsilonPart;
  });

  // node_modules/occam-parsers/lib/bnf/node/epsilon.js
  var require_epsilon3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _epsilon = _interopRequireDefault2(require_epsilon2());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var EpsilonNode = function(NonTerminalNode) {
      _inherits(EpsilonNode2, NonTerminalNode);
      function EpsilonNode2() {
        _classCallCheck(this, EpsilonNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonNode2).apply(this, arguments));
      }
      _createClass(EpsilonNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var epsilonPart = new _epsilon.default();
            return epsilonPart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(EpsilonNode2, ruleName, childNodes);
          }
        }
      ]);
      return EpsilonNode2;
    }(_nonTerminal.default);
    exports.default = EpsilonNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/terminalSymbol.js
  var require_terminalSymbol2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalSymbolDefinition = function(Definition) {
      _inherits(TerminalSymbolDefinition2, Definition);
      function TerminalSymbolDefinition2(content) {
        _classCallCheck(this, TerminalSymbolDefinition2);
        var terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolDefinition2).call(this, parts));
      }
      return TerminalSymbolDefinition2;
    }(_definition.default);
    exports.default = TerminalSymbolDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/epsilon.js
  var require_epsilon4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _epsilon = _interopRequireDefault2(require_epsilon3());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var epsilon = _occamLexers.specialSymbols.epsilon;
    var EpsilonRule = function(Rule) {
      _inherits(EpsilonRule2, Rule);
      function EpsilonRule2() {
        _classCallCheck(this, EpsilonRule2);
        var epsilonTerminalSymbolContent = epsilon, epsilonTerminalSymbolDefinition = new _terminalSymbol.default(epsilonTerminalSymbolContent), name = _ruleNames.EpsilonRuleName, definitions = [
          epsilonTerminalSymbolDefinition
        ], Node1 = _epsilon.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(EpsilonRule2).call(this, name, definitions, Node1));
      }
      return EpsilonRule2;
    }(_rule.default);
    exports.default = EpsilonRule;
  });

  // node_modules/occam-parsers/lib/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DEFAULT_MAXIMUM_DEPTH = void 0;
    var DEFAULT_MAXIMUM_DEPTH = 99;
    exports.DEFAULT_MAXIMUM_DEPTH = DEFAULT_MAXIMUM_DEPTH;
  });

  // node_modules/occam-parsers/lib/common/context.js
  var require_context = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Context = function() {
      function Context2(ruleMap, tokens, index, depth, maximumDepth) {
        _classCallCheck(this, Context2);
        this.ruleMap = ruleMap;
        this.tokens = tokens;
        this.index = index;
        this.depth = depth;
        this.maximumDepth = maximumDepth;
      }
      _createClass(Context2, [
        {
          key: "getRuleMap",
          value: function getRuleMap() {
            return this.ruleMap;
          }
        },
        {
          key: "getTokens",
          value: function getTokens() {
            return this.tokens;
          }
        },
        {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        },
        {
          key: "getDepth",
          value: function getDepth() {
            return this.depth;
          }
        },
        {
          key: "getMaximumDepth",
          value: function getMaximumDepth() {
            return this.maximumDepth;
          }
        },
        {
          key: "getSavedIndex",
          value: function getSavedIndex() {
            var savedIndex = this.index;
            return savedIndex;
          }
        },
        {
          key: "getNextToken",
          value: function getNextToken() {
            var nextToken = null;
            var tokensLength = this.tokens.length;
            if (this.index < tokensLength) {
              nextToken = this.tokens[this.index++];
            }
            return nextToken;
          }
        },
        {
          key: "getNextSignificantToken",
          value: function getNextSignificantToken() {
            var nextSignificantToken = null;
            var tokensLength = this.tokens.length;
            while (this.index < tokensLength) {
              var token = this.tokens[this.index++], tokenSignificant = token.isSignificant();
              if (tokenSignificant) {
                var significantToken = token;
                nextSignificantToken = significantToken;
                break;
              }
            }
            return nextSignificantToken;
          }
        },
        {
          key: "isNextTokenWhitespaceToken",
          value: function isNextTokenWhitespaceToken() {
            var nextTokenWhitespaceToken = false;
            var tokensLength = this.tokens.length;
            if (this.index < tokensLength) {
              var nextToken = this.tokens[this.index];
              nextTokenWhitespaceToken = nextToken.isWhitespaceToken();
            }
            return nextTokenWhitespaceToken;
          }
        },
        {
          key: "isTooDeep",
          value: function isTooDeep() {
            var tooDeep = this.depth > this.maximumDepth;
            return tooDeep;
          }
        },
        {
          key: "backtrack",
          value: function backtrack(savedIndex) {
            this.index = savedIndex;
          }
        },
        {
          key: "setIndex",
          value: function setIndex(index) {
            this.index = index;
          }
        },
        {
          key: "increaseDepth",
          value: function increaseDepth() {
            this.depth++;
          }
        },
        {
          key: "decreaseDepth",
          value: function decreaseDepth() {
            this.depth--;
          }
        }
      ], [
        {
          key: "fromTokensAndRuleMap",
          value: function fromTokensAndRuleMap(tokens, ruleMap) {
            var index = 0, depth = 0, maximumDepth = _constants.DEFAULT_MAXIMUM_DEPTH, context = new Context2(ruleMap, tokens, index, depth, maximumDepth);
            return context;
          }
        }
      ]);
      return Context2;
    }();
    exports.default = Context;
  });

  // node_modules/occam-parsers/lib/common/parser.js
  var require_parser = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _context = _interopRequireDefault2(require_context());
    var _array = require_array3();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var CommonParser = function() {
      function CommonParser2(startRule, ruleMap) {
        _classCallCheck(this, CommonParser2);
        this.startRule = startRule;
        this.ruleMap = ruleMap;
      }
      _createClass(CommonParser2, [
        {
          key: "getStartRule",
          value: function getStartRule() {
            return this.startRule;
          }
        },
        {
          key: "getRuleMap",
          value: function getRuleMap() {
            return this.ruleMap;
          }
        },
        {
          key: "parse",
          value: function parse(tokens, param) {
            var rule = param === void 0 ? this.startRule : param;
            var context = _context.default.fromTokensAndRuleMap(tokens, this.ruleMap), ruleNode = rule.parse(context), node = ruleNode;
            return node;
          }
        }
      ], [
        {
          key: "fromRules",
          value: function fromRules(Parser, rules) {
            var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap1, rule) {
              var ruleName = rule.getName();
              ruleMap1[ruleName] = rule;
              return ruleMap1;
            }, {}), parser = new Parser(startRule, ruleMap);
            return parser;
          }
        }
      ]);
      return CommonParser2;
    }();
    exports.default = CommonParser;
  });

  // node_modules/occam-parsers/lib/bnf/node/document.js
  var require_document2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DocumentNode = function(NonTerminalNode) {
      _inherits(DocumentNode2, NonTerminalNode);
      function DocumentNode2() {
        _classCallCheck(this, DocumentNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentNode2).apply(this, arguments));
      }
      _createClass(DocumentNode2, [
        {
          key: "generateRules",
          value: function generateRules(Rule) {
            var childNodes = this.getChildNodes(), ruleNodes = childNodes.reduce(function(ruleNodes1, childNode) {
              var childNodeNonTerminalNode = childNode.isNonTerminalNode();
              if (childNodeNonTerminalNode) {
                var nonTerminalNode = childNode, ruleName = childNode.getRuleName(), ruleNameRuleRuleName = ruleName === _ruleNames.RuleRuleName, nonTerminalNodeRuleNode = ruleNameRuleRuleName;
                if (nonTerminalNodeRuleNode) {
                  var ruleNode = nonTerminalNode;
                  ruleNodes1.push(ruleNode);
                }
              }
              return ruleNodes1;
            }, []), rules = ruleNodes.map(function(ruleNode) {
              var rule = ruleNode.generateRule(Rule);
              return rule;
            });
            return rules;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DocumentNode2, ruleName, childNodes);
          }
        }
      ]);
      return DocumentNode2;
    }(_nonTerminal.default);
    exports.default = DocumentNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/choiceOfParts.js
  var require_choiceOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _partTypes = require_partTypes();
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ChoiceOfPartsPart = function(NonTerminalPart) {
      _inherits(ChoiceOfPartsPart2, NonTerminalPart);
      function ChoiceOfPartsPart2(parts) {
        _classCallCheck(this, ChoiceOfPartsPart2);
        var _this;
        var type = _partTypes.ChoiceOfPartsPartType;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsPart2).call(this, type));
        _this.parts = parts;
        return _this;
      }
      _createClass(ChoiceOfPartsPart2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            this.parts.some(function(part) {
              parsed = part.parse(nodes, context, callback);
              if (parsed) {
                return true;
              }
            });
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString = this.parts.reduce(function(partsString1, part) {
              var partString = part.asString();
              if (partsString1 === null) {
                partsString1 = partString;
              } else {
                partsString1 = "".concat(partsString1, " | ").concat(partString);
              }
              return partsString1;
            }, null), string = "( ".concat(partsString, " )");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(ChoiceOfPartsPart2.prototype), "clone", this).call(this, ChoiceOfPartsPart2, this.parts);
          }
        }
      ], [
        {
          key: "fromNodes",
          value: function fromNodes(nodes) {
            var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
            nodes = allButFirstAndLastNodes;
            var evenNodes = (0, _array).even(nodes);
            nodes = evenNodes;
            var lookAhead = false, parts = nodes.map(function(node) {
              var part = node.generatePart(lookAhead);
              return part;
            }), choiceOfPartsPart = new ChoiceOfPartsPart2(parts);
            return choiceOfPartsPart;
          }
        }
      ]);
      return ChoiceOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = ChoiceOfPartsPart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/document.js
  var require_document3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DocumentDefinition = function(Definition) {
      _inherits(DocumentDefinition2, Definition);
      function DocumentDefinition2() {
        _classCallCheck(this, DocumentDefinition2);
        var ruleRuleName = _ruleNames.RuleRuleName, errorRuleName = _ruleNames.ErrorRuleName, ruleRuleNamePart = new _ruleName.default(ruleRuleName), errorRuleNamePart = new _ruleName.default(errorRuleName), ruleRuleNameAndErrorRuleNameParts = [
          ruleRuleNamePart,
          errorRuleNamePart
        ], choiceOfRuleRuleNameAndErrorRuleNamePartsPart = new _choiceOfParts.default(ruleRuleNameAndErrorRuleNameParts), oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart = new _oneOrMoreParts.default(choiceOfRuleRuleNameAndErrorRuleNamePartsPart), parts = [
          oneOrMoreChoiceOfRuleRuleNameAndErrorRuleNamePartsPartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentDefinition2).call(this, parts));
      }
      return DocumentDefinition2;
    }(_definition.default);
    exports.default = DocumentDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/document.js
  var require_document4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _document = _interopRequireDefault2(require_document2());
    var _document1 = _interopRequireDefault2(require_document3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DocumentRule = function(Rule) {
      _inherits(DocumentRule2, Rule);
      function DocumentRule2() {
        _classCallCheck(this, DocumentRule2);
        var documentDefinition = new _document1.default(), name = _ruleNames.DocumentRuleName, definitions = [
          documentDefinition
        ], Node1 = _document.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DocumentRule2).call(this, name, definitions, Node1));
      }
      return DocumentRule2;
    }(_rule.default);
    exports.default = DocumentRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/ruleName.js
  var require_ruleName4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNameNode = function(NonTerminalNode) {
      _inherits(RuleNameNode2, NonTerminalNode);
      function RuleNameNode2() {
        _classCallCheck(this, RuleNameNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNode2).apply(this, arguments));
      }
      _createClass(RuleNameNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var ruleName = this.getRuleName(), ruleNamePart = new _ruleName.default(ruleName, lookAhead);
            return ruleNamePart;
          }
        },
        {
          key: "getRuleName",
          value: function getRuleName() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), ruleName = terminalNodeContent;
            return ruleName;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RuleNameNode2, ruleName, childNodes);
          }
        }
      ]);
      return RuleNameNode2;
    }(_nonTerminal.default);
    exports.default = RuleNameNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/ruleName.js
  var require_ruleName5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _ruleName = _interopRequireDefault2(require_ruleName4());
    var _name = _interopRequireDefault2(require_name3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNameRule = function(Rule) {
      _inherits(RuleNameRule2, Rule);
      function RuleNameRule2() {
        _classCallCheck(this, RuleNameRule2);
        var nameDefinition = new _name.default(), name = _ruleNames.RuleNameRuleName, definitions = [
          nameDefinition
        ], Node1 = _ruleName.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameRule2).call(this, name, definitions, Node1));
      }
      return RuleNameRule2;
    }(_rule.default);
    exports.default = RuleNameRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/wildcard.js
  var require_wildcard2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _wildcard = _interopRequireDefault2(require_wildcard());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var WildcardNode = function(NonTerminalNode) {
      _inherits(WildcardNode2, NonTerminalNode);
      function WildcardNode2() {
        _classCallCheck(this, WildcardNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardNode2).apply(this, arguments));
      }
      _createClass(WildcardNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var wildcardPart = new _wildcard.default();
            return wildcardPart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(WildcardNode2, ruleName, childNodes);
          }
        }
      ]);
      return WildcardNode2;
    }(_nonTerminal.default);
    exports.default = WildcardNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/wildcard.js
  var require_wildcard3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _wildcard = _interopRequireDefault2(require_wildcard2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var wildcard = _occamLexers.specialSymbols.wildcard;
    var WildcardRule = function(Rule) {
      _inherits(WildcardRule2, Rule);
      function WildcardRule2() {
        _classCallCheck(this, WildcardRule2);
        var wildcardTerminalSymbolContent = wildcard, wildcardTerminalSymbolDefinition = new _terminalSymbol.default(wildcardTerminalSymbolContent), name = _ruleNames.WildcardRuleName, definitions = [
          wildcardTerminalSymbolDefinition
        ], Node1 = _wildcard.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(WildcardRule2).call(this, name, definitions, Node1));
      }
      return WildcardRule2;
    }(_rule.default);
    exports.default = WildcardRule;
  });

  // node_modules/occam-parsers/lib/common/parseTree/endOfLineNode.js
  var require_endOfLineNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLineNodeParseTree = function(VerticalBranchParseTree) {
      _inherits(EndOfLineNodeParseTree2, VerticalBranchParseTree);
      function EndOfLineNodeParseTree2() {
        _classCallCheck(this, EndOfLineNodeParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNodeParseTree2).apply(this, arguments));
      }
      _createClass(EndOfLineNodeParseTree2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var string = END_OF_LINE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(EndOfLineNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            var epsilonNodeParseTree = terminalNodeParseTree;
            return epsilonNodeParseTree;
          }
        }
      ]);
      return EndOfLineNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = EndOfLineNodeParseTree;
  });

  // node_modules/occam-parsers/lib/common/node/terminal/endOfLine.js
  var require_endOfLine3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _endOfLineNode = _interopRequireDefault2(require_endOfLineNode());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var EndOfLineNode = function(TerminalNode) {
      _inherits(EndOfLineNode2, TerminalNode);
      function EndOfLineNode2() {
        _classCallCheck(this, EndOfLineNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode2).apply(this, arguments));
      }
      _createClass(EndOfLineNode2, [
        {
          key: "getContent",
          value: function getContent() {
            var content = "";
            return content;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var endOfLineNodeParseTree = _endOfLineNode.default.fromNothing(), parseTree = endOfLineNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromSignificantToken",
          value: function fromSignificantToken(significantToken) {
            return _terminal.default.fromSignificantToken(EndOfLineNode2, significantToken);
          }
        }
      ]);
      return EndOfLineNode2;
    }(_terminal.default);
    exports.default = EndOfLineNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/endOfLine.js
  var require_endOfLine4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _endOfLine = _interopRequireDefault2(require_endOfLine3());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLinePart = function(TerminalPart) {
      _inherits(EndOfLinePart2, TerminalPart);
      function EndOfLinePart2() {
        _classCallCheck(this, EndOfLinePart2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLinePart2).apply(this, arguments));
      }
      _createClass(EndOfLinePart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var endOfLineNode = null;
            var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var significantTokenEndOfLineToken = significantToken.isEndOfLineToken();
              if (significantTokenEndOfLineToken) {
                endOfLineNode = _endOfLine.default.fromSignificantToken(significantToken);
              }
            }
            parsed = endOfLineNode !== null;
            if (parsed) {
              nodes.push(endOfLineNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = END_OF_LINE;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(EndOfLinePart2.prototype), "clone", this).call(this, EndOfLinePart2);
          }
        }
      ]);
      return EndOfLinePart2;
    }(_terminal.default);
    exports.default = EndOfLinePart;
  });

  // node_modules/occam-parsers/lib/bnf/node/endOfLine.js
  var require_endOfLine5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _endOfLine = _interopRequireDefault2(require_endOfLine4());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var EndOfLineNode = function(NonTerminalNode) {
      _inherits(EndOfLineNode2, NonTerminalNode);
      function EndOfLineNode2() {
        _classCallCheck(this, EndOfLineNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineNode2).apply(this, arguments));
      }
      _createClass(EndOfLineNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var endOfLinePart = new _endOfLine.default();
            return endOfLinePart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(EndOfLineNode2, ruleName, childNodes);
          }
        }
      ]);
      return EndOfLineNode2;
    }(_nonTerminal.default);
    exports.default = EndOfLineNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/endOfLine.js
  var require_endOfLine6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _endOfLine = _interopRequireDefault2(require_endOfLine5());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var END_OF_LINE = _occamLexers.specialSymbols.END_OF_LINE;
    var EndOfLineRule = function(Rule) {
      _inherits(EndOfLineRule2, Rule);
      function EndOfLineRule2() {
        _classCallCheck(this, EndOfLineRule2);
        var endOfLineTerminalSymbolContent = END_OF_LINE, endOfLineTerminalSymbolDefinition = new _terminalSymbol.default(endOfLineTerminalSymbolContent), name = _ruleNames.EndOfLineRuleName, definitions = [
          endOfLineTerminalSymbolDefinition
        ], Node1 = _endOfLine.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(EndOfLineRule2).call(this, name, definitions, Node1));
      }
      return EndOfLineRule2;
    }(_rule.default);
    exports.default = EndOfLineRule;
  });

  // node_modules/occam-parsers/lib/bnf/rule/quantifier.js
  var require_quantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _part = _interopRequireDefault2(require_part2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var QuantifierRule = function(Rule) {
      _inherits(QuantifierRule2, Rule);
      function QuantifierRule2() {
        _classCallCheck(this, QuantifierRule2);
        var name = _ruleNames.QuantifierRuleName, optionalQuantifierRuleName = _ruleNames.OptionalQuantifierRuleName, oneOrMoreQuantifierRuleName = _ruleNames.OneOrMoreQuantifierRuleName, zeroOrMoreQuantifierRuleName = _ruleNames.ZeroOrMoreQuantifierRuleName, optionalQuantifierRuleNameDefinition = new _ruleName.default(optionalQuantifierRuleName), oneOrMoreQuantifierRuleNameDefinition = new _ruleName.default(oneOrMoreQuantifierRuleName), zeroOrMoreQuantifierRuleNameDefinition = new _ruleName.default(zeroOrMoreQuantifierRuleName), definitions = [
          optionalQuantifierRuleNameDefinition,
          oneOrMoreQuantifierRuleNameDefinition,
          zeroOrMoreQuantifierRuleNameDefinition
        ], Node1 = _part.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRule2).call(this, name, definitions, Node1));
      }
      return QuantifierRule2;
    }(_rule.default);
    exports.default = QuantifierRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/definition.js
  var require_definition2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DefinitionNode = function(NonTerminalNode) {
      _inherits(DefinitionNode2, NonTerminalNode);
      function DefinitionNode2() {
        _classCallCheck(this, DefinitionNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionNode2).apply(this, arguments));
      }
      _createClass(DefinitionNode2, [
        {
          key: "generateDefinition",
          value: function generateDefinition() {
            var childNodes = this.getChildNodes(), partNodes = childNodes, lookAhead = false, parts = partNodes.map(function(partNode) {
              var part = partNode.generatePart(lookAhead);
              return part;
            }), definition = new _definition.default(parts);
            return definition;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionNode2, ruleName, childNodes);
          }
        }
      ]);
      return DefinitionNode2;
    }(_nonTerminal.default);
    exports.default = DefinitionNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/definition.js
  var require_definition3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DefinitionDefinition = function(Definition) {
      _inherits(DefinitionDefinition2, Definition);
      function DefinitionDefinition2() {
        _classCallCheck(this, DefinitionDefinition2);
        var partRuleName = _ruleNames.PartRuleName, partRuleNamePart = new _ruleName.default(partRuleName), oneOrMoreRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
          oneOrMoreRuleNamePartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionDefinition2).call(this, parts));
      }
      return DefinitionDefinition2;
    }(_definition.default);
    exports.default = DefinitionDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/definition.js
  var require_definition4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _definition1 = _interopRequireDefault2(require_definition3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DefinitionRule = function(Rule) {
      _inherits(DefinitionRule2, Rule);
      function DefinitionRule2() {
        _classCallCheck(this, DefinitionRule2);
        var name = _ruleNames.DefinitionRuleName, definitionDefinition = new _definition1.default(), definitions = [
          definitionDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionRule2).call(this, name, definitions, Node1));
      }
      return DefinitionRule2;
    }(_rule.default);
    exports.default = DefinitionRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/definitions.js
  var require_definitions = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DefinitionsNode = function(NonTerminalNode) {
      _inherits(DefinitionsNode2, NonTerminalNode);
      function DefinitionsNode2() {
        _classCallCheck(this, DefinitionsNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsNode2).apply(this, arguments));
      }
      _createClass(DefinitionsNode2, [
        {
          key: "generateDefinitions",
          value: function generateDefinitions() {
            var childNodes = this.getChildNodes(), evenChildNodes = (0, _array).even(childNodes), definitionNodes = evenChildNodes, definitions = definitionNodes.map(function(definitionNode) {
              var definition = definitionNode.generateDefinition();
              return definition;
            });
            return definitions;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(DefinitionsNode2, ruleName, childNodes);
          }
        }
      ]);
      return DefinitionsNode2;
    }(_nonTerminal.default);
    exports.default = DefinitionsNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/nonTerminal/sequenceOfParts.js
  var require_sequenceOfParts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal2());
    var _array = require_array3();
    var _partTypes = require_partTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SequenceOfPartsPart = function(NonTerminalPart) {
      _inherits(SequenceOfPartsPart2, NonTerminalPart);
      function SequenceOfPartsPart2(parts) {
        _classCallCheck(this, SequenceOfPartsPart2);
        var _this;
        var type = _partTypes.SequenceOfPartsPartType;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsPart2).call(this, type));
        _this.parts = parts;
        return _this;
      }
      _createClass(SequenceOfPartsPart2, [
        {
          key: "getParts",
          value: function getParts() {
            return this.parts;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var savedIndex = context.getSavedIndex(), partsNodes = [];
            if (callback) {
              var index = 0, partsLength = this.parts.length;
              var parseParts = function(nodes1, index1) {
                var parsed1;
                if (index1 === partsLength) {
                  parsed1 = callback();
                } else {
                  var part = this.parts[index1++];
                  parsed1 = parsePart(part, nodes1, index1);
                }
                return parsed1;
              }.bind(this);
              var parsePart = function(part, nodes1, index1) {
                var parsed1;
                var partsNodes1 = [];
                parsed1 = part.parse(nodes1, context, function() {
                  return parseParts(partsNodes1, index1);
                });
                if (parsed1) {
                  (0, _array).push(nodes1, partsNodes1);
                }
                return parsed1;
              };
              parsed = parseParts(partsNodes, index);
            } else {
              this.parts.every(function(part) {
                parsed = part.parse(partsNodes, context);
                if (parsed) {
                  return true;
                }
              });
            }
            if (parsed) {
              (0, _array).push(nodes, partsNodes);
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var partsString = this.parts.reduce(function(partsString1, part) {
              var partString = part.asString();
              if (partsString1 === null) {
                partsString1 = partString;
              } else {
                partsString1 = "".concat(partsString1, " ").concat(partString);
              }
              return partsString1;
            }, null), string = "( ".concat(partsString, " )");
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(SequenceOfPartsPart2.prototype), "clone", this).call(this, SequenceOfPartsPart2, this.parts);
          }
        }
      ], [
        {
          key: "fromNodes",
          value: function fromNodes(nodes) {
            var allButFirstAndLastNodes = (0, _array).allButFirstAndLast(nodes);
            nodes = allButFirstAndLastNodes;
            var lookAhead = false, parts = nodes.map(function(node) {
              var part = node.generatePart(lookAhead);
              return part;
            }), sequenceOfPartsPart = new SequenceOfPartsPart2(parts);
            return sequenceOfPartsPart;
          }
        }
      ]);
      return SequenceOfPartsPart2;
    }(_nonTerminal.default);
    exports.default = SequenceOfPartsPart;
  });

  // node_modules/occam-parsers/lib/bnf/definition/definitions.js
  var require_definitions2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var verticalBar = _occamLexers.specialSymbols.verticalBar;
    var DefinitionsDefinition = function(Definition) {
      _inherits(DefinitionsDefinition2, Definition);
      function DefinitionsDefinition2() {
        _classCallCheck(this, DefinitionsDefinition2);
        var definitionRuleName = _ruleNames.DefinitionRuleName, verticalBarTerminalSymbolContent = verticalBar, definitionRuleNamePart = new _ruleName.default(definitionRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), verticalBarTerminalSymbolThenDefinitionRuleNameParts = [
          verticalBarTerminalSymbolPart,
          definitionRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenDefinitionRuleNameParts), zeroOrMoreSequenceOfPartsPart = new _zeroOrMoreParts.default(sequenceOfPartsPart), parts = [
          definitionRuleNamePart,
          zeroOrMoreSequenceOfPartsPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsDefinition2).call(this, parts));
      }
      return DefinitionsDefinition2;
    }(_definition.default);
    exports.default = DefinitionsDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/definitions.js
  var require_definitions3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _definitions = _interopRequireDefault2(require_definitions());
    var _definitions1 = _interopRequireDefault2(require_definitions2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var DefinitionsRule = function(Rule) {
      _inherits(DefinitionsRule2, Rule);
      function DefinitionsRule2() {
        _classCallCheck(this, DefinitionsRule2);
        var definitionsDefinition = new _definitions1.default(), name = _ruleNames.DefinitionsRuleName, definitions = [
          definitionsDefinition
        ], Node1 = _definitions.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(DefinitionsRule2).call(this, name, definitions, Node1));
      }
      return DefinitionsRule2;
    }(_rule.default);
    exports.default = DefinitionsRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/part/terminal.js
  var require_terminal4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalPartNode = function(NonTerminalNode) {
      _inherits(TerminalPartNode2, NonTerminalNode);
      function TerminalPartNode2() {
        _classCallCheck(this, TerminalPartNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartNode2).apply(this, arguments));
      }
      _createClass(TerminalPartNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), node = firstChildNode, part = node.generatePart(lookAhead);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalPartNode2, ruleName, childNodes);
          }
        }
      ]);
      return TerminalPartNode2;
    }(_nonTerminal.default);
    exports.default = TerminalPartNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/terminalPart.js
  var require_terminalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _terminal = _interopRequireDefault2(require_terminal4());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalPartRule = function(Rule) {
      _inherits(TerminalPartRule2, Rule);
      function TerminalPartRule2() {
        _classCallCheck(this, TerminalPartRule2);
        var name = _ruleNames.TerminalPartRuleName, epsilonRuleName = _ruleNames.EpsilonRuleName, wildcardRuleName = _ruleNames.WildcardRuleName, endOfLineRuleName = _ruleNames.EndOfLineRuleName, terminalSymbolRuleName = _ruleNames.TerminalSymbolRuleName, regularExpressionRuleName = _ruleNames.RegularExpressionRuleName, significantTokenTypeRuleName = _ruleNames.SignificantTokenTypeRuleName, epsilonRuleNameDefinition = new _ruleName.default(epsilonRuleName), wildcardRuleNameDefinition = new _ruleName.default(wildcardRuleName), endOfLineRuleNameDefinition = new _ruleName.default(endOfLineRuleName), terminalSymbolRuleNameDefinition = new _ruleName.default(terminalSymbolRuleName), regularExpressionRuleNameDefinition = new _ruleName.default(regularExpressionRuleName), significantTokenTypeRuleNameDefinition = new _ruleName.default(significantTokenTypeRuleName), definitions = [
          significantTokenTypeRuleNameDefinition,
          regularExpressionRuleNameDefinition,
          terminalSymbolRuleNameDefinition,
          endOfLineRuleNameDefinition,
          epsilonRuleNameDefinition,
          wildcardRuleNameDefinition
        ], Node1 = _terminal.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalPartRule2).call(this, name, definitions, Node1));
      }
      return TerminalPartRule2;
    }(_rule.default);
    exports.default = TerminalPartRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/choiceOfParts.js
  var require_choiceOfParts2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ChoiceOfPartsNode = function(NonTerminalNode) {
      _inherits(ChoiceOfPartsNode2, NonTerminalNode);
      function ChoiceOfPartsNode2() {
        _classCallCheck(this, ChoiceOfPartsNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsNode2).apply(this, arguments));
      }
      _createClass(ChoiceOfPartsNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _choiceOfParts.default.fromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(ChoiceOfPartsNode2, ruleName, childNodes);
          }
        }
      ]);
      return ChoiceOfPartsNode2;
    }(_nonTerminal.default);
    exports.default = ChoiceOfPartsNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/choiceOfParts.js
  var require_choiceOfParts3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var verticalBar = _occamLexers.specialSymbols.verticalBar;
    var openBracket = _occamLexers.specialSymbols.openBracket;
    var closeBracket = _occamLexers.specialSymbols.closeBracket;
    var ChoiceOfPartsDefinition = function(Definition) {
      _inherits(ChoiceOfPartsDefinition2, Definition);
      function ChoiceOfPartsDefinition2() {
        _classCallCheck(this, ChoiceOfPartsDefinition2);
        var partRuleName = _ruleNames.PartRuleName, verticalBarTerminalSymbolContent = verticalBar, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), verticalBarTerminalSymbolPart = new _terminalSymbol.default(verticalBarTerminalSymbolContent), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), verticalBarTerminalSymbolThenPartRuleNameParts = [
          verticalBarTerminalSymbolPart,
          partRuleNamePart
        ], sequenceOfPartsPart = new _sequenceOfParts.default(verticalBarTerminalSymbolThenPartRuleNameParts), oneOrMoreSequenceOfPartsPart = new _oneOrMoreParts.default(sequenceOfPartsPart), parts = [
          openBracketTerminalSymbolPart,
          partRuleNamePart,
          oneOrMoreSequenceOfPartsPart,
          closeBracketTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsDefinition2).call(this, parts));
      }
      return ChoiceOfPartsDefinition2;
    }(_definition.default);
    exports.default = ChoiceOfPartsDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/choiceOfParts.js
  var require_choiceOfParts4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts2());
    var _choiceOfParts1 = _interopRequireDefault2(require_choiceOfParts3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var ChoiceOfPartsRule = function(Rule) {
      _inherits(ChoiceOfPartsRule2, Rule);
      function ChoiceOfPartsRule2() {
        _classCallCheck(this, ChoiceOfPartsRule2);
        var name = _ruleNames.ChoiceOfPartsRuleName, choiceOfPartsDefinition = new _choiceOfParts1.default(), definitions = [
          choiceOfPartsDefinition
        ], Node1 = _choiceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ChoiceOfPartsRule2).call(this, name, definitions, Node1));
      }
      return ChoiceOfPartsRule2;
    }(_rule.default);
    exports.default = ChoiceOfPartsRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/terminalSymbol.js
  var require_terminalSymbol3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var TerminalSymbolNode = function(NonTerminalNode) {
      _inherits(TerminalSymbolNode2, NonTerminalNode);
      function TerminalSymbolNode2() {
        _classCallCheck(this, TerminalSymbolNode2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolNode2).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^"((?:\\.|[^"\\])*)"$/);
        return _this;
      }
      _createClass(TerminalSymbolNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var content = this.getContent(), terminalSymbolPart = new _terminalSymbol.default(content);
            return terminalSymbolPart;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), content = secondMatch.replace(/\\\\/g, "\\").replace(/\\"/g, '"');
            return content;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(TerminalSymbolNode2, ruleName, childNodes);
          }
        }
      ]);
      return TerminalSymbolNode2;
    }(_nonTerminal.default);
    exports.default = TerminalSymbolNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/significantTokenType.js
  var require_significantTokenType2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SignificantTokenTypeDefinition = function(Definition) {
      _inherits(SignificantTokenTypeDefinition2, Definition);
      function SignificantTokenTypeDefinition2(significantTokenType) {
        _classCallCheck(this, SignificantTokenTypeDefinition2);
        var significantTokenTypePart = new _significantTokenType.default(significantTokenType), parts = [
          significantTokenTypePart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeDefinition2).call(this, parts));
      }
      return SignificantTokenTypeDefinition2;
    }(_definition.default);
    exports.default = SignificantTokenTypeDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/terminalSymbol.js
  var require_terminalSymbol4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol3());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var stringLiteralType = _occamLexers.types.stringLiteralType;
    var TerminalSymbolRule = function(Rule) {
      _inherits(TerminalSymbolRule2, Rule);
      function TerminalSymbolRule2() {
        _classCallCheck(this, TerminalSymbolRule2);
        var stringLiteralSignificantTokenType = stringLiteralType, stringLiteralSignificantTokenTypeDefinition = new _significantTokenType.default(stringLiteralSignificantTokenType), name = _ruleNames.TerminalSymbolRuleName, definitions = [
          stringLiteralSignificantTokenTypeDefinition
        ], Node1 = _terminalSymbol.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(TerminalSymbolRule2).call(this, name, definitions, Node1));
      }
      return TerminalSymbolRule2;
    }(_rule.default);
    exports.default = TerminalSymbolRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/part/nonTerminal.js
  var require_nonTerminal4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NonTerminalPartNode = function(NonTerminalNode) {
      _inherits(NonTerminalPartNode2, NonTerminalNode);
      function NonTerminalPartNode2() {
        _classCallCheck(this, NonTerminalPartNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartNode2).apply(this, arguments));
      }
      _createClass(NonTerminalPartNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = partFromNodes(nodes, lookAhead);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NonTerminalPartNode2, ruleName, childNodes);
          }
        }
      ]);
      return NonTerminalPartNode2;
    }(_nonTerminal.default);
    exports.default = NonTerminalPartNode;
    function partFromNodes(nodes, lookAhead) {
      var part = null;
      var nodesLength = nodes.length;
      if (nodesLength === 1) {
        var node = nodes.pop();
        part = node.generatePart(lookAhead);
      } else {
        nodes.pop();
        lookAhead = true;
        part = partFromNodes(nodes, lookAhead);
      }
      return part;
    }
  });

  // node_modules/occam-parsers/lib/bnf/definition/partRule/nonTerminal/ruleName.js
  var require_ruleName6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RuleNameNonTerminalPartRuleDefinition = function(Definition) {
      _inherits(RuleNameNonTerminalPartRuleDefinition2, Definition);
      function RuleNameNonTerminalPartRuleDefinition2() {
        _classCallCheck(this, RuleNameNonTerminalPartRuleDefinition2);
        var ruleNameRuleName = _ruleNames.RuleNameRuleName, lookAheadModifierRuleName = _ruleNames.LookAheadModifierRuleName, ruleNameRuleNamePart = new _ruleName.default(ruleNameRuleName), lookAheadModifierRuleNamePart = new _ruleName.default(lookAheadModifierRuleName), optionalLookAheadRuleNamePartPart = new _optionalPart.default(lookAheadModifierRuleNamePart), parts = [
          ruleNameRuleNamePart,
          optionalLookAheadRuleNamePartPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(RuleNameNonTerminalPartRuleDefinition2).call(this, parts));
      }
      return RuleNameNonTerminalPartRuleDefinition2;
    }(_definition.default);
    exports.default = RuleNameNonTerminalPartRuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/nonTerminalPart.js
  var require_nonTerminalPart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _ruleName = _interopRequireDefault2(require_ruleName3());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal4());
    var _ruleName1 = _interopRequireDefault2(require_ruleName6());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NonTerminalPartRule = function(Rule) {
      _inherits(NonTerminalPartRule2, Rule);
      function NonTerminalPartRule2() {
        _classCallCheck(this, NonTerminalPartRule2);
        var name = _ruleNames.NonTerminalPartRuleName, choiceOfPartsRuleName = _ruleNames.ChoiceOfPartsRuleName, sequenceOfPartsRuleName = _ruleNames.SequenceOfPartsRuleName, choiceOfPartsRuleNameDefinition = new _ruleName.default(choiceOfPartsRuleName), sequenceOfPartsRuleNameDefinition = new _ruleName.default(sequenceOfPartsRuleName), ruleNameNonTerminalPartRuleDefinition = new _ruleName1.default(), definitions = [
          choiceOfPartsRuleNameDefinition,
          sequenceOfPartsRuleNameDefinition,
          ruleNameNonTerminalPartRuleDefinition
        ], Node1 = _nonTerminal.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NonTerminalPartRule2).call(this, name, definitions, Node1));
      }
      return NonTerminalPartRule2;
    }(_rule.default);
    exports.default = NonTerminalPartRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/sequenceOfParts.js
  var require_sequenceOfParts2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SequenceOfPartsNode = function(NonTerminalNode) {
      _inherits(SequenceOfPartsNode2, NonTerminalNode);
      function SequenceOfPartsNode2() {
        _classCallCheck(this, SequenceOfPartsNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsNode2).apply(this, arguments));
      }
      _createClass(SequenceOfPartsNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var childNodes = this.getChildNodes(), nodes = childNodes.slice(), part = _sequenceOfParts.default.fromNodes(nodes);
            return part;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(SequenceOfPartsNode2, ruleName, childNodes);
          }
        }
      ]);
      return SequenceOfPartsNode2;
    }(_nonTerminal.default);
    exports.default = SequenceOfPartsNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/sequenceOfParts.js
  var require_sequenceOfParts3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var openBracket = _occamLexers.specialSymbols.openBracket;
    var closeBracket = _occamLexers.specialSymbols.closeBracket;
    var SequenceOfPartsDefinition = function(Definition) {
      _inherits(SequenceOfPartsDefinition2, Definition);
      function SequenceOfPartsDefinition2() {
        _classCallCheck(this, SequenceOfPartsDefinition2);
        var partRuleName = _ruleNames.PartRuleName, openBracketTerminalSymbolContent = openBracket, closeBracketTerminalSymbolContent = closeBracket, partRuleNamePart = new _ruleName.default(partRuleName), openBracketTerminalSymbolPart = new _terminalSymbol.default(openBracketTerminalSymbolContent), closeBracketTerminalSymbolPart = new _terminalSymbol.default(closeBracketTerminalSymbolContent), oneOrMorePartRuleNamePartsPart = new _oneOrMoreParts.default(partRuleNamePart), parts = [
          openBracketTerminalSymbolPart,
          partRuleNamePart,
          oneOrMorePartRuleNamePartsPart,
          closeBracketTerminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsDefinition2).call(this, parts));
      }
      return SequenceOfPartsDefinition2;
    }(_definition.default);
    exports.default = SequenceOfPartsDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/sequenceOfParts.js
  var require_sequenceOfParts4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts2());
    var _sequenceOfParts1 = _interopRequireDefault2(require_sequenceOfParts3());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SequenceOfPartsRule = function(Rule) {
      _inherits(SequenceOfPartsRule2, Rule);
      function SequenceOfPartsRule2() {
        _classCallCheck(this, SequenceOfPartsRule2);
        var name = _ruleNames.SequenceOfPartsRuleName, sequenceOfPartsDefinition = new _sequenceOfParts1.default(), definitions = [
          sequenceOfPartsDefinition
        ], Node1 = _sequenceOfParts.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(SequenceOfPartsRule2).call(this, name, definitions, Node1));
      }
      return SequenceOfPartsRule2;
    }(_rule.default);
    exports.default = SequenceOfPartsRule;
  });

  // node_modules/occam-parsers/lib/common/parseTree/noWhitespaceNode.js
  var require_noWhitespaceNode = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _verticalBranch = _interopRequireDefault2(require_verticalBranch());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespaceNodeParseTree = function(VerticalBranchParseTree) {
      _inherits(NoWhitespaceNodeParseTree2, VerticalBranchParseTree);
      function NoWhitespaceNodeParseTree2() {
        _classCallCheck(this, NoWhitespaceNodeParseTree2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNodeParseTree2).apply(this, arguments));
      }
      _createClass(NoWhitespaceNodeParseTree2, null, [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var string = NO_WHITESPACE, stringLength = string.length, verticalBranchParseTreeWidth = stringLength, verticalBranchParseTree = _verticalBranch.default.fromWidth(verticalBranchParseTreeWidth), verticalBranchPosition = verticalBranchParseTree.getVerticalBranchPosition(), terminalNodeParseTree = _verticalBranch.default.fromStringAndVerticalBranchPosition(NoWhitespaceNodeParseTree2, string, verticalBranchPosition);
            terminalNodeParseTree.appendToTop(verticalBranchParseTree);
            var epsilonNodeParseTree = terminalNodeParseTree;
            return epsilonNodeParseTree;
          }
        }
      ]);
      return NoWhitespaceNodeParseTree2;
    }(_verticalBranch.default);
    exports.default = NoWhitespaceNodeParseTree;
  });

  // node_modules/occam-parsers/lib/common/node/terminal/noWhitespace.js
  var require_noWhitespace = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _noWhitespaceNode = _interopRequireDefault2(require_noWhitespaceNode());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NoWhitespaceNode = function(TerminalNode) {
      _inherits(NoWhitespaceNode2, TerminalNode);
      function NoWhitespaceNode2() {
        _classCallCheck(this, NoWhitespaceNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespaceNode2).apply(this, arguments));
      }
      _createClass(NoWhitespaceNode2, [
        {
          key: "getType",
          value: function getType() {
            var type = null;
            return type;
          }
        },
        {
          key: "getContent",
          value: function getContent() {
            var content = "";
            return content;
          }
        },
        {
          key: "isNoWhitespaceNode",
          value: function isNoWhitespaceNode() {
            var noWhitespaceNode = true;
            return noWhitespaceNode;
          }
        },
        {
          key: "asParseTree",
          value: function asParseTree(tokens) {
            var noWhitespaceNodeParseTree = _noWhitespaceNode.default.fromNothing(), parseTree = noWhitespaceNodeParseTree;
            return parseTree;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var significantToken = null, noWhitespaceNode = _terminal.default.fromSignificantToken(NoWhitespaceNode2, significantToken);
            return noWhitespaceNode;
          }
        }
      ]);
      return NoWhitespaceNode2;
    }(_terminal.default);
    exports.default = NoWhitespaceNode;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/noWhitespace.js
  var require_noWhitespace2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _terminal = _interopRequireDefault2(require_terminal());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespacePart = function(TerminalPart) {
      _inherits(NoWhitespacePart2, TerminalPart);
      function NoWhitespacePart2() {
        _classCallCheck(this, NoWhitespacePart2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePart2).apply(this, arguments));
      }
      _createClass(NoWhitespacePart2, [
        {
          key: "isNoWhitespacePart",
          value: function isNoWhitespacePart() {
            var noWhitespacePart = true;
            return noWhitespacePart;
          }
        },
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var noWhitespaceNode = null;
            var savedIndex = context.getSavedIndex(), nextTokenWhitespaceToken = context.isNextTokenWhitespaceToken();
            if (!nextTokenWhitespaceToken) {
              noWhitespaceNode = _noWhitespace.default.fromNothing();
            }
            parsed = noWhitespaceNode !== null;
            if (parsed) {
              nodes.push(noWhitespaceNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var string = NO_WHITESPACE;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(NoWhitespacePart2.prototype), "clone", this).call(this, NoWhitespacePart2);
          }
        }
      ]);
      return NoWhitespacePart2;
    }(_terminal.default);
    exports.default = NoWhitespacePart;
  });

  // node_modules/occam-parsers/lib/bnf/node/noWhitespacePart.js
  var require_noWhitespacePart = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _noWhitespace = _interopRequireDefault2(require_noWhitespace2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NoWhitespacePartNode = function(NonTerminalNode) {
      _inherits(NoWhitespacePartNode2, NonTerminalNode);
      function NoWhitespacePartNode2() {
        _classCallCheck(this, NoWhitespacePartNode2);
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartNode2).apply(this, arguments));
      }
      _createClass(NoWhitespacePartNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var noWhitespacePart = new _noWhitespace.default();
            return noWhitespacePart;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(NoWhitespacePartNode2, ruleName, childNodes);
          }
        }
      ]);
      return NoWhitespacePartNode2;
    }(_nonTerminal.default);
    exports.default = NoWhitespacePartNode;
  });

  // node_modules/occam-parsers/lib/bnf/definition/noWhitespacePart.js
  var require_noWhitespacePart2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NO_WHITESPACE = _occamLexers.specialSymbols.NO_WHITESPACE;
    var NoWhitespacePartDefinition = function(Definition) {
      _inherits(NoWhitespacePartDefinition2, Definition);
      function NoWhitespacePartDefinition2() {
        _classCallCheck(this, NoWhitespacePartDefinition2);
        var content = NO_WHITESPACE, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartDefinition2).call(this, parts));
      }
      return NoWhitespacePartDefinition2;
    }(_definition.default);
    exports.default = NoWhitespacePartDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/noWhitespacePart.js
  var require_noWhitespacePart3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _noWhitespacePart = _interopRequireDefault2(require_noWhitespacePart());
    var _noWhitespacePart1 = _interopRequireDefault2(require_noWhitespacePart2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var NoWhitespacePartRule = function(Rule) {
      _inherits(NoWhitespacePartRule2, Rule);
      function NoWhitespacePartRule2() {
        _classCallCheck(this, NoWhitespacePartRule2);
        var noWhitespacePartDefinition = new _noWhitespacePart1.default(), name = _ruleNames.NoWhitespacePartRuleName, definitions = [
          noWhitespacePartDefinition
        ], Node1 = _noWhitespacePart.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(NoWhitespacePartRule2).call(this, name, definitions, Node1));
      }
      return NoWhitespacePartRule2;
    }(_rule.default);
    exports.default = NoWhitespacePartRule;
  });

  // node_modules/occam-parsers/lib/bnf/definition/lookAheadModifierRule.js
  var require_lookAheadModifierRule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var exclamationMark = _occamLexers.specialSymbols.exclamationMark;
    var LookAheadModifierRuleDefinition = function(Definition) {
      _inherits(LookAheadModifierRuleDefinition2, Definition);
      function LookAheadModifierRuleDefinition2() {
        _classCallCheck(this, LookAheadModifierRuleDefinition2);
        var content = exclamationMark, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRuleDefinition2).call(this, parts));
      }
      return LookAheadModifierRuleDefinition2;
    }(_definition.default);
    exports.default = LookAheadModifierRuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/lookAheadModifier.js
  var require_lookAheadModifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _lookAheadModifierRule = _interopRequireDefault2(require_lookAheadModifierRule());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var LookAheadModifierRule = function(Rule) {
      _inherits(LookAheadModifierRule2, Rule);
      function LookAheadModifierRule2() {
        _classCallCheck(this, LookAheadModifierRule2);
        var name = _ruleNames.LookAheadModifierRuleName, lookAheadModifierRuleDefinition = new _lookAheadModifierRule.default(), definitions = [
          lookAheadModifierRuleDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(LookAheadModifierRule2).call(this, name, definitions, Node1));
      }
      return LookAheadModifierRule2;
    }(_rule.default);
    exports.default = LookAheadModifierRule;
  });

  // node_modules/occam-parsers/lib/bnf/part/terminal/regularExpression.js
  var require_regularExpression2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _terminal = _interopRequireDefault2(require_terminal());
    var _terminal1 = _interopRequireDefault2(require_terminal2());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RegularExpressionPart = function(TerminalPart) {
      _inherits(RegularExpressionPart2, TerminalPart);
      function RegularExpressionPart2(regularExpression) {
        _classCallCheck(this, RegularExpressionPart2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionPart2).call(this));
        _this.regularExpression = regularExpression;
        return _this;
      }
      _createClass(RegularExpressionPart2, [
        {
          key: "parse",
          value: function parse(nodes, context, callback) {
            var parsed;
            var terminalNode = null;
            var savedIndex = context.getSavedIndex(), nextSignificantToken = context.getNextSignificantToken(), significantToken = nextSignificantToken;
            if (significantToken !== null) {
              var content = significantToken.getContent(), matches = content.match(this.regularExpression);
              if (matches !== null) {
                var firstMatch = (0, _array).first(matches);
                if (firstMatch === content) {
                  terminalNode = _terminal1.default.fromSignificantToken(significantToken);
                }
              }
            }
            parsed = terminalNode !== null;
            if (parsed) {
              nodes.push(terminalNode);
              if (callback) {
                parsed = callback();
                if (!parsed) {
                  nodes.pop();
                }
              }
            }
            if (!parsed) {
              context.backtrack(savedIndex);
            }
            return parsed;
          }
        },
        {
          key: "asString",
          value: function asString() {
            var regularExpressionString = this.regularExpression.toString(), string = regularExpressionString;
            return string;
          }
        },
        {
          key: "clone",
          value: function clone() {
            return _get(_getPrototypeOf(RegularExpressionPart2.prototype), "clone", this).call(this, RegularExpressionPart2, this.regularExpression);
          }
        }
      ]);
      return RegularExpressionPart2;
    }(_terminal.default);
    exports.default = RegularExpressionPart;
  });

  // node_modules/occam-parsers/lib/bnf/node/regularExpression.js
  var require_regularExpression3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _regularExpression = _interopRequireDefault2(require_regularExpression2());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var RegularExpressionNode = function(NonTerminalNode) {
      _inherits(RegularExpressionNode2, NonTerminalNode);
      function RegularExpressionNode2() {
        _classCallCheck(this, RegularExpressionNode2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionNode2).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\/((?:\\.|[^\/])*)\/$/);
        return _this;
      }
      _createClass(RegularExpressionNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var regularExpression = this.getRegularExpression(), regularExpressionPart = new _regularExpression.default(regularExpression);
            return regularExpressionPart;
          }
        },
        {
          key: "getRegularExpression",
          value: function getRegularExpression() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), pattern = secondMatch, regularExpression = new RegExp(pattern);
            return regularExpression;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(RegularExpressionNode2, ruleName, childNodes);
          }
        }
      ]);
      return RegularExpressionNode2;
    }(_nonTerminal.default);
    exports.default = RegularExpressionNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/regularExpression.js
  var require_regularExpression4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _regularExpression = _interopRequireDefault2(require_regularExpression3());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var regularExpressionType = _occamLexers.types.regularExpressionType;
    var RegularExpressionRule = function(Rule) {
      _inherits(RegularExpressionRule2, Rule);
      function RegularExpressionRule2() {
        _classCallCheck(this, RegularExpressionRule2);
        var regularExpressionSignificantTokenType = regularExpressionType, regularExpressionSignificantTokenTypeDefinition = new _significantTokenType.default(regularExpressionSignificantTokenType), name = _ruleNames.RegularExpressionRuleName, definitions = [
          regularExpressionSignificantTokenTypeDefinition
        ], Node1 = _regularExpression.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(RegularExpressionRule2).call(this, name, definitions, Node1));
      }
      return RegularExpressionRule2;
    }(_rule.default);
    exports.default = RegularExpressionRule;
  });

  // node_modules/occam-parsers/lib/bnf/definition/quantifierRule.js
  var require_quantifierRule = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _definition = _interopRequireDefault2(require_definition());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var QuantifierRuleDefinition = function(Definition) {
      _inherits(QuantifierRuleDefinition2, Definition);
      function QuantifierRuleDefinition2(terminalSymbolContent) {
        _classCallCheck(this, QuantifierRuleDefinition2);
        var content = terminalSymbolContent, terminalSymbolPart = new _terminalSymbol.default(content), parts = [
          terminalSymbolPart
        ];
        return _possibleConstructorReturn(this, _getPrototypeOf(QuantifierRuleDefinition2).call(this, parts));
      }
      return QuantifierRuleDefinition2;
    }(_definition.default);
    exports.default = QuantifierRuleDefinition;
  });

  // node_modules/occam-parsers/lib/bnf/rule/optionalQuantifier.js
  var require_optionalQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var questionMark = _occamLexers.specialSymbols.questionMark;
    var OptionalQuantifierRule = function(Rule) {
      _inherits(OptionalQuantifierRule2, Rule);
      function OptionalQuantifierRule2() {
        _classCallCheck(this, OptionalQuantifierRule2);
        var name = _ruleNames.OptionalQuantifierRuleName, optionalQuantifierTerminalSymbolContent = questionMark, optionalQuantifierRuleDefinition = new _quantifierRule.default(optionalQuantifierTerminalSymbolContent), definitions = [
          optionalQuantifierRuleDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(OptionalQuantifierRule2).call(this, name, definitions, Node1));
      }
      return OptionalQuantifierRule2;
    }(_rule.default);
    exports.default = OptionalQuantifierRule;
  });

  // node_modules/occam-parsers/lib/bnf/rule/oneOrMoreQuantifier.js
  var require_oneOrMoreQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var plus = _occamLexers.specialSymbols.plus;
    var OneOrMoreQuantifierRule = function(Rule) {
      _inherits(OneOrMoreQuantifierRule2, Rule);
      function OneOrMoreQuantifierRule2() {
        _classCallCheck(this, OneOrMoreQuantifierRule2);
        var name = _ruleNames.OneOrMoreQuantifierRuleName, oneOrMoreQuantifierTerminalSymbolContent = plus, oneOrMoreQuantifierRuleDefinition = new _quantifierRule.default(oneOrMoreQuantifierTerminalSymbolContent), definitions = [
          oneOrMoreQuantifierRuleDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(OneOrMoreQuantifierRule2).call(this, name, definitions, Node1));
      }
      return OneOrMoreQuantifierRule2;
    }(_rule.default);
    exports.default = OneOrMoreQuantifierRule;
  });

  // node_modules/occam-parsers/lib/bnf/rule/zeroOrMoreQuantifier.js
  var require_zeroOrMoreQuantifier = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _definition = _interopRequireDefault2(require_definition2());
    var _quantifierRule = _interopRequireDefault2(require_quantifierRule());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var asterisk = _occamLexers.specialSymbols.asterisk;
    var ZeroOrMoreQuantifierRule = function(Rule) {
      _inherits(ZeroOrMoreQuantifierRule2, Rule);
      function ZeroOrMoreQuantifierRule2() {
        _classCallCheck(this, ZeroOrMoreQuantifierRule2);
        var name = _ruleNames.ZeroOrMoreQuantifierRuleName, zeroOrMoreQuantifierTerminalSymbolContent = asterisk, zeroOrMoreQuantifierRuleDefinition = new _quantifierRule.default(zeroOrMoreQuantifierTerminalSymbolContent), definitions = [
          zeroOrMoreQuantifierRuleDefinition
        ], Node1 = _definition.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(ZeroOrMoreQuantifierRule2).call(this, name, definitions, Node1));
      }
      return ZeroOrMoreQuantifierRule2;
    }(_rule.default);
    exports.default = ZeroOrMoreQuantifierRule;
  });

  // node_modules/occam-parsers/lib/bnf/node/significantTokenType.js
  var require_significantTokenType3 = __commonJS((exports, module) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var SignificantTokenTypeNode = function(NonTerminalNode) {
      _inherits(SignificantTokenTypeNode2, NonTerminalNode);
      function SignificantTokenTypeNode2() {
        _classCallCheck(this, SignificantTokenTypeNode2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeNode2).apply(this, arguments));
        _defineProperty(_assertThisInitialized(_this), "regularExpression", /^\[([^\]]+)]$/);
        return _this;
      }
      _createClass(SignificantTokenTypeNode2, [
        {
          key: "generatePart",
          value: function generatePart(lookAhead) {
            var significantTokenType = this.getSignificantTokenType(), significantTokenTypePart = new _significantTokenType.default(significantTokenType);
            return significantTokenTypePart;
          }
        },
        {
          key: "getSignificantTokenType",
          value: function getSignificantTokenType() {
            var childNodes = this.getChildNodes(), firstChildNode = (0, _array).first(childNodes), terminalNode = firstChildNode, terminalNodeContent = terminalNode.getContent(), matches = terminalNodeContent.match(this.regularExpression), secondMatch = (0, _array).second(matches), significantTokenType = secondMatch;
            return significantTokenType;
          }
        }
      ], [
        {
          key: "fromRuleNameAndChildNodes",
          value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
            return _nonTerminal.default.fromRuleNameAndChildNodes(SignificantTokenTypeNode2, ruleName, childNodes);
          }
        }
      ]);
      return SignificantTokenTypeNode2;
    }(_nonTerminal.default);
    exports.default = SignificantTokenTypeNode;
    module.exports = SignificantTokenTypeNode;
  });

  // node_modules/occam-parsers/lib/bnf/rule/significantTokenType.js
  var require_significantTokenType4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _rule = _interopRequireDefault2(require_rule2());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType3());
    var _significantTokenType1 = _interopRequireDefault2(require_significantTokenType2());
    var _ruleNames = require_ruleNames();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var typeType = _occamLexers.types.typeType;
    var SignificantTokenTypeRule = function(Rule) {
      _inherits(SignificantTokenTypeRule2, Rule);
      function SignificantTokenTypeRule2() {
        _classCallCheck(this, SignificantTokenTypeRule2);
        var typeSignificantTokenType = typeType, typeSignificantTokenTypeDefinition = new _significantTokenType1.default(typeSignificantTokenType), name = _ruleNames.SignificantTokenTypeRuleName, definitions = [
          typeSignificantTokenTypeDefinition
        ], Node1 = _significantTokenType.default;
        return _possibleConstructorReturn(this, _getPrototypeOf(SignificantTokenTypeRule2).call(this, name, definitions, Node1));
      }
      return SignificantTokenTypeRule2;
    }(_rule.default);
    exports.default = SignificantTokenTypeRule;
  });

  // node_modules/occam-parsers/lib/bnf/parser.js
  var require_parser2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _bnf = _interopRequireDefault2(require_bnf());
    var _rule = _interopRequireDefault2(require_rule2());
    var _name = _interopRequireDefault2(require_name4());
    var _part = _interopRequireDefault2(require_part3());
    var _rule1 = _interopRequireDefault2(require_rule5());
    var _error = _interopRequireDefault2(require_error3());
    var _epsilon = _interopRequireDefault2(require_epsilon4());
    var _parser = _interopRequireDefault2(require_parser());
    var _document = _interopRequireDefault2(require_document4());
    var _ruleName = _interopRequireDefault2(require_ruleName5());
    var _wildcard = _interopRequireDefault2(require_wildcard3());
    var _endOfLine = _interopRequireDefault2(require_endOfLine6());
    var _quantifier = _interopRequireDefault2(require_quantifier());
    var _definition = _interopRequireDefault2(require_definition4());
    var _definitions = _interopRequireDefault2(require_definitions3());
    var _terminalPart = _interopRequireDefault2(require_terminalPart());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts4());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol4());
    var _nonTerminalPart = _interopRequireDefault2(require_nonTerminalPart());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts4());
    var _noWhitespacePart = _interopRequireDefault2(require_noWhitespacePart3());
    var _lookAheadModifier = _interopRequireDefault2(require_lookAheadModifier());
    var _regularExpression = _interopRequireDefault2(require_regularExpression4());
    var _optionalQuantifier = _interopRequireDefault2(require_optionalQuantifier());
    var _oneOrMoreQuantifier = _interopRequireDefault2(require_oneOrMoreQuantifier());
    var _zeroOrMoreQuantifier = _interopRequireDefault2(require_zeroOrMoreQuantifier());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType4());
    var _array = require_array3();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var BNFParser = function(CommonParser) {
      _inherits(BNFParser2, CommonParser);
      function BNFParser2() {
        _classCallCheck(this, BNFParser2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFParser2).apply(this, arguments));
      }
      _createClass(BNFParser2, [
        {
          key: "rulesFromTokens",
          value: function rulesFromTokens(tokens) {
            var rules;
            var node = this.parse(tokens);
            if (node === null) {
              throw new Error("There is no node.");
            }
            rules = node.generateRules(_rule.default);
            var rulesLength = rules.length;
            if (rulesLength === 0) {
              throw new Error("There are no rules.");
            }
            return rules;
          }
        }
      ], [
        {
          key: "fromNothing",
          value: function fromNothing() {
            var nameRule = new _name.default(), partRule = new _part.default(), ruleRule = new _rule1.default(), errorRule = new _error.default(), epsilonRule = new _epsilon.default(), documentRule = new _document.default(), ruleNameRule = new _ruleName.default(), wildcardRule = new _wildcard.default(), endOfLineRule = new _endOfLine.default(), quantifierRule = new _quantifier.default(), definitionRule = new _definition.default(), definitionsRule = new _definitions.default(), terminalPartRule = new _terminalPart.default(), choiceOfPartsRule = new _choiceOfParts.default(), terminalSymbolRule = new _terminalSymbol.default(), nonTerminalPartRule = new _nonTerminalPart.default(), sequenceOfPartsRule = new _sequenceOfParts.default(), noWhitespacePartRule = new _noWhitespacePart.default(), regularExpressionRule = new _regularExpression.default(), lookAheadModifierRule = new _lookAheadModifier.default(), optionalQuantifierRule = new _optionalQuantifier.default(), oneOrMoreQuantifierRule = new _oneOrMoreQuantifier.default(), zeroOrMoreQuantifierRule = new _zeroOrMoreQuantifier.default(), significantTokenTypeRule = new _significantTokenType.default();
            var rules = [
              documentRule,
              ruleRule,
              nameRule,
              definitionsRule,
              definitionRule,
              partRule,
              nonTerminalPartRule,
              terminalPartRule,
              noWhitespacePartRule,
              sequenceOfPartsRule,
              choiceOfPartsRule,
              ruleNameRule,
              significantTokenTypeRule,
              regularExpressionRule,
              terminalSymbolRule,
              endOfLineRule,
              epsilonRule,
              wildcardRule,
              quantifierRule,
              lookAheadModifierRule,
              optionalQuantifierRule,
              oneOrMoreQuantifierRule,
              zeroOrMoreQuantifierRule,
              errorRule
            ];
            var firstRule = (0, _array).first(rules), startRule = firstRule, ruleMap = rules.reduce(function(ruleMap1, rule) {
              var ruleName = rule.getName();
              ruleMap1[ruleName] = rule;
              return ruleMap1;
            }, {}), bnfParser = new BNFParser2(startRule, ruleMap);
            return bnfParser;
          }
        }
      ]);
      return BNFParser2;
    }(_parser.default);
    _defineProperty(BNFParser, "bnf", _bnf.default);
    exports.default = BNFParser;
  });

  // node_modules/occam-parsers/lib/basic/bnf.js
  var require_bnf3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n  expression  ::= expression_ operator expression expression~*\n\n                | expression_\n\n                ;\n\n  operator    ::= "+"\n\n                | "-"\n\n                | "/"\n\n                | "*"\n\n                ;\n\n  term        ::= /d+/ ;\n\n  expression_ ::= "(" expression ")"\n\n                | term\n\n                ;\n\n  expression~ ::= operator expression ;\n  \n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/basic/parser.js
  var require_parser3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _bnf = _interopRequireDefault2(require_bnf3());
    var _parser = _interopRequireDefault2(require_parser2());
    var _parser1 = _interopRequireDefault2(require_parser());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var bnfLexer = _occamLexers.BNFLexer.fromNothing();
    var bnfParser = _parser.default.fromNothing();
    var BasicParser = function(CommonParser) {
      _inherits(BasicParser2, CommonParser);
      function BasicParser2() {
        _classCallCheck(this, BasicParser2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BasicParser2).apply(this, arguments));
      }
      _createClass(BasicParser2, null, [
        {
          key: "fromBNF",
          value: function fromBNF(bnf) {
            var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), basicParser = BasicParser2.fromRules(rules);
            return basicParser;
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _parser1.default.fromRules(BasicParser2, rules);
          }
        },
        {
          key: "fromNothing",
          value: function fromNothing() {
            return BasicParser2.fromBNF(_bnf.default);
          }
        }
      ]);
      return BasicParser2;
    }(_parser1.default);
    _defineProperty(BasicParser, "bnf", _bnf.default);
    exports.default = BasicParser;
  });

  // node_modules/occam-parsers/lib/bnf/parts.js
  var require_parts = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _epsilon = _interopRequireDefault2(require_epsilon2());
    var _wildcard = _interopRequireDefault2(require_wildcard());
    var _endOfLine = _interopRequireDefault2(require_endOfLine4());
    var _terminalSymbol = _interopRequireDefault2(require_terminalSymbol());
    var _regularExpression = _interopRequireDefault2(require_regularExpression2());
    var _significantTokenType = _interopRequireDefault2(require_significantTokenType());
    var _ruleName = _interopRequireDefault2(require_ruleName2());
    var _optionalPart = _interopRequireDefault2(require_optionalPart());
    var _zeroOrMoreParts = _interopRequireDefault2(require_zeroOrMoreParts());
    var _oneOrMoreParts = _interopRequireDefault2(require_oneOrMoreParts());
    var _sequenceOfParts = _interopRequireDefault2(require_sequenceOfParts());
    var _choiceOfParts = _interopRequireDefault2(require_choiceOfParts());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = {
      EpsilonPart: _epsilon.default,
      WildcardPart: _wildcard.default,
      EndOfLinePart: _endOfLine.default,
      TerminalSymbolPart: _terminalSymbol.default,
      RegularExpressionPart: _regularExpression.default,
      SignificantTokenTypePart: _significantTokenType.default,
      RuleNamePart: _ruleName.default,
      OptionalPartPart: _optionalPart.default,
      ZeroOrMorePartsPart: _zeroOrMoreParts.default,
      OneOrMorePartsPart: _oneOrMoreParts.default,
      SequenceOfPartsPart: _sequenceOfParts.default,
      ChoiceOfPartsPart: _choiceOfParts.default
    };
    exports.default = _default;
  });

  // node_modules/occam-parsers/lib/index.js
  var require_lib3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _parser = _interopRequireDefault2(require_parser2());
    var _parser1 = _interopRequireDefault2(require_parser3());
    var _parser2 = _interopRequireDefault2(require_parser());
    var _rule = _interopRequireDefault2(require_rule2());
    var _parts = _interopRequireDefault2(require_parts());
    var _partTypes = _interopRequireDefault2(require_partTypes());
    var _definition = _interopRequireDefault2(require_definition());
    var _terminal = _interopRequireDefault2(require_terminal2());
    var _nonTerminal = _interopRequireDefault2(require_nonTerminal());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "BNFParser", {
      enumerable: true,
      get: function() {
        return _parser.default;
      }
    });
    Object.defineProperty(exports, "BasicParser", {
      enumerable: true,
      get: function() {
        return _parser1.default;
      }
    });
    Object.defineProperty(exports, "CommonParser", {
      enumerable: true,
      get: function() {
        return _parser2.default;
      }
    });
    Object.defineProperty(exports, "Rule", {
      enumerable: true,
      get: function() {
        return _rule.default;
      }
    });
    Object.defineProperty(exports, "Parts", {
      enumerable: true,
      get: function() {
        return _parts.default;
      }
    });
    Object.defineProperty(exports, "partTypes", {
      enumerable: true,
      get: function() {
        return _partTypes.default;
      }
    });
    Object.defineProperty(exports, "Definition", {
      enumerable: true,
      get: function() {
        return _definition.default;
      }
    });
    Object.defineProperty(exports, "TerminalNode", {
      enumerable: true,
      get: function() {
        return _terminal.default;
      }
    });
    Object.defineProperty(exports, "NonTerminalNode", {
      enumerable: true,
      get: function() {
        return _nonTerminal.default;
      }
    });
  });

  // node_modules/with-style/lib/css/bnf.js
  var require_bnf4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var bnf = '\n\n\n\n    stylesheet                 ::= ( media | ruleSet | declaration | error )+ ;\n\n\n\n\n\n    media                      ::= "@media" mediaQueries "{" ( ruleSet | declaration )* "}" ;\n                                                              \n                                                              \n    mediaQueries               ::=  mediaQuery ( "," mediaQuery )* ;\n                                                              \n                                                              \n    mediaQuery                 ::=  "not"? ( "only"? mediaType "and" )? mediaExpression ( "and" mediaExpression )* ;\n\n\n    mediaType                  ::=  "all" | "print" | "screen" | "speech" ;\n                                                              \n                                                              \n    mediaExpression            ::=  "(" [identifier] ( ":" expression )? ")" ;\n\n\n\n\n\n    ruleSet                    ::=  selectors "{" declaration* "}" ;\n    \n    \n    selectors                  ::=  selector ( "," selector )* ;\n\n\n    selector                   ::=  ( class | pseudoClass | pseudoElement | attribute )+ ;\n\n\n\n\n\n    declaration                ::=  property ":" expression ( "," expression )* priority? ";" ;\n\n\n    class                      ::=  "."<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    pseudoClass                ::=  ":"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    pseudoElement              ::=  "::"<NO_WHITESPACE>[identifier] parenthesisedSelector? ;\n\n\n    parenthesisedSelector      ::=  <NO_WHITESPACE>"(" selector <NO_WHITESPACE>")" ;\n\n\n    attribute                  ::=  "["\n\n                                       [identifier]\n\n                                       (\n\n                                         ( "=" | "~=" | "|=" )\n\n                                         ( [identifier] | [string-literal] )\n\n                                       )?\n\n                                    "]"\n\n                                 ;\n\n\n    property                   ::=  [identifier] ;\n\n\n    expression                 ::=  term ( ","? term )* ;\n\n\n    priority                   ::=  "!important" ;\n\n\n\n\n\n    term                       ::=  [unary-operator]?\n                                                       \n                                      (\n                                                       \n                                        ( [percentage] | [frequency] | [fraction] | [length] | [angle] | [rems] | [ems] | [time] | [number] )\n                                                       \n                                        |\n                                                       \n                                        uri\n                                                       \n                                        |\n                                                       \n                                        function\n                                                       \n                                        |\n                                                       \n                                        [string-literal]+\n                                                       \n                                        |\n                                                       \n                                        [identifier]\n                                                       \n                                        |\n                                                       \n                                        [colour]\n                                                       \n                                      )\n                                                       \n                                   ;\n\n\n    uri                        ::=  "url"<NO_WHITESPACE>"(" [string-literal] ")" ;\n\n\n    function                   ::=  [identifier]<NO_WHITESPACE>"(" expression ")" ;\n\n\n\n\n\n    error                      ::=  . ;\n\n\n\n';
    var _default = bnf;
    exports.default = _default;
  });

  // node_modules/with-style/lib/css/parser.js
  var require_parser4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamLexers = require_lib2();
    var _occamParsers = require_lib3();
    var _bnf = _interopRequireDefault2(require_bnf4());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var bnfLexer = _occamLexers.BNFLexer.fromNothing();
    var bnfParser = _occamParsers.BNFParser.fromNothing();
    var CSSParser = function(CommonParser) {
      _inherits(CSSParser2, _occamParsers.CommonParser);
      function CSSParser2() {
        _classCallCheck(this, CSSParser2);
        return _possibleConstructorReturn(this, _getPrototypeOf(CSSParser2).apply(this, arguments));
      }
      _createClass(CSSParser2, null, [
        {
          key: "fromBNF",
          value: function fromBNF(bnf) {
            var tokens = bnfLexer.tokensFromBNF(bnf), rules = bnfParser.rulesFromTokens(tokens), cssParser = CSSParser2.fromRules(rules);
            return cssParser;
          }
        },
        {
          key: "fromRules",
          value: function fromRules(rules) {
            return _occamParsers.CommonParser.fromRules(CSSParser2, rules);
          }
        },
        {
          key: "fromNothing",
          value: function fromNothing() {
            return CSSParser2.fromBNF(_bnf.default);
          }
        }
      ]);
      return CSSParser2;
    }(_occamParsers.CommonParser);
    _defineProperty(CSSParser, "bnf", _bnf.default);
    exports.default = CSSParser;
  });

  // node_modules/occam-dom/lib/utilities/array.js
  var require_array4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.trim = trim;
    exports.includes = includes;
    exports.third = exports.second = exports.push = exports.fifth = exports.fourth = exports.clear = void 0;
    var _necessary = require_browser();
    var clear = _necessary.arrayUtilities.clear;
    var push = _necessary.arrayUtilities.push;
    var second = _necessary.arrayUtilities.second;
    var third = _necessary.arrayUtilities.third;
    var fourth = _necessary.arrayUtilities.fourth;
    var fifth = _necessary.arrayUtilities.fifth;
    exports.clear = clear;
    exports.push = push;
    exports.second = second;
    exports.third = third;
    exports.fourth = fourth;
    exports.fifth = fifth;
    function trim(array, startIndex, endIndex) {
      var start, deleteCount;
      if (endIndex !== Infinity) {
        start = endIndex + 1;
        array.splice(start);
      }
      start = 0;
      deleteCount = startIndex;
      array.splice(start, deleteCount);
    }
    function includes(array) {
      for (var _len = arguments.length, elements = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        elements[_key - 1] = arguments[_key];
      }
      return elements.some(function(element) {
        return array.includes(element);
      });
    }
  });

  // node_modules/occam-dom/lib/constants.js
  var require_constants4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WILDCARD_CHARACTER = exports.UNIQUE_SPREAD_EXPRESSION = void 0;
    var UNIQUE_SPREAD_EXPRESSION = "!";
    exports.UNIQUE_SPREAD_EXPRESSION = UNIQUE_SPREAD_EXPRESSION;
    var WILDCARD_CHARACTER = "*";
    exports.WILDCARD_CHARACTER = WILDCARD_CHARACTER;
  });

  // node_modules/occam-dom/lib/spread.js
  var require_spread = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array4();
    var _constants = require_constants4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Spread = function() {
      function Spread2(startIndex, endIndex, unique) {
        _classCallCheck(this, Spread2);
        this.startIndex = startIndex;
        this.endIndex = endIndex;
        this.unique = unique;
      }
      _createClass(Spread2, [
        {
          key: "adjustNodes",
          value: function adjustNodes(nodes) {
            if (this.unique) {
              var nodesLength = nodes.length;
              if (nodesLength > 1) {
                (0, _array).clear(nodes);
              }
            } else {
              (0, _array).trim(nodes, this.startIndex, this.endIndex);
            }
          }
        }
      ], [
        {
          key: "fromSpreadExpression",
          value: function fromSpreadExpression(spreadExpression) {
            var startIndex = 0, endIndex = Infinity, unique = false;
            if (spreadExpression !== null) {
              if (spreadExpression === _constants.UNIQUE_SPREAD_EXPRESSION) {
                unique = true;
              } else {
                var regExp = /\[(\d+)?(\.\.\.)?(\d+)?]/, matches = spreadExpression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches);
                if (secondMatch !== void 0) {
                  startIndex = parseInt(secondMatch);
                  if (thirdMatch === void 0) {
                    endIndex = startIndex;
                  }
                }
                if (fourthMatch !== void 0) {
                  endIndex = parseInt(fourthMatch);
                  if (thirdMatch === void 0) {
                    startIndex = endIndex;
                  }
                }
              }
            }
            var spread = new Spread2(startIndex, endIndex, unique);
            return spread;
          }
        }
      ]);
      return Spread2;
    }();
    exports.default = Spread;
  });

  // node_modules/occam-dom/lib/query.js
  var require_query = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _spread = _interopRequireDefault2(require_spread());
    var _constants = require_constants4();
    var _array = require_array4();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Query = function() {
      function Query2(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes) {
        _classCallCheck(this, Query2);
        this.ruleNames = ruleNames;
        this.types = types;
        this.spread = spread;
        this.subQuery = subQuery;
        this.maximumDepth = maximumDepth;
        this.infiniteDescent = infiniteDescent;
        this.intermediateNodes = intermediateNodes;
      }
      _createClass(Query2, [
        {
          key: "execute",
          value: function execute(node, param, param1) {
            var depth = param === void 0 ? 0 : param, maximumDepth = param1 === void 0 ? this.maximumDepth : param1;
            var nodes = [];
            this.clear();
            this.find(node, depth, maximumDepth);
            this.apply(nodes, depth, maximumDepth);
            return nodes;
          }
        },
        {
          key: "clear",
          value: function clear() {
            (0, _array).clear(this.intermediateNodes);
          }
        },
        {
          key: "find",
          value: function find(node, depth, maximumDepth) {
            if (depth > maximumDepth) {
              return;
            }
            var nodeTerminalNode = node.isTerminalNode(), nodeNonTerminalNode = !nodeTerminalNode;
            var found;
            if (nodeTerminalNode) {
              var terminalNode = node, type = terminalNode.getType();
              found = (0, _array).includes(this.types, type, _constants.WILDCARD_CHARACTER);
            }
            if (nodeNonTerminalNode) {
              var nonTerminalNode = node, ruleName = nonTerminalNode.getRuleName();
              found = (0, _array).includes(this.ruleNames, ruleName, _constants.WILDCARD_CHARACTER);
            }
            if (found) {
              var intermediateNode = node;
              this.intermediateNodes.push(intermediateNode);
            }
            if (this.infiniteDescent) {
              if (nodeNonTerminalNode) {
                depth++;
                var nonTerminalNode = node, childNodes = nonTerminalNode.getChildNodes();
                childNodes.forEach(function(childNode) {
                  return this.find(childNode, depth, maximumDepth);
                }.bind(this));
              }
            }
          }
        },
        {
          key: "apply",
          value: function apply(nodes, depth, maximumDepth) {
            this.spread.adjustNodes(this.intermediateNodes);
            if (this.subQuery === null) {
              (0, _array).push(nodes, this.intermediateNodes);
            } else {
              this.intermediateNodes.forEach(function(intermediateNode) {
                var intermediateNodeNonTerminalNode = intermediateNode.isNonTerminalNode();
                if (intermediateNodeNonTerminalNode) {
                  depth++;
                  var nonTerminalNode = intermediateNode, childNodes = nonTerminalNode.getChildNodes();
                  this.subQuery.clear();
                  childNodes.forEach(function(childNode) {
                    return this.subQuery.find(childNode, depth, maximumDepth);
                  }.bind(this));
                  this.subQuery.apply(nodes, depth, maximumDepth);
                }
              }.bind(this));
            }
          }
        }
      ], [
        {
          key: "fromSubExpressionAndTypes",
          value: function fromSubExpressionAndTypes(subExpresion, types) {
            var query = null;
            if (subExpresion !== null) {
              var typesLength = types.length;
              if (typesLength === 0) {
                var expression = subExpresion;
                query = Query2.fromExpression(expression);
              }
            }
            return query;
          }
        },
        {
          key: "fromExpression",
          value: function fromExpression(expression, param) {
            var maximumDepth = param === void 0 ? Infinity : param;
            var regExp = /^\/(\/)?([^/\[!]+)(\[[^\]]+]|!)?(\/.*)?$/, matches = expression.match(regExp), secondMatch = (0, _array).second(matches), thirdMatch = (0, _array).third(matches), fourthMatch = (0, _array).fourth(matches), fifthMatch = (0, _array).fifth(matches), selectors = thirdMatch.split("|"), subExpression = fifthMatch || null, spreadExpression = fourthMatch || null, types = typesFromSelectors(selectors), ruleNames = ruleNamesFromSelectorsAndTypes(selectors, types), spread = _spread.default.fromSpreadExpression(spreadExpression), subQuery = Query2.fromSubExpressionAndTypes(subExpression, types), infiniteDescent = secondMatch === "/", intermediateNodes = [], query = new Query2(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent, intermediateNodes);
            return query;
          }
        }
      ]);
      return Query2;
    }();
    exports.default = Query;
    function typesFromSelectors(selectors) {
      var types = [];
      selectors.forEach(function(selector) {
        var selectorTypeSelector = isSelectorTypeSelector(selector);
        if (selectorTypeSelector) {
          var type = selector.substring(1);
          types.push(type);
        }
      });
      return types;
    }
    function isSelectorTypeSelector(selector) {
      return /^@/.test(selector);
    }
    function ruleNamesFromSelectors(selectors) {
      return selectors.filter(isSelectorRuleNameSelector);
    }
    function isSelectorRuleNameSelector(selector) {
      return /^[^@]/.test(selector);
    }
    function ruleNamesFromSelectorsAndTypes(selectors, types) {
      var ruleNames = [];
      var typesLength = types.length;
      if (typesLength === 0) {
        ruleNames = ruleNamesFromSelectors(selectors);
      }
      return ruleNames;
    }
  });

  // node_modules/occam-dom/lib/utilities/query.js
  var require_query2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.queryByClass = queryByClass;
    exports.queryByClasses = queryByClasses;
    exports.queryByExpression = queryByExpression;
    exports.default = void 0;
    var _query = _interopRequireDefault2(require_query());
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function queryByClass(node, Class, param) {
      var nodes = param === void 0 ? [] : param;
      if (_instanceof(node, Class)) {
        nodes.push(node);
      }
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
          return queryByClass(childNode, Class, nodes);
        });
      }
      return nodes;
    }
    function queryByClasses(node, Classes, param) {
      var nodes = param === void 0 ? [] : param;
      Classes.some(function(Class) {
        if (_instanceof(node, Class)) {
          nodes.push(node);
          return true;
        }
      });
      var nodeNonTerminalNode = node.isNonTerminalNode();
      if (nodeNonTerminalNode) {
        var childNodes = node.getChildNodes();
        childNodes.forEach(function(childNode) {
          return queryByClasses(childNode, Classes, nodes);
        });
      }
      return nodes;
    }
    function queryByExpression(node, expression, maximumDepth) {
      var query = _query.default.fromExpression(expression, maximumDepth), nodes = query.execute(node);
      return nodes;
    }
    var _default = {
      queryByClass,
      queryByClasses,
      queryByExpression
    };
    exports.default = _default;
  });

  // node_modules/occam-dom/lib/index.js
  var require_lib4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _query = _interopRequireDefault2(require_query());
    var _query1 = _interopRequireDefault2(require_query2());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "Query", {
      enumerable: true,
      get: function() {
        return _query.default;
      }
    });
    Object.defineProperty(exports, "queryUtilities", {
      enumerable: true,
      get: function() {
        return _query1.default;
      }
    });
  });

  // node_modules/with-style/lib/utilities/content.js
  var require_content2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.contentFromQueryNodeAndTokens = contentFromQueryNodeAndTokens;
    var _necessary = require_browser();
    var first = _necessary.arrayUtilities.first;
    function contentFromQueryNodeAndTokens(query, node, tokens) {
      var nodes = query.execute(node), firstNode = first(nodes);
      node = firstNode;
      var content = contentFromNodeAndTokens(node, tokens);
      return content;
    }
    function contentFromNodeAndTokens(node, tokens) {
      var firstSignificantToken = node.getFirstSignificantToken(), lastSignificantToken = node.getLastSignificantToken(), firstToken = firstSignificantToken, lastToken = lastSignificantToken, firstTokenIndex = tokens.indexOf(firstToken), lastTokenIndex = tokens.indexOf(lastToken);
      var content = "";
      for (var index = firstTokenIndex; index <= lastTokenIndex; index++) {
        var token = tokens[index], tokenContent = token.getContent();
        content += tokenContent;
      }
      return content;
    }
  });

  // node_modules/with-style/lib/style/declaration.js
  var require_declaration = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var propertyQuery = _occamDom.Query.fromExpression("/*/property");
    var expressionQuery = _occamDom.Query.fromExpression("/*/expression");
    var Declaration = function() {
      function Declaration2(property, expression) {
        _classCallCheck(this, Declaration2);
        this.property = property;
        this.expression = expression;
      }
      _createClass(Declaration2, [
        {
          key: "getProperty",
          value: function getProperty() {
            return this.property;
          }
        },
        {
          key: "getExpression",
          value: function getExpression() {
            return this.expression;
          }
        },
        {
          key: "checkMatches",
          value: function checkMatches(declarations) {
            var matches = declarations.some(function(declaration) {
              var property = declaration.getProperty(), propertiesMatch = property === this.property;
              if (propertiesMatch) {
                return true;
              }
            }.bind(this));
            return matches;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(indent, last) {
            var css = last ? "".concat(indent).concat(this.property, ": ").concat(this.expression, ";") : "".concat(indent).concat(this.property, ": ").concat(this.expression, ";\n");
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var propertyContent = _content.contentFromQueryNodeAndTokens(propertyQuery, node, tokens), expressionContent = _content.contentFromQueryNodeAndTokens(expressionQuery, node, tokens), property = propertyContent, expression = expressionContent, declaration = new Declaration2(property, expression);
            return declaration;
          }
        }
      ]);
      return Declaration2;
    }();
    exports.default = Declaration;
  });

  // node_modules/with-style/lib/style/declarations.js
  var require_declarations = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _declaration = _interopRequireDefault2(require_declaration());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");
    var Declarations = function() {
      function Declarations2(array) {
        _classCallCheck(this, Declarations2);
        this.array = array;
      }
      _createClass(Declarations2, [
        {
          key: "forwardsForEach",
          value: function forwardsForEach(callback) {
            var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
            for (var index = firstIndex; index <= lastIndex; index++) {
              var declaration = this.array[index];
              callback(declaration, index);
            }
          }
        },
        {
          key: "backwardsForEach",
          value: function backwardsForEach(callback) {
            var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
            for (var index = lastIndex; index >= firstIndex; index--) {
              var declaration = this.array[index];
              callback(declaration, index);
            }
          }
        },
        {
          key: "unshift",
          value: function unshift(declarations) {
            declarations.backwardsForEach(function(declaration) {
              var matches = declaration.checkMatches(this.array);
              if (!matches) {
                this.array.unshift(declaration);
              }
            }.bind(this));
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            if (indent === void 0) {
              indent = className;
              className = null;
            }
            var css = "";
            var length = this.array.length;
            if (length > 0) {
              var lastIndex = length - 1, declarationsCSS = this.array.reduce(function(declarationsCSS1, declaration, index) {
                var last = index === lastIndex, declarationCSS = declaration.asCSS(indent, last);
                declarationsCSS1 += declarationCSS;
                return declarationsCSS1;
              }, "");
              if (className === null) {
                css = declarationsCSS;
              } else {
                css = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n");
              }
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var declarationNodes = declarationQuery.execute(node), array = declarationNodes.map(function(declarationNode) {
              var node1 = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node1, tokens);
              return declaration;
            }), declarations = new Declarations2(array);
            return declarations;
          }
        }
      ]);
      return Declarations2;
    }();
    exports.default = Declarations;
  });

  // node_modules/with-style/lib/style/ruleSet.js
  var require_ruleSet = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _declarations = _interopRequireDefault2(require_declarations());
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var selectorsQuery = _occamDom.Query.fromExpression("//selectors");
    var RuleSet = function() {
      function RuleSet2(selectors, declarations) {
        _classCallCheck(this, RuleSet2);
        this.selectors = selectors;
        this.declarations = declarations;
      }
      _createClass(RuleSet2, [
        {
          key: "getSelectors",
          value: function getSelectors() {
            return this.selectors;
          }
        },
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "unshift",
          value: function unshift(ruleSet) {
            var declarations = ruleSet.getDeclarations();
            this.declarations.unshift(declarations);
          }
        },
        {
          key: "findMatchingRuleSet",
          value: function findMatchingRuleSet(ruleSets) {
            var matchingRuleSet = ruleSets.find(function(ruleSet) {
              var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === this.selectors, ruleSetsMatch = selectorsMatch;
              if (ruleSetsMatch) {
                return true;
              }
            }.bind(this)) || null;
            return matchingRuleSet;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            var css = "";
            var declarationsCSS = this.declarations.asCSS("  ".concat(indent));
            if (declarationsCSS !== "") {
              css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS, "\n").concat(indent, "}\n\n");
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), media = new RuleSet2(selectors, declarations);
            return media;
          }
        }
      ]);
      return RuleSet2;
    }();
    exports.default = RuleSet;
    function selectorsFromNodeAndTokens(node, tokens) {
      var selectorsNodeContent = _content.contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
      return selectors;
    }
  });

  // node_modules/with-style/lib/style/ruleSets.js
  var require_ruleSets = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _ruleSet = _interopRequireDefault2(require_ruleSet());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ruleSetQuery = _occamDom.Query.fromExpression("/*/ruleSet");
    var RuleSets = function() {
      function RuleSets2(array) {
        _classCallCheck(this, RuleSets2);
        this.array = array;
      }
      _createClass(RuleSets2, [
        {
          key: "unshift",
          value: function unshift(ruleSets) {
            ruleSets.forEach(function(ruleSet) {
              var matchingRuleSet = ruleSet.findMatchingRuleSet(this.array);
              matchingRuleSet === null ? this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
            }.bind(this));
          }
        },
        {
          key: "forEach",
          value: function forEach(callback) {
            this.array.forEach(callback);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className, indent) {
            var css = this.array.reduce(function(css1, ruleSet) {
              var ruleSetCSS = ruleSet.asCSS(className, indent);
              css1 += ruleSetCSS;
              return css1;
            }, "");
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var ruleSetNodes = ruleSetQuery.execute(node), array = ruleSetNodes.map(function(ruleSetNode) {
              var node1 = ruleSetNode, ruleSet = _ruleSet.default.fromNodeAndTokens(node1, tokens);
              return ruleSet;
            }), ruleSets = new RuleSets2(array);
            return ruleSets;
          }
        }
      ]);
      return RuleSets2;
    }();
    exports.default = RuleSets;
  });

  // node_modules/with-style/lib/style/media.js
  var require_media = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _ruleSets = _interopRequireDefault2(require_ruleSets());
    var _declarations = _interopRequireDefault2(require_declarations());
    var _content = require_content2();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var mediaQueriesQuery = _occamDom.Query.fromExpression("/media/mediaQueries");
    var Media = function() {
      function Media2(mediaQueries, declarations, ruleSets) {
        _classCallCheck(this, Media2);
        this.mediaQueries = mediaQueries;
        this.declarations = declarations;
        this.ruleSets = ruleSets;
      }
      _createClass(Media2, [
        {
          key: "getMediaQueries",
          value: function getMediaQueries() {
            return this.mediaQueries;
          }
        },
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "getRuleSets",
          value: function getRuleSets() {
            return this.ruleSets;
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var css = "";
            var ruleSetsCSS = this.ruleSets.asCSS(className, "  "), declarationsCSS = this.declarations.asCSS(className, "    ");
            if (ruleSetsCSS !== null || declarationsCSS !== null) {
              css = "@media ".concat(this.mediaQueries, " {\n").concat(declarationsCSS).concat(ruleSetsCSS, "\n}\n\n");
            }
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), media = new Media2(mediaQueries, declarations, ruleSets);
            return media;
          }
        }
      ]);
      return Media2;
    }();
    exports.default = Media;
    function mediaQueriesFromNodeAndTokens(node, tokens) {
      var mediaQueriesNodeContent = _content.contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
      return mediaQueries;
    }
  });

  // node_modules/with-style/lib/style/medias.js
  var require_medias = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _occamDom = require_lib4();
    var _media = _interopRequireDefault2(require_media());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var mediaQuery = _occamDom.Query.fromExpression("/stylesheet/media");
    var Medias = function() {
      function Medias2(array) {
        _classCallCheck(this, Medias2);
        this.array = array;
      }
      _createClass(Medias2, [
        {
          key: "unshift",
          value: function unshift(medias) {
            medias.forEach(function(media) {
              this.array.unshift(media);
            }.bind(this));
          }
        },
        {
          key: "forEach",
          value: function forEach(callback) {
            this.array.forEach(callback);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var css = this.array.reduce(function(css1, media) {
              var mediaCSS = media.asCSS(className);
              css1 += mediaCSS;
              return css1;
            }, "");
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var mediaNodes = mediaQuery.execute(node), array = mediaNodes.map(function(mediaNode) {
              var node1 = mediaNode, media = _media.default.fromNodeAndTokens(node1, tokens);
              return media;
            }), medias = new Medias2(array);
            return medias;
          }
        }
      ]);
      return Medias2;
    }();
    exports.default = Medias;
  });

  // node_modules/with-style/lib/style.js
  var require_style = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _medias = _interopRequireDefault2(require_medias());
    var _ruleSets = _interopRequireDefault2(require_ruleSets());
    var _declarations = _interopRequireDefault2(require_declarations());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Style = function() {
      function Style2(declarations, ruleSets, medias) {
        _classCallCheck(this, Style2);
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.medias = medias;
      }
      _createClass(Style2, [
        {
          key: "getDeclarations",
          value: function getDeclarations() {
            return this.declarations;
          }
        },
        {
          key: "getRuleSets",
          value: function getRuleSets() {
            return this.ruleSets;
          }
        },
        {
          key: "getMedias",
          value: function getMedias() {
            return this.medias;
          }
        },
        {
          key: "extends",
          value: function _extends(superStyle) {
            var declarations = superStyle.getDeclarations(), ruleSets = superStyle.getRuleSets(), medias = superStyle.getMedias();
            this.unshift(declarations, ruleSets, medias);
          }
        },
        {
          key: "unshift",
          value: function unshift(declarations, ruleSets, medias) {
            this.declarations.unshift(declarations);
            this.ruleSets.unshift(ruleSets);
            this.medias.unshift(medias);
          }
        },
        {
          key: "asCSS",
          value: function asCSS(className) {
            var declarationsCSS = this.declarations.asCSS(className, "  "), ruleSetsCSS = this.ruleSets.asCSS(className, ""), mediasCSS = this.medias.asCSS(className), css = "".concat(declarationsCSS).concat(ruleSetsCSS).concat(mediasCSS);
            return css;
          }
        }
      ], [
        {
          key: "fromNodeAndTokens",
          value: function fromNodeAndTokens(node, tokens) {
            var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), medias = _medias.default.fromNodeAndTokens(node, tokens), style = new Style2(declarations, ruleSets, medias);
            return style;
          }
        }
      ]);
      return Style2;
    }();
    exports.default = Style;
  });

  // node_modules/with-style/lib/utilities/styles.js
  var require_styles = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _style = _interopRequireDefault2(require_style());
    var _lexer = _interopRequireDefault2(require_lexer4());
    var _parser = _interopRequireDefault2(require_parser4());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var cssLexer = _lexer.default.fromNothing();
    var cssParser = _parser.default.fromNothing();
    if (!globalThis.styleMap) {
      globalThis.styleMap = {};
    }
    var styleMap = globalThis.styleMap;
    function renderStyle(style) {
      var headDOMElement = document.querySelector("head"), styleDOMElement = document.createElement("style"), innerHTML = "\n        \n".concat(style);
      Object.assign(styleDOMElement, {
        innerHTML
      });
      headDOMElement.appendChild(styleDOMElement);
    }
    function renderStyles2() {
      var stylesCSS = retrieveStylesCSS(), style = stylesCSS;
      renderStyle(style);
    }
    function generateStyle(args, className, param) {
      var superStyle = param === void 0 ? null : param;
      var strings = args.shift(), content = strings.reduce(function(content1, string, index) {
        var arg = args[index];
        content1 = arg !== void 0 ? "".concat(content1).concat(string).concat(arg) : "".concat(content1).concat(string);
        return content1;
      }, ""), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens), style = _style.default.fromNodeAndTokens(node, tokens);
      if (superStyle !== null) {
        style.extends(superStyle);
      }
      styleMap[className] = style;
    }
    function retrieveStyle(className) {
      var style = styleMap[className] || null;
      return style;
    }
    var _default = {
      renderStyle,
      renderStyles: renderStyles2,
      generateStyle,
      retrieveStyle
    };
    exports.default = _default;
    function retrieveStylesCSS() {
      var classNames = Object.keys(styleMap), stylesCSS = classNames.reduce(function(stylesCSS1, className) {
        var style = retrieveStyle(className), styleCSS = style.asCSS(className);
        stylesCSS1 += styleCSS;
        return stylesCSS1;
      }, "");
      return stylesCSS;
    }
  });

  // node_modules/uuid/lib/rng-browser.js
  var require_rng_browser = __commonJS((exports, module) => {
    var getRandomValues = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != "undefined" && typeof window.msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (getRandomValues) {
      rnds8 = new Uint8Array(16);
      module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      rnds = new Array(16);
      module.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 3) === 0)
            r = Math.random() * 4294967296;
          rnds[i] = r >>> ((i & 3) << 3) & 255;
        }
        return rnds;
      };
    }
    var rnds8;
    var rnds;
  });

  // node_modules/uuid/lib/bytesToUuid.js
  var require_bytesToUuid = __commonJS((exports, module) => {
    var byteToHex = [];
    for (var i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 256).toString(16).substr(1);
    }
    function bytesToUuid(buf, offset) {
      var i2 = offset || 0;
      var bth = byteToHex;
      return [
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        "-",
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]],
        bth[buf[i2++]]
      ].join("");
    }
    module.exports = bytesToUuid;
  });

  // node_modules/uuid/v4.js
  var require_v4 = __commonJS((exports, module) => {
    var rng = require_rng_browser();
    var bytesToUuid = require_bytesToUuid();
    function v4(options, buf, offset) {
      var i = buf && offset || 0;
      if (typeof options == "string") {
        buf = options === "binary" ? new Array(16) : null;
        options = null;
      }
      options = options || {};
      var rnds = options.random || (options.rng || rng)();
      rnds[6] = rnds[6] & 15 | 64;
      rnds[8] = rnds[8] & 63 | 128;
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }
      return buf || bytesToUuid(rnds);
    }
    module.exports = v4;
  });

  // node_modules/json-stringify-safe/stringify.js
  var require_stringify = __commonJS((exports, module) => {
    exports = module.exports = stringify;
    exports.getSerialize = serializer;
    function stringify(obj, replacer, spaces, cycleReplacer) {
      return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
    }
    function serializer(replacer, cycleReplacer) {
      var stack = [], keys = [];
      if (cycleReplacer == null)
        cycleReplacer = function(key, value) {
          if (stack[0] === value)
            return "[Circular ~]";
          return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
        };
      return function(key, value) {
        if (stack.length > 0) {
          var thisPos = stack.indexOf(this);
          ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
          ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
          if (~stack.indexOf(value))
            value = cycleReplacer.call(this, key, value);
        } else
          stack.push(value);
        return replacer == null ? value : replacer.call(this, key, value);
      };
    }
  });

  // node_modules/random-seed/index.js
  var require_random_seed = __commonJS((exports, module) => {
    "use strict";
    var stringify = require_stringify();
    var Mash = function() {
      var n = 4022871197;
      var mash = function(data) {
        if (data) {
          data = data.toString();
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        } else {
          n = 4022871197;
        }
      };
      return mash;
    };
    var uheprng = function(seed) {
      return function() {
        var o = 48;
        var c = 1;
        var p = o;
        var s = new Array(o);
        var i;
        var j;
        var k = 0;
        var mash = new Mash();
        for (i = 0; i < o; i++) {
          s[i] = mash(Math.random());
        }
        var rawprng = function() {
          if (++p >= o) {
            p = 0;
          }
          var t = 1768863 * s[p] + c * 23283064365386963e-26;
          return s[p] = t - (c = t | 0);
        };
        var random = function(range) {
          return Math.floor(range * (rawprng() + (rawprng() * 2097152 | 0) * 11102230246251565e-32));
        };
        random.string = function(count) {
          var i2;
          var s2 = "";
          for (i2 = 0; i2 < count; i2++) {
            s2 += String.fromCharCode(33 + random(94));
          }
          return s2;
        };
        var hash = function() {
          var args = Array.prototype.slice.call(arguments);
          for (i = 0; i < args.length; i++) {
            for (j = 0; j < o; j++) {
              s[j] -= mash(args[i]);
              if (s[j] < 0) {
                s[j] += 1;
              }
            }
          }
        };
        random.cleanString = function(inStr) {
          inStr = inStr.replace(/(^\s*)|(\s*$)/gi, "");
          inStr = inStr.replace(/[\x00-\x1F]/gi, "");
          inStr = inStr.replace(/\n /, "\n");
          return inStr;
        };
        random.hashString = function(inStr) {
          inStr = random.cleanString(inStr);
          mash(inStr);
          for (i = 0; i < inStr.length; i++) {
            k = inStr.charCodeAt(i);
            for (j = 0; j < o; j++) {
              s[j] -= mash(k);
              if (s[j] < 0) {
                s[j] += 1;
              }
            }
          }
        };
        random.seed = function(seed2) {
          if (typeof seed2 === "undefined" || seed2 === null) {
            seed2 = Math.random();
          }
          if (typeof seed2 !== "string") {
            seed2 = stringify(seed2, function(key, value) {
              if (typeof value === "function") {
                return value.toString();
              }
              return value;
            });
          }
          random.initState();
          random.hashString(seed2);
        };
        random.addEntropy = function() {
          var args = [];
          for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          hash(k++ + new Date().getTime() + args.join("") + Math.random());
        };
        random.initState = function() {
          mash();
          for (i = 0; i < o; i++) {
            s[i] = mash(" ");
          }
          c = 1;
          p = o;
        };
        random.done = function() {
          mash = null;
        };
        if (typeof seed !== "undefined") {
          random.seed(seed);
        }
        random.range = function(range) {
          return random(range);
        };
        random.random = function() {
          return random(Number.MAX_VALUE - 1) / Number.MAX_VALUE;
        };
        random.floatBetween = function(min, max) {
          return random.random() * (max - min) + min;
        };
        random.intBetween = function(min, max) {
          return Math.floor(random.random() * (max - min + 1)) + min;
        };
        return random;
      }();
    };
    uheprng.create = function(seed) {
      return new uheprng(seed);
    };
    module.exports = uheprng;
  });

  // node_modules/with-style/lib/constants.js
  var require_constants5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CHARACTERS = exports.CLASS_NAME_LENGTH = void 0;
    var CHARACTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    exports.CHARACTERS = CHARACTERS;
    var CLASS_NAME_LENGTH = 6;
    exports.CLASS_NAME_LENGTH = CLASS_NAME_LENGTH;
  });

  // node_modules/with-style/lib/utilities/className.js
  var require_className = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.generateClassName = generateClassName;
    exports.retrieveClassName = retrieveClassName;
    exports.default = void 0;
    var _v4 = _interopRequireDefault2(require_v4());
    var _randomSeed = _interopRequireDefault2(require_random_seed());
    var _constants = require_constants5();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var uuid = _v4.default();
    var random = _randomSeed.default.create(uuid);
    var length = _constants.CLASS_NAME_LENGTH;
    var characters = _constants.CHARACTERS;
    var charactersLength = characters.length;
    function generateClassName() {
      var className = "";
      for (var count = 0; count < length; count++) {
        var index = random(charactersLength), character = characters[index];
        className += character;
      }
      return className;
    }
    function retrieveClassName(element) {
      var ref = element.reactFunction || element.reactComponent.constructor, className = ref.className;
      return className;
    }
    var _default = {
      generateClassName,
      retrieveClassName
    };
    exports.default = _default;
  });

  // node_modules/with-style/lib/index.js
  var require_lib5 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _tagNames = _interopRequireDefault2(require_tagNames());
    var _lexer = _interopRequireDefault2(require_lexer4());
    var _parser = _interopRequireDefault2(require_parser4());
    var _styles = _interopRequireDefault2(require_styles());
    var _className = _interopRequireDefault2(require_className());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.defineProperty(exports, "tagNames", {
      enumerable: true,
      get: function() {
        return _tagNames.default;
      }
    });
    Object.defineProperty(exports, "CSSLexer", {
      enumerable: true,
      get: function() {
        return _lexer.default;
      }
    });
    Object.defineProperty(exports, "CSSParser", {
      enumerable: true,
      get: function() {
        return _parser.default;
      }
    });
    Object.defineProperty(exports, "stylesUtilities", {
      enumerable: true,
      get: function() {
        return _styles.default;
      }
    });
    Object.defineProperty(exports, "classNameUtilities", {
      enumerable: true,
      get: function() {
        return _className.default;
      }
    });
  });

  // node_modules/easy-with-style/lib/utilities/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isClass = isClass;
    var _easy2 = require_lib();
    function isClass(argument) {
      return isSubclassOf(argument, _easy2.Element);
    }
    function isSubclassOf(argument, Class) {
      var subclass = false;
      if (argument.name === Class.name) {
        subclass = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument !== null) {
          subclass = isSubclassOf(argument, Class);
        }
      }
      return subclass;
    }
  });

  // node_modules/easy-with-style/lib/withStyle.js
  var require_withStyle = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy2 = require_lib();
    var _withStyle = require_lib5();
    var _class1 = require_class();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var _Class;
    var generateClassName = _withStyle.classNameUtilities.generateClassName;
    var renderStyle = _withStyle.stylesUtilities.renderStyle;
    var renderStyles2 = _withStyle.stylesUtilities.renderStyles;
    var generateStyle = _withStyle.stylesUtilities.generateStyle;
    var retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;
    function withStyle(ClassOrFunction) {
      return function() {
        var args = Array.prototype.slice.call(arguments);
        var _className = ClassOrFunction.className, className = _className === void 0 ? null : _className;
        var superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        var ClassOrFunctionClass = (0, _class1).isClass(ClassOrFunction);
        if (ClassOrFunctionClass) {
          var Class = ClassOrFunction;
          ClassOrFunction = /* @__PURE__ */ function(Class1) {
            _inherits(_class2, Class1);
            function _class2() {
              _classCallCheck(this, _class2);
              return _possibleConstructorReturn(this, _getPrototypeOf(_class2).apply(this, arguments));
            }
            _createClass(_class2, null, [
              {
                key: "fromClass",
                value: function fromClass(_Class1, properties) {
                  for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    remainingArguments[_key - 2] = arguments[_key];
                  }
                  properties = appendClassNameToProperties(className, properties);
                  return (_Class = Class).fromClass.apply(_Class, [
                    _Class1,
                    properties
                  ].concat(_toConsumableArray(remainingArguments)));
                }
              }
            ]);
            return _class2;
          }(Class);
        } else {
          var Function1 = ClassOrFunction;
          ClassOrFunction = function(properties) {
            properties = appendClassNameToProperties(className, properties);
            return Function1(properties);
          };
        }
        Object.assign(ClassOrFunction, {
          className
        });
        return ClassOrFunction;
      };
    }
    Object.assign(withStyle, {
      renderStyle,
      renderStyles: renderStyles2
    });
    var _default = withStyle;
    exports.default = _default;
    _withStyle.tagNames.forEach(function(tagName) {
      Object.defineProperty(withStyle, tagName, {
        get: function() {
          return function() {
            var args = Array.prototype.slice.call(arguments), className = generateClassName();
            generateStyle(args, className);
            var Function2 = function(properties) {
              properties = appendClassNameToProperties(className, properties);
              return _easy2.React.createElement(tagName, properties);
            };
            Object.assign(Function2, {
              className
            });
            return Function2;
          };
        }
      });
    });
    function appendClassNameToProperties(className, properties) {
      properties = properties.hasOwnProperty("className") ? properties : _objectSpread({}, properties, {
        className
      });
      return properties;
    }
  });

  // node_modules/easy-with-style/lib/index.js
  var require_lib6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _withStyle = _interopRequireDefault2(require_withStyle());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _default = _withStyle.default;
    exports.default = _default;
  });

  // lib/options.js
  var require_options = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ESCAPE_KEY_STOPS_DRAGGING = exports.default = void 0;
    var ESCAPE_KEY_STOPS_DRAGGING = "ESCAPE_KEY_STOPS_DRAGGING";
    exports.ESCAPE_KEY_STOPS_DRAGGING = ESCAPE_KEY_STOPS_DRAGGING;
    var _default = {
      ESCAPE_KEY_STOPS_DRAGGING
    };
    exports.default = _default;
  });

  // lib/div/row.js
  var require_row = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var RowDiv = /* @__PURE__ */ function(Element1) {
      _inherits(RowDiv2, Element1);
      function RowDiv2() {
        _classCallCheck(this, RowDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RowDiv2).apply(this, arguments));
      }
      return RowDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(RowDiv, "tagName", "div");
    _defineProperty(RowDiv, "defaultProperties", {
      className: "row"
    });
    var _default = (0, _easyWithStyle2).default(RowDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/div/rows.js
  var require_rows = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var RowsDiv = /* @__PURE__ */ function(Element1) {
      _inherits(RowsDiv2, Element1);
      function RowsDiv2() {
        _classCallCheck(this, RowsDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RowsDiv2).apply(this, arguments));
      }
      return RowsDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(RowsDiv, "tagName", "div");
    _defineProperty(RowsDiv, "defaultProperties", {
      className: "rows"
    });
    var _default = (0, _easyWithStyle2).default(RowsDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/div/column.js
  var require_column = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var ColumnDiv = /* @__PURE__ */ function(Element1) {
      _inherits(ColumnDiv2, Element1);
      function ColumnDiv2() {
        _classCallCheck(this, ColumnDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(ColumnDiv2).apply(this, arguments));
      }
      return ColumnDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(ColumnDiv, "tagName", "div");
    _defineProperty(ColumnDiv, "defaultProperties", {
      className: "column"
    });
    var _default = (0, _easyWithStyle2).default(ColumnDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/div/columns.js
  var require_columns = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var ColumnsDiv = /* @__PURE__ */ function(Element1) {
      _inherits(ColumnsDiv2, Element1);
      function ColumnsDiv2() {
        _classCallCheck(this, ColumnsDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(ColumnsDiv2).apply(this, arguments));
      }
      return ColumnsDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(ColumnsDiv, "tagName", "div");
    _defineProperty(ColumnsDiv, "defaultProperties", {
      className: "columns"
    });
    var _default = (0, _easyWithStyle2).default(ColumnsDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/div/sizeable.js
  var require_sizeable = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  \n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var SizeableDiv = /* @__PURE__ */ function(Element1) {
      _inherits(SizeableDiv2, Element1);
      function SizeableDiv2() {
        _classCallCheck(this, SizeableDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(SizeableDiv2).apply(this, arguments));
      }
      return SizeableDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(SizeableDiv, "tagName", "div");
    _defineProperty(SizeableDiv, "defaultProperties", {
      className: "sizeable"
    });
    var _default = (0, _easyWithStyle2).default(SizeableDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/constants.js
  var require_constants6 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.START_DRAG = exports.DRAG = exports.ROW_RESIZE = exports.CURSOR = exports.ESCAPE_KEY_CODE = exports.MOUSEUP_BLUR = exports.COL_RESIZE = exports.AUTO = exports.STOP_DRAG = void 0;
    var DRAG = "drag";
    exports.DRAG = DRAG;
    var AUTO = "auto";
    exports.AUTO = AUTO;
    var CURSOR = "cursor";
    exports.CURSOR = CURSOR;
    var STOP_DRAG = "stop drag";
    exports.STOP_DRAG = STOP_DRAG;
    var START_DRAG = "start drag";
    exports.START_DRAG = START_DRAG;
    var COL_RESIZE = "col-resize";
    exports.COL_RESIZE = COL_RESIZE;
    var ROW_RESIZE = "row-resize";
    exports.ROW_RESIZE = ROW_RESIZE;
    var MOUSEUP_BLUR = "mouseup blur";
    exports.MOUSEUP_BLUR = MOUSEUP_BLUR;
    var ESCAPE_KEY_CODE = 27;
    exports.ESCAPE_KEY_CODE = ESCAPE_KEY_CODE;
  });

  // lib/cursor.js
  var require_cursor = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.columnResizeCursor = columnResizeCursor;
    exports.rowResizeCursor = rowResizeCursor;
    exports.resetCursor = resetCursor;
    var _easy2 = require_lib();
    var _constants = require_constants6();
    var body2 = new _easy2.Body();
    var previousCursor;
    function columnResizeCursor() {
      var currentCursor = getCurrentCursor();
      if (currentCursor !== _constants.COL_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.COL_RESIZE);
      }
    }
    function rowResizeCursor() {
      var currentCursor = getCurrentCursor();
      if (currentCursor !== _constants.ROW_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.ROW_RESIZE);
      }
    }
    function resetCursor() {
      setCursor(previousCursor);
    }
    function setCursor(cursor) {
      var css = {
        cursor
      };
      body2.css(css);
    }
    function getCurrentCursor() {
      var currentCursor = body2.css(_constants.CURSOR) || _constants.AUTO;
      return currentCursor;
    }
  });

  // lib/div/splitter.js
  var require_splitter = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _easy2 = require_lib();
    var _sizeable = _interopRequireDefault2(require_sizeable());
    var _cursor = require_cursor();
    var _options = require_options();
    var _constants = require_constants6();
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    var _handler;
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  flex-shrink: 0;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var SplitterDiv = /* @__PURE__ */ function(Element1) {
      _inherits(SplitterDiv2, Element1);
      function SplitterDiv2(selector, options) {
        _classCallCheck(this, SplitterDiv2);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv2).call(this, selector));
        _this.options = options;
        return _this;
      }
      _createClass(SplitterDiv2, [
        {
          key: "isOptionPresent",
          value: function isOptionPresent(option) {
            var optionPresent = !!this.options[option];
            return optionPresent;
          }
        },
        {
          key: "setOptions",
          value: function setOptions(options) {
            this.options = options;
          }
        },
        {
          key: "setOption",
          value: function setOption(option) {
            this.options[option] = true;
          }
        },
        {
          key: "unsetOption",
          value: function unsetOption(option) {
            delete this.options[option];
          }
        },
        {
          key: "onDrag",
          value: function onDrag(dragHandler, element) {
            var eventType = _constants.DRAG, handler = dragHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offDrag",
          value: function offDrag(dragHandler, element) {
            var eventType = _constants.DRAG, handler = dragHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "onStopDrag",
          value: function onStopDrag(stopDragHandler, element) {
            var eventType = _constants.STOP_DRAG, handler = stopDragHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offStopDrag",
          value: function offStopDrag(stopDragHandler, element) {
            var eventType = _constants.STOP_DRAG, handler = stopDragHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "onStartDrag",
          value: function onStartDrag(stopDragHandler, element) {
            var eventType = _constants.START_DRAG, handler = stopDragHandler;
            this.addEventListener(eventType, handler, element);
          }
        },
        {
          key: "offStartDrag",
          value: function offStartDrag(stopDragHandler, element) {
            var eventType = _constants.START_DRAG, handler = stopDragHandler;
            this.removeEventListener(eventType, handler, element);
          }
        },
        {
          key: "callHandlers",
          value: function callHandlers(eventType) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              remainingArguments[_key - 1] = arguments[_key];
            }
            var eventListeners = this.findEventListeners(eventType);
            eventListeners.forEach(function(eventListener) {
              var handler = eventListener.handler, element = eventListener.element;
              (_handler = handler).call.apply(_handler, [
                element
              ].concat(_toConsumableArray(remainingArguments)));
            });
          }
        },
        {
          key: "enable",
          value: function enable() {
            this.removeClass("disabled");
          }
        },
        {
          key: "disable",
          value: function disable() {
            this.addClass("disabled");
          }
        },
        {
          key: "isDisabled",
          value: function isDisabled() {
            var disabled = this.hasClass("disabled");
            return disabled;
          }
        },
        {
          key: "isDragging",
          value: function isDragging() {
            var dragging = this.hasClass("dragging");
            return dragging;
          }
        },
        {
          key: "getDirection",
          value: function getDirection() {
            var direction;
            var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement();
            if (_instanceof(nextSiblingElement, _sizeable.default)) {
              direction = 1;
            }
            if (_instanceof(previousSiblingElement, _sizeable.default)) {
              direction = -1;
            }
            return direction;
          }
        },
        {
          key: "getSizeableDiv",
          value: function getSizeableDiv() {
            var sizeableDiv;
            var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement();
            if (_instanceof(nextSiblingElement, _sizeable.default)) {
              sizeableDiv = nextSiblingElement;
            }
            if (_instanceof(previousSiblingElement, _sizeable.default)) {
              sizeableDiv = previousSiblingElement;
            }
            return sizeableDiv;
          }
        },
        {
          key: "startDrag",
          value: function startDrag() {
            var eventType = _constants.START_DRAG, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);
            if (escapeKeyStopsDraggingOptionPresent) {
              _easy2.window.onKeyDown(this.keyDownHandler, this);
            }
            this.addClass("dragging");
            this.callHandlers(eventType);
          }
        },
        {
          key: "stopDrag",
          value: function stopDrag() {
            var eventType = _constants.STOP_DRAG, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);
            if (escapeKeyStopsDraggingOptionPresent) {
              _easy2.window.offKeyDown(this.keyDownHandler, this);
            }
            this.removeClass("dragging");
            this.callHandlers(eventType);
          }
        },
        {
          key: "mouseUpHandler",
          value: function mouseUpHandler(event, element) {
            var disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging();
              if (dragging) {
                this.stopDrag();
              }
              (0, _cursor).resetCursor();
            }
          }
        },
        {
          key: "mouseOutHandler",
          value: function mouseOutHandler(event, element) {
            var disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging();
              if (!dragging) {
                (0, _cursor).resetCursor();
              }
            }
          }
        },
        {
          key: "keyDownHandler",
          value: function keyDownHandler(event, element) {
            var keyCode = event.keyCode;
            if (keyCode === _constants.ESCAPE_KEY_CODE) {
              var dragging = this.isDragging();
              if (dragging) {
                this.stopDrag();
              }
              (0, _cursor).resetCursor();
            }
          }
        },
        {
          key: "didMount",
          value: function didMount() {
            var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, disabled = _properties.disabled, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag;
            disabled === true ? this.disable() : this.enable();
            dragHandler && this.onDrag(dragHandler);
            stopDragHandler && this.onStopDrag(stopDragHandler);
            startDragHandler && this.onStartDrag(startDragHandler);
            _easy2.window.on(_constants.MOUSEUP_BLUR, this.mouseUpHandler, this);
            _easy2.window.onMouseMove(this.mouseMoveHandler, this);
            this.onMouseDown(this.mouseDownHandler, this);
            this.onMouseOver(this.mouseOverHandler, this);
            this.onMouseOut(this.mouseOutHandler, this);
          }
        },
        {
          key: "willUnmount",
          value: function willUnmount() {
            var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag;
            dragHandler && this.offDrag(dragHandler);
            stopDragHandler && this.offStopDrag(stopDragHandler);
            startDragHandler && this.offStartDrag(startDragHandler);
            _easy2.window.off(_constants.MOUSEUP_BLUR, this.mouseUpHandler, this);
            _easy2.window.offMouseMove(this.mouseMoveHandler, this);
            this.offMouseDown(this.mouseDownHandler, this);
            this.offMouseOver(this.mouseOverHandler, this);
            this.offMouseOut(this.mouseOutHandler, this);
          }
        },
        {
          key: "initialise",
          value: function initialise() {
            this.setInitialState();
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            var _options1 = properties.options, options = _options1 === void 0 ? {} : _options1, splitterDiv = _easy2.Element.fromClass(Class, properties, options);
            return splitterDiv;
          }
        }
      ]);
      return SplitterDiv2;
    }(_wrapNativeSuper(_easy2.Element));
    _defineProperty(SplitterDiv, "tagName", "div");
    _defineProperty(SplitterDiv, "defaultProperties", {
      className: "splitter"
    });
    _defineProperty(SplitterDiv, "ignoredProperties", [
      "onStartDrag",
      "onStopDrag",
      "onDrag",
      "options",
      "disabled"
    ]);
    var _default = (0, _easyWithStyle2).default(SplitterDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/div/splitter/vertical.js
  var require_vertical = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _splitter = _interopRequireDefault2(require_splitter());
    var _constants = require_constants6();
    var _cursor = require_cursor();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  width: 1rem;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var VerticalSplitter = /* @__PURE__ */ function(Splitter) {
      _inherits(VerticalSplitter2, Splitter);
      function VerticalSplitter2() {
        _classCallCheck(this, VerticalSplitter2);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitter2).apply(this, arguments));
      }
      _createClass(VerticalSplitter2, [
        {
          key: "mouseOverHandler",
          value: function mouseOverHandler(event, element) {
            var disabled = this.isDisabled();
            if (!disabled) {
              (0, _cursor).columnResizeCursor();
            }
          }
        },
        {
          key: "mouseMoveHandler",
          value: function mouseMoveHandler(event, element) {
            var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging();
              if (dragging) {
                var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv();
                var previousMouseLeft = this.getPreviousMouseLeft(), previousSizeableDivWidth = this.getPreviousSizeableDivWidth(), relativeMouseLeft = mouseLeft - previousMouseLeft;
                var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
                var width = sizeableDivWidth, eventType = _constants.DRAG;
                sizeableDiv.setWidth(width);
                sizeableDivWidth = sizeableDiv.getWidth();
                this.callHandlers(eventType, sizeableDivWidth);
              }
            }
          }
        },
        {
          key: "mouseDownHandler",
          value: function mouseDownHandler(event, element) {
            var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging(), sizeableDiv = this.getSizeableDiv(), previousMouseLeft = mouseLeft, sizeableDivWidth = sizeableDiv.getWidth(), previousSizeableDivWidth = sizeableDivWidth;
              this.setPreviousMouseLeft(previousMouseLeft);
              this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
              (0, _cursor).columnResizeCursor();
              if (!dragging) {
                this.startDrag();
              }
            }
          }
        },
        {
          key: "getPreviousMouseLeft",
          value: function getPreviousMouseLeft() {
            var state = this.getState(), previousMouseLeft = state.previousMouseLeft;
            return previousMouseLeft;
          }
        },
        {
          key: "getPreviousSizeableDivWidth",
          value: function getPreviousSizeableDivWidth() {
            var state = this.getState(), previousSizeableDivWidth = state.previousSizeableDivWidth;
            return previousSizeableDivWidth;
          }
        },
        {
          key: "setPreviousMouseLeft",
          value: function setPreviousMouseLeft(previousMouseLeft) {
            this.updateState({
              previousMouseLeft
            });
          }
        },
        {
          key: "setPreviousSizeableDivWidth",
          value: function setPreviousSizeableDivWidth(previousSizeableDivWidth) {
            this.updateState({
              previousSizeableDivWidth
            });
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState() {
            var previousMouseLeft = null, previousSizeableDivWidth = null;
            this.setState({
              previousMouseLeft,
              previousSizeableDivWidth
            });
          }
        }
      ]);
      return VerticalSplitter2;
    }(_splitter.default);
    _defineProperty(VerticalSplitter, "defaultProperties", {
      className: "vertical"
    });
    var _default = (0, _easyWithStyle2).default(VerticalSplitter)(_templateObject());
    exports.default = _default;
  });

  // lib/div/splitter/horizontal.js
  var require_horizontal = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _splitter = _interopRequireDefault2(require_splitter());
    var _constants = require_constants6();
    var _cursor = require_cursor();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  height: 1rem;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var HorizontalSplitter = /* @__PURE__ */ function(Splitter) {
      _inherits(HorizontalSplitter2, Splitter);
      function HorizontalSplitter2() {
        _classCallCheck(this, HorizontalSplitter2);
        return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalSplitter2).apply(this, arguments));
      }
      _createClass(HorizontalSplitter2, [
        {
          key: "mouseOverHandler",
          value: function mouseOverHandler(event, element) {
            var disabled = this.isDisabled();
            if (!disabled) {
              (0, _cursor).rowResizeCursor();
            }
          }
        },
        {
          key: "mouseMoveHandler",
          value: function mouseMoveHandler(event, element) {
            var pageY = event.pageY, mouseTop = pageY, disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging();
              if (dragging) {
                var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv();
                var previousMouseTop = this.getPreviousMouseTop(), previousSizeableDivHeight = this.getPreviousSizeableDivHeight(), relativeMouseTop = mouseTop - previousMouseTop;
                var sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;
                var height = sizeableDivHeight, eventType = _constants.DRAG;
                sizeableDiv.setHeight(height);
                sizeableDivHeight = sizeableDiv.getHeight();
                this.callHandlers(eventType, sizeableDivHeight);
              }
            }
          }
        },
        {
          key: "mouseDownHandler",
          value: function mouseDownHandler(event, element) {
            var pageY = event.pageY, mouseTop = pageY, disabled = this.isDisabled();
            if (!disabled) {
              var dragging = this.isDragging(), sizeableDiv = this.getSizeableDiv(), previousMouseTop = mouseTop, sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight;
              this.setPreviousMouseTop(previousMouseTop);
              this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
              (0, _cursor).rowResizeCursor();
              if (!dragging) {
                this.startDrag();
              }
            }
          }
        },
        {
          key: "getPreviousMouseTop",
          value: function getPreviousMouseTop() {
            var state = this.getState(), previousMouseTop = state.previousMouseTop;
            return previousMouseTop;
          }
        },
        {
          key: "getPreviousSizeableDivHeight",
          value: function getPreviousSizeableDivHeight() {
            var state = this.getState(), previousSizeableDivHeight = state.previousSizeableDivHeight;
            return previousSizeableDivHeight;
          }
        },
        {
          key: "setPreviousMouseTop",
          value: function setPreviousMouseTop(previousMouseTop) {
            this.updateState({
              previousMouseTop
            });
          }
        },
        {
          key: "setPreviousSizeableDivHeight",
          value: function setPreviousSizeableDivHeight(previousSizeableDivHeight) {
            this.updateState({
              previousSizeableDivHeight
            });
          }
        },
        {
          key: "setInitialState",
          value: function setInitialState() {
            var previousMouseTop = null, previousSizeableDivHeight = null;
            this.setState({
              previousMouseTop,
              previousSizeableDivHeight
            });
          }
        }
      ]);
      return HorizontalSplitter2;
    }(_splitter.default);
    _defineProperty(HorizontalSplitter, "defaultProperties", {
      className: "horizontal"
    });
    var _default = (0, _easyWithStyle2).default(HorizontalSplitter)(_templateObject());
    exports.default = _default;
  });

  // lib/index.js
  var require_lib7 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "options", {
      enumerable: true,
      get: function() {
        return _options.default;
      }
    });
    Object.defineProperty(exports, "RowDiv", {
      enumerable: true,
      get: function() {
        return _row.default;
      }
    });
    Object.defineProperty(exports, "RowsDiv", {
      enumerable: true,
      get: function() {
        return _rows.default;
      }
    });
    Object.defineProperty(exports, "ColumnDiv", {
      enumerable: true,
      get: function() {
        return _column.default;
      }
    });
    Object.defineProperty(exports, "ColumnsDiv", {
      enumerable: true,
      get: function() {
        return _columns.default;
      }
    });
    Object.defineProperty(exports, "SplitterDiv", {
      enumerable: true,
      get: function() {
        return _splitter.default;
      }
    });
    Object.defineProperty(exports, "SizeableDiv", {
      enumerable: true,
      get: function() {
        return _sizeable.default;
      }
    });
    Object.defineProperty(exports, "VerticalSplitterDiv", {
      enumerable: true,
      get: function() {
        return _vertical.default;
      }
    });
    Object.defineProperty(exports, "HorizontalSplitterDiv", {
      enumerable: true,
      get: function() {
        return _horizontal.default;
      }
    });
    var _options = _interopRequireDefault2(require_options());
    var _row = _interopRequireDefault2(require_row());
    var _rows = _interopRequireDefault2(require_rows());
    var _column = _interopRequireDefault2(require_column());
    var _columns = _interopRequireDefault2(require_columns());
    var _splitter = _interopRequireDefault2(require_splitter());
    var _sizeable = _interopRequireDefault2(require_sizeable());
    var _vertical = _interopRequireDefault2(require_vertical());
    var _horizontal = _interopRequireDefault2(require_horizontal());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/div/row/blue.js
  var require_blue = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  background-color: blue;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var BlueRowDiv = /* @__PURE__ */ function(RowDiv) {
      _inherits(BlueRowDiv2, RowDiv);
      function BlueRowDiv2() {
        _classCallCheck(this, BlueRowDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BlueRowDiv2).apply(this, arguments));
      }
      return BlueRowDiv2;
    }(_index.RowDiv);
    _defineProperty(BlueRowDiv, "defaultProperties", {
      className: "blue"
    });
    var _default = (0, _easyWithStyle2).default(BlueRowDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/row/yellow.js
  var require_yellow = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  background-color: yellow;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var YellowRowDiv = /* @__PURE__ */ function(RowDiv) {
      _inherits(YellowRowDiv2, RowDiv);
      function YellowRowDiv2() {
        _classCallCheck(this, YellowRowDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(YellowRowDiv2).apply(this, arguments));
      }
      return YellowRowDiv2;
    }(_index.RowDiv);
    _defineProperty(YellowRowDiv, "defaultProperties", {
      className: "yellow"
    });
    var _default = (0, _easyWithStyle2).default(YellowRowDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/bottomLeft.js
  var require_bottomLeft = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  height: 24rem;\n  background-color: red;\n  \n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var BottomLeftDiv = function(properties) {
      var className = properties.className;
      return /* @__PURE__ */ React.createElement("div", {
        className: "".concat(className, " bottom-left")
      });
    };
    var _default = (0, _easyWithStyle2).default(BottomLeftDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/sizeable/left.js
  var require_left = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  width: 24rem;\n  max-width: 48rem;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var LeftSizeableDiv = /* @__PURE__ */ function(SizeableDiv) {
      _inherits(LeftSizeableDiv2, SizeableDiv);
      function LeftSizeableDiv2() {
        _classCallCheck(this, LeftSizeableDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(LeftSizeableDiv2).apply(this, arguments));
      }
      return LeftSizeableDiv2;
    }(_index.SizeableDiv);
    _defineProperty(LeftSizeableDiv, "defaultProperties", {
      className: "left"
    });
    var _default = (0, _easyWithStyle2).default(LeftSizeableDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/sizeable/right.js
  var require_right = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  width: 24rem;\n  max-width: 56rem;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var RightSizeableDiv = /* @__PURE__ */ function(SizeableDiv) {
      _inherits(RightSizeableDiv2, SizeableDiv);
      function RightSizeableDiv2() {
        _classCallCheck(this, RightSizeableDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RightSizeableDiv2).apply(this, arguments));
      }
      return RightSizeableDiv2;
    }(_index.SizeableDiv);
    _defineProperty(RightSizeableDiv, "defaultProperties", {
      className: "right"
    });
    var _default = (0, _easyWithStyle2).default(RightSizeableDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/splitter/pseudo.js
  var require_pseudo = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  height: 0.8rem;\n  flex-shrink: 0;\n  background-color: black;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var PseudoHorizontalSplitterDiv = function(properties) {
      var className = properties.className;
      return /* @__PURE__ */ React.createElement("div", {
        className: "".concat(className, " pseudo horizontal splitter")
      });
    };
    var _default = (0, _easyWithStyle2).default(PseudoHorizontalSplitterDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/sizeable/bottom.js
  var require_bottom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  height: 24rem;\n  max-height: 40rem;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var BottomSizeableDiv = /* @__PURE__ */ function(SizeableDiv) {
      _inherits(BottomSizeableDiv2, SizeableDiv);
      function BottomSizeableDiv2() {
        _classCallCheck(this, BottomSizeableDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BottomSizeableDiv2).apply(this, arguments));
      }
      return BottomSizeableDiv2;
    }(_index.SizeableDiv);
    _defineProperty(BottomSizeableDiv, "defaultProperties", {
      className: "bottom"
    });
    var _default = (0, _easyWithStyle2).default(BottomSizeableDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/splitter/vertical/left.js
  var require_left2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  background-color: black;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var LeftVerticalSplitterDiv = /* @__PURE__ */ function(VerticalSplitterDiv) {
      _inherits(LeftVerticalSplitterDiv2, VerticalSplitterDiv);
      function LeftVerticalSplitterDiv2() {
        _classCallCheck(this, LeftVerticalSplitterDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(LeftVerticalSplitterDiv2).apply(this, arguments));
      }
      return LeftVerticalSplitterDiv2;
    }(_index.VerticalSplitterDiv);
    _defineProperty(LeftVerticalSplitterDiv, "defaultProperties", {
      className: "left"
    });
    var _default = (0, _easyWithStyle2).default(LeftVerticalSplitterDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/splitter/vertical/right.js
  var require_right2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  background-color: black;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var RightVerticalSplitterDiv = /* @__PURE__ */ function(VerticalSplitterDiv) {
      _inherits(RightVerticalSplitterDiv2, VerticalSplitterDiv);
      function RightVerticalSplitterDiv2() {
        _classCallCheck(this, RightVerticalSplitterDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(RightVerticalSplitterDiv2).apply(this, arguments));
      }
      return RightVerticalSplitterDiv2;
    }(_index.VerticalSplitterDiv);
    _defineProperty(RightVerticalSplitterDiv, "defaultProperties", {
      className: "right"
    });
    var _default = (0, _easyWithStyle2).default(RightVerticalSplitterDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/div/splitter/horizontal/main.js
  var require_main = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get2(target2, property2, receiver2) {
          var base = _superPropBase(target2, property2);
          if (!base)
            return;
          var desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.get) {
            return desc.get.call(receiver2);
          }
          return desc.value;
        };
      }
      return _get(target, property, receiver || target);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
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
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null)
          break;
      }
      return object;
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    var _typeof = function(obj) {
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  background-color: black;\n\n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var MainHorizontalSplitterDiv = /* @__PURE__ */ function(HorizontalSplitterDiv) {
      _inherits(MainHorizontalSplitterDiv2, HorizontalSplitterDiv);
      function MainHorizontalSplitterDiv2() {
        _classCallCheck(this, MainHorizontalSplitterDiv2);
        return _possibleConstructorReturn(this, _getPrototypeOf(MainHorizontalSplitterDiv2).apply(this, arguments));
      }
      _createClass(MainHorizontalSplitterDiv2, [
        {
          key: "dragHandler",
          value: function dragHandler(sizeableDivHeight) {
            var _properties = this.properties, bottomLeftDiv = _properties.bottomLeftDiv, height = sizeableDivHeight;
            bottomLeftDiv.setHeight(height);
          }
        },
        {
          key: "didMount",
          value: function didMount() {
            _get(_getPrototypeOf(MainHorizontalSplitterDiv2.prototype), "didMount", this).call(this);
            this.onDrag(this.dragHandler, this);
          }
        },
        {
          key: "willUnmount",
          value: function willUnmount() {
            this.offDrag(this.dragHandler, this);
            _get(_getPrototypeOf(MainHorizontalSplitterDiv2.prototype), "willUnmount", this).call(this);
          }
        }
      ]);
      return MainHorizontalSplitterDiv2;
    }(_index.HorizontalSplitterDiv);
    _defineProperty(MainHorizontalSplitterDiv, "defaultProperties", {
      className: "main"
    });
    var _default = (0, _easyWithStyle2).default(MainHorizontalSplitterDiv)(_templateObject());
    exports.default = _default;
  });

  // lib/example/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easyWithStyle2 = _interopRequireDefault2(require_lib6());
    var _index = require_lib7();
    var _blue = _interopRequireDefault2(require_blue());
    var _yellow = _interopRequireDefault2(require_yellow());
    var _bottomLeft = _interopRequireDefault2(require_bottomLeft());
    var _left = _interopRequireDefault2(require_left());
    var _right = _interopRequireDefault2(require_right());
    var _pseudo = _interopRequireDefault2(require_pseudo());
    var _bottom = _interopRequireDefault2(require_bottom());
    var _left1 = _interopRequireDefault2(require_left2());
    var _right1 = _interopRequireDefault2(require_right2());
    var _main = _interopRequireDefault2(require_main());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _taggedTemplateLiteral(strings, raw) {
      if (!raw) {
        raw = strings.slice(0);
      }
      return Object.freeze(Object.defineProperties(strings, {
        raw: {
          value: Object.freeze(raw)
        }
      }));
    }
    function _templateObject() {
      var data = _taggedTemplateLiteral([
        "\n\n  width: 64rem;\n  height: 64rem;\n  display: flex;\n  \n"
      ]);
      _templateObject = function _templateObject2() {
        return data;
      };
      return data;
    }
    var ESCAPE_KEY_STOPS_DRAGGING = _index.options.ESCAPE_KEY_STOPS_DRAGGING;
    var View = function(properties) {
      var className = properties.className, bottomLeftDiv = /* @__PURE__ */ React.createElement(_bottomLeft.default, null), options = {
        ESCAPE_KEY_STOPS_DRAGGING
      };
      return /* @__PURE__ */ React.createElement("div", {
        className: "".concat(className, " view")
      }, /* @__PURE__ */ React.createElement(_index.ColumnsDiv, null, /* @__PURE__ */ React.createElement(_left.default, null, /* @__PURE__ */ React.createElement(_index.RowsDiv, null, /* @__PURE__ */ React.createElement(_yellow.default, null), /* @__PURE__ */ React.createElement(_pseudo.default, null), bottomLeftDiv)), /* @__PURE__ */ React.createElement(_left1.default, {
        options
      }), /* @__PURE__ */ React.createElement(_index.ColumnDiv, null, /* @__PURE__ */ React.createElement(_index.RowsDiv, null, /* @__PURE__ */ React.createElement(_index.RowDiv, null, /* @__PURE__ */ React.createElement(_index.ColumnsDiv, null, /* @__PURE__ */ React.createElement(_index.ColumnDiv, null), /* @__PURE__ */ React.createElement(_right1.default, {
        options
      }), /* @__PURE__ */ React.createElement(_right.default, null, /* @__PURE__ */ React.createElement(_index.RowsDiv, null, /* @__PURE__ */ React.createElement(_blue.default, null))))), /* @__PURE__ */ React.createElement(_main.default, {
        bottomLeftDiv,
        options
      }), /* @__PURE__ */ React.createElement(_bottom.default, null)))));
    };
    var _default = (0, _easyWithStyle2).default(View)(_templateObject());
    exports.default = _default;
  });

  // lib/example.js
  "use strict";
  require_preamble();
  var _easyWithStyle = _interopRequireDefault(require_lib6());
  var _easy = require_lib();
  var _view = _interopRequireDefault(require_view());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var renderStyles = _easyWithStyle.default.renderStyles;
  var body = new _easy.Body();
  renderStyles();
  body.mount(/* @__PURE__ */ React.createElement(_view.default, null));
})();
