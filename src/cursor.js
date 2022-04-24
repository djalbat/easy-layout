"use strict";

import { Body } from "easy";

import { CURSOR } from "./constants";
import { AUTO_CURSOR, POINTER_CURSOR, COL_RESIZE_CURSOR, ROW_RESIZE_CURSOR } from "./cursors";

const body = new Body();

let previousCursor;  ///

export function resetCursor() {
  setCursor(previousCursor); ///
}

export function pointerCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== POINTER_CURSOR) {
    previousCursor = currentCursor; ///

    setCursor(POINTER_CURSOR);
  }
}

export function rowResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== ROW_RESIZE_CURSOR) {
    previousCursor = currentCursor; ///

    setCursor(ROW_RESIZE_CURSOR);
  }
}

export function columnResizeCursor() {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== COL_RESIZE_CURSOR) {
    previousCursor = currentCursor; ///

    setCursor(COL_RESIZE_CURSOR);
  }
}

export default {
  resetCursor,
  pointerCursor,
  rowResizeCursor,
  columnResizeCursor
}

function setCursor(cursor) {
  const css = {
    cursor
  };

  body.css(css);
}

function getCurrentCursor() {
  const currentCursor = body.css(CURSOR) || AUTO_CURSOR;

  return currentCursor;
}
