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
  }]);

  return HorizontalSplitterDiv;
}(_splitter["default"]);

_defineProperty(HorizontalSplitterDiv, "defaultProperties", {
  className: "horizontal"
});

var _default = (0, _easyWithStyle["default"])(HorizontalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlckRpdiIsImV2ZW50IiwiZWxlbWVudCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsInBhZ2VZIiwibW91c2VUb3AiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzTW91c2VUb3AiLCJnZXRQcmV2aW91c01vdXNlVG9wIiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV2aW91c01vdXNlVG9wIiwic2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJzdGFydERyYWdnaW5nIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiIsImRpc2FibGUiLCJTcGxpdHRlckRpdiIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7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QkE7QUFGTSxPQUFSO0FBSUQ7Ozs7RUE1SWlDRSxvQjs7Z0JBQTlCN0MscUIsdUJBOEl1QjtBQUN6QjhDLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBS2QsK0JBQVU5QyxxQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlckRpdiBmcm9tIFwiLi4vLi4vZGl2L3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IHJvd1Jlc2l6ZUN1cnNvciwgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi4vY29sdW1uc1wiO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBTcGxpdHRlckRpdiB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBnZXRIb3Jpem9udGFsU3BsaXR0ZXJEaXYoKSB7XG4gICAgY29uc3QgaG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxTcGxpdHRlckRpdjtcbiAgfVxuXG4gIG1vdXNlVXAoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIHJlc2V0Q3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VNb3ZlKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWSB9ID0gZXZlbnQsXG4gICAgICAgICAgbW91c2VUb3AgPSBwYWdlWSwgIC8vL1xuICAgICAgICAgIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmdldERyYWdIYW5kbGVyKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHByZXZpb3VzTW91c2VUb3AgPSB0aGlzLmdldFByZXZpb3VzTW91c2VUb3AoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7IC8vL1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IHsgcGFnZVkgfSA9IGV2ZW50LFxuICAgICAgICAgIG1vdXNlVG9wID0gcGFnZVksICAvLy9cbiAgICAgICAgICBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IG1vdXNlVG9wLCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAgLy8vIFxuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcm93UmVzaXplQ3Vyc29yKCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VPdXQoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgcmVzZXRDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZVRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZVRvcDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0O1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYgPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2LFxuICAgICAgZGlzYWJsZUhvcml6b250YWxTcGxpdHRlckRpdlxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJob3Jpem9udGFsXCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlckRpdilgXG5cbiAgaGVpZ2h0OiAwLjhyZW07XG5cbmA7XG4iXX0=