"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _index = require("../../../index");

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

var RightSplitterDiv = /*#__PURE__*/function (_SplitterDiv) {
  _inherits(RightSplitterDiv, _SplitterDiv);

  function RightSplitterDiv() {
    _classCallCheck(this, RightSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightSplitterDiv).apply(this, arguments));
  }

  _createClass(RightSplitterDiv, null, [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var before = true,
          vertical = true;
      Object.assign(properties, {
        before: before,
        vertical: vertical
      });
      return _index.SplitterDiv.fromClass(Class, properties);
    }
  }]);

  return RightSplitterDiv;
}(_index.SplitterDiv);

_defineProperty(RightSplitterDiv, "defaultProperties", {
  className: "right"
});

var _default = (0, _easyWithStyle["default"])(RightSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0LmpzIl0sIm5hbWVzIjpbIlJpZ2h0U3BsaXR0ZXJEaXYiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJiZWZvcmUiLCJ2ZXJ0aWNhbCIsIk9iamVjdCIsImFzc2lnbiIsIlNwbGl0dGVyRGl2IiwiZnJvbUNsYXNzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZ0I7Ozs7Ozs7Ozs7OzhCQUthQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUFBLFVBQ01DLFFBQVEsR0FBRyxJQURqQjtBQUdBQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osVUFBZCxFQUEwQjtBQUN4QkMsUUFBQUEsTUFBTSxFQUFOQSxNQUR3QjtBQUV4QkMsUUFBQUEsUUFBUSxFQUFSQTtBQUZ3QixPQUExQjtBQUtBLGFBQU9HLG1CQUFZQyxTQUFaLENBQXNCUCxLQUF0QixFQUE2QkMsVUFBN0IsQ0FBUDtBQUNEOzs7O0VBZjRCSyxrQjs7Z0JBQXpCUCxnQix1QkFDdUI7QUFDekJTLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBaUJkLCtCQUFVVCxnQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFNwbGl0dGVyRGl2IH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7XG5cbmNsYXNzIFJpZ2h0U3BsaXR0ZXJEaXYgZXh0ZW5kcyBTcGxpdHRlckRpdiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmlnaHRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBiZWZvcmUgPSB0cnVlLFxuICAgICAgICAgIHZlcnRpY2FsID0gdHJ1ZTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgYmVmb3JlLFxuICAgICAgdmVydGljYWxcbiAgICB9KTtcblxuICAgIHJldHVybiBTcGxpdHRlckRpdi5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSaWdodFNwbGl0dGVyRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuYDtcbiJdfQ==