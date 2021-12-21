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
  bgColor: string
}

export const Cell = styled.div<ICell>`
  width: 20px;
  height: 20px;
  background-color: ${props => props.bgColor};
`;