"use strict";

import withStyle from "easy-with-style";  ///

import Splitter from "../splitter";

import { columnResizeCursor } from "../../cursor";

class VerticalSplitter extends Splitter {
  startDragCustomHandler = (event, element) => {
    const sizeableDiv = this.getSizeableDiv(),
          sizeableDivWidth = sizeableDiv.getWidth(),
          previousSizeableDivWidth = sizeableDivWidth;  ///

    this.setPreviousSizeableDivWidth(previousSizeableDivWidth);

    this.setCursor();
  }

  dragCustomHandler = (event, element, relativeMouseTop, relativeMouseLeft) => {
    const direction = this.getDirection(),
          sizeableDiv = this.getSizeableDiv(),
          previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
          sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft,
          width = sizeableDivWidth; ///

    sizeableDiv.setWidth(width);
  }

  mouseOverHandler = (event, element) => {
    this.setCursor();
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
