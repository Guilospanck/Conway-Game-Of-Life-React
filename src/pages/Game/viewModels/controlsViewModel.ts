import { useCallback, useContext, useEffect } from "react";
import { Seeds } from '../../../shared/seeds';
import { GameContext } from "../context/gameContext";

export interface IUseControlsViewModel {
  onClickRandomBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickStartGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickStopGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickResetGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onSliderPositionCallback: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const useControlsViewModel = (): IUseControlsViewModel => {

  const {
    matrix, setMatrix,
    matrixRef,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,    
    canvasWidth,
    canvasHeight,
    _generateMatrix
  } = useContext(GameContext);  

  useEffect(() => {
    if (ticksInterval === null) return;

    clearInterval(ticksInterval);
    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), generationSpeed * 1000);
    setTicksInterval(ticks);
  }, [generationSpeed]);


  const onClickRandomBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const matrixCopy = [...matrix];
    Seeds["GosperGliderGun"](matrixCopy);

    matrixRef.current = matrixCopy;
    setMatrix(matrixCopy);
  };

  const onClickStartGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (ticksInterval !== null) return;

    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), generationSpeed * 1000);
    setTicksInterval(ticks);
  };

  const onClickStopGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    clearInterval(ticksInterval);
    setTicksInterval(null);
  };

  const onClickResetGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickStopGameBtn(e);
    _generateMatrix();
  };

  const _verifyPopulationAndUpdateIt = () => {
    let matrixDeepCopy = JSON.parse(JSON.stringify(matrixRef.current));

    matrixRef.current.forEach((row, rowIndex) => {
      row.forEach((cell: number, columnIndex: number) => {
        const numberOfLiveNeighbors = _verifyLiveNeighbours(rowIndex, columnIndex, matrixRef.current);

        if (cell === 1) _verifyLiveCell(rowIndex, columnIndex, matrixDeepCopy, numberOfLiveNeighbors);
        else _verifyDeadCell(rowIndex, columnIndex, matrixDeepCopy, numberOfLiveNeighbors);
      });
    });

    matrixRef.current = matrixDeepCopy;
    setMatrix(matrixDeepCopy);
  };

  const _verifyLiveCell = (row: number, column: number, matrixCopy: number[][], numberOfLiveNeighbors: number) => {
    /**
     * Any live cell with 2 or 3 LIVE neighbours survives. If not, dies.
     */
    if (numberOfLiveNeighbors !== 2 && numberOfLiveNeighbors !== 3) { // dies
      matrixCopy[row][column] = 0;
    }
  };

  const _verifyDeadCell = (row: number, column: number, matrixCopy: number[][], numberOfLiveNeighbors: number) => {
    /**
     * Any dead cell with 3 LIVE neighbours becomes a live cell. Otherwise, stays dead.
     */
    if (numberOfLiveNeighbors === 3) { // lives
      matrixCopy[row][column] = 1;
    }
  };

  const _verifyLiveNeighbours = (row: number, column: number, originalMatrix: number[][]) => {
    if (row >= 1 && row <= canvasWidth - 2 && column >= 1 && column <= canvasHeight - 2) {

      const leftNeighbor = originalMatrix[row][column - 1];
      const rightNeighbor = originalMatrix[row][column + 1];

      const topLeftNeighbor = originalMatrix[row - 1][column - 1];
      const topCenterNeighbor = originalMatrix[row - 1][column];
      const topRightNeighbor = originalMatrix[row - 1][column + 1];

      const bottomLeftNeighbor = originalMatrix[row + 1][column - 1];
      const bottomCenterNeighbor = originalMatrix[row + 1][column];
      const bottomRightNeighbor = originalMatrix[row + 1][column + 1];

      const neighbors = [leftNeighbor, rightNeighbor,
        topLeftNeighbor, topCenterNeighbor, topRightNeighbor,
        bottomLeftNeighbor, bottomCenterNeighbor, bottomRightNeighbor];

      return neighbors.filter(item => item === 1).length;
    }

    return 0;
  };

  const onSliderPositionCallback = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {    
    const position = parseInt(event.target.value);

    if(position === 0) {
      setGenerationSpeed(1);
      return;
    }

    setGenerationSpeed(1/position);

  }, []);

  return {
    onClickRandomBtn,
    onClickStartGameBtn,
    onClickStopGameBtn,
    onClickResetGameBtn,
    onSliderPositionCallback
  };

};