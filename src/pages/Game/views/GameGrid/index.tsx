import React, { useMemo } from "react";
import { IUseGameGridViewModel } from "../../viewModels/gameGridViewModel";
import {
  Container, CanvasStyled
} from './styles';

type Props = {
  viewModel: IUseGameGridViewModel
};

export const GameGridView = ({ viewModel }: Props) => {

  return (
    <Container>
      <CanvasStyled
        ref={viewModel.canvasRef}
        width="800"
        height="600"
      />
    </Container>
  );

};