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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJ3aWR0aCIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsInVuZGVmaW5lZCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwibWF0Y2hlcyIsIm1hdGNoIiwicGl4ZWxzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFBQSxJQUNNQyxVQUFVRixPQUFPRSxPQUR2Qjs7SUFHTUMsZTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLFVBQ01DLGVBQWUsS0FBS0MsZUFBTCxFQURyQjs7QUFHQSxVQUFJSCxpQkFBaUJJLFNBQXJCLEVBQWdDO0FBQzlCTCxnQkFBUU0sS0FBS0MsR0FBTCxDQUFTUCxLQUFULEVBQWdCQyxZQUFoQixDQUFSO0FBQ0Q7QUFDRCxVQUFJRSxpQkFBaUJFLFNBQXJCLEVBQWdDO0FBQzlCTCxnQkFBUU0sS0FBS0UsR0FBTCxDQUFTUixLQUFULEVBQWdCRyxZQUFoQixDQUFSO0FBQ0Q7O0FBRUQsaUlBQWVILEtBQWY7QUFDRDs7OzhCQUVTUyxNLEVBQVE7QUFDaEIsVUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHRCOztBQUdBLFVBQUlILGtCQUFrQkwsU0FBdEIsRUFBaUM7QUFDL0JJLGlCQUFTSCxLQUFLQyxHQUFMLENBQVNFLE1BQVQsRUFBaUJDLGFBQWpCLENBQVQ7QUFDRDtBQUNELFVBQUlFLGtCQUFrQlAsU0FBdEIsRUFBaUM7QUFDL0JJLGlCQUFTSCxLQUFLRSxHQUFMLENBQVNDLE1BQVQsRUFBaUJHLGFBQWpCLENBQVQ7QUFDRDs7QUFFRCxrSUFBZ0JILE1BQWhCO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTUssV0FBVyxLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01kLGVBQWVlLFNBQVNGLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2IsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtGLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUwsZ0JBQWdCTSxTQUFTQyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNUSxXQUFXLEtBQUtILEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTVosZUFBZWEsU0FBU0UsUUFBVCxDQURyQjs7QUFHQSxhQUFPZixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0osR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNSCxnQkFBZ0JJLFNBQVNHLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7O0VBdkQyQmQsTzs7QUEwRDlCc0IsT0FBT0MsT0FBUCxHQUFpQnRCLGVBQWpCOztBQUVBLFNBQVNpQixRQUFULENBQWtCTSxRQUFsQixFQUE0QjtBQUMxQixNQUFNQyxVQUFVRCxTQUFTRSxLQUFULENBQWUsYUFBZixDQUFoQjtBQUFBLE1BQ01DLFNBQVVGLFlBQVksSUFBYixHQUNFbEIsU0FERixHQUVJa0IsUUFBUSxDQUFSLENBSG5COztBQUtBLFNBQU9FLE1BQVA7QUFDRCIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBTaXplYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IHRoaXMuZ2V0TWF4aW11bVdpZHRoKCk7XG5cbiAgICBpZiAobWluaW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbWF4aW11bVdpZHRoKTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5jc3MoJ21pbi13aWR0aCcpLFxuICAgICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgICAgbWluaW11bUhlaWdodCA9IGluUGl4ZWxzKG1pbkhlaWdodCk7XG5cbiAgICByZXR1cm4gbWluaW11bUhlaWdodDtcbiAgfVxuXG4gIGdldE1heGltdW1XaWR0aCgpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLmNzcygnbWF4LWhlaWdodCcpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGNvbnN0IG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKSxcbiAgICAgICAgcGl4ZWxzID0gKG1hdGNoZXMgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlc1sxXTtcblxuICByZXR1cm4gcGl4ZWxzO1xufVxuIl19