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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _easydraganddrop = require("easy-drag-and-drop");
var _sizeable = /*#__PURE__*/ _interop_require_default(require("../div/sizeable"));
var _cursor = require("../cursor");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(SplitterDiv, Element);
    var _super = _create_super(SplitterDiv);
    function SplitterDiv() {
        _class_call_check(this, SplitterDiv);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "stopDragCustomHandler", function(dropElement, aborted, element, done) {
            (0, _cursor.resetCursor)();
            done();
        });
        _define_property(_assert_this_initialized(_this), "mouseOutHandler", function(event, element) {
            (0, _cursor.resetCursor)();
        });
        return _this;
    }
    _create_class(SplitterDiv, [
        {
            key: "getSizeableDiv",
            value: function getSizeableDiv() {
                var sizeableDiv;
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, _sizeable.default);
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
                var nextSiblingElement = this.getNextSiblingElement(), previousSiblingElement = this.getPreviousSiblingElement(), nextSiblingElementSizeableDiv = _instanceof(nextSiblingElement, _sizeable.default), previousSiblingElementSizeableDiv = _instanceof(previousSiblingElement, _sizeable.default);
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
            key: "getReferences",
            value: function getReferences() {
                var references = [];
                return references;
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
                var _this_properties = this.properties, _this_properties_disabled = _this_properties.disabled, disabled = _this_properties_disabled === void 0 ? false : _this_properties_disabled;
                if (disabled) {
                    this.disable();
                }
                this.enableDrag();
                this.onCustomDrag(this.dragCustomHandler);
                this.onCustomStopDrag(this.stopDragCustomHandler);
                this.onCustomStartDrag(this.startDragCustomHandler);
                this.onMouseOver(this.mouseOverHandler);
                this.onMouseOut(this.mouseOutHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseOut(this.mouseOutHandler);
                this.offMouseOver(this.mouseOverHandler);
                this.offCustomStartDrag(this.startDragCustomHandler);
                this.offCustomStopDrag(this.stopDragCustomHandler);
                this.offCustomDrag(this.dragCustomHandler);
                this.disableDrag();
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.setInitialState();
            }
        }
    ]);
    return SplitterDiv;
}(_wrap_native_super(_easy.Element));
_define_property(SplitterDiv, "tagName", "div");
_define_property(SplitterDiv, "ignoredProperties", [
    "disabled"
]);
_define_property(SplitterDiv, "defaultProperties", {
    className: "splitter"
});
Object.assign(SplitterDiv.prototype, _easydraganddrop.dragMixins);
var _default = (0, _easywithstyle.default)(SplitterDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnQ3VzdG9tSGFuZGxlciA9IChkcm9wRWxlbWVudCwgYWJvcnRlZCwgZWxlbWVudCwgZG9uZSkgPT4ge1xuICAgIHJlc2V0Q3Vyc29yKCk7XG5cbiAgICBkb25lKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgbmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCA9IGZhbHNlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZW5hYmxlRHJhZygpO1xuXG4gICAgdGhpcy5vbkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9uQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbkN1c3RvbVN0YXJ0RHJhZyh0aGlzLnN0YXJ0RHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIpO1xuXG4gICAgdGhpcy5vZmZNb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICB0aGlzLm9mZkN1c3RvbVN0b3BEcmFnKHRoaXMuc3RvcERyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmQ3VzdG9tRHJhZyh0aGlzLmRyYWdDdXN0b21IYW5kbGVyKTtcblxuICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJkaXNhYmxlZFwiXG4gIF07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXJEaXYucHJvdG90eXBlLCBkcmFnTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcbiJdLCJuYW1lcyI6WyJTcGxpdHRlckRpdiIsInN0b3BEcmFnQ3VzdG9tSGFuZGxlciIsImRyb3BFbGVtZW50IiwiYWJvcnRlZCIsImVsZW1lbnQiLCJkb25lIiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJldmVudCIsImdldFNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIm5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2IiwiU2l6ZWFibGVEaXYiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYiLCJnZXREaXJlY3Rpb24iLCJkaXJlY3Rpb24iLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImVuYWJsZSIsInJlbW92ZUNsYXNzIiwiZGlzYWJsZSIsImFkZENsYXNzIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiaGFzQ2xhc3MiLCJkaWRNb3VudCIsInByb3BlcnRpZXMiLCJlbmFibGVEcmFnIiwib25DdXN0b21EcmFnIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbVN0b3BEcmFnIiwib25DdXN0b21TdGFydERyYWciLCJzdGFydERyYWdDdXN0b21IYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VPdXQiLCJvZmZNb3VzZU92ZXIiLCJvZmZDdXN0b21TdGFydERyYWciLCJvZmZDdXN0b21TdG9wRHJhZyIsIm9mZkN1c3RvbURyYWciLCJkaXNhYmxlRHJhZyIsImluaXRpYWxpc2UiLCJzZXRJbml0aWFsU3RhdGUiLCJFbGVtZW50IiwidGFnTmFtZSIsImlnbm9yZWRQcm9wZXJ0aWVzIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJkcmFnTWl4aW5zIiwid2l0aFN0eWxlIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQW1JQTs7O2VBQUE7OztvRUFqSXNCO29CQUVFOytCQUNHOytEQUVIO3NCQUVJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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