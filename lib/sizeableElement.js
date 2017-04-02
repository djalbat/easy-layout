'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    Element = easy.Element;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVsZW1lbnQiLCJlYXN5IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJ3aWR0aE51bWJlciIsIm1pbmltdW1XaWR0aCIsImdldE1pbmltdW1XaWR0aCIsIm1heGltdW1XaWR0aCIsImdldE1heGltdW1XaWR0aCIsIk1hdGgiLCJtYXgiLCJtaW4iLCJoZWlnaHQiLCJoZWlnaHROdW1iZXIiLCJtaW5pbXVtSGVpZ2h0IiwiZ2V0TWluaW11bUhlaWdodCIsIm1heGltdW1IZWlnaHQiLCJnZXRNYXhpbXVtSGVpZ2h0IiwibWluV2lkdGgiLCJjc3MiLCJpblBpeGVscyIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1YW50aXR5IiwicGl4ZWxzIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJzZWNvbmQiLCJhcnJheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVNLFdBQU9BLFFBQVEsTUFBUixDQUFQO0FBQUEsSUFDRUMsT0FERixHQUNjQyxJQURkLENBQ0VELE9BREY7O0lBR0FFLGU7Ozs7Ozs7Ozs7OzZCQUNLQyxLLEVBQU87QUFDZCxVQUFNQyxjQUFlLE9BQU9ELEtBQVAsS0FBaUIsUUFBdEM7O0FBRUEsVUFBSUMsV0FBSixFQUFpQjtBQUNmLFlBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLFlBQ01DLGVBQWUsS0FBS0MsZUFBTCxFQURyQjs7QUFHQSxZQUFJSCxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJGLGtCQUFRTSxLQUFLQyxHQUFMLENBQVNQLEtBQVQsRUFBZ0JFLFlBQWhCLENBQVI7QUFDRDtBQUNELFlBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6Qkosa0JBQVFNLEtBQUtFLEdBQUwsQ0FBU1IsS0FBVCxFQUFnQkksWUFBaEIsQ0FBUjtBQUNEOztBQUVESixnQkFBV0EsS0FBWCxRQVhlLENBV087QUFDdkI7O0FBRUQsaUlBQWVBLEtBQWY7QUFDRDs7OzhCQUVTUyxNLEVBQVE7QUFDaEIsVUFBTUMsZUFBZ0IsT0FBT0QsTUFBUCxLQUFrQixRQUF4Qzs7QUFFQSxVQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFlBQ01DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0Qjs7QUFHQSxZQUFJSCxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJGLG1CQUFTSCxLQUFLQyxHQUFMLENBQVNFLE1BQVQsRUFBaUJFLGFBQWpCLENBQVQ7QUFDRDtBQUNELFlBQUlFLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkosbUJBQVNILEtBQUtFLEdBQUwsQ0FBU0MsTUFBVCxFQUFpQkksYUFBakIsQ0FBVDtBQUNEOztBQUVESixpQkFBWUEsTUFBWixRQVhnQixDQVdRO0FBQ3pCOztBQUVELGtJQUFnQkEsTUFBaEI7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNTSxXQUFXLEtBQUtDLEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTWQsZUFBZWUsU0FBU0YsUUFBVCxDQURyQjs7QUFHQSxhQUFPYixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0YsR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNTCxnQkFBZ0JNLFNBQVNDLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1RLFdBQVcsS0FBS0gsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNWixlQUFlYSxTQUFTRSxRQUFULENBRHJCOztBQUdBLGFBQU9mLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZ0IsWUFBWSxLQUFLSixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01ILGdCQUFnQkksU0FBU0csU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OzttQ0FFcUJRLFUsRUFBWTtBQUNoQyxhQUFPeEIsUUFBUXlCLGNBQVIsQ0FBdUJ2QixlQUF2QixFQUF3Q3NCLFVBQXhDLENBQVA7QUFDRDs7OztFQXZFMkJ4QixPOztBQTBFOUIwQixPQUFPQyxNQUFQLENBQWN6QixlQUFkLEVBQStCO0FBQzdCMEIsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjlCLGVBQWpCOztBQUVBLFNBQVNrQixRQUFULENBQWtCYSxRQUFsQixFQUE0QjtBQUMxQixNQUFJQyxTQUFTLElBQWI7O0FBRUEsTUFBTUMsVUFBVUYsU0FBU0csS0FBVCxDQUFlLGFBQWYsQ0FBaEI7O0FBRUEsTUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNRSxjQUFjQyxPQUFPSCxPQUFQLENBQXBCOztBQUVBRCxhQUFTRyxXQUFULENBSG9CLENBR0c7QUFDeEI7O0FBRUQsU0FBT0gsTUFBUDtBQUNEOztBQUVELFNBQVNJLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2l6ZWFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTaXplYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCB3aWR0aE51bWJlciA9ICh0eXBlb2Ygd2lkdGggPT09ICdudW1iZXInKTtcblxuICAgIGlmICh3aWR0aE51bWJlcikge1xuICAgICAgY29uc3QgbWluaW11bVdpZHRoID0gdGhpcy5nZXRNaW5pbXVtV2lkdGgoKSxcbiAgICAgICAgICAgIG1heGltdW1XaWR0aCA9IHRoaXMuZ2V0TWF4aW11bVdpZHRoKCk7XG5cbiAgICAgIGlmIChtaW5pbXVtV2lkdGggIT09IG51bGwpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbWluaW11bVdpZHRoKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtV2lkdGggIT09IG51bGwpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgbWF4aW11bVdpZHRoKTtcbiAgICAgIH1cblxuICAgICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBjb25zdCBoZWlnaHROdW1iZXIgPSAodHlwZW9mIGhlaWdodCA9PT0gJ251bWJlcicpO1xuXG4gICAgaWYgKGhlaWdodE51bWJlcikge1xuICAgICAgY29uc3QgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICAgICAgbWF4aW11bUhlaWdodCA9IHRoaXMuZ2V0TWF4aW11bUhlaWdodCgpO1xuXG4gICAgICBpZiAobWluaW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG1pbmltdW1IZWlnaHQpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5taW4oaGVpZ2h0LCBtYXhpbXVtSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5jc3MoJ21pbi13aWR0aCcpLFxuICAgICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgICAgbWluaW11bUhlaWdodCA9IGluUGl4ZWxzKG1pbkhlaWdodCk7XG5cbiAgICByZXR1cm4gbWluaW11bUhlaWdodDtcbiAgfVxuXG4gIGdldE1heGltdW1XaWR0aCgpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLmNzcygnbWF4LWhlaWdodCcpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaXplYWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnc2l6ZWFibGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgbGV0IHBpeGVscyA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHF1YW50aXR5Lm1hdGNoKC8oWzAtOV0qKXB4JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19