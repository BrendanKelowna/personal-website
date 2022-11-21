import { SxProps, Typography, TypographyProps } from "@mui/material";
import React from "react";

//* Types
export type ArticleDetailsProps = TypographyProps & React.PropsWithChildren<{}>;

//* Definitions

//* Styling

//* Helpers

export default function ArticleDetails({
  className,
  sx,
  ...props
}: React.PropsWithChildren<ArticleDetailsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return <Typography sx={{ pb: "10px", ...sx }} {...props} />;
}
