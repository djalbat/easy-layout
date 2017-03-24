'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, dragHandler));

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
          var direction = this.getDirection(),
              sizeableElement = this.getSizeableElement(),
              relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - direction * relativeMouseLeft;

          sizeableElement.setWidth(width);

          var sizeableElementWidth = sizeableElement.getWidth();

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
        var sizeableElement = this.getSizeableElement();

        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = sizeableElement.getWidth();

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
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(VerticalSplitter, properties);
    }
  }]);

  return VerticalSplitter;
}(Splitter);

Object.assign(VerticalSplitter, {
  defaultProperties: {
    className: 'vertical splitter'
  }
});

module.exports = VerticalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJuYW1lcyI6WyJjdXJzb3IiLCJyZXF1aXJlIiwiU3BsaXR0ZXIiLCJWZXJ0aWNhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsImRyYWdIYW5kbGVyIiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJtb3VzZUxlZnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJyZXNldCIsImRyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwibW91c2VUb3AiLCJpc0RyYWdnaW5nIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0U2l6ZWFibGVFbGVtZW50IiwicmVsYXRpdmVNb3VzZUxlZnQiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJjb2x1bW5SZXNpemUiLCJzdGFydERyYWdnaW5nIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxhQUFSLENBRGpCOztJQUdNRSxnQjs7O0FBQ0osNEJBQVlDLFFBQVosRUFBc0JDLHFCQUF0QixFQUE2Q0Msb0JBQTdDLEVBQW1FQyxXQUFuRSxFQUFnRjtBQUFBOztBQUFBLG9JQUN4RUgsUUFEd0UsRUFDOURDLHFCQUQ4RCxFQUN2Q0Msb0JBRHVDLEVBQ2pCQyxXQURpQjs7QUFHOUUsVUFBS0Msb0JBQUwsR0FBNEIsSUFBNUI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUw4RTtBQU0vRTs7Ozs4QkFFUztBQUNSLFVBQU1DLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQOztBQUVBLFlBQUksS0FBS0MsUUFBVCxFQUFtQjtBQUNqQixlQUFLQyxZQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7OEJBRVNDLFEsRUFBVU4sUyxFQUFXO0FBQzdCLFVBQU1DLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFlBQU1HLFdBQVcsS0FBS0csVUFBTCxFQUFqQjs7QUFFQSxZQUFJSCxRQUFKLEVBQWM7QUFDWixjQUFNSSxZQUFZLEtBQUtDLFlBQUwsRUFBbEI7QUFBQSxjQUNNQyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFEeEI7QUFBQSxjQUVNQyxvQkFBb0JaLFlBQVksS0FBS0EsU0FGM0M7QUFBQSxjQUdNYSxRQUFRLEtBQUtkLG9CQUFMLEdBQTRCUyxZQUFZSSxpQkFIdEQ7O0FBS0FGLDBCQUFnQkksUUFBaEIsQ0FBeUJELEtBQXpCOztBQUVBLGNBQU1kLHVCQUF1QlcsZ0JBQWdCSyxRQUFoQixFQUE3Qjs7QUFFQSxjQUFJLEtBQUtqQixXQUFULEVBQXNCO0FBQ3BCLGlCQUFLQSxXQUFMLENBQWlCQyxvQkFBakI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7OzhCQUVTTyxRLEVBQVVOLFMsRUFBVztBQUM3QixVQUFNQyxXQUFXLEtBQUtDLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYixZQUFNUyxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7O0FBRUFwQixlQUFPeUIsWUFBUDs7QUFFQSxhQUFLaEIsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsYUFBS0Qsb0JBQUwsR0FBNEJXLGdCQUFnQkssUUFBaEIsRUFBNUI7O0FBRUEsWUFBTVgsV0FBVyxLQUFLRyxVQUFMLEVBQWpCOztBQUVBLFlBQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2IsZUFBS2EsYUFBTDtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBTWhCLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPeUIsWUFBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1mLFdBQVcsS0FBS0MsVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPWSxLQUFQO0FBQ0Q7QUFDRjs7O21DQUVxQmUsVSxFQUFZO0FBQ2hDLGFBQU96QixTQUFTMEIsY0FBVCxDQUF3QnpCLGdCQUF4QixFQUEwQ3dCLFVBQTFDLENBQVA7QUFDRDs7OztFQWxGNEJ6QixROztBQXFGL0IyQixPQUFPQyxNQUFQLENBQWMzQixnQkFBZCxFQUFnQztBQUM5QjRCLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRFcsQ0FBaEM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUIvQixnQkFBakIiLCJmaWxlIjoidmVydGljYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGN1cnNvciA9IHJlcXVpcmUoJy4uL2N1cnNvcicpLFxuICAgICAgU3BsaXR0ZXIgPSByZXF1aXJlKCcuLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuXG4gICAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG5cbiAgICAgIHRoaXMubW91c2VMZWZ0ID0gbW91c2VMZWZ0O1xuXG4gICAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdmVyKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKFZlcnRpY2FsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmVydGljYWxTcGxpdHRlciwge1xuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZlcnRpY2FsIHNwbGl0dGVyJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNhbFNwbGl0dGVyO1xuIl19