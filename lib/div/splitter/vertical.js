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
var _splitter = /*#__PURE__*/ _interop_require_default(require("../splitter"));
var _cursor = require("../../cursor");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
        "\n\n  width: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(VerticalSplitter, Splitter);
    function VerticalSplitter() {
        _class_call_check(this, VerticalSplitter);
        var _this;
        _this = _call_super(this, VerticalSplitter, arguments), _define_property(_this, "startDragCustomHandler", function(event, element) {
            var sizeableDiv = _this.getSizeableDiv(), sizeableDivWidth = sizeableDiv.getWidth(), previousSizeableDivWidth = sizeableDivWidth; ///
            _this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
            _this.setCursor();
        }), _define_property(_this, "dragCustomHandler", function(event, element, relativeMouseTop, relativeMouseLeft) {
            var direction = _this.getDirection(), sizeableDiv = _this.getSizeableDiv(), previousSizeableDivWidth = _this.getPreviousSizeableDivWidth(), sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft, width = sizeableDivWidth; ///
            sizeableDiv.setWidth(width);
        }), _define_property(_this, "mouseOverHandler", function(event, element) {
            _this.setCursor();
        });
        return _this;
    }
    _create_class(VerticalSplitter, [
        {
            key: "setCursor",
            value: function setCursor() {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor.columnResizeCursor)();
                }
            }
        },
        {
            key: "getPreviousSizeableDivWidth",
            value: function getPreviousSizeableDivWidth() {
                var previousSizeableDivWidth = this.getState().previousSizeableDivWidth;
                return previousSizeableDivWidth;
            }
        },
        {
            key: "setPreviousSizeableDivWidth",
            value: function setPreviousSizeableDivWidth(previousSizeableDivWidth) {
                this.updateState({
                    previousSizeableDivWidth: previousSizeableDivWidth
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousSizeableDivWidth = null;
                this.setState({
                    previousSizeableDivWidth: previousSizeableDivWidth
                });
            }
        }
    ]);
    return VerticalSplitter;
}(_splitter.default);
_define_property(VerticalSplitter, "defaultProperties", {
    className: "vertical"
});
var _default = (0, _easywithstyle.default)(VerticalSplitter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBzdGFydERyYWdDdXN0b21IYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgIC8vL1xuXG4gICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKTtcblxuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBkcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCksXG4gICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgfVxuXG4gIHNldEN1cnNvcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXIiLCJzdGFydERyYWdDdXN0b21IYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwic2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2V2lkdGgiLCJnZXRXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInNldEN1cnNvciIsImRyYWdDdXN0b21IYW5kbGVyIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsIm1vdXNlT3ZlckhhbmRsZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJTcGxpdHRlciIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrRUE7OztlQUFBOzs7b0VBaEVzQjsrREFFRDtzQkFFYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsaUNBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBOztnQkFBTixrQkFBTUEsOEJBQ0pDLHdCQUFBQSwwQkFBeUIsU0FBQ0MsT0FBT0M7WUFDL0IsSUFBTUMsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQyxtQkFBbUJGLFlBQVlHLFFBQVEsSUFDdkNDLDJCQUEyQkYsa0JBQW1CLEdBQUc7WUFFdkQsTUFBS0csMkJBQTJCLENBQUNEO1lBRWpDLE1BQUtFLFNBQVM7UUFDaEIsSUFFQUMsd0JBQUFBLHFCQUFvQixTQUFDVCxPQUFPQyxTQUFTUyxrQkFBa0JDO1lBQ3JELElBQU1DLFlBQVksTUFBS0MsWUFBWSxJQUM3QlgsY0FBYyxNQUFLQyxjQUFjLElBQ2pDRywyQkFBMkIsTUFBS1EsMkJBQTJCLElBQzNEVixtQkFBbUJFLDJCQUEyQk0sWUFBWUQsbUJBQzFESSxRQUFRWCxrQkFBa0IsR0FBRztZQUVuQ0YsWUFBWWMsUUFBUSxDQUFDRDtRQUN2QixJQUVBRSx3QkFBQUEsb0JBQW1CLFNBQUNqQixPQUFPQztZQUN6QixNQUFLTyxTQUFTO1FBQ2hCOzs7a0JBdkJJVjs7WUF5QkpVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNVSxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSSxDQUFDRCxVQUFVO29CQUNiRSxJQUFBQSwwQkFBa0I7Z0JBQ3BCO1lBQ0Y7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTSxBQUFFUiwyQkFBNkIsSUFBSSxDQUFDZSxRQUFRLEdBQTFDZjtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkQsd0JBQXdCO2dCQUNsRCxJQUFJLENBQUNnQixXQUFXLENBQUM7b0JBQ2ZoQiwwQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpCLDJCQUEyQjtnQkFFakMsSUFBSSxDQUFDa0IsUUFBUSxDQUFDO29CQUNabEIsMEJBQUFBO2dCQUNGO1lBQ0Y7OztXQW5ESVI7RUFBeUIyQixpQkFBUTtBQXFEckMsaUJBckRJM0Isa0JBcURHNEIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDOUIifQ==