"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv } from "../../../index";  ///

class YellowRowDiv extends RowDiv {
  static defaultProperties = {
    className: "yellow"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = YellowRowDiv;
    }

    return RowDiv.fromProperties(Class, properties);
  }
}

export default withStyle(YellowRowDiv)`

  background-color: yellow;

`;
