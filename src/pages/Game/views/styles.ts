import styled from "styled-components";

const CELL_SIZE = `20px`;

interface IGrid {
  gridLength: number
}

export const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${props => props.gridLength}, ${CELL_SIZE});
  grid-template-rows: repeat(${props => props.gridLength}, ${CELL_SIZE});
  gap: 2.5px;
`;

interface ICell {
  live: number
}

export const Cell = styled.div<ICell>`
  width: ${CELL_SIZE};
  height: ${CELL_SIZE};
  background-color: ${props => props.live === 1 ? '#be8410' : '#b4b4b4'};
`;

export const RandomInitializationBTN = styled.button`
  outline: none;
  background: none;
  // border: none;
  cursor: pointer;
  border-radius: 5px;
`;