import React from 'react'

/** Views */
import { GameView } from './views'
import { GameGridView } from './views/GameGrid'
import { ControlsView } from './views/Controls'

/** ViewModels */
import { useGameGridViewModel } from './viewModels/gameGridViewModel'
import { useControlsViewModel } from './viewModels/controlsViewModel'

/** Context */
import { GameContextProvider } from './context/gameContext'

/** Components */
const GameGridComponent = () => {
  const viewModel = useGameGridViewModel()
  return <GameGridView viewModel={viewModel} />
}

const ControlsComponent = () => {
  const viewModel = useControlsViewModel()
  return <ControlsView viewModel={viewModel} />
}

export const Game = () => {
  return (
    <GameContextProvider>
      <GameView GameGridComponent={GameGridComponent} ControlsComponent={ControlsComponent} />
    </GameContextProvider>
  )
}
