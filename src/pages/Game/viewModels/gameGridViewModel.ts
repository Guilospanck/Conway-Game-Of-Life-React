import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { GameContext } from '../context/gameContext'

export interface IUseGameGridViewModel {
  canvasRef: any
}

export const useGameGridViewModel = (): IUseGameGridViewModel => {
  const {
    matrix,
    setMatrix,
    cellSizeRef,
    canvasWidth,
    setCanvasWidth,
    canvasHeight,
    setCanvasHeight,
    dragRef,
    scaleRef,
    matrixRef,
    centralizeCanvas,
    generateMatrix,
    MIN_ZOOM,
    MAX_ZOOM,
    MIN_CELL_SIZE,
    MAX_CELL_SIZE,
    CELL_SIZE,
    contextRef
  } = useContext(GameContext)

  const canvasRef = useRef(null)

  const [, setContextState] = useState(null)

  // Pan
  const isMouseDown = useRef(false)
  const isDragging = useRef(false)
  const [drag, setDrag] = useState({ x: 0, y: 0 })

  const [cellSize, setCellSize] = useState(CELL_SIZE)

  // Canvas Configs
  const FILL_STYLE = 'rgb(100, 240, 150)'
  const STROKE_STYLE = 'rgb(90, 90, 90)'
  const LINE_WIDTH = 1

  useEffect(() => {
    _initialCanvasDrawing()
    const canvasSize = _getNewCanvasSize()
    setCanvasWidth(canvasSize.width)
    setCanvasHeight(canvasSize.height)
    centralizeCanvas(canvasSize.width, canvasSize.height)
    generateMatrix()

    canvasRef.current.addEventListener('mousedown', _onPointerDown)
    canvasRef.current.addEventListener('mouseup', _onPointerUp)
    canvasRef.current.addEventListener('mousemove', _onPointerMove)
    canvasRef.current.addEventListener('mousewheel', _onWheelEvent, false)

    window.addEventListener('resize', _changeCanvasWidthAndHeightOnResize)

    return function cleanup () {
      canvasRef.current.removeEventListener('mousedown', _onPointerDown)
      canvasRef.current.removeEventListener('mouseup', _onPointerUp)
      canvasRef.current.removeEventListener('mousemove', _onPointerMove)
      canvasRef.current.removeEventListener('mousewheel', _onWheelEvent, false)
      window.removeEventListener('resize', _changeCanvasWidthAndHeightOnResize)
    }
  }, [])

  useEffect(() => {
    _populateGrid()
  }, [matrix, cellSize, drag])

  useEffect(() => {
    _initialCanvasDrawing()
    generateMatrix()
    _populateGrid()
  }, [canvasHeight, canvasWidth])

  const _initialCanvasDrawing = () => {
    const canvas = canvasRef.current

    canvas.width = canvasWidth
    canvas.height = canvasHeight

    const context = canvas.getContext('2d', { alpha: false })
    context.fillStyle = FILL_STYLE
    context.strokeStyle = STROKE_STYLE
    context.lineWidth = LINE_WIDTH

    contextRef.current = context
    setContextState(context)
  }

  const _populateGrid = () => {
    _clearGrid()
    _drawGrid()

    Object.keys(matrixRef.current).forEach(j => {
      if (!Object.keys(j).length) return

      Object.keys(matrixRef.current[j]).forEach(i => {
        const element = matrixRef.current[j][i]

        if (element && element === 1) {
          contextRef.current.fillRect(
            parseInt(i) * cellSizeRef.current + LINE_WIDTH + dragRef.current.x,
            parseInt(j) * cellSizeRef.current + LINE_WIDTH + dragRef.current.y,
            cellSizeRef.current - 1,
            cellSizeRef.current - 1
          )
        }
      })
    })
  }

  const _drawGrid = () => {
    for (let i = dragRef.current.x % cellSizeRef.current; i < canvasWidth; i += cellSizeRef.current) {
      contextRef.current.beginPath()
      contextRef.current.moveTo(i + LINE_WIDTH / 2, 0)
      contextRef.current.lineTo(i + LINE_WIDTH / 2, canvasHeight)
      contextRef.current.stroke()
    }

    for (let j = dragRef.current.y % cellSizeRef.current; j < canvasHeight; j += cellSizeRef.current) {
      contextRef.current.beginPath()
      contextRef.current.moveTo(0, j + LINE_WIDTH / 2)
      contextRef.current.lineTo(canvasWidth, j + LINE_WIDTH / 2)
      contextRef.current.stroke()
    }
  }

  const _clearGrid = () => {
    contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
  }

  const _fillGridOnClick = (e: MouseEvent) => {
    if (isDragging.current) return

    // get mouse click position relative to canvas
    const x = Math.floor((e.offsetX + dragRef.current.x * -1) / cellSizeRef.current)
    const y = Math.floor((e.offsetY + dragRef.current.y * -1) / cellSizeRef.current)

    const matrixObj = { ...matrixRef.current }

    if (!matrixObj[y]) matrixObj[y] = {}
    matrixObj[y][x] === 1 ? (matrixObj[y][x] = 0) : (matrixObj[y][x] = 1)
    matrixRef.current = matrixObj

    setMatrix(matrixObj)
  }

  const _onPointerDown = useCallback((e: MouseEvent) => {
    e.preventDefault()
    isMouseDown.current = true
  }, [])

  const _onPointerUp = useCallback((e: MouseEvent) => {
    e.preventDefault()
    isMouseDown.current = false
    _fillGridOnClick(e)
    isDragging.current = false
  }, [])

  const _onPointerMove = useCallback((e: MouseEvent) => {
    e.preventDefault()
    if (!isMouseDown.current) return

    const x = e.movementX + dragRef.current.x
    const y = e.movementY + dragRef.current.y

    isDragging.current = Math.abs(x) > 5 || Math.abs(y) > 5

    if (!isDragging.current) return

    dragRef.current = { x, y }
    setDrag({ x, y })
  }, [])

  const _changeCanvasWidthAndHeightOnResize = useCallback(() => {
    const canvasSize = _getNewCanvasSize()
    setCanvasWidth(canvasSize.width)
    setCanvasHeight(canvasSize.height)
  }, [])

  const _getNewCanvasSize = () => {
    const canvasContainer = document.getElementById('canvas-container')
    const canvasContainerPadding = parseInt(window.getComputedStyle(canvasContainer).padding.replace('px', ''))

    const pixelWidth = canvasContainer.offsetWidth
    const pixelHeight = canvasContainer.offsetHeight
    const newCanvasWidth = pixelWidth - 2 * canvasContainerPadding
    const newCanvasHeight = pixelHeight - 2 * canvasContainerPadding

    const canvas = { width: newCanvasWidth, height: newCanvasHeight }

    return canvas
  }

  const _onWheelEvent = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    e.stopPropagation()

    const lastScale = scaleRef.current
    let scaleRefCopy = JSON.parse(JSON.stringify(scaleRef.current))

    scaleRefCopy += e.deltaY * -0.01

    // restrict scale
    scaleRefCopy = Math.min(Math.max(MIN_ZOOM, scaleRefCopy), MAX_ZOOM)
    scaleRef.current = scaleRefCopy

    const isZoomingIn = lastScale < scaleRefCopy
    const isZoomLimit = lastScale === scaleRefCopy

    if (isZoomLimit) return

    let cellSizeCopy = JSON.parse(JSON.stringify(cellSizeRef.current))

    if (isZoomingIn) cellSizeCopy *= 2
    else cellSizeCopy /= 2

    // limit cellsize
    const isCellSizeGreaterThanMaxLimit = cellSizeCopy > MAX_CELL_SIZE
    const isCellSizeLowerThanMinLimit = cellSizeCopy < MIN_CELL_SIZE

    if (isCellSizeGreaterThanMaxLimit) cellSizeCopy = MAX_CELL_SIZE
    else if (isCellSizeLowerThanMinLimit) cellSizeCopy = MIN_CELL_SIZE

    if (cellSizeCopy === cellSizeRef.current) return

    cellSizeRef.current = cellSizeCopy
    setCellSize(cellSizeCopy)
  }, [])

  return {
    canvasRef
  }
}
