"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

class SizeableSection extends Element {
  static tagName = "section";

  static defaultProperties = {
    className: "sizeable"
  };
}

export default withStyle(SizeableSection)`

  display: flex;
  
`;
