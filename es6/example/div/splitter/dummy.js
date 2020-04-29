"use strict";

import withStyle from "easy-with-style";  ///

const DummyHorizontalSplitterDiv = (properties) => {
  const { className } = properties;

  return (

    <div className={`${className} dummy horizontal splitter`} />

  );
};

export default withStyle(DummyHorizontalSplitterDiv)`

  height: 0.8rem;
  flex-shrink: 0;
  background-color: black;

`;
