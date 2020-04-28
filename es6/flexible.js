"use strict";

import { Element } from "easy";

export default class FlexibleElement extends Element {
  parentContext() {
    const context = this.getContext(),
          getFlexibleElementWidth = this.getWidth.bind(this), ///
          setFlexibleElementWidth = this.setWidth.bind(this), ///
          getFlexibleElementHeight = this.getHeight.bind(this), ///
          setFlexibleElementHeight = this.setHeight.bind(this), ///
          addFlexibleElementClass = this.addClass.bind(this), ///
          removeFlexibleElementClass = this.removeClass.bind(this), ///
          parentContext = Object.assign(context, {
            getFlexibleElementWidth,
            setFlexibleElementWidth,
            getFlexibleElementHeight,
            setFlexibleElementHeight,
            addFlexibleElementClass,
            removeFlexibleElementClass
          });

    return parentContext;
  }

  static fromProperties(properties) { return Element.fromProperties(FlexibleElement, properties); }
}

Object.assign(FlexibleElement, {
  tagName: "div",
  defaultProperties: {
    className: "flexible"
  }
});
