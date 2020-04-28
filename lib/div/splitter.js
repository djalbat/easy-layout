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
    value: function keyDownHandler(keyCode) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsImRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlciIsImRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZGVmYXVsdERyYWdIYW5kbGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImRpc2FibGUiLCJlbmFibGUiLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJzcGxpdHRlciIsIkVsZW1lbnQiLCJm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OztlQUVlLCtCQUFVWCxXQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgd2luZG93LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudCA9IGJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50ID0gYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gc3RhcnREcmFnZ2luZ0hhbmRsZXIgfHwgZGVmYXVsdFN0YXJ0RHJhZ2dpbmdIYW5kbGVyO1xuICAgIHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlciA9IHN0b3BEcmFnZ2luZ0hhbmRsZXIgfHwgZGVmYXVsdFN0b3BEcmFnZ2luZ0hhbmRsZXI7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyIHx8IGRlZmF1bHREcmFnSGFuZGxlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IGRlZmF1bHRPcHRpb25zO1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERyYWdIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGVyO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblByZXNlbnQgPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihrZXlDb2RlKSB7XG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZShkaXNhYmxlZCkge1xuICAgIChkaXNhYmxlZCA9PT0gdHJ1ZSkgPyAvLy9cbiAgICAgIHRoaXMuZGlzYWJsZSgpIDpcbiAgICAgICAgdGhpcy5lbmFibGUoKTtcblxuICAgIHdpbmRvdy5vbihcIm1vdXNldXAgYmx1clwiLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInNwbGl0dGVyXCJcbiAgfTtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJiZWZvcmVTaXplYWJsZUVsZW1lbnRcIixcbiAgICBcImFmdGVyU2l6ZWFibGVFbGVtZW50XCIsXG4gICAgXCJvblN0YXJ0RHJhZ2dpbmdcIixcbiAgICBcIm9uU3RvcERyYWdnaW5nXCIsXG4gICAgXCJvbkRyYWdcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFNwbGl0dGVyRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25TdGFydERyYWdnaW5nLCBvblN0b3BEcmFnZ2luZywgb25EcmFnLCBvcHRpb25zLCBkaXNhYmxlZCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdnaW5nSGFuZGxlciA9IG9uU3RhcnREcmFnZ2luZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdnaW5nSGFuZGxlciA9IG9uU3RvcERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3BsaXR0ZXIgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgc3BsaXR0ZXIuaW5pdGlhbGlzZShkaXNhYmxlZCk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmYXVsdFN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCkge31cblxuZnVuY3Rpb24gZGVmYXVsdFN0b3BEcmFnZ2luZ0hhbmRsZXIoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0RHJhZ0hhbmRsZXIoKSB7fVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl19