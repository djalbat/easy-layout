"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element, eventTypes } from "easy";

import SizeableDiv from "../div/sizeable";
import SizeableSection from "../section/sizeable";

import { resetCursor } from "../cursor";
import { ESCAPE_KEY_CODE } from "../constants";
import { ESCAPE_KEY_STOPS_DRAGGING_OPTION } from "../options";

const { BLUR_EVENT_TYPE, DRAG_EVENT_TYPE, MOUSEUP_EVENT_TYPE, STOP_DRAG_EVENT_TYPE, START_DRAG_EVENT_TYPE } = eventTypes;

class SplitterDiv extends Element {
  constructor(selector, options) {
    super(selector);

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

  onDrag(dragHandler, element) {
    const eventType = DRAG_EVENT_TYPE,
          handler = dragHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offDrag(dragHandler, element) {
    const eventType = DRAG_EVENT_TYPE,
          handler = dragHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onStopDrag(stopDragHandler, element) {
    const eventType = STOP_DRAG_EVENT_TYPE,
          handler = stopDragHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offStopDrag(stopDragHandler, element) {
    const eventType = STOP_DRAG_EVENT_TYPE,
          handler = stopDragHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  onStartDrag(stopDragHandler, element) {
    const eventType = START_DRAG_EVENT_TYPE,
          handler = stopDragHandler;  ///

    this.addEventListener(eventType, handler, element);
  }

  offStartDrag(stopDragHandler, element) {
    const eventType = START_DRAG_EVENT_TYPE,
          handler = stopDragHandler;  ///

    this.removeEventListener(eventType, handler, element);
  }

  callHandlers(eventType, ...remainingArguments) {
    const eventListeners = this.findEventListeners(eventType);

    eventListeners.forEach((eventListener) => {
      const { handler, element: handlerElement } = eventListener,
            element = this; ///

      handler.call(handlerElement, ...remainingArguments, element);
    });
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
          previousSiblingElement = this.getPreviousSiblingElement(),
          nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement),
          previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);

    if (nextSiblingElementSizeableElement) {
      direction = +1;
    }

    if (previousSiblingElementSizeableElement) {
      direction = -1;
    }

    return direction;
  }

  getSizeableElement() {
    let sizeableElement;

    const nextSiblingElement = this.getNextSiblingElement(),
          previousSiblingElement = this.getPreviousSiblingElement(),
          nextSiblingElementSizeableElement = isElementSizeableElement(nextSiblingElement),
          previousSiblingElementSizeableElement = isElementSizeableElement(previousSiblingElement);

    if (nextSiblingElementSizeableElement) {
      sizeableElement = nextSiblingElement; ///
    }

    if (previousSiblingElementSizeableElement) {
      sizeableElement = previousSiblingElement; ///
    }

    return sizeableElement;
  }

  startDrag() {
    const eventType = START_DRAG_EVENT_TYPE,
          escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING_OPTION);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.onKeyDown(this.keyDownHandler, this);
    }

    this.addClass("dragging");

    this.callHandlers(eventType)
  }

  stopDrag() {
    const eventType = STOP_DRAG_EVENT_TYPE,
          escapeKeyStopsDraggingOptionPresent = this.isOptionPresent(ESCAPE_KEY_STOPS_DRAGGING_OPTION);

    if (escapeKeyStopsDraggingOptionPresent) {
      window.offKeyDown(this.keyDownHandler, this);
    }

    this.removeClass("dragging");

    this.callHandlers(eventType);
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
    const { onDrag, onStopDrag, onStartDrag, disabled } = this.properties,
          dragHandler = onDrag, ///
          stopDragHandler = onStopDrag, ///
          startDragHandler = onStartDrag; ///

    (disabled === true) ? ///
      this.disable() :
        this.enable();

    dragHandler && this.onDrag(dragHandler);
    stopDragHandler && this.onStopDrag(stopDragHandler);
    startDragHandler && this.onStartDrag(startDragHandler);

    window.on(`${BLUR_EVENT_TYPE} ${MOUSEUP_EVENT_TYPE}`, this.mouseUpHandler, this);  ///

    window.onMouseMove(this.mouseMoveHandler, this);

    this.onMouseDown(this.mouseDownHandler, this);
    this.onMouseOver(this.mouseOverHandler, this);
    this.onMouseOut(this.mouseOutHandler, this);
  }

  willUnmount() {
    const { onDrag, onStopDrag, onStartDrag } = this.properties,
          dragHandler = onDrag, ///
          stopDragHandler = onStopDrag, ///
          startDragHandler = onStartDrag; ///

    dragHandler && this.offDrag(dragHandler);
    stopDragHandler && this.offStopDrag(stopDragHandler);
    startDragHandler && this.offStartDrag(startDragHandler);

    window.off(`${BLUR_EVENT_TYPE} ${MOUSEUP_EVENT_TYPE}`, this.mouseUpHandler, this);  ///

    window.offMouseMove(this.mouseMoveHandler, this);

    this.offMouseDown(this.mouseDownHandler, this);
    this.offMouseOver(this.mouseOverHandler, this);
    this.offMouseOut(this.mouseOutHandler, this);
  }

  initialise() {
    this.setInitialState();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "splitter"
  };

  static ignoredProperties = [
    "onDrag",
    "options",
    "disabled",
    "onStopDrag",
    "onStartDrag"
  ];

  static fromClass(Class, properties) {
    const { options = {} } = properties,
          splitterDiv = Element.fromClass(Class, properties, options);

    return splitterDiv;
  }
}

export default withStyle(SplitterDiv)`

  flex-shrink: 0;

`;

function isElementSizeableElement(element) {
  const elementSizeableElement = (element instanceof SizeableDiv) || (element instanceof SizeableSection);

  return elementSizeableElement;
}
