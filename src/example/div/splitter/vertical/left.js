"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index"; ///

class LeftVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "left"
  };
}

export default withStyle(LeftVerticalSplitterDiv)`

  background-color: black;

`;
