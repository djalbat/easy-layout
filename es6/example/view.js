"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv } from "../index";

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

        ,
        dragHandler = (height) => bottomLeftDiv.setHeight(height);

  return (

    <div className={`${className} view`}>
      <MainColumnsDiv>
        <LeftSizeableDiv>
          <RowsDiv>
            <YellowRowDiv />
            <DummyHorizontalSplitterDiv />
            {bottomLeftDiv}
          </RowsDiv>
        </LeftSizeableDiv>
        <LeftVerticalSplitterDiv afterSizeableElement />
        <ColumnDiv>
          <RowsDiv>
            <RowDiv>
              <ColumnsDiv>
                <ColumnDiv />
                <RightVerticalSplitterDiv beforeSizeableElement />
                <RightSizeableDiv>
                  <RowsDiv>
                    <BlueRowDiv />
                  </RowsDiv>
                </RightSizeableDiv>
              </ColumnsDiv>
            </RowDiv>
            <MainHorizontalSplitterDiv onDrag={dragHandler} beforeSizeableElement />
            <BottomSizeableDiv />
          </RowsDiv>
        </ColumnDiv>
      </MainColumnsDiv>
    </div>

  );
};

export default withStyle(View)`

  width: 64rem;
  height: 64rem;
  
`;
