'use strict';

var cursor = require('./cursor'),
    Splitter = require('./splitter');

class VerticalSplitter extends Splitter {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector, situated, sizeableElement, dragHandler);

    this.sizeableElementWidth = null;

    this.mouseLeft = null;
  }

  mouseUp() {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }
  }

  mouseMove(mouseTop, mouseLeft) {
    var disabled = this.isDisabled();

    if (!disabled) {
      var dragging = this.isDragging();

      if (dragging) {
        var relativeMouseLeft = mouseLeft - this.mouseLeft,
            width = this.sizeableElementWidth - this.situated * relativeMouseLeft;

        this.sizeableElement.setWidth(width);

        var sizeableElementWidth = this.sizeableElement.getWidth();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementWidth);
        }
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.columnResize();

      this.mouseLeft = mouseLeft;

      this.sizeableElementWidth = this.sizeableElement.getWidth();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }
  }

  mouseOver() {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.columnResize();
    }
  }

  mouseOut() {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();
    }
  }
}

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;
