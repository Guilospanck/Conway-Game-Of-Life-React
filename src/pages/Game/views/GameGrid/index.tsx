import React from "react";
import { IUseGameGridViewModel } from "../../viewModels/gameGridViewModel";
import {
  Grid, RowGrid, ColumnGrid, Cell, EnumerationCell,
} from './styles';

type Props = {
  viewModel: IUseGameGridViewModel
};

export const GameGridView = ({ viewModel }: Props) => {

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

  return _generateGrids();

};