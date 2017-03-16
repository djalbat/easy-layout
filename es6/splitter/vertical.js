'use strict';

const cursor = require('../cursor'),
      Splitter = require('../splitter');

class VerticalSplitter extends Splitter {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector, situated, sizeableElement, dragHandler);

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
        const relativeMouseLeft = mouseLeft - this.mouseLeft,
              width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

        this.sizeableElement.setWidth(width);

        const sizeableElementWidth = this.sizeableElement.getWidth();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementWidth);
        }
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    const disabled = this.isDisabled();

    if (!disabled) {
      cursor.columnResize();

      this.mouseLeft = mouseLeft;

      this.sizeableElementWidth = this.sizeableElement.getWidth();

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
  situated: {
    TO_THE_LEFT_OF: +1,
    TO_THE_RIGHT_OF: -1
  }
});

module.exports = VerticalSplitter;
