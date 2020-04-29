"use strict";

import withStyle from "easy-with-style";  ///

import { window, Element } from "easy";

import { ESCAPE_KEY_CODE } from "../constants";
import { ESCAPE_KEY_STOPS_DRAGGING } from "../options";
import { resetCursor, rowResizeCursor, columnResizeCursor } from "../cursor";

class SplitterDiv extends Element {
  constructor(selector, startDragHandler, stopDragHandler, dragHandler, horizontal, vertical, before, after, options) {
    super(selector);

    this.startDragHandler = startDragHandler;
    this.stopDragHandler = stopDragHandler;
    this.dragHandler = dragHandler;

    this.horizontal = horizontal;
    this.vertical = vertical;
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

  mouseOverHandler(event, element) {
    const disabled = this.isDisabled();

    if (!disabled) {
      if (this.vertical) {
        columnResizeCursor();
      }

      if (this.horizontal) {
        rowResizeCursor();
      }
    }
  }

  mouseMoveHandler(event, element) {
    const { pageX, pageY } = event,
          mouseTop = pageY,  ///
          mouseLeft = pageX,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging();

      if (dragging) {
        const direction = this.getDirection(),
              sizeableDiv = this.getSizeableDiv();

        if (this.vertical) {
          const previousMouseLeft = this.getPreviousMouseLeft(),
                previousSizeableDivWidth = this.getPreviousSizeableDivWidth(),
                relativeMouseLeft = mouseLeft - previousMouseLeft;

          let sizeableDivWidth = previousSizeableDivWidth - direction * relativeMouseLeft;

          const width = sizeableDivWidth; ///

          sizeableDiv.setWidth(width);

          sizeableDivWidth = sizeableDiv.getWidth();  ///

          this.dragHandler && this.dragHandler(sizeableDivWidth);
        }

        if (this.horizontal) {
          const previousMouseTop = this.getPreviousMouseTop(),
                previousSizeableDivHeight = this.getPreviousSizeableDivHeight(),
                relativeMouseTop = mouseTop - previousMouseTop;

          let sizeableDivHeight = previousSizeableDivHeight - direction * relativeMouseTop;

          const height = sizeableDivHeight; ///

          sizeableDiv.setHeight(height);

          sizeableDivHeight = sizeableDiv.getHeight();  ///

          this.dragHandler && this.dragHandler(sizeableDivHeight);
        }
      }
    }
  }

  mouseDownHandler(event, element) {
    const { pageX, pageY } = event,
          mouseTop = pageY,  ///
          mouseLeft = pageX,  ///
          disabled = this.isDisabled();

    if (!disabled) {
      const dragging = this.isDragging(),
            sizeableDiv = this.getSizeableDiv();

      if (this.vertical) {
        const sizeableDivWidth = sizeableDiv.getWidth(),
              previousMouseLeft = mouseLeft,  ///
              previousSizeableDivWidth = sizeableDivWidth;  ///

        this.setPreviousMouseLeft(previousMouseLeft);

        this.setPreviousSizeableDivWidth(previousSizeableDivWidth);

        columnResizeCursor();
      }

      if (this.horizontal) {
        const previousMouseTop = mouseTop,  ///
              sizeableDivHeight = sizeableDiv.getHeight(),
              previousSizeableDivHeight = sizeableDivHeight;  ///

        this.setPreviousMouseTop(previousMouseTop);

        this.setPreviousSizeableDivHeight(previousSizeableDivHeight);

        rowResizeCursor();
      }

      if (!dragging) {
        this.startDrag();
      }
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

  getPreviousMouseTop() {
    const state = this.getState(),
          { previousMouseTop } = state;

    return previousMouseTop;
  }

  getPreviousMouseLeft() {
    const state = this.getState(),
          { previousMouseLeft } = state;

    return previousMouseLeft;
  }

  getPreviousSizeableDivWidth() {
    const state = this.getState(),
          { previousSizeableDivWidth } = state;

    return previousSizeableDivWidth;
  }

  getPreviousSizeableDivHeight() {
    const state = this.getState(),
          { previousSizeableDivHeight } = state;

    return previousSizeableDivHeight;
  }

  setPreviousMouseTop(previousMouseTop) {
    this.updateState({
      previousMouseTop
    });
  }

  setPreviousMouseLeft(previousMouseLeft) {
    this.updateState({
      previousMouseLeft
    });
  }

  setPreviousSizeableDivWidth(previousSizeableDivWidth) {
    this.updateState({
      previousSizeableDivWidth
    });
  }

  setPreviousSizeableDivHeight(previousSizeableDivHeight) {
    this.updateState({
      previousSizeableDivHeight
    });
  }

  setInitialState() {
    const previousMouseTop = null,
          previousMouseLeft = null,
          previousSizeableDivWidth = null,
          previousSizeableDivHeight = null;

    this.setState({
      previousMouseTop,
      previousMouseLeft,
      previousSizeableDivWidth,
      previousSizeableDivHeight
    });
  }

  initialise(properties) {
    const { disabled } = properties;

    (disabled === true) ? ///
      this.disable() :
        this.enable();

    if (this.vertical) {
      this.addClass("vertical");
    }

    if (this.horizontal) {
      this.addClass("horizontal");
    }

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
    "horizontal",
    "vertical",
    "before",
    "after",
    "options",
    "disabled"
  ];

  static fromClass(Class, properties) {
    const { onStartDrag, onStopDrag, onDrag, horizontal, vertical, before, after, options = {} } = properties,
          startDragHandler = onStartDrag, ///
          stopDragHandler = onStopDrag, ///
          dragHandler = onDrag, ///
          splitterDiv = Element.fromClass(Class, properties, startDragHandler, stopDragHandler, dragHandler, horizontal, vertical, before, after, options);

    splitterDiv.initialise(properties);

    return splitterDiv;
  }
}

export default withStyle(SplitterDiv)`

  flex-shrink: 0;
  
  .vertical {
    width: 1rem;
    height: 100%;
  }
  
  .horizontal {
    width: 100%;
    height: 1rem;
  }

`;
