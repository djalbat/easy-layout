"use strict";

import withStyle from "easy-with-style";  ///

import { HorizontalSplitterDiv } from "../../../../index"; ///

class LeftHorizontalSplitterDiv extends HorizontalSplitterDiv {
  static defaultProperties = {
    className: "main"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = LeftHorizontalSplitterDiv;
    }

    return HorizontalSplitterDiv.fromProperties(Class, properties);
  }
}

export default withStyle(LeftHorizontalSplitterDiv)`

  background-color: black;

`;
