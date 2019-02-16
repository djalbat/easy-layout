'use strict';

const easy = require('easy');

const { Element } = easy;

class FlexibleElement extends Element {
  getFlexibleElement() {
    const flexibleElement = this; ///

    return flexibleElement;
  }

  parentContext() {
    const context = this.getContext(),
          getFlexibleElement = this.getFlexibleElement.bind(this),
          parentContext = Object.assign(context, {
            getFlexibleElement
          });

    return parentContext;
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
