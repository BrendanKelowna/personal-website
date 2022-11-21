import { Typography, TypographyProps } from "@mui/material";
import React from "react";

//* Types
export type ArticleSubHeaderProps = TypographyProps;

//* Definitions

//* Styling

//* Helpers

export default function ArticleSubHeader({
  sx,
  ...props
}: React.PropsWithChildren<ArticleSubHeaderProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Typography sx={{ fontStyle: "italic", ...sx }} {...props} />;
}
