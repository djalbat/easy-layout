'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element,
    Body = easyui.Body;

var body = new Body();

var Splitter = function (_Element) {
  _inherits(Splitter, _Element);

  function Splitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Splitter).call(this, selector));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

    _this.dragging = false;

    _this.disabled = false;

    _this.onMouseUp(_this.mouseUp.bind(_this));
    _this.onMouseDown(_this.mouseDown.bind(_this));
    _this.onMouseMove(_this.mouseMove.bind(_this));
    _this.onMouseOver(_this.mouseOver);
    _this.onMouseOut(_this.mouseOut);
    return _this;
  }

  _createClass(Splitter, [{
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
    key: 'onDragging',
    value: function onDragging(dragHandler) {
      this.dragHandler = dragHandler;
    }
  }, {
    key: 'startDragging',
    value: function startDragging() {
      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      this.dragging = false;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'onMouseDown',
    value: function onMouseDown(handler) {
      _get(Object.getPrototypeOf(Splitter.prototype), 'onMouseDown', this).call(this, returnMouseEventHandler(handler).bind(this));
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(handler) {
      _get(Object.getPrototypeOf(Splitter.prototype), 'onMouseOver', this).call(this, returnMouseEventHandler(handler).bind(this));
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(handler) {
      _get(Object.getPrototypeOf(Splitter.prototype), 'onMouseOut', this).call(this, returnMouseEventHandler(handler).bind(this));
    }
  }, {
    key: 'onMouseUp',
    value: function onMouseUp(handler) {
      body.onMouseUp(returnMouseEventHandler(handler).bind(this));
    } ///

  }, {
    key: 'onMouseMove',
    value: function onMouseMove(handler) {
      body.onMouseMove(returnMouseEventHandler(handler).bind(this));
    } ///

  }]);

  return Splitter;
}(Element);

function returnMouseEventHandler(handler) {
  return function (mouseTop, mouseLeft) {
    if (!this.disabled) {
      handler(mouseTop, mouseLeft);
    }
  };
}

module.exports = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zcGxpdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7SUFDVixPQUFPLE9BQU8sSUFBUDs7QUFFWCxJQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVA7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsZUFBaEMsRUFBaUQsV0FBakQsRUFBOEQ7MEJBRDFELFVBQzBEOzt1RUFEMUQscUJBRUksV0FEc0Q7O0FBRzVELFVBQUssUUFBTCxHQUFnQixRQUFoQixDQUg0RDtBQUk1RCxVQUFLLGVBQUwsR0FBdUIsZUFBdkIsQ0FKNEQ7QUFLNUQsVUFBSyxXQUFMLEdBQW1CLFdBQW5CLENBTDREOztBQU81RCxVQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FQNEQ7O0FBUzVELFVBQUssUUFBTCxHQUFnQixLQUFoQixDQVQ0RDs7QUFXNUQsVUFBSyxTQUFMLENBQWUsTUFBSyxPQUFMLENBQWEsSUFBYixPQUFmLEVBWDREO0FBWTVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLEVBWjREO0FBYTVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLEVBYjREO0FBYzVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBakIsQ0FkNEQ7QUFlNUQsVUFBSyxVQUFMLENBQWdCLE1BQUssUUFBTCxDQUFoQixDQWY0RDs7R0FBOUQ7O2VBREk7OzZCQW1CSztBQUNQLFdBQUssUUFBTCxHQUFnQixLQUFoQixDQURPOzs7OzhCQUlDO0FBQ1IsV0FBSyxRQUFMLEdBQWdCLElBQWhCLENBRFE7Ozs7K0JBSUMsYUFBYTtBQUN0QixXQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FEc0I7Ozs7b0NBSVI7QUFDZCxXQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FEYzs7OzttQ0FJRDtBQUNiLFdBQUssUUFBTCxHQUFnQixLQUFoQixDQURhOzs7O2lDQUlGO0FBQ1gsYUFBTyxLQUFLLFFBQUwsQ0FESTs7OztnQ0FJRCxTQUFTO0FBQUUsaUNBM0NuQixxREEyQ3FDLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxFQUFsQixDQUFGOzs7O2dDQUNULFNBQVM7QUFBRSxpQ0E1Q25CLHFEQTRDcUMsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLEVBQWxCLENBQUY7Ozs7K0JBQ1YsU0FBUztBQUFFLGlDQTdDbEIsb0RBNkNtQyx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsRUFBakIsQ0FBRjs7Ozs4QkFDVixTQUFTO0FBQUUsV0FBSyxTQUFMLENBQWUsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLENBQWYsRUFBRjs7Ozs7Z0NBQ1AsU0FBUztBQUFFLFdBQUssV0FBTCxDQUFpQix3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBakIsRUFBRjs7Ozs7U0EvQ2pCO0VBQWlCOztBQWtEdkIsU0FBUyx1QkFBVCxDQUFpQyxPQUFqQyxFQUEwQztBQUN4QyxTQUFPLFVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QjtBQUNuQyxRQUFJLENBQUMsS0FBSyxRQUFMLEVBQWU7QUFDbEIsY0FBUSxRQUFSLEVBQWtCLFNBQWxCLEVBRGtCO0tBQXBCO0dBREssQ0FEaUM7Q0FBMUM7O0FBUUEsT0FBTyxPQUFQLEdBQWlCLFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpO1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJhZ2dpbmcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBvbk1vdXNlRG93bihoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VEb3duKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU92ZXIocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VPdXQocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZVVwKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlVXAocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0gIC8vL1xuICBvbk1vdXNlTW92ZShoYW5kbGVyKSB7IGJvZHkub25Nb3VzZU1vdmUocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH0gLy8vXG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIl19
