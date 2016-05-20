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
    key: 'onDrag',
    value: function onDrag(dragHandler) {
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
    key: 'onMouseUp',
    value: function onMouseUp(handler) {
      body.onMouseUp(returnMouseEventHandler(handler).bind(this));
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
    key: 'onMouseMove',
    value: function onMouseMove(handler) {
      body.onMouseMove(returnMouseEventHandler(handler).bind(this));
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9zcGxpdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7SUFDVixPQUFPLE9BQU8sSUFBUDs7QUFFWCxJQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVA7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLFFBQVosRUFBc0IsUUFBdEIsRUFBZ0MsZUFBaEMsRUFBaUQsV0FBakQsRUFBOEQ7MEJBRDFELFVBQzBEOzt1RUFEMUQscUJBRUksV0FEc0Q7O0FBRzVELFVBQUssUUFBTCxHQUFnQixRQUFoQixDQUg0RDtBQUk1RCxVQUFLLGVBQUwsR0FBdUIsZUFBdkIsQ0FKNEQ7QUFLNUQsVUFBSyxXQUFMLEdBQW1CLFdBQW5CLENBTDREOztBQU81RCxVQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FQNEQ7O0FBUzVELFVBQUssUUFBTCxHQUFnQixLQUFoQixDQVQ0RDs7QUFXNUQsVUFBSyxTQUFMLENBQWUsTUFBSyxPQUFMLENBQWEsSUFBYixPQUFmLEVBWDREO0FBWTVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLEVBWjREO0FBYTVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQWpCLEVBYjREO0FBYzVELFVBQUssV0FBTCxDQUFpQixNQUFLLFNBQUwsQ0FBakIsQ0FkNEQ7QUFlNUQsVUFBSyxVQUFMLENBQWdCLE1BQUssUUFBTCxDQUFoQixDQWY0RDs7R0FBOUQ7O2VBREk7OzZCQW1CSztBQUNQLFdBQUssUUFBTCxHQUFnQixLQUFoQixDQURPOzs7OzhCQUlDO0FBQ1IsV0FBSyxRQUFMLEdBQWdCLElBQWhCLENBRFE7Ozs7MkJBSUgsYUFBYTtBQUNsQixXQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FEa0I7Ozs7b0NBSUo7QUFDZCxXQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FEYzs7OzttQ0FJRDtBQUNiLFdBQUssUUFBTCxHQUFnQixLQUFoQixDQURhOzs7O2lDQUlGO0FBQ1gsYUFBTyxLQUFLLFFBQUwsQ0FESTs7Ozs4QkFJSCxTQUFTO0FBQUUsV0FBSyxTQUFMLENBQWUsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLENBQWYsRUFBRjs7OztnQ0FDUCxTQUFTO0FBQUUsaUNBNUNuQixxREE0Q3FDLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxFQUFsQixDQUFGOzs7O2dDQUNULFNBQVM7QUFBRSxpQ0E3Q25CLHFEQTZDcUMsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLEVBQWxCLENBQUY7Ozs7K0JBQ1YsU0FBUztBQUFFLGlDQTlDbEIsb0RBOENtQyx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsRUFBakIsQ0FBRjs7OztnQ0FDUixTQUFTO0FBQUUsV0FBSyxXQUFMLENBQWlCLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxDQUFqQixFQUFGOzs7O1NBL0NqQjtFQUFpQjs7QUFrRHZCLFNBQVMsdUJBQVQsQ0FBaUMsT0FBakMsRUFBMEM7QUFDeEMsU0FBTyxVQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEI7QUFDbkMsUUFBSSxDQUFDLEtBQUssUUFBTCxFQUFlO0FBQ2xCLGNBQVEsUUFBUixFQUFrQixTQUFsQixFQURrQjtLQUFwQjtHQURLLENBRGlDO0NBQTFDOztBQVFBLE9BQU8sT0FBUCxHQUFpQixRQUFqQiIsImZpbGUiOiJzcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudCxcbiAgICBCb2R5ID0gZWFzeXVpLkJvZHk7XG5cbnZhciBib2R5ID0gbmV3IEJvZHkoKTtcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub25Nb3VzZVVwKHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBvbkRyYWcoZHJhZ0hhbmRsZXIpIHtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBvbk1vdXNlVXAoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VVcChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlRG93bihoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VEb3duKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU92ZXIocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VPdXQocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU1vdmUoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VNb3ZlKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpIH07XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIl19
