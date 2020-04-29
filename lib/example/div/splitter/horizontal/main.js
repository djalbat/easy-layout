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
      var before = true;
      Object.assign(properties, {
        before: before
      });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiIsInByb3BlcnRpZXMiLCJib3R0b21MZWZ0RGl2Iiwib25EcmFnIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQ2xhc3MiLCJiZWZvcmUiLCJPYmplY3QiLCJhc3NpZ24iLCJsZWZ0SG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSx5Qjs7Ozs7Ozs7Ozs7K0JBQ09DLFUsRUFBWTtBQUFBLFVBQ2JDLGFBRGEsR0FDS0QsVUFETCxDQUNiQyxhQURhO0FBR3JCLFdBQUtDLE1BQUwsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsZUFBWUYsYUFBYSxDQUFDRyxTQUFkLENBQXdCRCxNQUF4QixDQUFaO0FBQUEsT0FBWjs7QUFFQSxnR0FBaUJILFVBQWpCO0FBQ0Q7Ozs4QkFNZ0JLLEssRUFBT0wsVSxFQUFZO0FBQ2xDLFVBQU1NLE1BQU0sR0FBRyxJQUFmO0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixVQUFkLEVBQTBCO0FBQ3hCTSxRQUFBQSxNQUFNLEVBQU5BO0FBRHdCLE9BQTFCOztBQUlBLFVBQU1HLHlCQUF5QixHQUFHQyw2QkFBc0JDLFNBQXRCLENBQWdDTixLQUFoQyxFQUF1Q0wsVUFBdkMsQ0FBbEM7O0FBRUFTLE1BQUFBLHlCQUF5QixDQUFDRyxVQUExQixDQUFxQ1osVUFBckM7QUFFQSxhQUFPUyx5QkFBUDtBQUNEOzs7O0VBekJxQ0MsNEI7O2dCQUFsQ1gseUIsdUJBU3VCO0FBQ3pCYyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQW1CZCwrQkFBVWQseUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiLi4vLi4vLi4vLi4vaW5kZXhcIjtcblxuY2xhc3MgTWFpbkhvcml6b250YWxTcGxpdHRlckRpdiBleHRlbmRzIEhvcml6b250YWxTcGxpdHRlckRpdiB7XG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYm90dG9tTGVmdERpdiB9ID0gcHJvcGVydGllcztcblxuICAgIHRoaXMub25EcmFnKChoZWlnaHQpID0+IGJvdHRvbUxlZnREaXYuc2V0SGVpZ2h0KGhlaWdodCkpO1xuXG4gICAgc3VwZXIuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFpblwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGJlZm9yZVxuICAgIH0pO1xuXG4gICAgY29uc3QgbGVmdEhvcml6b250YWxTcGxpdHRlckRpdiA9IEhvcml6b250YWxTcGxpdHRlckRpdi5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgbGVmdEhvcml6b250YWxTcGxpdHRlckRpdi5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGxlZnRIb3Jpem9udGFsU3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKE1haW5Ib3Jpem9udGFsU3BsaXR0ZXJEaXYpYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG5gO1xuIl19