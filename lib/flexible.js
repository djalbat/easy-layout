"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require("easy");

var Element = easy.Element;

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
      return Element.fromProperties(FlexibleElement, properties);
    }
  }]);

  return FlexibleElement;
}(Element);

Object.assign(FlexibleElement, {
  tagName: "div",
  defaultProperties: {
    className: "flexible"
  }
});
module.exports = FlexibleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkZsZXhpYmxlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0RmxleGlibGVFbGVtZW50V2lkdGgiLCJnZXRXaWR0aCIsImJpbmQiLCJzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsInNldFdpZHRoIiwiZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0RmxleGlibGVFbGVtZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYWRkRmxleGlibGVFbGVtZW50Q2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGU7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREMsTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRmhDO0FBQUEsVUFFMEQ7QUFDcERHLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUhqQztBQUFBLFVBRzREO0FBQ3RESyxNQUFBQSx3QkFBd0IsR0FBRyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FKakM7QUFBQSxVQUk0RDtBQUN0RE8sTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjUixJQUFkLENBQW1CLElBQW5CLENBTGhDO0FBQUEsVUFLMEQ7QUFDcERTLE1BQUFBLDBCQUEwQixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJWLElBQWpCLENBQXNCLElBQXRCLENBTm5DO0FBQUEsVUFNZ0U7QUFDMURXLE1BQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixPQUFkLEVBQXVCO0FBQ3JDRSxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQURxQztBQUVyQ0csUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFGcUM7QUFHckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSHFDO0FBSXJDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUpxQztBQUtyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFMcUM7QUFNckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFOcUMsT0FBdkIsQ0FQdEI7QUFnQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPcEIsT0FBTyxDQUFDcUIsY0FBUixDQUF1QnBCLGVBQXZCLEVBQXdDbUIsVUFBeEMsQ0FBUDtBQUE2RDs7OztFQXJCckVwQixPOztBQXdCOUJrQixNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLGVBQWQsRUFBK0I7QUFDN0JxQixFQUFBQSxPQUFPLEVBQUUsS0FEb0I7QUFFN0JDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZVLENBQS9CO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBGbGV4aWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMuYWRkQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVtb3ZlRmxleGlibGVFbGVtZW50Q2xhc3MgPSB0aGlzLnJlbW92ZUNsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuICAgICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGgsXG4gICAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICAgICAgICBhZGRGbGV4aWJsZUVsZW1lbnRDbGFzcyxcbiAgICAgICAgICAgIHJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzXG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZsZXhpYmxlRWxlbWVudCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbGV4aWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogXCJkaXZcIixcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiZmxleGlibGVcIlxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbGV4aWJsZUVsZW1lbnQ7XG4iXX0=