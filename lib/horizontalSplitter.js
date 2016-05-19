'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalSplitter).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementHeight = null;

    _this.mouseTop = null;
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = this.sizeableElement.getHeight();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var dragging = this.isDragging();

      if (dragging) {
        var relativeMouseTop = mouseTop - this.mouseTop,
            height = this.sizeableElementHeight - this.situated * relativeMouseTop;

        this.sizeableElement.setHeight(height);

        var sizeableElementHeight = this.sizeableElement.getHeight();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      cursor.rowResize();
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      cursor.reset();
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9ob3Jpem9udGFsU3BsaXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJLFNBQVMsUUFBUSxVQUFSLENBQVQ7SUFDQSxXQUFXLFFBQVEsWUFBUixDQUFYOztJQUVFOzs7QUFDSixXQURJLGtCQUNKLENBQVksUUFBWixFQUFzQixRQUF0QixFQUFnQyxlQUFoQyxFQUFpRCxXQUFqRCxFQUE4RDswQkFEMUQsb0JBQzBEOzt1RUFEMUQsK0JBRUksVUFBVSxVQUFVLGlCQUFpQixjQURpQjs7QUFHNUQsVUFBSyxxQkFBTCxHQUE2QixJQUE3QixDQUg0RDs7QUFLNUQsVUFBSyxRQUFMLEdBQWdCLElBQWhCLENBTDREOztHQUE5RDs7ZUFESTs7OEJBU007QUFDUixhQUFPLEtBQVAsR0FEUTs7QUFHUixVQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLGFBQUssWUFBTCxHQURpQjtPQUFuQjs7Ozs4QkFLUSxVQUFVLFdBQVc7QUFDN0IsYUFBTyxTQUFQLEdBRDZCOztBQUc3QixXQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FINkI7O0FBSzdCLFdBQUsscUJBQUwsR0FBNkIsS0FBSyxlQUFMLENBQXFCLFNBQXJCLEVBQTdCLENBTDZCOztBQU83QixVQUFJLFdBQVcsS0FBSyxVQUFMLEVBQVgsQ0FQeUI7O0FBUzdCLFVBQUksQ0FBQyxRQUFELEVBQVc7QUFDYixhQUFLLGFBQUwsR0FEYTtPQUFmOzs7OzhCQUtRLFVBQVUsV0FBVztBQUM3QixVQUFJLFdBQVcsS0FBSyxVQUFMLEVBQVgsQ0FEeUI7O0FBRzdCLFVBQUksUUFBSixFQUFjO0FBQ1osWUFBSSxtQkFBbUIsV0FBVyxLQUFLLFFBQUw7WUFDOUIsU0FBUyxLQUFLLHFCQUFMLEdBQTZCLEtBQUssUUFBTCxHQUFnQixnQkFBaEIsQ0FGOUI7O0FBSVosYUFBSyxlQUFMLENBQXFCLFNBQXJCLENBQStCLE1BQS9CLEVBSlk7O0FBTVosWUFBSSx3QkFBd0IsS0FBSyxlQUFMLENBQXFCLFNBQXJCLEVBQXhCLENBTlE7O0FBUVosWUFBSSxLQUFLLFdBQUwsRUFBa0I7QUFDcEIsZUFBSyxXQUFMLENBQWlCLHFCQUFqQixFQURvQjtTQUF0QjtPQVJGOzs7O2dDQWNVO0FBQ1YsYUFBTyxTQUFQLEdBRFU7Ozs7K0JBSUQ7QUFDVCxhQUFPLEtBQVAsR0FEUzs7OztTQXBEUDtFQUEyQjs7QUF5RGpDLG1CQUFtQixRQUFuQixHQUE4QjtBQUM1QixTQUFPLENBQUMsQ0FBRDtBQUNQLFNBQU8sQ0FBQyxDQUFEO0NBRlQ7O0FBS0EsT0FBTyxPQUFQLEdBQWlCLGtCQUFqQiIsImZpbGUiOiJob3Jpem9udGFsU3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjdXJzb3IgPSByZXF1aXJlKCcuL2N1cnNvcicpLFxuICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBIb3Jpem9udGFsU3BsaXR0ZXIgZXh0ZW5kcyBTcGxpdHRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBzaXR1YXRlZCwgc2l6ZWFibGVFbGVtZW50LCBkcmFnSGFuZGxlcik7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcbiAgfVxuXG4gIG1vdXNlVXAoKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGN1cnNvci5yb3dSZXNpemUoKTtcblxuICAgIHRoaXMubW91c2VUb3AgPSBtb3VzZVRvcDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHZhciByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSB0aGlzLm1vdXNlVG9wLFxuICAgICAgICAgIGhlaWdodCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0IC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICB2YXIgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXQoKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cbn1cblxuSG9yaXpvbnRhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBBQk9WRTogKzEsXG4gIEJFTE9XOiAtMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iXX0=
