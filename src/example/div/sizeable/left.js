"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "../../../index"; ///

class LeftSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "left"
  };
}

export default withStyle(LeftSizeableDiv)`

  width: 24rem;
  min-width: 12rem;
  max-width: 36rem;

`;
