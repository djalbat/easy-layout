"use strict";

import { Body } from "easy";

import { CURSOR } from "./constants";
import { AUTO_CURSOR, POINTER_CURSOR, COL_RESIZE_CURSOR, ROW_RESIZE_CURSOR } from "./cursors";

const body = new Body();

let previousCursor;  ///

export function autoCursor() {
  const cursor = AUTO_CURSOR;

  updateCursor(cursor);
}

export function resetCursor() {
  setCursor(previousCursor); ///
}

export function pointerCursor() {
  const cursor = POINTER_CURSOR;

  updateCursor(cursor);
}

export function rowResizeCursor() {
  const cursor = ROW_RESIZE_CURSOR;

  updateCursor(cursor);
}

export function columnResizeCursor() {
  const cursor = COL_RESIZE_CURSOR;

  updateCursor(cursor);
}

export default {
  autoCursor,
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

function updateCursor(cursor) {
  const currentCursor = getCurrentCursor();

  if (currentCursor !== cursor) {
    previousCursor = currentCursor; ///

    setCursor(cursor);
  }
}

function getCurrentCursor() {
  const currentCursor = body.css(CURSOR) || AUTO_CURSOR;

  return currentCursor;
}
