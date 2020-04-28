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

var HorizontalSplitterDiv = /*#__PURE__*/function (_SplitterDiv) {
  _inherits(HorizontalSplitterDiv, _SplitterDiv);

  function HorizontalSplitterDiv(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, HorizontalSplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalSplitterDiv).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();

    return _this;
  }

  _createClass(HorizontalSplitterDiv, [{
    key: "getHorizontalSplitterDiv",
    value: function getHorizontalSplitterDiv() {
      var horizontalSplitterDiv = this; ///

      return horizontalSplitterDiv;
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
              previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;
          var sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;
          var height = sizeableElementHeight; ///

          sizeableElement.setHeight(height);
          sizeableElementHeight = sizeableElement.getHeight(); ///

          dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseTop = mouseTop,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight; /// 

        this.setPreviousMouseTop(previousMouseTop);
        this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

        if (!dragging) {
          this.startDragging();
        }

        (0, _cursor.rowResizeCursor)();
      }
    }
  }, {
    key: "mouseOver",
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.rowResizeCursor)();
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
    key: "getPreviousMouseTop",
    value: function getPreviousMouseTop() {
      var state = this.getState(),
          previousMouseTop = state.previousMouseTop;
      return previousMouseTop;
    }
  }, {
    key: "getPreviousSizeableElementHeight",
    value: function getPreviousSizeableElementHeight() {
      var state = this.getState(),
          previousSizeableElementHeight = state.previousSizeableElementHeight;
      return previousSizeableElementHeight;
    }
  }, {
    key: "setPreviousMouseTop",
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: "setPreviousSizeableElementHeight",
    value: function setPreviousSizeableElementHeight(previousSizeableElementHeight) {
      this.updateState({
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }, {
    key: "setInitialState",
    value: function setInitialState() {
      var previousMouseTop = null,
          previousSizeableElementHeight = null;
      this.setState({
        previousMouseTop: previousMouseTop,
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var enableHorizontalSplitterDiv = this.enable.bind(this),
          disableHorizontalSplitterDiv = this.disable.bind(this);
      return {
        enableHorizontalSplitterDiv: enableHorizontalSplitterDiv,
        disableHorizontalSplitterDiv: disableHorizontalSplitterDiv
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _splitter["default"].fromProperties(HorizontalSplitterDiv, properties);
    }
  }]);

  return HorizontalSplitterDiv;
}(_splitter["default"]);

exports["default"] = HorizontalSplitterDiv;
Object.assign(HorizontalSplitterDiv, {
  defaultProperties: {
    className: "horizontal splitter"
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlckRpdiIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJkaXNhYmxlIiwicHJvcGVydGllcyIsIlNwbGl0dGVyRGl2IiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBw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LEVBQXFDO0FBQ25DZ0QsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRGdCLENBQXJDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTcGxpdHRlckRpdiBmcm9tIFwiLi4vLi4vZGl2L3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IHJvd1Jlc2l6ZUN1cnNvciwgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxTcGxpdHRlckRpdiBleHRlbmRzIFNwbGl0dGVyRGl2IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIGdldEhvcml6b250YWxTcGxpdHRlckRpdigpIHtcbiAgICBjb25zdCBob3Jpem9udGFsU3BsaXR0ZXJEaXYgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgIGxldCBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAvLy9cblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZVRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VUb3A7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSxcbiAgICAgICAgICBkaXNhYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVuYWJsZUhvcml6b250YWxTcGxpdHRlckRpdixcbiAgICAgIGRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBTcGxpdHRlckRpdi5mcm9tUHJvcGVydGllcyhIb3Jpem9udGFsU3BsaXR0ZXJEaXYsIHByb3BlcnRpZXMpOyB9XG59XG5cbk9iamVjdC5hc3NpZ24oSG9yaXpvbnRhbFNwbGl0dGVyRGl2LCB7XG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWwgc3BsaXR0ZXJcIlxuICB9XG59KTtcbiJdfQ==