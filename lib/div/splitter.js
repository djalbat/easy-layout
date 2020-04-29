"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _easy = require("easy");

var _constants = require("../constants");

var _options = require("../options");

var _cursor = require("../cursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  flex-shrink: 0;\n  \n  .vertical {\n    width: 1rem;\n    height: 100%;\n  }\n  \n  .horizontal {\n    width: 100%;\n    height: 1rem;\n  }\n\n"]);

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

  function SplitterDiv(selector, startDragHandler, stopDragHandler, dragHandler, horizontal, vertical, before, after, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
    _this.startDragHandler = startDragHandler;
    _this.stopDragHandler = stopDragHandler;
    _this.dragHandler = dragHandler;
    _this.horizontal = horizontal;
    _this.vertical = vertical;
    _this.before = before;
    _this.after = after;
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

      if (this.before) {
        direction = +1;
      }

      if (this.after) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: "getSizeableDiv",
    value: function getSizeableDiv() {
      var sizeableDiv;

      if (this.before) {
        var nextSiblingElement = this.getNextSiblingElement();
        sizeableDiv = nextSiblingElement; ///
      }

      if (this.after) {
        var previousSiblingElement = this.getPreviousSiblingElement();
        sizeableDiv = previousSiblingElement; ///
      }

      return sizeableDiv;
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
    key: "mouseOverHandler",
    value: function mouseOverHandler(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        if (this.vertical) {
          (0, _cursor.columnResizeCursor)();
        }

        if (this.horizontal) {
          (0, _cursor.rowResizeCursor)();
        }
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event, element) {
      var pageX = event.pageX,
          pageY = event.pageY,
          mouseTop = pageY,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv();

          if (this.vertical) {
            var previousMouseLeft = this.getPreviousMouseLeft(),
                previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
                relativeMouseLeft = mouseLeft - previousMouseLeft;
            var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
            var width = sizeableDivWidth; ///

            sizeableDiv.setWidth(width);
            sizeableDivWidth = sizeableDiv.getWidth(); ///

            this.dragHandler && this.dragHandler(sizeableDivWidth);
          }

          if (this.horizontal) {
            var previousMouseTop = this.getPreviousMouseTop(),
                previousSizeableDivHeight = this.getPreviousSizeableDivHeight(),
                relativeMouseTop = mouseTop - previousMouseTop;
            var sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;
            var height = sizeableDivHeight; ///

            sizeableDiv.setHeight(height);
            sizeableDivHeight = sizeableDiv.getHeight(); ///

            this.dragHandler && this.dragHandler(sizeableDivHeight);
          }
        }
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event, element) {
      var pageX = event.pageX,
          pageY = event.pageY,
          mouseTop = pageY,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv();

        if (this.vertical) {
          var sizeableDivWidth = sizeableDiv.getWidth(),
              previousMouseLeft = mouseLeft,
              ///
          previousSizeableDivWidth = sizeableDivWidth; ///

          this.setPreviousMouseLeft(previousMouseLeft);
          this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
          (0, _cursor.columnResizeCursor)();
        }

        if (this.horizontal) {
          var previousMouseTop = mouseTop,
              ///
          sizeableDivHeight = sizeableDiv.getHeight(),
              previousSizeableDivHeight = sizeableDivHeight; ///

          this.setPreviousMouseTop(previousMouseTop);
          this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
          (0, _cursor.rowResizeCursor)();
        }

        if (!dragging) {
          this.startDrag();
        }
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
      }
    }
  }, {
    key: "getPreviousMouseTop",
    value: function getPreviousMouseTop() {
      var state = this.getState(),
          previousMouseTop = state.previousMouseTop;
      return previousMouseTop;
    }
  }, {
    key: "getPreviousMouseLeft",
    value: function getPreviousMouseLeft() {
      var state = this.getState(),
          previousMouseLeft = state.previousMouseLeft;
      return previousMouseLeft;
    }
  }, {
    key: "getPreviousSizeableDivWidth",
    value: function getPreviousSizeableDivWidth() {
      var state = this.getState(),
          previousSizeableDivWidth = state.previousSizeableDivWidth;
      return previousSizeableDivWidth;
    }
  }, {
    key: "getPreviousSizeableDivHeight",
    value: function getPreviousSizeableDivHeight() {
      var state = this.getState(),
          previousSizeableDivHeight = state.previousSizeableDivHeight;
      return previousSizeableDivHeight;
    }
  }, {
    key: "setPreviousMouseTop",
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: "setPreviousMouseLeft",
    value: function setPreviousMouseLeft(previousMouseLeft) {
      this.updateState({
        previousMouseLeft: previousMouseLeft
      });
    }
  }, {
    key: "setPreviousSizeableDivWidth",
    value: function setPreviousSizeableDivWidth(previousSizeableDivWidth) {
      this.updateState({
        previousSizeableDivWidth: previousSizeableDivWidth
      });
    }
  }, {
    key: "setPreviousSizeableDivHeight",
    value: function setPreviousSizeableDivHeight(previousSizeableDivHeight) {
      this.updateState({
        previousSizeableDivHeight: previousSizeableDivHeight
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousMouseTop = null,
          previousMouseLeft = null,
          previousSizeableDivWidth = null,
          previousSizeableDivHeight = null;
      this.setState({
        previousMouseTop: previousMouseTop,
        previousMouseLeft: previousMouseLeft,
        previousSizeableDivWidth: previousSizeableDivWidth,
        previousSizeableDivHeight: previousSizeableDivHeight
      });
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      var disabled = properties.disabled;
      disabled === true ? ///
      this.disable() : this.enable();

      if (this.vertical) {
        this.addClass("vertical");
      }

      if (this.horizontal) {
        this.addClass("horizontal");
      }

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
          horizontal = properties.horizontal,
          vertical = properties.vertical,
          before = properties.before,
          after = properties.after,
          _properties$options = properties.options,
          options = _properties$options === void 0 ? {} : _properties$options,
          startDragHandler = onStartDrag,
          stopDragHandler = onStopDrag,
          dragHandler = onDrag,
          splitterDiv = _easy.Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, horizontal, vertical, before, after, options);

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

_defineProperty(SplitterDiv, "ignoredProperties", ["onStartDrag", "onStopDrag", "onDrag", "horizontal", "vertical", "before", "after", "options", "disabled"]);

var _default = (0, _easyWithStyle["default"])(SplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJzdGFydERyYWdIYW5kbGVyIiwic3RvcERyYWdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJob3Jpem9udGFsIiwidmVydGljYWwiLCJiZWZvcmUiLCJhZnRlciIsIm9wdGlvbnMiLCJvcHRpb24iLCJvcHRpb25QcmVzZW50IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImRpc2FibGVkIiwiaGFzQ2xhc3MiLCJkcmFnZ2luZyIsImRpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwibmV4dFNpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJldmVudCIsImVsZW1lbnQiLCJpc0Rpc2FibGVkIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnIiwicGFnZVgiLCJwYWdlWSIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZ2V0RGlyZWN0aW9uIiwiZ2V0U2l6ZWFibGVEaXYiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwicHJldmlvdXNNb3VzZVRvcCIsImdldFByZXZpb3VzTW91c2VUb3AiLCJwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZURpdkhlaWdodCIsImhlaWdodCIsInNldEhlaWdodCIsImdldEhlaWdodCIsInNldFByZXZpb3VzTW91c2VMZWZ0Iiwic2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQiLCJzdGFydERyYWciLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJwcm9wZXJ0aWVzIiwiZGlzYWJsZSIsImVuYWJsZSIsIm9uIiwibW91c2VVcEhhbmRsZXIiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmVIYW5kbGVyIiwib25Nb3VzZURvd24iLCJtb3VzZURvd25IYW5kbGVyIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0SGFuZGxlciIsInNldEluaXRpYWxTdGF0ZSIsIkNsYXNzIiwib25TdGFydERyYWciLCJvblN0b3BEcmFnIiwib25EcmFnIiwic3BsaXR0ZXJEaXYiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHVCQUFZQyxRQUFaLEVBQXNCQyxnQkFBdEIsRUFBd0NDLGVBQXhDLEVBQXlEQyxXQUF6RCxFQUFzRUMsVUFBdEUsRUFBa0ZDLFFBQWxGLEVBQTRGQyxNQUE1RixFQUFvR0MsS0FBcEcsRUFBMkdDLE9BQTNHLEVBQW9IO0FBQUE7O0FBQUE7O0FBQ2xILHFGQUFNUixRQUFOO0FBRUEsVUFBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFVBQUtDLGVBQUwsR0FBdUJBLGVB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XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuaW1wb3J0IHsgcmVzZXRDdXJzb3IsIHJvd1Jlc2l6ZUN1cnNvciwgY29sdW1uUmVzaXplQ3Vyc29yIH0gZnJvbSBcIi4uL2N1cnNvclwiO1xuXG5jbGFzcyBTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc3RhcnREcmFnSGFuZGxlciwgc3RvcERyYWdIYW5kbGVyLCBkcmFnSGFuZGxlciwgaG9yaXpvbnRhbCwgdmVydGljYWwsIGJlZm9yZSwgYWZ0ZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnN0YXJ0RHJhZ0hhbmRsZXIgPSBzdGFydERyYWdIYW5kbGVyO1xuICAgIHRoaXMuc3RvcERyYWdIYW5kbGVyID0gc3RvcERyYWdIYW5kbGVyO1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuaG9yaXpvbnRhbCA9IGhvcml6b250YWw7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICAgIHRoaXMuYmVmb3JlID0gYmVmb3JlO1xuICAgIHRoaXMuYWZ0ZXIgPSBhZnRlcjtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBpc09wdGlvblByZXNlbnQob3B0aW9uKSB7XG4gICAgY29uc3Qgb3B0aW9uUHJlc2VudCA9ICEhdGhpcy5vcHRpb25zW29wdGlvbl07XG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlKSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlcikge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRGl2KCkge1xuICAgIGxldCBzaXplYWJsZURpdjtcblxuICAgIGlmICh0aGlzLmJlZm9yZSkge1xuICAgICAgY29uc3QgbmV4dFNpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXROZXh0U2libGluZ0VsZW1lbnQoKTtcblxuICAgICAgc2l6ZWFibGVEaXYgPSBuZXh0U2libGluZ0VsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCk7XG5cbiAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRGl2O1xuICB9XG5cbiAgc3RhcnREcmFnKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5zdGFydERyYWdIYW5kbGVyICYmIHRoaXMuc3RhcnREcmFnSGFuZGxlcigpO1xuICB9XG5cbiAgc3RvcERyYWcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgdGhpcy5zdG9wRHJhZ0hhbmRsZXIgJiYgdGhpcy5zdG9wRHJhZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIG1vdXNlVXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbCkge1xuICAgICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCgpLFxuICAgICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgICAgICBsZXQgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgICAgICAgIHNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgICB0aGlzLmRyYWdIYW5kbGVyICYmIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVEaXZXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZVRvcCgpLFxuICAgICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgICAgbGV0IHNpemVhYmxlRGl2SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZURpdkhlaWdodDsgLy8vXG5cbiAgICAgICAgICBzaXplYWJsZURpdi5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICAgIHNpemVhYmxlRGl2SGVpZ2h0ID0gc2l6ZWFibGVEaXYuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIgJiYgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZURpdkhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSB0aGlzLmdldFNpemVhYmxlRGl2KCk7XG5cbiAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgLy8vXG5cbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCk7XG5cbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKTtcblxuICAgICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbCkge1xuICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgICAgc2l6ZWFibGVEaXZIZWlnaHQgPSBzaXplYWJsZURpdi5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCA9IHNpemVhYmxlRGl2SGVpZ2h0OyAgLy8vXG5cbiAgICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdkhlaWdodChwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KTtcblxuICAgICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZVRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZVRvcDtcbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZUxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VMZWZ0O1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdldpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZURpdkhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0XG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgocHJldmlvdXNTaXplYWJsZURpdldpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQocHJldmlvdXNTaXplYWJsZURpdkhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdkhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRGl2SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGRpc2FibGVkIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgKGRpc2FibGVkID09PSB0cnVlKSA/IC8vL1xuICAgICAgdGhpcy5kaXNhYmxlKCkgOlxuICAgICAgICB0aGlzLmVuYWJsZSgpO1xuXG4gICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuYWRkQ2xhc3MoXCJ2ZXJ0aWNhbFwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ob3Jpem9udGFsKSB7XG4gICAgICB0aGlzLmFkZENsYXNzKFwiaG9yaXpvbnRhbFwiKTtcbiAgICB9XG5cbiAgICB3aW5kb3cub24oXCJtb3VzZXVwIGJsdXJcIiwgdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpKTsgIC8vL1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0SGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJzcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25TdGFydERyYWdcIixcbiAgICBcIm9uU3RvcERyYWdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwiaG9yaXpvbnRhbFwiLFxuICAgIFwidmVydGljYWxcIixcbiAgICBcImJlZm9yZVwiLFxuICAgIFwiYWZ0ZXJcIixcbiAgICBcIm9wdGlvbnNcIixcbiAgICBcImRpc2FibGVkXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvblN0YXJ0RHJhZywgb25TdG9wRHJhZywgb25EcmFnLCBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYmVmb3JlLCBhZnRlciwgb3B0aW9ucyA9IHt9IH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHN0YXJ0RHJhZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdIYW5kbGVyID0gb25TdG9wRHJhZywgLy8vXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHNwbGl0dGVyRGl2ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHN0YXJ0RHJhZ0hhbmRsZXIsIHN0b3BEcmFnSGFuZGxlciwgZHJhZ0hhbmRsZXIsIGhvcml6b250YWwsIHZlcnRpY2FsLCBiZWZvcmUsIGFmdGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyRGl2LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gc3BsaXR0ZXJEaXY7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFNwbGl0dGVyRGl2KWBcblxuICBmbGV4LXNocmluazogMDtcbiAgXG4gIC52ZXJ0aWNhbCB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuaG9yaXpvbnRhbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcmVtO1xuICB9XG5cbmA7XG4iXX0=