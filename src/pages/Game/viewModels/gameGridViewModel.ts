import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any,
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix, setMatrix,
    cellSize, setCellSize,
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight,
    dragRef,
    generateMatrix,
    scaleRef,
    matrixRef
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [_, setContextState] = useState(null);

  // Pan
  const isMouseDown = useRef(false);
  const isDragging = useRef(false);
  const [drag, setDrag] = useState({ x: 0, y: 0 });

  // Zoom
  const MIN_ZOOM = -3;
  const MAX_ZOOM = 3;
  const MAX_CELL_SIZE = 160;
  const MIN_CELL_SIZE = 2.5;

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
    canvasRef.current.addEventListener('mousewheel', _onWheelEvent, false);

    window.addEventListener('resize', _changeCanvasWidthAndHeightOnResize);

    return function cleanup() {
      canvasRef.current.removeEventListener('mousedown', _onPointerDown);
      canvasRef.current.removeEventListener('mouseup', _onPointerUp);
      canvasRef.current.removeEventListener('mousemove', _onPointerMove);
      canvasRef.current.removeEventListener('mousewheel', _onWheelEvent, false);
      window.removeEventListener('resize', _changeCanvasWidthAndHeightOnResize);
    }
  }, []);

  useEffect(() => {
    _populateGrid();
  }, [matrix, drag, cellSize]);

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

  const _fillGridOnClick = (e: MouseEvent) => {
    if (isDragging.current) return;

    // get mouse click position relative to canvas
    const x = e.offsetX;
    const REMOVING_LINE_WIDTH = Math.ceil(e.offsetY - (Math.ceil(e.offsetY / cellSize) * LINE_WIDTH) - (Math.ceil(e.offsetY / cellSize) * (LINE_WIDTH / 4)));
    const y = Math.max(REMOVING_LINE_WIDTH, 1);

    // get canvas width and height at the click moment
    // @ts-ignore
    const canvasWidthAtClickMoment = e.target.width as number;
    // @ts-ignore
    const canvasHeightAtClickMoment = e.target.height as number;

    // get grid clicked
    const xGrids = Math.round(canvasWidthAtClickMoment / cellSize);
    const yGrids = Math.round(canvasHeightAtClickMoment / cellSize);

    let xPosition = 0;
    let yPosition = 0;

    for (let index = 0; index < xGrids * cellSize; index += cellSize) {
      if (x > index && x <= index + cellSize) {
        break;
      }
      xPosition++;
    }

    for (let index = 0; index < yGrids * cellSize; index += cellSize) {
      if (y > index && y <= index + cellSize) {
        break;
      }
      yPosition++;
    }

    let matrixDeepCopy = JSON.parse(JSON.stringify(matrixRef.current));
    matrixDeepCopy[yPosition][xPosition] = 1;
    matrixRef.current = matrixDeepCopy;
    setMatrix(matrixDeepCopy);
  };

  const _onPointerDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    isMouseDown.current = true;
  }, []);

  const _onPointerUp = useCallback((e: MouseEvent) => {
    e.preventDefault();
    isMouseDown.current = false;
    _fillGridOnClick(e);
    isDragging.current = false;
  }, []);

  const _onPointerMove = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (!isMouseDown.current) return;

    isDragging.current = true;

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

  const _onWheelEvent = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const lastScale = scaleRef.current;
    let scaleRefCopy = scaleRef.current;

    scaleRefCopy += e.deltaY * -0.01;

    // restrict scale
    scaleRefCopy = Math.min(Math.max(MIN_ZOOM, scaleRefCopy), MAX_ZOOM);
    scaleRef.current = scaleRefCopy;

    const isZoomingIn = lastScale < scaleRefCopy;
    const isZoomLimit = lastScale === scaleRefCopy;

    if (isZoomLimit) return;

    let cellSizeCopy = cellSize;

    if (isZoomingIn) cellSizeCopy *= 2;
    else cellSizeCopy /= 2;

    // limit cellsize
    if (cellSizeCopy > MAX_CELL_SIZE) cellSizeCopy = MAX_CELL_SIZE;
    else if (cellSizeCopy < MIN_CELL_SIZE) cellSizeCopy = MIN_CELL_SIZE;

    // getMousePosition
    // const x = e.clientX;
    // const y = e.clientY;
    // dragRef.current = { x, y };

    setCellSize(cellSizeCopy);
  }, []);

  return {
    canvasRef,
  };

};