"use strict";

import withStyle from "easy-with-style";  ///

import ColumnsDiv from "../../div/columns";

class SizeableColumnsDiv extends ColumnsDiv {
  static defaultProperties = {
    className: "sizeable"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = SizeableColumnsDiv;
    }

    return ColumnsDiv.fromProperties(Class, properties);
  }
}

export default withStyle(SizeableColumnsDiv)`

  height: 100%;

`;
