"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class ColumnsDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "columns"
  };
}

export default withStyle(ColumnsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: row;

`;
