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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9mbGV4aWJsZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJGbGV4aWJsZUVsZW1lbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEZsZXhpYmxlRWxlbWVudFdpZHRoIiwiZ2V0V2lkdGgiLCJiaW5kIiwic2V0RmxleGlibGVFbGVtZW50V2lkdGgiLCJzZXRXaWR0aCIsImdldEZsZXhpYmxlRWxlbWVudEhlaWdodCIsImdldEhlaWdodCIsInNldEZsZXhpYmxlRWxlbWVudEhlaWdodCIsInNldEhlaWdodCIsImFkZEZsZXhpYmxlRWxlbWVudENsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVGbGV4aWJsZUVsZW1lbnRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0lBRVFDLE8sR0FBWUYsSSxDQUFaRSxPOztJQUVGQyxlOzs7Ozs7Ozs7OztvQ0FDWTtBQUNmLFVBQU1DLFVBQVUsS0FBS0MsVUFBTCxFQUFoQjtBQUFBLFVBQ0dDLDBCQUEwQixLQUFLQyxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FEN0I7QUFBQSxVQUN1RDtBQUNwREMsZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUY3QjtBQUFBLFVBRXVEO0FBQ3BERyxpQ0FBMkIsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBSDlCO0FBQUEsVUFHeUQ7QUFDdERLLGlDQUEyQixLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FKOUI7QUFBQSxVQUl5RDtBQUN0RE8sZ0NBQTBCLEtBQUtDLFFBQUwsQ0FBY1IsSUFBZCxDQUFtQixJQUFuQixDQUw3QjtBQUFBLFVBS3VEO0FBQ3BEUyxtQ0FBNkIsS0FBS0MsV0FBTCxDQUFpQlYsSUFBakIsQ0FBc0IsSUFBdEIsQ0FOaEM7QUFBQSxVQU02RDtBQUN4RFcsc0JBQWdCQyxPQUFPQyxNQUFQLENBQWNqQixPQUFkLEVBQXVCO0FBQ3RDRSx3REFEc0M7QUFFdENHLHdEQUZzQztBQUd0Q0UsMERBSHNDO0FBSXRDRSwwREFKc0M7QUFLdENFLHdEQUxzQztBQU10Q0U7QUFOc0MsT0FBdkIsQ0FQckI7O0FBZ0JDLGFBQU9FLGFBQVA7QUFDRDs7O21DQUVxQkcsVSxFQUFZO0FBQUUsYUFBT3BCLFFBQVFxQixjQUFSLENBQXVCcEIsZUFBdkIsRUFBd0NtQixVQUF4QyxDQUFQO0FBQTZEOzs7O0VBckJyRXBCLE87O0FBd0I5QmtCLE9BQU9DLE1BQVAsQ0FBY2xCLGVBQWQsRUFBK0I7QUFDN0JxQixXQUFTLEtBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZVLENBQS9COztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCekIsZUFBakIiLCJmaWxlIjoiZmxleGlibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgRmxleGlibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuXHRcdFx0XHQgIGdldEZsZXhpYmxlRWxlbWVudFdpZHRoID0gdGhpcy5nZXRXaWR0aC5iaW5kKHRoaXMpLCAvLy9cblx0XHRcdFx0ICBzZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG5cdFx0XHRcdCAgZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG5cdFx0XHRcdCAgc2V0RmxleGlibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zZXRIZWlnaHQuYmluZCh0aGlzKSwgLy8vXG5cdFx0XHRcdCAgYWRkRmxleGlibGVFbGVtZW50Q2xhc3MgPSB0aGlzLmFkZENsYXNzLmJpbmQodGhpcyksIC8vL1xuXHRcdFx0XHQgIHJlbW92ZUZsZXhpYmxlRWxlbWVudENsYXNzID0gdGhpcy5yZW1vdmVDbGFzcy5iaW5kKHRoaXMpLCAvLy9cblx0XHQgICAgICBwYXJlbnRDb250ZXh0ID0gT2JqZWN0LmFzc2lnbihjb250ZXh0LCB7XG5cdFx0XHQgICAgICBnZXRGbGV4aWJsZUVsZW1lbnRXaWR0aCxcblx0XHRcdCAgICAgIHNldEZsZXhpYmxlRWxlbWVudFdpZHRoLFxuXHRcdFx0ICAgICAgZ2V0RmxleGlibGVFbGVtZW50SGVpZ2h0LFxuXHRcdFx0ICAgICAgc2V0RmxleGlibGVFbGVtZW50SGVpZ2h0LFxuXHRcdFx0ICAgICAgYWRkRmxleGlibGVFbGVtZW50Q2xhc3MsXG5cdFx0XHQgICAgICByZW1vdmVGbGV4aWJsZUVsZW1lbnRDbGFzc1xuXHRcdFx0XHQgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhGbGV4aWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oRmxleGlibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ2ZsZXhpYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBGbGV4aWJsZUVsZW1lbnQ7XG4iXX0=