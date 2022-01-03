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
var _eventTypes = require("../eventTypes");
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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
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
                var eventType = _eventTypes.START_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
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
                var eventType = _eventTypes.STOP_DRAG_EVENT_TYPE, escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING_OPTION);
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
                var _options1 = properties.options, options = _options1 === void 0 ? {
                } : _options1, splitterDiv = _easy.Element.fromClass(Class, properties, options);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04gfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgRFJBR19FVkVOVF9UWVBFLCBTVE9QX0RSQUdfRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19FVkVOVF9UWVBFLCBNT1VTRVVQX0JMVVJfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZEcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0YXJ0RHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZTdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50OiBoYW5kbGVyRWxlbWVudCB9ID0gZXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBzdGFydERyYWcoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04pO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSlcbiAgfVxuXG4gIHN0b3BEcmFnKCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04pO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUpO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICByZXNldEN1cnNvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnLCBkaXNhYmxlZCB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ0hhbmRsZXIgPSBvblN0b3BEcmFnLCAvLy9cbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWc7IC8vL1xuXG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgZHJhZ0hhbmRsZXIgJiYgdGhpcy5vbkRyYWcoZHJhZ0hhbmRsZXIpO1xuICAgIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9uU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyKTtcbiAgICBzdGFydERyYWdIYW5kbGVyICYmIHRoaXMub25TdGFydERyYWcoc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub24oTU9VU0VVUF9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25EcmFnLCBvblN0b3BEcmFnLCBvblN0YXJ0RHJhZyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ0hhbmRsZXIgPSBvblN0b3BEcmFnLCAvLy9cbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWc7IC8vL1xuXG4gICAgZHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZEcmFnKGRyYWdIYW5kbGVyKTtcbiAgICBzdG9wRHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZTdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIpO1xuICAgIHN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZTdGFydERyYWcoc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmKE1PVVNFVVBfQkxVUl9FVkVOVF9UWVBFLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xuXG4gICAgd2luZG93Lm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uU3RhcnREcmFnXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvcHRpb25zID0ge30gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3BsaXR0ZXJEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcbiJdLCJuYW1lcyI6WyJTcGxpdHRlckRpdiIsInNlbGVjdG9yIiwib3B0aW9ucyIsImlzT3B0aW9uUHJlc2VudCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJzZXRPcHRpb25zIiwic2V0T3B0aW9uIiwidW5zZXRPcHRpb24iLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkRyYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25TdG9wRHJhZyIsInN0b3BEcmFnSGFuZGxlciIsIm9mZlN0b3BEcmFnIiwib25TdGFydERyYWciLCJvZmZTdGFydERyYWciLCJjYWxsSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdiIsInN0YXJ0RHJhZyIsImVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwibW91c2VPdXRIYW5kbGVyIiwia2V5Q29kZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbiIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZiIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0IiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsImZyb21DbGFzcyIsIkNsYXNzIiwic3BsaXR0ZXJEaXYiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVQLEdBQU0sQ0FBTixLQUFNO0FBRWQsR0FBaUIsQ0FBakIsU0FBaUI7QUFFYixHQUFXLENBQVgsT0FBVztBQUNQLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBWSxDQUFaLFFBQVk7QUFDeUMsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBNFEvRSxDQUl0Qzs7Ozs7OztJQTlRTUEsV0FBVyxpQkFBakIsUUFBUTtjQUFGQSxXQUFXOzhCQUFYQSxXQUFXO2FBQVhBLFdBQVcsQ0FDSEMsUUFBUSxFQUFFQyxPQUFPOzhCQUR6QkYsV0FBVzs7a0NBRVBDLFFBQVE7Y0FFVEMsT0FBTyxHQUFHQSxPQUFPOzs7aUJBSnBCRixXQUFXOztZQU9mRyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkIsR0FBSyxDQUFDQyxhQUFhLEtBQUssSUFBSSxDQUFDSCxPQUFPLENBQUNFLE1BQU07Z0JBRTNDLE1BQU0sQ0FBQ0MsYUFBYTtZQUN0QixDQUFDOzs7WUFFREMsR0FBVSxFQUFWQSxDQUFVO21CQUFWQSxRQUFRLENBQVJBLFVBQVUsQ0FBQ0os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