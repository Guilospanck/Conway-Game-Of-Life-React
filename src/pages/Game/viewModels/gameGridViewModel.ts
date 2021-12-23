import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any,
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix,
    cellSize,
    canvasWidth,
    canvasHeight
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [_, setContextState] = useState(null);

  // Pan
  const isMouseDown = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const [drag, setDrag] = useState({ x: 0, y: 0 });

  useEffect(() => {
    _initialCanvasDrawing();

    canvasRef.current.addEventListener('mousedown', _onPointerDown);
    canvasRef.current.addEventListener('mouseup', _onPointerUp);
    canvasRef.current.addEventListener('mousemove', _onPointerMove);

    return function cleanup() {
      canvasRef.current.removeEventListener('mousedown', _onPointerDown);
      canvasRef.current.removeEventListener('mouseup', _onPointerUp);
      canvasRef.current.removeEventListener('mousemove', _onPointerMove);
    }
  }, []);

  useEffect(() => {
    _populateGrid();
  }, [matrix, drag]);


  const _initialCanvasDrawing = () => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext("2d");
    context.fillStyle = "rgb(100, 240, 150)";
    context.strokeStyle = "rgb(90, 90, 90)";
    context.lineWidth = 1;

    contextRef.current = context;
    setContextState(context);
  };

  const _populateGrid = () => {
    _clearGrid();
    _drawGrid();

    const rows = matrix.length;

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < matrix[j].length; i++) {
        if (matrix[j][i] === 1) {
          contextRef.current.fillRect(i * cellSize + 1 + drag.x, j * cellSize + 1 + drag.y, cellSize - 1, cellSize - 1);
        }
      }
    }

  };

  const _drawGrid = () => {
    for (let i = drag.x % cellSize; i < canvasWidth; i += cellSize) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(i + 0.5, 0);
      contextRef.current.lineTo(i + 0.5, canvasHeight);
      contextRef.current.stroke();
    }

    for (let j = drag.y % cellSize; j < canvasHeight; j += cellSize) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(0, j + 0.5);
      contextRef.current.lineTo(canvasWidth, j + 0.5);
      contextRef.current.stroke();
    }
  };

  const _clearGrid = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const _onPointerDown = useCallback((e: MouseEvent) => {
    dragStart.current.x = e.x;
    dragStart.current.y = e.y;

    isMouseDown.current = true;
  }, []);

  const _onPointerUp = useCallback((e: MouseEvent) => {
    isMouseDown.current = false;
  }, []);

  const _onPointerMove = useCallback((e: MouseEvent) => {
    if (!isMouseDown.current) return;

    const x = e.x - dragStart.current.x;
    const y = e.y - dragStart.current.y;

    setDrag({ x, y });
  }, []);

  return {
    canvasRef,
  };

};