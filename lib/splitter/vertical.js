'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options));

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

          var dragHandler = this.getDragHandler(),
              sizeableElementWidth = sizeableElement.getWidth();

          dragHandler(sizeableElementWidth);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJuYW1lcyI6WyJjdXJzb3IiLCJyZXF1aXJlIiwiU3BsaXR0ZXIiLCJWZXJ0aWNhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwiZGlzYWJsZWQiLCJvcHRpb25zIiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJtb3VzZUxlZnQiLCJpc0Rpc2FibGVkIiwicmVzZXQiLCJkcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInJlbGF0aXZlTW91c2VMZWZ0Iiwid2lkdGgiLCJzZXRXaWR0aCIsImdldERyYWdIYW5kbGVyIiwiZ2V0V2lkdGgiLCJjb2x1bW5SZXNpemUiLCJzdGFydERyYWdnaW5nIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsV0FBUixDQUFmO0FBQUEsSUFDTUMsV0FBV0QsUUFBUSxhQUFSLENBRGpCOztJQUdNRSxnQjs7O0FBQ0osNEJBQVlDLFFBQVosRUFBc0JDLHFCQUF0QixFQUE2Q0Msb0JBQTdDLEVBQW1FQyxvQkFBbkUsRUFBeUZDLG1CQUF6RixFQUE4R0MsV0FBOUcsRUFBMkhDLFFBQTNILEVBQXFJQyxPQUFySSxFQUE4STtBQUFBOztBQUFBLG9JQUN0SVAsUUFEc0ksRUFDNUhDLHFCQUQ0SCxFQUNyR0Msb0JBRHFHLEVBQy9FQyxvQkFEK0UsRUFDekRDLG1CQUR5RCxFQUNwQ0MsV0FEb0MsRUFDdkJDLFFBRHVCLEVBQ2JDLE9BRGE7O0FBRzVJLFVBQUtDLG9CQUFMLEdBQTRCLElBQTVCOztBQUVBLFVBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFMNEk7QUFNN0k7Ozs7OEJBRVM7QUFDUixVQUFNSCxXQUFXLEtBQUtJLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDSixRQUFMLEVBQWU7QUFDYlYsZUFBT2UsS0FBUDs7QUFFQSxZQUFJLEtBQUtDLFFBQVQsRUFBbUI7QUFDakIsZUFBS0MsWUFBTDtBQUNEO0FBQ0Y7QUFDRjs7OzhCQUVTQyxRLEVBQVVMLFMsRUFBVztBQUM3QixVQUFNSCxXQUFXLEtBQUtJLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDSixRQUFMLEVBQWU7QUFDYixZQUFNTSxXQUFXLEtBQUtHLFVBQUwsRUFBakI7O0FBRUEsWUFBSUgsUUFBSixFQUFjO0FBQ1osY0FBTUksWUFBWSxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsY0FDTUMsa0JBQWtCLEtBQUtDLGtCQUFMLEVBRHhCO0FBQUEsY0FFTUMsb0JBQW9CWCxZQUFZLEtBQUtBLFNBRjNDO0FBQUEsY0FHTVksUUFBUSxLQUFLYixvQkFBTCxHQUE0QlEsWUFBWUksaUJBSHREOztBQUtBRiwwQkFBZ0JJLFFBQWhCLENBQXlCRCxLQUF6Qjs7QUFFQSxjQUFNaEIsY0FBYyxLQUFLa0IsY0FBTCxFQUFwQjtBQUFBLGNBQ01mLHVCQUF1QlUsZ0JBQWdCTSxRQUFoQixFQUQ3Qjs7QUFHQW5CLHNCQUFZRyxvQkFBWjtBQUNEO0FBQ0Y7QUFDRjs7OzhCQUVTTSxRLEVBQVVMLFMsRUFBVztBQUM3QixVQUFNSCxXQUFXLEtBQUtJLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDSixRQUFMLEVBQWU7QUFDYixZQUFNWSxrQkFBa0IsS0FBS0Msa0JBQUwsRUFBeEI7O0FBRUF2QixlQUFPNkIsWUFBUDs7QUFFQSxhQUFLaEIsU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsYUFBS0Qsb0JBQUwsR0FBNEJVLGdCQUFnQk0sUUFBaEIsRUFBNUI7O0FBRUEsWUFBTVosV0FBVyxLQUFLRyxVQUFMLEVBQWpCOztBQUVBLFlBQUksQ0FBQ0gsUUFBTCxFQUFlO0FBQ2IsZUFBS2MsYUFBTDtBQUNEO0FBQ0Y7QUFDRjs7O2dDQUVXO0FBQ1YsVUFBTXBCLFdBQVcsS0FBS0ksVUFBTCxFQUFqQjs7QUFFQSxVQUFJLENBQUNKLFFBQUwsRUFBZTtBQUNiVixlQUFPNkIsWUFBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQU1uQixXQUFXLEtBQUtJLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDSixRQUFMLEVBQWU7QUFDYlYsZUFBT2UsS0FBUDtBQUNEO0FBQ0Y7OzttQ0FFcUJnQixVLEVBQVk7QUFDaEMsYUFBTzdCLFNBQVM4QixjQUFULENBQXdCN0IsZ0JBQXhCLEVBQTBDNEIsVUFBMUMsQ0FBUDtBQUNEOzs7O0VBakY0QjdCLFE7O0FBb0YvQitCLE9BQU9DLE1BQVAsQ0FBYy9CLGdCQUFkLEVBQWdDO0FBQzlCZ0MscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEVyxDQUFoQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQm5DLGdCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIGRpc2FibGVkLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgZGlzYWJsZWQsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcblxuICAgICAgaWYgKHRoaXMuZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZUxlZnQ7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBjb25zdCBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3Qgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKTtcblxuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhWZXJ0aWNhbFNwbGl0dGVyLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZlcnRpY2FsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2ZXJ0aWNhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiJdfQ==