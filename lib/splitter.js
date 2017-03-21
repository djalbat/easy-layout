'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    window = easy.window,
    Element = easy.Element;


var options = require('./options');

var ESCAPE_KEYCODE = 27;

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
        window.on('keydown', this.keyDownHandler.bind(this));
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        window.off('keydown', this.keyDownHandler.bind(this));
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var situated = properties.situated,
          sizeableElement = properties.sizeableElement,
          onDrag = properties.onDrag,
          dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, situated, sizeableElement, dragHandler);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredAttributes: ['situated', 'sizeableElement', 'onDrag']
});

module.exports = Splitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiZWFzeSIsIkVsZW1lbnQiLCJvcHRpb25zIiwiRVNDQVBFX0tFWUNPREUiLCJTcGxpdHRlciIsInNlbGVjdG9yIiwic2l0dWF0ZWQiLCJzaXplYWJsZUVsZW1lbnQiLCJkcmFnSGFuZGxlciIsImRpc2FibGVkIiwiZHJhZ2dpbmciLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0Iiwib3B0aW9uIiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyIsImhhc09wdGlvbiIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJrZXlEb3duSGFuZGxlciIsIm9mZiIsImV2ZW50Iiwia2V5Q29kZSIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJDbGFzcyIsInByb3BlcnRpZXMiLCJvbkRyYWciLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkQXR0cmlidXRlcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRU0sV0FBT0EsUUFBUSxNQUFSLENBQVA7QUFBQSxJQUNFQyxNQURGLEdBQ3NCQyxJQUR0QixDQUNFRCxNQURGO0FBQUEsSUFDVUUsT0FEVixHQUNzQkQsSUFEdEIsQ0FDVUMsT0FEVjs7O0FBR04sSUFBTUMsVUFBVUosUUFBUSxXQUFSLENBQWhCOztBQUVBLElBQU1LLGlCQUFpQixFQUF2Qjs7SUFFTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDQyxlQUFoQyxFQUFpREMsV0FBakQsRUFBOEQ7QUFBQTs7QUFBQSxvSEFDdERILFFBRHNEOztBQUc1RCxVQUFLQyxRQUFMLEdBQWdC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QVMsS0FEYTtBQUV0QkMscUJBQW1CLENBQ2pCLFVBRGlCLEVBRWpCLGlCQUZpQixFQUdqQixRQUhpQjtBQUZHLENBQXhCOztBQVNBQyxPQUFPQyxPQUFQLEdBQWlCckMsUUFBakIiLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICB7IHdpbmRvdywgRWxlbWVudCB9ID0gZWFzeTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgICBcbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgaGFzT3B0aW9uKG9wdGlvbikge1xuICAgIG9wdGlvbiA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvbjtcbiAgfVxuICBcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nID0gdGhpcy5oYXNPcHRpb24ob3B0aW9ucy5FU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nKSB7XG4gICAgICB3aW5kb3cub24oJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihvcHRpb25zLkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vZmYoJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlDT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIG9uRHJhZyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZzsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXIsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGlnbm9yZWRBdHRyaWJ1dGVzOiBbXG4gICAgJ3NpdHVhdGVkJyxcbiAgICAnc2l6ZWFibGVFbGVtZW50JyxcbiAgICAnb25EcmFnJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiJdfQ==