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

  function Splitter(selectorOr$Element) {
    _classCallCheck(this, Splitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Splitter).call(this, selectorOr$Element));

    _this.dragHandler = null;

    _this.dragging = false;

    _this.disabled = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zcGxpdHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsVUFBVSxPQUFPLE9BQVA7SUFDVixPQUFPLE9BQU8sSUFBUDs7QUFFWCxJQUFJLE9BQU8sSUFBSSxJQUFKLEVBQVA7O0lBRUU7OztBQUNKLFdBREksUUFDSixDQUFZLGtCQUFaLEVBQWdDOzBCQUQ1QixVQUM0Qjs7dUVBRDVCLHFCQUVJLHFCQUR3Qjs7QUFHOUIsVUFBSyxXQUFMLEdBQW1CLElBQW5CLENBSDhCOztBQUs5QixVQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FMOEI7O0FBTzlCLFVBQUssUUFBTCxHQUFnQixLQUFoQixDQVA4Qjs7R0FBaEM7O2VBREk7OzZCQVdLO0FBQ1AsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBRE87Ozs7OEJBSUM7QUFDUixXQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FEUTs7OzsrQkFJQyxhQUFhO0FBQ3RCLFdBQUssV0FBTCxHQUFtQixXQUFuQixDQURzQjs7OztvQ0FJUjtBQUNkLFdBQUssUUFBTCxHQUFnQixJQUFoQixDQURjOzs7O21DQUlEO0FBQ2IsV0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBRGE7Ozs7aUNBSUY7QUFDWCxhQUFPLEtBQUssUUFBTCxDQURJOzs7O2dDQUlELFNBQVM7QUFBRSxpQ0FuQ25CLHFEQW1DcUMsd0JBQXdCLE9BQXhCLEVBQWlDLElBQWpDLENBQXNDLElBQXRDLEVBQWxCLENBQUY7Ozs7Z0NBQ1QsU0FBUztBQUFFLGlDQXBDbkIscURBb0NxQyx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsRUFBbEIsQ0FBRjs7OzsrQkFDVixTQUFTO0FBQUUsaUNBckNsQixvREFxQ21DLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxFQUFqQixDQUFGOzs7OzhCQUNWLFNBQVM7QUFBRSxXQUFLLFNBQUwsQ0FBZSx3QkFBd0IsT0FBeEIsRUFBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBZixFQUFGOzs7OztnQ0FDUCxTQUFTO0FBQUUsV0FBSyxXQUFMLENBQWlCLHdCQUF3QixPQUF4QixFQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxDQUFqQixFQUFGOzs7OztTQXZDakI7RUFBaUI7O0FBMEN2QixTQUFTLHVCQUFULENBQWlDLE9BQWpDLEVBQTBDO0FBQ3hDLFNBQU8sVUFBUyxRQUFULEVBQW1CLFNBQW5CLEVBQThCO0FBQ25DLFFBQUksQ0FBQyxLQUFLLFFBQUwsRUFBZTtBQUNsQixjQUFRLFFBQVIsRUFBa0IsU0FBbEIsRUFEa0I7S0FBcEI7R0FESyxDQURpQztDQUExQzs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsUUFBakIiLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3IkRWxlbWVudCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3IkRWxlbWVudCk7XG5cbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gbnVsbDtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgb25EcmFnZ2luZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIG9uTW91c2VEb3duKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZURvd24ocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlT3ZlcihyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU91dChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlVXAoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VVcChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSAgLy8vXG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlTW92ZShyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfSAvLy9cbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iXX0=