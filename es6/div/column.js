"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class ColumnDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "column"
  };
}

export default withStyle(ColumnDiv)`

  display: flex;
  flex-grow: 1;

`;
