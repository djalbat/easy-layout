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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJTcGxpdHRlciIsInJvd1Jlc2l6ZUN1cnNvciIsIkRSQUdfRVZFTlRfVFlQRSIsIkhvcml6b250YWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVkiLCJtb3VzZVRvcCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwicmVsYXRpdmVNb3VzZVRvcCIsInNpemVhYmxlRGl2SGVpZ2h0IiwiaGVpZ2h0IiwiZXZlbnRUeXBlIiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbEhhbmRsZXJzIiwibW91c2VEb3duSGFuZGxlciIsInNldFByZXZpb3VzTW91c2VUb3AiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic3RhcnREcmFnIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFhLENBQWIsU0FBYTtBQUVGLEdBQWMsQ0FBZCxPQUFjO0FBQ2QsR0FBa0IsQ0FBbEIsV0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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