'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Body = easyui.Body;

var body = new Body(),
    previousCursor; ///

var cursor = function () {
  function cursor() {
    _classCallCheck(this, cursor);
  }

  _createClass(cursor, null, [{
    key: 'columnResize',
    value: function columnResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'col-resize') {
        previousCursor = currentCursor;

        this.setCursor('col-resize');
      }
    }
  }, {
    key: 'rowResize',
    value: function rowResize() {
      var currentCursor = this.getCurrentCursor();

      if (currentCursor !== 'row-resize') {
        previousCursor = currentCursor;

        this.setCursor('row-resize');
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setCursor(previousCursor); ///
    }
  }, {
    key: 'getCurrentCursor',
    value: function getCurrentCursor() {
      var currentCursor = body.css('cursor'); ///

      return currentCursor || 'auto'; ///
    }
  }, {
    key: 'setCursor',
    value: function setCursor(cursor) {
      var css = {
        cursor: cursor
      };

      body.css(css);
    }
  }]);

  return cursor;
}();

module.exports = cursor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXJzb3IuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkJvZHkiLCJib2R5IiwicHJldmlvdXNDdXJzb3IiLCJjdXJzb3IiLCJjdXJyZW50Q3Vyc29yIiwiZ2V0Q3VycmVudEN1cnNvciIsInNldEN1cnNvciIsImNzcyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLE9BQU9GLE9BQU9FLElBRGxCOztBQUdBLElBQUlDLE9BQU8sSUFBSUQsSUFBSixFQUFYO0FBQUEsSUFDSUUsY0FESixDLENBQ3FCOztJQUVmQyxNOzs7Ozs7O21DQUNrQjtBQUNwQixVQUFJQyxnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBcEI7O0FBRUEsVUFBSUQsa0JBQWtCLFlBQXRCLEVBQW9DO0FBQ2xDRix5QkFBaUJFLGFBQWpCOztBQUVBLGFBQUtFLFNBQUwsQ0FBZSxZQUFmO0FBQ0Q7QUFDRjs7O2dDQUVrQjtBQUNqQixVQUFJRixnQkFBZ0IsS0FBS0MsZ0JBQUwsRUFBcEI7O0FBRUEsVUFBSUQsa0JBQWtCLFlBQXRCLEVBQW9DO0FBQ2xDRix5QkFBaUJFLGFBQWpCOztBQUVBLGFBQUtFLFNBQUwsQ0FBZSxZQUFmO0FBQ0Q7QUFDRjs7OzRCQUVjO0FBQ2IsV0FBS0EsU0FBTCxDQUFlSixjQUFmLEVBRGEsQ0FDbUI7QUFDakM7Ozt1Q0FFeUI7QUFDeEIsVUFBSUUsZ0JBQWdCSCxLQUFLTSxHQUFMLENBQVMsUUFBVCxDQUFwQixDQUR3QixDQUNpQjs7QUFFekMsYUFBT0gsaUJBQWlCLE1BQXhCLENBSHdCLENBR1E7QUFDakM7Ozs4QkFFZ0JELE0sRUFBUTtBQUN2QixVQUFJSSxNQUFNO0FBQ1JKLGdCQUFRQTtBQURBLE9BQVY7O0FBSUFGLFdBQUtNLEdBQUwsQ0FBU0EsR0FBVDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoiY3Vyc29yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxuY2xhc3MgY3Vyc29yIHtcbiAgc3RhdGljIGNvbHVtblJlc2l6ZSgpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByb3dSZXNpemUoKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnJlbnRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbiAgfVxuXG4gIHN0YXRpYyBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoJ2N1cnNvcicpOyAgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudEN1cnNvciB8fCAnYXV0byc7IC8vL1xuICB9XG5cbiAgc3RhdGljIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgICB2YXIgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiJdfQ==