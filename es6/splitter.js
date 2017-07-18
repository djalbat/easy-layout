'use strict';

const easy = require('easy');

const options = require('./options');

const ESCAPE_KEYCODE = 27;

const { ESCAPE_KEY_STOPS_DRAGGING } = options,
      { window, Element } = easy;

class Splitter extends Element {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler  = function() {}, stopDraggingHandler = function() {}, dragHandler = function() {}, disabled = false, options = {}) {
    super(selector);

    this.beforeSizeableElement = beforeSizeableElement;
    
    this.afterSizeableElement = afterSizeableElement;
    
    this.startDraggingHandler = startDraggingHandler;
    
    this.stopDraggingHandler = stopDraggingHandler;

    this.dragHandler = dragHandler;

    this.disabled = disabled;

    this.options = options;
  
    this.dragging = false;
  
    window.on('mouseup blur', this.mouseUp.bind(this));  ///
   
    window.onMouseMove(this.mouseMove.bind(this));
  
    this.onMouseDown(this.mouseDown.bind(this));
    this.onMouseOver(this.mouseOver.bind(this));
    this.onMouseOut(this.mouseOut.bind(this));
  }

  isBeforeSizeableElement() {
    return this.beforeSizeableElement;
  }

  isAfterSizeableElement() {
    return this.afterSizeableElement;
  }

  getDragHandler() {
    return this.dragHandler;
  }

  isOptionPresent(option) {
    const optionPresent = (this.options[option] === true); ///

    return optionPresent;
  }
  
  isDisabled() {
    return this.disabled;
  }

  isDragging() {
    return this.dragging;
  }
  
  getDirection() {
    let direction;

    if (this.beforeSizeableElement) {
      direction = +1;
    }

    if (this.afterSizeableElement) {
      direction = -1;
    }

    return direction;
  }

  getSizeableElement() {
    let sizeableElement;

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
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.onKeyDown(this.keyDownHandler.bind(this));
    }

    this.dragging = true;
    
    this.startDraggingHandler();
  }

  stopDragging() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.offKeyDown(this.keyDownHandler.bind(this));
    }

    this.dragging = false;

    this.stopDraggingHandler();
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
    const { beforeSizeableElement, afterSizeableElement, onStartDragging, onStopDragging, onDrag, disabled, options } = properties,
          startDraggingHandler = onStartDragging, ///
          stopDraggingHandler = onStopDragging, ///
          dragHandler = onDrag; ///

    return Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, disabled, options);
  }
}

Object.assign(Splitter, {
  tagName: 'div',
  ignoredProperties: [
    'beforeSizeableElement',
    'afterSizeableElement',
    'onStartDragging',
    'onStopDragging',
    'onDrag',
    'disabled',
    'options'
  ]
});

module.exports = Splitter;
