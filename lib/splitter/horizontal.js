'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options));

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
          var direction = this.getDirection(),
              sizeableElement = this.getSizeableElement(),
              relativeMouseTop = mouseTop - this.mouseTop,
              height = this.sizeableElementHeight - direction * relativeMouseTop;

          sizeableElement.setHeight(height);

          var dragHandler = this.getDragHandler(),
              sizeableElementHeight = sizeableElement.getHeight();

          dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var sizeableElement = this.getSizeableElement();

        cursor.rowResize();

        this.mouseTop = mouseTop;

        this.sizeableElementHeight = sizeableElement.getHeight();

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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIl0sIm5hbWVzIjpbImN1cnNvciIsInJlcXVpcmUiLCJTcGxpdHRlciIsIkhvcml6b250YWxTcGxpdHRlciIsInNlbGVjdG9yIiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJzdGFydERyYWdnaW5nSGFuZGxlciIsInN0b3BEcmFnZ2luZ0hhbmRsZXIiLCJkcmFnSGFuZGxlciIsImRpc2FibGVkIiwib3B0aW9ucyIsInNpemVhYmxlRWxlbWVudEhlaWdodCIsIm1vdXNlVG9wIiwiaXNEaXNhYmxlZCIsInJlc2V0IiwiZHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJtb3VzZUxlZnQiLCJpc0RyYWdnaW5nIiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0U2l6ZWFibGVFbGVtZW50IiwicmVsYXRpdmVNb3VzZVRvcCIsImhlaWdodCIsInNldEhlaWdodCIsImdldERyYWdIYW5kbGVyIiwiZ2V0SGVpZ2h0Iiwicm93UmVzaXplIiwic3RhcnREcmFnZ2luZyIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FBZjtBQUFBLElBQ01DLFdBQVdELFFBQVEsYUFBUixDQURqQjs7SUFHTUUsa0I7OztBQUNKLDhCQUFZQyxRQUFaLEVBQXNCQyxxQkFBdEIsRUFBNkNDLG9CQUE3QyxFQUFtRUMsb0JBQW5FLEVBQXlGQyxtQkFBekYsRUFBOEdDLFdBQTlHLEVBQTJIQyxRQUEzSCxFQUFxSUMsT0FBckksRUFBOEk7QUFBQTs7QUFBQSx3SUFDdElQLFFBRHNJLEVBQzVIQyxxQkFENEgsRUFDckdDLG9CQURxRyxFQUMvRUMsb0JBRCtFLEVBQ3pEQyxtQkFEeUQsRUFDcENDLFdBRG9DLEVBQ3ZCQyxRQUR1QixFQUNiQyxPQURhOztBQUc1SSxVQUFLQyxxQkFBTCxHQUE2QixJQUE3Qjs7QUFFQSxVQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBTDRJO0FBTTdJOzs7OzhCQUVTO0FBQ1IsVUFBTUgsV0FBVyxLQUFLSSxVQUFMLEVBQWpCOztBQUVBLFVBQUksQ0FBQ0osUUFBTCxFQUFlO0FBQ2JWLGVBQU9lLEtBQVA7O0FBRUEsWUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2pCLGVBQUtDLFlBQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs4QkFFU0osUSxFQUFVSyxTLEVBQVc7QUFDN0IsVUFBTVIsV0FBVyxLQUFLSSxVQUFMLEVBQWpCOztBQUVBLFVBQUksQ0FBQ0osUUFBTCxFQUFlO0FBQ2IsWUFBTU0sV0FBVyxLQUFLRyxVQUFMLEVBQWpCOztBQUVBLFlBQUlILFFBQUosRUFBYztBQUNaLGNBQU1JLFlBQVksS0FBS0MsWUFBTCxFQUFsQjtBQUFBLGNBQ01DLGtCQUFrQixLQUFLQyxrQkFBTCxFQUR4QjtBQUFBLGNBRU1DLG1CQUFtQlgsV0FBVyxLQUFLQSxRQUZ6QztBQUFBLGNBR01ZLFNBQVMsS0FBS2IscUJBQUwsR0FBNkJRLFlBQVlJLGdCQUh4RDs7QUFLQUYsMEJBQWdCSSxTQUFoQixDQUEwQkQsTUFBMUI7O0FBRUEsY0FBTWhCLGNBQWMsS0FBS2tCLGNBQUwsRUFBcEI7QUFBQSxjQUNNZix3QkFBd0JVLGdCQUFnQk0sU0FBaEIsRUFEOUI7O0FBR0FuQixzQkFBWUcscUJBQVo7QUFDRDtBQUNGO0FBQ0Y7Ozs4QkFFU0MsUSxFQUFVSyxTLEVBQVc7QUFDN0IsVUFBTVIsV0FBVyxLQUFLSSxVQUFMLEVBQWpCOztBQUVBLFVBQUksQ0FBQ0osUUFBTCxFQUFlO0FBQ2IsWUFBTVksa0JBQWtCLEtBQUtDLGtCQUFMLEVBQXhCOztBQUVBdkIsZUFBTzZCLFNBQVA7O0FBRUEsYUFBS2hCLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLGFBQUtELHFCQUFMLEdBQTZCVSxnQkFBZ0JNLFNBQWhCLEVBQTdCOztBQUVBLFlBQU1aLFdBQVcsS0FBS0csVUFBTCxFQUFqQjs7QUFFQSxZQUFJLENBQUNILFFBQUwsRUFBZTtBQUNiLGVBQUtjLGFBQUw7QUFDRDtBQUNGO0FBQ0Y7OztnQ0FFVztBQUNWLFVBQU1wQixXQUFXLEtBQUtJLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDSixRQUFMLEVBQWU7QUFDYlYsZUFBTzZCLFNBQVA7QUFDRDtBQUNGOzs7K0JBRVU7QUFDVCxVQUFNbkIsV0FBVyxLQUFLSSxVQUFMLEVBQWpCOztBQUVBLFVBQUksQ0FBQ0osUUFBTCxFQUFlO0FBQ2JWLGVBQU9lLEtBQVA7QUFDRDtBQUNGOzs7bUNBRXFCZ0IsVSxFQUFZO0FBQ2hDLGFBQU83QixTQUFTOEIsY0FBVCxDQUF3QjdCLGtCQUF4QixFQUE0QzRCLFVBQTVDLENBQVA7QUFDRDs7OztFQWpGOEI3QixROztBQW9GakMrQixPQUFPQyxNQUFQLENBQWMvQixrQkFBZCxFQUFrQztBQUNoQ2dDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRGEsQ0FBbEM7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJuQyxrQkFBakIiLCJmaWxlIjoiaG9yaXpvbnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZSgnLi4vY3Vyc29yJyksXG4gICAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4uL3NwbGl0dGVyJyk7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgZGlzYWJsZWQsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBkaXNhYmxlZCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSB0aGlzLm1vdXNlVG9wLFxuICAgICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpO1xuICAgICAgICAgIFxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpO1xuXG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXIsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAnaG9yaXpvbnRhbCBzcGxpdHRlcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSG9yaXpvbnRhbFNwbGl0dGVyO1xuIl19