"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _index = require("../../../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  background-color: black;\n\n"]);

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

///
var LeftVerticalSplitterDiv = /*#__PURE__*/function (_VerticalSplitterDiv) {
  _inherits(LeftVerticalSplitterDiv, _VerticalSplitterDiv);

  function LeftVerticalSplitterDiv() {
    _classCallCheck(this, LeftVerticalSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftVerticalSplitterDiv).apply(this, arguments));
  }

  _createClass(LeftVerticalSplitterDiv, null, [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var after = true;
      Object.assign(properties, {
        after: after
      });
      return _index.VerticalSplitterDiv.fromClass(Class, properties);
    }
  }]);

  return LeftVerticalSplitterDiv;
}(_index.VerticalSplitterDiv);

_defineProperty(LeftVerticalSplitterDiv, "defaultProperties", {
  className: "left"
});

var _default = (0, _easyWithStyle["default"])(LeftVerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQuanMiXSwibmFtZXMiOlsiTGVmdFZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJhZnRlciIsIk9iamVjdCIsImFzc2lnbiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJmcm9tQ2xhc3MiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtJQUVuREEsdUI7Ozs7Ozs7Ozs7OzhCQUthQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUVBQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsVUFBZCxFQUEwQjtBQUN4QkMsUUFBQUEsS0FBSyxFQUFMQTtBQUR3QixPQUExQjtBQUlBLGFBQU9HLDJCQUFvQkMsU0FBcEIsQ0FBOEJOLEtBQTlCLEVBQXFDQyxVQUFyQyxDQUFQO0FBQ0Q7Ozs7RUFibUNJLDBCOztnQkFBaENOLHVCLHVCQUN1QjtBQUN6QlEsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCwrQkFBVVIsdUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7IC8vL1xuXG5jbGFzcyBMZWZ0VmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIFZlcnRpY2FsU3BsaXR0ZXJEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxlZnRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBhZnRlciA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGFmdGVyXG4gICAgfSk7XG5cbiAgICByZXR1cm4gVmVydGljYWxTcGxpdHRlckRpdi5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShMZWZ0VmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbmA7XG4iXX0=