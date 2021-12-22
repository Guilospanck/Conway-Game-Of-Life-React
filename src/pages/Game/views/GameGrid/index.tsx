import React, { useMemo } from "react";
import { IUseGameGridViewModel } from "../../viewModels/gameGridViewModel";
import {
  Grid, RowGrid, ColumnGrid, Cell, EnumerationCell,
  Container, GridContainer
} from './styles';

type Props = {
  viewModel: IUseGameGridViewModel
};

const MemoizedGrid = React.memo((props: IUseGameGridViewModel) => {

  const _getCells = useMemo(() => {
    const cells = [];

    props.matrix.map((row: [], rowIdx: number) => {
      if (row.length > 1) {
        row.map((column, columnIdx) => {
          cells.push(<Cell key={`${rowIdx}-${columnIdx}`} live={column} />);
        });
      }
    });

    return cells;
  }, [props.matrix]);

  return (
    <GridContainer onMouseDown={() => props.onMouseDown()}>
      <Grid gridLength={props.gridLength} gridTranslate={props.gridTranslate}>
        {_getCells}
      </Grid>
    </GridContainer>
  );
});

export const GameGridView = ({ viewModel }: Props) => {

  return (
    <Container>
      <MemoizedGrid
        matrix={viewModel.matrix}
        onMouseDown={viewModel.onMouseDown}
        gridTranslate={viewModel.gridTranslate}
        gridLength={viewModel.gridLength}
      />
    </Container>
  );

};