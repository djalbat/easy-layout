"use strict";

import withStyle from "easy-with-style";  ///

import { HorizontalSplitterDiv } from "../../../../index";  ///

class MainHorizontalSplitterDiv extends HorizontalSplitterDiv {
  static defaultProperties = {
    className: "main"
  };
}

export default withStyle(MainHorizontalSplitterDiv)`

  background-color: black;

`;
