'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var VerticalSplitter = function (_Splitter) {
  _inherits(VerticalSplitter, _Splitter);

  function VerticalSplitter(selector, situated, sizeableElement, dragHandler) {
    _classCallCheck(this, VerticalSplitter);

    var _this = _possibleConstructorReturn(this, (VerticalSplitter.__proto__ || Object.getPrototypeOf(VerticalSplitter)).call(this, selector, situated, sizeableElement, dragHandler));

    _this.sizeableElementWidth = null;

    _this.mouseLeft = null;
    return _this;
  }

  _createClass(VerticalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();

        if (this.dragging) {
          this.stopDragging();
        }
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
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
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();

        this.mouseLeft = mouseLeft;

        this.sizeableElementWidth = this.sizeableElement.getWidth();

        var dragging = this.isDragging();

        if (!dragging) {
          this.startDragging();
        }
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.columnResize();
      }
    }
  }, {
    key: 'mouseOut',
    value: function mouseOut() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.reset();
      }
    }
  }]);

  return VerticalSplitter;
}(Splitter);

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi92ZXJ0aWNhbFNwbGl0dGVyLmpzIl0sIm5hbWVzIjpbImN1cnNvciIsInJlcXVpcmUiLCJTcGxpdHRlciIsIlZlcnRpY2FsU3BsaXR0ZXIiLCJzZWxlY3RvciIsInNpdHVhdGVkIiwic2l6ZWFibGVFbGVtZW50IiwiZHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnRXaWR0aCIsIm1vdXNlTGVmdCIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInJlc2V0IiwiZHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJtb3VzZVRvcCIsImlzRHJhZ2dpbmciLCJyZWxhdGl2ZU1vdXNlTGVmdCIsIndpZHRoIiwic2V0V2lkdGgiLCJnZXRXaWR0aCIsImNvbHVtblJlc2l6ZSIsInN0YXJ0RHJhZ2dpbmciLCJUT19USEVfTEVGVF9PRiIsIlRPX1RIRV9SSUdIVF9PRiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxVQUFSLENBQWI7QUFBQSxJQUNJQyxXQUFXRCxRQUFRLFlBQVIsQ0FEZjs7SUFHTUUsZ0I7OztBQUNKLDRCQUFZQyxRQUFaLEVBQXNCQyxRQUF0QixFQUFnQ0MsZUFBaEMsRUFBaURDLFdBQWpELEVBQThEO0FBQUE7O0FBQUEsb0lBQ3RESCxRQURzRCxFQUM1Q0MsUUFENEMsRUFDbENDLGVBRGtDLEVBQ2pCQyxXQURpQjs7QUFHNUQsVUFBS0Msb0JBQUwsR0FBNEIsSUFBNUI7O0FBRUEsVUFBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUw0RDtBQU03RDs7Ozs4QkFFUztBQUNSLFVBQUlDLFdBQVcsS0FBS0MsVUFBTCxFQUFmOztBQUVBLFVBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2JWLGVBQU9ZLEtBQVA7O0FBRUEsWUFBSSxLQUFLQyxRQUFULEVBQW1CO0FBQ2pCLGVBQUtDLFlBQUw7QUFDRDtBQUNGO0FBQ0Y7Ozs4QkFFU0MsUSxFQUFVTixTLEVBQVc7QUFDN0IsVUFBSUMsV0FBVyxLQUFLQyxVQUFMLEVBQWY7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYixZQUFJRyxXQUFXLEtBQUtHLFVBQUwsRUFBZjs7QUFFQSxZQUFJSCxRQUFKLEVBQWM7QUFDWixjQUFJSSxvQkFBb0JSLFlBQVksS0FBS0EsU0FBekM7QUFBQSxjQUNJUyxRQUFRLEtBQUtWLG9CQUFMLEdBQTRCLEtBQUtILFFBQUwsR0FBZ0JZLGlCQUR4RDs7QUFHQSxlQUFLWCxlQUFMLENBQXFCYSxRQUFyQixDQUE4QkQsS0FBOUI7O0FBRUEsY0FBSVYsdUJBQXVCLEtBQUtGLGVBQUwsQ0FBcUJjLFFBQXJCLEVBQTNCOztBQUVBLGNBQUksS0FBS2IsV0FBVCxFQUFzQjtBQUNwQixpQkFBS0EsV0FBTCxDQUFpQkMsb0JBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7Ozs4QkFFU08sUSxFQUFVTixTLEVBQVc7QUFDN0IsVUFBSUMsV0FBVyxLQUFLQyxVQUFMLEVBQWY7O0FBRUEsVUFBSSxDQUFDRCxRQUFMLEVBQWU7QUFDYlYsZUFBT3FCLFlBQVA7O0FBRUEsYUFBS1osU0FBTCxHQUFpQkEsU0FBakI7O0FBRUEsYUFBS0Qsb0JBQUwsR0FBNEIsS0FBS0YsZUFBTCxDQUFxQmMsUUFBckIsRUFBNUI7O0FBRUEsWUFBSVAsV0FBVyxLQUFLRyxVQUFMLEVBQWY7O0FBRUEsWUFBSSxDQUFDSCxRQUFMLEVBQWU7QUFDYixlQUFLUyxhQUFMO0FBQ0Q7QUFDRjtBQUNGOzs7Z0NBRVc7QUFDVixVQUFJWixXQUFXLEtBQUtDLFVBQUwsRUFBZjs7QUFFQSxVQUFJLENBQUNELFFBQUwsRUFBZTtBQUNiVixlQUFPcUIsWUFBUDtBQUNEO0FBQ0Y7OzsrQkFFVTtBQUNULFVBQUlYLFdBQVcsS0FBS0MsVUFBTCxFQUFmOztBQUVBLFVBQUksQ0FBQ0QsUUFBTCxFQUFlO0FBQ2JWLGVBQU9ZLEtBQVA7QUFDRDtBQUNGOzs7O0VBMUU0QlYsUTs7QUE2RS9CQyxpQkFBaUJFLFFBQWpCLEdBQTRCO0FBQzFCa0Isa0JBQWdCLENBQUMsQ0FEUztBQUUxQkMsbUJBQWlCLENBQUM7QUFGUSxDQUE1Qjs7QUFLQUMsT0FBT0MsT0FBUCxHQUFpQnZCLGdCQUFqQiIsImZpbGUiOiJ2ZXJ0aWNhbFNwbGl0dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3Vyc29yID0gcmVxdWlyZSgnLi9jdXJzb3InKSxcbiAgICBTcGxpdHRlciA9IHJlcXVpcmUoJy4vc3BsaXR0ZXInKTtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlciBleHRlbmRzIFNwbGl0dGVyIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIHNpdHVhdGVkLCBzaXplYWJsZUVsZW1lbnQsIGRyYWdIYW5kbGVyKTtcblxuICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50V2lkdGggPSBudWxsO1xuXG4gICAgdGhpcy5tb3VzZUxlZnQgPSBudWxsO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuXG4gICAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgdmFyIGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICB2YXIgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHZhciByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMubW91c2VMZWZ0LFxuICAgICAgICAgICAgd2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudFdpZHRoIC0gdGhpcy5zaXR1YXRlZCAqIHJlbGF0aXZlTW91c2VMZWZ0O1xuXG4gICAgICAgIHRoaXMuc2l6ZWFibGVFbGVtZW50LnNldFdpZHRoKHdpZHRoKTtcblxuICAgICAgICB2YXIgc2l6ZWFibGVFbGVtZW50V2lkdGggPSB0aGlzLnNpemVhYmxlRWxlbWVudC5nZXRXaWR0aCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmRyYWdIYW5kbGVyKSB7XG4gICAgICAgICAgdGhpcy5kcmFnSGFuZGxlcihzaXplYWJsZUVsZW1lbnRXaWR0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHZhciBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLm1vdXNlTGVmdCA9IG1vdXNlTGVmdDtcblxuICAgICAgdGhpcy5zaXplYWJsZUVsZW1lbnRXaWR0aCA9IHRoaXMuc2l6ZWFibGVFbGVtZW50LmdldFdpZHRoKCk7XG5cbiAgICAgIHZhciBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlT3ZlcigpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxufVxuXG5WZXJ0aWNhbFNwbGl0dGVyLnNpdHVhdGVkID0ge1xuICBUT19USEVfTEVGVF9PRjogKzEsXG4gIFRPX1RIRV9SSUdIVF9PRjogLTFcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVmVydGljYWxTcGxpdHRlcjtcbiJdfQ==