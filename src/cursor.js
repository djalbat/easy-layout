"use strict";

import { Body } from "easy";

import { AUTO, CURSOR, COL_RESIZE, ROW_RESIZE } from "./constants";

const body = new Body();

let previousCursor;  ///

export function columnResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== COL_RESIZE) {
    previousCursor = currentCursor;

    setCursor(COL_RESIZE);
  }
}

export function rowResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== ROW_RESIZE) {
    previousCursor = currentCursor;

    setCursor(ROW_RESIZE);
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
  const currentCursor = body.css(CURSOR) || AUTO;

  return currentCursor;
}
