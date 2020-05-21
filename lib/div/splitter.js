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

  function SplitterDiv(selectorOrDOMElement, startDragHandler, stopDragHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selectorOrDOMElement));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJzdGFydERyYWdIYW5kbGVyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIlNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJpc0Rpc2FibGVkIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnIiwia2V5Q29kZSIsIkVTQ0FQRV9LRVlfQ09ERSIsInByb3BlcnRpZXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwSGFuZGxlciIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJvbkRyYWciLCJkZWZhdWx0T3B0aW9ucyIsInNwbGl0dGVyRGl2IiwiRWxlbWVudCIsImZyb21DbGFzcyIsImluaXRpYWxp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QjBELEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2dCQTlLdkIxRCxXLHVCQWtMdUIsQ0FDekIsYUFEeUIsRUFFekIsWUFGeUIsRUFHekIsUUFIeUIsRUFJekIsU0FKeUIsRUFLekIsVUFMeUIsQzs7QUFxQjdCLElBQU1xRCxjQUFjLEdBQUcsRUFBdkI7O2VBRWUsK0JBQVVyRCxXQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IHsgd2luZG93LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuLi9kaXYvc2l6ZWFibGVcIjtcblxuaW1wb3J0IHsgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vY3Vyc29yXCI7XG5pbXBvcnQgeyBFU0NBUEVfS0VZX0NPREUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HIH0gZnJvbSBcIi4uL29wdGlvbnNcIjtcblxuY2xhc3MgU3BsaXR0ZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIHN0YXJ0RHJhZ0hhbmRsZXIsIHN0b3BEcmFnSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIgPSBzdGFydERyYWdIYW5kbGVyO1xuICAgIHRoaXMuc3RvcERyYWdIYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyO1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblByZXNlbnQgPSAhIXRoaXMub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgcmV0dXJuIG9wdGlvblByZXNlbnQ7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIFxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG4gIFxuICBnZXREaXJlY3Rpb24oKSB7XG4gICAgbGV0IGRpcmVjdGlvbjtcblxuICAgIGNvbnN0IG5leHRTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpO1xuXG4gICAgaWYgKG5leHRTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVEaXYoKSB7XG4gICAgbGV0IHNpemVhYmxlRGl2O1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gbmV4dFNpYmxpbmdFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICBpZiAocHJldmlvdXNTaWJsaW5nRWxlbWVudCBpbnN0YW5jZW9mIFNpemVhYmxlRGl2KSB7XG4gICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzaXplYWJsZURpdjtcbiAgfVxuXG4gIGdldERyYWdIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5zdGFydERyYWdIYW5kbGVyICYmIHRoaXMuc3RhcnREcmFnSGFuZGxlcigpO1xuICB9XG5cbiAgc3RvcERyYWcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ0hhbmRsZXIgJiYgdGhpcy5zdG9wRHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWV9DT0RFKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQgfSA9IHByb3BlcnRpZXM7XG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICB3aW5kb3cub24oXCJtb3VzZXVwIGJsdXJcIiwgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uU3RhcnREcmFnLCBvblN0b3BEcmFnLCBvbkRyYWcsIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9uc30gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHNwbGl0dGVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHN0YXJ0RHJhZ0hhbmRsZXIsIHN0b3BEcmFnSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgc3BsaXR0ZXJEaXYuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl19