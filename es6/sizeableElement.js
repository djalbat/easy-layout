'use strict';

const easy = require('easy'),
      { Element } = easy;

class SizeableElement extends Element {
  setWidth(width) {
    const minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

    if (minimumWidth !== null) {
      width = Math.max(width, minimumWidth);
    }
    if (maximumWidth !== null) {
      width = Math.min(width, maximumWidth);
    }

    width = `${width}px`; ///

    super.setWidth(width);
  }

  setHeight(height) {
    const minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

    if (minimumHeight !== null) {
      height = Math.max(height, minimumHeight);
    }
    if (maximumHeight !== null) {
      height = Math.min(height, maximumHeight);
    }

    height = `${height}px`; ///

    super.setHeight(height);
  }

  getMinimumWidth() { 
    const minWidth = this.css('min-width'),
          minimumWidth = inPixels(minWidth);

    return minimumWidth;
  }

  getMinimumHeight() {
    const minHeight = this.css('min-height'),
          minimumHeight = inPixels(minHeight);

    return minimumHeight;
  }

  getMaximumWidth() {
    const maxWidth = this.css('max-width'),
          maximumWidth = inPixels(maxWidth);

    return maximumWidth;
  }

  getMaximumHeight() {
    const maxHeight = this.css('max-height'),
          maximumHeight = inPixels(maxHeight);

    return maximumHeight;
  }

  static fromProperties(properties) {
    return Element.fromProperties(SizeableElement, properties);
  }
}

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;

function inPixels(quantity) {
  let pixels = null;

  const matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pixels = secondMatch;  ///
  }

  return pixels;
}

function second(array) { return array[1]; }
