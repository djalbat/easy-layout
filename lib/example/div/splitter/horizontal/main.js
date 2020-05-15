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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

///
var MainHorizontalSplitterDiv = /*#__PURE__*/function (_HorizontalSplitterDi) {
  _inherits(MainHorizontalSplitterDiv, _HorizontalSplitterDi);

  function MainHorizontalSplitterDiv() {
    _classCallCheck(this, MainHorizontalSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainHorizontalSplitterDiv).apply(this, arguments));
  }

  _createClass(MainHorizontalSplitterDiv, [{
    key: "initialise",
    value: function initialise(properties) {
      var bottomLeftDiv = properties.bottomLeftDiv;
      this.onDrag(function (height) {
        return bottomLeftDiv.setHeight(height);
      });

      _get(_getPrototypeOf(MainHorizontalSplitterDiv.prototype), "initialise", this).call(this, properties);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var leftHorizontalSplitterDiv = _index.HorizontalSplitterDiv.fromClass(Class, properties);

      leftHorizontalSplitterDiv.initialise(properties);
      return leftHorizontalSplitterDiv;
    }
  }]);

  return MainHorizontalSplitterDiv;
}(_index.HorizontalSplitterDiv);

_defineProperty(MainHorizontalSplitterDiv, "defaultProperties", {
  className: "main"
});

var _default = (0, _easyWithStyle["default"])(MainHorizontalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiIsInByb3BlcnRpZXMiLCJib3R0b21MZWZ0RGl2Iiwib25EcmFnIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQ2xhc3MiLCJsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtJQUV0REEseUI7Ozs7Ozs7Ozs7OytCQUNPQyxVLEVBQVk7QUFBQSxVQUNiQyxhQURhLEdBQ0tELFVBREwsQ0FDYkMsYUFEYTtBQUdyQixXQUFLQyxNQUFMLENBQVksVUFBQ0MsTUFBRDtBQUFBLGVBQVlGLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QkQsTUFBeEIsQ0FBWjtBQUFBLE9BQVo7O0FBRUEsZ0dBQWlCSCxVQUFqQjtBQUNEOzs7OEJBTWdCSyxLLEVBQU9MLFUsRUFBWTtBQUNsQyxVQUFNTSx5QkFBeUIsR0FBR0MsNkJBQXNCQyxTQUF0QixDQUFnQ0gsS0FBaEMsRUFBdUNMLFVBQXZDLENBQWxDOztBQUVBTSxNQUFBQSx5QkFBeUIsQ0FBQ0csVUFBMUIsQ0FBcUNULFVBQXJDO0FBRUEsYUFBT00seUJBQVA7QUFDRDs7OztFQW5CcUNDLDRCOztnQkFBbENSLHlCLHVCQVN1QjtBQUN6QlcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVVgseUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jbGFzcyBNYWluSG9yaXpvbnRhbFNwbGl0dGVyRGl2IGV4dGVuZHMgSG9yaXpvbnRhbFNwbGl0dGVyRGl2IHtcbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBib3R0b21MZWZ0RGl2IH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5vbkRyYWcoKGhlaWdodCkgPT4gYm90dG9tTGVmdERpdi5zZXRIZWlnaHQoaGVpZ2h0KSk7XG5cbiAgICBzdXBlci5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtYWluXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgbGVmdEhvcml6b250YWxTcGxpdHRlckRpdiA9IEhvcml6b250YWxTcGxpdHRlckRpdi5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgbGVmdEhvcml6b250YWxTcGxpdHRlckRpdi5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRIb3Jpem9udGFsU3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYpYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG5gO1xuIl19