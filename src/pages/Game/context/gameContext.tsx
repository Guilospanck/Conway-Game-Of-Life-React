import React, { createContext, useRef, useState } from "react";

interface IGameContext {
  matrix: [][],
  setMatrix: (matrix: [][]) => void,
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

  // Zoom
  const scaleRef = useRef(0);

  const generateMatrix = (isReset = false) => {
    let matrixArray = [];
    if(!isReset){
      matrixArray = [...matrix];
    }

    for (let i = 0; i < canvasWidth; i++) {
      if (!matrixArray[i]) matrixArray[i] = [];
      for (let j = 0; j < canvasHeight; j++) {
        if (!matrixArray[i][j]) matrixArray[i][j] = 0;
      }
    }

    matrixRef.current = matrixArray;
    setMatrix(matrixArray);
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
    cellSizeRef
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};