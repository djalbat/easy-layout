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
    autoCursor: function() {
        return autoCursor;
    },
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
function autoCursor() {
    var cursor = _cursors.AUTO_CURSOR;
    updateCursor(cursor);
}
function resetCursor() {
    setCursor(previousCursor); ///
}
function pointerCursor() {
    var cursor = _cursors.POINTER_CURSOR;
    updateCursor(cursor);
}
function rowResizeCursor() {
    var cursor = _cursors.ROW_RESIZE_CURSOR;
    updateCursor(cursor);
}
function columnResizeCursor() {
    var cursor = _cursors.COL_RESIZE_CURSOR;
    updateCursor(cursor);
}
var _default = {
    autoCursor: autoCursor,
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
function updateCursor(cursor) {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== cursor) {
        previousCursor = currentCursor; ///
        setCursor(cursor);
    }
}
function getCurrentCursor() {
    var currentCursor = body.css(_constants.CURSOR) || _cursors.AUTO_CURSOR;
    return currentCursor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBDVVJTT1IgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEFVVE9fQ1VSU09SLCBQT0lOVEVSX0NVUlNPUiwgQ09MX1JFU0laRV9DVVJTT1IsIFJPV19SRVNJWkVfQ1VSU09SIH0gZnJvbSBcIi4vY3Vyc29yc1wiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRvQ3Vyc29yKCkge1xuICBjb25zdCBjdXJzb3IgPSBBVVRPX0NVUlNPUjtcblxuICB1cGRhdGVDdXJzb3IoY3Vyc29yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q3Vyc29yKCkge1xuICBzZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvaW50ZXJDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnNvciA9IFBPSU5URVJfQ1VSU09SO1xuXG4gIHVwZGF0ZUN1cnNvcihjdXJzb3IpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm93UmVzaXplQ3Vyc29yKCkge1xuICBjb25zdCBjdXJzb3IgPSBST1dfUkVTSVpFX0NVUlNPUjtcblxuICB1cGRhdGVDdXJzb3IoY3Vyc29yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbHVtblJlc2l6ZUN1cnNvcigpIHtcbiAgY29uc3QgY3Vyc29yID0gQ09MX1JFU0laRV9DVVJTT1I7XG5cbiAgdXBkYXRlQ3Vyc29yKGN1cnNvcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0b0N1cnNvcixcbiAgcmVzZXRDdXJzb3IsXG4gIHBvaW50ZXJDdXJzb3IsXG4gIHJvd1Jlc2l6ZUN1cnNvcixcbiAgY29sdW1uUmVzaXplQ3Vyc29yXG59XG5cbmZ1bmN0aW9uIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgY29uc3QgY3NzID0ge1xuICAgIGN1cnNvclxuICB9O1xuXG4gIGJvZHkuY3NzKGNzcyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnNvcihjdXJzb3IpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gY3Vyc29yKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yOyAvLy9cblxuICAgIHNldEN1cnNvcihjdXJzb3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5LmNzcyhDVVJTT1IpIHx8IEFVVE9fQ1VSU09SO1xuXG4gIHJldHVybiBjdXJyZW50Q3Vyc29yO1xufVxuIl0sIm5hbWVzIjpbImF1dG9DdXJzb3IiLCJjb2x1bW5SZXNpemVDdXJzb3IiLCJwb2ludGVyQ3Vyc29yIiwicmVzZXRDdXJzb3IiLCJyb3dSZXNpemVDdXJzb3IiLCJib2R5IiwiQm9keSIsInByZXZpb3VzQ3Vyc29yIiwiY3Vyc29yIiwiQVVUT19DVVJTT1IiLCJ1cGRhdGVDdXJzb3IiLCJzZXRDdXJzb3IiLCJQT0lOVEVSX0NVUlNPUiIsIlJPV19SRVNJWkVfQ1VSU09SIiwiQ09MX1JFU0laRV9DVVJTT1IiLCJjc3MiLCJjdXJyZW50Q3Vyc29yIiwiZ2V0Q3VycmVudEN1cnNvciIsIkNVUlNPUiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBV2dCQSxVQUFVO2VBQVZBOztJQXNCQUMsa0JBQWtCO2VBQWxCQTs7SUFNaEIsT0FNQztlQU5EOztJQWxCZ0JDLGFBQWE7ZUFBYkE7O0lBSkFDLFdBQVc7ZUFBWEE7O0lBVUFDLGVBQWU7ZUFBZkE7OztvQkF6Qks7eUJBRUU7dUJBQzJEO0FBRWxGLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtBQUVyQixJQUFJQyxnQkFBaUIsR0FBRztBQUVqQixTQUFTUDtJQUNkLElBQU1RLFNBQVNDLG9CQUFXO0lBRTFCQyxhQUFhRjtBQUNmO0FBRU8sU0FBU0w7SUFDZFEsVUFBVUosaUJBQWlCLEdBQUc7QUFDaEM7QUFFTyxTQUFTTDtJQUNkLElBQU1NLFNBQVNJLHVCQUFjO0lBRTdCRixhQUFhRjtBQUNmO0FBRU8sU0FBU0o7SUFDZCxJQUFNSSxTQUFTSywwQkFBaUI7SUFFaENILGFBQWFGO0FBQ2Y7QUFFTyxTQUFTUDtJQUNkLElBQU1PLFNBQVNNLDBCQUFpQjtJQUVoQ0osYUFBYUY7QUFDZjtJQUVBLFdBQWU7SUFDYlIsWUFBQUE7SUFDQUcsYUFBQUE7SUFDQUQsZUFBQUE7SUFDQUUsaUJBQUFBO0lBQ0FILG9CQUFBQTtBQUNGO0FBRUEsU0FBU1UsVUFBVUgsTUFBTTtJQUN2QixJQUFNTyxNQUFNO1FBQ1ZQLFFBQUFBO0lBQ0Y7SUFFQUgsS0FBS1UsR0FBRyxDQUFDQTtBQUNYO0FBRUEsU0FBU0wsYUFBYUYsTUFBTTtJQUMxQixJQUFNUSxnQkFBZ0JDO0lBRXRCLElBQUlELGtCQUFrQlIsUUFBUTtRQUM1QkQsaUJBQWlCUyxlQUFlLEdBQUc7UUFFbkNMLFVBQVVIO0lBQ1o7QUFDRjtBQUVBLFNBQVNTO0lBQ1AsSUFBTUQsZ0JBQWdCWCxLQUFLVSxHQUFHLENBQUNHLGlCQUFNLEtBQUtULG9CQUFXO0lBRXJELE9BQU9PO0FBQ1QifQ==