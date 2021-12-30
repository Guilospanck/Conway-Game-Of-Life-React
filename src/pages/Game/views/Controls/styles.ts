import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
  gap: 1%;
  margin: 0 5%;

  @media(max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const StartGameBTN = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;

export const StopGameBTN = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;

export const ResetGameBTN = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;

export const CentralizeGameBTN = styled.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`

export const Slider = styled.input`
  outline: none;
`;

export const Dropdown = styled.select`
  width: 212px;
  height: 35px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: #027b2d;
  font-weight: bold;
  outline: none;

  &:disabled {
    opacity: 0.4;
    background: #efefefd4;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;
