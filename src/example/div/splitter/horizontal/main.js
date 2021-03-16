"use strict";

import withStyle from "easy-with-style";  ///

import { HorizontalSplitterDiv } from "../../../../index";  ///

class MainHorizontalSplitterDiv extends HorizontalSplitterDiv {
  initialise() {
    const { bottomLeftDiv } = this.properties;

    this.onDrag((height) => bottomLeftDiv.setHeight(height));

    super.initialise();
  }

  static defaultProperties = {
    className: "main"
  };

  static fromClass(Class, properties) {
    const leftHorizontalSplitterDiv = HorizontalSplitterDiv.fromClass(Class, properties);

    leftHorizontalSplitterDiv.initialise();

    return leftHorizontalSplitterDiv;
  }
}

export default withStyle(MainHorizontalSplitterDiv)`

  background-color: black;

`;
