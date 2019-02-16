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
      var sizeableElementStyle = this.style.bind(this),
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
      removeSizeableElementClass = this.removeClass.bind(this); ///

      return {
        sizeableElementStyle: sizeableElementStyle,
        getSizeableElementWidth: getSizeableElementWidth,
        setSizeableElementWidth: setSizeableElementWidth,
        getSizeableElementHeight: getSizeableElementHeight,
        setSizeableElementHeight: setSizeableElementHeight,
        addSizeableElementClass: addSizeableElementClass,
        removeSizeableElementClass: removeSizeableElementClass
      };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnRTdHlsZSIsInN0eWxlIiwiYmluZCIsImdldFNpemVhYmxlRWxlbWVudFdpZHRoIiwiZ2V0V2lkdGgiLCJzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCIsInNldFdpZHRoIiwiZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwiYWRkU2l6ZWFibGVFbGVtZW50Q2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZVNpemVhYmxlRWxlbWVudENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsZTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxVQUFNQyx1QkFBdUIsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQTdCO0FBQUEsVUFBb0Q7QUFDOUNDLGdDQUEwQixLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREcsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY0osSUFBZCxDQUFtQixJQUFuQixDQUZoQztBQUFBLFVBRTBEO0FBQ3BESyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSGpDO0FBQUEsVUFHNEQ7QUFDdERPLGlDQUEyQixLQUFLQyxTQUFMLENBQWVSLElBQWYsQ0FBb0IsSUFBcEIsQ0FKakM7QUFBQSxVQUk0RDtBQUN0RFMsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQixJQUFuQixDQUxoQztBQUFBLFVBSzBEO0FBQ3BEVyxtQ0FBNkIsS0FBS0MsV0FBTCxDQUFpQlosSUFBakIsQ0FBc0IsSUFBdEIsQ0FObkMsQ0FEYyxDQU9rRDs7QUFFaEUsYUFBUTtBQUNORixrREFETTtBQUVORyx3REFGTTtBQUdORSx3REFITTtBQUlORSwwREFKTTtBQUtORSwwREFMTTtBQU1ORSx3REFOTTtBQU9ORTtBQVBNLE9BQVI7QUFTRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT2pCLFFBQVFrQixjQUFSLENBQXVCakIsZUFBdkIsRUFBd0NnQixVQUF4QyxDQUFQO0FBQTZEOzs7O0VBckJyRWpCLE87O0FBd0I5Qm1CLE9BQU9DLE1BQVAsQ0FBY25CLGVBQWQsRUFBK0I7QUFDN0JvQixXQUFTLEtBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZVLENBQS9COztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCeEIsZUFBakIiLCJmaWxlIjoic2l6ZWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50U3R5bGUgPSB0aGlzLnN0eWxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgYWRkU2l6ZWFibGVFbGVtZW50Q2xhc3MgPSB0aGlzLmFkZENsYXNzLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHJlbW92ZVNpemVhYmxlRWxlbWVudENsYXNzID0gdGhpcy5yZW1vdmVDbGFzcy5iaW5kKHRoaXMpOyAvLy9cblxuICAgIHJldHVybiAoe1xuICAgICAgc2l6ZWFibGVFbGVtZW50U3R5bGUsXG4gICAgICBnZXRTaXplYWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgIHNldFNpemVhYmxlRWxlbWVudFdpZHRoLFxuICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgc2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgYWRkU2l6ZWFibGVFbGVtZW50Q2xhc3MsXG4gICAgICByZW1vdmVTaXplYWJsZUVsZW1lbnRDbGFzc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuIl19