'use strict';

var easyui = require('easyui'),
    Element = easyui.Element;

class SizeableElement extends Element {
  constructor(selectorOr$Element, minimumWidth, minimumHeight, maximumWidth, maximumHeight) {
    super(selectorOr$Element);

    this.minimumWidth = minimumWidth;
    this.minimumHeight = minimumHeight;
    this.maximumWidth = maximumWidth;
    this.maximumHeight = maximumHeight;
  }

  setWidth(width) {
    if (width === 'auto') {
      super.setWidth(width);

      return;
    }

    if (this.minimumWidth) {
      width = Math.max(width, this.minimumWidth);
    }
    if (this.maximumWidth) {
      width = Math.min(width, this.maximumWidth);
    }

    super.setWidth(width);
  }

  setHeight(height) {
    if (height === 'auto') {
      super.setHeight(height);

      return;
    }

    if (this.minimumHeight) {
      height = Math.max(height, this.minimumHeight);
    }
    if (this.maximumHeight) {
      height = Math.min(height, this.maximumHeight);
    }

    super.setHeight(height);
  }
}

module.exports = SizeableElement;
