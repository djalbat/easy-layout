"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { dragMixins } from "easy-drag-and-drop";

import SizeableDiv from "../div/sizeable";

import { resetCursor } from "../cursor";

class SplitterDiv extends Element {
  stopDragHandler = (dropElement, aborted, element, done) => {
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
    this.enableDrag();

    this.onDrag(this.dragHandler);

    this.onStopDrag(this.stopDragHandler);

    this.onStartDrag(this.startDragHandler);

    this.onMouseOver(this.mouseOverHandler);

    this.onMouseOut(this.mouseOutHandler);
  }

  willUnmount() {
    this.offMouseOut(this.mouseOutHandler);

    this.offMouseOver(this.mouseOverHandler);

    this.offStartDrag(this.startDragHandler);

    this.offStopDrag(this.stopDragHandler);

    this.offDrag(this.dragHandler);

    this.disableDrag();
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static ignoredProperties = [
    "onDrag",
    "disabled",
    "onStopDrag",
    "onStartDrag"
  ];

  static defaultProperties = {
    className: "splitter"
  };

  static fromClass(Class, properties) {
    const splitterDiv = Element.fromClass(Class, properties);

    return splitterDiv;
  }
}

Object.assign(SplitterDiv.prototype, dragMixins);

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;
