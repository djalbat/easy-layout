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
                var sizeableElement = _this.getSizeableElement(), sizeableElementHeight = sizeableElement.getHeight(), previousSizeableElementHeight = sizeableElementHeight; ///
                _this.setPreviousSizeableElementHeight(previousSizeableElementHeight);
            }
            _this.setCursor();
        });
        _defineProperty(_assertThisInitialized(_this), "dragHandler", function(relativeMouseTop, relativeMouseLeft) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var direction = _this.getDirection(), sizeableElement = _this.getSizeableElement(), previousSizeableElementHeight = _this.getPreviousSizeableElementHeight(), sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop, height = sizeableElementHeight; ///
                sizeableElement.setHeight(height);
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
            key: "getPreviousSizeableElementHeight",
            value: function getPreviousSizeableElementHeight() {
                var state = this.getState(), previousSizeableElementHeight = state.previousSizeableElementHeight;
                return previousSizeableElementHeight;
            }
        },
        {
            key: "setPreviousSizeableElementHeight",
            value: function setPreviousSizeableElementHeight(previousSizeableElementHeight) {
                this.updateState({
                    previousSizeableElementHeight: previousSizeableElementHeight
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousSizeableElementHeight = null;
                this.setState({
                    previousSizeableElementHeight: previousSizeableElementHeight
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBkcmFnSGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkgPT4ge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wLFxuICAgICAgICAgICAgaGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAvLy9cblxuICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIHNldEN1cnNvcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSG9yaXpvbnRhbFNwbGl0dGVyKWBcblxuICBoZWlnaHQ6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwibW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInNldEN1cnNvciIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZHJhZ0hhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsInJvd1Jlc2l6ZUN1cnNvciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQTJFYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBN0VvQixpQkFBaUI7NkRBRWxCLGFBQWE7c0JBRUYsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7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