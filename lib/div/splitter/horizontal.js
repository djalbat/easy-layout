"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _splitter = _interopRequireDefault(require("../splitter"));
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
        return _super.apply(this, arguments);
    }
    _createClass(HorizontalSplitter, [
        {
            key: "setCursor",
            value: function setCursor() {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).rowResizeCursor();
                }
            }
        },
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                this.setCursor();
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var sizeableElement = this.getSizeableElement(), sizeableElementHeight = sizeableElement.getHeight(), previousSizeableElementHeight = sizeableElementHeight; ///
                    this.setPreviousSizeableElementHeight(previousSizeableElementHeight);
                }
                this.setCursor();
            }
        },
        {
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var direction = this.getDirection(), sizeableElement = this.getSizeableElement(), previousSizeableElementHeight = this.getPreviousSizeableElementHeight(), sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop, height = sizeableElementHeight; ///
                    sizeableElement.setHeight(height);
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
var _default = (0, _easyWithStyle).default(HorizontalSplitter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgc2V0Q3Vyc29yKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgfVxuXG4gIGRyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3AsXG4gICAgICAgICAgICBoZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7IC8vL1xuXG4gICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSG9yaXpvbnRhbFNwbGl0dGVyKWBcblxuICBoZWlnaHQ6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwic2V0Q3Vyc29yIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwicm93UmVzaXplQ3Vyc29yIiwibW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInN0YXJ0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZHJhZ0hhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWxCLElBQUEsU0FBYSxrQ0FBYixhQUFhLEVBQUE7QUFFRixJQUFBLE9BQWMsV0FBZCxjQUFjLENBQUE7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