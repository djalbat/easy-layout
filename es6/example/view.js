"use strict";

import withStyle from "easy-with-style";  ///

import { RowDiv, RowsDiv, ColumnDiv, ColumnsDiv, options } from "../index";

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

const { ESCAPE_KEY_STOPS_DRAGGING } = options;

const View = (properties) => {
  const { className } = properties,
        bottomLeftDiv =

          <BottomLeftDiv />

        ,
        options = {
          ESCAPE_KEY_STOPS_DRAGGING
        };

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
        <LeftVerticalSplitterDiv options={options} afterSizeableElement />
        <ColumnDiv>
          <RowsDiv>
            <RowDiv>
              <ColumnsDiv>
                <ColumnDiv />
                <RightVerticalSplitterDiv options={options} beforeSizeableElement />
                <RightSizeableDiv>
                  <RowsDiv>
                    <BlueRowDiv />
                  </RowsDiv>
                </RightSizeableDiv>
              </ColumnsDiv>
            </RowDiv>
            <MainHorizontalSplitterDiv bottomLeftDiv={bottomLeftDiv} options={options} beforeSizeableElement />
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
