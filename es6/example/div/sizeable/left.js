"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "../../../index"; ///

class LeftSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "left"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = LeftSizeableDiv;
    }

    return SizeableDiv.fromProperties(Class, properties);
  }
}

export default withStyle(LeftSizeableDiv)`

  width: 36rem;
  max-width: 48rem;

`;
