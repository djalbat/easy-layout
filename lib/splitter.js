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

    var _this = _possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).call(this, selector));

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
      _get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'onMouseDown', this).call(this, returnMouseEventHandler(handler).bind(this));
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(handler) {
      _get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'onMouseOver', this).call(this, returnMouseEventHandler(handler).bind(this));
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut(handler) {
      _get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'onMouseOut', this).call(this, returnMouseEventHandler(handler).bind(this));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkJvZHkiLCJib2R5IiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJkcmFnZ2luZyIsImRpc2FibGVkIiwib25Nb3VzZVVwIiwibW91c2VVcCIsImJpbmQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXQiLCJoYW5kbGVyIiwicmV0dXJuTW91c2VFdmVudEhhbmRsZXIiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFVBQVVGLE9BQU9FLE9BRHJCO0FBQUEsSUFFSUMsT0FBT0gsT0FBT0csSUFGbEI7O0FBSUEsSUFBSUMsT0FBTyxJQUFJRCxJQUFKLEVBQVg7O0lBRU1FLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsb0hBQ3RESCxRQURzRDs7QUFHNUQsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFVBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLEtBQWhCOztBQUVBLFVBQUtDLFNBQUwsQ0FBZSxNQUFLQyxPQUFMLENBQWFDLElBQWIsT0FBZjtBQUNBLFVBQUtDLFdBQUwsQ0FBaUIsTUFBS0MsU0FBTCxDQUFlRixJQUFmLE9BQWpCO0FBQ0EsVUFBS0csV0FBTCxDQUFpQixNQUFLQyxTQUFMLENBQWVKLElBQWYsT0FBakI7QUFDQSxVQUFLSyxXQUFMLENBQWlCLE1BQUtDLFNBQXRCO0FBQ0EsVUFBS0MsVUFBTCxDQUFnQixNQUFLQyxRQUFyQjtBQWQ0RDtBQWU3RDs7Ozs2QkFFUTtBQUNQLFdBQUtYLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7OzhCQUVTO0FBQ1IsV0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7MkJBRU1GLFcsRUFBYTtBQUNsQixXQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOzs7b0NBRWU7QUFDZCxXQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7OzttQ0FFYztBQUNiLFdBQUtBLFFBQUwsR0FBZ0IsS0FBaEI7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxRQUFaO0FBQ0Q7Ozs4QkFFU2EsTyxFQUFTO0FBQUVuQixXQUFLUSxTQUFMLENBQWVZLHdCQUF3QkQsT0FBeEIsRUFBaUNULElBQWpDLENBQXNDLElBQXRDLENBQWY7QUFBOEQ7OztnQ0FDdkVTLE8sRUFBUztBQUFFLHNIQUFrQkMsd0JBQXdCRCxPQUF4QixFQUFpQ1QsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBbEI7QUFBaUU7OztnQ0FDNUVTLE8sRUFBUztBQUFFLHNIQUFrQkMsd0JBQXdCRCxPQUF4QixFQUFpQ1QsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBbEI7QUFBaUU7OzsrQkFDN0VTLE8sRUFBUztBQUFFLHFIQUFpQkMsd0JBQXdCRCxPQUF4QixFQUFpQ1QsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBakI7QUFBZ0U7OztnQ0FDMUVTLE8sRUFBUztBQUFFbkIsV0FBS2EsV0FBTCxDQUFpQk8sd0JBQXdCRCxPQUF4QixFQUFpQ1QsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBakI7QUFBK0Q7Ozs7RUE5Q2pFWixPOztBQWlEdkIsU0FBU3NCLHVCQUFULENBQWlDRCxPQUFqQyxFQUEwQztBQUN4QyxTQUFPLFVBQVNFLFFBQVQsRUFBbUJDLFNBQW5CLEVBQThCO0FBQ25DLFFBQUksQ0FBQyxLQUFLZixRQUFWLEVBQW9CO0FBQ2xCWSxjQUFRRSxRQUFSLEVBQWtCQyxTQUFsQjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCdkIsUUFBakIiLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmNsYXNzIFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbk1vdXNlVXAodGhpcy5tb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZURvd24odGhpcy5tb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKHRoaXMubW91c2VPdmVyKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2luZztcbiAgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IGJvZHkub25Nb3VzZVVwKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VEb3duKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZURvd24ocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlT3ZlcihyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU91dChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlTW92ZShoYW5kbGVyKSB7IGJvZHkub25Nb3VzZU1vdmUocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSkgfTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iXX0=