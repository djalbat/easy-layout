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
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = this; ///

      return sizeableElement;
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var context = this.getContext(),
          getSizeableElement = this.getSizeableElement.bind(this),
          parentContext = Object.assign(context, {
        getSizeableElement: getSizeableElement
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJzaXplYWJsZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldFNpemVhYmxlRWxlbWVudCIsImJpbmQiLCJwYXJlbnRDb250ZXh0IiwiT2JqZWN0IiwiYXNzaWduIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLGU7Ozs7Ozs7Ozs7O3lDQUNpQjtBQUNuQixVQUFNQyxrQkFBa0IsSUFBeEIsQ0FEbUIsQ0FDVzs7QUFFOUIsYUFBT0EsZUFBUDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxVQUFVLEtBQUtDLFVBQUwsRUFBaEI7QUFBQSxVQUNNQyxxQkFBcUIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBRDNCO0FBQUEsVUFFTUMsZ0JBQWdCQyxPQUFPQyxNQUFQLENBQWNOLE9BQWQsRUFBdUI7QUFDckNFO0FBRHFDLE9BQXZCLENBRnRCOztBQU1BLGFBQU9FLGFBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQUUsYUFBT1YsUUFBUVcsY0FBUixDQUF1QlYsZUFBdkIsRUFBd0NTLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFqQnJFVixPOztBQW9COUJRLE9BQU9DLE1BQVAsQ0FBY1IsZUFBZCxFQUErQjtBQUM3QlcsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmYsZUFBakIiLCJmaWxlIjoic2l6ZWFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZXRTaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudC5iaW5kKHRoaXMpLFxuICAgICAgICAgIHBhcmVudENvbnRleHQgPSBPYmplY3QuYXNzaWduKGNvbnRleHQsIHtcbiAgICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudFxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG4iXX0=