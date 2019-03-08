'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'parentContext',
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
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInNpemVhYmxlRWxlbWVudFN0eWxlIiwic3R5bGUiLCJiaW5kIiwiZ2V0U2l6ZWFibGVFbGVtZW50V2lkdGgiLCJnZXRXaWR0aCIsInNldFNpemVhYmxlRWxlbWVudFdpZHRoIiwic2V0V2lkdGgiLCJnZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJhZGRTaXplYWJsZUVsZW1lbnRDbGFzcyIsImFkZENsYXNzIiwicmVtb3ZlU2l6ZWFibGVFbGVtZW50Q2xhc3MiLCJyZW1vdmVDbGFzcyIsInBhcmVudENvbnRleHQiLCJPYmplY3QiLCJhc3NpZ24iLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsZTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxVQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNJQyx1QkFBdUIsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBRDNCO0FBQUEsVUFDa0Q7QUFDNUNDLGdDQUEwQixLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FGaEM7QUFBQSxVQUUwRDtBQUNwREcsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY0osSUFBZCxDQUFtQixJQUFuQixDQUhoQztBQUFBLFVBRzBEO0FBQ3BESyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSmpDO0FBQUEsVUFJNEQ7QUFDdERPLGlDQUEyQixLQUFLQyxTQUFMLENBQWVSLElBQWYsQ0FBb0IsSUFBcEIsQ0FMakM7QUFBQSxVQUs0RDtBQUN0RFMsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQixJQUFuQixDQU5oQztBQUFBLFVBTTBEO0FBQ3BEVyxtQ0FBNkIsS0FBS0MsV0FBTCxDQUFpQlosSUFBakIsQ0FBc0IsSUFBdEIsQ0FQbkM7QUFBQSxVQU9nRTtBQUM3RGEsc0JBQWdCQyxPQUFPQyxNQUFQLENBQWNuQixPQUFkLEVBQXVCO0FBQ3RDRSxrREFEc0M7QUFFdENHLHdEQUZzQztBQUd0Q0Usd0RBSHNDO0FBSXRDRSwwREFKc0M7QUFLdENFLDBEQUxzQztBQU10Q0Usd0RBTnNDO0FBT3RDRTtBQVBzQyxPQUF2QixDQVJuQjs7QUFrQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPdEIsUUFBUXVCLGNBQVIsQ0FBdUJ0QixlQUF2QixFQUF3Q3FCLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUF2QnJFdEIsTzs7QUEwQjlCb0IsT0FBT0MsTUFBUCxDQUFjcEIsZUFBZCxFQUErQjtBQUM3QnVCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUIzQixlQUFqQiIsImZpbGUiOiJzaXplYWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTaXplYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG5cdFx0ICAgICAgc2l6ZWFibGVFbGVtZW50U3R5bGUgPSB0aGlzLnN0eWxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgYWRkU2l6ZWFibGVFbGVtZW50Q2xhc3MgPSB0aGlzLmFkZENsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHJlbW92ZVNpemVhYmxlRWxlbWVudENsYXNzID0gdGhpcy5yZW1vdmVDbGFzcy5iaW5kKHRoaXMpLCAvLy9cblx0XHRcdCAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG5cdFx0XHRcdCAgICBzaXplYWJsZUVsZW1lbnRTdHlsZSxcblx0XHRcdFx0ICAgIGdldFNpemVhYmxlRWxlbWVudFdpZHRoLFxuXHRcdFx0XHQgICAgc2V0U2l6ZWFibGVFbGVtZW50V2lkdGgsXG5cdFx0XHRcdCAgICBnZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQsXG5cdFx0XHRcdCAgICBzZXRTaXplYWJsZUVsZW1lbnRIZWlnaHQsXG5cdFx0XHRcdCAgICBhZGRTaXplYWJsZUVsZW1lbnRDbGFzcyxcblx0XHRcdFx0ICAgIHJlbW92ZVNpemVhYmxlRWxlbWVudENsYXNzXG5cdFx0XHQgICAgfSk7XG5cbiAgICByZXR1cm4gcGFyZW50Q29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaXplYWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnc2l6ZWFibGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcbiJdfQ==