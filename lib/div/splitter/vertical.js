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
        "\n\n  width: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitter = function(Splitter) {
    _inherits(VerticalSplitter, _splitter.default);
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
                    _cursor.columnResizeCursor();
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
                        var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv(), dragHandler = this.getDragHandler();
                        var previousMouseLeft = this.getPreviousMouseLeft(), previousSizeableDivWidth = this.getPreviousSizeableDivWidth(), relativeMouseLeft = mouseLeft - previousMouseLeft;
                        var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
                        var width = sizeableDivWidth; ///
                        sizeableDiv.setWidth(width);
                        sizeableDivWidth = sizeableDiv.getWidth(); ///
                        dragHandler && dragHandler(sizeableDivWidth);
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
                    _cursor.columnResizeCursor();
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
var _default = _easyWithStyle.default(VerticalSplitter)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gdGhpcy5nZXRQcmV2aW91c01vdXNlTGVmdCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgICAgIGxldCBzaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlciAmJiBkcmFnSGFuZGxlcihzaXplYWJsZURpdldpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKTtcblxuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlTGVmdDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmVydGljYWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlcilgXG5cbiAgd2lkdGg6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxjQUFBO0lBRUEsU0FBQTtJQUVBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0EwR0Esc0JBSUE7Ozs7Ozs7SUE1R0EsZ0JBQUEsWUFBQSxRQUFBO2NBQUEsZ0JBQUEsRUFKQSxTQUFBO2FBSUEsZ0JBQUE7OEJBQUEsZ0JBQUE7Z0VBQUEsZ0JBQUE7O2lCQUFBLGdCQUFBOztBQUNBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQSxDQUFBLEtBQUEsRUFBQSxPQUFBO29CQUNBLFFBQUEsUUFBQSxVQUFBO3FCQUVBLFFBQUE7QUFOQSwyQkFBQTs7Ozs7QUFXQSxlQUFBLEdBQUEsZ0JBQUE7NEJBQUEsZ0JBQUEsQ0FBQSxLQUFBLEVBQUEsT0FBQTtvQkFDQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsRUFDQSxTQUFBLEdBQUEsS0FBQSxFQUNBLFFBQUEsUUFBQSxVQUFBO3FCQUVBLFFBQUE7d0JBQ0EsUUFBQSxRQUFBLFVBQUE7d0JBRUEsUUFBQTs0QkFDQSxTQUFBLFFBQUEsWUFBQSxJQUNBLFdBQUEsUUFBQSxjQUFBLElBQ0EsV0FBQSxRQUFBLGNBQUE7NEJBRUEsaUJBQUEsUUFBQSxvQkFBQSxJQUNBLHdCQUFBLFFBQUEsMkJBQUEsSUFDQSxpQkFBQSxHQUFBLFNBQUEsR0FBQSxpQkFBQTs0QkFFQSxnQkFBQSxHQUFBLHdCQUFBLEdBQUEsU0FBQSxHQUFBLGlCQUFBOzRCQUVBLEtBQUEsR0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsbUNBQUEsQ0FBQSxRQUFBLENBQUEsS0FBQTtBQUVBLHdDQUFBLEdBQUEsV0FBQSxDQUFBLFFBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLG1DQUFBLElBQUEsV0FBQSxDQUFBLGdCQUFBOzs7Ozs7QUFLQSxlQUFBLEdBQUEsZ0JBQUE7NEJBQUEsZ0JBQUEsQ0FBQSxLQUFBLEVBQUEsT0FBQTtvQkFDQSxLQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsRUFDQSxTQUFBLEdBQUEsS0FBQSxFQUNBLFFBQUEsUUFBQSxVQUFBO3FCQUVBLFFBQUE7d0JBQ0EsUUFBQSxRQUFBLFVBQUEsSUFDQSxXQUFBLFFBQUEsY0FBQSxJQUNBLGlCQUFBLEdBQUEsU0FBQSxFQUNBLGdCQUFBLEdBQUEsV0FBQSxDQUFBLFFBQUEsSUFDQSx3QkFBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7eUJBRUEsb0JBQUEsQ0FBQSxpQkFBQTt5QkFFQSwyQkFBQSxDQUFBLHdCQUFBO0FBdkRBLDJCQUFBO3lCQTJEQSxRQUFBOzZCQUNBLFNBQUE7Ozs7OztBQUtBLGVBQUEsR0FBQSxvQkFBQTs0QkFBQSxvQkFBQTtvQkFDQSxLQUFBLFFBQUEsUUFBQSxJQUNBLGlCQUFBLEdBQUEsS0FBQSxDQUFBLGlCQUFBO3VCQUVBLGlCQUFBOzs7O0FBR0EsZUFBQSxHQUFBLDJCQUFBOzRCQUFBLDJCQUFBO29CQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0Esd0JBQUEsR0FBQSxLQUFBLENBQUEsd0JBQUE7dUJBRUEsd0JBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsb0JBQUE7NEJBQUEsb0JBQUEsQ0FBQSxpQkFBQTtxQkFDQSxXQUFBO0FBQ0EscUNBQUEsRUFBQSxpQkFBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsMkJBQUE7NEJBQUEsMkJBQUEsQ0FBQSx3QkFBQTtxQkFDQSxXQUFBO0FBQ0EsNENBQUEsRUFBQSx3QkFBQTs7Ozs7QUFJQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBO29CQUNBLGlCQUFBLEdBQUEsSUFBQSxFQUNBLHdCQUFBLEdBQUEsSUFBQTtxQkFFQSxRQUFBO0FBQ0EscUNBQUEsRUFBQSxpQkFBQTtBQUNBLDRDQUFBLEVBQUEsd0JBQUE7Ozs7O1dBL0ZBLGdCQUFBO0VBSkEsU0FBQTtnQkFJQSxnQkFBQSxHQW1HQSxpQkFBQTtBQUNBLGFBQUEsR0FBQSxRQUFBOztlQTFHQSxjQUFBLFNBOEdBLGdCQUFBIn0=