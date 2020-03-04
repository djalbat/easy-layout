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

var SizeableElement = /*#__PURE__*/function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(SizeableElement).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: "parentContext",
    value: function parentContext() {
      var context = this.getContext(),
          sizeableElementStyle = this.style.bind(this),
          ///
      getSizeableElementWidth = this.getWidth.bind(this),
          ///
      setSizeableElementWidth = this.setWidth.bind(this),
          ///
      getSizeableElementHeight = this.getHeight.bind(this),
          ///
      setSizeableElementHeight = this.setHeight.bind(this),
          ///
      addSizeableElementClass = this.addClass.bind(this),
          ///
      removeSizeableElementClass = this.removeClass.bind(this),
          ///
      parentContext = Object.assign(context, {
        sizeableElementStyle: sizeableElementStyle,
        getSizeableElementWidth: getSizeableElementWidth,
        setSizeableElementWidth: setSizeableElementWidth,
        getSizeableElementHeight: getSizeableElementHeight,
        setSizeableElementHeight: setSizeableElementHeight,
        addSizeableElementClass: addSizeableElementClass,
        removeSizeableElementClass: removeSizeableElementClass
      });
      return parentContext;
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Element);

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});
module.exports = SizeableElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlNpemVhYmxlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2l6ZWFibGVFbGVtZW50U3R5bGUiLCJzdHlsZSIsImJpbmQiLCJnZXRTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFdpZHRoIiwic2V0U2l6ZWFibGVFbGVtZW50V2lkdGgiLCJzZXRXaWR0aCIsImdldFNpemVhYmxlRWxlbWVudEhlaWdodCIsImdldEhlaWdodCIsInNldFNpemVhYmxlRWxlbWVudEhlaWdodCIsInNldEhlaWdodCIsImFkZFNpemVhYmxlRWxlbWVudENsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVTaXplYWJsZUVsZW1lbnRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyxlOzs7Ozs7Ozs7OztvQ0FDWTtBQUNkLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsb0JBQW9CLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBRDdCO0FBQUEsVUFDb0Q7QUFDOUNDLE1BQUFBLHVCQUF1QixHQUFHLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUZoQztBQUFBLFVBRTBEO0FBQ3BERyxNQUFBQSx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNKLElBQWQsQ0FBbUIsSUFBbkIsQ0FIaEM7QUFBQSxVQUcwRDtBQUNwREssTUFBQUEsd0JBQXdCLEdBQUcsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSmpDO0FBQUEsVUFJNEQ7QUFDdERPLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZVIsSUFBZixDQUFvQixJQUFwQixDQUxqQztBQUFBLFVBSzREO0FBQ3REUyxNQUFBQSx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNWLElBQWQsQ0FBbUIsSUFBbkIsQ0FOaEM7QUFBQSxVQU0wRDtBQUNwRFcsTUFBQUEsMEJBQTBCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQlosSUFBakIsQ0FBc0IsSUFBdEIsQ0FQbkM7QUFBQSxVQU9nRTtBQUMxRGEsTUFBQUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY25CLE9BQWQsRUFBdUI7QUFDckNFLFFBQUFBLG9CQUFvQixFQUFwQkEsb0JBRHFDO0FBRXJDRyxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQUZxQztBQUdyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFIcUM7QUFJckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSnFDO0FBS3JDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUxxQztBQU1yQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFOcUM7QUFPckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFQcUMsT0FBdkIsQ0FSdEI7QUFrQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPdEIsT0FBTyxDQUFDdUIsY0FBUixDQUF1QnRCLGVBQXZCLEVBQXdDcUIsVUFBeEMsQ0FBUDtBQUE2RDs7OztFQXZCckV0QixPOztBQTBCOUJvQixNQUFNLENBQUNDLE1BQVAsQ0FBY3BCLGVBQWQsRUFBK0I7QUFDN0J1QixFQUFBQSxPQUFPLEVBQUUsS0FEb0I7QUFFN0JDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZVLENBQS9CO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLGVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaXplYWJsZUVsZW1lbnRTdHlsZSA9IHRoaXMuc3R5bGUuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLmdldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNldEhlaWdodC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBhZGRTaXplYWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMuYWRkQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcmVtb3ZlU2l6ZWFibGVFbGVtZW50Q2xhc3MgPSB0aGlzLnJlbW92ZUNsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFN0eWxlLFxuICAgICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50V2lkdGgsXG4gICAgICAgICAgICBzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudEhlaWdodCxcbiAgICAgICAgICAgIHNldFNpemVhYmxlRWxlbWVudEhlaWdodCxcbiAgICAgICAgICAgIGFkZFNpemVhYmxlRWxlbWVudENsYXNzLFxuICAgICAgICAgICAgcmVtb3ZlU2l6ZWFibGVFbGVtZW50Q2xhc3NcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuIl19