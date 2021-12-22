import styled from "styled-components";

const CELL_SIZE = `20px`;
const GAP = `1px`;

export const Container = styled.div`
  display: flex;
  height: 600px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  background: #404040;
  border-radius: 5px;
`;

export const GridContainer = styled.div`
  overflow: hidden;  
`;

interface IGridTranslate {
  x: number
  y: number
}

interface IGrid {
  gridLength: number
  gridTranslate: IGridTranslate
}

export const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${props => props.gridLength}, ${CELL_SIZE});
  grid-template-rows: repeat(${props => props.gridLength}, ${CELL_SIZE});
  gap: ${GAP};
  transform: translate(${props => props.gridTranslate.x}px, ${props => props.gridTranslate.y}px)
`;

export const RowGrid = styled.div<IGrid>`
  display: inline-grid;
  grid-template-columns: repeat(${props => props.gridLength}, ${CELL_SIZE});
  // grid-template-rows: repeat(${props => props.gridLength}, ${CELL_SIZE});
  gap: ${GAP};
  margin-left: 20px;
`;

export const ColumnGrid = styled.div<IGrid>`
  display: inline-grid;
  // grid-template-columns: repeat(${props => props.gridLength}, ${CELL_SIZE});
  grid-template-rows: repeat(${props => props.gridLength}, ${CELL_SIZE});
  gap: ${GAP};
`;

interface ICell {
  live: number
}

export const Cell = styled.div<ICell>`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${props => props.live === 1 ? '#1310be' : '#b4b4b4'};
`;

export const EnumerationCell = styled.div`
  display: flex;
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;