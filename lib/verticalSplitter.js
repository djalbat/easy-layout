'use strict';

var inherits = require('../inherits');

var cursor = require('./cursor'),
    Splitter = require('./splitter');

var VerticalSplitter = function(selectorOr$Element, situated, sizeableElement, dragHandler) {
  inherits(this, new Splitter(selectorOr$Element));

  this.situated = situated;
  this.sizeableElement = sizeableElement;
  this.dragHandler = dragHandler;

  this.mouseLeft = null;

  this.sizeableElementWidth = null;

  this.onMouseDown(function(mouseTop, mouseLeft) {
    cursor.columnResize();

    this.mouseLeft = mouseLeft;

    this.sizeableElementWidth = this.sizeableElement.getWidth();

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
    cursor.columnResize();
  });

  this.onMouseOut(function() {
    cursor.reset();
  });

  this.onMouseMove(function(mouseTop, mouseLeft) {
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
  }.bind(this));
};

VerticalSplitter.situated = {
  TO_THE_LEFT_OF: +1,
  TO_THE_RIGHT_OF: -1
};

module.exports = VerticalSplitter;
