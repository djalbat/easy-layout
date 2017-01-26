'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easyui = require('easyui'),
    Element = easyui.Element,
    body = easyui.Body;

var options = require('./options');

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9zcGxpdHRlci5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsImJvZHkiLCJCb2R5Iiwib3B0aW9ucyIsIkVTQ0FQRV9LRVlDT0RFIiwiTkFNRVNQQUNFIiwiU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJkcmFnZ2luZyIsImRpc2FibGVkIiwib25Nb3VzZVVwIiwibW91c2VVcCIsImJpbmQiLCJvbk1vdXNlRG93biIsIm1vdXNlRG93biIsIm9uTW91c2VNb3ZlIiwibW91c2VNb3ZlIiwib25Nb3VzZU92ZXIiLCJtb3VzZU92ZXIiLCJvbk1vdXNlT3V0IiwibW91c2VPdXQiLCJvcHRpb24iLCJlc2NhcGVLZXlTdG9wc0RyYWdnaW5nIiwiaGFzT3B0aW9uIiwiRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyIsIm9uIiwia2V5RG93bkhhbmRsZXIiLCJvZmYiLCJldmVudCIsImtleUNvZGUiLCJ3aGljaCIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJoYW5kbGVyIiwicmV0dXJuTW91c2VFdmVudEhhbmRsZXIiLCJtb3VzZVRvcCIsIm1vdXNlTGVmdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLFVBQVVGLE9BQU9FLE9BRHJCO0FBQUEsSUFFSUMsT0FBT0gsT0FBT0ksSUFGbEI7O0FBSUEsSUFBSUMsVUFBVUosUUFBUSxXQUFSLENBQWQ7O0FBRUEsSUFBTUssaUJBQWlCLEVBQXZCO0FBQUEsSUFDTUMsWUFBWSxlQURsQjs7SUFHTUMsUTs7O0FBQ0osb0JBQVlDLFFBQVosRUFBc0JDLFFBQXRCLEVBQWdDQyxlQUFoQyxFQUFpREMsV0FBakQsRUFBOEQ7QUFBQTs7QUFBQSxvSEFDdERILFFBRHNEOztBQUc1RCxVQUFLQyxR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dEZqRWYsTzs7QUF5RnZCLFNBQVNxQyx1QkFBVCxDQUFpQ0QsT0FBakMsRUFBMEM7QUFDeEMsU0FBTyxVQUFTRSxRQUFULEVBQW1CQyxTQUFuQixFQUE4QjtBQUNuQyxRQUFJLENBQUMsS0FBSzNCLFFBQVYsRUFBb0I7QUFDbEJ3QixjQUFRRSxRQUFSLEVBQWtCQyxTQUFsQjtBQUNEO0FBQ0YsR0FKRDtBQUtEOztBQUVEQyxPQUFPQyxPQUFQLEdBQWlCbkMsUUFBakIiLCJmaWxlIjoic3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBFbGVtZW50ID0gZWFzeXVpLkVsZW1lbnQsXG4gICAgYm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgb3B0aW9ucyA9IHJlcXVpcmUoJy4vb3B0aW9ucycpO1xuXG5jb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3LFxuICAgICAgTkFNRVNQQUNFID0gJ0Vhc3lVSS1MYXlvdXQnO1xuXG5jbGFzcyBTcGxpdHRlciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgc2l0dWF0ZWQsIHNpemVhYmxlRWxlbWVudCwgZHJhZ0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnNpdHVhdGVkID0gc2l0dWF0ZWQ7XG4gICAgdGhpcy5zaXplYWJsZUVsZW1lbnQgPSBzaXplYWJsZUVsZW1lbnQ7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuXG4gICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub25Nb3VzZVVwKHRoaXMubW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9uTW91c2VEb3duKHRoaXMubW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMub25Nb3VzZU1vdmUodGhpcy5tb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcih0aGlzLm1vdXNlT3Zlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KHRoaXMubW91c2VPdXQpO1xuXG4gICAgdGhpcy5vcHRpb25zID0ge307XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25zW29wdGlvbl0gPSB0cnVlO1xuICB9XG5cbiAgdW5zZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgZGVsZXRlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcbiAgfVxuXG4gIGhhc09wdGlvbihvcHRpb24pIHtcbiAgICBvcHRpb24gPSAodGhpcy5vcHRpb25zW29wdGlvbl0gPT09IHRydWUpOyAvLy9cblxuICAgIHJldHVybiBvcHRpb247XG4gIH1cbiAgXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgb25EcmFnKGRyYWdIYW5kbGVyKSB7XG4gICAgdGhpcy5kcmFnSGFuZGxlciA9IGRyYWdIYW5kbGVyO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB2YXIgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgYm9keS5vbigna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIuYmluZCh0aGlzKSwgTkFNRVNQQUNFKTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB2YXIgZXNjYXBlS2V5U3RvcHNEcmFnZ2luZyA9IHRoaXMuaGFzT3B0aW9uKG9wdGlvbnMuRVNDQVBFX0tFWV9TVE9QU19EUkFHR0lORyk7XG5cbiAgICBpZiAoZXNjYXBlS2V5U3RvcHNEcmFnZ2luZykge1xuICAgICAgYm9keS5vZmYoJ2tleWRvd24nLCBOQU1FU1BBQ0UpO1xuICAgIH1cblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dpbmc7XG4gIH1cblxuICBrZXlEb3duSGFuZGxlcihldmVudCkge1xuICAgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEVfS0VZQ09ERSkge1xuICAgICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VVcChoYW5kbGVyKSB7IGJvZHkub25Nb3VzZVVwKHJldHVybk1vdXNlRXZlbnRIYW5kbGVyKGhhbmRsZXIpLmJpbmQodGhpcykpOyB9XG4gIG9uTW91c2VEb3duKGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZURvd24ocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSk7IH1cbiAgb25Nb3VzZU92ZXIoaGFuZGxlcikgeyBzdXBlci5vbk1vdXNlT3ZlcihyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlT3V0KGhhbmRsZXIpIHsgc3VwZXIub25Nb3VzZU91dChyZXR1cm5Nb3VzZUV2ZW50SGFuZGxlcihoYW5kbGVyKS5iaW5kKHRoaXMpKTsgfVxuICBvbk1vdXNlTW92ZShoYW5kbGVyKSB7IGJvZHkub25Nb3VzZU1vdmUocmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikuYmluZCh0aGlzKSkgfTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuTW91c2VFdmVudEhhbmRsZXIoaGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsaXR0ZXI7XG4iXX0=