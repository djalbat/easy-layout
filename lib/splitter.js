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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJFbGVtZW50IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsImtleURvd25IYW5kbGVyIiwiZ2V0S2V5RG93bkhhbmRsZXIiLCJvbktleURvd24iLCJvZmZLZXlEb3duIiwia2V5Q29kZSIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwIiwiYmluZCIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJtb3VzZU91dCIsImZyb21TdGF0ZSIsInNldFN0YXRlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJmcm9tUHJvcGVydGllcyIsInNwbGl0dGVyIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIs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LFFBQWQsRUFBd0I7QUFDdEJxRCxXQUFTLEtBRGE7QUFFdEJDLHFCQUFtQixDQUNqQix1QkFEaUIsRUFFakIsc0JBRmlCLEVBR2pCLGlCQUhpQixFQUlqQixnQkFKaUIsRUFLakIsUUFMaUIsRUFNakIsU0FOaUIsRUFPakIsVUFQaUI7QUFGRyxDQUF4Qjs7QUFhQUMsT0FBT0MsT0FBUCxHQUFpQnhELFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucyxcbiAgICAgIHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIgID0gZnVuY3Rpb24oKSB7fSwgc3RvcERyYWdnaW5nSGFuZGxlciA9IGZ1bmN0aW9uKCkge30sIGRyYWdIYW5kbGVyID0gZnVuY3Rpb24oKSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlciA9IHN0YXJ0RHJhZ2dpbmdIYW5kbGVyO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlciA9IHN0b3BEcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKCdkaXNhYmxlZCcpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKCdkcmFnZ2luZycpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblByZXNlbnQgPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIGNvbnN0IGtleURvd25IYW5kbGVyID0gdGhpcy5nZXRLZXlEb3duSGFuZGxlcigpO1xuXG4gICAgICB3aW5kb3cub25LZXlEb3duKGtleURvd25IYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKCdkcmFnZ2luZycpO1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICBjb25zdCBrZXlEb3duSGFuZGxlciA9IHRoaXMuZ2V0S2V5RG93bkhhbmRsZXIoKTtcblxuICAgICAgd2luZG93Lm9mZktleURvd24oa2V5RG93bkhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2RyYWdnaW5nJyk7XG5cbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UoZGlzYWJsZWQpIHtcbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICB3aW5kb3cub24oJ21vdXNldXAgYmx1cicsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0S2V5RG93bkhhbmRsZXIoKSB7IHJldHVybiB0aGlzLmZyb21TdGF0ZSgna2V5RG93bkhhbmRsZXInKTsgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBrZXlEb3duSGFuZGxlciA9IHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAga2V5RG93bkhhbmRsZXI6IGtleURvd25IYW5kbGVyXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIG9uU3RhcnREcmFnZ2luZywgb25TdG9wRHJhZ2dpbmcsIG9uRHJhZywgb3B0aW9ucywgZGlzYWJsZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBvblN0b3BEcmFnZ2luZywgLy8vXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHNwbGl0dGVyID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyLmluaXRpYWxpc2UoZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXIsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ2JlZm9yZVNpemVhYmxlRWxlbWVudCcsXG4gICAgJ2FmdGVyU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnb25TdGFydERyYWdnaW5nJyxcbiAgICAnb25TdG9wRHJhZ2dpbmcnLFxuICAgICdvbkRyYWcnLFxuICAgICdvcHRpb25zJyxcbiAgICAnZGlzYWJsZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIl19