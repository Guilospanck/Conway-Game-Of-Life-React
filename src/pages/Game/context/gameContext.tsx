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
};

export const GameContext = createContext<IGameContext | null>(null);

export const GameContextProvider = ({ children }) => {

  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef([]);

  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(1);

  const [cellSize, setCellSize] = useState(20);

  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(600);

  const defaultContext: IGameContext = {
    matrix, setMatrix,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,
    matrixRef,
    cellSize, setCellSize,
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};