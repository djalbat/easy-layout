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
        "\n\n  height: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var DRAG_EVENT_TYPE = _easy.eventTypes.DRAG_EVENT_TYPE;
var HorizontalSplitter = /*#__PURE__*/ function(Splitter) {
    _inherits(HorizontalSplitter, Splitter);
    var _super = _createSuper(HorizontalSplitter);
    function HorizontalSplitter() {
        _classCallCheck(this, HorizontalSplitter);
        return _super.apply(this, arguments);
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
                        var height = sizeableDivHeight, eventType = DRAG_EVENT_TYPE;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvaG9yaXpvbnRhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgZXZlbnRUeXBlcyB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgcm93UmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jb25zdCB7IERSQUdfRVZFTlRfVFlQRSB9ID0gZXZlbnRUeXBlcztcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gcHJldmlvdXNNb3VzZVRvcDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVEaXZIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodCwgLy8vXG4gICAgICAgICAgICAgIGV2ZW50VHlwZSA9IERSQUdfRVZFTlRfVFlQRTtcblxuICAgICAgICBzaXplYWJsZURpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgdGhpcy5jYWxsSGFuZGxlcnMoZXZlbnRUeXBlLCBzaXplYWJsZURpdkhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IG1vdXNlVG9wLCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQpO1xuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlVG9wO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlcilgXG5cbiAgaGVpZ2h0OiAxcmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIkRSQUdfRVZFTlRfVFlQRSIsImV2ZW50VHlwZXMiLCJIb3Jpem9udGFsU3BsaXR0ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwicm93UmVzaXplQ3Vyc29yIiwibW91c2VNb3ZlSGFuZGxlciIsInBhZ2VZIiwibW91c2VUb3AiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJzaXplYWJsZURpdiIsImdldFNpemVhYmxlRGl2IiwicHJldmlvdXNNb3VzZVRvcCIsImdldFByZXZpb3VzTW91c2VUb3AiLCJwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZURpdkhlaWdodCIsImhlaWdodCIsImV2ZW50VHlwZSIsInNldEhlaWdodCIsImdldEhlaWdodCIsImNhbGxIYW5kbGVycyIsIm1vdXNlRG93bkhhbmRsZXIiLCJzZXRQcmV2aW91c01vdXNlVG9wIiwic2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsInN0YXJ0RHJhZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRVosSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBRVosSUFBQSxTQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUVGLElBQUEsT0FBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU0sQUFBRUEsZUFBZSxHQUFLQyxLQUFVLFdBQUEsQ0FBOUJELGVBQWUsQUFBZSxBQUFDO0FBRXZDLElBQUEsQUFBTUUsa0JBQWtCLGlCQXdHckIsQUF4R0g7OzthQUFNQSxrQkFBa0I7Ozs7OztZQUN0QkMsR0FBZ0IsRUFBaEJBLGtCQUFnQjttQkFBaEJBLFNBQUFBLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtnQkFDL0IsSUFBTUMsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiRSxDQUFBQSxHQUFBQSxPQUFlLEFBQUUsQ0FBQSxnQkFBRixFQUFFLENBQUM7aUJBQ25CO2FBQ0Y7OztZQUVEQyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLENBQUNMLEtBQUssRUFBRUMsT0FBTyxFQUFFO2dCQUMvQixJQUFNLEFBQUVLLEtBQUssR0FBS04sS0FBSyxDQUFmTSxLQUFLLEFBQVUsRUFDakJDLFFBQVEsR0FBR0QsS0FBSyxFQUNoQkosUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiLElBQU1N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