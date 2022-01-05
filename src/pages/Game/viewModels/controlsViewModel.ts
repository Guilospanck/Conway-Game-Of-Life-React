import { useCallback, useContext, useEffect, useState } from "react";
import { Seeds, SeedsNameArray, SeedsNameToShowInTheScreen } from '../../../shared/seeds';
import { GameContext } from "../context/gameContext";

export interface IUseControlsViewModel {
  onClickStartGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickStopGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickResetGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickCentralizeGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onSliderPositionCallback: (e: React.ChangeEvent<HTMLInputElement>) => void,
  gameStarted: boolean,
  SeedsNameArray: string[],
  onSelectChange: (seed: string) => void
  SeedsNameToShowInTheScreen: Object,
  seedSelected: string,
  onSelectFocus: () => void
}

export const useControlsViewModel = (): IUseControlsViewModel => {

  const {
    matrix, setMatrix,
    matrixRef,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,
    generateMatrix,
    centralizeCanvas
  } = useContext(GameContext);

  const [gameStarted, setGameStarted] = useState(false);
  const [seedSelected, setSeedSelected] = useState("Select");

  useEffect(() => {
    if (ticksInterval === null) return;

    clearInterval(ticksInterval);
    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), generationSpeed * 1000);
    setTicksInterval(ticks);
  }, [generationSpeed]);

  const onClickStartGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (ticksInterval !== null) return;

    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), generationSpeed * 1000);
    setTicksInterval(ticks);
    setGameStarted(true);
  };

  const onClickStopGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!gameStarted) return;

    clearInterval(ticksInterval);
    setTicksInterval(null);
    setGameStarted(false);
  };

  const onClickResetGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    onClickStopGameBtn(e);
    centralizeCanvas();
    generateMatrix(true);
    setGameStarted(false);
  };

  const onClickCentralizeGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    centralizeCanvas();
    generateMatrix();
  };  

  const _verifyPopulationAndUpdateIt = () => {
    let matrixObj = JSON.parse(JSON.stringify(matrixRef.current));

    Object.keys(matrixRef.current).forEach((j) => {
      if (!Object.keys(j).length) return;

      Object.keys(matrixRef.current[j]).forEach((i) => {
        const cell = matrixRef.current[j][i];
        const numberOfLiveNeighbors = _verifyLiveNeighbours(parseInt(j), parseInt(i), matrixRef.current);

        if (cell === 1) _verifyLiveCell(parseInt(j), parseInt(i), matrixObj, numberOfLiveNeighbors);
        else _verifyDeadCell(parseInt(j), parseInt(i), matrixObj, numberOfLiveNeighbors);
      });

    });

    matrixRef.current = matrixObj;
    setMatrix(matrixObj);
  };

  const _verifyLiveCell = (row: number, column: number, matrixCopy: {}, numberOfLiveNeighbors: number) => {
    /**
     * Any live cell with 2 or 3 LIVE neighbours survives. If not, dies.
     */
    if (numberOfLiveNeighbors !== 2 && numberOfLiveNeighbors !== 3) { // dies
      matrixCopy[row][column] = 0;
    }
  };

  const _verifyDeadCell = (row: number, column: number, matrixCopy: {}, numberOfLiveNeighbors: number) => {
    /**
     * Any dead cell with 3 LIVE neighbours becomes a live cell. Otherwise, stays dead.
     */
    if (numberOfLiveNeighbors === 3) { // lives
      matrixCopy[row][column] = 1;
    }
  };

  const _verifyLiveNeighbours = (row: number, column: number, originalMatrix: {}) => {
    let counter = 0;
    for (let j = row - 1; j <= row + 1; j++) {
      for (let i = column - 1; i <= column + 1; i++) {
        if (j === row && i === column) continue;
        if (!originalMatrix[j]) continue;

        const element = originalMatrix[j][i];
        if (element && element === 1) counter++;
      }
    }

    return counter;
  };

  const onSliderPositionCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const position = parseInt(event.target.value);

    if (position === 0) {
      setGenerationSpeed(1);
      return;
    }

    setGenerationSpeed(1 / position);

  }, []);

  const onSelectFocus = () => {
    setSeedSelected('Select');
  };

  const onSelectChange = (seed: string) => {
    if (seed === 'Select' || gameStarted) return;

    const matrixCopy = { ...matrix };

    if (seed !== "Random") {
      Seeds[seed](matrixCopy);
    } else {
      const randomPosition = Math.floor(Math.random() * SeedsNameArray.length);
      const seedName = SeedsNameArray[randomPosition];
      Seeds[seedName](matrixCopy);
    }

    matrixRef.current = matrixCopy;
    setSeedSelected(seed);
    setMatrix(matrixCopy);
  };

  return {
    onClickStartGameBtn,
    onClickStopGameBtn,
    onClickResetGameBtn,
    onClickCentralizeGameBtn,
    onSliderPositionCallback,
    gameStarted,
    SeedsNameArray,
    onSelectChange,
    SeedsNameToShowInTheScreen,
    seedSelected,
    onSelectFocus
  };

};