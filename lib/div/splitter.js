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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SplitterDiv = /*#__PURE__*/function (_Element) {
  _inherits(SplitterDiv, _Element);

  var _super = _createSuper(SplitterDiv);

  function SplitterDiv(selector, startDragHandler, stopDragHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _super.call(this, selector);
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
    value: function initialise() {
      var disabled = this.properties.disabled;
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

      splitterDiv.initialise();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJzdGFydERyYWdIYW5kbGVyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJuZXh0U2libGluZ0VsZW1lbnQiLCJnZXROZXh0U2libGluZ0VsZW1lbnQiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsIlNpemVhYmxlRGl2Iiwic2l6ZWFibGVEaXYiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJpc0Rpc2FibGVkIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnIiwia2V5Q29kZSIsIkVTQ0FQRV9LRVlfQ09ERSIsInByb3BlcnRpZXMiLCJkaXNhYmxlIiwiZW5hYmxlIiwib24iLCJtb3VzZVVwSGFuZGxlciIsImJpbmQiLCJvbk1vdXNlTW92ZSIsIm1vdXNlTW92ZUhhbmRsZXIiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93bkhhbmRsZXIiLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXRIYW5kbGVyIiwic2V0SW5pdGlhbFN0YXRlIiwiQ2xhc3MiLCJvblN0YXJ0RHJhZyIsIm9uU3RvcERyYWciLCJvbkRyYWciLCJzcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoi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Q0FDekIsYUFEeUIsRUFFekIsWUFGeUIsRUFHekIsUUFIeUIsRUFJekIsU0FKeUIsRUFLekIsVUFMeUIsQzs7ZUFxQmQsK0JBQVVBLFdBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4uL2Rpdi9zaXplYWJsZVwiO1xuXG5pbXBvcnQgeyByZXNldEN1cnNvciB9IGZyb20gXCIuLi9jdXJzb3JcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuXG5jbGFzcyBTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc3RhcnREcmFnSGFuZGxlciwgc3RvcERyYWdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuc3RhcnREcmFnSGFuZGxlciA9IHN0YXJ0RHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5zdG9wRHJhZ0hhbmRsZXIgPSBzdG9wRHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICEhdGhpcy5vcHRpb25zW29wdGlvbl07XG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICBpZiAobmV4dFNpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3Rpb247XG4gIH1cblxuICBnZXRTaXplYWJsZURpdigpIHtcbiAgICBsZXQgc2l6ZWFibGVEaXY7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0VsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTtcblxuICAgIGlmIChuZXh0U2libGluZ0VsZW1lbnQgaW5zdGFuY2VvZiBTaXplYWJsZURpdikge1xuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChwcmV2aW91c1NpYmxpbmdFbGVtZW50IGluc3RhbmNlb2YgU2l6ZWFibGVEaXYpIHtcbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgZ2V0RHJhZ0hhbmRsZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIgJiYgdGhpcy5zdGFydERyYWdIYW5kbGVyKCk7XG4gIH1cblxuICBzdG9wRHJhZygpIHtcbiAgICBjb25zdCBlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCA9IHRoaXMuaXNPcHRpb25QcmVzZW50KEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50KSB7XG4gICAgICB3aW5kb3cub2ZmS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICB0aGlzLnN0b3BEcmFnSGFuZGxlciAmJiB0aGlzLnN0b3BEcmFnSGFuZGxlcigpO1xuICB9XG5cbiAgbW91c2VVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICByZXNldEN1cnNvcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICB3aW5kb3cub24oXCJtb3VzZXVwIGJsdXJcIiwgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uU3RhcnREcmFnLCBvblN0b3BEcmFnLCBvbkRyYWcsIG9wdGlvbnMgPSB7fSB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdIYW5kbGVyID0gb25TdGFydERyYWcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnSGFuZGxlciA9IG9uU3RvcERyYWcsIC8vL1xuICAgICAgICAgIGRyYWdIYW5kbGVyID0gb25EcmFnLCAvLy9cbiAgICAgICAgICBzcGxpdHRlckRpdiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBzdGFydERyYWdIYW5kbGVyLCBzdG9wRHJhZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyRGl2LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBzcGxpdHRlckRpdjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU3BsaXR0ZXJEaXYpYFxuXG4gIGZsZXgtc2hyaW5rOiAwO1xuXG5gO1xuIl19