import { Stack, StackProps } from "@mui/material";
import React from "react";

//* Types

//* Definitions

//* Styling

//* Helpers

export default function Inline({
  ...props
}: React.PropsWithChildren<StackProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Stack direction="row" {...props}></Stack>;
}
