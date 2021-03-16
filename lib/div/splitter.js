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
var SplitterDiv = function(Element1) {
    _inherits(SplitterDiv, _easy.Element);
    function SplitterDiv(selector, startDragHandler, stopDragHandler, dragHandler, options) {
        _classCallCheck(this, SplitterDiv);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
        _this.startDragHandler = startDragHandler;
        _this.stopDragHandler = stopDragHandler;
        _this.dragHandler = dragHandler;
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
            value: function onDrag(dragHandler) {
                this.dragHandler = dragHandler;
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
            key: "getDragHandler",
            value: function getDragHandler() {
                return this.dragHandler;
            }
        },
        {
            key: "startDrag",
            value: function startDrag() {
                var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);
                if (escapeKeyStopsDraggingOptionPresent) {
                    _easy.window.onKeyDown(this.keyDownHandler, this);
                }
                this.addClass("dragging");
                this.startDragHandler && this.startDragHandler();
            }
        },
        {
            key: "stopDrag",
            value: function stopDrag() {
                var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);
                if (escapeKeyStopsDraggingOptionPresent) {
                    _easy.window.offKeyDown(this.keyDownHandler, this);
                }
                this.removeClass("dragging");
                this.stopDragHandler && this.stopDragHandler();
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
                    _cursor.resetCursor();
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
                        _cursor.resetCursor();
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
                    _cursor.resetCursor();
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _properties = this.properties, disabled = _properties.disabled;
                disabled === true ? this.disable() : this.enable();
            }
        },
        {
            key: "willUnmout",
            value: function willUnmout() {
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
                _easy.window.on("mouseup blur", this.mouseUpHandler.bind(this)); ///
                _easy.window.onMouseMove(this.mouseMoveHandler.bind(this));
                this.onMouseDown(this.mouseDownHandler.bind(this));
                this.onMouseOver(this.mouseOverHandler.bind(this));
                this.onMouseOut(this.mouseOutHandler.bind(this));
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var onStartDrag = properties.onStartDrag, onStopDrag = properties.onStopDrag, onDrag = properties.onDrag, _options1 = properties.options, options = _options1 === void 0 ? {
                } : _options1, startDragHandler = onStartDrag, stopDragHandler = onStopDrag, dragHandler = onDrag, splitterDiv = _easy.Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, options);
                splitterDiv.initialise();
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
var _default = _easyWithStyle.default(SplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zdGFydERyYWdIYW5kbGVyID0gc3RhcnREcmFnSGFuZGxlcjtcbiAgICB0aGlzLnN0b3BEcmFnSGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RvcERyYWdIYW5kbGVyICYmIHRoaXMuc3RvcERyYWdIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG4gIH1cblxuICB3aWxsVW5tb3V0KCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuXG4gICAgd2luZG93Lm9uKFwibW91c2V1cCBibHVyXCIsIHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uU3RhcnREcmFnLCBvblN0b3BEcmFnLCBvbkRyYWcsIG9wdGlvbnMgPSB7fSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyRGl2LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsY0FBQTtJQUVBLEtBQUE7SUFFQSxTQUFBO0lBRUEsT0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ErTUEseUJBSUE7Ozs7Ozs7SUFqTkEsV0FBQSxZQUFBLFFBQUE7Y0FBQSxXQUFBLEVBUkEsS0FBQTthQVFBLFdBQUEsQ0FDQSxRQUFBLEVBQUEsZ0JBQUEsRUFBQSxlQUFBLEVBQUEsV0FBQSxFQUFBLE9BQUE7OEJBREEsV0FBQTs7aUVBQUEsV0FBQSxhQUVBLFFBQUE7Y0FFQSxnQkFBQSxHQUFBLGdCQUFBO2NBQ0EsZUFBQSxHQUFBLGVBQUE7Y0FDQSxXQUFBLEdBQUEsV0FBQTtjQUNBLE9BQUEsR0FB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