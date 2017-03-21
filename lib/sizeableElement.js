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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SizeableElement).apply(this, arguments));
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

      _get(Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
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

      _get(Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkRpdiIsImVhc3l1aSIsIlNpemVhYmxlRWxlbWVudCIsIndpZHRoIiwibWluaW11bVdpZHRoIiwiZ2V0TWluaW11bVdpZHRoIiwibWF4aW11bVdpZHRoIiwiZ2V0TWF4aW11bVdpZHRoIiwidW5kZWZpbmVkIiwiTWF0aCIsIm1heCIsIm1pbiIsImhlaWdodCIsIm1pbmltdW1IZWlnaHQiLCJnZXRNaW5pbXVtSGVpZ2h0IiwibWF4aW11bUhlaWdodCIsImdldE1heGltdW1IZWlnaHQiLCJtaW5XaWR0aCIsImNzcyIsImluUGl4ZWxzIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwicXVhbnRpdHkiLCJwaXhlbHMiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInNlY29uZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRU0sYUFBU0EsUUFBUSxRQUFSLENBQVQ7SUFDRUMsRyxHQUFRQyxNLENBQVJELEc7O0lBRUZFLGU7WUFBQUEsZTs7V0FBQUEsZTswQkFBQUEsZTs7a0VBQUFBLGU7OztlQUFBQSxlOzs2QkFDS0MsSyxFQUFPO0FBQ2QsVUFBTUMsZUFBZSxLQUFLQyxlQUFMLEVBQXJCO0FBQUEsVUFDTUMsZUFBZSxLQUFLQyxlQUFMLEVBRHJCOztBQUdBLFVBQUlILGlCQUFpQkksU0FBckIsRUFBZ0M7QUFDOUJMLGdCQUFRTSxLQUFLQyxHQUFMLENBQVNQLEtBQVQsRUFBZ0JDLFlBQWhCLENBQVI7QUFDRDtBQUNELFVBQUlFLGlCQUFpQkUsU0FBckIsRUFBZ0M7QUFDOUJMLGdCQUFRTSxLQUFLRSxHQUFMLENBQVNSLEtBQVQsRUFBZ0JHLFlBQWhCLENBQVI7QUFDRDs7QUFFRCxpQ0FaRUosZUFZRiwwQ0FBZUMsS0FBZjtBQUNEOzs7OEJBRVNTLE0sRUFBUTtBQUNoQixVQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxVQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7O0FBR0EsVUFBSUgsa0JBQWtCTCxTQUF0QixFQUFpQztBQUMvQkksaUJBQVNILEtBQUtDLEdBQUwsQ0FBU0UsTUFBVCxFQUFpQkMsYUFBakIsQ0FBVDtBQUNEO0FBQ0QsVUFBSUUsa0JBQWtCUCxTQUF0QixFQUFpQztBQUMvQkksaUJBQVNILEtBQUtFLEdBQUwsQ0FBU0MsTUFBVCxFQUFpQkcsYUFBakIsQ0FBVDtBQUNEOztBQUVELGlDQTFCRWIsZUEwQkYsMkNBQWdCVSxNQUFoQjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1LLFdBQVcsS0FBS0MsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNZCxlQUFlZSxTQUFTRixRQUFULENBRHJCOztBQUdBLGFBQU9iLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZ0IsWUFBWSxLQUFLRixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01MLGdCQUFnQk0sU0FBU0MsU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTVEsV0FBVyxLQUFLSCxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01aLGVBQWVhLFNBQVNFLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2YsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtKLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUgsZ0JBQWdCSSxTQUFTRyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O21DQUVxQlEsVSxFQUFZO0FBQ2hDLGFBQU92QixJQUFJd0IsY0FBSixDQUFtQnRCLGVBQW5CLEVBQW9DcUIsVUFBcEMsQ0FBUDtBQUNEOzs7U0EzREdyQixlO0VBQXdCRixHOztBQThEOUJ5QixPQUFPQyxPQUFQLEdBQWlCeEIsZUFBakI7O0FBRUEsU0FBU2lCLFFBQVQsQ0FBa0JRLFFBQWxCLEVBQTRCO0FBQzFCLE1BQUlDLGVBQUo7O0FBRUEsTUFBTUMsVUFBVUYsU0FBU0csS0FBVCxDQUFlLGFBQWYsQ0FBaEI7O0FBRUEsTUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNRSxjQUFjQyxPQUFPSCxPQUFQLENBQXBCOztBQUVBRCxhQUFTRyxXQUFULENBSG9CLENBR0c7QUFDeEI7O0FBRUQsU0FBT0gsTUFBUDtBQUNEOztBQUVELFNBQVNJLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2l6ZWFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgRGl2IH0gPSBlYXN5dWk7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIERpdiB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3QgbWluaW11bVdpZHRoID0gdGhpcy5nZXRNaW5pbXVtV2lkdGgoKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bVdpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICBpZiAobWluaW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRGl2LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIGxldCBwaXhlbHM7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHF1YW50aXR5Lm1hdGNoKC8oWzAtOV0qKXB4JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19