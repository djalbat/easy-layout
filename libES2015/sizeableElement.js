'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

class SizeableElement extends Element {
  setWidth(width) {
    var minimumWidth = this.getMinimumWidth(),
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
    var minimumHeight = this.getMinimumHeight(),
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
    var minWidth = this.css('min-width'),
        minimumWidth = inPixels(minWidth);

    return minimumWidth;
  }

  getMinimumHeight() {
    var minHeight = this.css('min-height'),
        minimumHeight = inPixels(minHeight);

    return minimumHeight;
  }

  getMaximumWidth() {
    var maxWidth = this.css('max-width'),
        maximumWidth = inPixels(maxWidth);

    return maximumWidth;
  }

  getMaximumHeight() {
    var maxHeight = this.css('max-height'),
        maximumHeight = inPixels(maxHeight);

    return maximumHeight;
  }
}

module.exports = SizeableElement;

function inPixels(quantity) {
  var matches = quantity.match(/([0-9]*)px$/),
      pixels = (matches === null) ?
                 undefined :
                   matches[1];

  return pixels;
}
