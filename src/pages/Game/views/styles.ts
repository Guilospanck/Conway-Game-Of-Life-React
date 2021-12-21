import styled from "styled-components";

interface IGrid {
  gridLength: number
}

export const Grid = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(${props => props.gridLength}, 1fr);
  grid-template-rows: repeat(${props => props.gridLength}, 1fr);
  gap: 2.5px;
`;

interface ICell {
  live: number
}

export const Cell = styled.div<ICell>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.live === 1 ? 'red' : 'gray'};
`;

export const RandomInitializationBTN = styled.button`
  outline: none;
  background: none;
  // border: none;
  cursor: pointer;
  border-radius: 5px;
`;