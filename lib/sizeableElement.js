'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui');
var Div = easyui.Div;

var SizeableElement = function (_Div) {
  _inherits(SizeableElement, _Div);

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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Div.fromProperties(SizeableElement, properties);
    }
  }]);

  return SizeableElement;
}(Div);

module.exports = SizeableElement;

function inPixels(quantity) {
  var pixels = void 0;

  var matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    var secondMatch = second(matches);

    pixels = secondMatch; ///
  }

  return pixels;
}

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkRpdiIsImVhc3l1aSIsIlNpemVhYmxlRWxlbWVudCIsIndpZHRoIiwibWluaW11bVdpZHRoIiwiZ2V0TWluaW11bVdpZHRoIiwibWF4aW11bVdpZHRoIiwiZ2V0TWF4aW11bVdpZHRoIiwidW5kZWZpbmVkIiwiTWF0aCIsIm1heCIsIm1pbiIsImhlaWdodCIsIm1pbmltdW1IZWlnaHQiLCJnZXRNaW5pbXVtSGVpZ2h0IiwibWF4aW11bUhlaWdodCIsImdldE1heGltdW1IZWlnaHQiLCJtaW5XaWR0aCIsImNzcyIsImluUGl4ZWxzIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwicXVhbnRpdHkiLCJwaXhlbHMiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sYUFBU0EsUUFBUSxRQUFSLENBQVQ7SUFDRUMsRyxHQUFRQyxNLENBQVJELEc7O0lBRUZFLGU7Ozs7Ozs7Ozs7OzZCQUNLQyxLLEVBQU87QUFDZCxVQUFNQyxlQUFlLEtBQUtDLGVBQUwsRUFBckI7QUFBQSxVQUNNQyxlQUFlLEtBQUtDLGVBQUwsRUFEckI7O0FBR0EsVUFBSUgsaUJBQWlCSSxTQUFyQixFQUFnQztBQUM5QkwsZ0JBQVFNLEtBQUtDLEdBQUwsQ0FBU1AsS0FBVCxFQUFnQkMsWUFBaEIsQ0FBUjtBQUNEO0FBQ0QsVUFBSUUsaUJBQWlCRSxTQUFyQixFQUFnQztBQUM5QkwsZ0JBQVFNLEtBQUtFLEdBQUwsQ0FBU1IsS0FBVCxFQUFnQkcsWUFBaEIsQ0FBUjtBQUNEOztBQUVELGlJQUFlSCxLQUFmO0FBQ0Q7Ozs4QkFFU1MsTSxFQUFRO0FBQ2hCLFVBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFVBQ01DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0Qjs7QUFHQSxVQUFJSCxrQkFBa0JMLFNBQXRCLEVBQWlDO0FBQy9CSSxpQkFBU0gsS0FBS0MsR0FBTCxDQUFTRSxNQUFULEVBQWlCQyxhQUFqQixDQUFUO0FBQ0Q7QUFDRCxVQUFJRSxrQkFBa0JQLFNBQXRCLEVBQWlDO0FBQy9CSSxpQkFBU0gsS0FBS0UsR0FBTCxDQUFTQyxNQUFULEVBQWlCRyxhQUFqQixDQUFUO0FBQ0Q7O0FBRUQsa0lBQWdCSCxNQUFoQjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1LLFdBQVcsS0FBS0MsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNZCxlQUFlZSxTQUFTRixRQUFULENBRHJCOztBQUdBLGFBQU9iLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZ0IsWUFBWSxLQUFLRixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01MLGdCQUFnQk0sU0FBU0MsU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTVEsV0FBVyxLQUFLSCxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01aLGVBQWVhLFNBQVNFLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2YsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtKLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUgsZ0JBQWdCSSxTQUFTRyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O21DQUVxQlEsVSxFQUFZO0FBQ2hDLGFBQU92QixJQUFJd0IsY0FBSixDQUFtQnRCLGVBQW5CLEVBQW9DcUIsVUFBcEMsQ0FBUDtBQUNEOzs7O0VBM0QyQnZCLEc7O0FBOEQ5QnlCLE9BQU9DLE9BQVAsR0FBaUJ4QixlQUFqQjs7QUFFQSxTQUFTaUIsUUFBVCxDQUFrQlEsUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsZUFBSjs7QUFFQSxNQUFNQyxVQUFVRixTQUFTRyxLQUFULENBQWUsYUFBZixDQUFoQjs7QUFFQSxNQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU1FLGNBQWNDLE9BQU9ILE9BQVAsQ0FBcEI7O0FBRUFELGFBQVNHLFdBQVQsQ0FIb0IsQ0FHRztBQUN4Qjs7QUFFRCxTQUFPSCxNQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBEaXYgfSA9IGVhc3l1aTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRGl2IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IHRoaXMuZ2V0TWF4aW11bVdpZHRoKCk7XG5cbiAgICBpZiAobWluaW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbWF4aW11bVdpZHRoKTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5jc3MoJ21pbi13aWR0aCcpLFxuICAgICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgICAgbWluaW11bUhlaWdodCA9IGluUGl4ZWxzKG1pbkhlaWdodCk7XG5cbiAgICByZXR1cm4gbWluaW11bUhlaWdodDtcbiAgfVxuXG4gIGdldE1heGltdW1XaWR0aCgpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLmNzcygnbWF4LWhlaWdodCcpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBEaXYuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgbGV0IHBpeGVscztcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=