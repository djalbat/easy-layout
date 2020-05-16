"use strict";

import withStyle from "easy-with-style";  ///

const PseudoHorizontalSplitterDiv = (properties) => {
  const { className } = properties;

  return (

    <div className={`${className} pseudo horizontal splitter`} />

  );
};

export default withStyle(PseudoHorizontalSplitterDiv)`

  height: 0.8rem;
  flex-shrink: 0;
  background-color: black;

`;
