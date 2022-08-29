"use strict";

import withStyle from "easy-with-style";  ///

import Splitter from "../splitter";

import { rowResizeCursor } from "../../cursor";

class HorizontalSplitter extends Splitter {
  mouseOverHandler = (event, element) => {
    this.setCursor();
  }

  startDragHandler = (element) => {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableDiv = this.getSizeableDiv(),
            sizeableDivHeight = sizeableDiv.getHeight(),
            previousSizeableDivHeight = sizeableDivHeight;  ///

      this.setPreviousSizeableDivHeight(previousSizeableDivHeight);
    }

    this.setCursor();
  }

  dragHandler = (relativeMouseTop, relativeMouseLeft) => {
    const disabled = this.isDisabled();

    if (!disabled) {
      const direction = this.getDirection(),
            sizeableDiv = this.getSizeableDiv(),
            previousSizeableDivHeight = this.getPreviousSizeableDivHeight(),
            sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop,
            height = sizeableDivHeight; ///

      sizeableDiv.setHeight(height);
    }
  }

  setCursor() {
    const disabled = this.isDisabled();

    if (!disabled) {
      rowResizeCursor();
    }
  }

  getPreviousSizeableDivHeight() {
    const state = this.getState(),
          { previousSizeableDivHeight } = state;

    return previousSizeableDivHeight;
  }

  setPreviousSizeableDivHeight(previousSizeableDivHeight) {
    this.updateState({
      previousSizeableDivHeight
    });
  }

  setInitialState() {
    const previousSizeableDivHeight = null;

    this.setState({
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
