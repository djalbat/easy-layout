'use strict';

const easy = require('easy'),
      { window, Element } = easy;

const options = require('./options');

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
    const escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.on('keydown', this.keyDownHandler.bind(this));
    }

    this.dragging = true;
  }

  stopDragging() {
    const escapeKeyStopsDragging = this.hasOption(options.ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.off('keydown', this.keyDownHandler.bind(this));
    }

    this.dragging = false;
  }

  isDragging() {
    return this.dragging;
  }

  keyDownHandler(event) {
    const keyCode = event.keyCode;

    if (keyCode === ESCAPE_KEYCODE) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }
    }
  }

  static fromProperties(Class, properties) {
    const { situated, sizeableElement, onDrag } = properties,
          dragHandler = onDrag; ///

    return Element.fromProperties(Class, properties, situated, sizeableElement, dragHandler);
  }
}

Object.assign(Splitter, {
  tagName: 'div',
  ignoredAttributes: [
    'situated',
    'sizeableElement',
    'onDrag'
  ]
});

module.exports = Splitter;
