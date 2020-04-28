"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class RowDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "row"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = RowDiv;
    }

    return Element.fromProperties(Class, properties);
  }
}

export default withStyle(RowDiv)`

  display: flex;
  flex-grow: 1;

`;
