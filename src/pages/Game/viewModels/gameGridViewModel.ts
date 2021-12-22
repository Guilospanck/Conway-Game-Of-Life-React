import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    cellSize
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  // const [numberOfXCells, setNumberOfXCells] = useState(0);
  // const [numberOfYCells, setNumberOfYCells] = useState(0);

  const [contextState, setContextState] = useState(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const width = canvas.width;
    const height = canvas.height;

    const context = canvas.getContext("2d");
    context.fillStyle = "rgb(100, 240, 150)";
    context.strokeStyle = "rgb(90, 90, 90)";
    context.lineWidth = 1;

    contextRef.current = context;

    console.log(width)
    console.log(height)

    const numberOfXCells = width / cellSize;
    const numberOfYCells = height / cellSize;

    console.log(numberOfXCells)
    console.log(numberOfYCells)

    // setNumberOfXCells(numberOfXCells);
    // setNumberOfYCells(numberOfYCells);

    drawGrid(numberOfXCells, numberOfYCells);

    setContextState(context);

  }, []);

  const drawGrid = (numberOfXCells: number, numberOfYCells: number) => {
    for (let i = 0; i < numberOfXCells; i++) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(i * cellSize - 0.5, 0);
      contextRef.current.lineTo(i * cellSize - 0.5, canvasRef.current.height);
      contextRef.current.stroke();
      contextRef.current.closePath();
    }

    for (let j = 0; j < numberOfYCells; j++) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(0, j * cellSize - 0.5);
      contextRef.current.lineTo(canvasRef.current.width, j * cellSize - 0.5);
      contextRef.current.stroke();
      contextRef.current.closePath();
    }
  };

  return {
    canvasRef
  };

};