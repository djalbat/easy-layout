"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SizeableDiv extends Element {
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

export default withStyle(SizeableDiv)`

  display: flex;
  
`;
