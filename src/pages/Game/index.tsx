import React from "react";

/** Views */
import { GameView } from './views';

/** ViewModels */
import { useGameViewModel } from "./viewModels/gameViewModel";

/** Components */

/** Context */
import { GameContextProvider } from "./context/gameContext";

export const Game = () => {
  const viewModel = useGameViewModel();

  return (
    <GameContextProvider>
      <GameView viewModel={viewModel} />
    </GameContextProvider>
  );
};