"use strict";

import withStyle from "easy-with-style";  ///

import RowsDiv from "../../div/rows";

class SizeableRowsDiv extends RowsDiv {
  static defaultProperties = {
    className: "sizeable"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = SizeableRowsDiv;
    }

    return RowsDiv.fromProperties(Class, properties);
  }
}

export default withStyle(SizeableRowsDiv)`

  height: 100%;

`;
