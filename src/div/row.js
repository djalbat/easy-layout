"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class RowDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "row"
  };
}

export default withStyle(RowDiv)`

  display: flex;
  flex-grow: 1;

`;
