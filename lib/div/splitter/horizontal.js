"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));

var _splitter = _interopRequireDefault(require("../../div/splitter"));

var _cursor = require("../../cursor");

var _columns = _interopRequireDefault(require("../columns"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  height: 0.8rem;\n\n"]);

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
      var pageY = event.pageY,
          mouseTop = pageY,
          disabled = this.isDisabled();

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
    value: function mouseDown(event, element) {
      var pageY = event.pageY,
          mouseTop = pageY,
          disabled = this.isDisabled();

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
    value: function mouseOver(event, element) {
      var disabled = this.isDisabled();

      if (!disabled) {
        (0, _cursor.rowResizeCursor)();
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

_defineProperty(HorizontalSplitterDiv, "defaultProperties", {
  className: "horizontal"
});

var _default = (0, _easyWithStyle["default"])(HorizontalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlckRpdiIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsInBhZ2VZIiwibW91c2VUb3AiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzTW91c2VUb3AiLCJnZXRQcmV2aW91c01vdXNlVG9wIiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV2aW91c01vdXNlVG9wIiwic2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJzdGFydERyYWdnaW5nIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiIsImRpc2FibGUiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJTcGxpdHRlckRpdiIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdz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LFFBQUFBLDJCQUEyQixFQUEzQkEsMkJBRE07QUFFTkcsUUFBQUEsNEJBQTRCLEVBQTVCQTtBQUZNLE9BQVI7QUFJRDs7O21DQU1xQkUsSyxFQUFPQyxVLEVBQVk7QUFDdkMsVUFBSUEsVUFBVSxLQUFLQyxTQUFuQixFQUE4QjtBQUM1QkQsUUFBQUEsVUFBVSxHQUFHRCxLQUFiLENBRDRCLENBQ1I7O0FBRXBCQSxRQUFBQSxLQUFLLEdBQUc3QyxxQkFBUjtBQUNEOztBQUVELGFBQU9nRCxxQkFBWUMsY0FBWixDQUEyQkosS0FBM0IsRUFBa0NDLFVBQWxDLENBQVA7QUFDRDs7OztFQTFKaUNFLG9COztnQkFBOUJoRCxxQix1QkE4SXVCO0FBQ3pCa0QsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCwrQkFBVWxELHFCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiZWFzeS13aXRoLXN0eWxlXCI7ICAvLy9cblxuaW1wb3J0IFNwbGl0dGVyRGl2IGZyb20gXCIuLi8uLi9kaXYvc3BsaXR0ZXJcIjtcblxuaW1wb3J0IHsgcm93UmVzaXplQ3Vyc29yLCByZXNldEN1cnNvciB9IGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuLi9jb2x1bW5zXCI7XG5cbmNsYXNzIEhvcml6b250YWxTcGxpdHRlckRpdiBleHRlbmRzIFNwbGl0dGVyRGl2IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucykge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpO1xuXG4gICAgdGhpcy5zZXRJbml0aWFsU3RhdGUoKTtcbiAgfVxuXG4gIGdldEhvcml6b250YWxTcGxpdHRlckRpdigpIHtcbiAgICBjb25zdCBob3Jpem9udGFsU3BsaXR0ZXJEaXYgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gaG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICB9XG5cbiAgbW91c2VVcChldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCB7IHBhZ2VZIH0gPSBldmVudCxcbiAgICAgICAgICBtb3VzZVRvcCA9IHBhZ2VZLCAgLy8vXG4gICAgICAgICAgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZVRvcCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gcHJldmlvdXNNb3VzZVRvcDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVhYmxlRWxlbWVudEhlaWdodDsgLy8vXG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTsgIC8vL1xuXG4gICAgICAgIGRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWSB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VUb3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dChldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlVG9wO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksXG4gICAgICAgICAgZGlzYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYsXG4gICAgICBkaXNhYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBTcGxpdHRlckRpdi5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlckRpdilgXG5cbiAgaGVpZ2h0OiAwLjhyZW07XG5cbmA7XG4iXX0=