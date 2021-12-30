import React from "react";
import { Container, TitleContainer, Title } from './styles';

import GameSVGIcon from '../../../assets/svg/game2.svg';

export const GameView = ({ GameGridComponent, ControlsComponent }) => {

  return (
    <Container>
      <TitleContainer>
        <GameSVGIcon width={60} height={60} />
        <Title>Conway's Game of Life</Title>
      </TitleContainer>
      <GameGridComponent />
      <ControlsComponent />
    </Container>
  );
};