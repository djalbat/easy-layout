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
