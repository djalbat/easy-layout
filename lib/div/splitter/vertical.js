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
        "\n\n  width: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DRAG_EVENT_TYPE = _easy.eventTypes.DRAG_EVENT_TYPE;
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
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event, element) {
                var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging();
                    if (dragging) {
                        var direction = this.getDirection(), sizeableElement = this.getSizeableElement();
                        var previousMouseLeft = this.getPreviousMouseLeft(), previousSizeableElementWidth = this.getPreviousSizeableElementWidth(), relativeMouseLeft = mouseLeft - previousMouseLeft;
                        var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;
                        var width = sizeableElementWidth, eventType = DRAG_EVENT_TYPE;
                        sizeableElement.setWidth(width);
                        sizeableElementWidth = sizeableElement.getWidth(); ///
                        this.callHandlers(eventType, sizeableElementWidth);
                    }
                }
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event, element) {
                var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging(), sizeableElement = this.getSizeableElement(), previousMouseLeft = mouseLeft, sizeableElementWidth = sizeableElement.getWidth(), previousSizeableElementWidth = sizeableElementWidth; ///
                    this.setPreviousMouseLeft(previousMouseLeft);
                    this.setPreviousSizeableElementWidth(previousSizeableElementWidth);
                    (0, _cursor).columnResizeCursor();
                    if (!dragging) {
                        this.startDrag();
                    }
                }
            }
        },
        {
            key: "getPreviousMouseLeft",
            value: function getPreviousMouseLeft() {
                var state = this.getState(), previousMouseLeft = state.previousMouseLeft;
                return previousMouseLeft;
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
            key: "setPreviousMouseLeft",
            value: function setPreviousMouseLeft(previousMouseLeft) {
                this.updateState({
                    previousMouseLeft: previousMouseLeft
                });
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
                var previousMouseLeft = null, previousSizeableElementWidth = null;
                this.setState({
                    previousMouseLeft: previousMouseLeft,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSBcIi4uL3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY29uc3QgeyBEUkFHX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gdGhpcy5nZXRQcmV2aW91c01vdXNlTGVmdCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGgsIC8vL1xuICAgICAgICAgICAgICBldmVudFR5cGUgPSBEUkFHX0VWRU5UX1RZUEU7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKTtcblxuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlTGVmdDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMXJlbTtcblxuYDtcbiJdLCJuYW1lcyI6WyJEUkFHX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiVmVydGljYWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVgiLCJtb3VzZUxlZnQiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInNpemVhYmxlRWxlbWVudFdpZHRoIiwid2lkdGgiLCJldmVudFR5cGUiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwiY2FsbEhhbmRsZXJzIiwibW91c2VEb3duSGFuZGxlciIsInNldFByZXZpb3VzTW91c2VMZWZ0Iiwic2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsInN0YXJ0RHJhZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRVosSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVDLElBQUEsT0FBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU0sQUFBRUEsZUFBZSxHQUFLQyxLQUFVLFdBQUEsQ0FBOUJELGVBQWUsQUFBZSxBQUFDO0FBRXZDLElBQUEsQUFBTUUsZ0JBQWdCLGlCQXdHbkIsQUF4R0g7OzthQUFNQSxnQkFBZ0I7Ozs7OztZQUNwQkMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiRSxDQUFBQSxHQUFBQSxPQUFrQixBQUFFLENBQUEsbUJBQUYsRUFBRSxDQUFDO2lCQUN0QjthQUNGOzs7WUFFREMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDTCxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTSxBQUFFSyxLQUFLLEdBQUtO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