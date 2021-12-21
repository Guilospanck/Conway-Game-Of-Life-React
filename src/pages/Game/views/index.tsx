import React from "react";
import { IUseGameViewModel } from "../viewModels/gameViewModel";

import { Grid, Cell } from './styles';

export const GameView = ({ viewModel: IUseGameViewModel }) => {

  const _generateGrids = (GRID_LENGTH: number) => {
    const cells = [];
    for (let index = 0; index < GRID_LENGTH * GRID_LENGTH; index++) {
      cells.push(<Cell key={index} bgColor={'gray'} />);
    }

    return cells;
  };

  const GamesGrid = () => {
    const GRID_LENGTH = 50;

    return (
      <Grid gridLength={GRID_LENGTH}>
        {_generateGrids(GRID_LENGTH)}
      </Grid>
    );
  };

  return (
    <GamesGrid></GamesGrid>
  );
};