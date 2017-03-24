'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');
var window = easy.window;
var Element = easy.Element;


var options = require('./options');

var ESCAPE_KEYCODE = 27;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;

    _this.afterSizeableElement = afterSizeableElement;

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
    key: 'getDirection',
    value: function getDirection() {
      var direction = undefined; ///

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
      var sizeableElement = undefined; ///

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
      var beforeSizeableElement = properties.beforeSizeableElement;
      var afterSizeableElement = properties.afterSizeableElement;
      var onDrag = properties.onDrag;
      var dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, dragHandler);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onDrag']
});

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwid2luZG93IiwiZWFzeSIsIkVsZW1lbnQiLCJvcHRpb25zIiwiRVNDQVBFX0tFWUNPREUiLCJTcGxpdHRlciIsInNlbGVjdG9yIiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJkcmFnSGFuZGxlciIsImRpc2FibGVkIiwiZHJhZ2dpbmciLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiZGlyZWN0aW9uIiwidW5kZWZpbmVkIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsIm9wdGlvbiIsImVzY2FwZUtleVN0b3BzRHJhZ2dpbmciLCJoYXNPcHRpb24iLCJFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIiwia2V5RG93bkhhbmRsZXIiLCJvZmYiLCJldmVudCIsImtleUNvZGUiLCJpc0RyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25EcmFnIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVNLFdBQU9BLFFBQVEsTUFBUixDQUFQO0lBQ0VDLE0sR0FBb0JDLEksQ0FBcEJELE07SUFBUUUsTyxHQUFZRCxJLENBQVpDLE87OztBQUVoQixJQUFNQyxVQUFVSixRQUFRLFdBQVIsQ0FBaEI7O0FBRUEsSUFBTUssaUJBQWlCLEVBQXZCOztJQUVNQyxROzs7QUFDSixvQkFBWUMs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Q0FBb0JuQixJQUFwQixDQUF5QixJQUF6QixDQUF0QjtBQUNEOztBQUVELFdBQUtILFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7OzttQ0FFY3dCLEssRUFBTztBQUNwQixVQUFNQyxVQUFVRCxNQUFNQyxPQUF0Qjs7QUFFQSxVQUFJQSxZQUFZaEMsY0FBaEIsRUFBZ0M7QUFDOUIsWUFBTU8sV0FBVyxLQUFLMEIsVUFBTCxFQUFqQjs7QUFFQSxZQUFJMUIsUUFBSixFQUFjO0FBQ1osZUFBSzJCLFlBQUw7QUFDRDtBQUNGO0FBQ0Y7OzttQ0FFcUJDLEssRUFBT0MsVSxFQUFZO0FBQUEsVUFDL0JqQyxxQkFEK0IsR0FDeUJpQyxVQUR6QixDQUMvQmpDLHFCQUQrQjtBQUFBLFVBQ1JDLG9CQURRLEdBQ3lCZ0MsVUFEekIsQ0FDUmhDLG9CQURRO0FBQ2pDLFVBQStDaUMsTUFBL0MsR0FBMERELFVBQTFELENBQStDQyxNQUEvQztBQUNBLHdCQUFjQSxNQUFkLENBRmlDLENBRVg7O0FBRTVCLGFBQU92QyxRQUFRd0MsY0FBUixDQUF1QkgsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDakMscUJBQTFDLEVBQWlFQyxvQkFBakUsRUFBdUZDLFdBQXZGLENBQVA7QUFDRDs7OztFQXhJb0JQLE87O0FBMkl2QnlDLE9BQU9DLE1BQVAsQ0FBY3ZDLFFBQWQsRUFBd0I7QUFDdEJ3QyxXQUFTLEtBRGE7QUFFdEJDLHFCQUFtQixDQUNqQix1QkFEaUIsRUFFakIsc0JBRmlCLEVBR2pCLFFBSGlCO0FBRkcsQ0FBeEI7O0FBU0FDLE9BQU9DLE9BQVAsR0FBaUIzQyxRQUFqQiIsImZpbGUiOiJzcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5O1xuXG5jb25zdCBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbmNvbnN0IEVTQ0FQRV9LRVlDT0RFID0gMjc7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICBcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIFxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgIFxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICBcbiAgICB0aGlzLm9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHVuZGVmaW5lZDsgIC8vL1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50ID0gdW5kZWZpbmVkOyAgLy8vXG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBoYXNPcHRpb24ob3B0aW9uKSB7XG4gICAgb3B0aW9uID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihvcHRpb25zLkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIHdpbmRvdy5vbigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgd2luZG93Lm9mZigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25EcmFnIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnOyAvLy9cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvbkRyYWcnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIl19