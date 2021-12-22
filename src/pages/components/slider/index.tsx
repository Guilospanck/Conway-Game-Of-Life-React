import React, { useEffect } from "react";
import { Background, SliderBtn } from "./styles";
import { useSliderViewModel } from "./viewModels/sliderViewModel";

export const Slider = ({ positionCallback }) => {

  const viewModel = useSliderViewModel();

  useEffect(() => {
    positionCallback(viewModel.sliderPosition);
  }, [viewModel.sliderPosition]);  

  return (
    <Background>
      <SliderBtn
        translated={viewModel.sliderPosition}
        onMouseDown={() => viewModel.onMouseDown()}
      />
    </Background>
  )
};
