"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class RowsDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "rows"
  };
}

export default withStyle(RowsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: column;

`;
