"use strict";

import withStyle from "easy-with-style";  ///

import Splitter from "../splitter";

import { rowResizeCursor } from "../../cursor";

class HorizontalSplitter extends Splitter {
  mouseOverHandler(event, element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      rowResizeCursor();
    }
  }

  mouseMoveHandler(event, element) {
    const { pageY } = event,
          mouseTop = pageY,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv(),
              dragHandler = this.getDragHandler();

        const previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableDivHeight = this.getPreviousSizeableDivHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

        let sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;

        const height = sizeableDivHeight; ///

        sizeableDiv.setHeight(height);

        sizeableDivHeight = sizeableDiv.getHeight();  ///

        dragHandler && dragHandler(sizeableDivHeight);
      }
    }
  }

  mouseDownHandler(event, element) {
    const { pageY } = event,
          mouseTop = pageY,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv(),
            previousMouseTop = mouseTop,  ///
            sizeableDivHeight = sizeableDiv.getHeight(),
            previousSizeableDivHeight = sizeableDivHeight;  ///

      this.setPreviousMouseTop(previousMouseTop);

      this.setPreviousSizeableDivHeight(previousSizeableDivHeight);

      rowResizeCursor();

      if (!dragging) {
        this.startDrag();
      }
    }
  }

  getPreviousMouseTop() {
    const state = this.getState(),
          { previousMouseTop } = state;

    return previousMouseTop;
  }

  getPreviousSizeableDivHeight() {
    const state = this.getState(),
          { previousSizeableDivHeight } = state;

    return previousSizeableDivHeight;
  }

  setPreviousMouseTop(previousMouseTop) {
    this.updateState({
      previousMouseTop
    });
  }

  setPreviousSizeableDivHeight(previousSizeableDivHeight) {
    this.updateState({
      previousSizeableDivHeight
    });
  }

  setInitialState() {
    const previousMouseTop = null,
          previousSizeableDivHeight = null;

    this.setState({
      previousMouseTop,
      previousSizeableDivHeight
    });
  }

  static defaultProperties = {
    className: "horizontal"
  };
}

export default withStyle(HorizontalSplitter)`

  height: 1rem;

`;
