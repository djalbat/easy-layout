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
    this.removeClass("disabled");
  }

  disable() {
    this.addClass("disabled");
  }

  isDisabled() {
    const disabled = this.hasClass("disabled");

    return disabled;
  }

  didMount() {
    const { disabled = false } = this.properties;

    if (disabled) {
      this.disable();
    }

    this.enableDrag();

    this.onCustomDrag(this.dragCustomHandler);

    this.onCustomStopDrag(this.stopDragCustomHandler);

    this.onCustomStartDrag(this.startDragCustomHandler);

    this.onMouseOver(this.mouseOverHandler);

    this.onMouseOut(this.mouseOutHandler);
  }

  willUnmount() {
    this.offMouseOut(this.mouseOutHandler);

    this.offMouseOver(this.mouseOverHandler);

    this.offCustomStartDrag(this.startDragCustomHandler);

    this.offCustomStopDrag(this.stopDragCustomHandler);

    this.offCustomDrag(this.dragCustomHandler);

    this.disableDrag();
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
