import { useEffect, useRef, useState } from "react";

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

  const [generationSpeed, setGenerationSpeed] = useState('Fast');

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

    // Random
    // for (let row = 0; row < matrixCopy.length; row++) {
    //   const matrixCopyRow = matrixCopy[row];
    //   for (let column = 0; column < matrixCopyRow.length; column++) {
    //     const randomValue = Math.floor(Math.random() * 2);
    //     matrixCopy[row][column] = randomValue;
    //   }
    // }

    // Beehive
    // matrixCopy[20][20] = 1;
    // matrixCopy[20][21] = 1;
    // matrixCopy[21][19] = 1;
    // matrixCopy[21][22] = 1;
    // matrixCopy[22][20] = 1;
    // matrixCopy[22][21] = 1;

    // Blinker Oscillator
    // matrixCopy[20][20] = 1;
    // matrixCopy[20][21] = 1;
    // matrixCopy[20][22] = 1;

    // Beacon
    // matrixCopy[20][20] = 1;
    // matrixCopy[20][21] = 1;
    // matrixCopy[21][20] = 1;
    // matrixCopy[22][23] = 1;
    // matrixCopy[23][22] = 1;
    // matrixCopy[23][23] = 1;

    // Glider
    // matrixCopy[20][20] = 1;
    // matrixCopy[21][21] = 1;
    // matrixCopy[22][19] = 1;
    // matrixCopy[22][20] = 1;
    // matrixCopy[22][21] = 1;

    // Small Exploder
    // matrixCopy[20][20] = 1;
    // matrixCopy[21][19] = 1;
    // matrixCopy[21][20] = 1;
    // matrixCopy[21][21] = 1;
    // matrixCopy[22][19] = 1;
    // matrixCopy[22][21] = 1;
    // matrixCopy[23][20] = 1;

    // Exploder
    // matrixCopy[20][18] = 1;
    // matrixCopy[20][20] = 1;
    // matrixCopy[20][22] = 1;
    // matrixCopy[21][18] = 1;
    // matrixCopy[21][22] = 1;
    // matrixCopy[22][18] = 1;
    // matrixCopy[22][22] = 1;
    // matrixCopy[23][18] = 1;
    // matrixCopy[23][22] = 1;
    // matrixCopy[24][18] = 1;
    // matrixCopy[24][20] = 1;
    // matrixCopy[24][22] = 1;

    // 10 cell row
    // matrixCopy[20][15] = 1;
    // matrixCopy[20][16] = 1;
    // matrixCopy[20][17] = 1;
    // matrixCopy[20][18] = 1;
    // matrixCopy[20][19] = 1;
    // matrixCopy[20][20] = 1;
    // matrixCopy[20][21] = 1;
    // matrixCopy[20][22] = 1;
    // matrixCopy[20][23] = 1;
    // matrixCopy[20][24] = 1;

    // Lightweight spaceship
    // matrixCopy[20][15] = 1;
    // matrixCopy[20][16] = 1;
    // matrixCopy[20][17] = 1;
    // matrixCopy[20][18] = 1;
    // matrixCopy[21][14] = 1;
    // matrixCopy[21][18] = 1;
    // matrixCopy[22][18] = 1;
    // matrixCopy[23][15] = 1;
    // matrixCopy[23][17] = 1;

    // Tumbler
    // matrixCopy[20][18] = 1;
    // matrixCopy[20][19] = 1;
    // matrixCopy[20][21] = 1;
    // matrixCopy[20][22] = 1;
    // matrixCopy[21][18] = 1;
    // matrixCopy[21][19] = 1;
    // matrixCopy[21][21] = 1;
    // matrixCopy[21][22] = 1;
    // matrixCopy[22][19] = 1;
    // matrixCopy[22][21] = 1;
    // matrixCopy[23][17] = 1;
    // matrixCopy[23][19] = 1;
    // matrixCopy[23][21] = 1;
    // matrixCopy[23][23] = 1;
    // matrixCopy[24][17] = 1;
    // matrixCopy[24][19] = 1;
    // matrixCopy[24][21] = 1;
    // matrixCopy[24][23] = 1;
    // matrixCopy[25][17] = 1;
    // matrixCopy[25][18] = 1;
    // matrixCopy[25][22] = 1;
    // matrixCopy[25][23] = 1;

    // Gosper Glider Gun
    matrixCopy[20][10] = 1;
    matrixCopy[20][11] = 1;
    matrixCopy[21][10] = 1;
    matrixCopy[21][11] = 1;

    matrixCopy[20][19] = 1;
    matrixCopy[20][20] = 1;
    matrixCopy[21][18] = 1;
    matrixCopy[21][20] = 1;
    matrixCopy[22][18] = 1;
    matrixCopy[22][19] = 1;

    matrixCopy[22][26] = 1;
    matrixCopy[22][27] = 1;
    matrixCopy[23][26] = 1;
    matrixCopy[23][28] = 1;
    matrixCopy[24][26] = 1;

    matrixCopy[20][32] = 1;
    matrixCopy[20][33] = 1;
    matrixCopy[19][32] = 1;
    matrixCopy[19][34] = 1;
    matrixCopy[18][33] = 1;
    matrixCopy[18][34] = 1;

    matrixCopy[30][34] = 1;
    matrixCopy[30][35] = 1;
    matrixCopy[30][36] = 1;
    matrixCopy[31][34] = 1;
    matrixCopy[32][35] = 1;

    matrixCopy[19][44] = 1;
    matrixCopy[19][45] = 1;
    matrixCopy[18][44] = 1;
    matrixCopy[18][45] = 1;

    matrixCopy[25][45] = 1;
    matrixCopy[25][46] = 1;
    matrixCopy[26][45] = 1;
    matrixCopy[26][47] = 1;
    matrixCopy[27][45] = 1;



    matrixRef.current = matrixCopy;
    setMatrix(matrixCopy);
  };

  const onClickStartGameBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (ticksInterval !== null) return;

    const ticks = setInterval(() => _verifyPopulationAndUpdateIt(), generationSpeed === 'Slow' ? 1 * 1000 : 0.02 * 1000);
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