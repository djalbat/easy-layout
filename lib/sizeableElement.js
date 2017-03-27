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
      var minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

      if (minimumWidth !== null) {
        width = Math.max(width, minimumWidth);
      }
      if (maximumWidth !== null) {
        width = Math.min(width, maximumWidth);
      }

      width = width + 'px'; ///

      _get(SizeableElement.prototype.__proto__ || Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      var minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

      if (minimumHeight !== null) {
        height = Math.max(height, minimumHeight);
      }
      if (maximumHeight !== null) {
        height = Math.min(height, maximumHeight);
      }

      height = '' + height; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVsZW1lbnQiLCJlYXN5IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJtaW5pbXVtV2lkdGgiLCJnZXRNaW5pbXVtV2lkdGgiLCJtYXhpbXVtV2lkdGgiLCJnZXRNYXhpbXVtV2lkdGgiLCJNYXRoIiwibWF4IiwibWluIiwiaGVpZ2h0IiwibWluaW11bUhlaWdodCIsImdldE1pbmltdW1IZWlnaHQiLCJtYXhpbXVtSGVpZ2h0IiwiZ2V0TWF4aW11bUhlaWdodCIsIm1pbldpZHRoIiwiY3NzIiwiaW5QaXhlbHMiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJxdWFudGl0eSIsInBpeGVscyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFTSxXQUFPQSxRQUFRLE1BQVIsQ0FBUDtJQUNFQyxPLEdBQVlDLEksQ0FBWkQsTzs7SUFFRkUsZTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLFVBQ01DLGVBQWUsS0FBS0MsZUFBTCxFQURyQjs7QUFHQSxVQUFJSCxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRSyxLQUFLQyxHQUFMLENBQVNOLEtBQVQsRUFBZ0JDLFlBQWhCLENBQVI7QUFDRDtBQUNELFVBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QkgsZ0JBQVFLLEtBQUtFLEdBQUwsQ0FBU1AsS0FBVCxFQUFnQkcsWUFBaEIsQ0FBUjtBQUNEOztBQUVESCxjQUFXQSxLQUFYLFFBWGMsQ0FXUTs7QUFFdEIsaUlBQWVBLEtBQWY7QUFDRDs7OzhCQUVTUSxNLEVBQVE7QUFDaEIsVUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHRCOztBQUdBLFVBQUlILGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkQsaUJBQVNILEtBQUtDLEdBQUwsQ0FBU0UsTUFBVCxFQUFpQkMsYUFBakIsQ0FBVDtBQUNEO0FBQ0QsVUFBSUUsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCSCxpQkFBU0gsS0FBS0UsR0FBTCxDQUFTQyxNQUFULEVBQWlCRyxhQUFqQixDQUFUO0FBQ0Q7O0FBRURILG9CQUFZQSxNQUFaLENBWGdCLENBV007O0FBRXRCLGtJQUFnQkEsTUFBaEI7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNSyxXQUFXLEtBQUtDLEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTWIsZUFBZWMsU0FBU0YsUUFBVCxDQURyQjs7QUFHQSxhQUFPWixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWUsWUFBWSxLQUFLRixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01MLGdCQUFnQk0sU0FBU0MsU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTVEsV0FBVyxLQUFLSCxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01YLGVBQWVZLFNBQVNFLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2QsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1lLFlBQVksS0FBS0osR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNSCxnQkFBZ0JJLFNBQVNHLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7bUNBRXFCUSxVLEVBQVk7QUFDaEMsYUFBT3RCLFFBQVF1QixjQUFSLENBQXVCckIsZUFBdkIsRUFBd0NvQixVQUF4QyxDQUFQO0FBQ0Q7Ozs7RUEvRDJCdEIsTzs7QUFrRTlCd0IsT0FBT0MsTUFBUCxDQUFjdkIsZUFBZCxFQUErQjtBQUM3QndCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI1QixlQUFqQjs7QUFFQSxTQUFTZ0IsUUFBVCxDQUFrQmEsUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsU0FBUyxJQUFiOztBQUVBLE1BQU1DLFVBQVVGLFNBQVNHLEtBQVQsQ0FBZSxhQUFmLENBQWhCOztBQUVBLE1BQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTUUsY0FBY0MsT0FBT0gsT0FBUCxDQUFwQjs7QUFFQUQsYUFBU0csV0FBVCxDQUhvQixDQUdHO0FBQ3hCOztBQUVELFNBQU9ILE1BQVA7QUFDRDs7QUFFRCxTQUFTSSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6InNpemVhYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3QgbWluaW11bVdpZHRoID0gdGhpcy5nZXRNaW5pbXVtV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbWluaW11bVdpZHRoKTtcbiAgICB9XG4gICAgaWYgKG1heGltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbWF4aW11bVdpZHRoKTtcbiAgICB9XG5cbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBtYXhpbXVtSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9YDsgLy8vXG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGdldE1pbmltdW1XaWR0aCgpIHsgXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5jc3MoJ21pbi1oZWlnaHQnKSxcbiAgICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IGluUGl4ZWxzKG1heFdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNYXhpbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuXG5mdW5jdGlvbiBpblBpeGVscyhxdWFudGl0eSkge1xuICBsZXQgcGl4ZWxzID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG5mdW5jdGlvbiBzZWNvbmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzFdOyB9XG4iXX0=