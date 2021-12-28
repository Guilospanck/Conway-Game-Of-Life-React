import React from "react";
import { IUseControlsViewModel } from "../../viewModels/controlsViewModel";
import {
  ButtonsContainer,
  StartGameBTN, StopGameBTN, ResetGameBTN,
  SliderContainer, Slider, Dropdown
} from './styles';

import SpeedSVG from '../../../../assets/svg/velocity.svg';

type Props = {
  viewModel: IUseControlsViewModel
};

export const ControlsView = ({ viewModel }: Props) => {

  return (
    <ButtonsContainer>     
      <Dropdown
        id="seeds"
        name="seeds"
        onChange={(e) => viewModel.onSelectChange(e.target.value)}
        disabled={viewModel.gameStarted}
      >
        <option key={'Select-0'} value={'Select'} style={{ cursor: 'pointer' }}>
          SELECT AN INITIAL SEED
        </option>
        <option key={'Random-1'} value={'Random'} style={{ cursor: 'pointer' }}>
          RANDOM
        </option>
        {
          viewModel.SeedsNameArray.map((seed, index) => {
            return (
              <option key={index} value={seed} style={{ cursor: 'pointer' }}>
                {viewModel.SeedsNameToShowInTheScreen[seed].toUpperCase()}
              </option>
            )
          })
        }
      </Dropdown>
      <StartGameBTN onClick={(e) => viewModel.onClickStartGameBtn(e)} disabled={viewModel.gameStarted}>Start</StartGameBTN>
      <SliderContainer>
        <SpeedSVG width={30} />
        <Slider
          type={'range'}
          id="generationSpeed"
          name="generationSpeed"
          min={1}
          max={50}
          defaultValue={1}
          onChange={(e) => viewModel.onSliderPositionCallback(e)}
        />
      </SliderContainer>
      <StopGameBTN onClick={(e) => viewModel.onClickStopGameBtn(e)} disabled={!viewModel.gameStarted}>Stop</StopGameBTN>
      <ResetGameBTN onClick={(e) => viewModel.onClickResetGameBtn(e)}>Reset</ResetGameBTN>
    </ButtonsContainer>
  );

};