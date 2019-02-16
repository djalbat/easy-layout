'use strict';

const easy = require('easy');

const { Element } = easy;

class FlexibleElement extends Element {
  parentContext() {
    const getFlexibleElementWidth = this.getWidth.bind(this), ///
          setFlexibleElementWidth = this.setWidth.bind(this), ///
          getFlexibleElementHeight = this.getHeight.bind(this), ///
          setFlexibleElementHeight = this.setHeight.bind(this); ///

    return ({
      getFlexibleElementWidth,
      setFlexibleElementWidth,
      getFlexibleElementHeight,
      setFlexibleElementHeight
    });
  }

  static fromProperties(properties) { return Element.fromProperties(FlexibleElement, properties); }
}

Object.assign(FlexibleElement, {
  tagName: 'div',
  defaultProperties: {
    className: 'flexible'
  }
});

module.exports = FlexibleElement;
