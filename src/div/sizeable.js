"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SizeableDiv extends Element {
  static tagName = "div";

  static defaultProperties = {
    className: "sizeable"
  };
}

export default withStyle(SizeableDiv)`

  display: flex;
  
`;
