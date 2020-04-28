"use strict";

import { Body } from "easy";

const body = new Body();

let previousCursor;  ///

export function columnResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "col-resize") {
    previousCursor = currentCursor;

    setCursor("col-resize");
  }
}

export function rowResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== "row-resize") {
    previousCursor = currentCursor;

    setCursor("row-resize");
  }
}

export function resetCursor() {
  setCursor(previousCursor); ///
}

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
