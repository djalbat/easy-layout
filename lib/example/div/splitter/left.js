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

///
var LeftSplitterDiv = /*#__PURE__*/function (_SplitterDiv) {
  _inherits(LeftSplitterDiv, _SplitterDiv);

  function LeftSplitterDiv() {
    _classCallCheck(this, LeftSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftSplitterDiv).apply(this, arguments));
  }

  _createClass(LeftSplitterDiv, null, [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var after = true,
          vertical = true;
      Object.assign(properties, {
        after: after,
        vertical: vertical
      });
      return _index.SplitterDiv.fromClass(Class, properties);
    }
  }]);

  return LeftSplitterDiv;
}(_index.SplitterDiv);

_defineProperty(LeftSplitterDiv, "defaultProperties", {
  className: "left"
});

var _default = (0, _easyWithStyle["default"])(LeftSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQuanMiXSwibmFtZXMiOlsiTGVmdFNwbGl0dGVyRGl2IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYWZ0ZXIiLCJ2ZXJ0aWNhbCIsIk9iamVjdCIsImFzc2lnbiIsIlNwbGl0dGVyRGl2IiwiZnJvbUNsYXNzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7SUFFeENBLGU7Ozs7Ozs7Ozs7OzhCQUthQyxLLEVBQU9DLFUsRUFBWTtBQUNsQyxVQUFNQyxLQUFLLEdBQUcsSUFBZDtBQUFBLFVBQ01DLFFBQVEsR0FBRyxJQURqQjtBQUdBQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0osVUFBZCxFQUEwQjtBQUN4QkMsUUFBQUEsS0FBSyxFQUFMQSxLQUR3QjtBQUV4QkMsUUFBQUEsUUFBUSxFQUFSQTtBQUZ3QixPQUExQjtBQUtBLGFBQU9HLG1CQUFZQyxTQUFaLENBQXNCUCxLQUF0QixFQUE2QkMsVUFBN0IsQ0FBUDtBQUNEOzs7O0VBZjJCSyxrQjs7Z0JBQXhCUCxlLHVCQUN1QjtBQUN6QlMsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFpQmQsK0JBQVVULGVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBTcGxpdHRlckRpdiB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuY2xhc3MgTGVmdFNwbGl0dGVyRGl2IGV4dGVuZHMgU3BsaXR0ZXJEaXYge1xuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxlZnRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBhZnRlciA9IHRydWUsXG4gICAgICAgICAgdmVydGljYWwgPSB0cnVlO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBhZnRlcixcbiAgICAgIHZlcnRpY2FsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gU3BsaXR0ZXJEaXYuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVmdFNwbGl0dGVyRGl2KWBcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuYDtcbiJdfQ==