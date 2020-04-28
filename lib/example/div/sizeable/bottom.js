"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _sizeable = _interopRequireDefault(require("../../../div/sizeable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: 24rem;\n  max-height: 40rem;\n\n"]);

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

var BottomSizeableDiv = /*#__PURE__*/function (_SizeableDiv) {
  _inherits(BottomSizeableDiv, _SizeableDiv);

  function BottomSizeableDiv() {
    _classCallCheck(this, BottomSizeableDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(BottomSizeableDiv).apply(this, arguments));
  }

  _createClass(BottomSizeableDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = BottomSizeableDiv;
      }

      return _sizeable["default"].fromProperties(Class, properties);
    }
  }]);

  return BottomSizeableDiv;
}(_sizeable["default"]);

_defineProperty(BottomSizeableDiv, "defaultProperties", {
  className: "bottom"
});

var _default = (0, _easyWithStyle["default"])(BottomSizeableDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS5qcyJdLCJuYW1lcyI6WyJCb3R0b21TaXplYWJsZURpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIlNpemVhYmxlRGl2IiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxpQjs7Ozs7Ozs7Ozs7bUNBS2tCQyxLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQSxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzVCRCxRQUFBQSxVQUFVLEdBQUdELEtBQWIsQ0FENEIsQ0FDUjs7QUFFcEJBLFFBQUFBLEtBQUssR0FBR0QsaUJBQVI7QUFDRDs7QUFFRCxhQUFPSSxxQkFBWUMsY0FBWixDQUEyQkosS0FBM0IsRUFBa0NDLFVBQWxDLENBQVA7QUFDRDs7OztFQWI2QkUsb0I7O2dCQUExQkosaUIsdUJBQ3VCO0FBQ3pCTSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkLCtCQUFVTixpQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vLi4vLi4vZGl2L3NpemVhYmxlXCI7XG5cbmNsYXNzIEJvdHRvbVNpemVhYmxlRGl2IGV4dGVuZHMgU2l6ZWFibGVEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJvdHRvbVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBCb3R0b21TaXplYWJsZURpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gU2l6ZWFibGVEaXYuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShCb3R0b21TaXplYWJsZURpdilgXG5cbiAgaGVpZ2h0OiAyNHJlbTtcbiAgbWF4LWhlaWdodDogNDByZW07XG5cbmA7XG4iXX0=