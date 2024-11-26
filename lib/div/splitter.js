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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function SplitterDiv() {
        _class_call_check(this, SplitterDiv);
        var _this;
        _this = _call_super(this, SplitterDiv, arguments), _define_property(_this, "stopDragCustomHandler", function(event, element, dropElement, aborted, done) {
            (0, _cursor.resetCursor)();
            done();
        }), _define_property(_this, "mouseOutHandler", function(event, element) {
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
                var dragEnabled = this.isDragEnabled();
                if (!dragEnabled) {
                    this.enableDrag();
                    this.onCustomDrag(this.dragCustomHandler);
                    this.onCustomStopDrag(this.stopDragCustomHandler);
                    this.onCustomStartDrag(this.startDragCustomHandler);
                }
            }
        },
        {
            key: "disable",
            value: function disable() {
                var dragEnabled = this.isDragEnabled();
                if (dragEnabled) {
                    this.offCustomStartDrag(this.startDragCustomHandler);
                    this.offCustomStopDrag(this.stopDragCustomHandler);
                    this.offCustomDrag(this.dragCustomHandler);
                    this.disableDrag();
                }
            }
        },
        {
            key: "isDisabled",
            value: function isDisabled() {
                var dragEnabled = this.isDragEnabled(), disabled = !dragEnabled;
                return disabled;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                var _this_properties = this.properties, _this_properties_disabled = _this_properties.disabled, disabled = _this_properties_disabled === void 0 ? false : _this_properties_disabled;
                if (!disabled) {
                    this.enable();
                }
                this.onMouseOver(this.mouseOverHandler);
                this.onMouseOut(this.mouseOutHandler);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                var disabled = this.isDisabled();
                this.offMouseOut(this.mouseOutHandler);
                this.offMouseOver(this.mouseOverHandler);
                if (!disabled) {
                    this.disable();
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgZHJhZ01peGlucyB9IGZyb20gXCJlYXN5LWRyYWctYW5kLWRyb3BcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0b3BEcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgZHJvcEVsZW1lbnQsIGFib3J0ZWQsIGRvbmUpID0+IHtcbiAgICByZXNldEN1cnNvcigpO1xuXG4gICAgZG9uZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgcmVzZXRDdXJzb3IoKTtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIG5leHRTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYgPSAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdiA9IChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdiksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2ID0gKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdik7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50U2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBbXTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCk7XG5cbiAgICBpZiAoIWRyYWdFbmFibGVkKSB7XG4gICAgICB0aGlzLmVuYWJsZURyYWcoKTtcblxuICAgICAgdGhpcy5vbkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub25DdXN0b21TdG9wRHJhZyh0aGlzLnN0b3BEcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub25DdXN0b21TdGFydERyYWcodGhpcy5zdGFydERyYWdDdXN0b21IYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCk7XG5cbiAgICBpZiAoZHJhZ0VuYWJsZWQpIHtcbiAgICAgIHRoaXMub2ZmQ3VzdG9tU3RhcnREcmFnKHRoaXMuc3RhcnREcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMub2ZmQ3VzdG9tU3RvcERyYWcodGhpcy5zdG9wRHJhZ0N1c3RvbUhhbmRsZXIpO1xuXG4gICAgICB0aGlzLm9mZkN1c3RvbURyYWcodGhpcy5kcmFnQ3VzdG9tSGFuZGxlcik7XG5cbiAgICAgIHRoaXMuZGlzYWJsZURyYWcoKTtcbiAgICB9XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRyYWdFbmFibGVkID0gdGhpcy5pc0RyYWdFbmFibGVkKCksXG4gICAgICAgICAgZGlzYWJsZWQgPSAhZHJhZ0VuYWJsZWQ7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkID0gZmFsc2UgfSA9IHRoaXMucHJvcGVydGllcztcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIpO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICB0aGlzLm9mZk1vdXNlT3V0KHRoaXMubW91c2VPdXRIYW5kbGVyKTtcblxuICAgIHRoaXMub2ZmTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlcik7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyRGl2LnByb3RvdHlwZSwgZHJhZ01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiU3BsaXR0ZXJEaXYiLCJzdG9wRHJhZ0N1c3RvbUhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkcm9wRWxlbWVudCIsImFib3J0ZWQiLCJkb25lIiwicmVzZXRDdXJzb3IiLCJtb3VzZU91dEhhbmRsZXIiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2IiwibmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJuZXh0U2libGluZ0VsZW1lbnRTaXplYWJsZURpdiIsIlNpemVhYmxlRGl2IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudFNpemVhYmxlRGl2IiwiZ2V0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJlbmFibGUiLCJkcmFnRW5hYmxlZCIsImlzRHJhZ0VuYWJsZWQiLCJlbmFibGVEcmFnIiwib25DdXN0b21EcmFnIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJvbkN1c3RvbVN0b3BEcmFnIiwib25DdXN0b21TdGFydERyYWciLCJzdGFydERyYWdDdXN0b21IYW5kbGVyIiwiZGlzYWJsZSIsIm9mZkN1c3RvbVN0YXJ0RHJhZyIsIm9mZkN1c3RvbVN0b3BEcmFnIiwib2ZmQ3VzdG9tRHJhZyIsImRpc2FibGVEcmFnIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwiZGlkTW91bnQiLCJwcm9wZXJ0aWVzIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIndpbGxVbm1vdW50Iiwib2ZmTW91c2VPdXQiLCJvZmZNb3VzZU92ZXIiLCJpbml0aWFsaXNlIiwic2V0SW5pdGlhbFN0YXRlIiwiRWxlbWVudCIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZHJhZ01peGlucyIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOElBOzs7ZUFBQTs7O29FQTVJc0I7b0JBRUU7K0JBQ0c7K0RBRUg7c0JBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLElBQUEsQUFBTUEsNEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEseUJB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