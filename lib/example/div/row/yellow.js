"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _row = _interopRequireDefault(require("../../../div/row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  background-color: yellow;\n\n"]);

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

var YellowRowDiv = /*#__PURE__*/function (_RowDiv) {
  _inherits(YellowRowDiv, _RowDiv);

  function YellowRowDiv() {
    _classCallCheck(this, YellowRowDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(YellowRowDiv).apply(this, arguments));
  }

  _createClass(YellowRowDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = YellowRowDiv;
      }

      return _row["default"].fromProperties(Class, properties);
    }
  }]);

  return YellowRowDiv;
}(_row["default"]);

_defineProperty(YellowRowDiv, "defaultProperties", {
  className: "yellow"
});

var _default = (0, _easyWithStyle["default"])(YellowRowDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllbGxvdy5qcyJdLCJuYW1lcyI6WyJZZWxsb3dSb3dEaXYiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJSb3dEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFk7Ozs7Ozs7Ozs7O21DQUtrQkMsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUdELFlBQVI7QUFDRDs7QUFFRCxhQUFPSSxnQkFBT0MsY0FBUCxDQUFzQkosS0FBdEIsRUFBNkJDLFVBQTdCLENBQVA7QUFDRDs7OztFQWJ3QkUsZTs7Z0JBQXJCSixZLHVCQUN1QjtBQUN6Qk0sRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCwrQkFBVU4sWUFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBSb3dEaXYgZnJvbSBcIi4uLy4uLy4uL2Rpdi9yb3dcIjtcblxuY2xhc3MgWWVsbG93Um93RGl2IGV4dGVuZHMgUm93RGl2IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ5ZWxsb3dcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gWWVsbG93Um93RGl2O1xuICAgIH1cblxuICAgIHJldHVybiBSb3dEaXYuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShZZWxsb3dSb3dEaXYpYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcblxuYDtcbiJdfQ==