import React, { createContext, useRef, useState } from "react";

interface IGameContext {
  matrix: {},
  setMatrix: (matrix: {}) => void,
  ticksInterval: NodeJS.Timer,
  setTicksInterval: (ticksInterval: NodeJS.Timer) => void,
  generationSpeed: number,
  setGenerationSpeed: (generationSpeed: number) => void,
  matrixRef: React.MutableRefObject<{}>,
  canvasWidth: number,
  setCanvasWidth: (canvasWidth: number) => void,
  canvasHeight: number,
  setCanvasHeight: (canvasHeight: number) => void,
  dragRef: React.MutableRefObject<{ x: number; y: number; }>,
  generateMatrix: (isReset?: boolean) => void
  scaleRef: React.MutableRefObject<number>,
  cellSizeRef: React.MutableRefObject<number>,
  centralizeCanvas: (width?: number, height?: number) => void,
  MIN_ZOOM: number,
  MAX_ZOOM: number,
  MIN_CELL_SIZE: number,
  MAX_CELL_SIZE: number,
  CELL_SIZE: number,
};

export const GameContext = createContext<IGameContext | null>(null);

export const GameContextProvider = ({ children }) => {

  const CELL_SIZE = 80;

  const [matrix, setMatrix] = useState({});
  const matrixRef = useRef({});

  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(1);

  const cellSizeRef = useRef(CELL_SIZE);

  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  // Pan
  const dragRef = useRef({ x: 0, y: 0 });

  // Zoom
  const scaleRef = useRef(0);
  const MIN_ZOOM = -6;
  const MAX_ZOOM = 6;
  const MAX_CELL_SIZE = 160;
  const MIN_CELL_SIZE = 2.5;

  const generateMatrix = (isReset = false) => {
    let matrixObj = {};
    if (!isReset) {
      matrixObj = { ...matrixRef.current };
    }

    const height = Math.ceil(canvasHeight / MIN_CELL_SIZE);
    const width = Math.ceil(canvasWidth / MIN_CELL_SIZE);

    for (let j = -Math.floor(height / 2); j < Math.ceil(height / 2); j++) {
      if (!matrixObj[j]) matrixObj[j] = {};
      for (let i = -Math.floor(width / 2); i < Math.ceil(width / 2); i++) {
        if (!matrixObj[j][i]) matrixObj[j][i] = 0;
      }
    }

    matrixRef.current = matrixObj;
    setMatrix(matrixObj);
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
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight,
    dragRef,
    generateMatrix,
    scaleRef,
    cellSizeRef,
    centralizeCanvas,
    MIN_ZOOM, MAX_ZOOM, MIN_CELL_SIZE, MAX_CELL_SIZE,
    CELL_SIZE,
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};