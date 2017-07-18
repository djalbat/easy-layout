'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var arrayUtil = require('./util/array');

var Element = easy.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

  function SizeableElement() {
    _classCallCheck(this, SizeableElement);

    return _possibleConstructorReturn(this, (SizeableElement.__proto__ || Object.getPrototypeOf(SizeableElement)).apply(this, arguments));
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      var widthNumber = typeof width === 'number';

      if (widthNumber) {
        var minimumWidth = this.getMinimumWidth(),
            maximumWidth = this.getMaximumWidth();

        if (minimumWidth !== null) {
          width = Math.max(width, minimumWidth);
        }
        if (maximumWidth !== null) {
          width = Math.min(width, maximumWidth);
        }

        width = width + 'px'; ///
      }

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var heightNumber = typeof height === 'number';

      if (heightNumber) {
        var minimumHeight = this.getMinimumHeight(),
            maximumHeight = this.getMaximumHeight();

        if (minimumHeight !== null) {
          height = Math.max(height, minimumHeight);
        }
        if (maximumHeight !== null) {
          height = Math.min(height, maximumHeight);
        }

        height = height + 'px'; ///
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

function inPixels(quantity) {
  var pixels = null;

  var matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    var secondMatch = arrayUtil.second(matches);

    pixels = secondMatch; ///
  }

  return pixels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJhcnJheVV0aWwiLCJFbGVtZW50IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJ3aWR0aE51bWJlciIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJoZWlnaHROdW1iZXIiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwicGl4ZWxzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxZQUFZRCxRQUFRLGNBQVIsQ0FBbEI7O0lBRVFFLE8sR0FBWUgsSSxDQUFaRyxPOztJQUVGQyxlOzs7Ozs7Ozs7Ozs2QkFDS0MsSyxFQUFPO0FBQ2QsVUFBTUMsY0FBZSxPQUFPRCxLQUFQLEtBQWlCLFFBQXRDOztBQUVBLFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNQyxlQUFlLEtBQUtDLGVBQUwsRUFBckI7QUFBQSxZQUNNQyxlQUFlLEtBQUtDLGVBQUwsRUFEckI7O0FBR0EsWUFBSUgsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRixrQkFBUU0sS0FBS0MsR0FBTCxDQUFTUCxLQUFULEVBQWdCRSxZQUFoQixDQUFSO0FBQ0Q7QUFDRCxZQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJKLGtCQUFRTSxLQUFLRSxHQUFMLENBQVNSLEtBQVQsRUFBZ0JJLFlBQWhCLENBQVI7QUFDRDs7QUFFREosZ0JBQVdBLEtBQVgsUUFYZSxDQVdPO0FBQ3ZCOztBQUVELGlJQUFlQSxLQUFmO0FBQ0Q7Ozs4QkFFU1MsTSxFQUFRO0FBQ2hCLFVBQU1DLGVBQWdCLE9BQU9ELE1BQVAsS0FBa0IsUUFBeEM7O0FBRUEsVUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxZQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7O0FBR0EsWUFBSUgsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCRixtQkFBU0gsS0FBS0MsR0FBTCxDQUFTRSxNQUFULEVBQWlCRSxhQUFqQixDQUFUO0FBQ0Q7QUFDRCxZQUFJRSxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJKLG1CQUFTSCxLQUFLRSxHQUFMLENBQVNDLE1BQVQsRUFBaUJJLGFBQWpCLENBQVQ7QUFDRDs7QUFFREosaUJBQVlBLE1BQVosUUFYZ0IsQ0FXUTtBQUN6Qjs7QUFFRCxrSUFBZ0JBLE1BQWhCO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTU0sV0FBVyxLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01kLGVBQWVlLFNBQVNGLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2IsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtGLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUwsZ0JBQWdCTSxTQUFTQyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNUSxXQUFXLEtBQUtILEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTVosZUFBZWEsU0FBU0UsUUFBVCxDQURyQjs7QUFHQSxhQUFPZixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0osR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNSCxnQkFBZ0JJLFNBQVNHLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7bUNBRXFCUSxVLEVBQVk7QUFDaEMsYUFBT3ZCLFFBQVF3QixjQUFSLENBQXVCdkIsZUFBdkIsRUFBd0NzQixVQUF4QyxDQUFQO0FBQ0Q7Ozs7RUF2RTJCdkIsTzs7QUEwRTlCeUIsT0FBT0MsTUFBUCxDQUFjekIsZUFBZCxFQUErQjtBQUM3QjBCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI5QixlQUFqQjs7QUFFQSxTQUFTa0IsUUFBVCxDQUFrQmEsUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsU0FBUyxJQUFiOztBQUVBLE1BQU1DLFVBQVVGLFNBQVNHLEtBQVQsQ0FBZSxhQUFmLENBQWhCOztBQUVBLE1BQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTUUsY0FBY3JDLFVBQVVzQyxNQUFWLENBQWlCSCxPQUFqQixDQUFwQjs7QUFFQUQsYUFBU0csV0FBVCxDQUhvQixDQUdHO0FBQ3hCOztBQUVELFNBQU9ILE1BQVA7QUFDRCIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGFycmF5VXRpbCA9IHJlcXVpcmUoJy4vdXRpbC9hcnJheScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHdpZHRoTnVtYmVyID0gKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpO1xuXG4gICAgaWYgKHdpZHRoTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgICAgbWF4aW11bVdpZHRoID0gdGhpcy5nZXRNYXhpbXVtV2lkdGgoKTtcblxuICAgICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IGhlaWdodE51bWJlciA9ICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAoaGVpZ2h0TnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGdldE1pbmltdW1XaWR0aCgpIHsgXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5jc3MoJ21pbi1oZWlnaHQnKSxcbiAgICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IGluUGl4ZWxzKG1heFdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNYXhpbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuXG5mdW5jdGlvbiBpblBpeGVscyhxdWFudGl0eSkge1xuICBsZXQgcGl4ZWxzID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IGFycmF5VXRpbC5zZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuIl19