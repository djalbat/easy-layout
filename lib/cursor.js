"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    resetCursor: function() {
        return resetCursor;
    },
    pointerCursor: function() {
        return pointerCursor;
    },
    rowResizeCursor: function() {
        return rowResizeCursor;
    },
    columnResizeCursor: function() {
        return columnResizeCursor;
    },
    default: function() {
        return _default;
    }
});
var _easy = require("easy");
var _constants = require("./constants");
var _cursors = require("./cursors");
var body = new _easy.Body();
var previousCursor; ///
function resetCursor() {
    setCursor(previousCursor); ///
}
function pointerCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _cursors.POINTER_CURSOR) {
        previousCursor = currentCursor; ///
        setCursor(_cursors.POINTER_CURSOR);
    }
}
function rowResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _cursors.ROW_RESIZE_CURSOR) {
        previousCursor = currentCursor; ///
        setCursor(_cursors.ROW_RESIZE_CURSOR);
    }
}
function columnResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _cursors.COL_RESIZE_CURSOR) {
        previousCursor = currentCursor; ///
        setCursor(_cursors.COL_RESIZE_CURSOR);
    }
}
var _default = {
    resetCursor: resetCursor,
    pointerCursor: pointerCursor,
    rowResizeCursor: rowResizeCursor,
    columnResizeCursor: columnResizeCursor
};
function setCursor(cursor) {
    var css = {
        cursor: cursor
    };
    body.css(css);
}
function getCurrentCursor() {
    var currentCursor = body.css(_constants.CURSOR) || _cursors.AUTO_CURSOR;
    return currentCursor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBDVVJTT1IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFVVE9fQ1VSU09SLCBQT0lOVEVSX0NVUlNPUiwgQ09MX1JFU0laRV9DVVJTT1IsIFJPV19SRVNJWkVfQ1VSU09SIH0gZnJvbSBcIi4vY3Vyc29yc1wiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEN1cnNvcigpIHtcbiAgc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyQ3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBQT0lOVEVSX0NVUlNPUikge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjsgLy8vXG5cbiAgICBzZXRDdXJzb3IoUE9JTlRFUl9DVVJTT1IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3dSZXNpemVDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBnZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgaWYgKGN1cnJlbnRDdXJzb3IgIT09IFJPV19SRVNJWkVfQ1VSU09SKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yOyAvLy9cblxuICAgIHNldEN1cnNvcihST1dfUkVTSVpFX0NVUlNPUik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtblJlc2l6ZUN1cnNvcigpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gQ09MX1JFU0laRV9DVVJTT1IpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7IC8vL1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkVfQ1VSU09SKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlc2V0Q3Vyc29yLFxuICBwb2ludGVyQ3Vyc29yLFxuICByb3dSZXNpemVDdXJzb3IsXG4gIGNvbHVtblJlc2l6ZUN1cnNvclxufVxuXG5mdW5jdGlvbiBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gIGNvbnN0IGNzcyA9IHtcbiAgICBjdXJzb3JcbiAgfTtcblxuICBib2R5LmNzcyhjc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoQ1VSU09SKSB8fCBBVVRPX0NVUlNPUjtcblxuICByZXR1cm4gY3VycmVudEN1cnNvcjtcbn1cbiJdLCJuYW1lcyI6WyJyZXNldEN1cnNvciIsInBvaW50ZXJDdXJzb3IiLCJyb3dSZXNpemVDdXJzb3IiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJib2R5IiwiQm9keSIsInByZXZpb3VzQ3Vyc29yIiwic2V0Q3Vyc29yIiwiY3VycmVudEN1cnNvciIsImdldEN1cnJlbnRDdXJzb3IiLCJQT0lOVEVSX0NVUlNPUiIsIlJPV19SRVNJWkVfQ1VSU09SIiwiQ09MX1JFU0laRV9DVVJTT1IiLCJjdXJzb3IiLCJjc3MiLCJDVVJTT1IiLCJBVVRPX0NVUlNPUiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVdHQSxXQUFXO2VBQVhBLFdBQVc7O0lBSVhDLGFBQWE7ZUFBYkEsYUFBYTs7SUFVYkMsZUFBZTtlQUFmQSxlQUFlOztJQVVmQyxrQkFBa0I7ZUFBbEJBLGtCQUFrQjs7SUFVbEMsT0FLQztlQUxELFFBS0M7OztvQkFoRG9CLE1BQU07eUJBRUosYUFBYTt1QkFDOEMsV0FBVztBQUU3RixJQUFNQyxJQUFJLEdBQUcsSUFBSUMsS0FBSSxLQUFBLEVBQUUsQUFBQztBQUV4QixJQUFJQyxjQUFjLEFBQUMsRUFBRSxHQUFHO0FBRWpCLFNBQVNOLFdBQVcsR0FBRztJQUM1Qk8sU0FBUyxDQUFDRCxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUc7QUFDaEMsQ0FBQztBQUVNLFNBQVNMLGFBQWEsR0FBRztJQUM5QixJQUFNTyxhQUFhLEdBQUdDLGdCQUFnQixFQUFFLEFBQUM7SUFFekMsSUFBSUQsYUFBYSxLQUFLRSxRQUFjLGVBQUEsRUFBRTtRQUNwQ0osY0FBYyxHQUFHRSxhQUFhLENBQUMsQ0FBQyxHQUFHO1FBRW5DRCxTQUFTLENBQUNHLFFBQWMsZUFBQSxDQUFDLENBQUM7SUFDNUIsQ0FBQztBQUNILENBQUM7QUFFTSxTQUFTUixlQUFlLEdBQUc7SUFDaEMsSUFBTU0sYUFBYSxHQUFHQyxnQkFBZ0IsRUFBRSxBQUFDO0lBRXpDLElBQUlELGFBQWEsS0FBS0csUUFBaUIsa0JBQUEsRUFBRTtRQUN2Q0wsY0FBYyxHQUFHRSxhQUFhLENBQUMsQ0FBQyxHQUFHO1FBRW5DRCxTQUFTLENBQUNJLFFBQWlCLGtCQUFBLENBQUMsQ0FBQztJQUMvQixDQUFDO0FBQ0gsQ0FBQztBQUVNLFNBQVNSLGtCQUFrQixHQUFHO0lBQ25DLElBQU1LLGFBQWEsR0FBR0MsZ0JBQWdCLEVBQUUsQUFBQztJQUV6QyxJQUFJRCxhQUFhLEtBQUtJLFFBQWlCLGtCQUFBLEVBQUU7UUFDdkNOLGNBQWMsR0FBR0UsYUFBYSxDQUFDLENBQUMsR0FBRztRQUVuQ0QsU0FBUyxDQUFDSyxRQUFpQixrQkFBQSxDQUFDLENBQUM7SUFDL0IsQ0FBQztBQUNILENBQUM7SUFFRCxRQUtDLEdBTGM7SUFDYlosV0FBVyxFQUFYQSxXQUFXO0lBQ1hDLGFBQWEsRUFBYkEsYUFBYTtJQUNiQyxlQUFlLEVBQWZBLGVBQWU7SUFDZkMsa0JBQWtCLEVBQWxCQSxrQkFBa0I7Q0FDbkI7QUFFRCxTQUFTSSxTQUFTLENBQUNNLE1BQU0sRUFBRTtJQUN6QixJQUFNQyxHQUFHLEdBQUc7UUFDVkQsTUFBTSxFQUFOQSxNQUFNO0tBQ1AsQUFBQztJQUVGVCxJQUFJLENBQUNVLEdBQUcsQ0FBQ0EsR0FBRyxDQUFDLENBQUM7QUFDaEIsQ0FBQztBQUVELFNBQVNMLGdCQUFnQixHQUFHO0lBQzFCLElBQU1ELGFBQWEsR0FBR0osSUFBSSxDQUFDVSxHQUFHLENBQUNDLFVBQU0sT0FBQSxDQUFDLElBQUlDLFFBQVcsWUFBQSxBQUFDO0lBRXRELE9BQU9SLGFBQWEsQ0FBQztBQUN2QixDQUFDIn0=