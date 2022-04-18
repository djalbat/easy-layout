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

  startDragHandler(element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth;  ///

      this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

      columnResizeCursor();
    }
  }

  dragHandler(relativeMouseTop, relativeMouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const direction = this.getDirection(),
            sizeableElement = this.getSizeableElement(),
            previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
            sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft,
            width = sizeableElementWidth; ///

      sizeableElement.setWidth(width);
    }
  }

  getPreviousSizeableElementWidth() {
    const state = this.getState(),
          { previousSizeableElementWidth } = state;

    return previousSizeableElementWidth;
  }

  setPreviousSizeableElementWidth(previousSizeableElementWidth) {
    this.updateState({
      previousSizeableElementWidth
    });
  }

  setInitialState() {
    const previousSizeableElementWidth = null;

    this.setState({
      previousSizeableElementWidth
    });
  }

  static defaultProperties = {
    className: "vertical"
  };
}

export default withStyle(VerticalSplitter)`

  width: 1rem;

`;
