'use strict';

var easyui = require('easyui'),
    Element = easyui.Element,
    body = easyui.Body;

var options = require('./options');

const ESCAPE_KEYCODE = 27,
      NAMESPACE = 'EasyUI-Layout';

class Splitter extends Element {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector);

    this.situated = situated;
    this.sizeableElement = sizeableElement;
    this.dragHandler = dragHandler;

    this.dragging = false;
    this.disabled = false;

    this.onMouseUp(this.mouseUp.bind(this));
    this.onMouseDown(this.mouseDown.bind(this));
    this.onMouseMove(this.mouseMove.bind(this));
    this.onMouseOver(this.mouseOver);
    this.onMouseOut(this.mouseOut);

    this.options = {};
  }

  setOption(option) {
    this.options[option] = true;
  }

  unsetOption(option) {
    delete(this.options[option]);
  }

  hasOption(option) {
    option = (this.options[option] === true); ///

    return option;
  }
  
  enable() {
    this.disabled = false;
  }

  disable() {
    this.disabled = true;
  }

  onDrag(dragHandler) {
    this.dragHandler = dragHandler;
  }

  startDragging() {
    var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      body.on('keydown', this.keyDownHandler.bind(this), NAMESPACE);
    }

    this.dragging = true;
  }

  stopDragging() {
    var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      body.off('keydown', NAMESPACE);
    }

    this.dragging = false;
  }

  isDragging() {
    return this.dragging;
  }

  keyDownHandler(event) {
    var keyCode = event.keyCode || event.which;

    if (keyCode === ESCAPE_KEYCODE) {
      var dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }
    }
  }

  onMouseUp(handler) { body.onMouseUp(returnMouseEventHandler(handler).bind(this)); }
  onMouseDown(handler) { super.onMouseDown(returnMouseEventHandler(handler).bind(this)); }
  onMouseOver(handler) { super.onMouseOver(returnMouseEventHandler(handler).bind(this)); }
  onMouseOut(handler) { super.onMouseOut(returnMouseEventHandler(handler).bind(this)); }
  onMouseMove(handler) { body.onMouseMove(returnMouseEventHandler(handler).bind(this)) };
}

function returnMouseEventHandler(handler) {
  return function(mouseTop, mouseLeft) {
    if (!this.disabled) {
      handler(mouseTop, mouseLeft);
    }
  };
}

module.exports = Splitter;
