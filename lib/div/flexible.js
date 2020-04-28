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

var FlexibleDiv = /*#__PURE__*/function (_Element) {
  _inherits(FlexibleDiv, _Element);

  function FlexibleDiv() {
    _classCallCheck(this, FlexibleDiv);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlexibleDiv).apply(this, arguments));
  }

  _createClass(FlexibleDiv, [{
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          getFlexibleElementWidth = this.getWidth.bind(this),
          ///
      setFlexibleElementWidth = this.setWidth.bind(this),
          ///
      getFlexibleElementHeight = this.getHeight.bind(this),
          ///
      setFlexibleElementHeight = this.setHeight.bind(this),
          ///
      addFlexibleElementClass = this.addClass.bind(this),
          ///
      removeFlexibleElementClass = this.removeClass.bind(this),
          ///
      parentContext = Object.assign(context, {
        getFlexibleElementWidth: getFlexibleElementWidth,
        setFlexibleElementWidth: setFlexibleElementWidth,
        getFlexibleElementHeight: getFlexibleElementHeight,
        setFlexibleElementHeight: setFlexibleElementHeight,
        addFlexibleElementClass: addFlexibleElementClass,
        removeFlexibleElementClass: removeFlexibleElementClass
      });
      return parentContext;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = FlexibleDiv;
      }

      return _easy.Element.fromProperties(Class, properties);
    }
  }]);

  return FlexibleDiv;
}(_easy.Element);

exports["default"] = FlexibleDiv;

_defineProperty(FlexibleDiv, "tagName", "div");

_defineProperty(FlexibleDiv, "defaultProperties", {
  className: "flexible"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbIkZsZXhpYmxlRGl2IiwiY29udGV4dCIsImdldENvbnRleHQiLCJnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsImdldFdpZHRoIiwiYmluZCIsInNldEZsZXhpYmxlRWxlbWVudFdpZHRoIiwic2V0V2lkdGgiLCJnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlRmxleGlibGVFbGVtZW50Q2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFc7Ozs7Ozs7Ozs7O29DQUNIO0FBQ2QsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREMsTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRmhDO0FBQUEsVUFFMEQ7QUFDcERHLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUhqQztBQUFBLFVBRzREO0FBQ3RESyxNQUFBQSx3QkFBd0IsR0FBRyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FKakM7QUFBQSxVQUk0RDtBQUN0RE8sTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjUixJQUFkLENBQW1CLElBQW5CLENBTGhDO0FBQUEsVUFLMEQ7QUFDcERTLE1BQUFBLDBCQUEwQixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJWLElBQWpCLENBQXNCLElBQXRCLENBTm5DO0FBQUEsVUFNZ0U7QUFDMURXLE1BQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixPQUFkLEVBQXVCO0FBQ3JDRSxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQURxQztBQUVyQ0csUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFGcUM7QUFHckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSHFDO0FBSXJDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUpxQztBQUtyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFMcUM7QUFNckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFOcUMsT0FBdkIsQ0FQdEI7QUFnQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBUXFCRyxLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQSxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzVCRCxRQUFBQSxVQUFVLEdBQUdELEtBQWIsQ0FENEIsQ0FDUjs7QUFFcEJBLFFBQUFBLEtBQUssR0FBR25CLFdBQVI7QUFDRDs7QUFFRCxhQUFPc0IsY0FBUUMsY0FBUixDQUF1QkosS0FBdkIsRUFBOEJDLFVBQTlCLENBQVA7QUFDRDs7OztFQW5Dc0NFLGE7Ozs7Z0JBQXBCdEIsVyxhQXFCRixLOztnQkFyQkVBLFcsdUJBdUJRO0FBQ3pCd0IsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxleGlibGVEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMuYWRkQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVtb3ZlRmxleGlibGVFbGVtZW50Q2xhc3MgPSB0aGlzLnJlbW92ZUNsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuICAgICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGgsXG4gICAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICAgICAgICBhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyxcbiAgICAgICAgICAgIHJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImZsZXhpYmxlXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IEZsZXhpYmxlRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuIl19