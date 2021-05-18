"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _splitter = _interopRequireDefault(require("../splitter"));
var _constants = require("../../constants");
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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    function VerticalSplitter() {
        _classCallCheck(this, VerticalSplitter);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitter).apply(this, arguments));
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
                        var width = sizeableDivWidth, eventType = _constants.DRAG;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgRFJBRyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gdGhpcy5nZXRQcmV2aW91c01vdXNlTGVmdCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgICAgIGxldCBzaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICAgICAgZXZlbnRUeXBlID0gRFJBRztcblxuICAgICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCk7ICAvLy9cblxuICAgICAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIHNpemVhYmxlRGl2V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aChwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgpO1xuXG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZUxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VMZWZ0O1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnRcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aChwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMXJlbTtcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLGNBQWlCO0lBRWxCLFNBQWE7SUFFYixVQUFpQjtJQUNILE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwR04sc0JBSTNDOzs7Ozs7O0lBNUdNLGdCQUFnQjtjQUFoQixnQkFBZ0I7YUFBaEIsZ0JBQWdCOzhCQUFoQixnQkFBZ0I7Z0VBQWhCLGdCQUFnQjs7aUJBQWhCLGdCQUFnQjs7WUFDcEIsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDdkIsUUFBUSxRQUFRLFVBQVU7cUJBRTNCLFFBQVE7d0JBTmtCLE9BQWM7Ozs7O1lBVy9DLEdBQWdCLEdBQWhCLGdCQUFnQjs0QkFBaEIsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQU87b0JBQ3JCLEtBQUssR0FBSyxLQUFLLENBQWYsS0FBSyxFQUNQLFNBQVMsR0FBRyxLQUFLLEVBQ2pCLFFBQVEsUUFBUSxVQUFVO3FCQUUzQixRQUFRO3dCQUNMLFFBQVEsUUFBUSxVQUFVO3dCQUU1QixRQUFROzRCQUNKLFNBQVMsUUFBUSxZQUFZLElBQzdCLFdBQVcsUUFBUSxjQUFjOzRCQUVqQyxpQkFBaUIsUUFBUSxvQkFBb0IsSUFDN0Msd0JBQXdCLFFBQVEsMkJBQTJCLElBQzNELGlCQUFpQixHQUFHLFNBQVMsR0FBRyxpQkFBaUI7NEJBRW5ELGdCQUFnQixHQUFHLHdCQUF3QixHQUFHLFNBQVMsR0FBRyxpQkFBaUI7NEJBRXpFLEtBQUssR0FBRyxnQkFBZ0IsRUFDeEIsU0FBUyxHQS9CRixVQUFpQjt3QkFpQzlCLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSzt3QkFFMUIsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLFFBQVEsR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7NkJBRTFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsZ0JBQWdCOzs7Ozs7WUFLbkQsR0FBZ0IsR0FBaEIsZ0JBQWdCOzRCQUFoQixnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTztvQkFDckIsS0FBSyxHQUFLLEtBQUssQ0FBZixLQUFLLEVBQ1AsU0FBUyxHQUFHLEtBQUssRUFDakIsUUFBUSxRQUFRLFVBQVU7cUJBRTNCLFFBQVE7d0JBQ0wsUUFBUSxRQUFRLFVBQVUsSUFDMUIsV0FBVyxRQUFRLGNBQWMsSUFDakMsaUJBQWlCLEdBQUcsU0FBUyxFQUM3QixnQkFBZ0IsR0FBRyxXQUFXLENBQUMsUUFBUSxJQUN2Qyx3QkFBd0IsR0FBRyxnQkFBZ0IsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7eUJBRWxELG9CQUFvQixDQUFDLGlCQUFpQjt5QkFFdEMsMkJBQTJCLENBQUMsd0JBQXdCO3dCQXZENUIsT0FBYzt5QkEyRHRDLFFBQVE7NkJBQ04sU0FBUzs7Ozs7O1lBS3BCLEdBQW9CLEdBQXBCLG9CQUFvQjs0QkFBcEIsb0JBQW9CO29CQUNaLEtBQUssUUFBUSxRQUFRLElBQ25CLGlCQUFpQixHQUFLLEtBQUssQ0FBM0IsaUJBQWlCO3VCQUVsQixpQkFBaUI7Ozs7WUFHMUIsR0FBMkIsR0FBM0IsMkJBQTJCOzRCQUEzQiwyQkFBMkI7b0JBQ25CLEtBQUssUUFBUSxRQUFRLElBQ25CLHdCQUF3QixHQUFLLEtBQUssQ0FBbEMsd0JBQXdCO3VCQUV6Qix3QkFBd0I7Ozs7WUFHakMsR0FBb0IsR0FBcEIsb0JBQW9COzRCQUFwQixvQkFBb0IsQ0FBQyxpQkFBaUI7cUJBQy9CLFdBQVc7b0JBQ2QsaUJBQWlCLEVBQWpCLGlCQUFpQjs7Ozs7WUFJckIsR0FBMkIsR0FBM0IsMkJBQTJCOzRCQUEzQiwyQkFBMkIsQ0FBQyx3QkFBd0I7cUJBQzdDLFdBQVc7b0JBQ2Qsd0JBQXdCLEVBQXhCLHdCQUF3Qjs7Ozs7WUFJNUIsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZTtvQkFDUCxpQkFBaUIsR0FBRyxJQUFJLEVBQ3hCLHdCQUF3QixHQUFHLElBQUk7cUJBRWhDLFFBQVE7b0JBQ1gsaUJBQWlCLEVBQWpCLGlCQUFpQjtvQkFDakIsd0JBQXdCLEVBQXhCLHdCQUF3Qjs7Ozs7V0EvRnhCLGdCQUFnQjtFQUxELFNBQWE7Z0JBSzVCLGdCQUFnQixHQW1HYixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFFBQVU7O21CQTNHSCxjQUFpQixVQStHZCxnQkFBZ0IifQ==