"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _splitter = /*#__PURE__*/ _interopRequireDefault(require("../splitter"));
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "mouseOverHandler", function(event, element) {
            _this.setCursor();
        });
        _defineProperty(_assertThisInitialized(_this), "startDragHandler", function(element) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var sizeableDiv = _this.getSizeableDiv(), sizeableDivWidth = sizeableDiv.getWidth(), previousSizeableDivWidth = sizeableDivWidth; ///
                _this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
            }
            _this.setCursor();
        });
        _defineProperty(_assertThisInitialized(_this), "dragHandler", function(relativeMouseTop, relativeMouseLeft) {
            var disabled = _this.isDisabled();
            if (!disabled) {
                var direction = _this.getDirection(), sizeableDiv = _this.getSizeableDiv(), previousSizeableDivWidth = _this.getPreviousSizeableDivWidth(), sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft, width = sizeableDivWidth; ///
                sizeableDiv.setWidth(width);
            }
        });
        return _this;
    }
    _createClass(VerticalSplitter, [
        {
            key: "setCursor",
            value: function setCursor() {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor.columnResizeCursor)();
                }
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
                var previousSizeableDivWidth = null;
                this.setState({
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
var _default = (0, _easyWithStyle.default)(VerticalSplitter)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBtb3VzZU92ZXJIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5zZXRDdXJzb3IoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ0hhbmRsZXIgPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgIC8vL1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aChwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0Q3Vyc29yKCk7XG4gIH1cblxuICBkcmFnSGFuZGxlciA9IChyZWxhdGl2ZU1vdXNlVG9wLCByZWxhdGl2ZU1vdXNlTGVmdCkgPT4ge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgICAgc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIHNldEN1cnNvcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmVydGljYWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlcilgXG5cbiAgd2lkdGg6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZXRDdXJzb3IiLCJzdGFydERyYWdIYW5kbGVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwic2l6ZWFibGVEaXYiLCJnZXRTaXplYWJsZURpdiIsInNpemVhYmxlRGl2V2lkdGgiLCJnZXRXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsImRyYWdIYW5kbGVyIiwicmVsYXRpdmVNb3VzZVRvcCIsInJlbGF0aXZlTW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImNvbHVtblJlc2l6ZUN1cnNvciIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkVBOzs7ZUFBQTs7O2tFQXpFc0I7NkRBRUQ7c0JBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFBLEFBQU1BLGlDQW1FSCxBQW5FSDtjQUFNQTs4QkFBQUE7YUFBQUE7OEJBQUFBOzs7UUFDSkMsK0NBQUFBLG9CQUFtQixTQUFDQyxPQUFPQyxTQUFZO1lBQ3JDLE1BQUtDLFNBQVM7UUFDaEI7UUFFQUMsK0NBQUFBLG9CQUFtQixTQUFDRixTQUFZO1lBQzlCLElBQU1HLFdBQVcsTUFBS0MsVUFBVTtZQUVoQyxJQUFJLENBQUNELFVBQVU7Z0JBQ2IsSUFBTUUsY0FBYyxNQUFLQyxjQUFjLElBQ2pDQyxtQkFBbUJGLFlBQVlHLFFBQVEsSUFDdkNDLDJCQUEyQkYsa0JBQW1CLEdBQUc7Z0JBRXZELE1BQUtHLDJCQUEyQixDQUFDRDtZQUNuQyxDQUFDO1lBRUQsTUFBS1IsU0FBUztRQUNoQjtRQUVBVSwrQ0FBQUEsZUFBYyxTQUFDQyxrQkFBa0JDLG1CQUFzQjtZQUNyRCxJQUFNVixXQUFXLE1BQUtDLFVBQVU7WUFFaEMsSUFBSSxDQUFDRCxVQUFVO2dCQUNiLElBQU1XLFlBQVksTUFBS0MsWUFBWSxJQUM3QlYsY0FBYyxNQUFLQyxjQUFjLElBQ2pDRywyQkFBMkIsTUFBS08sMkJBQTJCLElBQzNEVCxtQkFBbUJFLDJCQUEyQkssWUFBWUQsbUJBQzFESSxRQUFRVixrQkFBa0IsR0FBRztnQkFFbkNGLFlBQVlhLFFBQVEsQ0FBQ0Q7WUFDdkIsQ0FBQztRQUNIOzs7aUJBL0JJcEI7O1lBaUNKSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixJQUFNRSxXQUFXLElBQUksQ0FBQ0MsVUFBVTtnQkFFaEMsSUFBSSxDQUFDRCxVQUFVO29CQUNiZ0IsSUFBQUEsMEJBQWtCO2dCQUNwQixDQUFDO1lBQ0g7OztZQUVBSCxLQUFBQTttQkFBQUEsU0FBQUEsOEJBQThCO2dCQUM1QixJQUFNSSxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQixBQUFFWiwyQkFBNkJXLE1BQTdCWDtnQkFFUixPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkQsd0JBQXdCLEVBQUU7Z0JBQ3BELElBQUksQ0FBQ2EsV0FBVyxDQUFDO29CQUNmYiwwQkFBQUE7Z0JBQ0Y7WUFDRjs7O1lBRUFjLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0I7Z0JBQ2hCLElBQU1kLDJCQUEyQixJQUFJO2dCQUVyQyxJQUFJLENBQUNlLFFBQVEsQ0FBQztvQkFDWmYsMEJBQUFBO2dCQUNGO1lBQ0Y7OztXQTVESVo7RUFBeUI0QixpQkFBUTtBQThEckMsZ0JBOURJNUIsa0JBOERHNkIscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2I7SUFHRixXQUFlQyxJQUFBQSxzQkFBUyxFQUFDL0IifQ==