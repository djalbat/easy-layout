"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _index = require("../../../index");
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
        "\n\n  width: 24rem;\n  max-width: 56rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RightSizeableDiv = /*#__PURE__*/ function(SizeableDiv) {
    _inherits(RightSizeableDiv, SizeableDiv);
    var _super = _createSuper(RightSizeableDiv);
    function RightSizeableDiv() {
        _classCallCheck(this, RightSizeableDiv);
        return _super.apply(this, arguments);
    }
    return RightSizeableDiv;
}(_index.SizeableDiv);
_defineProperty(RightSizeableDiv, "defaultProperties", {
    className: "right"
});
var _default = (0, _easyWithStyle).default(RightSizeableDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS9yaWdodC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgU2l6ZWFibGVEaXYgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNsYXNzIFJpZ2h0U2l6ZWFibGVEaXYgZXh0ZW5kcyBTaXplYWJsZURpdiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmlnaHRcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmlnaHRTaXplYWJsZURpdilgXG5cbiAgd2lkdGg6IDI0cmVtO1xuICBtYXgtd2lkdGg6IDU2cmVtO1xuXG5gO1xuIl0sIm5hbWVzIjpbIlJpZ2h0U2l6ZWFibGVEaXYiLCJTaXplYWJsZURpdiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRVgsR0FBZ0IsQ0FBaEIsTUFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQVFELENBSzNDOzs7Ozs7O0lBWE1BLGdCQUFnQixpQkFBdEIsUUFBUTs7O2FBQUZBLGdCQUFnQjs7Ozs7RUFBU0MsTUFBVztnQkFBcENELGdCQUFnQixFQUNiRSxDQUFpQixvQkFBRyxDQUFDO0lBQzFCQyxTQUFTLEVBQUUsQ0FBTztBQUNwQixDQUFDO21CQUdZQyxjQUFTLFVBQUNKLGdCQUFnQiJ9