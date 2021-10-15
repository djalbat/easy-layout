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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
    function MainHorizontalSplitterDiv() {
        _classCallCheck(this, MainHorizontalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(MainHorizontalSplitterDiv).apply(this, arguments));
    }
    _createClass(MainHorizontalSplitterDiv, [
        {
            key: "dragHandler",
            value: function dragHandler(sizeableDivHeight) {
                var _properties = this.properties, bottomLeftDiv = _properties.bottomLeftDiv, height = sizeableDivHeight; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW4uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiIsImRyYWdIYW5kbGVyIiwic2l6ZWFibGVEaXZIZWlnaHQiLCJib3R0b21MZWZ0RGl2IiwicHJvcGVydGllcyIsImhlaWdodCIsInNldEhlaWdodCIsImRpZE1vdW50Iiwib25EcmFnIiwid2lsbFVubW91bnQiLCJvZmZEcmFnIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFRCxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkJMLENBSXBEOzs7Ozs7O0lBN0JNLHlCQUF5QixpQkFBL0IsUUFBUTtjQUFGLHlCQUF5QjthQUF6Qix5QkFBeUI7OEJBQXpCLHlCQUF5QjtnRUFBekIseUJBQXlCOztpQkFBekIseUJBQXlCOztZQUM3QixHQUFXLEVBQVgsQ0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzlCLEdBQUssQ0FBcUIsV0FBZSxHQUFmLElBQUksQ0FBQyxVQUFVLEVBQWpDLGFBQWEsR0FBSyxXQUFlLENBQWpDLGFBQWEsRUFDZixNQUFNLEdBQUcsaUJBQWlCLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVyQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDaEMsQ0FBQzs7O1lBRUQsR0FBUSxFQUFSLENBQVE7bUJBQVIsUUFBUSxDQUFSLFFBQVEsR0FBRyxDQUFDO3FDQVJSLHlCQUF5QixhQVNyQixDQUFRLFdBQWQsSUFBSztnQkFFTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSTtZQUNwQyxDQUFDOzs7WUFFRCxHQUFXLEVBQVgsQ0FBVzttQkFBWCxRQUFRLENBQVIsV0FBVyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUk7cUNBZmpDLHlCQUF5QixhQWlCckIsQ0FBVyxjQUFqQixJQUFLO1lBQ1AsQ0FBQzs7O1dBbEJHLHlCQUF5QjtFQUZPLE1BQW1CO2dCQUVuRCx5QkFBeUIsRUFvQnRCLENBQWlCLG9CQUFHLENBQUM7SUFDMUIsU0FBUyxFQUFFLENBQU07QUFDbkIsQ0FBQzttQkExQm1CLGNBQWlCLFVBNkJkLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jbGFzcyBNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGV4dGVuZHMgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IHtcbiAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVEaXZIZWlnaHQpIHtcbiAgICBjb25zdCB7IGJvdHRvbUxlZnREaXYgfSA9IHRoaXMucHJvcGVydGllcyxcbiAgICAgICAgICBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodDsgLy8vXG5cbiAgICBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgc3VwZXIuZGlkTW91bnQoKTtcblxuICAgIHRoaXMub25EcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZEcmFnKHRoaXMuZHJhZ0hhbmRsZXIsIHRoaXMpO1xuXG4gICAgc3VwZXIud2lsbFVubW91bnQoKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFpblwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuYDtcbiJdfQ==