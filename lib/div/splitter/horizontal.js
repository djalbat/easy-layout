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
        "\n\n  height: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HorizontalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(HorizontalSplitter, Splitter);
    var _super = _create_super(HorizontalSplitter);
    function HorizontalSplitter() {
        _class_call_check(this, HorizontalSplitter);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "startDragCustomHandler", function(event, element) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var sizeableDiv = _this.getSizeableDiv(), sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight; ///
                _this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
            }
            _this.setCursor();
        });
        _define_property(_assert_this_initialized(_this), "dragCustomHandler", function(event, element, relativeMouseTop, relativeMouseLeft) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var direction = _this.getDirection(), sizeableDiv = _this.getSizeableDiv(), previousSizeableDivHeight = _this.getPreviousSizeableDivHeight(), sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop, height = sizeableDivHeight; ///
                sizeableDiv.setHeight(height);
            }
        });
        _define_property(_assert_this_initialized(_this), "mouseOverHandler", function(event, element) {
            _this.setCursor();
        });
        return _this;
    }
    _create_class(HorizontalSplitter, [
        {
            key: "setCursor",
            value: function setCursor() {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor.rowResizeCursor)();
                }
            }
        },
        {
            key: "getPreviousSizeableDivHeight",
            value: function getPreviousSizeableDivHeight() {
                var previousSizeableDivHeight = this.getState().previousSizeableDivHeight;
                return previousSizeableDivHeight;
            }
        },
        {
            key: "setPreviousSizeableDivHeight",
            value: function setPreviousSizeableDivHeight(previousSizeableDivHeight) {
                this.updateState({
                    previousSizeableDivHeight: previousSizeableDivHeight
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousSizeableDivHeight = null;
                this.setState({
                    previousSizeableDivHeight: previousSizeableDivHeight
                });
            }
        }
    ]);
    return HorizontalSplitter;
}(_splitter.default);
_define_property(HorizontalSplitter, "defaultProperties", {
    className: "horizontal"
});
var _default = (0, _easywithstyle.default)(HorizontalSplitter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgc3RhcnREcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBkcmFnQ3VzdG9tSGFuZGxlciA9IChldmVudCwgZWxlbWVudCwgcmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcCxcbiAgICAgICAgICAgIGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAvLy9cblxuICAgICAgc2l6ZWFibGVEaXYuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBzZXRDdXJzb3IoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQoKSB7XG4gICAgY29uc3QgeyBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IH0gPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSG9yaXpvbnRhbFNwbGl0dGVyKWBcblxuICBoZWlnaHQ6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwic3RhcnREcmFnQ3VzdG9tSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJzaXplYWJsZURpdkhlaWdodCIsImdldEhlaWdodCIsInByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic2V0Q3Vyc29yIiwiZHJhZ0N1c3RvbUhhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwibW91c2VPdmVySGFuZGxlciIsInJvd1Jlc2l6ZUN1cnNvciIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsIlNwbGl0dGVyIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBFQTs7O2VBQUE7OztvRUF4RXNCOytEQUVEO3NCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxtQ0FBRCxBQUFMO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsMEJBQXlCLFNBQUNDLE9BQU9DO1lBQy9CLElBQU1DLFdBQVcsTUFBS0MsVUFBVTtZQUVoQyxJQUFJLENBQUNELFVBQVU7Z0JBQ2IsSUFBTUUsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQyxvQkFBb0JGLFlBQVlHLFNBQVMsSUFDekNDLDRCQUE0QkYsbUJBQW9CLEdBQUc7Z0JBRXpELE1BQUtHLDRCQUE0QixDQUFDRDtZQUNwQztZQUVBLE1BQUtFLFNBQVM7UUFDaEI7UUFFQUMsa0RBQUFBLHFCQUFvQixTQUFDWCxPQUFPQyxTQUFTVyxrQkFBa0JDO1lBQ3JELElBQU1YLFdBQVcsTUFBS0MsVUFBVTtZQUVoQyxJQUFJLENBQUNELFVBQVU7Z0JBQ2IsSUFBTVksWUFBWSxNQUFLQyxZQUFZLElBQzdCWCxjQUFjLE1BQUtDLGNBQWMsSUFDakNHLDRCQUE0QixNQUFLUSw0QkFBNEIsSUFDN0RWLG9CQUFvQkUsNEJBQTRCTSxZQUFZRixrQkFDNURLLFNBQVNYLG1CQUFtQixHQUFHO2dCQUVyQ0YsWUFBWWMsU0FBUyxDQUFDRDtZQUN4QjtRQUNGO1FBRUFFLGtEQUFBQSxvQkFBbUIsU0FBQ25CLE9BQU9DO1lBQ3pCLE1BQUtTLFNBQVM7UUFDaEI7OztrQkEvQklaOztZQWlDSlksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFdBQVcsSUFBSSxDQUFDQyxVQUFVO2dCQUVoQyxJQUFJLENBQUNELFVBQVU7b0JBQ2JrQixJQUFBQSx1QkFBZTtnQkFDakI7WUFDRjs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNLEFBQUVSLDRCQUE4QixJQUFJLENBQUNhLFFBQVEsR0FBM0NiO2dCQUVSLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCRCx5QkFBeUI7Z0JBQ3BELElBQUksQ0FBQ2MsV0FBVyxDQUFDO29CQUNmZCwyQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFlLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNZiw0QkFBNEI7Z0JBRWxDLElBQUksQ0FBQ2dCLFFBQVEsQ0FBQztvQkFDWmhCLDJCQUFBQTtnQkFDRjtZQUNGOzs7V0EzRElWO0VBQTJCMkIsaUJBQVE7QUE2RHZDLGlCQTdESTNCLG9CQTZERzRCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzlCIn0=