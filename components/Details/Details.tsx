import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";

//* Types
export type DetailsProps = TypographyProps & React.PropsWithChildren<{}>;

//* Definitions

//* Styling

//* Helpers

export default function Details({
  className,
  ...props
}: React.PropsWithChildren<DetailsProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <Typography className={[className, styles.main].join(" ")} {...props} />
  );
}
