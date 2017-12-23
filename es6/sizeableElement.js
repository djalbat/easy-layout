'use strict';

const easy = require('easy');

const { Element } = easy;

class SizeableElement extends Element {
  static fromProperties(properties) { return Element.fromProperties(SizeableElement, properties); }
}

Object.assign(SizeableElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'sizeable'
  }
});

module.exports = SizeableElement;
