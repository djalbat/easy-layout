"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.columnResizeCursor = columnResizeCursor;
exports.rowResizeCursor = rowResizeCursor;
exports.resetCursor = resetCursor;
var _easy = require("easy");
var _constants = require("./constants");
var body = new _easy.Body();
var previousCursor; ///
function columnResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.COL_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.COL_RESIZE);
    }
}
function rowResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.ROW_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.ROW_RESIZE);
    }
}
function resetCursor() {
    setCursor(previousCursor); ///
}
function setCursor(cursor) {
    var css = {
        cursor: cursor
    };
    body.css(css);
}
function getCurrentCursor() {
    var currentCursor = body.css(_constants.CURSOR) || _constants.AUTO;
    return currentCursor;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBBVVRPLCBDVVJTT1IsIENPTF9SRVNJWkUsIFJPV19SRVNJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmxldCBwcmV2aW91c0N1cnNvcjsgIC8vL1xuXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uUmVzaXplQ3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBDT0xfUkVTSVpFKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkUpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3dSZXNpemVDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBnZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgaWYgKGN1cnJlbnRDdXJzb3IgIT09IFJPV19SRVNJWkUpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICBzZXRDdXJzb3IoUk9XX1JFU0laRSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q3Vyc29yKCkge1xuICBzZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yKGN1cnNvcikge1xuICBjb25zdCBjc3MgPSB7XG4gICAgY3Vyc29yXG4gIH07XG5cbiAgYm9keS5jc3MoY3NzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudEN1cnNvcigpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKENVUlNPUikgfHwgQVVUTztcblxuICByZXR1cm4gY3VycmVudEN1cnNvcjtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBVUksa0JBQWtCLEdBQWxCLGtCQUFrQjtRQVVsQixlQUFlLEdBQWYsZUFBZTtRQVVmLFdBQVcsR0FBWCxXQUFXO0lBNUJOLEtBQU07SUFFMEIsVUFBYTtJQUU1RCxJQUFJLE9BSlcsS0FBTTtJQU12QixjQUFjLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1NBRVIsa0JBQWtCO1FBQzFCLGFBQWEsR0FBRyxnQkFBZ0I7UUFFbEMsYUFBYSxLQVRrQyxVQUFhO1FBVTlELGNBQWMsR0FBRyxhQUFhO1FBRTlCLFNBQVMsQ0Fad0MsVUFBYTs7O1NBZ0JsRCxlQUFlO1FBQ3ZCLGFBQWEsR0FBRyxnQkFBZ0I7UUFFbEMsYUFBYSxLQW5Ca0MsVUFBYTtRQW9COUQsY0FBYyxHQUFHLGFBQWE7UUFFOUIsU0FBUyxDQXRCd0MsVUFBYTs7O1NBMEJsRCxXQUFXO0lBQ3pCLFNBQVMsQ0FBQyxjQUFjLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHOztTQUd2QixTQUFTLENBQUMsTUFBTTtRQUNqQixHQUFHO1FBQ1AsTUFBTSxFQUFOLE1BQU07O0lBR1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHOztTQUdMLGdCQUFnQjtRQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0F2Q3FCLFVBQWEsWUFBYixVQUFhO1dBeUN6RCxhQUFhIn0=