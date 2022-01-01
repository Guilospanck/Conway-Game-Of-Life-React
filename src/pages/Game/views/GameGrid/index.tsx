import React from "react";
import { IUseGameGridViewModel } from "../../viewModels/gameGridViewModel";
import {
  Container, CanvasStyled
} from './styles';

type Props = {
  viewModel: IUseGameGridViewModel
};

export const GameGridView = ({ viewModel }: Props) => {

  return (
    <Container id="canvas-container">
      <CanvasStyled
        ref={viewModel.canvasRef}
      />
    </Container>
  );

};