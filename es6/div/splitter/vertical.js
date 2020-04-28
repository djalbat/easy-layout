"use strict";

import withStyle from "easy-with-style";  ///

import SplitterDiv from "../../div/splitter";

import { columnResizeCursor, resetCursor } from "../../cursor";

class VerticalSplitterDiv extends SplitterDiv {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    super(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);
    
    this.setInitialState();
  }

  getVerticalSplitterDiv() {
    const verticalSplitterDiv = this;  ///

    return verticalSplitterDiv;
  }

  mouseUp() {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }

      resetCursor();
    }
  }

  mouseMove(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              dragHandler = this.getDragHandler(),
              sizeableElement = this.getSizeableElement(),
              previousMouseLeft = this.getPreviousMouseLeft(),
              previousSizeableElementWidth = this.getPreviousSizeableElementWidth(),
              relativeMouseLeft = mouseLeft - previousMouseLeft;
        
        let sizeableElementWidth = previousSizeableElementWidth - direction * relativeMouseLeft;
        
        const width = sizeableElementWidth; ///

        sizeableElement.setWidth(width);

        sizeableElementWidth = sizeableElement.getWidth();  ///

        dragHandler(sizeableElementWidth);
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const previousMouseLeft = mouseLeft,  ///
            dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementWidth = sizeableElement.getWidth(),
            previousSizeableElementWidth = sizeableElementWidth;  /// 

      this.setPreviousMouseLeft(previousMouseLeft);
      
      this.setPreviousSizeableElementWidth(previousSizeableElementWidth);

      if (!dragging) {
        this.startDragging();
      }

      columnResizeCursor();
    }
  }

  mouseOver() {
    const disabled = this.isDisabled();

    if (!disabled) {
      columnResizeCursor();
    }
  }

  mouseOut() {
    const disabled = this.isDisabled();

    if (!disabled) {
      resetCursor();
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

  parentContext() {
    const enableVerticalSplitterDiv = this.enable.bind(this),
          disableVerticalSplitterDiv = this.disable.bind(this);

    return ({
      enableVerticalSplitterDiv,
      disableVerticalSplitterDiv
    });
  }

  static defaultProperties = {
    className: "vertical"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = VerticalSplitterDiv;
    }

    return SplitterDiv.fromProperties(Class, properties);
  }
}

export default withStyle(VerticalSplitterDiv)`

  width: 0.8rem;

`;
