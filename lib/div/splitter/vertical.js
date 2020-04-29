"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _splitter = _interopRequireDefault(require("../splitter"));

var _cursor = require("../../cursor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 1rem;\n  height: 100%;\n\n"]);

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

var VerticalSplitter = /*#__PURE__*/function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter() {
    _classCallCheck(this, VerticalSplitter);

    return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitter).apply(this, arguments));
  }

  _createClass(VerticalSplitter, [{
    key: "mouseOverHandler",
    value: function mouseOverHandler(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.columnResizeCursor)();
      }
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event, element) {
      var pageX = event.pageX,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv(),
              dragHandler = this.getDragHandler();
          var previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;
          var sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;
          var width = sizeableDivWidth; ///

          sizeableDiv.setWidth(width);
          sizeableDivWidth = sizeableDiv.getWidth(); ///

          dragHandler && dragHandler(sizeableDivWidth);
        }
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event, element) {
      var pageX = event.pageX,
          mouseLeft = pageX,
          disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv(),
            previousMouseLeft = mouseLeft,
            ///
        sizeableDivWidth = sizeableDiv.getWidth(),
            previousSizeableDivWidth = sizeableDivWidth; ///

        this.setPreviousMouseLeft(previousMouseLeft);
        this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
        (0, _cursor.columnResizeCursor)();

        if (!dragging) {
          this.startDrag();
        }
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
    key: "getPreviousSizeableDivWidth",
    value: function getPreviousSizeableDivWidth() {
      var state = this.getState(),
          previousSizeableDivWidth = state.previousSizeableDivWidth;
      return previousSizeableDivWidth;
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
    key: "setInitialState",
    value: function setInitialState() {
      var previousMouseLeft = null,
          previousSizeableDivWidth = null;
      this.setState({
        previousMouseLeft: previousMouseLeft,
        previousSizeableDivWidth: previousSizeableDivWidth
      });
    }
  }]);

  return VerticalSplitter;
}(_splitter["default"]);

_defineProperty(VerticalSplitter, "defaultProperties", {
  className: "vertical"
});

