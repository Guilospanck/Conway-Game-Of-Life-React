import React from "react";
import { TitleContainer, Title } from './styles';

import GameSVGIcon from '../../../assets/svg/game2.svg';

export const GameView = ({ GameGridComponent, ControlsComponent }) => {

  return (
    <>
      <TitleContainer>
        <GameSVGIcon width={100} height={100} />
        <Title>Conway's Game of Life</Title>
      </TitleContainer>
      <GameGridComponent />
      <ControlsComponent />
    </>
  );
};