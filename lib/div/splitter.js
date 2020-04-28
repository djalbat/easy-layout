"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _constants = require("../constants");

var _options = require("../options");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SplitterDiv = /*#__PURE__*/function (_Element) {
  _inherits(SplitterDiv, _Element);

  function SplitterDiv(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    var _this;

    _classCallCheck(this, SplitterDiv);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SplitterDiv).call(this, selector));
    _this.beforeSizeableElement = beforeSizeableElement;
    _this.afterSizeableElement = afterSizeableElement;
    _this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    _this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    _this.dragHandler = dragHandler || defaultDragHandler;
    _this.options = options || defaultOptions;
    return _this;
  }

  _createClass(SplitterDiv, [{
    key: "isBeforeSizeableElement",
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: "isAfterSizeableElement",
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: "getDragHandler",
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.hasClass("disabled");
      return disabled;
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      var dragging = this.hasClass("dragging");
      return dragging;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      var direction;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: "getSizeableElement",
    value: function getSizeableElement() {
      var sizeableElement;
      var direction = this.getDirection();

      switch (direction) {
        case -1:
          sizeableElement = this.getPreviousSiblingElement(); ///

          break;

        case +1:
          sizeableElement = this.getNextSiblingElement(); ///

          break;
      }

      return sizeableElement;
    }
  }, {
    key: "isOptionPresent",
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "setOption",
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: "unsetOption",
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: "enable",
    value: function enable() {
      this.removeClass("disabled");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.addClass("disabled");
    }
  }, {
    key: "startDragging",
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.onKeyDown(this.keyDownHandler, this);
      }

      this.addClass("dragging");
      this.startDraggingHandler();
    }
  }, {
    key: "stopDragging",
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(_options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        _easy.window.offKeyDown(this.keyDownHandler, this);
      }

      this.removeClass("dragging");
      this.stopDraggingHandler();
    }
  }, {
    key: "onDrag",
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: "keyDownHandler",
    value: function keyDownHandler(keyCode) {
      if (keyCode === _constants.ESCAPE_KEY_CODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: "initialise",
    value: function initialise(disabled) {
      disabled === true ? ///
      this.disable() : this.enable();

      _easy.window.on("mouseup blur", this.mouseUp.bind(this)); ///


      _easy.window.onMouseMove(this.mouseMove.bind(this));

      this.onMouseDown(this.mouseDown.bind(this));
      this.onMouseOver(this.mouseOver.bind(this));
      this.onMouseOut(this.mouseOut.bind(this));
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement,
          afterSizeableElement = properties.afterSizeableElement,
          onStartDragging = properties.onStartDragging,
          onStopDragging = properties.onStopDragging,
          onDrag = properties.onDrag,
          options = properties.options,
          disabled = properties.disabled,
          startDraggingHandler = onStartDragging,
          stopDraggingHandler = onStopDragging,
          dragHandler = onDrag,
          splitter = _easy.Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

      splitter.initialise(disabled);
      return splitter;
    }
  }]);

  return SplitterDiv;
}(_easy.Element);

exports["default"] = SplitterDiv;
Object.assign(SplitterDiv, {
  tagName: "div",
  ignoredProperties: ["beforeSizeableElement", "afterSizeableElement", "onStartDragging", "onStopDragging", "onDrag", "options", "disabled"]
});

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

var defaultOptions = {};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbIlNwbGl0dGVyRGl2Iiwic2VsZWN0b3IiLCJiZWZvcmVTaXplYWJsZUVsZW1lbnQiLCJhZnRlclNpemVhYmxlRWxlbWVudCIsInN0YXJ0RHJhZ2dpbmdIYW5kbGVyIiwic3RvcERyYWdnaW5nSGFuZGxlciIsImRyYWdIYW5kbGVyIiwib3B0aW9ucyIsImRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlciIsImRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZGVmYXVsdERyYWdIYW5kbGVyIiwiZGVmYXVsdE9wdGlvbnMiLCJkaXNhYmxlZCIsImhhc0NsYXNzIiwiZHJhZ2dpbmciLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50Iiwib3B0aW9uIiwib3B0aW9uUHJlc2VudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCIsImlzT3B0aW9uUHJlc2VudCIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiRVNDQVBFX0tFWV9DT0RFIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImRpc2FibGUiLCJlbmFibGUiLCJvbiIsIm1vdXNlVXAiLCJiaW5kIiwib25Nb3VzZU1vdmUiLCJtb3VzZU1vdmUiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwibW91c2VPdmVyIiwib25Nb3VzZU91dCIsIm1vdXNlT3V0IiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwib25TdGFydERyYWdnaW5nIiwib25TdG9wRHJhZ2dpbmciLCJvbkRyYWciLCJzcGxpdHRlciIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7QUFDbkIsdUJBQVlDLFFBQVosRUFBc0JDLHFCQUF0QixFQUE2Q0Msb0JBQTdDLEVBQW1FQyxvQkFBbkUsRUFBeUZDLG1CQUF6RixFQUE4R0MsV0FBOUcsRUFBMkhDLE9BQTNILEVBQW9JO0FBQUE7O0FBQUE7O0FBQ2xJLHFGQUFNTixRQUFOO0FBRUEsVUFBS0MscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFFQSxVQUFLQyxvQkFBTCxHQUE0QkEsb0JBQW9CLElBQUlJLDJCQUFwRDtBQUNBLFVBQUtILG1CQUFMLEdBQTJCQSxtQkFBbUIsSUFBSUksMEJBQWxEO0FBQ0EsVUFBS0gsV0FBTCxHQUFtQkEsV0FBVyxJQUFJSSxrQkFBbEM7QUFDQSxVQUFLSCxPQUFMLEdBQWVBLE9BQU8sSUFBSUksY0FBMUI7QUFUa0k7QUFVbkk7Ozs7OENBRXlCO0FBQ3hCLGFBQU8sS0FBS1QscUJBQVo7QUFDRDs7OzZDQUV3QjtBQUN2QixhQUFPLEtBQUtDLG9CQUFaO0FBQ0Q7OztxQ0FFZ0I7QUFDZixhQUFPLEtBQUtHLFdBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTU0sUUFBUSxHQUFHLEtBQUtDLFFBQUwsQ0FBYyxVQUFkLENBQWpCO0FBRUEsYUFBT0QsUUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNRSxRQUFRLEdBQUcsS0FBS0QsUUFBTCxDQUFjLFVBQWQsQ0FBakI7QUFFQSxhQUFPQyxRQUFQO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUlDLFNBQUo7O0FBRUEsVUFBSSxLQUFLYixxQkFBVCxFQUFnQztBQUM5QmEsUUFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBYjtBQUNEOztBQUVELFVBQUksS0FBS1osb0JBQVQsRUFBK0I7QUFDN0JZLFFBQUFBLFNBQVMsR0FBRyxDQUFDLENBQWI7QUFDRDs7QUFFRCxhQUFPQSxTQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBSUMsZUFBSjtBQUVBLFVBQU1ELFNBQVMsR0FBRyxLQUFLRSxZQUFMLEVBQWxCOztBQUVBLGNBQVFGLFNBQVI7QUFDRSxhQUFLLENBQUMsQ0FBTjtBQUNFQyxVQUFBQSxlQUFlLEdBQUcsS0FBS0UseUJBQUwsRUFBbEIsQ0FERixDQUNzRDs7QUFDcEQ7O0FBRUYsYUFBSyxDQUFDLENBQU47QUFDRUYsVUFBQUEsZUFBZSxHQUFHLEtBQUtHLHFCQUFMLEVBQWxCLENBREYsQ0FDa0Q7O0FBQ2hEO0FBUEo7O0FBVUEsYUFBT0gsZUFBUDtBQUNEOzs7b0NBRWVJLE0sRUFBUTtBQUN0QixVQUFNQyxhQUFhLEdBQUksS0FBS2QsT0FBTCxDQUFhYSxNQUFiLE1BQXlCLElBQWhELENBRHNCLENBQ2lDOztBQUV2RCxhQUFPQyxhQUFQO0FBQ0Q7OzsrQkFFVWQsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVNhLE0sRUFBUTtBQUNoQixXQUFLYixPQUFMLENBQWFhLE1BQWIsSUFBdUIsSUFBdkI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsYUFBTyxLQUFLYixPQUFMLENBQWFhLE1BQWIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLRSxXQUFMLENBQWlCLFVBQWpCO0FBQ0Q7Ozs4QkFFUztBQUNSLFdBQUtDLFFBQUwsQ0FBYyxVQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1DLG1DQUFtQyxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJDLGtDQUFyQixDQUE1Qzs7QUFFQSxVQUFJRixtQ0FBSixFQUF5QztBQUN2Q0cscUJBQU9DLFNBQVAsQ0FBaUIsS0FBS0MsY0FBdEIsRUFBc0MsSUFBdEM7QUFDRDs7QUFFRCxXQUFLTixRQUFMLENBQWMsVUFBZDtBQUVBLFdBQUtuQixvQkFBTDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNb0IsbUNBQW1DLEdBQUcsS0FBS0MsZUFBTCxDQUFxQkMsa0NBQXJCLENBQTVDOztBQUVBLFVBQUlGLG1DQUFKLEVBQXlDO0FBQ3ZDRyxxQkFBT0csVUFBUCxDQUFrQixLQUFLRCxjQUF2QixFQUF1QyxJQUF2QztBQUNEOztBQUVELFdBQUtQLFdBQUwsQ0FBaUIsVUFBakI7QUFFQSxXQUFLakIsbUJBQUw7QUFDRDs7OzJCQUVNQyxXLEVBQWE7QUFDbEIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O21DQUVjeUIsTyxFQUFTO0FBQ3RCLFVBQUlBLE9BQU8sS0FBS0MsMEJBQWhCLEVBQWlDO0FBQy9CLFlBQU1sQixRQUFRLEdBQUcsS0FBS21CLFVBQUwsRUFBakI7O0FBRUEsWUFBSW5CLFFBQUosRUFBYztBQUNaLGVBQUtvQixZQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7K0JBRVV0QixRLEVBQVU7QUFDbEJBLE1BQUFBLFFBQVEsS0FBSyxJQUFkLEdBQXNCO0FBQ3BCLFdBQUt1QixPQUFMLEVBREYsR0FFSSxLQUFLQyxNQUFMLEVBRko7O0FBSUFULG1CQUFPVSxFQUFQLENBQVUsY0FBVixFQUEwQixLQUFLQyxPQUFMLENBQWFDLElBQWIsQ0FBa0IsSUFBbEIsQ0FBMUIsRUFMbUIsQ0FLa0M7OztBQUVyRFosbUJBQU9hLFdBQVAsQ0FBbUIsS0FBS0MsU0FBTCxDQUFlRixJQUFmLENBQW9CLElBQXBCLENBQW5COztBQUVBLFdBQUtHLFdBQUwsQ0FBaUIsS0FBS0MsU0FBTCxDQUFlSixJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0EsV0FBS0ssV0FBTCxDQUFpQixLQUFLQyxTQUFMLENBQWVOLElBQWYsQ0FBb0IsSUFBcEIsQ0FBakI7QUFDQSxXQUFLTyxVQUFMLENBQWdCLEtBQUtDLFFBQUwsQ0FBY1IsSUFBZCxDQUFtQixJQUFuQixDQUFoQjtBQUNEOzs7bUNBRXFCUyxLLEVBQU9DLFUsRUFBWTtBQUFBLFVBQy9CL0MscUJBRCtCLEdBQzZFK0MsVUFEN0UsQ0FDL0IvQyxxQkFEK0I7QUFBQSxVQUNSQyxvQkFEUSxHQUM2RThDLFVBRDdFLENBQ1I5QyxvQkFEUTtBQUFBLFVBQ2MrQyxlQURkLEdBQzZFRCxVQUQ3RSxDQUNjQyxlQURkO0FBQUEsVUFDK0JDLGNBRC9CLEdBQzZFRixVQUQ3RSxDQUMrQkUsY0FEL0I7QUFBQSxVQUMrQ0MsTUFEL0MsR0FDNkVILFVBRDdFLENBQytDRyxNQUQvQztBQUFBLFVBQ3VEN0MsT0FEdkQsR0FDNkUwQyxVQUQ3RSxDQUN1RDFDLE9BRHZEO0FBQUEsVUFDZ0VLLFFBRGhFLEdBQzZFcUMsVUFEN0UsQ0FDZ0VyQyxRQURoRTtBQUFBLFVBRWpDUixvQkFGaUMsR0FFVjhDLGVBRlU7QUFBQSxVQUdqQzdDLG1CQUhpQyxHQUdYOEMsY0FIVztBQUFBLFVBSWpDN0MsV0FKaUMsR0FJbkI4QyxNQUptQjtBQUFBLFVBS2pDQyxRQUxpQyxHQUt0QkMsY0FBUUMsY0FBUixDQUF1QlAsS0FBdkIsRUFBOEJDLFVBQTlCLEVBQTBDL0MscUJBQTFDLEVBQWlFQyxvQkFBakUsRUFBdUZDLG9CQUF2RixFQUE2R0MsbUJBQTdHLEVBQWtJQyxXQUFsSSxFQUErSUMsT0FBL0ksQ0FMc0I7O0FBT3ZDOEMsTUFBQUEsUUFBUSxDQUFDRyxVQUFULENBQW9CNUMsUUFBcEI7QUFFQSxhQUFPeUMsUUFBUDtBQUNEOzs7O0VBN0pzQ0MsYTs7O0FBZ0t6Q0csTUFBTSxDQUFDQyxNQUFQLENBQWMxRCxXQUFkLEVBQTJCO0FBQ3pCMkQsRUFBQUEsT0FBTyxFQUFFLEtBRGdCO0FBRXpCQyxFQUFBQSxpQkFBaUIsRUFBRSxDQUNqQix1QkFEaUIsRUFFakIsc0JBRmlCLEVBR2pCLGlCQUhpQixFQUlqQixnQkFKaUIsRUFLakIsUUFMaUIsRUFNakIsU0FOaUIsRUFPakIsVUFQaUI7QUFGTSxDQUEzQjs7QUFjQSxTQUFTcEQsMkJBQVQsR0FBdUMsQ0FBRTs7QUFFekMsU0FBU0MsMEJBQVQsR0FBc0MsQ0FBRTs7QUFFeEMsU0FBU0Msa0JBQVQsR0FBOEIsQ0FBRTs7QUFFaEMsSUFBTUMsY0FBYyxHQUFHLEVBQXZCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVTQ0FQRV9LRVlfQ09ERSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSBmcm9tIFwiLi4vb3B0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQgPSBiZWZvcmVTaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCA9IGFmdGVyU2l6ZWFibGVFbGVtZW50O1xuXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlciA9IHN0YXJ0RHJhZ2dpbmdIYW5kbGVyIHx8IGRlZmF1bHRTdGFydERyYWdnaW5nSGFuZGxlcjtcbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBzdG9wRHJhZ2dpbmdIYW5kbGVyIHx8IGRlZmF1bHRTdG9wRHJhZ2dpbmdIYW5kbGVyO1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlciB8fCBkZWZhdWx0RHJhZ0hhbmRsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBkZWZhdWx0T3B0aW9ucztcbiAgfVxuXG4gIGlzQmVmb3JlU2l6ZWFibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmJlZm9yZVNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzQWZ0ZXJTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQ7XG4gIH1cblxuICBnZXREcmFnSGFuZGxlcigpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnSGFuZGxlcjtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgICBcbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cbiAgXG4gIGdldERpcmVjdGlvbigpIHtcbiAgICBsZXQgZGlyZWN0aW9uO1xuXG4gICAgaWYgKHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSArMTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hZnRlclNpemVhYmxlRWxlbWVudCkge1xuICAgICAgZGlyZWN0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgfVxuXG4gIGdldFNpemVhYmxlRWxlbWVudCgpIHtcbiAgICBsZXQgc2l6ZWFibGVFbGVtZW50O1xuXG4gICAgY29uc3QgZGlyZWN0aW9uID0gdGhpcy5nZXREaXJlY3Rpb24oKTtcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKTsgLy8vXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICsxOlxuICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldE5leHRTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGlzT3B0aW9uUHJlc2VudChvcHRpb24pIHtcbiAgICBjb25zdCBvcHRpb25QcmVzZW50ID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uUHJlc2VudDtcbiAgfVxuXG4gIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9uS2V5RG93bih0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG4gICAgXG4gICAgdGhpcy5zdGFydERyYWdnaW5nSGFuZGxlcigpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vZmZLZXlEb3duKHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHRoaXMuc3RvcERyYWdnaW5nSGFuZGxlcigpO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoa2V5Q29kZSkge1xuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZX0NPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UoZGlzYWJsZWQpIHtcbiAgICAoZGlzYWJsZWQgPT09IHRydWUpID8gLy8vXG4gICAgICB0aGlzLmRpc2FibGUoKSA6XG4gICAgICAgIHRoaXMuZW5hYmxlKCk7XG5cbiAgICB3aW5kb3cub24oXCJtb3VzZXVwIGJsdXJcIiwgdGhpcy5tb3VzZVVwLmJpbmQodGhpcykpOyAgLy8vXG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIG9uU3RhcnREcmFnZ2luZywgb25TdG9wRHJhZ2dpbmcsIG9uRHJhZywgb3B0aW9ucywgZGlzYWJsZWQgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgc3RhcnREcmFnZ2luZ0hhbmRsZXIgPSBvblN0YXJ0RHJhZ2dpbmcsIC8vL1xuICAgICAgICAgIHN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBvblN0b3BEcmFnZ2luZywgLy8vXG4gICAgICAgICAgZHJhZ0hhbmRsZXIgPSBvbkRyYWcsIC8vL1xuICAgICAgICAgIHNwbGl0dGVyID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKTtcblxuICAgIHNwbGl0dGVyLmluaXRpYWxpc2UoZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIHNwbGl0dGVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU3BsaXR0ZXJEaXYsIHtcbiAgdGFnTmFtZTogXCJkaXZcIixcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICBcImJlZm9yZVNpemVhYmxlRWxlbWVudFwiLFxuICAgIFwiYWZ0ZXJTaXplYWJsZUVsZW1lbnRcIixcbiAgICBcIm9uU3RhcnREcmFnZ2luZ1wiLFxuICAgIFwib25TdG9wRHJhZ2dpbmdcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib3B0aW9uc1wiLFxuICAgIFwiZGlzYWJsZWRcIlxuICBdXG59KTtcblxuXG5mdW5jdGlvbiBkZWZhdWx0U3RhcnREcmFnZ2luZ0hhbmRsZXIoKSB7fVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RvcERyYWdnaW5nSGFuZGxlcigpIHt9XG5cbmZ1bmN0aW9uIGRlZmF1bHREcmFnSGFuZGxlcigpIHt9XG5cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge307XG4iXX0=