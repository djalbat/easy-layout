'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

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
  tagName: 'div',
  defaultProperties: {
    className: 'flexible'
  }
});
module.exports = FlexibleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsZXhpYmxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkZsZXhpYmxlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2V0RmxleGlibGVFbGVtZW50V2lkdGgiLCJnZXRXaWR0aCIsImJpbmQiLCJzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsInNldFdpZHRoIiwiZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0RmxleGlibGVFbGVtZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYWRkRmxleGlibGVFbGVtZW50Q2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGU7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsVUFBTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREMsTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRmhDO0FBQUEsVUFFMEQ7QUFDcERHLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUhqQztBQUFBLFVBRzREO0FBQ3RESyxNQUFBQSx3QkFBd0IsR0FBRyxLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FKakM7QUFBQSxVQUk0RDtBQUN0RE8sTUFBQUEsdUJBQXVCLEdBQUcsS0FBS0MsUUFBTCxDQUFjUixJQUFkLENBQW1CLElBQW5CLENBTGhDO0FBQUEsVUFLMEQ7QUFDcERTLE1BQUFBLDBCQUEwQixHQUFHLEtBQUtDLFdBQUwsQ0FBaUJWLElBQWpCLENBQXNCLElBQXRCLENBTm5DO0FBQUEsVUFNZ0U7QUFDMURXLE1BQUFBLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWNqQixPQUFkLEVBQXVCO0FBQ3JDRSxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQURxQztBQUVyQ0csUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFGcUM7QUFHckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSHFDO0FBSXJDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUpxQztBQUtyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFMcUM7QUFNckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFOcUMsT0FBdkIsQ0FQdEI7QUFnQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPcEIsT0FBTyxDQUFDcUIsY0FBUixDQUF1QnBCLGVBQXZCLEVBQXdDbUIsVUFBeEMsQ0FBUDtBQUE2RDs7OztFQXJCckVwQixPOztBQXdCOUJrQixNQUFNLENBQUNDLE1BQVAsQ0FBY2xCLGVBQWQsRUFBK0I7QUFDN0JxQixFQUFBQSxPQUFPLEVBQUUsS0FEb0I7QUFFN0JDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZVLENBQS9CO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEZsZXhpYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGFkZEZsZXhpYmxlRWxlbWVudENsYXNzID0gdGhpcy5hZGRDbGFzcy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICByZW1vdmVGbGV4aWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50V2lkdGgsXG4gICAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgICAgICAgIGdldEZsZXhpYmxlRWxlbWVudEhlaWdodCxcbiAgICAgICAgICAgIHNldEZsZXhpYmxlRWxlbWVudEhlaWdodCxcbiAgICAgICAgICAgIGFkZEZsZXhpYmxlRWxlbWVudENsYXNzLFxuICAgICAgICAgICAgcmVtb3ZlRmxleGlibGVFbGVtZW50Q2xhc3NcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRmxleGlibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsZXhpYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdmbGV4aWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxleGlibGVFbGVtZW50O1xuIl19