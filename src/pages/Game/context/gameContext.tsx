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
  numberOfXCells: number,
  setNumberOfXCells: (numberOfXCells: number) => void,
  numberOfYCells: number,
  setNumberOfYCells: (numberOfYCells: number) => void,
};

export const GameContext = createContext<IGameContext | null>(null);

export const GameContextProvider = ({ children }) => {

  const [matrix, setMatrix] = useState([]);
  const matrixRef = useRef([]);

  const [ticksInterval, setTicksInterval] = useState(null);

  const [generationSpeed, setGenerationSpeed] = useState(1);

  const [cellSize, setCellSize] = useState(20);
  const [numberOfXCells, setNumberOfXCells] = useState(0);
  const [numberOfYCells, setNumberOfYCells] = useState(0);

  const defaultContext: IGameContext = {
    matrix, setMatrix,
    ticksInterval, setTicksInterval,
    generationSpeed, setGenerationSpeed,
    matrixRef,
    cellSize, setCellSize,
    numberOfXCells, setNumberOfXCells,
    numberOfYCells, setNumberOfYCells,
  };

  return <GameContext.Provider value={defaultContext}> {children} </GameContext.Provider>

};