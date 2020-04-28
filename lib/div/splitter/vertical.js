"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _splitter = _interopRequireDefault(require("../../div/splitter"));

var _cursor = require("../../cursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

exports["default"] = VerticalSplitterDiv;

_defineProperty(VerticalSplitterDiv, "defaultProperties", {
  className: "vertical"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJvcHRpb25zIiwic2V0SW5pdGlhbFN0YXRlIiwidmVydGljYWxTcGxpdHRlckRpdiIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlTGVmdCIsImdldFByZXZpb3VzTW91c2VMZWZ0IiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInNpemVhYmxlRWxlbWVudFdpZHRoIiwid2lkdGgiLCJzZXRXaWR0aCIsImdldFdpZHRoIiwic2V0UHJldmlvdXNNb3VzZUxlZnQiLCJzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImVuYWJsZSIsImJpbmQiLCJkaXNhYmxlVmVydGljYWxTcGxpdHRlckRpdiIsImRpc2FibGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJTcGxpdHRlckRpdiIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7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LENBQTJCSixLQUEzQixFQUFrQ0MsVUFBbEMsQ0FBUDtBQUNEOzs7O0VBdEo4Q0Usb0I7Ozs7Z0JBQTVCOUMsbUIsdUJBMElRO0FBQ3pCZ0QsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3BsaXR0ZXJEaXYgZnJvbSBcIi4uLy4uL2Rpdi9zcGxpdHRlclwiO1xuXG5pbXBvcnQgeyBjb2x1bW5SZXNpemVDdXJzb3IsIHJlc2V0Q3Vyc29yIH0gZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbFNwbGl0dGVyRGl2IGV4dGVuZHMgU3BsaXR0ZXJEaXYge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG4gICAgXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIGdldFZlcnRpY2FsU3BsaXR0ZXJEaXYoKSB7XG4gICAgY29uc3QgdmVydGljYWxTcGxpdHRlckRpdiA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiB2ZXJ0aWNhbFNwbGl0dGVyRGl2O1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHByZXZpb3VzTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudFdpZHRoID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgd2lkdGggPSBzaXplYWJsZUVsZW1lbnRXaWR0aDsgLy8vXG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRXaWR0aCA9IHNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoID0gc2l6ZWFibGVFbGVtZW50V2lkdGg7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZUxlZnQocHJldmlvdXNNb3VzZUxlZnQpO1xuICAgICAgXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgocHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29sdW1uUmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG4gIFxuICBnZXRQcmV2aW91c01vdXNlTGVmdCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VMZWZ0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlTGVmdDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoO1xuICB9XG4gIFxuICBzZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnRcbiAgICB9KTtcbiAgfVxuICBcbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRXaWR0aChwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZUxlZnQgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudFdpZHRoXG4gICAgfSk7ICAgIFxuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlbmFibGVWZXJ0aWNhbFNwbGl0dGVyRGl2ID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSxcbiAgICAgICAgICBkaXNhYmxlVmVydGljYWxTcGxpdHRlckRpdiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVWZXJ0aWNhbFNwbGl0dGVyRGl2LFxuICAgICAgZGlzYWJsZVZlcnRpY2FsU3BsaXR0ZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmVydGljYWxcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVydGljYWxTcGxpdHRlckRpdjtcbiAgICB9XG5cbiAgICByZXR1cm4gU3BsaXR0ZXJEaXYuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG4iXX0=