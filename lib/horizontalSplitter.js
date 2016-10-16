'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementHeight = null;

    _this.mouseTop = null;
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = this.sizeableElement.getHeight();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var dragging = this.isDragging();

      if (dragging) {
        var relativeMouseTop = mouseTop - this.mouseTop,
            height = this.sizeableElementHeight - this.situated * relativeMouseTop;

        this.sizeableElement.setHeight(height);

        var sizeableElementHeight = this.sizeableElement.getHeight();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      cursor.rowResize();
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      cursor.reset();
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9ob3Jpem9udGFsU3BsaXR0ZXIuanMiXSwibmFtZXMiOlsiY3Vyc29yIiwicmVxdWlyZSIsIlNwbGl0dGVyIiwiSG9yaXpvbnRhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJzaXR1YXRlZCIsInNpemVhYmxlRWxlbWVudCIsImRyYWdIYW5kbGVyIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwibW91c2VUb3AiLCJyZXNldCIsImRyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwibW91c2VMZWZ0Iiwicm93UmVzaXplIiwiZ2V0SGVpZ2h0IiwiaXNEcmFnZ2luZyIsInN0YXJ0RHJhZ2dpbmciLCJyZWxhdGl2ZU1vdXNlVG9wIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiQUJPVkUiLCJCRUxPVyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRCxRQUFRLFlBQVIsQ0FEZjs7SUFHTUUsa0I7OztBQUNKLDhCQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsd0lBQ3RESCxRQURzRCxFQUM1Q0MsUUFENEMsRUFDbENDLGVBRGtDLEVBQ2pCQyxXQURpQjs7QUFHNUQsVUFBS0MscUJBQUwsR0FBNkIsSUFBN0I7O0FBRUEsVUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUw0RDtBQU03RDs7Ozs4QkFFUztBQUNSVCxhQUFPVSxLQUFQOztBQUVBLFVBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixhQUFLQyxZQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTSCxRLEVBQVVJLFMsRUFBVztBQUM3QmIsYUFBT2MsU0FBUDs7QUFFQSxXQUFLTCxRQUFMLEdBQWdCQSxRQUFoQjs7QUFFQSxXQUFLRCxxQkFBTCxHQUE2QixLQUFLRixlQUFMLENBQXFCUyxTQUFyQixFQUE3Qjs7QUFFQSxVQUFJSixXQUFXLEtBQUtLLFVBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNMLFFBQUwsRUFBZTtBQUNiLGFBQUtNLGFBQUw7QUFDRDtBQUNGOzs7OEJBRVNSLFEsRUFBVUksUyxFQUFXO0FBQzdCLFVBQUlGLFdBQVcsS0FBS0ssVUFBTCxFQUFmOztBQUVBLFVBQUlMLFFBQUosRUFBYztBQUNaLFlBQUlPLG1CQUFtQlQsV0FBVyxLQUFLQSxRQUF2QztBQUFBLFlBQ0lVLFNBQVMsS0FBS1gscUJBQUwsR0FBNkIsS0FBS0gsUUFBTCxHQUFnQmEsZ0JBRDFEOztBQUdBLGFBQUtaLGVBQUwsQ0FBcUJjLFNBQXJCLENBQStCRCxNQUEvQjs7QUFFQSxZQUFJWCx3QkFBd0IsS0FBS0YsZUFBTCxDQUFxQlMsU0FBckIsRUFBNUI7O0FBRUEsWUFBSSxLQUFLUixXQUFULEVBQXNCO0FBQ3BCLGVBQUtBLFdBQUwsQ0FBaUJDLHFCQUFqQjtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVXO0FBQ1ZSLGFBQU9jLFNBQVA7QUFDRDs7OytCQUVVO0FBQ1RkLGFBQU9VLEtBQVA7QUFDRDs7OztFQXREOEJSLFE7O0FBeURqQ0MsbUJBQW1CRSxRQUFuQixHQUE4QjtBQUM1QmdCLFNBQU8sQ0FBQyxDQURvQjtBQUU1QkMsU0FBTyxDQUFDO0FBRm9CLENBQTlCOztBQUtBQyxPQUFPQyxPQUFQLEdBQWlCckIsa0JBQWpCIiwiZmlsZSI6Imhvcml6b250YWxTcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VUb3AgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgdGhpcy5tb3VzZVRvcCA9IG1vdXNlVG9wO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdmFyIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIHZhciBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjdXJzb3Iucm93UmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxufVxuXG5Ib3Jpem9udGFsU3BsaXR0ZXIuc2l0dWF0ZWQgPSB7XG4gIEFCT1ZFOiArMSxcbiAgQkVMT1c6IC0xXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiJdfQ==