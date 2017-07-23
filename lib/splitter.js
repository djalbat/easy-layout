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

    _this.setInitialState();
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
    key: 'isDisabled',
    value: function isDisabled() {
      var disabled = this.hasClass('disabled');

      return disabled;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      var dragging = this.hasClass('dragging');

      return dragging;
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
    key: 'isOptionPresent',
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
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
      this.removeClass('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.addClass('disabled');
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        var keyDownHandler = this.getKeyDownHandler();

        window.onKeyDown(keyDownHandler);
      }

      this.addClass('dragging');

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        var keyDownHandler = this.getKeyDownHandler();

        window.offKeyDown(keyDownHandler);
      }

      this.removeClass('dragging');

      this.stopDraggingHandler();
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
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
  }, {
    key: 'initialise',
    value: function initialise(disabled) {
      disabled === true ? ///
      this.disable() : this.enable();

      window.on('mouseup blur', this.mouseUp.bind(this)); ///

      window.onMouseMove(this.mouseMove.bind(this));

      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }, {
    key: 'getKeyDownHandler',
    value: function getKeyDownHandler() {
      return this.fromState('keyDownHandler');
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var keyDownHandler = this.keyDownHandler.bind(this);

      this.setState({
        keyDownHandler: keyDownHandler
      });
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
      var disabled = properties.disabled;
      var startDraggingHandler = onStartDragging; ///
      var stopDraggingHandler = onStopDragging; ///
      var dragHandler = onDrag; ///
      var splitter = Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

      splitter.initialise(disabled);

      return splitter;
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onStartDragging', 'onStopDragging', 'onDrag', 'options', 'disabled']
});

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJFbGVtZW50IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJzZXRJbml0aWFsU3RhdGUiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsImtleURvd25IYW5kbGVyIiwiZ2V0S2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJvZmZLZXlEb3duIiwia2V5Q29kZSIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwIiwiYmluZCIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJtb3VzZU91dCIsImZyb21TdGF0ZSIsInNldFN0YXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJmcm9tUHJvcGVydGllcyIsInNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCOztBQUVBLElBQU1FLGlCQUFpQixFQUF2Qjs7QUFFTSxJQUFFQyx5QkFBRixHQUFnQ0YsT0FBaEMsQ0FBRUUseUJBQUY7SUFDRUMsTSxHQUFvQkwsSSxDQUFwQkssTTtJQUFRQyxPLEdBQVlOLEksQ0FBWk0sTzs7SUFFVkMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLHFCQUF0QixFQUE2Q0Msb0JBQTdDLEVBQTBMO0FBQUEsUUFBdkhDLG9CQUF1SCx1RUFBL0YsWUFBVyxDQUFFLENBQWtGO0FBQUEsUUFBaEZDLG1CQUFnRix1RUFBMUQsWUFBVyxDQUFFLENBQTZDO0FBQUEsUUFBM0NDLFdBQTJDLHVFQUE3QixZQUFXLENBQUUsQ0FBZ0I7QUFBQSxRQUFkWCxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQUEsb0hBQ2xMTSxRQURrTDs7QUFHeEwsVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7O0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLFVBQUtDLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSxVQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjs7QUFFQSxVQUFLWCxPQUFMLEdBQWVBLE9BQWY7O0FBRUEsVUFBS1ksZUFBTDtBQVp3TDtBQWF6TDs7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLTCxxQkFBWjtBQUNEOzs7NkNBRXdCO0FBQ3ZCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0csV0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRSxXQUFXLEtBQUtDLFFBQUwsQ0FBYyxVQUFkLENBQWpCOztBQUVBLGFB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OUtvQm5ELE87O0FBaUx2QnFELE9BQU9DLE1BQVAsQ0FBY3JELFFBQWQsRUFBd0I7QUFDdEJzRCxXQUFTLEtBRGE7QUFFdEJDLHFCQUFtQixDQUNqQix1QkFEaUIsRUFFakIsc0JBRmlCLEVBR2pCLGlCQUhpQixFQUlqQixnQkFKaUIsRUFLakIsUUFMaUIsRUFNakIsU0FOaUIsRUFPakIsVUFQaUI7QUFGRyxDQUF4Qjs7QUFhQUMsT0FBT0MsT0FBUCxHQUFpQnpELFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucyxcbiAgICAgIHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIgID0gZnVuY3Rpb24oKSB7fSwgc3RvcERyYWdnaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCkge30sIGRyYWdIYW5kbGVyID0gZnVuY3Rpb24oKSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlciA9IHN0YXJ0RHJhZ2dpbmdIYW5kbGVyO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlciA9IHN0b3BEcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBpc0JlZm9yZVNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc0FmdGVyU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgZ2V0RHJhZ0hhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcygnZGlzYWJsZWQnKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcygnZHJhZ2dpbmcnKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50O1xuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICsxOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBrZXlEb3duSGFuZGxlciA9IHRoaXMuZ2V0S2V5RG93bkhhbmRsZXIoKTtcblxuICAgICAgd2luZG93Lm9uS2V5RG93bihrZXlEb3duSGFuZGxlcik7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcygnZHJhZ2dpbmcnKTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgY29uc3Qga2V5RG93bkhhbmRsZXIgPSB0aGlzLmdldEtleURvd25IYW5kbGVyKCk7XG5cbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKGtleURvd25IYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKCdkcmFnZ2luZycpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKGRpc2FibGVkKSB7XG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIGdldEtleURvd25IYW5kbGVyKCkgeyByZXR1cm4gdGhpcy5mcm9tU3RhdGUoJ2tleURvd25IYW5kbGVyJyk7IH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3Qga2V5RG93bkhhbmRsZXIgPSB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGtleURvd25IYW5kbGVyOiBrZXlEb3duSGFuZGxlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBvblN0YXJ0RHJhZ2dpbmcsIG9uU3RvcERyYWdnaW5nLCBvbkRyYWcsIG9wdGlvbnMsIGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gb25TdGFydERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ2dpbmdIYW5kbGVyID0gb25TdG9wRHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlciA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICBzcGxpdHRlci5pbml0aWFsaXNlKGRpc2FibGVkKTtcblxuICAgIHJldHVybiBzcGxpdHRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBpZ25vcmVkUHJvcGVydGllczogW1xuICAgICdiZWZvcmVTaXplYWJsZUVsZW1lbnQnLFxuICAgICdhZnRlclNpemVhYmxlRWxlbWVudCcsXG4gICAgJ29uU3RhcnREcmFnZ2luZycsXG4gICAgJ29uU3RvcERyYWdnaW5nJyxcbiAgICAnb25EcmFnJyxcbiAgICAnb3B0aW9ucycsXG4gICAgJ2Rpc2FibGVkJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiJdfQ==