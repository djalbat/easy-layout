"use strict";

import withStyle from "easy-with-style";  ///

import { eventTypes } from "easy";

import Splitter from "../splitter";

import { rowResizeCursor } from "../../cursor";

const { DRAG_EVENT_TYPE } = eventTypes;

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
              sizeableElement = this.getSizeableElement();

        const previousMouseTop = this.getPreviousMouseTop(),
              previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
              relativeMouseTop = mouseTop - previousMouseTop;

        let sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

        const height = sizeableElementHeight, ///
              eventType = DRAG_EVENT_TYPE;

        sizeableElement.setHeight(height);

        sizeableElementHeight = sizeableElement.getHeight();  ///

        this.callHandlers(eventType, sizeableElementHeight);
      }
    }
  }

  mouseDownHandler(event, element) {
    const { pageY } = event,
          mouseTop = pageY,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            previousMouseTop = mouseTop,  ///
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight;  ///

      this.setPreviousMouseTop(previousMouseTop);

      this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

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

  getPreviousSizeableElementHeight() {
    const state = this.getState(),
          { previousSizeableElementHeight } = state;

    return previousSizeableElementHeight;
  }

  setPreviousMouseTop(previousMouseTop) {
    this.updateState({
      previousMouseTop
    });
  }

  setPreviousSizeableElementHeight(previousSizeableElementHeight) {
    this.updateState({
      previousSizeableElementHeight
    });
  }

  setInitialState() {
    const previousMouseTop = null,
          previousSizeableElementHeight = null;

    this.setState({
      previousMouseTop,
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
