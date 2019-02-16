'use strict';

const easy = require('easy');

const { Element } = easy;

class SizeableElement extends Element {
  parentContext() {
    const sizeableElementStyle = this.style.bind(this), ///
          getSizeableElementWidth = this.getWidth.bind(this), ///
          setSizeableElementWidth = this.setWidth.bind(this), ///
          getSizeableElementHeight = this.getHeight.bind(this), ///
          setSizeableElementHeight = this.setHeight.bind(this), ///
          addSizeableElementClass = this.addClass.bind(this), ///
          removeSizeableElementClass = this.removeClass.bind(this); ///

    return ({
      sizeableElementStyle,
      getSizeableElementWidth,
      setSizeableElementWidth,
      getSizeableElementHeight,
      setSizeableElementHeight,
      addSizeableElementClass,
      removeSizeableElementClass
    });
  }

  static fromProperties(properties) { return Element.fromProperties(SizeableElement, properties); }
}

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;
