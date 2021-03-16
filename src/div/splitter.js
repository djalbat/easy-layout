"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element } from "easy";

import SizeableDiv from "../div/sizeable";

import { resetCursor } from "../cursor";
import { ESCAPE_KEY_CODE } from "../constants";
import { ESCAPE_KEY_STOPS_DRAGGING } from "../options";

class SplitterDiv extends Element {
  constructor(selector, startDragHandler, stopDragHandler, dragHandler, options) {
    super(selector);

    this.startDragHandler = startDragHandler;
    this.stopDragHandler = stopDragHandler;
    this.dragHandler = dragHandler;
    this.options = options;
  }

  isOptionPresent(option) {
    const optionPresent = !!this.options[option];

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

  onDrag(dragHandler) {
    this.dragHandler = dragHandler;
  }

  enable() {
    this.removeClass("disabled");
  }

  disable() {
    this.addClass("disabled");
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

    const nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement();

    if (nextSiblingElement instanceof SizeableDiv) {
      direction = +1;
    }

    if (previousSiblingElement instanceof SizeableDiv) {
      direction = -1;
    }

    return direction;
  }

  getSizeableDiv() {
    let sizeableDiv;

    const nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement();

    if (nextSiblingElement instanceof SizeableDiv) {
      sizeableDiv = nextSiblingElement; ///
    }

    if (previousSiblingElement instanceof SizeableDiv) {
      sizeableDiv = previousSiblingElement; ///
    }

    return sizeableDiv;
  }

  getDragHandler() {
    return this.dragHandler;
  }

  startDrag() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.onKeyDown(this.keyDownHandler, this);
    }

    this.addClass("dragging");

    this.startDragHandler && this.startDragHandler();
  }

  stopDrag() {
    const escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.offKeyDown(this.keyDownHandler, this);
    }

    this.removeClass("dragging");

    this.stopDragHandler && this.stopDragHandler();
  }

  mouseUpHandler(event, element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDrag();
      }

      resetCursor();
    }
  }

  mouseOutHandler(event, element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (!dragging) {
        resetCursor();
      }
    }
  }

  keyDownHandler(event, element) {
    const { keyCode } = event;

    if (keyCode === ESCAPE_KEY_CODE) {
      const dragging = this.isDragging();

      if (dragging) {
        this.stopDrag();
      }

      resetCursor();
    }
  }

  didMount() {
    const { disabled } = this.properties;

    (disabled === true) ? ///
      this.disable() :
        this.enable();
  }

  willUnmout() {
    ///
  }

  initialise() {
    this.setInitialState();

    window.on("mouseup blur", this.mouseUpHandler.bind(this));  ///

    window.onMouseMove(this.mouseMoveHandler.bind(this));

    this.onMouseDown(this.mouseDownHandler.bind(this));
    this.onMouseOver(this.mouseOverHandler.bind(this));
    this.onMouseOut(this.mouseOutHandler.bind(this));
  }

  static tagName = "div";

  static defaultProperties = {
    className: "splitter"
  };

  static ignoredProperties = [
    "onStartDrag",
    "onStopDrag",
    "onDrag",
    "options",
    "disabled"
  ];

  static fromClass(Class, properties) {
    const { onStartDrag, onStopDrag, onDrag, options = {} } = properties,
          startDragHandler = onStartDrag, ///
          stopDragHandler = onStopDrag, ///
          dragHandler = onDrag, ///
          splitterDiv = Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, options);

    splitterDiv.initialise();

    return splitterDiv;
  }
}

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;
