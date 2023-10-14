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
    columnResizeCursor: function() {
        return columnResizeCursor;
    },
    default: function() {
        return _default;
    },
    pointerCursor: function() {
        return pointerCursor;
    },
    resetCursor: function() {
        return resetCursor;
    },
    rowResizeCursor: function() {
        return rowResizeCursor;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBDVVJTT1IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFVVE9fQ1VSU09SLCBQT0lOVEVSX0NVUlNPUiwgQ09MX1JFU0laRV9DVVJTT1IsIFJPV19SRVNJWkVfQ1VSU09SIH0gZnJvbSBcIi4vY3Vyc29yc1wiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEN1cnNvcigpIHtcbiAgc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyQ3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBQT0lOVEVSX0NVUlNPUikge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjsgLy8vXG5cbiAgICBzZXRDdXJzb3IoUE9JTlRFUl9DVVJTT1IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3dSZXNpemVDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBnZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgaWYgKGN1cnJlbnRDdXJzb3IgIT09IFJPV19SRVNJWkVfQ1VSU09SKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yOyAvLy9cblxuICAgIHNldEN1cnNvcihST1dfUkVTSVpFX0NVUlNPUik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtblJlc2l6ZUN1cnNvcigpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gQ09MX1JFU0laRV9DVVJTT1IpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7IC8vL1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkVfQ1VSU09SKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlc2V0Q3Vyc29yLFxuICBwb2ludGVyQ3Vyc29yLFxuICByb3dSZXNpemVDdXJzb3IsXG4gIGNvbHVtblJlc2l6ZUN1cnNvclxufVxuXG5mdW5jdGlvbiBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gIGNvbnN0IGNzcyA9IHtcbiAgICBjdXJzb3JcbiAgfTtcblxuICBib2R5LmNzcyhjc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoQ1VSU09SKSB8fCBBVVRPX0NVUlNPUjtcblxuICByZXR1cm4gY3VycmVudEN1cnNvcjtcbn1cbiJdLCJuYW1lcyI6WyJjb2x1bW5SZXNpemVDdXJzb3IiLCJwb2ludGVyQ3Vyc29yIiwicmVzZXRDdXJzb3IiLCJyb3dSZXNpemVDdXJzb3IiLCJib2R5IiwiQm9keSIsInByZXZpb3VzQ3Vyc29yIiwic2V0Q3Vyc29yIiwiY3VycmVudEN1cnNvciIsImdldEN1cnJlbnRDdXJzb3IiLCJQT0lOVEVSX0NVUlNPUiIsIlJPV19SRVNJWkVfQ1VSU09SIiwiQ09MX1JFU0laRV9DVVJTT1IiLCJjdXJzb3IiLCJjc3MiLCJDVVJTT1IiLCJBVVRPX0NVUlNPUiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBbUNnQkEsa0JBQWtCO2VBQWxCQTs7SUFVaEIsT0FLQztlQUxEOztJQTlCZ0JDLGFBQWE7ZUFBYkE7O0lBSkFDLFdBQVc7ZUFBWEE7O0lBY0FDLGVBQWU7ZUFBZkE7OztvQkF2Qks7eUJBRUU7dUJBQzJEO0FBRWxGLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQixJQUFJQyxnQkFBaUIsR0FBRztBQUVqQixTQUFTSjtJQUNkSyxVQUFVRCxpQkFBaUIsR0FBRztBQUNoQztBQUVPLFNBQVNMO0lBQ2QsSUFBTU8sZ0JBQWdCQztJQUV0QixJQUFJRCxrQkFBa0JFLHVCQUFjLEVBQUU7UUFDcENKLGlCQUFpQkUsZUFBZSxHQUFHO1FBRW5DRCxVQUFVRyx1QkFBYztJQUMxQjtBQUNGO0FBRU8sU0FBU1A7SUFDZCxJQUFNSyxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQkcsMEJBQWlCLEVBQUU7UUFDdkNMLGlCQUFpQkUsZUFBZSxHQUFHO1FBRW5DRCxVQUFVSSwwQkFBaUI7SUFDN0I7QUFDRjtBQUVPLFNBQVNYO0lBQ2QsSUFBTVEsZ0JBQWdCQztJQUV0QixJQUFJRCxrQkFBa0JJLDBCQUFpQixFQUFFO1FBQ3ZDTixpQkFBaUJFLGVBQWUsR0FBRztRQUVuQ0QsVUFBVUssMEJBQWlCO0lBQzdCO0FBQ0Y7SUFFQSxXQUFlO0lBQ2JWLGFBQUFBO0lBQ0FELGVBQUFBO0lBQ0FFLGlCQUFBQTtJQUNBSCxvQkFBQUE7QUFDRjtBQUVBLFNBQVNPLFVBQVVNLE1BQU07SUFDdkIsSUFBTUMsTUFBTTtRQUNWRCxRQUFBQTtJQUNGO0lBRUFULEtBQUtVLEdBQUcsQ0FBQ0E7QUFDWDtBQUVBLFNBQVNMO0lBQ1AsSUFBTUQsZ0JBQWdCSixLQUFLVSxHQUFHLENBQUNDLGlCQUFNLEtBQUtDLG9CQUFXO0lBRXJELE9BQU9SO0FBQ1QifQ==