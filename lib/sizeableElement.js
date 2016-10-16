'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      var minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

      if (minimumWidth !== undefined) {
        width = Math.max(width, minimumWidth);
      }
      if (maximumWidth !== undefined) {
        width = Math.min(width, maximumWidth);
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

      if (minimumHeight !== undefined) {
        height = Math.max(height, minimumHeight);
      }
      if (maximumHeight !== undefined) {
        height = Math.min(height, maximumHeight);
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);
    }
  }, {
    key: 'getMinimumWidth',
    value: function getMinimumWidth() {
      var minWidth = this.css('min-width'),
          minimumWidth = inPixels(minWidth);

      return minimumWidth;
    }
  }, {
    key: 'getMinimumHeight',
    value: function getMinimumHeight() {
      var minHeight = this.css('min-height'),
          minimumHeight = inPixels(minHeight);

      return minimumHeight;
    }
  }, {
    key: 'getMaximumWidth',
    value: function getMaximumWidth() {
      var maxWidth = this.css('max-width'),
          maximumWidth = inPixels(maxWidth);

      return maximumWidth;
    }
  }, {
    key: 'getMaximumHeight',
    value: function getMaximumHeight() {
      var maxHeight = this.css('max-height'),
          maximumHeight = inPixels(maxHeight);

      return maximumHeight;
    }
  }]);

  return SizeableElement;
}(Element);

module.exports = SizeableElement;

function inPixels(quantity) {
  var matches = quantity.match(/([0-9]*)px$/),
      pixels = matches === null ? undefined : matches[1];

  return pixels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsInVuZGVmaW5lZCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwibWF0Y2hlcyIsIm1hdGNoIiwicGl4ZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxVQUFVRixPQUFPRSxPQURyQjs7SUFHTUMsZTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQUlDLGVBQWUsS0FBS0MsZUFBTCxFQUFuQjtBQUFBLFVBQ0lDLGVBQWUsS0FBS0MsZUFBTCxFQURuQjs7QUFHQSxVQUFJSCxpQkFBaUJJLFNBQXJCLEVBQWdDO0FBQzlCTCxnQkFBUU0sS0FBS0MsR0FBTCxDQUFTUCxLQUFULEVBQWdCQyxZQUFoQixDQUFSO0FBQ0Q7QUFDRCxVQUFJRSxpQkFBaUJFLFNBQXJCLEVBQWdDO0FBQzlCTCxnQkFBUU0sS0FBS0UsR0FBTCxDQUFTUixLQUFULEVBQWdCRyxZQUFoQixDQUFSO0FBQ0Q7O0FBRUQsaUlBQWVILEtBQWY7QUFDRDs7OzhCQUVTUyxNLEVBQVE7QUFDaEIsVUFBSUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXBCO0FBQUEsVUFDSUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHBCOztBQUdBLFVBQUlILGtCQUFrQkwsU0FBdEIsRUFBaUM7QUFDL0JJLGlCQUFTSCxLQUFLQyxHQUFMLENBQVNFLE1BQVQsRUFBaUJDLGFBQWpCLENBQVQ7QUFDRDtBQUNELFVBQUlFLGtCQUFrQlAsU0FBdEIsRUFBaUM7QUFDL0JJLGlCQUFTSCxLQUFLRSxHQUFMLENBQVNDLE1BQVQsRUFBaUJHLGFBQWpCLENBQVQ7QUFDRDs7QUFFRCxrSUFBZ0JILE1BQWhCO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBSUssV0FBVyxLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFmO0FBQUEsVUFDSWQsZUFBZWUsU0FBU0YsUUFBVCxDQURuQjs7QUFHQSxhQUFPYixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBSWdCLFlBQVksS0FBS0YsR0FBTCxDQUFTLFlBQVQsQ0FBaEI7QUFBQSxVQUNJTCxnQkFBZ0JNLFNBQVNDLFNBQVQsQ0FEcEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQUlRLFdBQVcsS0FBS0gsR0FBTCxDQUFTLFdBQVQsQ0FBZjtBQUFBLFVBQ0laLGVBQWVhLFNBQVNFLFFBQVQsQ0FEbkI7O0FBR0EsYUFBT2YsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQUlnQixZQUFZLEtBQUtKLEdBQUwsQ0FBUyxZQUFULENBQWhCO0FBQUEsVUFDSUgsZ0JBQWdCSSxTQUFTRyxTQUFULENBRHBCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7OztFQXZEMkJkLE87O0FBMEQ5QnNCLE9BQU9DLE9BQVAsR0FBaUJ0QixlQUFqQjs7QUFFQSxTQUFTaUIsUUFBVCxDQUFrQk0sUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsVUFBVUQsU0FBU0UsS0FBVCxDQUFlLGFBQWYsQ0FBZDtBQUFBLE1BQ0lDLFNBQVVGLFlBQVksSUFBYixHQUNFbEIsU0FERixHQUVJa0IsUUFBUSxDQUFSLENBSGpCOztBQUtBLFNBQU9FLE1BQVA7QUFDRCIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHZhciBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIHZhciBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIHZhciBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgdmFyIG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgdmFyIG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICB2YXIgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgdmFyIG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKSxcbiAgICAgIHBpeGVscyA9IChtYXRjaGVzID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgIHVuZGVmaW5lZCA6XG4gICAgICAgICAgICAgICAgICAgbWF0Y2hlc1sxXTtcblxuICByZXR1cm4gcGl4ZWxzO1xufVxuIl19