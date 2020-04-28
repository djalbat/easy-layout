"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class ColumnsDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "columns"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = ColumnsDiv;
    }

    return Element.fromProperties(Class, properties);
  }
}

export default withStyle(ColumnsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: row;

`;
