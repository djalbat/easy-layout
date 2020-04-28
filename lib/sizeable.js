"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
      return _easy.Element.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(_easy.Element);

exports["default"] = SizeableElement;
Object.assign(SizeableElement, {
  tagName: "div",
  defaultProperties: {
    className: "sizeable"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpemVhYmxlLmpzIl0sIm5hbWVzIjpbIlNpemVhYmxlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwic2l6ZWFibGVFbGVtZW50U3R5bGUiLCJzdHlsZSIsImJpbmQiLCJnZXRTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFdpZHRoIiwic2V0U2l6ZWFibGVFbGVtZW50V2lkdGgiLCJzZXRXaWR0aCIsImdldFNpemVhYmxlRWxlbWVudEhlaWdodCIsImdldEhlaWdodCIsInNldFNpemVhYmxlRWxlbWVudEhlaWdodCIsInNldEhlaWdodCIsImFkZFNpemVhYmxlRWxlbWVudENsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVTaXplYWJsZUVsZW1lbnRDbGFzcyIsInJlbW92ZUNsYXNzIiwicGFyZW50Q29udGV4dCIsIk9iamVjdCIsImFzc2lnbiIsInByb3BlcnRpZXMiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7Ozs7Ozs7OztvQ0FDSDtBQUNkLFVBQU1DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBQWhCO0FBQUEsVUFDTUMsb0JBQW9CLEdBQUcsS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBRDdCO0FBQUEsVUFDb0Q7QUFDOUNDLE1BQUFBLHVCQUF1QixHQUFHLEtBQUtDLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUZoQztBQUFBLFVBRTBEO0FBQ3BERyxNQUFBQSx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNKLElBQWQsQ0FBbUIsSUFBbkIsQ0FIaEM7QUFBQSxVQUcwRDtBQUNwREssTUFBQUEsd0JBQXdCLEdBQUcsS0FBS0MsU0FBTCxDQUFlTixJQUFmLENBQW9CLElBQXBCLENBSmpDO0FBQUEsVUFJNEQ7QUFDdERPLE1BQUFBLHdCQUF3QixHQUFHLEtBQUtDLFNBQUwsQ0FBZVIsSUFBZixDQUFvQixJQUFwQixDQUxqQztBQUFBLFVBSzREO0FBQ3REUyxNQUFBQSx1QkFBdUIsR0FBRyxLQUFLQyxRQUFMLENBQWNWLElBQWQsQ0FBbUIsSUFBbkIsQ0FOaEM7QUFBQSxVQU0wRDtBQUNwRFcsTUFBQUEsMEJBQTBCLEdBQUcsS0FBS0MsV0FBTCxDQUFpQlosSUFBakIsQ0FBc0IsSUFBdEIsQ0FQbkM7QUFBQSxVQU9nRTtBQUMxRGEsTUFBQUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBY25CLE9BQWQsRUFBdUI7QUFDckNFLFFBQUFBLG9CQUFvQixFQUFwQkEsb0JBRHFDO0FBRXJDRyxRQUFBQSx1QkFBdUIsRUFBdkJBLHVCQUZxQztBQUdyQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFIcUM7QUFJckNFLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBSnFDO0FBS3JDRSxRQUFBQSx3QkFBd0IsRUFBeEJBLHdCQUxxQztBQU1yQ0UsUUFBQUEsdUJBQXVCLEVBQXZCQSx1QkFOcUM7QUFPckNFLFFBQUFBLDBCQUEwQixFQUExQkE7QUFQcUMsT0FBdkIsQ0FSdEI7QUFrQkEsYUFBT0UsYUFBUDtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPQyxjQUFRQyxjQUFSLENBQXVCdkIsZUFBdkIsRUFBd0NxQixVQUF4QyxDQUFQO0FBQTZEOzs7O0VBdkJ0REMsYTs7O0FBMEI3Q0gsTUFBTSxDQUFDQyxNQUFQLENBQWNwQixlQUFkLEVBQStCO0FBQzdCd0IsRUFBQUEsT0FBTyxFQUFFLEtBRG9CO0FBRTdCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGVSxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNpemVhYmxlRWxlbWVudFN0eWxlID0gdGhpcy5zdHlsZS5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBnZXRTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0V2lkdGguYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgc2V0U2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNldFdpZHRoLmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGdldFNpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIHNldFNpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuc2V0SGVpZ2h0LmJpbmQodGhpcyksIC8vL1xuICAgICAgICAgIGFkZFNpemVhYmxlRWxlbWVudENsYXNzID0gdGhpcy5hZGRDbGFzcy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICByZW1vdmVTaXplYWJsZUVsZW1lbnRDbGFzcyA9IHRoaXMucmVtb3ZlQ2xhc3MuYmluZCh0aGlzKSwgLy8vXG4gICAgICAgICAgcGFyZW50Q29udGV4dCA9IE9iamVjdC5hc3NpZ24oY29udGV4dCwge1xuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50U3R5bGUsXG4gICAgICAgICAgICBnZXRTaXplYWJsZUVsZW1lbnRXaWR0aCxcbiAgICAgICAgICAgIHNldFNpemVhYmxlRWxlbWVudFdpZHRoLFxuICAgICAgICAgICAgZ2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgICAgICAgc2V0U2l6ZWFibGVFbGVtZW50SGVpZ2h0LFxuICAgICAgICAgICAgYWRkU2l6ZWFibGVFbGVtZW50Q2xhc3MsXG4gICAgICAgICAgICByZW1vdmVTaXplYWJsZUVsZW1lbnRDbGFzc1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcmVudENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6IFwiZGl2XCIsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcInNpemVhYmxlXCJcbiAgfVxufSk7XG4iXX0=