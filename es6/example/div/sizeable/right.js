"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "../../../index"; ///

class RightSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "right"
  };
}

export default withStyle(RightSizeableDiv)`

  width: 24rem;
  max-width: 57.6rem;

`;
