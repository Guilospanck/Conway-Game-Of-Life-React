import { useEffect, useState } from "react";

export interface IUseGameViewModel {
  onClickRandomBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  matrix: [][],
  setMatrix: (matrix: [][]) => void,
  gridLength: number,
  setGridLength: (gridLength: number) => void,
  onClickStartGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onClickStopGameBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const useGameViewModel = (): IUseGameViewModel => {

  const [matrix, setMatrix] = useState([]);
  const [gridLength, setGridLength] = useState(50);
  const [ticksInterval, setTicksInterval] = useState(null);

  const _generateMatrix = () => {
    const matrixArray = [];

    for (let i = 0; i < gridLength; i++) {
      matrixArray[i] = [];
      for (let j = 0; j < gridLength; j++) {
        matrixArray[i][j] = 0;
      }
    }

    setMatrix(matrixArray);
  };

  useEffect(() => {
    _generateMatrix();
  }, []);

  const onClickRandomBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const matrixCopy = [...matrix];

    for (let row = 0; row < matrixCopy.length; row++) {
      const matrixCopyRow = matrixCopy[row];
      for (let column = 0; column < matrixCopyRow.length; column++) {
        const randomValue = Math.floor(Math.random() * 2);
        matrixCopy[row][column] = randomValue;
      }

    }

    setMatrix(matrixCopy);

  };

  const onClickStartGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ticksInterval !== null) return;

    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), 1 * 1000);
    setTicksInterval(ticks);
  };

  const onClickStopGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    clearInterval(ticksInterval);
  };

  const _verifyPopulationAndUpdateIt = () => {

    const matrixCopy = [...matrix];

    matrixCopy.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if(cell === 1) _verifyLiveCell(rowIndex, columnIndex);
        else _verifyDeadCell(rowIndex, columnIndex);
      });
    });
  };

  const _verifyLiveCell = (row, column) => {
    /**
     * Any live cell with 2 or 3 live neighbours Survives. If not, dies.
     */

    

  };

  const _verifyDeadCell = (row, column) => {
    /**
     * Any dead cell with 3 LIVE neighbours becomes a live cell. Otherwise, stays dead.
     */
  };


  return {
    onClickRandomBtn,
    matrix,
    setMatrix,
    gridLength,
    setGridLength,
    onClickStartGameBtn,
    onClickStopGameBtn
  }

};