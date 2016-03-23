'use strict';

var cursor = require('./cursor'),
    Splitter = require('./splitter');

class HorizontalSplitter extends Splitter {
  constructor(selectorOr$Element, situated, sizeableElement, dragHandler) {
    super(selectorOr$Element);

    this.situated = situated;
    this.sizeableElement = sizeableElement;
    this.dragHandler = dragHandler;

    this.mouseTop = null;

    this.sizeableElementHeight = null;

    this.onMouseDown(function(mouseTop, mouseLeft) {
      cursor.rowResize();

      this.mouseTop = mouseTop;

      this.sizeableElementHeight = this.sizeableElement.getHeight();

      var dragging = this.isDragging();

      if (!dragging) {
        this.startDragging();
      }
    }.bind(this));

    this.onMouseUp(function() {
      cursor.reset();

      if (this.dragging) {
        this.stopDragging();
      }
    }.bind(this));

    this.onMouseOver(function() {
      cursor.rowResize();
    });

    this.onMouseOut(function() {
      cursor.reset();
    });

    this.onMouseMove(function(mouseTop, mouseLeft) {
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
    }.bind(this));
  }
}

HorizontalSplitter.situated = {
  ABOVE: +1,
  BELOW: -1
};

module.exports = HorizontalSplitter;
