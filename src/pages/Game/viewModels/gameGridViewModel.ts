import { useCallback, useContext, useEffect, useState } from "react";
import { GameContext } from "../context/gameContext";

interface IGridTranslate {
  x: number
  y: number
}

export interface IUseGameGridViewModel {
  matrix: [][],
  gridLength: number,
  onMouseDown: () => void,
  gridTranslate: IGridTranslate
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix,
    gridLength
  } = useContext(GameContext);

  const [gridTranslate, setGridTranslate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('mouseup', removeMouseMoveEventListener);

    return function cleanup() {
      removeMouseMoveEventListener();
      window.removeEventListener('mouseup', removeMouseMoveEventListener);
    }
  }, []);

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove);
  };

  const removeMouseMoveEventListener = useCallback(() => window.removeEventListener('mousemove', onMouseMove), []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    console.log('hey')
    let newPosX = gridTranslate.x + (e.x * 0.5);
    let newPosY = gridTranslate.y + (e.y * 0.5);
    setGridTranslate({ x: newPosX, y: newPosY })
  }, []);

  return {
    matrix,
    gridLength,
    onMouseDown,
    gridTranslate
  };

};