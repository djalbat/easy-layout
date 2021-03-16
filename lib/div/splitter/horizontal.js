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
var HorizontalSplitter = function(Splitter) {
    _inherits(HorizontalSplitter, _splitter.default);
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
                    _cursor.rowResizeCursor();
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
                        var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv(), dragHandler = this.getDragHandler();
                        var previousMouseTop = this.getPreviousMouseTop(), previousSizeableDivHeight = this.getPreviousSizeableDivHeight(), relativeMouseTop = mouseTop - previousMouseTop;
                        var sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;
                        var height = sizeableDivHeight; ///
                        sizeableDiv.setHeight(height);
                        sizeableDivHeight = sizeableDiv.getHeight(); ///
                        dragHandler && dragHandler(sizeableDivHeight);
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
                    _cursor.rowResizeCursor();
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
var _default = _easyWithStyle.default(HorizontalSplitter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyIGZyb20gXCIuLi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyByb3dSZXNpemVDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWSB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VUb3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSB0aGlzLmdldFByZXZpb3VzTW91c2VUb3AoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgIGxldCBzaXplYWJsZURpdkhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAvLy9cblxuICAgICAgICBzaXplYWJsZURpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIgJiYgZHJhZ0hhbmRsZXIoc2l6ZWFibGVEaXZIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VUb3AgPSBtb3VzZVRvcCwgIC8vL1xuICAgICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBzaXplYWJsZURpdi5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodChwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KTtcblxuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZVRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZVRvcDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0O1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaG9yaXpvbnRhbFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShIb3Jpem9udGFsU3BsaXR0ZXIpYFxuXG4gIGhlaWdodDogMXJlbTtcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLGNBQUE7SUFFQSxTQUFBO0lBRUEsT0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTBHQSx1QkFJQTs7Ozs7OztJQTVHQSxrQkFBQSxZQUFBLFFBQUE7Y0FBQSxrQkFBQSxFQUpBLFNBQUE7YUFJQSxrQkFBQTs4QkFBQSxrQkFBQTtnRUFBQSxrQkFBQTs7aUJBQUEsa0JBQUE7O0FBQ0EsZUFBQSxHQUFBLGdCQUFBOzRCQUFBLGdCQUFBLENBQUEsS0FBQSxFQUFBLE9BQUE7b0JBQ0EsUUFBQSxRQUFBLFVBQUE7cUJBRUEsUUFBQTtBQU5BLDJCQUFBOzs7OztBQVdBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQSxDQUFBLEtBQUEsRUFBQSxPQUFBO29CQUNBLEtBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxFQUNBLFFBQUEsR0FBQSxLQUFBLEVBQ0EsUUFBQSxRQUFBLFVBQUE7cUJBRUEsUUFBQTt3QkFDQSxRQUFBLFFBQUEsVUFBQTt3QkFFQSxRQUFBOzRCQUNBLFNBQUEsUUFBQSxZQUFBLElBQ0EsV0FBQSxRQUFBLGNBQUEsSUFDQSxXQUFBLFFBQUEsY0FBQTs0QkFFQSxnQkFBQSxRQUFBLG1CQUFBLElBQ0EseUJBQUEsUUFBQSw0QkFBQSxJQUNBLGdCQUFBLEdBQUEsUUFBQSxHQUFBLGdCQUFBOzRCQUVBLGlCQUFBLEdBQUEseUJBQUEsR0FBQSxTQUFBLEdBQUEsZ0JBQUE7NEJBRUEsTUFBQSxHQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSxtQ0FBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBO0FBRUEseUNBQUEsR0FBQSxXQUFBLENBQUEsU0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsbUNBQUEsSUFBQSxXQUFBLENBQUEsaUJBQUE7Ozs7OztBQUtBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQSxDQUFBLEtBQUEsRUFBQSxPQUFBO29CQUNBLEtBQUEsR0FBQSxLQUFBLENBQUEsS0FBQSxFQUNBLFFBQUEsR0FBQSxLQUFBLEVBQ0EsUUFBQSxRQUFBLFVBQUE7cUJBRUEsUUFBQTt3QkFDQSxRQUFBLFFBQUEsVUFBQSxJQUNBLFdBQUEsUUFBQSxjQUFBLElBQ0EsZ0JBQUEsR0FBQSxRQUFBLEVBQ0EsaUJBQUEsR0FBQSxXQUFBLENBQUEsU0FBQSxJQUNBLHlCQUFBLEdBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt5QkFFQSxtQkFBQSxDQUFBLGdCQUFBO3lCQUVBLDRCQUFBLENBQUEseUJBQUE7QUF2REEsMkJBQUE7eUJBMkRBLFFBQUE7NkJBQ0EsU0FBQTs7Ozs7O0FBS0EsZUFBQSxHQUFBLG1CQUFBOzRCQUFBLG1CQUFBO29CQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0EsZ0JBQUEsR0FBQSxLQUFBLENBQUEsZ0JBQUE7dUJBRUEsZ0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsNEJBQUE7NEJBQUEsNEJBQUE7b0JBQ0EsS0FBQSxRQUFBLFFBQUEsSUFDQSx5QkFBQSxHQUFBLEtBQUEsQ0FBQSx5QkFBQTt1QkFFQSx5QkFBQTs7OztBQUdBLGVBQUEsR0FBQSxtQkFBQTs0QkFBQSxtQkFBQSxDQUFBLGdCQUFBO3FCQUNBLFdBQUE7QUFDQSxvQ0FBQSxFQUFBLGdCQUFBOzs7OztBQUlBLGVBQUEsR0FBQSw0QkFBQTs0QkFBQSw0QkFBQSxDQUFBLHlCQUFBO3FCQUNBLFdBQUE7QUFDQSw2Q0FBQSxFQUFBLHlCQUFBOzs7OztBQUlBLGVBQUEsR0FBQSxlQUFBOzRCQUFBLGVBQUE7b0JBQ0EsZ0JBQUEsR0FBQSxJQUFBLEVBQ0EseUJBQUEsR0FBQSxJQUFBO3FCQUVBLFFBQUE7QUFDQSxvQ0FBQSxFQUFBLGdCQUFBO0FBQ0EsNkNBQUEsRUFBQSx5QkFBQTs7Ozs7V0EvRkEsa0JBQUE7RUFKQSxTQUFBO2dCQUlBLGtCQUFBLEdBbUdBLGlCQUFBO0FBQ0EsYUFBQSxHQUFBLFVBQUE7O2VBMUdBLGNBQUEsU0E4R0Esa0JBQUEifQ==