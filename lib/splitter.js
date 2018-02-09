'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var ESCAPE_KEYCODE = 27;

var ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING,
    window = easy.window,
    Element = easy.Element;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;

    _this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    _this.dragHandler = dragHandler || defaultDragHandler;
    _this.options = options || defaultOptions;
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
        window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass('dragging');

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler, this);
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement,
          afterSizeableElement = properties.afterSizeableElement,
          onStartDragging = properties.onStartDragging,
          onStopDragging = properties.onStopDragging,
          onDrag = properties.onDrag,
          options = properties.options,
          disabled = properties.disabled,
          startDraggingHandler = onStartDragging,
          stopDraggingHandler = onStopDragging,
          dragHandler = onDrag,
          splitter = Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);


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

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

var defaultOptions = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJFbGVtZW50IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlciIsImRlZmF1bHREcmFnSGFuZGxlciIsImRlZmF1bHRPcHRpb25zIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImRyYWdnaW5nIiwiZGlyZWN0aW9uIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImRpc2FibGUiLCJlbmFibGUiLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJzcGxpdHRlciIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsVUFBVUQsUUFBUSxXQUFSLENBQWhCOztBQUVBLElBQU1FLGlCQUFpQixFQUF2Qjs7QUFFTSxJQUFFQyx5QkFBRixHQUFnQ0YsT0FBaEMsQ0FBRUUseUJBQUY7QUFBQSxJQUNFQyxNQURGLEdBQ3NCTCxJQUR0QixDQUNFSyxNQURGO0FBQUEsSUFDVUMsT0FEVixHQUNzQk4sSUFEdEIsQ0FDVU0sT0FEVjs7SUFHQUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLHFCQUF0QixFQUE2Q0Msb0JBQTdDLEVBQW1FQyxvQkFBbkUsRUFBeUZDLG1CQUF6RixFQUE4R0MsV0FBOUcsRUFBMkhYLE9BQTNILEVBQW9JO0FBQUE7O0FBQUEsb0hBQzVITSxRQUQ0SDs7QUFHbEksVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7O0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLHdCQUF3QkcsMkJBQXBEO0FBQ0EsVUFBS0YsbUJBQUwsR0FBMkJBLHVCQUF1QkcsMEJBQWxEO0FBQ0EsVUFBS0YsV0FBTCxHQUFtQkEsZUFBZUcsa0JBQWxDO0FBQ0EsVUFBS2QsT0FBTCxHQUFlQSxXQUFXZSxjQUExQjtBQVRrSTtBQVVuSTs7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLUixxQkFBWjtBQUNEOzs7NkNBRXdCO0FBQ3ZCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0csV0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNSyxXQUFXLEtBQUtDLFFBQUwsQ0FBYyxVQUFkLENBQWpCOztBQUVBLGFBQU9ELFFBQVA7QUFDRDs7O2lDQUVZ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RUEsU0FBU08sMkJBQVQsR0FBdUMsQ0FBRTs7QUFFekMsU0FBU0MsMEJBQVQsR0FBc0MsQ0FBRTs7QUFFeEMsU0FBU0Msa0JBQVQsR0FBOEIsQ0FBRTs7QUFFaEMsSUFBTUMsaUJBQWlCLEVBQXZCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9ID0gb3B0aW9ucyxcbiAgICAgIHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlciA9IHN0YXJ0RHJhZ2dpbmdIYW5kbGVyIHx8IGRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBzdG9wRHJhZ2dpbmdIYW5kbGVyIHx8IGRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyO1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlciB8fCBkZWZhdWx0RHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0T3B0aW9ucztcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKCdkaXNhYmxlZCcpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKCdkcmFnZ2luZycpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblByZXNlbnQgPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcygnZHJhZ2dpbmcnKTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDbGFzcygnZHJhZ2dpbmcnKTtcblxuICAgIHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlcigpO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZShkaXNhYmxlZCkge1xuICAgIChkaXNhYmxlZCA9PT0gdHJ1ZSkgPyAvLy9cbiAgICAgIHRoaXMuZGlzYWJsZSgpIDpcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcblxuICAgIHdpbmRvdy5vbignbW91c2V1cCBibHVyJywgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpOyAgLy8vXG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIG9uU3RhcnREcmFnZ2luZywgb25TdG9wRHJhZ2dpbmcsIG9uRHJhZywgb3B0aW9ucywgZGlzYWJsZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBvblN0b3BEcmFnZ2luZywgLy8vXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHNwbGl0dGVyID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyLmluaXRpYWxpc2UoZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXIsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgJ2JlZm9yZVNpemVhYmxlRWxlbWVudCcsXG4gICAgJ2FmdGVyU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnb25TdGFydERyYWdnaW5nJyxcbiAgICAnb25TdG9wRHJhZ2dpbmcnLFxuICAgICdvbkRyYWcnLFxuICAgICdvcHRpb25zJyxcbiAgICAnZGlzYWJsZWQnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuXG5mdW5jdGlvbiBkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXIoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlcigpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHREcmFnSGFuZGxlcigpIHt9XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG4iXX0=