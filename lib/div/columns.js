"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"]);

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

var ColumnsDiv = /*#__PURE__*/function (_Element) {
  _inherits(ColumnsDiv, _Element);

  function ColumnsDiv() {
    _classCallCheck(this, ColumnsDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColumnsDiv).apply(this, arguments));
  }

  _createClass(ColumnsDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = ColumnsDiv;
      }

      return _easy.Element.fromProperties(Class, properties);
    }
  }]);

  return ColumnsDiv;
}(_easy.Element);

_defineProperty(ColumnsDiv, "tagName", "div");

_defineProperty(ColumnsDiv, "defaultProperties", {
  className: "columns"
});

var _default = (0, _easyWithStyle["default"])(ColumnsDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbnMuanMiXSwibmFtZXMiOlsiQ29sdW1uc0RpdiIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7O21DQU9rQkMsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUdELFVBQVI7QUFDRDs7QUFFRCxhQUFPSSxjQUFRQyxjQUFSLENBQXVCSixLQUF2QixFQUE4QkMsVUFBOUIsQ0FBUDtBQUNEOzs7O0VBZnNCRSxhOztnQkFBbkJKLFUsYUFDYSxLOztnQkFEYkEsVSx1QkFHdUI7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVOLFVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuY2xhc3MgQ29sdW1uc0RpdiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjb2x1bW5zXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IENvbHVtbnNEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb2x1bW5zRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbmA7XG4iXX0=