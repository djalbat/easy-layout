'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cursor = require('../cursor'),
    Splitter = require('../splitter');

var HorizontalSplitter = function (_Splitter) {
  _inherits(HorizontalSplitter, _Splitter);

  function HorizontalSplitter(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    _classCallCheck(this, HorizontalSplitter);

    var _this = _possibleConstructorReturn(this, (HorizontalSplitter.__proto__ || Object.getPrototypeOf(HorizontalSplitter)).call(this, selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options));

    _this.setInitialState();
    return _this;
  }

  _createClass(HorizontalSplitter, [{
    key: 'mouseUp',
    value: function mouseUp() {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          this.stopDragging();
        }

        cursor.reset();
      }
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var dragging = this.isDragging();

        if (dragging) {
          var direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

          var sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

          var height = sizeableElementHeight; ///

          sizeableElement.setHeight(height);

          sizeableElementHeight = sizeableElement.getHeight(); ///

          dragHandler(sizeableElementHeight);
        }
      }
    }
  }, {
    key: 'mouseDown',
    value: function mouseDown(mouseTop, mouseLeft) {
      var disabled = this.isDisabled();

      if (!disabled) {
        var previousMouseTop = mouseTop,
            ///
        dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight; /// 

        this.setPreviousMouseTop(previousMouseTop);

        this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

        if (!dragging) {
          this.startDragging();
        }

        cursor.rowResize();
      }
    }
  }, {
    key: 'mouseOver',
    value: function mouseOver() {
      var disabled = this.isDisabled();

      if (!disabled) {
        cursor.rowResize();
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
  }, {
    key: 'getPreviousMouseTop',
    value: function getPreviousMouseTop() {
      return this.fromState('previousMouseTop');
    }
  }, {
    key: 'getPreviousSizeableElementHeight',
    value: function getPreviousSizeableElementHeight() {
      return this.fromState('previousSizeableElementHeight');
    }
  }, {
    key: 'setPreviousMouseTop',
    value: function setPreviousMouseTop(previousMouseTop) {
      this.updateState({
        previousMouseTop: previousMouseTop
      });
    }
  }, {
    key: 'setPreviousSizeableElementHeight',
    value: function setPreviousSizeableElementHeight(previousSizeableElementHeight) {
      this.updateState({
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }, {
    key: 'setInitialState',
    value: function setInitialState() {
      var previousMouseTop = null,
          previousSizeableElementHeight = null;

      this.setState({
        previousMouseTop: previousMouseTop,
        previousSizeableElementHeight: previousSizeableElementHeight
      });
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Splitter.fromProperties(HorizontalSplitter, properties);
    }
  }]);

  return HorizontalSplitter;
}(Splitter);

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zcGxpdHRlci9ob3Jpem9udGFsLmpzIl0sIm5hbWVzIjpbImN1cnNvciIsInJlcXVpcmUiLCJTcGxpdHRlciIsIkhvcml6b250YWxTcGxpdHRlciIsInNlbGVjdG9yIiwiYmVmb3JlU2l6ZWFibGVFbGVtZW50IiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJzdGFydERyYWdnaW5nSGFuZGxlciIsInN0b3BEcmFnZ2luZ0hhbmRsZXIiLCJkcmFnSGFuZGxlciIsIm9wdGlvbnMiLCJzZXRJbml0aWFsU3RhdGUiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJyZXNldCIsIm1vdXNlVG9wIiwibW91c2VMZWZ0IiwiZGlyZWN0aW9uIiwiZ2V0RGlyZWN0aW9uIiwiZ2V0RHJhZ0hhbmRsZXIiLCJzaXplYWJsZUVsZW1lbnQiLCJnZXRTaXplYWJsZUVsZW1lbnQiLCJwcmV2aW91c01vdXNlVG9wIiwiZ2V0UHJldmlvdXNNb3VzZVRvcCIsInByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiZ2V0UHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQiLCJyZWxhdGl2ZU1vdXNlVG9wIiwic2l6ZWFibGVFbGVtZW50SGVpZ2h0IiwiaGVpZ2h0Iiwic2V0SGVpZ2h0IiwiZ2V0SGVpZ2h0Iiwic2V0UHJldmlvdXNNb3VzZVRvcCIsInNldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0Iiwic3RhcnREcmFnZ2luZyIsInJvd1Jlc2l6ZSIsImZyb21TdGF0ZSIsInVwZGF0ZVN0YXRlIiwic2V0U3RhdGUiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxXQUFS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RCxXQUFLWSxXQUFMLENBQWlCO0FBQ2ZaO0FBRGUsT0FBakI7QUFHRDs7O3NDQUVpQjtBQUNoQixVQUFNRixtQkFBbUIsSUFBekI7QUFBQSxVQUNNRSxnQ0FBZ0MsSUFEdEM7O0FBR0EsV0FBS2EsUUFBTCxDQUFjO0FBQ1pmLDBDQURZO0FBRVpFO0FBRlksT0FBZDtBQUlEOzs7bUNBRXFCYyxVLEVBQVk7QUFBRSxhQUFPdkMsU0FBU3dDLGNBQVQsQ0FBd0J2QyxrQkFBeEIsRUFBNENzQyxVQUE1QyxDQUFQO0FBQWlFOzs7O0VBaEh0RXZDLFE7O0FBbUhqQ3lDLE9BQU9DLE1BQVAsQ0FBY3pDLGtCQUFkLEVBQWtDO0FBQ2hDMEMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFEYSxDQUFsQzs7QUFNQUMsT0FBT0MsT0FBUCxHQUFpQjdDLGtCQUFqQiIsImZpbGUiOiJob3Jpem9udGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjdXJzb3IgPSByZXF1aXJlKCcuLi9jdXJzb3InKSxcbiAgICAgIFNwbGl0dGVyID0gcmVxdWlyZSgnLi4vc3BsaXR0ZXInKTtcblxuY2xhc3MgSG9yaXpvbnRhbFNwbGl0dGVyIGV4dGVuZHMgU3BsaXR0ZXIge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgYmVmb3JlU2l6ZWFibGVFbGVtZW50LCBhZnRlclNpemVhYmxlRWxlbWVudCwgc3RhcnREcmFnZ2luZ0hhbmRsZXIsIHN0b3BEcmFnZ2luZ0hhbmRsZXIsIGRyYWdIYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IsIGJlZm9yZVNpemVhYmxlRWxlbWVudCwgYWZ0ZXJTaXplYWJsZUVsZW1lbnQsIHN0YXJ0RHJhZ2dpbmdIYW5kbGVyLCBzdG9wRHJhZ2dpbmdIYW5kbGVyLCBkcmFnSGFuZGxlciwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZSgpO1xuICB9XG5cbiAgbW91c2VVcCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlTW92ZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSB0aGlzLmdldERpcmVjdGlvbigpLFxuICAgICAgICAgICAgZHJhZ0hhbmRsZXIgPSB0aGlzLmdldERyYWdIYW5kbGVyKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZVRvcCA9IHRoaXMuZ2V0UHJldmlvdXNNb3VzZVRvcCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSB0aGlzLmdldFByZXZpb3VzU2l6ZWFibGVFbGVtZW50SGVpZ2h0KCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlVG9wID0gbW91c2VUb3AgLSBwcmV2aW91c01vdXNlVG9wO1xuXG4gICAgICAgIGxldCBzaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCAtIGRpcmVjdGlvbiAqIHJlbGF0aXZlTW91c2VUb3A7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50SGVpZ2h0OyAvLy9cblxuICAgICAgICBzaXplYWJsZUVsZW1lbnQuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpOyAgLy8vXG5cbiAgICAgICAgZHJhZ0hhbmRsZXIoc2l6ZWFibGVFbGVtZW50SGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3VzZURvd24obW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbW91c2VUb3AsICAvLy9cbiAgICAgICAgICAgIGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCksXG4gICAgICAgICAgICBzaXplYWJsZUVsZW1lbnQgPSB0aGlzLmdldFNpemVhYmxlRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVFbGVtZW50SGVpZ2h0ID0gc2l6ZWFibGVFbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHQgPSBzaXplYWJsZUVsZW1lbnRIZWlnaHQ7ICAvLy8gXG5cbiAgICAgIHRoaXMuc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKTtcblxuICAgICAgdGhpcy5zZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCk7XG5cbiAgICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgICB9XG5cbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU92ZXIoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcblxuICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgIGN1cnNvci5yb3dSZXNpemUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZU91dCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgaWYgKCFkaXNhYmxlZCkge1xuICAgICAgY3Vyc29yLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UHJldmlvdXNNb3VzZVRvcCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c01vdXNlVG9wJyk7IH1cblxuICBnZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZnJvbVN0YXRlKCdwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCcpOyB9XG5cbiAgc2V0UHJldmlvdXNNb3VzZVRvcChwcmV2aW91c01vdXNlVG9wKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBwcmV2aW91c01vdXNlVG9wXG4gICAgfSk7XG4gIH1cblxuICBzZXRQcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodChwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgcHJldmlvdXNTaXplYWJsZUVsZW1lbnRIZWlnaHRcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c01vdXNlVG9wID0gbnVsbCxcbiAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodCA9IG51bGw7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHByZXZpb3VzTW91c2VUb3AsXG4gICAgICBwcmV2aW91c1NpemVhYmxlRWxlbWVudEhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIFNwbGl0dGVyLmZyb21Qcm9wZXJ0aWVzKEhvcml6b250YWxTcGxpdHRlciwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihIb3Jpem9udGFsU3BsaXR0ZXIsIHtcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICdob3Jpem9udGFsIHNwbGl0dGVyJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBIb3Jpem9udGFsU3BsaXR0ZXI7XG4iXX0=