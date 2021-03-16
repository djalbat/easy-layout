"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.columnResizeCursor = columnResizeCursor;
exports.rowResizeCursor = rowResizeCursor;
exports.resetCursor = resetCursor;
var _easy = require("easy");
var body = new _easy.Body();
var previousCursor; ///
function columnResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "col-resize") {
        previousCursor = currentCursor;
        setCursor("col-resize");
    }
}
function rowResizeCursor() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "row-resize") {
        previousCursor = currentCursor;
        setCursor("row-resize");
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
    var currentCursor = body.css("cursor"); ///
    return currentCursor || "auto"; ///
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJzb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW5SZXNpemVDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBnZXRDdXJyZW50Q3Vyc29yKCk7XG5cbiAgaWYgKGN1cnJlbnRDdXJzb3IgIT09IFwiY29sLXJlc2l6ZVwiKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgc2V0Q3Vyc29yKFwiY29sLXJlc2l6ZVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcm93UmVzaXplQ3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBcInJvdy1yZXNpemVcIikge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgIHNldEN1cnNvcihcInJvdy1yZXNpemVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0Q3Vyc29yKCkge1xuICBzZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yKGN1cnNvcikge1xuICBjb25zdCBjc3MgPSB7XG4gICAgY3Vyc29yXG4gIH07XG5cbiAgYm9keS5jc3MoY3NzKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudEN1cnNvcigpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGJvZHkuY3NzKFwiY3Vyc29yXCIpOyAgLy8vXG5cbiAgcmV0dXJuIGN1cnJlbnRDdXJzb3IgfHwgXCJhdXRvXCI7IC8vL1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7UUFRQSxrQkFBQSxHQUFBLGtCQUFBO1FBVUEsZUFBQSxHQUFBLGVBQUE7UUFVQSxXQUFBLEdBQUEsV0FBQTtJQTFCQSxLQUFBO0lBRUEsSUFBQSxPQUZBLEtBQUE7SUFJQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7U0FFQSxrQkFBQTtRQUNBLGFBQUEsR0FBQSxnQkFBQTtRQUVBLGFBQUEsTUFBQSxVQUFBO0FBQ0Esc0JBQUEsR0FBQSxhQUFBO0FBRUEsaUJBQUEsRUFBQSxVQUFBOzs7U0FJQSxlQUFBO1FBQ0EsYUFBQSxHQUFBLGdCQUFBO1FBRUEsYUFBQSxNQUFBLFVBQUE7QUFDQSxzQkFBQSxHQUFBLGFBQUE7QUFFQSxpQkFBQSxFQUFBLFVBQUE7OztTQUlBLFdBQUE7QUFDQSxhQUFBLENBQUEsY0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBOztTQUdBLFNBQUEsQ0FBQSxNQUFBO1FBQ0EsR0FBQTtBQUNBLGNBQUEsRUFBQSxNQUFBOztBQUdBLFFBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQTs7U0FHQSxnQkFBQTtRQUNBLGFBQUEsR0FBQSxJQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQTtXQUVBLGFBQUEsS0FBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEifQ==