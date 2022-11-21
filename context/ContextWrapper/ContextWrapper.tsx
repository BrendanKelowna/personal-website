import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import startFirebaseApp from "../../configure/firebase";
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
const fbApp = startFirebaseApp();

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
