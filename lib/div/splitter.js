"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _easyDragAndDrop = require("easy-drag-and-drop");
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("../div/sizeable"));
var _cursor = require("../cursor");
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
    "@swc/helpers - typeof";
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
var SplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(SplitterDiv, Element);
    var _super = _createSuper(SplitterDiv);
    function SplitterDiv() {
        _classCallCheck(this, SplitterDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "stopDragHandler", function(dropElement, aborted, element, done) {
            (0, _cursor.resetCursor)();
            done();
        });
        _defineProperty(_assertThisInitialized(_this), "mouseOutHandler", function(event, element) {
            (0, _cursor.resetCursor)();
        });
        return _this;
    }
    _createClass(SplitterDiv, [
        {
            key: "getSizeableDiv",
            value: function getSizeableDiv() {
                var sizeableDiv;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, SizeableDivment);
                if (nextSiblingElementSizeableDiv) {
                    sizeableDiv = nextSiblingElement; ///
                }
                if (previousSiblingElementSizeableDiv) {
                    sizeableDiv = previousSiblingElement; ///
                }
                return sizeableDiv;
            }
        },
        {
            key: "getDirection",
            value: function getDirection() {
                var direction;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, SizeableDivment);
                if (nextSiblingElementSizeableDiv) {
                    direction = +1;
                }
                if (previousSiblingElementSizeableDiv) {
                    direction = -1;
                }
                return direction;
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
            key: "didMount",
            value: function didMount() {
                this.enableDrag();
                this.onDrag(this.dragHandler, this);
                this.onStopDrag(this.stopDragHandler, this);
                this.onStartDrag(this.startDragHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseOut(this.mouseOutHandler, this);
                this.offMouseOver(this.mouseOverHandler, this);
                this.offStartDrag(this.startDragHandler, this);
                this.offStopDrag(this.stopDragHandler, this);
                this.offDrag(this.dragHandler, this);
                this.disableDrag();
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
                var splitterDiv = _easy.Element.fromClass(Class, properties);
                return splitterDiv;
            }
        }
    ]);
    return SplitterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(SplitterDiv, "tagName", "div");
_defineProperty(SplitterDiv, "ignoredProperties", [
    "onDrag",
    "disabled",
    "onStopDrag",
    "onStartDrag"
]);
_defineProperty(SplitterDiv, "defaultProperties", {
    className: "splitter"
});
Object.assign(SplitterDiv.prototype, _easyDragAndDrop.dragMixins);
var _default = (0, _easyWithStyle.default)(SplitterDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIHJlc2V0Q3Vyc29yKCk7XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXZtZW50KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdiksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdm1lbnQpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vbkRyYWcodGhpcy5kcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9uU3RvcERyYWcodGhpcy5zdG9wRHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vblN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnSGFuZGxlciwgdGhpcyk7XG5cbiAgICB0aGlzLm9mZlN0b3BEcmFnKHRoaXMuc3RvcERyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkRyYWdcIixcbiAgICBcImRpc2FibGVkXCIsXG4gICAgXCJvblN0b3BEcmFnXCIsXG4gICAgXCJvblN0YXJ0RHJhZ1wiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHNwbGl0dGVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyRGl2O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXJEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcbiJdLCJuYW1lcyI6WyJTcGxpdHRlckRpdiIsInN0b3BEcmFnSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJldmVudCIsImdldFNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2IiwiU2l6ZWFibGVEaXYiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYiLCJTaXplYWJsZURpdm1lbnQiLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJlbmFibGUiLCJyZW1vdmVDbGFzcyIsImRpc2FibGUiLCJhZGRDbGFzcyIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZGlkTW91bnQiLCJlbmFibGVEcmFnIiwib25EcmFnIiwiZHJhZ0hhbmRsZXIiLCJvblN0b3BEcmFnIiwib25TdGFydERyYWciLCJzdGFydERyYWdIYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VPdXQiLCJvZmZNb3VzZU92ZXIiLCJvZmZTdGFydERyYWciLCJvZmZTdG9wRHJhZyIsIm9mZkRyYWciLCJkaXNhYmxlRHJhZyIsImluaXRpYWxpc2UiLCJzZXRJbml0aWFsU3RhdGUiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIk9iamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImRyYWdNaXhpbnMiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFnSWIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQWxJb0IsaUJBQWlCO29CQUVmLE1BQU07K0JBQ0gsb0JBQW9COzZEQUV2QixpQkFBaUI7c0JBRWIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxJQUFBLEFBQU1BLFdBQVcsaUJBbUhkLEFBbkhIO2NBQU1BLFdBQVc7OEJBQVhBLFdBQVc7YUFBWEEsV0FBVzs4QkFBWEEsV0FBVzs7O1FBQ2ZDLCtDQUFBQSxpQkFBZSxFQUFHLFNBQUNDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBSztZQUN6REMsSUFBQUEsT0FBVyxZQUFBLEdBQUUsQ0FBQztZQUVkRCxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQSxDQUFBO1FBRURFLCtDQUFBQSxpQkFB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