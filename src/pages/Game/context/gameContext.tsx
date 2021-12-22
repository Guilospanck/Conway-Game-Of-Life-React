import React, { createContext, useRef, useState } from "react";

interface IGameContext {
  matrix: [][],
  setMatrix: (matrix: [][]) => void,
  gridLength: number,
  setGridLength: (gridLength: number) => void,
  ticksInterval: NodeJS.Timer,
  setTicksInterval: (ticksInterval: NodeJS.Timer) => void,
  generationSpeed: number,
  setGenerationSpeed: (generationSpeed: number) => void,
  matrixRef: React.MutableRefObject<any[]>,
  cellSize: number,
  setCellSize: (cellSize: number) => void,
};

export const GameContext = createContext<IGameContext | null>(null);

export const GameContextProvider = ({ children }) => {

  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef([]);

  const [gridLength, setGridLength] = useState(50);
  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(1);

  const [cellSize, setCellSize] = useState(20);

  const defaultContext: IGameContext = {
    matrix, setMatrix,
    gridLength, setGridLength,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,
    matrixRef,
    cellSize,
    setCellSize
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};