"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _splitter = _interopRequireDefault(require("../splitter"));
var _cursor = require("../../cursor");
var _eventTypes = require("../../eventTypes");
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
        "\n\n  height: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var HorizontalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(HorizontalSplitter, Splitter);
    function HorizontalSplitter() {
        _classCallCheck(this, HorizontalSplitter);
        return _possibleConstructorReturn(this, _getPrototypeOf(HorizontalSplitter).apply(this, arguments));
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
                        var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv();
                        var previousMouseTop = this.getPreviousMouseTop(), previousSizeableDivHeight = this.getPreviousSizeableDivHeight(), relativeMouseTop = mouseTop - previousMouseTop;
                        var sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;
                        var height = sizeableDivHeight, eventType = _eventTypes.DRAG_EVENT_TYPE;
                        sizeableDiv.setHeight(height);
                        sizeableDivHeight = sizeableDiv.getHeight(); ///
                        this.callHandlers(eventType, sizeableDivHeight);
                    }
                }
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event, element) {
                var pageY = event.pageY, mouseTop = pageY, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging(), sizeableDiv = this.getSizeableDiv(), previousMouseTop = mouseTop, sizeableDivHeight = sizeableDiv.getHeight(), previousSizeableDivHeight = sizeableDivHeight; ///
                    this.setPreviousMouseTop(previousMouseTop);
                    this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
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
            key: "getPreviousSizeableDivHeight",
            value: function getPreviousSizeableDivHeight() {
                var state = this.getState(), previousSizeableDivHeight = state.previousSizeableDivHeight;
                return previousSizeableDivHeight;
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
                var previousMouseTop = null, previousSizeableDivHeight = null;
                this.setState({
                    previousMouseTop: previousMouseTop,
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
var _default = (0, _easyWithStyle).default(HorizontalSplitter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBEUkFHX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vLi4vZXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSB0aGlzLmdldFByZXZpb3VzTW91c2VUb3AoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgIGxldCBzaXplYWJsZURpdkhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0LCAvLy9cbiAgICAgICAgICAgICAgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFO1xuXG4gICAgICAgIHNpemVhYmxlRGl2LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICB0aGlzLmNhbGxIYW5kbGVycyhldmVudFR5cGUsIHNpemVhYmxlRGl2SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWSB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VUb3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXZIZWlnaHQ7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCk7XG5cbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZVRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VUb3A7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodChwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoSG9yaXpvbnRhbFNwbGl0dGVyKWBcblxuICBoZWlnaHQ6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyIiwibW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJwYWdlWSIsIm1vdXNlVG9wIiwiZHJhZ2dpbmciLCJpc0RyYWdnaW5nIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwic2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInByZXZpb3VzTW91c2VUb3AiLCJnZXRQcmV2aW91c01vdXNlVG9wIiwicHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsImdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVEaXZIZWlnaHQiLCJoZWlnaHQiLCJldmVudFR5cGUiLCJzZXRIZWlnaHQiLCJnZXRIZWlnaHQiLCJjYWxsSGFuZGxlcnMiLCJtb3VzZURvd25IYW5kbGVyIiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJzdGFydERyYWciLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpC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