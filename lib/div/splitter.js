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
var _options1 = require("../options");
var _eventTypes = require("../eventTypes");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
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
        return right[Symbol.hasInstance](left);
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
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(SplitterDiv, Element);
    function SplitterDiv(selector, options) {
        _classCallCheck(this, SplitterDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
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
                var eventType = _eventTypes.DRAG_EVENT_TYPE, handler = dragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offDrag",
            value: function offDrag(dragHandler, element) {
                var eventType = _eventTypes.DRAG_EVENT_TYPE, handler = dragHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onStopDrag",
            value: function onStopDrag(stopDragHandler, element) {
                var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offStopDrag",
            value: function offStopDrag(stopDragHandler, element) {
                var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.removeEventListener(eventType, handler, element);
            }
        },
        {
            key: "onStartDrag",
            value: function onStartDrag(stopDragHandler, element) {
                var eventType = _eventTypes.START_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
                this.addEventListener(eventType, handler, element);
            }
        },
        {
            key: "offStartDrag",
            value: function offStartDrag(stopDragHandler, element) {
                var eventType = _eventTypes.START_DRAG_EVENT_TYPE, handler = stopDragHandler; ///
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
                    var handler = eventListener.handler, element = eventListener.element;
                    (_handler = handler).call.apply(_handler, [
                        element
                    ].concat(_toConsumableArray(remainingArguments), [
                        _this
                    ])); ///
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
                var eventType = _eventTypes.START_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options1.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
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
                var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options1.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
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
                _easy.window.on(_eventTypes.MOUSEUP_BLUR_EVENT_TYPE, this.mouseUpHandler, this); ///
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
                _easy.window.off(_eventTypes.MOUSEUP_BLUR_EVENT_TYPE, this.mouseUpHandler, this); ///
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
                var _options = properties.options, options = _options === void 0 ? {
                } : _options, splitterDiv = _easy.Element.fromClass(Class, properties, options);
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
    "onStartDrag",
    "onStopDrag",
    "onDrag",
    "options",
    "disabled"
]);
var _default = (0, _easyWithStyle).default(SplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04gfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgRFJBR19FVkVOVF9UWVBFLCBTVE9QX0RSQUdfRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19FVkVOVF9UWVBFLCBNT1VTRVVQX0JMVVJfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZEcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0YXJ0RHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZTdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyO1xuXG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCB0aGlzKTsgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gbmV4dFNpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZURpdjtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlKVxuICB9XG5cbiAgc3RvcERyYWcoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRHJhZywgb25TdG9wRHJhZywgb25TdGFydERyYWcsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7XG4gICAgc3RvcERyYWdIYW5kbGVyICYmIHRoaXMub25TdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIpO1xuICAgIHN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5vblN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbihNT1VTRVVQX0JMVVJfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9mZkRyYWcoZHJhZ0hhbmRsZXIpO1xuICAgIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlcik7XG4gICAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmYoTU9VU0VVUF9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJvcHRpb25zIiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb24iLCJ1bnNldE9wdGlvbiIsIm9uRHJhZyIsImRyYWdIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJhZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblN0b3BEcmFnIiwic3RvcERyYWdIYW5kbGVyIiwib2ZmU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9mZlN0YXJ0RHJhZyIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJjYWxsIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdiIsInN0YXJ0RHJhZyIsImVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwibW91c2VPdXRIYW5kbGVyIiwia2V5Q29kZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbiIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZiIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0IiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsImZyb21DbGFzcyIsIkNsYXNzIiwic3BsaXR0ZXJEaXYiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVQLEdBQU0sQ0FBTixLQUFNO0FBRWQsR0FBaUIsQ0FBakIsU0FBaUI7QUFFYixHQUFXLENBQVgsT0FBVztBQUNQLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBWSxDQUFaLFNBQVk7QUFDeUMsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMlEvRSxDQUl0Qzs7Ozs7OztJQTdRTUEsV0FBVyxpQkFBakIsUUFBUTtjQUFGQSxXQUFXO2FBQVhBLFdBQVcsQ0FDSEMsUUFBUSxFQUFFQyxPQUFPOzhCQUR6QkYsV0FBVzs7aUVBQVhBLFdBQVcsYUFFUEMsUUFBUTtjQUVUQyxPQUFPLEdBQUdBLE9BQU87OztpQkFKcEJGLFdBQVc7O1lBT2ZHLEdBQWUsRUFBZkEsQ0FBZTttQkFBZkEsUUFBUSxDQUFSQSxlQUFlLENBQUNDLE1BQU0sRUFBRSxDQUFDO2dCQUN2QixHQUFLLENBQUNDLGFBQWEsS0FBSyxJQUFJLENBQUNILE9BQU8sQ0FBQ0UsTUFBTTtnQkFFM0MsTUFBTSxDQUFDQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxDQUFDSixPQUFPLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU87WUFDeEIsQ0FBQzs7O1lBRURLLEdBQVMsRUFBVEEsQ0FBUzttQkFBVEEsUUFBUSxDQUFSQSxTQUFTLENBQUNILE1BQU0sRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUNGLE9BQU8sQ0FBQ0UsTUFBTSxJQUFJLElBQUk7WUFDN0IsQ0FBQzs7O1lBRURJLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLENBQUNKLE1BQU0sRUFBRSxDQUFDO2dCQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDRixPQUFPLENBQUNFLE1BQU07WUFDNUIsQ0FBQzs7O1lBRURLLEdBQU0sRUFBTkEsQ0FBTTttQkFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLEdBQUssQ0FBQ0MsU0FBUyxHQTVCbUYsV0FBZSxrQkE2QjNHQyxPQUFPLEdBQUdILFdBQVcsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRWpDLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNGLFNBQVMsRUFBRUMsT0FBTyxFQUFFRixPQUFPO1lBQ25ELENBQUM7OztZQUVESSxHQUFPLEVBQVBBLENBQU87bUJBQVBBLFFBQVFMLENBQVJLLE9BQU8sQ0FBQ0wsV0FBVyxFQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDQyxTQUFTLEdBbkNtRixXQUFlLGtCQW9DM0dDLE9BQU8sR0FBR0gsV0FBVyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakMsSUFBSSxDQUFDTSxtQkFBbUIsQ0FBQ0osU0FBUyxFQUFFQyxPQUFPLEVBQUVGLE9BQU87WUFDdEQsQ0FBQzs7O1lBRURNLEdBQVUsRUFBVkEsQ0FBVTttQkFBVkEsUUFBUSxDQUFSQSxVQUFVLENBQUNDLGVBQWUsRUFBRVAsT0FBTyxFQUFFLENBQUM7Z0JBQ3BDLEdBQUssQ0FBQ0MsU0FBUyxHQTFDbUYsV0FBZSx1QkEyQzNHQyxPQUFPLEdBQUdLLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJDLElBQUksQ0FBQ0osZ0JBQWdCLENBQUNGLFNBQVMsRUFBRUMsT0FBTyxFQUFFRixPQUFPO1lBQ25ELENBQUM7OztZQUVEUSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDRCxlQUFlLEVBQUVQLE9BQU8sRUFBRSxDQUFDO2dCQUNyQyxHQUFLLENBQUNDLFNBQVMsR0FqRG1GLFdBQWUsdUJBa0QzR0MsT0FBTyxHQUFHSyxlQUFlLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQyxJQUFJLENBQUNGLG1CQUFtQixDQUFDSixTQUFTLEVBQUVDLE9BQU8sRUFBRUYsT0FBTztZQUN0RCxDQUFDOzs7WUFFRFMsR0FBVyxFQUFYQSxDQUFXO21CQUFYQSxRQUFRLENBQVJBLFdBQVcsQ0FBQ0YsZUFBZSxFQUFFUCxPQUFPLEVBQUUsQ0FBQztnQkFDckMsR0FBSyxDQUFDQyxTQUFTLEdBeERtRixXQUFlLHdCQXlEM0dDLE9BQU8sR0FBR0ssZUFBZSxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFckMsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQ0YsU0FBUyxFQUFFQyxPQUFPLEVBQUVGLE9BQU87WUFDbkQsQ0FBQzs7O1lBRURVLEdBQVksRUFBWkEsQ0FBWTttQkFBWkEsUUFBUSxDQUFSQSxZQUFZLENBQUNILGVBQWUsRUFBRVAsT0FBTyxFQUFFLENBQUM7Z0JBQ3RDLEdBQUssQ0FBQ0MsU0FBUyxHQS9EbUYsV0FBZSx3QkFnRTNHQyxPQUFPLEdBQUdLLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRXJDLElBQUksQ0FBQ0YsbUJBQW1CLENBQUNKLFNBQVMsRUFBRUMsT0FBTyxFQUFFRixPQUFPO1lBQ3RELENBQUM7OztZQUVEVyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxDQUFDVixTQUFTLEVBQXlCLENBQUM7Z0JBQXhCLEdBQUdXLENBQUgsR0FBcUIsQ0FBckIsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBbEJBLGtCQUFrQixHQUFyQixHQUFxQixPQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixHQUFyQixDQUFxQixHQUFyQixJQUFxQixHQUFyQixDQUFxQixFQUFyQixJQUFxQixHQUFyQixJQUFxQixFQUFyQixJQUFxQixHQUFyQixDQUFDO29CQUFFQSxrQkFBa0IsQ0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBckIsU0FBcUIsQ0FBckIsSUFBcUI7Z0JBQUQsQ0FBQzs7Z0JBQzNDLEdBQUssQ0FBQ0MsY0FBYyxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNiLFNBQVM7Z0JBRXhEWSxjQUFjLENBQUNFLE9BQU8sQ0FBQyxRQUFRLENBQVBDLGFBQWEsRUFBSyxDQUFDO3dCQUd6Q2QsUUFBTztvQkFGUCxHQUFLLENBQUdBLE9BQU8sR0FBY2MsYUFBYSxDQUFsQ2QsT0FBTyxFQUFFRixPQUFPLEdBQUtnQixhQUFhLENBQXpCaEIsT0FBTztxQkFFeEJFLFFBQU8sR0FBUEEsT0FBTyxFQUFDZSxJQUFJLENBQVpmLEtBQWtELENBQWxEQSxRQUFPLEVBQVBBLENBQUM7d0JBQVlGLE9BQU87b0JBQTZCLENBQUMsQ0FBbERFLE1BQWtELG9CQUF6QlUsa0JBQWtCLEdBQTNDVixDQUFDOztvQkFBZ0QsQ0FBQyxHQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDekQsQ0FBQztZQUNILENBQUM7OztZQUVEZ0IsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQVU7WUFDN0IsQ0FBQzs7O1lBRURDLEdBQU8sRUFBUEEsQ0FBTzttQkFBUEEsUUFBUSxDQUFSQSxPQUFPLEdBQUcsQ0FBQztnQkFDVCxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFVO1lBQzFCLENBQUM7OztZQUVEQyxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBVTtnQkFFekMsTUFBTSxDQUFDRCxRQUFRO1lBQ2pCLENBQUM7OztZQUVERSxHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osR0FBSyxDQUFDQyxRQUFRLEdBQUcsSUFBSSxDQUFDRixRQUFRLENBQUMsQ0FBVTtnQkFFekMsTUFBTSxDQUFDRSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBRyxDQUFDQyxTQUFTO2dCQUViLEdBQUssQ0FBQ0Msa0JBQWtCLEdBQUcsSUFBSSxDQUFDQyxxQkFBcUIsSUFDL0NDLHNCQUFzQixHQUFHLElBQUksQ0FBQ0MseUJBQXlCO2dCQUU3RCxFQUFFLEVBQUVILFdBQXlDLENBQXpDQSxrQkFBa0IsRUE5R0YsU0FBaUIsV0E4R1UsQ0FBQztvQkFDOUNELFNBQVMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELEVBQUUsRUFBRUcsV0FBNkMsQ0FBN0NBLHNCQUFzQixFQWxITixTQUFpQixXQWtIYyxDQUFDO29CQUNsREgsU0FBUyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBRUQsTUFBTSxDQUFDQSxTQUFTO1lBQ2xCLENBQUM7OztZQUVESyxHQUFjLEVBQWRBLENBQWM7bUJBQWRBLFFBQVEsQ0FBUkEsY0FBYyxHQUFHLENBQUM7Z0JBQ2hCLEdBQUcsQ0FBQ0MsV0FBVztnQkFFZixHQUFLLENBQUNMLGtCQUFrQixHQUFHLElBQUksQ0FBQ0MscUJBQXFCLElBQy9DQyxzQkFBc0IsR0FBRyxJQUFJLENBQUNDLHlCQUF5QjtnQkFFN0QsRUFBRSxFQUFFSCxXQUF5QyxDQUF6Q0Esa0JBQWtCLEVBL0hGLFNBQWlCLFdBK0hVLENBQUM7b0JBQzlDSyxXQUFXLEdBQUdMLGtCQUFrQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFDdkMsQ0FBQztnQkFFRCxFQUFFLEVBQUVFLFdBQTZDLENBQTdDQSxzQkFBc0IsRUFuSU4sU0FBaUIsV0FtSWMsQ0FBQztvQkFDbERHLFdBQVcsR0FBR0gsc0JBQXNCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUMzQyxDQUFDO2dCQUVELE1BQU0sQ0FBQ0csV0FBVztZQUNwQixDQUFDOzs7WUFFREMsR0FBUyxFQUFUQSxDQUFTO21CQUFUQSxRQUFRLENBQVJBLFNBQVMsR0FBRyxDQUFDO2dCQUNYLEdBQUssQ0FBQ2xDLFNBQVMsR0F0SW1GLFdBQWUsd0JBdUkzR21DLG1DQUFtQyxHQUFHLElBQUksQ0FBQzVDLGVBQWUsQ0F4SW5CLFNBQVk7Z0JBMEl6RCxFQUFFLEVBQUU0QyxtQ0FBbUMsRUFBRSxDQUFDO29CQWhKZCxLQUFNLFFBaUp6QkMsU0FBUyxDQUFDLElBQUksQ0FBQ0MsY0FBYyxFQUFFLElBQUk7Z0JBQzVDLENBQUM7Z0JBRUQsSUFBSSxDQUFDakIsUUFBUSxDQUFDLENBQVU7Z0JBRXhCLElBQUksQ0FBQ1YsWUFBWSxDQUFDVixTQUFTO1lBQzdCLENBQUM7OztZQUVEc0MsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBQ3RDLFNBQVMsR0FuSm1GLFdBQWUsdUJBb0ozR21DLG1DQUFtQyxHQUFHLElBQUksQ0FBQzVDLGVBQWUsQ0FySm5CLFNBQVk7Z0JBdUp6RCxFQUFFLEVBQUU0QyxtQ0FBbUMsRUFBRSxDQUFDO29CQTdKZCxLQUFNLFFBOEp6QkksVUFBVSxDQUFDLElBQUksQ0FBQ0YsY0FBYyxFQUFFLElBQUk7Z0JBQzdDLENBQUM7Z0JBRUQsSUFBSSxDQUFDbkIsV0FBVyxDQUFDLENBQVU7Z0JBRTNCLElBQUksQ0FBQ1IsWUFBWSxDQUFDVixTQUFTO1lBQzdCLENBQUM7OztZQUVEd0MsR0FBYyxFQUFkQSxDQUFjO21CQUFkQSxRQUFRLENBQVJBLGNBQWMsQ0FBQ0MsS0FBSyxFQUFFMUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlCLEdBQUssQ0FBQ3VCLFFBQVEsR0FBRyxJQUFJLENBQUNELFVBQVU7Z0JBRWhDLEVBQUUsR0FBR0MsUUFBUSxFQUFFLENBQUM7b0JBQ2QsR0FBSyxDQUFDRyxRQUFRLEdBQUcsSUFBSSxDQUFDRCxVQUFVO29CQUVoQyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxDQUFDO3dCQUNiLElBQUksQ0FBQ2EsUUFBUTtvQkFDZixDQUFDO3dCQTFLcUIsT0FBVztnQkE2S25DLENBQUM7WUFDSCxDQUFDOzs7WUFFREksR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0QsS0FBSyxFQUFFMUMsT0FBTyxFQUFFLENBQUM7Z0JBQy9CLEdBQUssQ0FBQ3VCLFFBQVEsR0FBRyxJQUFJLENBQUNELFVBQVU7Z0JBRWhDLEVBQUUsR0FBR0MsUUFBUSxFQUFFLENBQUM7b0JBQ2QsR0FBSyxDQUFDRyxRQUFRLEdBQUcsSUFBSSxDQUFDRCxVQUFVO29CQUVoQyxFQUFFLEdBQUdDLFFBQVEsRUFBRSxDQUFDOzRCQXRMTSxPQUFXO29CQXdMakMsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQzs7O1lBRURZLEdBQWMsRUFBZEEsQ0FBYzttQkFBZEEsUUFBUSxDQUFSQSxjQUFjLENBQUNJLEtBQUssRUFBRTFDLE9BQU8sRUFBRSxDQUFDO2dCQUM5QixHQUFLLENBQUc0QyxPQUFPLEdBQUtGLEtBQUssQ0FBakJFLE9BQU87Z0JBRWYsRUFBRSxFQUFFQSxPQUFPLEtBOUxpQixVQUFjLGtCQThMVCxDQUFDO29CQUNoQyxHQUFLLENBQUNsQixRQUFRLEdBQUcsSUFBSSxDQUFDRCxVQUFVO29CQUVoQyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxDQUFDO3dCQUNiLElBQUksQ0FBQ2EsUUFBUTtvQkFDZixDQUFDO3dCQXBNcUIsT0FBVztnQkF1TW5DLENBQUM7WUFDSCxDQUFDOzs7WUFFRE0sR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO2dCQUNWLEdBQUssQ0FBaUQsV0FBZSxHQUFmLElBQUksQ0FBQ0MsVUFBVSxFQUE3RGhELE1BQU0sR0FBd0MsV0FBZSxDQUE3REEsTUFBTSxFQUFFUSxVQUFVLEdBQTRCLFdBQWUsQ0FBckRBLFVBQVUsRUFBRUcsV0FBVyxHQUFlLFdBQWUsQ0FBekNBLFdBQVcsRUFBRWMsUUFBUSxHQUFLLFdBQWUsQ0FBNUJBLFFBQVEsRUFDM0N4QixXQUFXLEdBQUdELE1BQU0sRUFDcEJTLGVBQWUsR0FBR0QsVUFBVSxFQUM1QnlDLGdCQUFnQixHQUFHdEMsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFeENjLFFBQVEsS0FBSyxJQUFJLEdBQ2hCLElBQUksQ0FBQ0gsT0FBTyxLQUNWLElBQUksQ0FBQ0YsTUFBTTtnQkFFZm5CLFdBQVcsSUFBSSxJQUFJLENBQUNELE1BQU0sQ0FBQ0MsV0FBVztnQkFDdENRLGVBQWUsSUFBSSxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsZUFBZTtnQkFDbER3QyxnQkFBZ0IsSUFBSSxJQUFJLENBQUN0QyxXQUFXLENBQUNzQyxnQkFBZ0I7Z0JBMU56QixLQUFNLFFBNE4zQkMsRUFBRSxDQXJOeUYsV0FBZSwwQkFxTjlFLElBQUksQ0FBQ1AsY0FBYyxFQUFFLElBQUksRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBNU52QyxLQUFNLFFBOE4zQlEsV0FBVyxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUUsSUFBSTtnQkFFOUMsSUFBSSxDQUFDQyxXQUFXLENBQUMsSUFBSSxDQUFDQyxnQkFBZ0IsRUFBRSxJQUFJO2dCQUM1QyxJQUFJLENBQUNDLFdBQVcsQ0FBQyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLElBQUk7Z0JBQzVDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLElBQUksQ0FBQ1osZUFBZSxFQUFFLElBQUk7WUFDNUMsQ0FBQzs7O1lBRURhLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQXVDLFdBQWUsR0FBZixJQUFJLENBQUNWLFVBQVUsRUFBbkRoRCxNQUFNLEdBQThCLFdBQWUsQ0FBbkRBLE1BQU0sRUFBRVEsVUFBVSxHQUFrQixXQUFlLENBQTNDQSxVQUFVLEVBQUVHLFdBQVcsR0FBSyxXQUFlLENBQS9CQSxXQUFXLEVBQ2pDVixXQUFXLEdBQUdELE1BQU0sRUFDcEJTLGVBQWUsR0FBR0QsVUFBVSxFQUM1QnlDLGdCQUFnQixHQUFHdEMsV0FBVyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFekNWLFdBQVcsSUFBSSxJQUFJLENBQUNLLE9BQU8sQ0FBQ0wsV0FBVztnQkFDdkNRLGVBQWUsSUFBSSxJQUFJLENBQUNDLFdBQVcsQ0FBQ0QsZUFBZTtnQkFDbkR3QyxnQkFBZ0IsSUFBSSxJQUFJLENBQUNyQyxZQUFZLENBQUNxQyxnQkFBZ0I7Z0JBN08xQixLQUFNLFFBK08zQlUsR0FBRyxDQXhPd0YsV0FBZSwwQkF3TzdFLElBQUksQ0FBQ2hCLGNBQWMsRUFBRSxJQUFJLEVBQUksQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQS9PeEMsS0FBTSxRQWlQM0JpQixZQUFZLENBQUMsSUFBSSxDQUFDUixnQkFBZ0IsRUFBRSxJQUFJO2dCQUUvQyxJQUFJLENBQUNTLFlBQVksQ0FBQyxJQUFJLENBQUNQLGdCQUFnQixFQUFFLElBQUk7Z0JBQzdDLElBQUksQ0FBQ1EsWUFBWSxDQUFDLElBQUksQ0FBQ04sZ0JBQWdCLEVBQUUsSUFBSTtnQkFDN0MsSUFBSSxDQUFDTyxXQUFXLENBQUMsSUFBSSxDQUFDbEIsZUFBZSxFQUFFLElBQUk7WUFDN0MsQ0FBQzs7O1lBRURtQixHQUFVLEVBQVZBLENBQVU7bUJBQVZBLFFBQVEsQ0FBUkEsVUFBVSxHQUFHLENBQUM7Z0JBQ1osSUFBSSxDQUFDQyxlQUFlO1lBQ3RCLENBQUM7Ozs7WUFnQk1DLEdBQVMsRUFBVEEsQ0FBUzttQkFBaEIsUUFBUSxDQUFEQSxTQUFTLENBQUNDLEtBQUssRUFBRW5CLFVBQVUsRUFBRSxDQUFDO2dCQUNuQyxHQUFLLFlBQW9CQSxVQUFVLENBQTNCdkQsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLENBQUM7Z0JBQUEsQ0FBQyxhQUNkMkUsV0FBVyxHQTVRVyxLQUFNLFNBNFFORixTQUFTLENBQUNDLEtBQUssRUFBRW5CLFVBQVUsRUFBRXZELE9BQU87Z0JBRWhFLE1BQU0sQ0FBQzJFLFdBQVc7WUFDcEIsQ0FBQzs7O1dBdFFHN0UsV0FBVzttQkFUZSxLQUFNO2dCQVNoQ0EsV0FBVyxFQW1QUjhFLENBQU8sVUFBRyxDQUFLO2dCQW5QbEI5RSxXQUFXLEVBcVBSK0UsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsU0FBUyxFQUFFLENBQVU7QUFDdkIsQ0FBQztnQkF2UEdoRixXQUFXLEVBeVBSaUYsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixDQUFhO0lBQ2IsQ0FBWTtJQUNaLENBQVE7SUFDUixDQUFTO0lBQ1QsQ0FBVTtBQUNaLENBQUM7bUJBMVFtQixjQUFpQixVQW9SZGpGLFdBQVcifQ==