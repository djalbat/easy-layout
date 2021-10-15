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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJTcGxpdHRlciIsInJvd1Jlc2l6ZUN1cnNvciIsIkRSQUdfRVZFTlRfVFlQRSIsIkhvcml6b250YWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJtb3VzZU1vdmVIYW5kbGVyIiwicGFnZVkiLCJtb3VzZVRvcCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwicmVsYXRpdmVNb3VzZVRvcCIsInNpemVhYmxlRGl2SGVpZ2h0IiwiaGVpZ2h0IiwiZXZlbnRUeXBlIiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0IiwiY2FsbEhhbmRsZXJzIiwibW91c2VEb3duSGFuZGxlciIsInNldFByZXZpb3VzTW91c2VUb3AiLCJzZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0Iiwic3RhcnREcmFnIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0SW5pdGlhbFN0YXRlIiwic2V0U3RhdGUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFpQixDQUFqQixjQUFpQjtBQUVsQixHQUFhLENBQWIsU0FBYTtBQUVGLEdBQWMsQ0FBZCxPQUFjO0FBQ2QsR0FBa0IsQ0FBbEIsV0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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OztZQUVELEdBQTRCLEVBQTVCLENBQTRCO21CQUE1QixRQUFRLENBQVIsNEJBQTRCLEdBQUcsQ0FBQztnQkFDOUIsR0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxJQUNuQix5QkFBeUIsR0FBSyxLQUFLLENBQW5DLHlCQUF5QjtnQkFFakMsTUFBTSxDQUFDLHlCQUF5QjtZQUNsQyxDQUFDOzs7WUFFRCxHQUFtQixFQUFuQixDQUFtQjttQkFBbkIsUUFBUSxDQUFSLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEIsZ0JBQWdCLEVBQWhCLGdCQUFnQjtnQkFDbEIsQ0FBQztZQUNILENBQUM7OztZQUVELEdBQTRCLEVBQTVCLENBQTRCO21CQUE1QixRQUFRLENBQVIsNEJBQTRCLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNoQix5QkFBeUIsRUFBekIseUJBQXlCO2dCQUMzQixDQUFDO1lBQ0gsQ0FBQzs7O1lBRUQsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixHQUFLLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxFQUN2Qix5QkFBeUIsR0FBRyxJQUFJO2dCQUV0QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ2IsZ0JBQWdCLEVBQWhCLGdCQUFnQjtvQkFDaEIseUJBQXlCLEVBQXpCLHlCQUF5QjtnQkFDM0IsQ0FBQztZQUNILENBQUM7OztXQWpHRyxrQkFBa0I7RUFMSCxTQUFhO2dCQUs1QixrQkFBa0IsRUFtR2YsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQixTQUFTLEVBQUUsQ0FBWTtBQUN6QixDQUFDO21CQTVHbUIsY0FBaUIsVUErR2Qsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgcm93UmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRFJBR19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uLy4uL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gcHJldmlvdXNNb3VzZVRvcDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodCwgLy8vXG4gICAgICAgICAgICAgIGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRTtcblxuICAgICAgICBzaXplYWJsZURpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBzaXplYWJsZURpdkhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IG1vdXNlVG9wLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpO1xuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlVG9wO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl19