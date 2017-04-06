'use strict';

const easy = require('easy');

const options = require('./options');

const ESCAPE_KEYCODE = 27;

const { ESCAPE_KEY_STOPS_DRAGGING } = options,
      { window, Element } = easy;

class Splitter extends Element {
  constructor(selector, beforeSizeableElement, afterSizeableElement, dragHandler, options) {
    super(selector);

    this.beforeSizeableElement = beforeSizeableElement;
    this.afterSizeableElement = afterSizeableElement;

    if (dragHandler !== undefined) {
      this.onDrag(dragHandler); 
    }
    
    if (options !== undefined) {
      this.setOptions(options);
    }
  
    this.disabled = false;
  
    this.dragging = false;
  
    window.on('mouseup blur', this.mouseUp.bind(this));  ///
   
    window.onMouseMove(this.mouseMove.bind(this));
  
    this.onMouseDown(this.mouseDown.bind(this));
    this.onMouseOver(this.mouseOver.bind(this));
    this.onMouseOut(this.mouseOut.bind(this));
  
    this.options = {};
  }

  isBeforeSizeableElement() {
    return this.beforeSizeableElement;
  }

  isAfterSizeableElement() {
    return this.afterSizeableElement;
  }

  getDirection() {
    let direction = undefined;  ///

    if (this.beforeSizeableElement) {
      direction = +1;
    }

    if (this.afterSizeableElement) {
      direction = -1;
    }

    return direction;
  }

  getSizeableElement() {
    let sizeableElement = undefined;  ///

    const direction = this.getDirection();

    switch (direction) {
      case -1:
        sizeableElement = this.getPreviousSiblingElement(); ///
        break;

      case +1:
        sizeableElement = this.getNextSiblingElement(); ///
        break;
    }

    return sizeableElement;
  }
  
  setOptions(options) {
    this.options = options;
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
    const escapeKeyStopsDragging = this.hasOption(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.onKeyDown(this.keyDownHandler.bind(this));
    }

    this.dragging = true;
  }

  stopDragging() {
    const escapeKeyStopsDragging = this.hasOption(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDragging) {
      window.offKeyDown(this.keyDownHandler.bind(this));
    }

    this.dragging = false;
  }

  isDragging() {
    return this.dragging;
  }

  keyDownHandler(keyCode) {
    if (keyCode === ESCAPE_KEYCODE) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }
    }
  }

  static fromProperties(Class, properties) {
    const { beforeSizeableElement, afterSizeableElement, onDrag, options } = properties,
          dragHandler = onDrag; ///

    return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, dragHandler, options);
  }
}

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: [
    'beforeSizeableElement',
    'afterSizeableElement',
    'onDrag',
    'options'
  ]
});

module.exports = Splitter;
