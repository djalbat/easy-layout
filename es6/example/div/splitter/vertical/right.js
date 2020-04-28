"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index"; ///

class RightVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "right"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = RightVerticalSplitterDiv;
    }

    return VerticalSplitterDiv.fromProperties(Class, properties);
  }
}

export default withStyle(RightVerticalSplitterDiv)`

  background-color: black;

`;
