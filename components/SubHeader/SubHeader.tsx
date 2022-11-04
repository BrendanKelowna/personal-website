import { Typography, TypographyProps } from "@mui/material";
import React from "react";

//* Types
export type SubHeaderProps = TypographyProps & {};

//* Definitions

//* Styling

//* Helpers

export default function SubHeader({
  style,
  ...props
}: React.PropsWithChildren<SubHeaderProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Typography sx={{ ...thisStyle, ...style }} {...props} />;
}
const thisStyle = { fontWeight: "bold" };
