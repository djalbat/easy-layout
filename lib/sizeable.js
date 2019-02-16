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
      setSizeableElementHeight = this.setHeight.bind(this); ///

      return {
        sizeableElementStyle: sizeableElementStyle,
        getSizeableElementWidth: getSizeableElementWidth,
        setSizeableElementWidth: setSizeableElementWidth,
        getSizeableElementHeight: getSizeableElementHeight,
        setSizeableElementHeight: setSizeableElementHeight
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnRTdHlsZSIsInN0eWxlIiwiYmluZCIsImdldFNpemVhYmxlRWxlbWVudFdpZHRoIiwiZ2V0V2lkdGgiLCJzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCIsInNldFdpZHRoIiwiZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic2V0SGVpZ2h0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGU7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsVUFBTUMsdUJBQXVCLEtBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUE3QjtBQUFBLFVBQW9EO0FBQzlDQyxnQ0FBMEIsS0FBS0MsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBRGhDO0FBQUEsVUFDMEQ7QUFDcERHLGdDQUEwQixLQUFLQyxRQUFMLENBQWNKLElBQWQsQ0FBbUIsSUFBbkIsQ0FGaEM7QUFBQSxVQUUwRDtBQUNwREssaUNBQTJCLEtBQUtDLFNBQUwsQ0FBZU4sSUFBZixDQUFvQixJQUFwQixDQUhqQztBQUFBLFVBRzREO0FBQ3RETyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlUixJQUFmLENBQW9CLElBQXBCLENBSmpDLENBRGMsQ0FLOEM7O0FBRTVELGFBQVE7QUFDTkYsa0RBRE07QUFFTkcsd0RBRk07QUFHTkUsd0RBSE07QUFJTkUsMERBSk07QUFLTkU7QUFMTSxPQUFSO0FBT0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9iLFFBQVFjLGNBQVIsQ0FBdUJiLGVBQXZCLEVBQXdDWSxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBakJyRWIsTzs7QUFvQjlCZSxPQUFPQyxNQUFQLENBQWNmLGVBQWQsRUFBK0I7QUFDN0JnQixXQUFTLEtBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZVLENBQS9COztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCcEIsZUFBakIiLCJmaWxlIjoic2l6ZWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50U3R5bGUgPSB0aGlzLnN0eWxlLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNpemVhYmxlRWxlbWVudFN0eWxlLFxuICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50V2lkdGgsXG4gICAgICBzZXRTaXplYWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgIGdldFNpemVhYmxlRWxlbWVudEhlaWdodCxcbiAgICAgIHNldFNpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuIl19