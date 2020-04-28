"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-grow: 1;\n\n"]);

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

var ColumnDiv = /*#__PURE__*/function (_Element) {
  _inherits(ColumnDiv, _Element);

  function ColumnDiv() {
    _classCallCheck(this, ColumnDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnDiv).apply(this, arguments));
  }

  _createClass(ColumnDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = ColumnDiv;
      }

      return _easy.Element.fromProperties(Class, properties);
    }
  }]);

  return ColumnDiv;
}(_easy.Element);

_defineProperty(ColumnDiv, "tagName", "div");

_defineProperty(ColumnDiv, "defaultProperties", {
  className: "column"
});

var _default = (0, _easyWithStyle["default"])(ColumnDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi5qcyJdLCJuYW1lcyI6WyJDb2x1bW5EaXYiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxTOzs7Ozs7Ozs7OzttQ0FPa0JDLEssRUFBT0MsVSxFQUFZO0FBQ3ZDLFVBQUlBLFVBQVUsS0FBS0MsU0FBbkIsRUFBOEI7QUFDNUJELFFBQUFBLFVBQVUsR0FBR0QsS0FBYixDQUQ0QixDQUNSOztBQUVwQkEsUUFBQUEsS0FBSyxHQUFHRCxTQUFSO0FBQ0Q7O0FBRUQsYUFBT0ksY0FBUUMsY0FBUixDQUF1QkosS0FBdkIsRUFBOEJDLFVBQTlCLENBQVA7QUFDRDs7OztFQWZxQkUsYTs7Z0JBQWxCSixTLGFBQ2EsSzs7Z0JBRGJBLFMsdUJBR3VCO0FBQ3pCTSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkLCtCQUFVTixTQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIENvbHVtbkRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb2x1bW5cIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gQ29sdW1uRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG5cbmA7XG4iXX0=