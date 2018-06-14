'use strict';

const cursor = require('../cursor'),
      Splitter = require('../splitter');

class HorizontalSplitter extends Splitter {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    super(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

    this.setInitialState();
  }

  mouseUp() {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }

      cursor.reset();
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
            previousMouseTop = this.getPreviousMouseTop(),
            previousSizeableElementHeight = this.getPreviousSizeableElementHeight(),
            relativeMouseTop = mouseTop - previousMouseTop;

        let sizeableElementHeight = previousSizeableElementHeight - direction * relativeMouseTop;

        const height = sizeableElementHeight; ///

        sizeableElement.setHeight(height);

        sizeableElementHeight = sizeableElement.getHeight();  ///

        dragHandler(sizeableElementHeight);
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const previousMouseTop = mouseTop,  ///
            dragging = this.isDragging(),
            sizeableElement = this.getSizeableElement(),
            sizeableElementHeight = sizeableElement.getHeight(),
            previousSizeableElementHeight = sizeableElementHeight;  /// 

      this.setPreviousMouseTop(previousMouseTop);

      this.setPreviousSizeableElementHeight(previousSizeableElementHeight);

      if (!dragging) {
        this.startDragging();
      }

      cursor.rowResize();
    }
  }

  mouseOver() {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.rowResize();
    }
  }

  mouseOut() {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();
    }
  }

  getPreviousMouseTop() { return this.fromState('previousMouseTop'); }

  getPreviousSizeableElementHeight() { return this.fromState('previousSizeableElementHeight'); }

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
      previousMouseTo,
      previousSizeableElementHeight
    });
  }

  static fromProperties(properties) { return Splitter.fromProperties(HorizontalSplitter, properties); }
}

Object.assign(HorizontalSplitter, {
  defaultProperties: {
    className: 'horizontal splitter'
  }
});

module.exports = HorizontalSplitter;
