"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index"; ///

class LeftVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "left"
  };

  static fromClass(Class, properties) {
    const after = true;

    Object.assign(properties, {
      after
    });

    return VerticalSplitterDiv.fromClass(Class, properties);
  }
}

export default withStyle(LeftVerticalSplitterDiv)`

  background-color: black;

`;
