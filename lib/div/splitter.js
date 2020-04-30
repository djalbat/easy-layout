"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _sizeable = _interopRequireDefault(require("../div/sizeable"));

var _cursor = require("../cursor");

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

  function SplitterDiv(selector, startDragHandler, stopDragHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
    _this.startDragHandler = startDragHandler;
    _this.stopDragHandler = stopDragHandler;
    _this.dragHandler = dragHandler;
    _this.options = options;
    return _this;
  }

  _createClass(SplitterDiv, [{
    key: "isOptionPresent",
    value: function isOptionPresent(option) {
      var optionPresent = !!this.options[option];
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
    key: "onDrag",
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
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
      var nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement();

      if (nextSiblingElement instanceof _sizeable["default"]) {
        direction = +1;
      }

      if (previousSiblingElement instanceof _sizeable["default"]) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: "getSizeableDiv",
    value: function getSizeableDiv() {
      var sizeableDiv;
      var nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement();

      if (nextSiblingElement instanceof _sizeable["default"]) {
        sizeableDiv = nextSiblingElement; ///
      }

      if (previousSiblingElement instanceof _sizeable["default"]) {
        sizeableDiv = previousSiblingElement; ///
      }

      return sizeableDiv;
    }
  }, {
    key: "getDragHandler",
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: "startDrag",
    value: function startDrag() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass("dragging");
      this.startDragHandler && this.startDragHandler();
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.offKeyDown(this.keyDownHandler, this);
      }

      this.removeClass("dragging");
      this.stopDragHandler && this.stopDragHandler();
    }
  }, {
    key: "mouseUpHandler",
    value: function mouseUpHandler(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDrag();
        }

        (0, _cursor.resetCursor)();
      }
    }
  }, {
    key: "mouseOutHandler",
    value: function mouseOutHandler(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (!dragging) {
          (0, _cursor.resetCursor)();
        }
      }
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(event, element) {
      var keyCode = event.keyCode;

      if (keyCode === _constants.ESCAPE_KEY_CODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDrag();
        }

        (0, _cursor.resetCursor)();
      }
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var disabled = properties.disabled;
      disabled === true ? ///
      this.disable() : this.enable();

      _easy.window.on("mouseup blur", this.mouseUpHandler.bind(this)); ///


      _easy.window.onMouseMove(this.mouseMoveHandler.bind(this));

      this.onMouseDown(this.mouseDownHandler.bind(this));
      this.onMouseOver(this.mouseOverHandler.bind(this));
      this.onMouseOut(this.mouseOutHandler.bind(this));
      this.setInitialState();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var onStartDrag = properties.onStartDrag,
          onStopDrag = properties.onStopDrag,
          onDrag = properties.onDrag,
          _properties$options = properties.options,
          options = _properties$options === void 0 ? defaultOptions : _properties$options,
          startDragHandler = onStartDrag,
          stopDragHandler = onStopDrag,
          dragHandler = onDrag,
          splitterDiv = _easy.Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, options);

      splitterDiv.initialise(properties);
      return splitterDiv;
    }
  }]);

  return SplitterDiv;
}(_easy.Element);

_defineProperty(SplitterDiv, "tagName", "div");

_defineProperty(SplitterDiv, "defaultProperties", {
  className: "splitter"
});

_defineProperty(SplitterDiv, "ignoredProperties", ["onStartDrag", "onStopDrag", "onDrag", "options", "disabled"]);

var defaultOptions = {};

var _default = (0, _easyWithStyle["default"])(SplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJzdGFydERyYWdIYW5kbGVyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIlNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJpc0Rpc2FibGVkIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnIiwia2V5Q29kZSIsIkVTQ0FQRV9LRVlfQ09ERSIsInByb3BlcnRpZXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwSGFuZGxlciIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJvbkRyYWciLCJkZWZhdWx0T3B0aW9ucyIsInNwbGl0dGVyRGl2IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxpc2UiLCJjbGFzc05h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LEVBQUU7QUFEYyxDOztnQkE5S3ZCMUQsVyx1QkFrTHVCLENBQ3pCLGFBRHlCLEVBRXpCLFlBRnlCLEVBR3pCLFFBSHlCLEVBSXpCLFNBSnlCLEVBS3pCLFVBTHlCLEM7O0FBcUI3QixJQUFNcUQsY0FBYyxHQUFHLEVBQXZCOztlQUVlLCtCQUFVckQsV0FBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zdGFydERyYWdIYW5kbGVyID0gc3RhcnREcmFnSGFuZGxlcjtcbiAgICB0aGlzLnN0b3BEcmFnSGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RvcERyYWdIYW5kbGVyICYmIHRoaXMuc3RvcERyYWdIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKFwibW91c2V1cCBibHVyXCIsIHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uU3RhcnREcmFnXCIsXG4gICAgXCJvblN0b3BEcmFnXCIsXG4gICAgXCJvbkRyYWdcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0RHJhZywgb25TdG9wRHJhZywgb25EcmFnLCBvcHRpb25zID0gZGVmYXVsdE9wdGlvbnN9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyRGl2LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcblxuYDtcbiJdfQ==