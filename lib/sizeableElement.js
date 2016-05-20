'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element;

var SizeableElement = function (_Element) {
  _inherits(SizeableElement, _Element);

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
  }]);

  return SizeableElement;
}(Element);

module.exports = SizeableElement;

function inPixels(quantity) {
  var matches = quantity.match(/([0-9]*)px$/),
      pixels = matches === null ? undefined : matches[1];

  return pixels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSOzs7Ozs7Ozs7Ozs2QkFDSyxPQUFPO0FBQ2QsVUFBSSxlQUFlLEtBQUssZUFBTCxFQUFmO1VBQ0EsZUFBZSxLQUFLLGVBQUwsRUFBZixDQUZVOztBQUlkLFVBQUksaUJBQWlCLFNBQWpCLEVBQTRCO0FBQzlCLGdCQUFRLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FBUixDQUQ4QjtPQUFoQztBQUdBLFVBQUksaUJBQWlCLFNBQWpCLEVBQTRCO0FBQzlCLGdCQUFRLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FBUixDQUQ4QjtPQUFoQzs7QUFJQSxpQ0FaRSx5REFZYSxNQUFmLENBWGM7Ozs7OEJBY04sUUFBUTtBQUNoQixVQUFJLGdCQUFnQixLQUFLLGdCQUFMLEVBQWhCO1VBQ0EsZ0JBQWdCLEtBQUssZ0JBQUwsRUFBaEIsQ0FGWTs7QUFJaEIsVUFBSSxrQkFBa0IsU0FBbEIsRUFBNkI7QUFDL0IsaUJBQVMsS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixhQUFqQixDQUFULENBRCtCO09BQWpDO0FBR0EsVUFBSSxrQkFBa0IsU0FBbEIsRUFBNkI7QUFDL0IsaUJBQVMsS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixhQUFqQixDQUFULENBRCtCO09BQWpDOztBQUlBLGlDQTFCRSwwREEwQmMsT0FBaEIsQ0FYZ0I7Ozs7c0NBY0E7QUFDaEIsVUFBSSxXQUFXLEtBQUssR0FBTCxDQUFTLFdBQVQsQ0FBWDtVQUNBLGVBQWUsU0FBUyxRQUFULENBQWYsQ0FGWTs7QUFJaEIsYUFBTyxZQUFQLENBSmdCOzs7O3VDQU9DO0FBQ2pCLFVBQUksWUFBWSxLQUFLLEdBQUwsQ0FBUyxZQUFULENBQVo7VUFDQSxnQkFBZ0IsU0FBUyxTQUFULENBQWhCLENBRmE7O0FBSWpCLGFBQU8sYUFBUCxDQUppQjs7OztzQ0FPRDtBQUNoQixVQUFJLFdBQVcsS0FBSyxHQUFMLENBQVMsV0FBVCxDQUFYO1VBQ0EsZUFBZSxTQUFTLFFBQVQsQ0FBZixDQUZZOztBQUloQixhQUFPLFlBQVAsQ0FKZ0I7Ozs7dUNBT0M7QUFDakIsVUFBSSxZQUFZLEtBQUssR0FBTCxDQUFTLFlBQVQsQ0FBWjtVQUNBLGdCQUFnQixTQUFTLFNBQVQsQ0FBaEIsQ0FGYTs7QUFJakIsYUFBTyxhQUFQLENBSmlCOzs7O1NBbERmO0VBQXdCOztBQTBEOUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCOztBQUVBLFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUE0QjtBQUMxQixNQUFJLFVBQVUsU0FBUyxLQUFULENBQWUsYUFBZixDQUFWO01BQ0EsU0FBUyxPQUFDLEtBQVksSUFBWixHQUNDLFNBREYsR0FFSSxRQUFRLENBQVIsQ0FGSixDQUZhOztBQU0xQixTQUFPLE1BQVAsQ0FOMEI7Q0FBNUIiLCJmaWxlIjoic2l6ZWFibGVFbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBTaXplYWJsZUVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB2YXIgbWluaW11bVdpZHRoID0gdGhpcy5nZXRNaW5pbXVtV2lkdGgoKSxcbiAgICAgICAgbWF4aW11bVdpZHRoID0gdGhpcy5nZXRNYXhpbXVtV2lkdGgoKTtcblxuICAgIGlmIChtaW5pbXVtV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgbWluaW11bVdpZHRoKTtcbiAgICB9XG4gICAgaWYgKG1heGltdW1XaWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCBtYXhpbXVtV2lkdGgpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICB2YXIgbWluaW11bUhlaWdodCA9IHRoaXMuZ2V0TWluaW11bUhlaWdodCgpLFxuICAgICAgICBtYXhpbXVtSGVpZ2h0ID0gdGhpcy5nZXRNYXhpbXVtSGVpZ2h0KCk7XG5cbiAgICBpZiAobWluaW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIG1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAobWF4aW11bUhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIG1heGltdW1IZWlnaHQpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuICB9XG5cbiAgZ2V0TWluaW11bVdpZHRoKCkgeyBcbiAgICB2YXIgbWluV2lkdGggPSB0aGlzLmNzcygnbWluLXdpZHRoJyksXG4gICAgICAgIG1pbmltdW1XaWR0aCA9IGluUGl4ZWxzKG1pbldpZHRoKTtcblxuICAgIHJldHVybiBtaW5pbXVtV2lkdGg7XG4gIH1cblxuICBnZXRNaW5pbXVtSGVpZ2h0KCkge1xuICAgIHZhciBtaW5IZWlnaHQgPSB0aGlzLmNzcygnbWluLWhlaWdodCcpLFxuICAgICAgICBtaW5pbXVtSGVpZ2h0ID0gaW5QaXhlbHMobWluSGVpZ2h0KTtcblxuICAgIHJldHVybiBtaW5pbXVtSGVpZ2h0O1xuICB9XG5cbiAgZ2V0TWF4aW11bVdpZHRoKCkge1xuICAgIHZhciBtYXhXaWR0aCA9IHRoaXMuY3NzKCdtYXgtd2lkdGgnKSxcbiAgICAgICAgbWF4aW11bVdpZHRoID0gaW5QaXhlbHMobWF4V2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1XaWR0aDtcbiAgfVxuXG4gIGdldE1heGltdW1IZWlnaHQoKSB7XG4gICAgdmFyIG1heEhlaWdodCA9IHRoaXMuY3NzKCdtYXgtaGVpZ2h0JyksXG4gICAgICAgIG1heGltdW1IZWlnaHQgPSBpblBpeGVscyhtYXhIZWlnaHQpO1xuXG4gICAgcmV0dXJuIG1heGltdW1IZWlnaHQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG5cbmZ1bmN0aW9uIGluUGl4ZWxzKHF1YW50aXR5KSB7XG4gIHZhciBtYXRjaGVzID0gcXVhbnRpdHkubWF0Y2goLyhbMC05XSopcHgkLyksXG4gICAgICBwaXhlbHMgPSAobWF0Y2hlcyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICB1bmRlZmluZWQgOlxuICAgICAgICAgICAgICAgICAgIG1hdGNoZXNbMV07XG5cbiAgcmV0dXJuIHBpeGVscztcbn1cbiJdfQ==
