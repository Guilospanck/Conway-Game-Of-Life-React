import { useEffect, useRef, useState } from "react";
import { Seeds } from '../../../shared/seeds';

export interface IUseGameViewModel {
  onClickRandomBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  matrix: [][],
  setMatrix: (matrix: [][]) => void,
  gridLength: number,
  setGridLength: (gridLength: number) => void,
  onClickStartGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickStopGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickResetGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const useGameViewModel = (): IUseGameViewModel => {

  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef([]);

  const [gridLength, setGridLength] = useState(50);
  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(0.2);

  const _generateMatrix = () => {
    const matrixArray = [];

    for (let i = 0; i < gridLength; i++) {
      matrixArray[i] = [];
      for (let j = 0; j < gridLength; j++) {
        matrixArray[i][j] = 0;
      }
    }

    matrixRef.current = matrixArray;
    setMatrix(matrixArray);
  };

  useEffect(() => {
    _generateMatrix();
  }, []);

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
    if (row >= 1 && row <= gridLength - 2 && column >= 1 && column <= gridLength - 2) {

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


  return {
    onClickRandomBtn,
    matrix,
    setMatrix,
    gridLength,
    setGridLength,
    onClickStartGameBtn,
    onClickStopGameBtn,
    onClickResetGameBtn
  };

};