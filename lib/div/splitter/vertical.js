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
    value: function mouseUp() {
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
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

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
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

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
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.columnResizeCursor)();
      }
    }
  }, {
    key: "mouseOut",
    value: function mouseOut() {
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
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = VerticalSplitterDiv;
      }

      return _splitter["default"].fromProperties(Class, properties);
    }
  }]);

  return VerticalSplitterDiv;
}(_splitter["default"]);

_defineProperty(VerticalSplitterDiv, "defaultProperties", {
  className: "vertical"
});

var _default = (0, _easyWithStyle["default"])(VerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwic2V0SW5pdGlhbFN0YXRlIiwidmVydGljYWxTcGxpdHRlckRpdiIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInNpemVhYmxlRWxlbWVudFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwic2V0UHJldmlvdXNNb3VzZUxlZnQiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImRpc2FibGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJTcGxpdHRlckRpdiIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztB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QU84QyxxQkFBWUMsY0FBWixDQUEyQkosS0FBM0IsRUFBa0NDLFVBQWxDLENBQVA7QUFDRDs7OztFQXRKK0JFLG9COztnQkFBNUI5QyxtQix1QkEwSXVCO0FBQ3pCZ0QsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCwrQkFBVWhELG1CQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyRGl2IGZyb20gXCIuLi8uLi9kaXYvc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgY29sdW1uUmVzaXplQ3Vyc29yLCByZXNldEN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIFNwbGl0dGVyRGl2IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuICAgIFxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBnZXRWZXJ0aWNhbFNwbGl0dGVyRGl2KCkge1xuICAgIGNvbnN0IHZlcnRpY2FsU3BsaXR0ZXJEaXYgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gdmVydGljYWxTcGxpdHRlckRpdjtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSB0aGlzLmdldFByZXZpb3VzTW91c2VMZWZ0KCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSBwcmV2aW91c01vdXNlTGVmdDtcbiAgICAgICAgXG4gICAgICAgIGxldCBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlTGVmdDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7IC8vL1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50V2lkdGggPSBzaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTsgIC8vL1xuXG4gICAgICAgIGRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudFdpZHRoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudFdpZHRoOyAgLy8vIFxuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KTtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuICBcbiAgZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZUxlZnQ7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aDtcbiAgfVxuICBcbiAgc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0XG4gICAgfSk7XG4gIH1cbiAgXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aFxuICAgIH0pOyAgICBcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlVmVydGljYWxTcGxpdHRlckRpdiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksXG4gICAgICAgICAgZGlzYWJsZVZlcnRpY2FsU3BsaXR0ZXJEaXYgPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlVmVydGljYWxTcGxpdHRlckRpdixcbiAgICAgIGRpc2FibGVWZXJ0aWNhbFNwbGl0dGVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlcnRpY2FsU3BsaXR0ZXJEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNwbGl0dGVyRGl2LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlckRpdilgXG5cbiAgd2lkdGg6IDAuOHJlbTtcblxuYDtcbiJdfQ==