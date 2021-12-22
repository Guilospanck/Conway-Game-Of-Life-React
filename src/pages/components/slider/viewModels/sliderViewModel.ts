import { useCallback, useEffect, useState } from "react";

export const useSliderViewModel = () => {
  const [sliderPosition, setSliderPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('mouseup', removeMouseUpListener, true);

    return function cleanup() {
      window.removeEventListener('mousemove', onMouseMove, true);
      window.removeEventListener('mouseup', removeMouseUpListener, true);
    }
  }, [])

  const removeMouseUpListener = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove, true);
  }, []);

  const onMouseDown = () => {
    window.addEventListener('mousemove', onMouseMove, true);
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    let newPos = sliderPosition + (e.x * 5);
    if(newPos > 415) newPos = 415;
    if(newPos < -10) newPos = -10;    
    setSliderPosition(newPos)
  }, []);

  return {
    onMouseDown,
    sliderPosition,
  };
  
};