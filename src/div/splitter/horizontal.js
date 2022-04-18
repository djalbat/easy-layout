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

  startDragHandler(element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight;  ///

      this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

      rowResizeCursor();
    }
  }

  dragHandler(relativeMouseTop, relativeMouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const direction = this.getDirection(),
            sizeableElement = this.getSizeableElement(),
            previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
            sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop,
            height = sizeableElementHeight; ///

      sizeableElement.setHeight(height);
    }
  }

  getPreviousSizeableElementHeight() {
    const state = this.getState(),
          { previousSizeableElementHeight } = state;

    return previousSizeableElementHeight;
  }

  setPreviousSizeableElementHeight(previousSizeableElementHeight) {
    this.updateState({
      previousSizeableElementHeight
    });
  }

  setInitialState() {
    const previousSizeableElementHeight = null;

    this.setState({
      previousSizeableElementHeight
    });
  }

  static defaultProperties = {
    className: "horizontal"
  };
}

export default withStyle(HorizontalSplitter)`

  height: 1rem;

`;
