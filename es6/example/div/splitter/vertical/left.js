"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index"; ///

class LeftVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "left"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = LeftVerticalSplitterDiv;
    }

    return VerticalSplitterDiv.fromProperties(Class, properties);
  }
}

export default withStyle(LeftVerticalSplitterDiv)`

  background-color: black;

`;
