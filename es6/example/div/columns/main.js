"use strict";

import withStyle from "easy-with-style";  ///

import { ColumnsDiv } from "../../../index";  ///

class MainColumnsDiv extends ColumnsDiv {
  static defaultProperties = {
    className: "main"
  };
}

export default withStyle(MainColumnsDiv)`

  width: 100%;
  height: 100%;

`;
