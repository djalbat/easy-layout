"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dragMixins } from "easy-drag-and-drop";

import SizeableDiv from "../div/sizeable";

import { resetCursor } from "../cursor";

class SplitterDiv extends Element {
  stopDragCustomHandler = (event, element, dropElement, aborted, done) => {
    resetCursor();

    done();
  }

  mouseOutHandler = (event, element) => {
    resetCursor();
  }

  getSizeableDiv() {
    let sizeableDiv;

    const nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement(),
          nextSiblingElementSizeableDiv = (nextSiblingElement instanceof SizeableDiv),
          previousSiblingElementSizeableDiv = (previousSiblingElement instanceof SizeableDiv);

    if (nextSiblingElementSizeableDiv) {
      sizeableDiv = nextSiblingElement; ///
    }

    if (previousSiblingElementSizeableDiv) {
      sizeableDiv = previousSiblingElement; ///
    }

    return sizeableDiv;
  }

  getDirection() {
    let direction;

    const nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement(),
          nextSiblingElementSizeableDiv = (nextSiblingElement instanceof SizeableDiv),
          previousSiblingElementSizeableDiv = (previousSiblingElement instanceof SizeableDiv);

    if (nextSiblingElementSizeableDiv) {
      direction = +1;
    }

    if (previousSiblingElementSizeableDiv) {
      direction = -1;
    }

    return direction;
  }

  getReferences() {
    const references = [];

    return references;
  }

  enable() {
    const dragEnabled = this.isDragEnabled();

    if (!dragEnabled) {
      this.enableDrag();

      this.onCustomDrag(this.dragCustomHandler);

      this.onCustomStopDrag(this.stopDragCustomHandler);

      this.onCustomStartDrag(this.startDragCustomHandler);
    }
  }

  disable() {
    const dragEnabled = this.isDragEnabled();

    if (dragEnabled) {
      this.offCustomStartDrag(this.startDragCustomHandler);

      this.offCustomStopDrag(this.stopDragCustomHandler);

      this.offCustomDrag(this.dragCustomHandler);

      this.disableDrag();
    }
  }

  isDisabled() {
    const dragEnabled = this.isDragEnabled(),
          disabled = !dragEnabled;

    return disabled;
  }

  didMount() {
    const { disabled = false } = this.properties;

    if (!disabled) {
      this.enable();
    }

    this.onMouseOver(this.mouseOverHandler);

    this.onMouseOut(this.mouseOutHandler);
  }

  willUnmount() {
    const disabled = this.isDisabled();

    this.offMouseOut(this.mouseOutHandler);

    this.offMouseOver(this.mouseOverHandler);

    if (!disabled) {
      this.disable();
    }
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static ignoredProperties = [
    "disabled"
  ];

  static defaultProperties = {
    className: "splitter"
  };
}

Object.assign(SplitterDiv.prototype, dragMixins);

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;
