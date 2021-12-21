import React from "react";
import { IUseGameViewModel } from "../viewModels/gameViewModel";

type Props = {
  viewModel: IUseGameViewModel
};

import {
  Grid, Cell,
  RandomInitializationBTN
} from './styles';

export const GameView = ({ viewModel }: Props) => {

  const _generateGrids = () => {
    const cells = [];
    
    viewModel.matrix.map((row, rowIdx) => {
      if(row.length > 1) {
        row.map((column, columnIdx) => {
          cells.push(<Cell key={`${rowIdx}-${columnIdx}`} live={column} />);
        });
      }
    });
    
    return cells;
  };

  const GamesGrid = () => {
    return (
      <>
        <RandomInitializationBTN onClick={viewModel.onClickRandomBtn}>Get Random</RandomInitializationBTN>
        <Grid gridLength={viewModel.gridLength}>
          {_generateGrids()}
        </Grid>
      </>
    );
  };

  return (
    <GamesGrid></GamesGrid>
  );
};