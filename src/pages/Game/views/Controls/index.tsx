import React from "react";
import { IUseControlsViewModel } from "../../viewModels/controlsViewModel";
import {
  ButtonsContainer,
  RandomInitializationBTN, StartGameBTN, StopGameBTN, ResetGameBTN,
  SliderContainer, Slider
} from './styles';

import SpeedSVG from '../../../../assets/svg/velocity.svg';

type Props = {
  viewModel: IUseControlsViewModel
};

export const ControlsView = ({ viewModel }: Props) => {

  return (
    <ButtonsContainer>
      <RandomInitializationBTN onClick={(e) => viewModel.onClickRandomBtn(e)} disabled={viewModel.gameStarted}>Get Random</RandomInitializationBTN>
      <StartGameBTN onClick={(e) => viewModel.onClickStartGameBtn(e)} disabled={viewModel.gameStarted}>Start</StartGameBTN>
      <SliderContainer>
        <SpeedSVG width={30} />
        <Slider
          type={'range'}
          id="generationSpeed"
          name="generationSpeed"
          min={0}
          max={100}
          defaultValue={0}
          onChange={(e) => viewModel.onSliderPositionCallback(e)}
        />
      </SliderContainer>
      <StopGameBTN onClick={(e) => viewModel.onClickStopGameBtn(e)} disabled={!viewModel.gameStarted}>Stop</StopGameBTN>
      <ResetGameBTN onClick={(e) => viewModel.onClickResetGameBtn(e)}>Reset</ResetGameBTN>
    </ButtonsContainer>
  );

};