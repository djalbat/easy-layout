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

  function Splitter(selectorOr$Element, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Splitter).call(this, selectorOr$Element));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7SUFDVixPQUFPLE9BQU8sSUFBUDs7QUFFWCxJQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVA7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLGtCQUFaLEVBQWdDLFFBQWhDLEVBQTBDLGVBQTFDLEVBQTJELFdBQTNELEVBQXdFOzBCQURwRSxVQUNvRTs7dUVBRHBFLHFCQUVJLHFCQURnRTs7QUFHdEUsVUFBSyxRQUFMLEdBQWdCLFFBQWhCLENBSHNFO0FBSXRFLFVBQUssZUFBTCxHQUF1QixlQUF2QixDQUpzRTtBQUt0RSxVQUFLLFdBQUwsR0FBbUIsV0FBbkIsQ0FMc0U7O0FBT3RFLFVBQUssUUFBTCxHQUFnQixLQUFoQixDQVBzRTs7QUFTdEUsVUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBVHNFOztBQVd0RSxVQUFLLFNBQUwsQ0FBZSxNQUFLLE9BQUwsQ0FBYSxJQUFiLE9BQWYsRUFYc0U7QUFZdEUsVUFBSyxXQUFMLENBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsRUFac0U7QUFhdEUsVUFBSyxXQUFMLENBQWlCLE1BQUssU0FBTCxDQUFlLElBQWYsT0FBakIsRUFic0U7QUFjdEUsVUFBSyxXQUFMLENBQWlCLE1BQUssU0FBTCxDQUFqQixDQWRzRTtBQWV0RSxVQUFLLFVBQUwsQ0FBZ0IsTUFBSyxRQUFMLENBQWhCLENBZnNFOztHQUF4RTs7ZUFESTs7NkJBbUJLO0FBQ1AsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBRE87Ozs7OEJBSUM7QUFDUixXQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FEUTs7OzsrQkFJQyxhQUFhO0FBQ3RCLFdBQUssV0FBTCxHQUFtQixXQUFuQixDQURzQjs7OztvQ0FJUjtBQUNkLFdBQUssUUFBTCxHQUFnQixJQUFoQixDQURjOzs7O21DQUlEO0FBQ2IsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBRGE7Ozs7aUNBSUY7QUFDWCxhQUFPLEtBQUssUUFBTCxDQURJOzs7O2dDQUlELFNBQVM7QUFBRSxpQ0EzQ25CLHFEQTJDcUMsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLEVBQWxCLENBQUY7Ozs7Z0NBQ1QsU0FBUztBQUFFLGlDQTVDbkIscURBNENxQyx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsRUFBbEIsQ0FBRjs7OzsrQkFDVixTQUFTO0FBQUUsaUNBN0NsQixvREE2Q21DLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxFQUFqQixDQUFGOzs7OzhCQUNWLFNBQVM7QUFBRSxXQUFLLFNBQUwsQ0FBZSx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBZixFQUFGOzs7OztnQ0FDUCxTQUFTO0FBQUUsV0FBSyxXQUFMLENBQWlCLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxDQUFqQixFQUFGOzs7OztTQS9DakI7RUFBaUI7O0FBa0R2QixTQUFTLHVCQUFULENBQWlDLE9BQWpDLEVBQTBDO0FBQ3hDLFNBQU8sVUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCO0FBQ25DLFFBQUksQ0FBQyxLQUFLLFFBQUwsRUFBZTtBQUNsQixjQUFRLFFBQVIsRUFBa0IsU0FBbEIsRUFEa0I7S0FBcEI7R0FESyxDQURpQztDQUExQzs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yJEVsZW1lbnQpO1xuXG4gICAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub25Nb3VzZVVwKHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICBvbkRyYWdnaW5nKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAgb25Nb3VzZURvd24oaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlRG93bihyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlT3ZlcihoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VPdmVyKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VPdXQoaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlT3V0KHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IGJvZHkub25Nb3VzZVVwKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9ICAvLy9cbiAgb25Nb3VzZU1vdmUoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VNb3ZlKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9IC8vL1xufVxuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiJdfQ==