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
          options = _properties$options === void 0 ? {} : _properties$options,
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

var _default = (0, _easyWithStyle["default"])(SplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJzdGFydERyYWdIYW5kbGVyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIlNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJpc0Rpc2FibGVkIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnIiwia2V5Q29kZSIsIkVTQ0FQRV9LRVlfQ09ERSIsInByb3BlcnRpZXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwSGFuZGxlciIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJvbkRyYWciLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoi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QnpELFcsdUJBa0x1QixDQUN6QixhQUR5QixFQUV6QixZQUZ5QixFQUd6QixRQUh5QixFQUl6QixTQUp5QixFQUt6QixVQUx5QixDOztlQXFCZCwrQkFBVUEsV0FBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi4vZGl2L3NpemVhYmxlXCI7XG5cbmltcG9ydCB7IHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9DT0RFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyB9IGZyb20gXCIuLi9vcHRpb25zXCI7XG5cbmNsYXNzIFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zdGFydERyYWdIYW5kbGVyID0gc3RhcnREcmFnSGFuZGxlcjtcbiAgICB0aGlzLnN0b3BEcmFnSGFuZGxlciA9IHN0b3BEcmFnSGFuZGxlcjtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gISF0aGlzLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuICAgIFxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gKzE7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IG5leHRTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzU2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVEaXY7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub25LZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RhcnREcmFnSGFuZGxlciAmJiB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIHN0b3BEcmFnKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RvcERyYWdIYW5kbGVyICYmIHRoaXMuc3RvcERyYWdIYW5kbGVyKCk7XG4gIH1cblxuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgd2luZG93Lm9uKFwibW91c2V1cCBibHVyXCIsIHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSk7ICAvLy9cblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVySGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwic3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uU3RhcnREcmFnXCIsXG4gICAgXCJvblN0b3BEcmFnXCIsXG4gICAgXCJvbkRyYWdcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0RHJhZywgb25TdG9wRHJhZywgb25EcmFnLCBvcHRpb25zID0ge30gfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3RhcnREcmFnSGFuZGxlciA9IG9uU3RhcnREcmFnLCAvLy9cbiAgICAgICAgICBzdG9wRHJhZ0hhbmRsZXIgPSBvblN0b3BEcmFnLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZywgLy8vXG4gICAgICAgICAgc3BsaXR0ZXJEaXYgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgc3RhcnREcmFnSGFuZGxlciwgc3RvcERyYWdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICBzcGxpdHRlckRpdi5pbml0aWFsaXNlKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyRGl2O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTcGxpdHRlckRpdilgXG5cbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXX0=