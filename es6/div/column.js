"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class ColumnDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "column"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = ColumnDiv;
    }

    return Element.fromProperties(Class, properties);
  }
}

export default withStyle(ColumnDiv)`

  display: flex;
  flex-grow: 1;

`;
