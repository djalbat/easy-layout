"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv } from "../../../index";  ///

class YellowRowDiv extends RowDiv {
  static defaultProperties = {
    className: "yellow"
  };
}

export default withStyle(YellowRowDiv)`

  background-color: yellow;

`;
