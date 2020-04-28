"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _splitter = _interopRequireDefault(require("../../div/splitter"));

var _cursor = require("../../cursor");

var _columns = _interopRequireDefault(require("../columns"));

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
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = HorizontalSplitterDiv;
      }

      return _splitter["default"].fromProperties(Class, properties);
    }
  }]);

  return HorizontalSplitterDiv;
}(_splitter["default"]);

exports["default"] = HorizontalSplitterDiv;

_defineProperty(HorizontalSplitterDiv, "defaultProperties", {
  className: "horizontal"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlckRpdiIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJkaXNhYmxlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwiU3BsaXR0ZXJEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7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LGFBQU84QyxxQkFBWUMsY0FBWixDQUEyQkosS0FBM0IsRUFBa0NDLFVBQWxDLENBQVA7QUFDRDs7OztFQXRKZ0RFLG9COzs7O2dCQUE5QjlDLHFCLHVCQTBJUTtBQUN6QmdELEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwbGl0dGVyRGl2IGZyb20gXCIuLi8uLi9kaXYvc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgcm93UmVzaXplQ3Vyc29yLCByZXNldEN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuLi9jb2x1bW5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxTcGxpdHRlckRpdiBleHRlbmRzIFNwbGl0dGVyRGl2IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIGdldEhvcml6b250YWxTcGxpdHRlckRpdigpIHtcbiAgICBjb25zdCBob3Jpem9udGFsU3BsaXR0ZXJEaXYgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgICAgIGRyYWdIYW5kbGVyID0gdGhpcy5nZXREcmFnSGFuZGxlcigpLFxuICAgICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c01vdXNlVG9wID0gdGhpcy5nZXRQcmV2aW91c01vdXNlVG9wKCksXG4gICAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5nZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpLFxuICAgICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgIGxldCBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAvLy9cblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZVRvcCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzTW91c2VUb3AgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzTW91c2VUb3A7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKSxcbiAgICAgICAgICB7IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodDtcbiAgfVxuXG4gIHNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcFxuICAgIH0pO1xuICB9XG5cbiAgc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IG51bGwsXG4gICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBudWxsO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wLFxuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpcy5lbmFibGUuYmluZCh0aGlzKSxcbiAgICAgICAgICBkaXNhYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGVuYWJsZUhvcml6b250YWxTcGxpdHRlckRpdixcbiAgICAgIGRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiaG9yaXpvbnRhbFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBIb3Jpem9udGFsU3BsaXR0ZXJEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIFNwbGl0dGVyRGl2LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuIl19