'use strict';

const easyui = require('easyui'),
      Element = easyui.Element;

class SizeableElement extends Element {
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
}

module.exports = SizeableElement;

function inPixels(quantity) {
  const matches = quantity.match(/([0-9]*)px$/),
        pixels = (matches === null) ?
                   undefined :
                     matches[1];

  return pixels;
}
