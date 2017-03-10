'use strict';

var easyui = require('easyui'),
    Element = easyui.Element,
    window = easyui.window;

var options = require('./options');

const ESCAPE_KEYCODE = 27;

class Splitter extends Element {
  constructor(selector, situated, sizeableElement, dragHandler) {
    super(selector);

    this.situated = situated;
    this.sizeableElement = sizeableElement;
    this.dragHandler = dragHandler;

    this.disabled = false;

    this.dragging = false;

    window.on('mouseup blur', this.mouseUp.bind(this));  ///
    window.onMouseMove(this.mouseMove.bind(this));

    this.onMouseDown(this.mouseDown.bind(this));
    this.onMouseOver(this.mouseOver.bind(this));
    this.onMouseOut(this.mouseOut.bind(this));

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

  isDisabled() {
    return this.disabled;
  }

  onDrag(dragHandler) {
    this.dragHandler = dragHandler;
  }

  startDragging() {
    var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.on('keydown', this.keyDownHandler.bind(this));
    }

    this.dragging = true;
  }

  stopDragging() {
    var escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.off('keydown', this.keyDownHandler.bind(this));
    }

    this.dragging = false;
  }

  isDragging() {
    return this.dragging;
  }

  keyDownHandler(event) {
    var keyCode = event.keyCode;

    if (keyCode === ESCAPE_KEYCODE) {
      var dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }
    }
  }
}

module.exports = Splitter;
