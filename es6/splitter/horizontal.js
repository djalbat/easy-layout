'use strict';

var cursor = require('../cursor'),
    Splitter = require('../splitter');

class HorizontalSplitter extends Splitter {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector, situated, sizeableElement, dragHandler);

    this.sizeableElementHeight = null;

    this.mouseTop = null;
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
        var relativeMouseTop = mouseTop - this.mouseTop,
            height = this.sizeableElementHeight - this.situated * relativeMouseTop;

        this.sizeableElement.setHeight(height);

        var sizeableElementHeight = this.sizeableElement.getHeight();

        if (this.dragHandler) {
          this.dragHandler(sizeableElementHeight);
        }
      }
    }
  }

  mouseDown(mouseTop, mouseLeft) {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = this.sizeableElement.getHeight();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }
  }

  mouseOver() {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.rowResize();
    }
  }

  mouseOut() {
    var disabled = this.isDisabled();

    if (!disabled) {
      cursor.reset();
    }
  }
}

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
