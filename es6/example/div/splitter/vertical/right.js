"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index";

class RightVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "right"
  };

  static fromClass(Class, properties) {
    const before = true;

    Object.assign(properties, {
      before
    });

    return VerticalSplitterDiv.fromClass(Class, properties);
  }
}

export default withStyle(RightVerticalSplitterDiv)`

  background-color: black;

`;
