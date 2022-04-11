"use strict";

import withStyle from "easy-with-style";  ///

import { eventTypes } from "easy";

import Splitter from "../splitter";

import { columnResizeCursor } from "../../cursor";

const { DRAG_EVENT_TYPE } = eventTypes;

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
              sizeableElement = this.getSizeableElement();

        const previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;

        let sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;

        const width = sizeableElementWidth, ///
              eventType = DRAG_EVENT_TYPE;

        sizeableElement.setWidth(width);

        sizeableElementWidth = sizeableElement.getWidth();  ///

        this.callHandlers(eventType, sizeableElementWidth);
      }
    }
  }

  mouseDownHandler(event, element) {
    const { pageX } = event,
          mouseLeft = pageX,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            previousMouseLeft = mouseLeft,  ///
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth;  ///

      this.setPreviousMouseLeft(previousMouseLeft);

      this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

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

  getPreviousSizeableElementWidth() {
    const state = this.getState(),
          { previousSizeableElementWidth } = state;

    return previousSizeableElementWidth;
  }

  setPreviousMouseLeft(previousMouseLeft) {
    this.updateState({
      previousMouseLeft
    });
  }

  setPreviousSizeableElementWidth(previousSizeableElementWidth) {
    this.updateState({
      previousSizeableElementWidth
    });
  }

  setInitialState() {
    const previousMouseLeft = null,
          previousSizeableElementWidth = null;

    this.setState({
      previousMouseLeft,
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
