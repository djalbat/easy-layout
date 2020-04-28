"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var cursor = require("../cursor"),
    Splitter = require("../splitter");

var HorizontalSplitter = /*#__PURE__*/function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, HorizontalSplitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HorizontalSplitter).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();

    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: "getHorizontalSplitter",
    value: function getHorizontalSplitter() {
      var horizontalSplitter = this; ///

      return horizontalSplitter;
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

        cursor.reset();
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

        cursor.rowResize();
      }
    }
  }, {
    key: "mouseOver",
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
      }
    }
  }, {
    key: "mouseOut",
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
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
      var enableHorizontalSplitter = this.enable.bind(this),
          disableHorizontalSplitter = this.disable.bind(this);
      return {
        enableHorizontalSplitter: enableHorizontalSplitter,
        disableHorizontalSplitter: disableHorizontalSplitter
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: "horizontal splitter"
  }
});
module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvcml6b250YWwuanMiXSwibmFtZXMiOlsiY3Vyc29yIiwicmVxdWlyZSIsIlNwbGl0dGVyIiwiSG9yaXpvbnRhbFNwbGl0dGVyIiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsInNldEluaXRpYWxTdGF0ZSIsImhvcml6b250YWxTcGxpdHRlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsInJlc2V0IiwibW91c2VUb3AiLCJtb3VzZUxlZnQiLCJkaXJlY3Rpb24iLCJnZXREaXJlY3Rpb24iLCJnZXREcmFnSGFuZGxlciIsInNpemVhYmxlRWxlbWVudCIsImdldFNpemVhYmxlRWxlbWVudCIsInByZXZpb3VzTW91c2VUb3AiLCJnZXRQcmV2aW91c01vdXNlVG9wIiwicHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCIsInJlbGF0aXZlTW91c2VUb3AiLCJzaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJnZXRIZWlnaHQiLCJzZXRQcmV2aW91c01vdXNlVG9wIiwic2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJzdGFydERyYWdnaW5nIiwicm93UmVzaXplIiwic3RhdGUiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXIiLCJlbmFibGUiLCJiaW5kIiwiZGlzYWJsZUhvcml6b250YWxTcGxpdHRlciIsImRpc2FibGUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVy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QUFRO0FBQ05GLFFBQUFBLHdCQUF3QixFQUF4QkEsd0JBRE07QUFFTkcsUUFBQUEseUJBQXlCLEVBQXpCQTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBTzlDLFFBQVEsQ0FBQytDLGNBQVQsQ0FBd0I5QyxrQkFBeEIsRUFBNEM2QyxVQUE1QyxDQUFQO0FBQWlFOzs7O0VBMUl0RTlDLFE7O0FBNklqQ2dELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjaEQsa0JBQWQsRUFBa0M7QUFDaENpRCxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFEYSxDQUFsQztBQU1BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJwRCxrQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY3Vyc29yID0gcmVxdWlyZShcIi4uL2N1cnNvclwiKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZShcIi4uL3NwbGl0dGVyXCIpO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBiZWZvcmVTaXplYWJsZUVsZW1lbnQsIGFmdGVyU2l6ZWFibGVFbGVtZW50LCBzdGFydERyYWdnaW5nSGFuZGxlciwgc3RvcERyYWdnaW5nSGFuZGxlciwgZHJhZ0hhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBzdXBlcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKCk7XG4gIH1cblxuICBnZXRIb3Jpem9udGFsU3BsaXR0ZXIoKSB7XG4gICAgY29uc3QgaG9yaXpvbnRhbFNwbGl0dGVyID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGhvcml6b250YWxTcGxpdHRlcjtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuXG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU1vdmUobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmdldERyYWdIYW5kbGVyKCksXG4gICAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICAgIHByZXZpb3VzTW91c2VUb3AgPSB0aGlzLmdldFByZXZpb3VzTW91c2VUb3AoKSxcbiAgICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICAgIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHByZXZpb3VzTW91c2VUb3A7XG5cbiAgICAgICAgbGV0IHNpemVhYmxlRWxlbWVudEhlaWdodCA9IHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gZGlyZWN0aW9uICogcmVsYXRpdmVNb3VzZVRvcDtcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7IC8vL1xuXG4gICAgICAgIHNpemVhYmxlRWxlbWVudC5zZXRIZWlnaHQoaGVpZ2h0KTtcblxuICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7ICAvLy9cblxuICAgICAgICBkcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzTW91c2VUb3AgPSBtb3VzZVRvcCwgIC8vL1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0U2l6ZWFibGVFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IHNpemVhYmxlRWxlbWVudEhlaWdodDsgIC8vLyBcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c01vdXNlVG9wKHByZXZpb3VzTW91c2VUb3ApO1xuXG4gICAgICB0aGlzLnNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cblxuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3V0KCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjdXJzb3IucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBnZXRQcmV2aW91c01vdXNlVG9wKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNNb3VzZVRvcCB9ID0gc3RhdGU7XG5cbiAgICByZXR1cm4gcHJldmlvdXNNb3VzZVRvcDtcbiAgfVxuXG4gIGdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpLFxuICAgICAgICAgIHsgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgfSA9IHN0YXRlO1xuXG4gICAgcmV0dXJuIHByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0O1xuICB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBlbmFibGVIb3Jpem9udGFsU3BsaXR0ZXIgPSB0aGlzLmVuYWJsZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGRpc2FibGVIb3Jpem9udGFsU3BsaXR0ZXIgPSB0aGlzLmRpc2FibGUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZW5hYmxlSG9yaXpvbnRhbFNwbGl0dGVyLFxuICAgICAgZGlzYWJsZUhvcml6b250YWxTcGxpdHRlclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKEhvcml6b250YWxTcGxpdHRlciwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihIb3Jpem9udGFsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6IFwiaG9yaXpvbnRhbCBzcGxpdHRlclwiXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhvcml6b250YWxTcGxpdHRlcjtcbiJdfQ==