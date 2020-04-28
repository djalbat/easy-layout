"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _rows = _interopRequireDefault(require("../../div/rows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: 100%;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SizeableColumnsDiv = /*#__PURE__*/function (_ColumnsDiv) {
  _inherits(SizeableColumnsDiv, _ColumnsDiv);

  function SizeableColumnsDiv() {
    _classCallCheck(this, SizeableColumnsDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(SizeableColumnsDiv).apply(this, arguments));
  }

  _createClass(SizeableColumnsDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = SizeableColumnsDiv;
      }

      return _rows["default"].fromProperties(Class, properties);
    }
  }]);

  return SizeableColumnsDiv;
}(_rows["default"]);

_defineProperty(SizeableColumnsDiv, "defaultProperties", {
  className: "sizeable"
});

var _default = (0, _easyWithStyle["default"])(SizeableColumnsDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIlNpemVhYmxlQ29sdW1uc0RpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIkNvbHVtbnNEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGtCOzs7Ozs7Ozs7OzttQ0FLa0JDLEssRUFBT0MsVSxFQUFZO0FBQ3ZDLFVBQUlBLFVBQVUsS0FBS0MsU0FBbkIsRUFBOEI7QUFDNUJELFFBQUFBLFVBQVUsR0FBR0QsS0FBYixDQUQ0QixDQUNSOztBQUVwQkEsUUFBQUEsS0FBSyxHQUFHRCxrQkFBUjtBQUNEOztBQUVELGFBQU9JLGlCQUFXQyxjQUFYLENBQTBCSixLQUExQixFQUFpQ0MsVUFBakMsQ0FBUDtBQUNEOzs7O0VBYjhCRSxnQjs7Z0JBQTNCSixrQix1QkFDdUI7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVOLGtCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4uLy4uL2Rpdi9yb3dzXCI7XG5cbmNsYXNzIFNpemVhYmxlQ29sdW1uc0RpdiBleHRlbmRzIENvbHVtbnNEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNpemVhYmxlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFNpemVhYmxlQ29sdW1uc0RpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gQ29sdW1uc0Rpdi5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNpemVhYmxlQ29sdW1uc0RpdilgXG5cbiAgaGVpZ2h0OiAxMDAlO1xuXG5gO1xuIl19