'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

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
          var relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

          this.sizeableElement.setWidth(width);

          var sizeableElementWidth = this.sizeableElement.getWidth();

          if (this.dragHandler) {
            this.dragHandler(sizeableElementWidth);
          }
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = this.sizeableElement.getWidth();

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
        cursor.columnResize();
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
  }], [{
    key: 'fromHTML',
    value: function fromHTML(html, situated, sizeableElement, dragHandler) {
      return Splitter.fromHTML(VerticalSplitter, html, situated, sizeableElement, dragHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

module.exports = VerticalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJuYW1lcyI6WyJjdXJzb3IiLCJyZXF1aXJlIiwiU3BsaXR0ZXIiLCJWZXJ0aWNhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJzaXR1YXRlZCIsInNpemVhYmxlRWxlbWVudCIsImRyYWdIYW5kbGVyIiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJtb3VzZUxlZnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJyZXNldCIsImRyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwibW91c2VUb3AiLCJpc0RyYWdnaW5nIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJjb2x1bW5SZXNpemUiLCJzdGFydERyYWdnaW5nIiwiaHRtbCIsImZyb21IVE1MIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7SUFHTUUsZ0I7OztBQUNKLDRCQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsb0lBQ3RESCxRQURzRCxFQUM1Q0MsUUFENEMsRUFDbENDLGVBRGtDLEVBQ2pCQyxXQURpQjs7QUFHNUQsVUFBS0Msb0JBQUwsR0FBNEIsSUFBNUI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUw0RDtBQU03RDs7Ozs4QkFFUztBQUNSLFVBQU1DLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQOztBQUVBLFlBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixlQUFLQyxZQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVNDLFEsRUFBVU4sUyxFQUFXO0FBQzdCLFVBQU1DLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFlBQU1HLFdBQVcsS0FBS0csVUFBTCxFQUFqQjs7QUFFQSxZQUFJSCxRQUFKLEVBQWM7QUFDWixjQUFNSSxvQkFBb0JSLFlBQVksS0FBS0EsU0FBM0M7QUFBQSxjQUNNUyxRQUFRLEtBQUtWLG9CQUFMLEdBQTRCLEtBQUtILFFBQUwsR0FBZ0JZLGlCQUQxRDs7QUFHQSxlQUFLWCxlQUFMLENBQXFCYSxRQUFyQixDQUE4QkQsS0FBOUI7O0FBRUEsY0FBTVYsdUJBQXVCLEtBQUtGLGVBQUwsQ0FBcUJjLFFBQXJCLEVBQTdCOztBQUVBLGNBQUksS0FBS2IsV0FBVCxFQUFzQjtBQUNwQixpQkFBS0EsV0FBTCxDQUFpQkMsb0JBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs4QkFFU08sUSxFQUFVTixTLEVBQVc7QUFDN0IsVUFBTUMsV0FBVyxLQUFLQyxVQUFMLEVBQWpCOztBQUVBLFVBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2JWLGVBQU9xQixZQUFQOztBQUVBLGFBQUtaLFNBQUwsR0FBaUJBLFNBQWpCOztBQUVBLGFBQUtELG9CQUFMLEdBQTRCLEtBQUtGLGVBQUwsQ0FBcUJjLFFBQXJCLEVBQTVCOztBQUVBLFlBQU1QLFdBQVcsS0FBS0csVUFBTCxFQUFqQjs7QUFFQSxZQUFJLENBQUNILFFBQUwsRUFBZTtBQUNiLGVBQUtTLGFBQUw7QUFDRDtBQUNGO0FBQ0Y7OztnQ0FFVztBQUNWLFVBQU1aLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPcUIsWUFBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1YLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQO0FBQ0Q7QUFDRjs7OzZCQUVlVyxJLEVBQU1sQixRLEVBQVVDLGUsRUFBaUJDLFcsRUFBYTtBQUM1RCxhQUFPTCxTQUFTc0IsUUFBVCxDQUFrQnJCLGdCQUFsQixFQUFvQ29CLElBQXBDLEVBQTBDbEIsUUFBMUMsRUFBb0RDLGVBQXBELEVBQXFFQyxXQUFyRSxDQUFQO0FBQ0Q7OzttQ0FFcUJrQixVLEVBQVk7QUFDaEMsYUFBT3ZCLFNBQVN3QixjQUFULENBQXdCdkIsZ0JBQXhCLEVBQTBDc0IsVUFBMUMsQ0FBUDtBQUNEOzs7O0VBbEY0QnZCLFE7O0FBb0YvQnlCLE9BQU9DLE9BQVAsR0FBaUJ6QixnQkFBakIiLCJmaWxlIjoidmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJhZ0hhbmRsZXIpIHtcbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbUhUTUwoVmVydGljYWxTcGxpdHRlciwgaHRtbCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoVmVydGljYWxTcGxpdHRlciwgcHJvcGVydGllcyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiJdfQ==