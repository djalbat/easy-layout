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

var FlexibleElement = /*#__PURE__*/function (_Element) {
  _inherits(FlexibleElement, _Element);

  function FlexibleElement() {
    _classCallCheck(this, FlexibleElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlexibleElement).apply(this, arguments));
  }

  _createClass(FlexibleElement, [{
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
    value: function fromProperties(properties) {
      return _easy.Element.fromProperties(FlexibleElement, properties);
    }
  }]);

  return FlexibleElement;
}(_easy.Element);

exports["default"] = FlexibleElement;
Object.assign(FlexibleElement, {
  tagName: "div",
  defaultProperties: {
    className: "flexible"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbIkZsZXhpYmxlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0RmxleGlibGVFbGVtZW50V2lkdGgiLCJnZXRXaWR0aCIsImJpbmQiLCJzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsInNldFdpZHRoIiwiZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0RmxleGlibGVFbGVtZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYWRkRmxleGlibGVFbGVtZW50Q2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcGVydGllcyIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGU7Ozs7Ozs7Ozs7O29DQUNIO0FBQ2QsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREMsTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRmhDO0FBQUEsVUFFMEQ7QUFDcERHLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUhqQztBQUFBLFVBRzREO0FBQ3RESyxNQUFBQSx3QkFBd0IsR0FBRyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FKakM7QUFBQSxVQUk0RDtBQUN0RE8sTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjUixJQUFkLENBQW1CLElBQW5CLENBTGhDO0FBQUEsVUFLMEQ7QUFDcERTLE1BQUFBLDBCQUEwQixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJWLElBQWpCLENBQXNCLElBQXRCLENBTm5DO0FBQUEsVUFNZ0U7QUFDMURXLE1BQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixPQUFkLEVBQXVCO0FBQ3JDRSxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQURxQztBQUVyQ0csUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFGcUM7QUFHckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSHFDO0FBSXJDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUpxQztBQUtyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFMcUM7QUFNckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFOcUMsT0FBdkIsQ0FQdEI7QUFnQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPQyxjQUFRQyxjQUFSLENBQXVCckIsZUFBdkIsRUFBd0NtQixVQUF4QyxDQUFQO0FBQTZEOzs7O0VBckJ0REMsYTs7O0FBd0I3Q0gsTUFBTSxDQUFDQyxNQUFQLENBQWNsQixlQUFkLEVBQStCO0FBQzdCc0IsRUFBQUEsT0FBTyxFQUFFLEtBRG9CO0FBRTdCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGVSxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxleGlibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgYWRkRmxleGlibGVFbGVtZW50Q2xhc3MgPSB0aGlzLmFkZENsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzID0gdGhpcy5yZW1vdmVDbGFzcy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG4gICAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuICAgICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgICAgICAgYWRkRmxleGlibGVFbGVtZW50Q2xhc3MsXG4gICAgICAgICAgICByZW1vdmVGbGV4aWJsZUVsZW1lbnRDbGFzc1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhGbGV4aWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxleGlibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6IFwiZGl2XCIsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcImZsZXhpYmxlXCJcbiAgfVxufSk7XG4iXX0=