import React, { createContext, useRef, useState } from "react";

interface IGameContext {
  matrix: number[][],
  setMatrix: (matrix: number[][]) => void,
  ticksInterval: NodeJS.Timer,
  setTicksInterval: (ticksInterval: NodeJS.Timer) => void,
  generationSpeed: number,
  setGenerationSpeed: (generationSpeed: number) => void,
  matrixRef: React.MutableRefObject<any[]>,
  cellSize: number,
  setCellSize: (cellSize: number) => void,
  canvasWidth: number,
  setCanvasWidth: (canvasWidth: number) => void,
  canvasHeight: number,
  setCanvasHeight: (canvasHeight: number) => void,
  dragRef: React.MutableRefObject<{ x: number; y: number; }>,
  generateMatrix: (isReset?: boolean) => void
  scaleRef: React.MutableRefObject<number>,
  cellSizeRef: React.MutableRefObject<number>,
  deepCopyMatrixWithNegativeIndexes: (matrixToBeCopiedFrom: [][]) => number[][],
  centralizeCanvas: (width?: number, height?: number) => void
};

export const GameContext = createContext<IGameContext | null>(null);

export const GameContextProvider = ({ children }) => {

  const CELL_SIZE = 20;

  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef([]);

  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(1);

  const [cellSize, setCellSize] = useState(CELL_SIZE);
  const cellSizeRef = useRef(CELL_SIZE);

  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  // Pan
  const dragRef = useRef({ x: 0, y: 0 });

  // maximum height and width for matrix size when panning (discovering the map)
  const maximumWidth = useRef(0);
  const maximumHeight = useRef(0);

  // Zoom
  const scaleRef = useRef(0);

  const deepCopyMatrixWithNegativeIndexes = (matrixToCopyFrom: [][]): number[][] => {
    const newMatrix = [];

    const rows = matrixToCopyFrom.length * 2;
    for (let j = -Math.floor(rows / 2); j < Math.ceil(rows / 2); j++) {
      const columns = matrixToCopyFrom[j]?.length * 2;
      if (!columns) continue;

      if (!newMatrix[j]) newMatrix[j] = [];

      for (let i = -Math.floor(columns / 2); i < Math.ceil(columns / 2); i++) {
        const element = matrixToCopyFrom[j][i] || 0;
        newMatrix[j][i] = element;
      }
    }

    return newMatrix;
  };

  const generateMatrix = (isReset = false) => {
    let matrixArray = [];
    if (!isReset) {
      matrixArray = deepCopyMatrixWithNegativeIndexes(matrixRef.current);
    }

    // get canvas size + panning
    let widthWithDrag = canvasWidth + Math.abs(dragRef.current.x);
    let heightWithDrag = canvasHeight + Math.abs(dragRef.current.y);

    // if a user discovered a part of the map already, it should stay discovered
    if (widthWithDrag > maximumWidth.current) maximumWidth.current = widthWithDrag;
    if (heightWithDrag > maximumHeight.current) maximumHeight.current = heightWithDrag;

    widthWithDrag = maximumWidth.current;
    heightWithDrag = maximumHeight.current;

    const height = Math.ceil(heightWithDrag / cellSize);
    const width = Math.ceil(widthWithDrag / cellSize);

    for (let j = -Math.floor(height / 2); j < Math.ceil(height / 2); j++) {
      if (!matrixArray[j]) matrixArray[j] = [];
      for (let i = -Math.floor(width / 2); i < Math.ceil(width / 2); i++) {
        if (!matrixArray[j][i]) matrixArray[j][i] = 0;
      }
    }

    matrixRef.current = matrixArray;
    setMatrix(matrixArray);
  };

  const centralizeCanvas = (width: number | undefined = null, height: number | undefined = null) => {
    const newCanvasWidth = width ?? canvasWidth;
    const newCanvasHeight = height ?? canvasHeight;
    dragRef.current.x = Math.floor(newCanvasWidth / 2);
    dragRef.current.y = Math.floor(newCanvasHeight / 2);
  };

  const defaultContext: IGameContext = {
    matrix, setMatrix,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,
    matrixRef,
    cellSize, setCellSize,
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight,
    dragRef,
    generateMatrix,
    scaleRef,
    cellSizeRef,
    deepCopyMatrixWithNegativeIndexes,
    centralizeCanvas
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};