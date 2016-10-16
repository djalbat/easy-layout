'use strict';

var easyui = require('easyui'),
    Body = easyui.Body;

var body = new Body(),
    previousCursor; ///

var cursor = {
  columnResize: function columnResize() {
    var currentCursor = this.getCursor();

    if (currentCursor !== 'col-resize') {
      previousCursor = currentCursor;

      this.setCursor('col-resize');
    }
  },

  rowResize: function rowResize() {
    var currentCursor = this.getCursor();

    if (currentCursor !== 'row-resize') {
      previousCursor = currentCursor;

      this.setCursor('row-resize');
    }
  },

  reset: function reset() {
    this.setCursor(previousCursor); ///
  },

  getCursor: function getCursor() {
    var currentCursor = body.css('cursor'); ///

    return currentCursor || 'auto'; ///
  },

  setCursor: function setCursor(cursor) {
    var css = {
      cursor: cursor
    };

    body.css(css);
  }
};

module.exports = cursor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jdXJzb3IuanMiXSwibmFtZXMiOlsiZWFzeXVpIiwicmVxdWlyZSIsIkJvZHkiLCJib2R5IiwicHJldmlvdXNDdXJzb3IiLCJjdXJzb3IiLCJjb2x1bW5SZXNpemUiLCJjdXJyZW50Q3Vyc29yIiwiZ2V0Q3Vyc29yIiwic2V0Q3Vyc29yIiwicm93UmVzaXplIiwicmVzZXQiLCJjc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUFBLElBQ0lDLE9BQU9GLE9BQU9FLElBRGxCOztBQUdBLElBQUlDLE9BQU8sSUFBSUQsSUFBSixFQUFYO0FBQUEsSUFDSUUsY0FESixDLENBQ3FCOztBQUVyQixJQUFJQyxTQUFTO0FBQ1hDLGdCQUFjLHdCQUFXO0FBQ3ZCLFFBQUlDLGdCQUFnQixLQUFLQyxTQUFMLEVBQXBCOztBQUVBLFFBQUlELGtCQUFrQixZQUF0QixFQUFvQztBQUNsQ0gsdUJBQWlCRyxhQUFqQjs7QUFFQSxXQUFLRSxTQUFMLENBQWUsWUFBZjtBQUNEO0FBQ0YsR0FUVTs7QUFXWEMsYUFBVyxxQkFBVztBQUNwQixRQUFJSCxnQkFBZ0IsS0FBS0MsU0FBTCxFQUFwQjs7QUFFQSxRQUFJRCxrQkFBa0IsWUFBdEIsRUFBb0M7QUFDbENILHVCQUFpQkcsYUFBakI7O0FBRUEsV0FBS0UsU0FBTCxDQUFlLFlBQWY7QUFDRDtBQUNGLEdBbkJVOztBQXFCWEUsU0FBTyxpQkFBVztBQUNoQixTQUFLRixTQUFMLENBQWVMLGNBQWYsRUFEZ0IsQ0FDZ0I7QUFDakMsR0F2QlU7O0FBeUJYSSxhQUFXLHFCQUFXO0FBQ3BCLFFBQUlELGdCQUFnQkosS0FBS1MsR0FBTCxDQUFTLFFBQVQsQ0FBcEIsQ0FEb0IsQ0FDcUI7O0FBRXpDLFdBQU9MLGlCQUFpQixNQUF4QixDQUhvQixDQUdZO0FBQ2pDLEdBN0JVOztBQStCWEUsYUFBVyxtQkFBU0osTUFBVCxFQUFpQjtBQUMxQixRQUFJTyxNQUFNO0FBQ1JQLGNBQVFBO0FBREEsS0FBVjs7QUFJQUYsU0FBS1MsR0FBTCxDQUFTQSxHQUFUO0FBQ0Q7QUFyQ1UsQ0FBYjs7QUF3Q0FDLE9BQU9DLE9BQVAsR0FBaUJULE1BQWpCIiwiZmlsZSI6ImN1cnNvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgIEJvZHkgPSBlYXN5dWkuQm9keTtcblxudmFyIGJvZHkgPSBuZXcgQm9keSgpLFxuICAgIHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbnZhciBjdXJzb3IgPSB7XG4gIGNvbHVtblJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSB0aGlzLmdldEN1cnNvcigpO1xuXG4gICAgaWYgKGN1cnJlbnRDdXJzb3IgIT09ICdjb2wtcmVzaXplJykge1xuICAgICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgICB0aGlzLnNldEN1cnNvcignY29sLXJlc2l6ZScpO1xuICAgIH1cbiAgfSxcblxuICByb3dSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAncm93LXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ3Jvdy1yZXNpemUnKTtcbiAgICB9XG4gIH0sXG5cbiAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG4gIH0sXG5cbiAgZ2V0Q3Vyc29yOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKCdjdXJzb3InKTsgIC8vL1xuXG4gICAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgJ2F1dG8nOyAvLy9cbiAgfSxcblxuICBzZXRDdXJzb3I6IGZ1bmN0aW9uKGN1cnNvcikge1xuICAgIHZhciBjc3MgPSB7XG4gICAgICBjdXJzb3I6IGN1cnNvclxuICAgIH07XG5cbiAgICBib2R5LmNzcyhjc3MpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnNvcjtcbiJdfQ==