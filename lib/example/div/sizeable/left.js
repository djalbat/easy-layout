"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _sizeable = _interopRequireDefault(require("../../../div/sizeable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 36rem;\n  max-width: 48rem;\n\n"]);

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

var LeftSizeableDiv = /*#__PURE__*/function (_SizeableDiv) {
  _inherits(LeftSizeableDiv, _SizeableDiv);

  function LeftSizeableDiv() {
    _classCallCheck(this, LeftSizeableDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftSizeableDiv).apply(this, arguments));
  }

  _createClass(LeftSizeableDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = LeftSizeableDiv;
      }

      return _sizeable["default"].fromProperties(Class, properties);
    }
  }]);

  return LeftSizeableDiv;
}(_sizeable["default"]);

_defineProperty(LeftSizeableDiv, "defaultProperties", {
  className: "left"
});

var _default = (0, _easyWithStyle["default"])(LeftSizeableDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQuanMiXSwibmFtZXMiOlsiTGVmdFNpemVhYmxlRGl2IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwiU2l6ZWFibGVEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7Ozs7O21DQUtrQkMsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUdELGVBQVI7QUFDRDs7QUFFRCxhQUFPSSxxQkFBWUMsY0FBWixDQUEyQkosS0FBM0IsRUFBa0NDLFVBQWxDLENBQVA7QUFDRDs7OztFQWIyQkUsb0I7O2dCQUF4QkosZSx1QkFDdUI7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVOLGVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9zaXplYWJsZVwiO1xuXG5jbGFzcyBMZWZ0U2l6ZWFibGVEaXYgZXh0ZW5kcyBTaXplYWJsZURpdiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibGVmdFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBMZWZ0U2l6ZWFibGVEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNpemVhYmxlRGl2LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVmdFNpemVhYmxlRGl2KWBcblxuICB3aWR0aDogMzZyZW07XG4gIG1heC13aWR0aDogNDhyZW07XG5cbmA7XG4iXX0=