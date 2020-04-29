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

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LeftSplitterDiv = /*#__PURE__*/function (_SplitterDiv) {
  _inherits(LeftSplitterDiv, _SplitterDiv);

  function LeftSplitterDiv() {
    _classCallCheck(this, LeftSplitterDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(LeftSplitterDiv).apply(this, arguments));
  }

  _createClass(LeftSplitterDiv, [{
    key: "initialise",
    value: function initialise(properties) {
      var bottomLeftDiv = properties.bottomLeftDiv;
      this.onDrag(function (height) {
        return bottomLeftDiv.setHeight(height);
      });

      _get(_getPrototypeOf(LeftSplitterDiv.prototype), "initialise", this).call(this, properties);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var before = true,
          horizontal = true;
      Object.assign(properties, {
        before: before,
        horizontal: horizontal
      });

      var leftSplitterDiv = _index.SplitterDiv.fromClass(Class, properties);

      leftSplitterDiv.initialise(properties);
      return leftSplitterDiv;
    }
  }]);

  return LeftSplitterDiv;
}(_index.SplitterDiv);

_defineProperty(LeftSplitterDiv, "defaultProperties", {
  className: "main"
});

var _default = (0, _easyWithStyle["default"])(LeftSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTGVmdFNwbGl0dGVyRGl2IiwicHJvcGVydGllcyIsImJvdHRvbUxlZnREaXYiLCJvbkRyYWciLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJDbGFzcyIsImJlZm9yZSIsImhvcml6b250YWwiLCJPYmplY3QiLCJhc3NpZ24iLCJsZWZ0U3BsaXR0ZXJEaXYiLCJTcGxpdHRlckRpdiIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsZTs7Ozs7Ozs7Ozs7K0JBQ09DLFUsRUFBWTtBQUFBLFVBQ2JDLGFBRGEsR0FDS0QsVUFETCxDQUNiQyxhQURhO0FBR3JCLFdBQUtDLE1BQUwsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsZUFBWUYsYUFBYSxDQUFDRyxTQUFkLENBQXdCRCxNQUF4QixDQUFaO0FBQUEsT0FBWjs7QUFFQSxzRkFBaUJILFVBQWpCO0FBQ0Q7Ozs4QkFNZ0JLLEssRUFBT0wsVSxFQUFZO0FBQ2xDLFVBQU1NLE1BQU0sR0FBRyxJQUFmO0FBQUEsVUFDTUMsVUFBVSxHQUFHLElBRG5CO0FBR0FDLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjVCxVQUFkLEVBQTBCO0FBQ3hCTSxRQUFBQSxNQUFNLEVBQU5BLE1BRHdCO0FBRXhCQyxRQUFBQSxVQUFVLEVBQVZBO0FBRndCLE9BQTFCOztBQUtBLFVBQU1HLGVBQWUsR0FBR0MsbUJBQVlDLFNBQVosQ0FBc0JQLEtBQXRCLEVBQTZCTCxVQUE3QixDQUF4Qjs7QUFFQVUsTUFBQUEsZUFBZSxDQUFDRyxVQUFoQixDQUEyQmIsVUFBM0I7QUFFQSxhQUFPVSxlQUFQO0FBQ0Q7Ozs7RUEzQjJCQyxrQjs7Z0JBQXhCWixlLHVCQVN1QjtBQUN6QmUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFxQmQsK0JBQVVmLGVBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBTcGxpdHRlckRpdiB9IGZyb20gXCIuLi8uLi8uLi9pbmRleFwiO1xuXG5jbGFzcyBMZWZ0U3BsaXR0ZXJEaXYgZXh0ZW5kcyBTcGxpdHRlckRpdiB7XG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYm90dG9tTGVmdERpdiB9ID0gcHJvcGVydGllcztcblxuICAgIHRoaXMub25EcmFnKChoZWlnaHQpID0+IGJvdHRvbUxlZnREaXYuc2V0SGVpZ2h0KGhlaWdodCkpO1xuXG4gICAgc3VwZXIuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWFpblwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGJlZm9yZSA9IHRydWUsXG4gICAgICAgICAgaG9yaXpvbnRhbCA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHtcbiAgICAgIGJlZm9yZSxcbiAgICAgIGhvcml6b250YWxcbiAgICB9KTtcblxuICAgIGNvbnN0IGxlZnRTcGxpdHRlckRpdiA9IFNwbGl0dGVyRGl2LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBsZWZ0U3BsaXR0ZXJEaXYuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBsZWZ0U3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKExlZnRTcGxpdHRlckRpdilgXG5cbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cbmA7XG4iXX0=