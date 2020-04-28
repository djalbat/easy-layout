"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv } from "../../../index";  ///

class BlueRowDiv extends RowDiv {
  static defaultProperties = {
    className: "blue"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = BlueRowDiv;
    }

    return RowDiv.fromProperties(Class, properties);
  }
}

export default withStyle(BlueRowDiv)`

  background-color: blue;

`;
