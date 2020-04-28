"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require("easy");

var options = require("./options");

var window = easy.window,
    Element = easy.Element,
    ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING;
var ESCAPE_KEY_CODE = 27;

var Splitter = /*#__PURE__*/function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, Splitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Splitter).call(this, selector));
    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;
    _this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    _this.dragHandler = dragHandler || defaultDragHandler;
    _this.options = options || defaultOptions;
    return _this;
  }

  _createClass(Splitter, [{
    key: "isBeforeSizeableElement",
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: "isAfterSizeableElement",
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: "getDragHandler",
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.hasClass("disabled");
      return disabled;
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      var dragging = this.hasClass("dragging");
      return dragging;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      var direction;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: "getSizeableElement",
    value: function getSizeableElement() {
      var sizeableElement;
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
    key: "isOptionPresent",
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "setOption",
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: "unsetOption",
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: "enable",
    value: function enable() {
      this.removeClass("disabled");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.addClass("disabled");
    }
  }, {
    key: "startDragging",
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass("dragging");
      this.startDraggingHandler();
    }
  }, {
    key: "stopDragging",
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler, this);
      }

      this.removeClass("dragging");
      this.stopDraggingHandler();
    }
  }, {
    key: "onDrag",
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEY_CODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: "initialise",
    value: function initialise(disabled) {
      disabled === true ? ///
      this.disable() : this.enable();
      window.on("mouseup blur", this.mouseUp.bind(this)); ///

      window.onMouseMove(this.mouseMove.bind(this));
      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }], [{
    key: "fromProperties",
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
  tagName: "div",
  ignoredProperties: ["beforeSizeableElement", "afterSizeableElement", "onStartDragging", "onStopDragging", "onDrag", "options", "disabled"]
});
module.exports = Splitter;

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

var defaultOptions = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwib3B0aW9ucyIsIndpbmRvdyIsIkVsZW1lbnQiLCJFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIiwiRVNDQVBFX0tFWV9DT0RFIiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlciIsImRlZmF1bHREcmFnSGFuZGxlciIsImRlZmF1bHRPcHRpb25zIiwiZGlzYWJsZWQiLCJoYXNDbGFzcyIsImRyYWdnaW5nIiwiZGlyZWN0aW9uIiwic2l6ZWFibGVFbGVtZW50IiwiZ2V0RGlyZWN0aW9uIiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldE5leHRTaWJsaW5nRWxlbWVudCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImRpc2FibGUiLCJlbmFibGUiLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJzcGxpdHRlciIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJpZ25vcmVkUHJvcGVydGllcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUF2Qjs7SUFFUUUsTSxHQUFvQkgsSSxDQUFwQkcsTTtJQUFRQyxPLEdBQVlKLEksQ0FBWkksTztJQUNSQyx5QixHQUE4QkgsTyxDQUE5QkcseUI7QUFFUixJQUFNQyxlQUFlLEdBQUcsRUFBeEI7O0lBRU1DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxxQkFBdEIsRUFBNkNDLG9CQUE3QyxFQUFtRUMsb0JBQW5FLEVBQXlGQyxtQkFBekYsRUFBOEdDLFdBQTlHLEVBQTJIWCxPQUEzSCxFQUFvSTtBQUFBOztBQUFBOztBQUNsSSxrRkFBTU0sUUFBTjtBQUVBLFVBQUtDLHFCQUFMLEdBQTZCQSxxQkFBN0I7QUFDQSxVQUFLQyxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUFvQixJQUFJRywyQkFBcEQ7QUFDQSxVQUFLRixtQkFBTCxHQUEyQkEsbUJBQW1CLElBQUlHLDBCQUFsRDtBQUNBLFVBQUtGLFdBQUwsR0FBbUJBLFdBQVcsSUFBSUcsa0JBQWxDO0FBQ0EsVUFBS2QsT0FBTCxHQUFlQSxPQUFPLElBQUllLGNBQTFCO0FBVGtJO0FBVW5JOzs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtSLHFCQUFaO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLQyxvQkFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRyxXQUFaO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1LLFFBQVEsR0FBRyxLQUFLQyxRQUFMLENBQWMsVUFBZCxDQUFqQjtBQUVBLGFBQU9ELFFBQVA7QUFD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QUUsS0FEYTtBQUV0QkMsRUFBQUEsaUJBQWlCLEVBQUUsQ0FDakIsdUJBRGlCLEVBRWpCLHNCQUZpQixFQUdqQixpQkFIaUIsRUFJakIsZ0JBSmlCLEVBS2pCLFFBTGlCLEVBTWpCLFNBTmlCLEVBT2pCLFVBUGlCO0FBRkcsQ0FBeEI7QUFhQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekQsUUFBakI7O0FBRUEsU0FBU08sMkJBQVQsR0FBdUMsQ0FBRTs7QUFFekMsU0FBU0MsMEJBQVQsR0FBc0MsQ0FBRTs7QUFFeEMsU0FBU0Msa0JBQVQsR0FBOEIsQ0FBRTs7QUFFaEMsSUFBTUMsY0FBYyxHQUFHLEVBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoXCIuL29wdGlvbnNcIik7XG5cbmNvbnN0IHsgd2luZG93LCBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gPSBvcHRpb25zO1xuXG5jb25zdCBFU0NBUEVfS0VZX0NPREUgPSAyNztcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSBhZnRlclNpemVhYmxlRWxlbWVudDtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBzdGFydERyYWdnaW5nSGFuZGxlciB8fCBkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyID0gc3RvcERyYWdnaW5nSGFuZGxlciB8fCBkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXIgfHwgZGVmYXVsdERyYWdIYW5kbGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdE9wdGlvbnM7XG4gIH1cblxuICBpc0JlZm9yZVNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc0FmdGVyU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgZ2V0RHJhZ0hhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgbGV0IHNpemVhYmxlRWxlbWVudDtcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKGRpc2FibGVkKSB7XG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKFwibW91c2V1cCBibHVyXCIsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBvblN0YXJ0RHJhZ2dpbmcsIG9uU3RvcERyYWdnaW5nLCBvbkRyYWcsIG9wdGlvbnMsIGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gb25TdGFydERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ2dpbmdIYW5kbGVyID0gb25TdG9wRHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlciA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICBzcGxpdHRlci5pbml0aWFsaXNlKGRpc2FibGVkKTtcblxuICAgIHJldHVybiBzcGxpdHRlcjtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFNwbGl0dGVyLCB7XG4gIHRhZ05hbWU6IFwiZGl2XCIsXG4gIGlnbm9yZWRQcm9wZXJ0aWVzOiBbXG4gICAgXCJiZWZvcmVTaXplYWJsZUVsZW1lbnRcIixcbiAgICBcImFmdGVyU2l6ZWFibGVFbGVtZW50XCIsXG4gICAgXCJvblN0YXJ0RHJhZ2dpbmdcIixcbiAgICBcIm9uU3RvcERyYWdnaW5nXCIsXG4gICAgXCJvbkRyYWdcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCJcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlcigpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdERyYWdIYW5kbGVyKCkge31cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbiJdfQ==