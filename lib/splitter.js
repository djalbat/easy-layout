'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var options = require('./options');

var ESCAPE_KEYCODE = 27;

var ESCAPE_KEY_STOPS_DRAGGING = options.ESCAPE_KEY_STOPS_DRAGGING;
var window = easy.window;
var Element = easy.Element;

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, beforeSizeableElement, afterSizeableElement) {
    var startDraggingHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var stopDraggingHandler = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {};
    var dragHandler = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function () {};
    var disabled = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var options = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : {};

    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

    _this.beforeSizeableElement = beforeSizeableElement;

    _this.afterSizeableElement = afterSizeableElement;

    _this.startDraggingHandler = startDraggingHandler;

    _this.stopDraggingHandler = stopDraggingHandler;

    _this.dragHandler = dragHandler;

    _this.disabled = disabled;

    _this.options = options;

    _this.dragging = false;

    window.on('mouseup blur', _this.mouseUp.bind(_this)); ///

    window.onMouseMove(_this.mouseMove.bind(_this));

    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseOver(_this.mouseOver.bind(_this));
    _this.onMouseOut(_this.mouseOut.bind(_this));
    return _this;
  }

  _createClass(Splitter, [{
    key: 'isBeforeSizeableElement',
    value: function isBeforeSizeableElement() {
      return this.beforeSizeableElement;
    }
  }, {
    key: 'isAfterSizeableElement',
    value: function isAfterSizeableElement() {
      return this.afterSizeableElement;
    }
  }, {
    key: 'getDragHandler',
    value: function getDragHandler() {
      return this.dragHandler;
    }
  }, {
    key: 'isOptionPresent',
    value: function isOptionPresent(option) {
      var optionPresent = this.options[option] === true; ///

      return optionPresent;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'getDirection',
    value: function getDirection() {
      var direction = void 0;

      if (this.beforeSizeableElement) {
        direction = +1;
      }

      if (this.afterSizeableElement) {
        direction = -1;
      }

      return direction;
    }
  }, {
    key: 'getSizeableElement',
    value: function getSizeableElement() {
      var sizeableElement = void 0;

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
    key: 'setOptions',
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: 'setOption',
    value: function setOption(option) {
      this.options[option] = true;
    }
  }, {
    key: 'unsetOption',
    value: function unsetOption(option) {
      delete this.options[option];
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.disabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.disabled = true;
    }
  }, {
    key: 'onDrag',
    value: function onDrag(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.onKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = true;

      this.startDraggingHandler();
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDraggingOptionPresent) {
        window.offKeyDown(this.keyDownHandler.bind(this));
      }

      this.dragging = false;

      this.stopDraggingHandler();
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(keyCode) {
      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var beforeSizeableElement = properties.beforeSizeableElement;
      var afterSizeableElement = properties.afterSizeableElement;
      var onStartDragging = properties.onStartDragging;
      var onStopDragging = properties.onStopDragging;
      var onDrag = properties.onDrag;
      var disabled = properties.disabled;
      var options = properties.options;
      var startDraggingHandler = onStartDragging; ///
      var stopDraggingHandler = onStopDragging; ///
      var dragHandler = onDrag; ///

      return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options);
    }
  }]);

  return Splitter;
}(Element);

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: ['beforeSizeableElement', 'afterSizeableElement', 'onStartDragging', 'onStopDragging', 'onDrag', 'disabled', 'options']
});

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIm9wdGlvbnMiLCJFU0NBUEVfS0VZQ09ERSIsIkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkciLCJ3aW5kb3ciLCJFbGVtZW50IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsImJlZm9yZVNpemVhYmxlRWxlbWVudCIsImFmdGVyU2l6ZWFibGVFbGVtZW50Iiwic3RhcnREcmFnZ2luZ0hhbmRsZXIiLCJzdG9wRHJhZ2dpbmdIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJkaXNhYmxlZCIsImRyYWdnaW5nIiwib24iLCJtb3VzZVVwIiwiYmluZCIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZURvd24iLCJtb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJtb3VzZU91dCIsIm9wdGlvbiIsIm9wdGlvblByZXNlbnQiLCJkaXJlY3Rpb24iLCJzaXplYWJsZUVsZW1lbnQiLCJnZXREaXJlY3Rpb24iLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0TmV4dFNpYmxpbmdFbGVtZW50IiwiZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQiLCJpc09wdGlvblByZXNlbnQiLCJvbktleURvd24iLCJrZXlEb3duSGFuZGxlciIsIm9mZktleURvd24iLCJrZXlDb2RlIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsIkNsYXNzIiwicHJvcGVydGllcyIsIm9uU3RhcnREcmFnZ2luZyIsIm9uU3RvcERyYWdnaW5nIiwib25EcmFnIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaWdub3JlZFByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFVBQVVELFFBQVEsV0FBUixDQUFoQjs7QUFFQSxJQUFNRSxpQkFBaUIsRUFBdkI7O0FBRU0sSUFBRUMseUJBQUYsR0FBZ0NGLE9BQWhDLENBQUVFLHlCQUFGO0lBQ0VDLE0sR0FBb0JMLEksQ0FBcEJLLE07SUFBUUMsTyxHQUFZTixJLENBQVpNLE87O0lBRVZDLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxxQkFBdEIsRUFBNkNDLG9CQUE3QyxFQUE0TTtBQUFBLFFBQXpJQyxvQkFBeUksdUVBQWpILFlBQVcsQ0FBRSxDQUFvRztBQUFBLFFBQWxHQyxtQkFBa0csdUVBQTVFLFlBQVcsQ0FBRSxDQUErRDtBQUFBLFFBQTdEQyxXQUE2RCx1RUFBL0MsWUFBVyxDQUFFLENBQWtDO0FBQUEsUUFBaENDLFFBQWdDLHVFQUFyQixLQUFxQjtBQUFBLFFBQWRaLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSxvSEFDcE1NLFFBRG9NOztBQUcxTSxVQUFLQyxxQkFBTCxHQUE2QkEscUJBQTdCOztBQUVBLFVBQUtDLG9CQUFMLEdBQTRCQSxvQkFBNUI7O0FBRUEsVUFBS0Msb0JBQUwsR0FBNEJBLG9CQUE1Qjs7QUFFQSxVQUFLQyxtQkFBTCxHQUEyQkEsbUJBQTNCOztBQUVBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUVBLFVBQUtaLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxVQUFLYSxRQUFMLEdBQWdCLEtBQWhCOztBQUVBVixXQUFPVyxFQUFQLENBQVUsY0FBVixFQUEwQixNQUFLQyxPQUFMLENBQWFDLElBQWIsT0FBMUIsRUFuQjBNLENBbUJySjs7QUFFckRiLFdBQU9jLFdBQVAsQ0FBbUIsTUFBS0MsU0FBTCxDQUFlRixJQUFmLE9BQW5COztBQUVBLFVBQUtHLFdBQUwsQ0FBaUIsTUFBS0MsU0FBTCxDQUFlSixJQUFmLE9BQWpCO0FBQ0EsVUFBS0ssV0FBTCxDQUFpQixNQUFLQyxTQUFMLENBQWVOLElBQWYsT0FBakI7QUFDQSxVQUFLTyxVQUFMLENBQWdCLE1BQUtDLFFBQUwsQ0FBY1IsSUFBZCxPQUFoQjtBQXpCME07QUEwQjNNOzs7OzhDQUV5QjtBQUN4QixhQUFPLEtBQUtULHFCQUFaO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsYUFBTyxLQUFLQyxvQkFBWjtBQUNEOzs7cUNBRWdCO0FBQ2YsYUFBTyxLQUFLRyxXQUFaO0FBQ0Q7OztvQ0FFZWMsTSxFQUFRO0FBQ3RCLFVBQU1DLGdCQUFpQixLQUFLMUIsT0FBTCxDQUFheUIsTUFBYixNQUF5QixJQUFoRCxDQURzQixDQUNpQzs7QUFFdkQsYUFBT0MsYUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxhQUFPLEtBQUtkLFFBQVo7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQyxRQUFaO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUljLGtCQUFKOztBQUVBLFVBQUksS0FBS3BCLHFCQUFULEVBQWdDO0FBQzlCb0Isb0JBQVksQ0FBQyxDQUFiO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLbkIsb0JBQVQsRUFBK0I7QUFDN0JtQixvQkFBWSxDQUFDLENBQWI7QUFDRDs7QUFFRCxhQUFPQSxTQUFQO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBSUMsd0JBQUo7O0FBRUEsVUFBTUQsWUFBWSxLQUFLRSxZQUFMLEVBQWxCOztBQUVBLGNBQVFGLFNBQVI7QUFDRSxhQUFLLENBQUMsQ0FBTjtBQUNFQyw0QkFBa0IsS0FBS0UseUJBQUwsRUFBbEIsQ0FERixDQUNzRDtBQUNwRDs7QUFFRixhQUFLLENBQUMsQ0FBTjtBQUNFRiw0QkFBa0IsS0FBS0cscUJBQUwsRUFBbEIsQ0FERixDQUNrRDtBQUNoRDtBQVBKOztBQVVBLGFBQU9ILGVBQVA7QUFDRDs7OytCQUVVNUIsTyxFQUFTO0FBQ2xCLFdBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7OEJBRVN5QixNLEVBQVE7QUFDaEIsV0FBS3pCLE9BQUwsQ0FBYXlCLE1BQWIsSUFBdUIsSUFBdkI7QUFDRDs7O2dDQUVXQSxNLEVBQVE7QUFDbEIsYUFBTyxLQUFLekIsT0FBTCxDQUFheUIsTUFBYixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLFdBQUtiLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7MkJBRU1ELFcsRUFBYTtBQUNsQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNcUIsc0NBQXNDLEtBQUtDLGVBQUwsQ0FBcUIvQix5QkFBckIsQ0FBNUM7O0FBRUEsVUFBSThCLG1DQUFKLEVBQXlDO0FBQ3ZDN0IsZUFBTytCLFNBQVAsQ0FBaUIsS0FBS0MsY0FBTCxDQUFvQm5CLElBQXBCLENBQXlCLElBQXpCLENBQWpCO0FBQ0Q7O0FBRUQsV0FBS0gsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxXQUFLSixvQkFBTDtBQUNEOzs7bUNBRWM7QUFDYixVQUFNdUIsc0NBQXNDLEtBQUtDLGVBQUwsQ0FBcUIvQix5QkFBckIsQ0FBNUM7O0FBRUEsVUFBSThCLG1DQUFKLEVBQXlDO0FBQ3ZDN0IsZUFBT2lDLFVBQVAsQ0FBa0IsS0FBS0QsY0FBTCxDQUFvQm5CLElBQXBCLENBQXlCLElBQXpCLENBQWxCO0FBQ0Q7O0FBRUQsV0FBS0gsUUFBTCxHQUFnQixLQUFoQjs7QUFFQSxXQUFLSCxtQkFBTDtBQUNEOzs7bUNBRWMyQixPLEVBQVM7QUFDdEIsVUFBSUEsWUFBWXBDLGNBQWhCLEVBQWdDO0FBQzlCLFlBQU1ZLFdBQVcsS0FBS3lCLFVBQUwsRUFBakI7O0FBRUEsWUFBSXpCLFFBQUosRUFBYztBQUNaLGVBQUswQixZQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7bUNBRXFCQyxLLEVBQU9DLFUsRUFBWTtBQUFBLFVBQy9CbEMscUJBRCtCLEdBQzZFa0MsVUFEN0UsQ0FDL0JsQyxxQkFEK0I7QUFBQSxVQUNSQyxvQkFEUSxHQUM2RWlDLFVBRDdFLENBQ1JqQyxvQkFEUTtBQUFBLFVBQ2NrQyxlQURkLEdBQzZFRCxVQUQ3RSxDQUNjQyxlQURkO0FBQUEsVUFDK0JDLGNBRC9CLEdBQzZFRixVQUQ3RSxDQUMrQkUsY0FEL0I7QUFBQSxVQUMrQ0MsTUFEL0MsR0FDNkVILFVBRDdFLENBQytDRyxNQUQvQztBQUFBLFVBQ3VEaEMsUUFEdkQsR0FDNkU2QixVQUQ3RSxDQUN1RDdCLFFBRHZEO0FBQ2pDLFVBQWtHWixPQUFsRyxHQUE4R3lDLFVBQTlHLENBQWtHekMsT0FBbEc7QUFDQSxpQ0FBdUIwQyxlQUF2QixDQUZpQyxDQUVPO0FBQ3hDLGdDQUFzQkMsY0FBdEIsQ0FIaUMsQ0FHSztBQUN0Qyx3QkFBY0MsTUFBZCxDQUppQyxDQUlYOztBQUU1QixhQUFPeEMsUUFBUXlDLGNBQVIsQ0FBdUJMLEtBQXZCLEVBQThCQyxVQUE5QixFQUEwQ2xDLHFCQUExQyxFQUFpRUMsb0JBQWpFLEVBQXVGQyxvQkFBdkYsRUFBNkdDLG1CQUE3RyxFQUFrSUMsV0FBbEksRUFBK0lDLFFBQS9JLEVBQXlKWixPQUF6SixDQUFQO0FBQ0Q7Ozs7RUF4Sm9CSSxPOztBQTJKdkIwQyxPQUFPQyxNQUFQLENBQWMxQyxRQUFkLEVBQXdCO0FBQ3RCMkMsV0FBUyxLQURhO0FBRXRCQyxxQkFBbUIsQ0FDakIsdUJBRGlCLEVBRWpCLHNCQUZpQixFQUdqQixpQkFIaUIsRUFJakIsZ0JBSmlCLEVBS2pCLFFBTGlCLEVBTWpCLFVBTmlCLEVBT2pCLFNBUGlCO0FBRkcsQ0FBeEI7O0FBYUFDLE9BQU9DLE9BQVAsR0FBaUI5QyxRQUFqQiIsImZpbGUiOiJzcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3Qgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5jb25zdCB7IEVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcgfSA9IG9wdGlvbnMsXG4gICAgICB7IHdpbmRvdywgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyICA9IGZ1bmN0aW9uKCkge30sIHN0b3BEcmFnZ2luZ0hhbmRsZXIgPSBmdW5jdGlvbigpIHt9LCBkcmFnSGFuZGxlciA9IGZ1bmN0aW9uKCkge30sIGRpc2FibGVkID0gZmFsc2UsIG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50ID0gYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICAgIFxuICAgIHRoaXMuYWZ0ZXJTaXplYWJsZUVsZW1lbnQgPSBhZnRlclNpemVhYmxlRWxlbWVudDtcbiAgICBcbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyID0gc3RhcnREcmFnZ2luZ0hhbmRsZXI7XG4gICAgXG4gICAgdGhpcy5zdG9wRHJhZ2dpbmdIYW5kbGVyID0gc3RvcERyYWdnaW5nSGFuZGxlcjtcblxuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIFxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgXG4gICAgd2luZG93Lm9uKCdtb3VzZXVwIGJsdXInLCB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7ICAvLy9cbiAgIFxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgXG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgaXNCZWZvcmVTaXplYWJsZUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYmVmb3JlU2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgaXNBZnRlclNpemVhYmxlRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hZnRlclNpemVhYmxlRWxlbWVudDtcbiAgfVxuXG4gIGdldERyYWdIYW5kbGVyKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdIYW5kbGVyO1xuICB9XG5cbiAgaXNPcHRpb25QcmVzZW50KG9wdGlvbikge1xuICAgIGNvbnN0IG9wdGlvblByZXNlbnQgPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb25QcmVzZW50O1xuICB9XG4gIFxuICBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuICBcbiAgZ2V0RGlyZWN0aW9uKCkge1xuICAgIGxldCBkaXJlY3Rpb247XG5cbiAgICBpZiAodGhpcy5iZWZvcmVTaXplYWJsZUVsZW1lbnQpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICsxO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmFmdGVyU2l6ZWFibGVFbGVtZW50KSB7XG4gICAgICBkaXJlY3Rpb24gPSAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9XG5cbiAgZ2V0U2l6ZWFibGVFbGVtZW50KCkge1xuICAgIGxldCBzaXplYWJsZUVsZW1lbnQ7XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpO1xuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpOyAvLy9cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgKzE6XG4gICAgICAgIHNpemVhYmxlRWxlbWVudCA9IHRoaXMuZ2V0TmV4dFNpYmxpbmdFbGVtZW50KCk7IC8vL1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gc2l6ZWFibGVFbGVtZW50O1xuICB9XG5cbiAgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIHNldE9wdGlvbihvcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbnNbb3B0aW9uXSA9IHRydWU7XG4gIH1cblxuICB1bnNldE9wdGlvbihvcHRpb24pIHtcbiAgICBkZWxldGUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIGNvbnN0IGVzY2FwZUtleVN0b3BzRHJhZ2dpbmdPcHRpb25QcmVzZW50ID0gdGhpcy5pc09wdGlvblByZXNlbnQoRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQpIHtcbiAgICAgIHdpbmRvdy5vbktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICBcbiAgICB0aGlzLnN0YXJ0RHJhZ2dpbmdIYW5kbGVyKCk7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZ09wdGlvblByZXNlbnQgPSB0aGlzLmlzT3B0aW9uUHJlc2VudChFU0NBUEVfS0VZX1NUT1BTX0RSQUdHSU5HKTtcblxuICAgIGlmIChlc2NhcGVLZXlTdG9wc0RyYWdnaW5nT3B0aW9uUHJlc2VudCkge1xuICAgICAgd2luZG93Lm9mZktleURvd24odGhpcy5rZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0b3BEcmFnZ2luZ0hhbmRsZXIoKTtcbiAgfVxuXG4gIGtleURvd25IYW5kbGVyKGtleUNvZGUpIHtcbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgb25TdGFydERyYWdnaW5nLCBvblN0b3BEcmFnZ2luZywgb25EcmFnLCBkaXNhYmxlZCwgb3B0aW9ucyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBzdGFydERyYWdnaW5nSGFuZGxlciA9IG9uU3RhcnREcmFnZ2luZywgLy8vXG4gICAgICAgICAgc3RvcERyYWdnaW5nSGFuZGxlciA9IG9uU3RvcERyYWdnaW5nLCAvLy9cbiAgICAgICAgICBkcmFnSGFuZGxlciA9IG9uRHJhZzsgLy8vXG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBkaXNhYmxlZCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihTcGxpdHRlciwge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgaWdub3JlZFByb3BlcnRpZXM6IFtcbiAgICAnYmVmb3JlU2l6ZWFibGVFbGVtZW50JyxcbiAgICAnYWZ0ZXJTaXplYWJsZUVsZW1lbnQnLFxuICAgICdvblN0YXJ0RHJhZ2dpbmcnLFxuICAgICdvblN0b3BEcmFnZ2luZycsXG4gICAgJ29uRHJhZycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnb3B0aW9ucydcbiAgXVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iXX0=