'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

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
    var secondMatch = second(matches);

    pixels = secondMatch; ///
  }

  return pixels;
}

function second(array) {
  return array[1];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVsZW1lbnQiLCJlYXN5IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJ3aWR0aE51bWJlciIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJoZWlnaHROdW1iZXIiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwicGl4ZWxzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVNLFdBQU9BLFFBQVEsTUFBUixDQUFQO0lBQ0VDLE8sR0FBWUMsSSxDQUFaRCxPOztJQUVGRSxlOzs7Ozs7Ozs7Ozs2QkFDS0MsSyxFQUFPO0FBQ2QsVUFBTUMsY0FBZSxPQUFPRCxLQUFQLEtBQWlCLFFBQXRDOztBQUVBLFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNQyxlQUFlLEtBQUtDLGVBQUwsRUFBckI7QUFBQSxZQUNNQyxlQUFlLEtBQUtDLGVBQUwsRUFEckI7O0FBR0EsWUFBSUgsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRixrQkFBUU0sS0FBS0MsR0FBTCxDQUFTUCxLQUFULEVBQWdCRSxZQUFoQixDQUFSO0FBQ0Q7QUFDRCxZQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJKLGtCQUFRTSxLQUFLRSxHQUFMLENBQVNSLEtBQVQsRUFBZ0JJLFlBQWhCLENBQVI7QUFDRDs7QUFFREosZ0JBQVdBLEtBQVgsUUFYZSxDQVdPO0FBQ3ZCOztBQUVELGlJQUFlQSxLQUFmO0FBQ0Q7Ozs4QkFFU1MsTSxFQUFRO0FBQ2hCLFVBQU1DLGVBQWdCLE9BQU9ELE1BQVAsS0FBa0IsUUFBeEM7O0FBRUEsVUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxZQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7O0FBR0EsWUFBSUgsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCRixtQkFBU0gsS0FBS0MsR0FBTCxDQUFTRSxNQUFULEVBQWlCRSxhQUFqQixDQUFUO0FBQ0Q7QUFDRCxZQUFJRSxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJKLG1CQUFTSCxLQUFLRSxHQUFMLENBQVNDLE1BQVQsRUFBaUJJLGFBQWpCLENBQVQ7QUFDRDs7QUFFREosaUJBQVlBLE1BQVosUUFYZ0IsQ0FXUTtBQUN6Qjs7QUFFRCxrSUFBZ0JBLE1BQWhCO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTU0sV0FBVyxLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01kLGVBQWVlLFNBQVNGLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2IsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtGLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUwsZ0JBQWdCTSxTQUFTQyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNUSxXQUFXLEtBQUtILEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTVosZUFBZWEsU0FBU0UsUUFBVCxDQURyQjs7QUFHQSxhQUFPZixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0osR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNSCxnQkFBZ0JJLFNBQVNHLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7bUNBRXFCUSxVLEVBQVk7QUFDaEMsYUFBT3hCLFFBQVF5QixjQUFSLENBQXVCdkIsZUFBdkIsRUFBd0NzQixVQUF4QyxDQUFQO0FBQ0Q7Ozs7RUF2RTJCeEIsTzs7QUEwRTlCMEIsT0FBT0MsTUFBUCxDQUFjekIsZUFBZCxFQUErQjtBQUM3QjBCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI5QixlQUFqQjs7QUFFQSxTQUFTa0IsUUFBVCxDQUFrQmEsUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsU0FBUyxJQUFiOztBQUVBLE1BQU1DLFVBQVVGLFNBQVNHLEtBQVQsQ0FBZSxhQUFmLENBQWhCOztBQUVBLE1BQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFwQjs7QUFFQUQsYUFBU0csV0FBVCxDQUhvQixDQUdHO0FBQ3hCOztBQUVELFNBQU9ILE1BQVA7QUFDRDs7QUFFRCxTQUFTSSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNpemVhYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhOdW1iZXIgPSAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAod2lkdGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IHRoaXMuZ2V0TWluaW11bVdpZHRoKCksXG4gICAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgaGVpZ2h0TnVtYmVyID0gKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKTtcblxuICAgIGlmIChoZWlnaHROdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBtaW5pbXVtSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHMgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGl4ZWxzID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwaXhlbHM7XG59XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==