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
var LeftHorizontalSplitterDiv = /*#__PURE__*/function (_HorizontalSplitterDi) {
  _inherits(LeftHorizontalSplitterDiv, _HorizontalSplitterDi);

  function LeftHorizontalSplitterDiv() {
    _classCallCheck(this, LeftHorizontalSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftHorizontalSplitterDiv).apply(this, arguments));
  }

  _createClass(LeftHorizontalSplitterDiv, [{
    key: "initialise",
    value: function initialise(properties) {
      var bottomLeftDiv = properties.bottomLeftDiv;
      this.onDrag(function (height) {
        return bottomLeftDiv.setHeight(height);
      });

      _get(_getPrototypeOf(LeftHorizontalSplitterDiv.prototype), "initialise", this).call(this, properties);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var leftHorizontalSplitterDiv = _index.HorizontalSplitterDiv.fromClass(Class, properties);

      leftHorizontalSplitterDiv.initialise(properties);
      return leftHorizontalSplitterDiv;
    }
  }]);

  return LeftHorizontalSplitterDiv;
}(_index.HorizontalSplitterDiv);

_defineProperty(LeftHorizontalSplitterDiv, "defaultProperties", {
  className: "main"
});

var _default = (0, _easyWithStyle["default"])(LeftHorizontalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTGVmdEhvcml6b250YWxTcGxpdHRlckRpdiIsInByb3BlcnRpZXMiLCJib3R0b21MZWZ0RGl2Iiwib25EcmFnIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQ2xhc3MiLCJsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtJQUVyREEseUI7Ozs7Ozs7Ozs7OytCQUNPQyxVLEVBQVk7QUFBQSxVQUNiQyxhQURhLEdBQ0tELFVBREwsQ0FDYkMsYUFEYTtBQUdyQixXQUFLQyxNQUFMLENBQVksVUFBQ0MsTUFBRDtBQUFBLGVBQVlGLGFBQWEsQ0FBQ0csU0FBZCxDQUF3QkQsTUFBeEIsQ0FBWjtBQUFBLE9BQVo7O0FBRUEsZ0dBQWlCSCxVQUFqQjtBQUNEOzs7OEJBTWdCSyxLLEVBQU9MLFUsRUFBWTtBQUNsQyxVQUFNTSx5QkFBeUIsR0FBR0MsNkJBQXNCQyxTQUF0QixDQUFnQ0gsS0FBaEMsRUFBdUNMLFVBQXZDLENBQWxDOztBQUVBTSxNQUFBQSx5QkFBeUIsQ0FBQ0csVUFBMUIsQ0FBcUNULFVBQXJDO0FBRUEsYUFBT00seUJBQVA7QUFDRDs7OztFQW5CcUNDLDRCOztnQkFBbENSLHlCLHVCQVN1QjtBQUN6QlcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCwrQkFBVVgseUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNsYXNzIExlZnRIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYge1xuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGJvdHRvbUxlZnREaXYgfSA9IHByb3BlcnRpZXM7XG5cbiAgICB0aGlzLm9uRHJhZygoaGVpZ2h0KSA9PiBib3R0b21MZWZ0RGl2LnNldEhlaWdodChoZWlnaHQpKTtcblxuICAgIHN1cGVyLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1haW5cIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gSG9yaXpvbnRhbFNwbGl0dGVyRGl2LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gbGVmdEhvcml6b250YWxTcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoTGVmdEhvcml6b250YWxTcGxpdHRlckRpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbmA7XG4iXX0=