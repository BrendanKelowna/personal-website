import React from "react";
import AppArtical from "../AppArtical";
import TrainingItem from "./TrainingItem";

//* Types
export type TrainingProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Training({
  ...props
}: React.PropsWithChildren<TrainingProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Training">
      <TrainingItem
        title="Emergency First Aid & CPR, level C"
        date="February 21, 2014"
        exp="February 21, 2017"
      />
      <TrainingItem title="Respirator fit test" date="August 23, 2021" />
      <TrainingItem title="Ladder / Roof training" date="October 25, 2019" />
    </AppArtical>
  );
}
