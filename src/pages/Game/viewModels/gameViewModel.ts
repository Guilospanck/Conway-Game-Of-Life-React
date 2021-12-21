import { useEffect, useState } from "react";

export interface IUseGameViewModel {
  onClickRandomBtn: (e: React.MouseEvent<HTMLButtonElement>) => void,
  matrix: [][],
  setMatrix: (matrix: [][]) => void,
  gridLength: number,
  setGridLength: (gridLength: number) => void
}

export const useGameViewModel = (): IUseGameViewModel => {

  const [matrix, setMatrix] = useState([]);
  const [gridLength, setGridLength] = useState(50);

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

  return {
    onClickRandomBtn,
    matrix,
    setMatrix,
    gridLength,
    setGridLength
  }

};