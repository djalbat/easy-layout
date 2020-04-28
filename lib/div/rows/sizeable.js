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

var SizeableRowsDiv = /*#__PURE__*/function (_RowsDiv) {
  _inherits(SizeableRowsDiv, _RowsDiv);

  function SizeableRowsDiv() {
    _classCallCheck(this, SizeableRowsDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(SizeableRowsDiv).apply(this, arguments));
  }

  _createClass(SizeableRowsDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = SizeableRowsDiv;
      }

      return _rows["default"].fromProperties(Class, properties);
    }
  }]);

  return SizeableRowsDiv;
}(_rows["default"]);

_defineProperty(SizeableRowsDiv, "defaultProperties", {
  className: "sizeable"
});

var _default = (0, _easyWithStyle["default"])(SizeableRowsDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIlNpemVhYmxlUm93c0RpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIlJvd3NEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGU7Ozs7Ozs7Ozs7O21DQUtrQkMsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUdELGVBQVI7QUFDRDs7QUFFRCxhQUFPSSxpQkFBUUMsY0FBUixDQUF1QkosS0FBdkIsRUFBOEJDLFVBQTlCLENBQVA7QUFDRDs7OztFQWIyQkUsZ0I7O2dCQUF4QkosZSx1QkFDdUI7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVOLGVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgUm93c0RpdiBmcm9tIFwiLi4vLi4vZGl2L3Jvd3NcIjtcblxuY2xhc3MgU2l6ZWFibGVSb3dzRGl2IGV4dGVuZHMgUm93c0RpdiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic2l6ZWFibGVcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gU2l6ZWFibGVSb3dzRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBSb3dzRGl2LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU2l6ZWFibGVSb3dzRGl2KWBcblxuICBoZWlnaHQ6IDEwMCU7XG5cbmA7XG4iXX0=