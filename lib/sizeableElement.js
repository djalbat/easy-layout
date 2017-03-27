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

      height = height + 'px'; ///

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkVsZW1lbnQiLCJlYXN5IiwiU2l6ZWFibGVFbGVtZW50Iiwid2lkdGgiLCJtaW5pbXVtV2lkdGgiLCJnZXRNaW5pbXVtV2lkdGgiLCJtYXhpbXVtV2lkdGgiLCJnZXRNYXhpbXVtV2lkdGgiLCJNYXRoIiwibWF4IiwibWluIiwiaGVpZ2h0IiwibWluaW11bUhlaWdodCIsImdldE1pbmltdW1IZWlnaHQiLCJtYXhpbXVtSGVpZ2h0IiwiZ2V0TWF4aW11bUhlaWdodCIsIm1pbldpZHRoIiwiY3NzIiwiaW5QaXhlbHMiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJxdWFudGl0eSIsInBpeGVscyIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwic2Vjb25kIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFTSxXQUFPQSxRQUFRLE1BQVIsQ0FBUDtJQUNFQyxPLEdBQVlDLEksQ0FBWkQsTzs7SUFFRkUsZTs7Ozs7Ozs7Ozs7NkJBQ0tDLEssRUFBTztBQUNkLFVBQU1DLGVBQWUsS0FBS0MsZUFBTCxFQUFyQjtBQUFBLFVBQ01DLGVBQWUsS0FBS0MsZUFBTCxFQURyQjs7QUFHQSxVQUFJSCxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJELGdCQUFRSyxLQUFLQyxHQUFMLENBQVNOLEtBQVQsRUFBZ0JDLFlBQWhCLENBQVI7QUFDRDtBQUNELFVBQUlFLGlCQUFpQixJQUFyQixFQUEyQjtBQUN6QkgsZ0JBQVFLLEtBQUtFLEdBQUwsQ0FBU1AsS0FBVCxFQUFnQkcsWUFBaEIsQ0FBUjtBQUNEOztBQUVESCxjQUFXQSxLQUFYLFFBWGMsQ0FXUTs7QUFFdEIsaUlBQWVBLEtBQWY7QUFDRDs7OzhCQUVTUSxNLEVBQVE7QUFDaEIsVUFBTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBQXRCO0FBQUEsVUFDTUMsZ0JBQWdCLEtBQUtDLGdCQUFMLEVBRHRCOztBQUdBLFVBQUlILGtCQUFrQixJQUF0QixFQUE0QjtBQUMxQkQsaUJBQVNILEtBQUtDLEdBQUwsQ0FBU0UsTUFBVCxFQUFpQkMsYUFBakIsQ0FBVDtBQUNEO0FBQ0QsVUFBSUUsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCSCxpQkFBU0gsS0FBS0UsR0FBTCxDQUFTQyxNQUFULEVBQWlCRyxhQUFqQixDQUFUO0FBQ0Q7O0FBRURILGVBQVlBLE1BQVosUUFYZ0IsQ0FXUTs7QUFFeEIsa0lBQWdCQSxNQUFoQjtBQUNEOzs7c0NBRWlCO0FBQ2hCLFVBQU1LLFdBQVcsS0FBS0MsR0FBTCxDQUFTLFdBQVQsQ0FBakI7QUFBQSxVQUNNYixlQUFlYyxTQUFTRixRQUFULENBRHJCOztBQUdBLGFBQU9aLFlBQVA7QUFDRDs7O3VDQUVrQjtBQUNqQixVQUFNZSxZQUFZLEtBQUtGLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUwsZ0JBQWdCTSxTQUFTQyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNUSxXQUFXLEtBQUtILEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTVgsZUFBZVksU0FBU0UsUUFBVCxDQURyQjs7QUFHQSxhQUFPZCxZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWUsWUFBWSxLQUFLSixHQUFMLENBQVMsWUFBVCxDQUFsQjtBQUFBLFVBQ01ILGdCQUFnQkksU0FBU0csU0FBVCxDQUR0Qjs7QUFHQSxhQUFPUCxhQUFQO0FBQ0Q7OzttQ0FFcUJRLFUsRUFBWTtBQUNoQyxhQUFPdEIsUUFBUXVCLGNBQVIsQ0FBdUJyQixlQUF2QixFQUF3Q29CLFVBQXhDLENBQVA7QUFDRDs7OztFQS9EMkJ0QixPOztBQWtFOUJ3QixPQUFPQyxNQUFQLENBQWN2QixlQUFkLEVBQStCO0FBQzdCd0IsV0FBUyxLQURvQjtBQUU3QkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGVSxDQUEvQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjVCLGVBQWpCOztBQUVBLFNBQVNnQixRQUFULENBQWtCYSxRQUFsQixFQUE0QjtBQUMxQixNQUFJQyxTQUFTLElBQWI7O0FBRUEsTUFBTUMsVUFBVUYsU0FBU0csS0FBVCxDQUFlLGFBQWYsQ0FBaEI7O0FBRUEsTUFBSUQsWUFBWSxJQUFoQixFQUFzQjtBQUNwQixRQUFNRSxjQUFjQyxPQUFPSCxPQUFQLENBQXBCOztBQUVBRCxhQUFTRyxXQUFULENBSG9CLENBR0c7QUFDeEI7O0FBRUQsU0FBT0gsTUFBUDtBQUNEOztBQUVELFNBQVNJLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUUsU0FBT0EsTUFBTSxDQUFOLENBQVA7QUFBa0IiLCJmaWxlIjoic2l6ZWFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTaXplYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IHRoaXMuZ2V0TWF4aW11bVdpZHRoKCk7XG5cbiAgICBpZiAobWluaW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bVdpZHRoICE9PSBudWxsKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgIH1cblxuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBjb25zdCBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IHRoaXMuZ2V0TWF4aW11bUhlaWdodCgpO1xuXG4gICAgaWYgKG1pbmltdW1IZWlnaHQgIT09IG51bGwpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmIChtYXhpbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgIH1cblxuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cblxuICBnZXRNaW5pbXVtV2lkdGgoKSB7IFxuICAgIGNvbnN0IG1pbldpZHRoID0gdGhpcy5jc3MoJ21pbi13aWR0aCcpLFxuICAgICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1pbkhlaWdodCA9IHRoaXMuY3NzKCdtaW4taGVpZ2h0JyksXG4gICAgICAgICAgbWluaW11bUhlaWdodCA9IGluUGl4ZWxzKG1pbkhlaWdodCk7XG5cbiAgICByZXR1cm4gbWluaW11bUhlaWdodDtcbiAgfVxuXG4gIGdldE1heGltdW1XaWR0aCgpIHtcbiAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgICBtYXhpbXVtV2lkdGggPSBpblBpeGVscyhtYXhXaWR0aCk7XG5cbiAgICByZXR1cm4gbWF4aW11bVdpZHRoO1xuICB9XG5cbiAgZ2V0TWF4aW11bUhlaWdodCgpIHtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB0aGlzLmNzcygnbWF4LWhlaWdodCcpLFxuICAgICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaXplYWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnc2l6ZWFibGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgbGV0IHBpeGVscyA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHF1YW50aXR5Lm1hdGNoKC8oWzAtOV0qKXB4JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuIl19