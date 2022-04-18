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
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).rowResizeCursor();
                }
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var sizeableElement = this.getSizeableElement(), sizeableElementHeight = sizeableElement.getHeight(), previousSizeableElementHeight = sizeableElementHeight; ///
                    this.setPreviousSizeableElementHeight(previousSizeableElementHeight);
                    (0, _cursor).rowResizeCursor();
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydERyYWdIYW5kbGVyKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBkcmFnSGFuZGxlcihyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wLFxuICAgICAgICAgICAgaGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAvLy9cblxuICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0O1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkhvcml6b250YWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJyb3dSZXNpemVDdXJzb3IiLCJzdGFydERyYWdIYW5kbGVyIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0U2l6ZWFibGVFbGVtZW50Iiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsImRyYWdIYW5kbGVyIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsIlNwbGl0dGVyIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVsQixJQUFBLFNBQWEsa0NBQWIsYUFBYSxFQUFBO0FBRUYsSUFBQSxPQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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