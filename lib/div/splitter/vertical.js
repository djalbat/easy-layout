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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
            key: "setCursor",
            value: function setCursor() {
                var disabled = this.isDisabled();
                if (!disabled) {
                    (0, _cursor).columnResizeCursor();
                }
            }
        },
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                this.setCursor();
            }
        },
        {
            key: "startDragHandler",
            value: function startDragHandler(element) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var sizeableElement = this.getSizeableElement(), sizeableElementWidth = sizeableElement.getWidth(), previousSizeableElementWidth = sizeableElementWidth; ///
                    this.setPreviousSizeableElementWidth(previousSizeableElementWidth);
                }
                this.setCursor();
            }
        },
        {
            key: "dragHandler",
            value: function dragHandler(relativeMouseTop, relativeMouseLeft) {
                var disabled = this.isDisabled();
                if (!disabled) {
                    var direction = this.getDirection(), sizeableElement = this.getSizeableElement(), previousSizeableElementWidth = this.getPreviousSizeableElementWidth(), sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft, width = sizeableElementWidth; ///
                    sizeableElement.setWidth(width);
                }
            }
        },
        {
            key: "getPreviousSizeableElementWidth",
            value: function getPreviousSizeableElementWidth() {
                var state = this.getState(), previousSizeableElementWidth = state.previousSizeableElementWidth;
                return previousSizeableElementWidth;
            }
        },
        {
            key: "setPreviousSizeableElementWidth",
            value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
                this.updateState({
                    previousSizeableElementWidth: previousSizeableElementWidth
                });
            }
        },
        {
            key: "setInitialState",
            value: function setInitialState() {
                var previousSizeableElementWidth = null;
                this.setState({
                    previousSizeableElementWidth: previousSizeableElementWidth
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXYvc3BsaXR0ZXIvdmVydGljYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlciBmcm9tIFwiLi4vc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBzZXRDdXJzb3IoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgc3RhcnREcmFnSGFuZGxlcihlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudFdpZHRoOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEN1cnNvcigpO1xuICB9XG5cbiAgZHJhZ0hhbmRsZXIocmVsYXRpdmVNb3VzZVRvcCwgcmVsYXRpdmVNb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmVydGljYWxcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlcilgXG5cbiAgd2lkdGg6IDFyZW07XG5cbmA7XG4iXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlciIsInNldEN1cnNvciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImNvbHVtblJlc2l6ZUN1cnNvciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzdGFydERyYWdIYW5kbGVyIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0U2l6ZWFibGVFbGVtZW50Iiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJnZXRXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwiZHJhZ0hhbmRsZXIiLCJyZWxhdGl2ZU1vdXNlVG9wIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldEluaXRpYWxTdGF0ZSIsInNldFN0YXRlIiwiU3BsaXR0ZXIiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWxCLElBQUEsU0FBYSxrQ0FBYixhQUFhLEVBQUE7QUFFQyxJQUFBLE9BQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFBLEFBQU1BLGdCQUFnQixpQkFtRW5CLEFBbkVIOzs7YUFBTUEsZ0JBQWdCOzs7Ozs7WUFDcEJDLEdBQVMsRUFBVEEsV0FBUzttQkFBVEEsU0FBQUEsU0FBUyxHQUFHO2dCQUNWLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNDLFVBQVUsRUFBRSxBQUFDO2dCQUVuQyxJQUFJLENBQUNELFFBQVEsRUFBRTtvQkFDYkUsQ0FBQUEsR0FBQUEsT0FBa0IsQUFBRSxDQUFBLG1CQUFGLEVBQUUsQ0FBQztpQkFDdEI7YUFDRjs7O1lBRURDLEdBQWdCLEVBQWhCQSxrQkFBZ0I7bUJBQWhCQSxTQUFBQSxnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUU7Z0JBQy9CLElBQUksQ0FBQ04sU0FBUyxFQUFFLENBQUM7YUFDbEI7OztZQUVETyxHQUFnQixFQUFoQkEsa0JBQWdCO21CQUFoQkEsU0FBQUEsZ0JBQWdCLENBQUNELE9BQU8sRUFBRTtnQkFDeEIsSUFBTUwsUUFBUSxHQUFHLElBQUksQ0FBQ0MsVUFBVSxFQUFFLEFBQUM7Z0JBRW5DLElBQUksQ0FBQ0QsUUFBUSxFQUFFO29CQUNiLElBQU1PLGVBQWUsR0FBRyxJQUFJLENBQUNDLGtCQUFrQixFQUFFLEVBQzNDQyxvQkFBb0IsR0FBR0YsZUFBZSxDQUFDRyxRQUFRLEVBQUUsRUFDakRDLDRCQUE0QixHQUFHRixvQkFBb0IsQUFBQyxFQUFFLEdBQUc7b0JBRS9ELElBQUksQ0FBQ0csK0JBQStCLENBQUNELDRCQUE0QixDQUFDLENBQUM7aUJBQ3BFO2dCQUVELElBQUksQ0FBQ1osU0FBUyxFQUFFLENBQUM7YUFDbEI7OztZQUVEYyxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsQ0FBQ0MsZ0JBQWdCLEVBQUVDLGlCQUFpQixFQUFFO2dCQUMvQyxJQUFNZixRQUFRLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUUsQUFBQztnQkFFbkMsSUFBSSxDQUFDRCxRQUFRLEVBQUU7b0JBQ2IsSUFBTWdCLFNBQVMsR0FBRyxJQUFJLENBQUNDLFlBQVksRUFBRSxFQUMvQlYsZUFBZSxHQUFHLElBQUksQ0FBQ0Msa0JBQWtCLEVBQUUsRUFDM0NHLDRCQUE0QixHQUFHLElBQUksQ0FBQ08sK0JBQStCLEVBQUUsRUFDckVULG9CQUFvQixHQUFHRSw0QkFBNEIsR0FBR0ssU0FBUyxHQUFHRCxpQkFBaUIsRUFDbkZJLEtBQUssR0FBR1Ysb0JBQW9CLEFBQUMsRUFBQyxHQUFHO29CQUV2Q0YsZUFBZSxDQUFDYSxRQUFRLENBQUNELEtBQUssQ0FBQyxDQUFDO2lCQUNqQzthQUNGOzs7WUFFREQsR0FBK0IsRUFBL0JBLGlDQUErQjttQkFBL0JBLFNBQUFBLCtCQUErQixHQUFHO2dCQUNoQyxJQUFNRyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLEVBQUUsRUFDdkIsQUFBRVgsNEJBQTRCLEdBQUtVLEtBQUssQ0FBdENWLDRCQUE0QixBQUFVLEFBQUM7Z0JBRS9DLE9BQU9BLDRCQUE0QixDQUFDO2FBQ3JDOzs7WUFFREMsR0FBK0IsRUFBL0JBLGlDQUErQjttQkFBL0JBLFNBQUFBLCtCQUErQixDQUFDRCw0QkFBNEIsRUFBRTtnQkFDNUQsSUFBSSxDQUFDWSxXQUFXLENBQUM7b0JBQ2ZaLDRCQUE0QixFQUE1QkEsNEJBQTRCO2lCQUM3QixDQUFDLENBQUM7YUFDSjs7O1lBRURhLEdBQWUsRUFBZkEsaUJBQWU7bUJBQWZBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsSUFBTWIsNEJBQTRCLEdBQUcsSUFBSSxBQUFDO2dCQUUxQyxJQUFJLENBQUNjLFFBQVEsQ0FBQztvQkFDWmQsNEJBQTRCLEVBQTVCQSw0QkFBNEI7aUJBQzdCLENBQUMsQ0FBQzthQUNKOzs7O0NBS0YsQ0FqRThCZSxTQUFRLFFBQUEsQ0FpRXRDO0FBSEMsZ0JBOURJNUIsZ0JBQWdCLEVBOERiNkIsbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxVQUFVO0NBQ3RCLENBQUM7ZUFHV0MsQ0FBQUEsR0FBQUEsY0FBUyxBQUFrQixDQUFBLFFBQWxCLENBQUMvQixnQkFBZ0IsQ0FBQyJ9