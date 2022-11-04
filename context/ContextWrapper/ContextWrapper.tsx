import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { primaryColor } from "../../personal-website";

//* Types
export type ContextWrapperProps = {};

//* Definitions
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: primaryColor,
    },
  },
});

//* Styling

//* Helpers

export default function ContextWrapper({
  children,
  ...props
}: React.PropsWithChildren<ContextWrapperProps>): JSX.Element {
  //* Context

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
