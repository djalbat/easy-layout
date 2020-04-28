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

_defineProperty(HorizontalSplitterDiv, "defaultProperties", {
  className: "horizontal"
});

var _default = (0, _easyWithStyle["default"])(HorizontalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiSG9yaXpvbnRhbFNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlckRpdiIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic3RhcnREcmFnZ2luZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJ1cGRhdGVTdGF0ZSIsInNldFN0YXRlIiwiZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2IiwiZW5hYmxlIiwiYmluZCIsImRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYiLCJkaXNhYmxlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwiU3BsaXR0ZXJEaXYiLCJmcm9tUHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7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cUJBQVI7QUFDRDs7QUFFRCxhQUFPOEMscUJBQVlDLGNBQVosQ0FBMkJKLEtBQTNCLEVBQWtDQyxVQUFsQyxDQUFQO0FBQ0Q7Ozs7RUF0SmlDRSxvQjs7Z0JBQTlCOUMscUIsdUJBMEl1QjtBQUN6QmdELEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBZWQsK0JBQVVoRCxxQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCBTcGxpdHRlckRpdiBmcm9tIFwiLi4vLi4vZGl2L3NwbGl0dGVyXCI7XG5cbmltcG9ydCB7IHJvd1Jlc2l6ZUN1cnNvciwgcmVzZXRDdXJzb3IgfSBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5pbXBvcnQgQ29sdW1uc0RpdiBmcm9tIFwiLi4vY29sdW1uc1wiO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBTcGxpdHRlckRpdiB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBnZXRIb3Jpem9udGFsU3BsaXR0ZXJEaXYoKSB7XG4gICAgY29uc3QgaG9yaXpvbnRhbFNwbGl0dGVyRGl2ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxTcGxpdHRlckRpdjtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgICBkcmFnSGFuZGxlciA9IHRoaXMuZ2V0RHJhZ0hhbmRsZXIoKSxcbiAgICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZVRvcCgpLFxuICAgICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHRoaXMuZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSxcbiAgICAgICAgICAgICAgcmVsYXRpdmVNb3VzZVRvcCA9IG1vdXNlVG9wIC0gcHJldmlvdXNNb3VzZVRvcDtcblxuICAgICAgICBsZXQgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgLSBkaXJlY3Rpb24gKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHNpemVhYmxlRWxlbWVudEhlaWdodDsgLy8vXG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTsgIC8vL1xuXG4gICAgICAgIGRyYWdIYW5kbGVyKHNpemVhYmxlRWxlbWVudEhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgcHJldmlvdXNNb3VzZVRvcCA9IG1vdXNlVG9wLCAgLy8vXG4gICAgICAgICAgICBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50ID0gdGhpcy5nZXRTaXplYWJsZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKSxcbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAgLy8vIFxuXG4gICAgICB0aGlzLnNldFByZXZpb3VzTW91c2VUb3AocHJldmlvdXNNb3VzZVRvcCk7XG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQocHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICByb3dSZXNpemVDdXJzb3IoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIHJvd1Jlc2l6ZUN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICByZXNldEN1cnNvcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldFByZXZpb3VzTW91c2VUb3AoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c01vdXNlVG9wIH0gPSBzdGF0ZTtcblxuICAgIHJldHVybiBwcmV2aW91c01vdXNlVG9wO1xuICB9XG5cbiAgZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCksXG4gICAgICAgICAgeyBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQ7XG4gIH1cblxuICBzZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3BcbiAgICB9KTtcbiAgfVxuXG4gIHNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBudWxsLFxuICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcHJldmlvdXNNb3VzZVRvcCxcbiAgICAgIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0XG4gICAgfSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGVuYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiA9IHRoaXMuZW5hYmxlLmJpbmQodGhpcyksXG4gICAgICAgICAgZGlzYWJsZUhvcml6b250YWxTcGxpdHRlckRpdiA9IHRoaXMuZGlzYWJsZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXJEaXYsXG4gICAgICBkaXNhYmxlSG9yaXpvbnRhbFNwbGl0dGVyRGl2XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImhvcml6b250YWxcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gSG9yaXpvbnRhbFNwbGl0dGVyRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBTcGxpdHRlckRpdi5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKEhvcml6b250YWxTcGxpdHRlckRpdilgXG5cbiAgaGVpZ2h0OiAwLjhyZW07XG5cbmA7XG4iXX0=