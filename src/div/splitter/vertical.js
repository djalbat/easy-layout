"use strict";

import withStyle from "easy-with-style";  ///

import Splitter from "../splitter";

import { columnResizeCursor } from "../../cursor";

class VerticalSplitter extends Splitter {
  mouseOverHandler = (event, element) => {
    this.setCursor();
  }

  startDragHandler = (element) => {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableDiv = this.getSizeableDiv(),
            sizeableDivWidth = sizeableDiv.getWidth(),
            previousSizeableDivWidth = sizeableDivWidth;  ///

      this.setPreviousSizeableDivWidth(previousSizeableDivWidth);
    }

    this.setCursor();
  }

  dragHandler = (relativeMouseTop, relativeMouseLeft) => {
    const disabled = this.isDisabled();

    if (!disabled) {
      const direction = this.getDirection(),
            sizeableDiv = this.getSizeableDiv(),
            previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
            sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft,
            width = sizeableDivWidth; ///

      sizeableDiv.setWidth(width);
    }
  }

  setCursor() {
    const disabled = this.isDisabled();

    if (!disabled) {
      columnResizeCursor();
    }
  }

  getPreviousSizeableDivWidth() {
    const { previousSizeableDivWidth } = this.getState();

    return previousSizeableDivWidth;
  }

  setPreviousSizeableDivWidth(previousSizeableDivWidth) {
    this.updateState({
      previousSizeableDivWidth
    });
  }

  setInitialState() {
    const previousSizeableDivWidth = null;

    this.setState({
      previousSizeableDivWidth
    });
  }

  static defaultProperties = {
    className: "vertical"
  };
}

export default withStyle(VerticalSplitter)`

  width: 1rem;

`;
