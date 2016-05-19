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

  function SizeableElement(selector, minimumWidth, minimumHeight, maximumWidth, maximumHeight) {
    _classCallCheck(this, SizeableElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SizeableElement).call(this, selector));

    _this.minimumWidth = minimumWidth;
    _this.minimumHeight = minimumHeight;
    _this.maximumWidth = maximumWidth;
    _this.maximumHeight = maximumHeight;
    return _this;
  }

  _createClass(SizeableElement, [{
    key: 'setWidth',
    value: function setWidth(width) {
      if (width === 'auto') {
        _get(Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);

        return;
      }

      if (this.minimumWidth) {
        width = Math.max(width, this.minimumWidth);
      }
      if (this.maximumWidth) {
        width = Math.min(width, this.maximumWidth);
      }

      _get(Object.getPrototypeOf(SizeableElement.prototype), 'setWidth', this).call(this, width);
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      if (height === 'auto') {
        _get(Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);

        return;
      }

      if (this.minimumHeight) {
        height = Math.max(height, this.minimumHeight);
      }
      if (this.maximumHeight) {
        height = Math.min(height, this.maximumHeight);
      }

      _get(Object.getPrototypeOf(SizeableElement.prototype), 'setHeight', this).call(this, height);
    }
  }]);

  return SizeableElement;
}(Element);

module.exports = SizeableElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSOzs7QUFDSixXQURJLGVBQ0osQ0FBWSxRQUFaLEVBQXNCLFlBQXRCLEVBQW9DLGFBQXBDLEVBQW1ELFlBQW5ELEVBQWlFLGFBQWpFLEVBQWdGOzBCQUQ1RSxpQkFDNEU7O3VFQUQ1RSw0QkFFSSxXQUR3RTs7QUFHOUUsVUFBSyxZQUFMLEdBQW9CLFlBQXBCLENBSDhFO0FBSTlFLFVBQUssYUFBTCxHQUFxQixhQUFyQixDQUo4RTtBQUs5RSxVQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FMOEU7QUFNOUUsVUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBTjhFOztHQUFoRjs7ZUFESTs7NkJBVUssT0FBTztBQUNkLFVBQUksVUFBVSxNQUFWLEVBQWtCO0FBQ3BCLG1DQVpBLHlEQVllLE1BQWYsQ0FEb0I7O0FBR3BCLGVBSG9CO09BQXRCOztBQU1BLFVBQUksS0FBSyxZQUFMLEVBQW1CO0FBQ3JCLGdCQUFRLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsS0FBSyxZQUFMLENBQXhCLENBRHFCO09BQXZCO0FBR0EsVUFBSSxLQUFLLFlBQUwsRUFBbUI7QUFDckIsZ0JBQVEsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixLQUFLLFlBQUwsQ0FBeEIsQ0FEcUI7T0FBdkI7O0FBSUEsaUNBeEJFLHlEQXdCYSxNQUFmLENBZGM7Ozs7OEJBaUJOLFFBQVE7QUFDaEIsVUFBSSxXQUFXLE1BQVgsRUFBbUI7QUFDckIsbUNBN0JBLDBEQTZCZ0IsT0FBaEIsQ0FEcUI7O0FBR3JCLGVBSHFCO09BQXZCOztBQU1BLFVBQUksS0FBSyxhQUFMLEVBQW9CO0FBQ3RCLGlCQUFTLEtBQUssR0FBTCxDQUFTLE1BQVQsRUFBaUIsS0FBSyxhQUFMLENBQTFCLENBRHNCO09BQXhCO0FBR0EsVUFBSSxLQUFLLGFBQUwsRUFBb0I7QUFDdEIsaUJBQVMsS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixLQUFLLGFBQUwsQ0FBMUIsQ0FEc0I7T0FBeEI7O0FBSUEsaUNBekNFLDBEQXlDYyxPQUFoQixDQWRnQjs7OztTQTNCZDtFQUF3Qjs7QUE2QzlCLE9BQU8sT0FBUCxHQUFpQixlQUFqQiIsImZpbGUiOiJzaXplYWJsZUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQ7XG5cbmNsYXNzIFNpemVhYmxlRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgbWluaW11bVdpZHRoLCBtaW5pbXVtSGVpZ2h0LCBtYXhpbXVtV2lkdGgsIG1heGltdW1IZWlnaHQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm1pbmltdW1XaWR0aCA9IG1pbmltdW1XaWR0aDtcbiAgICB0aGlzLm1pbmltdW1IZWlnaHQgPSBtaW5pbXVtSGVpZ2h0O1xuICAgIHRoaXMubWF4aW11bVdpZHRoID0gbWF4aW11bVdpZHRoO1xuICAgIHRoaXMubWF4aW11bUhlaWdodCA9IG1heGltdW1IZWlnaHQ7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIGlmICh3aWR0aCA9PT0gJ2F1dG8nKSB7XG4gICAgICBzdXBlci5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtV2lkdGgpIHtcbiAgICAgIHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHRoaXMubWluaW11bVdpZHRoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubWF4aW11bVdpZHRoKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWluKHdpZHRoLCB0aGlzLm1heGltdW1XaWR0aCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGlmIChoZWlnaHQgPT09ICdhdXRvJykge1xuICAgICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIHRoaXMubWluaW11bUhlaWdodCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGltdW1IZWlnaHQpIHtcbiAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgdGhpcy5tYXhpbXVtSGVpZ2h0KTtcbiAgICB9XG5cbiAgICBzdXBlci5zZXRIZWlnaHQoaGVpZ2h0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNpemVhYmxlRWxlbWVudDtcbiJdfQ==
