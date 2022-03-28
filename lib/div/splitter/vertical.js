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
                        var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv();
                        var previousMouseLeft = this.getPreviousMouseLeft(), previousSizeableDivWidth = this.getPreviousSizeableDivWidth(), relativeMouseLeft = mouseLeft - previousMouseLeft;
                        var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
                        var width = sizeableDivWidth, eventType = DRAG_EVENT_TYPE;
                        sizeableDiv.setWidth(width);
                        sizeableDivWidth = sizeableDiv.getWidth(); ///
                        this.callHandlers(eventType, sizeableDivWidth);
                    }
                }
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event, element) {
                var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging(), sizeableDiv = this.getSizeableDiv(), previousMouseLeft = mouseLeft, sizeableDivWidth = sizeableDiv.getWidth(), previousSizeableDivWidth = sizeableDivWidth; ///
                    this.setPreviousMouseLeft(previousMouseLeft);
                    this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
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
            key: "getPreviousSizeableDivWidth",
            value: function getPreviousSizeableDivWidth() {
                var state = this.getState(), previousSizeableDivWidth = state.previousSizeableDivWidth;
                return previousSizeableDivWidth;
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
                var previousMouseLeft = null, previousSizeableDivWidth = null;
                this.setState({
                    previousMouseLeft: previousMouseLeft,
                    previousSizeableDivWidth: previousSizeableDivWidth
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IGV2ZW50VHlwZXMgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSBcIi4uL3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY29uc3QgeyBEUkFHX0VWRU5UX1RZUEUgfSA9IGV2ZW50VHlwZXM7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aCwgLy8vXG4gICAgICAgICAgICAgIGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRTtcblxuICAgICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCk7ICAvLy9cblxuICAgICAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIHNpemVhYmxlRGl2V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aChwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgpO1xuXG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZUxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VMZWZ0O1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aChwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMXJlbTtcblxuYDtcbiJdLCJuYW1lcyI6WyJEUkFHX0VWRU5UX1RZUEUiLCJldmVudFR5cGVzIiwiVmVydGljYWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVgiLCJtb3VzZUxlZnQiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzaXplYWJsZURpdiIsImdldFNpemVhYmxlRGl2IiwicHJldmlvdXNNb3VzZUxlZnQiLCJnZXRQcmV2aW91c01vdXNlTGVmdCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInJlbGF0aXZlTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsIndpZHRoIiwiZXZlbnRUeXBlIiwic2V0V2lkdGgiLCJnZXRXaWR0aCIsImNhbGxIYW5kbGVycyIsIm1vdXNlRG93bkhhbmRsZXIiLCJzZXRQcmV2aW91c01vdXNlTGVmdCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInN0YXJ0RHJhZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRVosSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVDLElBQUEsT0FBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQU0sQUFBRUEsZUFBZSxHQUFLQyxLQUFVLFdBQUEsQ0FBOUJELGVBQWUsQUFBZSxBQUFDO0FBRXZDLElBQUEsQUFBTUUsZ0JBQWdCLGlCQXdHbkIsQUF4R0g7OzthQUFNQSxnQkFBZ0I7Ozs7OztZQUNwQkMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiRSxDQUFBQSxHQUFBQSxPQUFrQixBQUFFLENBQUEsbUJBQUYsRUFBRSxDQUFDO2lCQUN0QjthQUNGOzs7WUFFREMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDTCxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTSxBQUFFSyxLQUFLLEdBQUtOLEtBQUssQ0FBZk0sS0FBSyxBQUFVLEVBQ2pCQyxTQUFTLEdBQUdELEtBQUssRUFDakJKLFFBQVEsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxBQUFDO2dCQUVuQyxJQUFJLENBQUNELFFBQVEsRUFBRTtvQkFDYixJQUFNTSxRQUFR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