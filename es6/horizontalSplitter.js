'use strict';

var cursor = require('./cursor'),
    Splitter = require('./splitter');

class HorizontalSplitter extends Splitter {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector, situated, sizeableElement, dragHandler);

    this.sizeableElementHeight = null;

    this.mouseTop = null;
  }

  mouseUp() {
    cursor.reset();

    if (this.dragging) {
      this.stopDragging();
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    cursor.rowResize();

    this.mouseTop = mouseTop;

    this.sizeableElementHeight = this.sizeableElement.getHeight();

    var dragging = this.isDragging();

    if (!dragging) {
      this.startDragging();
    }
  }

  mouseMove(mouseTop, mouseLeft) {
    var dragging = this.isDragging();

    if (dragging) {
      var relativeMouseTop = mouseTop - this.mouseTop,
          height = this.sizeableElementHeight - this.situated * relativeMouseTop;

      this.sizeableElement.setHeight(height);

      var sizeableElementHeight = this.sizeableElement.getHeight();

      if (this.dragHandler) {
        this.dragHandler(sizeableElementHeight);
      }
    }
  }

  mouseOver() {
    cursor.rowResize();
  }

  mouseOut() {
    cursor.reset();
  }
}

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
