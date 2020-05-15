"use strict";

import withStyle from "easy-with-style";  ///

import { VerticalSplitterDiv } from "../../../../index";  ///

class RightVerticalSplitterDiv extends VerticalSplitterDiv {
  static defaultProperties = {
    className: "right"
  };
}

export default withStyle(RightVerticalSplitterDiv)`

  background-color: black;

`;
