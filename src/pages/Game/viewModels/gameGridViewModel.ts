import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix,
    cellSize,
    numberOfXCells, setNumberOfXCells,
    numberOfYCells, setNumberOfYCells,
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [_, setContextState] = useState(null);

  useEffect(() => {
    _initialCanvasDrawing();
  }, []);

  useEffect(() => {
    _populateGrid();
  }, [matrix]);

  const _initialCanvasDrawing = () => {
    const canvas = canvasRef.current;
    const width = canvas.width;
    const height = canvas.height;

    const context = canvas.getContext("2d");
    context.fillStyle = "rgb(100, 240, 150)";
    context.strokeStyle = "rgb(90, 90, 90)";
    context.lineWidth = 1;

    contextRef.current = context;

    const numberOfXCells = width / cellSize;
    const numberOfYCells = height / cellSize;

    _drawGrid(numberOfXCells, numberOfYCells);

    setNumberOfXCells(numberOfXCells);
    setNumberOfYCells(numberOfYCells);
    setContextState(context);
  };

  const _drawGrid = (numberOfXCells: number, numberOfYCells: number) => {
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

  const _populateGrid = () => {
    _clearGrid();
    _drawGrid(numberOfXCells, numberOfYCells);

    const rows = matrix.length;

    for(let j = 0; j < rows; j++){      
      for(let i = 0; i < matrix[j].length; i++){
        if(matrix[j][i] === 1){
          // fillRect(x, y, width, height)
          contextRef.current.fillRect(i*cellSize-0.5, j*cellSize-0.5, cellSize, cellSize);
        }
      }
    }

  };

  const _clearGrid = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return {
    canvasRef
  };

};