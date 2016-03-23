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

  function SizeableElement(selectorOr$Element, minimumWidth, minimumHeight, maximumWidth, maximumHeight) {
    _classCallCheck(this, SizeableElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SizeableElement).call(this, selectorOr$Element));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaXplYWJsZUVsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNBLFVBQVUsT0FBTyxPQUFQOztJQUVSOzs7QUFDSixXQURJLGVBQ0osQ0FBWSxrQkFBWixFQUFnQyxZQUFoQyxFQUE4QyxhQUE5QyxFQUE2RCxZQUE3RCxFQUEyRSxhQUEzRSxFQUEwRjswQkFEdEYsaUJBQ3NGOzt1RUFEdEYsNEJBRUkscUJBRGtGOztBQUd4RixVQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FId0Y7QUFJeEYsVUFBSyxhQUFMLEdBQXFCLGFBQXJCLENBSndGO0FBS3hGLFVBQUssWUFBTCxHQUFvQixZQUFwQixDQUx3RjtBQU14RixVQUFLLGFBQUwsR0FBcUIsYUFBckIsQ0FOd0Y7O0dBQTFGOztlQURJOzs2QkFVSyxPQUFPO0FBQ2QsVUFBSSxVQUFVLE1BQVYsRUFBa0I7QUFDcEIsbUNBWkEseURBWWUsTUFBZixDQURvQjs7QUFHcEIsZUFIb0I7T0FBdEI7O0FBTUEsVUFBSSxLQUFLLFlBQUwsRUFBbUI7QUFDckIsZ0JBQVEsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixLQUFLLFlBQUwsQ0FBeEIsQ0FEcUI7T0FBdkI7QUFHQSxVQUFJLEtBQUssWUFBTCxFQUFtQjtBQUNyQixnQkFBUSxLQUFLLEdBQUwsQ0FBUyxLQUFULEVBQWdCLEtBQUssWUFBTCxDQUF4QixDQURxQjtPQUF2Qjs7QUFJQSxpQ0F4QkUseURBd0JhLE1BQWYsQ0FkYzs7Ozs4QkFpQk4sUUFBUTtBQUNoQixVQUFJLFdBQVcsTUFBWCxFQUFtQjtBQUNyQixtQ0E3QkEsMERBNkJnQixPQUFoQixDQURxQjs7QUFHckIsZUFIcUI7T0FBdkI7O0FBTUEsVUFBSSxLQUFLLGFBQUwsRUFBb0I7QUFDdEIsaUJBQVMsS0FBSyxHQUFMLENBQVMsTUFBVCxFQUFpQixLQUFLLGFBQUwsQ0FBMUIsQ0FEc0I7T0FBeEI7QUFHQSxVQUFJLEtBQUssYUFBTCxFQUFvQjtBQUN0QixpQkFBUyxLQUFLLEdBQUwsQ0FBUyxNQUFULEVBQWlCLEtBQUssYUFBTCxDQUExQixDQURzQjtPQUF4Qjs7QUFJQSxpQ0F6Q0UsMERBeUNjLE9BQWhCLENBZGdCOzs7O1NBM0JkO0VBQXdCOztBQTZDOUIsT0FBTyxPQUFQLEdBQWlCLGVBQWpCIiwiZmlsZSI6InNpemVhYmxlRWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxuY2xhc3MgU2l6ZWFibGVFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgbWluaW11bVdpZHRoLCBtaW5pbXVtSGVpZ2h0LCBtYXhpbXVtV2lkdGgsIG1heGltdW1IZWlnaHQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgdGhpcy5taW5pbXVtV2lkdGggPSBtaW5pbXVtV2lkdGg7XG4gICAgdGhpcy5taW5pbXVtSGVpZ2h0ID0gbWluaW11bUhlaWdodDtcbiAgICB0aGlzLm1heGltdW1XaWR0aCA9IG1heGltdW1XaWR0aDtcbiAgICB0aGlzLm1heGltdW1IZWlnaHQgPSBtYXhpbXVtSGVpZ2h0O1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICBpZiAod2lkdGggPT09ICdhdXRvJykge1xuICAgICAgc3VwZXIuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWluaW11bVdpZHRoKSB7XG4gICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB0aGlzLm1pbmltdW1XaWR0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm1heGltdW1XaWR0aCkge1xuICAgICAgd2lkdGggPSBNYXRoLm1pbih3aWR0aCwgdGhpcy5tYXhpbXVtV2lkdGgpO1xuICAgIH1cblxuICAgIHN1cGVyLnNldFdpZHRoKHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBpZiAoaGVpZ2h0ID09PSAnYXV0bycpIHtcbiAgICAgIHN1cGVyLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWluaW11bUhlaWdodCkge1xuICAgICAgaGVpZ2h0ID0gTWF0aC5tYXgoaGVpZ2h0LCB0aGlzLm1pbmltdW1IZWlnaHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXhpbXVtSGVpZ2h0KSB7XG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoZWlnaHQsIHRoaXMubWF4aW11bUhlaWdodCk7XG4gICAgfVxuXG4gICAgc3VwZXIuc2V0SGVpZ2h0KGhlaWdodCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaXplYWJsZUVsZW1lbnQ7XG4iXX0=