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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJ3aWR0aE51bWJlciIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJoZWlnaHROdW1iZXIiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwicGl4ZWxzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTzs7SUFFRkMsZTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQU1DLGNBQWUsT0FBT0QsS0FBUCxLQUFpQixRQUF0Qzs7QUFFQSxVQUFJQyxXQUFKLEVBQWlCO0FBQ2YsWUFBTUMsZUFBZSxLQUFLQyxlQUFMLEVBQXJCO0FBQUEsWUFDTUMsZUFBZSxLQUFLQyxlQUFMLEVBRHJCOztBQUdBLFlBQUlILGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QkYsa0JBQVFNLEtBQUtDLEdBQUwsQ0FBU1AsS0FBVCxFQUFnQkUsWUFBaEIsQ0FBUjtBQUNEO0FBQ0QsWUFBSUUsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCSixrQkFBUU0sS0FBS0UsR0FBTCxDQUFTUixLQUFULEVBQWdCSSxZQUFoQixDQUFSO0FBQ0Q7O0FBRURKLGdCQUFXQSxLQUFYLFFBWGUsQ0FXTztBQUN2Qjs7QUFFRCxpSUFBZUEsS0FBZjtBQUNEOzs7OEJBRVNTLE0sRUFBUTtBQUNoQixVQUFNQyxlQUFnQixPQUFPRCxNQUFQLEtBQWtCLFFBQXhDOztBQUVBLFVBQUlDLFlBQUosRUFBa0I7QUFDaEIsWUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsWUFDTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHRCOztBQUdBLFlBQUlILGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkYsbUJBQVNILEtBQUtDLEdBQUwsQ0FBU0UsTUFBVCxFQUFpQkUsYUFBakIsQ0FBVDtBQUNEO0FBQ0QsWUFBSUUsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCSixtQkFBU0gsS0FBS0UsR0FBTCxDQUFTQyxNQUFULEVBQWlCSSxhQUFqQixDQUFUO0FBQ0Q7O0FBRURKLGlCQUFZQSxNQUFaLFFBWGdCLENBV1E7QUFDekI7O0FBRUQsa0lBQWdCQSxNQUFoQjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1NLFdBQVcsS0FBS0MsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNZCxlQUFlZSxTQUFTRixRQUFULENBRHJCOztBQUdBLGFBQU9iLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZ0IsWUFBWSxLQUFLRixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01MLGdCQUFnQk0sU0FBU0MsU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTVEsV0FBVyxLQUFLSCxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01aLGVBQWVhLFNBQVNFLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2YsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtKLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUgsZ0JBQWdCSSxTQUFTRyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O21DQUVxQlEsVSxFQUFZO0FBQ2hDLGFBQU92QixRQUFRd0IsY0FBUixDQUF1QnZCLGVBQXZCLEVBQXdDc0IsVUFBeEMsQ0FBUDtBQUNEOzs7O0VBdkUyQnZCLE87O0FBMEU5QnlCLE9BQU9DLE1BQVAsQ0FBY3pCLGVBQWQsRUFBK0I7QUFDN0IwQixXQUFTLEtBRG9CO0FBRTdCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZVLENBQS9COztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCOUIsZUFBakI7O0FBRUEsU0FBU2tCLFFBQVQsQ0FBa0JhLFFBQWxCLEVBQTRCO0FBQzFCLE1BQUlDLFNBQVMsSUFBYjs7QUFFQSxNQUFNQyxVQUFVRixTQUFTRyxLQUFULENBQWUsYUFBZixDQUFoQjs7QUFFQSxNQUFJRCxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLFFBQU1FLGNBQWNDLE9BQU9ILE9BQVAsQ0FBcEI7O0FBRUFELGFBQVNHLFdBQVQsQ0FIb0IsQ0FHRztBQUN4Qjs7QUFFRCxTQUFPSCxNQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBRSxTQUFPQSxNQUFNLENBQU4sQ0FBUDtBQUFrQiIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhOdW1iZXIgPSAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAod2lkdGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IHRoaXMuZ2V0TWluaW11bVdpZHRoKCksXG4gICAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgaGVpZ2h0TnVtYmVyID0gKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKTtcblxuICAgIGlmIChoZWlnaHROdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBtaW5pbXVtSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTaXplYWJsZUVsZW1lbnQsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2l6ZWFibGVFbGVtZW50LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3NpemVhYmxlJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHMgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBxdWFudGl0eS5tYXRjaCgvKFswLTldKilweCQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGl4ZWxzID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwaXhlbHM7XG59XG5cbmZ1bmN0aW9uIHNlY29uZChhcnJheSkgeyByZXR1cm4gYXJyYXlbMV07IH1cbiJdfQ==