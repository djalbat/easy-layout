"use strict";

import withStyle from "easy-with-style";  ///

import { ColumnDiv } from "../../../index"; ///

class MiddleColumnDiv extends ColumnDiv {
  static defaultProperties = {
    className: "middle"
  };
}

export default withStyle(MiddleColumnDiv)`

  position: relative;
  
`;
