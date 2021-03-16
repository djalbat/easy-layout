"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv } from "../../../index";  ///

class BlueRowDiv extends RowDiv {
  static defaultProperties = {
    className: "blue"
  };
}

export default withStyle(BlueRowDiv)`

  background-color: blue;

`;
