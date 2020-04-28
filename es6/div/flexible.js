"use strict";

import { Element } from "easy";

export default class FlexibleDiv extends Element {
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

  static tagName = "div";

  static defaultProperties = {
    className: "flexible"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = FlexibleDiv;
    }

    return Element.fromProperties(Class, properties);
  }
}
