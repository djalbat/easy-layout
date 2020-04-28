"use strict";

const easy = require("easy");

const { Body } = easy;

const body = new Body();

let previousCursor;  ///

function columnResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "col-resize") {
    previousCursor = currentCursor;

    setCursor("col-resize");
  }
}

function rowResize() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "row-resize") {
    previousCursor = currentCursor;

    setCursor("row-resize");
  }
}

function reset() {
  setCursor(previousCursor); ///
}

module.exports = {
  columnResize,
  rowResize,
  reset
};

function setCursor(cursor) {
  const css = {
    cursor
  };

  body.css(css);
}

function getCurrentCursor() {
  const currentCursor = body.css("cursor");  ///

  return currentCursor || "auto"; ///
}
