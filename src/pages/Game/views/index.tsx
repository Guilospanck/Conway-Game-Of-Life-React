import React from 'react'
import { Container, TitleContainer, Title } from './styles'

import GameSVGIcon from '../../../assets/svg/game2.svg'

export const GameView = ({
  GameGridComponent,
  ControlsComponent
}: {
  GameGridComponent: () => JSX.Element
  ControlsComponent: () => JSX.Element
}) => (
  <Container>
    <TitleContainer>
      <GameSVGIcon width={60} height={60} />
      <Title>Conway&apos;s Game of Life</Title>
    </TitleContainer>
    <GameGridComponent />
    <ControlsComponent />
  </Container>
)
