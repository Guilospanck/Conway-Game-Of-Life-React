import React from "react";

export const GameView = ({ GameGridComponent, ControlsComponent }) => {

  return (
    <>
      <GameGridComponent />
      <ControlsComponent />
    </>
  );
};