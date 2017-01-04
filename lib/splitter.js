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
        console.log('keydown');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIkJvZHkiLCJvcHRpb25zIiwiYm9keSIsIkVTQ0FQRV9LRVlDT0RFIiwiTkFNRVNQQUNFIiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJkcmFnZ2luZyIsImRpc2FibGVkIiwib25Nb3VzZVVwIiwibW91c2VVcCIsImJpbmQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXQiLCJvcHRpb24iLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nIiwiaGFzT3B0aW9uIiwiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9uIiwia2V5RG93bkhhbmRsZXIiLCJvZmYiLCJldmVudCIsImtleUNvZGUiLCJ3aGljaCIsImNvbnNvbGUiLCJsb2ciLCJpc0RyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiaGFuZGxlciIsInJldHVybk1vdXNlRXZlbnRIYW5kbGVyIiwibW91c2VUb3AiLCJtb3VzZUxlZnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFBQSxJQUNJQyxVQUFVRixPQUFPRSxPQURyQjtBQUFBLElBRUlDLE9BQU9ILE9BQU9HLElBRmxCOztBQUlBLElBQUlDLFVBQVVILFFBQVEsV0FBUixDQUFkOztBQUVBLElBQUlJLE9BQU8sSUFBSUYsSUFBSixFQUFYOztBQUVBLElBQU1HLGlCQUFpQixFQUF2QjtBQUFBLElBQ01DLFlBQVksZUFEbEI7O0lBR01DLFE7OztBQUNKLG9CQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdB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bkMsV0FBS2UsV0FBTCxDQUFpQnFCLHdCQUF3QkQsT0FBeEIsRUFBaUN2QixJQUFqQyxDQUFzQyxJQUF0QyxDQUFqQjtBQUErRDs7OztFQXhGakVmLE87O0FBMkZ2QixTQUFTdUMsdUJBQVQsQ0FBaUNELE9BQWpDLEVBQTBDO0FBQ3hDLFNBQU8sVUFBU0UsUUFBVCxFQUFtQkMsU0FBbkIsRUFBOEI7QUFDbkMsUUFBSSxDQUFDLEtBQUs3QixRQUFWLEVBQW9CO0FBQ2xCMEIsY0FBUUUsUUFBUixFQUFrQkMsU0FBbEI7QUFDRDtBQUNGLEdBSkQ7QUFLRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQnJDLFFBQWpCIiwiZmlsZSI6InNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50LFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIG9wdGlvbnMgPSByZXF1aXJlKCcuL29wdGlvbnMnKTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3LFxuICAgICAgTkFNRVNQQUNFID0gJ0Vhc3lVSS1MYXlvdXQnO1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub25Nb3VzZVVwKHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGhhc09wdGlvbihvcHRpb24pIHtcbiAgICBvcHRpb24gPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB2YXIgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgYm9keS5vbigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgTkFNRVNQQUNFKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB2YXIgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgYm9keS5vZmYoJ2tleWRvd24nLCBOQU1FU1BBQ0UpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgY29uc29sZS5sb2coJ2tleWRvd24nKVxuICAgICAgXG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZVVwKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlVXAocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZURvd24oaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlRG93bihyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlT3ZlcihoYW5kbGVyKSB7IHN1cGVyLm9uTW91c2VPdmVyKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VPdXQoaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlT3V0KHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VNb3ZlKGhhbmRsZXIpIHsgYm9keS5vbk1vdXNlTW92ZShyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKSB9O1xufVxuXG5mdW5jdGlvbiByZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcGxpdHRlcjtcbiJdfQ==