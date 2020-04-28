"use strict";

import withStyle from "easy-with-style";  ///

import SizeableDiv from "../../../div/sizeable";

class RightSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "right"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = RightSizeableDiv;
    }

    return SizeableDiv.fromProperties(Class, properties);
  }
}

export default withStyle(RightSizeableDiv)`

  width: 24rem;
  max-width: 57.6rem;

`;
