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
      setFlexibleElementHeight = this.setHeight.bind(this); ///

      return {
        getFlexibleElementWidth: getFlexibleElementWidth,
        setFlexibleElementWidth: setFlexibleElementWidth,
        getFlexibleElementHeight: getFlexibleElementHeight,
        setFlexibleElementHeight: setFlexibleElementHeight
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbGV4aWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJGbGV4aWJsZUVsZW1lbnQiLCJnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCIsImdldFdpZHRoIiwiYmluZCIsInNldEZsZXhpYmxlRWxlbWVudFdpZHRoIiwic2V0V2lkdGgiLCJnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQiLCJzZXRIZWlnaHQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsZTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxVQUFNQywwQkFBMEIsS0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQWhDO0FBQUEsVUFBMEQ7QUFDcERDLGdDQUEwQixLQUFLQyxRQUFMLENBQWNGLElBQWQsQ0FBbUIsSUFBbkIsQ0FEaEM7QUFBQSxVQUMwRDtBQUNwREcsaUNBQTJCLEtBQUtDLFNBQUwsQ0FBZUosSUFBZixDQUFvQixJQUFwQixDQUZqQztBQUFBLFVBRTREO0FBQ3RESyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSGpDLENBRGMsQ0FJOEM7O0FBRTVELGFBQVE7QUFDTkYsd0RBRE07QUFFTkcsd0RBRk07QUFHTkUsMERBSE07QUFJTkU7QUFKTSxPQUFSO0FBTUQ7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9YLFFBQVFZLGNBQVIsQ0FBdUJYLGVBQXZCLEVBQXdDVSxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBZnJFWCxPOztBQWtCOUJhLE9BQU9DLE1BQVAsQ0FBY2IsZUFBZCxFQUErQjtBQUM3QmMsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmxCLGVBQWpCIiwiZmlsZSI6ImZsZXhpYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIEZsZXhpYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEZsZXhpYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKTsgLy8vXG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuICAgICAgc2V0RmxleGlibGVFbGVtZW50V2lkdGgsXG4gICAgICBnZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHQsXG4gICAgICBzZXRGbGV4aWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZsZXhpYmxlRWxlbWVudCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihGbGV4aWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnZmxleGlibGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZsZXhpYmxlRWxlbWVudDtcbiJdfQ==