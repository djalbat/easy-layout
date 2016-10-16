'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementWidth = null;

    _this.mouseLeft = null;
    return _this;
  }

  _createClass(VerticalSplitter, [{
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
      cursor.columnResize();

      this.mouseLeft = mouseLeft;

      this.sizeableElementWidth = this.sizeableElement.getWidth();

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
        var relativeMouseLeft = mouseLeft - this.mouseLeft,
            width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

        this.sizeableElement.setWidth(width);

        var sizeableElementWidth = this.sizeableElement.getWidth();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementWidth);
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      cursor.columnResize();
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      cursor.reset();
    }
  }]);

  return VerticalSplitter;
}(Splitter);

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbFNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbImN1cnNvciIsInJlcXVpcmUiLCJTcGxpdHRlciIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnRXaWR0aCIsIm1vdXNlTGVmdCIsInJlc2V0IiwiZHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJtb3VzZVRvcCIsImNvbHVtblJlc2l6ZSIsImdldFdpZHRoIiwiaXNEcmFnZ2luZyIsInN0YXJ0RHJhZ2dpbmciLCJyZWxhdGl2ZU1vdXNlTGVmdCIsIndpZHRoIiwic2V0V2lkdGgiLCJUT19USEVfTEVGVF9PRiIsIlRPX1RIRV9SSUdIVF9PRiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRCxRQUFRLFlBQVIsQ0FEZjs7SUFHTUUsZ0I7OztBQUNKLDRCQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsb0lBQ3RESCxRQURzRCxFQUM1Q0MsUUFENEMsRUFDbENDLGVBRGtDLEVBQ2pCQyxXQURpQjs7QUFHNUQsVUFBS0Msb0JBQUwsR0FBNEIsSUFBNUI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUw0RDtBQU03RDs7Ozs4QkFFUztBQUNSVCxhQUFPVSxLQUFQOztBQUVBLFVBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixhQUFLQyxZQUFMO0FBQ0Q7QUFDRjs7OzhCQUVTQyxRLEVBQVVKLFMsRUFBVztBQUM3QlQsYUFBT2MsWUFBUDs7QUFFQSxXQUFLTCxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxXQUFLRCxvQkFBTCxHQUE0QixLQUFLRixlQUFMLENBQXFCUyxRQUFyQixFQUE1Qjs7QUFFQSxVQUFJSixXQUFXLEtBQUtLLFVBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNMLFFBQUwsRUFBZTtBQUNiLGFBQUtNLGFBQUw7QUFDRDtBQUNGOzs7OEJBRVNKLFEsRUFBVUosUyxFQUFXO0FBQzdCLFVBQUlFLFdBQVcsS0FBS0ssVUFBTCxFQUFmOztBQUVBLFVBQUlMLFFBQUosRUFBYztBQUNaLFlBQUlPLG9CQUFvQlQsWUFBWSxLQUFLQSxTQUF6QztBQUFBLFlBQ0lVLFFBQVEsS0FBS1gsb0JBQUwsR0FBNEIsS0FBS0gsUUFBTCxHQUFnQmEsaUJBRHhEOztBQUdBLGFBQUtaLGVBQUwsQ0FBcUJjLFFBQXJCLENBQThCRCxLQUE5Qjs7QUFFQSxZQUFJWCx1QkFBdUIsS0FBS0YsZUFBTCxDQUFxQlMsUUFBckIsRUFBM0I7O0FBRUEsWUFBSSxLQUFLUixXQUFULEVBQXNCO0FBQ3BCLGVBQUtBLFdBQUwsQ0FBaUJDLG9CQUFqQjtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVXO0FBQ1ZSLGFBQU9jLFlBQVA7QUFDRDs7OytCQUVVO0FBQ1RkLGFBQU9VLEtBQVA7QUFDRDs7OztFQXRENEJSLFE7O0FBeUQvQkMsaUJBQWlCRSxRQUFqQixHQUE0QjtBQUMxQmdCLGtCQUFnQixDQUFDLENBRFM7QUFFMUJDLG1CQUFpQixDQUFDO0FBRlEsQ0FBNUI7O0FBS0FDLE9BQU9DLE9BQVAsR0FBaUJyQixnQkFBakIiLCJmaWxlIjoidmVydGljYWxTcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGN1cnNvciA9IHJlcXVpcmUoJy4vY3Vyc29yJyksXG4gICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3NwbGl0dGVyJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgIHRoaXMubW91c2VMZWZ0ID0gbW91c2VMZWZ0O1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHZhciByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnQuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICB2YXIgc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cbn1cblxuVmVydGljYWxTcGxpdHRlci5zaXR1YXRlZCA9IHtcbiAgVE9fVEhFX0xFRlRfT0Y6ICsxLFxuICBUT19USEVfUklHSFRfT0Y6IC0xXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iXX0=