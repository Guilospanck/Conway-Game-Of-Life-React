import React from "react";
import { IUseGameViewModel } from "../viewModels/gameViewModel";

type Props = {
  viewModel: IUseGameViewModel
};

import {
  Grid, RowGrid, ColumnGrid, Cell, EnumerationCell,
  RandomInitializationBTN,
  StartGameBTN, StopGameBTN, ResetGameBTN
} from './styles';

export const GameView = ({ viewModel }: Props) => {

  const _generateGrids = () => {
    const cells = [];
    const rowsNumbers = [];

    viewModel.matrix.map((row, rowIdx) => {
      rowsNumbers.push(<EnumerationCell key={rowIdx}>{rowIdx}</EnumerationCell>);
      if (row.length > 1) {
        row.map((column, columnIdx) => {
          cells.push(<Cell key={`${rowIdx}-${columnIdx}`} live={column} />);
        });
      }
    });

    return (
      <>
        <RowGrid gridLength={viewModel.gridLength}>{rowsNumbers}</RowGrid>
        <div style={{ display: 'flex' }}>
          <ColumnGrid gridLength={viewModel.gridLength}>{rowsNumbers}</ColumnGrid>
          <Grid gridLength={viewModel.gridLength}>
            {cells}
          </Grid>
        </div>
      </>
    );
  };

  const GamesGrid = () => {
    return (
      <>
        <RandomInitializationBTN onClick={(e) => viewModel.onClickRandomBtn(e)}>Get Random</RandomInitializationBTN>
        <StartGameBTN onClick={(e) => viewModel.onClickStartGameBtn(e)}>Start</StartGameBTN>
        <StopGameBTN onClick={(e) => viewModel.onClickStopGameBtn(e)}>Stop</StopGameBTN>
        <ResetGameBTN onClick={(e) => viewModel.onClickResetGameBtn(e)}>Reset</ResetGameBTN>
        <br></br>
        {_generateGrids()}
      </>
    );
  };

  return (
    <GamesGrid></GamesGrid>
  );
};