var _default = (0, _easyWithStyle["default"])(VerticalSplitter)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXIiLCJldmVudCIsImVsZW1lbnQiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJwYWdlWCIsIm1vdXNlTGVmdCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsImRpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNpemVhYmxlRGl2IiwiZ2V0U2l6ZWFibGVEaXYiLCJkcmFnSGFuZGxlciIsImdldERyYWdIYW5kbGVyIiwicHJldmlvdXNNb3VzZUxlZnQiLCJnZXRQcmV2aW91c01vdXNlTGVmdCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsImdldFByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInJlbGF0aXZlTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsIndpZHRoIiwic2V0V2lkdGgiLCJnZXRXaWR0aCIsInNldFByZXZpb3VzTW91c2VMZWZ0Iiwic2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwic3RhcnREcmFnIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJTcGxpdHRlciIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7Ozs7Ozs7OztxQ0FDYUMsSyxFQUFPQyxPLEVBQVM7QUFDL0IsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFVBQUwsRUFBakI7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYjtBQUNEO0FBQ0Y7OztxQ0FFZ0JGLEssRUFBT0MsTyxFQUFTO0FBQ3pCLFVBQUVHLEtBQUYsR0FBWUosS0FBWixDQUFFSSxLQUFGO0FBQUEsVUFDQUMsU0FEQSxHQUNZRCxLQURaO0FBQUEsVUFFQUYsUUFGQSxHQUVXLEtBQUtDLFVBQUwsRUFGWDs7QUFJTixVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiLFlBQU1JLFFBQVEsR0FBRyxLQUFLQyxVQUFMLEVBQWpCOztBQUVBLFlBQUlELFFBQUosRUFBYztBQUNaLGNBQU1FLFNBQVMsR0FBRyxLQUFLQyxZQUFMLEVBQWxCO0FBQUEsY0FDTUMsV0FBVyxHQUFHLEtBQUtDLGNBQUwsRUFEcEI7QUFBQSxjQUVNQyxXQUFXLEdBQUcsS0FBS0MsY0FBTCxFQUZwQjtBQUlBLGNBQU1DLGlCQUFpQixHQUFHLEtBQUtDLG9CQUFMLEVBQTFCO0FBQUEsY0FDTUMsd0JBQXdCLEdBQUcsS0FBS0MsMkJBQUwsRUFEakM7QUFBQSxjQUVNQyxpQkFBaUIsR0FBR2IsU0FBUyxHQUFHUyxpQkFGdEM7QUFJQSxjQUFJSyxnQkFBZ0IsR0FBR0gsd0JBQXdCLEdBQUdSLFNBQVMsR0FBR1UsaUJBQTlEO0FBRUEsY0FBTUUsS0FBSyxHQUFHRCxnQkFBZCxDQVhZLENBV29COztBQUVoQ1QsVUFBQUEsV0FBVyxDQUFDVyxRQUFaLENBQXFCRCxLQUFyQjtBQUVBRCxVQUFBQSxnQkFBZ0IsR0FBR1QsV0FBVyxDQUFDWSxRQUFaLEVBQW5CLENBZlksQ0FlZ0M7O0FBRTVDVixVQUFBQSxXQUFXLElBQUlBLFdBQVcsQ0FBQ08sZ0JBQUQsQ0FBMUI7QUFDRDtBQUNGO0FBQ0Y7OztxQ0FFZ0JuQixLLEVBQU9DLE8sRUFBUztBQUN6QixVQUFFRyxLQUFGLEdBQVlKLEtBQVosQ0FBRUksS0FBRjtBQUFBLFVBQ0FDLFNBREEsR0FDWUQsS0FEWjtBQUFBLFVBRUFGLFFBRkEsR0FFVyxLQUFLQyxVQUFMLEVBRlg7O0FBSU4sVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYixZQUFNSSxRQUFRLEdBQUcsS0FBS0MsVUFBTCxFQUFqQjtBQUFBLFlBQ01HLFdBQVcsR0FBRyxLQUFLQyxjQUFMLEVBRHBCO0FBQUEsWUFFTUcsaUJBQWlCLEdBQUdULFNBRjFCO0FBQUEsWUFFc0M7QUFDaENjLFFBQUFBLGdCQUFnQixHQUFHVCxXQUFXLENBQUNZLFFBQVosRUFIekI7QUFBQSxZQUlNTix3QkFBd0IsR0FBR0csZ0JBSmpDLENBRGEsQ0FLdUM7O0FBRXBELGFBQUtJLG9CQUFMLENBQTBCVCxpQkFBMUI7QUFFQSxhQUFLVSwyQkFBTCxDQUFpQ1Isd0JBQWpDO0FBRUE7O0FBRUEsWUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixlQUFLbUIsU0FBTDtBQUNEO0FBQ0Y7QUFDRjs7OzJDQUVzQjtBQUNmLFVBQUFDLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFYixpQkFERixHQUN3QlksS0FEeEIsQ0FDRVosaUJBREY7QUFHTixhQUFPQSxpQkFBUDtBQUNEOzs7a0RBRTZCO0FBQ3RCLFVBQUFZLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQVI7QUFBQSxVQUNFWCx3QkFERixHQUMrQlUsS0FEL0IsQ0FDRVYsd0JBREY7QUFHTixhQUFPQSx3QkFBUDtBQUNEOzs7eUNBRW9CRixpQixFQUFtQjtBQUN0QyxXQUFLYyxXQUFMLENBQWlCO0FBQ2ZkLFFBQUFBLGlCQUFpQixFQUFqQkE7QUFEZSxPQUFqQjtBQUdEOzs7Z0RBRTJCRSx3QixFQUEwQjtBQUNwRCxXQUFLWSxXQUFMLENBQWlCO0FBQ2ZaLFFBQUFBLHdCQUF3QixFQUF4QkE7QUFEZSxPQUFqQjtBQUdEOzs7c0NBRWlCO0FBQ2hCLFVBQU1GLGlCQUFpQixHQUFHLElBQTFCO0FBQUEsVUFDTUUsd0JBQXdCLEdBQUcsSUFEakM7QUFHQSxXQUFLYSxRQUFMLENBQWM7QUFDWmYsUUFBQUEsaUJBQWlCLEVBQWpCQSxpQkFEWTtBQUVaRSxRQUFBQSx3QkFBd0IsRUFBeEJBO0FBRlksT0FBZDtBQUlEOzs7O0VBakc0QmMsb0I7O2dCQUF6Qi9CLGdCLHVCQW1HdUI7QUFDekJnQyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQUtkLCtCQUFVaEMsZ0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgU3BsaXR0ZXIgZnJvbSBcIi4uL3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IGNvbHVtblJlc2l6ZUN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgbW91c2VPdmVySGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb2x1bW5SZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWCB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VMZWZ0ID0gcGFnZVgsICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gdGhpcy5nZXRTaXplYWJsZURpdigpLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCBwcmV2aW91c01vdXNlTGVmdCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICAgICAgc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuXG4gICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIgJiYgZHJhZ0hhbmRsZXIoc2l6ZWFibGVEaXZXaWR0aCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVggfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlTGVmdCA9IHBhZ2VYLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHRoaXMuZ2V0U2l6ZWFibGVEaXYoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlTGVmdChwcmV2aW91c01vdXNlTGVmdCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCk7XG5cbiAgICAgIGNvbHVtblJlc2l6ZUN1cnNvcigpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZUxlZnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlTGVmdCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZUxlZnQ7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRGl2V2lkdGgoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VMZWZ0KHByZXZpb3VzTW91c2VMZWZ0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlTGVmdFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZURpdldpZHRoKHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZUxlZnQgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXIpYFxuXG4gIHdpZHRoOiAxcmVtO1xuICBoZWlnaHQ6IDEwMCU7XG5cbmA7XG4iXX0=