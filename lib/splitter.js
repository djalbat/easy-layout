'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var ESCAPE_KEYCODE = 27;

var ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING;
var window = easy.window;
var Element = easy.Element;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement) {
    var startDraggingHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var stopDraggingHandler = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    var dragHandler = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
    var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;

    _this.afterSizeableElement = afterSizeableElement;

    _this.startDraggingHandler = startDraggingHandler;

    _this.stopDraggingHandler = stopDraggingHandler;

    _this.dragHandler = dragHandler;

    _this.options = options;

    _this.disabled = false;

    _this.dragging = false;

    window.on('mouseup blur', _this.mouseUp.bind(_this)); ///

    window.onMouseMove(_this.mouseMove.bind(_this));

    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseOver(_this.mouseOver.bind(_this));
    _this.onMouseOut(_this.mouseOut.bind(_this));
    return _this;
  }

  _createClass(Splitter, [{
    key: 'isBeforeSizeableElement',
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: 'isAfterSizeableElement',
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: 'getDragHandler',
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: 'isOptionPresent',
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      var direction = void 0;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = void 0;

      var direction = this.getDirection();

      switch (direction) {
        case -1:
          sizeableElement = this.getPreviousSiblingElement(); ///
          break;

        case +1:
          sizeableElement = this.getNextSiblingElement(); ///
          break;
      }

      return sizeableElement;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: 'unsetOption',
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.onKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = true;

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = false;

      this.stopDraggingHandler();
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement;
      var afterSizeableElement = properties.afterSizeableElement;
      var onStartDragging = properties.onStartDragging;
      var onStopDragging = properties.onStopDragging;
      var onDrag = properties.onDrag;
      var options = properties.options;
      var startDraggingHandler = onStartDragging; ///
      var stopDraggingHandler = onStopDragging; ///
      var dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onStartDragging', 'onStopDragging', 'onDrag', 'options']
});

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJFbGVtZW50IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJkaXNhYmxlZCIsImRyYWdnaW5nIiwib24iLCJtb3VzZVVwIiwiYmluZCIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJtb3VzZU91dCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIkNsYXNzIiwicHJvcGVydGllcyIsIm9uU3RhcnREcmFnZ2luZyIsIm9uU3RvcERyYWdnaW5nIiwib25EcmFnIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFVB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SCxVQURuRSxDQUMrQ0csTUFEL0M7QUFDakMsVUFBd0Y1QyxPQUF4RixHQUFvR3lDLFVBQXBHLENBQXdGekMsT0FBeEY7QUFDQSxpQ0FBdUIwQyxlQUF2QixDQUZpQyxDQUVPO0FBQ3hDLGdDQUFzQkMsY0FBdEIsQ0FIaUMsQ0FHSztBQUN0Qyx3QkFBY0MsTUFBZCxDQUppQyxDQUlYOztBQUU1QixhQUFPeEMsUUFBUXlDLGNBQVIsQ0FBdUJMLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ2xDLHFCQUExQyxFQUFpRUMsb0JBQWpFLEVBQXVGQyxvQkFBdkYsRUFBNkdDLG1CQUE3RyxFQUFrSUMsV0FBbEksRUFBK0lYLE9BQS9JLENBQVA7QUFDRDs7OztFQXhKb0JJLE87O0FBMkp2QjBDLE9BQU9DLE1BQVAsQ0FBYzFDLFFBQWQsRUFBd0I7QUFDdEIyQyxXQUFTLEtBRGE7QUFFdEJDLHFCQUFtQixDQUNqQix1QkFEaUIsRUFFakIsc0JBRmlCLEVBR2pCLGlCQUhpQixFQUlqQixnQkFKaUIsRUFLakIsUUFMaUIsRUFNakIsU0FOaUI7QUFGRyxDQUF4Qjs7QUFZQUMsT0FBT0MsT0FBUCxHQUFpQjlDLFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucyxcbiAgICAgIHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIgID0gZnVuY3Rpb24oKSB7fSwgc3RvcERyYWdnaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCkge30sIGRyYWdIYW5kbGVyID0gZnVuY3Rpb24oKSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgXG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBzdGFydERyYWdnaW5nSGFuZGxlcjtcbiAgICBcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBzdG9wRHJhZ2dpbmdIYW5kbGVyO1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICBcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIFxuICAgIHdpbmRvdy5vbignbW91c2V1cCBibHVyJywgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpOyAgLy8vXG4gICBcbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gIFxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuICBcbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50O1xuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICsxOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gICAgXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlcigpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIG9uU3RhcnREcmFnZ2luZywgb25TdG9wRHJhZ2dpbmcsIG9uRHJhZywgb3B0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdnaW5nSGFuZGxlciA9IG9uU3RhcnREcmFnZ2luZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdnaW5nSGFuZGxlciA9IG9uU3RvcERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZzsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdiZWZvcmVTaXplYWJsZUVsZW1lbnQnLFxuICAgICdhZnRlclNpemVhYmxlRWxlbWVudCcsXG4gICAgJ29uU3RhcnREcmFnZ2luZycsXG4gICAgJ29uU3RvcERyYWdnaW5nJyxcbiAgICAnb25EcmFnJyxcbiAgICAnb3B0aW9ucydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iXX0=