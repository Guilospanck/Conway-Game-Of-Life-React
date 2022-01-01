import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/gameContext";

export interface IUseGameGridViewModel {
  canvasRef: any,
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {

  const {
    matrix, setMatrix,
    cellSize, setCellSize,
    cellSizeRef,
    canvasWidth, setCanvasWidth,
    canvasHeight, setCanvasHeight,
    dragRef,
    generateMatrix,
    scaleRef,
    matrixRef,
  } = useContext(GameContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [_, setContextState] = useState(null);

  // Pan
  const isMouseDown = useRef(false);
  const isDragging = useRef(false);
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  
  // Adding Matrix when panning
  const lastMaximumX = useRef(0);
  const lastMaximumY = useRef(0);

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
    _initialCanvasDrawing();
    _getNewCanvasSize();

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
    increaseMatrix();
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

    const rows = matrixRef.current.length;
    contextRef.current.font = '06px Arial';

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < matrixRef.current[j].length; i++) {

        contextRef.current.fillText(
          `${i}-${j}`,
          i * cellSize + 1 + dragRef.current.x + 5,
          j * cellSize + 1 + dragRef.current.y + 10
        );

        // contextRef.current.fillRect(
        //   i * cellSizeRef.current + 1 + dragRef.current.x,
        //   j * cellSizeRef.current + 1 + dragRef.current.y,
        //   cellSizeRef.current - 1,
        //   cellSizeRef.current - 1
        // );

        // if (matrix[j][i] === 1) {
        //   contextRef.current.fillRect(
        //     i * cellSize + 1 + dragRef.current.x,
        //     j * cellSize + 1 + dragRef.current.y,
        //     cellSize - 1,
        //     cellSize - 1
        //   );
        // }
      }
    }

  };

  const _drawGrid = () => {
    for (let i = dragRef.current.x % cellSize; i < canvasWidth; i += cellSize) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(i + LINE_WIDTH / 2, 0);
      contextRef.current.lineTo(i + LINE_WIDTH / 2, canvasHeight);
      contextRef.current.stroke();
    }

    for (let j = dragRef.current.y % cellSize; j < canvasHeight; j += cellSize) {
      contextRef.current.beginPath();
      contextRef.current.moveTo(0, j + LINE_WIDTH / 2);
      contextRef.current.lineTo(canvasWidth, j + LINE_WIDTH / 2);
      contextRef.current.stroke();
    }
  };

  const _clearGrid = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const _fillGridOnClick = (e: MouseEvent) => {
    if (isDragging.current) return;

    // get mouse click position relative to canvas
    const x = Math.floor((e.offsetX) / cellSizeRef.current);
    const y = Math.floor((e.offsetY) / cellSizeRef.current);

    let matrixDeepCopy = JSON.parse(JSON.stringify(matrixRef.current));
    matrixDeepCopy[y][x] = 1;
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

    const x = e.movementX + dragRef.current.x;
    const y = e.movementY + dragRef.current.y;

    isDragging.current = Math.abs(x) > 5 || Math.abs(y) > 5;

    if (!isDragging.current) return;

    dragRef.current = { x, y };
    setDrag({ x, y });
  }, []);

  const _changeCanvasWidthAndHeightOnResize = useCallback(() => {
    _getNewCanvasSize();
  }, []);

  const _getNewCanvasSize = () => {
    const canvasContainer = document.getElementById("canvas-container");
    const canvasContainerPadding = parseInt(window.getComputedStyle(canvasContainer).padding.replace("px", ""));

    const pixelWidth = canvasContainer.offsetWidth;
    const pixelHeight = canvasContainer.offsetHeight;
    const newCanvasWidth = pixelWidth - 2 * canvasContainerPadding;
    const newCanvasHeight = pixelHeight - 2 * canvasContainerPadding;

    const canvas = { width: newCanvasWidth, height: newCanvasHeight };

    setCanvasWidth(canvas.width);
    setCanvasHeight(canvas.height);
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

    cellSizeRef.current = cellSizeCopy;
    setCellSize(cellSizeCopy);
  }, []);


  const _updateMatrixValuesWhenOffsetIsPositive = (matrixCopy: number[][], xOffset: number, yOffset: number) => {
    const rows = matrix.length;
    for (let i = 0; i < rows; i++) {
      const columns = matrix[i].length;
      for (let j = 0; j < columns; j++) {
        matrixCopy[i][j] = 0;
        if (!matrixCopy[i + xOffset]) matrixCopy[i + xOffset] = [];
        matrixCopy[i + xOffset][j + yOffset] = matrix[i][j];
      }
    }
  };

  const increaseMatrix = () => {
    const matrixCopy = JSON.parse(JSON.stringify(matrix));

    // Get cells offset
    const xOffset = Math.floor(Math.abs(dragRef.current.x) / cellSizeRef.current);
    const yOffset = Math.floor(Math.abs(dragRef.current.y) / cellSizeRef.current);

    // matrix already filled
    if (xOffset <= lastMaximumX.current && yOffset <= lastMaximumY.current) return;

    // verifies if x and y offset are new maximum
    const xOffsetIsNewMaximum = xOffset > lastMaximumX.current;
    const yOffsetIsNewMaximum = yOffset > lastMaximumY.current;

    // set new Maximum X and Y
    if (xOffset > lastMaximumX.current) lastMaximumX.current = xOffset;
    if (yOffset > lastMaximumY.current) lastMaximumY.current = yOffset;

    // get Drag direction (up-left, up-right, down-left, down-right)
    const isUpLeft = dragRef.current.x > 0 && dragRef.current.y > 0;

    if (xOffsetIsNewMaximum && yOffsetIsNewMaximum && isUpLeft) {
      _updateMatrixValuesWhenOffsetIsPositive(matrixCopy, xOffset, yOffset);
    }

    matrixRef.current = matrixCopy;
    setMatrix(matrixCopy);
  };

  return {
    canvasRef,
  };

};