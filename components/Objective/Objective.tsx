import { Stack } from "@mui/material";
import React from "react";
import AppArtical from "../AppArtical";

//* Types
export type ObjectiveProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Objective({
  ...props
}: React.PropsWithChildren<ObjectiveProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppArtical title="Carrer Objective">
      <Stack>
        To obtain a career in the Skilled Trades or Software Development
      </Stack>
    </AppArtical>
  );
}
