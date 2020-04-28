"use strict";

import withStyle from "easy-with-style";  ///

import { ColumnDiv, SizeableRowsDiv } from "../index";

import BlueRowDiv from "./div/row/blue";
import YellowRowDiv from "./div/row/yellow";
import BottomLeftDiv from "./div/bottomLeft";
import MainColumnsDiv from "./div/columns/main";
import LeftSizeableDiv from "./div/sizeable/left";
import RightSizeableDiv from "./div/sizeable/right";
import BottomSizeableDiv from "./div/sizeable/bottom";
import LeftVerticalSplitterDiv from "./div/splitter/vertical/left";
import RightVerticalSplitterDiv from "./div/splitter/vertical/right";
import MainHorizontalSplitterDiv from "./div/splitter/horizontal/main";
import DummyHorizontalSplitterDiv from "./div/splitter/horizontal/dummy";

const View = (properties) => {
  const { className } = properties,
        bottomLeftDiv =

          <BottomLeftDiv />

        ;

  return (

    <div className={`${className} view`}>
      <MainColumnsDiv>
        <LeftSizeableDiv>
          <SizeableRowsDiv>
            <YellowRowDiv />
            <DummyHorizontalSplitterDiv />
            {bottomLeftDiv}
          </SizeableRowsDiv>
        </LeftSizeableDiv>
        <LeftVerticalSplitterDiv afterSizeableElement />
        <div className="column rows">
          <div className="row columns">
            <ColumnDiv />
            <RightVerticalSplitterDiv beforeSizeableElement />
            <RightSizeableDiv>
              <SizeableRowsDiv>
                <BlueRowDiv />
              </SizeableRowsDiv>
            </RightSizeableDiv>
          </div>
          <MainHorizontalSplitterDiv beforeSizeableElement
                                     onDrag={(height) => {

                                       bottomLeftDiv.setHeight(height);

                                     }}
          />
          <BottomSizeableDiv />
        </div>
      </MainColumnsDiv>
    </div>

  );
};

export default withStyle(View)`

  width: 64rem;
  height: 64rem;
  
`;
