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
    key: 'getFlexibleElement',
    value: function getFlexibleElement() {
      var flexibleElement = this; ///

      return flexibleElement;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getFlexibleElement = this.getFlexibleElement.bind(this);

      return {
        getFlexibleElement: getFlexibleElement
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbGV4aWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJGbGV4aWJsZUVsZW1lbnQiLCJmbGV4aWJsZUVsZW1lbnQiLCJnZXRGbGV4aWJsZUVsZW1lbnQiLCJiaW5kIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGU7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxrQkFBa0IsSUFBeEIsQ0FEbUIsQ0FDVzs7QUFFOUIsYUFBT0EsZUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxxQkFBcUIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQTNCOztBQUVBLGFBQVE7QUFDTkQ7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9MLFFBQVFNLGNBQVIsQ0FBdUJMLGVBQXZCLEVBQXdDSSxVQUF4QyxDQUFQO0FBQTZEOzs7O0VBZnJFTCxPOztBQWtCOUJPLE9BQU9DLE1BQVAsQ0FBY1AsZUFBZCxFQUErQjtBQUM3QlEsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQlosZUFBakIiLCJmaWxlIjoiZmxleGlibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRmxleGlibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEZsZXhpYmxlRWxlbWVudCgpIHtcbiAgICBjb25zdCBmbGV4aWJsZUVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiBmbGV4aWJsZUVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEZsZXhpYmxlRWxlbWVudCA9IHRoaXMuZ2V0RmxleGlibGVFbGVtZW50LmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEZsZXhpYmxlRWxlbWVudFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoRmxleGlibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKEZsZXhpYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdmbGV4aWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRmxleGlibGVFbGVtZW50O1xuIl19