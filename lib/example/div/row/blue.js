"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _row = _interopRequireDefault(require("../../../div/row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  background-color: blue;\n\n"]);

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

var BlueRowDiv = /*#__PURE__*/function (_RowDiv) {
  _inherits(BlueRowDiv, _RowDiv);

  function BlueRowDiv() {
    _classCallCheck(this, BlueRowDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(BlueRowDiv).apply(this, arguments));
  }

  _createClass(BlueRowDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = BlueRowDiv;
      }

      return _row["default"].fromProperties(Class, properties);
    }
  }]);

  return BlueRowDiv;
}(_row["default"]);

_defineProperty(BlueRowDiv, "defaultProperties", {
  className: "blue"
});

var _default = (0, _easyWithStyle["default"])(BlueRowDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdWUuanMiXSwibmFtZXMiOlsiQmx1ZVJvd0RpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIlJvd0RpdiIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7bUNBS2tCQyxLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQSxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzVCRCxRQUFBQSxVQUFVLEdBQUdELEtBQWIsQ0FENEIsQ0FDUjs7QUFFcEJBLFFBQUFBLEtBQUssR0FBR0QsVUFBUjtBQUNEOztBQUVELGFBQU9JLGdCQUFPQyxjQUFQLENBQXNCSixLQUF0QixFQUE2QkMsVUFBN0IsQ0FBUDtBQUNEOzs7O0VBYnNCRSxlOztnQkFBbkJKLFUsdUJBQ3VCO0FBQ3pCTSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkLCtCQUFVTixVQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFJvd0RpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L3Jvd1wiO1xuXG5jbGFzcyBCbHVlUm93RGl2IGV4dGVuZHMgUm93RGl2IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJibHVlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IEJsdWVSb3dEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJvd0Rpdi5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEJsdWVSb3dEaXYpYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cbmA7XG4iXX0=