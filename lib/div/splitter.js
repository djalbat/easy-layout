"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _constants = require("../constants");

var _options = require("../options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  flex-shrink: 0;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SplitterDiv = /*#__PURE__*/function (_Element) {
  _inherits(SplitterDiv, _Element);

  function SplitterDiv(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;
    _this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    _this.dragHandler = dragHandler || defaultDragHandler;
    _this.options = options || defaultOptions;
    return _this;
  }

  _createClass(SplitterDiv, [{
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
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass("dragging");
      this.startDraggingHandler();
    }
  }, {
    key: "stopDragging",
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.offKeyDown(this.keyDownHandler, this);
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
    value: function keyDownHandler(event, element) {
      var keyCode = event.keyCode;
      debugger;

      if (keyCode === _constants.ESCAPE_KEY_CODE) {
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

      _easy.window.on("mouseup blur", this.mouseUp.bind(this)); ///


      _easy.window.onMouseMove(this.mouseMove.bind(this));

      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = SplitterDiv;
      }

      var _properties = properties,
          beforeSizeableElement = _properties.beforeSizeableElement,
          afterSizeableElement = _properties.afterSizeableElement,
          onStartDragging = _properties.onStartDragging,
          onStopDragging = _properties.onStopDragging,
          onDrag = _properties.onDrag,
          options = _properties.options,
          disabled = _properties.disabled,
          startDraggingHandler = onStartDragging,
          stopDraggingHandler = onStopDragging,
          dragHandler = onDrag,
          splitter = _easy.Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

      splitter.initialise(disabled);
      return splitter;
    }
  }]);

  return SplitterDiv;
}(_easy.Element);

_defineProperty(SplitterDiv, "tagName", "div");

_defineProperty(SplitterDiv, "defaultProperties", {
  className: "splitter"
});

_defineProperty(SplitterDiv, "ignoredProperties", ["beforeSizeableElement", "afterSizeableElement", "onStartDragging", "onStopDragging", "onDrag", "options", "disabled"]);

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

var defaultOptions = {};

var _default = (0, _easyWithStyle["default"])(SplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsImRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlciIsImRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZGVmYXVsdERyYWdIYW5kbGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImRpc2FibGUiLCJlbmFibGUiLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJzcGxpdHRlciIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFDSix1QkFBWUMsUUFBWixFQUFzQkMscUJBQXRCLEVBQTZDQyxvQkFBN0MsRUFBbUVDLG9CQUFuRSxFQUF5RkMsbUJBQXpGLEVBQThHQyxXQUE5RyxFQUEySEMsT0FBM0gsRUFBb0k7QUFBQTs7QUFBQTs7QUFDbEkscUZBQU1OLFFBQU47QUFFQSxVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCO0FBQ0EsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUVBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBb0IsSUFBSUksMkJBQXBEO0FBQ0EsVUFBS0gsbUJBQUwsR0FBMkJBLG1CQUFtQixJQUFJSSwwQkFBbEQ7QUFDQSxVQUFLSCxXQUFMLEdBQW1CQSxXQUFXLElBQUlJLGtCQUFsQztBQUNBLFVBQUtILE9BQUwsR0FBZUEsT0FBTyxJQUFJSSxjQUExQjtBQVRrSTtBQVVuSTs7Ozs4Q0FFeUI7QUFDeEIsYUFBTyxLQUFLVCxxQkFBWjtBQUNEOzs7NkNBRXdCO0FBQ3ZCLGFBQU8sS0FBS0Msb0JBQVo7QUFDRDs7O3FDQUVnQjtBQUNmLGFBQU8sS0FBS0csV0FBWjtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNTSxRQUFRLEdBQUcsS0FBS0MsUUFBTCxDQUFjLFVBQWQsQ0FBakI7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1FLFFBQVEsR0FBRyxLQUFLRCxRQUFMLENBQWMsVUFBZCxDQUFqQjtBQUVBLGFBQU9DLFFBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUMsU0FBSjs7QUFFQSxVQUFJLEtBQUtiLHFCQUFULEVBQWdDO0FBQzlCYSxRQUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFiO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLWixv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QkFBVCxHQUFzQyxDQUFFOztBQUV4QyxTQUFTQyxrQkFBVCxHQUE4QixDQUFFOztBQUVoQyxJQUFNQyxjQUFjLEdBQUcsRUFBdkI7O2VBRWUsK0JBQVVYLFdBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gZnJvbSBcIi4uL29wdGlvbnNcIjtcblxuY2xhc3MgU3BsaXR0ZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSBhZnRlclNpemVhYmxlRWxlbWVudDtcblxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBzdGFydERyYWdnaW5nSGFuZGxlciB8fCBkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyID0gc3RvcERyYWdnaW5nSGFuZGxlciB8fCBkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXIgfHwgZGVmYXVsdERyYWdIYW5kbGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgZGVmYXVsdE9wdGlvbnM7XG4gIH1cblxuICBpc0JlZm9yZVNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc0FmdGVyU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgZ2V0RHJhZ0hhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGlmICh0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgbGV0IHNpemVhYmxlRWxlbWVudDtcblxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCk7XG5cbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgY2FzZSAtMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSArMTpcbiAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICh0aGlzLm9wdGlvbnNbb3B0aW9uXSA9PT0gdHJ1ZSk7IC8vL1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHRoaXMuc3RhcnREcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKGRpc2FibGVkKSB7XG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKFwibW91c2V1cCBibHVyXCIsIHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcImJlZm9yZVNpemVhYmxlRWxlbWVudFwiLFxuICAgIFwiYWZ0ZXJTaXplYWJsZUVsZW1lbnRcIixcbiAgICBcIm9uU3RhcnREcmFnZ2luZ1wiLFxuICAgIFwib25TdG9wRHJhZ2dpbmdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gU3BsaXR0ZXJEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgeyBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBvblN0YXJ0RHJhZ2dpbmcsIG9uU3RvcERyYWdnaW5nLCBvbkRyYWcsIG9wdGlvbnMsIGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gb25TdGFydERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ2dpbmdIYW5kbGVyID0gb25TdG9wRHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlciA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICBzcGxpdHRlci5pbml0aWFsaXNlKGRpc2FibGVkKTtcblxuICAgIHJldHVybiBzcGxpdHRlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXIoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlcigpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHREcmFnSGFuZGxlcigpIHt9XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXX0=