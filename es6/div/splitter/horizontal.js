"use strict";

import SplitterDiv from "../../div/splitter";

import { rowResizeCursor, resetCursor } from "../../cursor";

export default class HorizontalSplitterDiv extends SplitterDiv {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    super(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

    this.setInitialState();
  }

  getHorizontalSplitterDiv() {
    const horizontalSplitterDiv = this;  ///

    return horizontalSplitterDiv;
  }

  mouseUp() {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }

      resetCursor();
    }
  }

  mouseMove(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

        let sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

        const height = sizeableElementHeight; ///

        sizeableElement.setHeight(height);

        sizeableElementHeight = sizeableElement.getHeight();  ///

        dragHandler(sizeableElementHeight);
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const previousMouseTop = mouseTop,  ///
            dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight;  /// 

      this.setPreviousMouseTop(previousMouseTop);

      this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

      if (!dragging) {
        this.startDragging();
      }

      rowResizeCursor();
    }
  }

  mouseOver() {
    const disabled = this.isDisabled();

    if (!disabled) {
      rowResizeCursor();
    }
  }

  mouseOut() {
    const disabled = this.isDisabled();

    if (!disabled) {
      resetCursor();
    }
  }

  getPreviousMouseTop() {
    const state = this.getState(),
          { previousMouseTop } = state;

    return previousMouseTop;
  }

  getPreviousSizeableElementHeight() {
    const state = this.getState(),
          { previousSizeableElementHeight } = state;

    return previousSizeableElementHeight;
  }

  setPreviousMouseTop(previousMouseTop) {
    this.updateState({
      previousMouseTop
    });
  }

  setPreviousSizeableElementHeight(previousSizeableElementHeight) {
    this.updateState({
      previousSizeableElementHeight
    });
  }

  setInitialState() {
    const previousMouseTop = null,
          previousSizeableElementHeight = null;

    this.setState({
      previousMouseTop,
      previousSizeableElementHeight
    });
  }

  parentContext() {
    const enableHorizontalSplitterDiv = this.enable.bind(this),
          disableHorizontalSplitterDiv = this.disable.bind(this);

    return ({
      enableHorizontalSplitterDiv,
      disableHorizontalSplitterDiv
    });
  }

  static fromProperties(properties) { return SplitterDiv.fromProperties(HorizontalSplitterDiv, properties); }
}

Object.assign(HorizontalSplitterDiv, {
  defaultProperties: {
    className: "horizontal splitter"
  }
});
