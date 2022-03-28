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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4uL2Rpdi9zaXplYWJsZVwiO1xuXG5pbXBvcnQgeyByZXNldEN1cnNvciB9IGZyb20gXCIuLi9jdXJzb3JcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIH0gZnJvbSBcIi4uL29wdGlvbnNcIjtcblxuY29uc3QgeyBCTFVSX0VWRU5UX1RZUEUsIERSQUdfRVZFTlRfVFlQRSwgTU9VU0VVUF9FVkVOVF9UWVBFLCBTVE9QX0RSQUdfRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICEhdGhpcy5vcHRpb25zW29wdGlvbl07XG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gZHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmRHJhZyhkcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gZHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25TdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVE9QX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZlN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25TdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RhcnREcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZURpdigpIHtcbiAgICBsZXQgc2l6ZWFibGVEaXY7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgc3RhcnREcmFnKCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUpXG4gIH1cblxuICBzdG9wRHJhZygpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVE9QX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlKTtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb25EcmFnLCBvblN0b3BEcmFnLCBvblN0YXJ0RHJhZywgZGlzYWJsZWQgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgICAgc3RhcnREcmFnSGFuZGxlciA9IG9uU3RhcnREcmFnOyAvLy9cblxuICAgIChkaXNhYmxlZCA9PT0gdHJ1ZSkgPyAvLy9cbiAgICAgIHRoaXMuZGlzYWJsZSgpIDpcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcblxuICAgIGRyYWdIYW5kbGVyICYmIHRoaXMub25EcmFnKGRyYWdIYW5kbGVyKTtcbiAgICBzdG9wRHJhZ0hhbmRsZXIgJiYgdGhpcy5vblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlcik7XG4gICAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9uU3RhcnREcmFnKHN0YXJ0RHJhZ0hhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uKGAke0JMVVJfRVZFTlRfVFlQRX0gJHtNT1VTRVVQX0VWRU5UX1RZUEV9YCwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9mZkRyYWcoZHJhZ0hhbmRsZXIpO1xuICAgIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlcik7XG4gICAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmYoYCR7QkxVUl9FVkVOVF9UWVBFfSAke01PVVNFVVBfRVZFTlRfVFlQRX1gLCB0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTsgIC8vL1xuXG4gICAgd2luZG93Lm9mZk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uU3RhcnREcmFnXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvcHRpb25zID0ge30gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3BsaXR0ZXJEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVVUTyA9IFwiYXV0b1wiO1xuZXhwb3J0IGNvbnN0IENVUlNPUiA9IFwiY3Vyc29yXCI7XG5leHBvcnQgY29uc3QgQ09MX1JFU0laRSA9IFwiY29sLXJlc2l6ZVwiO1xuZXhwb3J0IGNvbnN0IFJPV19SRVNJWkUgPSBcInJvdy1yZXNpemVcIjtcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbiJdLCJuYW1lcyI6WyJCTFVSX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiRFJBR19FVkVOVF9UWVBFIiwiTU9VU0VVUF9FVkVOVF9UWVBFIiwiU1RPUF9EUkFHX0VWRU5UX1RZUEUiLCJTVEFSVF9EUkFHX0VWRU5UX1RZUEUiLCJTcGxpdHRlckRpdiIsInNlbGVjdG9yIiwib3B0aW9ucyIsImlzT3B0aW9uUHJlc2VudCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJzZXRPcHRpb25zIiwic2V0T3B0aW9uIiwidW5zZXRPcHRpb24iLCJvbkRyYWciLCJkcmFnSGFuZGxlciIsImVsZW1lbnQiLCJldmVudFR5cGUiLCJoYW5kbGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZkRyYWciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25TdG9wRHJhZyIsInN0b3BEcmFnSGFuZGxlciIsIm9mZlN0b3BEcmFnIiwib25TdGFydERyYWciLCJvZmZTdGFydERyYWciLCJjYWxsSGFuZGxlcnMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJldmVudExpc3RlbmVycyIsImZpbmRFdmVudExpc3RlbmVycyIsImZvckVhY2giLCJldmVudExpc3RlbmVyIiwiaGFuZGxlckVsZW1lbnQiLCJjYWxsIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiU2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2Iiwic3RhcnREcmFnIiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQiLCJFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTiIsIndpbmRvdyIsIm9uS2V5RG93biIsImtleURvd25IYW5kbGVyIiwic3RvcERyYWciLCJvZmZLZXlEb3duIiwibW91c2VVcEhhbmRsZXIiLCJldmVudCIsInJlc2V0Q3Vyc29yIiwibW91c2VPdXRIYW5kbGVyIiwia2V5Q29kZSIsIkVTQ0FQRV9LRVlfQ09ERSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbiIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZiIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0IiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsImZyb21DbGFzcyIsIkNsYXNzIiwic3BsaXR0ZXJEaXYiLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFpQixDQUFqQixjQUFpQjtBQUVLLEdBQU0sQ0FBTixLQUFNO0FBRTFCLEdBQWlCLENBQWpCLFNBQWlCO0FBRWIsR0FBVyxDQUFYLE9BQVc7QUFDUCxHQUFjLENBQWQsVUFBYztBQUNHLEdBQVksQ0FBWixRQUFZOzt5REFWN0Q7dUVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0ZBQUE7Ozs7Ozs7O3NDQUFBOzs7Ozs7aUNB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