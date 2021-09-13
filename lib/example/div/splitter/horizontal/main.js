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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci9ob3Jpem9udGFsL21haW4uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiIsImRyYWdIYW5kbGVyIiwic2l6ZWFibGVEaXZIZWlnaHQiLCJib3R0b21MZWZ0RGl2IiwicHJvcGVydGllcyIsImhlaWdodCIsInNldEhlaWdodCIsImRpZE1vdW50Iiwib25EcmFnIiwid2lsbFVubW91bnQiLCJvZmZEcmFnIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBaUIsQ0FBakIsY0FBaUI7QUFFRCxHQUFtQixDQUFuQixNQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMkJMLGtDQUlwRDs7Ozs7OztJQTdCTSx5QkFBeUIsaUJBQS9CLFFBQVE7Y0FBRix5QkFBeUI7YUFBekIseUJBQXlCOzhCQUF6Qix5QkFBeUI7Z0VBQXpCLHlCQUF5Qjs7aUJBQXpCLHlCQUF5Qjs7WUFDN0IsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM5QixHQUFLLENBQXFCLFdBQWUsR0FBZixJQUFJLENBQUMsVUFBVSxFQUFqQyxhQUFhLEdBQUssV0FBZSxDQUFqQyxhQUFhLEVBQ2YsTUFBTSxHQUFHLGlCQUFpQixDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFckMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ2hDLENBQUM7OztZQUVELEdBQVEsR0FBUixRQUFRO21CQUFSLFFBQVEsQ0FBUixRQUFRLEdBQUcsQ0FBQztxQ0FSUix5QkFBeUIsY0FTckIsUUFBUSxHQUFkLElBQUs7Z0JBRUwsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUk7WUFDcEMsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJO3FDQWZqQyx5QkFBeUIsY0FpQnJCLFdBQVcsR0FBakIsSUFBSztZQUNQLENBQUM7OztXQWxCRyx5QkFBeUI7RUFGTyxNQUFtQjtnQkFFbkQseUJBQXlCLEdBb0J0QixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxJQUFNO0FBQ25CLENBQUM7bUJBMUJtQixjQUFpQixVQTZCZCx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY2xhc3MgTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBleHRlbmRzIEhvcml6b250YWxTcGxpdHRlckRpdiB7XG4gIGRyYWdIYW5kbGVyKHNpemVhYmxlRGl2SGVpZ2h0KSB7XG4gICAgY29uc3QgeyBib3R0b21MZWZ0RGl2IH0gPSB0aGlzLnByb3BlcnRpZXMsXG4gICAgICAgICAgaGVpZ2h0ID0gc2l6ZWFibGVEaXZIZWlnaHQ7IC8vL1xuXG4gICAgYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHN1cGVyLmRpZE1vdW50KCk7XG5cbiAgICB0aGlzLm9uRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMub2ZmRHJhZyh0aGlzLmRyYWdIYW5kbGVyLCB0aGlzKTtcblxuICAgIHN1cGVyLndpbGxVbm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1haW5cIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTWFpbkhvcml6b250YWxTcGxpdHRlckRpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbmA7XG4iXX0=