"use strict";

import withStyle from "easy-with-style";  ///

import { SplitterDiv } from "../../../index"; ///

class LeftSplitterDiv extends SplitterDiv {
  static defaultProperties = {
    className: "left"
  };

  static fromClass(Class, properties) {
    const after = true,
          vertical = true;

    Object.assign(properties, {
      after,
      vertical
    });

    return SplitterDiv.fromClass(Class, properties);
  }
}

export default withStyle(LeftSplitterDiv)`

  background-color: black;

`;
