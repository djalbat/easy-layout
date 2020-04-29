"use strict";

import withStyle from "easy-with-style";  ///

import { SplitterDiv } from "../../../index";

class LeftSplitterDiv extends SplitterDiv {
  initialise(properties) {
    const { bottomLeftDiv } = properties;

    this.onDrag((height) => bottomLeftDiv.setHeight(height));

    super.initialise(properties);
  }

  static defaultProperties = {
    className: "main"
  };

  static fromClass(Class, properties) {
    const before = true,
          horizontal = true;

    Object.assign(properties, {
      before,
      horizontal
    });

    const leftSplitterDiv = SplitterDiv.fromClass(Class, properties);

    leftSplitterDiv.initialise(properties);

    return leftSplitterDiv;
  }
}

export default withStyle(LeftSplitterDiv)`

  background-color: black;

`;
