'use strict';

const easy = require('easy');

const options = require('./options');

const ESCAPE_KEYCODE = 27;

const { ESCAPE_KEY_STOPS_DRAGGING } = options,
      { window, Element } = easy;

class Splitter extends Element {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler  = function() {}, stopDraggingHandler = function() {}, dragHandler = function() {}, options = {}) {
    super(selector);

    this.beforeSizeableElement = beforeSizeableElement;
    this.afterSizeableElement = afterSizeableElement;
    this.startDraggingHandler = startDraggingHandler;
    this.stopDraggingHandler = stopDraggingHandler;

    this.dragHandler = dragHandler;

    this.options = options;
  
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

  isDisabled() {
    const disabled = this.hasClass('disabled');
    
    return disabled;
  }

  isDragging() {
    const dragging = this.hasClass('dragging');
    
    return dragging;
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

  isOptionPresent(option) {
    const optionPresent = (this.options[option] === true); ///

    return optionPresent;
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
    this.removeClass('disabled');
  }

  disable() {
    this.addClass('disabled');
  }

  startDragging() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.onKeyDown(this.keyDownHandler.bind(this));
    }

    this.addClass('dragging');
    
    this.startDraggingHandler();
  }

  stopDragging() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.offKeyDown(this.keyDownHandler.bind(this));
    }

    this.removeClass('dragging');

    this.stopDraggingHandler();
  }

  onDrag(dragHandler) {
    this.dragHandler = dragHandler;
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
    const { beforeSizeableElement, afterSizeableElement, onStartDragging, onStopDragging, onDrag, options, disabled } = properties,
          startDraggingHandler = onStartDragging, ///
          stopDraggingHandler = onStopDragging, ///
          dragHandler = onDrag, ///
          splitter = Element.fromProperties(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

    (disabled === true) ? ///
      splitter.disable() :
        splitter.enable();

    return splitter;
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
    'options',
    'disabled'
  ]
});

module.exports = Splitter;
