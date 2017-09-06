'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    Element = easy.Element,
    second = arrayUtilities.second;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJhcnJheVV0aWxpdGllcyIsIkVsZW1lbnQiLCJzZWNvbmQiLCJTaXplYWJsZUVsZW1lbnQiLCJ3aWR0aCIsIndpZHRoTnVtYmVyIiwibWluaW11bVdpZHRoIiwiZ2V0TWluaW11bVdpZHRoIiwibWF4aW11bVdpZHRoIiwiZ2V0TWF4aW11bVdpZHRoIiwiTWF0aCIsIm1heCIsIm1pbiIsImhlaWdodCIsImhlaWdodE51bWJlciIsIm1pbmltdW1IZWlnaHQiLCJnZXRNaW5pbXVtSGVpZ2h0IiwibWF4aW11bUhlaWdodCIsImdldE1heGltdW1IZWlnaHQiLCJtaW5XaWR0aCIsImNzcyIsImluUGl4ZWxzIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicXVhbnRpdHkiLCJwaXhlbHMiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdNLElBQUVFLGNBQUYsR0FBcUJELFNBQXJCLENBQUVDLGNBQUY7QUFBQSxJQUNFQyxPQURGLEdBQ2NKLElBRGQsQ0FDRUksT0FERjtBQUFBLElBRUVDLE1BRkYsR0FFYUYsY0FGYixDQUVFRSxNQUZGOztJQUlBQyxlOzs7Ozs7Ozs7Ozs2QkFDS0MsSyxFQUFPO0FBQ2QsVUFBTUMsY0FBZSxPQUFPRCxLQUFQLEtBQWlCLFFBQXRDOztBQUVBLFVBQUlDLFdBQUosRUFBaUI7QUFDZixZQUFNQyxlQUFlLEtBQUtDLGVBQUwsRUFBckI7QUFBQSxZQUNNQyxlQUFlLEtBQUtDLGVBQUwsRUFEckI7O0FBR0EsWUFBSUgsaUJBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRixrQkFBUU0sS0FBS0MsR0FBTCxDQUFTUCxLQUFULEVBQWdCRSxZQUFoQixDQUFSO0FBQ0Q7QUFDRCxZQUFJRSxpQkFBaUIsSUFBckIsRUFBMkI7QUFDekJKLGtCQUFRTSxLQUFLRSxHQUFMLENBQVNSLEtBQVQsRUFBZ0JJLFlBQWhCLENBQVI7QUFDRDs7QUFFREosZ0JBQVdBLEtBQVgsUUFYZSxDQVdPO0FBQ3ZCOztBQUVELGlJQUFlQSxLQUFmO0FBQ0Q7Ozs4QkFFU1MsTSxFQUFRO0FBQ2hCLFVBQU1DLGVBQWdCLE9BQU9ELE1BQVAsS0FBa0IsUUFBeEM7O0FBRUEsVUFBSUMsWUFBSixFQUFrQjtBQUNoQixZQUFNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBdEI7QUFBQSxZQUNNQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFEdEI7O0FBR0EsWUFBSUgsa0JBQWtCLElBQXRCLEVBQTRCO0FBQzFCRixtQkFBU0gsS0FBS0MsR0FBTCxDQUFTRSxNQUFULEVBQWlCRSxhQUFqQixDQUFUO0FBQ0Q7QUFDRCxZQUFJRSxrQkFBa0IsSUFBdEIsRUFBNEI7QUFDMUJKLG1CQUFTSCxLQUFLRSxHQUFMLENBQVNDLE1BQVQsRUFBaUJJLGFBQWpCLENBQVQ7QUFDRDs7QUFFREosaUJBQVlBLE1BQVosUUFYZ0IsQ0FXUTtBQUN6Qjs7QUFFRCxrSUFBZ0JBLE1BQWhCO0FBQ0Q7OztzQ0FFaUI7QUFDaEIsVUFBTU0sV0FBVyxLQUFLQyxHQUFMLENBQVMsV0FBVCxDQUFqQjtBQUFBLFVBQ01kLGVBQWVlLFNBQVNGLFFBQVQsQ0FEckI7O0FBR0EsYUFBT2IsWUFBUDtBQUNEOzs7dUNBRWtCO0FBQ2pCLFVBQU1nQixZQUFZLEtBQUtGLEdBQUwsQ0FBUyxZQUFULENBQWxCO0FBQUEsVUFDTUwsZ0JBQWdCTSxTQUFTQyxTQUFULENBRHRCOztBQUdBLGFBQU9QLGFBQVA7QUFDRDs7O3NDQUVpQjtBQUNoQixVQUFNUSxXQUFXLEtBQUtILEdBQUwsQ0FBUyxXQUFULENBQWpCO0FBQUEsVUFDTVosZUFBZWEsU0FBU0UsUUFBVCxDQURyQjs7QUFHQSxhQUFPZixZQUFQO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBTWdCLFlBQVksS0FBS0osR0FBTCxDQUFTLFlBQVQsQ0FBbEI7QUFBQSxVQUNNSCxnQkFBZ0JJLFNBQVNHLFNBQVQsQ0FEdEI7O0FBR0EsYUFBT1AsYUFBUDtBQUNEOzs7bUNBRXFCUSxVLEVBQVk7QUFBRSxhQUFPeEIsUUFBUXlCLGNBQVIsQ0FBdUJ2QixlQUF2QixFQUF3Q3NCLFVBQXhDLENBQVA7QUFBNkQ7Ozs7RUFyRXJFeEIsTzs7QUF3RTlCMEIsT0FBT0MsTUFBUCxDQUFjekIsZUFBZCxFQUErQjtBQUM3QjBCLFdBQVMsS0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUI5QixlQUFqQjs7QUFFQSxTQUFTa0IsUUFBVCxDQUFrQmEsUUFBbEIsRUFBNEI7QUFDMUIsTUFBSUMsU0FBUyxJQUFiOztBQUVBLE1BQU1DLFVBQVVGLFNBQVNHLEtBQVQsQ0FBZSxhQUFmLENBQWhCOztBQUVBLE1BQUlELFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsUUFBTUUsY0FBY3BDLE9BQU9rQyxPQUFQLENBQXBCOztBQUVBRCxhQUFTRyxXQUFULENBSG9CLENBR0c7QUFDeEI7O0FBRUQsU0FBT0gsTUFBUDtBQUNEIiwiZmlsZSI6InNpemVhYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3ksXG4gICAgICB7IHNlY29uZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIGNvbnN0IHdpZHRoTnVtYmVyID0gKHR5cGVvZiB3aWR0aCA9PT0gJ251bWJlcicpO1xuXG4gICAgaWYgKHdpZHRoTnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtV2lkdGggPSB0aGlzLmdldE1pbmltdW1XaWR0aCgpLFxuICAgICAgICAgICAgbWF4aW11bVdpZHRoID0gdGhpcy5nZXRNYXhpbXVtV2lkdGgoKTtcblxuICAgICAgaWYgKG1pbmltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBtaW5pbXVtV2lkdGgpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGltdW1XaWR0aCAhPT0gbnVsbCkge1xuICAgICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgICAgfVxuXG4gICAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGNvbnN0IGhlaWdodE51bWJlciA9ICh0eXBlb2YgaGVpZ2h0ID09PSAnbnVtYmVyJyk7XG5cbiAgICBpZiAoaGVpZ2h0TnVtYmVyKSB7XG4gICAgICBjb25zdCBtaW5pbXVtSGVpZ2h0ID0gdGhpcy5nZXRNaW5pbXVtSGVpZ2h0KCksXG4gICAgICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICAgIGlmIChtaW5pbXVtSGVpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgbWluaW11bUhlaWdodCk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gbnVsbCkge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgICAgfVxuXG4gICAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cbiAgICB9XG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxuXG4gIGdldE1pbmltdW1XaWR0aCgpIHsgXG4gICAgY29uc3QgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgICAgbWluaW11bVdpZHRoID0gaW5QaXhlbHMobWluV2lkdGgpO1xuXG4gICAgcmV0dXJuIG1pbmltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1pbmltdW1IZWlnaHQoKSB7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gdGhpcy5jc3MoJ21pbi1oZWlnaHQnKSxcbiAgICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5jc3MoJ21heC13aWR0aCcpLFxuICAgICAgICAgIG1heGltdW1XaWR0aCA9IGluUGl4ZWxzKG1heFdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNYXhpbXVtSGVpZ2h0KCkge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgICAgbWF4aW11bUhlaWdodCA9IGluUGl4ZWxzKG1heEhlaWdodCk7XG5cbiAgICByZXR1cm4gbWF4aW11bUhlaWdodDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFNpemVhYmxlRWxlbWVudCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihTaXplYWJsZUVsZW1lbnQsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnc2l6ZWFibGUnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcblxuZnVuY3Rpb24gaW5QaXhlbHMocXVhbnRpdHkpIHtcbiAgbGV0IHBpeGVscyA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHF1YW50aXR5Lm1hdGNoKC8oWzAtOV0qKXB4JC8pO1xuXG4gIGlmIChtYXRjaGVzICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyk7XG5cbiAgICBwaXhlbHMgPSBzZWNvbmRNYXRjaDsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cblxuIl19