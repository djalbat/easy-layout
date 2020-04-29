"use strict";

import withStyle from "easy-with-style";  ///

import { SplitterDiv } from "../../../index";

class RightSplitterDiv extends SplitterDiv {
  static defaultProperties = {
    className: "right"
  };

  static fromClass(Class, properties) {
    const before = true,
          vertical = true;

    Object.assign(properties, {
      before,
      vertical
    });

    return SplitterDiv.fromClass(Class, properties);
  }
}

export default withStyle(RightSplitterDiv)`

  background-color: black;

`;
