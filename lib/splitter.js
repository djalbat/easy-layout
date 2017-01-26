'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element,
    Body = easyui.Body;

var options = require('./options');

var body = new Body();

var ESCAPE_KEYCODE = 27,
    NAMESPACE = 'EasyUI-Layout';

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

    _this.options = {};
    return _this;
  }

  _createClass(Splitter, [{
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
    key: 'hasOption',
    value: function hasOption(option) {
      option = this.options[option] === true; ///

      return option;
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
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        body.on('keydown', this.keyDownHandler.bind(this), NAMESPACE);
      }

      this.dragging = true;
    }
  }, {
    key: 'stopDragging',
    value: function stopDragging() {
      var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

      if (escapeKeyStopsDragging) {
        body.off('keydown', NAMESPACE);
      }

      this.dragging = false;
    }
  }, {
    key: 'isDragging',
    value: function isDragging() {
      return this.dragging;
    }
  }, {
    key: 'keyDownHandler',
    value: function keyDownHandler(event) {
      var keyCode = event.keyCode || event.which;

      if (keyCode === ESCAPE_KEYCODE) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkJvZHkiLCJvcHRpb25zIiwiYm9keSIsIkVTQ0FQRV9LRVlDT0RFIiwiTkFNRVNQQUNFIiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJkcmFnZ2luZyIsImRpc2FibGVkIiwib25Nb3VzZVVwIiwibW91c2VVcCIsImJpbmQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXQiLCJvcHRpb24iLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nIiwiaGFzT3B0aW9uIiwiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9uIiwia2V5RG93bkhhbmRsZXIiLCJvZmYiLCJldmVudCIsImtleUNvZGUiLCJ3aGljaCIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJoYW5kbGVyIiwicmV0dXJuTW91c2VFdmVudEhhbmRsZXIiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFVBQVVGLE9BQU9FLE9BRHJCO0FBQUEsSUFFSUMsT0FBT0gsT0FBT0csSUFGbEI7O0FBSUEsSUFBSUMsVUFBVUgsUUFBUSxXQUFSLENBQWQ7O0FBRUEsSUFBSUksT0FBTyxJQUFJRixJQUFKLEVBQVg7O0FBRUEsSUFBTUcsaUJBQWlCLEVBQXZCO0FBQUEsSUFDTUMsWUFBWSxlQURsQjs7SUFHTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDQyxlQUFoQyxFQUFpREMsV0FBakQsRUFBOEQ7QUFBQTs7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akMsQ0FBc0MsSUFBdEMsQ0FBakI7QUFBK0Q7Ozs7RUF0RmpFZixPOztBQXlGdkIsU0FBU3FDLHVCQUFULENBQWlDRCxPQUFqQyxFQUEwQztBQUN4QyxTQUFPLFVBQVNFLFFBQVQsRUFBbUJDLFNBQW5CLEVBQThCO0FBQ25DLFFBQUksQ0FBQyxLQUFLM0IsUUFBVixFQUFvQjtBQUNsQndCLGNBQVFFLFFBQVIsRUFBa0JDLFNBQWxCO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUJuQyxRQUFqQiIsImZpbGUiOiJzcGxpdHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudCxcbiAgICBCb2R5ID0gZWFzeXVpLkJvZHk7XG5cbnZhciBvcHRpb25zID0gcmVxdWlyZSgnLi9vcHRpb25zJyk7XG5cbnZhciBib2R5ID0gbmV3IEJvZHkoKTtcblxuY29uc3QgRVNDQVBFX0tFWUNPREUgPSAyNyxcbiAgICAgIE5BTUVTUEFDRSA9ICdFYXN5VUktTGF5b3V0JztcblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5zaXR1YXRlZCA9IHNpdHVhdGVkO1xuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50ID0gc2l6ZWFibGVFbGVtZW50O1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uTW91c2VVcCh0aGlzLm1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXIpO1xuICAgIHRoaXMub25Nb3VzZU91dCh0aGlzLm1vdXNlT3V0KTtcblxuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIHRoaXMub3B0aW9uc1tvcHRpb25dID0gdHJ1ZTtcbiAgfVxuXG4gIHVuc2V0T3B0aW9uKG9wdGlvbikge1xuICAgIGRlbGV0ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XG4gIH1cblxuICBoYXNPcHRpb24ob3B0aW9uKSB7XG4gICAgb3B0aW9uID0gKHRoaXMub3B0aW9uc1tvcHRpb25dID09PSB0cnVlKTsgLy8vXG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9XG4gIFxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJhZyhkcmFnSGFuZGxlcikge1xuICAgIHRoaXMuZHJhZ0hhbmRsZXIgPSBkcmFnSGFuZGxlcjtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdmFyIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihvcHRpb25zLkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIGJvZHkub24oJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLmJpbmQodGhpcyksIE5BTUVTUEFDRSk7XG4gICAgfVxuXG4gICAgdGhpcy5kcmFnZ2luZyA9IHRydWU7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdmFyIGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcgPSB0aGlzLmhhc09wdGlvbihvcHRpb25zLkVTQ0FQRV9LRVlfU1RPUFNfRFJBR0dJTkcpO1xuXG4gICAgaWYgKGVzY2FwZUtleVN0b3BzRHJhZ2dpbmcpIHtcbiAgICAgIGJvZHkub2ZmKCdrZXlkb3duJywgTkFNRVNQQUNFKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmRyYWdnaW5nO1xuICB9XG5cbiAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICB2YXIga2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gRVNDQVBFX0tFWUNPREUpIHtcbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk1vdXNlVXAoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VVcChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlRG93bihoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VEb3duKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VPdmVyKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU92ZXIocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU91dChoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VPdXQocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU1vdmUoaGFuZGxlcikgeyBib2R5Lm9uTW91c2VNb3ZlKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpIH07XG59XG5cbmZ1bmN0aW9uIHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNwbGl0dGVyO1xuIl19