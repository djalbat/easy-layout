"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element } from "easy";

import { ESCAPE_KEY_CODE } from "../constants";
import { ESCAPE_KEY_STOPS_DRAGGING } from "../options";

class SplitterDiv extends Element {
  constructor(selector, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options) {
    super(selector);

    this.beforeSizeableElement = beforeSizeableElement;
    this.afterSizeableElement = afterSizeableElement;

    this.startDraggingHandler = startDraggingHandler || defaultStartDraggingHandler;
    this.stopDraggingHandler = stopDraggingHandler || defaultStopDraggingHandler;
    this.dragHandler = dragHandler || defaultDragHandler;
    this.options = options || defaultOptions;
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
    const disabled = this.hasClass("disabled");
    
    return disabled;
  }

  isDragging() {
    const dragging = this.hasClass("dragging");
    
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
    this.removeClass("disabled");
  }

  disable() {
    this.addClass("disabled");
  }

  startDragging() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.onKeyDown(this.keyDownHandler, this);
    }

    this.addClass("dragging");
    
    this.startDraggingHandler();
  }

  stopDragging() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.offKeyDown(this.keyDownHandler, this);
    }

    this.removeClass("dragging");

    this.stopDraggingHandler();
  }

  onDrag(dragHandler) {
    this.dragHandler = dragHandler;
  }

  keyDownHandler(event, element) {
    const { keyCode } = event;

    debugger

    if (keyCode === ESCAPE_KEY_CODE) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }
    }
  }

  initialise(properties) {
    const { disabled  } = properties;

    (disabled === true) ? ///
      this.disable() :
        this.enable();

    window.on("mouseup blur", this.mouseUp.bind(this));  ///

    window.onMouseMove(this.mouseMove.bind(this));

    this.onMouseDown(this.mouseDown.bind(this));
    this.onMouseOver(this.mouseOver.bind(this));
    this.onMouseOut(this.mouseOut.bind(this));
  }

  static tagName = "div";

  static defaultProperties = {
    className: "splitter"
  };

  static ignoredProperties = [
    "beforeSizeableElement",
    "afterSizeableElement",
    "onStartDragging",
    "onStopDragging",
    "onDrag",
    "options",
    "disabled"
  ];

  static fromClass(Class, properties) {
    const { beforeSizeableElement, afterSizeableElement, onStartDragging, onStopDragging, onDrag, options } = properties,
          startDraggingHandler = onStartDragging, ///
          stopDraggingHandler = onStopDragging, ///
          dragHandler = onDrag, ///
          splitterDiv = Element.fromClass(Class, properties, beforeSizeableElement, afterSizeableElement, startDraggingHandler, stopDraggingHandler, dragHandler, options);

    splitterDiv.initialise(properties);

    return splitterDiv;
  }
}

function defaultStartDraggingHandler() {}

function defaultStopDraggingHandler() {}

function defaultDragHandler() {}

const defaultOptions = {};

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;
