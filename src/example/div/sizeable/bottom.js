"use strict";

import withStyle from "easy-with-style";  ///

import { SizeableDiv } from "../../../index"; ///

class BottomSizeableDiv extends SizeableDiv {
  static defaultProperties = {
    className: "bottom"
  };
}

export default withStyle(BottomSizeableDiv)`

  height: 24rem;

`;
