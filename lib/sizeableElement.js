'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    necessary = require('necessary');

var array = necessary.array;
var Element = easy.Element;
var second = array.second;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJhcnJheSIsIkVsZW1lbnQiLCJzZWNvbmQiLCJTaXplYWJsZUVsZW1lbnQiLCJ3aWR0aCIsIndpZHRoTnVtYmVyIiwibWluaW11bVdpZHRoIiwiZ2V0TWluaW11bVdpZHRoIiwibWF4aW11bVdpZHRoIiwiZ2V0TWF4aW11bVdpZHRoIiwiTWF0aCIsIm1heCIsIm1pbiIsImhlaWdodCIsImhlaWdodE51bWJlciIsIm1pbmltdW1IZWlnaHQiLCJnZXRNaW5pbXVtSGVpZ2h0IiwibWF4aW11bUhlaWdodCIsImdldE1heGltdW1IZWlnaHQiLCJtaW5XaWR0aCIsImNzcyIsImluUGl4ZWxzIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicXVhbnRpdHkiLCJwaXhlbHMiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdNLElBQUVFLEtBQUYsR0FBWUQsU0FBWixDQUFFQyxLQUFGO0FBQ0EsSUFBRUMsT0FBRixHQUFjSixJQUFkLENBQUVJLE9BQUY7SUFDRUMsTSxHQUFXRixLLENBQVhFLE07O0lBRUZDLGU7Ozs7Ozs7Ozs7OzZCQUNLQyxLLEVBQU87QUFDZCxVQUFNQyxjQUFlLE9BQU9ELEtBQVAsS0FBaUIsUUFBdEM7O0FBRUEsVUFBSUMsV0FBSixFQUFpQjtBQUNmLFlBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLFlBQ01DLGVBQWUsS0FBS0MsZUFBTCxFQURyQjs7QUFHQSxZQUFJSCxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJGLGtCQUFRTSxLQUFLQyxHQUFMLENBQVNQLEtBQVQsRUFBZ0JFLFlBQWhCLENBQVI7QUFDRDtBQUNELFlBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6Qkosa0JBQVFNLEtBQUtFLEdBQUwsQ0FBU1IsS0FBVCxFQUFnQkksWUFBaEIsQ0FBUjtBQUNEOztBQUVESixnQkFBV0EsS0FBWCxRQVhlLENBV087QUFDdkI7O0FBRUQsaUlBQWVBLEtBQWY7QUFDRDs7OzhCQUVTUyxNLEVBQVE7QUFDaEIsVUFBTUMsZUFBZ0IsT0FBT0QsTUFBUCxLQUFrQixRQUF4Qzs7QUFFQSxVQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQU1DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUF0QjtBQUFBLFlBQ01DLGdCQUFnQixLQUFLQyxnQkFBTCxFQUR0Qjs7QUFHQSxZQUFJSCxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJGLG1CQUFTSCxLQUFLQyxHQUFMLENBQVNFLE1BQVQsRUFBaUJFLGFBQWpCLENBQVQ7QUFDRDtBQUNELFlBQUlFLGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkosbUJBQVNILEtBQUtFLEdBQUwsQ0FBU0MsTUFBVCxFQUFpQkksYUFBakIsQ0FBVDtBQUNEOztBQUVESixpQkFBWUEsTUFBWixRQVhnQixDQVdRO0FBQ3pCOztBQUVELGtJQUFnQkEsTUFBaEI7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNTSxXQUFXLEtBQUtDLEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTWQsZUFBZWUsU0FBU0YsUUFBVCxDQURyQjs7QUFHQSxhQUFPYixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0YsR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNTCxnQkFBZ0JNLFNBQVNDLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1RLFdBQVcsS0FBS0gsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNWixlQUFlYSxTQUFTRSxRQUFULENBRHJCOztBQUdBLGFBQU9mLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZ0IsWUFBWSxLQUFLSixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01ILGdCQUFnQkksU0FBU0csU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OzttQ0FFcUJRLFUsRUFBWTtBQUFFLGFBQU94QixRQUFReUIsY0FBUixDQUF1QnZCLGVBQXZCLEVBQXdDc0IsVUFBeEMsQ0FBUDtBQUE2RDs7OztFQXJFckV4QixPOztBQXdFOUIwQixPQUFPQyxNQUFQLENBQWN6QixlQUFkLEVBQStCO0FBQzdCMEIsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjlCLGVBQWpCOztBQUVBLFNBQVNrQixRQUFULENBQWtCYSxRQUFsQixFQUE0QjtBQUMxQixNQUFJQyxTQUFTLElBQWI7O0FBRUEsTUFBTUMsVUFBVUYsU0FBU0csS0FBVCxDQUFlLGFBQWYsQ0FBaEI7O0FBRUEsTUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNRSxjQUFjcEMsT0FBT2tDLE9BQVAsQ0FBcEI7O0FBRUFELGFBQVNHLFdBQVQsQ0FIb0IsQ0FHRztBQUN4Qjs7QUFFRCxTQUFPSCxNQUFQO0FBQ0QiLCJmaWxlIjoic2l6ZWFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IHsgYXJyYXkgfSA9IG5lY2Vzc2FyeSxcbiAgICAgIHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgc2Vjb25kIH0gPSBhcnJheTtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgY29uc3Qgd2lkdGhOdW1iZXIgPSAodHlwZW9mIHdpZHRoID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAod2lkdGhOdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1XaWR0aCA9IHRoaXMuZ2V0TWluaW11bVdpZHRoKCksXG4gICAgICAgICAgICBtYXhpbXVtV2lkdGggPSB0aGlzLmdldE1heGltdW1XaWR0aCgpO1xuXG4gICAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIG1pbmltdW1XaWR0aCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICAgIHdpZHRoID0gTWF0aC5taW4od2lkdGgsIG1heGltdW1XaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgY29uc3QgaGVpZ2h0TnVtYmVyID0gKHR5cGVvZiBoZWlnaHQgPT09ICdudW1iZXInKTtcblxuICAgIGlmIChoZWlnaHROdW1iZXIpIHtcbiAgICAgIGNvbnN0IG1pbmltdW1IZWlnaHQgPSB0aGlzLmdldE1pbmltdW1IZWlnaHQoKSxcbiAgICAgICAgICAgIG1heGltdW1IZWlnaHQgPSB0aGlzLmdldE1heGltdW1IZWlnaHQoKTtcblxuICAgICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCBtaW5pbXVtSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgbWF4aW11bUhlaWdodCk7XG4gICAgICB9XG5cbiAgICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICBjb25zdCBtaW5XaWR0aCA9IHRoaXMuY3NzKCdtaW4td2lkdGgnKSxcbiAgICAgICAgICBtaW5pbXVtV2lkdGggPSBpblBpeGVscyhtaW5XaWR0aCk7XG5cbiAgICByZXR1cm4gbWluaW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWluaW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICAgIG1pbmltdW1IZWlnaHQgPSBpblBpeGVscyhtaW5IZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1IZWlnaHQ7XG4gIH1cblxuICBnZXRNYXhpbXVtV2lkdGgoKSB7XG4gICAgY29uc3QgbWF4V2lkdGggPSB0aGlzLmNzcygnbWF4LXdpZHRoJyksXG4gICAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdGhpcy5jc3MoJ21heC1oZWlnaHQnKSxcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWF4SGVpZ2h0KTtcblxuICAgIHJldHVybiBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoU2l6ZWFibGVFbGVtZW50LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFNpemVhYmxlRWxlbWVudCwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdzaXplYWJsZSdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2l6ZWFibGVFbGVtZW50O1xuXG5mdW5jdGlvbiBpblBpeGVscyhxdWFudGl0eSkge1xuICBsZXQgcGl4ZWxzID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBpeGVscyA9IHNlY29uZE1hdGNoOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcGl4ZWxzO1xufVxuXG4iXX0=