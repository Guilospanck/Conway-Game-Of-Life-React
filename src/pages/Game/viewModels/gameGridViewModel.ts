import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any,
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix,
    cellSize,
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight,
    dragRef,
    generateMatrix
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [_, setContextState] = useState(null);

  // Pan
  const isMouseDown = useRef(false);
  const [drag, setDrag] = useState({ x: 0, y: 0 });

  // Canvas Configs
  const FILL_STYLE = "rgb(100, 240, 150)";
  const STROKE_STYLE = "rgb(90, 90, 90)";
  const LINE_WIDTH = 1;

  useEffect(() => {
    _getNewCanvasSize();
    _initialCanvasDrawing();

    canvasRef.current.addEventListener('mousedown', _onPointerDown);
    canvasRef.current.addEventListener('mouseup', _onPointerUp);
    canvasRef.current.addEventListener('mousemove', _onPointerMove);

    window.addEventListener('resize', _changeCanvasWidthAndHeightOnResize);

    return function cleanup() {
      canvasRef.current.removeEventListener('mousedown', _onPointerDown);
      canvasRef.current.removeEventListener('mouseup', _onPointerUp);
      canvasRef.current.removeEventListener('mousemove', _onPointerMove);
      window.removeEventListener('resize', _changeCanvasWidthAndHeightOnResize);
    }
  }, []);

  useEffect(() => {
    _populateGrid();
  }, [matrix, drag]);

  useEffect(() => {
    _initialCanvasDrawing();
    generateMatrix();
    _populateGrid();
  }, [canvasHeight, canvasWidth]);

  const _initialCanvasDrawing = () => {
    const canvas = canvasRef.current;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const context = canvas.getContext("2d");
    context.fillStyle = FILL_STYLE;
    context.strokeStyle = STROKE_STYLE;
    context.lineWidth = LINE_WIDTH;

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
          contextRef.current.fillRect(
            i * cellSize + 1 + dragRef.current.x,
            j * cellSize + 1 + dragRef.current.y,
            cellSize - 1,
            cellSize - 1
          );
        }
      }
    }

  };

  const _drawGrid = () => {
    for (let i = dragRef.current.x % cellSize; i < canvasWidth; i += cellSize) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(i + 0.5, 0);
      contextRef.current.lineTo(i + 0.5, canvasHeight);
      contextRef.current.stroke();
    }

    for (let j = dragRef.current.y % cellSize; j < canvasHeight; j += cellSize) {
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
    e.preventDefault();
    isMouseDown.current = true;
  }, []);

  const _onPointerUp = useCallback((e: MouseEvent) => {
    e.preventDefault();
    isMouseDown.current = false;
  }, []);

  const _onPointerMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (!isMouseDown.current) return;

    const x = e.movementX + dragRef.current.x;
    const y = e.movementY + dragRef.current.y;

    dragRef.current = { x, y };

    setDrag({ x, y });

  }, []);

  const _changeCanvasWidthAndHeightOnResize = useCallback(() => {
    _getNewCanvasSize();
  }, []);

  const _getNewCanvasSize = () => {
    const canvasContainer = document.getElementById("canvas-container");
    const pixelWidth = canvasContainer.offsetWidth;
    const pixelHeight = canvasContainer.offsetHeight;

    const newCanvasWidth = pixelWidth - (pixelWidth % cellSize);
    const newCanvasHeight = pixelHeight - (pixelHeight % cellSize) + 1;

    setCanvasWidth(newCanvasWidth);
    setCanvasHeight(newCanvasHeight);
  };

  return {
    canvasRef,
  };

};