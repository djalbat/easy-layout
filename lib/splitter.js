'use strict';

var inherits = require('../inherits');

var easyui = require('easyui'),
    Element = easyui.Element,
    Body = easyui.Body;

var body = new Body();

var Splitter = function(selectorOr$Element) {
  var element = new Element(selectorOr$Element),
      onMouseDown = element.onMouseDown.bind(this),
      onMouseOver = element.onMouseOver.bind(this),
      onMouseOut = element.onMouseOut.bind(this);

  inherits(this, element);

  this.super = {
    onMouseDown: onMouseDown,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut
  };

  this.dragHandler = null;

  this.dragging = false;

  this.disabled = false;
};

Splitter.prototype = {
  enable: function() {
    this.disabled = false;
  },

  disable: function() {
    this.disabled = true;
  },

  onDragging: function(dragHandler) {
    this.dragHandler = dragHandler;
  },

  startDragging: function() {
    this.dragging = true;
  },

  stopDragging: function() {
    this.dragging = false;
  },

  isDragging: function() {
    return this.dragging;
  },

  onMouseDown: function(handler) { this.super.onMouseDown(mouseEventHandler(handler).bind(this)); },
  onMouseOver: function(handler) { this.super.onMouseOver(mouseEventHandler(handler).bind(this)); },
  onMouseOut: function(handler) { this.super.onMouseOut(mouseEventHandler(handler).bind(this)); },
  onMouseUp: function(handler) { body.onMouseUp(mouseEventHandler(handler).bind(this)); },  ///
  onMouseMove: function(handler) { body.onMouseMove(mouseEventHandler(handler).bind(this)); } ///
};

function mouseEventHandler(handler) {
  return function(mouseTop, mouseLeft) {
    if (!this.disabled) {
      handler(mouseTop, mouseLeft);
    }
  };
}

module.exports = Splitter;
