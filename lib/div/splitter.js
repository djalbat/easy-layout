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
                var _this = this;
                var eventListeners = this.findEventListeners(eventType);
                eventListeners.forEach(function(eventListener) {
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
    "onStartDrag",
    "onStopDrag",
    "onDrag",
    "options",
    "disabled"
]);
var _default = (0, _easyWithStyle).default(SplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwid2luZG93IiwiRWxlbWVudCIsIlNpemVhYmxlRGl2IiwicmVzZXRDdXJzb3IiLCJFU0NBUEVfS0VZX0NPREUiLCJFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTiIsIkRSQUdfRVZFTlRfVFlQRSIsIlNUT1BfRFJBR19FVkVOVF9UWVBFIiwiU1RBUlRfRFJBR19FVkVOVF9UWVBFIiwiTU9VU0VVUF9CTFVSX0VWRU5UX1RZUEUiLCJTcGxpdHRlckRpdiIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3IiLCJvcHRpb25zIiwiaXNPcHRpb25QcmVzZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInNldE9wdGlvbnMiLCJzZXRPcHRpb24iLCJ1bnNldE9wdGlvbiIsIm9uRHJhZyIsImRyYWdIYW5kbGVyIiwiZWxlbWVudCIsImV2ZW50VHlwZSIsImhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmRHJhZyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvblN0b3BEcmFnIiwic3RvcERyYWdIYW5kbGVyIiwib2ZmU3RvcERyYWciLCJvblN0YXJ0RHJhZyIsIm9mZlN0YXJ0RHJhZyIsImNhbGxIYW5kbGVycyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImV2ZW50TGlzdGVuZXJzIiwiZmluZEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImV2ZW50TGlzdGVuZXIiLCJjYWxsIiwiZW5hYmxlIiwicmVtb3ZlQ2xhc3MiLCJkaXNhYmxlIiwiYWRkQ2xhc3MiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImlzRHJhZ2dpbmciLCJkcmFnZ2luZyIsImdldERpcmVjdGlvbiIsImRpcmVjdGlvbiIsIm5leHRTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdiIsInN0YXJ0RHJhZyIsImVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50Iiwib25LZXlEb3duIiwia2V5RG93bkhhbmRsZXIiLCJzdG9wRHJhZyIsIm9mZktleURvd24iLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwibW91c2VPdXRIYW5kbGVyIiwia2V5Q29kZSIsImRpZE1vdW50IiwicHJvcGVydGllcyIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJvbiIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlSGFuZGxlciIsIm9uTW91c2VEb3duIiwibW91c2VEb3duSGFuZGxlciIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVySGFuZGxlciIsIm9uTW91c2VPdXQiLCJ3aWxsVW5tb3VudCIsIm9mZiIsIm9mZk1vdXNlTW92ZSIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0IiwiaW5pdGlhbGlzZSIsInNldEluaXRpYWxTdGF0ZSIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJzcGxpdHRlckRpdiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVQLEdBQU0sQ0FBTixLQUFNO0FBRWQsR0FBaUIsQ0FBakIsU0FBaUI7QUFFYixHQUFXLENBQVgsT0FBVztBQUNQLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBWSxDQUFaLFFBQVk7QUFDeUMsR0FBZSxDQUFmLFdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFVLEVBQUUsQ0FBQztnQkFDbkMsR0FBSyxhQUFvQixVQUFVLENBQTNCLE9BQU8sRUFBUCxPQUFPLDBCQUFHLENBQUM7Z0JBQUEsQ0FBQyxjQUNkLFdBQVcsR0E1UVcsS0FBTSxTQTRRTixTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPO2dCQUVoRSxNQUFNLENBQUMsV0FBVztZQUNwQixDQUFDOzs7V0F0UUcsV0FBVzttQkFUZSxLQUFNO2dCQVNoQyxXQUFXLEVBbVBSLENBQU8sVUFBRyxDQUFLO2dCQW5QbEIsV0FBVyxFQXFQUixDQUFpQixvQkFBRyxDQUFDO0lBQzFCLFNBQVMsRUFBRSxDQUFVO0FBQ3ZCLENBQUM7Z0JBdlBHLFdBQVcsRUF5UFIsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixDQUFhO0lBQ2IsQ0FBWTtJQUNaLENBQVE7SUFDUixDQUFTO0lBQ1QsQ0FBVTtBQUNaLENBQUM7bUJBMVFtQixjQUFpQixVQW9SZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lOR19PUFRJT04gfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgRFJBR19FVkVOVF9UWVBFLCBTVE9QX0RSQUdfRVZFTlRfVFlQRSwgU1RBUlRfRFJBR19FVkVOVF9UWVBFLCBNT1VTRVVQX0JMVVJfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZEcmFnKGRyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBkcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgb2ZmU3RvcERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvblN0YXJ0RHJhZyhzdG9wRHJhZ0hhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjsgIC8vL1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gIH1cblxuICBvZmZTdGFydERyYWcoc3RvcERyYWdIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RBUlRfRFJBR19FVkVOVF9UWVBFLFxuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICB9XG5cbiAgY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpO1xuXG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgeyBoYW5kbGVyLCBlbGVtZW50IH0gPSBldmVudExpc3RlbmVyO1xuXG4gICAgICBoYW5kbGVyLmNhbGwoZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCB0aGlzKTsgLy8vXG4gICAgfSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gbmV4dFNpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZURpdjtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlKVxuICB9XG5cbiAgc3RvcERyYWcoKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gU1RPUF9EUkFHX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HX09QVElPTik7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IG9uRHJhZywgb25TdG9wRHJhZywgb25TdGFydERyYWcsIGRpc2FibGVkIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9uRHJhZyhkcmFnSGFuZGxlcik7XG4gICAgc3RvcERyYWdIYW5kbGVyICYmIHRoaXMub25TdG9wRHJhZyhzdG9wRHJhZ0hhbmRsZXIpO1xuICAgIHN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5vblN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbihNT1VTRVVQX0JMVVJfRVZFTlRfVFlQRSwgdGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgY29uc3QgeyBvbkRyYWcsIG9uU3RvcERyYWcsIG9uU3RhcnREcmFnIH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZzsgLy8vXG5cbiAgICBkcmFnSGFuZGxlciAmJiB0aGlzLm9mZkRyYWcoZHJhZ0hhbmRsZXIpO1xuICAgIHN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0b3BEcmFnKHN0b3BEcmFnSGFuZGxlcik7XG4gICAgc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLm9mZlN0YXJ0RHJhZyhzdGFydERyYWdIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vZmYoTU9VU0VVUF9CTFVSX0VWRU5UX1RZUEUsIHRoaXMubW91c2VVcEhhbmRsZXIsIHRoaXMpOyAgLy8vXG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlciwgdGhpcyk7XG4gICAgdGhpcy5vZmZNb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl19