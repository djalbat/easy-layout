"use strict";

import withStyle from "easy-with-style";  ///

import ColumnsDiv from "../../../div/columns";

class MainColumnsDiv extends ColumnsDiv {
  static defaultProperties = {
    className: "main"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = MainColumnsDiv;
    }

    return ColumnsDiv.fromProperties(Class, properties);
  }
}

export default withStyle(MainColumnsDiv)`

  width: 100%;
  height: 100%;

`;
