import { useContext } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  matrix: [][],
  gridLength: number,
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix,
    gridLength
  } = useContext(GameContext);

  return {
    matrix,
    gridLength
  };

};