'use strict';

const easyui = require('easyui'),
      { Div } = easyui;

class SizeableElement extends Div {
  setWidth(width) {
    const minimumWidth = this.getMinimumWidth(),
          maximumWidth = this.getMaximumWidth();

    if (minimumWidth !== undefined) {
      width = Math.max(width, minimumWidth);
    }
    if (maximumWidth !== undefined) {
      width = Math.min(width, maximumWidth);
    }

    super.setWidth(width);
  }

  setHeight(height) {
    const minimumHeight = this.getMinimumHeight(),
          maximumHeight = this.getMaximumHeight();

    if (minimumHeight !== undefined) {
      height = Math.max(height, minimumHeight);
    }
    if (maximumHeight !== undefined) {
      height = Math.min(height, maximumHeight);
    }

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
    return Div.fromProperties(SizeableElement, properties);
  }
}

module.exports = SizeableElement;

function inPixels(quantity) {
  let pixels;

  const matches = quantity.match(/([0-9]*)px$/);

  if (matches !== null) {
    const secondMatch = second(matches);

    pixels = secondMatch;  ///
  }

  return pixels;
}

function second(array) { return array[1]; }
