"use strict";

import { Element } from "easy";

export default class SizeableDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "sizeable"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = SizeableDiv;
    }

    return Element.fromProperties(Class, properties);
  }
}
