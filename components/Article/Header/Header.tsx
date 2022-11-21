import { Typography, TypographyProps } from "@mui/material";
import React from "react";

//* Types
export type ArticleHeaderProps = TypographyProps & {};

//* Definitions

//* Styling

//* Helpers

export default function ArticleHeader({
  style,
  ...props
}: React.PropsWithChildren<ArticleHeaderProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Typography sx={{ ...thisStyle, ...style }} {...props} />;
}
const thisStyle = { fontWeight: "bold" };
