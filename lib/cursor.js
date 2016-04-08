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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYkVTMjAxNS9jdXJzb3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBSSxTQUFTLFFBQVEsUUFBUixDQUFUO0lBQ0EsT0FBTyxPQUFPLElBQVA7O0FBRVgsSUFBSSxPQUFPLElBQUksSUFBSixFQUFQO0lBQ0EsY0FESjs7QUFHQSxJQUFJLFNBQVM7QUFDWCxnQkFBYyx3QkFBVztBQUN2QixRQUFJLGdCQUFnQixLQUFLLFNBQUwsRUFBaEIsQ0FEbUI7O0FBR3ZCLFFBQUksa0JBQWtCLFlBQWxCLEVBQWdDO0FBQ2xDLHVCQUFpQixhQUFqQixDQURrQzs7QUFHbEMsV0FBSyxTQUFMLENBQWUsWUFBZixFQUhrQztLQUFwQztHQUhZOztBQVVkLGFBQVcscUJBQVc7QUFDcEIsUUFBSSxnQkFBZ0IsS0FBSyxTQUFMLEVBQWhCLENBRGdCOztBQUdwQixRQUFJLGtCQUFrQixZQUFsQixFQUFnQztBQUNsQyx1QkFBaUIsYUFBakIsQ0FEa0M7O0FBR2xDLFdBQUssU0FBTCxDQUFlLFlBQWYsRUFIa0M7S0FBcEM7R0FIUzs7QUFVWCxTQUFPLGlCQUFXO0FBQ2hCLFNBQUssU0FBTCxDQUFlLGNBQWY7QUFEZ0IsR0FBWDs7QUFJUCxhQUFXLHFCQUFXO0FBQ3BCLFFBQUksZ0JBQWdCLEtBQUssR0FBTCxDQUFTLFFBQVQsQ0FBaEI7O0FBRGdCLFdBR2IsaUJBQWlCLE1BQWpCO0FBSGEsR0FBWDs7QUFNWCxhQUFXLG1CQUFTLE1BQVQsRUFBaUI7QUFDMUIsUUFBSSxNQUFNO0FBQ1IsY0FBUSxNQUFSO0tBREUsQ0FEc0I7O0FBSzFCLFNBQUssR0FBTCxDQUFTLEdBQVQsRUFMMEI7R0FBakI7Q0EvQlQ7O0FBd0NKLE9BQU8sT0FBUCxHQUFpQixNQUFqQiIsImZpbGUiOiJjdXJzb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICBCb2R5ID0gZWFzeXVpLkJvZHk7XG5cbnZhciBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG52YXIgY3Vyc29yID0ge1xuICBjb2x1bW5SZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdXJyZW50Q3Vyc29yID0gdGhpcy5nZXRDdXJzb3IoKTtcblxuICAgIGlmIChjdXJyZW50Q3Vyc29yICE9PSAnY29sLXJlc2l6ZScpIHtcbiAgICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgICAgdGhpcy5zZXRDdXJzb3IoJ2NvbC1yZXNpemUnKTtcbiAgICB9XG4gIH0sXG5cbiAgcm93UmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudEN1cnNvciA9IHRoaXMuZ2V0Q3Vyc29yKCk7XG5cbiAgICBpZiAoY3VycmVudEN1cnNvciAhPT0gJ3Jvdy1yZXNpemUnKSB7XG4gICAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICAgIHRoaXMuc2V0Q3Vyc29yKCdyb3ctcmVzaXplJyk7XG4gICAgfVxuICB9LFxuXG4gIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEN1cnNvcihwcmV2aW91c0N1cnNvcik7IC8vL1xuICB9LFxuXG4gIGdldEN1cnNvcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcygnY3Vyc29yJyk7ICAvLy9cblxuICAgIHJldHVybiBjdXJyZW50Q3Vyc29yIHx8ICdhdXRvJzsgLy8vXG4gIH0sXG5cbiAgc2V0Q3Vyc29yOiBmdW5jdGlvbihjdXJzb3IpIHtcbiAgICB2YXIgY3NzID0ge1xuICAgICAgY3Vyc29yOiBjdXJzb3JcbiAgICB9O1xuXG4gICAgYm9keS5jc3MoY3NzKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjdXJzb3I7XG4iXX0=
