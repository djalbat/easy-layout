"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "../../../index"; ///

class BottomSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "bottom"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = BottomSizeableDiv;
    }

    return SizeableDiv.fromProperties(Class, properties);
  }
}

export default withStyle(BottomSizeableDiv)`

  height: 24rem;
  max-height: 40rem;

`;
