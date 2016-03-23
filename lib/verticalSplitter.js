'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selectorOr$Element, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VerticalSplitter).call(this, selectorOr$Element));

    _this.situated = situated;
    _this.sizeableElement = sizeableElement;
    _this.dragHandler = dragHandler;

    _this.mouseLeft = null;

    _this.sizeableElementWidth = null;

    _this.onMouseDown(function (mouseTop, mouseLeft) {
      cursor.columnResize();

      this.mouseLeft = mouseLeft;

      this.sizeableElementWidth = this.sizeableElement.getWidth();

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
      cursor.columnResize();
    });

    _this.onMouseOut(function () {
      cursor.reset();
    });

    _this.onMouseMove(function (mouseTop, mouseLeft) {
      var dragging = this.isDragging();

      if (dragging) {
        var relativeMouseLeft = mouseLeft - this.mouseLeft,
            width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

        this.sizeableElement.setWidth(width);

        var sizeableElementWidth = this.sizeableElement.getWidth();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementWidth);
        }
      }
    }.bind(_this));
    return _this;
  }

  return VerticalSplitter;
}(Splitter);

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZXJ0aWNhbFNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQUksU0FBUyxRQUFRLFVBQVIsQ0FBVDtJQUNBLFdBQVcsUUFBUSxZQUFSLENBQVg7O0lBRUU7OztBQUNKLFdBREksZ0JBQ0osQ0FBWSxrQkFBWixFQUFnQyxRQUFoQyxFQUEwQyxlQUExQyxFQUEyRCxXQUEzRCxFQUF3RTswQkFEcEUsa0JBQ29FOzt1RUFEcEUsNkJBRUkscUJBRGdFOztBQUd0RSxVQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FIc0U7QUFJdEUsVUFBSyxlQUFMLEdBQXVCLGVBQXZCLENBSnNFO0FBS3RFLFVBQUssV0FBTCxHQUFtQixXQUFuQixDQUxzRTs7QUFPdEUsVUFBSyxTQUFMLEdBQWlCLElBQWpCLENBUHNFOztBQVN0RSxVQUFLLG9CQUFMLEdBQTRCLElBQTVCLENBVHNFOztBQVd0RSxVQUFLLFdBQUwsQ0FBaUIsVUFBVSxRQUFWLEVBQW9CLFNBQXBCLEVBQStCO0FBQzlDLGFBQU8sWUFBUCxHQUQ4Qzs7QUFHOUMsV0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBSDhDOztBQUs5QyxXQUFLLG9CQUFMLEdBQTRCLEtBQUssZUFBTCxDQUFxQixRQUFyQixFQUE1QixDQUw4Qzs7QUFPOUMsVUFBSSxXQUFXLEtBQUssVUFBTCxFQUFYLENBUDBDOztBQVM5QyxVQUFJLENBQUMsUUFBRCxFQUFXO0FBQ2IsYUFBSyxhQUFMLEdBRGE7T0FBZjtLQVRlLENBWWYsSUFaZSxPQUFqQixFQVhzRTs7QUF5QnRFLFVBQUssU0FBTCxDQUFlLFlBQVk7QUFDekIsYUFBTyxLQUFQLEdBRHlCOztBQUd6QixVQUFJLEtBQUssUUFBTCxFQUFlO0FBQ2pCLGFBQUssWUFBTCxHQURpQjtPQUFuQjtLQUhhLENBTWIsSUFOYSxPQUFmLEVBekJzRTs7QUFpQ3RFLFVBQUssV0FBTCxDQUFpQixZQUFZO0FBQzNCLGFBQU8sWUFBUCxHQUQyQjtLQUFaLENBQWpCLENBakNzRTs7QUFxQ3RFLFVBQUssVUFBTCxDQUFnQixZQUFZO0FBQzFCLGFBQU8sS0FBUCxHQUQwQjtLQUFaLENBQWhCLENBckNzRTs7QUF5Q3RFLFVBQUssV0FBTCxDQUFpQixVQUFVLFFBQVYsRUFBb0IsU0FBcEIsRUFBK0I7QUFDOUMsVUFBSSxXQUFXLEtBQUssVUFBTCxFQUFYLENBRDBDOztBQUc5QyxVQUFJLFFBQUosRUFBYztBQUNaLFlBQUksb0JBQW9CLFlBQVksS0FBSyxTQUFMO1lBQ2hDLFFBQVEsS0FBSyxvQkFBTCxHQUE0QixLQUFLLFFBQUwsR0FBZ0IsaUJBQWhCLENBRjVCOztBQUlaLGFBQUssZUFBTCxDQUFxQixRQUFyQixDQUE4QixLQUE5QixFQUpZOztBQU1aLFlBQUksdUJBQXVCLEtBQUssZUFBTCxDQUFxQixRQUFyQixFQUF2QixDQU5ROztBQVFaLFlBQUksS0FBSyxXQUFMLEVBQWtCO0FBQ3BCLGVBQUssV0FBTCxDQUFpQixvQkFBakIsRUFEb0I7U0FBdEI7T0FSRjtLQUhlLENBZWYsSUFmZSxPQUFqQixFQXpDc0U7O0dBQXhFOztTQURJO0VBQXlCOztBQTZEL0IsaUJBQWlCLFFBQWpCLEdBQTRCO0FBQzFCLGtCQUFnQixDQUFDLENBQUQ7QUFDaEIsbUJBQWlCLENBQUMsQ0FBRDtDQUZuQjs7QUFLQSxPQUFPLE9BQVAsR0FBaUIsZ0JBQWpCIiwiZmlsZSI6InZlcnRpY2FsU3BsaXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBjdXJzb3IgPSByZXF1aXJlKCcuL2N1cnNvcicpLFxuICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi9zcGxpdHRlcicpO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yJEVsZW1lbnQsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPciRFbGVtZW50KTtcblxuICAgIHRoaXMuc2l0dWF0ZWQgPSBzaXR1YXRlZDtcbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudCA9IHNpemVhYmxlRWxlbWVudDtcbiAgICB0aGlzLmRyYWdIYW5kbGVyID0gZHJhZ0hhbmRsZXI7XG5cbiAgICB0aGlzLm1vdXNlTGVmdCA9IG51bGw7XG5cbiAgICB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoID0gbnVsbDtcblxuICAgIHRoaXMub25Nb3VzZURvd24oZnVuY3Rpb24gKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcblxuICAgICAgdGhpcy5tb3VzZUxlZnQgPSBtb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5vbk1vdXNlVXAoZnVuY3Rpb24gKCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG5cbiAgICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMub25Nb3VzZU92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbk1vdXNlT3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbk1vdXNlTW92ZShmdW5jdGlvbiAobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgICAgdmFyIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICB2YXIgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLm1vdXNlTGVmdCxcbiAgICAgICAgICAgIHdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCAtIHRoaXMuc2l0dWF0ZWQgKiByZWxhdGl2ZU1vdXNlTGVmdDtcblxuICAgICAgICB0aGlzLnNpemVhYmxlRWxlbWVudC5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICAgICAgdmFyIHNpemVhYmxlRWxlbWVudFdpZHRoID0gdGhpcy5zaXplYWJsZUVsZW1lbnQuZ2V0V2lkdGgoKTtcblxuICAgICAgICBpZiAodGhpcy5kcmFnSGFuZGxlcikge1xuICAgICAgICAgIHRoaXMuZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50V2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5WZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBUT19USEVfTEVGVF9PRjogKzEsXG4gIFRPX1RIRV9SSUdIVF9PRjogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiJdfQ==