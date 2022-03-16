"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sizeable = _interopRequireDefault(require("../div/sizeable"));
var _cursor = require("../cursor");
var _constants = require("../constants");
var _options = require("../options");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
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
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var BLUR_EVENT_TYPE = _easy.eventTypes.BLUR_EVENT_TYPE, DRAG_EVENT_TYPE = _easy.eventTypes.DRAG_EVENT_TYPE, MOUSEUP_EVENT_TYPE = _easy.eventTypes.MOUSEUP_EVENT_TYPE, STOP_DRAG_EVENT_TYPE = _easy.eventTypes.STOP_DRAG_EVENT_TYPE, START_DRAG_EVENT_TYPE = _easy.eventTypes.START_DRAG_EVENT_TYPE;
var SplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(SplitterDiv, Element);
    var _super = _createSuper(SplitterDiv);
    function SplitterDiv(selector, options) {
        _classCallCheck(this, SplitterDiv);
        var _this;
        _this = _super.call(this, selector);
        _this.options = options;
        return _this;
    }
    _createClass(SplitterDiv, [
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
                var eventType = DRAG_EVENT_TYPE, handler = dragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offDrag",
            value: function offDrag(dragHandler, element) {
                var eventType = DRAG_EVENT_TYPE, handler = dragHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onStopDrag",
            value: function onStopDrag(stopDragHandler, element) {
                var eventType = STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offStopDrag",
            value: function offStopDrag(stopDragHandler, element) {
                var eventType = STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onStartDrag",
            value: function onStartDrag(stopDragHandler, element) {
                var eventType = START_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offStartDrag",
            value: function offStartDrag(stopDragHandler, element) {
                var eventType = START_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "callHandlers",
            value: function callHandlers(eventType) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
                    var _handler;
                    var handler = eventListener.handler, handlerElement = eventListener.element, element = _this; ///
                    (_handler = handler).call.apply(_handler, [
                        handlerElement
                    ].concat(_toConsumableArray(remainingArguments), [
                        element
                    ]));
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
                    direction = +1;
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
                    sizeableDiv = nextSiblingElement; ///
                }
                if (_instanceof(previousSiblingElement, _sizeable.default)) {
                    sizeableDiv = previousSiblingElement; ///
                }
                return sizeableDiv;
            }
        },
        {
            key: "startDrag",
            value: function startDrag() {
                var eventType = START_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
                if (escapeKeyStopsDraggingOptionPresent) {
                    _easy.window.onKeyDown(this.keyDownHandler, this);
                }
                this.addClass("dragging");
                this.callHandlers(eventType);
            }
        },
        {
            key: "stopDrag",
            value: function stopDrag() {
                var eventType = STOP_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
                if (escapeKeyStopsDraggingOptionPresent) {
                    _easy.window.offKeyDown(this.keyDownHandler, this);
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
                var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, disabled = _properties.disabled, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag; ///
                disabled === true ? this.disable() : this.enable();
                dragHandler && this.onDrag(dragHandler);
                stopDragHandler && this.onStopDrag(stopDragHandler);
                startDragHandler && this.onStartDrag(startDragHandler);
                _easy.window.on("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE), this.mouseUpHandler, this); ///
                _easy.window.onMouseMove(this.mouseMoveHandler, this);
                this.onMouseDown(this.mouseDownHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var _properties = this.properties, onDrag = _properties.onDrag, onStopDrag = _properties.onStopDrag, onStartDrag = _properties.onStartDrag, dragHandler = onDrag, stopDragHandler = onStopDrag, startDragHandler = onStartDrag; ///
                dragHandler && this.offDrag(dragHandler);
                stopDragHandler && this.offStopDrag(stopDragHandler);
                startDragHandler && this.offStartDrag(startDragHandler);
                _easy.window.off("".concat(BLUR_EVENT_TYPE, " ").concat(MOUSEUP_EVENT_TYPE), this.mouseUpHandler, this); ///
                _easy.window.offMouseMove(this.mouseMoveHandler, this);
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
                var _options1 = properties.options, options = _options1 === void 0 ? {} : _options1, splitterDiv = _easy.Element.fromClass(Class, properties, options);
                return splitterDiv;
            }
        }
    ]);
    return SplitterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SplitterDiv, "tagName", "div");
_defineProperty(SplitterDiv, "defaultProperties", {
    className: "splitter"
});
_defineProperty(SplitterDiv, "ignoredProperties", [
    "onDrag",
    "options",
    "disabled",
    "onStopDrag",
    "onStartDrag"
]);
var _default = (0, _easyWithStyle).default(SplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCwgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04gfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuXG5jb25zdCB7IEJMVVJfRVZFTlRfVFlQRSwgRFJBR19FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIFNUT1BfRFJBR19FVkVOVF9UWVBFLCBTVEFSVF9EUkFHX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZEcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0YXJ0RHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZTdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBzdGFydERyYWcoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04pO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSlcbiAgfVxuXG4gIHN0b3BEcmFnKCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04pO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUpO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICByZXNldEN1cnNvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ0hhbmRsZXIgPSBvblN0b3BEcmFnLCAvLy9cbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWc7IC8vL1xuXG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgZHJhZ0hhbmRsZXIgJiYgdGhpcy5vbkRyYWcoZHJhZ0hhbmRsZXIpO1xuICAgIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9uU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyKTtcbiAgICBzdGFydERyYWdIYW5kbGVyICYmIHRoaXMub25TdGFydERyYWcoc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub24oYCR7QkxVUl9FVkVOVF9UWVBFfSAke01PVVNFVVBfRVZFTlRfVFlQRX1gLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsVW5tb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRHJhZywgb25TdG9wRHJhZywgb25TdGFydERyYWcgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgICAgc3RhcnREcmFnSGFuZGxlciA9IG9uU3RhcnREcmFnOyAvLy9cblxuICAgIGRyYWdIYW5kbGVyICYmIHRoaXMub2ZmRHJhZyhkcmFnSGFuZGxlcik7XG4gICAgc3RvcERyYWdIYW5kbGVyICYmIHRoaXMub2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyKTtcbiAgICBzdGFydERyYWdIYW5kbGVyICYmIHRoaXMub2ZmU3RhcnREcmFnKHN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9mZihgJHtCTFVSX0VWRU5UX1RZUEV9ICR7TU9VU0VVUF9FVkVOVF9UWVBFfWAsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25EcmFnXCIsXG4gICAgXCJvcHRpb25zXCIsXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwib25TdG9wRHJhZ1wiLFxuICAgIFwib25TdGFydERyYWdcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkJMVVJfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJEUkFHX0VWRU5UX1RZUEUiLCJNT1VTRVVQX0VWRU5UX1RZUEUiLCJTVE9QX0RSQUdfRVZFTlRfVFlQRSIsIlNUQVJUX0RSQUdfRVZFTlRfVFlQRSIsIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb24iLCJ1bnNldE9wdGlvbiIsIm9uRHJhZyIsImRyYWdIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJhZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblN0b3BEcmFnIiwic3RvcERyYWdIYW5kbGVyIiwib2ZmU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9mZlN0YXJ0RHJhZyIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJoYW5kbGVyRWxlbWVudCIsImNhbGwiLCJlbmFibGUiLCJyZW1vdmVDbGFzcyIsImRpc2FibGUiLCJhZGRDbGFzcyIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiaXNEcmFnZ2luZyIsImRyYWdnaW5nIiwiZ2V0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwibmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJTaXplYWJsZURpdiIsImdldFNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJzdGFydERyYWciLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIiwid2luZG93Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwic3RhcnREcmFnSGFuZGxlciIsIm9uIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VPdmVyIiwib2ZmTW91c2VPdXQiLCJpbml0aWFsaXNlIiwic2V0SW5pdGlhbFN0YXRlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXNCLEdBQWlCLENBQWpCLGNBQWlCO0FBRUssR0FBTSxDQUFOLEtBQU07QUFFMUIsR0FBaUIsQ0FBakIsU0FBaUI7QUFFYixHQUFXLENBQVgsT0FBVztBQUNQLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBWSxDQUFaLFFBQVk7O3lEQVY3RDt1RUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRkFBQTs7Ozs7Ozs7c0NBQUE7Ozs7OztpQ0FBQTs7O2lFQUFBOztTQUFBOzs7Ozs7OzhEQUFBO3NDQUFBOzZEQUFBO2lFQUFBOzs7O3dFQUFBO2dFQUFBOzs7Ozs7Ozs7O1VBQUE7O3dCQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7OEJBQUE7Ozs7Ozs7Ozs7OzsyQkFBQTs7Ozs7OzsrREFBQTs7Ozs7Ozs7Ozs7OztzQ0FBQTs7Ozs7Ozs7Ozs7O1VBQUE7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