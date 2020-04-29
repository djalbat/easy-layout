"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _splitter = _interopRequireDefault(require("../../div/splitter"));

var _cursor = require("../../cursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 0.8rem;\n\n"]);

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

var VerticalSplitterDiv = /*#__PURE__*/function (_SplitterDiv) {
  _inherits(VerticalSplitterDiv, _SplitterDiv);

  function VerticalSplitterDiv(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, VerticalSplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitterDiv).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();

    return _this;
  }

  _createClass(VerticalSplitterDiv, [{
    key: "getVerticalSplitterDiv",
    value: function getVerticalSplitterDiv() {
      var verticalSplitterDiv = this; ///

      return verticalSplitterDiv;
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        (0, _cursor.resetCursor)();
      }
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event, element) {
      var pageX = event.pageX,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;
          var sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;
          var width = sizeableElementWidth; ///

          sizeableElement.setWidth(width);
          sizeableElementWidth = sizeableElement.getWidth(); ///

          dragHandler(sizeableElementWidth);
        }
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(event, element) {
      var pageX = event.pageX,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseLeft = mouseLeft,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth; /// 

        this.setPreviousMouseLeft(previousMouseLeft);
        this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

        if (!dragging) {
          this.startDragging();
        }

        (0, _cursor.columnResizeCursor)();
      }
    }
  }, {
    key: "mouseOver",
    value: function mouseOver(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.columnResizeCursor)();
      }
    }
  }, {
    key: "mouseOut",
    value: function mouseOut(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.resetCursor)();
      }
    }
  }, {
    key: "getPreviousMouseLeft",
    value: function getPreviousMouseLeft() {
      var state = this.getState(),
          previousMouseLeft = state.previousMouseLeft;
      return previousMouseLeft;
    }
  }, {
    key: "getPreviousSizeableElementWidth",
    value: function getPreviousSizeableElementWidth() {
      var state = this.getState(),
          previousSizeableElementWidth = state.previousSizeableElementWidth;
      return previousSizeableElementWidth;
    }
  }, {
    key: "setPreviousMouseLeft",
    value: function setPreviousMouseLeft(previousMouseLeft) {
      this.updateState({
        previousMouseLeft: previousMouseLeft
      });
    }
  }, {
    key: "setPreviousSizeableElementWidth",
    value: function setPreviousSizeableElementWidth(previousSizeableElementWidth) {
      this.updateState({
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousMouseLeft = null,
          previousSizeableElementWidth = null;
      this.setState({
        previousMouseLeft: previousMouseLeft,
        previousSizeableElementWidth: previousSizeableElementWidth
      });
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var enableVerticalSplitterDiv = this.enable.bind(this),
          disableVerticalSplitterDiv = this.disable.bind(this);
      return {
        enableVerticalSplitterDiv: enableVerticalSplitterDiv,
        disableVerticalSplitterDiv: disableVerticalSplitterDiv
      };
    }
  }]);

  return VerticalSplitterDiv;
}(_splitter["default"]);

_defineProperty(VerticalSplitterDiv, "defaultProperties", {
  className: "vertical"
});

var _default = (0, _easyWithStyle["default"])(VerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwic2V0SW5pdGlhbFN0YXRlIiwidmVydGljYWxTcGxpdHRlckRpdiIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsInBhZ2VYIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInNpemVhYmxlRWxlbWVudFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwic2V0UHJldmlvdXNNb3VzZUxlZnQiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImRpc2FibGUiLCJTcGxpdHRlckRpdiIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7RUE1SStCRSxvQjs7Z0JBQTVCN0MsbUIsdUJBOEl1QjtBQUN6QjhDLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBS2QsK0JBQVU5QyxtQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlckRpdiBmcm9tIFwiLi4vLi4vZGl2L3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciwgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBTcGxpdHRlckRpdiB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcbiAgICBcbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgZ2V0VmVydGljYWxTcGxpdHRlckRpdigpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbFNwbGl0dGVyRGl2ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsU3BsaXR0ZXJEaXY7XG4gIH1cblxuICBtb3VzZVVwKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSB0aGlzLmdldFByZXZpb3VzTW91c2VMZWZ0KCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSBwcmV2aW91c01vdXNlTGVmdDtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlTGVmdDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7IC8vL1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTsgIC8vL1xuXG4gICAgICAgIGRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24oZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VYIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZUxlZnQgPSBwYWdlWCwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudFdpZHRoOyAgLy8vIFxuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KTtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cbiAgXG4gIGdldFByZXZpb3VzTW91c2VMZWZ0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZUxlZnQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VMZWZ0O1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGg7XG4gIH1cbiAgXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdFxuICAgIH0pO1xuICB9XG4gIFxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IG51bGw7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGhcbiAgICB9KTsgICAgXG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZVZlcnRpY2FsU3BsaXR0ZXJEaXYgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRpc2FibGVWZXJ0aWNhbFNwbGl0dGVyRGl2ID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVuYWJsZVZlcnRpY2FsU3BsaXR0ZXJEaXYsXG4gICAgICBkaXNhYmxlVmVydGljYWxTcGxpdHRlckRpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbFwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMC44cmVtO1xuXG5gO1xuIl19