"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

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

var SizeableDiv = /*#__PURE__*/function (_Element) {
  _inherits(SizeableDiv, _Element);

  function SizeableDiv() {
    _classCallCheck(this, SizeableDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(SizeableDiv).apply(this, arguments));
  }

  _createClass(SizeableDiv, null, [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = SizeableDiv;
      }

      return _easy.Element.fromProperties(Class, properties);
    }
  }]);

  return SizeableDiv;
}(_easy.Element);

exports["default"] = SizeableDiv;

_defineProperty(SizeableDiv, "tagName", "div");

_defineProperty(SizeableDiv, "defaultProperties", {
  className: "sizeable"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIlNpemVhYmxlRGl2IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwiRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7OzttQ0FPR0MsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUdELFdBQVI7QUFDRDs7QUFFRCxhQUFPSSxjQUFRQyxjQUFSLENBQXVCSixLQUF2QixFQUE4QkMsVUFBOUIsQ0FBUDtBQUNEOzs7O0VBZnNDRSxhOzs7O2dCQUFwQkosVyxhQUNGLEs7O2dCQURFQSxXLHVCQUdRO0FBQ3pCTSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaXplYWJsZURpdiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzaXplYWJsZVwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBTaXplYWJsZURpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cbiJdfQ==