"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
var DRAG_EVENT_TYPE = _easy.eventTypes.DRAG_EVENT_TYPE;
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
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event, element) {
                var pageY = event.pageY, mouseTop = pageY, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging();
                    if (dragging) {
                        var direction = this.getDirection(), sizeableElement = this.getSizeableElement();
                        var previousMouseTop = this.getPreviousMouseTop(), previousSizeableElementHeight = this.getPreviousSizeableElementHeight(), relativeMouseTop = mouseTop - previousMouseTop;
                        var sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;
                        var height = sizeableElementHeight, eventType = DRAG_EVENT_TYPE;
                        sizeableElement.setHeight(height);
                        sizeableElementHeight = sizeableElement.getHeight(); ///
                        this.callHandlers(eventType, sizeableElementHeight);
                    }
                }
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event, element) {
                var pageY = event.pageY, mouseTop = pageY, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging(), sizeableElement = this.getSizeableElement(), previousMouseTop = mouseTop, sizeableElementHeight = sizeableElement.getHeight(), previousSizeableElementHeight = sizeableElementHeight; ///
                    this.setPreviousMouseTop(previousMouseTop);
                    this.setPreviousSizeableElementHeight(previousSizeableElementHeight);
                    (0, _cursor).rowResizeCursor();
                    if (!dragging) {
                        this.startDrag();
                    }
                }
            }
        },
        {
            key: "getPreviousMouseTop",
            value: function getPreviousMouseTop() {
                var state = this.getState(), previousMouseTop = state.previousMouseTop;
                return previousMouseTop;
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
            key: "setPreviousMouseTop",
            value: function setPreviousMouseTop(previousMouseTop) {
                this.updateState({
                    previousMouseTop: previousMouseTop
                });
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
                var previousMouseTop = null, previousSizeableElementHeight = null;
                this.setState({
                    previousMouseTop: previousMouseTop,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgcm93UmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jb25zdCB7IERSQUdfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSB0aGlzLmdldFByZXZpb3VzTW91c2VUb3AoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQsIC8vL1xuICAgICAgICAgICAgICBldmVudFR5cGUgPSBEUkFHX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWSB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VUb3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VUb3AgPSBtb3VzZVRvcCwgIC8vL1xuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcblxuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZVRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZVRvcDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0O1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkRSQUdfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJIb3Jpem9udGFsU3BsaXR0ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwicm93UmVzaXplQ3Vyc29yIiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VZIiwibW91c2VUb3AiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiaGVpZ2h0IiwiZXZlbnRUeXBlIiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbEhhbmRsZXJzIiwibW91c2VEb3duSGFuZGxlciIsInNldFByZXZpb3VzTW91c2VUb3AiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInN0YXJ0RHJhZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRVosSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVGLElBQUEsT0FBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUEsZUFBZSxHQUFLQyxLQUFVLFdBQUEsQ0FBOUJELGVBQWUsQUFBZSxBQUFDO0FBRXZDLElBQUEsQUFBTUUsa0JBQWtCLGlCQXdHckIsQUF4R0g7OzthQUFNQSxrQkFBa0I7Ozs7OztZQUN0QkMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiRSxDQUFBQSxHQUFBQSxPQUFlLEFBQUUsQ0FBQSxnQkFBRixFQUFFLENBQUM7aUJBQ25CO2FBQ0Y7OztZQUVEQyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLENBQUNMLEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUMvQixJQUFNLEFBQUVLLEtBQUss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