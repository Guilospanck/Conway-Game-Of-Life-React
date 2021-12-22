import styled from "styled-components";

export const Background = styled.div`
  width: 100px;
  height: 12px;
  border: 1px solid #d0cdcd;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

interface ISliderBtn {
  translated: number
}
export const SliderBtn = styled.button<ISliderBtn>`
  cursor: pointer;
  outline: none;
  border: 1px solid red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  transform: translateX(${props => props.translated}%)
`;