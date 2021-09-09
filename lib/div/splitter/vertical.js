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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiU3BsaXR0ZXIiLCJEUkFHX0VWRU5UX1RZUEUiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJWZXJ0aWNhbFNwbGl0dGVyIiwibW91c2VPdmVySGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJwYWdlWCIsIm1vdXNlTGVmdCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJldmVudFR5cGUiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwiY2FsbEhhbmRsZXJzIiwibW91c2VEb3duSGFuZGxlciIsInNldFByZXZpb3VzTW91c2VMZWZ0Iiwic2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwic3RhcnREcmFnIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFhLENBQWIsU0FBYTtBQUVGLEdBQWtCLENBQWxCLFdBQWtCO0FBQ2YsR0FBYyxDQUFkLE9BQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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