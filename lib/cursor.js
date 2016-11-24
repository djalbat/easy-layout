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
      var currentCursor = this.getCursor();

      if (currentCursor !== 'col-resize') {
        previousCursor = currentCursor;

        this.setCursor('col-resize');
      }
    }
  }, {
    key: 'rowResize',
    value: function rowResize() {
      var currentCursor = this.getCursor();

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
    key: 'getCursor',
    value: function getCursor() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXJzb3IuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkJvZHkiLCJib2R5IiwicHJldmlvdXNDdXJzb3IiLCJjdXJzb3IiLCJjdXJyZW50Q3Vyc29yIiwiZ2V0Q3Vyc29yIiwic2V0Q3Vyc29yIiwiY3NzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQUEsSUFDSUMsT0FBT0YsT0FBT0UsSUFEbEI7O0FBR0EsSUFBSUMsT0FBTyxJQUFJRCxJQUFKLEVBQVg7QUFBQSxJQUNJRSxjQURKLEMsQ0FDcUI7O0lBRWZDLE07Ozs7Ozs7bUNBQ2tCO0FBQ3BCLFVBQUlDLGdCQUFnQixLQUFLQyxTQUFMLEVBQXBCOztBQUVBLFVBQUlELGtCQUFrQixZQUF0QixFQUFvQztBQUNsQ0YseUJBQWlCRSxhQUFqQjs7QUFFQSxhQUFLRSxTQUFMLENBQWUsWUFBZjtBQUNEO0FBQ0Y7OztnQ0FFa0I7QUFDakIsVUFBSUYsZ0JBQWdCLEtBQUtDLFNBQUwsRUFBcEI7O0FBRUEsVUFBSUQsa0JBQWtCLFlBQXRCLEVBQW9DO0FBQ2xDRix5QkFBaUJFLGFBQWpCOztBQUVBLGFBQUtFLFNBQUwsQ0FBZSxZQUFmO0FBQ0Q7QUFDRjs7OzRCQUVjO0FBQ2IsV0FBS0EsU0FBTCxDQUFlSixjQUFmLEVBRGEsQ0FDbUI7QUFDakM7OztnQ0FFa0I7QUFDakIsVUFBSUUsZ0JBQWdCSCxLQUFLTSxHQUFMLENBQVMsUUFBVCxDQUFwQixDQURpQixDQUN3Qjs7QUFFekMsYUFBT0gsaUJBQWlCLE1BQXhCLENBSGlCLENBR2U7QUFDakM7Ozs4QkFFZ0JELE0sRUFBUTtBQUN2QixVQUFJSSxNQUFNO0FBQ1JKLGdCQUFRQTtBQURBLE9BQVY7O0FBSUFGLFdBQUtNLEdBQUwsQ0FBU0EsR0FBVDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQk4sTUFBakIiLCJmaWxlIjoiY3Vyc29yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgQm9keSA9IGVhc3l1aS5Cb2R5O1xuXG52YXIgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxuY2xhc3MgY3Vyc29yIHtcbiAgc3RhdGljIGNvbHVtblJlc2l6ZSgpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ2NvbC1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdjb2wtcmVzaXplJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJvd1Jlc2l6ZSgpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ3Jvdy1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdyb3ctcmVzaXplJyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlc2V0KCkge1xuICAgIHRoaXMuc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG4gIH1cblxuICBzdGF0aWMgZ2V0Q3Vyc29yKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoJ2N1cnNvcicpOyAgLy8vXG5cbiAgICByZXR1cm4gY3VycmVudEN1cnNvciB8fCAnYXV0byc7IC8vL1xuICB9XG5cbiAgc3RhdGljIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgICB2YXIgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiJdfQ==