"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element } from "easy";

import { resetCursor } from "../cursor";
import { ESCAPE_KEY_CODE } from "../constants";
import { ESCAPE_KEY_STOPS_DRAGGING } from "../options";

class SplitterDiv extends Element {
  constructor(selector, startDragHandler, stopDragHandler, dragHandler, before, after, options) {
    super(selector);

    this.startDragHandler = startDragHandler;
    this.stopDragHandler = stopDragHandler;
    this.dragHandler = dragHandler;

    this.before = before;
    this.after = after;

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

    if (this.before) {
      direction = +1;
    }

    if (this.after) {
      direction = -1;
    }

    return direction;
  }

  getSizeableDiv() {
    let sizeableDiv;

    if (this.before) {
      const nextSiblingElement = this.getNextSiblingElement();

      sizeableDiv = nextSiblingElement; ///
    }

    if (this.after) {
      const previousSiblingElement = this.getPreviousSiblingElement();

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
    }
  }

  initialise(properties) {
    const { disabled } = properties;

    (disabled === true) ? ///
      this.disable() :
        this.enable();

    window.on("mouseup blur", this.mouseUpHandler.bind(this));  ///

    window.onMouseMove(this.mouseMoveHandler.bind(this));

    this.onMouseDown(this.mouseDownHandler.bind(this));
    this.onMouseOver(this.mouseOverHandler.bind(this));
    this.onMouseOut(this.mouseOutHandler.bind(this));

    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "splitter"
  };

  static ignoredProperties = [
    "onStartDrag",
    "onStopDrag",
    "onDrag",
    "before",
    "after",
    "options",
    "disabled"
  ];

  static fromClass(Class, properties) {
    const { onStartDrag, onStopDrag, onDrag, before, after, options = {} } = properties,
          startDragHandler = onStartDrag, ///
          stopDragHandler = onStopDrag, ///
          dragHandler = onDrag, ///
          splitterDiv = Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, before, after, options);

    splitterDiv.initialise(properties);

    return splitterDiv;
  }
}

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;
