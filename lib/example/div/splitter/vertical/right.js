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

var RightVerticalSplitterDiv = /*#__PURE__*/function (_VerticalSplitterDiv) {
  _inherits(RightVerticalSplitterDiv, _VerticalSplitterDiv);

  function RightVerticalSplitterDiv() {
    _classCallCheck(this, RightVerticalSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(RightVerticalSplitterDiv).apply(this, arguments));
  }

  _createClass(RightVerticalSplitterDiv, null, [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var before = true;
      Object.assign(properties, {
        before: before
      });
      return _index.VerticalSplitterDiv.fromClass(Class, properties);
    }
  }]);

  return RightVerticalSplitterDiv;
}(_index.VerticalSplitterDiv);

_defineProperty(RightVerticalSplitterDiv, "defaultProperties", {
  className: "right"
});

var _default = (0, _easyWithStyle["default"])(RightVerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpZ2h0LmpzIl0sIm5hbWVzIjpbIlJpZ2h0VmVydGljYWxTcGxpdHRlckRpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsImJlZm9yZSIsIk9iamVjdCIsImFzc2lnbiIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJmcm9tQ2xhc3MiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSx3Qjs7Ozs7Ozs7Ozs7OEJBS2FDLEssRUFBT0MsVSxFQUFZO0FBQ2xDLFVBQU1DLE1BQU0sR0FBRyxJQUFmO0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxVQUFkLEVBQTBCO0FBQ3hCQyxRQUFBQSxNQUFNLEVBQU5BO0FBRHdCLE9BQTFCO0FBSUEsYUFBT0csMkJBQW9CQyxTQUFwQixDQUE4Qk4sS0FBOUIsRUFBcUNDLFVBQXJDLENBQVA7QUFDRDs7OztFQWJvQ0ksMEI7O2dCQUFqQ04sd0IsdUJBQ3VCO0FBQ3pCUSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkLCtCQUFVUix3QkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjtcblxuY2xhc3MgUmlnaHRWZXJ0aWNhbFNwbGl0dGVyRGl2IGV4dGVuZHMgVmVydGljYWxTcGxpdHRlckRpdiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmlnaHRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBiZWZvcmUgPSB0cnVlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBiZWZvcmVcbiAgICB9KTtcblxuICAgIHJldHVybiBWZXJ0aWNhbFNwbGl0dGVyRGl2LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJpZ2h0VmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbmA7XG4iXX0=