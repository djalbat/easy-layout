"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../../../../index");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
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
        "\n\n  background-color: black;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var MainHorizontalSplitterDiv = /*#__PURE__*/ function(HorizontalSplitterDiv) {
    _inherits(MainHorizontalSplitterDiv, HorizontalSplitterDiv);
    var _super = _createSuper(MainHorizontalSplitterDiv);
    function MainHorizontalSplitterDiv() {
        _classCallCheck(this, MainHorizontalSplitterDiv);
        return _super.apply(this, arguments);
    }
    _createClass(MainHorizontalSplitterDiv, [
        {
            key: "dragHandler",
            value: function dragHandler(sizeableDivHeight) {
                var bottomLeftDiv = this.properties.bottomLeftDiv, height = sizeableDivHeight; ///
                bottomLeftDiv.setHeight(height);
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "didMount", this).call(this);
                this.onDrag(this.dragHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offDrag(this.dragHandler, this);
                _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "willUnmount", this).call(this);
            }
        }
    ]);
    return MainHorizontalSplitterDiv;
}(_index.HorizontalSplitterDiv);
_defineProperty(MainHorizontalSplitterDiv, "defaultProperties", {
    className: "main"
});
var _default = (0, _easyWithStyle).default(MainHorizontalSplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW4uanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jbGFzcyBNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGV4dGVuZHMgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IHtcbiAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVEaXZIZWlnaHQpIHtcbiAgICBjb25zdCB7IGJvdHRvbUxlZnREaXYgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodDsgLy8vXG5cbiAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgc3VwZXIuZGlkTW91bnQoKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZEcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuYDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQVVUTyA9IFwiYXV0b1wiO1xuZXhwb3J0IGNvbnN0IENVUlNPUiA9IFwiY3Vyc29yXCI7XG5leHBvcnQgY29uc3QgQ09MX1JFU0laRSA9IFwiY29sLXJlc2l6ZVwiO1xuZXhwb3J0IGNvbnN0IFJPV19SRVNJWkUgPSBcInJvdy1yZXNpemVcIjtcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcbiJdLCJuYW1lcyI6WyJNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZHJhZ0hhbmRsZXIiLCJzaXplYWJsZURpdkhlaWdodCIsImJvdHRvbUxlZnREaXYiLCJwcm9wZXJ0aWVzIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZGlkTW91bnQiLCJvbkRyYWciLCJ3aWxsVW5tb3VudCIsIm9mZkRyYWciLCJIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWSxXQUFBLENBQUM7OztFQUFiO3dCQUFBO0FBRXNCLEdBQWlCLENBQWpCLGNBQWlCO0FBRUQsR0FBbUIsQ0FBbkIsTUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs4REFKekQ7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7OzswQkFBQTs7Ozs7Ozs7OztTQUFBOzs7Ozs7O0tBQUE7Ozs7Ozs7Ozs7Ozs7TUFBQTt5REFBQTs7Ozs7Ozs7Ozs7Ozs7O3VCQUFBOztLQUFBOzs7Ozt3Q0FBQTs7Ozs7Ozs4QkFBQTs7Ozs7Ozs7OzJCQUFBOzs7Ozs7OztxRkFBQTs7Ozs7Ozs7Ozs7O21FQUFBOztpREFBQTs7Ozs7OztRQStCb0QsQ0FJcEQ7Ozs7S0FuQ0E7OztBQU1BLEdBQUssQ0FBQ0EseUJBQXlCLGlCQUEvQixRQUFROytEQU5SOzthQU1NQSx5QkFBeUI7d0RBTi9COzs7OztZQU9FQyxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM5QixHQUFLLENBQUdDLGFBQWEsR0FBSyxJQUFJLENBQUNDLFVBQVUsQ0FBakNELGFBQWEsRUFDZkUsTUFBTSxHQUFHSCxpQkFBaUIsRUFBRSxFQUFHLEFBQUgsQ0FBRztnQkFFckNDLGFBQWEsQ0FBQ0csU0FBUyxDQUFDRCxNQUFNLENBQUMsQ0FBQztZQUNsQyxDQUFDOzs7WUFFREUsR0FBUSxFQUFSQSxDQUFRO21CQUFSQSxRQUFRLENBQVJBLFFBQVEsR0FBRyxDQUFDO3FDQVJSUCx5QkFBeUIsYUFTckJPLENBQVEsV0FBZCxJQUFLLFlDZlQsQ0RlcUI7Z0JBRWpCLElBQUksQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ1AsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUM7OztZQUVEUSxHQUFXLEVBQVhBLENBQVc7bUJBQVhBLFFBQVEsQ0FBUkEsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7cUNBZm5DRCx5QkFBeUIsYUFpQnJCUyxDQUFXLGNBQWpCLElBQUssWUN2QlQsQ0R1QndCO1lBQ3RCLENBQUM7O01BeEJIOztFQU13Q0UsTUFBcUI7Z0JBQXZEWCx5QkFBeUIsRUFvQnRCWSxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTTtBQUNuQixDQUFDLENBNUJIO21CQStCZUMsY0FBUyxVQUFDZCx5QkFBeUI7MEJBL0JsRCJ9