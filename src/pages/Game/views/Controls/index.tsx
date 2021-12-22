import React from "react";
import { IUseControlsViewModel } from "../../viewModels/controlsViewModel";
import {
  RandomInitializationBTN, StartGameBTN, StopGameBTN, ResetGameBTN
} from './styles';

import { Slider } from '../../../components/slider';

type Props = {
  viewModel: IUseControlsViewModel
};

const SliderMemoized = React.memo(Slider);

export const ControlsView = ({ viewModel }: Props) => {

  return (
    <>
      <RandomInitializationBTN onClick={(e) => viewModel.onClickRandomBtn(e)}>Get Random</RandomInitializationBTN>
      <StartGameBTN onClick={(e) => viewModel.onClickStartGameBtn(e)}>Start</StartGameBTN>
      <StopGameBTN onClick={(e) => viewModel.onClickStopGameBtn(e)}>Stop</StopGameBTN>
      <ResetGameBTN onClick={(e) => viewModel.onClickResetGameBtn(e)}>Reset</ResetGameBTN>
      <SliderMemoized positionCallback={viewModel.onSliderPositionCallback} />
    </>
  );

};