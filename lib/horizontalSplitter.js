'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selectorOr$Element, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalSplitter).call(this, selectorOr$Element));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

    _this.mouseTop = null;

    _this.sizeableElementHeight = null;

    _this.onMouseDown(function (mouseTop, mouseLeft) {
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = this.sizeableElement.getHeight();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }.bind(_this));

    _this.onMouseUp(function () {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }.bind(_this));

    _this.onMouseOver(function () {
      cursor.rowResize();
    });

    _this.onMouseOut(function () {
      cursor.reset();
    });

    _this.onMouseMove(function (mouseTop, mouseLeft) {
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
    }.bind(_this));
    return _this;
  }

  return HorizontalSplitter;
}(Splitter);

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ob3Jpem9udGFsU3BsaXR0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBRUEsSUFBSSxTQUFTLFFBQVEsVUFBUixDQUFUO0lBQ0EsV0FBVyxRQUFRLFlBQVIsQ0FBWDs7SUFFRTs7O0FBQ0osV0FESSxrQkFDSixDQUFZLGtCQUFaLEVBQWdDLFFBQWhDLEVBQTBDLGVBQTFDLEVBQTJELFdBQTNELEVBQXdFOzBCQURwRSxvQkFDb0U7O3VFQURwRSwrQkFFSSxxQkFEZ0U7O0FBR3RFLFVBQUssUUFBTCxHQUFnQixRQUFoQixDQUhzRTtBQUl0RSxVQUFLLGVBQUwsR0FBdUIsZUFBdkIsQ0FKc0U7QUFLdEUsVUFBSyxXQUFMLEdBQW1CLFdBQW5CLENBTHNFOztBQU90RSxVQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FQc0U7O0FBU3RFLFVBQUsscUJBQUwsR0FBNkIsSUFBN0IsQ0FUc0U7O0FBV3RFLFVBQUssV0FBTCxDQUFpQixVQUFTLFFBQVQsRUFBbUIsU0FBbkIsRUFBOEI7QUFDN0MsYUFBTyxTQUFQLEdBRDZDOztBQUc3QyxXQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FINkM7O0FBSzdDLFdBQUsscUJBQUwsR0FBNkIsS0FBSyxlQUFMLENBQXFCLFNBQXJCLEVBQTdCLENBTDZDOztBQU83QyxVQUFJLFdBQVcsS0FBSyxVQUFMLEVBQVgsQ0FQeUM7O0FBUzdDLFVBQUksQ0FBQyxRQUFELEVBQVc7QUFDYixhQUFLLGFBQUwsR0FEYTtPQUFmO0tBVGUsQ0FZZixJQVplLE9BQWpCLEVBWHNFOztBQXlCdEUsVUFBSyxTQUFMLENBQWUsWUFBVztBQUN4QixhQUFPLEtBQVAsR0FEd0I7O0FBR3hCLFVBQUksS0FBSyxRQUFMLEVBQWU7QUFDakIsYUFBSyxZQUFMLEdBRGlCO09BQW5CO0tBSGEsQ0FNYixJQU5hLE9BQWYsRUF6QnNFOztBQWlDdEUsVUFBSyxXQUFMLENBQWlCLFlBQVc7QUFDMUIsYUFBTyxTQUFQLEdBRDBCO0tBQVgsQ0FBakIsQ0FqQ3NFOztBQXFDdEUsVUFBSyxVQUFMLENBQWdCLFlBQVc7QUFDekIsYUFBTyxLQUFQLEdBRHlCO0tBQVgsQ0FBaEIsQ0FyQ3NFOztBQXlDdEUsVUFBSyxXQUFMLENBQWlCLFVBQVMsUUFBVCxFQUFtQixTQUFuQixFQUE4QjtBQUM3QyxVQUFJLFdBQVcsS0FBSyxVQUFMLEVBQVgsQ0FEeUM7O0FBRzdDLFVBQUksUUFBSixFQUFjO0FBQ1osWUFBSSxtQkFBbUIsV0FBVyxLQUFLLFFBQUw7WUFDOUIsU0FBUyxLQUFLLHFCQUFMLEdBQTZCLEtBQUssUUFBTCxHQUFnQixnQkFBaEIsQ0FGOUI7O0FBSVosYUFBSyxlQUFMLENBQXFCLFNBQXJCLENBQStCLE1BQS9CLEVBSlk7O0FBTVosWUFBSSx3QkFBd0IsS0FBSyxlQUFMLENBQXFCLFNBQXJCLEVBQXhCLENBTlE7O0FBUVosWUFBSSxLQUFLLFdBQUwsRUFBa0I7QUFDcEIsZUFBSyxXQUFMLENBQWlCLHFCQUFqQixFQURvQjtTQUF0QjtPQVJGO0tBSGUsQ0FlZixJQWZlLE9BQWpCLEVBekNzRTs7R0FBeEU7O1NBREk7RUFBMkI7O0FBNkRqQyxtQkFBbUIsUUFBbkIsR0FBOEI7QUFDNUIsU0FBTyxDQUFDLENBQUQ7QUFDUCxTQUFPLENBQUMsQ0FBRDtDQUZUOztBQUtBLE9BQU8sT0FBUCxHQUFpQixrQkFBakIiLCJmaWxlIjoiaG9yaXpvbnRhbFNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXInKTtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLm1vdXNlVG9wID0gbnVsbDtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gbnVsbDtcblxuICAgIHRoaXMub25Nb3VzZURvd24oZnVuY3Rpb24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlVG9wID0gbW91c2VUb3A7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0SGVpZ2h0KCk7XG5cbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VVcChmdW5jdGlvbigpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLm9uTW91c2VPdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgY3Vyc29yLnJvd1Jlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uTW91c2VNb3ZlKGZ1bmN0aW9uKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgICAgdmFyIHJlbGF0aXZlTW91c2VUb3AgPSBtb3VzZVRvcCAtIHRoaXMubW91c2VUb3AsXG4gICAgICAgICAgICBoZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudEhlaWdodCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlVG9wO1xuXG4gICAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAgIHZhciBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn1cblxuSG9yaXpvbnRhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBBQk9WRTogKzEsXG4gIEJFTE9XOiAtMVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iXX0=