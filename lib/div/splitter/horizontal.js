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
var _splitter = /*#__PURE__*/ _interopRequireDefault(require("../splitter"));
var _cursor = require("../../cursor");
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
        "\n\n  height: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HorizontalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(HorizontalSplitter, Splitter);
    var _super = _createSuper(HorizontalSplitter);
    function HorizontalSplitter() {
        _classCallCheck(this, HorizontalSplitter);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "mouseOverHandler", function(event, element) {
            _this.setCursor();
        });
        _defineProperty(_assertThisInitialized(_this), "startDragHandler", function(element) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var sizeableDiv = _this.getSizeableDiv(), sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight; ///
                _this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
            }
            _this.setCursor();
        });
        _defineProperty(_assertThisInitialized(_this), "dragHandler", function(relativeMouseTop, relativeMouseLeft) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var direction = _this.getDirection(), sizeableDiv = _this.getSizeableDiv(), previousSizeableDivHeight = _this.getPreviousSizeableDivHeight(), sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop, height = sizeableDivHeight; ///
                sizeableDiv.setHeight(height);
            }
        });
        return _this;
    }
    _createClass(HorizontalSplitter, [
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
                var state = this.getState(), previousSizeableDivHeight = state.previousSizeableDivHeight;
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
_defineProperty(HorizontalSplitter, "defaultProperties", {
    className: "horizontal"
});
var _default = (0, _easyWithStyle.default)(HorizontalSplitter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodChwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIgPSAocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcCxcbiAgICAgICAgICAgIGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAvLy9cblxuICAgICAgc2l6ZWFibGVEaXYuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgc2V0Q3Vyc29yKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSG9yaXpvbnRhbFNwbGl0dGVyKWBcblxuICBoZWlnaHQ6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwibW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNldEN1cnNvciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJzaXplYWJsZURpdiIsImdldFNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRIZWlnaHQiLCJwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsImRyYWdIYW5kbGVyIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsInJvd1Jlc2l6ZUN1cnNvciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTJFYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBN0VvQixpQkFBaUI7NkRBRWxCLGFBQWE7c0JBRUYsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQUEsQUFB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