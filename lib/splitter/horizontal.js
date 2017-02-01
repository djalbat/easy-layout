'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

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
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
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
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();

        this.mouseTop = mouseTop;

        this.sizeableElementHeight = this.sizeableElement.getHeight();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIl0sIm5hbWVzIjpbImN1cnNvciIsInJlcXVpcmUiLCJTcGxpdHRlciIsIkhvcml6b250YWxTcGxpdHRlciIsInNlbGVjdG9yIiwic2l0dWF0ZWQiLCJzaXplYWJsZUVsZW1lbnQiLCJkcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudEhlaWdodCIsIm1vdXNlVG9wIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwicmVzZXQiLCJkcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlTGVmdCIsImlzRHJhZ2dpbmciLCJyZWxhdGl2ZU1vdXNlVG9wIiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwicm93UmVzaXplIiwic3RhcnREcmFnZ2luZyIsIkFCT1ZFIiwiQkVMT1ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsV0FBUixDQUFiO0FBQUEsSUFDSUMsV0FBV0QsUUFBUSxhQUFSLENBRGY7O0lBR01FLGtCOzs7QUFDSiw4QkFBWUMsUUFBWixFQUFzQkMsUUFBdEIsRUFBZ0NDLGVBQWhDLEVBQWlEQyxXQUFqRCxFQUE4RDtBQUFBOztBQUFBLHdJQUN0REgsUUFEc0QsRUFDNUNDLFFBRDRDLEVBQ2xDQyxlQURrQyxFQUNqQkMsV0FEaUI7O0FBRzVELFVBQUtDLHFCQUFMLEdBQTZCLElBQTdCOztBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFMNEQ7QUFNN0Q7Ozs7OEJBRVM7QUFDUixVQUFJQyxXQUFXLEtBQUtDLFVBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQOztBQUVBLFlBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixlQUFLQyxZQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVNMLFEsRUFBVU0sUyxFQUFXO0FBQzdCLFVBQUlMLFdBQVcsS0FBS0MsVUFBTCxFQUFmOztBQUVBLFVBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2IsWUFBSUcsV0FBVyxLQUFLRyxVQUFMLEVBQWY7O0FBRUEsWUFBSUgsUUFBSixFQUFjO0FBQ1osY0FBSUksbUJBQW1CUixXQUFXLEtBQUtBLFFBQXZDO0FBQUEsY0FDSVMsU0FBUyxLQUFLVixxQkFBTCxHQUE2QixLQUFLSCxRQUFMLEdBQWdCWSxnQkFEMUQ7O0FBR0EsZUFBS1gsZUFBTCxDQUFxQmEsU0FBckIsQ0FBK0JELE1BQS9COztBQUVBLGNBQUlWLHdCQUF3QixLQUFLRixlQUFMLENBQXFCYyxTQUFyQixFQUE1Qjs7QUFFQSxjQUFJLEtBQUtiLFdBQVQsRUFBc0I7QUFDcEIsaUJBQUtBLFdBQUwsQ0FBaUJDLHFCQUFqQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOzs7OEJBRVNDLFEsRUFBVU0sUyxFQUFXO0FBQzdCLFVBQUlMLFdBQVcsS0FBS0MsVUFBTCxFQUFmOztBQUVBLFVBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2JWLGVBQU9xQixTQUFQOztBQUVBLGFBQUtaLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLGFBQUtELHFCQUFMLEdBQTZCLEtBQUtGLGVBQUwsQ0FBcUJjLFNBQXJCLEVBQTdCOztBQUVBLFlBQUlQLFdBQVcsS0FBS0csVUFBTCxFQUFmOztBQUVBLFlBQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2IsZUFBS1MsYUFBTDtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBSVosV0FBVyxLQUFLQyxVQUFMLEVBQWY7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYlYsZUFBT3FCLFNBQVA7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFJWCxXQUFXLEtBQUtDLFVBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQO0FBQ0Q7QUFDRjs7OztFQTFFOEJWLFE7O0FBNkVqQ0MsbUJBQW1CRSxRQUFuQixHQUE4QjtBQUM1QmtCLFNBQU8sQ0FBQyxDQURvQjtBQUU1QkMsU0FBTyxDQUFDO0FBRm9CLENBQTlCOztBQUtBQyxPQUFPQyxPQUFQLEdBQWlCdkIsa0JBQWpCIiwiZmlsZSI6Imhvcml6b250YWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VUb3AgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHZhciByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSB0aGlzLm1vdXNlVG9wLFxuICAgICAgICAgICAgaGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnRIZWlnaHQgLSB0aGlzLnNpdHVhdGVkICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICB0aGlzLnNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICB2YXIgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHZhciBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxufVxuXG5Ib3Jpem9udGFsU3BsaXR0ZXIuc2l0dWF0ZWQgPSB7XG4gIEFCT1ZFOiArMSxcbiAgQkVMT1c6IC0xXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiJdfQ==