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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBDVVJTT1IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFVVE9fQ1VSU09SLCBQT0lOVEVSX0NVUlNPUiwgQ09MX1JFU0laRV9DVVJTT1IsIFJPV19SRVNJWkVfQ1VSU09SIH0gZnJvbSBcIi4vY3Vyc29yc1wiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldEN1cnNvcigpIHtcbiAgc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludGVyQ3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBQT0lOVEVSX0NVUlNPUikge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjsgLy8vXG5cbiAgICBzZXRDdXJzb3IoUE9JTlRFUl9DVVJTT1IpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3dSZXNpemVDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBnZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgaWYgKGN1cnJlbnRDdXJzb3IgIT09IFJPV19SRVNJWkVfQ1VSU09SKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yOyAvLy9cblxuICAgIHNldEN1cnNvcihST1dfUkVTSVpFX0NVUlNPUik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtblJlc2l6ZUN1cnNvcigpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gQ09MX1JFU0laRV9DVVJTT1IpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7IC8vL1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkVfQ1VSU09SKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlc2V0Q3Vyc29yLFxuICBwb2ludGVyQ3Vyc29yLFxuICByb3dSZXNpemVDdXJzb3IsXG4gIGNvbHVtblJlc2l6ZUN1cnNvclxufVxuXG5mdW5jdGlvbiBzZXRDdXJzb3IoY3Vyc29yKSB7XG4gIGNvbnN0IGNzcyA9IHtcbiAgICBjdXJzb3JcbiAgfTtcblxuICBib2R5LmNzcyhjc3MpO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keS5jc3MoQ1VSU09SKSB8fCBBVVRPX0NVUlNPUjtcblxuICByZXR1cm4gY3VycmVudEN1cnNvcjtcbn1cbiJdLCJuYW1lcyI6WyJyZXNldEN1cnNvciIsInBvaW50ZXJDdXJzb3IiLCJyb3dSZXNpemVDdXJzb3IiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJib2R5IiwiQm9keSIsInByZXZpb3VzQ3Vyc29yIiwic2V0Q3Vyc29yIiwiY3VycmVudEN1cnNvciIsImdldEN1cnJlbnRDdXJzb3IiLCJQT0lOVEVSX0NVUlNPUiIsIlJPV19SRVNJWkVfQ1VSU09SIiwiQ09MX1JFU0laRV9DVVJTT1IiLCJjdXJzb3IiLCJjc3MiLCJDVVJTT1IiLCJBVVRPX0NVUlNPUiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBV2dCQSxXQUFXO2VBQVhBOztJQUlBQyxhQUFhO2VBQWJBOztJQVVBQyxlQUFlO2VBQWZBOztJQVVBQyxrQkFBa0I7ZUFBbEJBOztJQVVoQixPQUtDO2VBTEQ7OztvQkEzQ3FCO3lCQUVFO3VCQUMyRDtBQUVsRixJQUFNQyxPQUFPLElBQUlDO0FBRWpCLElBQUlDLGdCQUFpQixHQUFHO0FBRWpCLFNBQVNOO0lBQ2RPLFVBQVVELGlCQUFpQixHQUFHO0FBQ2hDO0FBRU8sU0FBU0w7SUFDZCxJQUFNTyxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQkUseUJBQWdCO1FBQ3BDSixpQkFBaUJFLGVBQWUsR0FBRztRQUVuQ0QsVUFBVUc7SUFDWjtBQUNGO0FBRU8sU0FBU1I7SUFDZCxJQUFNTSxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQkcsNEJBQW1CO1FBQ3ZDTCxpQkFBaUJFLGVBQWUsR0FBRztRQUVuQ0QsVUFBVUk7SUFDWjtBQUNGO0FBRU8sU0FBU1I7SUFDZCxJQUFNSyxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQkksNEJBQW1CO1FBQ3ZDTixpQkFBaUJFLGVBQWUsR0FBRztRQUVuQ0QsVUFBVUs7SUFDWjtBQUNGO0lBRUEsV0FBZTtJQUNiWixhQUFBQTtJQUNBQyxlQUFBQTtJQUNBQyxpQkFBQUE7SUFDQUMsb0JBQUFBO0FBQ0Y7QUFFQSxTQUFTSSxVQUFVTSxNQUFNO0lBQ3ZCLElBQU1DLE1BQU07UUFDVkQsUUFBQUE7SUFDRjtJQUVBVCxLQUFLVSxJQUFJQTtBQUNYO0FBRUEsU0FBU0w7SUFDUCxJQUFNRCxnQkFBZ0JKLEtBQUtVLElBQUlDLHNCQUFXQztJQUUxQyxPQUFPUjtBQUNUIn0=