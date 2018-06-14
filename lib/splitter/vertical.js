'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
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
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;

          var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;

          var width = sizeableElementWidth; ///

          sizeableElement.setWidth(width);

          sizeableElementWidth = sizeableElement.getWidth(); ///

          dragHandler(sizeableElementWidth);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseLeft = mouseLeft,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth; /// 

        this.setPreviousMouseLeft(previousMouseLeft);

        this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

        if (!dragging) {
          this.startDragging();
        }

        cursor.columnResize();
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
  }, {
    key: 'getPreviousMouseLeft',
    value: function getPreviousMouseLeft() {
      return this.fromState('previousMouseLeft');
    }
  }, {
    key: 'getPreviousSizeableElementWidth',
    value: function getPreviousSizeableElementWidth() {
      return this.fromState('previousSizeableElementWidth');
    }
  }, {
    key: 'setPreviousMouseLeft',
    value: function setPreviousMouseLeft(previousMouseLeft) {
      this.updateState({
        previousMouseLeft: previousMouseLeft
      });
    }
  }, {
    key: 'setPreviousSizeableElementWidth',
    value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
      this.updateState({
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseLeft = null,
          previousSizeableElementWidth = null;

      this.setState({
        previousMouseLeft: previousMouseLeft,
        previousSizeableElementWidth: previousSizeableElementWidth
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJuYW1lcyI6WyJjdXJzb3IiLCJyZXF1aXJlIiwiU3BsaXR0ZXIiLCJWZXJ0aWNhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsInJlc2V0IiwibW91c2VUb3AiLCJtb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzTW91c2VMZWZ0IiwiZ2V0UHJldmlvdXNNb3VzZUxlZnQiLCJwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsInJlbGF0aXZlTW91c2VMZWZ0Iiwic2l6ZWFibGVFbGVtZW50V2lkdGgiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJzZXRQcmV2aW91c01vdXNlTGVmdCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwiZnJvbVN0YXRlIiwidXBkYXRlU3RhdGUiLCJzZXRTdGF0ZSIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFdBQVIsQ0FB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QUtZLFdBQUwsQ0FBaUI7QUFDZlo7QUFEZSxPQUFqQjtBQUdEOzs7c0NBRWlCO0FBQ2hCLFVBQU1GLG9CQUFvQixJQUExQjtBQUFBLFVBQ01FLCtCQUErQixJQURyQzs7QUFHQSxXQUFLYSxRQUFMLENBQWM7QUFDWmYsNENBRFk7QUFFWkU7QUFGWSxPQUFkO0FBSUQ7OzttQ0FFcUJjLFUsRUFBWTtBQUFFLGFBQU92QyxTQUFTd0MsY0FBVCxDQUF3QnZDLGdCQUF4QixFQUEwQ3NDLFVBQTFDLENBQVA7QUFBK0Q7Ozs7RUFoSHRFdkMsUTs7QUFtSC9CeUMsT0FBT0MsTUFBUCxDQUFjekMsZ0JBQWQsRUFBZ0M7QUFDOUIwQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQURXLENBQWhDOztBQU1BQyxPQUFPQyxPQUFQLEdBQWlCN0MsZ0JBQWpCIiwiZmlsZSI6InZlcnRpY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBtb3VzZVVwKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZUVsZW1lbnRXaWR0aDsgLy8vXG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuICAgICAgXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG4gIFxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c01vdXNlTGVmdCcpOyB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoJyk7IH1cbiAgXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdFxuICAgIH0pO1xuICB9XG4gIFxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTsgICAgXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gU3BsaXR0ZXIuZnJvbVByb3BlcnRpZXMoVmVydGljYWxTcGxpdHRlciwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihWZXJ0aWNhbFNwbGl0dGVyLCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmVydGljYWwgc3BsaXR0ZXInXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlcnRpY2FsU3BsaXR0ZXI7XG4iXX0=