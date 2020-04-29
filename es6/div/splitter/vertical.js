"use strict";

import withStyle from "easy-with-style";  ///

import Splitter from "../splitter";

import { columnResizeCursor } from "../../cursor";

class VerticalSplitter extends Splitter {
  mouseOverHandler(event, element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      columnResizeCursor();
    }
  }

  mouseMoveHandler(event, element) {
    const { pageX } = event,
          mouseLeft = pageX,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv(),
              dragHandler = this.getDragHandler();

        const previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;

        let sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;

        const width = sizeableDivWidth; ///

        sizeableDiv.setWidth(width);

        sizeableDivWidth = sizeableDiv.getWidth();  ///

        dragHandler && dragHandler(sizeableDivWidth);
      }
    }
  }

  mouseDownHandler(event, element) {
    const { pageX } = event,
          mouseLeft = pageX,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv(),
            previousMouseLeft = mouseLeft,  ///
            sizeableDivWidth = sizeableDiv.getWidth(),
            previousSizeableDivWidth = sizeableDivWidth;  ///

      this.setPreviousMouseLeft(previousMouseLeft);

      this.setPreviousSizeableDivWidth(previousSizeableDivWidth);

      columnResizeCursor();

      if (!dragging) {
        this.startDrag();
      }
    }
  }

  getPreviousMouseLeft() {
    const state = this.getState(),
          { previousMouseLeft } = state;

    return previousMouseLeft;
  }

  getPreviousSizeableDivWidth() {
    const state = this.getState(),
          { previousSizeableDivWidth } = state;

    return previousSizeableDivWidth;
  }

  setPreviousMouseLeft(previousMouseLeft) {
    this.updateState({
      previousMouseLeft
    });
  }

  setPreviousSizeableDivWidth(previousSizeableDivWidth) {
    this.updateState({
      previousSizeableDivWidth
    });
  }

  setInitialState() {
    const previousMouseLeft = null,
          previousSizeableDivWidth = null;

    this.setState({
      previousMouseLeft,
      previousSizeableDivWidth
    });
  }

  static defaultProperties = {
    className: "vertical"
  };
}

export default withStyle(VerticalSplitter)`

  width: 1rem;
  height: 100%;

`;
