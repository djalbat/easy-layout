"use strict";

const easy = require("easy");

const { Element } = easy;

class SizeableElement extends Element {
  parentContext() {
    const context = this.getContext(),
          sizeableElementStyle = this.style.bind(this), ///
          getSizeableElementWidth = this.getWidth.bind(this), ///
          setSizeableElementWidth = this.setWidth.bind(this), ///
          getSizeableElementHeight = this.getHeight.bind(this), ///
          setSizeableElementHeight = this.setHeight.bind(this), ///
          addSizeableElementClass = this.addClass.bind(this), ///
          removeSizeableElementClass = this.removeClass.bind(this), ///
          parentContext = Object.assign(context, {
            sizeableElementStyle,
            getSizeableElementWidth,
            setSizeableElementWidth,
            getSizeableElementHeight,
            setSizeableElementHeight,
            addSizeableElementClass,
            removeSizeableElementClass
          });

    return parentContext;
  }

  static fromProperties(properties) { return Element.fromProperties(SizeableElement, properties); }
}

Object.assign(SizeableElement, {
  tagName: "div",
  defaultProperties: {
    className: "sizeable"
  }
});

module.exports = SizeableElement;
