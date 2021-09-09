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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwibmFtZXMiOlsiQm9keSIsIkFVVE8iLCJDVVJTT1IiLCJDT0xfUkVTSVpFIiwiUk9XX1JFU0laRSIsImJvZHkiLCJwcmV2aW91c0N1cnNvciIsImNvbHVtblJlc2l6ZUN1cnNvciIsImN1cnJlbnRDdXJzb3IiLCJnZXRDdXJyZW50Q3Vyc29yIiwic2V0Q3Vyc29yIiwicm93UmVzaXplQ3Vyc29yIiwicmVzZXRDdXJzb3IiLCJjdXJzb3IiLCJjc3MiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7UUFVSSxrQkFBa0IsR0FBbEIsa0JBQWtCO1FBVWxCLGVBQWUsR0FBZixlQUFlO1FBVWYsV0FBVyxHQUFYLFdBQVc7QUE1Qk4sR0FBTSxDQUFOLEtBQU07QUFFMEIsR0FBYSxDQUFiLFVBQWE7QUFFbEUsR0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBSkssS0FBTTtBQU0zQixHQUFHLENBQUMsY0FBYyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUVSLGtCQUFrQixHQUFHLENBQUM7SUFDcEMsR0FBSyxDQUFDLGFBQWEsR0FBRyxnQkFBZ0I7SUFFdEMsRUFBRSxFQUFFLGFBQWEsS0FUa0MsVUFBYSxhQVM5QixDQUFDO1FBQ2pDLGNBQWMsR0FBRyxhQUFhO1FBRTlCLFNBQVMsQ0Fad0MsVUFBYTtJQWFoRSxDQUFDO0FBQ0gsQ0FBQztTQUVlLGVBQWUsR0FBRyxDQUFDO0lBQ2pDLEdBQUssQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCO0lBRXRDLEVBQUUsRUFBRSxhQUFhLEtBbkJrQyxVQUFhLGFBbUI5QixDQUFDO1FBQ2pDLGNBQWMsR0FBRyxhQUFhO1FBRTlCLFNBQVMsQ0F0QndDLFVBQWE7SUF1QmhFLENBQUM7QUFDSCxDQUFDO1NBRWUsV0FBVyxHQUFHLENBQUM7SUFDN0IsU0FBUyxDQUFDLGNBQWMsRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7QUFDaEMsQ0FBQztTQUVRLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixHQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDWCxNQUFNLEVBQU4sTUFBTTtJQUNSLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7QUFDZCxDQUFDO1NBRVEsZ0JBQWdCLEdBQUcsQ0FBQztJQUMzQixHQUFLLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBdkNxQixVQUFhLFlBQWIsVUFBYTtJQXlDaEUsTUFBTSxDQUFDLGFBQWE7QUFDdEIsQ0FBQyJ9