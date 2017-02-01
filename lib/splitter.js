'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element,
    window = easyui.window;

var options = require('./options');

var ESCAPE_KEYCODE = 27,
    NAMESPACE = 'EasyUI-Layout';

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

    _this.disabled = false;

    _this.dragging = false;

    window.on('mouseup blur', _this.mouseUp.bind(_this)); ///
    window.onMouseMove(_this.mouseMove.bind(_this));
    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseOver(_this.mouseOver.bind(_this));
    _this.onMouseOut(_this.mouseOut.bind(_this));

    _this.options = {};
    return _this;
  }

  _createClass(Splitter, [{
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
    key: 'hasOption',
    value: function hasOption(option) {
      option = this.options[option] === true; ///

      return option;
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
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.on('keydown', this.keyDownHandler.bind(this), NAMESPACE);
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.off('keydown', NAMESPACE);
      }

      this.dragging = false;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(event) {
      var keyCode = event.keyCode;

      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }]);

  return Splitter;
}(Element);

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIndpbmRvdyIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIk5BTUVTUEFDRSIsIlNwbGl0dGVyIiwic2VsZWN0b3IiLCJzaXR1YXRlZCIsInNpemVhYmxlRWxlbWVudCIsImRyYWdIYW5kbGVyIiwiZGlzYWJsZWQiLCJkcmFnZ2luZyIsIm9uIiwibW91c2VVcCIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZSIsIm9uTW91c2VEb3duIiwibW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXQiLCJvcHRpb24iLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nIiwiaGFzT3B0aW9uIiwiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsImtleURvd25IYW5kbGVyIiwib2ZmIiwiZXZlbnQiLCJrZXlDb2RlIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxVQUFVRixPQUFPRSxPQURyQjtBQUFBLElBRUlDLFNBQVNILE9BQU9HLE1BRnBCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkOztBQUVBLElBQU1JLGlCQUFpQixFQUF2QjtBQUFBLElBQ01DLFlBQVksZUFEbEI7O0lBR01DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsb0hBQ3RESCxRQURzRDs7QUFHNUQsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7O0FBRUEsVUFBS0MsUUFBTCxHQUFnQixLQUFoQjs7QUFFQVYsV0FBT1csRUFBUCxDQUFVLGNBQVYsRUFBMEIsTUFBS0MsT0FBTCxDQUFhQyxJQUFiLE9BQTFCLEVBWDRELENBV1A7QUFDckRiLFdBQU9jLFdBQVAsQ0FBbUIsTUFBS0MsU0FBTCxDQUFlRixJQUFmLE9BQW5CO0FBQ0EsVUFBS0csV0FBTCxDQUFpQixNQUFLQyxTQUFMLENBQWVKLElBQWYsT0FBakI7QUFDQSxVQUFLSyxXQUFMLENBQWlCLE1BQUtDLFNBQUwsQ0FBZU4sSUFBZixPQUFqQjtBQUNBLFVBQUtPLFVBQUwsQ0FBZ0IsTUFBS0MsUUFBTCxDQUFjUixJQUFkLE9BQWhCOztBQUVBLFVBQUtaLE9BQUwsR0FBZSxFQUFmO0FBakI0RDtBQWtCN0Q7Ozs7OEJBRVNxQixNLEVBQVE7QUFDaEIsV0FBS3JCLE9BQUwsQ0FBYXFCLE1BQWIsSUFBdUIsSUFBdkI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsYUFBTyxLQUFLckIsT0FBTCxDQUFhcUIsTUFBYixDQUFQO0FBQ0Q7Ozs4QkFFU0EsTSxFQUFRO0FBQ2hCQSxlQUFVLEtBQUtyQixPQUFMLENBQWFxQixNQUFiLE1BQXlCLElBQW5DLENBRGdCLENBQzBCOztBQUUxQyxhQUFPQSxNQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtiLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtBLFFBQVo7QUFDRDs7OzJCQUVNRCxXLEVBQWE7QUFDbEIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSWUseUJBQXlCLEtBQUtDLFNBQUwsQ0FBZXZCLFFBQVF3Qix5QkFBdkIsQ0FBN0I7O0FBRUEsVUFBSUYsc0JBQUosRUFBNEI7QUFDMUJ2QixlQUFPVyxFQUFQLENBQVUsU0FBVixFQUFxQixLQUFLZSxjQUFMLENBQW9CYixJQUFwQixDQUF5QixJQUF6QixDQUFyQixFQUFxRFYsU0FBckQ7QUFDRDs7QUFFRCxXQUFLTyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlhLHlCQUF5QixLQUFLQyxTQUFMLENBQWV2QixRQUFRd0IseUJBQXZCLENBQTdCOztBQUVBLFVBQUlGLHNCQUFKLEVBQTRCO0FBQzFCdkIsZUFBTzJCLEdBQVAsQ0FBVyxTQUFYLEVBQXNCeEIsU0FBdEI7QUFDRDs7QUFFRCxXQUFLTyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0Q7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0EsUUFBWjtBQUNEOzs7bUNBRWNrQixLLEVBQU87QUFDcEIsVUFBSUMsVUFBVUQsTUFBTUMsT0FBcEI7O0FBRUEsVUFBSUEsWUFBWTNCLGNBQWhCLEVBQWdDO0FBQzlCLFlBQUlRLFdBQVcsS0FBS29CLFVBQUwsRUFBZjs7QUFFQSxZQUFJcEIsUUFBSixFQUFjO0FBQ1osZUFBS3FCLFlBQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs7RUFyRm9CaEMsTzs7QUF3RnZCaUMsT0FBT0MsT0FBUCxHQUFpQjdCLFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIHdpbmRvdyA9IGVhc3l1aS53aW5kb3c7XG5cbnZhciBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjcsXG4gICAgICBOQU1FU1BBQ0UgPSAnRWFzeVVJLUxheW91dCc7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB3aW5kb3cub24oJ21vdXNldXAgYmx1cicsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgaGFzT3B0aW9uKG9wdGlvbikge1xuICAgIG9wdGlvbiA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuICBcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB2YXIgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgd2luZG93Lm9uKCdrZXlkb3duJywgdGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpLCBOQU1FU1BBQ0UpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHZhciBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24ob3B0aW9ucy5FU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub2ZmKCdrZXlkb3duJywgTkFNRVNQQUNFKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiJdfQ==