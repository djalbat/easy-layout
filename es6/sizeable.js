'use strict';

const easy = require('easy');

const { Element } = easy;

class SizeableElement extends Element {
  getSizeableElement() {
    const sizeableElement = this; ///

    return sizeableElement;
  }

  parentContext() {
    const context = this.getContext(),
          getSizeableElement = this.getSizeableElement.bind(this),
          parentContext = Object.assign(context, {
            getSizeableElement
          });

    return parentContext;
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
