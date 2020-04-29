"use strict";

import withStyle from "easy-with-style";  ///

import { HorizontalSplitterDiv } from "../../../../index";

class MainHorizontalSplitterDiv extends HorizontalSplitterDiv {
  initialise(properties) {
    const { bottomLeftDiv } = properties;

    this.onDrag((height) => bottomLeftDiv.setHeight(height));

    super.initialise(properties);
  }

  static defaultProperties = {
    className: "main"
  };

  static fromClass(Class, properties) {
    const before = true;

    Object.assign(properties, {
      before
    });

    const leftHorizontalSplitterDiv = HorizontalSplitterDiv.fromClass(Class, properties);

    leftHorizontalSplitterDiv.initialise(properties);

    return leftHorizontalSplitterDiv;
  }
}

export default withStyle(MainHorizontalSplitterDiv)`

  background-color: black;

`;
