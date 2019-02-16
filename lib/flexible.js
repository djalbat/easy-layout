'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var FlexibleElement = function (_Element) {
  _inherits(FlexibleElement, _Element);

  function FlexibleElement() {
    _classCallCheck(this, FlexibleElement);

    return _possibleConstructorReturn(this, (FlexibleElement.__proto__ || Object.getPrototypeOf(FlexibleElement)).apply(this, arguments));
  }

  _createClass(FlexibleElement, [{
    key: 'parentContext',
    value: function parentContext() {
      var getFlexibleElementWidth = this.getWidth.bind(this),
          ///
      setFlexibleElementWidth = this.setWidth.bind(this),
          ///
      getFlexibleElementHeight = this.getHeight.bind(this),
          ///
      setFlexibleElementHeight = this.setHeight.bind(this),
          ///
      addFlexibleElementClass = this.addClass.bind(this),
          ///
      removeFlexibleElementClass = this.removeClass.bind(this); ///

      return {
        getFlexibleElementWidth: getFlexibleElementWidth,
        setFlexibleElementWidth: setFlexibleElementWidth,
        getFlexibleElementHeight: getFlexibleElementHeight,
        setFlexibleElementHeight: setFlexibleElementHeight,
        addFlexibleElementClass: addFlexibleElementClass,
        removeFlexibleElementClass: removeFlexibleElementClass
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(FlexibleElement, properties);
    }
  }]);

  return FlexibleElement;
}(Element);

Object.assign(FlexibleElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'flexible'
  }
});

module.exports = FlexibleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbGV4aWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJGbGV4aWJsZUVsZW1lbnQiLCJnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsImdldFdpZHRoIiwiYmluZCIsInNldEZsZXhpYmxlRWxlbWVudFdpZHRoIiwic2V0V2lkdGgiLCJnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlRmxleGlibGVFbGVtZW50Q2xhc3MiLCJyZW1vdmVDbGFzcyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyxlOzs7Ozs7Ozs7OztvQ0FDWTtBQUNkLFVBQU1DLDBCQUEwQixLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEM7QUFBQSxVQUEwRDtBQUNwREMsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQURoQztBQUFBLFVBQzBEO0FBQ3BERyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBRmpDO0FBQUEsVUFFNEQ7QUFDdERLLGlDQUEyQixLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FIakM7QUFBQSxVQUc0RDtBQUN0RE8sZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY1IsSUFBZCxDQUFtQixJQUFuQixDQUpoQztBQUFBLFVBSTBEO0FBQ3BEUyxtQ0FBNkIsS0FBS0MsV0FBTCxDQUFpQlYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FMbkMsQ0FEYyxDQU1rRDs7QUFFaEUsYUFBUTtBQUNORix3REFETTtBQUVORyx3REFGTTtBQUdORSwwREFITTtBQUlORSwwREFKTTtBQUtORSx3REFMTTtBQU1ORTtBQU5NLE9BQVI7QUFRRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT2YsUUFBUWdCLGNBQVIsQ0FBdUJmLGVBQXZCLEVBQXdDYyxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBbkJyRWYsTzs7QUFzQjlCaUIsT0FBT0MsTUFBUCxDQUFjakIsZUFBZCxFQUErQjtBQUM3QmtCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ0QixlQUFqQiIsImZpbGUiOiJmbGV4aWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBGbGV4aWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGFkZEZsZXhpYmxlRWxlbWVudENsYXNzID0gdGhpcy5hZGRDbGFzcy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICByZW1vdmVGbGV4aWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGgsXG4gICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICBhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyxcbiAgICAgIHJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhGbGV4aWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxleGlibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2ZsZXhpYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbGV4aWJsZUVsZW1lbnQ7XG4iXX0=