'use strict';

const cursor = require('../cursor'),
      Splitter = require('../splitter');

class VerticalSplitter extends Splitter {
  constructor(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options) {
    super(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options);

    this.sizeableElementWidth = null;

    this.mouseLeft = null;
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
              relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - direction * relativeMouseLeft;

        sizeableElement.setWidth(width);

        const sizeableElementWidth = sizeableElement.getWidth();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementWidth);
        }
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const sizeableElement = this.getSizeableElement();

      cursor.columnResize();

      this.mouseLeft = mouseLeft;

      this.sizeableElementWidth = sizeableElement.getWidth();

      const dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }
  }

  mouseOver() {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.columnResize();
    }
  }

  mouseOut() {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();
    }
  }

  static fromProperties(properties) {
    return Splitter.fromProperties(VerticalSplitter, properties);
  }
}

Object.assign(VerticalSplitter, {
  defaultProperties: {
    className: 'vertical splitter'
  }
});

module.exports = VerticalSplitter;
