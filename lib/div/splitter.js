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
var _handler;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwid2luZG93IiwiRWxlbWVudCIsIlNpemVhYmxlRGl2IiwicmVzZXRDdXJzb3IiLCJFU0NBUEVfS0VZX0NPREUiLCJFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTiIsIkRSQUdfRVZFTlRfVFlQRSIsIlNUT1BfRFJBR19FVkVOVF9UWVBFIiwiU1RBUlRfRFJBR19FVkVOVF9UWVBFIiwiTU9VU0VVUF9CTFVSX0VWRU5UX1RZUEUiLCJTcGxpdHRlckRpdiIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3IiLCJvcHRpb25zIiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb24iLCJ1bnNldE9wdGlvbiIsIm9uRHJhZyIsImRyYWdIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJhZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblN0b3BEcmFnIiwic3RvcERyYWdIYW5kbGVyIiwib2ZmU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9mZlN0YXJ0RHJhZyIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJjYWxsIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdiIsInN0YXJ0RHJhZyIsImVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwibW91c2VPdXRIYW5kbGVyIiwia2V5Q29kZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbiIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZiIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0IiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJzcGxpdHRlckRpdiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVQLEdBQU0sQ0FBTixLQUFNO0FBRWQsR0FBaUIsQ0FBakIsU0FBaUI7QUFFYixHQUFXLENBQVgsT0FBVztBQUNQLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBWSxDQUFaLFFBQVk7QUFDeUMsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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