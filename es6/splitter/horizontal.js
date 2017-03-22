'use strict';

const cursor = require('../cursor'),
      Splitter = require('../splitter');

class HorizontalSplitter extends Splitter {
  constructor(selector, beforeSizeableElement, afterSizeableElement, dragHandler) {
    super(selector, beforeSizeableElement, afterSizeableElement, dragHandler);

    this.sizeableElementHeight = null;

    this.mouseTop = null;
  }

  mouseUp() {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }
  }

  mouseMove(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              sizeableElement = this.getSizeableElement(),
              relativeMouseTop = mouseTop - this.mouseTop,
              height = this.sizeableElementHeight - direction * relativeMouseTop;

        sizeableElement.setHeight(height);

        const sizeableElementHeight = sizeableElement.getHeight();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementHeight);
        }
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableElement = this.getSizeableElement();
          
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = sizeableElement.getHeight();

      const dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
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

  static fromProperties(properties) {
    return Splitter.fromProperties(HorizontalSplitter, properties);
  }
}

module.exports = HorizontalSplitter;
