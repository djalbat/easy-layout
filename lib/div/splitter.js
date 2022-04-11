"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _sizeable = _interopRequireDefault(require("../div/sizeable"));
var _sizeable1 = _interopRequireDefault(require("../section/sizeable"));
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
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement), previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);
                if (nextSiblingElementSizeableElement) {
                    direction = +1;
                }
                if (previousSiblingElementSizeableElement) {
                    direction = -1;
                }
                return direction;
            }
        },
        {
            key: "getSizeableElement",
            value: function getSizeableElement() {
                var sizeableElement;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement), previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);
                if (nextSiblingElementSizeableElement) {
                    sizeableElement = nextSiblingElement; ///
                }
                if (previousSiblingElementSizeableElement) {
                    sizeableElement = previousSiblingElement; ///
                }
                return sizeableElement;
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
function isElementSizeableElement(element) {
    var elementSizeableElement = _instanceof(element, _sizeable.default) || _instanceof(element, _sizeable1.default);
    return elementSizeableElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQsIGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4uL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IFNpemVhYmxlU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbi9zaXplYWJsZVwiO1xuXG5pbXBvcnQgeyByZXNldEN1cnNvciB9IGZyb20gXCIuLi9jdXJzb3JcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIH0gZnJvbSBcIi4uL29wdGlvbnNcIjtcblxuY29uc3QgeyBCTFVSX0VWRU5UX1RZUEUsIERSQUdfRVZFTlRfVFlQRSwgTU9VU0VVUF9FVkVOVF9UWVBFLCBTVE9QX0RSQUdfRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19FVkVOVF9UWVBFIH0gPSBldmVudFR5cGVzO1xuXG5jbGFzcyBTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICEhdGhpcy5vcHRpb25zW29wdGlvbl07XG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gZHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmRHJhZyhkcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gZHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25TdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVE9QX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIG9mZlN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb25TdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RhcnREcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUQVJUX0RSQUdfRVZFTlRfVFlQRSxcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGxIYW5kbGVycyhldmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKTtcblxuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IHsgaGFuZGxlciwgZWxlbWVudDogaGFuZGxlckVsZW1lbnQgfSA9IGV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBlbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50ID0gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KG5leHRTaWJsaW5nRWxlbWVudCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCA9IGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChwcmV2aW91c1NpYmxpbmdFbGVtZW50KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQgPSBpc0VsZW1lbnRTaXplYWJsZUVsZW1lbnQobmV4dFNpYmxpbmdFbGVtZW50KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVFbGVtZW50ID0gaXNFbGVtZW50U2l6ZWFibGVFbGVtZW50KHByZXZpb3VzU2libGluZ0VsZW1lbnQpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCkge1xuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gbmV4dFNpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCkge1xuICAgICAgc2l6ZWFibGVFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlKVxuICB9XG5cbiAgc3RvcERyYWcoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRHJhZywgb25TdG9wRHJhZywgb25TdGFydERyYWcsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7XG4gICAgc3RvcERyYWdIYW5kbGVyICYmIHRoaXMub25TdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIpO1xuICAgIHN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5vblN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbihgJHtCTFVSX0VWRU5UX1RZUEV9ICR7TU9VU0VVUF9FVkVOVF9UWVBFfWAsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IHsgb25EcmFnLCBvblN0b3BEcmFnLCBvblN0YXJ0RHJhZyB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ0hhbmRsZXIgPSBvblN0b3BEcmFnLCAvLy9cbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWc7IC8vL1xuXG4gICAgZHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZEcmFnKGRyYWdIYW5kbGVyKTtcbiAgICBzdG9wRHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZTdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIpO1xuICAgIHN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5vZmZTdGFydERyYWcoc3RhcnREcmFnSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub2ZmKGAke0JMVVJfRVZFTlRfVFlQRX0gJHtNT1VTRVVQX0VWRU5UX1RZUEV9YCwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICAgIHdpbmRvdy5vZmZNb3VzZU1vdmUodGhpcy5tb3VzZU1vdmVIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNwbGl0dGVyXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkRyYWdcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJvblN0b3BEcmFnXCIsXG4gICAgXCJvblN0YXJ0RHJhZ1wiXG4gIF07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb3B0aW9ucyA9IHt9IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHNwbGl0dGVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyRGl2O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudFNpemVhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGVsZW1lbnRTaXplYWJsZUVsZW1lbnQgPSAoZWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB8fCAoZWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlU2VjdGlvbik7XG5cbiAgcmV0dXJuIGVsZW1lbnRTaXplYWJsZUVsZW1lbnQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEFVVE8gPSBcImF1dG9cIjtcbmV4cG9ydCBjb25zdCBDVVJTT1IgPSBcImN1cnNvclwiO1xuZXhwb3J0IGNvbnN0IENPTF9SRVNJWkUgPSBcImNvbC1yZXNpemVcIjtcbmV4cG9ydCBjb25zdCBST1dfUkVTSVpFID0gXCJyb3ctcmVzaXplXCI7XG5leHBvcnQgY29uc3QgRVNDQVBFX0tFWV9DT0RFID0gMjc7XG4iXSwibmFtZXMiOlsiQkxVUl9FVkVOVF9UWVBFIiwiZXZlbnRUeXBlcyIsIkRSQUdfRVZFTlRfVFlQRSIsIk1PVVNFVVBfRVZFTlRfVFlQRSIsIlNUT1BfRFJBR19FVkVOVF9UWVBFIiwiU1RBUlRfRFJBR19FVkVOVF9UWVBFIiwiU3BsaXR0ZXJEaXYiLCJzZWxlY3RvciIsIm9wdGlvbnMiLCJpc09wdGlvblByZXNlbnQiLCJvcHRpb24iLCJvcHRpb25QcmVzZW50Iiwic2V0T3B0aW9ucyIsInNldE9wdGlvbiIsInVuc2V0T3B0aW9uIiwib25EcmFnIiwiZHJhZ0hhbmRsZXIiLCJlbGVtZW50IiwiZXZlbnRUeXBlIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvZmZEcmFnIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uU3RvcERyYWciLCJzdG9wRHJhZ0hhbmRsZXIiLCJvZmZTdG9wRHJhZyIsIm9uU3RhcnREcmFnIiwib2ZmU3RhcnREcmFnIiwiY2FsbEhhbmRsZXJzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZXZlbnRMaXN0ZW5lcnMiLCJmaW5kRXZlbnRMaXN0ZW5lcnMiLCJmb3JFYWNoIiwiZXZlbnRMaXN0ZW5lciIsImhhbmRsZXJFbGVtZW50IiwiY2FsbCIsImVuYWJsZSIsInJlbW92ZUNsYXNzIiwiZGlzYWJsZSIsImFkZENsYXNzIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiaGFzQ2xhc3MiLCJpc0RyYWdnaW5nIiwiZHJhZ2dpbmciLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRWxlbWVudCIsImlzRWxlbWVudFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnQiLCJzdGFydERyYWciLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkdfT1BUSU9OIiwid2luZG93Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwic3RhcnREcmFnSGFuZGxlciIsIm9uIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmIiwib2ZmTW91c2VNb3ZlIiwib2ZmTW91c2VEb3duIiwib2ZmTW91c2VPdmVyIiwib2ZmTW91c2VPdXQiLCJpbml0aWFsaXNlIiwic2V0SW5pdGlhbFN0YXRlIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIndpdGhTdHlsZSIsImVsZW1lbnRTaXplYWJsZUVsZW1lbnQiLCJTaXplYWJsZURpdiIsIlNpemVhYmxlU2VjdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRUssSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRTFCLElBQUEsU0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBQ2IsSUFBQSxVQUFxQixrQ0FBckIscUJBQXFCLEVBQUE7QUFFckIsSUFBQSxPQUFXLFdBQVgsV0FBVyxDQUFBO0FBQ1AsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0csSUFBQSxRQUFZLFdBQVosWUFBWSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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