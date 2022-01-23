"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _splitter = _interopRequireDefault(require("../splitter"));
var _eventTypes = require("../../eventTypes");
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
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event, element) {
                var pageX = event.pageX, mouseLeft = pageX, disabled = this.isDisabled();
                if (!disabled) {
                    var dragging = this.isDragging();
                    if (dragging) {
                        var direction = this.getDirection(), sizeableDiv = this.getSizeableDiv();
                        var previousMouseLeft = this.getPreviousMouseLeft(), previousSizeableDivWidth = this.getPreviousSizeableDivWidth(), relativeMouseLeft = mouseLeft - previousMouseLeft;
                        var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
                        var width = sizeableDivWidth, eventType = _eventTypes.DRAG_EVENT_TYPE;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgRFJBR19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpO1xuXG4gICAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gdGhpcy5nZXRQcmV2aW91c01vdXNlTGVmdCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgICAgIGxldCBzaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZURpdldpZHRoLCAvLy9cbiAgICAgICAgICAgICAgZXZlbnRUeXBlID0gRFJBR19FVkVOVF9UWVBFO1xuXG4gICAgICAgIHNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKTsgIC8vL1xuXG4gICAgICAgIHRoaXMuY2FsbEhhbmRsZXJzKGV2ZW50VHlwZSwgc2l6ZWFibGVEaXZXaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCk7XG5cbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZUxlZnQ7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZUxlZnQgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VYIiwibW91c2VMZWZ0IiwiZHJhZ2dpbmciLCJpc0RyYWdnaW5nIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwic2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInByZXZpb3VzTW91c2VMZWZ0IiwiZ2V0UHJldmlvdXNNb3VzZUxlZnQiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJ3aWR0aCIsImV2ZW50VHlwZSIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJjYWxsSGFuZGxlcnMiLCJtb3VzZURvd25IYW5kbGVyIiwic2V0UHJldmlvdXNNb3VzZUxlZnQiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJzdGFydERyYWciLCJzdGF0ZSIsImdldFN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRJbml0aWFsU3RhdGUiLCJzZXRTdGF0ZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FB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