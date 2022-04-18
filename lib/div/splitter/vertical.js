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
        "\n\n  width: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(VerticalSplitter, Splitter);
    var _super = _createSuper(VerticalSplitter);
    function VerticalSplitter() {
        _classCallCheck(this, VerticalSplitter);
        return _super.apply(this, arguments);
    }
    _createClass(VerticalSplitter, [
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).columnResizeCursor();
                }
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var sizeableElement = this.getSizeableElement(), sizeableElementWidth = sizeableElement.getWidth(), previousSizeableElementWidth = sizeableElementWidth; ///
                    this.setPreviousSizeableElementWidth(previousSizeableElementWidth);
                    (0, _cursor).columnResizeCursor();
                }
            }
        },
        {
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var direction = this.getDirection(), sizeableElement = this.getSizeableElement(), previousSizeableElementWidth = this.getPreviousSizeableElementWidth(), sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft, width = sizeableElementWidth; ///
                    sizeableElement.setWidth(width);
                }
            }
        },
        {
            key: "getPreviousSizeableElementWidth",
            value: function getPreviousSizeableElementWidth() {
                var state = this.getState(), previousSizeableElementWidth = state.previousSizeableElementWidth;
                return previousSizeableElementWidth;
            }
        },
        {
            key: "setPreviousSizeableElementWidth",
            value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
                this.updateState({
                    previousSizeableElementWidth: previousSizeableElementWidth
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousSizeableElementWidth = null;
                this.setState({
                    previousSizeableElementWidth: previousSizeableElementWidth
                });
            }
        }
    ]);
    return VerticalSplitter;
}(_splitter.default);
_defineProperty(VerticalSplitter, "defaultProperties", {
    className: "vertical"
});
var _default = (0, _easyWithStyle).default(VerticalSplitter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIoZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnRXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCk7XG5cbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdIYW5kbGVyKHJlbGF0aXZlTW91c2VUb3AsIHJlbGF0aXZlTW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRWxlbWVudFdpZHRoOyAvLy9cblxuICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwiY29sdW1uUmVzaXplQ3Vyc29yIiwic3RhcnREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInNpemVhYmxlRWxlbWVudFdpZHRoIiwiZ2V0V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwic2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsImRyYWdIYW5kbGVyIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsIlNwbGl0dGVyIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVsQixJQUFBLFNBQWEsa0NBQWIsYUFBYSxFQUFBO0FBRUMsSUFBQSxPQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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