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
        _define_property(_assert_this_initialized(_this), "mouseOverHandler", function(event, element) {
            _this.setCursor();
        });
        _define_property(_assert_this_initialized(_this), "startDragHandler", function(element) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var sizeableDiv = _this.getSizeableDiv(), sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight; ///
                _this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
            }
            _this.setCursor();
        });
        _define_property(_assert_this_initialized(_this), "dragHandler", function(relativeMouseTop, relativeMouseLeft) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var direction = _this.getDirection(), sizeableDiv = _this.getSizeableDiv(), previousSizeableDivHeight = _this.getPreviousSizeableDivHeight(), sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop, height = sizeableDivHeight; ///
                sizeableDiv.setHeight(height);
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodChwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIgPSAocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcCxcbiAgICAgICAgICAgIGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAvLy9cblxuICAgICAgc2l6ZWFibGVEaXYuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q3Vyc29yKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCkge1xuICAgIGNvbnN0IHsgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCB9ID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkhvcml6b250YWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZXRDdXJzb3IiLCJzdGFydERyYWdIYW5kbGVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwic2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJkcmFnSGFuZGxlciIsInJlbGF0aXZlTW91c2VUb3AiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsImdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJyb3dSZXNpemVDdXJzb3IiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJTcGxpdHRlciIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEwRUE7OztlQUFBOzs7b0VBeEVzQjsrREFFRDtzQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsbUNBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLG9CQUFtQixTQUFDQyxPQUFPQztZQUN6QixNQUFLQyxTQUFTO1FBQ2hCO1FBRUFDLGtEQUFBQSxvQkFBbUIsU0FBQ0Y7WUFDbEIsSUFBTUcsV0FBVyxNQUFLQyxVQUFVO1lBRWhDLElBQUksQ0FBQ0QsVUFBVTtnQkFDYixJQUFNRSxjQUFjLE1BQUtDLGNBQWMsSUFDakNDLG9CQUFvQkYsWUFBWUcsU0FBUyxJQUN6Q0MsNEJBQTRCRixtQkFBb0IsR0FBRztnQkFFekQsTUFBS0csNEJBQTRCLENBQUNEO1lBQ3BDO1lBRUEsTUFBS1IsU0FBUztRQUNoQjtRQUVBVSxrREFBQUEsZUFBYyxTQUFDQyxrQkFBa0JDO1lBQy9CLElBQU1WLFdBQVcsTUFBS0MsVUFBVTtZQUVoQyxJQUFJLENBQUNELFVBQVU7Z0JBQ2IsSUFBTVcsWUFBWSxNQUFLQyxZQUFZLElBQzdCVixjQUFjLE1BQUtDLGNBQWMsSUFDakNHLDRCQUE0QixNQUFLTyw0QkFBNEIsSUFDN0RULG9CQUFvQkUsNEJBQTRCSyxZQUFZRixrQkFDNURLLFNBQVNWLG1CQUFtQixHQUFHO2dCQUVyQ0YsWUFBWWEsU0FBUyxDQUFDRDtZQUN4QjtRQUNGOzs7a0JBL0JJcEI7O1lBaUNKSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsV0FBVyxJQUFJLENBQUNDLFVBQVU7Z0JBRWhDLElBQUksQ0FBQ0QsVUFBVTtvQkFDYmdCLElBQUFBLHVCQUFlO2dCQUNqQjtZQUNGOzs7WUFFQUgsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0sQUFBRVAsNEJBQThCLElBQUksQ0FBQ1csUUFBUSxHQUEzQ1g7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJELHlCQUF5QjtnQkFDcEQsSUFBSSxDQUFDWSxXQUFXLENBQUM7b0JBQ2ZaLDJCQUFBQTtnQkFDRjtZQUNGOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1iLDRCQUE0QjtnQkFFbEMsSUFBSSxDQUFDYyxRQUFRLENBQUM7b0JBQ1pkLDJCQUFBQTtnQkFDRjtZQUNGOzs7V0EzRElaO0VBQTJCMkIsaUJBQVE7QUE2RHZDLGlCQTdESTNCLG9CQTZERzRCLHFCQUFvQjtJQUN6QkMsV0FBVztBQUNiO0lBR0YsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQzlCIn0=